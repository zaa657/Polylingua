import { notFound } from 'next/navigation';
import { Language } from '@/types/learning';
import { LANGUAGES, LANGUAGE_LIST } from '@/data/languages';
import { getVocabulary } from '@/data';
import { VocabularyClient } from './VocabularyClient';

export function generateStaticParams() {
  return LANGUAGE_LIST.map((l) => ({ language: l.id }));
}

interface PageProps {
  params: Promise<{ language: string }>;
}

export default async function Page({ params }: PageProps) {
  const { language } = await params;
  const langMeta = LANGUAGES[language as Language];

  if (!langMeta) {
    notFound();
  }

  const vocabList = getVocabulary(language as Language);

  return (
    <VocabularyClient
      language={language as Language}
      initialVocab={vocabList}
    />
  );
}
