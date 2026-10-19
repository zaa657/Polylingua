import { UserProgress } from '@/types/learning';
import { firestore, isFirebaseConfigured } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const LEGACY_STORAGE_KEY = 'bljr_user_progress_v1';

export const DEFAULT_PROGRESS: UserProgress = {
  userId: 'guest_user',
  isGuest: true,
  completedLessons: [],
  completedDialogues: [],
  quizScores: {},
  lastActiveDate: new Date().toISOString().split('T')[0],
  activeLanguage: 'chinese',
  speechSpeed: 1.0,
  bookmarks: [],
  savedWords: [],
  studyAbroadChecklist: [],
};

export class ProgressService {
  private getStorageKey(userId?: string | null): string {
    if (!userId || userId === 'guest_user') {
      return 'bljr_progress_guest';
    }
    return `bljr_progress_${userId}`;
  }

  private createFreshProgress(userId?: string | null): UserProgress {
    const isGuestUser = !userId || userId === 'guest_user';
    return {
      userId: isGuestUser ? 'guest_user' : userId,
      isGuest: isGuestUser,
      completedLessons: [],
      completedDialogues: [],
      quizScores: {},
      lastActiveDate: new Date().toISOString().split('T')[0],
      activeLanguage: 'chinese',
      speechSpeed: 1.0,
      bookmarks: [],
      savedWords: [],
      studyAbroadChecklist: [],
    };
  }

  private getLocalProgress(userId?: string | null): UserProgress {
    if (typeof window === 'undefined') return this.createFreshProgress(userId);
    const key = this.getStorageKey(userId);
    try {
      let raw = localStorage.getItem(key);

      // Migrasi data lama dari LEGACY_STORAGE_KEY khusus untuk akun tamu (guest)
      if (!raw && (!userId || userId === 'guest_user')) {
        const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacyRaw) {
          raw = legacyRaw;
          localStorage.setItem(key, legacyRaw);
        }
      }

      if (!raw) {
        const fresh = this.createFreshProgress(userId);
        this.saveLocalProgress(fresh, userId);
        return fresh;
      }
      return JSON.parse(raw);
    } catch {
      return this.createFreshProgress(userId);
    }
  }

  private saveLocalProgress(data: UserProgress, userId?: string | null): void {
    if (typeof window === 'undefined') return;
    const key = this.getStorageKey(userId || data.userId);
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save progress to localStorage:', e);
    }
  }

  public async getProgress(userId?: string | null): Promise<UserProgress> {
    if (userId && userId !== 'guest_user' && isFirebaseConfigured && firestore) {
      try {
        const userDocRef = doc(firestore, 'users', userId, 'profile', 'progress');
        const snap = await getDoc(userDocRef);
        if (snap.exists()) {
          const remoteData = snap.data() as UserProgress;
          this.saveLocalProgress(remoteData, userId);
          return remoteData;
        }
      } catch (err) {
        console.warn('Could not fetch Firestore progress, falling back to local:', err);
      }
    }
    return this.getLocalProgress(userId);
  }

  public async resetProgress(userId?: string | null): Promise<UserProgress> {
    const fresh = this.createFreshProgress(userId);
    await this.saveProgress(fresh, userId);
    return fresh;
  }

  public async saveProgress(progress: UserProgress, userId?: string | null): Promise<void> {
    const today = new Date().toISOString().split('T')[0];
    progress.lastActiveDate = today;
    if (userId && userId !== 'guest_user') {
      progress.userId = userId;
      progress.isGuest = false;
    }

    // Always cache locally
    this.saveLocalProgress(progress, userId);

    // Save to Firestore if available
    if (userId && isFirebaseConfigured && firestore) {
      try {
        const userDocRef = doc(firestore, 'users', userId, 'profile', 'progress');
        await setDoc(userDocRef, progress, { merge: true });
      } catch (err) {
        console.warn('Failed to sync progress to Firestore:', err);
      }
    }
  }

  public async markLessonComplete(lessonId: string, userId?: string | null): Promise<UserProgress> {
    const current = await this.getProgress(userId);
    if (!current.completedLessons.includes(lessonId)) {
      current.completedLessons.push(lessonId);
      await this.saveProgress(current, userId);
    }
    return current;
  }

  public async markDialogueComplete(dialogueId: string, userId?: string | null): Promise<UserProgress> {
    const current = await this.getProgress(userId);
    if (!current.completedDialogues.includes(dialogueId)) {
      current.completedDialogues.push(dialogueId);
      await this.saveProgress(current, userId);
    }
    return current;
  }

  public async saveQuizScore(quizId: string, score: number, userId?: string | null): Promise<UserProgress> {
    const current = await this.getProgress(userId);
    const existing = current.quizScores[quizId] || 0;
    if (score > existing) {
      current.quizScores[quizId] = score;
    }
    await this.saveProgress(current, userId);
    return current;
  }

  public async setSpeechSpeed(speed: number, userId?: string | null): Promise<UserProgress> {
    const current = await this.getProgress(userId);
    current.speechSpeed = speed;
    await this.saveProgress(current, userId);
    return current;
  }

  public async toggleBookmark(itemId: string, userId?: string | null): Promise<UserProgress> {
    const current = await this.getProgress(userId);
    if (current.bookmarks.includes(itemId)) {
      current.bookmarks = current.bookmarks.filter((b) => b !== itemId);
    } else {
      current.bookmarks.push(itemId);
    }
    await this.saveProgress(current, userId);
    return current;
  }

  public async toggleStudyChecklist(itemId: string, userId?: string | null): Promise<UserProgress> {
    const current = await this.getProgress(userId);
    if (!current.studyAbroadChecklist) {
      current.studyAbroadChecklist = [];
    }
    if (current.studyAbroadChecklist.includes(itemId)) {
      current.studyAbroadChecklist = current.studyAbroadChecklist.filter((id) => id !== itemId);
    } else {
      current.studyAbroadChecklist.push(itemId);
    }
    await this.saveProgress(current, userId);
    return current;
  }

  public async completeStudyTargetTest(
    itemId: string,
    score: number,
    userId?: string | null
  ): Promise<UserProgress> {
    const current = await this.getProgress(userId);
    if (!current.studyAbroadChecklist) {
      current.studyAbroadChecklist = [];
    }
    if (!current.studyAbroadChecklist.includes(itemId)) {
      current.studyAbroadChecklist.push(itemId);
    }
    if (!current.quizScores) {
      current.quizScores = {};
    }
    current.quizScores[`study-target-${itemId}`] = score;
    await this.saveProgress(current, userId);
    return current;
  }

  public async toggleSavedWord(wordId: string, userId?: string | null): Promise<UserProgress> {
    const current = await this.getProgress(userId);
    if (!current.savedWords) {
      current.savedWords = [];
    }
    if (current.savedWords.includes(wordId)) {
      current.savedWords = current.savedWords.filter((id) => id !== wordId);
    } else {
      current.savedWords.push(wordId);
    }
    await this.saveProgress(current, userId);
    return current;
  }
}

export const progressService = new ProgressService();
