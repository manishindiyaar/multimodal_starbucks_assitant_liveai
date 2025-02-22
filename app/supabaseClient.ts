// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_APP_SUPABASE_URL; // Or VITE_SUPABASE_URL for Vite, NEXT_PUBLIC_SUPABASE_URL for Next.js
const supabaseAnonKey = process.env.VITE_APP_SUPABASE_ANON_KEY; // Or corresponding env var

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are required. Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);