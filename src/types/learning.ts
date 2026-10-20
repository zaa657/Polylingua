export type Language =
  | 'chinese'
  | 'japanese'
  | 'korean'
  | 'english'
  | 'thai'
  | 'russian'
  | 'arabic'
  | 'french'
  | 'dutch'
  | 'german'
  | 'spanish';

export interface LanguageMeta {
  id: Language;
  name: string;
  nativeName: string;
  flag: string;
  greeting: string;
  scriptType: string;
  themeColor: {
    primary: string;
    light: string;
    border: string;
    text: string;
    badge: string;
    ring: string;
  };
  description: string;
  levels: string[];
}

export type VocabularyPartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'conjunction'
  | 'pronoun'
  | 'particle'
  | 'idiom'
  | 'phrase';

export interface VocabularyItem {
  id: string;
  languageId: Language;
  word: string; // Hanzi, Kanji, Hangul, English word
  reading?: string; // Furigana / Hiragana for Japanese
  phonetic: string; // Pinyin, Romaji, Revised Romanization, IPA
  meaningId: string; // Indonesian translation
  partOfSpeech: VocabularyPartOfSpeech;
  level: string; // HSK 1..6, JLPT N5..N1, TOPIK 1..6, A2..C1
  category: string; // Salam, Kampus & Kuliah, Makanan, Transportasi, dsb.
  exampleNative: string; // Contoh kalimat dalam aksara asli
  examplePhonetic: string; // Cara baca contoh kalimat
  exampleTranslation: string; // Terjemahan contoh kalimat
  notes?: string; // Penjelasan tata bahasa / nuansa / tips penggunaan
  tags?: string[];
}

export interface WordBreakdown {
  word: string;
  phonetic: string;
  meaning: string;
  partOfSpeech?: string;
}

export interface DialogueSentence {
  id: string;
  speakerId: string;
  speakerName: string;
  speakerRole: string;
  avatar: string;
  nativeText: string;
  phoneticText: string;
  translationId: string;
  translationEn?: string;
  words: WordBreakdown[];
  audioVoiceLang: string; // 'zh-CN' | 'ja-JP' | 'ko-KR' | 'en-US'
  culturalNote?: string;
}

export interface DialogueCharacter {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface DialogueScenario {
  id: string;
  languageId: Language;
  level: string;
  title: string;
  titleNative: string;
  description: string;
  category: string;
  iconName: string;
  characters: DialogueCharacter[];
  sentences: DialogueSentence[];
  comprehensionQuiz: QuizQuestion[];
}

export interface GrammarExample {
  id: string;
  native: string;
  phonetic: string;
  translationId: string;
  note?: string;
}

export interface CommonMistake {
  incorrect: string;
  correct: string;
  explanation: string;
}

export interface GrammarLesson {
  id: string;
  languageId: Language;
  level: string;
  unit: number;
  title: string;
  titleNative?: string;
  patternFormula: string;
  summary: string;
  explanationSections: Array<{
    heading: string;
    content: string;
    ruleList?: string[];
  }>;
  examples: GrammarExample[];
  commonMistakes: CommonMistake[];
  culturalContext?: string;
  practiceQuiz: QuizQuestion[];
}

export type QuizType =
  | 'multiple_choice'
  | 'sentence_reorder'
  | 'listen_comprehension'
  | 'essay'
  | 'translation';

export interface QuizQuestion {
  id: string;
  type: QuizType;
  prompt: string;
  targetSentence?: string;
  audioVoiceLang?: string;
  options?: string[];
  correctAnswerIndex?: number;
  scrambledWords?: string[];
  correctOrder?: string[];
  sampleAnswer?: string;
  keywords?: string[];
  sectionType?: 'pg' | 'essai' | 'sambung_kata' | 'artikan' | 'bebas';
  explanation: string;
}

export interface UserProgress {
  userId: string;
  isGuest: boolean;
  completedLessons: string[];
  completedDialogues: string[];
  quizScores: Record<string, number>; // quizId -> score percentage (0-100)
  streakDays?: number;
  lastActiveDate: string;
  activeLanguage: Language;
  speechSpeed: number; // 0.75 or 1.0
  bookmarks: string[];
  savedWords?: string[]; // IDs of bookmarked vocabulary
  studyAbroadChecklist?: string[]; // IDs of checked requirements
}

export interface StudyTargetTest {
  id: string;
  title: string;
  description: string;
  passingScorePercent: number; // e.g. 75
  questions: QuizQuestion[];
}

export interface StudyChecklistItem {
  id: string;
  label: string;
  priority: 'Wajib' | 'Penting' | 'Nilai Tambah';
  targetLevel?: string;
  test: StudyTargetTest;
}

export type StudyAbroadDestination =
  | 'china'
  | 'japan'
  | 'korea'
  | 'english'
  | 'thailand'
  | 'russia'
  | 'arabic'
  | 'france'
  | 'netherlands'
  | 'germany'
  | 'spain';

export interface StudyAbroadCountry {
  countryId: StudyAbroadDestination;
  name: string;
  flag: string;
  badge: string;
  targetTestName: string;
  s1Requirement: string;
  s2Requirement: string;
  englishTrackNote: string;
  topUniversities: string[];
  curriculumRoadmap: Array<{
    stage: string;
    level: string;
    focus: string;
    milestone: string;
  }>;
  academicLanguagePillars: Array<{
    pillarTitle: string;
    detail: string;
    examples?: string[];
  }>;
  campusEssentialPhrases: Array<{
    phrase: string;
    phonetic: string;
    meaning: string;
    context: string;
    audioVoiceLang: string;
  }>;
  studyChecklist: StudyChecklistItem[];
  fullTest?: StudyTargetTest;
}
