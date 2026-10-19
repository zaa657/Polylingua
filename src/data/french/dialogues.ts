import { DialogueScenario } from '@/types/learning';

export const FRENCH_DIALOGUES: DialogueScenario[] = [
  {
    "id": "fr-dial-1",
    "languageId": "french",
    "level": "A1 (Découverte)",
    "title": "Memesan Kopi & Croissant di Kafe Paris",
    "titleNative": "Commander dans un café parisien",
    "description": "Pelajari interaksi santun memesan kopi espresso, croissant, dan meminta tagihan di kafe khas Paris.",
    "category": "Restoran & Kafe",
    "iconName": "Coffee",
    "characters": [
      {
        "id": "server",
        "name": "Serveur",
        "role": "Pelayan Kafe",
        "avatar": "👨‍🍳"
      },
      {
        "id": "claire",
        "name": "Claire",
        "role": "Pelanggan",
        "avatar": "👩‍💼"
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "speakerId": "server",
        "speakerName": "Serveur",
        "speakerRole": "Pelayan",
        "avatar": "👨‍🍳",
        "nativeText": "Bonjour madame, que désirez-vous prendre?",
        "phoneticText": "Bohn-zhoor mah-dahm, kuh day-zee-ray voo prahndr?",
        "translationId": "Selamat siang Nyonya, apa yang ingin Anda pesan?",
        "audioVoiceLang": "fr-FR",
        "words": [
          {
            "word": "Bonjour",
            "phonetic": "Bohn-zhoor",
            "meaning": "halo/selamat siang"
          },
          {
            "word": "que désirez-vous",
            "phonetic": "kuh day-zee-ray voo",
            "meaning": "apa yang Anda inginkan"
          },
          {
            "word": "prendre",
            "phonetic": "prahndr",
            "meaning": "mengambil/memesan"
          }
        ]
      },
      {
        "id": "s2",
        "speakerId": "claire",
        "speakerName": "Claire",
        "speakerRole": "Pelanggan",
        "avatar": "👩‍💼",
        "nativeText": "Bonjour! Je voudrais un café au lait et un croissant, s'il vous plaît.",
        "phoneticText": "Bohn-zhoor! Zhuh voo-dray uhn kah-fay oh lay ay uhn krwah-sahn, seel voo pleh.",
        "translationId": "Halo! Saya ingin satu kopi susu dan sebuah croissant, tolong.",
        "audioVoiceLang": "fr-FR",
        "words": [
          {
            "word": "Je voudrais",
            "phonetic": "Zhuh voo-dray",
            "meaning": "saya ingin (sopan)"
          },
          {
            "word": "un café au lait",
            "phonetic": "uhn kah-fay oh lay",
            "meaning": "secangkir kopi susu"
          },
          {
            "word": "un croissant",
            "phonetic": "uhn krwah-sahn",
            "meaning": "sebuah croissant"
          },
          {
            "word": "s'il vous plaît",
            "phonetic": "seel voo pleh",
            "meaning": "tolong / silakan"
          }
        ]
      },
      {
        "id": "s3",
        "speakerId": "server",
        "speakerName": "Serveur",
        "speakerRole": "Pelayan",
        "avatar": "👨‍🍳",
        "nativeText": "Très bien, tout de suite. Ce sera tout?",
        "phoneticText": "Treh byan, too duh sweet. Suh suh-rah too?",
        "translationId": "Baik sekali, segera datang. Apakah itu saja?",
        "audioVoiceLang": "fr-FR",
        "words": [
          {
            "word": "Très bien",
            "phonetic": "Treh byan",
            "meaning": "sangat baik"
          },
          {
            "word": "tout de suite",
            "phonetic": "too duh sweet",
            "meaning": "segera"
          }
        ]
      },
      {
        "id": "s4",
        "speakerId": "claire",
        "speakerName": "Claire",
        "speakerRole": "Pelanggan",
        "avatar": "👩‍💼",
        "nativeText": "Oui, c'est tout. L'addition, s'il vous plaît.",
        "phoneticText": "Wee, say too. Lah-dee-syohn, seel voo pleh.",
        "translationId": "Ya, itu saja. Tolong tagihannya.",
        "audioVoiceLang": "fr-FR",
        "words": [
          {
            "word": "Oui",
            "phonetic": "Wee",
            "meaning": "ya"
          },
          {
            "word": "L'addition",
            "phonetic": "Lah-dee-syohn",
            "meaning": "bon/tagihan"
          }
        ]
      }
    ],
    "comprehensionQuiz": [
      {
        "id": "fr-d1-q1",
        "type": "multiple_choice",
        "prompt": "Minuman apa yang dipesan oleh Claire?",
        "options": [
          "Café au lait (kopi susu)",
          "Thé vert (teh hijau)",
          "Chocolat chaud (cokelat panas)",
          "Jus d'orange (jus jeruk)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Claire memesan: 'un café au lait et un croissant'."
      }
    ]
  }
];
