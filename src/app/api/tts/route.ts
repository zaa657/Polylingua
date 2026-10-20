import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LANGS: Record<string, string> = {
  th: 'th',
  thai: 'th',
  'th-th': 'th',
  ar: 'ar',
  arabic: 'ar',
  'ar-sa': 'ar',
  ru: 'ru',
  russian: 'ru',
  'ru-ru': 'ru',
  zh: 'zh-CN',
  chinese: 'zh-CN',
  'zh-cn': 'zh-CN',
  ja: 'ja',
  japanese: 'ja',
  'ja-jp': 'ja',
  ko: 'ko',
  korean: 'ko',
  'ko-kr': 'ko',
  en: 'en',
  english: 'en',
  'en-us': 'en',
  fr: 'fr',
  french: 'fr',
  'fr-fr': 'fr',
  nl: 'nl',
  dutch: 'nl',
  'nl-nl': 'nl',
  de: 'de',
  german: 'de',
  'de-de': 'de',
  es: 'es',
  spanish: 'es',
  'es-es': 'es',
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get('text');
  const rawLang = (searchParams.get('lang') || 'en').toLowerCase().trim();

  if (!text || text.trim().length === 0) {
    return new NextResponse('Missing text parameter', { status: 400 });
  }

  const langCode =
    SUPPORTED_LANGS[rawLang] ||
    SUPPORTED_LANGS[rawLang.slice(0, 2)] ||
    'en';

  // Limit text length to 250 characters for fast audio processing
  const safeText = text.trim().slice(0, 250);

  const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${encodeURIComponent(
    langCode
  )}&client=tw-ob&q=${encodeURIComponent(safeText)}`;

  try {
    const res = await fetch(googleUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      },
    });

    if (!res.ok) {
      return new NextResponse(`TTS upstream response error: ${res.statusText}`, {
        status: res.status,
      });
    }

    const audioBuffer = await res.arrayBuffer();

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control':
          'public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000',
        'Accept-Ranges': 'bytes',
      },
    });
  } catch (error) {
    console.error('TTS Proxy Error:', error);
    return new NextResponse('Internal TTS Proxy Error', { status: 500 });
  }
}
