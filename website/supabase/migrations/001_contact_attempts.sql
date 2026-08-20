-- Contact attempts table for rate limiting
-- Run this in your Supabase SQL Editor

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  email TEXT NOT NULL,
  success BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for rate limit queries (safe to re-run)
CREATE INDEX IF NOT EXISTS idx_contact_attempts_ip_created 
  ON contact_attempts(ip_address, created_at);

CREATE INDEX IF NOT EXISTS idx_contact_attempts_email_created 
  ON contact_attempts(email, created_at);

-- RLS policies (drop first if they exist, then recreate)
ALTER TABLE contact_attempts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role can insert contact attempts" ON contact_attempts;
CREATE POLICY "Service role can insert contact attempts" 
  ON contact_attempts 
  FOR INSERT 
  WITH CHECK (true);

DROP POLICY IF EXISTS "Service role can read contact attempts" ON contact_attempts;
CREATE POLICY "Service role can read contact attempts" 
  ON contact_attempts 
  FOR SELECT 
  USING (true);

-- ============================================
-- AUTO-CLEANUP CRON JOB
-- ============================================
-- Enable pg_cron extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Remove old cron job if it exists, then recreate
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM cron.job WHERE jobname = 'cleanup-contact-attempts') THEN
    PERFORM cron.unschedule('cleanup-contact-attempts');
  END IF;
END $$;

-- Create the cron job to clean up old records (daily at 2 AM UTC)
SELECT cron.schedule(
  'cleanup-contact-attempts',
  '0 2 * * *',
  $$
  DELETE FROM contact_attempts 
  WHERE created_at < NOW() - INTERVAL '7 days';
  $$
);

-- Verify: run this to check
-- SELECT * FROM cron.job;
