import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  try {
    const { messages, targetLanguage = 'chinese', userPrompt } = await req.json();

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          reply:
            'Kunci API Google Gemini (GEMINI_API_KEY) belum dikonfigurasi di file `.env.local` atau Vercel Environment Variables. Silakan dapatkan API Key gratis di https://aistudio.google.com/apikey dan tambahkan variabel `GEMINI_API_KEY=kunci_anda`.',
          isConfigured: false,
        },
        { status: 200 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const systemPrompt = `Anda adalah "Polylingua AI", asisten tutor bahasa cerdas, ramah, dan interaktif untuk platform pembelajaran Polylingua.
Bahasa target yang sedang dipelajari pengguna saat ini adalah: "${targetLanguage}".

Tugas Utama Anda:
1. Menjawab pertanyaan seputar tata bahasa (grammar), kosakata (vocabulary), pelafalan, idiom, dan budaya bahasa target dengan jelas dan mudah dimengerti.
2. Membantu persiapan ujian standar bahasa (seperti New HSK 3.0 untuk Mandarin, JLPT untuk Jepang, TOPIK untuk Korea, CEFR untuk Inggris/Eropa).
3. Jika pengguna menanyakan bahasa Mandarin: SELALU sertakan karakter Hanzi, Pinyin lengkap dengan tanda nada, dan terjemahan bahasa Indonesia yang akurat.
4. Jika pengguna menulis kalimat dalam bahasa target, periksa ketepatannya (koreksi tata bahasa, beri tahu letak kesalahannya, dan berikan versi yang lebih alami/native).
5. Dapat diajak roleplay atau latihan percakapan santai dalam bahasa target dengan menyertakan terjemahan untuk membantu pembelajar.
6. Berikan respon yang terstruktur, rapi menggunakan format Markdown, tidak bertele-tele, dan selalu memberi semangat kepada pembelajar.`;

    // Format chat history for Google Gemini
    const contents = [];
    if (Array.isArray(messages) && messages.length > 0) {
      for (const m of messages) {
        contents.push({
          role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
          parts: [{ text: m.content || '' }],
        });
      }
    } else if (userPrompt) {
      contents.push({
        role: 'user',
        parts: [{ text: userPrompt }],
      });
    }

    if (contents.length === 0) {
      return NextResponse.json({ error: 'Pesan tidak boleh kosong.' }, { status: 400 });
    }

    // Try available Gemini Flash models with automatic failover
    // Note: Free tier keys have quota 0 on gemini-pro, so we prioritize the highly responsive Flash models
    const candidateModels = [
      'gemini-flash-latest',
      'gemini-flash-lite-latest',
      'gemini-2.0-flash',
      'gemini-2.0-flash-lite',
    ];
    let reply = '';
    let lastError: any = null;

    for (const modelName of candidateModels) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: systemPrompt,
        });

        const result = await model.generateContent({
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          },
        });

        reply = result.response.text();
        if (reply) break;
      } catch (err) {
        lastError = err;
        console.warn(`Model ${modelName} failed, trying next candidate...`);
      }
    }

    if (!reply) {
      throw lastError || new Error('Semua model Gemini tidak dapat diakses.');
    }

    return NextResponse.json({ reply, isConfigured: true });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      {
        error: error?.message || 'Terjadi kesalahan saat memproses permintaan AI.',
        reply:
          'Maaf, terjadi kendala teknis saat menghubungkan ke Google Gemini AI. Pastikan GEMINI_API_KEY Anda aktif dan kuota mencukupi.',
      },
      { status: 500 }
    );
  }
}
