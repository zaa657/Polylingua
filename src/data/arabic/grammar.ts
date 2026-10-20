import { GrammarLesson } from '@/types/learning';

export const ARABIC_GRAMMAR: GrammarLesson[] = [
  {
    "id": "ar-gram-1",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "unit": 1,
    "title": "Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar",
    "titleNative": "الجملة الاسمية (المبتدأ والخبر)",
    "patternFormula": "Mubtada' (Marfu') + Khabar (Marfu')",
    "summary": "Kalimat nominal dalam bahasa Arab yang diawali oleh kata benda definit (Mubtada') dan diterangkan oleh Khabar.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ — Mahasiswa itu rajin dalam studinya."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Mubtada' (Marfu') + Khabar (Marfu') diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ — Universitas itu besar dan indah."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "الْعِلْمُ نُورٌ فِي قَلْبِ الْمُؤْمِنِ — Ilmu adalah cahaya di dalam hati seorang mukmin."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-1-ex-1",
        "native": "الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ",
        "phonetic": "",
        "translationId": "Mahasiswa itu rajin dalam studinya."
      },
      {
        "id": "ar-gram-1-ex-2",
        "native": "الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ",
        "phonetic": "",
        "translationId": "Universitas itu besar dan indah."
      },
      {
        "id": "ar-gram-1-ex-3",
        "native": "الْعِلْمُ نُورٌ فِي قَلْبِ الْمُؤْمِنِ",
        "phonetic": "",
        "translationId": "Ilmu adalah cahaya di dalam hati seorang mukmin."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "الطالبُ مجتهداً",
        "correct": "الطالبُ مجتهدٌ",
        "explanation": "Khabar berstatus marfu' dengan harakat dhammah tanwin."
      },
      {
        "incorrect": "الطالبُ مجتهداً (kesalahan i'rab)",
        "correct": "الطالبُ مجتهدٌ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-1-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ\"?",
        "targetSentence": "الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu rajin dalam studinya.",
          "Bukan mahasiswa itu rajin dalam studinya.",
          "Apakah mahasiswa itu rajin dalam studinya.?",
          "Mungkin mahasiswa itu rajin dalam studinya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ\" () bermakna \"Mahasiswa itu rajin dalam studinya.\"."
      },
      {
        "id": "q-ar-gram-1-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ\"?",
        "targetSentence": "الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Universitas itu besar dan indah.",
          "Bukan universitas itu besar dan indah.",
          "Apakah universitas itu besar dan indah.?",
          "Mungkin universitas itu besar dan indah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ\" () bermakna \"Universitas itu besar dan indah.\"."
      },
      {
        "id": "q-ar-gram-1-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْعِلْمُ نُورٌ فِي قَلْبِ الْمُؤْمِنِ\"?",
        "targetSentence": "الْعِلْمُ نُورٌ فِي قَلْبِ الْمُؤْمِنِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ilmu adalah cahaya di dalam hati seorang mukmin.",
          "Bukan ilmu adalah cahaya di dalam hati seorang mukmin.",
          "Apakah ilmu adalah cahaya di dalam hati seorang mukmin.?",
          "Mungkin ilmu adalah cahaya di dalam hati seorang mukmin."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْعِلْمُ نُورٌ فِي قَلْبِ الْمُؤْمِنِ\" () bermakna \"Ilmu adalah cahaya di dalam hati seorang mukmin.\"."
      },
      {
        "id": "q-ar-gram-1-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Mubtada' (Marfu') + Khabar (Marfu')\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ (Mahasiswa itu rajin dalam studinya.)",
          "الطالبُ مجتهداً (Struktur keliru)",
          "الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Mubtada' (Marfu') + Khabar (Marfu'). Contoh baku: \"الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ\"."
      },
      {
        "id": "q-ar-gram-1-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar merupakan pilar penting ...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-1-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Mubtada' (Marfu') + Khabar (Marfu') diterapkan untuk menjaga ketepatan baris harakat akh...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Mubtada' (Marfu') + Khabar (Marfu') diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-1-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-1-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"الطالبُ مجتهداً\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Khabar berstatus marfu' dengan harakat dhammah tanwin.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الطالبُ مجتهداً\" salah karena Khabar berstatus marfu' dengan harakat dhammah tanwin.. Bentuk yang benar: \"الطالبُ مجتهدٌ\"."
      },
      {
        "id": "q-ar-gram-1-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"الطالبُ مجتهداً (kesalahan i'rab)\"?",
        "options": [
          "الطالبُ مجتهدٌ",
          "الطالبُ مجتهداً (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "الطالبُ مجتهداً (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"الطالبُ مجتهدٌ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-1-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar\"?",
        "options": [
          "Penerapan kaidah Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar sangat dihargai dalam tradisi...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-1-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar\" (Mubtada' (Marfu') + Khabar (Marfu')), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Mubtada' (Marfu') + Khabar (Marfu').\nFungsi utama: Kalimat nominal dalam bahasa Arab yang diawali oleh kata benda definit (Mubtada') dan diterangkan oleh Khabar..\nContoh penerapan: \"الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ\" () yang berarti \"Mahasiswa itu rajin dalam studinya.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kalimat",
          "Nominal",
          "الجملة",
          "الاسمية"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Mubtada' (Marfu') + Khabar (Marfu')), menerangkan fungsi dasarnya (Kalimat nominal dalam bahasa Arab yang diawali oleh kata ben...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-1-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"الطالبُ مجتهداً\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"الطالبُ مجتهداً\" keliru karena: Khabar berstatus marfu' dengan harakat dhammah tanwin..\nBentuk pembetulan yang tepat adalah: \"الطالبُ مجتهدٌ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "الطالبُ",
          "مجتهدٌ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Khabar berstatus marfu' dengan harakat dhammah tanwin.) dan memberikan bentuk baku: الطالبُ مجتهدٌ."
      },
      {
        "id": "q-ar-gram-1-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Mubtada' (Marfu') + Khabar (Marfu') diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-1-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Universitas itu besar dan indah.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Mubtada' (Marfu') + Khabar (Marfu')\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Universitas itu besar dan indah.\".",
        "keywords": [
          "Universitas",
          "itu",
          "besar"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-1-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-1-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Mahasiswa itu rajin dalam studinya.\"",
        "scrambledWords": [
          "مُجْتَهِدٌ",
          "دِرَاسَتِهِ",
          "الطَّالِبُ",
          "فِي"
        ],
        "correctOrder": [
          "الطَّالِبُ",
          "مُجْتَهِدٌ",
          "فِي",
          "دِرَاسَتِهِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ\". Mengikuti kaidah Mubtada' (Marfu') + Khabar (Marfu')."
      },
      {
        "id": "q-ar-gram-1-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Universitas itu besar dan indah.\"",
        "scrambledWords": [
          "كَبِيرَةٌ",
          "الْجَامِعَةُ",
          "وَجَمِيلَةٌ"
        ],
        "correctOrder": [
          "الْجَامِعَةُ",
          "كَبِيرَةٌ",
          "وَجَمِيلَةٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ\". Mengikuti kaidah Mubtada' (Marfu') + Khabar (Marfu')."
      },
      {
        "id": "q-ar-gram-1-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Ilmu adalah cahaya di dalam hati seorang mukmin.\"",
        "scrambledWords": [
          "نُورٌ",
          "قَلْبِ",
          "الْعِلْمُ",
          "فِي",
          "الْمُؤْمِنِ"
        ],
        "correctOrder": [
          "الْعِلْمُ",
          "نُورٌ",
          "فِي",
          "قَلْبِ",
          "الْمُؤْمِنِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْعِلْمُ نُورٌ فِي قَلْبِ الْمُؤْمِنِ\". Mengikuti kaidah Mubtada' (Marfu') + Khabar (Marfu')."
      },
      {
        "id": "q-ar-gram-1-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: الطالبُ مجتهدٌ\"",
        "scrambledWords": [
          "الب",
          "جته",
          "الط",
          "ُ م",
          "دٌ"
        ],
        "correctOrder": [
          "الط",
          "الب",
          "ُ م",
          "جته",
          "دٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الطالبُ مجتهدٌ\". Mengikuti kaidah Mubtada' (Marfu') + Khabar (Marfu')."
      },
      {
        "id": "q-ar-gram-1-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: الطالبُ مجتهدٌ\"",
        "scrambledWords": [
          "الب",
          "جته",
          "الط",
          "ُ م",
          "دٌ"
        ],
        "correctOrder": [
          "الط",
          "الب",
          "ُ م",
          "جته",
          "دٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الطالبُ مجتهدٌ\". Mengikuti kaidah Mubtada' (Marfu') + Khabar (Marfu')."
      },
      {
        "id": "q-ar-gram-1-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu rajin dalam studinya.",
          "Bukan mahasiswa itu rajin dalam studinya.",
          "Universitas itu besar dan indah.",
          "Ilmu adalah cahaya di dalam hati seorang mukmin."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ\" () yang bermakna \"Mahasiswa itu rajin dalam studinya.\"."
      },
      {
        "id": "q-ar-gram-1-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ\"",
        "targetSentence": "الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Universitas itu besar dan indah.",
          "Mahasiswa itu rajin dalam studinya.",
          "Apakah universitas itu besar dan indah.?",
          "Sangat universitas itu besar dan indah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ\" diterjemahkan menjadi \"Universitas itu besar dan indah.\"."
      },
      {
        "id": "q-ar-gram-1-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "الْعِلْمُ نُورٌ فِي قَلْبِ الْمُؤْمِنِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar untuk menyatakan makna: \"Ilmu adalah cahaya di dalam hati seorang mukmin.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"الْعِلْمُ نُورٌ فِي قَلْبِ الْمُؤْمِنِ\" yang mempraktikkan rumus Mubtada' (Marfu') + Khabar (Marfu')."
      },
      {
        "id": "q-ar-gram-1-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Mahasiswa itu rajin dalam studinya.\"!",
        "options": [
          "الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ",
          "الطالبُ مجتهداً",
          "الْجَامِعَةُ كَبِيرَةٌ وَجَمِيلَةٌ [Variasi]",
          "الْعِلْمُ نُورٌ فِي قَلْبِ الْمُؤْمِنِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ\"."
      },
      {
        "id": "q-ar-gram-1-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kalimat Nominal (الجملة الاسمية): Mubtada' dan Khabar\", respons manakah yang paling sesuai?",
        "options": [
          "الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ (Mahasiswa itu rajin dalam studinya.)",
          "الطالبُ مجتهداً (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"الطَّالِبُ مُجْتَهِدٌ فِي دِرَاسَتِهِ\" sesuai aturan Mubtada' (Marfu') + Khabar (Marfu')."
      }
    ]
  },
  {
    "id": "ar-gram-2",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "unit": 2,
    "title": "Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك)",
    "titleNative": "أسماء الإشارة للقريب والبعيد",
    "patternFormula": "Isim Isyarah + Kata Benda (Al-)",
    "summary": "Kata penunjuk dekat (هذا untuk maskulin, هذه untuk feminin) dan penunjuk jauh (ذلك, تلك).",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ — Ini adalah buku yang bermanfaat bagi para mahasiswa."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Isim Isyarah + Kata Benda (Al-) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ — Ini adalah Universitas الملك Saud."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "ذَلِكَ الْأُسْتَاذُ يُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ — Profesor itu mengajar bahasa Arab."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-2-ex-1",
        "native": "هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ",
        "phonetic": "",
        "translationId": "Ini adalah buku yang bermanfaat bagi para mahasiswa."
      },
      {
        "id": "ar-gram-2-ex-2",
        "native": "هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ",
        "phonetic": "",
        "translationId": "Ini adalah Universitas الملك Saud."
      },
      {
        "id": "ar-gram-2-ex-3",
        "native": "ذَلِكَ الْأُسْتَاذُ يُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ",
        "phonetic": "",
        "translationId": "Profesor itu mengajar bahasa Arab."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "هذا جامعة",
        "correct": "هذه جامعة",
        "explanation": "Kata جامعة bergender feminin (muannats) sehingga harus memakai هذه."
      },
      {
        "incorrect": "هذا جامعة (kesalahan i'rab)",
        "correct": "هذه جامعة",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-2-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ\"?",
        "targetSentence": "هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ini adalah buku yang bermanfaat bagi para mahasiswa.",
          "Bukan ini adalah buku yang bermanfaat bagi para mahasiswa.",
          "Apakah ini adalah buku yang bermanfaat bagi para mahasiswa.?",
          "Mungkin ini adalah buku yang bermanfaat bagi para mahasiswa."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ\" () bermakna \"Ini adalah buku yang bermanfaat bagi para mahasiswa.\"."
      },
      {
        "id": "q-ar-gram-2-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ\"?",
        "targetSentence": "هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ini adalah Universitas الملك Saud.",
          "Bukan ini adalah universitas الملك saud.",
          "Apakah ini adalah universitas الملك saud.?",
          "Mungkin ini adalah universitas الملك saud."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ\" () bermakna \"Ini adalah Universitas الملك Saud.\"."
      },
      {
        "id": "q-ar-gram-2-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"ذَلِكَ الْأُسْتَاذُ يُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ\"?",
        "targetSentence": "ذَلِكَ الْأُسْتَاذُ يُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Profesor itu mengajar bahasa Arab.",
          "Bukan profesor itu mengajar bahasa arab.",
          "Apakah profesor itu mengajar bahasa arab.?",
          "Mungkin profesor itu mengajar bahasa arab."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"ذَلِكَ الْأُسْتَاذُ يُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ\" () bermakna \"Profesor itu mengajar bahasa Arab.\"."
      },
      {
        "id": "q-ar-gram-2-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Isim Isyarah + Kata Benda (Al-)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ (Ini adalah buku yang bermanfaat bagi para mahasiswa.)",
          "هذا جامعة (Struktur keliru)",
          "هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Isim Isyarah + Kata Benda (Al-). Contoh baku: \"هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ\"."
      },
      {
        "id": "q-ar-gram-2-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك) merupakan pilar penting dalam si...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-2-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Isim Isyarah + Kata Benda (Al-) diterapkan untuk menjaga ketepatan baris harakat akhir d...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Isim Isyarah + Kata Benda (Al-) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-2-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-2-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"هذا جامعة\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Kata جامعة bergender feminin (muannats) sehingga harus memakai هذه.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هذا جامعة\" salah karena Kata جامعة bergender feminin (muannats) sehingga harus memakai هذه.. Bentuk yang benar: \"هذه جامعة\"."
      },
      {
        "id": "q-ar-gram-2-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"هذا جامعة (kesalahan i'rab)\"?",
        "options": [
          "هذه جامعة",
          "هذا جامعة (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "هذا جامعة (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"هذه جامعة\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-2-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك)\"?",
        "options": [
          "Penerapan kaidah Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك) sangat dihargai dalam tradisi ilmiah ...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-2-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك)\" (Isim Isyarah + Kata Benda (Al-)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Isim Isyarah + Kata Benda (Al-).\nFungsi utama: Kata penunjuk dekat (هذا untuk maskulin, هذه untuk feminin) dan penunjuk jauh (ذلك, تلك)..\nContoh penerapan: \"هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ\" () yang berarti \"Ini adalah buku yang bermanfaat bagi para mahasiswa.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kata",
          "Tunjuk",
          "Isim",
          "Isyarah"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Isim Isyarah + Kata Benda (Al-)), menerangkan fungsi dasarnya (Kata penunjuk dekat (هذا untuk maskulin, هذه untuk feminin) ...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-2-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"هذا جامعة\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"هذا جامعة\" keliru karena: Kata جامعة bergender feminin (muannats) sehingga harus memakai هذه..\nBentuk pembetulan yang tepat adalah: \"هذه جامعة\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "هذه",
          "جامعة"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Kata جامعة bergender feminin (muannats) sehingga harus memakai هذه.) dan memberikan bentuk baku: هذه جامعة."
      },
      {
        "id": "q-ar-gram-2-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Isim Isyarah + Kata Benda (Al-) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-2-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Ini adalah Universitas الملك Saud.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Isim Isyarah + Kata Benda (Al-)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Ini adalah Universitas الملك Saud.\".",
        "keywords": [
          "Ini",
          "adalah",
          "Universitas"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-2-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-2-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Ini adalah buku yang bermanfaat bagi para mahasiswa.\"",
        "scrambledWords": [
          "كِتَابٌ",
          "لِلطُّلَّابِ",
          "هَذَا",
          "مُفِيدٌ"
        ],
        "correctOrder": [
          "هَذَا",
          "كِتَابٌ",
          "مُفِيدٌ",
          "لِلطُّلَّابِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ\". Mengikuti kaidah Isim Isyarah + Kata Benda (Al-)."
      },
      {
        "id": "q-ar-gram-2-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Ini adalah Universitas الملك Saud.\"",
        "scrambledWords": [
          "جَامِعَةُ",
          "سَعُودٍ",
          "هَذِهِ",
          "الْمَلِكِ"
        ],
        "correctOrder": [
          "هَذِهِ",
          "جَامِعَةُ",
          "الْمَلِكِ",
          "سَعُودٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ\". Mengikuti kaidah Isim Isyarah + Kata Benda (Al-)."
      },
      {
        "id": "q-ar-gram-2-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Profesor itu mengajar bahasa Arab.\"",
        "scrambledWords": [
          "الْأُسْتَاذُ",
          "اللُّغَةَ",
          "ذَلِكَ",
          "يُدَرِّسُ",
          "الْعَرَبِيَّةَ"
        ],
        "correctOrder": [
          "ذَلِكَ",
          "الْأُسْتَاذُ",
          "يُدَرِّسُ",
          "اللُّغَةَ",
          "الْعَرَبِيَّةَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"ذَلِكَ الْأُسْتَاذُ يُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ\". Mengikuti kaidah Isim Isyarah + Kata Benda (Al-)."
      },
      {
        "id": "q-ar-gram-2-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: هذه جامعة\"",
        "scrambledWords": [
          "ه ",
          "مع",
          "هذ",
          "جا",
          "ة"
        ],
        "correctOrder": [
          "هذ",
          "ه ",
          "جا",
          "مع",
          "ة"
        ],
        "explanation": "Urutan yang tepat adalah: \"هذه جامعة\". Mengikuti kaidah Isim Isyarah + Kata Benda (Al-)."
      },
      {
        "id": "q-ar-gram-2-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: هذه جامعة\"",
        "scrambledWords": [
          "ه ",
          "مع",
          "هذ",
          "جا",
          "ة"
        ],
        "correctOrder": [
          "هذ",
          "ه ",
          "جا",
          "مع",
          "ة"
        ],
        "explanation": "Urutan yang tepat adalah: \"هذه جامعة\". Mengikuti kaidah Isim Isyarah + Kata Benda (Al-)."
      },
      {
        "id": "q-ar-gram-2-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ini adalah buku yang bermanfaat bagi para mahasiswa.",
          "Bukan ini adalah buku yang bermanfaat bagi para mahasiswa.",
          "Ini adalah Universitas الملك Saud.",
          "Profesor itu mengajar bahasa Arab."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ\" () yang bermakna \"Ini adalah buku yang bermanfaat bagi para mahasiswa.\"."
      },
      {
        "id": "q-ar-gram-2-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ\"",
        "targetSentence": "هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ini adalah Universitas الملك Saud.",
          "Ini adalah buku yang bermanfaat bagi para mahasiswa.",
          "Apakah ini adalah universitas الملك saud.?",
          "Sangat ini adalah universitas الملك saud."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ\" diterjemahkan menjadi \"Ini adalah Universitas الملك Saud.\"."
      },
      {
        "id": "q-ar-gram-2-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "ذَلِكَ الْأُسْتَاذُ يُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك) untuk menyatakan makna: \"Profesor itu mengajar bahasa Arab.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"ذَلِكَ الْأُسْتَاذُ يُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ\" yang mempraktikkan rumus Isim Isyarah + Kata Benda (Al-)."
      },
      {
        "id": "q-ar-gram-2-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Ini adalah buku yang bermanfaat bagi para mahasiswa.\"!",
        "options": [
          "هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ",
          "هذا جامعة",
          "هَذِهِ جَامِعَةُ الْمَلِكِ سَعُودٍ [Variasi]",
          "ذَلِكَ الْأُسْتَاذُ يُدَرِّسُ اللُّغَةَ الْعَرَبِيَّةَ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ\"."
      },
      {
        "id": "q-ar-gram-2-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kata Tunjuk Isim Isyarah (هذا, هذه, ذلك, تلك)\", respons manakah yang paling sesuai?",
        "options": [
          "هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ (Ini adalah buku yang bermanfaat bagi para mahasiswa.)",
          "هذا جامعة (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"هَذَا كِتَابٌ مُفِيدٌ لِلطُّلَّابِ\" sesuai aturan Isim Isyarah + Kata Benda (Al-)."
      }
    ]
  },
  {
    "id": "ar-gram-3",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "unit": 3,
    "title": "Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il",
    "titleNative": "الجملة الفعلية (الفعل الماضي والفاعل)",
    "patternFormula": "Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih",
    "summary": "Kalimat verbal diawali oleh kata kerja masa lampau (Fi'il Madhi) dan pelakunya (Fa'il).",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ — Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ — Fatimah telah membaca buku itu di perpustakaan."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "حَضَرَ الْأُسْتَاذُ إِلَى قَاعَةِ الْمُحَاضَرَةِ — Profesor itu telah hadir ke ruang kuliah."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-3-ex-1",
        "native": "دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ",
        "phonetic": "",
        "translationId": "Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh."
      },
      {
        "id": "ar-gram-3-ex-2",
        "native": "قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ",
        "phonetic": "",
        "translationId": "Fatimah telah membaca buku itu di perpustakaan."
      },
      {
        "id": "ar-gram-3-ex-3",
        "native": "حَضَرَ الْأُسْتَاذُ إِلَى قَاعَةِ الْمُحَاضَرَةِ",
        "phonetic": "",
        "translationId": "Profesor itu telah hadir ke ruang kuliah."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "درس الطالبَ",
        "correct": "درس الطالبُ",
        "explanation": "Fa'il (pelaku) wajib marfu' dengan dhammah."
      },
      {
        "incorrect": "درس الطالبَ (kesalahan i'rab)",
        "correct": "درس الطالبُ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-3-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ\"?",
        "targetSentence": "دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.",
          "Bukan mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.",
          "Apakah mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.?",
          "Mungkin mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ\" () bermakna \"Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.\"."
      },
      {
        "id": "q-ar-gram-3-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ\"?",
        "targetSentence": "قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Fatimah telah membaca buku itu di perpustakaan.",
          "Bukan fatimah telah membaca buku itu di perpustakaan.",
          "Apakah fatimah telah membaca buku itu di perpustakaan.?",
          "Mungkin fatimah telah membaca buku itu di perpustakaan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ\" () bermakna \"Fatimah telah membaca buku itu di perpustakaan.\"."
      },
      {
        "id": "q-ar-gram-3-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"حَضَرَ الْأُسْتَاذُ إِلَى قَاعَةِ الْمُحَاضَرَةِ\"?",
        "targetSentence": "حَضَرَ الْأُسْتَاذُ إِلَى قَاعَةِ الْمُحَاضَرَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Profesor itu telah hadir ke ruang kuliah.",
          "Bukan profesor itu telah hadir ke ruang kuliah.",
          "Apakah profesor itu telah hadir ke ruang kuliah.?",
          "Mungkin profesor itu telah hadir ke ruang kuliah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"حَضَرَ الْأُسْتَاذُ إِلَى قَاعَةِ الْمُحَاضَرَةِ\" () bermakna \"Profesor itu telah hadir ke ruang kuliah.\"."
      },
      {
        "id": "q-ar-gram-3-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ (Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.)",
          "درس الطالبَ (Struktur keliru)",
          "دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih. Contoh baku: \"دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ\"."
      },
      {
        "id": "q-ar-gram-3-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il merupakan pilar penting...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-3-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih diterapkan untuk menjaga ketepatan baris harak...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-3-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-3-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"درس الطالبَ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Fa'il (pelaku) wajib marfu' dengan dhammah.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"درس الطالبَ\" salah karena Fa'il (pelaku) wajib marfu' dengan dhammah.. Bentuk yang benar: \"درس الطالبُ\"."
      },
      {
        "id": "q-ar-gram-3-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"درس الطالبَ (kesalahan i'rab)\"?",
        "options": [
          "درس الطالبُ",
          "درس الطالبَ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "درس الطالبَ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"درس الطالبُ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-3-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il\"?",
        "options": [
          "Penerapan kaidah Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il sangat dihargai dalam tradis...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-3-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il\" (Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih.\nFungsi utama: Kalimat verbal diawali oleh kata kerja masa lampau (Fi'il Madhi) dan pelakunya (Fa'il)..\nContoh penerapan: \"دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ\" () yang berarti \"Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kalimat",
          "Verbal",
          "الجملة",
          "الفعلية"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih), menerangkan fungsi dasarnya (Kalimat verbal diawali oleh kata kerja masa lampau (Fi'il Ma...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-3-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"درس الطالبَ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"درس الطالبَ\" keliru karena: Fa'il (pelaku) wajib marfu' dengan dhammah..\nBentuk pembetulan yang tepat adalah: \"درس الطالبُ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "درس",
          "الطالبُ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Fa'il (pelaku) wajib marfu' dengan dhammah.) dan memberikan bentuk baku: درس الطالبُ."
      },
      {
        "id": "q-ar-gram-3-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-3-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Fatimah telah membaca buku itu di perpustakaan.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Fatimah telah membaca buku itu di perpustakaan.\".",
        "keywords": [
          "Fatimah",
          "telah",
          "membaca"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-3-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-3-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.\"",
        "scrambledWords": [
          "الطَّالِبُ",
          "اللُّغَةِ",
          "دَرَسَ",
          "عِلْمَ",
          "بِجِدٍّ"
        ],
        "correctOrder": [
          "دَرَسَ",
          "الطَّالِبُ",
          "عِلْمَ",
          "اللُّغَةِ",
          "بِجِدٍّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ\". Mengikuti kaidah Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih."
      },
      {
        "id": "q-ar-gram-3-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Fatimah telah membaca buku itu di perpustakaan.\"",
        "scrambledWords": [
          "فَاطِمَةُ",
          "فِي",
          "قَرَأَتْ",
          "الْكِتَابَ",
          "الْمَكْتَبَةِ"
        ],
        "correctOrder": [
          "قَرَأَتْ",
          "فَاطِمَةُ",
          "الْكِتَابَ",
          "فِي",
          "الْمَكْتَبَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ\". Mengikuti kaidah Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih."
      },
      {
        "id": "q-ar-gram-3-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Profesor itu telah hadir ke ruang kuliah.\"",
        "scrambledWords": [
          "الْأُسْتَاذُ",
          "قَاعَةِ",
          "حَضَرَ",
          "إِلَى",
          "الْمُحَاضَرَةِ"
        ],
        "correctOrder": [
          "حَضَرَ",
          "الْأُسْتَاذُ",
          "إِلَى",
          "قَاعَةِ",
          "الْمُحَاضَرَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"حَضَرَ الْأُسْتَاذُ إِلَى قَاعَةِ الْمُحَاضَرَةِ\". Mengikuti kaidah Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih."
      },
      {
        "id": "q-ar-gram-3-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: درس الطالبُ\"",
        "scrambledWords": [
          "س ",
          "طا",
          "ُ",
          "در",
          "ال",
          "لب"
        ],
        "correctOrder": [
          "در",
          "س ",
          "ال",
          "طا",
          "لب",
          "ُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"درس الطالبُ\". Mengikuti kaidah Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih."
      },
      {
        "id": "q-ar-gram-3-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: درس الطالبُ\"",
        "scrambledWords": [
          "س ",
          "طا",
          "ُ",
          "در",
          "ال",
          "لب"
        ],
        "correctOrder": [
          "در",
          "س ",
          "ال",
          "طا",
          "لب",
          "ُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"درس الطالبُ\". Mengikuti kaidah Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih."
      },
      {
        "id": "q-ar-gram-3-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.",
          "Bukan mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.",
          "Fatimah telah membaca buku itu di perpustakaan.",
          "Profesor itu telah hadir ke ruang kuliah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ\" () yang bermakna \"Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.\"."
      },
      {
        "id": "q-ar-gram-3-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ\"",
        "targetSentence": "قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Fatimah telah membaca buku itu di perpustakaan.",
          "Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.",
          "Apakah fatimah telah membaca buku itu di perpustakaan.?",
          "Sangat fatimah telah membaca buku itu di perpustakaan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ\" diterjemahkan menjadi \"Fatimah telah membaca buku itu di perpustakaan.\"."
      },
      {
        "id": "q-ar-gram-3-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "حَضَرَ الْأُسْتَاذُ إِلَى قَاعَةِ الْمُحَاضَرَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il untuk menyatakan makna: \"Profesor itu telah hadir ke ruang kuliah.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"حَضَرَ الْأُسْتَاذُ إِلَى قَاعَةِ الْمُحَاضَرَةِ\" yang mempraktikkan rumus Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih."
      },
      {
        "id": "q-ar-gram-3-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.\"!",
        "options": [
          "دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ",
          "درس الطالبَ",
          "قَرَأَتْ فَاطِمَةُ الْكِتَابَ فِي الْمَكْتَبَةِ [Variasi]",
          "حَضَرَ الْأُسْتَاذُ إِلَى قَاعَةِ الْمُحَاضَرَةِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ\"."
      },
      {
        "id": "q-ar-gram-3-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kalimat Verbal (الجملة الفعلية): Fi'il Madhi dan Fa'il\", respons manakah yang paling sesuai?",
        "options": [
          "دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ (Mahasiswa itu telah mempelajari ilmu linguistik dengan sungguh-sungguh.)",
          "درس الطالبَ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"دَرَسَ الطَّالِبُ عِلْمَ اللُّغَةِ بِجِدٍّ\" sesuai aturan Fi'il Madhi + Fa'il (Marfu') + Maf'ul Bih."
      }
    ]
  },
  {
    "id": "ar-gram-4",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "unit": 4,
    "title": "Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع)",
    "titleNative": "تصريف الفعل المضارع وأحرفه (أ - ن - ي - ت)",
    "patternFormula": "Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang",
    "summary": "Menyatakan tindakan yang sedang berlangsung atau kebiasaan dengan awalan huruf anaitu (أ - ن - ي - ت).",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ — Peneliti itu sedang menulis tesis magister."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا — Kami memahami kaidah-kaidah nahwu dengan baik."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "تَدْرُسُ عَائِشَةُ فِي كُلِّيَّةِ الطِّبِّ — Aisyah sedang berkuliah di fakultas kedokteran."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-4-ex-1",
        "native": "يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ",
        "phonetic": "",
        "translationId": "Peneliti itu sedang menulis tesis magister."
      },
      {
        "id": "ar-gram-4-ex-2",
        "native": "نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا",
        "phonetic": "",
        "translationId": "Kami memahami kaidah-kaidah nahwu dengan baik."
      },
      {
        "id": "ar-gram-4-ex-3",
        "native": "تَدْرُسُ عَائِشَةُ فِي كُلِّيَّةِ الطِّبِّ",
        "phonetic": "",
        "translationId": "Aisyah sedang berkuliah di fakultas kedokteran."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "يكتبُ الطالبَ",
        "correct": "يكتبُ الطالبُ",
        "explanation": "Fi'il mudhari' dasar diakhiri harakat dhammah (marfu')."
      },
      {
        "incorrect": "يكتبُ الطالبَ (kesalahan i'rab)",
        "correct": "يكتبُ الطالبُ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-4-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ\"?",
        "targetSentence": "يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Peneliti itu sedang menulis tesis magister.",
          "Bukan peneliti itu sedang menulis tesis magister.",
          "Apakah peneliti itu sedang menulis tesis magister.?",
          "Mungkin peneliti itu sedang menulis tesis magister."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ\" () bermakna \"Peneliti itu sedang menulis tesis magister.\"."
      },
      {
        "id": "q-ar-gram-4-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا\"?",
        "targetSentence": "نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kami memahami kaidah-kaidah nahwu dengan baik.",
          "Bukan kami memahami kaidah-kaidah nahwu dengan baik.",
          "Apakah kami memahami kaidah-kaidah nahwu dengan baik.?",
          "Mungkin kami memahami kaidah-kaidah nahwu dengan baik."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا\" () bermakna \"Kami memahami kaidah-kaidah nahwu dengan baik.\"."
      },
      {
        "id": "q-ar-gram-4-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"تَدْرُسُ عَائِشَةُ فِي كُلِّيَّةِ الطِّبِّ\"?",
        "targetSentence": "تَدْرُسُ عَائِشَةُ فِي كُلِّيَّةِ الطِّبِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Aisyah sedang berkuliah di fakultas kedokteran.",
          "Bukan aisyah sedang berkuliah di fakultas kedokteran.",
          "Apakah aisyah sedang berkuliah di fakultas kedokteran.?",
          "Mungkin aisyah sedang berkuliah di fakultas kedokteran."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تَدْرُسُ عَائِشَةُ فِي كُلِّيَّةِ الطِّبِّ\" () bermakna \"Aisyah sedang berkuliah di fakultas kedokteran.\"."
      },
      {
        "id": "q-ar-gram-4-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ (Peneliti itu sedang menulis tesis magister.)",
          "يكتبُ الطالبَ (Struktur keliru)",
          "يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang. Contoh baku: \"يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ\"."
      },
      {
        "id": "q-ar-gram-4-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع) merupakan pilar penting da...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-4-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang diterapkan untuk menjaga ketepata...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-4-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-4-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"يكتبُ الطالبَ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Fi'il mudhari' dasar diakhiri harakat dhammah (marfu').",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يكتبُ الطالبَ\" salah karena Fi'il mudhari' dasar diakhiri harakat dhammah (marfu').. Bentuk yang benar: \"يكتبُ الطالبُ\"."
      },
      {
        "id": "q-ar-gram-4-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"يكتبُ الطالبَ (kesalahan i'rab)\"?",
        "options": [
          "يكتبُ الطالبُ",
          "يكتبُ الطالبَ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "يكتبُ الطالبَ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"يكتبُ الطالبُ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-4-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع)\"?",
        "options": [
          "Penerapan kaidah Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع) sangat dihargai dalam tradisi i...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-4-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع)\" (Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang.\nFungsi utama: Menyatakan tindakan yang sedang berlangsung atau kebiasaan dengan awalan huruf anaitu (أ - ن - ي - ت)..\nContoh penerapan: \"يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ\" () yang berarti \"Peneliti itu sedang menulis tesis magister.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Fi'il",
          "Mudhari'",
          "dan",
          "Huruf"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang), menerangkan fungsi dasarnya (Menyatakan tindakan yang sedang berlangsung atau kebiasaan d...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-4-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"يكتبُ الطالبَ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"يكتبُ الطالبَ\" keliru karena: Fi'il mudhari' dasar diakhiri harakat dhammah (marfu')..\nBentuk pembetulan yang tepat adalah: \"يكتبُ الطالبُ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "يكتبُ",
          "الطالبُ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Fi'il mudhari' dasar diakhiri harakat dhammah (marfu').) dan memberikan bentuk baku: يكتبُ الطالبُ."
      },
      {
        "id": "q-ar-gram-4-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-4-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Kami memahami kaidah-kaidah nahwu dengan baik.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Kami memahami kaidah-kaidah nahwu dengan baik.\".",
        "keywords": [
          "Kami",
          "memahami",
          "kaidah-kaidah"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-4-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-4-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Peneliti itu sedang menulis tesis magister.\"",
        "scrambledWords": [
          "الْبَاحِثُ",
          "الْمَاجِسْتِيرِ",
          "يَكْتُبُ",
          "رِسَالَةَ"
        ],
        "correctOrder": [
          "يَكْتُبُ",
          "الْبَاحِثُ",
          "رِسَالَةَ",
          "الْمَاجِسْتِيرِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ\". Mengikuti kaidah Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang."
      },
      {
        "id": "q-ar-gram-4-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Kami memahami kaidah-kaidah nahwu dengan baik.\"",
        "scrambledWords": [
          "نَفْهَمُ",
          "النَّحْوِ",
          "نَحْنُ",
          "قَوَاعِدَ",
          "جَيِّدًا"
        ],
        "correctOrder": [
          "نَحْنُ",
          "نَفْهَمُ",
          "قَوَاعِدَ",
          "النَّحْوِ",
          "جَيِّدًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا\". Mengikuti kaidah Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang."
      },
      {
        "id": "q-ar-gram-4-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Aisyah sedang berkuliah di fakultas kedokteran.\"",
        "scrambledWords": [
          "عَائِشَةُ",
          "كُلِّيَّةِ",
          "تَدْرُسُ",
          "فِي",
          "الطِّبِّ"
        ],
        "correctOrder": [
          "تَدْرُسُ",
          "عَائِشَةُ",
          "فِي",
          "كُلِّيَّةِ",
          "الطِّبِّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"تَدْرُسُ عَائِشَةُ فِي كُلِّيَّةِ الطِّبِّ\". Mengikuti kaidah Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang."
      },
      {
        "id": "q-ar-gram-4-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: يكتبُ الطالبُ\"",
        "scrambledWords": [
          "بُ ",
          "الب",
          "يكت",
          "الط",
          "ُ"
        ],
        "correctOrder": [
          "يكت",
          "بُ ",
          "الط",
          "الب",
          "ُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يكتبُ الطالبُ\". Mengikuti kaidah Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang."
      },
      {
        "id": "q-ar-gram-4-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: يكتبُ الطالبُ\"",
        "scrambledWords": [
          "بُ ",
          "الب",
          "يكت",
          "الط",
          "ُ"
        ],
        "correctOrder": [
          "يكت",
          "بُ ",
          "الط",
          "الب",
          "ُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يكتبُ الطالبُ\". Mengikuti kaidah Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang."
      },
      {
        "id": "q-ar-gram-4-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Peneliti itu sedang menulis tesis magister.",
          "Bukan peneliti itu sedang menulis tesis magister.",
          "Kami memahami kaidah-kaidah nahwu dengan baik.",
          "Aisyah sedang berkuliah di fakultas kedokteran."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ\" () yang bermakna \"Peneliti itu sedang menulis tesis magister.\"."
      },
      {
        "id": "q-ar-gram-4-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا\"",
        "targetSentence": "نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kami memahami kaidah-kaidah nahwu dengan baik.",
          "Peneliti itu sedang menulis tesis magister.",
          "Apakah kami memahami kaidah-kaidah nahwu dengan baik.?",
          "Sangat kami memahami kaidah-kaidah nahwu dengan baik."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا\" diterjemahkan menjadi \"Kami memahami kaidah-kaidah nahwu dengan baik.\"."
      },
      {
        "id": "q-ar-gram-4-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "تَدْرُسُ عَائِشَةُ فِي كُلِّيَّةِ الطِّبِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع) untuk menyatakan makna: \"Aisyah sedang berkuliah di fakultas kedokteran.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"تَدْرُسُ عَائِشَةُ فِي كُلِّيَّةِ الطِّبِّ\" yang mempraktikkan rumus Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang."
      },
      {
        "id": "q-ar-gram-4-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Peneliti itu sedang menulis tesis magister.\"!",
        "options": [
          "يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ",
          "يكتبُ الطالبَ",
          "نَحْنُ نَفْهَمُ قَوَاعِدَ النَّحْوِ جَيِّدًا [Variasi]",
          "تَدْرُسُ عَائِشَةُ فِي كُلِّيَّةِ الطِّبِّ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ\"."
      },
      {
        "id": "q-ar-gram-4-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Fi'il Mudhari' dan Huruf Mudhara'ah (الفعل المضارع)\", respons manakah yang paling sesuai?",
        "options": [
          "يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ (Peneliti itu sedang menulis tesis magister.)",
          "يكتبُ الطالبَ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"يَكْتُبُ الْبَاحِثُ رِسَالَةَ الْمَاجِسْتِيرِ\" sesuai aturan Huruf Mudhara'ah + Batang Verba Waktu Kini/Akan Datang."
      }
    ]
  },
  {
    "id": "ar-gram-5",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "unit": 5,
    "title": "Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan)",
    "titleNative": "الإضافة (المضاف والمضاف إليه)",
    "patternFormula": "Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)",
    "summary": "Frasa kepemilikan atau penyandaran dua kata benda: kata pertama tidak boleh bertanwin/alif lam, kata kedua berharakat kasrah.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ — Buku milik mahasiswa itu berada di atas meja."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا — Aula perkuliahan itu sangat luas."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "مَكْتَبَةُ الْجَامِعَةِ مَفْتُوحَةٌ كُلَّ يَوْمٍ — Perpustakaan universitas itu buka setiap hari."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-5-ex-1",
        "native": "كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ",
        "phonetic": "",
        "translationId": "Buku milik mahasiswa itu berada di atas meja."
      },
      {
        "id": "ar-gram-5-ex-2",
        "native": "قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا",
        "phonetic": "",
        "translationId": "Aula perkuliahan itu sangat luas."
      },
      {
        "id": "ar-gram-5-ex-3",
        "native": "مَكْتَبَةُ الْجَامِعَةِ مَفْتُوحَةٌ كُلَّ يَوْمٍ",
        "phonetic": "",
        "translationId": "Perpustakaan universitas itu buka setiap hari."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "الكتابُ الطالبِ",
        "correct": "كتابُ الطالبِ",
        "explanation": "Mudhaf tidak boleh memakai alif lam (al-)."
      },
      {
        "incorrect": "الكتابُ الطالبِ (kesalahan i'rab)",
        "correct": "كتابُ الطالبِ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-5-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ\"?",
        "targetSentence": "كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Buku milik mahasiswa itu berada di atas meja.",
          "Bukan buku milik mahasiswa itu berada di atas meja.",
          "Apakah buku milik mahasiswa itu berada di atas meja.?",
          "Mungkin buku milik mahasiswa itu berada di atas meja."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ\" () bermakna \"Buku milik mahasiswa itu berada di atas meja.\"."
      },
      {
        "id": "q-ar-gram-5-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا\"?",
        "targetSentence": "قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Aula perkuliahan itu sangat luas.",
          "Bukan aula perkuliahan itu sangat luas.",
          "Apakah aula perkuliahan itu sangat luas.?",
          "Mungkin aula perkuliahan itu sangat luas."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا\" () bermakna \"Aula perkuliahan itu sangat luas.\"."
      },
      {
        "id": "q-ar-gram-5-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"مَكْتَبَةُ الْجَامِعَةِ مَفْتُوحَةٌ كُلَّ يَوْمٍ\"?",
        "targetSentence": "مَكْتَبَةُ الْجَامِعَةِ مَفْتُوحَةٌ كُلَّ يَوْمٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Perpustakaan universitas itu buka setiap hari.",
          "Bukan perpustakaan universitas itu buka setiap hari.",
          "Apakah perpustakaan universitas itu buka setiap hari.?",
          "Mungkin perpustakaan universitas itu buka setiap hari."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"مَكْتَبَةُ الْجَامِعَةِ مَفْتُوحَةٌ كُلَّ يَوْمٍ\" () bermakna \"Perpustakaan universitas itu buka setiap hari.\"."
      },
      {
        "id": "q-ar-gram-5-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ (Buku milik mahasiswa itu berada di atas meja.)",
          "الكتابُ الطالبِ (Struktur keliru)",
          "كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur). Contoh baku: \"كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ\"."
      },
      {
        "id": "q-ar-gram-5-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan) merupakan pilar penting ...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-5-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur) diterapkan untuk menjaga ketepatan bar...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-5-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-5-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"الكتابُ الطالبِ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Mudhaf tidak boleh memakai alif lam (al-).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الكتابُ الطالبِ\" salah karena Mudhaf tidak boleh memakai alif lam (al-).. Bentuk yang benar: \"كتابُ الطالبِ\"."
      },
      {
        "id": "q-ar-gram-5-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"الكتابُ الطالبِ (kesalahan i'rab)\"?",
        "options": [
          "كتابُ الطالبِ",
          "الكتابُ الطالبِ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "الكتابُ الطالبِ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"كتابُ الطالبِ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-5-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan)\"?",
        "options": [
          "Penerapan kaidah Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan) sangat dihargai dalam tradisi...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-5-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan)\" (Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur).\nFungsi utama: Frasa kepemilikan atau penyandaran dua kata benda: kata pertama tidak boleh bertanwin/alif lam, kata kedua berharakat kasrah..\nContoh penerapan: \"كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ\" () yang berarti \"Buku milik mahasiswa itu berada di atas meja.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Mudhaf",
          "dan",
          "Mudhaf",
          "Ilaih"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)), menerangkan fungsi dasarnya (Frasa kepemilikan atau penyandaran dua kata benda: kata pert...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-5-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"الكتابُ الطالبِ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"الكتابُ الطالبِ\" keliru karena: Mudhaf tidak boleh memakai alif lam (al-)..\nBentuk pembetulan yang tepat adalah: \"كتابُ الطالبِ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "كتابُ",
          "الطالبِ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Mudhaf tidak boleh memakai alif lam (al-).) dan memberikan bentuk baku: كتابُ الطالبِ."
      },
      {
        "id": "q-ar-gram-5-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-5-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Aula perkuliahan itu sangat luas.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Aula perkuliahan itu sangat luas.\".",
        "keywords": [
          "Aula",
          "perkuliahan",
          "itu"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-5-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-5-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Buku milik mahasiswa itu berada di atas meja.\"",
        "scrambledWords": [
          "الطَّالِبِ",
          "الْمَكْتَبِ",
          "كِتَابُ",
          "عَلَى"
        ],
        "correctOrder": [
          "كِتَابُ",
          "الطَّالِبِ",
          "عَلَى",
          "الْمَكْتَبِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ\". Mengikuti kaidah Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)."
      },
      {
        "id": "q-ar-gram-5-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Aula perkuliahan itu sangat luas.\"",
        "scrambledWords": [
          "الْمُحَاضَرَاتِ",
          "جِدًّا",
          "قَاعَةُ",
          "وَاسِعَةٌ"
        ],
        "correctOrder": [
          "قَاعَةُ",
          "الْمُحَاضَرَاتِ",
          "وَاسِعَةٌ",
          "جِدًّا"
        ],
        "explanation": "Urutan yang tepat adalah: \"قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا\". Mengikuti kaidah Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)."
      },
      {
        "id": "q-ar-gram-5-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Perpustakaan universitas itu buka setiap hari.\"",
        "scrambledWords": [
          "الْجَامِعَةِ",
          "كُلَّ",
          "مَكْتَبَةُ",
          "مَفْتُوحَةٌ",
          "يَوْمٍ"
        ],
        "correctOrder": [
          "مَكْتَبَةُ",
          "الْجَامِعَةِ",
          "مَفْتُوحَةٌ",
          "كُلَّ",
          "يَوْمٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"مَكْتَبَةُ الْجَامِعَةِ مَفْتُوحَةٌ كُلَّ يَوْمٍ\". Mengikuti kaidah Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)."
      },
      {
        "id": "q-ar-gram-5-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: كتابُ الطالبِ\"",
        "scrambledWords": [
          "بُ ",
          "الب",
          "كتا",
          "الط",
          "ِ"
        ],
        "correctOrder": [
          "كتا",
          "بُ ",
          "الط",
          "الب",
          "ِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"كتابُ الطالبِ\". Mengikuti kaidah Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)."
      },
      {
        "id": "q-ar-gram-5-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: كتابُ الطالبِ\"",
        "scrambledWords": [
          "بُ ",
          "الب",
          "كتا",
          "الط",
          "ِ"
        ],
        "correctOrder": [
          "كتا",
          "بُ ",
          "الط",
          "الب",
          "ِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"كتابُ الطالبِ\". Mengikuti kaidah Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)."
      },
      {
        "id": "q-ar-gram-5-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Buku milik mahasiswa itu berada di atas meja.",
          "Bukan buku milik mahasiswa itu berada di atas meja.",
          "Aula perkuliahan itu sangat luas.",
          "Perpustakaan universitas itu buka setiap hari."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ\" () yang bermakna \"Buku milik mahasiswa itu berada di atas meja.\"."
      },
      {
        "id": "q-ar-gram-5-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا\"",
        "targetSentence": "قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Aula perkuliahan itu sangat luas.",
          "Buku milik mahasiswa itu berada di atas meja.",
          "Apakah aula perkuliahan itu sangat luas.?",
          "Sangat aula perkuliahan itu sangat luas."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا\" diterjemahkan menjadi \"Aula perkuliahan itu sangat luas.\"."
      },
      {
        "id": "q-ar-gram-5-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "مَكْتَبَةُ الْجَامِعَةِ مَفْتُوحَةٌ كُلَّ يَوْمٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan) untuk menyatakan makna: \"Perpustakaan universitas itu buka setiap hari.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"مَكْتَبَةُ الْجَامِعَةِ مَفْتُوحَةٌ كُلَّ يَوْمٍ\" yang mempraktikkan rumus Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)."
      },
      {
        "id": "q-ar-gram-5-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Buku milik mahasiswa itu berada di atas meja.\"!",
        "options": [
          "كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ",
          "الكتابُ الطالبِ",
          "قَاعَةُ الْمُحَاضَرَاتِ وَاسِعَةٌ جِدًّا [Variasi]",
          "مَكْتَبَةُ الْجَامِعَةِ مَفْتُوحَةٌ كُلَّ يَوْمٍ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ\"."
      },
      {
        "id": "q-ar-gram-5-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Mudhaf dan Mudhaf Ilaih (الإضافة - Frasa Kepemilikan)\", respons manakah yang paling sesuai?",
        "options": [
          "كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ (Buku milik mahasiswa itu berada di atas meja.)",
          "الكتابُ الطالبِ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"كِتَابُ الطَّالِبِ عَلَى الْمَكْتَبِ\" sesuai aturan Mudhaf (Tanpa Tanwin/Al-) + Mudhaf Ilaih (Majrur)."
      }
    ]
  },
  {
    "id": "ar-gram-6",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "unit": 6,
    "title": "Huruf Jar dan Isim Majrur (حروف الجر)",
    "titleNative": "حروف الجر والاسم المجرور (مِنْ، إِلَى، عَنْ، عَلَى، فِي، الْبَاء، اللَّام)",
    "patternFormula": "Huruf Jar + Isim Majrur (Kasrah)",
    "summary": "Kata depan yang menyebabkan kata benda setelahnya menjadi majrur dengan tanda harakat kasrah.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Huruf Jar dan Isim Majrur (حروف الجر) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ — Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Huruf Jar + Isim Majrur (Kasrah) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ — Buku-buku itu tersedia di perpustakaan umum."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "نَسْتَفِيدُ كَثِيرًا مِنَ الْمُحَاضَرَةِ الْقَيِّمَةِ — Kami mengambil banyak manfaat dari kuliah yang berharga itu."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-6-ex-1",
        "native": "سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ",
        "phonetic": "",
        "translationId": "Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi."
      },
      {
        "id": "ar-gram-6-ex-2",
        "native": "الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ",
        "phonetic": "",
        "translationId": "Buku-buku itu tersedia di perpustakaan umum."
      },
      {
        "id": "ar-gram-6-ex-3",
        "native": "نَسْتَفِيدُ كَثِيرًا مِنَ الْمُحَاضَرَةِ الْقَيِّمَةِ",
        "phonetic": "",
        "translationId": "Kami mengambil banyak manfaat dari kuliah yang berharga itu."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "إلى الجامعةُ",
        "correct": "إلى الجامعةِ",
        "explanation": "Isim setelah huruf jar wajib majrur berharakat kasrah."
      },
      {
        "incorrect": "إلى الجامعةُ (kesalahan i'rab)",
        "correct": "إلى الجامعةِ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Huruf Jar dan Isim Majrur (حروف الجر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-6-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ\"?",
        "targetSentence": "سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi.",
          "Bukan mahasiswa itu melakukan perjalanan ke kerajaan arab saudi.",
          "Apakah mahasiswa itu melakukan perjalanan ke kerajaan arab saudi.?",
          "Mungkin mahasiswa itu melakukan perjalanan ke kerajaan arab saudi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ\" () bermakna \"Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi.\"."
      },
      {
        "id": "q-ar-gram-6-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ\"?",
        "targetSentence": "الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Buku-buku itu tersedia di perpustakaan umum.",
          "Bukan buku-buku itu tersedia di perpustakaan umum.",
          "Apakah buku-buku itu tersedia di perpustakaan umum.?",
          "Mungkin buku-buku itu tersedia di perpustakaan umum."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ\" () bermakna \"Buku-buku itu tersedia di perpustakaan umum.\"."
      },
      {
        "id": "q-ar-gram-6-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"نَسْتَفِيدُ كَثِيرًا مِنَ الْمُحَاضَرَةِ الْقَيِّمَةِ\"?",
        "targetSentence": "نَسْتَفِيدُ كَثِيرًا مِنَ الْمُحَاضَرَةِ الْقَيِّمَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kami mengambil banyak manfaat dari kuliah yang berharga itu.",
          "Bukan kami mengambil banyak manfaat dari kuliah yang berharga itu.",
          "Apakah kami mengambil banyak manfaat dari kuliah yang berharga itu.?",
          "Mungkin kami mengambil banyak manfaat dari kuliah yang berharga itu."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"نَسْتَفِيدُ كَثِيرًا مِنَ الْمُحَاضَرَةِ الْقَيِّمَةِ\" () bermakna \"Kami mengambil banyak manfaat dari kuliah yang berharga itu.\"."
      },
      {
        "id": "q-ar-gram-6-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Huruf Jar + Isim Majrur (Kasrah)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ (Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi.)",
          "إلى الجامعةُ (Struktur keliru)",
          "سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Huruf Jar dan Isim Majrur (حروف الجر)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Huruf Jar + Isim Majrur (Kasrah). Contoh baku: \"سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ\"."
      },
      {
        "id": "q-ar-gram-6-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Huruf Jar dan Isim Majrur (حروف الجر) merupakan pilar penting dalam sintaksis ...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Huruf Jar dan Isim Majrur (حروف الجر) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-6-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Huruf Jar + Isim Majrur (Kasrah) diterapkan untuk menjaga ketepatan baris harakat akhir ...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Huruf Jar + Isim Majrur (Kasrah) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-6-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-6-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"إلى الجامعةُ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Isim setelah huruf jar wajib majrur berharakat kasrah.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"إلى الجامعةُ\" salah karena Isim setelah huruf jar wajib majrur berharakat kasrah.. Bentuk yang benar: \"إلى الجامعةِ\"."
      },
      {
        "id": "q-ar-gram-6-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"إلى الجامعةُ (kesalahan i'rab)\"?",
        "options": [
          "إلى الجامعةِ",
          "إلى الجامعةُ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "إلى الجامعةُ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"إلى الجامعةِ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-6-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Huruf Jar dan Isim Majrur (حروف الجر)\"?",
        "options": [
          "Penerapan kaidah Huruf Jar dan Isim Majrur (حروف الجر) sangat dihargai dalam tradisi ilmiah dan maje...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Huruf Jar dan Isim Majrur (حروف الجر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-6-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Huruf Jar dan Isim Majrur (حروف الجر)\" (Huruf Jar + Isim Majrur (Kasrah)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Huruf Jar + Isim Majrur (Kasrah).\nFungsi utama: Kata depan yang menyebabkan kata benda setelahnya menjadi majrur dengan tanda harakat kasrah..\nContoh penerapan: \"سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ\" () yang berarti \"Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Huruf",
          "Jar",
          "dan",
          "Isim"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Huruf Jar + Isim Majrur (Kasrah)), menerangkan fungsi dasarnya (Kata depan yang menyebabkan kata benda setelahnya menjadi ma...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-6-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"إلى الجامعةُ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"إلى الجامعةُ\" keliru karena: Isim setelah huruf jar wajib majrur berharakat kasrah..\nBentuk pembetulan yang tepat adalah: \"إلى الجامعةِ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "إلى",
          "الجامعةِ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Isim setelah huruf jar wajib majrur berharakat kasrah.) dan memberikan bentuk baku: إلى الجامعةِ."
      },
      {
        "id": "q-ar-gram-6-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Huruf Jar + Isim Majrur (Kasrah) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-6-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Buku-buku itu tersedia di perpustakaan umum.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Huruf Jar + Isim Majrur (Kasrah)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Buku-buku itu tersedia di perpustakaan umum.\".",
        "keywords": [
          "Buku-buku",
          "itu",
          "tersedia"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-6-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Huruf Jar dan Isim Majrur (حروف الجر)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Huruf Jar dan Isim Majrur (حروف الجر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Huruf Jar dan Isim Majrur (حروف الجر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-6-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi.\"",
        "scrambledWords": [
          "الطَّالِبُ",
          "الْمَمْلَكَةِ",
          "السُّعُودِيَّةِ",
          "سَافَرَ",
          "إِلَى",
          "الْعَرَبِيَّةِ"
        ],
        "correctOrder": [
          "سَافَرَ",
          "الطَّالِبُ",
          "إِلَى",
          "الْمَمْلَكَةِ",
          "الْعَرَبِيَّةِ",
          "السُّعُودِيَّةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ\". Mengikuti kaidah Huruf Jar + Isim Majrur (Kasrah)."
      },
      {
        "id": "q-ar-gram-6-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Buku-buku itu tersedia di perpustakaan umum.\"",
        "scrambledWords": [
          "مَوْجُودَةٌ",
          "الْمَكْتَبَةِ",
          "الْكُتُبُ",
          "فِي",
          "الْعَامَّةِ"
        ],
        "correctOrder": [
          "الْكُتُبُ",
          "مَوْجُودَةٌ",
          "فِي",
          "الْمَكْتَبَةِ",
          "الْعَامَّةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ\". Mengikuti kaidah Huruf Jar + Isim Majrur (Kasrah)."
      },
      {
        "id": "q-ar-gram-6-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Kami mengambil banyak manfaat dari kuliah yang berharga itu.\"",
        "scrambledWords": [
          "كَثِيرًا",
          "الْمُحَاضَرَةِ",
          "نَسْتَفِيدُ",
          "مِنَ",
          "الْقَيِّمَةِ"
        ],
        "correctOrder": [
          "نَسْتَفِيدُ",
          "كَثِيرًا",
          "مِنَ",
          "الْمُحَاضَرَةِ",
          "الْقَيِّمَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"نَسْتَفِيدُ كَثِيرًا مِنَ الْمُحَاضَرَةِ الْقَيِّمَةِ\". Mengikuti kaidah Huruf Jar + Isim Majrur (Kasrah)."
      },
      {
        "id": "q-ar-gram-6-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: إلى الجامعةِ\"",
        "scrambledWords": [
          " ال",
          "عةِ",
          "إلى",
          "جام"
        ],
        "correctOrder": [
          "إلى",
          " ال",
          "جام",
          "عةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"إلى الجامعةِ\". Mengikuti kaidah Huruf Jar + Isim Majrur (Kasrah)."
      },
      {
        "id": "q-ar-gram-6-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: إلى الجامعةِ\"",
        "scrambledWords": [
          " ال",
          "عةِ",
          "إلى",
          "جام"
        ],
        "correctOrder": [
          "إلى",
          " ال",
          "جام",
          "عةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"إلى الجامعةِ\". Mengikuti kaidah Huruf Jar + Isim Majrur (Kasrah)."
      },
      {
        "id": "q-ar-gram-6-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi.",
          "Bukan mahasiswa itu melakukan perjalanan ke kerajaan arab saudi.",
          "Buku-buku itu tersedia di perpustakaan umum.",
          "Kami mengambil banyak manfaat dari kuliah yang berharga itu."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ\" () yang bermakna \"Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi.\"."
      },
      {
        "id": "q-ar-gram-6-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ\"",
        "targetSentence": "الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Buku-buku itu tersedia di perpustakaan umum.",
          "Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi.",
          "Apakah buku-buku itu tersedia di perpustakaan umum.?",
          "Sangat buku-buku itu tersedia di perpustakaan umum."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ\" diterjemahkan menjadi \"Buku-buku itu tersedia di perpustakaan umum.\"."
      },
      {
        "id": "q-ar-gram-6-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "نَسْتَفِيدُ كَثِيرًا مِنَ الْمُحَاضَرَةِ الْقَيِّمَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Huruf Jar dan Isim Majrur (حروف الجر) untuk menyatakan makna: \"Kami mengambil banyak manfaat dari kuliah yang berharga itu.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"نَسْتَفِيدُ كَثِيرًا مِنَ الْمُحَاضَرَةِ الْقَيِّمَةِ\" yang mempraktikkan rumus Huruf Jar + Isim Majrur (Kasrah)."
      },
      {
        "id": "q-ar-gram-6-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi.\"!",
        "options": [
          "سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ",
          "إلى الجامعةُ",
          "الْكُتُبُ مَوْجُودَةٌ فِي الْمَكْتَبَةِ الْعَامَّةِ [Variasi]",
          "نَسْتَفِيدُ كَثِيرًا مِنَ الْمُحَاضَرَةِ الْقَيِّمَةِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ\"."
      },
      {
        "id": "q-ar-gram-6-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Huruf Jar dan Isim Majrur (حروف الجر)\", respons manakah yang paling sesuai?",
        "options": [
          "سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ (Mahasiswa itu melakukan perjalanan ke Kerajaan Arab Saudi.)",
          "إلى الجامعةُ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"سَافَرَ الطَّالِبُ إِلَى الْمَمْلَكَةِ الْعَرَبِيَّةِ السُّعُودِيَّةِ\" sesuai aturan Huruf Jar + Isim Majrur (Kasrah)."
      }
    ]
  },
  {
    "id": "ar-gram-7",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "unit": 7,
    "title": "Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas)",
    "titleNative": "النعت الحقيقي وتطابقه مع المنعوت",
    "patternFormula": "Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]",
    "summary": "Kata sifat (Na'at) mengikuti kata bendanya dalam hal jenis (gender), jumlah, ketetapan (definit/indefinit), dan i'rab.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ — Saya telah membaca sebuah buku yang bermanfaat tentang bahasa."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek] diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ — Profesor yang mulia itu sedang menyampaikan kuliah."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "هَذِهِ جَامِعَةٌ عَرِيقَةٌ فِي الْعَالَمِ الْإِسْلَامِيِّ — Ini adalah universitas bersejarah yang terpandang di dunia Islam."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-7-ex-1",
        "native": "قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ",
        "phonetic": "",
        "translationId": "Saya telah membaca sebuah buku yang bermanfaat tentang bahasa."
      },
      {
        "id": "ar-gram-7-ex-2",
        "native": "الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ",
        "phonetic": "",
        "translationId": "Profesor yang mulia itu sedang menyampaikan kuliah."
      },
      {
        "id": "ar-gram-7-ex-3",
        "native": "هَذِهِ جَامِعَةٌ عَرِيقَةٌ فِي الْعَالَمِ الْإِسْلَامِيِّ",
        "phonetic": "",
        "translationId": "Ini adalah universitas bersejarah yang terpandang di dunia Islam."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "كتاباً مفيدٌ",
        "correct": "كتاباً مفيداً",
        "explanation": "Na'at wajib menyamai i'rab man'ut (keduanya manshub fathah tanwin)."
      },
      {
        "incorrect": "كتاباً مفيدٌ (kesalahan i'rab)",
        "correct": "كتاباً مفيداً",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-7-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ\"?",
        "targetSentence": "قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah membaca sebuah buku yang bermanfaat tentang bahasa.",
          "Bukan saya telah membaca sebuah buku yang bermanfaat tentang bahasa.",
          "Apakah saya telah membaca sebuah buku yang bermanfaat tentang bahasa.?",
          "Mungkin saya telah membaca sebuah buku yang bermanfaat tentang bahasa."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ\" () bermakna \"Saya telah membaca sebuah buku yang bermanfaat tentang bahasa.\"."
      },
      {
        "id": "q-ar-gram-7-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ\"?",
        "targetSentence": "الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Profesor yang mulia itu sedang menyampaikan kuliah.",
          "Bukan profesor yang mulia itu sedang menyampaikan kuliah.",
          "Apakah profesor yang mulia itu sedang menyampaikan kuliah.?",
          "Mungkin profesor yang mulia itu sedang menyampaikan kuliah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ\" () bermakna \"Profesor yang mulia itu sedang menyampaikan kuliah.\"."
      },
      {
        "id": "q-ar-gram-7-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"هَذِهِ جَامِعَةٌ عَرِيقَةٌ فِي الْعَالَمِ الْإِسْلَامِيِّ\"?",
        "targetSentence": "هَذِهِ جَامِعَةٌ عَرِيقَةٌ فِي الْعَالَمِ الْإِسْلَامِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ini adalah universitas bersejarah yang terpandang di dunia Islam.",
          "Bukan ini adalah universitas bersejarah yang terpandang di dunia islam.",
          "Apakah ini adalah universitas bersejarah yang terpandang di dunia islam.?",
          "Mungkin ini adalah universitas bersejarah yang terpandang di dunia islam."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَذِهِ جَامِعَةٌ عَرِيقَةٌ فِي الْعَالَمِ الْإِسْلَامِيِّ\" () bermakna \"Ini adalah universitas bersejarah yang terpandang di dunia Islam.\"."
      },
      {
        "id": "q-ar-gram-7-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ (Saya telah membaca sebuah buku yang bermanfaat tentang bahasa.)",
          "كتاباً مفيدٌ (Struktur keliru)",
          "قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]. Contoh baku: \"قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ\"."
      },
      {
        "id": "q-ar-gram-7-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas) merupakan pilar pentin...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-7-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek] diterapkan untuk menjaga ketepata...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek] diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-7-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-7-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"كتاباً مفيدٌ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Na'at wajib menyamai i'rab man'ut (keduanya manshub fathah tanwin).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"كتاباً مفيدٌ\" salah karena Na'at wajib menyamai i'rab man'ut (keduanya manshub fathah tanwin).. Bentuk yang benar: \"كتاباً مفيداً\"."
      },
      {
        "id": "q-ar-gram-7-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"كتاباً مفيدٌ (kesalahan i'rab)\"?",
        "options": [
          "كتاباً مفيداً",
          "كتاباً مفيدٌ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "كتاباً مفيدٌ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"كتاباً مفيداً\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-7-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas)\"?",
        "options": [
          "Penerapan kaidah Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas) sangat dihargai dalam tradi...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-7-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas)\" (Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek].\nFungsi utama: Kata sifat (Na'at) mengikuti kata bendanya dalam hal jenis (gender), jumlah, ketetapan (definit/indefinit), dan i'rab..\nContoh penerapan: \"قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ\" () yang berarti \"Saya telah membaca sebuah buku yang bermanfaat tentang bahasa.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Na'at",
          "dan",
          "Man'ut",
          "النعت"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]), menerangkan fungsi dasarnya (Kata sifat (Na'at) mengikuti kata bendanya dalam hal jenis (...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-7-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"كتاباً مفيدٌ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"كتاباً مفيدٌ\" keliru karena: Na'at wajib menyamai i'rab man'ut (keduanya manshub fathah tanwin)..\nBentuk pembetulan yang tepat adalah: \"كتاباً مفيداً\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "كتاباً",
          "مفيداً"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Na'at wajib menyamai i'rab man'ut (keduanya manshub fathah tanwin).) dan memberikan bentuk baku: كتاباً مفيداً."
      },
      {
        "id": "q-ar-gram-7-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek] diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-7-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Profesor yang mulia itu sedang menyampaikan kuliah.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Profesor yang mulia itu sedang menyampaikan kuliah.\".",
        "keywords": [
          "Profesor",
          "yang",
          "mulia"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-7-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-7-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya telah membaca sebuah buku yang bermanfaat tentang bahasa.\"",
        "scrambledWords": [
          "كِتَابًا",
          "فِي",
          "قَرَأْتُ",
          "مُفِيدًا",
          "اللُّغَةِ"
        ],
        "correctOrder": [
          "قَرَأْتُ",
          "كِتَابًا",
          "مُفِيدًا",
          "فِي",
          "اللُّغَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ\". Mengikuti kaidah Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]."
      },
      {
        "id": "q-ar-gram-7-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Profesor yang mulia itu sedang menyampaikan kuliah.\"",
        "scrambledWords": [
          "الْفَاضِلُ",
          "الْمُحَاضَرَةَ",
          "الْأُسْتَاذُ",
          "يُلْقِي"
        ],
        "correctOrder": [
          "الْأُسْتَاذُ",
          "الْفَاضِلُ",
          "يُلْقِي",
          "الْمُحَاضَرَةَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ\". Mengikuti kaidah Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]."
      },
      {
        "id": "q-ar-gram-7-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Ini adalah universitas bersejarah yang terpandang di dunia Islam.\"",
        "scrambledWords": [
          "جَامِعَةٌ",
          "فِي",
          "الْإِسْلَامِيِّ",
          "هَذِهِ",
          "عَرِيقَةٌ",
          "الْعَالَمِ"
        ],
        "correctOrder": [
          "هَذِهِ",
          "جَامِعَةٌ",
          "عَرِيقَةٌ",
          "فِي",
          "الْعَالَمِ",
          "الْإِسْلَامِيِّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"هَذِهِ جَامِعَةٌ عَرِيقَةٌ فِي الْعَالَمِ الْإِسْلَامِيِّ\". Mengikuti kaidah Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]."
      },
      {
        "id": "q-ar-gram-7-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: كتاباً مفيداً\"",
        "scrambledWords": [
          "باً",
          "يدا",
          "كتا",
          " مف",
          "ً"
        ],
        "correctOrder": [
          "كتا",
          "باً",
          " مف",
          "يدا",
          "ً"
        ],
        "explanation": "Urutan yang tepat adalah: \"كتاباً مفيداً\". Mengikuti kaidah Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]."
      },
      {
        "id": "q-ar-gram-7-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: كتاباً مفيداً\"",
        "scrambledWords": [
          "باً",
          "يدا",
          "كتا",
          " مف",
          "ً"
        ],
        "correctOrder": [
          "كتا",
          "باً",
          " مف",
          "يدا",
          "ً"
        ],
        "explanation": "Urutan yang tepat adalah: \"كتاباً مفيداً\". Mengikuti kaidah Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]."
      },
      {
        "id": "q-ar-gram-7-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah membaca sebuah buku yang bermanfaat tentang bahasa.",
          "Bukan saya telah membaca sebuah buku yang bermanfaat tentang bahasa.",
          "Profesor yang mulia itu sedang menyampaikan kuliah.",
          "Ini adalah universitas bersejarah yang terpandang di dunia Islam."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ\" () yang bermakna \"Saya telah membaca sebuah buku yang bermanfaat tentang bahasa.\"."
      },
      {
        "id": "q-ar-gram-7-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ\"",
        "targetSentence": "الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Profesor yang mulia itu sedang menyampaikan kuliah.",
          "Saya telah membaca sebuah buku yang bermanfaat tentang bahasa.",
          "Apakah profesor yang mulia itu sedang menyampaikan kuliah.?",
          "Sangat profesor yang mulia itu sedang menyampaikan kuliah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ\" diterjemahkan menjadi \"Profesor yang mulia itu sedang menyampaikan kuliah.\"."
      },
      {
        "id": "q-ar-gram-7-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "هَذِهِ جَامِعَةٌ عَرِيقَةٌ فِي الْعَالَمِ الْإِسْلَامِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas) untuk menyatakan makna: \"Ini adalah universitas bersejarah yang terpandang di dunia Islam.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"هَذِهِ جَامِعَةٌ عَرِيقَةٌ فِي الْعَالَمِ الْإِسْلَامِيِّ\" yang mempraktikkan rumus Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]."
      },
      {
        "id": "q-ar-gram-7-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Saya telah membaca sebuah buku yang bermanfaat tentang bahasa.\"!",
        "options": [
          "قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ",
          "كتاباً مفيدٌ",
          "الْأُسْتَاذُ الْفَاضِلُ يُلْقِي الْمُحَاضَرَةَ [Variasi]",
          "هَذِهِ جَامِعَةٌ عَرِيقَةٌ فِي الْعَالَمِ الْإِسْلَامِيِّ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ\"."
      },
      {
        "id": "q-ar-gram-7-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Na'at dan Man'ut (النعت والمنعوت - Kata Sifat Penjelas)\", respons manakah yang paling sesuai?",
        "options": [
          "قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ (Saya telah membaca sebuah buku yang bermanfaat tentang bahasa.)",
          "كتاباً مفيدٌ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"قَرَأْتُ كِتَابًا مُفِيدًا فِي اللُّغَةِ\" sesuai aturan Man'ut (Benda) + Na'at (Sifat) [Menyelaraskan 4 Aspek]."
      }
    ]
  },
  {
    "id": "ar-gram-8",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "unit": 8,
    "title": "Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر)",
    "titleNative": "الضمائر المنفصلة والمتصلة",
    "patternFormula": "Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)",
    "summary": "Sistem kata ganti orang dalam bahasa Arab, baik yang terpisah maupun yang bersambung dengan nomina/verba.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ — Saya adalah mahasiswa baru di fakultas ini."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ — Dosen pembimbing saya menyemangati saya dalam penelitian ilmiah."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "هُمْ يُحِبُّونَ دِرَاسَةَ اللُّغَةِ الْعَرَبِيَّةِ — Mereka menyukai studi bahasa Arab."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-8-ex-1",
        "native": "أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ",
        "phonetic": "",
        "translationId": "Saya adalah mahasiswa baru di fakultas ini."
      },
      {
        "id": "ar-gram-8-ex-2",
        "native": "أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ",
        "phonetic": "",
        "translationId": "Dosen pembimbing saya menyemangati saya dalam penelitian ilmiah."
      },
      {
        "id": "ar-gram-8-ex-3",
        "native": "هُمْ يُحِبُّونَ دِرَاسَةَ اللُّغَةِ الْعَرَبِيَّةِ",
        "phonetic": "",
        "translationId": "Mereka menyukai studi bahasa Arab."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "كتاب هو",
        "correct": "كتابُهُ",
        "explanation": "Kepemilikan orang ketiga tunggal menggunakan dhamir muttashil -hu (كتابه)."
      },
      {
        "incorrect": "كتاب هو (kesalahan i'rab)",
        "correct": "كتابُهُ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-8-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ\"?",
        "targetSentence": "أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya adalah mahasiswa baru di fakultas ini.",
          "Bukan saya adalah mahasiswa baru di fakultas ini.",
          "Apakah saya adalah mahasiswa baru di fakultas ini.?",
          "Mungkin saya adalah mahasiswa baru di fakultas ini."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ\" () bermakna \"Saya adalah mahasiswa baru di fakultas ini.\"."
      },
      {
        "id": "q-ar-gram-8-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ\"?",
        "targetSentence": "أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.",
          "Bukan dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.",
          "Apakah dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.?",
          "Mungkin dosen pembimbing saya menyemangati saya dalam penelitian ilmiah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ\" () bermakna \"Dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.\"."
      },
      {
        "id": "q-ar-gram-8-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"هُمْ يُحِبُّونَ دِرَاسَةَ اللُّغَةِ الْعَرَبِيَّةِ\"?",
        "targetSentence": "هُمْ يُحِبُّونَ دِرَاسَةَ اللُّغَةِ الْعَرَبِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mereka menyukai studi bahasa Arab.",
          "Bukan mereka menyukai studi bahasa arab.",
          "Apakah mereka menyukai studi bahasa arab.?",
          "Mungkin mereka menyukai studi bahasa arab."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هُمْ يُحِبُّونَ دِرَاسَةَ اللُّغَةِ الْعَرَبِيَّةِ\" () bermakna \"Mereka menyukai studi bahasa Arab.\"."
      },
      {
        "id": "q-ar-gram-8-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ (Saya adalah mahasiswa baru di fakultas ini.)",
          "كتاب هو (Struktur keliru)",
          "أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه). Contoh baku: \"أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ\"."
      },
      {
        "id": "q-ar-gram-8-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر) merupakan pilar penting da...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-8-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه) diterapkan untuk menjaga ket...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-8-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-8-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"كتاب هو\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Kepemilikan orang ketiga tunggal menggunakan dhamir muttashil -hu (كتابه).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"كتاب هو\" salah karena Kepemilikan orang ketiga tunggal menggunakan dhamir muttashil -hu (كتابه).. Bentuk yang benar: \"كتابُهُ\"."
      },
      {
        "id": "q-ar-gram-8-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"كتاب هو (kesalahan i'rab)\"?",
        "options": [
          "كتابُهُ",
          "كتاب هو (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "كتاب هو (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"كتابُهُ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-8-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر)\"?",
        "options": [
          "Penerapan kaidah Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر) sangat dihargai dalam tradisi i...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-8-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر)\" (Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه).\nFungsi utama: Sistem kata ganti orang dalam bahasa Arab, baik yang terpisah maupun yang bersambung dengan nomina/verba..\nContoh penerapan: \"أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ\" () yang berarti \"Saya adalah mahasiswa baru di fakultas ini.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kata",
          "Ganti",
          "Dhamir",
          "Munfashil"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)), menerangkan fungsi dasarnya (Sistem kata ganti orang dalam bahasa Arab, baik yang terpisa...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-8-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"كتاب هو\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"كتاب هو\" keliru karena: Kepemilikan orang ketiga tunggal menggunakan dhamir muttashil -hu (كتابه)..\nBentuk pembetulan yang tepat adalah: \"كتابُهُ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "كتابُهُ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Kepemilikan orang ketiga tunggal menggunakan dhamir muttashil -hu (كتابه).) dan memberikan bentuk baku: كتابُهُ."
      },
      {
        "id": "q-ar-gram-8-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-8-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.\".",
        "keywords": [
          "Dosen",
          "pembimbing",
          "saya"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-8-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-8-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya adalah mahasiswa baru di fakultas ini.\"",
        "scrambledWords": [
          "طَالِبٌ",
          "فِي",
          "الْكُلِّيَّةِ",
          "أَنَا",
          "جَدِيدٌ",
          "هَذِهِ"
        ],
        "correctOrder": [
          "أَنَا",
          "طَالِبٌ",
          "جَدِيدٌ",
          "فِي",
          "هَذِهِ",
          "الْكُلِّيَّةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ\". Mengikuti kaidah Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)."
      },
      {
        "id": "q-ar-gram-8-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.\"",
        "scrambledWords": [
          "يُشَجِّعُنِي",
          "الْبَحْثِ",
          "أُسْتَاذِي",
          "عَلَى",
          "الْعِلْمِيِّ"
        ],
        "correctOrder": [
          "أُسْتَاذِي",
          "يُشَجِّعُنِي",
          "عَلَى",
          "الْبَحْثِ",
          "الْعِلْمِيِّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ\". Mengikuti kaidah Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)."
      },
      {
        "id": "q-ar-gram-8-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Mereka menyukai studi bahasa Arab.\"",
        "scrambledWords": [
          "يُحِبُّونَ",
          "اللُّغَةِ",
          "هُمْ",
          "دِرَاسَةَ",
          "الْعَرَبِيَّةِ"
        ],
        "correctOrder": [
          "هُمْ",
          "يُحِبُّونَ",
          "دِرَاسَةَ",
          "اللُّغَةِ",
          "الْعَرَبِيَّةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"هُمْ يُحِبُّونَ دِرَاسَةَ اللُّغَةِ الْعَرَبِيَّةِ\". Mengikuti kaidah Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)."
      },
      {
        "id": "q-ar-gram-8-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: كتابُهُ\"",
        "scrambledWords": [
          "اب",
          "ُ",
          "كت",
          "ُه"
        ],
        "correctOrder": [
          "كت",
          "اب",
          "ُه",
          "ُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"كتابُهُ\". Mengikuti kaidah Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)."
      },
      {
        "id": "q-ar-gram-8-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: كتابُهُ\"",
        "scrambledWords": [
          "اب",
          "ُ",
          "كت",
          "ُه"
        ],
        "correctOrder": [
          "كت",
          "اب",
          "ُه",
          "ُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"كتابُهُ\". Mengikuti kaidah Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)."
      },
      {
        "id": "q-ar-gram-8-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya adalah mahasiswa baru di fakultas ini.",
          "Bukan saya adalah mahasiswa baru di fakultas ini.",
          "Dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.",
          "Mereka menyukai studi bahasa Arab."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ\" () yang bermakna \"Saya adalah mahasiswa baru di fakultas ini.\"."
      },
      {
        "id": "q-ar-gram-8-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ\"",
        "targetSentence": "أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.",
          "Saya adalah mahasiswa baru di fakultas ini.",
          "Apakah dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.?",
          "Sangat dosen pembimbing saya menyemangati saya dalam penelitian ilmiah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ\" diterjemahkan menjadi \"Dosen pembimbing saya menyemangati saya dalam penelitian ilmiah.\"."
      },
      {
        "id": "q-ar-gram-8-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "هُمْ يُحِبُّونَ دِرَاسَةَ اللُّغَةِ الْعَرَبِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر) untuk menyatakan makna: \"Mereka menyukai studi bahasa Arab.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"هُمْ يُحِبُّونَ دِرَاسَةَ اللُّغَةِ الْعَرَبِيَّةِ\" yang mempraktikkan rumus Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)."
      },
      {
        "id": "q-ar-gram-8-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Saya adalah mahasiswa baru di fakultas ini.\"!",
        "options": [
          "أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ",
          "كتاب هو",
          "أُسْتَاذِي يُشَجِّعُنِي عَلَى الْبَحْثِ الْعِلْمِيِّ [Variasi]",
          "هُمْ يُحِبُّونَ دِرَاسَةَ اللُّغَةِ الْعَرَبِيَّةِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ\"."
      },
      {
        "id": "q-ar-gram-8-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kata Ganti Dhamir Munfashil dan Muttashil (الضمائر)\", respons manakah yang paling sesuai?",
        "options": [
          "أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ (Saya adalah mahasiswa baru di fakultas ini.)",
          "كتاب هو (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"أَنَا طَالِبٌ جَدِيدٌ فِي هَذِهِ الْكُلِّيَّةِ\" sesuai aturan Dhamir Mandiri (أنا, أنت, هو) & Dhamir Melekat (-ي, -ك, -ه)."
      }
    ]
  },
  {
    "id": "ar-gram-9",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "unit": 9,
    "title": "Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر)",
    "titleNative": "صياغة فعل الأمر وبناؤه على السكون",
    "patternFormula": "Fi'il Amar (Mabni Sukun) untuk Orang Kedua",
    "summary": "Kata kerja imperatif untuk memerintahkan atau memohon sesuatu kepada lawan bicara laki-laki atau perempuan.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ — Bacalah makalah penelitian ini dengan saksama dan teliti!"
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Fi'il Amar (Mabni Sukun) untuk Orang Kedua diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ — Wahai Fatimah, tulislah tugas-tugas harianmu!"
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "تَعَلَّمُوا الْعَرَبِيَّةَ فَإِنَّهَا تُثَبِّتُ الْعَقْلَ — Pelajarilah bahasa Arab karena ia menguatkan akal pikiran!"
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-9-ex-1",
        "native": "اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ",
        "phonetic": "",
        "translationId": "Bacalah makalah penelitian ini dengan saksama dan teliti!"
      },
      {
        "id": "ar-gram-9-ex-2",
        "native": "يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ",
        "phonetic": "",
        "translationId": "Wahai Fatimah, tulislah tugas-tugas harianmu!"
      },
      {
        "id": "ar-gram-9-ex-3",
        "native": "تَعَلَّمُوا الْعَرَبِيَّةَ فَإِنَّهَا تُثَبِّتُ الْعَقْلَ",
        "phonetic": "",
        "translationId": "Pelajarilah bahasa Arab karena ia menguatkan akal pikiran!"
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "اقرأُ الكتاب",
        "correct": "اقْرَأِ الكتاب",
        "explanation": "Fi'il amar dasar berakhiran sukun: اقْرَأْ."
      },
      {
        "incorrect": "اقرأُ الكتاب (kesalahan i'rab)",
        "correct": "اقْرَأِ الكتاب",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-9-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ\"?",
        "targetSentence": "اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Bacalah makalah penelitian ini dengan saksama dan teliti!",
          "Bukan bacalah makalah penelitian ini dengan saksama dan teliti!",
          "Apakah bacalah makalah penelitian ini dengan saksama dan teliti!?",
          "Mungkin bacalah makalah penelitian ini dengan saksama dan teliti!"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ\" () bermakna \"Bacalah makalah penelitian ini dengan saksama dan teliti!\"."
      },
      {
        "id": "q-ar-gram-9-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ\"?",
        "targetSentence": "يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Wahai Fatimah, tulislah tugas-tugas harianmu!",
          "Bukan wahai fatimah, tulislah tugas-tugas harianmu!",
          "Apakah wahai fatimah, tulislah tugas-tugas harianmu!?",
          "Mungkin wahai fatimah, tulislah tugas-tugas harianmu!"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ\" () bermakna \"Wahai Fatimah, tulislah tugas-tugas harianmu!\"."
      },
      {
        "id": "q-ar-gram-9-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"تَعَلَّمُوا الْعَرَبِيَّةَ فَإِنَّهَا تُثَبِّتُ الْعَقْلَ\"?",
        "targetSentence": "تَعَلَّمُوا الْعَرَبِيَّةَ فَإِنَّهَا تُثَبِّتُ الْعَقْلَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Pelajarilah bahasa Arab karena ia menguatkan akal pikiran!",
          "Bukan pelajarilah bahasa arab karena ia menguatkan akal pikiran!",
          "Apakah pelajarilah bahasa arab karena ia menguatkan akal pikiran!?",
          "Mungkin pelajarilah bahasa arab karena ia menguatkan akal pikiran!"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تَعَلَّمُوا الْعَرَبِيَّةَ فَإِنَّهَا تُثَبِّتُ الْعَقْلَ\" () bermakna \"Pelajarilah bahasa Arab karena ia menguatkan akal pikiran!\"."
      },
      {
        "id": "q-ar-gram-9-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Fi'il Amar (Mabni Sukun) untuk Orang Kedua\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ (Bacalah makalah penelitian ini dengan saksama dan teliti!)",
          "اقرأُ الكتاب (Struktur keliru)",
          "اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Fi'il Amar (Mabni Sukun) untuk Orang Kedua. Contoh baku: \"اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ\"."
      },
      {
        "id": "q-ar-gram-9-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر) merupakan pilar penting dalam...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-9-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Fi'il Amar (Mabni Sukun) untuk Orang Kedua diterapkan untuk menjaga ketepatan baris hara...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Fi'il Amar (Mabni Sukun) untuk Orang Kedua diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-9-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-9-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"اقرأُ الكتاب\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Fi'il amar dasar berakhiran sukun: اقْرَأْ.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اقرأُ الكتاب\" salah karena Fi'il amar dasar berakhiran sukun: اقْرَأْ.. Bentuk yang benar: \"اقْرَأِ الكتاب\"."
      },
      {
        "id": "q-ar-gram-9-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"اقرأُ الكتاب (kesalahan i'rab)\"?",
        "options": [
          "اقْرَأِ الكتاب",
          "اقرأُ الكتاب (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "اقرأُ الكتاب (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"اقْرَأِ الكتاب\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-9-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر)\"?",
        "options": [
          "Penerapan kaidah Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر) sangat dihargai dalam tradisi ilmi...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-9-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر)\" (Fi'il Amar (Mabni Sukun) untuk Orang Kedua), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Fi'il Amar (Mabni Sukun) untuk Orang Kedua.\nFungsi utama: Kata kerja imperatif untuk memerintahkan atau memohon sesuatu kepada lawan bicara laki-laki atau perempuan..\nContoh penerapan: \"اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ\" () yang berarti \"Bacalah makalah penelitian ini dengan saksama dan teliti!\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Fi'il",
          "Amar",
          "dan",
          "Kaidah"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Fi'il Amar (Mabni Sukun) untuk Orang Kedua), menerangkan fungsi dasarnya (Kata kerja imperatif untuk memerintahkan atau memohon sesuat...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-9-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"اقرأُ الكتاب\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"اقرأُ الكتاب\" keliru karena: Fi'il amar dasar berakhiran sukun: اقْرَأْ..\nBentuk pembetulan yang tepat adalah: \"اقْرَأِ الكتاب\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "اقْرَأِ",
          "الكتاب"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Fi'il amar dasar berakhiran sukun: اقْرَأْ.) dan memberikan bentuk baku: اقْرَأِ الكتاب."
      },
      {
        "id": "q-ar-gram-9-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Fi'il Amar (Mabni Sukun) untuk Orang Kedua diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-9-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Wahai Fatimah, tulislah tugas-tugas harianmu!\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Fi'il Amar (Mabni Sukun) untuk Orang Kedua\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Wahai Fatimah, tulislah tugas-tugas harianmu!\".",
        "keywords": [
          "Wahai",
          "Fatimah,",
          "tulislah"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-9-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-9-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bacalah makalah penelitian ini dengan saksama dan teliti!\"",
        "scrambledWords": [
          "هَذَا",
          "بِتَأَنٍّ",
          "اقْرَأْ",
          "الْبَحْثَ",
          "وَدِقَّةٍ"
        ],
        "correctOrder": [
          "اقْرَأْ",
          "هَذَا",
          "الْبَحْثَ",
          "بِتَأَنٍّ",
          "وَدِقَّةٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ\". Mengikuti kaidah Fi'il Amar (Mabni Sukun) untuk Orang Kedua."
      },
      {
        "id": "q-ar-gram-9-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Wahai Fatimah, tulislah tugas-tugas harianmu!\"",
        "scrambledWords": [
          "فَاطِمَةُ،",
          "وَاجِبَاتِكِ",
          "يَا",
          "اكْتُبِي",
          "الْيَوْمِيَّةَ"
        ],
        "correctOrder": [
          "يَا",
          "فَاطِمَةُ،",
          "اكْتُبِي",
          "وَاجِبَاتِكِ",
          "الْيَوْمِيَّةَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ\". Mengikuti kaidah Fi'il Amar (Mabni Sukun) untuk Orang Kedua."
      },
      {
        "id": "q-ar-gram-9-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Pelajarilah bahasa Arab karena ia menguatkan akal pikiran!\"",
        "scrambledWords": [
          "الْعَرَبِيَّةَ",
          "تُثَبِّتُ",
          "تَعَلَّمُوا",
          "فَإِنَّهَا",
          "الْعَقْلَ"
        ],
        "correctOrder": [
          "تَعَلَّمُوا",
          "الْعَرَبِيَّةَ",
          "فَإِنَّهَا",
          "تُثَبِّتُ",
          "الْعَقْلَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"تَعَلَّمُوا الْعَرَبِيَّةَ فَإِنَّهَا تُثَبِّتُ الْعَقْلَ\". Mengikuti kaidah Fi'il Amar (Mabni Sukun) untuk Orang Kedua."
      },
      {
        "id": "q-ar-gram-9-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: اقْرَأِ الكتاب\"",
        "scrambledWords": [
          "رَأ",
          "لكت",
          "اقْ",
          "ِ ا",
          "اب"
        ],
        "correctOrder": [
          "اقْ",
          "رَأ",
          "ِ ا",
          "لكت",
          "اب"
        ],
        "explanation": "Urutan yang tepat adalah: \"اقْرَأِ الكتاب\". Mengikuti kaidah Fi'il Amar (Mabni Sukun) untuk Orang Kedua."
      },
      {
        "id": "q-ar-gram-9-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: اقْرَأِ الكتاب\"",
        "scrambledWords": [
          "رَأ",
          "لكت",
          "اقْ",
          "ِ ا",
          "اب"
        ],
        "correctOrder": [
          "اقْ",
          "رَأ",
          "ِ ا",
          "لكت",
          "اب"
        ],
        "explanation": "Urutan yang tepat adalah: \"اقْرَأِ الكتاب\". Mengikuti kaidah Fi'il Amar (Mabni Sukun) untuk Orang Kedua."
      },
      {
        "id": "q-ar-gram-9-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Bacalah makalah penelitian ini dengan saksama dan teliti!",
          "Bukan bacalah makalah penelitian ini dengan saksama dan teliti!",
          "Wahai Fatimah, tulislah tugas-tugas harianmu!",
          "Pelajarilah bahasa Arab karena ia menguatkan akal pikiran!"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ\" () yang bermakna \"Bacalah makalah penelitian ini dengan saksama dan teliti!\"."
      },
      {
        "id": "q-ar-gram-9-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ\"",
        "targetSentence": "يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Wahai Fatimah, tulislah tugas-tugas harianmu!",
          "Bacalah makalah penelitian ini dengan saksama dan teliti!",
          "Apakah wahai fatimah, tulislah tugas-tugas harianmu!?",
          "Sangat wahai fatimah, tulislah tugas-tugas harianmu!"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ\" diterjemahkan menjadi \"Wahai Fatimah, tulislah tugas-tugas harianmu!\"."
      },
      {
        "id": "q-ar-gram-9-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "تَعَلَّمُوا الْعَرَبِيَّةَ فَإِنَّهَا تُثَبِّتُ الْعَقْلَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر) untuk menyatakan makna: \"Pelajarilah bahasa Arab karena ia menguatkan akal pikiran!\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"تَعَلَّمُوا الْعَرَبِيَّةَ فَإِنَّهَا تُثَبِّتُ الْعَقْلَ\" yang mempraktikkan rumus Fi'il Amar (Mabni Sukun) untuk Orang Kedua."
      },
      {
        "id": "q-ar-gram-9-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Bacalah makalah penelitian ini dengan saksama dan teliti!\"!",
        "options": [
          "اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ",
          "اقرأُ الكتاب",
          "يَا فَاطِمَةُ، اكْتُبِي وَاجِبَاتِكِ الْيَوْمِيَّةَ [Variasi]",
          "تَعَلَّمُوا الْعَرَبِيَّةَ فَإِنَّهَا تُثَبِّتُ الْعَقْلَ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ\"."
      },
      {
        "id": "q-ar-gram-9-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Fi'il Amar dan Kaidah Perintah Dasar (فعل الأمر)\", respons manakah yang paling sesuai?",
        "options": [
          "اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ (Bacalah makalah penelitian ini dengan saksama dan teliti!)",
          "اقرأُ الكتاب (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"اقْرَأْ هَذَا الْبَحْثَ بِتَأَنٍّ وَدِقَّةٍ\" sesuai aturan Fi'il Amar (Mabni Sukun) untuk Orang Kedua."
      }
    ]
  },
  {
    "id": "ar-gram-10",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "unit": 10,
    "title": "Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع)",
    "titleNative": "أقسام الاسم من حيث العدد وعلامات إعرابها",
    "patternFormula": "Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim",
    "summary": "Pembagian kata benda berdasarkan jumlah: tunggal (mufrad), ganda (mutsanna), dan jamak (salim/taksir).",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ — Dua orang mahasiswa telah hadir ke ruang ujian."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ — Para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "قَرَأْتُ كُتُبًا كَثِيرَةً فِي هَذَا الشَّهْرِ — Saya telah membaca banyak buku pada bulan ini."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-10-ex-1",
        "native": "حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ",
        "phonetic": "",
        "translationId": "Dua orang mahasiswa telah hadir ke ruang ujian."
      },
      {
        "id": "ar-gram-10-ex-2",
        "native": "الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ",
        "phonetic": "",
        "translationId": "Para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka."
      },
      {
        "id": "ar-gram-10-ex-3",
        "native": "قَرَأْتُ كُتُبًا كَثِيرَةً فِي هَذَا الشَّهْرِ",
        "phonetic": "",
        "translationId": "Saya telah membaca banyak buku pada bulan ini."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "طالبانِ حضروا",
        "correct": "حضر طالبانِ",
        "explanation": "Jika verba mendahului subjek dua orang, verba tetap dalam bentuk tunggal (حضر)."
      },
      {
        "incorrect": "طالبانِ حضروا (kesalahan i'rab)",
        "correct": "حضر طالبانِ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-10-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ\"?",
        "targetSentence": "حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Dua orang mahasiswa telah hadir ke ruang ujian.",
          "Bukan dua orang mahasiswa telah hadir ke ruang ujian.",
          "Apakah dua orang mahasiswa telah hadir ke ruang ujian.?",
          "Mungkin dua orang mahasiswa telah hadir ke ruang ujian."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ\" () bermakna \"Dua orang mahasiswa telah hadir ke ruang ujian.\"."
      },
      {
        "id": "q-ar-gram-10-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ\"?",
        "targetSentence": "الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.",
          "Bukan para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.",
          "Apakah para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.?",
          "Mungkin para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ\" () bermakna \"Para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.\"."
      },
      {
        "id": "q-ar-gram-10-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"قَرَأْتُ كُتُبًا كَثِيرَةً فِي هَذَا الشَّهْرِ\"?",
        "targetSentence": "قَرَأْتُ كُتُبًا كَثِيرَةً فِي هَذَا الشَّهْرِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah membaca banyak buku pada bulan ini.",
          "Bukan saya telah membaca banyak buku pada bulan ini.",
          "Apakah saya telah membaca banyak buku pada bulan ini.?",
          "Mungkin saya telah membaca banyak buku pada bulan ini."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَرَأْتُ كُتُبًا كَثِيرَةً فِي هَذَا الشَّهْرِ\" () bermakna \"Saya telah membaca banyak buku pada bulan ini.\"."
      },
      {
        "id": "q-ar-gram-10-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ (Dua orang mahasiswa telah hadir ke ruang ujian.)",
          "طالبانِ حضروا (Struktur keliru)",
          "حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim. Contoh baku: \"حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ\"."
      },
      {
        "id": "q-ar-gram-10-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع) merupakan pilar penti...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-10-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim diterapkan untuk menjaga ketep...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-10-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-10-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"طالبانِ حضروا\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Jika verba mendahului subjek dua orang, verba tetap dalam bentuk tunggal (حضر).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"طالبانِ حضروا\" salah karena Jika verba mendahului subjek dua orang, verba tetap dalam bentuk tunggal (حضر).. Bentuk yang benar: \"حضر طالبانِ\"."
      },
      {
        "id": "q-ar-gram-10-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"طالبانِ حضروا (kesalahan i'rab)\"?",
        "options": [
          "حضر طالبانِ",
          "طالبانِ حضروا (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "طالبانِ حضروا (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"حضر طالبانِ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-10-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع)\"?",
        "options": [
          "Penerapan kaidah Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع) sangat dihargai dalam trad...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-10-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع)\" (Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim.\nFungsi utama: Pembagian kata benda berdasarkan jumlah: tunggal (mufrad), ganda (mutsanna), dan jamak (salim/taksir)..\nContoh penerapan: \"حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ\" () yang berarti \"Dua orang mahasiswa telah hadir ke ruang ujian.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Isim",
          "Mufrad,",
          "Mutsanna,",
          "dan"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim), menerangkan fungsi dasarnya (Pembagian kata benda berdasarkan jumlah: tunggal (mufrad), g...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-10-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"طالبانِ حضروا\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"طالبانِ حضروا\" keliru karena: Jika verba mendahului subjek dua orang, verba tetap dalam bentuk tunggal (حضر)..\nBentuk pembetulan yang tepat adalah: \"حضر طالبانِ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "حضر",
          "طالبانِ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Jika verba mendahului subjek dua orang, verba tetap dalam bentuk tunggal (حضر).) dan memberikan bentuk baku: حضر طالبانِ."
      },
      {
        "id": "q-ar-gram-10-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-10-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.\".",
        "keywords": [
          "Para",
          "pengajar",
          "itu"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-10-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-10-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Dua orang mahasiswa telah hadir ke ruang ujian.\"",
        "scrambledWords": [
          "طَالِبَانِ",
          "إِلَى",
          "الِامْتِحَانِ",
          "حَضَرَ",
          "اثْنَانِ",
          "قَاعَةِ"
        ],
        "correctOrder": [
          "حَضَرَ",
          "طَالِبَانِ",
          "اثْنَانِ",
          "إِلَى",
          "قَاعَةِ",
          "الِامْتِحَانِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ\". Mengikuti kaidah Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim."
      },
      {
        "id": "q-ar-gram-10-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.\"",
        "scrambledWords": [
          "مُخْلِصُونَ",
          "أَدَاءِ",
          "الْمُعَلِّمُونَ",
          "فِي",
          "وَاجِبِهِمْ"
        ],
        "correctOrder": [
          "الْمُعَلِّمُونَ",
          "مُخْلِصُونَ",
          "فِي",
          "أَدَاءِ",
          "وَاجِبِهِمْ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ\". Mengikuti kaidah Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim."
      },
      {
        "id": "q-ar-gram-10-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya telah membaca banyak buku pada bulan ini.\"",
        "scrambledWords": [
          "كُتُبًا",
          "فِي",
          "الشَّهْرِ",
          "قَرَأْتُ",
          "كَثِيرَةً",
          "هَذَا"
        ],
        "correctOrder": [
          "قَرَأْتُ",
          "كُتُبًا",
          "كَثِيرَةً",
          "فِي",
          "هَذَا",
          "الشَّهْرِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"قَرَأْتُ كُتُبًا كَثِيرَةً فِي هَذَا الشَّهْرِ\". Mengikuti kaidah Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim."
      },
      {
        "id": "q-ar-gram-10-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: حضر طالبانِ\"",
        "scrambledWords": [
          "ر ",
          "لب",
          "ِ",
          "حض",
          "طا",
          "ان"
        ],
        "correctOrder": [
          "حض",
          "ر ",
          "طا",
          "لب",
          "ان",
          "ِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"حضر طالبانِ\". Mengikuti kaidah Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim."
      },
      {
        "id": "q-ar-gram-10-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: حضر طالبانِ\"",
        "scrambledWords": [
          "ر ",
          "لب",
          "ِ",
          "حض",
          "طا",
          "ان"
        ],
        "correctOrder": [
          "حض",
          "ر ",
          "طا",
          "لب",
          "ان",
          "ِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"حضر طالبانِ\". Mengikuti kaidah Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim."
      },
      {
        "id": "q-ar-gram-10-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Dua orang mahasiswa telah hadir ke ruang ujian.",
          "Bukan dua orang mahasiswa telah hadir ke ruang ujian.",
          "Para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.",
          "Saya telah membaca banyak buku pada bulan ini."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ\" () yang bermakna \"Dua orang mahasiswa telah hadir ke ruang ujian.\"."
      },
      {
        "id": "q-ar-gram-10-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ\"",
        "targetSentence": "الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.",
          "Dua orang mahasiswa telah hadir ke ruang ujian.",
          "Apakah para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.?",
          "Sangat para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ\" diterjemahkan menjadi \"Para pengajar itu tulus ikhlas dalam menunaikan kewajiban mereka.\"."
      },
      {
        "id": "q-ar-gram-10-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "قَرَأْتُ كُتُبًا كَثِيرَةً فِي هَذَا الشَّهْرِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع) untuk menyatakan makna: \"Saya telah membaca banyak buku pada bulan ini.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"قَرَأْتُ كُتُبًا كَثِيرَةً فِي هَذَا الشَّهْرِ\" yang mempraktikkan rumus Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim."
      },
      {
        "id": "q-ar-gram-10-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Dua orang mahasiswa telah hadir ke ruang ujian.\"!",
        "options": [
          "حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ",
          "طالبانِ حضروا",
          "الْمُعَلِّمُونَ مُخْلِصُونَ فِي أَدَاءِ وَاجِبِهِمْ [Variasi]",
          "قَرَأْتُ كُتُبًا كَثِيرَةً فِي هَذَا الشَّهْرِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ\"."
      },
      {
        "id": "q-ar-gram-10-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Isim Mufrad, Mutsanna, dan Jama' (المفرد والمثنى والجمع)\", respons manakah yang paling sesuai?",
        "options": [
          "حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ (Dua orang mahasiswa telah hadir ke ruang ujian.)",
          "طالبانِ حضروا (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"حَضَرَ طَالِبَانِ اثْنَانِ إِلَى قَاعَةِ الِامْتِحَانِ\" sesuai aturan Mufrad (1) / Mutsanna (+انِ/-يْنِ) / Jama' Taksir & Salim."
      }
    ]
  },
  {
    "id": "ar-gram-11",
    "languageId": "arabic",
    "level": "Mustawa 2 (Kaidah Kalimat Sederhana)",
    "unit": 1,
    "title": "Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status)",
    "titleNative": "الأفعال الناسخة (كان وأخواتها وعملها)",
    "patternFormula": "كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)",
    "summary": "Ka'ana dan saudaranya masuk ke kalimat nominal: merafa'kan mubtada' (isimnya) dan menashabkan khabar.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ — Ujian itu tadinya mudah bagi para mahasiswa."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ — Ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "ظَلَّ الْبَاحِثُ مُجْتَهِدًا فِي مَعْمَلِهِ — Peneliti itu senantiasa tekun bekerja di laboratoriumnya."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-11-ex-1",
        "native": "كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ",
        "phonetic": "",
        "translationId": "Ujian itu tadinya mudah bagi para mahasiswa."
      },
      {
        "id": "ar-gram-11-ex-2",
        "native": "أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ",
        "phonetic": "",
        "translationId": "Ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi."
      },
      {
        "id": "ar-gram-11-ex-3",
        "native": "ظَلَّ الْبَاحِثُ مُجْتَهِدًا فِي مَعْمَلِهِ",
        "phonetic": "",
        "translationId": "Peneliti itu senantiasa tekun bekerja di laboratoriumnya."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "كان الامتحانُ سهلٌ",
        "correct": "كان الامتحانُ سهلاً",
        "explanation": "Khabar ka'ana wajib manshub (berharakat fathah/tanwin)."
      },
      {
        "incorrect": "كان الامتحانُ سهلٌ (kesalahan i'rab)",
        "correct": "كان الامتحانُ سهلاً",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-11-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ\"?",
        "targetSentence": "كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ujian itu tadinya mudah bagi para mahasiswa.",
          "Bukan ujian itu tadinya mudah bagi para mahasiswa.",
          "Apakah ujian itu tadinya mudah bagi para mahasiswa.?",
          "Mungkin ujian itu tadinya mudah bagi para mahasiswa."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ\" () bermakna \"Ujian itu tadinya mudah bagi para mahasiswa.\"."
      },
      {
        "id": "q-ar-gram-11-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ\"?",
        "targetSentence": "أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.",
          "Bukan ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.",
          "Apakah ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.?",
          "Mungkin ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ\" () bermakna \"Ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.\"."
      },
      {
        "id": "q-ar-gram-11-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"ظَلَّ الْبَاحِثُ مُجْتَهِدًا فِي مَعْمَلِهِ\"?",
        "targetSentence": "ظَلَّ الْبَاحِثُ مُجْتَهِدًا فِي مَعْمَلِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Peneliti itu senantiasa tekun bekerja di laboratoriumnya.",
          "Bukan peneliti itu senantiasa tekun bekerja di laboratoriumnya.",
          "Apakah peneliti itu senantiasa tekun bekerja di laboratoriumnya.?",
          "Mungkin peneliti itu senantiasa tekun bekerja di laboratoriumnya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"ظَلَّ الْبَاحِثُ مُجْتَهِدًا فِي مَعْمَلِهِ\" () bermakna \"Peneliti itu senantiasa tekun bekerja di laboratoriumnya.\"."
      },
      {
        "id": "q-ar-gram-11-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ (Ujian itu tadinya mudah bagi para mahasiswa.)",
          "كان الامتحانُ سهلٌ (Struktur keliru)",
          "كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub). Contoh baku: \"كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ\"."
      },
      {
        "id": "q-ar-gram-11-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status) merupakan pilar pen...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-11-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub) diterapkan untuk menjaga ketepatan ...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-11-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-11-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"كان الامتحانُ سهلٌ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Khabar ka'ana wajib manshub (berharakat fathah/tanwin).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"كان الامتحانُ سهلٌ\" salah karena Khabar ka'ana wajib manshub (berharakat fathah/tanwin).. Bentuk yang benar: \"كان الامتحانُ سهلاً\"."
      },
      {
        "id": "q-ar-gram-11-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"كان الامتحانُ سهلٌ (kesalahan i'rab)\"?",
        "options": [
          "كان الامتحانُ سهلاً",
          "كان الامتحانُ سهلٌ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "كان الامتحانُ سهلٌ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"كان الامتحانُ سهلاً\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-11-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status)\"?",
        "options": [
          "Penerapan kaidah Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status) sangat dihargai dalam tr...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-11-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status)\" (كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub).\nFungsi utama: Ka'ana dan saudaranya masuk ke kalimat nominal: merafa'kan mubtada' (isimnya) dan menashabkan khabar..\nContoh penerapan: \"كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ\" () yang berarti \"Ujian itu tadinya mudah bagi para mahasiswa.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Ka'ana",
          "Akhawatuha",
          "كان",
          "وأخواتها"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)), menerangkan fungsi dasarnya (Ka'ana dan saudaranya masuk ke kalimat nominal: merafa'kan m...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-11-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"كان الامتحانُ سهلٌ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"كان الامتحانُ سهلٌ\" keliru karena: Khabar ka'ana wajib manshub (berharakat fathah/tanwin)..\nBentuk pembetulan yang tepat adalah: \"كان الامتحانُ سهلاً\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "كان",
          "الامتحانُ",
          "سهلاً"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Khabar ka'ana wajib manshub (berharakat fathah/tanwin).) dan memberikan bentuk baku: كان الامتحانُ سهلاً."
      },
      {
        "id": "q-ar-gram-11-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-11-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.\".",
        "keywords": [
          "Ilmu",
          "pengetahuan",
          "menjadi"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-11-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-11-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Ujian itu tadinya mudah bagi para mahasiswa.\"",
        "scrambledWords": [
          "الِامْتِحَانُ",
          "عَلَى",
          "كَانَ",
          "سَهْلًا",
          "الطُّلَّابِ"
        ],
        "correctOrder": [
          "كَانَ",
          "الِامْتِحَانُ",
          "سَهْلًا",
          "عَلَى",
          "الطُّلَّابِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ\". Mengikuti kaidah كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)."
      },
      {
        "id": "q-ar-gram-11-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.\"",
        "scrambledWords": [
          "الْعِلْمُ",
          "لِلْجَمِيعِ",
          "التِّقْنِيَّةِ",
          "أَصْبَحَ",
          "مُتَاحًا",
          "بِفَضْلِ"
        ],
        "correctOrder": [
          "أَصْبَحَ",
          "الْعِلْمُ",
          "مُتَاحًا",
          "لِلْجَمِيعِ",
          "بِفَضْلِ",
          "التِّقْنِيَّةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ\". Mengikuti kaidah كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)."
      },
      {
        "id": "q-ar-gram-11-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Peneliti itu senantiasa tekun bekerja di laboratoriumnya.\"",
        "scrambledWords": [
          "الْبَاحِثُ",
          "فِي",
          "ظَلَّ",
          "مُجْتَهِدًا",
          "مَعْمَلِهِ"
        ],
        "correctOrder": [
          "ظَلَّ",
          "الْبَاحِثُ",
          "مُجْتَهِدًا",
          "فِي",
          "مَعْمَلِهِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"ظَلَّ الْبَاحِثُ مُجْتَهِدًا فِي مَعْمَلِهِ\". Mengikuti kaidah كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)."
      },
      {
        "id": "q-ar-gram-11-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: كان الامتحانُ سهلاً\"",
        "scrambledWords": [
          "الامتحانُ",
          "كان",
          "سهلاً"
        ],
        "correctOrder": [
          "كان",
          "الامتحانُ",
          "سهلاً"
        ],
        "explanation": "Urutan yang tepat adalah: \"كان الامتحانُ سهلاً\". Mengikuti kaidah كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)."
      },
      {
        "id": "q-ar-gram-11-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: كان الامتحانُ سهلاً\"",
        "scrambledWords": [
          "الامتحانُ",
          "كان",
          "سهلاً"
        ],
        "correctOrder": [
          "كان",
          "الامتحانُ",
          "سهلاً"
        ],
        "explanation": "Urutan yang tepat adalah: \"كان الامتحانُ سهلاً\". Mengikuti kaidah كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)."
      },
      {
        "id": "q-ar-gram-11-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ujian itu tadinya mudah bagi para mahasiswa.",
          "Bukan ujian itu tadinya mudah bagi para mahasiswa.",
          "Ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.",
          "Peneliti itu senantiasa tekun bekerja di laboratoriumnya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ\" () yang bermakna \"Ujian itu tadinya mudah bagi para mahasiswa.\"."
      },
      {
        "id": "q-ar-gram-11-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ\"",
        "targetSentence": "أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.",
          "Ujian itu tadinya mudah bagi para mahasiswa.",
          "Apakah ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.?",
          "Sangat ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ\" diterjemahkan menjadi \"Ilmu pengetahuan menjadi terbuka bagi semua orang berkat teknologi.\"."
      },
      {
        "id": "q-ar-gram-11-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "ظَلَّ الْبَاحِثُ مُجْتَهِدًا فِي مَعْمَلِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status) untuk menyatakan makna: \"Peneliti itu senantiasa tekun bekerja di laboratoriumnya.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"ظَلَّ الْبَاحِثُ مُجْتَهِدًا فِي مَعْمَلِهِ\" yang mempraktikkan rumus كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)."
      },
      {
        "id": "q-ar-gram-11-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Ujian itu tadinya mudah bagi para mahasiswa.\"!",
        "options": [
          "كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ",
          "كان الامتحانُ سهلٌ",
          "أَصْبَحَ الْعِلْمُ مُتَاحًا لِلْجَمِيعِ بِفَضْلِ التِّقْنِيَّةِ [Variasi]",
          "ظَلَّ الْبَاحِثُ مُجْتَهِدًا فِي مَعْمَلِهِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ\"."
      },
      {
        "id": "q-ar-gram-11-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Ka'ana wa Akhawatuha (كان وأخواتها - Verba Perubah Status)\", respons manakah yang paling sesuai?",
        "options": [
          "كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ (Ujian itu tadinya mudah bagi para mahasiswa.)",
          "كان الامتحانُ سهلٌ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"كَانَ الِامْتِحَانُ سَهْلًا عَلَى الطُّلَّابِ\" sesuai aturan كان + Isim Ka'ana (Marfu') + Khabar Ka'ana (Manshub)."
      }
    ]
  },
  {
    "id": "ar-gram-12",
    "languageId": "arabic",
    "level": "Mustawa 2 (Kaidah Kalimat Sederhana)",
    "unit": 2,
    "title": "Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas)",
    "titleNative": "الحروف الناسخة (إنّ وأخواتها وتأكيد المعنى)",
    "patternFormula": "إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')",
    "summary": "Partikel penegas yang menashabkan isimnya dan merafa'kan khabarnya (kebalikan dari Ka'ana).",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ — Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu') diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ — Semoga hasil ujian pada semester ini sangat memuaskan."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ لِلْبَشَرِيَّةِ — Saya mengetahui bahwa ilmu pengetahuan itu bermanfaat bagi umat manusia."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-12-ex-1",
        "native": "إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ",
        "phonetic": "",
        "translationId": "Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia."
      },
      {
        "id": "ar-gram-12-ex-2",
        "native": "لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ",
        "phonetic": "",
        "translationId": "Semoga hasil ujian pada semester ini sangat memuaskan."
      },
      {
        "id": "ar-gram-12-ex-3",
        "native": "عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ لِلْبَشَرِيَّةِ",
        "phonetic": "",
        "translationId": "Saya mengetahui bahwa ilmu pengetahuan itu bermanfaat bagi umat manusia."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "إنّ العلمُ نورٌ",
        "correct": "إنّ العلمَ نورٌ",
        "explanation": "Isim inna wajib manshub berharakat fathah (العلمَ)."
      },
      {
        "incorrect": "إنّ العلمُ نورٌ (kesalahan i'rab)",
        "correct": "إنّ العلمَ نورٌ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-12-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ\"?",
        "targetSentence": "إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia.",
          "Bukan sesungguhnya bahasa arab adalah bahasa al-qur'an yang mulia.",
          "Apakah sesungguhnya bahasa arab adalah bahasa al-qur'an yang mulia.?",
          "Mungkin sesungguhnya bahasa arab adalah bahasa al-qur'an yang mulia."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ\" () bermakna \"Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia.\"."
      },
      {
        "id": "q-ar-gram-12-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ\"?",
        "targetSentence": "لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Semoga hasil ujian pada semester ini sangat memuaskan.",
          "Bukan semoga hasil ujian pada semester ini sangat memuaskan.",
          "Apakah semoga hasil ujian pada semester ini sangat memuaskan.?",
          "Mungkin semoga hasil ujian pada semester ini sangat memuaskan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ\" () bermakna \"Semoga hasil ujian pada semester ini sangat memuaskan.\"."
      },
      {
        "id": "q-ar-gram-12-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ لِلْبَشَرِيَّةِ\"?",
        "targetSentence": "عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ لِلْبَشَرِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya mengetahui bahwa ilmu pengetahuan itu bermanfaat bagi umat manusia.",
          "Bukan saya mengetahui bahwa ilmu pengetahuan itu bermanfaat bagi umat manusia.",
          "Apakah saya mengetahui bahwa ilmu pengetahuan itu bermanfaat bagi umat manusia.?",
          "Mungkin saya mengetahui bahwa ilmu pengetahuan itu bermanfaat bagi umat manusia."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ لِلْبَشَرِيَّةِ\" () bermakna \"Saya mengetahui bahwa ilmu pengetahuan itu bermanfaat bagi umat manusia.\"."
      },
      {
        "id": "q-ar-gram-12-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ (Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia.)",
          "إنّ العلمُ نورٌ (Struktur keliru)",
          "إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu'). Contoh baku: \"إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ\"."
      },
      {
        "id": "q-ar-gram-12-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas) merupakan pilar penting da...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-12-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu') diterapkan untuk menjaga ketepatan bari...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu') diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-12-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-12-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"إنّ العلمُ نورٌ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Isim inna wajib manshub berharakat fathah (العلمَ).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"إنّ العلمُ نورٌ\" salah karena Isim inna wajib manshub berharakat fathah (العلمَ).. Bentuk yang benar: \"إنّ العلمَ نورٌ\"."
      },
      {
        "id": "q-ar-gram-12-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"إنّ العلمُ نورٌ (kesalahan i'rab)\"?",
        "options": [
          "إنّ العلمَ نورٌ",
          "إنّ العلمُ نورٌ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "إنّ العلمُ نورٌ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"إنّ العلمَ نورٌ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-12-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas)\"?",
        "options": [
          "Penerapan kaidah Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas) sangat dihargai dalam tradisi i...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-12-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas)\" (إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu').\nFungsi utama: Partikel penegas yang menashabkan isimnya dan merafa'kan khabarnya (kebalikan dari Ka'ana)..\nContoh penerapan: \"إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ\" () yang berarti \"Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Inna",
          "Akhawatuha",
          "وأخواتها",
          "Partikel"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')), menerangkan fungsi dasarnya (Partikel penegas yang menashabkan isimnya dan merafa'kan kha...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-12-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"إنّ العلمُ نورٌ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"إنّ العلمُ نورٌ\" keliru karena: Isim inna wajib manshub berharakat fathah (العلمَ)..\nBentuk pembetulan yang tepat adalah: \"إنّ العلمَ نورٌ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "إنّ",
          "العلمَ",
          "نورٌ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Isim inna wajib manshub berharakat fathah (العلمَ).) dan memberikan bentuk baku: إنّ العلمَ نورٌ."
      },
      {
        "id": "q-ar-gram-12-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu') diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-12-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Semoga hasil ujian pada semester ini sangat memuaskan.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Semoga hasil ujian pada semester ini sangat memuaskan.\".",
        "keywords": [
          "Semoga",
          "hasil",
          "ujian"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-12-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-12-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia.\"",
        "scrambledWords": [
          "اللُّغَةَ",
          "لُغَةُ",
          "الْكَرِيمِ",
          "إِنَّ",
          "الْعَرَبِيَّةَ",
          "الْقُرْآنِ"
        ],
        "correctOrder": [
          "إِنَّ",
          "اللُّغَةَ",
          "الْعَرَبِيَّةَ",
          "لُغَةُ",
          "الْقُرْآنِ",
          "الْكَرِيمِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ\". Mengikuti kaidah إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')."
      },
      {
        "id": "q-ar-gram-12-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Semoga hasil ujian pada semester ini sangat memuaskan.\"",
        "scrambledWords": [
          "النَّتِيجَةَ",
          "فِي",
          "الْفَصْلِ",
          "لَعَلَّ",
          "مُمْتَازَةٌ",
          "هَذَا"
        ],
        "correctOrder": [
          "لَعَلَّ",
          "النَّتِيجَةَ",
          "مُمْتَازَةٌ",
          "فِي",
          "هَذَا",
          "الْفَصْلِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ\". Mengikuti kaidah إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')."
      },
      {
        "id": "q-ar-gram-12-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya mengetahui bahwa ilmu pengetahuan itu bermanfaat bagi umat manusia.\"",
        "scrambledWords": [
          "أَنَّ",
          "نَافِعٌ",
          "عَلِمْتُ",
          "الْعِلْمَ",
          "لِلْبَشَرِيَّةِ"
        ],
        "correctOrder": [
          "عَلِمْتُ",
          "أَنَّ",
          "الْعِلْمَ",
          "نَافِعٌ",
          "لِلْبَشَرِيَّةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ لِلْبَشَرِيَّةِ\". Mengikuti kaidah إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')."
      },
      {
        "id": "q-ar-gram-12-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: إنّ العلمَ نورٌ\"",
        "scrambledWords": [
          "العلمَ",
          "إنّ",
          "نورٌ"
        ],
        "correctOrder": [
          "إنّ",
          "العلمَ",
          "نورٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"إنّ العلمَ نورٌ\". Mengikuti kaidah إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')."
      },
      {
        "id": "q-ar-gram-12-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: إنّ العلمَ نورٌ\"",
        "scrambledWords": [
          "العلمَ",
          "إنّ",
          "نورٌ"
        ],
        "correctOrder": [
          "إنّ",
          "العلمَ",
          "نورٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"إنّ العلمَ نورٌ\". Mengikuti kaidah إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')."
      },
      {
        "id": "q-ar-gram-12-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia.",
          "Bukan sesungguhnya bahasa arab adalah bahasa al-qur'an yang mulia.",
          "Semoga hasil ujian pada semester ini sangat memuaskan.",
          "Saya mengetahui bahwa ilmu pengetahuan itu bermanfaat bagi umat manusia."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ\" () yang bermakna \"Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia.\"."
      },
      {
        "id": "q-ar-gram-12-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ\"",
        "targetSentence": "لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Semoga hasil ujian pada semester ini sangat memuaskan.",
          "Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia.",
          "Apakah semoga hasil ujian pada semester ini sangat memuaskan.?",
          "Sangat semoga hasil ujian pada semester ini sangat memuaskan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ\" diterjemahkan menjadi \"Semoga hasil ujian pada semester ini sangat memuaskan.\"."
      },
      {
        "id": "q-ar-gram-12-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ لِلْبَشَرِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas) untuk menyatakan makna: \"Saya mengetahui bahwa ilmu pengetahuan itu bermanfaat bagi umat manusia.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ لِلْبَشَرِيَّةِ\" yang mempraktikkan rumus إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')."
      },
      {
        "id": "q-ar-gram-12-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia.\"!",
        "options": [
          "إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ",
          "إنّ العلمُ نورٌ",
          "لَعَلَّ النَّتِيجَةَ مُمْتَازَةٌ فِي هَذَا الْفَصْلِ [Variasi]",
          "عَلِمْتُ أَنَّ الْعِلْمَ نَافِعٌ لِلْبَشَرِيَّةِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ\"."
      },
      {
        "id": "q-ar-gram-12-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Inna wa Akhawatuha (إن وأخواتها - Partikel Penegas)\", respons manakah yang paling sesuai?",
        "options": [
          "إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ (Sesungguhnya bahasa Arab adalah bahasa Al-Qur'an yang mulia.)",
          "إنّ العلمُ نورٌ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"إِنَّ اللُّغَةَ الْعَرَبِيَّةَ لُغَةُ الْقُرْآنِ الْكَرِيمِ\" sesuai aturan إنّ + Isim Inna (Manshub) + Khabar Inna (Marfu')."
      }
    ]
  },
  {
    "id": "ar-gram-13",
    "languageId": "arabic",
    "level": "Mustawa 2 (Kaidah Kalimat Sederhana)",
    "unit": 3,
    "title": "Maf'ul Bih (المفعول به - Objek Langsung)",
    "titleNative": "المفعول به وعلامات نصبه (الفتحة، الياء، الكسرة)",
    "patternFormula": "Fi'il + Fa'il + Maf'ul Bih (Manshub)",
    "summary": "Objek penderita yang terkena tindakan pelaku, berstatus manshub dengan tanda fathah, ya', atau kasrah (jamak muannats).",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Maf'ul Bih (المفعول به - Objek Langsung) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ — Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Fi'il + Fa'il + Maf'ul Bih (Manshub) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ — Pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "يُقَدِّرُ الْمُجْتَمَعُ الْعُلَمَاءَ الْمُخْلِصِينَ — Masyarakat menghormati para ilmuwan yang tulus mengabdi."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-13-ex-1",
        "native": "شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ",
        "phonetic": "",
        "translationId": "Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang."
      },
      {
        "id": "ar-gram-13-ex-2",
        "native": "كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ",
        "phonetic": "",
        "translationId": "Pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi."
      },
      {
        "id": "ar-gram-13-ex-3",
        "native": "يُقَدِّرُ الْمُجْتَمَعُ الْعُلَمَاءَ الْمُخْلِصِينَ",
        "phonetic": "",
        "translationId": "Masyarakat menghormati para ilmuwan yang tulus mengabdi."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "شرح الأستاذُ المسألةُ",
        "correct": "شرح الأستاذُ المسألةَ",
        "explanation": "Maf'ul bih berstatus manshub (المسألةَ)."
      },
      {
        "incorrect": "شرح الأستاذُ المسألةُ (kesalahan i'rab)",
        "correct": "شرح الأستاذُ المسألةَ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Maf'ul Bih (المفعول به - Objek Langsung) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-13-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ\"?",
        "targetSentence": "شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.",
          "Bukan profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.",
          "Apakah profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.?",
          "Mungkin profesor itu menjelaskan persoalan yang sulit tersebut dengan terang."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ\" () bermakna \"Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.\"."
      },
      {
        "id": "q-ar-gram-13-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ\"?",
        "targetSentence": "كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.",
          "Bukan pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.",
          "Apakah pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.?",
          "Mungkin pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ\" () bermakna \"Pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.\"."
      },
      {
        "id": "q-ar-gram-13-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"يُقَدِّرُ الْمُجْتَمَعُ الْعُلَمَاءَ الْمُخْلِصِينَ\"?",
        "targetSentence": "يُقَدِّرُ الْمُجْتَمَعُ الْعُلَمَاءَ الْمُخْلِصِينَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Masyarakat menghormati para ilmuwan yang tulus mengabdi.",
          "Bukan masyarakat menghormati para ilmuwan yang tulus mengabdi.",
          "Apakah masyarakat menghormati para ilmuwan yang tulus mengabdi.?",
          "Mungkin masyarakat menghormati para ilmuwan yang tulus mengabdi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يُقَدِّرُ الْمُجْتَمَعُ الْعُلَمَاءَ الْمُخْلِصِينَ\" () bermakna \"Masyarakat menghormati para ilmuwan yang tulus mengabdi.\"."
      },
      {
        "id": "q-ar-gram-13-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Fi'il + Fa'il + Maf'ul Bih (Manshub)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ (Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.)",
          "شرح الأستاذُ المسألةُ (Struktur keliru)",
          "شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Maf'ul Bih (المفعول به - Objek Langsung)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Fi'il + Fa'il + Maf'ul Bih (Manshub). Contoh baku: \"شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ\"."
      },
      {
        "id": "q-ar-gram-13-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Maf'ul Bih (المفعول به - Objek Langsung) merupakan pilar penting dalam sintaks...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Maf'ul Bih (المفعول به - Objek Langsung) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-13-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Fi'il + Fa'il + Maf'ul Bih (Manshub) diterapkan untuk menjaga ketepatan baris harakat ak...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Fi'il + Fa'il + Maf'ul Bih (Manshub) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-13-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-13-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"شرح الأستاذُ المسألةُ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Maf'ul bih berstatus manshub (المسألةَ).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"شرح الأستاذُ المسألةُ\" salah karena Maf'ul bih berstatus manshub (المسألةَ).. Bentuk yang benar: \"شرح الأستاذُ المسألةَ\"."
      },
      {
        "id": "q-ar-gram-13-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"شرح الأستاذُ المسألةُ (kesalahan i'rab)\"?",
        "options": [
          "شرح الأستاذُ المسألةَ",
          "شرح الأستاذُ المسألةُ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "شرح الأستاذُ المسألةُ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"شرح الأستاذُ المسألةَ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-13-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Maf'ul Bih (المفعول به - Objek Langsung)\"?",
        "options": [
          "Penerapan kaidah Maf'ul Bih (المفعول به - Objek Langsung) sangat dihargai dalam tradisi ilmiah dan m...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Maf'ul Bih (المفعول به - Objek Langsung) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-13-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Maf'ul Bih (المفعول به - Objek Langsung)\" (Fi'il + Fa'il + Maf'ul Bih (Manshub)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Fi'il + Fa'il + Maf'ul Bih (Manshub).\nFungsi utama: Objek penderita yang terkena tindakan pelaku, berstatus manshub dengan tanda fathah, ya', atau kasrah (jamak muannats)..\nContoh penerapan: \"شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ\" () yang berarti \"Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Maf'ul",
          "Bih",
          "المفعول",
          "Objek"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Fi'il + Fa'il + Maf'ul Bih (Manshub)), menerangkan fungsi dasarnya (Objek penderita yang terkena tindakan pelaku, berstatus mans...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-13-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"شرح الأستاذُ المسألةُ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"شرح الأستاذُ المسألةُ\" keliru karena: Maf'ul bih berstatus manshub (المسألةَ)..\nBentuk pembetulan yang tepat adalah: \"شرح الأستاذُ المسألةَ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "شرح",
          "الأستاذُ",
          "المسألةَ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Maf'ul bih berstatus manshub (المسألةَ).) dan memberikan bentuk baku: شرح الأستاذُ المسألةَ."
      },
      {
        "id": "q-ar-gram-13-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Fi'il + Fa'il + Maf'ul Bih (Manshub) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-13-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Fi'il + Fa'il + Maf'ul Bih (Manshub)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.\".",
        "keywords": [
          "Pihak",
          "universitas",
          "memberikan"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-13-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Maf'ul Bih (المفعول به - Objek Langsung)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Maf'ul Bih (المفعول به - Objek Langsung) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Maf'ul Bih (المفعول به - Objek Langsung) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-13-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.\"",
        "scrambledWords": [
          "الْأُسْتَاذُ",
          "الصَّعْبَةَ",
          "شَرَحَ",
          "الْمَسْأَلَةَ",
          "بِوُضُوحٍ"
        ],
        "correctOrder": [
          "شَرَحَ",
          "الْأُسْتَاذُ",
          "الْمَسْأَلَةَ",
          "الصَّعْبَةَ",
          "بِوُضُوحٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ\". Mengikuti kaidah Fi'il + Fa'il + Maf'ul Bih (Manshub)."
      },
      {
        "id": "q-ar-gram-13-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.\"",
        "scrambledWords": [
          "الْجَامِعَةُ",
          "الْمُتَفَوِّقَاتِ",
          "كَرَّمَتِ",
          "الطَّالِبَاتِ"
        ],
        "correctOrder": [
          "كَرَّمَتِ",
          "الْجَامِعَةُ",
          "الطَّالِبَاتِ",
          "الْمُتَفَوِّقَاتِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ\". Mengikuti kaidah Fi'il + Fa'il + Maf'ul Bih (Manshub)."
      },
      {
        "id": "q-ar-gram-13-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Masyarakat menghormati para ilmuwan yang tulus mengabdi.\"",
        "scrambledWords": [
          "الْمُجْتَمَعُ",
          "الْمُخْلِصِينَ",
          "يُقَدِّرُ",
          "الْعُلَمَاءَ"
        ],
        "correctOrder": [
          "يُقَدِّرُ",
          "الْمُجْتَمَعُ",
          "الْعُلَمَاءَ",
          "الْمُخْلِصِينَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يُقَدِّرُ الْمُجْتَمَعُ الْعُلَمَاءَ الْمُخْلِصِينَ\". Mengikuti kaidah Fi'il + Fa'il + Maf'ul Bih (Manshub)."
      },
      {
        "id": "q-ar-gram-13-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: شرح الأستاذُ المسألةَ\"",
        "scrambledWords": [
          "الأستاذُ",
          "شرح",
          "المسألةَ"
        ],
        "correctOrder": [
          "شرح",
          "الأستاذُ",
          "المسألةَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"شرح الأستاذُ المسألةَ\". Mengikuti kaidah Fi'il + Fa'il + Maf'ul Bih (Manshub)."
      },
      {
        "id": "q-ar-gram-13-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: شرح الأستاذُ المسألةَ\"",
        "scrambledWords": [
          "الأستاذُ",
          "شرح",
          "المسألةَ"
        ],
        "correctOrder": [
          "شرح",
          "الأستاذُ",
          "المسألةَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"شرح الأستاذُ المسألةَ\". Mengikuti kaidah Fi'il + Fa'il + Maf'ul Bih (Manshub)."
      },
      {
        "id": "q-ar-gram-13-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.",
          "Bukan profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.",
          "Pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.",
          "Masyarakat menghormati para ilmuwan yang tulus mengabdi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ\" () yang bermakna \"Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.\"."
      },
      {
        "id": "q-ar-gram-13-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ\"",
        "targetSentence": "كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.",
          "Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.",
          "Apakah pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.?",
          "Sangat pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ\" diterjemahkan menjadi \"Pihak universitas memberikan penghargaan kepada para mahasiswi berprestasi.\"."
      },
      {
        "id": "q-ar-gram-13-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "يُقَدِّرُ الْمُجْتَمَعُ الْعُلَمَاءَ الْمُخْلِصِينَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Maf'ul Bih (المفعول به - Objek Langsung) untuk menyatakan makna: \"Masyarakat menghormati para ilmuwan yang tulus mengabdi.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"يُقَدِّرُ الْمُجْتَمَعُ الْعُلَمَاءَ الْمُخْلِصِينَ\" yang mempraktikkan rumus Fi'il + Fa'il + Maf'ul Bih (Manshub)."
      },
      {
        "id": "q-ar-gram-13-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.\"!",
        "options": [
          "شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ",
          "شرح الأستاذُ المسألةُ",
          "كَرَّمَتِ الْجَامِعَةُ الطَّالِبَاتِ الْمُتَفَوِّقَاتِ [Variasi]",
          "يُقَدِّرُ الْمُجْتَمَعُ الْعُلَمَاءَ الْمُخْلِصِينَ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ\"."
      },
      {
        "id": "q-ar-gram-13-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Maf'ul Bih (المفعول به - Objek Langsung)\", respons manakah yang paling sesuai?",
        "options": [
          "شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ (Profesor itu menjelaskan persoalan yang sulit tersebut dengan terang.)",
          "شرح الأستاذُ المسألةُ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"شَرَحَ الْأُسْتَاذُ الْمَسْأَلَةَ الصَّعْبَةَ بِوُضُوحٍ\" sesuai aturan Fi'il + Fa'il + Maf'ul Bih (Manshub)."
      }
    ]
  },
  {
    "id": "ar-gram-14",
    "languageId": "arabic",
    "level": "Mustawa 2 (Kaidah Kalimat Sederhana)",
    "unit": 4,
    "title": "Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan)",
    "titleNative": "المفعول المطلق لتوكيد الفعل أو بيان نوعه أو عدده",
    "patternFormula": "Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama",
    "summary": "Isim mashdar manshub yang berfungsi menguatkan makna verba, menerangkan jenis tindakan, atau menghitung frekuensi.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا — Saya telah memahami pelajaran itu dengan pemahaman yang mendalam."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا — Mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "قَرَأْتُ الْبَحْثَ قِرَاءَتَيْنِ — Saya telah membaca makalah penelitian itu sebanyak dua kali bacaan."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-14-ex-1",
        "native": "فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا",
        "phonetic": "",
        "translationId": "Saya telah memahami pelajaran itu dengan pemahaman yang mendalam."
      },
      {
        "id": "ar-gram-14-ex-2",
        "native": "اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا",
        "phonetic": "",
        "translationId": "Mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa."
      },
      {
        "id": "ar-gram-14-ex-3",
        "native": "قَرَأْتُ الْبَحْثَ قِرَاءَتَيْنِ",
        "phonetic": "",
        "translationId": "Saya telah membaca makalah penelitian itu sebanyak dua kali bacaan."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "فهمتُ الدرسَ فهمٌ",
        "correct": "فهمتُ الدرسَ فهماً",
        "explanation": "Maf'ul muthlaq berstatus manshub dengan fathah tanwin."
      },
      {
        "incorrect": "فهمتُ الدرسَ فهمٌ (kesalahan i'rab)",
        "correct": "فهمتُ الدرسَ فهماً",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-14-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا\"?",
        "targetSentence": "فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah memahami pelajaran itu dengan pemahaman yang mendalam.",
          "Bukan saya telah memahami pelajaran itu dengan pemahaman yang mendalam.",
          "Apakah saya telah memahami pelajaran itu dengan pemahaman yang mendalam.?",
          "Mungkin saya telah memahami pelajaran itu dengan pemahaman yang mendalam."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا\" () bermakna \"Saya telah memahami pelajaran itu dengan pemahaman yang mendalam.\"."
      },
      {
        "id": "q-ar-gram-14-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا\"?",
        "targetSentence": "اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.",
          "Bukan mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.",
          "Apakah mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.?",
          "Mungkin mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا\" () bermakna \"Mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.\"."
      },
      {
        "id": "q-ar-gram-14-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"قَرَأْتُ الْبَحْثَ قِرَاءَتَيْنِ\"?",
        "targetSentence": "قَرَأْتُ الْبَحْثَ قِرَاءَتَيْنِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah membaca makalah penelitian itu sebanyak dua kali bacaan.",
          "Bukan saya telah membaca makalah penelitian itu sebanyak dua kali bacaan.",
          "Apakah saya telah membaca makalah penelitian itu sebanyak dua kali bacaan.?",
          "Mungkin saya telah membaca makalah penelitian itu sebanyak dua kali bacaan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَرَأْتُ الْبَحْثَ قِرَاءَتَيْنِ\" () bermakna \"Saya telah membaca makalah penelitian itu sebanyak dua kali bacaan.\"."
      },
      {
        "id": "q-ar-gram-14-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا (Saya telah memahami pelajaran itu dengan pemahaman yang mendalam.)",
          "فهمتُ الدرسَ فهمٌ (Struktur keliru)",
          "فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama. Contoh baku: \"فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا\"."
      },
      {
        "id": "q-ar-gram-14-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan) merupakan pilar penting dal...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-14-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama diterapkan untuk menjaga ketepat...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-14-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-14-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"فهمتُ الدرسَ فهمٌ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Maf'ul muthlaq berstatus manshub dengan fathah tanwin.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"فهمتُ الدرسَ فهمٌ\" salah karena Maf'ul muthlaq berstatus manshub dengan fathah tanwin.. Bentuk yang benar: \"فهمتُ الدرسَ فهماً\"."
      },
      {
        "id": "q-ar-gram-14-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"فهمتُ الدرسَ فهمٌ (kesalahan i'rab)\"?",
        "options": [
          "فهمتُ الدرسَ فهماً",
          "فهمتُ الدرسَ فهمٌ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "فهمتُ الدرسَ فهمٌ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"فهمتُ الدرسَ فهماً\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-14-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan)\"?",
        "options": [
          "Penerapan kaidah Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan) sangat dihargai dalam tradisi il...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-14-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan)\" (Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama.\nFungsi utama: Isim mashdar manshub yang berfungsi menguatkan makna verba, menerangkan jenis tindakan, atau menghitung frekuensi..\nContoh penerapan: \"فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا\" () yang berarti \"Saya telah memahami pelajaran itu dengan pemahaman yang mendalam.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Maf'ul",
          "Muthlaq",
          "المفعول",
          "المطلق"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama), menerangkan fungsi dasarnya (Isim mashdar manshub yang berfungsi menguatkan makna verba, ...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-14-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"فهمتُ الدرسَ فهمٌ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"فهمتُ الدرسَ فهمٌ\" keliru karena: Maf'ul muthlaq berstatus manshub dengan fathah tanwin..\nBentuk pembetulan yang tepat adalah: \"فهمتُ الدرسَ فهماً\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "فهمتُ",
          "الدرسَ",
          "فهماً"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Maf'ul muthlaq berstatus manshub dengan fathah tanwin.) dan memberikan bentuk baku: فهمتُ الدرسَ فهماً."
      },
      {
        "id": "q-ar-gram-14-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-14-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.\".",
        "keywords": [
          "Mahasiswa",
          "itu",
          "telah"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-14-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-14-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya telah memahami pelajaran itu dengan pemahaman yang mendalam.\"",
        "scrambledWords": [
          "الدَّرْسَ",
          "عَمِيقًا",
          "فَهِمْتُ",
          "فَهْمًا"
        ],
        "correctOrder": [
          "فَهِمْتُ",
          "الدَّرْسَ",
          "فَهْمًا",
          "عَمِيقًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا\". Mengikuti kaidah Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama."
      },
      {
        "id": "q-ar-gram-14-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.\"",
        "scrambledWords": [
          "الطَّالِبُ",
          "كَبِيرًا",
          "اجْتَهَدَ",
          "اجْتِهَادًا"
        ],
        "correctOrder": [
          "اجْتَهَدَ",
          "الطَّالِبُ",
          "اجْتِهَادًا",
          "كَبِيرًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا\". Mengikuti kaidah Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama."
      },
      {
        "id": "q-ar-gram-14-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya telah membaca makalah penelitian itu sebanyak dua kali bacaan.\"",
        "scrambledWords": [
          "الْبَحْثَ",
          "قَرَأْتُ",
          "قِرَاءَتَيْنِ"
        ],
        "correctOrder": [
          "قَرَأْتُ",
          "الْبَحْثَ",
          "قِرَاءَتَيْنِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"قَرَأْتُ الْبَحْثَ قِرَاءَتَيْنِ\". Mengikuti kaidah Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama."
      },
      {
        "id": "q-ar-gram-14-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: فهمتُ الدرسَ فهماً\"",
        "scrambledWords": [
          "الدرسَ",
          "فهمتُ",
          "فهماً"
        ],
        "correctOrder": [
          "فهمتُ",
          "الدرسَ",
          "فهماً"
        ],
        "explanation": "Urutan yang tepat adalah: \"فهمتُ الدرسَ فهماً\". Mengikuti kaidah Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama."
      },
      {
        "id": "q-ar-gram-14-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: فهمتُ الدرسَ فهماً\"",
        "scrambledWords": [
          "الدرسَ",
          "فهمتُ",
          "فهماً"
        ],
        "correctOrder": [
          "فهمتُ",
          "الدرسَ",
          "فهماً"
        ],
        "explanation": "Urutan yang tepat adalah: \"فهمتُ الدرسَ فهماً\". Mengikuti kaidah Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama."
      },
      {
        "id": "q-ar-gram-14-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah memahami pelajaran itu dengan pemahaman yang mendalam.",
          "Bukan saya telah memahami pelajaran itu dengan pemahaman yang mendalam.",
          "Mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.",
          "Saya telah membaca makalah penelitian itu sebanyak dua kali bacaan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا\" () yang bermakna \"Saya telah memahami pelajaran itu dengan pemahaman yang mendalam.\"."
      },
      {
        "id": "q-ar-gram-14-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا\"",
        "targetSentence": "اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.",
          "Saya telah memahami pelajaran itu dengan pemahaman yang mendalam.",
          "Apakah mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.?",
          "Sangat mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا\" diterjemahkan menjadi \"Mahasiswa itu telah bersungguh-sungguh dengan kesungguhan yang luar biasa.\"."
      },
      {
        "id": "q-ar-gram-14-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "قَرَأْتُ الْبَحْثَ قِرَاءَتَيْنِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan) untuk menyatakan makna: \"Saya telah membaca makalah penelitian itu sebanyak dua kali bacaan.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"قَرَأْتُ الْبَحْثَ قِرَاءَتَيْنِ\" yang mempraktikkan rumus Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama."
      },
      {
        "id": "q-ar-gram-14-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Saya telah memahami pelajaran itu dengan pemahaman yang mendalam.\"!",
        "options": [
          "فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا",
          "فهمتُ الدرسَ فهمٌ",
          "اجْتَهَدَ الطَّالِبُ اجْتِهَادًا كَبِيرًا [Variasi]",
          "قَرَأْتُ الْبَحْثَ قِرَاءَتَيْنِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا\"."
      },
      {
        "id": "q-ar-gram-14-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Maf'ul Muthlaq (المفعول المطلق - Penguat Tindakan)\", respons manakah yang paling sesuai?",
        "options": [
          "فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا (Saya telah memahami pelajaran itu dengan pemahaman yang mendalam.)",
          "فهمتُ الدرسَ فهمٌ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"فَهِمْتُ الدَّرْسَ فَهْمًا عَمِيقًا\" sesuai aturan Fi'il + Isim Mashdar (Manshub) dari Akar Kata yang Sama."
      }
    ]
  },
  {
    "id": "ar-gram-15",
    "languageId": "arabic",
    "level": "Mustawa 2 (Kaidah Kalimat Sederhana)",
    "unit": 5,
    "title": "Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan)",
    "titleNative": "المفعول لأجله وبيان علّة وقوع الفعل",
    "patternFormula": "Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'",
    "summary": "Isim mashdar yang menjelaskan motif psikologis atau alasan mengapa suatu perbuatan dilakukan.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ — Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa' diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ — Para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "أَجْتَهِدُ فِي دِرَاسَتِي أَمَلًا فِي النَّجَاحِ — Saya belajar keras dalam studi saya demi harapan meraih kesuksesan."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-15-ex-1",
        "native": "سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ",
        "phonetic": "",
        "translationId": "Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu."
      },
      {
        "id": "ar-gram-15-ex-2",
        "native": "وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ",
        "phonetic": "",
        "translationId": "Para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor."
      },
      {
        "id": "ar-gram-15-ex-3",
        "native": "أَجْتَهِدُ فِي دِرَاسَتِي أَمَلًا فِي النَّجَاحِ",
        "phonetic": "",
        "translationId": "Saya belajar keras dalam studi saya demi harapan meraih kesuksesan."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "وقفتُ لاحترام الأستاذ (sebagai maf'ul)",
        "correct": "وقفتُ احتراماً للأستاذ",
        "explanation": "Maf'ul li-ajlih adalah mashdar langsung manshub (احتراماً)."
      },
      {
        "incorrect": "وقفتُ لاحترام الأستاذ (sebagai maf'ul) (kesalahan i'rab)",
        "correct": "وقفتُ احتراماً للأستاذ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-15-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ\"?",
        "targetSentence": "سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu.",
          "Bukan saya bepergian ke riyadh karena keinginan kuat untuk menuntut ilmu.",
          "Apakah saya bepergian ke riyadh karena keinginan kuat untuk menuntut ilmu.?",
          "Mungkin saya bepergian ke riyadh karena keinginan kuat untuk menuntut ilmu."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ\" () bermakna \"Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu.\"."
      },
      {
        "id": "q-ar-gram-15-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ\"?",
        "targetSentence": "وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.",
          "Bukan para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.",
          "Apakah para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.?",
          "Mungkin para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ\" () bermakna \"Para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.\"."
      },
      {
        "id": "q-ar-gram-15-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"أَجْتَهِدُ فِي دِرَاسَتِي أَمَلًا فِي النَّجَاحِ\"?",
        "targetSentence": "أَجْتَهِدُ فِي دِرَاسَتِي أَمَلًا فِي النَّجَاحِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya belajar keras dalam studi saya demi harapan meraih kesuksesan.",
          "Bukan saya belajar keras dalam studi saya demi harapan meraih kesuksesan.",
          "Apakah saya belajar keras dalam studi saya demi harapan meraih kesuksesan.?",
          "Mungkin saya belajar keras dalam studi saya demi harapan meraih kesuksesan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أَجْتَهِدُ فِي دِرَاسَتِي أَمَلًا فِي النَّجَاحِ\" () bermakna \"Saya belajar keras dalam studi saya demi harapan meraih kesuksesan.\"."
      },
      {
        "id": "q-ar-gram-15-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ (Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu.)",
          "وقفتُ لاحترام الأستاذ (sebagai maf'ul) (Struktur keliru)",
          "سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'. Contoh baku: \"سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ\"."
      },
      {
        "id": "q-ar-gram-15-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan) merupakan pilar penting da...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-15-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa' diterapkan untuk menjaga k...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa' diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-15-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-15-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"وقفتُ لاحترام الأستاذ (sebagai maf'ul)\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Maf'ul li-ajlih adalah mashdar langsung manshub (احتراماً).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"وقفتُ لاحترام الأستاذ (sebagai maf'ul)\" salah karena Maf'ul li-ajlih adalah mashdar langsung manshub (احتراماً).. Bentuk yang benar: \"وقفتُ احتراماً للأستاذ\"."
      },
      {
        "id": "q-ar-gram-15-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"وقفتُ لاحترام الأستاذ (sebagai maf'ul) (kesalahan i'rab)\"?",
        "options": [
          "وقفتُ احتراماً للأستاذ",
          "وقفتُ لاحترام الأستاذ (sebagai maf'ul) (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "وقفتُ لاحترام الأستاذ (sebagai maf'ul) (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"وقفتُ احتراماً للأستاذ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-15-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan)\"?",
        "options": [
          "Penerapan kaidah Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan) sangat dihargai dalam tradisi i...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-15-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan)\" (Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'.\nFungsi utama: Isim mashdar yang menjelaskan motif psikologis atau alasan mengapa suatu perbuatan dilakukan..\nContoh penerapan: \"سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ\" () yang berarti \"Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Maf'ul",
          "Li-Ajlih",
          "المفعول",
          "لأجله"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'), menerangkan fungsi dasarnya (Isim mashdar yang menjelaskan motif psikologis atau alasan m...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-15-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"وقفتُ لاحترام الأستاذ (sebagai maf'ul)\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"وقفتُ لاحترام الأستاذ (sebagai maf'ul)\" keliru karena: Maf'ul li-ajlih adalah mashdar langsung manshub (احتراماً)..\nBentuk pembetulan yang tepat adalah: \"وقفتُ احتراماً للأستاذ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "وقفتُ",
          "احتراماً",
          "للأستاذ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Maf'ul li-ajlih adalah mashdar langsung manshub (احتراماً).) dan memberikan bentuk baku: وقفتُ احتراماً للأستاذ."
      },
      {
        "id": "q-ar-gram-15-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa' diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-15-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.\".",
        "keywords": [
          "Para",
          "mahasiswa",
          "berdiri"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-15-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-15-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu.\"",
        "scrambledWords": [
          "إِلَى",
          "رَغْبَةً",
          "طَلَبِ",
          "سَافَرْتُ",
          "الرِّيَاضِ",
          "فِي",
          "الْعِلْمِ"
        ],
        "correctOrder": [
          "سَافَرْتُ",
          "إِلَى",
          "الرِّيَاضِ",
          "رَغْبَةً",
          "فِي",
          "طَلَبِ",
          "الْعِلْمِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ\". Mengikuti kaidah Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'."
      },
      {
        "id": "q-ar-gram-15-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.\"",
        "scrambledWords": [
          "الطُّلَّابُ",
          "لِلْأُسْتَاذِ",
          "وَقَفَ",
          "احْتِرَامًا"
        ],
        "correctOrder": [
          "وَقَفَ",
          "الطُّلَّابُ",
          "احْتِرَامًا",
          "لِلْأُسْتَاذِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ\". Mengikuti kaidah Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'."
      },
      {
        "id": "q-ar-gram-15-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya belajar keras dalam studi saya demi harapan meraih kesuksesan.\"",
        "scrambledWords": [
          "فِي",
          "أَمَلًا",
          "النَّجَاحِ",
          "أَجْتَهِدُ",
          "دِرَاسَتِي",
          "فِي"
        ],
        "correctOrder": [
          "أَجْتَهِدُ",
          "فِي",
          "دِرَاسَتِي",
          "أَمَلًا",
          "فِي",
          "النَّجَاحِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"أَجْتَهِدُ فِي دِرَاسَتِي أَمَلًا فِي النَّجَاحِ\". Mengikuti kaidah Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'."
      },
      {
        "id": "q-ar-gram-15-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: وقفتُ احتراماً للأستاذ\"",
        "scrambledWords": [
          "احتراماً",
          "وقفتُ",
          "للأستاذ"
        ],
        "correctOrder": [
          "وقفتُ",
          "احتراماً",
          "للأستاذ"
        ],
        "explanation": "Urutan yang tepat adalah: \"وقفتُ احتراماً للأستاذ\". Mengikuti kaidah Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'."
      },
      {
        "id": "q-ar-gram-15-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: وقفتُ احتراماً للأستاذ\"",
        "scrambledWords": [
          "احتراماً",
          "وقفتُ",
          "للأستاذ"
        ],
        "correctOrder": [
          "وقفتُ",
          "احتراماً",
          "للأستاذ"
        ],
        "explanation": "Urutan yang tepat adalah: \"وقفتُ احتراماً للأستاذ\". Mengikuti kaidah Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'."
      },
      {
        "id": "q-ar-gram-15-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu.",
          "Bukan saya bepergian ke riyadh karena keinginan kuat untuk menuntut ilmu.",
          "Para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.",
          "Saya belajar keras dalam studi saya demi harapan meraih kesuksesan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ\" () yang bermakna \"Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu.\"."
      },
      {
        "id": "q-ar-gram-15-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ\"",
        "targetSentence": "وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.",
          "Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu.",
          "Apakah para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.?",
          "Sangat para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ\" diterjemahkan menjadi \"Para mahasiswa berdiri sebagai bentuk penghormatan kepada sang profesor.\"."
      },
      {
        "id": "q-ar-gram-15-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "أَجْتَهِدُ فِي دِرَاسَتِي أَمَلًا فِي النَّجَاحِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan) untuk menyatakan makna: \"Saya belajar keras dalam studi saya demi harapan meraih kesuksesan.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"أَجْتَهِدُ فِي دِرَاسَتِي أَمَلًا فِي النَّجَاحِ\" yang mempraktikkan rumus Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'."
      },
      {
        "id": "q-ar-gram-15-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu.\"!",
        "options": [
          "سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ",
          "وقفتُ لاحترام الأستاذ (sebagai maf'ul)",
          "وَقَفَ الطُّلَّابُ احْتِرَامًا لِلْأُسْتَاذِ [Variasi]",
          "أَجْتَهِدُ فِي دِرَاسَتِي أَمَلًا فِي النَّجَاحِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ\"."
      },
      {
        "id": "q-ar-gram-15-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Maf'ul Li-Ajlih (المفعول لأجله - Keterangan Alasan)\", respons manakah yang paling sesuai?",
        "options": [
          "سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ (Saya bepergian ke Riyadh karena keinginan kuat untuk menuntut ilmu.)",
          "وقفتُ لاحترام الأستاذ (sebagai maf'ul) (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"سَافَرْتُ إِلَى الرِّيَاضِ رَغْبَةً فِي طَلَبِ الْعِلْمِ\" sesuai aturan Fi'il + Isim Mashdar Batin (Manshub) untuk Menjawab 'Mengapa'."
      }
    ]
  },
  {
    "id": "ar-gram-16",
    "languageId": "arabic",
    "level": "Mustawa 2 (Kaidah Kalimat Sederhana)",
    "unit": 6,
    "title": "Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان)",
    "titleNative": "المفعول فيه (ظرفا الزمان والمكان)",
    "patternFormula": "Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung",
    "summary": "Kata keterangan waktu (zaman) dan tempat (makan) yang berstatus manshub.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ — Delegasi akademik itu berangkat pada pagi hari menuju ibu kota."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ — Pembicara itu berdiri di hadapan para hadirin di dalam aula."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "يَجْتَمِعُ مَجْلِسُ الْكُلِّيَّةِ يَوْمَ الْخَمِيسِ — Dewan senat fakultas berkumpul pada hari Kamis."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-16-ex-1",
        "native": "سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ",
        "phonetic": "",
        "translationId": "Delegasi akademik itu berangkat pada pagi hari menuju ibu kota."
      },
      {
        "id": "ar-gram-16-ex-2",
        "native": "وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ",
        "phonetic": "",
        "translationId": "Pembicara itu berdiri di hadapan para hadirin di dalam aula."
      },
      {
        "id": "ar-gram-16-ex-3",
        "native": "يَجْتَمِعُ مَجْلِسُ الْكُلِّيَّةِ يَوْمَ الْخَمِيسِ",
        "phonetic": "",
        "translationId": "Dewan senat fakultas berkumpul pada hari Kamis."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "سافر الوفدُ صباحُ",
        "correct": "سافر الوفدُ صباحاً",
        "explanation": "Keterangan waktu berstatus zharaf manshub (صباحاً)."
      },
      {
        "incorrect": "سافر الوفدُ صباحُ (kesalahan i'rab)",
        "correct": "سافر الوفدُ صباحاً",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-16-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ\"?",
        "targetSentence": "سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Delegasi akademik itu berangkat pada pagi hari menuju ibu kota.",
          "Bukan delegasi akademik itu berangkat pada pagi hari menuju ibu kota.",
          "Apakah delegasi akademik itu berangkat pada pagi hari menuju ibu kota.?",
          "Mungkin delegasi akademik itu berangkat pada pagi hari menuju ibu kota."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ\" () bermakna \"Delegasi akademik itu berangkat pada pagi hari menuju ibu kota.\"."
      },
      {
        "id": "q-ar-gram-16-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ\"?",
        "targetSentence": "وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Pembicara itu berdiri di hadapan para hadirin di dalam aula.",
          "Bukan pembicara itu berdiri di hadapan para hadirin di dalam aula.",
          "Apakah pembicara itu berdiri di hadapan para hadirin di dalam aula.?",
          "Mungkin pembicara itu berdiri di hadapan para hadirin di dalam aula."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ\" () bermakna \"Pembicara itu berdiri di hadapan para hadirin di dalam aula.\"."
      },
      {
        "id": "q-ar-gram-16-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"يَجْتَمِعُ مَجْلِسُ الْكُلِّيَّةِ يَوْمَ الْخَمِيسِ\"?",
        "targetSentence": "يَجْتَمِعُ مَجْلِسُ الْكُلِّيَّةِ يَوْمَ الْخَمِيسِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Dewan senat fakultas berkumpul pada hari Kamis.",
          "Bukan dewan senat fakultas berkumpul pada hari kamis.",
          "Apakah dewan senat fakultas berkumpul pada hari kamis.?",
          "Mungkin dewan senat fakultas berkumpul pada hari kamis."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يَجْتَمِعُ مَجْلِسُ الْكُلِّيَّةِ يَوْمَ الْخَمِيسِ\" () bermakna \"Dewan senat fakultas berkumpul pada hari Kamis.\"."
      },
      {
        "id": "q-ar-gram-16-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ (Delegasi akademik itu berangkat pada pagi hari menuju ibu kota.)",
          "سافر الوفدُ صباحُ (Struktur keliru)",
          "سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung. Contoh baku: \"سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ\"."
      },
      {
        "id": "q-ar-gram-16-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان) merupakan pilar penting dal...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-16-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung diterapkan untuk menjag...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-16-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-16-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"سافر الوفدُ صباحُ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Keterangan waktu berstatus zharaf manshub (صباحاً).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"سافر الوفدُ صباحُ\" salah karena Keterangan waktu berstatus zharaf manshub (صباحاً).. Bentuk yang benar: \"سافر الوفدُ صباحاً\"."
      },
      {
        "id": "q-ar-gram-16-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"سافر الوفدُ صباحُ (kesalahan i'rab)\"?",
        "options": [
          "سافر الوفدُ صباحاً",
          "سافر الوفدُ صباحُ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "سافر الوفدُ صباحُ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"سافر الوفدُ صباحاً\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-16-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان)\"?",
        "options": [
          "Penerapan kaidah Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان) sangat dihargai dalam tradisi il...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-16-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان)\" (Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung.\nFungsi utama: Kata keterangan waktu (zaman) dan tempat (makan) yang berstatus manshub..\nContoh penerapan: \"سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ\" () yang berarti \"Delegasi akademik itu berangkat pada pagi hari menuju ibu kota.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Zharaf",
          "Makan",
          "dan",
          "Zharaf"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung), menerangkan fungsi dasarnya (Kata keterangan waktu (zaman) dan tempat (makan) yang bersta...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-16-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"سافر الوفدُ صباحُ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"سافر الوفدُ صباحُ\" keliru karena: Keterangan waktu berstatus zharaf manshub (صباحاً)..\nBentuk pembetulan yang tepat adalah: \"سافر الوفدُ صباحاً\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "سافر",
          "الوفدُ",
          "صباحاً"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Keterangan waktu berstatus zharaf manshub (صباحاً).) dan memberikan bentuk baku: سافر الوفدُ صباحاً."
      },
      {
        "id": "q-ar-gram-16-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-16-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Pembicara itu berdiri di hadapan para hadirin di dalam aula.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Pembicara itu berdiri di hadapan para hadirin di dalam aula.\".",
        "keywords": [
          "Pembicara",
          "itu",
          "berdiri"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-16-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-16-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Delegasi akademik itu berangkat pada pagi hari menuju ibu kota.\"",
        "scrambledWords": [
          "الْوَفْدُ",
          "إِلَى",
          "سَافَرَ",
          "صَبَاحًا",
          "الْعَاصِمَةِ"
        ],
        "correctOrder": [
          "سَافَرَ",
          "الْوَفْدُ",
          "صَبَاحًا",
          "إِلَى",
          "الْعَاصِمَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ\". Mengikuti kaidah Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung."
      },
      {
        "id": "q-ar-gram-16-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Pembicara itu berdiri di hadapan para hadirin di dalam aula.\"",
        "scrambledWords": [
          "الْخَطِيبُ",
          "الْحَاضِرِينَ",
          "الْقَاعَةِ",
          "وَقَفَ",
          "أَمَامَ",
          "فِي"
        ],
        "correctOrder": [
          "وَقَفَ",
          "الْخَطِيبُ",
          "أَمَامَ",
          "الْحَاضِرِينَ",
          "فِي",
          "الْقَاعَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ\". Mengikuti kaidah Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung."
      },
      {
        "id": "q-ar-gram-16-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Dewan senat fakultas berkumpul pada hari Kamis.\"",
        "scrambledWords": [
          "مَجْلِسُ",
          "يَوْمَ",
          "يَجْتَمِعُ",
          "الْكُلِّيَّةِ",
          "الْخَمِيسِ"
        ],
        "correctOrder": [
          "يَجْتَمِعُ",
          "مَجْلِسُ",
          "الْكُلِّيَّةِ",
          "يَوْمَ",
          "الْخَمِيسِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يَجْتَمِعُ مَجْلِسُ الْكُلِّيَّةِ يَوْمَ الْخَمِيسِ\". Mengikuti kaidah Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung."
      },
      {
        "id": "q-ar-gram-16-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: سافر الوفدُ صباحاً\"",
        "scrambledWords": [
          "الوفدُ",
          "سافر",
          "صباحاً"
        ],
        "correctOrder": [
          "سافر",
          "الوفدُ",
          "صباحاً"
        ],
        "explanation": "Urutan yang tepat adalah: \"سافر الوفدُ صباحاً\". Mengikuti kaidah Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung."
      },
      {
        "id": "q-ar-gram-16-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: سافر الوفدُ صباحاً\"",
        "scrambledWords": [
          "الوفدُ",
          "سافر",
          "صباحاً"
        ],
        "correctOrder": [
          "سافر",
          "الوفدُ",
          "صباحاً"
        ],
        "explanation": "Urutan yang tepat adalah: \"سافر الوفدُ صباحاً\". Mengikuti kaidah Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung."
      },
      {
        "id": "q-ar-gram-16-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Delegasi akademik itu berangkat pada pagi hari menuju ibu kota.",
          "Bukan delegasi akademik itu berangkat pada pagi hari menuju ibu kota.",
          "Pembicara itu berdiri di hadapan para hadirin di dalam aula.",
          "Dewan senat fakultas berkumpul pada hari Kamis."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ\" () yang bermakna \"Delegasi akademik itu berangkat pada pagi hari menuju ibu kota.\"."
      },
      {
        "id": "q-ar-gram-16-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ\"",
        "targetSentence": "وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Pembicara itu berdiri di hadapan para hadirin di dalam aula.",
          "Delegasi akademik itu berangkat pada pagi hari menuju ibu kota.",
          "Apakah pembicara itu berdiri di hadapan para hadirin di dalam aula.?",
          "Sangat pembicara itu berdiri di hadapan para hadirin di dalam aula."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ\" diterjemahkan menjadi \"Pembicara itu berdiri di hadapan para hadirin di dalam aula.\"."
      },
      {
        "id": "q-ar-gram-16-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "يَجْتَمِعُ مَجْلِسُ الْكُلِّيَّةِ يَوْمَ الْخَمِيسِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان) untuk menyatakan makna: \"Dewan senat fakultas berkumpul pada hari Kamis.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"يَجْتَمِعُ مَجْلِسُ الْكُلِّيَّةِ يَوْمَ الْخَمِيسِ\" yang mempraktikkan rumus Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung."
      },
      {
        "id": "q-ar-gram-16-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Delegasi akademik itu berangkat pada pagi hari menuju ibu kota.\"!",
        "options": [
          "سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ",
          "سافر الوفدُ صباحُ",
          "وَقَفَ الْخَطِيبُ أَمَامَ الْحَاضِرِينَ فِي الْقَاعَةِ [Variasi]",
          "يَجْتَمِعُ مَجْلِسُ الْكُلِّيَّةِ يَوْمَ الْخَمِيسِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ\"."
      },
      {
        "id": "q-ar-gram-16-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Zharaf Makan dan Zharaf Zaman (ظرف المكان والزمان)\", respons manakah yang paling sesuai?",
        "options": [
          "سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ (Delegasi akademik itu berangkat pada pagi hari menuju ibu kota.)",
          "سافر الوفدُ صباحُ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"سَافَرَ الْوَفْدُ صَبَاحًا إِلَى الْعَاصِمَةِ\" sesuai aturan Zharaf (Manshub) Menunjukkan Kapan atau Di Mana Aksi Berlangsung."
      }
    ]
  },
  {
    "id": "ar-gram-17",
    "languageId": "arabic",
    "level": "Mustawa 2 (Kaidah Kalimat Sederhana)",
    "unit": 7,
    "title": "Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن)",
    "titleNative": "نواصب الفعل المضارع (أن، لن، كي، إذن، لام التعليل)",
    "patternFormula": "Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)",
    "summary": "Partikel yang mengubah harakat akhir fi'il mudhari' dari dhammah menjadi fathah.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ — Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ — Tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "أَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ فِي الِامْتِحَانِ — Saya belajar dengan giat supaya lulus dalam ujian."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-17-ex-1",
        "native": "يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ",
        "phonetic": "",
        "translationId": "Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat."
      },
      {
        "id": "ar-gram-17-ex-2",
        "native": "لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ",
        "phonetic": "",
        "translationId": "Tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar."
      },
      {
        "id": "ar-gram-17-ex-3",
        "native": "أَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ فِي الِامْتِحَانِ",
        "phonetic": "",
        "translationId": "Saya belajar dengan giat supaya lulus dalam ujian."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "يجب أن نجتهدُ",
        "correct": "يجب أن نجتهدَ",
        "explanation": "Setelah أن fi'il mudhari' berharakat fathah (نجتهدَ)."
      },
      {
        "incorrect": "يجب أن نجتهدُ (kesalahan i'rab)",
        "correct": "يجب أن نجتهدَ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-17-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ\"?",
        "targetSentence": "يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.",
          "Bukan kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.",
          "Apakah kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.?",
          "Mungkin kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ\" () bermakna \"Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.\"."
      },
      {
        "id": "q-ar-gram-17-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ\"?",
        "targetSentence": "لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.",
          "Bukan tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.",
          "Apakah tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.?",
          "Mungkin tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ\" () bermakna \"Tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.\"."
      },
      {
        "id": "q-ar-gram-17-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"أَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ فِي الِامْتِحَانِ\"?",
        "targetSentence": "أَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ فِي الِامْتِحَانِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya belajar dengan giat supaya lulus dalam ujian.",
          "Bukan saya belajar dengan giat supaya lulus dalam ujian.",
          "Apakah saya belajar dengan giat supaya lulus dalam ujian.?",
          "Mungkin saya belajar dengan giat supaya lulus dalam ujian."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ فِي الِامْتِحَانِ\" () bermakna \"Saya belajar dengan giat supaya lulus dalam ujian.\"."
      },
      {
        "id": "q-ar-gram-17-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ (Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.)",
          "يجب أن نجتهدُ (Struktur keliru)",
          "يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah). Contoh baku: \"يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ\"."
      },
      {
        "id": "q-ar-gram-17-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن) merupakan pilar penting dalam si...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-17-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah) diterapkan untuk menjaga ketepatan...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-17-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-17-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"يجب أن نجتهدُ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Setelah أن fi'il mudhari' berharakat fathah (نجتهدَ).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يجب أن نجتهدُ\" salah karena Setelah أن fi'il mudhari' berharakat fathah (نجتهدَ).. Bentuk yang benar: \"يجب أن نجتهدَ\"."
      },
      {
        "id": "q-ar-gram-17-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"يجب أن نجتهدُ (kesalahan i'rab)\"?",
        "options": [
          "يجب أن نجتهدَ",
          "يجب أن نجتهدُ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "يجب أن نجتهدُ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"يجب أن نجتهدَ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-17-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن)\"?",
        "options": [
          "Penerapan kaidah Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن) sangat dihargai dalam tradisi ilmiah ...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-17-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن)\" (Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah).\nFungsi utama: Partikel yang mengubah harakat akhir fi'il mudhari' dari dhammah menjadi fathah..\nContoh penerapan: \"يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ\" () yang berarti \"Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Huruf",
          "Nashab",
          "Fi'il",
          "Mudhari'"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)), menerangkan fungsi dasarnya (Partikel yang mengubah harakat akhir fi'il mudhari' dari dha...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-17-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"يجب أن نجتهدُ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"يجب أن نجتهدُ\" keliru karena: Setelah أن fi'il mudhari' berharakat fathah (نجتهدَ)..\nBentuk pembetulan yang tepat adalah: \"يجب أن نجتهدَ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "يجب",
          "أن",
          "نجتهدَ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Setelah أن fi'il mudhari' berharakat fathah (نجتهدَ).) dan memberikan bentuk baku: يجب أن نجتهدَ."
      },
      {
        "id": "q-ar-gram-17-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-17-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.\".",
        "keywords": [
          "Tidak",
          "akan",
          "pernah"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-17-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-17-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.\"",
        "scrambledWords": [
          "أَنْ",
          "فِي",
          "الْمُجْتَمَعِ",
          "يَجِبُ",
          "نَجْتَهِدَ",
          "خِدْمَةِ"
        ],
        "correctOrder": [
          "يَجِبُ",
          "أَنْ",
          "نَجْتَهِدَ",
          "فِي",
          "خِدْمَةِ",
          "الْمُجْتَمَعِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ\". Mengikuti kaidah Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)."
      },
      {
        "id": "q-ar-gram-17-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.\"",
        "scrambledWords": [
          "يَنْدَمَ",
          "اسْتَشَارَ",
          "الْخِبْرَةِ",
          "لَنْ",
          "مَنْ",
          "أَهْلَ"
        ],
        "correctOrder": [
          "لَنْ",
          "يَنْدَمَ",
          "مَنْ",
          "اسْتَشَارَ",
          "أَهْلَ",
          "الْخِبْرَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ\". Mengikuti kaidah Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)."
      },
      {
        "id": "q-ar-gram-17-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya belajar dengan giat supaya lulus dalam ujian.\"",
        "scrambledWords": [
          "بِجِدٍّ",
          "أَنْجَحَ",
          "الِامْتِحَانِ",
          "أَدْرُسُ",
          "لِكَيْ",
          "فِي"
        ],
        "correctOrder": [
          "أَدْرُسُ",
          "بِجِدٍّ",
          "لِكَيْ",
          "أَنْجَحَ",
          "فِي",
          "الِامْتِحَانِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"أَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ فِي الِامْتِحَانِ\". Mengikuti kaidah Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)."
      },
      {
        "id": "q-ar-gram-17-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: يجب أن نجتهدَ\"",
        "scrambledWords": [
          "أن",
          "يجب",
          "نجتهدَ"
        ],
        "correctOrder": [
          "يجب",
          "أن",
          "نجتهدَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يجب أن نجتهدَ\". Mengikuti kaidah Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)."
      },
      {
        "id": "q-ar-gram-17-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: يجب أن نجتهدَ\"",
        "scrambledWords": [
          "أن",
          "يجب",
          "نجتهدَ"
        ],
        "correctOrder": [
          "يجب",
          "أن",
          "نجتهدَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يجب أن نجتهدَ\". Mengikuti kaidah Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)."
      },
      {
        "id": "q-ar-gram-17-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.",
          "Bukan kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.",
          "Tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.",
          "Saya belajar dengan giat supaya lulus dalam ujian."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ\" () yang bermakna \"Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.\"."
      },
      {
        "id": "q-ar-gram-17-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ\"",
        "targetSentence": "لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.",
          "Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.",
          "Apakah tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.?",
          "Sangat tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ\" diterjemahkan menjadi \"Tidak akan pernah menyesal orang yang bermusyawarah dengan para pakar.\"."
      },
      {
        "id": "q-ar-gram-17-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "أَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ فِي الِامْتِحَانِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن) untuk menyatakan makna: \"Saya belajar dengan giat supaya lulus dalam ujian.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"أَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ فِي الِامْتِحَانِ\" yang mempraktikkan rumus Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)."
      },
      {
        "id": "q-ar-gram-17-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.\"!",
        "options": [
          "يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ",
          "يجب أن نجتهدُ",
          "لَنْ يَنْدَمَ مَنْ اسْتَشَارَ أَهْلَ الْخِبْرَةِ [Variasi]",
          "أَدْرُسُ بِجِدٍّ لِكَيْ أَنْجَحَ فِي الِامْتِحَانِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ\"."
      },
      {
        "id": "q-ar-gram-17-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Huruf Nashab Fi'il Mudhari' (أن، لن، كي، إذن)\", respons manakah yang paling sesuai?",
        "options": [
          "يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ (Kita wajib bersungguh-sungguh dalam mengabdi kepada masyarakat.)",
          "يجب أن نجتهدُ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"يَجِبُ أَنْ نَجْتَهِدَ فِي خِدْمَةِ الْمُجْتَمَعِ\" sesuai aturan Huruf Nashab + Fi'il Mudhari' (Manshub dengan Fathah)."
      }
    ]
  },
  {
    "id": "ar-gram-18",
    "languageId": "arabic",
    "level": "Mustawa 2 (Kaidah Kalimat Sederhana)",
    "unit": 8,
    "title": "Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية)",
    "titleNative": "جوازم الفعل المضارع وأدوات الجزم",
    "patternFormula": "Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)",
    "summary": "Partikel yang menjazmkan fi'il mudhari' dengan tanda sukun atau penghilangan huruf nun / 'illat.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ — Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ — Janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!"
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "لِيَكْتُبْ كُلُّ بَاحِثٍ خُطَّةَ بَحْثِهِ — Hendaklah setiap peneliti menuliskan proposal penelitiannya."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-18-ex-1",
        "native": "لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ",
        "phonetic": "",
        "translationId": "Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan."
      },
      {
        "id": "ar-gram-18-ex-2",
        "native": "لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ",
        "phonetic": "",
        "translationId": "Janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!"
      },
      {
        "id": "ar-gram-18-ex-3",
        "native": "لِيَكْتُبْ كُلُّ بَاحِثٍ خُطَّةَ بَحْثِهِ",
        "phonetic": "",
        "translationId": "Hendaklah setiap peneliti menuliskan proposal penelitiannya."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "لم يتأخرُ",
        "correct": "لم يتأخرْ",
        "explanation": "Setelah لم fi'il mudhari' berharakat sukun (يتأخرْ)."
      },
      {
        "incorrect": "لم يتأخرُ (kesalahan i'rab)",
        "correct": "لم يتأخرْ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-18-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ\"?",
        "targetSentence": "لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.",
          "Bukan tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.",
          "Apakah tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.?",
          "Mungkin tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ\" () bermakna \"Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.\"."
      },
      {
        "id": "q-ar-gram-18-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ\"?",
        "targetSentence": "لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!",
          "Bukan janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!",
          "Apakah janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!?",
          "Mungkin janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ\" () bermakna \"Janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!\"."
      },
      {
        "id": "q-ar-gram-18-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"لِيَكْتُبْ كُلُّ بَاحِثٍ خُطَّةَ بَحْثِهِ\"?",
        "targetSentence": "لِيَكْتُبْ كُلُّ بَاحِثٍ خُطَّةَ بَحْثِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Hendaklah setiap peneliti menuliskan proposal penelitiannya.",
          "Bukan hendaklah setiap peneliti menuliskan proposal penelitiannya.",
          "Apakah hendaklah setiap peneliti menuliskan proposal penelitiannya.?",
          "Mungkin hendaklah setiap peneliti menuliskan proposal penelitiannya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لِيَكْتُبْ كُلُّ بَاحِثٍ خُطَّةَ بَحْثِهِ\" () bermakna \"Hendaklah setiap peneliti menuliskan proposal penelitiannya.\"."
      },
      {
        "id": "q-ar-gram-18-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ (Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.)",
          "لم يتأخرُ (Struktur keliru)",
          "لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf). Contoh baku: \"لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ\"."
      },
      {
        "id": "q-ar-gram-18-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية) merupakan pilar pe...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-18-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf) diterapkan untuk menjaga ketep...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-18-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-18-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"لم يتأخرُ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Setelah لم fi'il mudhari' berharakat sukun (يتأخرْ).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لم يتأخرُ\" salah karena Setelah لم fi'il mudhari' berharakat sukun (يتأخرْ).. Bentuk yang benar: \"لم يتأخرْ\"."
      },
      {
        "id": "q-ar-gram-18-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"لم يتأخرُ (kesalahan i'rab)\"?",
        "options": [
          "لم يتأخرْ",
          "لم يتأخرُ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "لم يتأخرُ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"لم يتأخرْ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-18-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية)\"?",
        "options": [
          "Penerapan kaidah Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية) sangat dihargai dalam t...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-18-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية)\" (Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf).\nFungsi utama: Partikel yang menjazmkan fi'il mudhari' dengan tanda sukun atau penghilangan huruf nun / 'illat..\nContoh penerapan: \"لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ\" () yang berarti \"Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Huruf",
          "Jazm",
          "Fi'il",
          "Mudhari'"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)), menerangkan fungsi dasarnya (Partikel yang menjazmkan fi'il mudhari' dengan tanda sukun a...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-18-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"لم يتأخرُ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"لم يتأخرُ\" keliru karena: Setelah لم fi'il mudhari' berharakat sukun (يتأخرْ)..\nBentuk pembetulan yang tepat adalah: \"لم يتأخرْ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "لم",
          "يتأخرْ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Setelah لم fi'il mudhari' berharakat sukun (يتأخرْ).) dan memberikan bentuk baku: لم يتأخرْ."
      },
      {
        "id": "q-ar-gram-18-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-18-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!\".",
        "keywords": [
          "Janganlah",
          "engkau",
          "berputus"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-18-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-18-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.\"",
        "scrambledWords": [
          "يَتَأَخَّرْ",
          "طَالِبٍ",
          "الْمَوْعِدِ",
          "لَمْ",
          "أَيُّ",
          "عَنِ",
          "الْمُحَدَّدِ"
        ],
        "correctOrder": [
          "لَمْ",
          "يَتَأَخَّرْ",
          "أَيُّ",
          "طَالِبٍ",
          "عَنِ",
          "الْمَوْعِدِ",
          "الْمُحَدَّدِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ\". Mengikuti kaidah Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)."
      },
      {
        "id": "q-ar-gram-18-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!\"",
        "scrambledWords": [
          "تَيْأَسْ",
          "تَحْقِيقِ",
          "الْعِلْمِيَّةِ",
          "لَا",
          "مِنْ",
          "أَهْدَافِكَ"
        ],
        "correctOrder": [
          "لَا",
          "تَيْأَسْ",
          "مِنْ",
          "تَحْقِيقِ",
          "أَهْدَافِكَ",
          "الْعِلْمِيَّةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ\". Mengikuti kaidah Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)."
      },
      {
        "id": "q-ar-gram-18-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Hendaklah setiap peneliti menuliskan proposal penelitiannya.\"",
        "scrambledWords": [
          "كُلُّ",
          "خُطَّةَ",
          "لِيَكْتُبْ",
          "بَاحِثٍ",
          "بَحْثِهِ"
        ],
        "correctOrder": [
          "لِيَكْتُبْ",
          "كُلُّ",
          "بَاحِثٍ",
          "خُطَّةَ",
          "بَحْثِهِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"لِيَكْتُبْ كُلُّ بَاحِثٍ خُطَّةَ بَحْثِهِ\". Mengikuti kaidah Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)."
      },
      {
        "id": "q-ar-gram-18-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: لم يتأخرْ\"",
        "scrambledWords": [
          " ي",
          "خر",
          "لم",
          "تأ",
          "ْ"
        ],
        "correctOrder": [
          "لم",
          " ي",
          "تأ",
          "خر",
          "ْ"
        ],
        "explanation": "Urutan yang tepat adalah: \"لم يتأخرْ\". Mengikuti kaidah Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)."
      },
      {
        "id": "q-ar-gram-18-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: لم يتأخرْ\"",
        "scrambledWords": [
          " ي",
          "خر",
          "لم",
          "تأ",
          "ْ"
        ],
        "correctOrder": [
          "لم",
          " ي",
          "تأ",
          "خر",
          "ْ"
        ],
        "explanation": "Urutan yang tepat adalah: \"لم يتأخرْ\". Mengikuti kaidah Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)."
      },
      {
        "id": "q-ar-gram-18-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.",
          "Bukan tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.",
          "Janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!",
          "Hendaklah setiap peneliti menuliskan proposal penelitiannya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ\" () yang bermakna \"Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.\"."
      },
      {
        "id": "q-ar-gram-18-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ\"",
        "targetSentence": "لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!",
          "Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.",
          "Apakah janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!?",
          "Sangat janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ\" diterjemahkan menjadi \"Janganlah engkau berputus asa dalam meraih cita-cita ilmiahmu!\"."
      },
      {
        "id": "q-ar-gram-18-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "لِيَكْتُبْ كُلُّ بَاحِثٍ خُطَّةَ بَحْثِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية) untuk menyatakan makna: \"Hendaklah setiap peneliti menuliskan proposal penelitiannya.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"لِيَكْتُبْ كُلُّ بَاحِثٍ خُطَّةَ بَحْثِهِ\" yang mempraktikkan rumus Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)."
      },
      {
        "id": "q-ar-gram-18-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.\"!",
        "options": [
          "لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ",
          "لم يتأخرُ",
          "لَا تَيْأَسْ مِنْ تَحْقِيقِ أَهْدَافِكَ الْعِلْمِيَّةِ [Variasi]",
          "لِيَكْتُبْ كُلُّ بَاحِثٍ خُطَّةَ بَحْثِهِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ\"."
      },
      {
        "id": "q-ar-gram-18-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Huruf Jazm Fi'il Mudhari' (لم، لمّا، لام الأمر، لا الناهية)\", respons manakah yang paling sesuai?",
        "options": [
          "لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ (Tidak ada seorang pun mahasiswa yang terlambat dari jadwal yang ditentukan.)",
          "لم يتأخرُ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"لَمْ يَتَأَخَّرْ أَيُّ طَالِبٍ عَنِ الْمَوْعِدِ الْمُحَدَّدِ\" sesuai aturan Huruf Jazm + Fi'il Mudhari' (Majzum dengan Sukun / Hadzf)."
      }
    ]
  },
  {
    "id": "ar-gram-19",
    "languageId": "arabic",
    "level": "Mustawa 2 (Kaidah Kalimat Sederhana)",
    "unit": 9,
    "title": "Isim Maushul (الأسماء الموصولة: الذي، التي، الذين)",
    "titleNative": "الاسم الموصول وصلة الموصول وعائدها",
    "patternFormula": "Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)",
    "summary": "Kata ganti penghubung setara 'yang' (الذي untuk tunggal maskulin, التي untuk tunggal feminin, الذين untuk jamak maskulin).",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Isim Maushul (الأسماء الموصولة: الذي، التي، الذين) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ — Mahasiswa yang meraih peringkat pertama itu sangat unggul."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً — Universitas tempat saya berkuliah menyediakan layanan yang luar biasa."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "الْعُلَمَاءُ الَّذِينَ خَدَمُوا الْأُمَّةَ كَثِيرُونَ — Para ulama dan ilmuwan yang telah berjasa melayani umat sangatlah banyak."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-19-ex-1",
        "native": "الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ",
        "phonetic": "",
        "translationId": "Mahasiswa yang meraih peringkat pertama itu sangat unggul."
      },
      {
        "id": "ar-gram-19-ex-2",
        "native": "الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً",
        "phonetic": "",
        "translationId": "Universitas tempat saya berkuliah menyediakan layanan yang luar biasa."
      },
      {
        "id": "ar-gram-19-ex-3",
        "native": "الْعُلَمَاءُ الَّذِينَ خَدَمُوا الْأُمَّةَ كَثِيرُونَ",
        "phonetic": "",
        "translationId": "Para ulama dan ilmuwan yang telah berjasa melayani umat sangatlah banyak."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "الطالب التي حصل",
        "correct": "الطالب الذي حصل",
        "explanation": "Isim maushul harus menyamai gender kata bendanya (الذي untuk maskulin)."
      },
      {
        "incorrect": "الطالب التي حصل (kesalahan i'rab)",
        "correct": "الطالب الذي حصل",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Isim Maushul (الأسماء الموصولة: الذي، التي، الذين) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-19-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ\"?",
        "targetSentence": "الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa yang meraih peringkat pertama itu sangat unggul.",
          "Bukan mahasiswa yang meraih peringkat pertama itu sangat unggul.",
          "Apakah mahasiswa yang meraih peringkat pertama itu sangat unggul.?",
          "Mungkin mahasiswa yang meraih peringkat pertama itu sangat unggul."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ\" () bermakna \"Mahasiswa yang meraih peringkat pertama itu sangat unggul.\"."
      },
      {
        "id": "q-ar-gram-19-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً\"?",
        "targetSentence": "الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Universitas tempat saya berkuliah menyediakan layanan yang luar biasa.",
          "Bukan universitas tempat saya berkuliah menyediakan layanan yang luar biasa.",
          "Apakah universitas tempat saya berkuliah menyediakan layanan yang luar biasa.?",
          "Mungkin universitas tempat saya berkuliah menyediakan layanan yang luar biasa."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً\" () bermakna \"Universitas tempat saya berkuliah menyediakan layanan yang luar biasa.\"."
      },
      {
        "id": "q-ar-gram-19-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْعُلَمَاءُ الَّذِينَ خَدَمُوا الْأُمَّةَ كَثِيرُونَ\"?",
        "targetSentence": "الْعُلَمَاءُ الَّذِينَ خَدَمُوا الْأُمَّةَ كَثِيرُونَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Para ulama dan ilmuwan yang telah berjasa melayani umat sangatlah banyak.",
          "Bukan para ulama dan ilmuwan yang telah berjasa melayani umat sangatlah banyak.",
          "Apakah para ulama dan ilmuwan yang telah berjasa melayani umat sangatlah banyak.?",
          "Mungkin para ulama dan ilmuwan yang telah berjasa melayani umat sangatlah banyak."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْعُلَمَاءُ الَّذِينَ خَدَمُوا الْأُمَّةَ كَثِيرُونَ\" () bermakna \"Para ulama dan ilmuwan yang telah berjasa melayani umat sangatlah banyak.\"."
      },
      {
        "id": "q-ar-gram-19-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ (Mahasiswa yang meraih peringkat pertama itu sangat unggul.)",
          "الطالب التي حصل (Struktur keliru)",
          "الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Isim Maushul (الأسماء الموصولة: الذي، التي، الذين)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif). Contoh baku: \"الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ\"."
      },
      {
        "id": "q-ar-gram-19-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Isim Maushul (الأسماء الموصولة: الذي، التي، الذين) merupakan pilar penting dal...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Isim Maushul (الأسماء الموصولة: الذي، التي، الذين) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-19-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif) diterapkan untuk menjaga ketepa...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-19-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-19-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"الطالب التي حصل\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Isim maushul harus menyamai gender kata bendanya (الذي untuk maskulin).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الطالب التي حصل\" salah karena Isim maushul harus menyamai gender kata bendanya (الذي untuk maskulin).. Bentuk yang benar: \"الطالب الذي حصل\"."
      },
      {
        "id": "q-ar-gram-19-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"الطالب التي حصل (kesalahan i'rab)\"?",
        "options": [
          "الطالب الذي حصل",
          "الطالب التي حصل (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "الطالب التي حصل (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"الطالب الذي حصل\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-19-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Isim Maushul (الأسماء الموصولة: الذي، التي، الذين)\"?",
        "options": [
          "Penerapan kaidah Isim Maushul (الأسماء الموصولة: الذي، التي، الذين) sangat dihargai dalam tradisi il...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Isim Maushul (الأسماء الموصولة: الذي، التي، الذين) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-19-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Isim Maushul (الأسماء الموصولة: الذي، التي، الذين)\" (Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif).\nFungsi utama: Kata ganti penghubung setara 'yang' (الذي untuk tunggal maskulin, التي untuk tunggal feminin, الذين untuk jamak maskulin)..\nContoh penerapan: \"الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ\" () yang berarti \"Mahasiswa yang meraih peringkat pertama itu sangat unggul.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Isim",
          "Maushul",
          "الأسماء",
          "الموصولة:"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)), menerangkan fungsi dasarnya (Kata ganti penghubung setara 'yang' (الذي untuk tunggal mask...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-19-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"الطالب التي حصل\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"الطالب التي حصل\" keliru karena: Isim maushul harus menyamai gender kata bendanya (الذي untuk maskulin)..\nBentuk pembetulan yang tepat adalah: \"الطالب الذي حصل\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "الطالب",
          "الذي",
          "حصل"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Isim maushul harus menyamai gender kata bendanya (الذي untuk maskulin).) dan memberikan bentuk baku: الطالب الذي حصل."
      },
      {
        "id": "q-ar-gram-19-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-19-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Universitas tempat saya berkuliah menyediakan layanan yang luar biasa.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Universitas tempat saya berkuliah menyediakan layanan yang luar biasa.\".",
        "keywords": [
          "Universitas",
          "tempat",
          "saya"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-19-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Isim Maushul (الأسماء الموصولة: الذي، التي، الذين)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Isim Maushul (الأسماء الموصولة: الذي، التي، الذين) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Isim Maushul (الأسماء الموصولة: الذي، التي، الذين) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-19-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Mahasiswa yang meraih peringkat pertama itu sangat unggul.\"",
        "scrambledWords": [
          "الَّذِي",
          "عَلَى",
          "الْأَوَّلِ",
          "الطَّالِبُ",
          "حَصَلَ",
          "الْمَرْكَزِ",
          "مُتَفَوِّقٌ"
        ],
        "correctOrder": [
          "الطَّالِبُ",
          "الَّذِي",
          "حَصَلَ",
          "عَلَى",
          "الْمَرْكَزِ",
          "الْأَوَّلِ",
          "مُتَفَوِّقٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ\". Mengikuti kaidah Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)."
      },
      {
        "id": "q-ar-gram-19-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Universitas tempat saya berkuliah menyediakan layanan yang luar biasa.\"",
        "scrambledWords": [
          "الَّتِي",
          "فِيهَا",
          "خِدْمَاتٍ",
          "الْجَامِعَةُ",
          "أَدْرُسُ",
          "تُقَدِّمُ",
          "رَائِعَةً"
        ],
        "correctOrder": [
          "الْجَامِعَةُ",
          "الَّتِي",
          "أَدْرُسُ",
          "فِيهَا",
          "تُقَدِّمُ",
          "خِدْمَاتٍ",
          "رَائِعَةً"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً\". Mengikuti kaidah Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)."
      },
      {
        "id": "q-ar-gram-19-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Para ulama dan ilmuwan yang telah berjasa melayani umat sangatlah banyak.\"",
        "scrambledWords": [
          "الَّذِينَ",
          "الْأُمَّةَ",
          "الْعُلَمَاءُ",
          "خَدَمُوا",
          "كَثِيرُونَ"
        ],
        "correctOrder": [
          "الْعُلَمَاءُ",
          "الَّذِينَ",
          "خَدَمُوا",
          "الْأُمَّةَ",
          "كَثِيرُونَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْعُلَمَاءُ الَّذِينَ خَدَمُوا الْأُمَّةَ كَثِيرُونَ\". Mengikuti kaidah Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)."
      },
      {
        "id": "q-ar-gram-19-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: الطالب الذي حصل\"",
        "scrambledWords": [
          "الذي",
          "الطالب",
          "حصل"
        ],
        "correctOrder": [
          "الطالب",
          "الذي",
          "حصل"
        ],
        "explanation": "Urutan yang tepat adalah: \"الطالب الذي حصل\". Mengikuti kaidah Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)."
      },
      {
        "id": "q-ar-gram-19-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: الطالب الذي حصل\"",
        "scrambledWords": [
          "الذي",
          "الطالب",
          "حصل"
        ],
        "correctOrder": [
          "الطالب",
          "الذي",
          "حصل"
        ],
        "explanation": "Urutan yang tepat adalah: \"الطالب الذي حصل\". Mengikuti kaidah Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)."
      },
      {
        "id": "q-ar-gram-19-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa yang meraih peringkat pertama itu sangat unggul.",
          "Bukan mahasiswa yang meraih peringkat pertama itu sangat unggul.",
          "Universitas tempat saya berkuliah menyediakan layanan yang luar biasa.",
          "Para ulama dan ilmuwan yang telah berjasa melayani umat sangatlah banyak."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ\" () yang bermakna \"Mahasiswa yang meraih peringkat pertama itu sangat unggul.\"."
      },
      {
        "id": "q-ar-gram-19-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً\"",
        "targetSentence": "الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Universitas tempat saya berkuliah menyediakan layanan yang luar biasa.",
          "Mahasiswa yang meraih peringkat pertama itu sangat unggul.",
          "Apakah universitas tempat saya berkuliah menyediakan layanan yang luar biasa.?",
          "Sangat universitas tempat saya berkuliah menyediakan layanan yang luar biasa."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً\" diterjemahkan menjadi \"Universitas tempat saya berkuliah menyediakan layanan yang luar biasa.\"."
      },
      {
        "id": "q-ar-gram-19-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "الْعُلَمَاءُ الَّذِينَ خَدَمُوا الْأُمَّةَ كَثِيرُونَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Isim Maushul (الأسماء الموصولة: الذي، التي، الذين) untuk menyatakan makna: \"Para ulama dan ilmuwan yang telah berjasa melayani umat sangatlah banyak.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"الْعُلَمَاءُ الَّذِينَ خَدَمُوا الْأُمَّةَ كَثِيرُونَ\" yang mempraktikkan rumus Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)."
      },
      {
        "id": "q-ar-gram-19-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Mahasiswa yang meraih peringkat pertama itu sangat unggul.\"!",
        "options": [
          "الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ",
          "الطالب التي حصل",
          "الْجَامِعَةُ الَّتِي أَدْرُسُ فِيهَا تُقَدِّمُ خِدْمَاتٍ رَائِعَةً [Variasi]",
          "الْعُلَمَاءُ الَّذِينَ خَدَمُوا الْأُمَّةَ كَثِيرُونَ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ\"."
      },
      {
        "id": "q-ar-gram-19-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Isim Maushul (الأسماء الموصولة: الذي، التي، الذين)\", respons manakah yang paling sesuai?",
        "options": [
          "الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ (Mahasiswa yang meraih peringkat pertama itu sangat unggul.)",
          "الطالب التي حصل (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"الطَّالِبُ الَّذِي حَصَلَ عَلَى الْمَرْكَزِ الْأَوَّلِ مُتَفَوِّقٌ\" sesuai aturan Isim Maushul + Silatul Maushul (Klausa Penjelas Relatif)."
      }
    ]
  },
  {
    "id": "ar-gram-20",
    "languageId": "arabic",
    "level": "Mustawa 2 (Kaidah Kalimat Sederhana)",
    "unit": 10,
    "title": "Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10)",
    "titleNative": "قواعد تذكير العدد وتأنيثه وتمييزه",
    "patternFormula": "Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur",
    "summary": "Aturan kebalikan gender (mukhalafah) antara bilangan dan benda yang dihitung dari angka 3 sampai 10.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ — Saya telah membaca tiga buah buku berharga tentang linguistik."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ — Di dalam aula terdapat lima orang mahasiswi berprestasi."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "اشْتَرَيْتُ أَرْبَعَةَ أَقْلَامٍ جَدِيدَةٍ — Saya telah membeli empat buah pena baru."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-20-ex-1",
        "native": "قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ",
        "phonetic": "",
        "translationId": "Saya telah membaca tiga buah buku berharga tentang linguistik."
      },
      {
        "id": "ar-gram-20-ex-2",
        "native": "فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ",
        "phonetic": "",
        "translationId": "Di dalam aula terdapat lima orang mahasiswi berprestasi."
      },
      {
        "id": "ar-gram-20-ex-3",
        "native": "اشْتَرَيْتُ أَرْبَعَةَ أَقْلَامٍ جَدِيدَةٍ",
        "phonetic": "",
        "translationId": "Saya telah membeli empat buah pena baru."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "ثلاث كتب",
        "correct": "ثلاثةُ كتبٍ",
        "explanation": "Karena كتاب maskulin, maka angka tiga harus berbentuk feminin (ثلاثة)."
      },
      {
        "incorrect": "ثلاث كتب (kesalahan i'rab)",
        "correct": "ثلاثةُ كتبٍ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-20-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ\"?",
        "targetSentence": "قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah membaca tiga buah buku berharga tentang linguistik.",
          "Bukan saya telah membaca tiga buah buku berharga tentang linguistik.",
          "Apakah saya telah membaca tiga buah buku berharga tentang linguistik.?",
          "Mungkin saya telah membaca tiga buah buku berharga tentang linguistik."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ\" () bermakna \"Saya telah membaca tiga buah buku berharga tentang linguistik.\"."
      },
      {
        "id": "q-ar-gram-20-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ\"?",
        "targetSentence": "فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Di dalam aula terdapat lima orang mahasiswi berprestasi.",
          "Bukan di dalam aula terdapat lima orang mahasiswi berprestasi.",
          "Apakah di dalam aula terdapat lima orang mahasiswi berprestasi.?",
          "Mungkin di dalam aula terdapat lima orang mahasiswi berprestasi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ\" () bermakna \"Di dalam aula terdapat lima orang mahasiswi berprestasi.\"."
      },
      {
        "id": "q-ar-gram-20-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"اشْتَرَيْتُ أَرْبَعَةَ أَقْلَامٍ جَدِيدَةٍ\"?",
        "targetSentence": "اشْتَرَيْتُ أَرْبَعَةَ أَقْلَامٍ جَدِيدَةٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah membeli empat buah pena baru.",
          "Bukan saya telah membeli empat buah pena baru.",
          "Apakah saya telah membeli empat buah pena baru.?",
          "Mungkin saya telah membeli empat buah pena baru."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اشْتَرَيْتُ أَرْبَعَةَ أَقْلَامٍ جَدِيدَةٍ\" () bermakna \"Saya telah membeli empat buah pena baru.\"."
      },
      {
        "id": "q-ar-gram-20-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ (Saya telah membaca tiga buah buku berharga tentang linguistik.)",
          "ثلاث كتب (Struktur keliru)",
          "قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur. Contoh baku: \"قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ\"."
      },
      {
        "id": "q-ar-gram-20-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10) merupakan pilar penting d...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-20-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur diterapkan untuk menjaga ketepa...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-20-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-20-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"ثلاث كتب\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Karena كتاب maskulin, maka angka tiga harus berbentuk feminin (ثلاثة).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"ثلاث كتب\" salah karena Karena كتاب maskulin, maka angka tiga harus berbentuk feminin (ثلاثة).. Bentuk yang benar: \"ثلاثةُ كتبٍ\"."
      },
      {
        "id": "q-ar-gram-20-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"ثلاث كتب (kesalahan i'rab)\"?",
        "options": [
          "ثلاثةُ كتبٍ",
          "ثلاث كتب (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "ثلاث كتب (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"ثلاثةُ كتبٍ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-20-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10)\"?",
        "options": [
          "Penerapan kaidah Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10) sangat dihargai dalam tradisi ...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-20-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10)\" (Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur.\nFungsi utama: Aturan kebalikan gender (mukhalafah) antara bilangan dan benda yang dihitung dari angka 3 sampai 10..\nContoh penerapan: \"قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ\" () yang berarti \"Saya telah membaca tiga buah buku berharga tentang linguistik.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kaidah",
          "Adad",
          "Ma'dud",
          "sampai"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur), menerangkan fungsi dasarnya (Aturan kebalikan gender (mukhalafah) antara bilangan dan ben...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-20-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"ثلاث كتب\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"ثلاث كتب\" keliru karena: Karena كتاب maskulin, maka angka tiga harus berbentuk feminin (ثلاثة)..\nBentuk pembetulan yang tepat adalah: \"ثلاثةُ كتبٍ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "ثلاثةُ",
          "كتبٍ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Karena كتاب maskulin, maka angka tiga harus berbentuk feminin (ثلاثة).) dan memberikan bentuk baku: ثلاثةُ كتبٍ."
      },
      {
        "id": "q-ar-gram-20-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-20-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Di dalam aula terdapat lima orang mahasiswi berprestasi.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Di dalam aula terdapat lima orang mahasiswi berprestasi.\".",
        "keywords": [
          "dalam",
          "aula",
          "terdapat"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-20-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-20-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya telah membaca tiga buah buku berharga tentang linguistik.\"",
        "scrambledWords": [
          "ثَلَاثَةَ",
          "قَيِّمَةٍ",
          "اللُّغَةِ",
          "قَرَأْتُ",
          "كُتُبٍ",
          "فِي"
        ],
        "correctOrder": [
          "قَرَأْتُ",
          "ثَلَاثَةَ",
          "كُتُبٍ",
          "قَيِّمَةٍ",
          "فِي",
          "اللُّغَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ\". Mengikuti kaidah Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur."
      },
      {
        "id": "q-ar-gram-20-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Di dalam aula terdapat lima orang mahasiswi berprestasi.\"",
        "scrambledWords": [
          "الْقَاعَةِ",
          "طَالِبَاتٍ",
          "فِي",
          "خَمْسُ",
          "مُتَفَوِّقَاتٍ"
        ],
        "correctOrder": [
          "فِي",
          "الْقَاعَةِ",
          "خَمْسُ",
          "طَالِبَاتٍ",
          "مُتَفَوِّقَاتٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ\". Mengikuti kaidah Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur."
      },
      {
        "id": "q-ar-gram-20-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya telah membeli empat buah pena baru.\"",
        "scrambledWords": [
          "أَرْبَعَةَ",
          "جَدِيدَةٍ",
          "اشْتَرَيْتُ",
          "أَقْلَامٍ"
        ],
        "correctOrder": [
          "اشْتَرَيْتُ",
          "أَرْبَعَةَ",
          "أَقْلَامٍ",
          "جَدِيدَةٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"اشْتَرَيْتُ أَرْبَعَةَ أَقْلَامٍ جَدِيدَةٍ\". Mengikuti kaidah Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur."
      },
      {
        "id": "q-ar-gram-20-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: ثلاثةُ كتبٍ\"",
        "scrambledWords": [
          "اث",
          " ك",
          "ٍ",
          "ثل",
          "ةُ",
          "تب"
        ],
        "correctOrder": [
          "ثل",
          "اث",
          "ةُ",
          " ك",
          "تب",
          "ٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"ثلاثةُ كتبٍ\". Mengikuti kaidah Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur."
      },
      {
        "id": "q-ar-gram-20-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: ثلاثةُ كتبٍ\"",
        "scrambledWords": [
          "اث",
          " ك",
          "ٍ",
          "ثل",
          "ةُ",
          "تب"
        ],
        "correctOrder": [
          "ثل",
          "اث",
          "ةُ",
          " ك",
          "تب",
          "ٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"ثلاثةُ كتبٍ\". Mengikuti kaidah Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur."
      },
      {
        "id": "q-ar-gram-20-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah membaca tiga buah buku berharga tentang linguistik.",
          "Bukan saya telah membaca tiga buah buku berharga tentang linguistik.",
          "Di dalam aula terdapat lima orang mahasiswi berprestasi.",
          "Saya telah membeli empat buah pena baru."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ\" () yang bermakna \"Saya telah membaca tiga buah buku berharga tentang linguistik.\"."
      },
      {
        "id": "q-ar-gram-20-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ\"",
        "targetSentence": "فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Di dalam aula terdapat lima orang mahasiswi berprestasi.",
          "Saya telah membaca tiga buah buku berharga tentang linguistik.",
          "Apakah di dalam aula terdapat lima orang mahasiswi berprestasi.?",
          "Sangat di dalam aula terdapat lima orang mahasiswi berprestasi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ\" diterjemahkan menjadi \"Di dalam aula terdapat lima orang mahasiswi berprestasi.\"."
      },
      {
        "id": "q-ar-gram-20-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "اشْتَرَيْتُ أَرْبَعَةَ أَقْلَامٍ جَدِيدَةٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10) untuk menyatakan makna: \"Saya telah membeli empat buah pena baru.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"اشْتَرَيْتُ أَرْبَعَةَ أَقْلَامٍ جَدِيدَةٍ\" yang mempraktikkan rumus Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur."
      },
      {
        "id": "q-ar-gram-20-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Saya telah membaca tiga buah buku berharga tentang linguistik.\"!",
        "options": [
          "قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ",
          "ثلاث كتب",
          "فِي الْقَاعَةِ خَمْسُ طَالِبَاتٍ مُتَفَوِّقَاتٍ [Variasi]",
          "اشْتَرَيْتُ أَرْبَعَةَ أَقْلَامٍ جَدِيدَةٍ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ\"."
      },
      {
        "id": "q-ar-gram-20-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kaidah Adad Ma'dud 1 sampai 10 (الأعداد من 1 إلى 10)\", respons manakah yang paling sesuai?",
        "options": [
          "قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ (Saya telah membaca tiga buah buku berharga tentang linguistik.)",
          "ثلاث كتب (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"قَرَأْتُ ثَلَاثَةَ كُتُبٍ قَيِّمَةٍ فِي اللُّغَةِ\" sesuai aturan Angka 3-10 Menentang Gender Ma'dud + Ma'dud Jamak Majrur."
      }
    ]
  },
  {
    "id": "ar-gram-21",
    "languageId": "arabic",
    "level": "Mustawa 3 (Menengah Nahwu-Sharaf)",
    "unit": 1,
    "title": "Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد)",
    "titleNative": "أوزان الفعل الثلاثي المزيد بحرف وحرفين وثلاثة",
    "patternFormula": "فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ",
    "summary": "Perubahan makna verba melalui penambahan huruf pada akar tiga konsonan (intensitas, kausatif, resiprokal, memohon).",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ — Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ — Profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "تَعَاوَنَ الْجَمِيعُ فِي إِنْجَازِ الْمَشْرُوعِ — Semua pihak saling bekerja sama dalam menuntaskan proyek tersebut."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-21-ex-1",
        "native": "اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ",
        "phonetic": "",
        "translationId": "Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada."
      },
      {
        "id": "ar-gram-21-ex-2",
        "native": "عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ",
        "phonetic": "",
        "translationId": "Profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya."
      },
      {
        "id": "ar-gram-21-ex-3",
        "native": "تَعَاوَنَ الْجَمِيعُ فِي إِنْجَازِ الْمَشْرُوعِ",
        "phonetic": "",
        "translationId": "Semua pihak saling bekerja sama dalam menuntaskan proyek tersebut."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "استخرجَ الطالبِ",
        "correct": "استخرجَ الطالبُ",
        "explanation": "Akar kata اسْتَفْعَلَ menunjukkan makna mencari atau menuntut hasil."
      },
      {
        "incorrect": "استخرجَ الطالبِ (kesalahan i'rab)",
        "correct": "استخرجَ الطالبُ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-21-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ\"?",
        "targetSentence": "اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.",
          "Bukan peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.",
          "Apakah peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.?",
          "Mungkin peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ\" () bermakna \"Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.\"."
      },
      {
        "id": "q-ar-gram-21-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ\"?",
        "targetSentence": "عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.",
          "Bukan profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.",
          "Apakah profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.?",
          "Mungkin profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ\" () bermakna \"Profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.\"."
      },
      {
        "id": "q-ar-gram-21-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"تَعَاوَنَ الْجَمِيعُ فِي إِنْجَازِ الْمَشْرُوعِ\"?",
        "targetSentence": "تَعَاوَنَ الْجَمِيعُ فِي إِنْجَازِ الْمَشْرُوعِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Semua pihak saling bekerja sama dalam menuntaskan proyek tersebut.",
          "Bukan semua pihak saling bekerja sama dalam menuntaskan proyek tersebut.",
          "Apakah semua pihak saling bekerja sama dalam menuntaskan proyek tersebut.?",
          "Mungkin semua pihak saling bekerja sama dalam menuntaskan proyek tersebut."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تَعَاوَنَ الْجَمِيعُ فِي إِنْجَازِ الْمَشْرُوعِ\" () bermakna \"Semua pihak saling bekerja sama dalam menuntaskan proyek tersebut.\"."
      },
      {
        "id": "q-ar-gram-21-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ (Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.)",
          "استخرجَ الطالبِ (Struktur keliru)",
          "اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ. Contoh baku: \"اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ\"."
      },
      {
        "id": "q-ar-gram-21-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد) merupakan pilar pentin...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-21-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ diterapkan untuk menj...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-21-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-21-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"استخرجَ الطالبِ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Akar kata اسْتَفْعَلَ menunjukkan makna mencari atau menuntut hasil.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"استخرجَ الطالبِ\" salah karena Akar kata اسْتَفْعَلَ menunjukkan makna mencari atau menuntut hasil.. Bentuk yang benar: \"استخرجَ الطالبُ\"."
      },
      {
        "id": "q-ar-gram-21-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"استخرجَ الطالبِ (kesalahan i'rab)\"?",
        "options": [
          "استخرجَ الطالبُ",
          "استخرجَ الطالبِ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "استخرجَ الطالبِ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"استخرجَ الطالبُ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-21-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد)\"?",
        "options": [
          "Penerapan kaidah Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد) sangat dihargai dalam tradi...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-21-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد)\" (فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ.\nFungsi utama: Perubahan makna verba melalui penambahan huruf pada akar tiga konsonan (intensitas, kausatif, resiprokal, memohon)..\nContoh penerapan: \"اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ\" () yang berarti \"Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Wazan-wazan",
          "Fi'il",
          "Tsulatsi",
          "Mazid"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ), menerangkan fungsi dasarnya (Perubahan makna verba melalui penambahan huruf pada akar tig...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-21-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"استخرجَ الطالبِ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"استخرجَ الطالبِ\" keliru karena: Akar kata اسْتَفْعَلَ menunjukkan makna mencari atau menuntut hasil..\nBentuk pembetulan yang tepat adalah: \"استخرجَ الطالبُ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "استخرجَ",
          "الطالبُ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Akar kata اسْتَفْعَلَ menunjukkan makna mencari atau menuntut hasil.) dan memberikan bentuk baku: استخرجَ الطالبُ."
      },
      {
        "id": "q-ar-gram-21-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-21-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.\".",
        "keywords": [
          "Profesor",
          "itu",
          "mengajarkan"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-21-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-21-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.\"",
        "scrambledWords": [
          "الْبَاحِثُ",
          "مِنَ",
          "اسْتَخْرَجَ",
          "النَّتَائِجَ",
          "الْبَيَانَاتِ"
        ],
        "correctOrder": [
          "اسْتَخْرَجَ",
          "الْبَاحِثُ",
          "النَّتَائِجَ",
          "مِنَ",
          "الْبَيَانَاتِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ\". Mengikuti kaidah فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ."
      },
      {
        "id": "q-ar-gram-21-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.\"",
        "scrambledWords": [
          "الْأُسْتَاذُ",
          "مَنَاهِجَ",
          "عَلَّمَ",
          "طُلَّابَهُ",
          "الْبَحْثِ"
        ],
        "correctOrder": [
          "عَلَّمَ",
          "الْأُسْتَاذُ",
          "طُلَّابَهُ",
          "مَنَاهِجَ",
          "الْبَحْثِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ\". Mengikuti kaidah فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ."
      },
      {
        "id": "q-ar-gram-21-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Semua pihak saling bekerja sama dalam menuntaskan proyek tersebut.\"",
        "scrambledWords": [
          "الْجَمِيعُ",
          "إِنْجَازِ",
          "تَعَاوَنَ",
          "فِي",
          "الْمَشْرُوعِ"
        ],
        "correctOrder": [
          "تَعَاوَنَ",
          "الْجَمِيعُ",
          "فِي",
          "إِنْجَازِ",
          "الْمَشْرُوعِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"تَعَاوَنَ الْجَمِيعُ فِي إِنْجَازِ الْمَشْرُوعِ\". Mengikuti kaidah فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ."
      },
      {
        "id": "q-ar-gram-21-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: استخرجَ الطالبُ\"",
        "scrambledWords": [
          "خرج",
          "لطا",
          "است",
          "َ ا",
          "لبُ"
        ],
        "correctOrder": [
          "است",
          "خرج",
          "َ ا",
          "لطا",
          "لبُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"استخرجَ الطالبُ\". Mengikuti kaidah فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ."
      },
      {
        "id": "q-ar-gram-21-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: استخرجَ الطالبُ\"",
        "scrambledWords": [
          "خرج",
          "لطا",
          "است",
          "َ ا",
          "لبُ"
        ],
        "correctOrder": [
          "است",
          "خرج",
          "َ ا",
          "لطا",
          "لبُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"استخرجَ الطالبُ\". Mengikuti kaidah فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ."
      },
      {
        "id": "q-ar-gram-21-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.",
          "Bukan peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.",
          "Profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.",
          "Semua pihak saling bekerja sama dalam menuntaskan proyek tersebut."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ\" () yang bermakna \"Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.\"."
      },
      {
        "id": "q-ar-gram-21-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ\"",
        "targetSentence": "عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.",
          "Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.",
          "Apakah profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.?",
          "Sangat profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ\" diterjemahkan menjadi \"Profesor itu mengajarkan metodologi penelitian kepada para mahasiswanya.\"."
      },
      {
        "id": "q-ar-gram-21-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "تَعَاوَنَ الْجَمِيعُ فِي إِنْجَازِ الْمَشْرُوعِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد) untuk menyatakan makna: \"Semua pihak saling bekerja sama dalam menuntaskan proyek tersebut.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"تَعَاوَنَ الْجَمِيعُ فِي إِنْجَازِ الْمَشْرُوعِ\" yang mempraktikkan rumus فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ."
      },
      {
        "id": "q-ar-gram-21-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.\"!",
        "options": [
          "اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ",
          "استخرجَ الطالبِ",
          "عَلَّمَ الْأُسْتَاذُ طُلَّابَهُ مَنَاهِجَ الْبَحْثِ [Variasi]",
          "تَعَاوَنَ الْجَمِيعُ فِي إِنْجَازِ الْمَشْرُوعِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ\"."
      },
      {
        "id": "q-ar-gram-21-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Wazan-wazan Fi'il Tsulatsi Mazid (أوزان الثلاثي المزيد)\", respons manakah yang paling sesuai?",
        "options": [
          "اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ (Peneliti itu mengekstraksi kesimpulan hasil dari data-data yang ada.)",
          "استخرجَ الطالبِ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"اسْتَخْرَجَ الْبَاحِثُ النَّتَائِجَ مِنَ الْبَيَانَاتِ\" sesuai aturan فَعَّلَ / فَاعَلَ / أَفْعَلَ / تَفَعَّلَ / تَفَاعَلَ / اسْتَفْعَلَ."
      }
    ]
  },
  {
    "id": "ar-gram-22",
    "languageId": "arabic",
    "level": "Mustawa 3 (Menengah Nahwu-Sharaf)",
    "unit": 2,
    "title": "Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan)",
    "titleNative": "الحال وأنواعها وشروط صاحب الحال",
    "patternFormula": "Fi'il + Fa'il + Hal (Isim Nakirah Manshub)",
    "summary": "Keterangan sifat yang menerangkan kondisi pelaku atau objek pada saat peristiwa berlangsung.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا — Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Fi'il + Fa'il + Hal (Isim Nakirah Manshub) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ — Kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "رَأَيْتُ الْأُسْتَاذَ مُبْتَسِمًا — Saya melihat sang profesor dalam keadaan tersenyum."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-22-ex-1",
        "native": "جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا",
        "phonetic": "",
        "translationId": "Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia."
      },
      {
        "id": "ar-gram-22-ex-2",
        "native": "اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ",
        "phonetic": "",
        "translationId": "Kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian."
      },
      {
        "id": "ar-gram-22-ex-3",
        "native": "رَأَيْتُ الْأُسْتَاذَ مُبْتَسِمًا",
        "phonetic": "",
        "translationId": "Saya melihat sang profesor dalam keadaan tersenyum."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "جاء الطالبُ مستعدٌ",
        "correct": "جاء الطالبُ مستعداً",
        "explanation": "Hal wajib berstatus isim nakirah manshub (مستعداً)."
      },
      {
        "incorrect": "جاء الطالبُ مستعدٌ (kesalahan i'rab)",
        "correct": "جاء الطالبُ مستعداً",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-22-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا\"?",
        "targetSentence": "جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.",
          "Bukan mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.",
          "Apakah mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.?",
          "Mungkin mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا\" () bermakna \"Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.\"."
      },
      {
        "id": "q-ar-gram-22-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ\"?",
        "targetSentence": "اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.",
          "Bukan kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.",
          "Apakah kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.?",
          "Mungkin kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ\" () bermakna \"Kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.\"."
      },
      {
        "id": "q-ar-gram-22-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"رَأَيْتُ الْأُسْتَاذَ مُبْتَسِمًا\"?",
        "targetSentence": "رَأَيْتُ الْأُسْتَاذَ مُبْتَسِمًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya melihat sang profesor dalam keadaan tersenyum.",
          "Bukan saya melihat sang profesor dalam keadaan tersenyum.",
          "Apakah saya melihat sang profesor dalam keadaan tersenyum.?",
          "Mungkin saya melihat sang profesor dalam keadaan tersenyum."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"رَأَيْتُ الْأُسْتَاذَ مُبْتَسِمًا\" () bermakna \"Saya melihat sang profesor dalam keadaan tersenyum.\"."
      },
      {
        "id": "q-ar-gram-22-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Fi'il + Fa'il + Hal (Isim Nakirah Manshub)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا (Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.)",
          "جاء الطالبُ مستعدٌ (Struktur keliru)",
          "جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Fi'il + Fa'il + Hal (Isim Nakirah Manshub). Contoh baku: \"جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا\"."
      },
      {
        "id": "q-ar-gram-22-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan) merupakan pilar penting ...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-22-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Fi'il + Fa'il + Hal (Isim Nakirah Manshub) diterapkan untuk menjaga ketepatan baris hara...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Fi'il + Fa'il + Hal (Isim Nakirah Manshub) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-22-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-22-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"جاء الطالبُ مستعدٌ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Hal wajib berstatus isim nakirah manshub (مستعداً).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"جاء الطالبُ مستعدٌ\" salah karena Hal wajib berstatus isim nakirah manshub (مستعداً).. Bentuk yang benar: \"جاء الطالبُ مستعداً\"."
      },
      {
        "id": "q-ar-gram-22-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"جاء الطالبُ مستعدٌ (kesalahan i'rab)\"?",
        "options": [
          "جاء الطالبُ مستعداً",
          "جاء الطالبُ مستعدٌ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "جاء الطالبُ مستعدٌ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"جاء الطالبُ مستعداً\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-22-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan)\"?",
        "options": [
          "Penerapan kaidah Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan) sangat dihargai dalam tradisi...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-22-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan)\" (Fi'il + Fa'il + Hal (Isim Nakirah Manshub)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Fi'il + Fa'il + Hal (Isim Nakirah Manshub).\nFungsi utama: Keterangan sifat yang menerangkan kondisi pelaku atau objek pada saat peristiwa berlangsung..\nContoh penerapan: \"جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا\" () yang berarti \"Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kaidah",
          "Hal",
          "الحال",
          "Keterangan"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Fi'il + Fa'il + Hal (Isim Nakirah Manshub)), menerangkan fungsi dasarnya (Keterangan sifat yang menerangkan kondisi pelaku atau objek ...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-22-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"جاء الطالبُ مستعدٌ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"جاء الطالبُ مستعدٌ\" keliru karena: Hal wajib berstatus isim nakirah manshub (مستعداً)..\nBentuk pembetulan yang tepat adalah: \"جاء الطالبُ مستعداً\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "جاء",
          "الطالبُ",
          "مستعداً"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Hal wajib berstatus isim nakirah manshub (مستعداً).) dan memberikan bentuk baku: جاء الطالبُ مستعداً."
      },
      {
        "id": "q-ar-gram-22-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Fi'il + Fa'il + Hal (Isim Nakirah Manshub) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-22-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Fi'il + Fa'il + Hal (Isim Nakirah Manshub)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.\".",
        "keywords": [
          "Kami",
          "menyimak",
          "kuliah"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-22-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-22-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.\"",
        "scrambledWords": [
          "الطَّالِبُ",
          "الِامْتِحَانِ",
          "جَاءَ",
          "إِلَى",
          "مُسْتَعِدًّا"
        ],
        "correctOrder": [
          "جَاءَ",
          "الطَّالِبُ",
          "إِلَى",
          "الِامْتِحَانِ",
          "مُسْتَعِدًّا"
        ],
        "explanation": "Urutan yang tepat adalah: \"جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا\". Mengikuti kaidah Fi'il + Fa'il + Hal (Isim Nakirah Manshub)."
      },
      {
        "id": "q-ar-gram-22-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.\"",
        "scrambledWords": [
          "إِلَى",
          "مُنْصِتِينَ",
          "اسْتَمَعْنَا",
          "الْمُحَاضَرَةِ"
        ],
        "correctOrder": [
          "اسْتَمَعْنَا",
          "إِلَى",
          "الْمُحَاضَرَةِ",
          "مُنْصِتِينَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ\". Mengikuti kaidah Fi'il + Fa'il + Hal (Isim Nakirah Manshub)."
      },
      {
        "id": "q-ar-gram-22-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya melihat sang profesor dalam keadaan tersenyum.\"",
        "scrambledWords": [
          "الْأُسْتَاذَ",
          "رَأَيْتُ",
          "مُبْتَسِمًا"
        ],
        "correctOrder": [
          "رَأَيْتُ",
          "الْأُسْتَاذَ",
          "مُبْتَسِمًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"رَأَيْتُ الْأُسْتَاذَ مُبْتَسِمًا\". Mengikuti kaidah Fi'il + Fa'il + Hal (Isim Nakirah Manshub)."
      },
      {
        "id": "q-ar-gram-22-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: جاء الطالبُ مستعداً\"",
        "scrambledWords": [
          "الطالبُ",
          "جاء",
          "مستعداً"
        ],
        "correctOrder": [
          "جاء",
          "الطالبُ",
          "مستعداً"
        ],
        "explanation": "Urutan yang tepat adalah: \"جاء الطالبُ مستعداً\". Mengikuti kaidah Fi'il + Fa'il + Hal (Isim Nakirah Manshub)."
      },
      {
        "id": "q-ar-gram-22-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: جاء الطالبُ مستعداً\"",
        "scrambledWords": [
          "الطالبُ",
          "جاء",
          "مستعداً"
        ],
        "correctOrder": [
          "جاء",
          "الطالبُ",
          "مستعداً"
        ],
        "explanation": "Urutan yang tepat adalah: \"جاء الطالبُ مستعداً\". Mengikuti kaidah Fi'il + Fa'il + Hal (Isim Nakirah Manshub)."
      },
      {
        "id": "q-ar-gram-22-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.",
          "Bukan mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.",
          "Kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.",
          "Saya melihat sang profesor dalam keadaan tersenyum."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا\" () yang bermakna \"Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.\"."
      },
      {
        "id": "q-ar-gram-22-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ\"",
        "targetSentence": "اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.",
          "Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.",
          "Apakah kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.?",
          "Sangat kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ\" diterjemahkan menjadi \"Kami menyimak kuliah umum tersebut dalam keadaan penuh perhatian.\"."
      },
      {
        "id": "q-ar-gram-22-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "رَأَيْتُ الْأُسْتَاذَ مُبْتَسِمًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan) untuk menyatakan makna: \"Saya melihat sang profesor dalam keadaan tersenyum.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"رَأَيْتُ الْأُسْتَاذَ مُبْتَسِمًا\" yang mempraktikkan rumus Fi'il + Fa'il + Hal (Isim Nakirah Manshub)."
      },
      {
        "id": "q-ar-gram-22-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.\"!",
        "options": [
          "جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا",
          "جاء الطالبُ مستعدٌ",
          "اسْتَمَعْنَا إِلَى الْمُحَاضَرَةِ مُنْصِتِينَ [Variasi]",
          "رَأَيْتُ الْأُسْتَاذَ مُبْتَسِمًا [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا\"."
      },
      {
        "id": "q-ar-gram-22-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kaidah Hal (الحال - Keterangan Keadaan Saat Tindakan)\", respons manakah yang paling sesuai?",
        "options": [
          "جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا (Mahasiswa itu datang ke ruang ujian dalam keadaan siap sedia.)",
          "جاء الطالبُ مستعدٌ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"جَاءَ الطَّالِبُ إِلَى الِامْتِحَانِ مُسْتَعِدًّا\" sesuai aturan Fi'il + Fa'il + Hal (Isim Nakirah Manshub)."
      }
    ]
  },
  {
    "id": "ar-gram-23",
    "languageId": "arabic",
    "level": "Mustawa 3 (Menengah Nahwu-Sharaf)",
    "unit": 3,
    "title": "Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna)",
    "titleNative": "التمييز الملفوظ والملحوظ وأحكامه",
    "patternFormula": "Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah",
    "summary": "Kata benda tak definit yang berfungsi memperjelas ketaksaan ukuran, timbangan, atau perbandingan sifat.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا — Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا — Di perpustakaan terdapat dua puluh unit komputer modern."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "اشْتَرَيْتُ كِيلُوغْرَامًا تَمْرًا — Saya telah membeli satu kilogram kurma."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-23-ex-1",
        "native": "حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا",
        "phonetic": "",
        "translationId": "Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya."
      },
      {
        "id": "ar-gram-23-ex-2",
        "native": "فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا",
        "phonetic": "",
        "translationId": "Di perpustakaan terdapat dua puluh unit komputer modern."
      },
      {
        "id": "ar-gram-23-ex-3",
        "native": "اشْتَرَيْتُ كِيلُوغْرَامًا تَمْرًا",
        "phonetic": "",
        "translationId": "Saya telah membeli satu kilogram kurma."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "حسن الطالبُ خلقٌ",
        "correct": "حسن الطالبُ خُلقاً",
        "explanation": "Tamyiz nisbah berstatus manshub dengan fathah tanwin."
      },
      {
        "incorrect": "حسن الطالبُ خلقٌ (kesalahan i'rab)",
        "correct": "حسن الطالبُ خُلقاً",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-23-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا\"?",
        "targetSentence": "حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.",
          "Bukan mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.",
          "Apakah mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.?",
          "Mungkin mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا\" () bermakna \"Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.\"."
      },
      {
        "id": "q-ar-gram-23-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا\"?",
        "targetSentence": "فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Di perpustakaan terdapat dua puluh unit komputer modern.",
          "Bukan di perpustakaan terdapat dua puluh unit komputer modern.",
          "Apakah di perpustakaan terdapat dua puluh unit komputer modern.?",
          "Mungkin di perpustakaan terdapat dua puluh unit komputer modern."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا\" () bermakna \"Di perpustakaan terdapat dua puluh unit komputer modern.\"."
      },
      {
        "id": "q-ar-gram-23-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"اشْتَرَيْتُ كِيلُوغْرَامًا تَمْرًا\"?",
        "targetSentence": "اشْتَرَيْتُ كِيلُوغْرَامًا تَمْرًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah membeli satu kilogram kurma.",
          "Bukan saya telah membeli satu kilogram kurma.",
          "Apakah saya telah membeli satu kilogram kurma.?",
          "Mungkin saya telah membeli satu kilogram kurma."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اشْتَرَيْتُ كِيلُوغْرَامًا تَمْرًا\" () bermakna \"Saya telah membeli satu kilogram kurma.\"."
      },
      {
        "id": "q-ar-gram-23-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا (Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.)",
          "حسن الطالبُ خلقٌ (Struktur keliru)",
          "حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah. Contoh baku: \"حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا\"."
      },
      {
        "id": "q-ar-gram-23-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna) merupakan pilar penting dal...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-23-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah diterapkan untuk menjaga ketepat...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-23-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-23-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"حسن الطالبُ خلقٌ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Tamyiz nisbah berstatus manshub dengan fathah tanwin.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"حسن الطالبُ خلقٌ\" salah karena Tamyiz nisbah berstatus manshub dengan fathah tanwin.. Bentuk yang benar: \"حسن الطالبُ خُلقاً\"."
      },
      {
        "id": "q-ar-gram-23-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"حسن الطالبُ خلقٌ (kesalahan i'rab)\"?",
        "options": [
          "حسن الطالبُ خُلقاً",
          "حسن الطالبُ خلقٌ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "حسن الطالبُ خلقٌ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"حسن الطالبُ خُلقاً\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-23-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna)\"?",
        "options": [
          "Penerapan kaidah Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna) sangat dihargai dalam tradisi il...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-23-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna)\" (Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah.\nFungsi utama: Kata benda tak definit yang berfungsi memperjelas ketaksaan ukuran, timbangan, atau perbandingan sifat..\nContoh penerapan: \"حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا\" () yang berarti \"Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kaidah",
          "Tamyiz",
          "التمييز",
          "Penjelas"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah), menerangkan fungsi dasarnya (Kata benda tak definit yang berfungsi memperjelas ketaksaan ...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-23-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"حسن الطالبُ خلقٌ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"حسن الطالبُ خلقٌ\" keliru karena: Tamyiz nisbah berstatus manshub dengan fathah tanwin..\nBentuk pembetulan yang tepat adalah: \"حسن الطالبُ خُلقاً\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "حسن",
          "الطالبُ",
          "خُلقاً"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Tamyiz nisbah berstatus manshub dengan fathah tanwin.) dan memberikan bentuk baku: حسن الطالبُ خُلقاً."
      },
      {
        "id": "q-ar-gram-23-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-23-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Di perpustakaan terdapat dua puluh unit komputer modern.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Di perpustakaan terdapat dua puluh unit komputer modern.\".",
        "keywords": [
          "perpustakaan",
          "terdapat",
          "dua"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-23-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-23-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.\"",
        "scrambledWords": [
          "الطَّالِبُ",
          "وَأَدَبًا",
          "حَسُنَ",
          "خُلُقًا"
        ],
        "correctOrder": [
          "حَسُنَ",
          "الطَّالِبُ",
          "خُلُقًا",
          "وَأَدَبًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا\". Mengikuti kaidah Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah."
      },
      {
        "id": "q-ar-gram-23-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Di perpustakaan terdapat dua puluh unit komputer modern.\"",
        "scrambledWords": [
          "الْمَكْتَبَةِ",
          "حَاسُوبًا",
          "فِي",
          "عِشْرُونَ",
          "حَدِيثًا"
        ],
        "correctOrder": [
          "فِي",
          "الْمَكْتَبَةِ",
          "عِشْرُونَ",
          "حَاسُوبًا",
          "حَدِيثًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا\". Mengikuti kaidah Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah."
      },
      {
        "id": "q-ar-gram-23-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya telah membeli satu kilogram kurma.\"",
        "scrambledWords": [
          "كِيلُوغْرَامًا",
          "اشْتَرَيْتُ",
          "تَمْرًا"
        ],
        "correctOrder": [
          "اشْتَرَيْتُ",
          "كِيلُوغْرَامًا",
          "تَمْرًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"اشْتَرَيْتُ كِيلُوغْرَامًا تَمْرًا\". Mengikuti kaidah Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah."
      },
      {
        "id": "q-ar-gram-23-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: حسن الطالبُ خُلقاً\"",
        "scrambledWords": [
          "الطالبُ",
          "حسن",
          "خُلقاً"
        ],
        "correctOrder": [
          "حسن",
          "الطالبُ",
          "خُلقاً"
        ],
        "explanation": "Urutan yang tepat adalah: \"حسن الطالبُ خُلقاً\". Mengikuti kaidah Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah."
      },
      {
        "id": "q-ar-gram-23-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: حسن الطالبُ خُلقاً\"",
        "scrambledWords": [
          "الطالبُ",
          "حسن",
          "خُلقاً"
        ],
        "correctOrder": [
          "حسن",
          "الطالبُ",
          "خُلقاً"
        ],
        "explanation": "Urutan yang tepat adalah: \"حسن الطالبُ خُلقاً\". Mengikuti kaidah Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah."
      },
      {
        "id": "q-ar-gram-23-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.",
          "Bukan mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.",
          "Di perpustakaan terdapat dua puluh unit komputer modern.",
          "Saya telah membeli satu kilogram kurma."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا\" () yang bermakna \"Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.\"."
      },
      {
        "id": "q-ar-gram-23-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا\"",
        "targetSentence": "فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Di perpustakaan terdapat dua puluh unit komputer modern.",
          "Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.",
          "Apakah di perpustakaan terdapat dua puluh unit komputer modern.?",
          "Sangat di perpustakaan terdapat dua puluh unit komputer modern."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا\" diterjemahkan menjadi \"Di perpustakaan terdapat dua puluh unit komputer modern.\"."
      },
      {
        "id": "q-ar-gram-23-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "اشْتَرَيْتُ كِيلُوغْرَامًا تَمْرًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna) untuk menyatakan makna: \"Saya telah membeli satu kilogram kurma.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"اشْتَرَيْتُ كِيلُوغْرَامًا تَمْرًا\" yang mempraktikkan rumus Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah."
      },
      {
        "id": "q-ar-gram-23-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.\"!",
        "options": [
          "حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا",
          "حسن الطالبُ خلقٌ",
          "فِي الْمَكْتَبَةِ عِشْرُونَ حَاسُوبًا حَدِيثًا [Variasi]",
          "اشْتَرَيْتُ كِيلُوغْرَامًا تَمْرًا [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا\"."
      },
      {
        "id": "q-ar-gram-23-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kaidah Tamyiz (التمييز - Penjelas Ketaksaan Makna)\", respons manakah yang paling sesuai?",
        "options": [
          "حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا (Mahasiswa itu sangat baik dari segi akhlak dan budi pekertinya.)",
          "حسن الطالبُ خلقٌ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"حَسُنَ الطَّالِبُ خُلُقًا وَأَدَبًا\" sesuai aturan Isim Nakirah Manshub Penjelas Keraguan Dzat atau Nisbah."
      }
    ]
  },
  {
    "id": "ar-gram-24",
    "languageId": "arabic",
    "level": "Mustawa 3 (Menengah Nahwu-Sharaf)",
    "unit": 4,
    "title": "Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى)",
    "titleNative": "أسلوب الاستثناء التام والمفرغ",
    "patternFormula": "Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna",
    "summary": "Pola pengecualian dalam kalimat positif sempurna, negatif, atau kalimat istitsna' mufarragh.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا — Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "مَا حَضَرَ إِلَّا الْأُسْتَاذُ — Tidak ada yang hadir kecuali sang profesor."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "فَهِمْتُ كُلَّ الْفُصُولِ غَيْرَ فَصْلٍ وَاحِدٍ — Saya memahami seluruh bab kecuali satu bab saja."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-24-ex-1",
        "native": "نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا",
        "phonetic": "",
        "translationId": "Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa."
      },
      {
        "id": "ar-gram-24-ex-2",
        "native": "مَا حَضَرَ إِلَّا الْأُسْتَاذُ",
        "phonetic": "",
        "translationId": "Tidak ada yang hadir kecuali sang profesor."
      },
      {
        "id": "ar-gram-24-ex-3",
        "native": "فَهِمْتُ كُلَّ الْفُصُولِ غَيْرَ فَصْلٍ وَاحِدٍ",
        "phonetic": "",
        "translationId": "Saya memahami seluruh bab kecuali satu bab saja."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "إلا طالبٌ (pada kalam mutsbath)",
        "correct": "إلا طالباً",
        "explanation": "Dalam kalimat sempurna positif, mustatsna bi-illa wajib manshub."
      },
      {
        "incorrect": "إلا طالبٌ (pada kalam mutsbath) (kesalahan i'rab)",
        "correct": "إلا طالباً",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-24-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا\"?",
        "targetSentence": "نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.",
          "Bukan seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.",
          "Apakah seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.?",
          "Mungkin seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا\" () bermakna \"Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.\"."
      },
      {
        "id": "q-ar-gram-24-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"مَا حَضَرَ إِلَّا الْأُسْتَاذُ\"?",
        "targetSentence": "مَا حَضَرَ إِلَّا الْأُسْتَاذُ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Tidak ada yang hadir kecuali sang profesor.",
          "Bukan tidak ada yang hadir kecuali sang profesor.",
          "Apakah tidak ada yang hadir kecuali sang profesor.?",
          "Mungkin tidak ada yang hadir kecuali sang profesor."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"مَا حَضَرَ إِلَّا الْأُسْتَاذُ\" () bermakna \"Tidak ada yang hadir kecuali sang profesor.\"."
      },
      {
        "id": "q-ar-gram-24-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"فَهِمْتُ كُلَّ الْفُصُولِ غَيْرَ فَصْلٍ وَاحِدٍ\"?",
        "targetSentence": "فَهِمْتُ كُلَّ الْفُصُولِ غَيْرَ فَصْلٍ وَاحِدٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya memahami seluruh bab kecuali satu bab saja.",
          "Bukan saya memahami seluruh bab kecuali satu bab saja.",
          "Apakah saya memahami seluruh bab kecuali satu bab saja.?",
          "Mungkin saya memahami seluruh bab kecuali satu bab saja."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"فَهِمْتُ كُلَّ الْفُصُولِ غَيْرَ فَصْلٍ وَاحِدٍ\" () bermakna \"Saya memahami seluruh bab kecuali satu bab saja.\"."
      },
      {
        "id": "q-ar-gram-24-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا (Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.)",
          "إلا طالبٌ (pada kalam mutsbath) (Struktur keliru)",
          "نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna. Contoh baku: \"نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا\"."
      },
      {
        "id": "q-ar-gram-24-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى) merupakan pilar penting ...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-24-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna diterapkan untuk menjaga ketepatan b...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-24-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-24-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"إلا طالبٌ (pada kalam mutsbath)\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Dalam kalimat sempurna positif, mustatsna bi-illa wajib manshub.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"إلا طالبٌ (pada kalam mutsbath)\" salah karena Dalam kalimat sempurna positif, mustatsna bi-illa wajib manshub.. Bentuk yang benar: \"إلا طالباً\"."
      },
      {
        "id": "q-ar-gram-24-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"إلا طالبٌ (pada kalam mutsbath) (kesalahan i'rab)\"?",
        "options": [
          "إلا طالباً",
          "إلا طالبٌ (pada kalam mutsbath) (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "إلا طالبٌ (pada kalam mutsbath) (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"إلا طالباً\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-24-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى)\"?",
        "options": [
          "Penerapan kaidah Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى) sangat dihargai dalam tradisi...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-24-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى)\" (Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna.\nFungsi utama: Pola pengecualian dalam kalimat positif sempurna, negatif, atau kalimat istitsna' mufarragh..\nContoh penerapan: \"نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا\" () yang berarti \"Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kaidah",
          "Mustatsna",
          "bi-Illa",
          "الاستثناء"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna), menerangkan fungsi dasarnya (Pola pengecualian dalam kalimat positif sempurna, negatif, a...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-24-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"إلا طالبٌ (pada kalam mutsbath)\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"إلا طالبٌ (pada kalam mutsbath)\" keliru karena: Dalam kalimat sempurna positif, mustatsna bi-illa wajib manshub..\nBentuk pembetulan yang tepat adalah: \"إلا طالباً\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "إلا",
          "طالباً"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Dalam kalimat sempurna positif, mustatsna bi-illa wajib manshub.) dan memberikan bentuk baku: إلا طالباً."
      },
      {
        "id": "q-ar-gram-24-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-24-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Tidak ada yang hadir kecuali sang profesor.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"مَا حَضَرَ إِلَّا الْأُسْتَاذُ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Tidak ada yang hadir kecuali sang profesor.\".",
        "keywords": [
          "Tidak",
          "ada",
          "yang"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"مَا حَضَرَ إِلَّا الْأُسْتَاذُ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-24-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-24-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.\"",
        "scrambledWords": [
          "الطُّلَّابُ",
          "إِلَّا",
          "وَاحِدًا",
          "نَجَحَ",
          "كُلُّهُمْ",
          "طَالِبًا"
        ],
        "correctOrder": [
          "نَجَحَ",
          "الطُّلَّابُ",
          "كُلُّهُمْ",
          "إِلَّا",
          "طَالِبًا",
          "وَاحِدًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا\". Mengikuti kaidah Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna."
      },
      {
        "id": "q-ar-gram-24-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Tidak ada yang hadir kecuali sang profesor.\"",
        "scrambledWords": [
          "حَضَرَ",
          "الْأُسْتَاذُ",
          "مَا",
          "إِلَّا"
        ],
        "correctOrder": [
          "مَا",
          "حَضَرَ",
          "إِلَّا",
          "الْأُسْتَاذُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"مَا حَضَرَ إِلَّا الْأُسْتَاذُ\". Mengikuti kaidah Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna."
      },
      {
        "id": "q-ar-gram-24-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya memahami seluruh bab kecuali satu bab saja.\"",
        "scrambledWords": [
          "كُلَّ",
          "غَيْرَ",
          "وَاحِدٍ",
          "فَهِمْتُ",
          "الْفُصُولِ",
          "فَصْلٍ"
        ],
        "correctOrder": [
          "فَهِمْتُ",
          "كُلَّ",
          "الْفُصُولِ",
          "غَيْرَ",
          "فَصْلٍ",
          "وَاحِدٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"فَهِمْتُ كُلَّ الْفُصُولِ غَيْرَ فَصْلٍ وَاحِدٍ\". Mengikuti kaidah Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna."
      },
      {
        "id": "q-ar-gram-24-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: إلا طالباً\"",
        "scrambledWords": [
          "ا ",
          "لب",
          "إل",
          "طا",
          "اً"
        ],
        "correctOrder": [
          "إل",
          "ا ",
          "طا",
          "لب",
          "اً"
        ],
        "explanation": "Urutan yang tepat adalah: \"إلا طالباً\". Mengikuti kaidah Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna."
      },
      {
        "id": "q-ar-gram-24-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: إلا طالباً\"",
        "scrambledWords": [
          "ا ",
          "لب",
          "إل",
          "طا",
          "اً"
        ],
        "correctOrder": [
          "إل",
          "ا ",
          "طا",
          "لب",
          "اً"
        ],
        "explanation": "Urutan yang tepat adalah: \"إلا طالباً\". Mengikuti kaidah Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna."
      },
      {
        "id": "q-ar-gram-24-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.",
          "Bukan seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.",
          "Tidak ada yang hadir kecuali sang profesor.",
          "Saya memahami seluruh bab kecuali satu bab saja."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا\" () yang bermakna \"Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.\"."
      },
      {
        "id": "q-ar-gram-24-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"مَا حَضَرَ إِلَّا الْأُسْتَاذُ\"",
        "targetSentence": "مَا حَضَرَ إِلَّا الْأُسْتَاذُ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Tidak ada yang hadir kecuali sang profesor.",
          "Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.",
          "Apakah tidak ada yang hadir kecuali sang profesor.?",
          "Sangat tidak ada yang hadir kecuali sang profesor."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"مَا حَضَرَ إِلَّا الْأُسْتَاذُ\" diterjemahkan menjadi \"Tidak ada yang hadir kecuali sang profesor.\"."
      },
      {
        "id": "q-ar-gram-24-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "فَهِمْتُ كُلَّ الْفُصُولِ غَيْرَ فَصْلٍ وَاحِدٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى) untuk menyatakan makna: \"Saya memahami seluruh bab kecuali satu bab saja.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"فَهِمْتُ كُلَّ الْفُصُولِ غَيْرَ فَصْلٍ وَاحِدٍ\" yang mempraktikkan rumus Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna."
      },
      {
        "id": "q-ar-gram-24-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.\"!",
        "options": [
          "نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا",
          "إلا طالبٌ (pada kalam mutsbath)",
          "مَا حَضَرَ إِلَّا الْأُسْتَاذُ [Variasi]",
          "فَهِمْتُ كُلَّ الْفُصُولِ غَيْرَ فَصْلٍ وَاحِدٍ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا\"."
      },
      {
        "id": "q-ar-gram-24-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kaidah Mustatsna bi-Illa (الاستثناء بـ إلا وغير وسوى)\", respons manakah yang paling sesuai?",
        "options": [
          "نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا (Seluruh mahasiswa berhasil lulus kecuali satu orang mahasiswa.)",
          "إلا طالبٌ (pada kalam mutsbath) (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"نَجَحَ الطُّلَّابُ كُلُّهُمْ إِلَّا طَالِبًا وَاحِدًا\" sesuai aturan Mustatsna Minhu + Huruf Istitsna' (إلا) + Mustatsna."
      }
    ]
  },
  {
    "id": "ar-gram-25",
    "languageId": "arabic",
    "level": "Mustawa 3 (Menengah Nahwu-Sharaf)",
    "unit": 5,
    "title": "Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل)",
    "titleNative": "بناء الفعل للمجهول وإعراب نائب الفاعل",
    "patternFormula": "Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')",
    "summary": "Membentuk kalimat pasif dengan mengubah vokal kata kerja dan menjadikan objek langsung menduduki posisi subjek.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ — Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu') diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ — Perkuliahan-perkuliahan diselenggarakan di dalam aula ini."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "شُرِحَ الدَّرْسُ شَرْحًا وَافِيًا — Pelajaran tersebut telah dijelaskan dengan penjelasan yang menyeluruh."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-25-ex-1",
        "native": "كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ",
        "phonetic": "",
        "translationId": "Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi."
      },
      {
        "id": "ar-gram-25-ex-2",
        "native": "تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ",
        "phonetic": "",
        "translationId": "Perkuliahan-perkuliahan diselenggarakan di dalam aula ini."
      },
      {
        "id": "ar-gram-25-ex-3",
        "native": "شُرِحَ الدَّرْسُ شَرْحًا وَافِيًا",
        "phonetic": "",
        "translationId": "Pelajaran tersebut telah dijelaskan dengan penjelasan yang menyeluruh."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "كُتِبَ الرسالةُ",
        "correct": "كُتِبَتِ الرسالةُ",
        "explanation": "Jika naibul fa'il feminin, fi'il pasif wajib memakai ta' ta'nits."
      },
      {
        "incorrect": "كُتِبَ الرسالةُ (kesalahan i'rab)",
        "correct": "كُتِبَتِ الرسالةُ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-25-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ\"?",
        "targetSentence": "كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.",
          "Bukan disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.",
          "Apakah disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.?",
          "Mungkin disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ\" () bermakna \"Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.\"."
      },
      {
        "id": "q-ar-gram-25-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ\"?",
        "targetSentence": "تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Perkuliahan-perkuliahan diselenggarakan di dalam aula ini.",
          "Bukan perkuliahan-perkuliahan diselenggarakan di dalam aula ini.",
          "Apakah perkuliahan-perkuliahan diselenggarakan di dalam aula ini.?",
          "Mungkin perkuliahan-perkuliahan diselenggarakan di dalam aula ini."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ\" () bermakna \"Perkuliahan-perkuliahan diselenggarakan di dalam aula ini.\"."
      },
      {
        "id": "q-ar-gram-25-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"شُرِحَ الدَّرْسُ شَرْحًا وَافِيًا\"?",
        "targetSentence": "شُرِحَ الدَّرْسُ شَرْحًا وَافِيًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Pelajaran tersebut telah dijelaskan dengan penjelasan yang menyeluruh.",
          "Bukan pelajaran tersebut telah dijelaskan dengan penjelasan yang menyeluruh.",
          "Apakah pelajaran tersebut telah dijelaskan dengan penjelasan yang menyeluruh.?",
          "Mungkin pelajaran tersebut telah dijelaskan dengan penjelasan yang menyeluruh."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"شُرِحَ الدَّرْسُ شَرْحًا وَافِيًا\" () bermakna \"Pelajaran tersebut telah dijelaskan dengan penjelasan yang menyeluruh.\"."
      },
      {
        "id": "q-ar-gram-25-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ (Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.)",
          "كُتِبَ الرسالةُ (Struktur keliru)",
          "كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu'). Contoh baku: \"كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ\"."
      },
      {
        "id": "q-ar-gram-25-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل) merupakan pilar pen...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-25-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu') diterapkan un...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu') diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-25-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-25-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"كُتِبَ الرسالةُ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Jika naibul fa'il feminin, fi'il pasif wajib memakai ta' ta'nits.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"كُتِبَ الرسالةُ\" salah karena Jika naibul fa'il feminin, fi'il pasif wajib memakai ta' ta'nits.. Bentuk yang benar: \"كُتِبَتِ الرسالةُ\"."
      },
      {
        "id": "q-ar-gram-25-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"كُتِبَ الرسالةُ (kesalahan i'rab)\"?",
        "options": [
          "كُتِبَتِ الرسالةُ",
          "كُتِبَ الرسالةُ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "كُتِبَ الرسالةُ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"كُتِبَتِ الرسالةُ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-25-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل)\"?",
        "options": [
          "Penerapan kaidah Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل) sangat dihargai dalam tr...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-25-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل)\" (Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu').\nFungsi utama: Membentuk kalimat pasif dengan mengubah vokal kata kerja dan menjadikan objek langsung menduduki posisi subjek..\nContoh penerapan: \"كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ\" () yang berarti \"Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Fi'il",
          "Mabni",
          "lil-Majhul",
          "dan"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')), menerangkan fungsi dasarnya (Membentuk kalimat pasif dengan mengubah vokal kata kerja dan...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-25-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"كُتِبَ الرسالةُ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"كُتِبَ الرسالةُ\" keliru karena: Jika naibul fa'il feminin, fi'il pasif wajib memakai ta' ta'nits..\nBentuk pembetulan yang tepat adalah: \"كُتِبَتِ الرسالةُ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "كُتِبَتِ",
          "الرسالةُ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Jika naibul fa'il feminin, fi'il pasif wajib memakai ta' ta'nits.) dan memberikan bentuk baku: كُتِبَتِ الرسالةُ."
      },
      {
        "id": "q-ar-gram-25-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu') diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-25-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Perkuliahan-perkuliahan diselenggarakan di dalam aula ini.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Perkuliahan-perkuliahan diselenggarakan di dalam aula ini.\".",
        "keywords": [
          "Perkuliahan-perkuliahan",
          "diselenggarakan",
          "dalam"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-25-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-25-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.\"",
        "scrambledWords": [
          "الرِّسَالَةُ",
          "بِعِنَايَةٍ",
          "كُتِبَتِ",
          "الْجَامِعِيَّةُ",
          "فَائِقَةٍ"
        ],
        "correctOrder": [
          "كُتِبَتِ",
          "الرِّسَالَةُ",
          "الْجَامِعِيَّةُ",
          "بِعِنَايَةٍ",
          "فَائِقَةٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ\". Mengikuti kaidah Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')."
      },
      {
        "id": "q-ar-gram-25-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Perkuliahan-perkuliahan diselenggarakan di dalam aula ini.\"",
        "scrambledWords": [
          "الْمُحَاضَرَاتُ",
          "هَذِهِ",
          "تُعْقَدُ",
          "فِي",
          "الْقَاعَةِ"
        ],
        "correctOrder": [
          "تُعْقَدُ",
          "الْمُحَاضَرَاتُ",
          "فِي",
          "هَذِهِ",
          "الْقَاعَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ\". Mengikuti kaidah Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')."
      },
      {
        "id": "q-ar-gram-25-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Pelajaran tersebut telah dijelaskan dengan penjelasan yang menyeluruh.\"",
        "scrambledWords": [
          "الدَّرْسُ",
          "وَافِيًا",
          "شُرِحَ",
          "شَرْحًا"
        ],
        "correctOrder": [
          "شُرِحَ",
          "الدَّرْسُ",
          "شَرْحًا",
          "وَافِيًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"شُرِحَ الدَّرْسُ شَرْحًا وَافِيًا\". Mengikuti kaidah Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')."
      },
      {
        "id": "q-ar-gram-25-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: كُتِبَتِ الرسالةُ\"",
        "scrambledWords": [
          "بَتِ",
          "سالة",
          "كُتِ",
          " الر",
          "ُ"
        ],
        "correctOrder": [
          "كُتِ",
          "بَتِ",
          " الر",
          "سالة",
          "ُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"كُتِبَتِ الرسالةُ\". Mengikuti kaidah Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')."
      },
      {
        "id": "q-ar-gram-25-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: كُتِبَتِ الرسالةُ\"",
        "scrambledWords": [
          "بَتِ",
          "سالة",
          "كُتِ",
          " الر",
          "ُ"
        ],
        "correctOrder": [
          "كُتِ",
          "بَتِ",
          " الر",
          "سالة",
          "ُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"كُتِبَتِ الرسالةُ\". Mengikuti kaidah Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')."
      },
      {
        "id": "q-ar-gram-25-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.",
          "Bukan disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.",
          "Perkuliahan-perkuliahan diselenggarakan di dalam aula ini.",
          "Pelajaran tersebut telah dijelaskan dengan penjelasan yang menyeluruh."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ\" () yang bermakna \"Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.\"."
      },
      {
        "id": "q-ar-gram-25-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ\"",
        "targetSentence": "تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Perkuliahan-perkuliahan diselenggarakan di dalam aula ini.",
          "Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.",
          "Apakah perkuliahan-perkuliahan diselenggarakan di dalam aula ini.?",
          "Sangat perkuliahan-perkuliahan diselenggarakan di dalam aula ini."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ\" diterjemahkan menjadi \"Perkuliahan-perkuliahan diselenggarakan di dalam aula ini.\"."
      },
      {
        "id": "q-ar-gram-25-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "شُرِحَ الدَّرْسُ شَرْحًا وَافِيًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل) untuk menyatakan makna: \"Pelajaran tersebut telah dijelaskan dengan penjelasan yang menyeluruh.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"شُرِحَ الدَّرْسُ شَرْحًا وَافِيًا\" yang mempraktikkan rumus Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')."
      },
      {
        "id": "q-ar-gram-25-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.\"!",
        "options": [
          "كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ",
          "كُتِبَ الرسالةُ",
          "تُعْقَدُ الْمُحَاضَرَاتُ فِي هَذِهِ الْقَاعَةِ [Variasi]",
          "شُرِحَ الدَّرْسُ شَرْحًا وَافِيًا [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ\"."
      },
      {
        "id": "q-ar-gram-25-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Fi'il Mabni lil-Majhul dan Naibul Fa'il (النائب عن الفاعل)\", respons manakah yang paling sesuai?",
        "options": [
          "كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ (Disertasi universitas itu telah ditulis dengan ketelitian yang sangat tinggi.)",
          "كُتِبَ الرسالةُ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"كُتِبَتِ الرِّسَالَةُ الْجَامِعِيَّةُ بِعِنَايَةٍ فَائِقَةٍ\" sesuai aturan Dhammu awwalihi wa kasru ma qabla akhirihi (Madhi) + Naibul Fa'il (Marfu')."
      }
    ]
  },
  {
    "id": "ar-gram-26",
    "languageId": "arabic",
    "level": "Mustawa 3 (Menengah Nahwu-Sharaf)",
    "unit": 6,
    "title": "Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول)",
    "titleNative": "صياغة اسم الفاعل واسم المفعول من الثلاثي وغيره",
    "patternFormula": "فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل",
    "summary": "Membentuk nomina partisip aktif (pelaku/agen) dan partisip pasif (yang dikenai tindakan).",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ — Peneliti itu adalah penulis artikel ilmiah ini."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ — Topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "الْمُعَلِّمُ مُقَدَّرٌ مِنْ طُلَّابِهِ — Pengajar itu sangat dihormati oleh para mahasiswanya."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-26-ex-1",
        "native": "الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ",
        "phonetic": "",
        "translationId": "Peneliti itu adalah penulis artikel ilmiah ini."
      },
      {
        "id": "ar-gram-26-ex-2",
        "native": "هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ",
        "phonetic": "",
        "translationId": "Topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi."
      },
      {
        "id": "ar-gram-26-ex-3",
        "native": "الْمُعَلِّمُ مُقَدَّرٌ مِنْ طُلَّابِهِ",
        "phonetic": "",
        "translationId": "Pengajar itu sangat dihormati oleh para mahasiswanya."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "هو كاتبَ",
        "correct": "هو كاتبٌ",
        "explanation": "Isim fa'il berfungsi sebagai khabar marfu' berharakat dhammah."
      },
      {
        "incorrect": "هو كاتبَ (kesalahan i'rab)",
        "correct": "هو كاتبٌ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-26-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ\"?",
        "targetSentence": "الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Peneliti itu adalah penulis artikel ilmiah ini.",
          "Bukan peneliti itu adalah penulis artikel ilmiah ini.",
          "Apakah peneliti itu adalah penulis artikel ilmiah ini.?",
          "Mungkin peneliti itu adalah penulis artikel ilmiah ini."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ\" () bermakna \"Peneliti itu adalah penulis artikel ilmiah ini.\"."
      },
      {
        "id": "q-ar-gram-26-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ\"?",
        "targetSentence": "هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.",
          "Bukan topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.",
          "Apakah topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.?",
          "Mungkin topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ\" () bermakna \"Topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.\"."
      },
      {
        "id": "q-ar-gram-26-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْمُعَلِّمُ مُقَدَّرٌ مِنْ طُلَّابِهِ\"?",
        "targetSentence": "الْمُعَلِّمُ مُقَدَّرٌ مِنْ طُلَّابِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Pengajar itu sangat dihormati oleh para mahasiswanya.",
          "Bukan pengajar itu sangat dihormati oleh para mahasiswanya.",
          "Apakah pengajar itu sangat dihormati oleh para mahasiswanya.?",
          "Mungkin pengajar itu sangat dihormati oleh para mahasiswanya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْمُعَلِّمُ مُقَدَّرٌ مِنْ طُلَّابِهِ\" () bermakna \"Pengajar itu sangat dihormati oleh para mahasiswanya.\"."
      },
      {
        "id": "q-ar-gram-26-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ (Peneliti itu adalah penulis artikel ilmiah ini.)",
          "هو كاتبَ (Struktur keliru)",
          "الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل. Contoh baku: \"الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ\"."
      },
      {
        "id": "q-ar-gram-26-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول) merupakan pilar penting d...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-26-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل diterapkan untuk menjaga ketepatan baris harakat...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-26-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-26-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"هو كاتبَ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Isim fa'il berfungsi sebagai khabar marfu' berharakat dhammah.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هو كاتبَ\" salah karena Isim fa'il berfungsi sebagai khabar marfu' berharakat dhammah.. Bentuk yang benar: \"هو كاتبٌ\"."
      },
      {
        "id": "q-ar-gram-26-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"هو كاتبَ (kesalahan i'rab)\"?",
        "options": [
          "هو كاتبٌ",
          "هو كاتبَ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "هو كاتبَ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"هو كاتبٌ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-26-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول)\"?",
        "options": [
          "Penerapan kaidah Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول) sangat dihargai dalam tradisi ...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-26-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول)\" (فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل.\nFungsi utama: Membentuk nomina partisip aktif (pelaku/agen) dan partisip pasif (yang dikenai tindakan)..\nContoh penerapan: \"الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ\" () yang berarti \"Peneliti itu adalah penulis artikel ilmiah ini.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Isim",
          "Fa'il",
          "dan",
          "Isim"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل), menerangkan fungsi dasarnya (Membentuk nomina partisip aktif (pelaku/agen) dan partisip p...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-26-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"هو كاتبَ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"هو كاتبَ\" keliru karena: Isim fa'il berfungsi sebagai khabar marfu' berharakat dhammah..\nBentuk pembetulan yang tepat adalah: \"هو كاتبٌ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "هو",
          "كاتبٌ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Isim fa'il berfungsi sebagai khabar marfu' berharakat dhammah.) dan memberikan bentuk baku: هو كاتبٌ."
      },
      {
        "id": "q-ar-gram-26-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-26-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.\".",
        "keywords": [
          "Topik",
          "bahasan",
          "ini"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-26-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-26-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Peneliti itu adalah penulis artikel ilmiah ini.\"",
        "scrambledWords": [
          "كَاتِبٌ",
          "الْمَقَالِ",
          "الْبَاحِثُ",
          "لِهَذَا",
          "الْعِلْمِيِّ"
        ],
        "correctOrder": [
          "الْبَاحِثُ",
          "كَاتِبٌ",
          "لِهَذَا",
          "الْمَقَالِ",
          "الْعِلْمِيِّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ\". Mengikuti kaidah فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل."
      },
      {
        "id": "q-ar-gram-26-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.\"",
        "scrambledWords": [
          "الْمَوْضُوعُ",
          "بِدِقَّةٍ",
          "الْكُتُبِ",
          "هَذَا",
          "مَدْرُوسٌ",
          "فِي"
        ],
        "correctOrder": [
          "هَذَا",
          "الْمَوْضُوعُ",
          "مَدْرُوسٌ",
          "بِدِقَّةٍ",
          "فِي",
          "الْكُتُبِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ\". Mengikuti kaidah فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل."
      },
      {
        "id": "q-ar-gram-26-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Pengajar itu sangat dihormati oleh para mahasiswanya.\"",
        "scrambledWords": [
          "مُقَدَّرٌ",
          "طُلَّابِهِ",
          "الْمُعَلِّمُ",
          "مِنْ"
        ],
        "correctOrder": [
          "الْمُعَلِّمُ",
          "مُقَدَّرٌ",
          "مِنْ",
          "طُلَّابِهِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْمُعَلِّمُ مُقَدَّرٌ مِنْ طُلَّابِهِ\". Mengikuti kaidah فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل."
      },
      {
        "id": "q-ar-gram-26-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: هو كاتبٌ\"",
        "scrambledWords": [
          " ك",
          "بٌ",
          "هو",
          "ات"
        ],
        "correctOrder": [
          "هو",
          " ك",
          "ات",
          "بٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"هو كاتبٌ\". Mengikuti kaidah فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل."
      },
      {
        "id": "q-ar-gram-26-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: هو كاتبٌ\"",
        "scrambledWords": [
          " ك",
          "بٌ",
          "هو",
          "ات"
        ],
        "correctOrder": [
          "هو",
          " ك",
          "ات",
          "بٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"هو كاتبٌ\". Mengikuti kaidah فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل."
      },
      {
        "id": "q-ar-gram-26-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Peneliti itu adalah penulis artikel ilmiah ini.",
          "Bukan peneliti itu adalah penulis artikel ilmiah ini.",
          "Topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.",
          "Pengajar itu sangat dihormati oleh para mahasiswanya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ\" () yang bermakna \"Peneliti itu adalah penulis artikel ilmiah ini.\"."
      },
      {
        "id": "q-ar-gram-26-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ\"",
        "targetSentence": "هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.",
          "Peneliti itu adalah penulis artikel ilmiah ini.",
          "Apakah topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.?",
          "Sangat topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ\" diterjemahkan menjadi \"Topik bahasan ini telah dikaji secara teliti di dalam buku-buku referensi.\"."
      },
      {
        "id": "q-ar-gram-26-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "الْمُعَلِّمُ مُقَدَّرٌ مِنْ طُلَّابِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول) untuk menyatakan makna: \"Pengajar itu sangat dihormati oleh para mahasiswanya.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"الْمُعَلِّمُ مُقَدَّرٌ مِنْ طُلَّابِهِ\" yang mempraktikkan rumus فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل."
      },
      {
        "id": "q-ar-gram-26-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Peneliti itu adalah penulis artikel ilmiah ini.\"!",
        "options": [
          "الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ",
          "هو كاتبَ",
          "هَذَا الْمَوْضُوعُ مَدْرُوسٌ بِدِقَّةٍ فِي الْكُتُبِ [Variasi]",
          "الْمُعَلِّمُ مُقَدَّرٌ مِنْ طُلَّابِهِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ\"."
      },
      {
        "id": "q-ar-gram-26-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Isim Fa'il dan Isim Maf'ul (اسم الفاعل واسم المفعول)\", respons manakah yang paling sesuai?",
        "options": [
          "الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ (Peneliti itu adalah penulis artikel ilmiah ini.)",
          "هو كاتبَ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"الْبَاحِثُ كَاتِبٌ لِهَذَا الْمَقَالِ الْعِلْمِيِّ\" sesuai aturan فَاعِل / مَفْعُول & مُفَعِّل / مُفَعَّل."
      }
    ]
  },
  {
    "id": "ar-gram-27",
    "languageId": "arabic",
    "level": "Mustawa 3 (Menengah Nahwu-Sharaf)",
    "unit": 7,
    "title": "Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل)",
    "titleNative": "صياغة اسم التفضيل على وزن أَفْعَل ومطابقته",
    "patternFormula": "A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)",
    "summary": "Menyatakan derajat keunggulan perbandingan kata sifat menggunakan wazan af'alu.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ — Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ — Penelitian ini lebih penting daripada penelitian lainnya di bidang ini."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "الْمَسْجِدُ أَقْرَبُ إِلَى السَّكَنِ — Masjid itu lebih dekat ke asrama mahasiswa."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-27-ex-1",
        "native": "اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ",
        "phonetic": "",
        "translationId": "Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya."
      },
      {
        "id": "ar-gram-27-ex-2",
        "native": "هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ",
        "phonetic": "",
        "translationId": "Penelitian ini lebih penting daripada penelitian lainnya di bidang ini."
      },
      {
        "id": "ar-gram-27-ex-3",
        "native": "الْمَسْجِدُ أَقْرَبُ إِلَى السَّكَنِ",
        "phonetic": "",
        "translationId": "Masjid itu lebih dekat ke asrama mahasiswa."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "أكثر وسيع",
        "correct": "أوسعُ",
        "explanation": "Bentuk komparatif bahasa Arab menggunakan pola wazan af'alu (أوسع)."
      },
      {
        "incorrect": "أكثر وسيع (kesalahan i'rab)",
        "correct": "أوسعُ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-27-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ\"?",
        "targetSentence": "اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya.",
          "Bukan bahasa arab adalah bahasa yang paling luas perbendaharaan kosakatanya.",
          "Apakah bahasa arab adalah bahasa yang paling luas perbendaharaan kosakatanya.?",
          "Mungkin bahasa arab adalah bahasa yang paling luas perbendaharaan kosakatanya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ\" () bermakna \"Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya.\"."
      },
      {
        "id": "q-ar-gram-27-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ\"?",
        "targetSentence": "هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penelitian ini lebih penting daripada penelitian lainnya di bidang ini.",
          "Bukan penelitian ini lebih penting daripada penelitian lainnya di bidang ini.",
          "Apakah penelitian ini lebih penting daripada penelitian lainnya di bidang ini.?",
          "Mungkin penelitian ini lebih penting daripada penelitian lainnya di bidang ini."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ\" () bermakna \"Penelitian ini lebih penting daripada penelitian lainnya di bidang ini.\"."
      },
      {
        "id": "q-ar-gram-27-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْمَسْجِدُ أَقْرَبُ إِلَى السَّكَنِ\"?",
        "targetSentence": "الْمَسْجِدُ أَقْرَبُ إِلَى السَّكَنِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Masjid itu lebih dekat ke asrama mahasiswa.",
          "Bukan masjid itu lebih dekat ke asrama mahasiswa.",
          "Apakah masjid itu lebih dekat ke asrama mahasiswa.?",
          "Mungkin masjid itu lebih dekat ke asrama mahasiswa."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْمَسْجِدُ أَقْرَبُ إِلَى السَّكَنِ\" () bermakna \"Masjid itu lebih dekat ke asrama mahasiswa.\"."
      },
      {
        "id": "q-ar-gram-27-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ (Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya.)",
          "أكثر وسيع (Struktur keliru)",
          "اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling). Contoh baku: \"اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ\"."
      },
      {
        "id": "q-ar-gram-27-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل) merupakan pilar pent...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-27-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling) diterapkan untuk menjaga ketepatan...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-27-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-27-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"أكثر وسيع\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Bentuk komparatif bahasa Arab menggunakan pola wazan af'alu (أوسع).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أكثر وسيع\" salah karena Bentuk komparatif bahasa Arab menggunakan pola wazan af'alu (أوسع).. Bentuk yang benar: \"أوسعُ\"."
      },
      {
        "id": "q-ar-gram-27-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"أكثر وسيع (kesalahan i'rab)\"?",
        "options": [
          "أوسعُ",
          "أكثر وسيع (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "أكثر وسيع (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"أوسعُ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-27-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل)\"?",
        "options": [
          "Penerapan kaidah Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل) sangat dihargai dalam tra...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-27-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل)\" (A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling).\nFungsi utama: Menyatakan derajat keunggulan perbandingan kata sifat menggunakan wazan af'alu..\nContoh penerapan: \"اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ\" () yang berarti \"Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Isim",
          "Tafdhil",
          "Bentuk",
          "Komparatif"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)), menerangkan fungsi dasarnya (Menyatakan derajat keunggulan perbandingan kata sifat menggu...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-27-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"أكثر وسيع\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"أكثر وسيع\" keliru karena: Bentuk komparatif bahasa Arab menggunakan pola wazan af'alu (أوسع)..\nBentuk pembetulan yang tepat adalah: \"أوسعُ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "أوسعُ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Bentuk komparatif bahasa Arab menggunakan pola wazan af'alu (أوسع).) dan memberikan bentuk baku: أوسعُ."
      },
      {
        "id": "q-ar-gram-27-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-27-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Penelitian ini lebih penting daripada penelitian lainnya di bidang ini.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Penelitian ini lebih penting daripada penelitian lainnya di bidang ini.\".",
        "keywords": [
          "Penelitian",
          "ini",
          "lebih"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-27-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-27-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya.\"",
        "scrambledWords": [
          "الْعَرَبِيَّةُ",
          "اللُّغَاتِ",
          "اللُّغَةُ",
          "أَوْسَعُ",
          "مُفْرَدَاتٍ"
        ],
        "correctOrder": [
          "اللُّغَةُ",
          "الْعَرَبِيَّةُ",
          "أَوْسَعُ",
          "اللُّغَاتِ",
          "مُفْرَدَاتٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ\". Mengikuti kaidah A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)."
      },
      {
        "id": "q-ar-gram-27-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Penelitian ini lebih penting daripada penelitian lainnya di bidang ini.\"",
        "scrambledWords": [
          "الْبَحْثُ",
          "مِنْ",
          "فِي",
          "الْمَجَالِ",
          "هَذَا",
          "أَهَمُّ",
          "غَيْرِهِ",
          "هَذَا"
        ],
        "correctOrder": [
          "هَذَا",
          "الْبَحْثُ",
          "أَهَمُّ",
          "مِنْ",
          "غَيْرِهِ",
          "فِي",
          "هَذَا",
          "الْمَجَالِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ\". Mengikuti kaidah A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)."
      },
      {
        "id": "q-ar-gram-27-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Masjid itu lebih dekat ke asrama mahasiswa.\"",
        "scrambledWords": [
          "أَقْرَبُ",
          "السَّكَنِ",
          "الْمَسْجِدُ",
          "إِلَى"
        ],
        "correctOrder": [
          "الْمَسْجِدُ",
          "أَقْرَبُ",
          "إِلَى",
          "السَّكَنِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْمَسْجِدُ أَقْرَبُ إِلَى السَّكَنِ\". Mengikuti kaidah A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)."
      },
      {
        "id": "q-ar-gram-27-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: أوسعُ\"",
        "scrambledWords": [
          "و",
          "ع",
          "أ",
          "س",
          "ُ"
        ],
        "correctOrder": [
          "أ",
          "و",
          "س",
          "ع",
          "ُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"أوسعُ\". Mengikuti kaidah A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)."
      },
      {
        "id": "q-ar-gram-27-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: أوسعُ\"",
        "scrambledWords": [
          "و",
          "ع",
          "أ",
          "س",
          "ُ"
        ],
        "correctOrder": [
          "أ",
          "و",
          "س",
          "ع",
          "ُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"أوسعُ\". Mengikuti kaidah A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)."
      },
      {
        "id": "q-ar-gram-27-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya.",
          "Bukan bahasa arab adalah bahasa yang paling luas perbendaharaan kosakatanya.",
          "Penelitian ini lebih penting daripada penelitian lainnya di bidang ini.",
          "Masjid itu lebih dekat ke asrama mahasiswa."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ\" () yang bermakna \"Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya.\"."
      },
      {
        "id": "q-ar-gram-27-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ\"",
        "targetSentence": "هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penelitian ini lebih penting daripada penelitian lainnya di bidang ini.",
          "Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya.",
          "Apakah penelitian ini lebih penting daripada penelitian lainnya di bidang ini.?",
          "Sangat penelitian ini lebih penting daripada penelitian lainnya di bidang ini."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ\" diterjemahkan menjadi \"Penelitian ini lebih penting daripada penelitian lainnya di bidang ini.\"."
      },
      {
        "id": "q-ar-gram-27-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "الْمَسْجِدُ أَقْرَبُ إِلَى السَّكَنِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل) untuk menyatakan makna: \"Masjid itu lebih dekat ke asrama mahasiswa.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"الْمَسْجِدُ أَقْرَبُ إِلَى السَّكَنِ\" yang mempraktikkan rumus A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)."
      },
      {
        "id": "q-ar-gram-27-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya.\"!",
        "options": [
          "اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ",
          "أكثر وسيع",
          "هَذَا الْبَحْثُ أَهَمُّ مِنْ غَيْرِهِ فِي هَذَا الْمَجَالِ [Variasi]",
          "الْمَسْجِدُ أَقْرَبُ إِلَى السَّكَنِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ\"."
      },
      {
        "id": "q-ar-gram-27-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Isim Tafdhil Bentuk Komparatif & Superlatif (اسم التفضيل)\", respons manakah yang paling sesuai?",
        "options": [
          "اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ (Bahasa Arab adalah bahasa yang paling luas perbendaharaan kosakatanya.)",
          "أكثر وسيع (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"اللُّغَةُ الْعَرَبِيَّةُ أَوْسَعُ اللُّغَاتِ مُفْرَدَاتٍ\" sesuai aturan A + أَفْعَلُ مِنْ (Lebih... dari) & أَفْعَلُ (Paling)."
      }
    ]
  },
  {
    "id": "ar-gram-28",
    "languageId": "arabic",
    "level": "Mustawa 3 (Menengah Nahwu-Sharaf)",
    "unit": 8,
    "title": "Kaidah Syarat dan Jawab Syarat (أسلوب الشرط)",
    "titleNative": "أدوات الشرط الجازمة وغير الجازمة",
    "patternFormula": "Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)",
    "summary": "Menghubungkan klausul syarat dan konsekuensi akibatnya dengan partikel pengkondisian jazm (إنْ, مَنْ, مَا, مَهْمَا).",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kaidah Syarat dan Jawab Syarat (أسلوب الشرط) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ — Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ — Jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "إِذَا حَضَرَ الْأُسْتَاذُ بَدَأَتِ الْمُحَاضَرَةُ — Apabila sang profesor telah hadir, maka perkuliahan pun dimulai."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-28-ex-1",
        "native": "مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ",
        "phonetic": "",
        "translationId": "Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya."
      },
      {
        "id": "ar-gram-28-ex-2",
        "native": "إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ",
        "phonetic": "",
        "translationId": "Jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia."
      },
      {
        "id": "ar-gram-28-ex-3",
        "native": "إِذَا حَضَرَ الْأُسْتَاذُ بَدَأَتِ الْمُحَاضَرَةُ",
        "phonetic": "",
        "translationId": "Apabila sang profesor telah hadir, maka perkuliahan pun dimulai."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "من يجتهدُ ينجحُ",
        "correct": "من يجتهدْ ينجحْ",
        "explanation": "Partikel man menjazmkan fi'il syarat dan jawab syarat sekaligus."
      },
      {
        "incorrect": "من يجتهدُ ينجحُ (kesalahan i'rab)",
        "correct": "من يجتهدْ ينجحْ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kaidah Syarat dan Jawab Syarat (أسلوب الشرط) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-28-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ\"?",
        "targetSentence": "مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.",
          "Bukan barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.",
          "Apakah barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.?",
          "Mungkin barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ\" () bermakna \"Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.\"."
      },
      {
        "id": "q-ar-gram-28-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ\"?",
        "targetSentence": "إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.",
          "Bukan jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.",
          "Apakah jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.?",
          "Mungkin jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ\" () bermakna \"Jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.\"."
      },
      {
        "id": "q-ar-gram-28-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"إِذَا حَضَرَ الْأُسْتَاذُ بَدَأَتِ الْمُحَاضَرَةُ\"?",
        "targetSentence": "إِذَا حَضَرَ الْأُسْتَاذُ بَدَأَتِ الْمُحَاضَرَةُ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Apabila sang profesor telah hadir, maka perkuliahan pun dimulai.",
          "Bukan apabila sang profesor telah hadir, maka perkuliahan pun dimulai.",
          "Apakah apabila sang profesor telah hadir, maka perkuliahan pun dimulai.?",
          "Mungkin apabila sang profesor telah hadir, maka perkuliahan pun dimulai."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"إِذَا حَضَرَ الْأُسْتَاذُ بَدَأَتِ الْمُحَاضَرَةُ\" () bermakna \"Apabila sang profesor telah hadir, maka perkuliahan pun dimulai.\"."
      },
      {
        "id": "q-ar-gram-28-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ (Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.)",
          "من يجتهدُ ينجحُ (Struktur keliru)",
          "مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kaidah Syarat dan Jawab Syarat (أسلوب الشرط)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum). Contoh baku: \"مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ\"."
      },
      {
        "id": "q-ar-gram-28-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kaidah Syarat dan Jawab Syarat (أسلوب الشرط) merupakan pilar penting dalam sin...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kaidah Syarat dan Jawab Syarat (أسلوب الشرط) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-28-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum) diterapkan untuk menjaga k...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-28-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-28-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"من يجتهدُ ينجحُ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Partikel man menjazmkan fi'il syarat dan jawab syarat sekaligus.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"من يجتهدُ ينجحُ\" salah karena Partikel man menjazmkan fi'il syarat dan jawab syarat sekaligus.. Bentuk yang benar: \"من يجتهدْ ينجحْ\"."
      },
      {
        "id": "q-ar-gram-28-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"من يجتهدُ ينجحُ (kesalahan i'rab)\"?",
        "options": [
          "من يجتهدْ ينجحْ",
          "من يجتهدُ ينجحُ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "من يجتهدُ ينجحُ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"من يجتهدْ ينجحْ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-28-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kaidah Syarat dan Jawab Syarat (أسلوب الشرط)\"?",
        "options": [
          "Penerapan kaidah Kaidah Syarat dan Jawab Syarat (أسلوب الشرط) sangat dihargai dalam tradisi ilmiah d...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kaidah Syarat dan Jawab Syarat (أسلوب الشرط) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-28-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kaidah Syarat dan Jawab Syarat (أسلوب الشرط)\" (Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum).\nFungsi utama: Menghubungkan klausul syarat dan konsekuensi akibatnya dengan partikel pengkondisian jazm (إنْ, مَنْ, مَا, مَهْمَا)..\nContoh penerapan: \"مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ\" () yang berarti \"Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kaidah",
          "Syarat",
          "dan",
          "Jawab"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)), menerangkan fungsi dasarnya (Menghubungkan klausul syarat dan konsekuensi akibatnya denga...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-28-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"من يجتهدُ ينجحُ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"من يجتهدُ ينجحُ\" keliru karena: Partikel man menjazmkan fi'il syarat dan jawab syarat sekaligus..\nBentuk pembetulan yang tepat adalah: \"من يجتهدْ ينجحْ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "من",
          "يجتهدْ",
          "ينجحْ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Partikel man menjazmkan fi'il syarat dan jawab syarat sekaligus.) dan memberikan bentuk baku: من يجتهدْ ينجحْ."
      },
      {
        "id": "q-ar-gram-28-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-28-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.\".",
        "keywords": [
          "Jika",
          "engkau",
          "tulus"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-28-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kaidah Syarat dan Jawab Syarat (أسلوب الشرط)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kaidah Syarat dan Jawab Syarat (أسلوب الشرط) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kaidah Syarat dan Jawab Syarat (أسلوب الشرط) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-28-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.\"",
        "scrambledWords": [
          "يَجْتَهِدْ",
          "طَلَبِ",
          "يَنْجَحْ",
          "حَيَاتِهِ",
          "مَنْ",
          "فِي",
          "الْعِلْمِ",
          "فِي"
        ],
        "correctOrder": [
          "مَنْ",
          "يَجْتَهِدْ",
          "فِي",
          "طَلَبِ",
          "الْعِلْمِ",
          "يَنْجَحْ",
          "فِي",
          "حَيَاتِهِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ\". Mengikuti kaidah Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)."
      },
      {
        "id": "q-ar-gram-28-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.\"",
        "scrambledWords": [
          "تُخْلِصْ",
          "عَمَلِكَ",
          "تَقْدِيرَ",
          "إِنْ",
          "فِي",
          "تَنَلْ",
          "النَّاسِ"
        ],
        "correctOrder": [
          "إِنْ",
          "تُخْلِصْ",
          "فِي",
          "عَمَلِكَ",
          "تَنَلْ",
          "تَقْدِيرَ",
          "النَّاسِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ\". Mengikuti kaidah Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)."
      },
      {
        "id": "q-ar-gram-28-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Apabila sang profesor telah hadir, maka perkuliahan pun dimulai.\"",
        "scrambledWords": [
          "حَضَرَ",
          "بَدَأَتِ",
          "إِذَا",
          "الْأُسْتَاذُ",
          "الْمُحَاضَرَةُ"
        ],
        "correctOrder": [
          "إِذَا",
          "حَضَرَ",
          "الْأُسْتَاذُ",
          "بَدَأَتِ",
          "الْمُحَاضَرَةُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"إِذَا حَضَرَ الْأُسْتَاذُ بَدَأَتِ الْمُحَاضَرَةُ\". Mengikuti kaidah Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)."
      },
      {
        "id": "q-ar-gram-28-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: من يجتهدْ ينجحْ\"",
        "scrambledWords": [
          "يجتهدْ",
          "من",
          "ينجحْ"
        ],
        "correctOrder": [
          "من",
          "يجتهدْ",
          "ينجحْ"
        ],
        "explanation": "Urutan yang tepat adalah: \"من يجتهدْ ينجحْ\". Mengikuti kaidah Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)."
      },
      {
        "id": "q-ar-gram-28-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: من يجتهدْ ينجحْ\"",
        "scrambledWords": [
          "يجتهدْ",
          "من",
          "ينجحْ"
        ],
        "correctOrder": [
          "من",
          "يجتهدْ",
          "ينجحْ"
        ],
        "explanation": "Urutan yang tepat adalah: \"من يجتهدْ ينجحْ\". Mengikuti kaidah Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)."
      },
      {
        "id": "q-ar-gram-28-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.",
          "Bukan barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.",
          "Jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.",
          "Apabila sang profesor telah hadir, maka perkuliahan pun dimulai."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ\" () yang bermakna \"Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.\"."
      },
      {
        "id": "q-ar-gram-28-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ\"",
        "targetSentence": "إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.",
          "Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.",
          "Apakah jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.?",
          "Sangat jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ\" diterjemahkan menjadi \"Jika engkau tulus ikhlas dalam pekerjaanmu, niscaya engkau meraih penghargaan manusia.\"."
      },
      {
        "id": "q-ar-gram-28-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "إِذَا حَضَرَ الْأُسْتَاذُ بَدَأَتِ الْمُحَاضَرَةُ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kaidah Syarat dan Jawab Syarat (أسلوب الشرط) untuk menyatakan makna: \"Apabila sang profesor telah hadir, maka perkuliahan pun dimulai.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"إِذَا حَضَرَ الْأُسْتَاذُ بَدَأَتِ الْمُحَاضَرَةُ\" yang mempraktikkan rumus Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)."
      },
      {
        "id": "q-ar-gram-28-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.\"!",
        "options": [
          "مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ",
          "من يجتهدُ ينجحُ",
          "إِنْ تُخْلِصْ فِي عَمَلِكَ تَنَلْ تَقْدِيرَ النَّاسِ [Variasi]",
          "إِذَا حَضَرَ الْأُسْتَاذُ بَدَأَتِ الْمُحَاضَرَةُ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ\"."
      },
      {
        "id": "q-ar-gram-28-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kaidah Syarat dan Jawab Syarat (أسلوب الشرط)\", respons manakah yang paling sesuai?",
        "options": [
          "مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ (Barang siapa bersungguh-sungguh dalam menuntut ilmu, niscaya ia sukses dalam hidupnya.)",
          "من يجتهدُ ينجحُ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"مَنْ يَجْتَهِدْ فِي طَلَبِ الْعِلْمِ يَنْجَحْ فِي حَيَاتِهِ\" sesuai aturan Adawat Syarat + Fi'il Syarat (Majzum) + Jawab Syarat (Majzum)."
      }
    ]
  },
  {
    "id": "ar-gram-29",
    "languageId": "arabic",
    "level": "Mustawa 3 (Menengah Nahwu-Sharaf)",
    "unit": 9,
    "title": "Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف)",
    "titleNative": "الأسماء الممنوعة من الصرف وعلامة جرها الفتحة",
    "patternFormula": "Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)",
    "summary": "Kelompok kata benda yang tidak boleh bertanwin dan menerima tanda fathah saat dalam kondisi majrur.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ — Saya telah melaksanakan salat di banyak masjid di kota tersebut."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ — Saya telah belajar bersama Umar dan Utsman di dalam kelas."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "سَافَرْنَا إِلَى مَكَّةَ الْمُكَرَّمَةِ — Kami melakukan perjalanan menuju kota suci Makkah Al-Mukarramah."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-29-ex-1",
        "native": "صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ",
        "phonetic": "",
        "translationId": "Saya telah melaksanakan salat di banyak masjid di kota tersebut."
      },
      {
        "id": "ar-gram-29-ex-2",
        "native": "دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ",
        "phonetic": "",
        "translationId": "Saya telah belajar bersama Umar dan Utsman di dalam kelas."
      },
      {
        "id": "ar-gram-29-ex-3",
        "native": "سَافَرْنَا إِلَى مَكَّةَ الْمُكَرَّمَةِ",
        "phonetic": "",
        "translationId": "Kami melakukan perjalanan menuju kota suci Makkah Al-Mukarramah."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "في مساجدِ كثيرة",
        "correct": "في مساجدَ كثيرة",
        "explanation": "Al-Mamnu' minash sharf saat majrur bertanda harakat fathah (مساجدَ)."
      },
      {
        "incorrect": "في مساجدِ كثيرة (kesalahan i'rab)",
        "correct": "في مساجدَ كثيرة",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-29-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ\"?",
        "targetSentence": "صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah melaksanakan salat di banyak masjid di kota tersebut.",
          "Bukan saya telah melaksanakan salat di banyak masjid di kota tersebut.",
          "Apakah saya telah melaksanakan salat di banyak masjid di kota tersebut.?",
          "Mungkin saya telah melaksanakan salat di banyak masjid di kota tersebut."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ\" () bermakna \"Saya telah melaksanakan salat di banyak masjid di kota tersebut.\"."
      },
      {
        "id": "q-ar-gram-29-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ\"?",
        "targetSentence": "دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah belajar bersama Umar dan Utsman di dalam kelas.",
          "Bukan saya telah belajar bersama umar dan utsman di dalam kelas.",
          "Apakah saya telah belajar bersama umar dan utsman di dalam kelas.?",
          "Mungkin saya telah belajar bersama umar dan utsman di dalam kelas."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ\" () bermakna \"Saya telah belajar bersama Umar dan Utsman di dalam kelas.\"."
      },
      {
        "id": "q-ar-gram-29-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"سَافَرْنَا إِلَى مَكَّةَ الْمُكَرَّمَةِ\"?",
        "targetSentence": "سَافَرْنَا إِلَى مَكَّةَ الْمُكَرَّمَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kami melakukan perjalanan menuju kota suci Makkah Al-Mukarramah.",
          "Bukan kami melakukan perjalanan menuju kota suci makkah al-mukarramah.",
          "Apakah kami melakukan perjalanan menuju kota suci makkah al-mukarramah.?",
          "Mungkin kami melakukan perjalanan menuju kota suci makkah al-mukarramah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"سَافَرْنَا إِلَى مَكَّةَ الْمُكَرَّمَةِ\" () bermakna \"Kami melakukan perjalanan menuju kota suci Makkah Al-Mukarramah.\"."
      },
      {
        "id": "q-ar-gram-29-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ (Saya telah melaksanakan salat di banyak masjid di kota tersebut.)",
          "في مساجدِ كثيرة (Struktur keliru)",
          "صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf). Contoh baku: \"صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ\"."
      },
      {
        "id": "q-ar-gram-29-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف) merupakan pilar pe...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-29-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf) diterapkan untuk ...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-29-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-29-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"في مساجدِ كثيرة\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Al-Mamnu' minash sharf saat majrur bertanda harakat fathah (مساجدَ).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"في مساجدِ كثيرة\" salah karena Al-Mamnu' minash sharf saat majrur bertanda harakat fathah (مساجدَ).. Bentuk yang benar: \"في مساجدَ كثيرة\"."
      },
      {
        "id": "q-ar-gram-29-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"في مساجدِ كثيرة (kesalahan i'rab)\"?",
        "options": [
          "في مساجدَ كثيرة",
          "في مساجدِ كثيرة (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "في مساجدِ كثيرة (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"في مساجدَ كثيرة\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-29-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف)\"?",
        "options": [
          "Penerapan kaidah Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف) sangat dihargai dalam t...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-29-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف)\" (Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf).\nFungsi utama: Kelompok kata benda yang tidak boleh bertanwin dan menerima tanda fathah saat dalam kondisi majrur..\nContoh penerapan: \"صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ\" () yang berarti \"Saya telah melaksanakan salat di banyak masjid di kota tersebut.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Al-Mamnu'",
          "minash",
          "Sharf",
          "Isim"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)), menerangkan fungsi dasarnya (Kelompok kata benda yang tidak boleh bertanwin dan menerima ...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-29-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"في مساجدِ كثيرة\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"في مساجدِ كثيرة\" keliru karena: Al-Mamnu' minash sharf saat majrur bertanda harakat fathah (مساجدَ)..\nBentuk pembetulan yang tepat adalah: \"في مساجدَ كثيرة\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "في",
          "مساجدَ",
          "كثيرة"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Al-Mamnu' minash sharf saat majrur bertanda harakat fathah (مساجدَ).) dan memberikan bentuk baku: في مساجدَ كثيرة."
      },
      {
        "id": "q-ar-gram-29-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-29-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Saya telah belajar bersama Umar dan Utsman di dalam kelas.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Saya telah belajar bersama Umar dan Utsman di dalam kelas.\".",
        "keywords": [
          "Saya",
          "telah",
          "belajar"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-29-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-29-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya telah melaksanakan salat di banyak masjid di kota tersebut.\"",
        "scrambledWords": [
          "فِي",
          "كَثِيرَةٍ",
          "الْمَدِينَةِ",
          "صَلَّيْتُ",
          "مَسَاجِدَ",
          "فِي"
        ],
        "correctOrder": [
          "صَلَّيْتُ",
          "فِي",
          "مَسَاجِدَ",
          "كَثِيرَةٍ",
          "فِي",
          "الْمَدِينَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ\". Mengikuti kaidah Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)."
      },
      {
        "id": "q-ar-gram-29-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya telah belajar bersama Umar dan Utsman di dalam kelas.\"",
        "scrambledWords": [
          "مَعَ",
          "وَعُثْمَانَ",
          "الْفَصْلِ",
          "دَرَسْتُ",
          "عُمَرَ",
          "فِي"
        ],
        "correctOrder": [
          "دَرَسْتُ",
          "مَعَ",
          "عُمَرَ",
          "وَعُثْمَانَ",
          "فِي",
          "الْفَصْلِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ\". Mengikuti kaidah Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)."
      },
      {
        "id": "q-ar-gram-29-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Kami melakukan perjalanan menuju kota suci Makkah Al-Mukarramah.\"",
        "scrambledWords": [
          "إِلَى",
          "الْمُكَرَّمَةِ",
          "سَافَرْنَا",
          "مَكَّةَ"
        ],
        "correctOrder": [
          "سَافَرْنَا",
          "إِلَى",
          "مَكَّةَ",
          "الْمُكَرَّمَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"سَافَرْنَا إِلَى مَكَّةَ الْمُكَرَّمَةِ\". Mengikuti kaidah Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)."
      },
      {
        "id": "q-ar-gram-29-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: في مساجدَ كثيرة\"",
        "scrambledWords": [
          "مساجدَ",
          "في",
          "كثيرة"
        ],
        "correctOrder": [
          "في",
          "مساجدَ",
          "كثيرة"
        ],
        "explanation": "Urutan yang tepat adalah: \"في مساجدَ كثيرة\". Mengikuti kaidah Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)."
      },
      {
        "id": "q-ar-gram-29-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: في مساجدَ كثيرة\"",
        "scrambledWords": [
          "مساجدَ",
          "في",
          "كثيرة"
        ],
        "correctOrder": [
          "في",
          "مساجدَ",
          "كثيرة"
        ],
        "explanation": "Urutan yang tepat adalah: \"في مساجدَ كثيرة\". Mengikuti kaidah Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)."
      },
      {
        "id": "q-ar-gram-29-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah melaksanakan salat di banyak masjid di kota tersebut.",
          "Bukan saya telah melaksanakan salat di banyak masjid di kota tersebut.",
          "Saya telah belajar bersama Umar dan Utsman di dalam kelas.",
          "Kami melakukan perjalanan menuju kota suci Makkah Al-Mukarramah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ\" () yang bermakna \"Saya telah melaksanakan salat di banyak masjid di kota tersebut.\"."
      },
      {
        "id": "q-ar-gram-29-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ\"",
        "targetSentence": "دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah belajar bersama Umar dan Utsman di dalam kelas.",
          "Saya telah melaksanakan salat di banyak masjid di kota tersebut.",
          "Apakah saya telah belajar bersama umar dan utsman di dalam kelas.?",
          "Sangat saya telah belajar bersama umar dan utsman di dalam kelas."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ\" diterjemahkan menjadi \"Saya telah belajar bersama Umar dan Utsman di dalam kelas.\"."
      },
      {
        "id": "q-ar-gram-29-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "سَافَرْنَا إِلَى مَكَّةَ الْمُكَرَّمَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف) untuk menyatakan makna: \"Kami melakukan perjalanan menuju kota suci Makkah Al-Mukarramah.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"سَافَرْنَا إِلَى مَكَّةَ الْمُكَرَّمَةِ\" yang mempraktikkan rumus Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)."
      },
      {
        "id": "q-ar-gram-29-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Saya telah melaksanakan salat di banyak masjid di kota tersebut.\"!",
        "options": [
          "صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ",
          "في مساجدِ كثيرة",
          "دَرَسْتُ مَعَ عُمَرَ وَعُثْمَانَ فِي الْفَصْلِ [Variasi]",
          "سَافَرْنَا إِلَى مَكَّةَ الْمُكَرَّمَةِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ\"."
      },
      {
        "id": "q-ar-gram-29-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Al-Mamnu' minash Sharf Isim Tanpa Tanwin (الممنوع من الصرف)\", respons manakah yang paling sesuai?",
        "options": [
          "صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ (Saya telah melaksanakan salat di banyak masjid di kota tersebut.)",
          "في مساجدِ كثيرة (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"صَلَّيْتُ فِي مَسَاجِدَ كَثِيرَةٍ فِي الْمَدِينَةِ\" sesuai aturan Tanpa Tanwin & Majrur dengan Fathah (selama tidak ber-alif lam/mudhaf)."
      }
    ]
  },
  {
    "id": "ar-gram-30",
    "languageId": "arabic",
    "level": "Mustawa 3 (Menengah Nahwu-Sharaf)",
    "unit": 10,
    "title": "Kaidah Taukid dan Badal (التوكيد والبدل من التوابع)",
    "titleNative": "التوكيد اللفظي والمعنوي وأنواع البدل",
    "patternFormula": "Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya",
    "summary": "Dua fungsi sintaksis pengikut (tawabi'): taukid mempertegas kepastian subjek, badal menggantikan penjelas.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kaidah Taukid dan Badal (التوكيد والبدل من التوابع) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ — Rektor itu sendiri yang hadir langsung ke konferensi tersebut."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ — Saya telah membaca buku itu separuhnya dalam satu malam saja."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "جَاءَ الْأُسْتَاذُ أَحْمَدُ إِلَى الْقَاعَةِ — Profesor Ahmad telah datang ke ruang aula."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-30-ex-1",
        "native": "حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ",
        "phonetic": "",
        "translationId": "Rektor itu sendiri yang hadir langsung ke konferensi tersebut."
      },
      {
        "id": "ar-gram-30-ex-2",
        "native": "قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ",
        "phonetic": "",
        "translationId": "Saya telah membaca buku itu separuhnya dalam satu malam saja."
      },
      {
        "id": "ar-gram-30-ex-3",
        "native": "جَاءَ الْأُسْتَاذُ أَحْمَدُ إِلَى الْقَاعَةِ",
        "phonetic": "",
        "translationId": "Profesor Ahmad telah datang ke ruang aula."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "حضر الرئيسَ نفسَه",
        "correct": "حضر الرئيسُ نفسُه",
        "explanation": "Taukid ma'nawi mengikuti i'rab kata yang ditegaskannya (marfu' dhammah)."
      },
      {
        "incorrect": "حضر الرئيسَ نفسَه (kesalahan i'rab)",
        "correct": "حضر الرئيسُ نفسُه",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kaidah Taukid dan Badal (التوكيد والبدل من التوابع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-30-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ\"?",
        "targetSentence": "حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Rektor itu sendiri yang hadir langsung ke konferensi tersebut.",
          "Bukan rektor itu sendiri yang hadir langsung ke konferensi tersebut.",
          "Apakah rektor itu sendiri yang hadir langsung ke konferensi tersebut.?",
          "Mungkin rektor itu sendiri yang hadir langsung ke konferensi tersebut."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ\" () bermakna \"Rektor itu sendiri yang hadir langsung ke konferensi tersebut.\"."
      },
      {
        "id": "q-ar-gram-30-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ\"?",
        "targetSentence": "قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah membaca buku itu separuhnya dalam satu malam saja.",
          "Bukan saya telah membaca buku itu separuhnya dalam satu malam saja.",
          "Apakah saya telah membaca buku itu separuhnya dalam satu malam saja.?",
          "Mungkin saya telah membaca buku itu separuhnya dalam satu malam saja."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ\" () bermakna \"Saya telah membaca buku itu separuhnya dalam satu malam saja.\"."
      },
      {
        "id": "q-ar-gram-30-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"جَاءَ الْأُسْتَاذُ أَحْمَدُ إِلَى الْقَاعَةِ\"?",
        "targetSentence": "جَاءَ الْأُسْتَاذُ أَحْمَدُ إِلَى الْقَاعَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Profesor Ahmad telah datang ke ruang aula.",
          "Bukan profesor ahmad telah datang ke ruang aula.",
          "Apakah profesor ahmad telah datang ke ruang aula.?",
          "Mungkin profesor ahmad telah datang ke ruang aula."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"جَاءَ الْأُسْتَاذُ أَحْمَدُ إِلَى الْقَاعَةِ\" () bermakna \"Profesor Ahmad telah datang ke ruang aula.\"."
      },
      {
        "id": "q-ar-gram-30-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ (Rektor itu sendiri yang hadir langsung ke konferensi tersebut.)",
          "حضر الرئيسَ نفسَه (Struktur keliru)",
          "حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kaidah Taukid dan Badal (التوكيد والبدل من التوابع)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya. Contoh baku: \"حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ\"."
      },
      {
        "id": "q-ar-gram-30-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kaidah Taukid dan Badal (التوكيد والبدل من التوابع) merupakan pilar penting da...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kaidah Taukid dan Badal (التوكيد والبدل من التوابع) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-30-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya diterapkan untuk menjaga ke...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-30-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-30-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"حضر الرئيسَ نفسَه\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Taukid ma'nawi mengikuti i'rab kata yang ditegaskannya (marfu' dhammah).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"حضر الرئيسَ نفسَه\" salah karena Taukid ma'nawi mengikuti i'rab kata yang ditegaskannya (marfu' dhammah).. Bentuk yang benar: \"حضر الرئيسُ نفسُه\"."
      },
      {
        "id": "q-ar-gram-30-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"حضر الرئيسَ نفسَه (kesalahan i'rab)\"?",
        "options": [
          "حضر الرئيسُ نفسُه",
          "حضر الرئيسَ نفسَه (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "حضر الرئيسَ نفسَه (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"حضر الرئيسُ نفسُه\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-30-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kaidah Taukid dan Badal (التوكيد والبدل من التوابع)\"?",
        "options": [
          "Penerapan kaidah Kaidah Taukid dan Badal (التوكيد والبدل من التوابع) sangat dihargai dalam tradisi i...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kaidah Taukid dan Badal (التوكيد والبدل من التوابع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-30-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kaidah Taukid dan Badal (التوكيد والبدل من التوابع)\" (Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya.\nFungsi utama: Dua fungsi sintaksis pengikut (tawabi'): taukid mempertegas kepastian subjek, badal menggantikan penjelas..\nContoh penerapan: \"حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ\" () yang berarti \"Rektor itu sendiri yang hadir langsung ke konferensi tersebut.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kaidah",
          "Taukid",
          "dan",
          "Badal"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya), menerangkan fungsi dasarnya (Dua fungsi sintaksis pengikut (tawabi'): taukid mempertegas ...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-30-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"حضر الرئيسَ نفسَه\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"حضر الرئيسَ نفسَه\" keliru karena: Taukid ma'nawi mengikuti i'rab kata yang ditegaskannya (marfu' dhammah)..\nBentuk pembetulan yang tepat adalah: \"حضر الرئيسُ نفسُه\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "حضر",
          "الرئيسُ",
          "نفسُه"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Taukid ma'nawi mengikuti i'rab kata yang ditegaskannya (marfu' dhammah).) dan memberikan bentuk baku: حضر الرئيسُ نفسُه."
      },
      {
        "id": "q-ar-gram-30-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-30-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Saya telah membaca buku itu separuhnya dalam satu malam saja.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Saya telah membaca buku itu separuhnya dalam satu malam saja.\".",
        "keywords": [
          "Saya",
          "telah",
          "membaca"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-30-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kaidah Taukid dan Badal (التوكيد والبدل من التوابع)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kaidah Taukid dan Badal (التوكيد والبدل من التوابع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kaidah Taukid dan Badal (التوكيد والبدل من التوابع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-30-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Rektor itu sendiri yang hadir langsung ke konferensi tersebut.\"",
        "scrambledWords": [
          "الرَّئِيسُ",
          "إِلَى",
          "حَضَرَ",
          "نَفْسُهُ",
          "الْمُؤْتَمَرِ"
        ],
        "correctOrder": [
          "حَضَرَ",
          "الرَّئِيسُ",
          "نَفْسُهُ",
          "إِلَى",
          "الْمُؤْتَمَرِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ\". Mengikuti kaidah Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya."
      },
      {
        "id": "q-ar-gram-30-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya telah membaca buku itu separuhnya dalam satu malam saja.\"",
        "scrambledWords": [
          "الْكِتَابَ",
          "فِي",
          "وَاحِدَةٍ",
          "قَرَأْتُ",
          "نِصْفَهُ",
          "لَيْلَةٍ"
        ],
        "correctOrder": [
          "قَرَأْتُ",
          "الْكِتَابَ",
          "نِصْفَهُ",
          "فِي",
          "لَيْلَةٍ",
          "وَاحِدَةٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ\". Mengikuti kaidah Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya."
      },
      {
        "id": "q-ar-gram-30-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Profesor Ahmad telah datang ke ruang aula.\"",
        "scrambledWords": [
          "الْأُسْتَاذُ",
          "إِلَى",
          "جَاءَ",
          "أَحْمَدُ",
          "الْقَاعَةِ"
        ],
        "correctOrder": [
          "جَاءَ",
          "الْأُسْتَاذُ",
          "أَحْمَدُ",
          "إِلَى",
          "الْقَاعَةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"جَاءَ الْأُسْتَاذُ أَحْمَدُ إِلَى الْقَاعَةِ\". Mengikuti kaidah Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya."
      },
      {
        "id": "q-ar-gram-30-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: حضر الرئيسُ نفسُه\"",
        "scrambledWords": [
          "الرئيسُ",
          "حضر",
          "نفسُه"
        ],
        "correctOrder": [
          "حضر",
          "الرئيسُ",
          "نفسُه"
        ],
        "explanation": "Urutan yang tepat adalah: \"حضر الرئيسُ نفسُه\". Mengikuti kaidah Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya."
      },
      {
        "id": "q-ar-gram-30-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: حضر الرئيسُ نفسُه\"",
        "scrambledWords": [
          "الرئيسُ",
          "حضر",
          "نفسُه"
        ],
        "correctOrder": [
          "حضر",
          "الرئيسُ",
          "نفسُه"
        ],
        "explanation": "Urutan yang tepat adalah: \"حضر الرئيسُ نفسُه\". Mengikuti kaidah Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya."
      },
      {
        "id": "q-ar-gram-30-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Rektor itu sendiri yang hadir langsung ke konferensi tersebut.",
          "Bukan rektor itu sendiri yang hadir langsung ke konferensi tersebut.",
          "Saya telah membaca buku itu separuhnya dalam satu malam saja.",
          "Profesor Ahmad telah datang ke ruang aula."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ\" () yang bermakna \"Rektor itu sendiri yang hadir langsung ke konferensi tersebut.\"."
      },
      {
        "id": "q-ar-gram-30-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ\"",
        "targetSentence": "قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya telah membaca buku itu separuhnya dalam satu malam saja.",
          "Rektor itu sendiri yang hadir langsung ke konferensi tersebut.",
          "Apakah saya telah membaca buku itu separuhnya dalam satu malam saja.?",
          "Sangat saya telah membaca buku itu separuhnya dalam satu malam saja."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ\" diterjemahkan menjadi \"Saya telah membaca buku itu separuhnya dalam satu malam saja.\"."
      },
      {
        "id": "q-ar-gram-30-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "جَاءَ الْأُسْتَاذُ أَحْمَدُ إِلَى الْقَاعَةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kaidah Taukid dan Badal (التوكيد والبدل من التوابع) untuk menyatakan makna: \"Profesor Ahmad telah datang ke ruang aula.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"جَاءَ الْأُسْتَاذُ أَحْمَدُ إِلَى الْقَاعَةِ\" yang mempraktikkan rumus Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya."
      },
      {
        "id": "q-ar-gram-30-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Rektor itu sendiri yang hadir langsung ke konferensi tersebut.\"!",
        "options": [
          "حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ",
          "حضر الرئيسَ نفسَه",
          "قَرَأْتُ الْكِتَابَ نِصْفَهُ فِي لَيْلَةٍ وَاحِدَةٍ [Variasi]",
          "جَاءَ الْأُسْتَاذُ أَحْمَدُ إِلَى الْقَاعَةِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ\"."
      },
      {
        "id": "q-ar-gram-30-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kaidah Taukid dan Badal (التوكيد والبدل من التوابع)\", respons manakah yang paling sesuai?",
        "options": [
          "حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ (Rektor itu sendiri yang hadir langsung ke konferensi tersebut.)",
          "حضر الرئيسَ نفسَه (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"حَضَرَ الرَّئِيسُ نَفْسُهُ إِلَى الْمُؤْتَمَرِ\" sesuai aturan Taukid (نَفْس، عَيْن، كُلّ) & Badal Menyamai I'rab Matbu'nya."
      }
    ]
  },
  {
    "id": "ar-gram-31",
    "languageId": "arabic",
    "level": "Mustawa 4 (Mahir Fusha & Akademik)",
    "unit": 1,
    "title": "Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال)",
    "titleNative": "أحكام الإعلال بالقلب والنقل والحذف في علم الصرف",
    "patternFormula": "Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)",
    "summary": "Memahami kaidah substitusi dan eliminasi fonologis akar kata lemah dalam morfologi Arab mutaqaddim.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ — Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ — Urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "يَبِيعُ التَّاجِرُ بِضَاعَتَهُ بِالصِّدْقِ — Pedagang itu menjual barang dagangannya dengan penuh kejujuran."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-31-ex-1",
        "native": "قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ",
        "phonetic": "",
        "translationId": "Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad."
      },
      {
        "id": "ar-gram-31-ex-2",
        "native": "اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ",
        "phonetic": "",
        "translationId": "Urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah."
      },
      {
        "id": "ar-gram-31-ex-3",
        "native": "يَبِيعُ التَّاجِرُ بِضَاعَتَهُ بِالصِّدْقِ",
        "phonetic": "",
        "translationId": "Pedagang itu menjual barang dagangannya dengan penuh kejujuran."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "قَوَلَ الرجل",
        "correct": "قالَ الرجل",
        "explanation": "Asal kata قال adalah قَوَلَ yang mengalami i'lal qalb menjadi قال."
      },
      {
        "incorrect": "قَوَلَ الرجل (kesalahan i'rab)",
        "correct": "قالَ الرجل",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-31-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ\"?",
        "targetSentence": "قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.",
          "Bukan ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.",
          "Apakah ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.?",
          "Mungkin ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ\" () bermakna \"Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.\"."
      },
      {
        "id": "q-ar-gram-31-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ\"?",
        "targetSentence": "اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.",
          "Bukan urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.",
          "Apakah urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.?",
          "Mungkin urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ\" () bermakna \"Urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.\"."
      },
      {
        "id": "q-ar-gram-31-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"يَبِيعُ التَّاجِرُ بِضَاعَتَهُ بِالصِّدْقِ\"?",
        "targetSentence": "يَبِيعُ التَّاجِرُ بِضَاعَتَهُ بِالصِّدْقِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Pedagang itu menjual barang dagangannya dengan penuh kejujuran.",
          "Bukan pedagang itu menjual barang dagangannya dengan penuh kejujuran.",
          "Apakah pedagang itu menjual barang dagangannya dengan penuh kejujuran.?",
          "Mungkin pedagang itu menjual barang dagangannya dengan penuh kejujuran."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يَبِيعُ التَّاجِرُ بِضَاعَتَهُ بِالصِّدْقِ\" () bermakna \"Pedagang itu menjual barang dagangannya dengan penuh kejujuran.\"."
      },
      {
        "id": "q-ar-gram-31-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ (Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.)",
          "قَوَلَ الرجل (Struktur keliru)",
          "قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif). Contoh baku: \"قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ\"."
      },
      {
        "id": "q-ar-gram-31-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال) merupakan p...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-31-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif) diterapkan untuk menjaga ketepatan ba...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-31-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-31-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"قَوَلَ الرجل\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Asal kata قال adalah قَوَلَ yang mengalami i'lal qalb menjadi قال.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَوَلَ الرجل\" salah karena Asal kata قال adalah قَوَلَ yang mengalami i'lal qalb menjadi قال.. Bentuk yang benar: \"قالَ الرجل\"."
      },
      {
        "id": "q-ar-gram-31-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"قَوَلَ الرجل (kesalahan i'rab)\"?",
        "options": [
          "قالَ الرجل",
          "قَوَلَ الرجل (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "قَوَلَ الرجل (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"قالَ الرجل\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-31-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال)\"?",
        "options": [
          "Penerapan kaidah Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال) sangat dihargai ...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-31-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال)\" (Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif).\nFungsi utama: Memahami kaidah substitusi dan eliminasi fonologis akar kata lemah dalam morfologi Arab mutaqaddim..\nContoh penerapan: \"قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ\" () yang berarti \"Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kaidah",
          "I'lal",
          "dan",
          "Ibdal"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)), menerangkan fungsi dasarnya (Memahami kaidah substitusi dan eliminasi fonologis akar kata...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-31-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"قَوَلَ الرجل\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"قَوَلَ الرجل\" keliru karena: Asal kata قال adalah قَوَلَ yang mengalami i'lal qalb menjadi قال..\nBentuk pembetulan yang tepat adalah: \"قالَ الرجل\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "قالَ",
          "الرجل"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Asal kata قال adalah قَوَلَ yang mengalami i'lal qalb menjadi قال.) dan memberikan bentuk baku: قالَ الرجل."
      },
      {
        "id": "q-ar-gram-31-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-31-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.\".",
        "keywords": [
          "Urusan-urusan",
          "tersebut",
          "menjadi"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-31-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-31-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.\"",
        "scrambledWords": [
          "الْعَالِمُ",
          "سَدِيدًا",
          "مَسْأَلَةِ",
          "قَالَ",
          "قَوْلًا",
          "فِي",
          "الِاجْتِهَادِ"
        ],
        "correctOrder": [
          "قَالَ",
          "الْعَالِمُ",
          "قَوْلًا",
          "سَدِيدًا",
          "فِي",
          "مَسْأَلَةِ",
          "الِاجْتِهَادِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ\". Mengikuti kaidah Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)."
      },
      {
        "id": "q-ar-gram-31-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.\"",
        "scrambledWords": [
          "الْأُمُورُ",
          "الْبَحْثِ",
          "اسْتَقَامَتِ",
          "بَعْدَ",
          "وَالتَّشَاوُرِ"
        ],
        "correctOrder": [
          "اسْتَقَامَتِ",
          "الْأُمُورُ",
          "بَعْدَ",
          "الْبَحْثِ",
          "وَالتَّشَاوُرِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ\". Mengikuti kaidah Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)."
      },
      {
        "id": "q-ar-gram-31-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Pedagang itu menjual barang dagangannya dengan penuh kejujuran.\"",
        "scrambledWords": [
          "التَّاجِرُ",
          "بِالصِّدْقِ",
          "يَبِيعُ",
          "بِضَاعَتَهُ"
        ],
        "correctOrder": [
          "يَبِيعُ",
          "التَّاجِرُ",
          "بِضَاعَتَهُ",
          "بِالصِّدْقِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يَبِيعُ التَّاجِرُ بِضَاعَتَهُ بِالصِّدْقِ\". Mengikuti kaidah Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)."
      },
      {
        "id": "q-ar-gram-31-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: قالَ الرجل\"",
        "scrambledWords": [
          "لَ",
          "لر",
          "قا",
          " ا",
          "جل"
        ],
        "correctOrder": [
          "قا",
          "لَ",
          " ا",
          "لر",
          "جل"
        ],
        "explanation": "Urutan yang tepat adalah: \"قالَ الرجل\". Mengikuti kaidah Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)."
      },
      {
        "id": "q-ar-gram-31-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: قالَ الرجل\"",
        "scrambledWords": [
          "لَ",
          "لر",
          "قا",
          " ا",
          "جل"
        ],
        "correctOrder": [
          "قا",
          "لَ",
          " ا",
          "لر",
          "جل"
        ],
        "explanation": "Urutan yang tepat adalah: \"قالَ الرجل\". Mengikuti kaidah Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)."
      },
      {
        "id": "q-ar-gram-31-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.",
          "Bukan ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.",
          "Urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.",
          "Pedagang itu menjual barang dagangannya dengan penuh kejujuran."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ\" () yang bermakna \"Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.\"."
      },
      {
        "id": "q-ar-gram-31-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ\"",
        "targetSentence": "اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.",
          "Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.",
          "Apakah urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.?",
          "Sangat urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ\" diterjemahkan menjadi \"Urusan-urusan tersebut menjadi lurus setelah pengkajian dan musyawarah.\"."
      },
      {
        "id": "q-ar-gram-31-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "يَبِيعُ التَّاجِرُ بِضَاعَتَهُ بِالصِّدْقِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال) untuk menyatakan makna: \"Pedagang itu menjual barang dagangannya dengan penuh kejujuran.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"يَبِيعُ التَّاجِرُ بِضَاعَتَهُ بِالصِّدْقِ\" yang mempraktikkan rumus Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)."
      },
      {
        "id": "q-ar-gram-31-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.\"!",
        "options": [
          "قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ",
          "قَوَلَ الرجل",
          "اسْتَقَامَتِ الْأُمُورُ بَعْدَ الْبَحْثِ وَالتَّشَاوُرِ [Variasi]",
          "يَبِيعُ التَّاجِرُ بِضَاعَتَهُ بِالصِّدْقِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ\"."
      },
      {
        "id": "q-ar-gram-31-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال)\", respons manakah yang paling sesuai?",
        "options": [
          "قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ (Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.)",
          "قَوَلَ الرجل (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ\" sesuai aturan Kaidah Transformasi Huruf 'Illat (Wawu, Ya', Alif)."
      }
    ]
  },
  {
    "id": "ar-gram-32",
    "languageId": "arabic",
    "level": "Mustawa 4 (Mahir Fusha & Akademik)",
    "unit": 2,
    "title": "Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم)",
    "titleNative": "صيغتا التعجب (ما أفعَلَه وأفْعِلْ به) ونِعْمَ وبِئْسَ",
    "patternFormula": "مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush",
    "summary": "Mengekspresikan kekaguman (ta'ajjub) serta pujian (madh) dan celaan (dzamm) dalam bahasa fusha tinggi.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا — Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!"
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ — Sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "بِئْسَ الْعَمَلُ الِانْتِحَالُ الْأَدَبِيُّ — Seburuk-buruk perbuatan adalah plagiarisme karya ilmiah."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-32-ex-1",
        "native": "مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا",
        "phonetic": "",
        "translationId": "Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!"
      },
      {
        "id": "ar-gram-32-ex-2",
        "native": "نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ",
        "phonetic": "",
        "translationId": "Sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah."
      },
      {
        "id": "ar-gram-32-ex-3",
        "native": "بِئْسَ الْعَمَلُ الِانْتِحَالُ الْأَدَبِيُّ",
        "phonetic": "",
        "translationId": "Seburuk-buruk perbuatan adalah plagiarisme karya ilmiah."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "ما أجملُ اللغةُ",
        "correct": "ما أجملَ اللغةَ",
        "explanation": "Rumus ta'ajjub ما أَفْعَلَ menashabkan objek setelahnya (اللغةَ)."
      },
      {
        "incorrect": "ما أجملُ اللغةُ (kesalahan i'rab)",
        "correct": "ما أجملَ اللغةَ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-32-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا\"?",
        "targetSentence": "مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!",
          "Bukan betapa indahnya bahasa arab dan betapa merdu kefasihan penjelasannya!",
          "Apakah betapa indahnya bahasa arab dan betapa merdu kefasihan penjelasannya!?",
          "Mungkin betapa indahnya bahasa arab dan betapa merdu kefasihan penjelasannya!"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا\" () bermakna \"Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!\"."
      },
      {
        "id": "q-ar-gram-32-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ\"?",
        "targetSentence": "نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.",
          "Bukan sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.",
          "Apakah sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.?",
          "Mungkin sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ\" () bermakna \"Sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.\"."
      },
      {
        "id": "q-ar-gram-32-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"بِئْسَ الْعَمَلُ الِانْتِحَالُ الْأَدَبِيُّ\"?",
        "targetSentence": "بِئْسَ الْعَمَلُ الِانْتِحَالُ الْأَدَبِيُّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Seburuk-buruk perbuatan adalah plagiarisme karya ilmiah.",
          "Bukan seburuk-buruk perbuatan adalah plagiarisme karya ilmiah.",
          "Apakah seburuk-buruk perbuatan adalah plagiarisme karya ilmiah.?",
          "Mungkin seburuk-buruk perbuatan adalah plagiarisme karya ilmiah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"بِئْسَ الْعَمَلُ الِانْتِحَالُ الْأَدَبِيُّ\" () bermakna \"Seburuk-buruk perbuatan adalah plagiarisme karya ilmiah.\"."
      },
      {
        "id": "q-ar-gram-32-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا (Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!)",
          "ما أجملُ اللغةُ (Struktur keliru)",
          "مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush. Contoh baku: \"مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا\"."
      },
      {
        "id": "q-ar-gram-32-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم) merupakan pilar pen...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-32-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush diterapkan untuk menjaga...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-32-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-32-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"ما أجملُ اللغةُ\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Rumus ta'ajjub ما أَفْعَلَ menashabkan objek setelahnya (اللغةَ).",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"ما أجملُ اللغةُ\" salah karena Rumus ta'ajjub ما أَفْعَلَ menashabkan objek setelahnya (اللغةَ).. Bentuk yang benar: \"ما أجملَ اللغةَ\"."
      },
      {
        "id": "q-ar-gram-32-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"ما أجملُ اللغةُ (kesalahan i'rab)\"?",
        "options": [
          "ما أجملَ اللغةَ",
          "ما أجملُ اللغةُ (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "ما أجملُ اللغةُ (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"ما أجملَ اللغةَ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-32-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم)\"?",
        "options": [
          "Penerapan kaidah Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم) sangat dihargai dalam tr...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-32-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم)\" (مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush.\nFungsi utama: Mengekspresikan kekaguman (ta'ajjub) serta pujian (madh) dan celaan (dzamm) dalam bahasa fusha tinggi..\nContoh penerapan: \"مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا\" () yang berarti \"Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Kaidah",
          "Ta'ajjub",
          "dan",
          "Madh/Dzamm"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush), menerangkan fungsi dasarnya (Mengekspresikan kekaguman (ta'ajjub) serta pujian (madh) dan...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-32-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"ما أجملُ اللغةُ\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"ما أجملُ اللغةُ\" keliru karena: Rumus ta'ajjub ما أَفْعَلَ menashabkan objek setelahnya (اللغةَ)..\nBentuk pembetulan yang tepat adalah: \"ما أجملَ اللغةَ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "ما",
          "أجملَ",
          "اللغةَ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Rumus ta'ajjub ما أَفْعَلَ menashabkan objek setelahnya (اللغةَ).) dan memberikan bentuk baku: ما أجملَ اللغةَ."
      },
      {
        "id": "q-ar-gram-32-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-32-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.\".",
        "keywords": [
          "Sebaik-baik",
          "akhlak",
          "adalah"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-32-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-32-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!\"",
        "scrambledWords": [
          "أَجْمَلَ",
          "الْعَرَبِيَّةَ",
          "بَيَانَهَا",
          "مَا",
          "اللُّغَةَ",
          "وَأَعْذَبَ"
        ],
        "correctOrder": [
          "مَا",
          "أَجْمَلَ",
          "اللُّغَةَ",
          "الْعَرَبِيَّةَ",
          "وَأَعْذَبَ",
          "بَيَانَهَا"
        ],
        "explanation": "Urutan yang tepat adalah: \"مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا\". Mengikuti kaidah مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush."
      },
      {
        "id": "q-ar-gram-32-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.\"",
        "scrambledWords": [
          "الْخُلُقُ",
          "فِي",
          "الْعِلْمِيِّ",
          "نِعْمَ",
          "الصِّدْقُ",
          "الْبَحْثِ"
        ],
        "correctOrder": [
          "نِعْمَ",
          "الْخُلُقُ",
          "الصِّدْقُ",
          "فِي",
          "الْبَحْثِ",
          "الْعِلْمِيِّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ\". Mengikuti kaidah مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush."
      },
      {
        "id": "q-ar-gram-32-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Seburuk-buruk perbuatan adalah plagiarisme karya ilmiah.\"",
        "scrambledWords": [
          "الْعَمَلُ",
          "الْأَدَبِيُّ",
          "بِئْسَ",
          "الِانْتِحَالُ"
        ],
        "correctOrder": [
          "بِئْسَ",
          "الْعَمَلُ",
          "الِانْتِحَالُ",
          "الْأَدَبِيُّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"بِئْسَ الْعَمَلُ الِانْتِحَالُ الْأَدَبِيُّ\". Mengikuti kaidah مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush."
      },
      {
        "id": "q-ar-gram-32-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: ما أجملَ اللغةَ\"",
        "scrambledWords": [
          "أجملَ",
          "ما",
          "اللغةَ"
        ],
        "correctOrder": [
          "ما",
          "أجملَ",
          "اللغةَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"ما أجملَ اللغةَ\". Mengikuti kaidah مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush."
      },
      {
        "id": "q-ar-gram-32-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: ما أجملَ اللغةَ\"",
        "scrambledWords": [
          "أجملَ",
          "ما",
          "اللغةَ"
        ],
        "correctOrder": [
          "ما",
          "أجملَ",
          "اللغةَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"ما أجملَ اللغةَ\". Mengikuti kaidah مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush."
      },
      {
        "id": "q-ar-gram-32-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!",
          "Bukan betapa indahnya bahasa arab dan betapa merdu kefasihan penjelasannya!",
          "Sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.",
          "Seburuk-buruk perbuatan adalah plagiarisme karya ilmiah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا\" () yang bermakna \"Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!\"."
      },
      {
        "id": "q-ar-gram-32-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ\"",
        "targetSentence": "نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.",
          "Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!",
          "Apakah sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.?",
          "Sangat sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ\" diterjemahkan menjadi \"Sebaik-baik akhlak adalah kejujuran dalam penelitian ilmiah.\"."
      },
      {
        "id": "q-ar-gram-32-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "بِئْسَ الْعَمَلُ الِانْتِحَالُ الْأَدَبِيُّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم) untuk menyatakan makna: \"Seburuk-buruk perbuatan adalah plagiarisme karya ilmiah.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"بِئْسَ الْعَمَلُ الِانْتِحَالُ الْأَدَبِيُّ\" yang mempraktikkan rumus مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush."
      },
      {
        "id": "q-ar-gram-32-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!\"!",
        "options": [
          "مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا",
          "ما أجملُ اللغةُ",
          "نِعْمَ الْخُلُقُ الصِّدْقُ فِي الْبَحْثِ الْعِلْمِيِّ [Variasi]",
          "بِئْسَ الْعَمَلُ الِانْتِحَالُ الْأَدَبِيُّ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا\"."
      },
      {
        "id": "q-ar-gram-32-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم)\", respons manakah yang paling sesuai?",
        "options": [
          "مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا (Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!)",
          "ما أجملُ اللغةُ (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا\" sesuai aturan مَا أَفْعَلَ + Manshub & نِعْمَ / بِئْسَ + Fa'il + Al-Makhshush."
      }
    ]
  },
  {
    "id": "ar-gram-33",
    "languageId": "arabic",
    "level": "Mustawa 4 (Mahir Fusha & Akademik)",
    "unit": 3,
    "title": "Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع)",
    "titleNative": "قواعد الاشتغال والتنازع في النحو المتقدم",
    "patternFormula": "Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat",
    "summary": "Menganalisis fenomena sintaksis klasik ketika verba dan pronomina bersaing memperebutkan objek gramatikal.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ — Buku itu telah saya baca seluruhnya dengan penuh perhatian."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ — Saya memuliakan sekaligus menghormati profesor yang agung itu."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "اللُّغَةَ الْعَرَبِيَّةَ أَتْقَنْتُ قَوَاعِدَهَا — Bahasa Arab itu telah saya kuasai kaidah-kaidah tata bahasanya."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-33-ex-1",
        "native": "الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ",
        "phonetic": "",
        "translationId": "Buku itu telah saya baca seluruhnya dengan penuh perhatian."
      },
      {
        "id": "ar-gram-33-ex-2",
        "native": "أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ",
        "phonetic": "",
        "translationId": "Saya memuliakan sekaligus menghormati profesor yang agung itu."
      },
      {
        "id": "ar-gram-33-ex-3",
        "native": "اللُّغَةَ الْعَرَبِيَّةَ أَتْقَنْتُ قَوَاعِدَهَا",
        "phonetic": "",
        "translationId": "Bahasa Arab itu telah saya kuasai kaidah-kaidah tata bahasanya."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "الكتابُ قرأتُه (di isytighal rajih)",
        "correct": "الكتابَ قرأتُه",
        "explanation": "Dalam isytighal, mendahulukan isim manshub adalah pilihan yang paling fasih."
      },
      {
        "incorrect": "الكتابُ قرأتُه (di isytighal rajih) (kesalahan i'rab)",
        "correct": "الكتابَ قرأتُه",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-33-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ\"?",
        "targetSentence": "الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Buku itu telah saya baca seluruhnya dengan penuh perhatian.",
          "Bukan buku itu telah saya baca seluruhnya dengan penuh perhatian.",
          "Apakah buku itu telah saya baca seluruhnya dengan penuh perhatian.?",
          "Mungkin buku itu telah saya baca seluruhnya dengan penuh perhatian."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ\" () bermakna \"Buku itu telah saya baca seluruhnya dengan penuh perhatian.\"."
      },
      {
        "id": "q-ar-gram-33-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ\"?",
        "targetSentence": "أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya memuliakan sekaligus menghormati profesor yang agung itu.",
          "Bukan saya memuliakan sekaligus menghormati profesor yang agung itu.",
          "Apakah saya memuliakan sekaligus menghormati profesor yang agung itu.?",
          "Mungkin saya memuliakan sekaligus menghormati profesor yang agung itu."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ\" () bermakna \"Saya memuliakan sekaligus menghormati profesor yang agung itu.\"."
      },
      {
        "id": "q-ar-gram-33-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"اللُّغَةَ الْعَرَبِيَّةَ أَتْقَنْتُ قَوَاعِدَهَا\"?",
        "targetSentence": "اللُّغَةَ الْعَرَبِيَّةَ أَتْقَنْتُ قَوَاعِدَهَا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Bahasa Arab itu telah saya kuasai kaidah-kaidah tata bahasanya.",
          "Bukan bahasa arab itu telah saya kuasai kaidah-kaidah tata bahasanya.",
          "Apakah bahasa arab itu telah saya kuasai kaidah-kaidah tata bahasanya.?",
          "Mungkin bahasa arab itu telah saya kuasai kaidah-kaidah tata bahasanya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"اللُّغَةَ الْعَرَبِيَّةَ أَتْقَنْتُ قَوَاعِدَهَا\" () bermakna \"Bahasa Arab itu telah saya kuasai kaidah-kaidah tata bahasanya.\"."
      },
      {
        "id": "q-ar-gram-33-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ (Buku itu telah saya baca seluruhnya dengan penuh perhatian.)",
          "الكتابُ قرأتُه (di isytighal rajih) (Struktur keliru)",
          "الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat. Contoh baku: \"الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ\"."
      },
      {
        "id": "q-ar-gram-33-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع) merupakan pilar ...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-33-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat diterapkan untuk menjaga ...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-33-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-33-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"الكتابُ قرأتُه (di isytighal rajih)\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Dalam isytighal, mendahulukan isim manshub adalah pilihan yang paling fasih.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الكتابُ قرأتُه (di isytighal rajih)\" salah karena Dalam isytighal, mendahulukan isim manshub adalah pilihan yang paling fasih.. Bentuk yang benar: \"الكتابَ قرأتُه\"."
      },
      {
        "id": "q-ar-gram-33-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"الكتابُ قرأتُه (di isytighal rajih) (kesalahan i'rab)\"?",
        "options": [
          "الكتابَ قرأتُه",
          "الكتابُ قرأتُه (di isytighal rajih) (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "الكتابُ قرأتُه (di isytighal rajih) (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"الكتابَ قرأتُه\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-33-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع)\"?",
        "options": [
          "Penerapan kaidah Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع) sangat dihargai dalam...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-33-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع)\" (Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat.\nFungsi utama: Menganalisis fenomena sintaksis klasik ketika verba dan pronomina bersaing memperebutkan objek gramatikal..\nContoh penerapan: \"الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ\" () yang berarti \"Buku itu telah saya baca seluruhnya dengan penuh perhatian.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Sintaksis",
          "Lanjutan:",
          "Isytighal",
          "dan"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat), menerangkan fungsi dasarnya (Menganalisis fenomena sintaksis klasik ketika verba dan pron...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-33-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"الكتابُ قرأتُه (di isytighal rajih)\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"الكتابُ قرأتُه (di isytighal rajih)\" keliru karena: Dalam isytighal, mendahulukan isim manshub adalah pilihan yang paling fasih..\nBentuk pembetulan yang tepat adalah: \"الكتابَ قرأتُه\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "الكتابَ",
          "قرأتُه"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Dalam isytighal, mendahulukan isim manshub adalah pilihan yang paling fasih.) dan memberikan bentuk baku: الكتابَ قرأتُه."
      },
      {
        "id": "q-ar-gram-33-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-33-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Saya memuliakan sekaligus menghormati profesor yang agung itu.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Saya memuliakan sekaligus menghormati profesor yang agung itu.\".",
        "keywords": [
          "Saya",
          "memuliakan",
          "sekaligus"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-33-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-33-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Buku itu telah saya baca seluruhnya dengan penuh perhatian.\"",
        "scrambledWords": [
          "قَرَأْتُهُ",
          "بِاهْتِمَامٍ",
          "الْكِتَابَ",
          "كُلَّهُ"
        ],
        "correctOrder": [
          "الْكِتَابَ",
          "قَرَأْتُهُ",
          "كُلَّهُ",
          "بِاهْتِمَامٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ\". Mengikuti kaidah Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat."
      },
      {
        "id": "q-ar-gram-33-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Saya memuliakan sekaligus menghormati profesor yang agung itu.\"",
        "scrambledWords": [
          "وَاحْتَرَمْتُ",
          "الْجَلِيلَ",
          "أَكْرَمْتُ",
          "الْأُسْتَاذَ"
        ],
        "correctOrder": [
          "أَكْرَمْتُ",
          "وَاحْتَرَمْتُ",
          "الْأُسْتَاذَ",
          "الْجَلِيلَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ\". Mengikuti kaidah Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat."
      },
      {
        "id": "q-ar-gram-33-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bahasa Arab itu telah saya kuasai kaidah-kaidah tata bahasanya.\"",
        "scrambledWords": [
          "الْعَرَبِيَّةَ",
          "قَوَاعِدَهَا",
          "اللُّغَةَ",
          "أَتْقَنْتُ"
        ],
        "correctOrder": [
          "اللُّغَةَ",
          "الْعَرَبِيَّةَ",
          "أَتْقَنْتُ",
          "قَوَاعِدَهَا"
        ],
        "explanation": "Urutan yang tepat adalah: \"اللُّغَةَ الْعَرَبِيَّةَ أَتْقَنْتُ قَوَاعِدَهَا\". Mengikuti kaidah Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat."
      },
      {
        "id": "q-ar-gram-33-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: الكتابَ قرأتُه\"",
        "scrambledWords": [
          "تاب",
          "رأت",
          "الك",
          "َ ق",
          "ُه"
        ],
        "correctOrder": [
          "الك",
          "تاب",
          "َ ق",
          "رأت",
          "ُه"
        ],
        "explanation": "Urutan yang tepat adalah: \"الكتابَ قرأتُه\". Mengikuti kaidah Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat."
      },
      {
        "id": "q-ar-gram-33-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: الكتابَ قرأتُه\"",
        "scrambledWords": [
          "تاب",
          "رأت",
          "الك",
          "َ ق",
          "ُه"
        ],
        "correctOrder": [
          "الك",
          "تاب",
          "َ ق",
          "رأت",
          "ُه"
        ],
        "explanation": "Urutan yang tepat adalah: \"الكتابَ قرأتُه\". Mengikuti kaidah Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat."
      },
      {
        "id": "q-ar-gram-33-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Buku itu telah saya baca seluruhnya dengan penuh perhatian.",
          "Bukan buku itu telah saya baca seluruhnya dengan penuh perhatian.",
          "Saya memuliakan sekaligus menghormati profesor yang agung itu.",
          "Bahasa Arab itu telah saya kuasai kaidah-kaidah tata bahasanya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ\" () yang bermakna \"Buku itu telah saya baca seluruhnya dengan penuh perhatian.\"."
      },
      {
        "id": "q-ar-gram-33-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ\"",
        "targetSentence": "أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Saya memuliakan sekaligus menghormati profesor yang agung itu.",
          "Buku itu telah saya baca seluruhnya dengan penuh perhatian.",
          "Apakah saya memuliakan sekaligus menghormati profesor yang agung itu.?",
          "Sangat saya memuliakan sekaligus menghormati profesor yang agung itu."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ\" diterjemahkan menjadi \"Saya memuliakan sekaligus menghormati profesor yang agung itu.\"."
      },
      {
        "id": "q-ar-gram-33-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "اللُّغَةَ الْعَرَبِيَّةَ أَتْقَنْتُ قَوَاعِدَهَا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع) untuk menyatakan makna: \"Bahasa Arab itu telah saya kuasai kaidah-kaidah tata bahasanya.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"اللُّغَةَ الْعَرَبِيَّةَ أَتْقَنْتُ قَوَاعِدَهَا\" yang mempraktikkan rumus Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat."
      },
      {
        "id": "q-ar-gram-33-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Buku itu telah saya baca seluruhnya dengan penuh perhatian.\"!",
        "options": [
          "الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ",
          "الكتابُ قرأتُه (di isytighal rajih)",
          "أَكْرَمْتُ وَاحْتَرَمْتُ الْأُسْتَاذَ الْجَلِيلَ [Variasi]",
          "اللُّغَةَ الْعَرَبِيَّةَ أَتْقَنْتُ قَوَاعِدَهَا [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ\"."
      },
      {
        "id": "q-ar-gram-33-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع)\", respons manakah yang paling sesuai?",
        "options": [
          "الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ (Buku itu telah saya baca seluruhnya dengan penuh perhatian.)",
          "الكتابُ قرأتُه (di isytighal rajih) (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ\" sesuai aturan Pengaturan Hubungan Kata Kerja Ganda terhadap Objek Berserikat."
      }
    ]
  },
  {
    "id": "ar-gram-34",
    "languageId": "arabic",
    "level": "Mustawa 4 (Mahir Fusha & Akademik)",
    "unit": 4,
    "title": "Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني)",
    "titleNative": "أضرب الخبر والإنشاء الطلبي وغير الطلبي",
    "patternFormula": "Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)",
    "summary": "Membedakan kalimat berita informatif dengan kalimat performatif serta derajat penggunaan taukid penegas.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ — Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ — Apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?"
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا — Seandainya saja masa muda dapat kembali suatu hari nanti."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-34-ex-1",
        "native": "إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ",
        "phonetic": "",
        "translationId": "Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan."
      },
      {
        "id": "ar-gram-34-ex-2",
        "native": "هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
        "phonetic": "",
        "translationId": "Apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?"
      },
      {
        "id": "ar-gram-34-ex-3",
        "native": "لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا",
        "phonetic": "",
        "translationId": "Seandainya saja masa muda dapat kembali suatu hari nanti."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "إن العلم نور (للمنكر)",
        "correct": "إنّ العلمَ لَنورٌ",
        "explanation": "Untuk lawan bicara yang mengingkari (inkari) wajib menggunakan minimal dua penguat (inna dan lam muzahlaqah)."
      },
      {
        "incorrect": "إن العلم نور (للمنكر) (kesalahan i'rab)",
        "correct": "إنّ العلمَ لَنورٌ",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-34-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ\"?",
        "targetSentence": "إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.",
          "Bukan sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.",
          "Apakah sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.?",
          "Mungkin sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ\" () bermakna \"Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.\"."
      },
      {
        "id": "q-ar-gram-34-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ\"?",
        "targetSentence": "هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?",
          "Bukan apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?",
          "Apakah apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu??",
          "Mungkin apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ\" () bermakna \"Apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?\"."
      },
      {
        "id": "q-ar-gram-34-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا\"?",
        "targetSentence": "لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Seandainya saja masa muda dapat kembali suatu hari nanti.",
          "Bukan seandainya saja masa muda dapat kembali suatu hari nanti.",
          "Apakah seandainya saja masa muda dapat kembali suatu hari nanti.?",
          "Mungkin seandainya saja masa muda dapat kembali suatu hari nanti."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا\" () bermakna \"Seandainya saja masa muda dapat kembali suatu hari nanti.\"."
      },
      {
        "id": "q-ar-gram-34-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ (Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.)",
          "إن العلم نور (للمنكر) (Struktur keliru)",
          "إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari). Contoh baku: \"إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ\"."
      },
      {
        "id": "q-ar-gram-34-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني) merupakan pilar pe...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-34-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari) diterapkan untuk menjaga ketepa...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-34-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-34-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"إن العلم نور (للمنكر)\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Untuk lawan bicara yang mengingkari (inkari) wajib menggunakan minimal dua penguat (inna dan lam muz...",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"إن العلم نور (للمنكر)\" salah karena Untuk lawan bicara yang mengingkari (inkari) wajib menggunakan minimal dua penguat (inna dan lam muzahlaqah).. Bentuk yang benar: \"إنّ العلمَ لَنورٌ\"."
      },
      {
        "id": "q-ar-gram-34-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"إن العلم نور (للمنكر) (kesalahan i'rab)\"?",
        "options": [
          "إنّ العلمَ لَنورٌ",
          "إن العلم نور (للمنكر) (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "إن العلم نور (للمنكر) (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"إنّ العلمَ لَنورٌ\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-34-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني)\"?",
        "options": [
          "Penerapan kaidah Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني) sangat dihargai dalam t...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-34-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني)\" (Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari).\nFungsi utama: Membedakan kalimat berita informatif dengan kalimat performatif serta derajat penggunaan taukid penegas..\nContoh penerapan: \"إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ\" () yang berarti \"Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Balaghah",
          "Ilmu",
          "Ma'ani:",
          "Kalam"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)), menerangkan fungsi dasarnya (Membedakan kalimat berita informatif dengan kalimat performa...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-34-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"إن العلم نور (للمنكر)\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"إن العلم نور (للمنكر)\" keliru karena: Untuk lawan bicara yang mengingkari (inkari) wajib menggunakan minimal dua penguat (inna dan lam muzahlaqah)..\nBentuk pembetulan yang tepat adalah: \"إنّ العلمَ لَنورٌ\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "إنّ",
          "العلمَ",
          "لَنورٌ"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Untuk lawan bicara yang mengingkari (inkari) wajib menggunakan minimal dua penguat (inna dan lam muzahlaqah).) dan memberikan bentuk baku: إنّ العلمَ لَنورٌ."
      },
      {
        "id": "q-ar-gram-34-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-34-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?\".",
        "keywords": [
          "Apakah",
          "sama",
          "orang-orang"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-34-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-34-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.\"",
        "scrambledWords": [
          "الْعِلْمَ",
          "السَّبِيلُ",
          "لِلرُّقِيِّ",
          "إِنَّ",
          "لَهُوَ",
          "الْأَوْحَدُ"
        ],
        "correctOrder": [
          "إِنَّ",
          "الْعِلْمَ",
          "لَهُوَ",
          "السَّبِيلُ",
          "الْأَوْحَدُ",
          "لِلرُّقِيِّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ\". Mengikuti kaidah Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)."
      },
      {
        "id": "q-ar-gram-34-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?\"",
        "scrambledWords": [
          "يَسْتَوِي",
          "يَعْلَمُونَ",
          "لَا",
          "هَلْ",
          "الَّذِينَ",
          "وَالَّذِينَ",
          "يَعْلَمُونَ"
        ],
        "correctOrder": [
          "هَلْ",
          "يَسْتَوِي",
          "الَّذِينَ",
          "يَعْلَمُونَ",
          "وَالَّذِينَ",
          "لَا",
          "يَعْلَمُونَ"
        ],
        "explanation": "Urutan yang tepat adalah: \"هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ\". Mengikuti kaidah Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)."
      },
      {
        "id": "q-ar-gram-34-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Seandainya saja masa muda dapat kembali suatu hari nanti.\"",
        "scrambledWords": [
          "الشَّبَابَ",
          "يَوْمًا",
          "لَيْتَ",
          "يَعُودُ"
        ],
        "correctOrder": [
          "لَيْتَ",
          "الشَّبَابَ",
          "يَعُودُ",
          "يَوْمًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا\". Mengikuti kaidah Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)."
      },
      {
        "id": "q-ar-gram-34-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: إنّ العلمَ لَنورٌ\"",
        "scrambledWords": [
          "العلمَ",
          "إنّ",
          "لَنورٌ"
        ],
        "correctOrder": [
          "إنّ",
          "العلمَ",
          "لَنورٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"إنّ العلمَ لَنورٌ\". Mengikuti kaidah Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)."
      },
      {
        "id": "q-ar-gram-34-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: إنّ العلمَ لَنورٌ\"",
        "scrambledWords": [
          "العلمَ",
          "إنّ",
          "لَنورٌ"
        ],
        "correctOrder": [
          "إنّ",
          "العلمَ",
          "لَنورٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"إنّ العلمَ لَنورٌ\". Mengikuti kaidah Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)."
      },
      {
        "id": "q-ar-gram-34-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.",
          "Bukan sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.",
          "Apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?",
          "Seandainya saja masa muda dapat kembali suatu hari nanti."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ\" () yang bermakna \"Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.\"."
      },
      {
        "id": "q-ar-gram-34-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ\"",
        "targetSentence": "هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?",
          "Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.",
          "Apakah apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu??",
          "Sangat apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ\" diterjemahkan menjadi \"Apakah sama orang-orang yang berilmu pengetahuan dengan orang-orang yang tidak berilmu?\"."
      },
      {
        "id": "q-ar-gram-34-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني) untuk menyatakan makna: \"Seandainya saja masa muda dapat kembali suatu hari nanti.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا\" yang mempraktikkan rumus Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)."
      },
      {
        "id": "q-ar-gram-34-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.\"!",
        "options": [
          "إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ",
          "إن العلم نور (للمنكر)",
          "هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ [Variasi]",
          "لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ\"."
      },
      {
        "id": "q-ar-gram-34-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني)\", respons manakah yang paling sesuai?",
        "options": [
          "إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ (Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.)",
          "إن العلم نور (للمنكر) (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ\" sesuai aturan Tingkatan Penegasan Retorika (Ibtida'i, Thalabi, Inkari)."
      }
    ]
  },
  {
    "id": "ar-gram-35",
    "languageId": "arabic",
    "level": "Mustawa 4 (Mahir Fusha & Akademik)",
    "unit": 5,
    "title": "Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان)",
    "titleNative": "التشبيه وأركانه والاستعارة والمجاز العقلي واللغوي",
    "patternFormula": "Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)",
    "summary": "Kajian estetika sastra Arab dalam menyerupakan konsep abstrak dan metafora imajinatif karya sastrawan.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ — Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ — Bumi tersenyum dengan bermekarannya bunga-bunga di musim semi."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "يَدُ اللَّهِ مَعَ الْجَمَاعَةِ فِي الْعَمَلِ الْخَيْرِيِّ — Pertolongan Allah menyertai jamaah dalam amal kebajikan."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-35-ex-1",
        "native": "الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ",
        "phonetic": "",
        "translationId": "Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya."
      },
      {
        "id": "ar-gram-35-ex-2",
        "native": "ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ",
        "phonetic": "",
        "translationId": "Bumi tersenyum dengan bermekarannya bunga-bunga di musim semi."
      },
      {
        "id": "ar-gram-35-ex-3",
        "native": "يَدُ اللَّهِ مَعَ الْجَمَاعَةِ فِي الْعَمَلِ الْخَيْرِيِّ",
        "phonetic": "",
        "translationId": "Pertolongan Allah menyertai jamaah dalam amal kebajikan."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "العالم بحر (تشبيه مرسل)",
        "correct": "العالم كالبحر",
        "explanation": "Penyebutan kaf tasybih menjadikan rukun penyerupaan eksplisit dan indah."
      },
      {
        "incorrect": "العالم بحر (تشبيه مرسل) (kesalahan i'rab)",
        "correct": "العالم كالبحر",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-35-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ\"?",
        "targetSentence": "الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.",
          "Bukan seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.",
          "Apakah seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.?",
          "Mungkin seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ\" () bermakna \"Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.\"."
      },
      {
        "id": "q-ar-gram-35-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ\"?",
        "targetSentence": "ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.",
          "Bukan bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.",
          "Apakah bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.?",
          "Mungkin bumi tersenyum dengan bermekarannya bunga-bunga di musim semi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ\" () bermakna \"Bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.\"."
      },
      {
        "id": "q-ar-gram-35-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"يَدُ اللَّهِ مَعَ الْجَمَاعَةِ فِي الْعَمَلِ الْخَيْرِيِّ\"?",
        "targetSentence": "يَدُ اللَّهِ مَعَ الْجَمَاعَةِ فِي الْعَمَلِ الْخَيْرِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Pertolongan Allah menyertai jamaah dalam amal kebajikan.",
          "Bukan pertolongan allah menyertai jamaah dalam amal kebajikan.",
          "Apakah pertolongan allah menyertai jamaah dalam amal kebajikan.?",
          "Mungkin pertolongan allah menyertai jamaah dalam amal kebajikan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يَدُ اللَّهِ مَعَ الْجَمَاعَةِ فِي الْعَمَلِ الْخَيْرِيِّ\" () bermakna \"Pertolongan Allah menyertai jamaah dalam amal kebajikan.\"."
      },
      {
        "id": "q-ar-gram-35-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ (Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.)",
          "العالم بحر (تشبيه مرسل) (Struktur keliru)",
          "الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika). Contoh baku: \"الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ\"."
      },
      {
        "id": "q-ar-gram-35-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان) merupakan pilar penting da...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-35-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika) diterapkan untuk menjaga ketepatan...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-35-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-35-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"العالم بحر (تشبيه مرسل)\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Penyebutan kaf tasybih menjadikan rukun penyerupaan eksplisit dan indah.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"العالم بحر (تشبيه مرسل)\" salah karena Penyebutan kaf tasybih menjadikan rukun penyerupaan eksplisit dan indah.. Bentuk yang benar: \"العالم كالبحر\"."
      },
      {
        "id": "q-ar-gram-35-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"العالم بحر (تشبيه مرسل) (kesalahan i'rab)\"?",
        "options": [
          "العالم كالبحر",
          "العالم بحر (تشبيه مرسل) (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "العالم بحر (تشبيه مرسل) (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"العالم كالبحر\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-35-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان)\"?",
        "options": [
          "Penerapan kaidah Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان) sangat dihargai dalam tradisi i...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-35-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان)\" (Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika).\nFungsi utama: Kajian estetika sastra Arab dalam menyerupakan konsep abstrak dan metafora imajinatif karya sastrawan..\nContoh penerapan: \"الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ\" () yang berarti \"Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Balaghah",
          "Ilmu",
          "Bayan:",
          "Tasybih"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)), menerangkan fungsi dasarnya (Kajian estetika sastra Arab dalam menyerupakan konsep abstra...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-35-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"العالم بحر (تشبيه مرسل)\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"العالم بحر (تشبيه مرسل)\" keliru karena: Penyebutan kaf tasybih menjadikan rukun penyerupaan eksplisit dan indah..\nBentuk pembetulan yang tepat adalah: \"العالم كالبحر\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "العالم",
          "كالبحر"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Penyebutan kaf tasybih menjadikan rukun penyerupaan eksplisit dan indah.) dan memberikan bentuk baku: العالم كالبحر."
      },
      {
        "id": "q-ar-gram-35-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika) diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-35-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.\".",
        "keywords": [
          "Bumi",
          "tersenyum",
          "dengan"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-35-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-35-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.\"",
        "scrambledWords": [
          "كَالْبَحْرِ",
          "سَعَةِ",
          "وَفَيْضِهِ",
          "الْعَالِمُ",
          "فِي",
          "عِلْمِهِ"
        ],
        "correctOrder": [
          "الْعَالِمُ",
          "كَالْبَحْرِ",
          "فِي",
          "سَعَةِ",
          "عِلْمِهِ",
          "وَفَيْضِهِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ\". Mengikuti kaidah Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)."
      },
      {
        "id": "q-ar-gram-35-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.\"",
        "scrambledWords": [
          "الْأَرْضُ",
          "الْأَزْهَارِ",
          "الرَّبِيعِ",
          "ابْتَسَمَتِ",
          "بِخُرُوجِ",
          "فِي"
        ],
        "correctOrder": [
          "ابْتَسَمَتِ",
          "الْأَرْضُ",
          "بِخُرُوجِ",
          "الْأَزْهَارِ",
          "فِي",
          "الرَّبِيعِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ\". Mengikuti kaidah Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)."
      },
      {
        "id": "q-ar-gram-35-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Pertolongan Allah menyertai jamaah dalam amal kebajikan.\"",
        "scrambledWords": [
          "اللَّهِ",
          "الْجَمَاعَةِ",
          "الْعَمَلِ",
          "يَدُ",
          "مَعَ",
          "فِي",
          "الْخَيْرِيِّ"
        ],
        "correctOrder": [
          "يَدُ",
          "اللَّهِ",
          "مَعَ",
          "الْجَمَاعَةِ",
          "فِي",
          "الْعَمَلِ",
          "الْخَيْرِيِّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"يَدُ اللَّهِ مَعَ الْجَمَاعَةِ فِي الْعَمَلِ الْخَيْرِيِّ\". Mengikuti kaidah Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)."
      },
      {
        "id": "q-ar-gram-35-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: العالم كالبحر\"",
        "scrambledWords": [
          "الم",
          "لبح",
          "الع",
          " كا",
          "ر"
        ],
        "correctOrder": [
          "الع",
          "الم",
          " كا",
          "لبح",
          "ر"
        ],
        "explanation": "Urutan yang tepat adalah: \"العالم كالبحر\". Mengikuti kaidah Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)."
      },
      {
        "id": "q-ar-gram-35-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: العالم كالبحر\"",
        "scrambledWords": [
          "الم",
          "لبح",
          "الع",
          " كا",
          "ر"
        ],
        "correctOrder": [
          "الع",
          "الم",
          " كا",
          "لبح",
          "ر"
        ],
        "explanation": "Urutan yang tepat adalah: \"العالم كالبحر\". Mengikuti kaidah Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)."
      },
      {
        "id": "q-ar-gram-35-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.",
          "Bukan seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.",
          "Bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.",
          "Pertolongan Allah menyertai jamaah dalam amal kebajikan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ\" () yang bermakna \"Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.\"."
      },
      {
        "id": "q-ar-gram-35-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ\"",
        "targetSentence": "ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.",
          "Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.",
          "Apakah bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.?",
          "Sangat bumi tersenyum dengan bermekarannya bunga-bunga di musim semi."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ\" diterjemahkan menjadi \"Bumi tersenyum dengan bermekarannya bunga-bunga di musim semi.\"."
      },
      {
        "id": "q-ar-gram-35-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "يَدُ اللَّهِ مَعَ الْجَمَاعَةِ فِي الْعَمَلِ الْخَيْرِيِّ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان) untuk menyatakan makna: \"Pertolongan Allah menyertai jamaah dalam amal kebajikan.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"يَدُ اللَّهِ مَعَ الْجَمَاعَةِ فِي الْعَمَلِ الْخَيْرِيِّ\" yang mempraktikkan rumus Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)."
      },
      {
        "id": "q-ar-gram-35-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.\"!",
        "options": [
          "الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ",
          "العالم بحر (تشبيه مرسل)",
          "ابْتَسَمَتِ الْأَرْضُ بِخُرُوجِ الْأَزْهَارِ فِي الرَّبِيعِ [Variasi]",
          "يَدُ اللَّهِ مَعَ الْجَمَاعَةِ فِي الْعَمَلِ الْخَيْرِيِّ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ\"."
      },
      {
        "id": "q-ar-gram-35-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان)\", respons manakah yang paling sesuai?",
        "options": [
          "الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ (Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.)",
          "العالم بحر (تشبيه مرسل) (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ\" sesuai aturan Tasybih (Penyerupaan) & Majaz (Makna Kiasan Estetika)."
      }
    ]
  },
  {
    "id": "ar-gram-36",
    "languageId": "arabic",
    "level": "Mustawa 4 (Mahir Fusha & Akademik)",
    "unit": 6,
    "title": "Wacana Akademik dan Sitasi Kitab Turats (النص التراثي)",
    "titleNative": "طرائق توثيق النصوص التراثية والمصطلحات الأكاديمية",
    "patternFormula": "قال المصنف رحمه الله / ونقل ابن جني في الخصائص",
    "summary": "Kaidah membaca, mensitir, dan menganalisis naskah manuskrip klasik Arab dalam skripsi studi Islam dan linguistik.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Wacana Akademik dan Sitasi Kitab Turats (النص التراثي) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ — Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah قال المصنف رحمه الله / ونقل ابن جني في الخصائص diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى — Sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "تُعَدُّ الْمَخْطُوطَاتُ الْعَرَبِيَّةُ كَنْزًا حَضَارِيًّا فَرِيدًا — Manuskrip-manuskrip Arab dinilai sebagai khazanah peradaban yang tiada duanya."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-36-ex-1",
        "native": "ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ",
        "phonetic": "",
        "translationId": "Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan."
      },
      {
        "id": "ar-gram-36-ex-2",
        "native": "يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى",
        "phonetic": "",
        "translationId": "Sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna."
      },
      {
        "id": "ar-gram-36-ex-3",
        "native": "تُعَدُّ الْمَخْطُوطَاتُ الْعَرَبِيَّةُ كَنْزًا حَضَارِيًّا فَرِيدًا",
        "phonetic": "",
        "translationId": "Manuskrip-manuskrip Arab dinilai sebagai khazanah peradaban yang tiada duanya."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "قال سيبويه أن",
        "correct": "قال سيبويه: إنّ...",
        "explanation": "Setelah fi'il qala, partikel inna wajib dibaca kasrah (إنّ) bukan anna."
      },
      {
        "incorrect": "قال سيبويه أن (kesalahan i'rab)",
        "correct": "قال سيبويه: إنّ...",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Wacana Akademik dan Sitasi Kitab Turats (النص التراثي) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-36-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ\"?",
        "targetSentence": "ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.",
          "Bukan ibnu khaldun menyebutkan dalam muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.",
          "Apakah ibnu khaldun menyebutkan dalam muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.?",
          "Mungkin ibnu khaldun menyebutkan dalam muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ\" () bermakna \"Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.\"."
      },
      {
        "id": "q-ar-gram-36-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى\"?",
        "targetSentence": "يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.",
          "Bukan sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.",
          "Apakah sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.?",
          "Mungkin sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى\" () bermakna \"Sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.\"."
      },
      {
        "id": "q-ar-gram-36-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"تُعَدُّ الْمَخْطُوطَاتُ الْعَرَبِيَّةُ كَنْزًا حَضَارِيًّا فَرِيدًا\"?",
        "targetSentence": "تُعَدُّ الْمَخْطُوطَاتُ الْعَرَبِيَّةُ كَنْزًا حَضَارِيًّا فَرِيدًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Manuskrip-manuskrip Arab dinilai sebagai khazanah peradaban yang tiada duanya.",
          "Bukan manuskrip-manuskrip arab dinilai sebagai khazanah peradaban yang tiada duanya.",
          "Apakah manuskrip-manuskrip arab dinilai sebagai khazanah peradaban yang tiada duanya.?",
          "Mungkin manuskrip-manuskrip arab dinilai sebagai khazanah peradaban yang tiada duanya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تُعَدُّ الْمَخْطُوطَاتُ الْعَرَبِيَّةُ كَنْزًا حَضَارِيًّا فَرِيدًا\" () bermakna \"Manuskrip-manuskrip Arab dinilai sebagai khazanah peradaban yang tiada duanya.\"."
      },
      {
        "id": "q-ar-gram-36-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"قال المصنف رحمه الله / ونقل ابن جني في الخصائص\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ (Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.)",
          "قال سيبويه أن (Struktur keliru)",
          "ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Wacana Akademik dan Sitasi Kitab Turats (النص التراثي)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: قال المصنف رحمه الله / ونقل ابن جني في الخصائص. Contoh baku: \"ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ\"."
      },
      {
        "id": "q-ar-gram-36-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Wacana Akademik dan Sitasi Kitab Turats (النص التراثي) merupakan pilar penting...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Wacana Akademik dan Sitasi Kitab Turats (النص التراثي) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-36-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah قال المصنف رحمه الله / ونقل ابن جني في الخصائص diterapkan untuk menjaga ketepatan baris ...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah قال المصنف رحمه الله / ونقل ابن جني في الخصائص diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-36-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-36-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"قال سيبويه أن\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Setelah fi'il qala, partikel inna wajib dibaca kasrah (إنّ) bukan anna.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قال سيبويه أن\" salah karena Setelah fi'il qala, partikel inna wajib dibaca kasrah (إنّ) bukan anna.. Bentuk yang benar: \"قال سيبويه: إنّ...\"."
      },
      {
        "id": "q-ar-gram-36-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"قال سيبويه أن (kesalahan i'rab)\"?",
        "options": [
          "قال سيبويه: إنّ...",
          "قال سيبويه أن (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "قال سيبويه أن (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"قال سيبويه: إنّ...\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-36-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Wacana Akademik dan Sitasi Kitab Turats (النص التراثي)\"?",
        "options": [
          "Penerapan kaidah Wacana Akademik dan Sitasi Kitab Turats (النص التراثي) sangat dihargai dalam tradis...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Wacana Akademik dan Sitasi Kitab Turats (النص التراثي) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-36-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Wacana Akademik dan Sitasi Kitab Turats (النص التراثي)\" (قال المصنف رحمه الله / ونقل ابن جني في الخصائص), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: قال المصنف رحمه الله / ونقل ابن جني في الخصائص.\nFungsi utama: Kaidah membaca, mensitir, dan menganalisis naskah manuskrip klasik Arab dalam skripsi studi Islam dan linguistik..\nContoh penerapan: \"ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ\" () yang berarti \"Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Wacana",
          "Akademik",
          "dan",
          "Sitasi"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (قال المصنف رحمه الله / ونقل ابن جني في الخصائص), menerangkan fungsi dasarnya (Kaidah membaca, mensitir, dan menganalisis naskah manuskrip ...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-36-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"قال سيبويه أن\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"قال سيبويه أن\" keliru karena: Setelah fi'il qala, partikel inna wajib dibaca kasrah (إنّ) bukan anna..\nBentuk pembetulan yang tepat adalah: \"قال سيبويه: إنّ...\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "قال",
          "سيبويه:",
          "إنّ..."
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Setelah fi'il qala, partikel inna wajib dibaca kasrah (إنّ) bukan anna.) dan memberikan bentuk baku: قال سيبويه: إنّ...."
      },
      {
        "id": "q-ar-gram-36-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah قال المصنف رحمه الله / ونقل ابن جني في الخصائص diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-36-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"قال المصنف رحمه الله / ونقل ابن جني في الخصائص\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.\".",
        "keywords": [
          "Sibawaih",
          "berpandangan",
          "dalam"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-36-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Wacana Akademik dan Sitasi Kitab Turats (النص التراثي)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Wacana Akademik dan Sitasi Kitab Turats (النص التراثي) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Wacana Akademik dan Sitasi Kitab Turats (النص التراثي) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-36-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.\"",
        "scrambledWords": [
          "ابْنُ",
          "فِي",
          "أَنَّ",
          "مَلَكَةٌ",
          "ذَكَرَ",
          "خَلْدُونَ",
          "مُقَدِّمَتِهِ",
          "اللُّغَةَ",
          "صِنَاعِيَّةٌ"
        ],
        "correctOrder": [
          "ذَكَرَ",
          "ابْنُ",
          "خَلْدُونَ",
          "فِي",
          "مُقَدِّمَتِهِ",
          "أَنَّ",
          "اللُّغَةَ",
          "مَلَكَةٌ",
          "صِنَاعِيَّةٌ"
        ],
        "explanation": "Urutan yang tepat adalah: \"ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ\". Mengikuti kaidah قال المصنف رحمه الله / ونقل ابن جني في الخصائص."
      },
      {
        "id": "q-ar-gram-36-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.\"",
        "scrambledWords": [
          "سِيبَوَيْهِ",
          "كِتَابِهِ",
          "الْإِعْرَابَ",
          "الْمَعْنَى",
          "يَرَى",
          "فِي",
          "أَنَّ",
          "مِعْيَارُ"
        ],
        "correctOrder": [
          "يَرَى",
          "سِيبَوَيْهِ",
          "فِي",
          "كِتَابِهِ",
          "أَنَّ",
          "الْإِعْرَابَ",
          "مِعْيَارُ",
          "الْمَعْنَى"
        ],
        "explanation": "Urutan yang tepat adalah: \"يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى\". Mengikuti kaidah قال المصنف رحمه الله / ونقل ابن جني في الخصائص."
      },
      {
        "id": "q-ar-gram-36-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Manuskrip-manuskrip Arab dinilai sebagai khazanah peradaban yang tiada duanya.\"",
        "scrambledWords": [
          "الْمَخْطُوطَاتُ",
          "كَنْزًا",
          "فَرِيدًا",
          "تُعَدُّ",
          "الْعَرَبِيَّةُ",
          "حَضَارِيًّا"
        ],
        "correctOrder": [
          "تُعَدُّ",
          "الْمَخْطُوطَاتُ",
          "الْعَرَبِيَّةُ",
          "كَنْزًا",
          "حَضَارِيًّا",
          "فَرِيدًا"
        ],
        "explanation": "Urutan yang tepat adalah: \"تُعَدُّ الْمَخْطُوطَاتُ الْعَرَبِيَّةُ كَنْزًا حَضَارِيًّا فَرِيدًا\". Mengikuti kaidah قال المصنف رحمه الله / ونقل ابن جني في الخصائص."
      },
      {
        "id": "q-ar-gram-36-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: قال سيبويه: إنّ...\"",
        "scrambledWords": [
          "سيبويه",
          "قال",
          "إنّ"
        ],
        "correctOrder": [
          "قال",
          "سيبويه",
          "إنّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"قال سيبويه: إنّ...\". Mengikuti kaidah قال المصنف رحمه الله / ونقل ابن جني في الخصائص."
      },
      {
        "id": "q-ar-gram-36-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: قال سيبويه: إنّ...\"",
        "scrambledWords": [
          "سيبويه",
          "قال",
          "إنّ"
        ],
        "correctOrder": [
          "قال",
          "سيبويه",
          "إنّ"
        ],
        "explanation": "Urutan yang tepat adalah: \"قال سيبويه: إنّ...\". Mengikuti kaidah قال المصنف رحمه الله / ونقل ابن جني في الخصائص."
      },
      {
        "id": "q-ar-gram-36-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.",
          "Bukan ibnu khaldun menyebutkan dalam muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.",
          "Sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.",
          "Manuskrip-manuskrip Arab dinilai sebagai khazanah peradaban yang tiada duanya."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ\" () yang bermakna \"Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.\"."
      },
      {
        "id": "q-ar-gram-36-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى\"",
        "targetSentence": "يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.",
          "Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.",
          "Apakah sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.?",
          "Sangat sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى\" diterjemahkan menjadi \"Sibawaih berpandangan dalam kitabnya bahwa i'rab adalah tolok ukur makna.\"."
      },
      {
        "id": "q-ar-gram-36-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "تُعَدُّ الْمَخْطُوطَاتُ الْعَرَبِيَّةُ كَنْزًا حَضَارِيًّا فَرِيدًا",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Wacana Akademik dan Sitasi Kitab Turats (النص التراثي) untuk menyatakan makna: \"Manuskrip-manuskrip Arab dinilai sebagai khazanah peradaban yang tiada duanya.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"تُعَدُّ الْمَخْطُوطَاتُ الْعَرَبِيَّةُ كَنْزًا حَضَارِيًّا فَرِيدًا\" yang mempraktikkan rumus قال المصنف رحمه الله / ونقل ابن جني في الخصائص."
      },
      {
        "id": "q-ar-gram-36-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.\"!",
        "options": [
          "ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ",
          "قال سيبويه أن",
          "يَرَى سِيبَوَيْهِ فِي كِتَابِهِ أَنَّ الْإِعْرَابَ مِعْيَارُ الْمَعْنَى [Variasi]",
          "تُعَدُّ الْمَخْطُوطَاتُ الْعَرَبِيَّةُ كَنْزًا حَضَارِيًّا فَرِيدًا [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ\"."
      },
      {
        "id": "q-ar-gram-36-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Wacana Akademik dan Sitasi Kitab Turats (النص التراثي)\", respons manakah yang paling sesuai?",
        "options": [
          "ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ (Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.)",
          "قال سيبويه أن (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ\" sesuai aturan قال المصنف رحمه الله / ونقل ابن جني في الخصائص."
      }
    ]
  },
  {
    "id": "ar-gram-37",
    "languageId": "arabic",
    "level": "Mustawa 4 (Mahir Fusha & Akademik)",
    "unit": 7,
    "title": "Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة)",
    "titleNative": "صياغة مشكلة البحث والفرضيات باللغة الفصحى المعاصرة",
    "patternFormula": "تكمن مشكلة البحث في... / ويهدف إلى استقصاء...",
    "summary": "Kaidah merumuskan rumusan masalah, hipotesis, dan signifikansi riset dalam bahasa Arab fusha modern institusional.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ — Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah تكمن مشكلة البحث في... / ويهدف إلى استقصاء... diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ — Disertasi ini bertujuan menganalisis wacana media kontemporer."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "تَنْبَثِقُ أَهَمِّيَّةُ الْمَوْضُوعِ مِنْ مُعَالَجَتِهِ لِقَضَايَا تَرْبَوِيَّةٍ مُلِحَّةٍ — Signifikansi topik ini lahir dari pembahasannya terhadap isu-isu pendidikan yang mendesak."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-37-ex-1",
        "native": "تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ",
        "phonetic": "",
        "translationId": "Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini."
      },
      {
        "id": "ar-gram-37-ex-2",
        "native": "تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ",
        "phonetic": "",
        "translationId": "Disertasi ini bertujuan menganalisis wacana media kontemporer."
      },
      {
        "id": "ar-gram-37-ex-3",
        "native": "تَنْبَثِقُ أَهَمِّيَّةُ الْمَوْضُوعِ مِنْ مُعَالَجَتِهِ لِقَضَايَا تَرْبَوِيَّةٍ مُلِحَّةٍ",
        "phonetic": "",
        "translationId": "Signifikansi topik ini lahir dari pembahasannya terhadap isu-isu pendidikan yang mendesak."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "المشكلة هي عدم وجود",
        "correct": "تكمن المشكلة في ندرة...",
        "explanation": "Gunakan gaya retorika ilmiah fusha tinggi تَكْمُنُ الْمُشْكِلَةُ فِي..."
      },
      {
        "incorrect": "المشكلة هي عدم وجود (kesalahan i'rab)",
        "correct": "تكمن المشكلة في ندرة...",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-37-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ\"?",
        "targetSentence": "تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.",
          "Bukan rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.",
          "Apakah rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.?",
          "Mungkin rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ\" () bermakna \"Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.\"."
      },
      {
        "id": "q-ar-gram-37-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ\"?",
        "targetSentence": "تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Disertasi ini bertujuan menganalisis wacana media kontemporer.",
          "Bukan disertasi ini bertujuan menganalisis wacana media kontemporer.",
          "Apakah disertasi ini bertujuan menganalisis wacana media kontemporer.?",
          "Mungkin disertasi ini bertujuan menganalisis wacana media kontemporer."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ\" () bermakna \"Disertasi ini bertujuan menganalisis wacana media kontemporer.\"."
      },
      {
        "id": "q-ar-gram-37-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"تَنْبَثِقُ أَهَمِّيَّةُ الْمَوْضُوعِ مِنْ مُعَالَجَتِهِ لِقَضَايَا تَرْبَوِيَّةٍ مُلِحَّةٍ\"?",
        "targetSentence": "تَنْبَثِقُ أَهَمِّيَّةُ الْمَوْضُوعِ مِنْ مُعَالَجَتِهِ لِقَضَايَا تَرْبَوِيَّةٍ مُلِحَّةٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Signifikansi topik ini lahir dari pembahasannya terhadap isu-isu pendidikan yang mendesak.",
          "Bukan signifikansi topik ini lahir dari pembahasannya terhadap isu-isu pendidikan yang mendesak.",
          "Apakah signifikansi topik ini lahir dari pembahasannya terhadap isu-isu pendidikan yang mendesak.?",
          "Mungkin signifikansi topik ini lahir dari pembahasannya terhadap isu-isu pendidikan yang mendesak."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تَنْبَثِقُ أَهَمِّيَّةُ الْمَوْضُوعِ مِنْ مُعَالَجَتِهِ لِقَضَايَا تَرْبَوِيَّةٍ مُلِحَّةٍ\" () bermakna \"Signifikansi topik ini lahir dari pembahasannya terhadap isu-isu pendidikan yang mendesak.\"."
      },
      {
        "id": "q-ar-gram-37-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"تكمن مشكلة البحث في... / ويهدف إلى استقصاء...\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ (Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.)",
          "المشكلة هي عدم وجود (Struktur keliru)",
          "تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: تكمن مشكلة البحث في... / ويهدف إلى استقصاء.... Contoh baku: \"تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ\"."
      },
      {
        "id": "q-ar-gram-37-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة) merupakan pilar pentin...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-37-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah تكمن مشكلة البحث في... / ويهدف إلى استقصاء... diterapkan untuk menjaga ketepatan baris h...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah تكمن مشكلة البحث في... / ويهدف إلى استقصاء... diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-37-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-37-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"المشكلة هي عدم وجود\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Gunakan gaya retorika ilmiah fusha tinggi تَكْمُنُ الْمُشْكِلَةُ فِي...",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"المشكلة هي عدم وجود\" salah karena Gunakan gaya retorika ilmiah fusha tinggi تَكْمُنُ الْمُشْكِلَةُ فِي.... Bentuk yang benar: \"تكمن المشكلة في ندرة...\"."
      },
      {
        "id": "q-ar-gram-37-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"المشكلة هي عدم وجود (kesalahan i'rab)\"?",
        "options": [
          "تكمن المشكلة في ندرة...",
          "المشكلة هي عدم وجود (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "المشكلة هي عدم وجود (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"تكمن المشكلة في ندرة...\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-37-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة)\"?",
        "options": [
          "Penerapan kaidah Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة) sangat dihargai dalam tradi...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-37-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة)\" (تكمن مشكلة البحث في... / ويهدف إلى استقصاء...), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: تكمن مشكلة البحث في... / ويهدف إلى استقصاء....\nFungsi utama: Kaidah merumuskan rumusan masalah, hipotesis, dan signifikansi riset dalam bahasa Arab fusha modern institusional..\nContoh penerapan: \"تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ\" () yang berarti \"Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Perumusan",
          "Tesis",
          "Modern",
          "Standard"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (تكمن مشكلة البحث في... / ويهدف إلى استقصاء...), menerangkan fungsi dasarnya (Kaidah merumuskan rumusan masalah, hipotesis, dan signifikan...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-37-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"المشكلة هي عدم وجود\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"المشكلة هي عدم وجود\" keliru karena: Gunakan gaya retorika ilmiah fusha tinggi تَكْمُنُ الْمُشْكِلَةُ فِي....\nBentuk pembetulan yang tepat adalah: \"تكمن المشكلة في ندرة...\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "تكمن",
          "المشكلة",
          "في"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Gunakan gaya retorika ilmiah fusha tinggi تَكْمُنُ الْمُشْكِلَةُ فِي...) dan memberikan bentuk baku: تكمن المشكلة في ندرة...."
      },
      {
        "id": "q-ar-gram-37-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah تكمن مشكلة البحث في... / ويهدف إلى استقصاء... diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-37-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Disertasi ini bertujuan menganalisis wacana media kontemporer.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"تكمن مشكلة البحث في... / ويهدف إلى استقصاء...\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Disertasi ini bertujuan menganalisis wacana media kontemporer.\".",
        "keywords": [
          "Disertasi",
          "ini",
          "bertujuan"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-37-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-37-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.\"",
        "scrambledWords": [
          "مُشْكِلَةُ",
          "فِي",
          "الْأَبْحَاثِ",
          "فِي",
          "الْحَقْلِ",
          "تَكْمُنُ",
          "الدِّرَاسَةِ",
          "نُدْرَةِ",
          "التَّطْبِيقِيَّةِ",
          "هَذَا"
        ],
        "correctOrder": [
          "تَكْمُنُ",
          "مُشْكِلَةُ",
          "الدِّرَاسَةِ",
          "فِي",
          "نُدْرَةِ",
          "الْأَبْحَاثِ",
          "التَّطْبِيقِيَّةِ",
          "فِي",
          "هَذَا",
          "الْحَقْلِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ\". Mengikuti kaidah تكمن مشكلة البحث في... / ويهدف إلى استقصاء...."
      },
      {
        "id": "q-ar-gram-37-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Disertasi ini bertujuan menganalisis wacana media kontemporer.\"",
        "scrambledWords": [
          "هَذِهِ",
          "إِلَى",
          "الْخِطَابِ",
          "الْمُعَاصِرِ",
          "تَهْدِفُ",
          "الْأُطْرُوحَةُ",
          "تَحْلِيلِ",
          "الْإِعْلَامِيِّ"
        ],
        "correctOrder": [
          "تَهْدِفُ",
          "هَذِهِ",
          "الْأُطْرُوحَةُ",
          "إِلَى",
          "تَحْلِيلِ",
          "الْخِطَابِ",
          "الْإِعْلَامِيِّ",
          "الْمُعَاصِرِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ\". Mengikuti kaidah تكمن مشكلة البحث في... / ويهدف إلى استقصاء...."
      },
      {
        "id": "q-ar-gram-37-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Signifikansi topik ini lahir dari pembahasannya terhadap isu-isu pendidikan yang mendesak.\"",
        "scrambledWords": [
          "أَهَمِّيَّةُ",
          "مِنْ",
          "لِقَضَايَا",
          "مُلِحَّةٍ",
          "تَنْبَثِقُ",
          "الْمَوْضُوعِ",
          "مُعَالَجَتِهِ",
          "تَرْبَوِيَّةٍ"
        ],
        "correctOrder": [
          "تَنْبَثِقُ",
          "أَهَمِّيَّةُ",
          "الْمَوْضُوعِ",
          "مِنْ",
          "مُعَالَجَتِهِ",
          "لِقَضَايَا",
          "تَرْبَوِيَّةٍ",
          "مُلِحَّةٍ"
        ],
        "explanation": "Urutan yang tepat adalah: \"تَنْبَثِقُ أَهَمِّيَّةُ الْمَوْضُوعِ مِنْ مُعَالَجَتِهِ لِقَضَايَا تَرْبَوِيَّةٍ مُلِحَّةٍ\". Mengikuti kaidah تكمن مشكلة البحث في... / ويهدف إلى استقصاء...."
      },
      {
        "id": "q-ar-gram-37-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: تكمن المشكلة في ندرة...\"",
        "scrambledWords": [
          "المشكلة",
          "ندرة",
          "تكمن",
          "في"
        ],
        "correctOrder": [
          "تكمن",
          "المشكلة",
          "في",
          "ندرة"
        ],
        "explanation": "Urutan yang tepat adalah: \"تكمن المشكلة في ندرة...\". Mengikuti kaidah تكمن مشكلة البحث في... / ويهدف إلى استقصاء...."
      },
      {
        "id": "q-ar-gram-37-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: تكمن المشكلة في ندرة...\"",
        "scrambledWords": [
          "المشكلة",
          "ندرة",
          "تكمن",
          "في"
        ],
        "correctOrder": [
          "تكمن",
          "المشكلة",
          "في",
          "ندرة"
        ],
        "explanation": "Urutan yang tepat adalah: \"تكمن المشكلة في ندرة...\". Mengikuti kaidah تكمن مشكلة البحث في... / ويهدف إلى استقصاء...."
      },
      {
        "id": "q-ar-gram-37-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.",
          "Bukan rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.",
          "Disertasi ini bertujuan menganalisis wacana media kontemporer.",
          "Signifikansi topik ini lahir dari pembahasannya terhadap isu-isu pendidikan yang mendesak."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ\" () yang bermakna \"Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.\"."
      },
      {
        "id": "q-ar-gram-37-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ\"",
        "targetSentence": "تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Disertasi ini bertujuan menganalisis wacana media kontemporer.",
          "Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.",
          "Apakah disertasi ini bertujuan menganalisis wacana media kontemporer.?",
          "Sangat disertasi ini bertujuan menganalisis wacana media kontemporer."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ\" diterjemahkan menjadi \"Disertasi ini bertujuan menganalisis wacana media kontemporer.\"."
      },
      {
        "id": "q-ar-gram-37-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "تَنْبَثِقُ أَهَمِّيَّةُ الْمَوْضُوعِ مِنْ مُعَالَجَتِهِ لِقَضَايَا تَرْبَوِيَّةٍ مُلِحَّةٍ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة) untuk menyatakan makna: \"Signifikansi topik ini lahir dari pembahasannya terhadap isu-isu pendidikan yang mendesak.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"تَنْبَثِقُ أَهَمِّيَّةُ الْمَوْضُوعِ مِنْ مُعَالَجَتِهِ لِقَضَايَا تَرْبَوِيَّةٍ مُلِحَّةٍ\" yang mempraktikkan rumus تكمن مشكلة البحث في... / ويهدف إلى استقصاء...."
      },
      {
        "id": "q-ar-gram-37-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.\"!",
        "options": [
          "تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ",
          "المشكلة هي عدم وجود",
          "تَهْدِفُ هَذِهِ الْأُطْرُوحَةُ إِلَى تَحْلِيلِ الْخِطَابِ الْإِعْلَامِيِّ الْمُعَاصِرِ [Variasi]",
          "تَنْبَثِقُ أَهَمِّيَّةُ الْمَوْضُوعِ مِنْ مُعَالَجَتِهِ لِقَضَايَا تَرْبَوِيَّةٍ مُلِحَّةٍ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ\"."
      },
      {
        "id": "q-ar-gram-37-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة)\", respons manakah yang paling sesuai?",
        "options": [
          "تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ (Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.)",
          "المشكلة هي عدم وجود (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ\" sesuai aturan تكمن مشكلة البحث في... / ويهدف إلى استقصاء...."
      }
    ]
  },
  {
    "id": "ar-gram-38",
    "languageId": "arabic",
    "level": "Mustawa 4 (Mahir Fusha & Akademik)",
    "unit": 8,
    "title": "Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة)",
    "titleNative": "أساليب الإقناع والمحاججة في المناظرات العلمية",
    "patternFormula": "أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه",
    "summary": "Kaidah orasi formal, argumentasi dialektis, dan bantahan santun dalam forum akademik Timur Tengah.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ — Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ — Dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "نَخْلُصُ مِمَّا تَقَدَّمَ إِلَى وُجُوبِ إِعَادَةِ النَّظَرِ فِي التَّصْنِيفِ — Kami menyimpulkan dari uraian terdahulu mengenai perlunya meninjau ulang klasifikasi tersebut."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-38-ex-1",
        "native": "لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ",
        "phonetic": "",
        "translationId": "Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama."
      },
      {
        "id": "ar-gram-38-ex-2",
        "native": "وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ",
        "phonetic": "",
        "translationId": "Dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama."
      },
      {
        "id": "ar-gram-38-ex-3",
        "native": "نَخْلُصُ مِمَّا تَقَدَّمَ إِلَى وُجُوبِ إِعَادَةِ النَّظَرِ فِي التَّصْنِيفِ",
        "phonetic": "",
        "translationId": "Kami menyimpulkan dari uraian terdahulu mengenai perlunya meninjau ulang klasifikasi tersebut."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "أنت غلطان تماماً",
        "correct": "يحتمل هذا الرأي مناقشةً علميةً",
        "explanation": "Dalam debat akademik Arab, sanggahan disampaikan dengan kehalusan budi bahasa yang tinggi."
      },
      {
        "incorrect": "أنت غلطان تماماً (kesalahan i'rab)",
        "correct": "يحتمل هذا الرأي مناقشةً علميةً",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-38-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ\"?",
        "targetSentence": "لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.",
          "Bukan tidak samar lagi bagi keluasan ilmu anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.",
          "Apakah tidak samar lagi bagi keluasan ilmu anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.?",
          "Mungkin tidak samar lagi bagi keluasan ilmu anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ\" () bermakna \"Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.\"."
      },
      {
        "id": "q-ar-gram-38-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ\"?",
        "targetSentence": "وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.",
          "Bukan dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.",
          "Apakah dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.?",
          "Mungkin dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ\" () bermakna \"Dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.\"."
      },
      {
        "id": "q-ar-gram-38-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"نَخْلُصُ مِمَّا تَقَدَّمَ إِلَى وُجُوبِ إِعَادَةِ النَّظَرِ فِي التَّصْنِيفِ\"?",
        "targetSentence": "نَخْلُصُ مِمَّا تَقَدَّمَ إِلَى وُجُوبِ إِعَادَةِ النَّظَرِ فِي التَّصْنِيفِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kami menyimpulkan dari uraian terdahulu mengenai perlunya meninjau ulang klasifikasi tersebut.",
          "Bukan kami menyimpulkan dari uraian terdahulu mengenai perlunya meninjau ulang klasifikasi tersebut.",
          "Apakah kami menyimpulkan dari uraian terdahulu mengenai perlunya meninjau ulang klasifikasi tersebut.?",
          "Mungkin kami menyimpulkan dari uraian terdahulu mengenai perlunya meninjau ulang klasifikasi tersebut."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"نَخْلُصُ مِمَّا تَقَدَّمَ إِلَى وُجُوبِ إِعَادَةِ النَّظَرِ فِي التَّصْنِيفِ\" () bermakna \"Kami menyimpulkan dari uraian terdahulu mengenai perlunya meninjau ulang klasifikasi tersebut.\"."
      },
      {
        "id": "q-ar-gram-38-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ (Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.)",
          "أنت غلطان تماماً (Struktur keliru)",
          "لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه. Contoh baku: \"لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ\"."
      },
      {
        "id": "q-ar-gram-38-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة) merupakan pilar penting ...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-38-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه diterapkan untuk menjaga ket...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-38-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-38-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"أنت غلطان تماماً\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Dalam debat akademik Arab, sanggahan disampaikan dengan kehalusan budi bahasa yang tinggi.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"أنت غلطان تماماً\" salah karena Dalam debat akademik Arab, sanggahan disampaikan dengan kehalusan budi bahasa yang tinggi.. Bentuk yang benar: \"يحتمل هذا الرأي مناقشةً علميةً\"."
      },
      {
        "id": "q-ar-gram-38-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"أنت غلطان تماماً (kesalahan i'rab)\"?",
        "options": [
          "يحتمل هذا الرأي مناقشةً علميةً",
          "أنت غلطان تماماً (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "أنت غلطان تماماً (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"يحتمل هذا الرأي مناقشةً علميةً\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-38-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة)\"?",
        "options": [
          "Penerapan kaidah Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة) sangat dihargai dalam tradisi...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-38-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة)\" (أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه.\nFungsi utama: Kaidah orasi formal, argumentasi dialektis, dan bantahan santun dalam forum akademik Timur Tengah..\nContoh penerapan: \"لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ\" () yang berarti \"Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Retorika",
          "Khutbah",
          "dan",
          "Debat"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه), menerangkan fungsi dasarnya (Kaidah orasi formal, argumentasi dialektis, dan bantahan san...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-38-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"أنت غلطان تماماً\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"أنت غلطان تماماً\" keliru karena: Dalam debat akademik Arab, sanggahan disampaikan dengan kehalusan budi bahasa yang tinggi..\nBentuk pembetulan yang tepat adalah: \"يحتمل هذا الرأي مناقشةً علميةً\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "يحتمل",
          "هذا",
          "الرأي"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Dalam debat akademik Arab, sanggahan disampaikan dengan kehalusan budi bahasa yang tinggi.) dan memberikan bentuk baku: يحتمل هذا الرأي مناقشةً علميةً."
      },
      {
        "id": "q-ar-gram-38-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-38-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.\".",
        "keywords": [
          "Dan",
          "jawaban",
          "atas"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-38-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-38-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.\"",
        "scrambledWords": [
          "يَخْفَى",
          "شَرِيفِ",
          "أَنَّ",
          "الْمَسْأَلَةَ",
          "خِلَافٍ",
          "الْعُلَمَاءِ",
          "لَا",
          "عَلَى",
          "عِلْمِكُمْ",
          "هَذِهِ",
          "مَحَلُّ",
          "بَيْنَ"
        ],
        "correctOrder": [
          "لَا",
          "يَخْفَى",
          "عَلَى",
          "شَرِيفِ",
          "عِلْمِكُمْ",
          "أَنَّ",
          "هَذِهِ",
          "الْمَسْأَلَةَ",
          "مَحَلُّ",
          "خِلَافٍ",
          "بَيْنَ",
          "الْعُلَمَاءِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ\". Mengikuti kaidah أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه."
      },
      {
        "id": "q-ar-gram-38-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.\"",
        "scrambledWords": [
          "عَنْ",
          "الِاعْتِرَاضِ",
          "فِي",
          "وَالْجَوَابُ",
          "هَذَا",
          "يَتَلَخَّصُ",
          "أَمْرَيْنِ"
        ],
        "correctOrder": [
          "وَالْجَوَابُ",
          "عَنْ",
          "هَذَا",
          "الِاعْتِرَاضِ",
          "يَتَلَخَّصُ",
          "فِي",
          "أَمْرَيْنِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ\". Mengikuti kaidah أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه."
      },
      {
        "id": "q-ar-gram-38-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Kami menyimpulkan dari uraian terdahulu mengenai perlunya meninjau ulang klasifikasi tersebut.\"",
        "scrambledWords": [
          "مِمَّا",
          "إِلَى",
          "إِعَادَةِ",
          "فِي",
          "نَخْلُصُ",
          "تَقَدَّمَ",
          "وُجُوبِ",
          "النَّظَرِ",
          "التَّصْنِيفِ"
        ],
        "correctOrder": [
          "نَخْلُصُ",
          "مِمَّا",
          "تَقَدَّمَ",
          "إِلَى",
          "وُجُوبِ",
          "إِعَادَةِ",
          "النَّظَرِ",
          "فِي",
          "التَّصْنِيفِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"نَخْلُصُ مِمَّا تَقَدَّمَ إِلَى وُجُوبِ إِعَادَةِ النَّظَرِ فِي التَّصْنِيفِ\". Mengikuti kaidah أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه."
      },
      {
        "id": "q-ar-gram-38-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: يحتمل هذا الرأي مناقشةً علميةً\"",
        "scrambledWords": [
          "هذا",
          "مناقشةً",
          "يحتمل",
          "الرأي",
          "علميةً"
        ],
        "correctOrder": [
          "يحتمل",
          "هذا",
          "الرأي",
          "مناقشةً",
          "علميةً"
        ],
        "explanation": "Urutan yang tepat adalah: \"يحتمل هذا الرأي مناقشةً علميةً\". Mengikuti kaidah أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه."
      },
      {
        "id": "q-ar-gram-38-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: يحتمل هذا الرأي مناقشةً علميةً\"",
        "scrambledWords": [
          "هذا",
          "مناقشةً",
          "يحتمل",
          "الرأي",
          "علميةً"
        ],
        "correctOrder": [
          "يحتمل",
          "هذا",
          "الرأي",
          "مناقشةً",
          "علميةً"
        ],
        "explanation": "Urutan yang tepat adalah: \"يحتمل هذا الرأي مناقشةً علميةً\". Mengikuti kaidah أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه."
      },
      {
        "id": "q-ar-gram-38-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.",
          "Bukan tidak samar lagi bagi keluasan ilmu anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.",
          "Dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.",
          "Kami menyimpulkan dari uraian terdahulu mengenai perlunya meninjau ulang klasifikasi tersebut."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ\" () yang bermakna \"Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.\"."
      },
      {
        "id": "q-ar-gram-38-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ\"",
        "targetSentence": "وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.",
          "Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.",
          "Apakah dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.?",
          "Sangat dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ\" diterjemahkan menjadi \"Dan jawaban atas sanggahan ini dapat diringkas ke dalam dua poin utama.\"."
      },
      {
        "id": "q-ar-gram-38-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "نَخْلُصُ مِمَّا تَقَدَّمَ إِلَى وُجُوبِ إِعَادَةِ النَّظَرِ فِي التَّصْنِيفِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة) untuk menyatakan makna: \"Kami menyimpulkan dari uraian terdahulu mengenai perlunya meninjau ulang klasifikasi tersebut.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"نَخْلُصُ مِمَّا تَقَدَّمَ إِلَى وُجُوبِ إِعَادَةِ النَّظَرِ فِي التَّصْنِيفِ\" yang mempraktikkan rumus أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه."
      },
      {
        "id": "q-ar-gram-38-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.\"!",
        "options": [
          "لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ",
          "أنت غلطان تماماً",
          "وَالْجَوَابُ عَنْ هَذَا الِاعْتِرَاضِ يَتَلَخَّصُ فِي أَمْرَيْنِ [Variasi]",
          "نَخْلُصُ مِمَّا تَقَدَّمَ إِلَى وُجُوبِ إِعَادَةِ النَّظَرِ فِي التَّصْنِيفِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ\"."
      },
      {
        "id": "q-ar-gram-38-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة)\", respons manakah yang paling sesuai?",
        "options": [
          "لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ (Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.)",
          "أنت غلطان تماماً (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ\" sesuai aturan أما بعد... / لا يخفى على شريف علمكم / والرد على ذلك من وجوه."
      }
    ]
  },
  {
    "id": "ar-gram-39",
    "languageId": "arabic",
    "level": "Mustawa 4 (Mahir Fusha & Akademik)",
    "unit": 9,
    "title": "Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل)",
    "titleNative": "الجمل التي لها محل من الإعراب والتي لا محل لها",
    "patternFormula": "Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah",
    "summary": "Menganalisis status sintaksis tingkat lanjut seluruh klausa dalam periode wacana yang rumit.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت) — Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at)."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية) — Sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal)."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ — Ilmu pengetahuan meninggikan derajat rumah yang tiada bertiang."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-39-ex-1",
        "native": "هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)",
        "phonetic": "",
        "translationId": "Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at)."
      },
      {
        "id": "ar-gram-39-ex-2",
        "native": "وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية)",
        "phonetic": "",
        "translationId": "Sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal)."
      },
      {
        "id": "ar-gram-39-ex-3",
        "native": "الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ",
        "phonetic": "",
        "translationId": "Ilmu pengetahuan meninggikan derajat rumah yang tiada bertiang."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "جملة في محل رفع فاعل",
        "correct": "الجملة لا تقع فاعلاً صريحاً",
        "explanation": "Klausa utuh dapat menempati posisi i'rab khabar, na'at, atau hal."
      },
      {
        "incorrect": "جملة في محل رفع فاعل (kesalahan i'rab)",
        "correct": "الجملة لا تقع فاعلاً صريحاً",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-39-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)\"?",
        "targetSentence": "هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).",
          "Bukan ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).",
          "Apakah ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).?",
          "Mungkin ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at)."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)\" () bermakna \"Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).\"."
      },
      {
        "id": "q-ar-gram-39-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية)\"?",
        "targetSentence": "وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية)",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).",
          "Bukan sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).",
          "Apakah sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).?",
          "Mungkin sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal)."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية)\" () bermakna \"Sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).\"."
      },
      {
        "id": "q-ar-gram-39-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ\"?",
        "targetSentence": "الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ilmu pengetahuan meninggikan derajat rumah yang tiada bertiang.",
          "Bukan ilmu pengetahuan meninggikan derajat rumah yang tiada bertiang.",
          "Apakah ilmu pengetahuan meninggikan derajat rumah yang tiada bertiang.?",
          "Mungkin ilmu pengetahuan meninggikan derajat rumah yang tiada bertiang."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ\" () bermakna \"Ilmu pengetahuan meninggikan derajat rumah yang tiada bertiang.\"."
      },
      {
        "id": "q-ar-gram-39-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت) (Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).)",
          "جملة في محل رفع فاعل (Struktur keliru)",
          "هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت) [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah. Contoh baku: \"هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)\"."
      },
      {
        "id": "q-ar-gram-39-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل) merupakan pilar penting ...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-39-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah diterapkan untuk menjaga ketepatan baris...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-39-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-39-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"جملة في محل رفع فاعل\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Klausa utuh dapat menempati posisi i'rab khabar, na'at, atau hal.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"جملة في محل رفع فاعل\" salah karena Klausa utuh dapat menempati posisi i'rab khabar, na'at, atau hal.. Bentuk yang benar: \"الجملة لا تقع فاعلاً صريحاً\"."
      },
      {
        "id": "q-ar-gram-39-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"جملة في محل رفع فاعل (kesalahan i'rab)\"?",
        "options": [
          "الجملة لا تقع فاعلاً صريحاً",
          "جملة في محل رفع فاعل (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "جملة في محل رفع فاعل (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"الجملة لا تقع فاعلاً صريحاً\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-39-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل)\"?",
        "options": [
          "Penerapan kaidah Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل) sangat dihargai dalam tradisi...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-39-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل)\" (Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah.\nFungsi utama: Menganalisis status sintaksis tingkat lanjut seluruh klausa dalam periode wacana yang rumit..\nContoh penerapan: \"هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)\" () yang berarti \"Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Analisis",
          "I'rab",
          "Kalimat",
          "Majemuk"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah), menerangkan fungsi dasarnya (Menganalisis status sintaksis tingkat lanjut seluruh klausa ...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-39-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"جملة في محل رفع فاعل\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"جملة في محل رفع فاعل\" keliru karena: Klausa utuh dapat menempati posisi i'rab khabar, na'at, atau hal..\nBentuk pembetulan yang tepat adalah: \"الجملة لا تقع فاعلاً صريحاً\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "الجملة",
          "لا",
          "تقع"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Klausa utuh dapat menempati posisi i'rab khabar, na'at, atau hal.) dan memberikan bentuk baku: الجملة لا تقع فاعلاً صريحاً."
      },
      {
        "id": "q-ar-gram-39-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-39-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية)\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).\".",
        "keywords": [
          "Sang",
          "profesor",
          "tiba"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية)\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-39-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-39-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).\"",
        "scrambledWords": [
          "بَحْثٌ",
          "مُبْهِرَةٌ",
          "في",
          "رفع",
          "هَذَا",
          "نَتَائِجُهُ",
          "(جملة",
          "محل",
          "نعت)"
        ],
        "correctOrder": [
          "هَذَا",
          "بَحْثٌ",
          "نَتَائِجُهُ",
          "مُبْهِرَةٌ",
          "(جملة",
          "في",
          "محل",
          "رفع",
          "نعت)"
        ],
        "explanation": "Urutan yang tepat adalah: \"هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)\". Mengikuti kaidah Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah."
      },
      {
        "id": "q-ar-gram-39-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).\"",
        "scrambledWords": [
          "الْأُسْتَاذُ",
          "طَالِعَةٌ",
          "حالية)",
          "وَصَلَ",
          "وَالشَّمْسُ",
          "(جملة"
        ],
        "correctOrder": [
          "وَصَلَ",
          "الْأُسْتَاذُ",
          "وَالشَّمْسُ",
          "طَالِعَةٌ",
          "(جملة",
          "حالية)"
        ],
        "explanation": "Urutan yang tepat adalah: \"وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية)\". Mengikuti kaidah Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah."
      },
      {
        "id": "q-ar-gram-39-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Ilmu pengetahuan meninggikan derajat rumah yang tiada bertiang.\"",
        "scrambledWords": [
          "يَرْفَعُ",
          "لَا",
          "لَهُ",
          "الْعِلْمُ",
          "بَيْتًا",
          "عِمَادَ"
        ],
        "correctOrder": [
          "الْعِلْمُ",
          "يَرْفَعُ",
          "بَيْتًا",
          "لَا",
          "عِمَادَ",
          "لَهُ"
        ],
        "explanation": "Urutan yang tepat adalah: \"الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ\". Mengikuti kaidah Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah."
      },
      {
        "id": "q-ar-gram-39-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: الجملة لا تقع فاعلاً صريحاً\"",
        "scrambledWords": [
          "لا",
          "فاعلاً",
          "الجملة",
          "تقع",
          "صريحاً"
        ],
        "correctOrder": [
          "الجملة",
          "لا",
          "تقع",
          "فاعلاً",
          "صريحاً"
        ],
        "explanation": "Urutan yang tepat adalah: \"الجملة لا تقع فاعلاً صريحاً\". Mengikuti kaidah Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah."
      },
      {
        "id": "q-ar-gram-39-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: الجملة لا تقع فاعلاً صريحاً\"",
        "scrambledWords": [
          "لا",
          "فاعلاً",
          "الجملة",
          "تقع",
          "صريحاً"
        ],
        "correctOrder": [
          "الجملة",
          "لا",
          "تقع",
          "فاعلاً",
          "صريحاً"
        ],
        "explanation": "Urutan yang tepat adalah: \"الجملة لا تقع فاعلاً صريحاً\". Mengikuti kaidah Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah."
      },
      {
        "id": "q-ar-gram-39-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).",
          "Bukan ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).",
          "Sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).",
          "Ilmu pengetahuan meninggikan derajat rumah yang tiada bertiang."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)\" () yang bermakna \"Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).\"."
      },
      {
        "id": "q-ar-gram-39-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية)\"",
        "targetSentence": "وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية)",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).",
          "Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).",
          "Apakah sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).?",
          "Sangat sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal)."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية)\" diterjemahkan menjadi \"Sang profesor tiba ketika matahari sedang terbit (klausa keterangan keadaan/hal).\"."
      },
      {
        "id": "q-ar-gram-39-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل) untuk menyatakan makna: \"Ilmu pengetahuan meninggikan derajat rumah yang tiada bertiang.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ\" yang mempraktikkan rumus Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah."
      },
      {
        "id": "q-ar-gram-39-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).\"!",
        "options": [
          "هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)",
          "جملة في محل رفع فاعل",
          "وَصَلَ الْأُسْتَاذُ وَالشَّمْسُ طَالِعَةٌ (جملة حالية) [Variasi]",
          "الْعِلْمُ يَرْفَعُ بَيْتًا لَا عِمَادَ لَهُ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)\"."
      },
      {
        "id": "q-ar-gram-39-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل)\", respons manakah yang paling sesuai?",
        "options": [
          "هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت) (Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).)",
          "جملة في محل رفع فاعل (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)\" sesuai aturan Jumlah Khabariyah / Haliyah / Na'tiyah / Shilah."
      }
    ]
  },
  {
    "id": "ar-gram-40",
    "languageId": "arabic",
    "level": "Mustawa 4 (Mahir Fusha & Akademik)",
    "unit": 10,
    "title": "Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي)",
    "titleNative": "تحرير خاتمة البحث وتوصيات لجنة المناقشة والحكم",
    "patternFormula": "وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة",
    "summary": "Sintesis bab penutup, daftar rekomendasi pembuat kebijakan, dan pengumuman yudisium dewan munaqasyah.",
    "explanationSections": [
      {
        "heading": "1. Kaidah Inti",
        "content": "Penerapan kaidah Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku.",
        "ruleList": [
          "وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ — Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum."
        ]
      },
      {
        "heading": "2. Analisis I'rab dan Struktur",
        "content": "Kaidah وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat.",
        "ruleList": [
          "قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى — Komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (Summa Cum Laude)."
        ]
      },
      {
        "heading": "3. Catatan Wacana Akademik",
        "content": "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah.",
        "ruleList": [
          "تُعَدُّ هَذِهِ الدِّرَاسَةُ إِضَافَةً نَوْعِيَّةً لِلْمَكْتَبَةِ الْعَرَبِيَّةِ — Studi penelitian ini dinilai sebagai kontribusi berkualitas tinggi bagi khazanah kepustakaan Arab."
        ]
      }
    ],
    "examples": [
      {
        "id": "ar-gram-40-ex-1",
        "native": "وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ",
        "phonetic": "",
        "translationId": "Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum."
      },
      {
        "id": "ar-gram-40-ex-2",
        "native": "قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى",
        "phonetic": "",
        "translationId": "Komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (Summa Cum Laude)."
      },
      {
        "id": "ar-gram-40-ex-3",
        "native": "تُعَدُّ هَذِهِ الدِّرَاسَةُ إِضَافَةً نَوْعِيَّةً لِلْمَكْتَبَةِ الْعَرَبِيَّةِ",
        "phonetic": "",
        "translationId": "Studi penelitian ini dinilai sebagai kontribusi berkualitas tinggi bagi khazanah kepustakaan Arab."
      }
    ],
    "commonMistakes": [
      {
        "incorrect": "نهاية البحث هنا",
        "correct": "وخاتمة القول ومجمله",
        "explanation": "Gunakan formula penutup wacana akademik Arab klasik-modern yang khidmat."
      },
      {
        "incorrect": "نهاية البحث هنا (kesalahan i'rab)",
        "correct": "وخاتمة القول ومجمله",
        "explanation": "Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha."
      }
    ],
    "culturalContext": "Penerapan kaidah Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah.",
    "practiceQuiz": [
      {
        "id": "q-ar-gram-40-pg-1",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ\"?",
        "targetSentence": "وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.",
          "Bukan sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.",
          "Apakah sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.?",
          "Mungkin sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ\" () bermakna \"Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.\"."
      },
      {
        "id": "q-ar-gram-40-pg-2",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى\"?",
        "targetSentence": "قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (Summa Cum Laude).",
          "Bukan komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (summa cum laude).",
          "Apakah komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (summa cum laude).?",
          "Mungkin komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (summa cum laude)."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى\" () bermakna \"Komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (Summa Cum Laude).\"."
      },
      {
        "id": "q-ar-gram-40-pg-3",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana arti bahasa Indonesia yang paling tepat dari kalimat: \"تُعَدُّ هَذِهِ الدِّرَاسَةُ إِضَافَةً نَوْعِيَّةً لِلْمَكْتَبَةِ الْعَرَبِيَّةِ\"?",
        "targetSentence": "تُعَدُّ هَذِهِ الدِّرَاسَةُ إِضَافَةً نَوْعِيَّةً لِلْمَكْتَبَةِ الْعَرَبِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Studi penelitian ini dinilai sebagai kontribusi berkualitas tinggi bagi khazanah kepustakaan Arab.",
          "Bukan studi penelitian ini dinilai sebagai kontribusi berkualitas tinggi bagi khazanah kepustakaan arab.",
          "Apakah studi penelitian ini dinilai sebagai kontribusi berkualitas tinggi bagi khazanah kepustakaan arab.?",
          "Mungkin studi penelitian ini dinilai sebagai kontribusi berkualitas tinggi bagi khazanah kepustakaan arab."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"تُعَدُّ هَذِهِ الدِّرَاسَةُ إِضَافَةً نَوْعِيَّةً لِلْمَكْتَبَةِ الْعَرَبِيَّةِ\" () bermakna \"Studi penelitian ini dinilai sebagai kontribusi berkualitas tinggi bagi khazanah kepustakaan Arab.\"."
      },
      {
        "id": "q-ar-gram-40-pg-4",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Berdasarkan kaidah \"وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة\", manakah kalimat yang tersusun secara gramatikal dan baku?",
        "options": [
          "وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ (Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.)",
          "نهاية البحث هنا (Struktur keliru)",
          "وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ [Posisi salah]",
          "Hanya menggunakan kata sifat tanpa pola Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Rumus yang tepat: وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة. Contoh baku: \"وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ\"."
      },
      {
        "id": "q-ar-gram-40-pg-5",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Mengenai aturan \"1. Kaidah Inti\", pernyataan manakah yang BENAR?",
        "options": [
          "Penerapan kaidah Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي) merupakan pila...",
          "Pola ini tidak dapat digunakan dalam situasi formal sama sekali",
          "Hanya boleh diletakkan di akhir dokumen tertulis",
          "Selalu memerlukan konjugasi pasif tingkat ketiga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kaidah 1. Kaidah Inti: Penerapan kaidah Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي) merupakan pilar penting dalam sintaksis dan morfologi bahasa Arab fusha baku."
      },
      {
        "id": "q-ar-gram-40-pg-6",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Pada kaidah \"2. Analisis I'rab dan Struktur\", hal apa yang perlu diperhatikan pembelajar?",
        "options": [
          "Kaidah وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة diterapkan untuk menjaga ketepata...",
          "Urutan subjek dan predikat harus dibalik secara acak",
          "Pola ini tidak berlaku untuk orang kedua",
          "Semua partikel wajib dihilangkan dalam percakapan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penjelasan untuk 2. Analisis I'rab dan Struktur: Kaidah وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat."
      },
      {
        "id": "q-ar-gram-40-pg-7",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam kaidah \"3. Catatan Wacana Akademik\", bagaimana aturan penerapannya dalam kalimat?",
        "options": [
          "Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balagh...",
          "Hanya digunakan untuk kalimat tanya retoris",
          "Tidak boleh digabungkan dengan kata ganti orang",
          "Memerlukan pengulangan kata kerja sebanyak dua kali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Aturan 3. Catatan Wacana Akademik: Dalam konteks perguruan tinggi di dunia Arab, penguasaan pola ini mencerminkan kefasihan balaghah dan ketelitian ilmiah."
      },
      {
        "id": "q-ar-gram-40-pg-8",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Perhatikan kalimat berikut: \"نهاية البحث هنا\". Mengapa kalimat ini dianggap SALAH?",
        "options": [
          "Gunakan formula penutup wacana akademik Arab klasik-modern yang khidmat.",
          "Karena jumlah suku katanya terlalu panjang",
          "Karena tidak diucapkan dengan intonasi meninggi",
          "Karena hanya boleh diucapkan di pagi hari"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"نهاية البحث هنا\" salah karena Gunakan formula penutup wacana akademik Arab klasik-modern yang khidmat.. Bentuk yang benar: \"وخاتمة القول ومجمله\"."
      },
      {
        "id": "q-ar-gram-40-pg-9",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Bagaimana pembetulan yang paling tepat untuk kalimat keliru: \"نهاية البحث هنا (kesalahan i'rab)\"?",
        "options": [
          "وخاتمة القول ومجمله",
          "نهاية البحث هنا (kesalahan i'rab) [Tambahan partikel keliru]",
          "Tidak ada yang salah, kalimat tersebut sudah baku",
          "نهاية البحث هنا (kesalahan i'rab) [Bentuk rancu]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pembetulan yang benar adalah \"وخاتمة القول ومجمله\". Alasan: Hindari kesalahan penentuan harakat akhir (i'rab) pada kalimat baku bahasa Arab fusha.."
      },
      {
        "id": "q-ar-gram-40-pg-10",
        "sectionType": "pg",
        "type": "multiple_choice",
        "prompt": "Dalam konteks sosial budaya penutur bahasa Arab, hal apa yang perlu diperhatikan saat menerapkan pola \"Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي)\"?",
        "options": [
          "Penerapan kaidah Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي) sangat dihargai dal...",
          "Pola ini dianggap tabu jika digunakan di lingkungan perkotaan",
          "Pola ini hanya boleh digunakan saat menulis surat kabar",
          "Tidak ada etika khusus, dapat dicampur aduk dengan ragam bahasa apa pun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Penerapan kaidah Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-40-es-1",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Jelaskan rumus pembentukan dan fungsi utama pola tata bahasa \"Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي)\" (وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة), serta berikan satu contoh kalimat lengkap beserta terjemahannya!",
        "sampleAnswer": "Rumus pola ini adalah: وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة.\nFungsi utama: Sintesis bab penutup, daftar rekomendasi pembuat kebijakan, dan pengumuman yudisium dewan munaqasyah..\nContoh penerapan: \"وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ\" () yang berarti \"Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.\". Struktur ini menghubungkan elemen kalimat secara logis dan baku sesuai kaidah bahasa Arab.",
        "keywords": [
          "Penulisan",
          "Makalah",
          "Ilmiah",
          "Rekomendasi"
        ],
        "explanation": "Kriteria penilaian esai: menyebutkan pola rumus (وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة), menerangkan fungsi dasarnya (Sintesis bab penutup, daftar rekomendasi pembuat kebijakan, ...), dan memberikan contoh kalimat yang gramatikal."
      },
      {
        "id": "q-ar-gram-40-es-2",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Lakukan analisis kesalahan tata bahasa pada kalimat: \"نهاية البحث هنا\". Jelaskan mengapa kalimat tersebut salah dan bagaimana bentuk perbaikan yang benar!",
        "sampleAnswer": "Kalimat \"نهاية البحث هنا\" keliru karena: Gunakan formula penutup wacana akademik Arab klasik-modern yang khidmat..\nBentuk pembetulan yang tepat adalah: \"وخاتمة القول ومجمله\". Kesalahan ini sering terjadi akibat pengaruh terjemahan harfiah.",
        "keywords": [
          "وخاتمة",
          "القول",
          "ومجمله"
        ],
        "explanation": "Jawaban harus menguraikan letak kesalahan (Gunakan formula penutup wacana akademik Arab klasik-modern yang khidmat.) dan memberikan bentuk baku: وخاتمة القول ومجمله."
      },
      {
        "id": "q-ar-gram-40-es-3",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Uraikan aturan khusus pada kaidah \"2. Analisis I'rab dan Struktur\". Apa konsekuensi makna jika aturan ini tidak diikuti secara tepat?",
        "sampleAnswer": "Pada kaidah \"2. Analisis I'rab dan Struktur\", aturan yang berlaku adalah: Kaidah وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة diterapkan untuk menjaga ketepatan baris harakat akhir dan integritas makna kalimat..\nJika aturan ini diabaikan, kalimat dapat terdengar tidak wajar atau membingungkan lawan bicara.",
        "keywords": [
          "Analisis",
          "I'rab",
          "dan"
        ],
        "explanation": "Pembahasan: Pemahaman mendalam tentang 2. Analisis I'rab dan Struktur menjamin kalimat yang dibentuk akurat dan berterima bagi penutur asli."
      },
      {
        "id": "q-ar-gram-40-es-4",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Susunlah kalimat bahasa Arab untuk mengungkapkan maksud: \"Komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (Summa Cum Laude).\" menggunakan pola bab ini, dan jelaskan posisi setiap unsur katanya!",
        "sampleAnswer": "Kalimat yang tepat adalah: \"قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى\" ().\nPenjelasan struktur: Kalimat ini menerapkan kaidah \"وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة\" di mana unsur pembentuknya tersusun secara runtut untuk menyampaikan maksud \"Komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (Summa Cum Laude).\".",
        "keywords": [
          "Komite",
          "penguji",
          "memutuskan"
        ],
        "explanation": "Esai dinilai dari ketepatan kalimat \"قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى\" dan penjelasan struktur pembentuknya."
      },
      {
        "id": "q-ar-gram-40-es-5",
        "sectionType": "essai",
        "type": "essay",
        "prompt": "Bagaimana aspek kesopanan dan konteks budaya penutur asli mempengaruhi pemilihan pola \"Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي)\" dalam interaksi sehari-hari? Berikan penjelasan Anda!",
        "sampleAnswer": "Dalam konteks budaya penutur bahasa Arab: Penerapan kaidah Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah..\nOleh karena itu, pembelajar harus peka terhadap tingkat keformalan (register) serta lawan bicara agar tuturan terdengar wajar dan santun.",
        "keywords": [
          "budaya",
          "konteks",
          "sopan",
          "situasi"
        ],
        "explanation": "Konteks pragmatik dan budaya: Penerapan kaidah Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي) sangat dihargai dalam tradisi ilmiah dan majelis universitas di Timur Tengah."
      },
      {
        "id": "q-ar-gram-40-sk-1",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.\"",
        "scrambledWords": [
          "الْخِتَامِ",
          "الْبَاحِثُ",
          "مَادَّةِ",
          "التَّطْبِيقِيَّةِ",
          "الْمَنَاهِجِ",
          "وَفِي",
          "يُوصِي",
          "بِإِدْرَاجِ",
          "اللِّسَانِيَّاتِ",
          "فِي"
        ],
        "correctOrder": [
          "وَفِي",
          "الْخِتَامِ",
          "يُوصِي",
          "الْبَاحِثُ",
          "بِإِدْرَاجِ",
          "مَادَّةِ",
          "اللِّسَانِيَّاتِ",
          "التَّطْبِيقِيَّةِ",
          "فِي",
          "الْمَنَاهِجِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ\". Mengikuti kaidah وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة."
      },
      {
        "id": "q-ar-gram-40-sk-2",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (Summa Cum Laude).\"",
        "scrambledWords": [
          "اللَّجْنَةُ",
          "الطَّالِبِ",
          "الدُّكْتُورَاهِ",
          "الشَّرَفِ",
          "قَرَّرَتِ",
          "مَنْحَ",
          "دَرَجَةَ",
          "بِمَرْتَبَةِ",
          "الْأُولَى"
        ],
        "correctOrder": [
          "قَرَّرَتِ",
          "اللَّجْنَةُ",
          "مَنْحَ",
          "الطَّالِبِ",
          "دَرَجَةَ",
          "الدُّكْتُورَاهِ",
          "بِمَرْتَبَةِ",
          "الشَّرَفِ",
          "الْأُولَى"
        ],
        "explanation": "Urutan yang tepat adalah: \"قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى\". Mengikuti kaidah وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة."
      },
      {
        "id": "q-ar-gram-40-sk-3",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Studi penelitian ini dinilai sebagai kontribusi berkualitas tinggi bagi khazanah kepustakaan Arab.\"",
        "scrambledWords": [
          "هَذِهِ",
          "إِضَافَةً",
          "لِلْمَكْتَبَةِ",
          "تُعَدُّ",
          "الدِّرَاسَةُ",
          "نَوْعِيَّةً",
          "الْعَرَبِيَّةِ"
        ],
        "correctOrder": [
          "تُعَدُّ",
          "هَذِهِ",
          "الدِّرَاسَةُ",
          "إِضَافَةً",
          "نَوْعِيَّةً",
          "لِلْمَكْتَبَةِ",
          "الْعَرَبِيَّةِ"
        ],
        "explanation": "Urutan yang tepat adalah: \"تُعَدُّ هَذِهِ الدِّرَاسَةُ إِضَافَةً نَوْعِيَّةً لِلْمَكْتَبَةِ الْعَرَبِيَّةِ\". Mengikuti kaidah وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة."
      },
      {
        "id": "q-ar-gram-40-sk-4",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: وخاتمة القول ومجمله\"",
        "scrambledWords": [
          "القول",
          "وخاتمة",
          "ومجمله"
        ],
        "correctOrder": [
          "وخاتمة",
          "القول",
          "ومجمله"
        ],
        "explanation": "Urutan yang tepat adalah: \"وخاتمة القول ومجمله\". Mengikuti kaidah وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة."
      },
      {
        "id": "q-ar-gram-40-sk-5",
        "sectionType": "sambung_kata",
        "type": "sentence_reorder",
        "prompt": "Susunlah kata-kata acak berikut menjadi kalimat yang benar: \"Bentuk perbaikan baku: وخاتمة القول ومجمله\"",
        "scrambledWords": [
          "القول",
          "وخاتمة",
          "ومجمله"
        ],
        "correctOrder": [
          "وخاتمة",
          "القول",
          "ومجمله"
        ],
        "explanation": "Urutan yang tepat adalah: \"وخاتمة القول ومجمله\". Mengikuti kaidah وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة."
      },
      {
        "id": "q-ar-gram-40-bb-1",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan audio berikut dengan saksama dan pilihlah terjemahan bahasa Indonesia yang paling akurat!",
        "targetSentence": "وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.",
          "Bukan sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.",
          "Komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (Summa Cum Laude).",
          "Studi penelitian ini dinilai sebagai kontribusi berkualitas tinggi bagi khazanah kepustakaan Arab."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio melafalkan: \"وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ\" () yang bermakna \"Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.\"."
      },
      {
        "id": "q-ar-gram-40-bb-2",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Artikan kalimat berikut ke dalam bahasa Indonesia: \"قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى\"",
        "targetSentence": "قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (Summa Cum Laude).",
          "Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.",
          "Apakah komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (summa cum laude).?",
          "Sangat komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (summa cum laude)."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat \"قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى\" diterjemahkan menjadi \"Komite penguji memutuskan menganugerahkan gelar doktor kepada mahasiswa dengan predikat kehormatan tertinggi (Summa Cum Laude).\"."
      },
      {
        "id": "q-ar-gram-40-bb-3",
        "sectionType": "bebas",
        "type": "listen_comprehension",
        "prompt": "Dengarkan kalimat audio berikut dan tentukan fokus kaidah tata bahasa yang terkandung di dalamnya!",
        "targetSentence": "تُعَدُّ هَذِهِ الدِّرَاسَةُ إِضَافَةً نَوْعِيَّةً لِلْمَكْتَبَةِ الْعَرَبِيَّةِ",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Penerapan pola Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي) untuk menyatakan makna: \"Studi penelitian ini dinilai sebagai kontribusi berkualitas tinggi bagi khazanah kepustakaan Arab.\"",
          "Penyangkalan masa lampau kasual tanpa partikel",
          "Ungkapan seruan kemarahan dalam dialek regional",
          "Bentuk permohonan maaf formal tingkat kaisar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memperdengarkan \"تُعَدُّ هَذِهِ الدِّرَاسَةُ إِضَافَةً نَوْعِيَّةً لِلْمَكْتَبَةِ الْعَرَبِيَّةِ\" yang mempraktikkan rumus وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة."
      },
      {
        "id": "q-ar-gram-40-bb-4",
        "sectionType": "bebas",
        "type": "translation",
        "prompt": "Pilihlah kalimat bahasa Arab yang paling tepat dan alami untuk menyatakan: \"Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.\"!",
        "options": [
          "وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ",
          "نهاية البحث هنا",
          "قَرَّرَتِ اللَّجْنَةُ مَنْحَ الطَّالِبِ دَرَجَةَ الدُّكْتُورَاهِ بِمَرْتَبَةِ الشَّرَفِ الْأُولَى [Variasi]",
          "تُعَدُّ هَذِهِ الدِّرَاسَةُ إِضَافَةً نَوْعِيَّةً لِلْمَكْتَبَةِ الْعَرَبِيَّةِ [Variasi]"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ungkapan yang benar dan tepat adalah \"وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ\"."
      },
      {
        "id": "q-ar-gram-40-bb-5",
        "sectionType": "bebas",
        "type": "multiple_choice",
        "prompt": "Dalam dialog nyata, jika Anda ingin merespons lawan bicara secara tepat menggunakan kaidah \"Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي)\", respons manakah yang paling sesuai?",
        "options": [
          "وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ (Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.)",
          "نهاية البحث هنا (Mengandung kerancuan tata bahasa)",
          "Hanya diam tanpa memberikan konfirmasi subjek",
          "Menggunakan kalimat perintah kasar tanpa kata penghubung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam komunikasi sehari-hari, gunakan kalimat baku seperti \"وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ\" sesuai aturan وفي الختام يوصي الباحث بـ... / وقررت اللجنة منح الدرجة."
      }
    ]
  }
];
