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
  }
];
