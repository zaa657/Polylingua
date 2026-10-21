'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Language, VocabularyItem, VocabularyPartOfSpeech } from '@/types/learning';
import { LANGUAGES } from '@/data/languages';
import { LearningLayoutClient } from '@/components/layout/LearningLayoutClient';
import { useLocale } from '@/context/LocaleContext';
import { getVoiceLangCode, speechService } from '@/lib/speechService';
import { fetchVocabulariesForLanguage } from '@/lib/vocabularyService';
import {
  Search,
  Volume2,
  Eye,
  EyeOff,
  Copy,
  Check,
  RotateCcw,
} from 'lucide-react';

interface VocabularyClientProps {
  language: Language;
  initialVocab: VocabularyItem[];
}

const POS_COLORS: Record<VocabularyPartOfSpeech, string> = {
  noun: 'bg-blue-50 text-blue-700 border-blue-200',
  verb: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  adjective: 'bg-amber-50 text-amber-700 border-amber-200',
  adverb: 'bg-purple-50 text-purple-700 border-purple-200',
  conjunction: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  pronoun: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  particle: 'bg-rose-50 text-rose-700 border-rose-200',
  idiom: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
  phrase: 'bg-teal-50 text-teal-700 border-teal-200',
};

const CATEGORY_TRANSLATIONS: Record<string, string> = {
  'Umum': 'General',
  'Salam & Percakapan': 'Greetings & Conversation',
  'Keluarga & Hubungan': 'Family & Relationships',
  'Keluarga & Kerabat': 'Family & Relatives',
  'Makanan & Minuman': 'Food & Drinks',
  'Makanan & Kuliner': 'Food & Cuisine',
  'Pekerjaan & Profesi': 'Work & Professions',
  'Pekerjaan & Karir': 'Jobs & Career',
  'Waktu & Hari': 'Time & Days',
  'Waktu & Tanggal': 'Time & Dates',
  'Angka & Hitungan': 'Numbers & Counting',
  'Aktivitas Sehari-hari': 'Daily Activities',
  'Transportasi & Perjalanan': 'Transportation & Travel',
  'Belanja & Transaksi': 'Shopping & Transactions',
  'Pendidikan & Kampus': 'Education & Campus',
  'Kesehatan & Tubuh': 'Health & Body',
  'Tempat & Arah': 'Places & Directions',
  'Cuaca & Musim': 'Weather & Seasons',
  'Hobi & Hiburan': 'Hobbies & Leisure',
  'Teknologi & Digital': 'Technology & Digital',
  'Emosi & Perasaan': 'Emotions & Feelings',
  'Sifat & Karakter': 'Traits & Personality',
  'Alam & Lingkungan': 'Nature & Environment',
  'Pakaian & Fashion': 'Clothing & Fashion',
  'Rumah & Perlengkapan': 'Home & Furniture',
  'Komunikasi & Media': 'Communication & Media',
  'Bisnis & Ekonomi': 'Business & Economy',
  'Hukum & Politik': 'Law & Politics',
  'Seni & Budaya': 'Arts & Culture',
  'Olahraga & Kebugaran': 'Sports & Fitness',
  'Akademik & Penelitian': 'Academia & Research',
  'Sains & Teknologi': 'Science & Technology',
  'Media Sosial & Internet': 'Social Media & Internet',
  'Hewan & Fauna': 'Animals & Fauna',
  'Tumbuhan & Flora': 'Plants & Flora',
  'Perjalanan & Wisata': 'Travel & Tourism',
};

