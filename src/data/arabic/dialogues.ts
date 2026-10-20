import { DialogueScenario } from '@/types/learning';

export const ARABIC_DIALOGUES: DialogueScenario[] = [
  {
    "id": "ar-dial-1",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "title": "Ta'aruf & Perkenalan di Kampus Universitas",
    "titleNative": "التعارف في الحرم الجامعي",
    "description": "Percakapan dua mahasiswa di perpustakaan universitas saling menyapa dengan salam Fusha dan menanyakan jurusan kuliah.",
    "category": "Kampus & Pendidikan",
    "iconName": "GraduationCap",
    "characters": [
      {
        "id": "ahmad",
        "name": "Ahmad",
        "role": "Mahasiswa",
        "avatar": "🧑‍🎓"
      },
      {
        "id": "tariq",
        "name": "Tariq",
        "role": "Mahasiswa",
        "avatar": "👨‍🎓"
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "speakerId": "ahmad",
        "speakerName": "Ahmad",
        "speakerRole": "Mahasiswa",
        "avatar": "🧑‍🎓",
        "nativeText": "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
        "phoneticText": "As-salamu 'alaykum wa rahmatullah",
        "translationId": "Semoga keselamatan dan rahmat Allah tercurah kepada Anda.",
        "audioVoiceLang": "ar-SA",
        "words": [
          {
            "word": "السَّلَامُ",
            "phonetic": "As-salamu",
            "meaning": "keselamatan"
          },
          {
            "word": "عَلَيْكُمْ",
            "phonetic": "'alaykum",
            "meaning": "atas kalian"
          }
        ]
      },
      {
        "id": "s2",
        "speakerId": "tariq",
        "speakerName": "Tariq",
        "speakerRole": "Mahasiswa",
        "avatar": "👨‍🎓",
        "nativeText": "وَعَلَيْكُمُ السَّلَامُ! أَهْلًا وَسَهْلًا، أَنَا طَارِقٌ.",
        "phoneticText": "Wa 'alaykumu as-salam! Ahlan wa sahlan, ana Tariq.",
        "translationId": "Dan atas Anda keselamatan! Selamat datang, saya Tariq.",
        "audioVoiceLang": "ar-SA",
        "words": [
          {
            "word": "أَهْلًا وَسَهْلًا",
            "phonetic": "Ahlan wa sahlan",
            "meaning": "selamat datang"
          },
          {
            "word": "أَنَا",
            "phonetic": "ana",
            "meaning": "saya"
          }
        ]
      },
      {
        "id": "s3",
        "speakerId": "ahmad",
        "speakerName": "Ahmad",
        "speakerRole": "Mahasiswa",
        "avatar": "🧑‍🎓",
        "nativeText": "تَشَرَّفْنَا يَا طَارِقُ. مَاذَا تَدْرُسُ فِي الجَامِعَةِ؟",
        "phoneticText": "Tasyarrafna ya Tariq. Madza tadrusu fi al-jami'ah?",
        "translationId": "Senang berkenalan, Tariq. Apa yang kamu pelajari di universitas?",
        "audioVoiceLang": "ar-SA",
        "words": [
          {
            "word": "تَشَرَّفْنَا",
            "phonetic": "Tasyarrafna",
            "meaning": "suatu kehormatan/senang berkenalan"
          },
          {
            "word": "مَاذَا",
            "phonetic": "Madza",
            "meaning": "apa yang"
          },
          {
            "word": "تَدْرُسُ",
            "phonetic": "tadrusu",
            "meaning": "kamu pelajari"
          },
          {
            "word": "الجَامِعَةِ",
            "phonetic": "al-jami'ah",
            "meaning": "universitas"
          }
        ]
      },
      {
        "id": "s4",
        "speakerId": "tariq",
        "speakerName": "Tariq",
        "speakerRole": "Mahasiswa",
        "avatar": "👨‍🎓",
        "nativeText": "أَدْرُسُ اللُّغَةَ العَرَبِيَّةَ وَالشَّرِيعَةَ، وَأَنْتَ؟",
        "phoneticText": "Adrusu al-lughata al-'arabiyyata wa asy-syari'ah, wa anta?",
        "translationId": "Saya belajar bahasa Arab dan Syariah, dan kamu?",
        "audioVoiceLang": "ar-SA",
        "words": [
          {
            "word": "أَدْرُسُ",
            "phonetic": "Adrusu",
            "meaning": "saya belajar"
          },
          {
            "word": "وَأَنْتَ",
            "phonetic": "wa anta",
            "meaning": "dan kamu?"
          }
        ]
      }
    ],
    "comprehensionQuiz": [
      {
        "id": "ar-d1-q1",
        "type": "multiple_choice",
        "prompt": "Jurusan apakah yang dipelajari oleh Tariq?",
        "options": [
          "Bahasa Arab & Syariah (اللغة العربية والشريعة)",
          "Teknik Kedokteran",
          "Ilmu Komputer",
          "Sastra Inggris"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tariq menjawab: 'Adrusu al-lughata al-'arabiyyata wa asy-syari'ah'."
      }
    ]
  },
{
  "id": "ar-dial-2",
  "languageId": "arabic",
  "level": "Menengah",
  "title": "Konsultasi Rencana Tesis dengan Profesor di Kampus",
  "titleNative": "مناقشة خطة بحث رسالة الماجستير مع المشرف الأكاديمي",
  "description": "Percakapan formal akademis mengenai rencana penelitian tesis magister, kajian literatur turats, dan metodologi riset di universitas Timur Tengah.",
  "category": "Kampus & Akademik",
  "iconName": "GraduationCap",
  "characters": [
    {
      "id": "prof",
      "name": "الدكتور عبد الرحمن (Dr. Abdul Rahman)",
      "role": "المشرف الأكاديمي",
      "avatar": "👨‍🏫"
    },
    {
      "id": "student",
      "name": "طارق (Tariq)",
      "role": "طالب دراسات عليا",
      "avatar": "🎓"
    }
  ],
  "sentences": [
    {
      "id": "ar2-s1",
      "speakerId": "student",
      "speakerName": "طارق (Tariq)",
      "speakerRole": "طالب دراسات عليا",
      "avatar": "🎓",
      "nativeText": "السلام عليكم يا فضيلة الدكتور، هل يتسع وقتكم الكريم لمناقشة خطة بحثي لرسالة الماجستير؟",
      "phoneticText": "As-salamu 'alaykum ya fadilata ad-duktur, hal yattasi'u waqtukumu al-karim li-munaqashati khittati bahthi li-risalati al-majistir?",
      "translationId": "Assalamu'alaikum Yth. Dokter, apakah waktu mulia Anda luang untuk mendiskusikan proposal riset tesis magister saya?",
      "audioVoiceLang": "ar-SA",
      "words": [
        {
          "word": "فضيلة الدكتور",
          "phonetic": "fadilata ad-duktur",
          "meaning": "Dokter/Profesor yang mulia"
        },
        {
          "word": "خطة بحث",
          "phonetic": "khittatu bahth",
          "meaning": "proposal riset penelitian"
        },
        {
          "word": "رسالة الماجستير",
          "phonetic": "risalatu al-majistir",
          "meaning": "tesis magister S2"
        }
      ]
    },
    {
      "id": "ar2-s2",
      "speakerId": "prof",
      "speakerName": "الدكتور عبد الرحمن (Dr. Abdul Rahman)",
      "speakerRole": "المشرف الأكاديمي",
      "avatar": "👨‍🏫",
      "nativeText": "وعليكم السلام ورحمة الله، مرحباً بك يا طارق. تفضل بالجلوس، لقد اطلعت على المقترح الأولي بعناية.",
      "phoneticText": "Wa 'alaykumu as-salam wa rahmatullah, marhaban bika ya Tariq. Tafaddal bi-l-julus, laqad ittala'tu 'ala al-muqtarahi al-awwali bi-'inayah.",
      "translationId": "Wa'alaikumsalam warahmatullahi wabarakatuh, selamat datang Tariq. Silakan duduk, saya telah membaca proposal awal Anda dengan teliti.",
      "audioVoiceLang": "ar-SA",
      "words": [
        {
          "word": "تفضل بالجلوس",
          "phonetic": "tafaddal bi-l-julus",
          "meaning": "silakan duduk"
        },
        {
          "word": "اطلعت على",
          "phonetic": "ittala'tu 'ala",
          "meaning": "saya telah membaca / menelaah"
        },
        {
          "word": "بعناية",
          "phonetic": "bi-'inayah",
          "meaning": "dengan seksama dan cermat"
        }
      ]
    },
    {
      "id": "ar2-s3",
      "speakerId": "student",
      "speakerName": "طارق (Tariq)",
      "speakerRole": "طالب دراسات عليا",
      "avatar": "🎓",
      "nativeText": "بارك الله فيكم يا أستاذنا. ما هي توجيهاتكم السديدة بشأن المنهج المتبع وتوثيق المراجع؟",
      "phoneticText": "Barak Allaho fikum ya ustadhana. Ma hiya tawjihatukumu as-sadidah bi-sha'ni al-manhaji al-muttaba' wa tawthiqi al-maraji'?",
      "translationId": "Semoga Allah memberkahi Anda wahai guru kami. Apa arahan tepat Anda mengenai metode yang digunakan dan sitasi rujukan?",
      "audioVoiceLang": "ar-SA",
      "words": [
        {
          "word": "توجيهات",
          "phonetic": "tawjihat",
          "meaning": "arahan bimbingan"
        },
        {
          "word": "المنهج المتبع",
          "phonetic": "al-manhaj al-muttaba'",
          "meaning": "metodologi yang diterapkan"
        },
        {
          "word": "توثيق المراجع",
          "phonetic": "tawthiq al-maraji'",
          "meaning": "sitasi pencatatan referensi"
        }
      ]
    },
    {
      "id": "ar2-s4",
      "speakerId": "prof",
      "speakerName": "الدكتور عبد الرحمن (Dr. Abdul Rahman)",
      "speakerRole": "المشرف الأكاديمي",
      "avatar": "👨‍🏫",
      "nativeText": "أنصحك بالجمع بين المنهج الوصفي والتحليلي المقارن، مع الاعتماد على المصادر التراثية الموثوقة.",
      "phoneticText": "Ansahuka bi-l-jam'i bayna al-manhaji al-wasfi wa at-tahlili al-muqaran, ma'a al-i'timadi 'ala al-masadiri at-turathiyyah al-mawthuqah.",
      "translationId": "Saya menyarankan Anda memadukan metode deskriptif dan analitis komparatif, serta merujuk pada kitab turats yang terpercaya.",
      "audioVoiceLang": "ar-SA",
      "words": [
        {
          "word": "المنهج الوصفي",
          "phonetic": "al-manhaj al-wasfi",
          "meaning": "metode deskriptif"
        },
        {
          "word": "التحليلي المقارن",
          "phonetic": "at-tahlili al-muqaran",
          "meaning": "analitis komparatif"
        },
        {
          "word": "المصادر التراثية",
          "phonetic": "al-masadir at-turathiyyah",
          "meaning": "sumber literatur turats"
        }
      ]
    },
    {
      "id": "ar2-s5",
      "speakerId": "student",
      "speakerName": "طارق (Tariq)",
      "speakerRole": "طالب دراسات عليا",
      "avatar": "🎓",
      "nativeText": "جزاكم الله خيراً، سأعدل خطة البحث وفق ملاحظاتكم وأقدمها للقسم في مطلع الأسبوع المقبل.",
      "phoneticText": "Jazakumu Allahu khayran, sa-u'addilu khittata al-bahthi wifqa mulahazatikum wa uqaddimuha li-l-qismi fi matla'i al-usbu'i al-muqbil.",
      "translationId": "Semoga Allah membalas kebaikan Anda, saya akan merevisi proposal sesuai catatan Anda dan menyerahkannya ke jurusan awal pekan depan.",
      "audioVoiceLang": "ar-SA",
      "words": [
        {
          "word": "سأعدل",
          "phonetic": "sa-u'addilu",
          "meaning": "saya akan merevisi / memperbaiki"
        },
        {
          "word": "ملاحظات",
          "phonetic": "mulahazat",
          "meaning": "catatan evaluasi"
        },
        {
          "word": "الأسبوع المقبل",
          "phonetic": "al-usbu' al-muqbil",
          "meaning": "pekan depan"
        }
      ]
    }
  ],
  "comprehensionQuiz": [
    {
      "id": "qz-ar-2-1",
      "type": "multiple_choice",
      "prompt": "ما هو موضوع المقابلة الأكاديمية بين طارق والمشرف؟",
      "options": [
        "طلب إجازة سفر",
        "مناقشة خطة بحث رسالة الماجستير",
        "تسجيل السكن الجامعي",
        "شراء الكتب"
      ],
      "correctAnswerIndex": 1,
      "explanation": "طارق قال: 'لمناقشة خطة بحثي لرسالة الماجستير' (untuk mendiskusikan proposal riset tesis magister)."
    },
    {
      "id": "qz-ar-2-2",
      "type": "multiple_choice",
      "prompt": "ما المنهج الذي اقترحه الدكتور عبد الرحمن على طارق في بحثه؟",
      "options": [
        "الجمع بين المنهج الوصفي والتحليلي المقارن",
        "المنهج التجريبي فقط",
        "الاعتماد على الرأي الشخصي دون مصادر",
        "الترجمة الحرفية"
      ],
      "correctAnswerIndex": 0,
      "explanation": "الدكتور قال: 'أنصحك بالجمع بين المنهج الوصفي والتحليلي المقارن'."
    },
    {
      "id": "qz-ar-2-3",
      "type": "sentence_reorder",
      "prompt": "Susun kalimat sopan: 'Silakan duduk untuk mendiskusikan riset'",
      "scrambledWords": [
        "تفضل",
        "بالجلوس",
        "لمناقشة",
        "البحث"
      ],
      "correctOrder": [
        "تفضل",
        "بالجلوس",
        "لمناقشة",
        "البحث"
      ],
      "explanation": "Urutan formal: تفضل + بالجلوس + huruf jar & masdar (لمناقشة) + objek (البحث)."
    },
    {
      "id": "qz-ar-2-4",
      "type": "multiple_choice",
      "prompt": "على ماذا يجب أن يعتمد طارق في مراجع دراسته بحسب توجيه المشرف؟",
      "options": [
        "الصحف اليومية فقط",
        "المصادر التراثية الموثوقة",
        "المنتديات العامة",
        "المواقع الإعلانية"
      ],
      "correctAnswerIndex": 1,
      "explanation": "الدكتور شدد على: 'الاعتماد على المصادر التراثية الموثوقة' (kitab rujukan turats yang terpercaya)."
    },
    {
      "id": "qz-ar-2-5",
      "type": "multiple_choice",
      "prompt": "متى وعد طارق بتسليم خطة البحث المعدلة إلى إدارة القسم؟",
      "options": [
        "بعد سنة كاملة",
        "في مطلع الأسبوع المقبل",
        "اليوم في المساء",
        "خلال شهرين"
      ],
      "correctAnswerIndex": 1,
      "explanation": "طارق قال: 'وأقدمها للقسم في مطلع الأسبوع المقبل' (menyerahkannya di awal pekan depan)."
    }
  ]
}
];
