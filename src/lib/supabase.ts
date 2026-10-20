import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qzmzifxmavrvnhklnpxj.supabase.co';

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6bXppZnhtYXZydm5oa2xucHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0OTE3MjAsImV4cCI6MjEwODA2NzcyMH0.qIBMpX5PqOWRlutTMGVelYq0XGb6Pl5J1ATP6hfir38';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SupabaseVocabulary {
  id?: string;
  language: string;
  level: string;
  word: string;
  reading?: string;
  phonetic?: string;
  meaning_id: string;
  part_of_speech?: string;
  category?: string;
  example_native?: string;
  example_phonetic?: string;
  example_translation?: string;
  notes?: string;
  created_at?: string;
}
