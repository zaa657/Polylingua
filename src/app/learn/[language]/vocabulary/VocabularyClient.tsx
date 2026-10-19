'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Language, VocabularyItem, VocabularyPartOfSpeech } from '@/types/learning';
import { LANGUAGES } from '@/data/languages';
import { LearningLayoutClient } from '@/components/layout/LearningLayoutClient';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { progressService } from '@/lib/progressService';
import { getVoiceLangCode } from '@/lib/speechService';
import {
  Search,
  Volume2,
  Star,
  Eye,
  EyeOff,
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  Languages as VocabIcon,
  HelpCircle,
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

export const VocabularyClient: React.FC<VocabularyClientProps> = ({
  language,
  initialVocab,
}) => {
  const langMeta = LANGUAGES[language] || LANGUAGES.chinese;
  const { user, progress, reloadProgress } = useAuth();
  const { locale, t } = useLocale();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingWordId, setSpeakingWordId] = useState<string | null>(null);

  const savedWordIds = useMemo(() => progress.savedWords || [], [progress.savedWords]);

  // Extract distinct levels & categories
  const allLevels = useMemo(() => {
    const set = new Set<string>();
    initialVocab.forEach((v) => set.add(v.level));
    return Array.from(set);
  }, [initialVocab]);

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    initialVocab.forEach((v) => set.add(v.category));
    return Array.from(set);
  }, [initialVocab]);

  // Filtered vocabulary list
  const filteredVocab = useMemo(() => {
    return initialVocab.filter((item) => {
      // Favorites filter
      if (onlyFavorites && !savedWordIds.includes(item.id)) {
        return false;
      }
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
  }, [initialVocab, onlyFavorites, savedWordIds, selectedLevel, selectedCategory, searchQuery]);

  // Audio speech synthesis helper
  const playAudio = (text: string, voiceLang: string, id: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voiceLang;
    utterance.rate = progress.speechSpeed || 1.0;
    utterance.pitch = 1.0;

    setSpeakingWordId(id);
    utterance.onend = () => setSpeakingWordId(null);
    utterance.onerror = () => setSpeakingWordId(null);

    window.speechSynthesis.speak(utterance);
  };

  const getAudioLangCode = (): string => {
    return getVoiceLangCode(language);
  };

  const handleToggleFavorite = async (wordId: string) => {
    await progressService.toggleSavedWord(wordId, user?.uid);
    await reloadProgress();
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
    setOnlyFavorites(false);
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
      <div className="space-y-8 pb-16">
        {/* Header Breadcrumbs & Title */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href={`/learn/${language}`} className="hover:text-blue-600">
              {localizedLangName}
            </Link>
            <span>/</span>
            <span className="text-slate-800">{t('vocab_hub_title')}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
                <VocabIcon size={14} />
                <span>{t('vocab_card_heading', { lang: localizedLangName.replace('Bahasa ', '') })}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <span>{t('vocab_card_heading', { lang: localizedLangName })}</span>
                <span className="text-xl">{langMeta.flag}</span>
              </h1>
              <p className="text-sm text-slate-500 mt-1 max-w-2xl">
                {t('vocab_hub_desc')}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setIsFlashcardMode(!isFlashcardMode)}
                className={`px-3.5 py-2 rounded-2xl border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isFlashcardMode
                    ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
                title={locale === 'en' ? 'Hide word meaning for independent recall practice' : 'Sembunyikan arti kata untuk menguji ingatan mandiri'}
              >
                {isFlashcardMode ? <EyeOff size={15} /> : <Eye size={15} />}
                <span>{isFlashcardMode ? t('mode_active_recall_active') : t('mode_active_recall_test')}</span>
              </button>

              <button
                type="button"
                onClick={() => setOnlyFavorites(!onlyFavorites)}
                className={`px-3.5 py-2 rounded-2xl border text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  onlyFavorites
                    ? 'bg-amber-50 text-amber-900 border-amber-300'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Star
                  size={15}
                  className={onlyFavorites ? 'fill-amber-500 text-amber-500' : 'text-slate-400'}
                />
                <span>{t('favorites_count', { count: savedWordIds.length })}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar & Multi-Filters */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 md:p-6 shadow-xs space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search_vocab_placeholder')}
              className="w-full pl-11 pr-4 py-3 bg-slate-50/80 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Level Filter Pills */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              {t('filter_level_heading')}
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedLevel(null)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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

          {/* Category Filter Pills */}
          <div className="space-y-2 pt-1 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                {t('filter_category_heading')}
              </span>
              {(selectedLevel || selectedCategory || onlyFavorites || searchQuery) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw size={12} />
                  <span>{t('reset_all_filters')}</span>
                </button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === null
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t('all_categories')}
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter Banner */}
        <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-medium">
          <span>
            {t('showing_vocab_results', { filtered: filteredVocab.length, total: initialVocab.length })}
          </span>
          {isFlashcardMode && (
            <span className="text-amber-600 font-semibold flex items-center gap-1">
              <HelpCircle size={13} />
              <span>{t('touch_card_hint')}</span>
            </span>
          )}
        </div>

        {/* Vocabulary Grid */}
        {filteredVocab.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <Search size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-800 text-base">{t('no_vocab_found')}</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredVocab.map((item) => {
              const isSaved = savedWordIds.includes(item.id);
              const isRevealed = revealedIds[item.id] || !isFlashcardMode;
              const posColor = POS_COLORS[item.partOfSpeech] || 'bg-slate-100 text-slate-700 border-slate-200';
              const posLabel = getPosLabel(item.partOfSpeech);

              return (
                <article
                  key={item.id}
                  className={`bg-white rounded-3xl border p-6 flex flex-col justify-between space-y-5 transition-all shadow-xs hover:shadow-sm ${
                    isSaved ? 'border-amber-300 ring-1 ring-amber-100' : 'border-slate-200/90'
                  }`}
                >
                  {/* Top Bar: Level, POS, Audio, Favorite */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200">
                          {item.level}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-lg border ${posColor}`}
                        >
                          {posLabel}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium px-2 py-0.5 rounded-lg bg-slate-50">
                          {item.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => handleCopy(item.word, item.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                          title={locale === 'en' ? 'Copy word' : 'Salin aksara kata'}
                        >
                          {copiedId === item.id ? (
                            <Check size={14} className="text-emerald-600" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleToggleFavorite(item.id)}
                          className="p-1.5 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer"
                          title={
                            locale === 'en'
                              ? isSaved
                                ? 'Remove from favorites'
                                : 'Save to favorites'
                              : isSaved
                              ? 'Hapus dari kosakata favorit'
                              : 'Simpan ke favorit'
                          }
                        >
                          <Star
                            size={16}
                            className={
                              isSaved
                                ? 'fill-amber-400 text-amber-500'
                                : 'text-slate-300 hover:text-amber-400'
                            }
                          />
                        </button>
                      </div>
                    </div>

                    {/* Word Display & Audio */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        {item.reading && (
                          <span className="text-xs font-semibold text-slate-400 block tracking-wide">
                            {item.reading}
                          </span>
                        )}
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none">
                          {item.word}
                        </h2>

                        {/* Phonetic (Pinyin / Romaji / IPA) */}
                        {isRevealed ? (
                          <p className="text-sm font-semibold text-blue-600 tracking-wide pt-0.5">
                            {item.phonetic}
                          </p>
                        ) : (
                          <button
                            type="button"
                            onClick={() => toggleRevealFlashcard(item.id)}
                            className="text-xs font-bold text-amber-600 hover:underline cursor-pointer pt-0.5 flex items-center gap-1"
                          >
                            <Eye size={12} />
                            <span>{locale === 'en' ? 'Show Pronunciation & Meaning' : 'Buka Cara Baca & Arti'}</span>
                          </button>
                        )}
                      </div>

                      {/* Word Audio Button */}
                      <button
                        type="button"
                        onClick={() => playAudio(item.word, getAudioLangCode(), item.id)}
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                          speakingWordId === item.id
                            ? 'bg-blue-600 text-white shadow-md scale-105 animate-pulse'
                            : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        }`}
                        title={locale === 'en' ? 'Listen to native pronunciation' : 'Dengarkan pengucapan asli kata ini'}
                      >
                        <Volume2 size={19} />
                      </button>
                    </div>

                    {/* Meaning */}
                    {isRevealed ? (
                      <div className="pt-2">
                        <p className="text-base font-bold text-slate-800 leading-snug">
                          {item.meaningId}
                        </p>
                      </div>
                    ) : (
                      <div
                        onClick={() => toggleRevealFlashcard(item.id)}
                        className="p-3 bg-slate-50 border border-dashed border-slate-200 rounded-2xl text-center cursor-pointer hover:bg-amber-50/50 hover:border-amber-200 transition-all"
                      >
                        <span className="text-xs font-bold text-slate-400 flex items-center justify-center gap-1.5">
                          <EyeOff size={14} className="text-amber-500" />
                          <span>{locale === 'en' ? 'Tap to check your recall' : 'Sentuh untuk memeriksa arti hafalan Anda'}</span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Example Sentence & Notes (Visible when revealed) */}
                  {isRevealed && (
                    <div className="space-y-3 pt-3 border-t border-slate-100">
                      {/* Example sentence box */}
                      <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70 space-y-1.5">
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
                            title={locale === 'en' ? 'Listen to example sentence' : 'Dengarkan audio contoh kalimat'}
                          >
                            <Volume2
                              size={14}
                              className={speakingWordId === `ex-${item.id}` ? 'text-blue-600' : ''}
                            />
                          </button>
                        </div>
                        <p className="text-sm font-bold text-slate-900 leading-relaxed">
                          {item.exampleNative}
                        </p>
                        <p className="text-xs text-blue-600 font-medium">
                          {item.examplePhonetic}
                        </p>
                        <p className="text-xs text-slate-600 pt-0.5">
                          &ldquo;{item.exampleTranslation}&rdquo;
                        </p>
                      </div>

                      {/* Grammatical notes & usage nuances */}
                      {item.notes && (
                        <div className="flex items-start gap-2 p-3 bg-blue-50/50 border border-blue-100 rounded-2xl text-xs text-slate-700">
                          <Sparkles size={14} className="text-blue-600 shrink-0 mt-0.5" />
                          <p className="leading-relaxed">
                            <strong className="text-blue-900 font-semibold">
                              {locale === 'en' ? 'Explanation & Tips: ' : 'Penjelasan & Tips: '}
                            </strong>
                            {item.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </LearningLayoutClient>
  );
};
