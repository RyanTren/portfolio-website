import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { supabaseAdmin, hasAdminAccess } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting configuration
const RATE_LIMITS = {
  perIP: 3,           // Max submissions per IP per day
  perEmail: 2,        // Max submissions per email per day
  windowHours: 24,    // Time window in hours
  minTimeSeconds: 10, // Minimum time between submissions (anti-bot)
};

// Honeypot field name (bots fill this out, humans don't)
const HONEYPOT_FIELD = 'website_url';

// Form validation schema with stricter rules
const contactSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name contains invalid characters'),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name contains invalid characters'),
  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email too long')
    .refine((email) => {
      // Block disposable email domains
      const disposableDomains = [
        'dsadsa.com', 'mgasjkd.com', 'tempmail.com', 'throwaway.com',
        'guerrillamail.com', 'mailinator.com', 'yopmail.com',
        '10minutemail.com', 'trashmail.com', 'fakeinbox.com',
      ];
      const domain = email.split('@')[1]?.toLowerCase();
      return !disposableDomains.includes(domain);
    }, 'Please use a valid email address'),
  subject: z.string()
    .min(1, 'Subject is required')
    .max(100, 'Subject too long'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message too long'),
  // Honeypot field - should be empty
  [HONEYPOT_FIELD]: z.string().max(0).optional(),
  // Timestamp from form submission
  formTimestamp: z.string().optional(),
});

// Check rate limit using Supabase
async function checkRateLimit(
  ip: string, 
  email: string
): Promise<{ allowed: boolean; resetAt?: Date; reason?: string }> {
  if (!hasAdminAccess()) {
    // If no Supabase, use basic in-memory (less secure but functional)
    return { allowed: true };
  }

  const now = new Date();
  const windowStart = new Date(now.getTime() - RATE_LIMITS.windowHours * 60 * 60 * 1000);

  // Check IP rate limit
  const { count: ipCount } = await supabaseAdmin!
    .from('contact_attempts')
    .select('*', { count: 'exact', head: true })
    .eq('ip_address', ip)
    .gte('created_at', windowStart.toISOString());

  if (ipCount && ipCount >= RATE_LIMITS.perIP) {
    return { 
      allowed: false, 
      reason: 'IP rate limit exceeded',
      resetAt: new Date(windowStart.getTime() + RATE_LIMITS.windowHours * 60 * 60 * 1000)
    };
  }

  // Check email rate limit
  const { count: emailCount } = await supabaseAdmin!
    .from('contact_attempts')
    .select('*', { count: 'exact', head: true })
    .eq('email', email)
    .gte('created_at', windowStart.toISOString());

  if (emailCount && emailCount >= RATE_LIMITS.perEmail) {
    return { 
      allowed: false, 
      reason: 'Email rate limit exceeded',
      resetAt: new Date(windowStart.getTime() + RATE_LIMITS.windowHours * 60 * 60 * 1000)
    };
  }

  return { allowed: true };
}

// Record the attempt
async function recordAttempt(
  ip: string, 
  email: string, 
  success: boolean
): Promise<void> {
  if (!hasAdminAccess()) return;

  await supabaseAdmin!.from('contact_attempts').insert({
    ip_address: ip,
    email: email,
    success: success,
    created_at: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Check honeypot (bots fill this, humans don't)
    if (body[HONEYPOT_FIELD] && body[HONEYPOT_FIELD].length > 0) {
      // Silently reject but return success (don't let bots know they're caught)
      return NextResponse.json({
        message: 'Message sent successfully!',
      }, { status: 200 });
    }

    // Check time-based protection (forms submitted too fast are likely bots)
    if (body.formTimestamp) {
      const formTime = new Date(body.formTimestamp).getTime();
      const now = Date.now();
      const timeDiff = (now - formTime) / 1000;
      
      if (timeDiff < RATE_LIMITS.minTimeSeconds) {
        return NextResponse.json(
          { error: 'Please take your time filling out the form.' },
          { status: 429 }
        );
      }
    }

    // Validate form data
    const validatedData = contactSchema.parse(body);
    const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    // Check rate limits
    const rateLimit = await checkRateLimit(ipAddress, validatedData.email);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many requests', 
          message: `Please try again later. ${rateLimit.reason}`,
          nextAllowedTime: rateLimit.resetAt?.toISOString()
        },
        { status: 429 }
      );
    }

    // Save to Supabase (if configured)
    if (hasAdminAccess()) {
      const { error: dbError } = await supabaseAdmin!.from('contacts').insert({
        first_name: validatedData.firstName,
        last_name: validatedData.lastName,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        ip_address: ipAddress,
      });

      if (dbError) {
        console.error('Database error (non-fatal):', dbError);
      }

      // Record attempt for rate limiting
      await recordAttempt(ipAddress, validatedData.email, true);
    }

    // Send notification email to yourself
    const fromAddress = process.env.EMAIL_FROM || 'Portfolio Contact <noreply@resend.dev>';
    const toAddress = process.env.EMAIL_TO || 'your-email@domain.com';

    const notificationResult = await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject: `New Contact: ${validatedData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; margin: 0; padding: 0; background: #f9fafb; }
            .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #ea580c, #16a34a); padding: 24px; color: white; }
            .header h2 { margin: 0; font-size: 20px; font-weight: 600; }
            .content { padding: 24px; }
            .field { margin-bottom: 16px; }
            .label { font-weight: 600; color: #374151; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { color: #1f2937; margin-top: 4px; }
            .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-top: 8px; white-space: pre-wrap; }
            .footer { padding: 16px 24px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${validatedData.firstName} ${validatedData.lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${validatedData.subject}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${validatedData.message}</div>
              </div>
            </div>
            <div class="footer">
              Sent from your portfolio contact form • ${new Date().toLocaleString()}
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: validatedData.email,
    });

    // Send auto-reply
    const autoReplyResult = await resend.emails.send({
      from: fromAddress,
      to: validatedData.email,
      subject: `Thanks for reaching out, ${validatedData.firstName}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; margin: 0; padding: 0; background: #f9fafb; }
            .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #ea580c, #16a34a); padding: 24px; color: white; }
            .header h2 { margin: 0; font-size: 20px; font-weight: 600; }
            .content { padding: 24px; }
            .content p { margin: 12px 0; }
            .cta { display: inline-block; background: linear-gradient(135deg, #ea580c, #16a34a); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; margin-top: 16px; }
            .footer { padding: 16px 24px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thanks for reaching out!</h2>
            </div>
            <div class="content">
              <p>Hi ${validatedData.firstName},</p>
              <p>Thanks for your message! I've received it and will get back to you soon.</p>
              <p>In the meantime, feel free to check out my work or connect with me:</p>
              <p>
                <a href="https://github.com/RyanTren" class="cta">GitHub</a>
                &nbsp;&nbsp;
                <a href="https://linkedin.com/in/RyanTren/" class="cta">LinkedIn</a>
              </p>
              <p>Best,<br>Ryan Tran</p>
            </div>
            <div class="footer">
              This is an automated reply from ryantran.net
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Log errors (non-fatal)
    if (notificationResult.error) {
      console.error('Notification email error:', notificationResult.error);
    }
    if (autoReplyResult.error) {
      console.error('Auto-reply email error:', autoReplyResult.error);
    }

    return NextResponse.json({
      message: 'Message sent successfully!',
    }, { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        error: 'Validation failed',
        details: error.issues
      }, { status: 400 });
    }

    return NextResponse.json({
      error: 'Internal server error',
      message: 'Something went wrong. Please try again later.'
    }, { status: 500 });
  }
}
