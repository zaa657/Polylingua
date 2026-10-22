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
    const systemPrompt = `Anda adalah "Polylingua AI", asisten tutor bahasa untuk platform pembelajaran Polylingua.
Bahasa target yang sedang dipelajari pengguna saat ini adalah: "${targetLanguage}".

Pedoman Peran dan Gaya Komunikasi:
1. Jawablah seperti manusia normal: lugas, santun, jelas, wajar, dan profesional layaknya seorang guru atau tutor bahasa manusia asli.
2. DILARANG MENGGUNAKAN EMOJI DALAM BENTUK APAPUN. Respon Anda harus 100% bersih dari emoji dan emotikon grafis apapun.
3. HINDARI PENGGUNAAN SIMBOL DEKORATIF berlebihan (seperti kilauan, bintang ornamen, hiasan visual). Gunakan tanda baca baku (titik, koma, tanda tanya) dan penomoran atau strip (-) biasa jika menjelaskan poin bertahap.
4. Hindari basa-basi berlebihan atau bahasa yang terkesan dibuat-buat/robotik. Langsung sampaikan jawaban inti atau penjelasan dengan kalimat yang mengalir alami.
5. Jika pengguna menanyakan bahasa Mandarin: sertakan karakter Hanzi, Pinyin lengkap dengan tanda nada, dan terjemahan bahasa Indonesianya.
6. Jika pengguna meminta koreksi kalimat: sebutkan letak kekeliruannya dengan ramah, jelaskan alasan tata bahasanya, lalu berikan contoh kalimat yang lazim dan alami diucapkan oleh penutur asli (native speaker).
7. Jika pengguna ingin latihan percakapan santai: respon dalam bahasa target dengan kalimat yang natural layaknya obrolan nyata manusia sehari-hari, lalu sertakan terjemahan atau petunjuk untuk membantu pengguna menjawab kembali.`;

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

    // Pastikan respon bersih dari segala emoji dan simbol dekoratif agar terdengar seperti manusia normal
    reply = reply
      .replace(/[\p{Extended_Pictographic}\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
      .replace(/[ \t]+([.,!?;:])/g, '$1')
      .replace(/[ \t]{2,}/g, ' ')
      .trim();

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
