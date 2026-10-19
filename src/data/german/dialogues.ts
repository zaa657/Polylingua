import { DialogueScenario } from '@/types/learning';

export const GERMAN_DIALOGUES: DialogueScenario[] = [
  {
    "id": "de-dial-1",
    "languageId": "german",
    "level": "A1 (Start Deutsch 1)",
    "title": "Membeli Tiket Kereta di Hauptbahnhof Berlin",
    "titleNative": "Fahrkarte kaufen am Hauptbahnhof",
    "description": "Latihan percakapan di loket stasiun kereta api menanyakan tiket kereta ICE ke München dan waktu keberangkatan.",
    "category": "Transportasi & Stasiun",
    "iconName": "Train",
    "characters": [
      {
        "id": "agent",
        "name": "Bahn-Mitarbeiter",
        "role": "Petugas Tiket",
        "avatar": "👨‍✈️"
      },
      {
        "id": "markus",
        "name": "Markus",
        "role": "Penumpang",
        "avatar": "🧑‍💼"
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "speakerId": "agent",
        "speakerName": "Bahn-Mitarbeiter",
        "speakerRole": "Petugas",
        "avatar": "👨‍✈️",
        "nativeText": "Guten Tag! Wie kann ich Ihnen helfen?",
        "phoneticText": "Goo-ten Tahk! Vee kahn ikh Ee-nen hel-fen?",
        "translationId": "Selamat siang! Bagaimana saya bisa membantu Anda?",
        "audioVoiceLang": "de-DE",
        "words": [
          {
            "word": "Guten Tag",
            "phonetic": "Goo-ten Tahk",
            "meaning": "selamat siang"
          },
          {
            "word": "helfen",
            "phonetic": "hel-fen",
            "meaning": "membantu"
          }
        ]
      },
      {
        "id": "s2",
        "speakerId": "markus",
        "speakerName": "Markus",
        "speakerRole": "Penumpang",
        "avatar": "🧑‍💼",
        "nativeText": "Guten Tag! Ich möchte eine Fahrkarte nach München, bitte.",
        "phoneticText": "Goo-ten Tahk! Ikh mukh-tuh eye-nuh Fahr-kar-tuh nahkh Myoon-khen, bit-tuh.",
        "translationId": "Selamat siang! Saya ingin tiket ke München, tolong.",
        "audioVoiceLang": "de-DE",
        "words": [
          {
            "word": "Ich möchte",
            "phonetic": "Ikh mukh-tuh",
            "meaning": "saya ingin (sopan)"
          },
          {
            "word": "eine Fahrkarte",
            "phonetic": "eye-nuh Fahr-kar-tuh",
            "meaning": "selembar tiket kereta"
          },
          {
            "word": "nach",
            "phonetic": "nahkh",
            "meaning": "menuju/ke"
          },
          {
            "word": "bitte",
            "phonetic": "bit-tuh",
            "meaning": "tolong/silakan"
          }
        ]
      },
      {
        "id": "s3",
        "speakerId": "agent",
        "speakerName": "Bahn-Mitarbeiter",
        "speakerRole": "Petugas",
        "avatar": "👨‍✈️",
        "nativeText": "Einfach oder hin und zurück? Der nächste ICE fährt um 14 Uhr ab Gleis 7.",
        "phoneticText": "Ayn-fakh oh-der hin oont tsoo-rook? Dehr naykh-steh Ee-Tsay-Ay fayrt oom feer-tsayn Oor ahb Glays zee-ben.",
        "translationId": "Satu arah atau pulang-pergi? ICE berikutnya berangkat jam 14.00 dari peron 7.",
        "audioVoiceLang": "de-DE",
        "words": [
          {
            "word": "Einfach",
            "phonetic": "Ayn-fakh",
            "meaning": "satu arah"
          },
          {
            "word": "hin und zurück",
            "phonetic": "hin oont tsoo-rook",
            "meaning": "pulang pergi"
          },
          {
            "word": "Gleis",
            "phonetic": "Glays",
            "meaning": "peron/jalur rel"
          }
        ]
      },
      {
        "id": "s4",
        "speakerId": "markus",
        "speakerName": "Markus",
        "speakerRole": "Penumpang",
        "avatar": "🧑‍💼",
        "nativeText": "Nur einfach, bitte. Vielen Dank für Ihre Hilfe!",
        "phoneticText": "Noor ayn-fakh, bit-tuh. Fee-len Dahnk fyoor Ee-ruh Hil-fuh!",
        "translationId": "Satu arah saja, tolong. Terima kasih banyak atas bantuan Anda!",
        "audioVoiceLang": "de-DE",
        "words": [
          {
            "word": "Nur",
            "phonetic": "Noor",
            "meaning": "hanya/saja"
          },
          {
            "word": "Vielen Dank",
            "phonetic": "Fee-len Dahnk",
            "meaning": "terima kasih banyak"
          }
        ]
      }
    ],
    "comprehensionQuiz": [
      {
        "id": "de-d1-q1",
        "type": "multiple_choice",
        "prompt": "Dari peron (Gleis) berapakah kereta ICE menuju München berangkat?",
        "options": [
          "Gleis 7 (Peron 7)",
          "Gleis 2",
          "Gleis 14",
          "Gleis 5"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Petugas menyatakan kereta berangkat 'ab Gleis 7'."
      }
    ]
  }
];
