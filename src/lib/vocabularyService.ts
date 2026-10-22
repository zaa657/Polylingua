import { supabase, SupabaseVocabulary } from './supabase';
import { Language, VocabularyItem, VocabularyPartOfSpeech } from '@/types/learning';
import { getVocabulary } from '@/data';

const CJK_REGEX = /[\u4e00-\u9fff]/;
const CJK_KANA_HANGUL_REGEX = /[\u3040-\u30ff\u4e00-\u9fff\uac00-\ud7af]/;
const SYNTHETIC_MEANING_REGEX = /#\d+|\((advanced|applied|fundamental|practical|academic|international|strategic|core|innovative|essential)\)/i;
const SYNTHETIC_NUMBERED_WORD_REGEX = /\s+\d+$/;

const CATEGORY_NORMALIZATION_MAP: Record<string, string> = {
  'Salam & Percakapan': 'Salam & Percakapan',
  'Salam & Sapaan': 'Salam & Percakapan',
  'Percakapan Umum': 'Salam & Percakapan',
  'Kesantunan': 'Salam & Percakapan',
  'Keluarga & Relasi': 'Keluarga & Relasi',
  'Keluarga & Hubungan': 'Keluarga & Relasi',
  'Keluarga & Kerabat': 'Keluarga & Relasi',
  'Keluarga & Kekerabatan': 'Keluarga & Relasi',
  'Teman & Sosial': 'Keluarga & Relasi',
  'Angka & Waktu': 'Angka & Waktu',
  'Waktu, Hari & Angka': 'Angka & Waktu',
  'Waktu & Hari': 'Angka & Waktu',
  'Waktu & Tanggal': 'Angka & Waktu',
  'Waktu & Kalender': 'Angka & Waktu',
  'Angka & Hitungan': 'Angka & Waktu',
  'Makanan & Minuman': 'Makanan & Minuman',
  'Makanan & Restoran': 'Makanan & Minuman',
  'Makanan & Kuliner': 'Makanan & Minuman',
  'Minuman & Kafe': 'Makanan & Minuman',
  'Buah & Camilan': 'Makanan & Minuman',
  'Sayur & Bumbu Dapur': 'Makanan & Minuman',
  'Rumah & Keseharian': 'Rumah & Keseharian',
  'Aksi Harian': 'Rumah & Keseharian',
  'Aktivitas Sehari-hari': 'Rumah & Keseharian',
  'Keseharian & Asrama': 'Rumah & Keseharian',
  'Rumah & Perlengkapan': 'Rumah & Keseharian',
  'Rumah & Bangunan': 'Rumah & Keseharian',
  'Perabot & Ruangan': 'Rumah & Keseharian',
  'Peralatan Dapur': 'Rumah & Keseharian',
  'Pakaian & Fashion': 'Rumah & Keseharian',
  'Pakaian & Aksesoris': 'Rumah & Keseharian',
  'Transportasi & Perjalanan': 'Transportasi & Perjalanan',
  'Transportasi & Arah': 'Transportasi & Perjalanan',
  'Transportasi & Jalan': 'Transportasi & Perjalanan',
  'Kendaraan & Mesin': 'Transportasi & Perjalanan',
  'Stasiun & Bandara': 'Transportasi & Perjalanan',
  'Perjalanan & Wisata': 'Transportasi & Perjalanan',
  'Wisata & Rekreasi': 'Transportasi & Perjalanan',
  'Hotel & Akomodasi': 'Transportasi & Perjalanan',
  'Tempat & Arah': 'Transportasi & Perjalanan',
  'Pendidikan & Kampus': 'Pendidikan & Kampus',
  'Akademik & Kampus': 'Pendidikan & Kampus',
  'Kampus & Pendidikan': 'Pendidikan & Kampus',
  'Pendidikan & Sekolah': 'Pendidikan & Kampus',
  'Kampus & Kuliah': 'Pendidikan & Kampus',
  'Fakultas & Jurusan': 'Pendidikan & Kampus',
  'Ruang Kelas & Belajar': 'Pendidikan & Kampus',
  'Buku & Kepustakaan': 'Pendidikan & Kampus',
  'Ujian & Prestasi': 'Pendidikan & Kampus',
  'Beasiswa & Finansial': 'Pendidikan & Kampus',
  'Kesehatan & Tubuh': 'Kesehatan & Tubuh',
  'Tubuh & Fisik': 'Kesehatan & Tubuh',
  'Kesehatan & Medis': 'Kesehatan & Tubuh',
  'Penyakit & Gejala': 'Kesehatan & Tubuh',
  'Obat & Farmasi': 'Kesehatan & Tubuh',
  'Olahraga & Kebugaran': 'Kesehatan & Tubuh',
  'Perasaan & Sifat': 'Perasaan & Sifat',
  'Kata Sifat & Keadaan': 'Perasaan & Sifat',
  'Emosi & Karakter': 'Perasaan & Sifat',
  'Emosi & Perasaan': 'Perasaan & Sifat',
  'Sifat & Karakter': 'Perasaan & Sifat',
  'Sifat & Watak': 'Perasaan & Sifat',
  'Belanja & Ekonomi': 'Belanja & Ekonomi',
  'Belanja & Transaksi': 'Belanja & Ekonomi',
  'Ekonomi & Bisnis': 'Belanja & Ekonomi',
  'Bisnis & Ekonomi': 'Belanja & Ekonomi',
  'Bisnis & Perdagangan': 'Belanja & Ekonomi',
  'Uang & Perbankan': 'Belanja & Ekonomi',
  'Teknologi & Digital': 'Teknologi & Digital',
  'Komunikasi & Digital': 'Teknologi & Digital',
  'Komunikasi & Media': 'Teknologi & Digital',
  'Media Sosial & Internet': 'Teknologi & Digital',
  'Media Sosial & Chat': 'Teknologi & Digital',
  'Komputer & Teknologi': 'Teknologi & Digital',
  'Software & Aplikasi': 'Teknologi & Digital',
  'Internet & Jaringan': 'Teknologi & Digital',
  'Sains & Teknologi': 'Teknologi & Digital',
  'Pekerjaan & Karir': 'Pekerjaan & Karir',
  'Pekerjaan & Profesi': 'Pekerjaan & Karir',
  'Karir & Profesional': 'Pekerjaan & Karir',
  'Profesi & Karir': 'Pekerjaan & Karir',
  'Kantor & Manajemen': 'Pekerjaan & Karir',
  'Alam & Lingkungan': 'Alam & Lingkungan',
  'Lingkungan & Alam': 'Alam & Lingkungan',
  'Cuaca & Musim': 'Alam & Lingkungan',
  'Cuaca & Iklim': 'Alam & Lingkungan',
  'Hewan & Fauna': 'Alam & Lingkungan',
  'Tanaman & Flora': 'Alam & Lingkungan',
  'Tumbuhan & Flora': 'Alam & Lingkungan',
  'Warna & Corak': 'Alam & Lingkungan',
  'Penelitian & Riset': 'Penelitian & Riset',
  'Akademik & Penelitian': 'Penelitian & Riset',
  'Laboratorium & Alat': 'Penelitian & Riset',
  'Hukum & Keamanan': 'Hukum & Keamanan',
  'Hukum & Politik': 'Hukum & Keamanan',
  'Hukum & Aturan': 'Hukum & Keamanan',
  'Keamanan & Polisi': 'Hukum & Keamanan',
  'Idiom & Budaya': 'Idiom & Budaya',
  'Idiom & Peribahasa': 'Idiom & Budaya',
  'Seni & Budaya': 'Idiom & Budaya',
  'Budaya & Tradisi': 'Idiom & Budaya',
  'Seni & Pertunjukan': 'Idiom & Budaya',
  'Musik & Suara': 'Idiom & Budaya',
  'Hobi & Hiburan': 'Idiom & Budaya',
};

