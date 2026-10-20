import { Language } from '@/types/learning';

/**
 * High-Performance Hybrid Multi-Language Speech Engine
 * Features:
 * - Pre-warmed voice caching for zero-delay instant playback.
 * - Native Web Speech API when high-quality local voices are present.
 * - Automatic high-fidelity cloud audio fallback for missing language packs (e.g. Thai, Arabic, Russian, Dutch).
 * - Stall watchdog timer (450ms) to bypass Android WebView / Chrome speech synthesis hangs.
 * - In-memory HTML5 Audio caching for instant repeat pronunciations.
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
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private currentAudio: HTMLAudioElement | null = null;
  private audioCache = new Map<string, HTMLAudioElement>();
  private cachedVoices: SpeechSynthesisVoice[] = [];
  private voicesLoaded = false;

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
        this.voicesLoaded = true;
      }
    } catch (e) {
      console.warn('Speech voices initialization notice:', e);
    }
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

    // 1. Try exact match (e.g. 'zh-CN')
    const exact = voices.find((v) => v.lang.toLowerCase() === lower);
    if (exact) return exact;

    // 2. Try prefix match (e.g. 'th-TH' matches 'th' or 'th_TH')
    const prefixMatch = voices.find((v) => v.lang.toLowerCase().startsWith(prefix));
    if (prefixMatch) return prefixMatch;

    return null;
  }

  public speak(text: string, options: SpeechOptions): void {
    if (!text || typeof window === 'undefined') {
      options.onEnd?.();
      return;
    }

    // Cancel any previous speech or audio
    this.stop();

    const cleanText = text.trim();
    const lang = options.lang || 'en-US';
    const rate = options.rate ?? 1.0;

    // Check if system has a locally installed matching voice
    const matchedVoice = this.findMatchingVoice(lang);

    // If a native system voice is ready:
    if ('speechSynthesis' in window && matchedVoice) {
      let started = false;
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = lang;
      utterance.voice = matchedVoice;
      utterance.rate = rate;
      utterance.pitch = options.pitch ?? 1.0;

      // Stall watchdog timer: If Web Speech doesn't emit onstart within 450ms,
      // fall back instantly to high-fidelity audio stream.
      const stallTimer = setTimeout(() => {
        if (!started) {
          console.warn('SpeechSynthesis stall detected, falling back to audio stream');
          try {
            window.speechSynthesis.cancel();
          } catch {}
          this.playAudioFallback(cleanText, lang, rate, options);
        }
      }, 450);

      utterance.onstart = () => {
        started = true;
        clearTimeout(stallTimer);
        this.currentUtterance = utterance;
        options.onStart?.();
      };

      utterance.onend = () => {
        clearTimeout(stallTimer);
        this.currentUtterance = null;
        options.onEnd?.();
      };

      utterance.onerror = (e) => {
        clearTimeout(stallTimer);
        this.currentUtterance = null;
        console.warn('SpeechSynthesis error, falling back to audio stream:', e);
        this.playAudioFallback(cleanText, lang, rate, options);
      };

      this.currentUtterance = utterance;
      try {
        window.speechSynthesis.speak(utterance);
        // Fix Android WebView queue pause
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
      } catch (err) {
        clearTimeout(stallTimer);
        this.playAudioFallback(cleanText, lang, rate, options);
      }
      return;
    }

    // No native voice installed on device -> Use instant high-fidelity audio stream
    this.playAudioFallback(cleanText, lang, rate, options);
  }

  private playAudioFallback(
    text: string,
    lang: string,
    rate: number,
    options: SpeechOptions
  ): void {
    try {
      const ttsLang = TTS_FALLBACK_CODES[lang] || TTS_FALLBACK_CODES[lang.slice(0, 2)] || 'en';
      const encoded = encodeURIComponent(text);
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${ttsLang}&client=tw-ob&q=${encoded}`;

      let audio = this.audioCache.get(url);
      if (!audio) {
        audio = new Audio(url);
        if (this.audioCache.size > 100) {
          const firstKey = this.audioCache.keys().next().value;
          if (firstKey) this.audioCache.delete(firstKey);
        }
        this.audioCache.set(url, audio);
      }

      this.currentAudio = audio;
      audio.playbackRate = Math.max(0.5, Math.min(rate, 2.0));
      audio.currentTime = 0;

      audio.onplay = () => {
        options.onStart?.();
      };

      audio.onended = () => {
        this.currentAudio = null;
        options.onEnd?.();
      };

      audio.onerror = (e) => {
        this.currentAudio = null;
        console.warn('Audio fallback playback error:', e);
        options.onError?.(e);
        options.onEnd?.();
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          this.currentAudio = null;
          console.warn('Audio playback notice:', err);
          options.onError?.(err);
          options.onEnd?.();
        });
      }
    } catch (err) {
      console.warn('Failed to initialize audio fallback:', err);
      options.onError?.(err);
      options.onEnd?.();
    }
  }

  public stop(): void {
    if (typeof window === 'undefined') return;

    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch {}
      this.currentAudio = null;
    }

    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
      this.currentUtterance = null;
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
