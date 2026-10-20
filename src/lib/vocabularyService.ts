import { supabase, SupabaseVocabulary } from './supabase';
import { Language, VocabularyItem, VocabularyPartOfSpeech } from '@/types/learning';
import { getVocabulary } from '@/data';

export async function fetchVocabulariesForLanguage(language: Language): Promise<VocabularyItem[]> {
  try {
    const { data, error } = await supabase
      .from('vocabularies')
      .select('*')
      .eq('language', language)
      .order('created_at', { ascending: true })
      .range(0, 2000);

    if (error || !data || data.length === 0) {
      return getVocabulary(language);
    }

    return data.map((item: SupabaseVocabulary, idx: number) => ({
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
