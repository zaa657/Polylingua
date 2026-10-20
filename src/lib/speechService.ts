import { Language } from '@/types/learning';

/**
 * High-Performance Unified Multi-Language Speech Engine
 * 
 * Solves:
 * 1. Double-audio bug: Synchronously halts any active audio stream before playing a new one.
 *    No simultaneous overlapping speech across rapid clicks.
 * 2. High-fidelity native pronunciation for all 11 languages via Edge-cached /api/tts.
 * 3. Offline Web Speech API fallback if network audio is unavailable.
 */

export const VOICE_LANG_CODES: Record<Language, string> = {
  chinese: 'zh-CN',
  japanese: 'ja-JP',
  korean: 'ko-KR',
  english: 'en-US',
  thai: 'th-TH',
  russian: 'ru-RU',
  arabic: 'ar-SA',
  french: 'fr-FR',
  dutch: 'nl-NL',
  german: 'de-DE',
  spanish: 'es-ES',
};

export const TTS_FALLBACK_CODES: Record<string, string> = {
  'zh-CN': 'zh-CN',
  zh: 'zh-CN',
  chinese: 'zh-CN',
  'ja-JP': 'ja',
  ja: 'ja',
  japanese: 'ja',
  'ko-KR': 'ko',
  ko: 'ko',
  korean: 'ko',
  'en-US': 'en',
  en: 'en',
  english: 'en',
  'th-TH': 'th',
  th: 'th',
  thai: 'th',
  'ru-RU': 'ru',
  ru: 'ru',
  russian: 'ru',
  'ar-SA': 'ar',
  ar: 'ar',
  arabic: 'ar',
  'fr-FR': 'fr',
  fr: 'fr',
  french: 'fr',
  'nl-NL': 'nl',
  nl: 'nl',
  dutch: 'nl',
  'de-DE': 'de',
  de: 'de',
  german: 'de',
  'es-ES': 'es',
  es: 'es',
  spanish: 'es',
};

export function getVoiceLangCode(lang: Language): string {
  return VOICE_LANG_CODES[lang] || 'en-US';
}

export interface SpeechOptions {
  lang: string;
  rate?: number; // e.g. 0.75 or 1.0
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: unknown) => void;
}