export const VocabularyClient: React.FC<VocabularyClientProps> = ({
  language,
  initialVocab,
}) => {
  const langMeta = LANGUAGES[language] || LANGUAGES.chinese;
  const { locale, t } = useLocale();

  const [vocabList, setVocabList] = useState<VocabularyItem[]>(initialVocab);

  useEffect(() => {
    let isMounted = true;
    fetchVocabulariesForLanguage(language).then((remoteVocab) => {
      if (isMounted && remoteVocab && remoteVocab.length > 0) {
        setVocabList(remoteVocab);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [language]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingWordId, setSpeakingWordId] = useState<string | null>(null);
  const [displayLimit, setDisplayLimit] = useState<number>(60);

  useEffect(() => {
    setDisplayLimit(60);
  }, [searchQuery, selectedLevel, selectedCategory]);

  // Extract distinct levels & categories
  const allLevels = useMemo(() => {
    const set = new Set<string>();
    vocabList.forEach((v) => set.add(v.level));
    return Array.from(set);
  }, [vocabList]);

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    vocabList.forEach((v) => set.add(v.category));
    return Array.from(set);
  }, [vocabList]);

  const getCategoryLabel = (cat: string) => {
    if (locale === 'en') {
      return CATEGORY_TRANSLATIONS[cat] || cat;
    }
    return cat;
  };

  // Filtered vocabulary list
  const filteredVocab = useMemo(() => {
    return vocabList.filter((item) => {
      // Level filter
      if (selectedLevel && item.level !== selectedLevel) {
        return false;
      }
      // Category filter
      if (selectedCategory && item.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchWord = item.word.toLowerCase().includes(q);
        const matchReading = item.reading?.toLowerCase().includes(q) || false;
        const matchPhonetic = item.phonetic.toLowerCase().includes(q);
        const matchMeaning = item.meaningId.toLowerCase().includes(q);
        const matchTags = item.tags?.some((t) => t.toLowerCase().includes(q)) || false;
        return matchWord || matchReading || matchPhonetic || matchMeaning || matchTags;
      }
      return true;
    });
  }, [vocabList, selectedLevel, selectedCategory, searchQuery]);

  const displayedVocab = useMemo(() => {
    return filteredVocab.slice(0, displayLimit);
  }, [filteredVocab, displayLimit]);

  // Audio speech synthesis helper with zero-delay hybrid engine
  const playAudio = (text: string, voiceLang: string, id: string) => {
    if (!text || typeof window === 'undefined') return;

    if (speakingWordId === id) {
      speechService.stop();
      setSpeakingWordId(null);
      return;
    }

    setSpeakingWordId(id);
    speechService.speak(text, {
      lang: voiceLang,
      rate: 1.0,
      onStart: () => setSpeakingWordId(id),
      onEnd: () => setSpeakingWordId(null),
      onError: () => setSpeakingWordId(null),
    });
  };

  const getAudioLangCode = (): string => {
    return getVoiceLangCode(language);
  };

  const toggleRevealFlashcard = (id: string) => {
    setRevealedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopy = (text: string, id: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text);
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch (e) {
      console.warn('Clipboard copy failed:', e);
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLevel(null);
    setSelectedCategory(null);
  };

  const localizedLangName = t('lang_' + language, {}, langMeta.name);

  const getPosLabel = (pos: VocabularyPartOfSpeech) => {
    const keyMap: Record<VocabularyPartOfSpeech, string> = {
      noun: 'pos_noun',
      verb: 'pos_verb',
      adjective: 'pos_adj',
      adverb: 'pos_adv',
      conjunction: 'pos_conj',
      pronoun: 'pos_pronoun',
      particle: 'pos_particle',
      idiom: 'pos_idiom',
      phrase: 'pos_phrase',
    };
    return t(keyMap[pos] || pos);
  };

  return (
    <LearningLayoutClient currentLanguage={language}>
      <div className="space-y-6 pb-16">
        {/* Header Breadcrumbs & Title */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href={`/learn/${language}`} className="hover:text-blue-600">
              {localizedLangName}
            </Link>
            <span>/</span>
            <span className="text-slate-800">{t('vocab_hub_title')}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <span>{t('vocab_card_heading', { lang: localizedLangName })}</span>
                <span className="text-xl">{langMeta.flag}</span>
              </h1>
              <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-xl">
                {t('vocab_hub_desc')}
              </p>
            </div>

            {/* Quick Action: Flashcard Mode */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setIsFlashcardMode(!isFlashcardMode)}
                className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isFlashcardMode
                    ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
                title={locale === 'en' ? 'Hide meaning to test recall' : 'Sembunyikan arti kata untuk menguji ingatan'}
              >
                {isFlashcardMode ? <EyeOff size={15} /> : <Eye size={15} />}
                <span>{isFlashcardMode ? t('mode_active_recall_active') : t('mode_active_recall_test')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar & Compact Filters */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 md:p-5 shadow-xs space-y-3.5">
          {/* Search Input */}
          <div className="relative">
            <Search
              size={17}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search_vocab_placeholder')}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs md:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Level Filter Pills */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              {t('filter_level_heading')}
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedLevel(null)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedLevel === null
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t('all_levels')}
              </button>
              {allLevels.map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(selectedLevel === lvl ? null : lvl)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedLevel === lvl
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Compact Category Dropdown Selector */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                {t('filter_category_heading')}
              </span>
              {(selectedLevel || selectedCategory || searchQuery) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw size={11} />
                  <span>{t('reset_all_filters')}</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="w-full sm:w-auto min-w-[240px] px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer"
              >
                <option value="">{t('all_categories')} ({allCategories.length})</option>
                {allCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {getCategoryLabel(cat)}
                  </option>
                ))}
              </select>

              {selectedCategory && (
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="text-xs text-rose-600 hover:text-rose-700 font-semibold px-2 py-1 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  ✕ {locale === 'en' ? 'Clear' : 'Reset'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter Banner */}
        <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
          <span>
            {t('showing_vocab_results', { filtered: filteredVocab.length, total: vocabList.length })}
          </span>
          {isFlashcardMode && (
            <span className="text-amber-600 font-semibold text-xs">
              {t('touch_card_hint')}
            </span>
          )}
        </div>

        {/* Vocabulary Grid */}
        {filteredVocab.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-800 text-sm">{t('no_vocab_found')}</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {t('no_vocab_hint')}
              </p>
            </div>
            <button
              type="button"
              onClick={resetFilters}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 cursor-pointer"
            >
              {t('show_all_vocab_btn')}
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedVocab.map((item) => {
                const isRevealed = revealedIds[item.id] || !isFlashcardMode;
                const posColor = POS_COLORS[item.partOfSpeech] || 'bg-slate-100 text-slate-700 border-slate-200';
                const posLabel = getPosLabel(item.partOfSpeech);

                return (
                  <article
                    key={item.id}
                    className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between space-y-4 transition-all shadow-xs hover:border-slate-300"
                  >
                    {/* Top Bar: Level, POS, Category, Copy */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200">
                            {item.level}
                          </span>
                          <span
                            className={`text-[11px] font-semibold px-2 py-0.5 rounded-lg border ${posColor}`}
                          >
                            {posLabel}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium px-2 py-0.5 rounded-lg bg-slate-100">
                            {getCategoryLabel(item.category)}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopy(item.word, item.id)}
                          className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                          title={locale === 'en' ? 'Copy word' : 'Salin kata'}
                        >
                          {copiedId === item.id ? (
                            <Check size={14} className="text-emerald-600" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>

                      {/* Word Display & Audio */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          {item.reading && (
                            <span className="text-xs font-semibold text-slate-400 block tracking-wide">
                              {item.reading}
                            </span>
                          )}
                          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                            {item.word}
                          </h3>
                          {item.phonetic && item.phonetic !== item.reading && (
                            <p className="text-xs text-blue-600 font-medium">
                              /{item.phonetic}/
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => playAudio(item.word, getAudioLangCode(), item.id)}
                          className={`p-2.5 rounded-xl transition-all cursor-pointer ${
                            speakingWordId === item.id
                              ? 'bg-blue-600 text-white ring-2 ring-blue-300 animate-pulse'
                              : 'bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600'
                          }`}
                          title={locale === 'en' ? 'Listen pronunciation' : 'Dengarkan pengucapan'}
                        >
                          <Volume2 size={18} />
                        </button>
                      </div>

                      {/* Meaning */}
                      {isRevealed ? (
                        <div className="pt-1">
                          <p className="text-sm md:text-base font-bold text-slate-800 leading-snug">
                            {item.meaningId}
                          </p>
                        </div>
                      ) : (
                        <div
                          onClick={() => toggleRevealFlashcard(item.id)}
                          className="p-2.5 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-center cursor-pointer hover:bg-amber-50/50 hover:border-amber-200 transition-all"
                        >
                          <span className="text-xs font-semibold text-slate-400 flex items-center justify-center gap-1.5">
                            <EyeOff size={13} className="text-amber-500" />
                            <span>{locale === 'en' ? 'Tap to reveal meaning' : 'Sentuh untuk melihat arti'}</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Example Sentence (Visible when revealed) */}
                    {isRevealed && item.exampleNative && (
                      <div className="pt-2 border-t border-slate-100">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {locale === 'en' ? 'Sentence Example' : 'Contoh Kalimat'}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                playAudio(item.exampleNative, getAudioLangCode(), `ex-${item.id}`)
                              }
                              className="p-1 rounded-md text-slate-400 hover:text-blue-600 hover:bg-white transition-all cursor-pointer"
                              title={locale === 'en' ? 'Listen to sentence' : 'Dengarkan contoh kalimat'}
                            >
                              <Volume2
                                size={14}
                                className={speakingWordId === `ex-${item.id}` ? 'text-blue-600' : ''}
                              />
                            </button>
                          </div>
                          <p className="text-xs md:text-sm font-bold text-slate-900 leading-relaxed">
                            {item.exampleNative}
                          </p>
                          {item.examplePhonetic && (
                            <p className="text-xs text-blue-600 font-medium">
                              {item.examplePhonetic}
                            </p>
                          )}
                          {item.exampleTranslation && (
                            <p className="text-xs text-slate-600 pt-0.5">
                              &ldquo;{item.exampleTranslation}&rdquo;
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {filteredVocab.length > displayLimit && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 pb-2">
                <button
                  type="button"
                  onClick={() => setDisplayLimit((prev) => prev + 60)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-sm cursor-pointer"
                >
                  {locale === 'en'
                    ? `Load More (+60) — Showing ${displayedVocab.length} of ${filteredVocab.length}`
                    : `Muat Lebih Banyak (+60) — Menampilkan ${displayedVocab.length} dari ${filteredVocab.length}`}
                </button>
                <button
                  type="button"
                  onClick={() => setDisplayLimit(filteredVocab.length)}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all shadow-xs cursor-pointer"
                >
                  {locale === 'en'
                    ? `Show All ${filteredVocab.length} Words`
                    : `Tampilkan Semua ${filteredVocab.length} Kata`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </LearningLayoutClient>
  );
};
