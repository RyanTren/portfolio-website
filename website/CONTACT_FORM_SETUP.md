# Contact Form Backend Setup Guide

This guide will help you set up the complete contact form backend with Supabase integration and rate limiting.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install @supabase/supabase-js zod
```

### 2. Set Up Supabase

#### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Note down your project URL and API keys

#### Set Up Database Tables
1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase-setup.sql`
4. Run the script

### 3. Configure Environment Variables
1. Copy `env.example` to `.env.local`
2. Fill in your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 4. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Submit a test message
4. Check your Supabase dashboard to see the submission

## 🏗️ Architecture Overview

```
Frontend Form → API Route → Validation → Rate Limiting → Supabase → Success Response
```

### Components
- **`/api/contact/route.ts`** - API endpoint with validation and rate limiting
- **`/components/contact-form.tsx`** - Enhanced form component with state management
- **`/lib/supabase.ts`** - Supabase client configuration

### Database Tables
- **`contacts`** - Stores form submissions
- **`contact_attempts`** - Tracks rate limiting per IP/email

## 🔒 Security Features

### Rate Limiting
- **1 submission per day** per IP address and email combination
- Automatic reset after 24 hours
- IP address and user agent tracking

### Input Validation
- Server-side validation using Zod
- Field length limits
- Email format validation

### Row Level Security (RLS)
- Tables only allow inserts and updates
- No read access to prevent data exposure
- Secure API key handling

## 📊 Monitoring and Analytics

### View Submissions
- Check `contacts` table in Supabase dashboard
- Use `contact_analytics` view for daily statistics

### Rate Limit Monitoring
- Monitor `contact_attempts` table
- Track blocked submissions

## 🚨 Troubleshooting

### Common Issues

#### "Cannot find module '@supabase/supabase-js'"
```bash
npm install @supabase/supabase-js
```

#### "Invalid API key" Error
- Check your `.env.local` file
- Verify API keys in Supabase dashboard
- Ensure environment variables are loaded

#### Rate Limiting Not Working
- Check `contact_attempts` table exists
- Verify RLS policies are enabled
- Check API route logs for errors

#### Form Not Submitting
- Check browser console for errors
- Verify API route is accessible at `/api/contact`
- Check Supabase connection

### Debug Mode
Add logging to your API route:
```typescript
console.log('Request body:', body);
console.log('IP address:', ipAddress);
console.log('Rate limit result:', rateLimitResult);
```

## 🔧 Customization

### Change Rate Limit
Modify in `route.ts`:
```typescript
const RATE_LIMIT_DAILY = 3; // Change to 3 per day
const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000; // 24 hours
```

### Add Email Notifications
Uncomment and configure in `route.ts`:
```typescript
// await sendEmailNotification(validatedData);
```

### Modify Form Fields
Update the schema in `route.ts` and the form component accordingly.

## 📈 Performance Optimization

### Database Indexes
- Already configured for optimal query performance
- Monitor query performance in Supabase dashboard

### Caching
- Consider adding Redis for advanced rate limiting
- Implement CDN for static assets

## 🚀 Deployment

### Vercel
1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
- Ensure environment variables are set
- Verify Supabase connection from production
- Test rate limiting in production

## 📝 API Reference

### POST /api/contact

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "subject": "Project Discussion",
  "message": "I'd like to discuss a project..."
}
```

**Success Response (200):**
```json
{
  "message": "Message sent successfully!",
  "nextAllowedTime": "2024-01-02T10:00:00.000Z"
}
```

**Rate Limit Response (429):**
```json
{
  "error": "Rate limit exceeded",
  "message": "You can only submit 1 contact form per day. Please try again tomorrow.",
  "nextAllowedTime": "2024-01-02T10:00:00.000Z"
}
```

## 🤝 Support

If you encounter issues:
1. Check the troubleshooting section
2. Review Supabase logs
3. Check browser console for errors
4. Verify environment variables are loaded

## 🔄 Updates and Maintenance

### Regular Tasks
- Monitor rate limiting effectiveness
- Clean old rate limit records (automatic with cron job)
- Review and update security policies

### Future Enhancements
- Email notifications
- CAPTCHA integration
- Advanced analytics dashboard
- Webhook notifications
