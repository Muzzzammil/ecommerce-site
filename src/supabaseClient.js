import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase credentials
const SUPABASE_URL = "https://yxitfrxokmtpijncinpj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4aXRmcnhva210cGlqbmNpbnBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NTM0MTksImV4cCI6MjA1NjMyOTQxOX0.SCZ8aVFNNlrHlBh037I4Q6Dydl8VyKtFJxewa7lJ4Lk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
