import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qzmzifxmavrvnhklnpxj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

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
