-- Contact attempts table for rate limiting
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contact_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  email TEXT NOT NULL,
  success BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for rate limit queries
CREATE INDEX IF NOT EXISTS idx_contact_attempts_ip_created 
  ON contact_attempts(ip_address, created_at);

CREATE INDEX IF NOT EXISTS idx_contact_attempts_email_created 
  ON contact_attempts(email, created_at);

-- Auto-cleanup old records (keep last 7 days)
-- Run this periodically or set up as a Supabase cron job
DELETE FROM contact_attempts 
WHERE created_at < NOW() - INTERVAL '7 days';

-- RLS policies (optional - for security)
ALTER TABLE contact_attempts ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert (for rate limiting)
CREATE POLICY "Service role can insert contact attempts" 
  ON contact_attempts 
  FOR INSERT 
  WITH CHECK (true);

-- Allow service role to read (for rate limiting checks)
CREATE POLICY "Service role can read contact attempts" 
  ON contact_attempts 
  FOR SELECT 
  USING (true);
