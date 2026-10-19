import { Language, GrammarLesson, DialogueScenario } from '@/types/learning';
import { ALL_GRAMMAR_LESSONS, ALL_DIALOGUES } from '@/data';

export const LANGUAGE_LEVEL_ORDER: Record<Language, string[]> = {
  chinese: ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'],
  japanese: ['JLPT N5', 'JLPT N4', 'JLPT N3', 'JLPT N2', 'JLPT N1'],
  korean: [
    'TOPIK 1',
    'TOPIK 2 (Level 3)',
    'TOPIK 2 (Level 4)',
    'TOPIK 2 (Level 5)',
    'TOPIK 2 (Level 6)',
  ],
  english: [
    'A2 (Elementary)',
    'B1 (Intermediate)',
    'B2 (Upper-Intermediate)',
    'C1 (Advanced)',
  ],
  thai: [
    'Tingkat 1 (Dasar & Nada)',
    'Tingkat 2 (Percakapan Sehari-hari)',
    'Tingkat 3 (Menengah)',
    'Tingkat 4 (Akademik & Bisnis)',
  ],
  russian: [
    'A1 (Pemula Sirilik)',
    'A2 (Dasar Kasus)',
    'B1 (Menengah TORFL-1)',
    'B2 (Menengah Atas TORFL-2)',
    'C1 (Akademik & Tesis)',
  ],
  arabic: [
    'Mustawa 1 (Dasar & Hijaiyah)',
    'Mustawa 2 (Kaidah Kalimat Sederhana)',
    'Mustawa 3 (Menengah Nahwu-Sharaf)',
    'Mustawa 4 (Mahir Fusha & Akademik)',
  ],
  french: [
    'A1 (Découverte)',
    'A2 (Survie)',
    'B1 (Seuil DELF B1)',
    'B2 (Indépendant DELF B2)',
    'C1 (Autonome DALF C1)',
  ],
  dutch: [
    'A1 (Basis)',
    'A2 (Inburgering NT2-I)',
    'B1 (NT2-II MBO/HBO)',
    'B2 (Professioneel Universiteit)',
    'C1 (Academisch)',
  ],
  german: [
    'A1 (Start Deutsch 1)',
    'A2 (Start Deutsch 2)',
    'B1 (Goethe-Zertifikat B1)',
    'B2 (Beruf & Studium B2)',
    'C1 (TestDaF & DSH Akademik)',
  ],
  spanish: [
    'A1 (Acceso)',
    'A2 (Plataforma)',
    'B1 (Umbral DELE B1)',
    'B2 (Avanzado DELE B2)',
    'C1 (Dominio Operativo Eficaz)',
  ],
};

export interface LessonLockStatus {
  isUnlocked: boolean;
  reason?: string;
  prerequisiteLevel?: string;
  prerequisiteLessonId?: string;
  prerequisiteLessonTitle?: string;
}

export interface DialogueLockStatus {
  isUnlocked: boolean;
  reason?: string;
  prerequisiteDialogueId?: string;
  prerequisiteDialogueTitle?: string;
}

export interface LevelSummary {
  levelName: string;
  levelOrder: number;
  totalLessons: number;
  completedLessons: number;
  isMastered: boolean;
  isUnlocked: boolean;
  lessons: GrammarLesson[];
}

/**
 * Checks if a grammar lesson is unlocked based on prerequisite level completion.
 * Rule:
 * 1. Unit 1 is always unlocked.
 * 2. To access any lesson in level N (e.g. HSK 2), ALL lessons in all strictly earlier levels (e.g. HSK 1) must be completed.
 * 3. Within the same level, unit M requires unit M-1 to be completed.
 */
