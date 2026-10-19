import { notFound } from 'next/navigation';
import { Language } from '@/types/learning';
import { LANGUAGES } from '@/data/languages';
import { ALL_GRAMMAR_LESSONS, getGrammarLessonById } from '@/data';
import { GrammarLessonDetailClient } from './GrammarLessonDetailClient';

export function generateStaticParams() {
  const params: Array<{ language: string; lessonId: string }> = [];
  for (const lang of Object.keys(ALL_GRAMMAR_LESSONS) as Language[]) {
    for (const lesson of ALL_GRAMMAR_LESSONS[lang] || []) {
      params.push({ language: lang, lessonId: lesson.id });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{
    language: string;
    lessonId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { language, lessonId } = await params;
  const langMeta = LANGUAGES[language as Language];
  const lesson = getGrammarLessonById(lessonId);

  if (!langMeta || !lesson) {
    notFound();
  }

  return (
    <GrammarLessonDetailClient
      language={language as Language}
      lesson={lesson}
    />
  );
}
