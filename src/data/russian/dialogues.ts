import { DialogueScenario } from '@/types/learning';

export const RUSSIAN_DIALOGUES: DialogueScenario[] = [
  {
    "id": "ru-dial-1",
    "languageId": "russian",
    "level": "A1 (Pemula Sirilik)",
    "title": "Perkenalan Mahasiswa di Moskow",
    "titleNative": "Знакомство в университете",
    "description": "Percakapan antara dua mahasiswa baru di Universitas Negeri Moskow (MGU) berkenalan dan menanyakan asal negara.",
    "category": "Kampus & Pendidikan",
    "iconName": "GraduationCap",
    "characters": [
      {
        "id": "ivan",
        "name": "Ivan",
        "role": "Mahasiswa Lokal",
        "avatar": "🧑‍🎓"
      },
      {
        "id": "siti",
        "name": "Siti",
        "role": "Mahasiswi Asing",
        "avatar": "👩‍🎓"
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "speakerId": "ivan",
        "speakerName": "Ivan",
        "speakerRole": "Mahasiswa",
        "avatar": "🧑‍🎓",
        "nativeText": "Здравствуйте! Меня зовут Иван. Как вас зовут?",
        "phoneticText": "Zdravstvuyte! Menya zovut Ivan. Kak vas zovut?",
        "translationId": "Halo! Nama saya Ivan. Siapa nama Anda?",
        "audioVoiceLang": "ru-RU",
        "words": [
          {
            "word": "Здравствуйте",
            "phonetic": "Zdravstvuyte",
            "meaning": "halo (formal)"
          },
          {
            "word": "Меня зовут",
            "phonetic": "Menya zovut",
            "meaning": "nama saya"
          },
          {
            "word": "Как вас зовут",
            "phonetic": "Kak vas zovut",
            "meaning": "siapa nama Anda"
          }
        ]
      },
      {
        "id": "s2",
        "speakerId": "siti",
        "speakerName": "Siti",
        "speakerRole": "Mahasiswi",
        "avatar": "👩‍🎓",
        "nativeText": "Очень приятно! Меня зовут Сити. Я из Индонезии.",
        "phoneticText": "Ochen' priyatno! Menya zovut Siti. Ya iz Indonezii.",
        "translationId": "Senang berkenalan! Nama saya Siti. Saya dari Indonesia.",
        "audioVoiceLang": "ru-RU",
        "words": [
          {
            "word": "Очень приятно",
            "phonetic": "Ochen' priyatno",
            "meaning": "senang berkenalan"
          },
          {
            "word": "Я",
            "phonetic": "Ya",
            "meaning": "saya"
          },
          {
            "word": "из",
            "phonetic": "iz",
            "meaning": "dari"
          },
          {
            "word": "Индонезии",
            "phonetic": "Indonezii",
            "meaning": "Indonesia"
          }
        ]
      },
      {
        "id": "s3",
        "speakerId": "ivan",
        "speakerName": "Ivan",
        "speakerRole": "Mahasiswa",
        "avatar": "🧑‍🎓",
        "nativeText": "Добро пожаловать в Москву! Вы говорите по-русски?",
        "phoneticText": "Dobro pozhalovat' v Moskvu! Vy govorite po-russki?",
        "translationId": "Selamat datang di Moskow! Apakah Anda berbicara bahasa Rusia?",
        "audioVoiceLang": "ru-RU",
        "words": [
          {
            "word": "Добро пожаловать",
            "phonetic": "Dobro pozhalovat'",
            "meaning": "selamat datang"
          },
          {
            "word": "в Москву",
            "phonetic": "v Moskvu",
            "meaning": "ke Moskow"
          },
          {
            "word": "говорите",
            "phonetic": "govorite",
            "meaning": "berbicara"
          }
        ]
      },
      {
        "id": "s4",
        "speakerId": "siti",
        "speakerName": "Siti",
        "speakerRole": "Mahasiswi",
        "avatar": "👩‍🎓",
        "nativeText": "Да, я немного говорю и учусь здесь.",
        "phoneticText": "Da, ya nemnogo govoryu i uchus' zdes'.",
        "translationId": "Ya, saya bicara sedikit dan berkuliah di sini.",
        "audioVoiceLang": "ru-RU",
        "words": [
          {
            "word": "Да",
            "phonetic": "Da",
            "meaning": "ya"
          },
          {
            "word": "немного",
            "phonetic": "nemnogo",
            "meaning": "sedikit"
          },
          {
            "word": "учусь",
            "phonetic": "uchus'",
            "meaning": "belajar/kuliah"
          },
          {
            "word": "здесь",
            "phonetic": "zdes'",
            "meaning": "di sini"
          }
        ]
      }
    ],
    "comprehensionQuiz": [
      {
        "id": "ru-d1-q1",
        "type": "multiple_choice",
        "prompt": "Dari manakah mahasiswi bernama Siti berasal?",
        "options": [
          "Indonesia (Индонезия)",
          "Rusia",
          "Inggris",
          "Jepang"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Siti memperkenalkan diri: 'Ya iz Indonezii' (Saya dari Indonesia)."
      }
    ]
  },
{
  "id": "ru-dial-2",
  "languageId": "russian",
  "level": "B2",
  "title": "Konsultasi Rencana Tesis dengan Profesor di Kampus",
  "titleNative": "Консультация с научным руководителем по дипломной работе",
  "description": "Percakapan formal akademis dengan dosen pembimbing mengenai proposal penelitian, perumusan hipotesis, dan batas waktu pengumpulan draf.",
  "category": "Kampus & Akademik",
  "iconName": "GraduationCap",
  "characters": [
    {
      "id": "prof",
      "name": "Профессор Морозов (Prof. Morozov)",
      "role": "Научный руководитель",
      "avatar": "👨‍🏫"
    },
    {
      "id": "student",
      "name": "Алексей (Aleksey)",
      "role": "Студент-магистрант",
      "avatar": "🎓"
    }
  ],
  "sentences": [
    {
      "id": "ru2-s1",
      "speakerId": "student",
      "speakerName": "Алексей (Aleksey)",
      "speakerRole": "Студент-магистрант",
      "avatar": "🎓",
      "nativeText": "Здравствуйте, уважаемый профессор Морозов! Разрешите войти и обсудить план моей дипломной работы?",
      "phoneticText": "Zdravstvuyte, uvazhayemyy professor Morozov! Razreshite voyti i obsudit' plan moyey diplomnoy raboty?",
      "translationId": "Halo, Profesor Morozov yang terhormat! Bolehkah saya masuk dan mendiskusikan rencana tugas akhir saya?",
      "audioVoiceLang": "ru-RU",
      "words": [
        {
          "word": "уважаемый",
          "phonetic": "uvazhayemyy",
          "meaning": "yang terhormat"
        },
        {
          "word": "разрешите",
          "phonetic": "razreshite",
          "meaning": "izinkan saya / perkenankan"
        },
        {
          "word": "дипломная работа",
          "phonetic": "diplomnaya rabota",
          "meaning": "tugas akhir skripsi/tesis"
        }
      ]
    },
    {
      "id": "ru2-s2",
      "speakerId": "prof",
      "speakerName": "Профессор Морозов (Prof. Morozov)",
      "speakerRole": "Научный руководитель",
      "avatar": "👨‍🏫",
      "nativeText": "Проходите, Алексей, присаживайтесь. Я внимательно ознакомился с вашей вводной главой.",
      "phoneticText": "Prokhodite, Aleksey, prisazhivaytes'. Ya vnimatel'no oznakomilsya s vashey vvodnoy glavoy.",
      "translationId": "Silakan masuk, Aleksey, silakan duduk. Saya sudah membaca dengan cermat bab pendahuluan Anda.",
      "audioVoiceLang": "ru-RU",
      "words": [
        {
          "word": "присаживайтесь",
          "phonetic": "prisazhivaytes'",
          "meaning": "silakan duduk"
        },
        {
          "word": "ознакомился",
          "phonetic": "oznakomilsya",
          "meaning": "telah membaca / mempelajari"
        },
        {
          "word": "вводная глава",
          "phonetic": "vvodnaya glava",
          "meaning": "bab pendahuluan"
        }
      ]
    },
    {
      "id": "ru2-s3",
      "speakerId": "student",
      "speakerName": "Алексей (Aleksey)",
      "speakerRole": "Студент-магистрант",
      "avatar": "🎓",
      "nativeText": "Спасибо! Есть ли у вас замечания по формулировке гипотезы и выбору методов анализа?",
      "phoneticText": "Spasibo! Yest' li u vas zamechaniya po formulirovke gipotezy i vyboru metodov analiza?",
      "translationId": "Terima kasih! Apakah Bapak memiliki catatan revisi perihal perumusan hipotesis dan pemilihan metode analisis?",
      "audioVoiceLang": "ru-RU",
      "words": [
        {
          "word": "замечания",
          "phonetic": "zamechaniya",
          "meaning": "catatan masukan / kritik"
        },
        {
          "word": "формулировка",
          "phonetic": "formulirovka",
          "meaning": "perumusan kalimat"
        },
        {
          "word": "гипотеза",
          "phonetic": "gipoteza",
          "meaning": "hipotesis penelitian"
        }
      ]
    },
    {
      "id": "ru2-s4",
      "speakerId": "prof",
      "speakerName": "Профессор Морозов (Prof. Morozov)",
      "speakerRole": "Научный руководитель",
      "avatar": "👨‍🏫",
      "nativeText": "Гипотеза чёткая, но список литературы необходимо расширить новейшими статьями из базы Scopus.",
      "phoneticText": "Gipoteza chetkaya, no spisok literatury neobkhodimo rasshirit' noveyshimi stat'yami iz bazy Scopus.",
      "translationId": "Hipotesisnya jelas, namun daftar pustaka perlu diperluas dengan artikel-artikel terbaru dari basis data Scopus.",
      "audioVoiceLang": "ru-RU",
      "words": [
        {
          "word": "чёткая",
          "phonetic": "chetkaya",
          "meaning": "jelas / tegas"
        },
        {
          "word": "список литературы",
          "phonetic": "spisok literatury",
          "meaning": "daftar pustaka / referensi"
        },
        {
          "word": "расширить",
          "phonetic": "rasshirit'",
          "meaning": "memperluas / menambah"
        }
      ]
    },
    {
      "id": "ru2-s5",
      "speakerId": "student",
      "speakerName": "Алексей (Aleksey)",
      "speakerRole": "Студент-магистрант",
      "avatar": "🎓",
      "nativeText": "Благодарю за совет, профессор! Я доработаю библиографию по ГОСТу к следующей консультации.",
      "phoneticText": "Blagodaryu za sovet, professor! Ya dorabotayu bibliografiyu po GOSTu k sleduyushchey konsul'tatsii.",
      "translationId": "Terima kasih atas sarannya, Profesor! Saya akan menyempurnakan daftar pustaka sesuai ГОСТ untuk bimbingan berikutnya.",
      "audioVoiceLang": "ru-RU",
      "words": [
        {
          "word": "благодарю",
          "phonetic": "blagodaryu",
          "meaning": "terima kasih (formal)"
        },
        {
          "word": "доработаю",
          "phonetic": "dorabotayu",
          "meaning": "akan menyempurnakan / merevisi"
        },
        {
          "word": "консультация",
          "phonetic": "konsul'tatsiya",
          "meaning": "sesi konsultasi bimbingan"
        }
      ]
    }
  ],
  "comprehensionQuiz": [
    {
      "id": "qz-ru-2-1",
      "type": "multiple_choice",
      "prompt": "Bagian karya tulis apa yang telah dipelajari terlebih dahulu oleh Profesor Morozov?",
      "options": [
        "Вводная глава (Bab Pendahuluan)",
        "Bab kesimpulan",
        "Lampiran wawancara",
        "Biodata peneliti"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Profesor berkata: 'Я внимательно ознакомился с вашей вводной главой' (Saya sudah membaca bab pendahuluan Anda)."
    },
    {
      "id": "qz-ru-2-2",
      "type": "multiple_choice",
      "prompt": "Saran perbaikan utama apa yang diberikan oleh profesor kepada Aleksey?",
      "options": [
        "Mengganti judul tesis",
        "Memperluas daftar pustaka dengan artikel terbaru dari Scopus",
        "Menghentikan eksperimen",
        "Pindah jurusan kuliah"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Profesor menyarankan: 'список литературы необходимо расширить новейшими статьями из базы Scopus'."
    },
    {
      "id": "qz-ru-2-3",
      "type": "sentence_reorder",
      "prompt": "Susun kalimat permohonan sopan masuk ruang dosen: 'Izinkan saya masuk dan berdiskusi'",
      "scrambledWords": [
        "Разрешите",
        "войти",
        "и обсудить",
        "план"
      ],
      "correctOrder": [
        "Разрешите",
        "войти",
        "и обсудить",
        "план"
      ],
      "explanation": "Urutan formal: Разрешите + infinitif (войти) + konjungsi/infinitif (и обсудить) + objek (план)."
    },
    {
      "id": "qz-ru-2-4",
      "type": "multiple_choice",
      "prompt": "Standar format nasional apa yang wajib diikuti dalam penyusunan bibliografi di Rusia?",
      "options": [
        "ГОСТ (GOST)",
        "ISO 9000",
        "Standar ASEAN",
        "IEEE saja"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Aleksey menegaskan: 'доработаю библиографию по ГОСТу' (sesuai standar GOST)."
    },
    {
      "id": "qz-ru-2-5",
      "type": "multiple_choice",
      "prompt": "Bagaimana penilaian profesor terhadap perumusan hipotesis yang diajukan Aleksey?",
      "options": [
        "Sangat buruk",
        "Чёткая (Jelas dan terarah)",
        "Terlalu panjang",
        "Tidak ilmiah"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Profesor mengapresiasi: 'Гипотеза чёткая' (Hipotesisnya jelas dan lugas)."
    }
  ]
}
];
