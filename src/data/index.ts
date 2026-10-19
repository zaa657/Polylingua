import { Language, GrammarLesson, DialogueScenario, VocabularyItem } from '@/types/learning';
import { CHINESE_GRAMMAR } from './chinese/grammar';
import { CHINESE_DIALOGUES } from './chinese/dialogues';
import { CHINESE_VOCABULARY } from './chinese/vocabulary';

import { JAPANESE_GRAMMAR } from './japanese/grammar';
import { JAPANESE_DIALOGUES } from './japanese/dialogues';
import { JAPANESE_VOCABULARY } from './japanese/vocabulary';

import { KOREAN_GRAMMAR } from './korean/grammar';
import { KOREAN_DIALOGUES } from './korean/dialogues';
import { KOREAN_VOCABULARY } from './korean/vocabulary';

import { ENGLISH_GRAMMAR } from './english/grammar';
import { ENGLISH_DIALOGUES } from './english/dialogues';
import { ENGLISH_VOCABULARY } from './english/vocabulary';

import { THAI_GRAMMAR } from './thai/grammar';
import { THAI_DIALOGUES } from './thai/dialogues';
import { THAI_VOCABULARY } from './thai/vocabulary';

import { RUSSIAN_GRAMMAR } from './russian/grammar';
import { RUSSIAN_DIALOGUES } from './russian/dialogues';
import { RUSSIAN_VOCABULARY } from './russian/vocabulary';

import { ARABIC_GRAMMAR } from './arabic/grammar';
import { ARABIC_DIALOGUES } from './arabic/dialogues';
import { ARABIC_VOCABULARY } from './arabic/vocabulary';

import { FRENCH_GRAMMAR } from './french/grammar';
import { FRENCH_DIALOGUES } from './french/dialogues';
import { FRENCH_VOCABULARY } from './french/vocabulary';

import { DUTCH_GRAMMAR } from './dutch/grammar';
import { DUTCH_DIALOGUES } from './dutch/dialogues';
import { DUTCH_VOCABULARY } from './dutch/vocabulary';

import { GERMAN_GRAMMAR } from './german/grammar';
import { GERMAN_DIALOGUES } from './german/dialogues';
import { GERMAN_VOCABULARY } from './german/vocabulary';

import { SPANISH_GRAMMAR } from './spanish/grammar';
import { SPANISH_DIALOGUES } from './spanish/dialogues';
import { SPANISH_VOCABULARY } from './spanish/vocabulary';

export const ALL_GRAMMAR_LESSONS: Record<Language, GrammarLesson[]> = {
  chinese: CHINESE_GRAMMAR,
  japanese: JAPANESE_GRAMMAR,
  korean: KOREAN_GRAMMAR,
  english: ENGLISH_GRAMMAR,
  thai: THAI_GRAMMAR,
  russian: RUSSIAN_GRAMMAR,
  arabic: ARABIC_GRAMMAR,
  french: FRENCH_GRAMMAR,
  dutch: DUTCH_GRAMMAR,
  german: GERMAN_GRAMMAR,
  spanish: SPANISH_GRAMMAR,
};

export const ALL_DIALOGUES: Record<Language, DialogueScenario[]> = {
  chinese: CHINESE_DIALOGUES,
  japanese: JAPANESE_DIALOGUES,
  korean: KOREAN_DIALOGUES,
  english: ENGLISH_DIALOGUES,
  thai: THAI_DIALOGUES,
  russian: RUSSIAN_DIALOGUES,
  arabic: ARABIC_DIALOGUES,
  french: FRENCH_DIALOGUES,
  dutch: DUTCH_DIALOGUES,
  german: GERMAN_DIALOGUES,
  spanish: SPANISH_DIALOGUES,
};

export const ALL_VOCABULARY: Record<Language, VocabularyItem[]> = {
  chinese: CHINESE_VOCABULARY,
  japanese: JAPANESE_VOCABULARY,
  korean: KOREAN_VOCABULARY,
  english: ENGLISH_VOCABULARY,
  thai: THAI_VOCABULARY,
  russian: RUSSIAN_VOCABULARY,
  arabic: ARABIC_VOCABULARY,
  french: FRENCH_VOCABULARY,
  dutch: DUTCH_VOCABULARY,
  german: GERMAN_VOCABULARY,
  spanish: SPANISH_VOCABULARY,
};

export function getGrammarLessons(lang: Language): GrammarLesson[] {
  return ALL_GRAMMAR_LESSONS[lang] || [];
}

export function getGrammarLessonById(lessonId: string): GrammarLesson | undefined {
  for (const lang of Object.keys(ALL_GRAMMAR_LESSONS) as Language[]) {
    const found = ALL_GRAMMAR_LESSONS[lang].find((l) => l.id === lessonId);
    if (found) return found;
  }
  return undefined;
}

export function getDialogues(lang: Language): DialogueScenario[] {
  return ALL_DIALOGUES[lang] || [];
}

export function getDialogueById(dialogueId: string): DialogueScenario | undefined {
  for (const lang of Object.keys(ALL_DIALOGUES) as Language[]) {
    const found = ALL_DIALOGUES[lang].find((d) => d.id === dialogueId);
    if (found) return found;
  }
  return undefined;
}

export function getVocabulary(lang: Language): VocabularyItem[] {
  return ALL_VOCABULARY[lang] || [];
}

export function getVocabularyById(wordId: string): VocabularyItem | undefined {
  for (const lang of Object.keys(ALL_VOCABULARY) as Language[]) {
    const found = ALL_VOCABULARY[lang].find((v) => v.id === wordId);
    if (found) return found;
  }
  return undefined;
}

export { LANGUAGES, LANGUAGE_LIST } from './languages';
