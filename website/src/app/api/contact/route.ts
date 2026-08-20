import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { supabaseAdmin, hasAdminAccess } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiting (resets on cold start, good enough for portfolio)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; resetAt?: Date } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  
  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + 24 * 60 * 60 * 1000 });
    return { allowed: true, resetAt: new Date(now + 24 * 60 * 60 * 1000) };
  }
  
  if (record.count >= 3) {
    return { allowed: false, resetAt: new Date(record.resetAt) };
  }
  
  record.count++;
  return { allowed: true, resetAt: new Date(record.resetAt) };
}

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Invalid email address').max(255),
  subject: z.string().min(1, 'Subject is required').max(200),
  message: z.string().min(5, 'Message must be at least 5 characters').max(2000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    const ipAddress = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    // Rate limit check
    const rateLimit = checkRateLimit(ipAddress);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          error: 'Too many requests', 
          message: `You can only submit 3 messages per day. Try again after ${rateLimit.resetAt?.toISOString()}`,
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
        // Continue even if DB fails - email is priority
      }
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

    // Send auto-reply to the person who contacted you
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
              This is an automated reply from ryantran.dev
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Log any email errors (non-fatal)
    if (notificationResult.error) {
      console.error('Notification email error:', notificationResult.error);
    }
    if (autoReplyResult.error) {
      console.error('Auto-reply email error:', autoReplyResult.error);
    }

    return NextResponse.json({
      message: 'Message sent successfully!',
      nextAllowedTime: rateLimit.resetAt?.toISOString()
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
