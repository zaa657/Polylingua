import { supabase, SupabaseVocabulary } from './supabase';
import { Language, VocabularyItem, VocabularyPartOfSpeech } from '@/types/learning';
import { getVocabulary } from '@/data';

/**
 * Fetch total count of vocabulary items for a given language directly from Supabase.
 */
export async function fetchVocabularyCountForLanguage(language: Language): Promise<number> {
  try {
    const { count, error } = await supabase
      .from('vocabularies')
      .select('id', { count: 'exact', head: true })
      .eq('language', language);

    if (!error && typeof count === 'number' && count > 0) {
      return count;
    }
  } catch (err) {
    console.warn('Failed to fetch vocabulary count from Supabase:', err);
  }
  return 2050;
}

/**
 * Fetch all vocabulary items for a given language.
 * Note: Supabase PostgREST has a server-side maximum limit of 1,000 rows per request.
 * We fetch in parallel batches of 1,000 to cleanly retrieve all 2,050+ records.
 */
export async function fetchVocabulariesForLanguage(language: Language): Promise<VocabularyItem[]> {
  try {
    const batchSize = 1000;
    const maxBatches = 5; // Supports up to 5,000 vocabulary words per language
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

    if (combinedData.length === 0) {
      return getVocabulary(language);
    }

    return combinedData.map((item: SupabaseVocabulary, idx: number) => ({
      id: item.id || `${language}-voc-${idx + 1}`,
      languageId: item.language as Language,
      word: item.word,
      reading: item.reading || item.phonetic || item.word,
      phonetic: item.phonetic || item.reading || '',
      meaningId: item.meaning_id,
      partOfSpeech: (item.part_of_speech || 'noun') as VocabularyPartOfSpeech,
      level: item.level,
      category: item.category || 'Umum',
      exampleNative: item.example_native || '',
      examplePhonetic: item.example_phonetic || '',
      exampleTranslation: item.example_translation || '',
      notes: item.notes || '',
      tags: [language, (item.category || 'umum').toLowerCase()]
    }));
  } catch (err) {
    console.warn('Supabase vocabulary fetch error, falling back to local dataset:', err);
    return getVocabulary(language);
  }
}
