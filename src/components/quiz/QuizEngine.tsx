'use client';

import React, { useState, useEffect, useRef } from 'react';
import { QuizQuestion } from '@/types/learning';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  PenTool,
  Puzzle,
  SlidersHorizontal,
  Clock,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { progressService } from '@/lib/progressService';
import { useAuth } from '@/context/AuthContext';
import { useLocale } from '@/context/LocaleContext';
import { useQuizSession } from '@/context/QuizSessionContext';
import { AudioSpeaker } from '../ui/AudioSpeaker';

interface QuizEngineProps {
  quizId: string;
  title: string;
  questions: QuizQuestion[];
  onComplete?: (score: number) => void;
  onBack?: () => void;
  timeLimitMinutes?: number;
}

interface QuestionViewProps {
  question: QuizQuestion;
  savedAnswer?: {
    isAnswered: boolean;
    isCorrect: boolean;
    selectedOption?: number | null;
    reorderedWords?: string[];
    essayText?: string;
  };
  onAnswerSubmit: (
    questionId: string,
    isCorrect: boolean,
    details: {
      selectedOption?: number | null;
      reorderedWords?: string[];
      essayText?: string;
    }
  ) => void;
}

function QuestionView({ question, savedAnswer, onAnswerSubmit }: QuestionViewProps) {
  const { t } = useLocale();
  const [selectedOption, setSelectedOption] = useState<number | null>(
    savedAnswer?.selectedOption ?? null
  );
  const [availableWords, setAvailableWords] = useState<string[]>(() => {
    if (savedAnswer?.reorderedWords && savedAnswer.reorderedWords.length > 0) {
      const original = question.scrambledWords ? [...question.scrambledWords] : [];
      savedAnswer.reorderedWords.forEach((rw) => {
        const idx = original.indexOf(rw);
        if (idx !== -1) original.splice(idx, 1);
      });
      return original;
    }
    return question.scrambledWords ? [...question.scrambledWords] : [];
  });
  const [reorderedWords, setReorderedWords] = useState<string[]>(
    savedAnswer?.reorderedWords ?? []
  );
  const [essayText, setEssayText] = useState<string>(
    savedAnswer?.essayText ?? ''
  );
  const [isAnswered, setIsAnswered] = useState(savedAnswer?.isAnswered ?? false);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState(savedAnswer?.isCorrect ?? false);

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleWordClickFromPool = (word: string, poolIndex: number) => {
    if (isAnswered) return;
    setReorderedWords((prev) => [...prev, word]);
    setAvailableWords((prev) => {
      const updated = [...prev];
      updated.splice(poolIndex, 1);
      return updated;
    });
  };

  const handleWordClickFromReordered = (word: string, reorderedIndex: number) => {
    if (isAnswered) return;
    setAvailableWords((prev) => [...prev, word]);
    setReorderedWords((prev) => {
      const updated = [...prev];
      updated.splice(reorderedIndex, 1);
      return updated;
    });
  };

  const handleResetReorder = () => {
    if (isAnswered) return;
    setAvailableWords(question.scrambledWords ? [...question.scrambledWords] : []);
    setReorderedWords([]);
  };

  const checkAnswer = () => {
    if (isAnswered) return;
    let isCorrect = false;

    if (
      question.type === 'multiple_choice' ||
      question.type === 'translation' ||
      question.type === 'listen_comprehension'
    ) {
      if (selectedOption === null) return;
      isCorrect = selectedOption === question.correctAnswerIndex;
    } else if (question.type === 'sentence_reorder') {
      if (!question.correctOrder || reorderedWords.length === 0) return;
      isCorrect = JSON.stringify(reorderedWords) === JSON.stringify(question.correctOrder);
    } else if (question.type === 'essay') {
      const normalizeText = (s: string) =>
        s
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/\b(aku|gua|gue)\b/g, 'saya')
          .replace(/\b(kamu|kau|engkau)\b/g, 'anda')
          .replace(/\b(tak|gak|nggak|enggak)\b/g, 'tidak')
          .replace(/\b(murid|siswa|siswi)\b/g, 'pelajar')
          .replace(/\b(pengajar|dosen)\b/g, 'guru');
      const trimmed = essayText.trim();
      if (trimmed.length < 2) return;
      const normInput = normalizeText(trimmed);
      if (question.keywords && question.keywords.length > 0) {
        const matchCount = question.keywords.filter((kw) =>
          normInput.includes(normalizeText(kw)) || trimmed.toLowerCase().includes(kw.toLowerCase())
        ).length;
        isCorrect = matchCount >= Math.max(1, Math.ceil(question.keywords.length / 2));
      } else {
        isCorrect = trimmed.length >= 2;
      }
    }

    setIsAnswered(true);
    setIsCurrentCorrect(isCorrect);
    onAnswerSubmit(question.id, isCorrect, {
      selectedOption,
      reorderedWords,
      essayText,
    });
  };

  const sectionBadge = {
    pg: { label: t('badge_pg'), icon: BookOpen, color: 'bg-blue-100 text-blue-800 border-blue-200' },
    essai: { label: t('badge_essay'), icon: PenTool, color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    sambung_kata: { label: t('badge_reorder'), icon: Puzzle, color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    artikan: { label: t('badge_translate'), icon: SlidersHorizontal, color: 'bg-amber-100 text-amber-800 border-amber-200' },
    bebas: { label: t('badge_free'), icon: SlidersHorizontal, color: 'bg-purple-100 text-purple-800 border-purple-200' },
  }[question.sectionType || (question.type === 'essay' ? 'essai' : question.type === 'sentence_reorder' ? 'sambung_kata' : 'pg')];

  const SectionIcon = sectionBadge.icon;

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Category Tag & Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${sectionBadge.color}`}
        >
          <SectionIcon size={13} />
          <span>{sectionBadge.label}</span>
        </span>

        {isAnswered && (
          <span
            className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full ${
              isCurrentCorrect
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-rose-100 text-rose-800'
            }`}
          >
            {isCurrentCorrect ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
            <span>{isCurrentCorrect ? t('ans_correct') : t('ans_needs_improvement')}</span>
          </span>
        )}
      </div>

      {/* Question Prompt */}
      <div className="space-y-3">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
          {question.prompt}
        </h3>

        {/* Target Sentence with Audio Speaker */}
        {question.targetSentence && (
          <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl flex items-center justify-between gap-3">
            <span className="text-base md:text-lg font-medium text-slate-900">
              {question.type === 'sentence_reorder' && !isAnswered
                ? t('reorder_instructions')
                : question.targetSentence}
            </span>
            {question.audioVoiceLang && (
              <AudioSpeaker
                text={question.targetSentence}
                lang={question.audioVoiceLang}
                size="sm"
                label={t('listen_audio')}
              />
            )}
          </div>
        )}
      </div>

      {/* 1. MULTIPLE CHOICE / TRANSLATION / LISTENING */}
      {(question.type === 'multiple_choice' ||
        question.type === 'translation' ||
        question.type === 'listen_comprehension') &&
        question.options && (
          <div className="space-y-2.5">
            {question.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              let itemClass =
                'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800';

              if (isAnswered) {
                if (idx === question.correctAnswerIndex) {
                  itemClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                } else if (isSelected) {
                  itemClass = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                } else {
                  itemClass = 'border-slate-200 opacity-50';
                }
              } else if (isSelected) {
                itemClass =
                  'border-blue-600 bg-blue-50 text-blue-900 font-semibold ring-2 ring-blue-500/20';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border text-sm transition-all duration-150 flex items-center justify-between cursor-pointer ${itemClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isAnswered && idx === question.correctAnswerIndex && (
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && isSelected && idx !== question.correctAnswerIndex && (
                    <XCircle size={18} className="text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}

      {/* 2. SENTENCE REORDER */}
      {question.type === 'sentence_reorder' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{t('reorder_instructions')}</span>
            {!isAnswered && reorderedWords.length > 0 && (
              <button
                type="button"
                onClick={handleResetReorder}
                className="text-xs text-slate-600 hover:text-rose-600 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RotateCcw size={13} />
                <span>{t('btn_clear')}</span>
              </button>
            )}
          </div>

          <div className="min-h-18 p-4 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/70 flex flex-wrap gap-2 items-center">
            {reorderedWords.length === 0 ? (
              <span className="text-xs text-slate-400 italic">
                {t('reorder_placeholder')}
              </span>
            ) : (
              reorderedWords.map((word, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleWordClickFromReordered(word, idx)}
                  disabled={isAnswered}
                  className="px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 font-bold text-sm shadow-xs hover:border-rose-400 hover:text-rose-600 transition-colors cursor-pointer"
                >
                  {word}
                </button>
              ))
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {availableWords.map((word, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleWordClickFromPool(word, idx)}
                disabled={isAnswered}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-medium text-sm transition-all active:scale-95 cursor-pointer shadow-2xs"
              >
                {word}
              </button>
            ))}
          </div>

          {isAnswered && question.correctOrder && (
            <div className="p-3 bg-emerald-50/80 border border-emerald-200 rounded-xl text-xs text-emerald-950 space-y-1">
              <span className="font-bold">{t('correct_order_label')}</span>
              <p className="font-semibold text-emerald-900 text-sm">
                {question.correctOrder.join(' ')}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 3. ESSAY TYPE */}
      {question.type === 'essay' && (
        <div className="space-y-3">
          <textarea
            rows={4}
            disabled={isAnswered}
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
            placeholder={t('essay_input_placeholder')}
            className="w-full p-4 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-sm text-slate-900 placeholder:text-slate-400 transition-all resize-y shadow-2xs"
          />

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span>{t('char_length_label', { count: essayText.length })}</span>
            {isAnswered && question.keywords && question.keywords.length > 0 && (
              <span className="text-[11px] text-slate-500">
                {t('recommended_keywords', { keywords: question.keywords.join(', ') })}
              </span>
            )}
          </div>

          {isAnswered && (
            <div className="space-y-3 pt-2">
              {question.sampleAnswer && (
                <div className="p-4 bg-indigo-50/80 border border-indigo-200 rounded-2xl space-y-1.5 text-xs text-indigo-950">
                  <div className="font-bold flex items-center gap-1.5 text-indigo-900">
                    <PenTool size={14} />
                    <span>{t('sample_answer_title')}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-indigo-900 whitespace-pre-line font-medium">
                    {question.sampleAnswer}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Explanation Alert when answered */}
      {isAnswered && (
        <div
          className={`p-4 rounded-2xl border text-sm space-y-1.5 animate-in fade-in duration-200 ${
            isCurrentCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : 'bg-rose-50 border-rose-200 text-rose-900'
          }`}
        >
          <div className="font-bold flex items-center gap-1.5">
            {isCurrentCorrect ? (
              <>
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>{t('feedback_correct')}</span>
              </>
            ) : (
              <>
                <XCircle size={16} className="text-rose-600" />
                <span>{t('feedback_explanation')}</span>
              </>
            )}
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Check Answer Button */}
      {!isAnswered && (
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={checkAnswer}
            disabled={
              question.type === 'multiple_choice' ||
              question.type === 'translation' ||
              question.type === 'listen_comprehension'
                ? selectedOption === null
                : question.type === 'sentence_reorder'
                ? reorderedWords.length === 0
                : essayText.trim().length < 2
            }
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            {t('btn_check')}
          </button>
        </div>
      )}
    </div>
  );
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  quizId,
  title,
  questions,
  onComplete,
  onBack,
  timeLimitMinutes,
}) => {
  const { user, reloadProgress } = useAuth();
  const { t } = useLocale();
  const { setQuizActive } = useQuizSession();

  // Matikan AI Tutor selama pengerjaan kuis
  useEffect(() => {
    setQuizActive(true);
    return () => {
      setQuizActive(false);
    };
  }, [setQuizActive]);
  const [activeTab, setActiveTab] = useState<'all' | 'pg' | 'essai' | 'sambung_kata' | 'bebas'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState<
    Record<
      string,
      {
        isAnswered: boolean;
        isCorrect: boolean;
        selectedOption?: number | null;
        reorderedWords?: string[];
        essayText?: string;
      }
    >
  >({});
  const [isFinished, setIsFinished] = useState(false);

  // 25 Soal = 40 Menit (2400 detik). Kuis lebih kecil disesuaikan proporsional.
  const durationMinutes =
    timeLimitMinutes ||
    (questions.length >= 20 ? 40 : Math.max(5, Math.round((questions.length / 25) * 40)));
  const [timeLeft, setTimeLeft] = useState<number>(durationMinutes * 60);
  const timeUp = timeLeft <= 0;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(remainingSecs).padStart(2, '0')}`;
  };

  // Reset timer on quizId change during render
  const [prevQuizId, setPrevQuizId] = useState(quizId);
  if (quizId !== prevQuizId) {
    setPrevQuizId(quizId);
    setTimeLeft(durationMinutes * 60);
  }

  const finishRef = useRef<() => Promise<void>>(async () => {});

  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => {
            finishRef.current();
          }, 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished]);

  // Section counts
  const sectionCounts = {
    all: questions.length,
    pg: questions.filter(
      (q) => q.sectionType === 'pg' || (!q.sectionType && q.type === 'multiple_choice')
    ).length,
    essai: questions.filter(
      (q) => q.sectionType === 'essai' || (!q.sectionType && q.type === 'essay')
    ).length,
    sambung_kata: questions.filter(
      (q) => q.sectionType === 'sambung_kata' || (!q.sectionType && q.type === 'sentence_reorder')
    ).length,
    bebas: questions.filter(
      (q) =>
        q.sectionType === 'bebas' ||
        (!q.sectionType &&
          (q.type === 'listen_comprehension' || q.type === 'translation'))
    ).length,
  };

  // Filtered questions based on activeTab
  const filteredQuestions = questions.filter((q) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pg') return q.sectionType === 'pg' || (!q.sectionType && q.type === 'multiple_choice');
    if (activeTab === 'essai') return q.sectionType === 'essai' || (!q.sectionType && q.type === 'essay');
    if (activeTab === 'sambung_kata') return q.sectionType === 'sambung_kata' || (!q.sectionType && q.type === 'sentence_reorder');
    if (activeTab === 'bebas') return q.sectionType === 'bebas' || (!q.sectionType && (q.type === 'listen_comprehension' || q.type === 'translation'));
    return true;
  });

  const activeQuestion = filteredQuestions[currentIndex] || questions[0];
  const totalInFilter = filteredQuestions.length;

  const handleTabChange = (newTab: 'all' | 'pg' | 'essai' | 'sambung_kata' | 'bebas') => {
    setActiveTab(newTab);
    setCurrentIndex(0);
  };

  const handleAnswerSubmit = (
    questionId: string,
    isCorrect: boolean,
    details: {
      selectedOption?: number | null;
      reorderedWords?: string[];
      essayText?: string;
    }
  ) => {
    setSavedAnswers((prev) => ({
      ...prev,
      [questionId]: {
        isAnswered: true,
        isCorrect,
        ...details,
      },
    }));
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      handleFinishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinishQuiz = async () => {
    const correctCount = Object.values(savedAnswers).filter((a) => a.isCorrect).length;
    const finalPercentage = Math.round((correctCount / questions.length) * 100);

    setIsFinished(true);
    await progressService.saveQuizScore(quizId, finalPercentage, user?.uid);
    await reloadProgress();

    if (finalPercentage >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // ignore
      }
    }
    onComplete?.(finalPercentage);
  };

  useEffect(() => {
    finishRef.current = handleFinishQuiz;
  });

  const handleRetry = () => {
    setSavedAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
    setActiveTab('all');
    setTimeLeft(durationMinutes * 60);
  };

  if (isFinished) {
    const correctCount = Object.values(savedAnswers).filter((a) => a.isCorrect).length;
    const finalPercentage = Math.round((correctCount / questions.length) * 100);
    const isPassed = finalPercentage >= 70;

    const pgCorrect = questions.filter(
      (q) => (q.sectionType === 'pg' || q.type === 'multiple_choice') && savedAnswers[q.id]?.isCorrect
    ).length;
    const essaiCorrect = questions.filter(
      (q) => (q.sectionType === 'essai' || q.type === 'essay') && savedAnswers[q.id]?.isCorrect
    ).length;
    const sambungCorrect = questions.filter(
      (q) => (q.sectionType === 'sambung_kata' || q.type === 'sentence_reorder') && savedAnswers[q.id]?.isCorrect
    ).length;
    const bebasCorrect = questions.filter(
      (q) => (q.sectionType === 'bebas' || q.type === 'listen_comprehension' || q.type === 'translation') && savedAnswers[q.id]?.isCorrect
    ).length;

    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-8 text-center space-y-6 shadow-sm animate-in zoom-in-95 duration-200">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto text-4xl shadow-sm ${
            isPassed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
          }`}
        >
          {isPassed ? <Award size={40} /> : <RotateCcw size={40} />}
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">
            {isPassed ? t('quiz_passed_title') : t('quiz_failed_title')}
          </h2>
          <p className="text-sm text-slate-500">
            {t('quiz_result_subtitle', { title, count: questions.length })}
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4">
          <div className="text-5xl font-black text-slate-900">
            {finalPercentage}%
          </div>
          <p className="text-xs text-slate-500 font-medium">
            {t('answered_correct_summary', { correct: correctCount, total: questions.length })}
          </p>

          {/* Section Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            <div className="p-3 bg-white border border-slate-200 rounded-2xl text-center space-y-1">
              <span className="text-[11px] font-bold text-blue-700 block">{t('badge_pg')}</span>
              <span className="text-base font-extrabold text-slate-900">
                {pgCorrect}/{sectionCounts.pg}
              </span>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-2xl text-center space-y-1">
              <span className="text-[11px] font-bold text-indigo-700 block">{t('badge_essay')}</span>
              <span className="text-base font-extrabold text-slate-900">
                {essaiCorrect}/{sectionCounts.essai}
              </span>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-2xl text-center space-y-1">
              <span className="text-[11px] font-bold text-emerald-700 block">{t('badge_reorder')}</span>
              <span className="text-base font-extrabold text-slate-900">
                {sambungCorrect}/{sectionCounts.sambung_kata}
              </span>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-2xl text-center space-y-1">
              <span className="text-[11px] font-bold text-purple-700 block">{t('badge_free')}</span>
              <span className="text-base font-extrabold text-slate-900">
                {bebasCorrect}/{sectionCounts.bebas}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleRetry}
            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw size={15} />
            <span>{t('try_again')}</span>
          </button>
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-sm cursor-pointer"
            >
              {t('back_to_lesson')}
            </button>
          )}
        </div>
      </div>
    );
  }

  const isCurrentQAnswered = activeQuestion && savedAnswers[activeQuestion.id]?.isAnswered;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Header & Title */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/50 space-y-4">
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 font-medium gap-2">
          <span className="font-bold text-slate-900 text-sm">{title}</span>
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition-colors ${
                timeLeft <= 180
                  ? 'bg-rose-100 text-rose-800 border-rose-300 animate-pulse'
                  : timeLeft <= 600
                  ? 'bg-amber-100 text-amber-800 border-amber-300'
                  : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <Clock size={13} className={timeLeft <= 180 ? 'text-rose-600' : 'text-slate-500'} />
              <span>{t('time_remaining', { time: formatTime(timeLeft) })}</span>
            </div>
            <span className="bg-slate-200/80 px-2.5 py-1 rounded-full font-bold text-slate-700">
              {t('question_of', { current: currentIndex + 1, total: totalInFilter })}
            </span>
          </div>
        </div>

        {/* Section Tabs (Semua, PG, Essai, Sambung Kata, Bebas) */}
        {questions.length >= 10 && (
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-semibold scrollbar-none pb-1">
            <button
              type="button"
              onClick={() => handleTabChange('all')}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/60'
              }`}
            >
              {t('category_all', { count: sectionCounts.all })}
            </button>
            {sectionCounts.pg > 0 && (
              <button
                type="button"
                onClick={() => handleTabChange('pg')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                  activeTab === 'pg'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
              >
                <BookOpen size={12} />
                <span>{t('category_pg', { count: sectionCounts.pg })}</span>
              </button>
            )}
            {sectionCounts.essai > 0 && (
              <button
                type="button"
                onClick={() => handleTabChange('essai')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                  activeTab === 'essai'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
              >
                <PenTool size={12} />
                <span>{t('category_essay', { count: sectionCounts.essai })}</span>
              </button>
            )}
            {sectionCounts.sambung_kata > 0 && (
              <button
                type="button"
                onClick={() => handleTabChange('sambung_kata')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                  activeTab === 'sambung_kata'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
              >
                <Puzzle size={12} />
                <span>{t('category_reorder', { count: sectionCounts.sambung_kata })}</span>
              </button>
            )}
            {sectionCounts.bebas > 0 && (
              <button
                type="button"
                onClick={() => handleTabChange('bebas')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                  activeTab === 'bebas'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
              >
                <SlidersHorizontal size={12} />
                <span>{t('category_free', { count: sectionCounts.bebas })}</span>
              </button>
            )}
          </div>
        )}

        {/* Linear Progress Bar */}
        <div className="h-2 w-full bg-slate-200/70 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalInFilter) * 100}%` }}
          />
        </div>

        {/* Quick Question Navigator Pills */}
        {totalInFilter > 1 && totalInFilter <= 30 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {filteredQuestions.map((q, idx) => {
              const isCurrent = idx === currentIndex;
              const ans = savedAnswers[q.id];
              let pillClass = 'bg-slate-100 text-slate-600 hover:bg-slate-200';

              if (ans?.isAnswered) {
                pillClass = ans.isCorrect
                  ? 'bg-emerald-100 text-emerald-800 font-bold'
                  : 'bg-rose-100 text-rose-800 font-bold';
              }
              if (isCurrent) {
                pillClass += ' ring-2 ring-blue-600 font-black';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center transition-all cursor-pointer ${pillClass}`}
                  title={`${t('question_of', { current: idx + 1, total: totalInFilter })}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Question Content View */}
      <div className="p-6 md:p-8 space-y-6">
        {timeUp && (
          <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl flex items-center gap-3 text-xs text-amber-950 font-semibold animate-in fade-in duration-200 shadow-xs">
            <Clock size={18} className="text-amber-600 shrink-0" />
            <span>
              {t('time_up_alert', { mins: durationMinutes })}
            </span>
          </div>
        )}

        {activeQuestion && (
          <QuestionView
            key={activeQuestion.id}
            question={activeQuestion}
            savedAnswer={savedAnswers[activeQuestion.id]}
            onAnswerSubmit={handleAnswerSubmit}
          />
        )}

        {/* Navigation Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft size={15} />
            <span>{t('btn_prev')}</span>
          </button>

          <div className="flex items-center gap-2">
            {isCurrentQAnswered && (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-semibold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>
                  {currentIndex === totalInFilter - 1
                    ? t('view_quiz_results')
                    : t('btn_next')}
                </span>
                <ChevronRight size={16} />
              </button>
            )}
            {!isCurrentQAnswered && currentIndex === totalInFilter - 1 && (
              <button
                type="button"
                onClick={handleFinishQuiz}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
              >
                {t('submit_quiz')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
