import { DialogueScenario } from '@/types/learning';

export const THAI_DIALOGUES: DialogueScenario[] = [
  {
    "id": "th-dial-1",
    "languageId": "thai",
    "level": "Tingkat 1 (Dasar & Nada)",
    "title": "Memesan Makanan di Restoran Bangkok",
    "titleNative": "สั่งอาหารที่ร้านอาหาร",
    "description": "Latihan percakapan memesan menu khas Tom Yum dan Pad Thai dengan tingkat kepedasan yang pas.",
    "category": "Restoran & Kuliner",
    "iconName": "Utensils",
    "characters": [
      {
        "id": "waiter",
        "name": "Pelayan Restoran",
        "role": "Pelayan",
        "avatar": "👨‍🍳"
      },
      {
        "id": "customer",
        "name": "Somchai",
        "role": "Pelanggan",
        "avatar": "🧑‍💼"
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "speakerId": "waiter",
        "speakerName": "Pelayan Restoran",
        "speakerRole": "Pelayan",
        "avatar": "👨‍🍳",
        "nativeText": "สวัสดีครับ รับอะไรดีครับ?",
        "phoneticText": "sà-wàt-dii khráp, ráp à-rai dii khráp?",
        "translationId": "Halo, mau pesan apa, Tuan?",
        "audioVoiceLang": "th-TH",
        "words": [
          {
            "word": "สวัสดีครับ",
            "phonetic": "sà-wàt-dii khráp",
            "meaning": "halo"
          },
          {
            "word": "รับ",
            "phonetic": "ráp",
            "meaning": "memesan/menerima"
          },
          {
            "word": "อะไร",
            "phonetic": "à-rai",
            "meaning": "apa"
          },
          {
            "word": "ดี",
            "phonetic": "dii",
            "meaning": "bagus/pas"
          }
        ]
      },
      {
        "id": "s2",
        "speakerId": "customer",
        "speakerName": "Somchai",
        "speakerRole": "Pelanggan",
        "avatar": "🧑‍💼",
        "nativeText": "ขอผัดไทยหนึ่งจาน และต้มยำกุ้งครับ",
        "phoneticText": "khɔ̌ɔ phàt-thai nʉ̀ng jaan, lǽ dtôm-yam-gûng khráp",
        "translationId": "Tolong satu porsi Pad Thai dan Tom Yum Goong.",
        "audioVoiceLang": "th-TH",
        "words": [
          {
            "word": "ขอ",
            "phonetic": "khɔ̌ɔ",
            "meaning": "minta/tolong"
          },
          {
            "word": "ผัดไทย",
            "phonetic": "phàt-thai",
            "meaning": "Pad Thai"
          },
          {
            "word": "หนึ่ง",
            "phonetic": "nʉ̀ng",
            "meaning": "satu"
          },
          {
            "word": "จาน",
            "phonetic": "jaan",
            "meaning": "porsi/piring"
          },
          {
            "word": "ต้มยำกุ้ง",
            "phonetic": "dtôm-yam-gûng",
            "meaning": "Tom Yum udang"
          }
        ]
      },
      {
        "id": "s3",
        "speakerId": "waiter",
        "speakerName": "Pelayan Restoran",
        "speakerRole": "Pelayan",
        "avatar": "👨‍🍳",
        "nativeText": "เอาเผ็ดไหมครับ?",
        "phoneticText": "ao phèt mǎi khráp?",
        "translationId": "Mau dibuat pedas?",
        "audioVoiceLang": "th-TH",
        "words": [
          {
            "word": "เอา",
            "phonetic": "ao",
            "meaning": "mau"
          },
          {
            "word": "เผ็ด",
            "phonetic": "phèt",
            "meaning": "pedas"
          },
          {
            "word": "ไหม",
            "phonetic": "mǎi",
            "meaning": "apakah"
          }
        ]
      },
      {
        "id": "s4",
        "speakerId": "customer",
        "speakerName": "Somchai",
        "speakerRole": "Pelanggan",
        "avatar": "🧑‍💼",
        "nativeText": "เผ็ดน้อยครับ ขอบคุณครับ",
        "phoneticText": "phèt nɔ́ɔy khráp, khɔ̀ɔp-khun khráp",
        "translationId": "Sedikit pedas saja, terima kasih.",
        "audioVoiceLang": "th-TH",
        "words": [
          {
            "word": "เผ็ด",
            "phonetic": "phèt",
            "meaning": "pedas"
          },
          {
            "word": "น้อย",
            "phonetic": "nɔ́ɔy",
            "meaning": "sedikit"
          },
          {
            "word": "ขอบคุณครับ",
            "phonetic": "khɔ̀ɔp-khun khráp",
            "meaning": "terima kasih"
          }
        ]
      }
    ],
    "comprehensionQuiz": [
      {
        "id": "th-d1-q1",
        "type": "multiple_choice",
        "prompt": "Apa tingkat kepedasan yang diminta oleh pelanggan?",
        "options": [
          "Sedikit pedas (เผ็ดน้อย)",
          "Sangat pedas",
          "Sama sekali tidak pedas",
          "Pedas gila"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Pelanggan meminta 'phèt nɔ́ɔy' yang artinya sedikit pedas."
      }
    ]
  }
];
