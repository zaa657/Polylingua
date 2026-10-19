import { DialogueScenario } from '@/types/learning';

export const SPANISH_DIALOGUES: DialogueScenario[] = [
  {
    "id": "es-dial-1",
    "languageId": "spanish",
    "level": "A1 (Acceso)",
    "title": "Menikmati Tapas di Bar Madrid",
    "titleNative": "Pidiendo tapas en un bar de Madrid",
    "description": "Latihan memesan aneka camilan khas Spanyol (tapas, tortilla de patatas) dan meminta tagihan di bar Madrid.",
    "category": "Restoran & Tapas",
    "iconName": "Utensils",
    "characters": [
      {
        "id": "camarero",
        "name": "Camarero",
        "role": "Pelayan Bar",
        "avatar": "👨‍🍳"
      },
      {
        "id": "elena",
        "name": "Elena",
        "role": "Pelanggan",
        "avatar": "👩‍💼"
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "speakerId": "camarero",
        "speakerName": "Camarero",
        "speakerRole": "Pelayan",
        "avatar": "👨‍🍳",
        "nativeText": "¡Buenas tardes! ¿Qué les pongo para tomar?",
        "phoneticText": "Bweh-nahs tar-des! Kay les pon-goh pah-rah toh-mar?",
        "translationId": "Selamat sore! Mau minum apa?",
        "audioVoiceLang": "es-ES",
        "words": [
          {
            "word": "Buenas tardes",
            "phonetic": "Bweh-nahs tar-des",
            "meaning": "selamat sore"
          },
          {
            "word": "para tomar",
            "phonetic": "pah-rah toh-mar",
            "meaning": "untuk diminum"
          }
        ]
      },
      {
        "id": "s2",
        "speakerId": "elena",
        "speakerName": "Elena",
        "speakerRole": "Pelanggan",
        "avatar": "👩‍💼",
        "nativeText": "Una limonada y una ración de tortilla de patatas, por favor.",
        "phoneticText": "Oo-nah lee-moh-nah-dah ee oo-nah rah-syohn deh tor-tee-yah deh pah-tah-tahs, por fah-vor.",
        "translationId": "Satu limun dan satu porsi telur dadar kentang (tortilla), tolong.",
        "audioVoiceLang": "es-ES",
        "words": [
          {
            "word": "Una limonada",
            "phonetic": "Oo-nah lee-moh-nah-dah",
            "meaning": "segelas limun"
          },
          {
            "word": "tortilla de patatas",
            "phonetic": "tor-tee-yah deh pah-tah-tahs",
            "meaning": "omelet kentang khas Spanyol"
          },
          {
            "word": "por favor",
            "phonetic": "por fah-vor",
            "meaning": "tolong / silakan"
          }
        ]
      },
      {
        "id": "s3",
        "speakerId": "camarero",
        "speakerName": "Camarero",
        "speakerRole": "Pelayan",
        "avatar": "👨‍🍳",
        "nativeText": "¡Muy bien! Enseguida se lo traigo.",
        "phoneticText": "Mwee byan! En-seh-gee-dah seh loh try-goh.",
        "translationId": "Bagus sekali! Segera saya bawakan.",
        "audioVoiceLang": "es-ES",
        "words": [
          {
            "word": "Muy bien",
            "phonetic": "Mwee byan",
            "meaning": "sangat baik"
          },
          {
            "word": "Enseguida",
            "phonetic": "En-seh-gee-dah",
            "meaning": "segera"
          }
        ]
      },
      {
        "id": "s4",
        "speakerId": "elena",
        "speakerName": "Elena",
        "speakerRole": "Pelanggan",
        "avatar": "👩‍💼",
        "nativeText": "Muchas gracias. La cuenta, por favor.",
        "phoneticText": "Moo-chahs grah-syahs. Lah kwen-tah, por fah-vor.",
        "translationId": "Terima kasih banyak. Minta tagihannya, tolong.",
        "audioVoiceLang": "es-ES",
        "words": [
          {
            "word": "Muchas gracias",
            "phonetic": "Moo-chahs grah-syahs",
            "meaning": "terima kasih banyak"
          },
          {
            "word": "La cuenta",
            "phonetic": "Lah kwen-tah",
            "meaning": "tagihan/bon"
          }
        ]
      }
    ],
    "comprehensionQuiz": [
      {
        "id": "es-d1-q1",
        "type": "multiple_choice",
        "prompt": "Menu makanan apa yang dipesan oleh Elena?",
        "options": [
          "Tortilla de patatas (omelet kentang)",
          "Paella de marisco",
          "Churros con chocolate",
          "Gazpacho"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Elena memesan: 'una ración de tortilla de patatas'."
      }
    ]
  }
];