class SpeechService {
  private currentAudio: HTMLAudioElement | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private cachedVoices: SpeechSynthesisVoice[] = [];
  private activeToken: number = 0;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.initVoices();
      try {
        window.speechSynthesis.onvoiceschanged = () => {
          this.initVoices();
        };
      } catch {}
    }
  }

  private initVoices(): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length > 0) {
        this.cachedVoices = v;
      }
    } catch {}
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined';
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (this.cachedVoices.length === 0) {
      this.initVoices();
    }
    return this.cachedVoices;
  }

  private findMatchingVoice(langCode: string): SpeechSynthesisVoice | null {
    const voices = this.getVoices();
    if (!voices || voices.length === 0) return null;

    const lower = langCode.toLowerCase();
    const prefix = lower.slice(0, 2);

    const exact = voices.find((v) => v.lang.toLowerCase() === lower);
    if (exact) return exact;

    const prefixMatch = voices.find((v) => v.lang.toLowerCase().startsWith(prefix));
    if (prefixMatch) return prefixMatch;

    return null;
  }

  /**
   * Immediately stops any playing audio and cancels active Web Speech.
   * Guarantees zero overlapping audio when rapidly clicking words.
   */
  public stop(): void {
    if (typeof window === 'undefined') return;

    // Invalidate any active play token
    this.activeToken++;

    // 1. Immediately kill active HTML5 audio
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
        this.currentAudio.onplay = null;
        this.currentAudio.onended = null;
        this.currentAudio.onerror = null;
        this.currentAudio.src = '';
      } catch {}
      this.currentAudio = null;
    }

    // 2. Immediately cancel Web Speech API
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
      this.currentUtterance = null;
    }
  }

  /**
   * Speak the given text in the requested language.
   * Automatically stops any currently playing audio so that subsequent clicks
   * immediately cut off the previous word with zero delay and zero double-talk.
   */
  public speak(text: string, options: SpeechOptions): void {
    if (!text || typeof window === 'undefined') {
      options.onEnd?.();
      return;
    }

    // Synchronously stop any active speech/audio first
    this.stop();

    const cleanText = text.trim();
    const lang = options.lang || 'en-US';
    const rate = options.rate ?? 1.0;
    const currentToken = this.activeToken;

    // Use unified studio-quality TTS endpoint for consistent, natural pronunciation
    // across all 11 languages (Korean, Dutch, German, Spanish, French, Thai, Arabic, Russian, etc.)
    this.playAudioDirect(cleanText, lang, rate, currentToken, options);
  }

  private playAudioDirect(
    text: string,
    lang: string,
    rate: number,
    token: number,
    options: SpeechOptions
  ): void {
    try {
      const lowerLang = lang.toLowerCase();
      const ttsLang =
        TTS_FALLBACK_CODES[lang] ||
        TTS_FALLBACK_CODES[lowerLang] ||
        TTS_FALLBACK_CODES[lowerLang.slice(0, 2)] ||
        'en';

      const encoded = encodeURIComponent(text);
      const url = `/api/tts?text=${encoded}&lang=${encodeURIComponent(ttsLang)}`;

      const audio = new Audio(url);
      audio.preload = 'auto';
      audio.playbackRate = Math.max(0.5, Math.min(rate, 2.0));

      this.currentAudio = audio;

      audio.onplay = () => {
        if (this.activeToken !== token) {
          try {
            audio.pause();
            audio.src = '';
          } catch {}
          return;
        }
        options.onStart?.();
      };

      audio.onended = () => {
        if (this.currentAudio === audio) {
          this.currentAudio = null;
        }
        if (this.activeToken === token) {
          options.onEnd?.();
        }
      };

      audio.onerror = () => {
        if (this.currentAudio === audio) {
          this.currentAudio = null;
        }
        if (this.activeToken === token) {
          // If offline or proxy fails, seamlessly fall back to local Web Speech API
          this.playWebSpeechFallback(text, lang, rate, token, options);
        }
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (this.currentAudio === audio) {
            this.currentAudio = null;
          }
          if (this.activeToken === token) {
            this.playWebSpeechFallback(text, lang, rate, token, options);
          }
        });
      }
    } catch {
      this.playWebSpeechFallback(text, lang, rate, token, options);
    }
  }

  /**
   * Offline fallback to browser speech synthesis when internet is unavailable.
   */
  private playWebSpeechFallback(
    text: string,
    lang: string,
    rate: number,
    token: number,
    options: SpeechOptions
  ): void {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (this.activeToken === token) {
        options.onEnd?.();
      }
      return;
    }

    try {
      window.speechSynthesis.cancel();

      if (this.activeToken !== token) return;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      utterance.pitch = 1.0;

      const matchedVoice = this.findMatchingVoice(lang);
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onstart = () => {
        if (this.activeToken !== token) {
          try {
            window.speechSynthesis.cancel();
          } catch {}
          return;
        }
        this.currentUtterance = utterance;
        options.onStart?.();
      };

      utterance.onend = () => {
        if (this.currentUtterance === utterance) {
          this.currentUtterance = null;
        }
        if (this.activeToken === token) {
          options.onEnd?.();
        }
      };

      utterance.onerror = () => {
        if (this.currentUtterance === utterance) {
          this.currentUtterance = null;
        }
        if (this.activeToken === token) {
          options.onEnd?.();
        }
      };

      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    } catch {
      if (this.activeToken === token) {
        options.onEnd?.();
      }
    }
  }

  public isSpeaking(): boolean {
    if (typeof window === 'undefined') return false;
    const synthSpeaking = 'speechSynthesis' in window ? window.speechSynthesis.speaking : false;
    const audioPlaying = this.currentAudio ? !this.currentAudio.paused : false;
    return synthSpeaking || audioPlaying;
  }
}

export const speechService = new SpeechService();