export function checkLessonLock(
  lesson: GrammarLesson,
  completedLessons: string[]
): LessonLockStatus {
  const allLessons = ALL_GRAMMAR_LESSONS[lesson.languageId] || [];
  const levelOrder = LANGUAGE_LEVEL_ORDER[lesson.languageId] || [];

  const currentLevelIdx = levelOrder.indexOf(lesson.level);

  // If level not found in list, fallback to unit order check
  if (currentLevelIdx === -1) {
    if (lesson.unit === 1) return { isUnlocked: true };
    const prevUnit = allLessons.find((l) => l.unit === lesson.unit - 1);
    if (prevUnit && !completedLessons.includes(prevUnit.id)) {
      return {
        isUnlocked: false,
        reason: `Selesaikan Unit ${prevUnit.unit} (${prevUnit.title}) terlebih dahulu.`,
        prerequisiteLessonId: prevUnit.id,
        prerequisiteLessonTitle: prevUnit.title,
      };
    }
    return { isUnlocked: true };
  }

  // Check 1: All previous levels in levelOrder must be 100% completed
  for (let i = 0; i < currentLevelIdx; i++) {
    const prevLevelName = levelOrder[i];
    const prevLevelLessons = allLessons.filter((l) => l.level === prevLevelName);
    const uncompleted = prevLevelLessons.find((l) => !completedLessons.includes(l.id));

    if (uncompleted) {
      return {
        isUnlocked: false,
        prerequisiteLevel: prevLevelName,
        prerequisiteLessonId: uncompleted.id,
        prerequisiteLessonTitle: uncompleted.title,
        reason: `Anda harus menguasai seluruh materi pada tingkat ${prevLevelName} terlebih dahulu sebelum membuka ${lesson.level}.`,
      };
    }
  }

  // Check 2: Within the same level, earlier units must be completed
  const sameLevelLessons = allLessons
    .filter((l) => l.level === lesson.level)
    .sort((a, b) => a.unit - b.unit);

  const lessonIdxInLevel = sameLevelLessons.findIndex((l) => l.id === lesson.id);
  if (lessonIdxInLevel > 0) {
    const prevLessonInLevel = sameLevelLessons[lessonIdxInLevel - 1];
    if (!completedLessons.includes(prevLessonInLevel.id)) {
      return {
        isUnlocked: false,
        prerequisiteLevel: lesson.level,
        prerequisiteLessonId: prevLessonInLevel.id,
        prerequisiteLessonTitle: prevLessonInLevel.title,
        reason: `Selesaikan Unit ${prevLessonInLevel.unit}: "${prevLessonInLevel.title}" terlebih dahulu.`,
      };
    }
  }

  return { isUnlocked: true };
}

/**
 * Checks if a dialogue is unlocked.
 * Dialogue 1 is always unlocked. Subsequent dialogues require the previous dialogue to be completed.
 */
export function checkDialogueLock(
  dialogue: DialogueScenario,
  completedDialogues: string[]
): DialogueLockStatus {
  const dialogues = ALL_DIALOGUES[dialogue.languageId] || [];
  const currentIndex = dialogues.findIndex((d) => d.id === dialogue.id);

  if (currentIndex <= 0) {
    return { isUnlocked: true };
  }

  const prevDialogue = dialogues[currentIndex - 1];
  if (!completedDialogues.includes(prevDialogue.id)) {
    return {
      isUnlocked: false,
      prerequisiteDialogueId: prevDialogue.id,
      prerequisiteDialogueTitle: prevDialogue.title,
      reason: `Selesaikan Skenario "${prevDialogue.title}" terlebih dahulu untuk membuka percakapan tingkat lanjut ini.`,
    };
  }

  return { isUnlocked: true };
}

/**
 * Returns summary of all levels for a language with completion percentage & unlock status.
 */
export function getLanguageLevelsSummary(
  language: Language,
  completedLessons: string[]
): LevelSummary[] {
  const allLessons = ALL_GRAMMAR_LESSONS[language] || [];
  const levelOrder = LANGUAGE_LEVEL_ORDER[language] || [];

  return levelOrder.map((levelName, index) => {
    const levelLessons = allLessons.filter((l) => l.level === levelName);
    const completedCount = levelLessons.filter((l) => completedLessons.includes(l.id)).length;
    const isMastered = levelLessons.length > 0 && completedCount === levelLessons.length;

    // A level is unlocked if it's the first level, or all previous levels are mastered
    let isUnlocked = true;
    for (let prevIdx = 0; prevIdx < index; prevIdx++) {
      const prevLvlName = levelOrder[prevIdx];
      const prevLessons = allLessons.filter((l) => l.level === prevLvlName);
      const prevDone = prevLessons.every((l) => completedLessons.includes(l.id));
      if (!prevDone) {
        isUnlocked = false;
        break;
      }
    }

    return {
      levelName,
      levelOrder: index + 1,
      totalLessons: levelLessons.length,
      completedLessons: completedCount,
      isMastered,
      isUnlocked,
      lessons: levelLessons,
    };
  });
}
