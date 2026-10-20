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
  },
{
  "id": "de-dial-2",
  "languageId": "german",
  "level": "B2",
  "title": "Konsultasi Rencana Tesis dengan Profesor di Kampus",
  "titleNative": "Sprechstunde beim Betreuer der Masterarbeit an der Universität",
  "description": "Percakapan resmi akademis dalam jam bimbingan (Sprechstunde) bersama dosen pembimbing mengenai proposal tesis master, metodologi eksperimen, dan tenggat waktu resmi.",
  "category": "Kampus & Akademik",
  "iconName": "GraduationCap",
  "characters": [
    {
      "id": "prof",
      "name": "Professor Dr. Weber",
      "role": "Erstprüfer & Betreuer",
      "avatar": "👨‍🏫"
    },
    {
      "id": "student",
      "name": "Jonas",
      "role": "Masterstudent",
      "avatar": "🎓"
    }
  ],
  "sentences": [
    {
      "id": "de2-s1",
      "speakerId": "student",
      "speakerName": "Jonas",
      "speakerRole": "Masterstudent",
      "avatar": "🎓",
      "nativeText": "Guten Tag Herr Professor Dr. Weber, vielen Dank für die Gelegenheit, mein Exposé zur Masterarbeit zu besprechen.",
      "phoneticText": "Goo-tuhn tahk hehr proh-fehs-sohr dohk-tohr Vay-buhr, fee-luhn dahnk fuer dee guh-lay-guhn-heyt, mein Ehks-poh-zay tsoor mahs-tuhr-ahr-beit tsoo buh-shpreh-khuhn.",
      "translationId": "Selamat siang Profesor Dr. Weber, terima kasih banyak atas kesempatan mendiskusikan proposal naskah tesis master saya.",
      "audioVoiceLang": "de-DE",
      "words": [
        {
          "word": "Gelegenheit",
          "phonetic": "guh-lay-guhn-heyt",
          "meaning": "kesempatan berharga"
        },
        {
          "word": "Exposé",
          "phonetic": "Ehks-poh-zay",
          "meaning": "proposal / draf ringkasan riset"
        },
        {
          "word": "Masterarbeit",
          "phonetic": "mahs-tuhr-ahr-beit",
          "meaning": "tesis kelulusan master"
        }
      ]
    },
    {
      "id": "de2-s2",
      "speakerId": "prof",
      "speakerName": "Professor Dr. Weber",
      "speakerRole": "Erstprüfer & Betreuer",
      "avatar": "👨‍🏫",
      "nativeText": "Guten Tag Jonas, nehmen Sie bitte Platz. Ihr theoretischer Rahmen ist bereits sehr solide ausgearbeitet.",
      "phoneticText": "Goo-tuhn tahk Yoh-nahs, nay-muhn zee beet-tuh plahts. Eer tay-oh-ray-tee-shuhr rah-muhn is buh-reyts zehr zoh-lee-duh ows-guh-ahr-beye-tuht.",
      "translationId": "Selamat siang Jonas, silakan duduk. Kerangka teoretis Anda telah tersusun sangat solid dan matang.",
      "audioVoiceLang": "de-DE",
      "words": [
        {
          "word": "nehmen Sie Platz",
          "phonetic": "nay-muhn zee plahts",
          "meaning": "silakan duduk"
        },
        {
          "word": "theoretischer Rahmen",
          "phonetic": "tay-oh-ray-tee-shuhr rah-muhn",
          "meaning": "kerangka teoretis riset"
        },
        {
          "word": "solide",
          "phonetic": "zoh-lee-duh",
          "meaning": "kokoh / mantap"
        }
      ]
    },
    {
      "id": "de2-s3",
      "speakerId": "student",
      "speakerName": "Jonas",
      "speakerRole": "Masterstudent",
      "avatar": "🎓",
      "nativeText": "Das freut mich sehr! Haben Sie noch Anmerkungen zum experimentellen Versuchsaufbau im Labor?",
      "phoneticText": "Dahs froyt meekh zehr! Hah-buhn zee nohkh ahn-mehr-koong-uhn tsoom ehks-pay-ree-mehn-tehl-luhn fehr-zoochs-owf-bow eem lah-bohr?",
      "translationId": "Saya sangat senang mendengarnya! Apakah Bapak memiliki catatan evaluasi perihal rancangan uji eksperimen di lab?",
      "audioVoiceLang": "de-DE",
      "words": [
        {
          "word": "Anmerkungen",
          "phonetic": "ahn-mehr-koong-uhn",
          "meaning": "catatan / masukan evaluasi"
        },
        {
          "word": "experimentell",
          "phonetic": "ehks-pay-ree-mehn-tehl",
          "meaning": "eksperimental"
        },
        {
          "word": "Versuchsaufbau",
          "phonetic": "fehr-zoochs-owf-bow",
          "meaning": "rancangan susunan uji eksperimen"
        }
      ]
    },
    {
      "id": "de2-s4",
      "speakerId": "prof",
      "speakerName": "Professor Dr. Weber",
      "speakerRole": "Erstprüfer & Betreuer",
      "avatar": "👨‍🏫",
      "nativeText": "Achten Sie unbedingt auf die Kalibrierung der Messsensoren, um systematische Messfehler zu vermeiden.",
      "phoneticText": "Ahkh-tuhn zee oon-buh-deengt owf dee kah-lee-bree-roong dehr mehs-sehn-zoh-ruhn, oom zees-tuh-mah-tee-shuh mehs-feh-luhr tsoo fehr-meye-duhn.",
      "translationId": "Perhatikanlah mutlak kalibrasi sensor pengukuran agar terhindar dari galat pengukuran yang sistematis.",
      "audioVoiceLang": "de-DE",
      "words": [
        {
          "word": "Kalibrierung",
          "phonetic": "kah-lee-bree-roong",
          "meaning": "kalibrasi alat ukur"
        },
        {
          "word": "Messsensoren",
          "phonetic": "mehs-sehn-zoh-ruhn",
          "meaning": "sensor instrumen pengukuran"
        },
        {
          "word": "vermeiden",
          "phonetic": "fehr-meye-duhn",
          "meaning": "menghindari / mencegah"
        }
      ]
    },
    {
      "id": "de2-s5",
      "speakerId": "student",
      "speakerName": "Jonas",
      "speakerRole": "Masterstudent",
      "avatar": "🎓",
      "nativeText": "Vielen Dank für den Hinweis, Herr Professor! Ich werde das Messprotokoll anpassen und beim Prüfungsamt anmelden.",
      "phoneticText": "Fee-luhn dahnk fuer dayn heen-veys, hehr proh-fehs-sohr! Ikh vehr-duh dahs mehs-proh-toh-kohl ahn-pahs-suhn oont beym prue-foongs-ahmt ahn-mehl-duhn.",
      "translationId": "Terima kasih banyak atas petunjuknya, Profesor! Saya akan menyesuaikan protokol pengukuran dan mendaftarkannya ke kantor ujian.",
      "audioVoiceLang": "de-DE",
      "words": [
        {
          "word": "Hinweis",
          "phonetic": "heen-veys",
          "meaning": "petunjuk arahan penting"
        },
        {
          "word": "Messprotokoll",
          "phonetic": "mehs-proh-toh-kohl",
          "meaning": "protokol catatan pengukuran"
        },
        {
          "word": "Prüfungsamt",
          "phonetic": "prue-foongs-ahmt",
          "meaning": "kantor administrasi ujian kampus"
        }
      ]
    }
  ],
  "comprehensionQuiz": [
    {
      "id": "qz-de-2-1",
      "type": "multiple_choice",
      "prompt": "Welches Thema besprechen Jonas und Professor Dr. Weber in der Sprechstunde?",
      "options": [
        "Die Vorbereitung der Mensa-Speisekarte",
        "Das Exposé zur Masterarbeit",
        "Eine Wohnheimanmeldung",
        "Einen Antrag auf Beurlaubung"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Jonas bedankt sich für die Gelegenheit, 'mein Exposé zur Masterarbeit zu besprechen'."
    },
    {
      "id": "qz-de-2-2",
      "type": "multiple_choice",
      "prompt": "Wie beurteilt Professor Weber den theoretischen Rahmen des Antrags?",
      "options": [
        "Vollständig unbrauchbar",
        "Sehr solide ausgearbeitet (tersusun sangat solid)",
        "Viel zu kurz",
        "Thema verfehlt"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Der Professor lobt: 'Ihr theoretischer Rahmen ist bereits sehr solide ausgearbeitet'."
    },
    {
      "id": "qz-de-2-3",
      "type": "sentence_reorder",
      "prompt": "Bringen Sie die höfliche akademische Bitte in die korrekte Reihenfolge:",
      "scrambledWords": [
        "Nehmen Sie",
        "bitte Platz",
        "im Büro",
        "des Professors"
      ],
      "correctOrder": [
        "Nehmen Sie",
        "bitte Platz",
        "im Büro",
        "des Professors"
      ],
      "explanation": "Höfliche Aufforderung: Nehmen Sie + bitte Platz + Ortsangabe (im Büro des Professors)."
    },
    {
      "id": "qz-de-2-4",
      "type": "multiple_choice",
      "prompt": "Auf welchen technischen Aspekt im Labor soll Jonas besonders achten?",
      "options": [
        "Auf die Beleuchtung des Raumes",
        "Auf die Kalibrierung der Messsensoren",
        "Auf die Wandfarbe",
        "Auf die Pausenzeiten"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Professor Weber mahnt: 'Achten Sie unbedingt auf die Kalibrierung der Messsensoren'."
    },
    {
      "id": "qz-de-2-5",
      "type": "multiple_choice",
      "prompt": "Bei welcher universitären Institution wird Jonas die Masterarbeit nun offiziell anmelden?",
      "options": [
        "Beim Sportzentrum",
        "Beim Prüfungsamt (kantor ujian akademik)",
        "Beim Fundbüro",
        "Beim Mensabetrieb"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Jonas erklärt: 'und beim Prüfungsamt anmelden'."
    }
  ]
}
];