export function normalizeVocabularyCategory(category?: string): string {
  if (!category) return 'Umum';
  const trimmed = category.trim();
  return CATEGORY_NORMALIZATION_MAP[trimmed] || trimmed;
}

export function getLevelRank(level: string): number {
  const normalized = (level || '').trim().toUpperCase();
  if (normalized.startsWith('HSK')) {
    const match = normalized.match(/\d+/);
    return match ? parseInt(match[0], 10) : 99;
  }
  if (normalized.includes('JLPT')) {
    if (normalized.includes('N5')) return 1;
    if (normalized.includes('N4')) return 2;
    if (normalized.includes('N3')) return 3;
    if (normalized.includes('N2')) return 4;
    if (normalized.includes('N1')) return 5;
  }
  if (normalized.includes('TOPIK')) {
    if (normalized.includes('TOPIK 1') || normalized.includes('L1')) return 1;
    if (normalized.includes('L2')) return 2;
    if (normalized.includes('L3')) return 3;
    if (normalized.includes('L4')) return 4;
    if (normalized.includes('L5')) return 5;
    if (normalized.includes('L6')) return 6;
    return 2;
  }
  if (normalized.startsWith('A1') || normalized === 'TINGKAT 1' || normalized === 'PEMULA') return 1;
  if (normalized.startsWith('A2') || normalized === 'TINGKAT 2' || normalized === 'DASAR') return 2;
  if (normalized.startsWith('B1') || normalized === 'TINGKAT 3' || normalized === 'MENENGAH') return 3;
  if (normalized.startsWith('B2') || normalized === 'TINGKAT 4' || normalized === 'MENENGAH ATAS') return 4;
  if (normalized.startsWith('C1') || normalized === 'LANJUTAN') return 5;
  if (normalized.startsWith('C2')) return 6;
  return 50;
}

