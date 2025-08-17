import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin, hasAdminAccess } from '@/lib/supabase';

// Form validation schema (with max lengths added)
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Invalid email address').max(255),
  subject: z.string().min(1, 'Subject is required').max(200),
  message: z.string().min(5, 'Message must be at least 5 characters').max(2000),
});

// Rate limiting configuration
const RATE_LIMIT_DAILY = 1; // 1 submission per day
const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    const ipAddress = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || 'Unknown';

    // Check if admin access is available
    if (!hasAdminAccess()) {
      console.warn('Contact form submission received but admin access not available');
      // Return success but log that data wasn't stored
      return NextResponse.json({ 
        message: 'Message received! (Note: Database storage not available)', 
        nextAllowedTime: new Date(Date.now() + RATE_LIMIT_WINDOW).toISOString() 
      }, { status: 200 });
    }

    // Check rate limiting
    const rateLimitResult = await checkRateLimit(ipAddress, validatedData.email);
    if (!rateLimitResult.allowed) {
      return NextResponse.json({
        error: 'Rate limit exceeded',
        message: `You can only submit one message per day. Try again after ${rateLimitResult.nextAllowedTime}`,
        nextAllowedTime: rateLimitResult.nextAllowedTime
      }, { status: 429 });
    }

    // Store contact submission
    const { error: contactError } = await supabaseAdmin!.from('contacts').insert({
      first_name: validatedData.firstName,
      last_name: validatedData.lastName,
      email: validatedData.email,
      subject: validatedData.subject,
      message: validatedData.message,
      ip_address: ipAddress,
      user_agent: userAgent,
    });

    if (contactError) {
      console.error('Database error:', contactError);
      return NextResponse.json({
        error: 'Failed to save contact form',
        message: 'Your message was received but could not be saved. Please try again later.'
      }, { status: 500 });
    }

    // Update rate limiting
    await updateRateLimit(ipAddress, validatedData.email);

    return NextResponse.json({
      message: 'Message sent successfully!',
      nextAllowedTime: new Date(Date.now() + RATE_LIMIT_WINDOW).toISOString()
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

// Helper function to get client IP address
function getClientIP(request: NextRequest): string {
  // Check for forwarded headers (common with proxies)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  // Check for real IP header
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  
  // Fallback to unknown if no IP header found
  return 'unknown';
}

// Check rate limiting
async function checkRateLimit(ipAddress: string, email: string): Promise<{
  allowed: boolean;
  nextAllowedTime?: string;
}> {
  try {
    // Get current attempts for this IP/email combination
    const { data: attempts, error } = await supabaseAdmin!
      .from('contact_attempts')
      .select('*')
      .eq('ip_address', ipAddress)
      .eq('email', email)
      .single();
    
    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
      console.error('Rate limit check error:', error);
      return { allowed: true }; // Allow if we can't check
    }
    
    if (!attempts) {
      return { allowed: true }; // First time user
    }
    
    const now = new Date();
    const lastAttempt = new Date(attempts.last_attempt);
    const timeSinceLastAttempt = now.getTime() - lastAttempt.getTime();
    
    // If within rate limit window and already at limit
    if (timeSinceLastAttempt < RATE_LIMIT_WINDOW && attempts.attempt_count >= RATE_LIMIT_DAILY) {
      const nextAllowed = new Date(lastAttempt.getTime() + RATE_LIMIT_WINDOW);
      return { 
        allowed: false, 
        nextAllowedTime: nextAllowed.toISOString() 
      };
    }
    
    // If outside rate limit window, reset
    if (timeSinceLastAttempt >= RATE_LIMIT_WINDOW) {
      return { allowed: true };
    }
    
    return { allowed: true };
    
  } catch (error) {
    console.error('Rate limit check error:', error);
    return { allowed: true }; // Allow if we can't check
    }
}

// Update rate limiting
async function updateRateLimit(ipAddress: string, email: string): Promise<void> {
  try {
    const { data: existing } = await supabaseAdmin!
      .from('contact_attempts')
      .select('*')
      .eq('ip_address', ipAddress)
      .eq('email', email)
      .single();
    
    if (existing) {
      // Update existing record
      const now = new Date();
      const timeSinceLastAttempt = now.getTime() - new Date(existing.last_attempt).getTime();
      
      if (timeSinceLastAttempt >= RATE_LIMIT_WINDOW) {
        // Reset if outside window
        await supabaseAdmin!
          .from('contact_attempts')
          .update({
            attempt_count: 1,
            last_attempt: now.toISOString(),
          })
          .eq('id', existing.id);
      } else {
        // Increment within window
        await supabaseAdmin!
          .from('contact_attempts')
          .update({
            attempt_count: existing.attempt_count + 1,
            last_attempt: now.toISOString(),
          })
          .eq('id', existing.id);
      }
    } else {
      // Create new record
      await supabaseAdmin!
        .from('contact_attempts')
        .insert({
          ip_address: ipAddress,
          email: email,
          attempt_count: 1,
          last_attempt: new Date().toISOString(),
        });
    }
  } catch (error) {
    console.error('Rate limit update error:', error);
  }
}
