import { DialogueScenario } from '@/types/learning';

export const DUTCH_DIALOGUES: DialogueScenario[] = [
  {
    "id": "nl-dial-1",
    "languageId": "dutch",
    "level": "A1 (Basis)",
    "title": "Menyewa Sepeda di Centraal Station Amsterdam",
    "titleNative": "Een fiets huren bij het station",
    "description": "Percakapan menyewa sepeda khas Belanda (omafiets), menanyakan tarif sewa harian, dan kunci gembok.",
    "category": "Transportasi & Kota",
    "iconName": "Bike",
    "characters": [
      {
        "id": "clerk",
        "name": "Medewerker",
        "role": "Petugas Rental",
        "avatar": "🚲"
      },
      {
        "id": "dika",
        "name": "Dika",
        "role": "Turis/Mahasiswa",
        "avatar": "🧑‍🎓"
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "speakerId": "clerk",
        "speakerName": "Medewerker",
        "speakerRole": "Petugas",
        "avatar": "🚲",
        "nativeText": "Goedemorgen! Kan ik u ergens mee helpen?",
        "phoneticText": "Khoo-duh-mor-khen! Kan ik oo ehr-khens may hel-pen?",
        "translationId": "Selamat pagi! Ada yang bisa saya bantu?",
        "audioVoiceLang": "nl-NL",
        "words": [
          {
            "word": "Goedemorgen",
            "phonetic": "Khoo-duh-mor-khen",
            "meaning": "selamat pagi"
          },
          {
            "word": "helpen",
            "phonetic": "hel-pen",
            "meaning": "membantu"
          }
        ]
      },
      {
        "id": "s2",
        "speakerId": "dika",
        "speakerName": "Dika",
        "speakerRole": "Pelanggan",
        "avatar": "🧑‍🎓",
        "nativeText": "Hallo! Ik wil graag een fiets huren voor één dag.",
        "phoneticText": "Hal-loh! Ik wil khraakh un feets hyoo-ren voor ayn dakh.",
        "translationId": "Halo! Saya ingin menyewa sepeda untuk satu hari.",
        "audioVoiceLang": "nl-NL",
        "words": [
          {
            "word": "Ik wil graag",
            "phonetic": "Ik wil khraakh",
            "meaning": "saya ingin (sopan)"
          },
          {
            "word": "een fiets",
            "phonetic": "un feets",
            "meaning": "sebuah sepeda"
          },
          {
            "word": "huren",
            "phonetic": "hyoo-ren",
            "meaning": "menyewa"
          }
        ]
      },
      {
        "id": "s3",
        "speakerId": "clerk",
        "speakerName": "Medewerker",
        "speakerRole": "Petugas",
        "avatar": "🚲",
        "nativeText": "Natuurlijk. Dat kost vijftien euro per dag inclusief slot.",
        "phoneticText": "Nah-tyoor-luk. Dat kost vayf-teen yoo-roh pehr dakh in-klyoo-seef slot.",
        "translationId": "Tentu saja. Harganya 15 euro per hari termasuk kunci gembok.",
        "audioVoiceLang": "nl-NL",
        "words": [
          {
            "word": "Natuurlijk",
            "phonetic": "Nah-tyoor-luk",
            "meaning": "tentu saja"
          },
          {
            "word": "kost",
            "phonetic": "kost",
            "meaning": "berharga/biaya"
          },
          {
            "word": "slot",
            "phonetic": "slot",
            "meaning": "kunci gembok"
          }
        ]
      },
      {
        "id": "s4",
        "speakerId": "dika",
        "speakerName": "Dika",
        "speakerRole": "Pelanggan",
        "avatar": "🧑‍🎓",
        "nativeText": "Uitstekend! Hier is mijn paspoort. Dank je wel!",
        "phoneticText": "Out-stay-kend! Heer is mayn pas-pohrt. Dank yuh wel!",
        "translationId": "Luar biasa! Ini paspor saya. Terima kasih banyak!",
        "audioVoiceLang": "nl-NL",
        "words": [
          {
            "word": "Uitstekend",
            "phonetic": "Out-stay-kend",
            "meaning": "luar biasa/sempurna"
          },
          {
            "word": "Dank je wel",
            "phonetic": "Dank yuh wel",
            "meaning": "terima kasih"
          }
        ]
      }
    ],
    "comprehensionQuiz": [
      {
        "id": "nl-d1-q1",
        "type": "multiple_choice",
        "prompt": "Berapa biaya sewa sepeda per hari?",
        "options": [
          "15 euro (vijftien euro)",
          "10 euro",
          "25 euro",
          "Gratis"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Petugas menyebutkan: 'Dat kost vijftien euro per dag'."
      }
    ]
  }
];
