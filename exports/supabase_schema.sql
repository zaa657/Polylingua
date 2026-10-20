-- ==============================================================================
-- POLYLINGUA: Skema Database Kosakata (Vocabularies) untuk Supabase
-- Project URL: https://supabase.com/dashboard/project/qzmzifxmavrvnhklnpxj
-- ==============================================================================

-- 1. Buat Tabel vocabularies
CREATE TABLE IF NOT EXISTS public.vocabularies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  language text NOT NULL,
  level text NOT NULL,
  word text NOT NULL,
  reading text,
  phonetic text,
  meaning_id text NOT NULL,
  part_of_speech text,
  category text,
  example_native text,
  example_phonetic text,
  example_translation text,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- 2. Index untuk kecepatan query filter bahasa, tingkatan, & kategori
CREATE INDEX IF NOT EXISTS idx_vocab_language ON public.vocabularies(language);
CREATE INDEX IF NOT EXISTS idx_vocab_level ON public.vocabularies(level);
CREATE INDEX IF NOT EXISTS idx_vocab_category ON public.vocabularies(category);

-- 3. Aktifkan Row Level Security (RLS)
ALTER TABLE public.vocabularies ENABLE ROW LEVEL SECURITY;

-- 4. Berikan akses baca (SELECT) kepada publik / aplikasi
CREATE POLICY "Allow public read access on vocabularies"
ON public.vocabularies
FOR SELECT
TO public
USING (true);

-- 5. Berikan akses insert/update/delete untuk service_role / authenticated jika diperlukan
CREATE POLICY "Allow authenticated insert on vocabularies"
ON public.vocabularies
FOR INSERT
TO authenticated, service_role
WITH CHECK (true);
