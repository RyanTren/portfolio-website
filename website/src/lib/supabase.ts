import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Debug logging
console.log('Environment variables check:');
console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'SET' : 'NOT SET');
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'SET' : 'NOT SET');
console.log('SUPABASE_SERVICE_ROLE_KEY:', serviceRoleKey ? 'SET' : 'NOT SET');

if (!supabaseUrl) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is required but not set');
}

if (!supabaseAnonKey) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is required but not set');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Only create admin client if service role key is available
export const supabaseAdmin = serviceRoleKey 
  ? createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null;

// Helper function to check if admin client is available
export function hasAdminAccess(): boolean {
  return !!supabaseAdmin;
}

// Log admin access status
if (!supabaseAdmin) {
  console.warn('⚠️ WARNING: Supabase admin client not available.');
  console.warn('Contact form submissions will not be stored in the database.');
  console.warn('Please add SUPABASE_SERVICE_ROLE_KEY to your environment variables.');
} else {
  console.log('✅ Supabase admin client configured successfully');
}