export function sortVocabularyItems(items: VocabularyItem[]): VocabularyItem[] {
  return [...items].sort((a, b) => {
    const rankDiff = getLevelRank(a.level) - getLevelRank(b.level);
    if (rankDiff !== 0) return rankDiff;
    return 0;
  });
}

function isValidSupabaseRecord(item: SupabaseVocabulary, language: Language): boolean {
  const word = (item.word || '').trim();
  const meaning = (item.meaning_id || '').trim();
  const phonetic = (item.phonetic || item.reading || '').trim();
  const exPhonetic = (item.example_phonetic || '').trim();
  const notes = (item.notes || '').trim();

  if (!word || !meaning || !phonetic) return false;
  if (SYNTHETIC_NUMBERED_WORD_REGEX.test(word)) return false;
  if (SYNTHETIC_MEANING_REGEX.test(meaning)) return false;
  if (notes.startsWith('Kosakata tingkat ') && notes.includes(' dalam domain ')) return false;

  if (language === 'chinese') {
    if (CJK_REGEX.test(phonetic)) return false;
    if (exPhonetic && CJK_REGEX.test(exPhonetic)) return false;
    if (CJK_REGEX.test(meaning)) return false;
  } else if (language === 'japanese' || language === 'korean') {
    if (CJK_KANA_HANGUL_REGEX.test(meaning)) return false;
    if (CJK_REGEX.test(phonetic)) return false;
  }

  return true;
}

/**
 * Fetch total count of vocabulary items for a given language directly from Supabase.
 */
export async function fetchVocabularyCountForLanguage(language: Language): Promise<number> {
  try {
    const vocab = await fetchVocabulariesForLanguage(language);
    if (vocab.length > 0) {
      return vocab.length;
    }
  } catch (err) {
    console.warn('Failed to fetch vocabulary count from Supabase:', err);
  }
  return getVocabulary(language).length;
}

/**
 * Fetch all vocabulary items for a given language.
 */
export async function fetchVocabulariesForLanguage(language: Language): Promise<VocabularyItem[]> {
  try {
    const batchSize = 1000;
    const maxBatches = 8; // Supports up to 8,000 vocabulary words per language (e.g. 5,400 HSK words)
    const batchPromises = [];

    for (let b = 0; b < maxBatches; b++) {
      const start = b * batchSize;
      const end = start + batchSize - 1;
      batchPromises.push(
        supabase
          .from('vocabularies')
          .select('*')
          .eq('language', language)
          .order('created_at', { ascending: true })
          .range(start, end)
      );
    }

    const results = await Promise.all(batchPromises);
    const combinedData: SupabaseVocabulary[] = [];

    for (const res of results) {
      if (res.data && res.data.length > 0) {
        combinedData.push(...res.data);
      }
    }

    const validRecords = combinedData.filter((item) => isValidSupabaseRecord(item, language));

    if (validRecords.length === 0) {
      const localItems = getVocabulary(language).map((v) => ({
        ...v,
        category: normalizeVocabularyCategory(v.category),
      }));
      return sortVocabularyItems(localItems);
    }

    const seenWords = new Set<string>();
    const mappedItems: VocabularyItem[] = [];

    for (let idx = 0; idx < validRecords.length; idx++) {
      const item = validRecords[idx];
      const cleanWord = item.word.trim();
      if (seenWords.has(cleanWord)) continue;
      seenWords.add(cleanWord);

      const cleanPhonetic = (item.phonetic || item.reading || '').trim();
      const rawReading = (item.reading || '').trim();
      const hasDistinctReading =
        language === 'japanese' &&
        rawReading.length > 0 &&
        rawReading !== cleanWord &&
        rawReading !== cleanPhonetic;

      const normalizedCat = normalizeVocabularyCategory(item.category);

      mappedItems.push({
        id: item.id || `${language}-voc-${idx + 1}`,
        languageId: item.language as Language,
        word: cleanWord,
        reading: hasDistinctReading ? rawReading : undefined,
        phonetic: cleanPhonetic,
        meaningId: item.meaning_id.trim(),
        partOfSpeech: (item.part_of_speech || 'noun') as VocabularyPartOfSpeech,
        level: item.level.trim(),
        category: normalizedCat,
        exampleNative: (item.example_native || '').trim(),
        examplePhonetic: (item.example_phonetic || '').trim(),
        exampleTranslation: (item.example_translation || '').trim(),
        notes: (item.notes || '').trim(),
        tags: [language, normalizedCat.toLowerCase()],
      });
    }

    return sortVocabularyItems(mappedItems);
  } catch (err) {
    console.warn('Supabase vocabulary fetch error, falling back to local dataset:', err);
    const localItems = getVocabulary(language).map((v) => ({
      ...v,
      category: normalizeVocabularyCategory(v.category),
    }));
    return sortVocabularyItems(localItems);
  }
}
