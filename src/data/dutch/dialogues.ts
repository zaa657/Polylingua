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
  },
{
  "id": "nl-dial-2",
  "languageId": "dutch",
  "level": "B2",
  "title": "Konsultasi Rencana Tesis dengan Profesor di Kampus",
  "titleNative": "Afstudeergesprek over het scriptievoorstel met de hoogleraar",
  "description": "Percakapan formal akademis mengenai proposal penelitian skripsi, metodologi empiris, dan jadwal bimbingan berkala di universitas Belanda.",
  "category": "Kampus & Akademik",
  "iconName": "GraduationCap",
  "characters": [
    {
      "id": "prof",
      "name": "Professor Van Dijk",
      "role": "Afstudeerbegeleider",
      "avatar": "👨‍🏫"
    },
    {
      "id": "student",
      "name": "Bram",
      "role": "Masterstudent",
      "avatar": "🎓"
    }
  ],
  "sentences": [
    {
      "id": "nl2-s1",
      "speakerId": "student",
      "speakerName": "Bram",
      "speakerRole": "Masterstudent",
      "avatar": "🎓",
      "nativeText": "Goedemiddag professor, hartelijk dank dat u tijd heeft vrijgemaakt om mijn scriptievoorstel te bespreken.",
      "phoneticText": "Khoo-duh-mee-dahkh proh-feh-sohr, hahr-tuh-luk dahnk daht oo teit hayft vrei-khuh-mahkt ohm mein skreep-see-fohr-stehl tuh buh-spray-kuhn.",
      "translationId": "Selamat siang profesor, terima kasih banyak telah meluangkan waktu untuk mendiskusikan proposal skripsi saya.",
      "audioVoiceLang": "nl-NL",
      "words": [
        {
          "word": "tijd vrijgemaakt",
          "phonetic": "teit vrei-khuh-mahkt",
          "meaning": "meluangkan waktu"
        },
        {
          "word": "scriptievoorstel",
          "phonetic": "skreep-see-fohr-stehl",
          "meaning": "proposal rancangan tesis"
        },
        {
          "word": "bespreken",
          "phonetic": "buh-spray-kuhn",
          "meaning": "mendiskusikan / membahas"
        }
      ]
    },
    {
      "id": "nl2-s2",
      "speakerId": "prof",
      "speakerName": "Professor Van Dijk",
      "speakerRole": "Afstudeerbegeleider",
      "avatar": "👨‍🏫",
      "nativeText": "Dag Bram, ga lekker zitten. Ik heb je opzet doorgenomen en de probleemstelling is helder geformuleerd.",
      "phoneticText": "Dahkh Brahm, khah lehk-kuhr zeet-tuhn. Ik hehp yuh ohp-zeht dohr-khuh-noh-muhn ehn duh proh-blaym-stehl-leeng is hehl-duhr khuh-fohr-moo-layrt.",
      "translationId": "Halo Bram, silakan duduk santai. Saya telah menelaah rancanganmu dan rumusan masalahnya dirumuskan dengan sangat jelas.",
      "audioVoiceLang": "nl-NL",
      "words": [
        {
          "word": "opzet",
          "phonetic": "ohp-zeht",
          "meaning": "kerangka rancangan awal"
        },
        {
          "word": "probleemstelling",
          "phonetic": "proh-blaym-stehl-leeng",
          "meaning": "rumusan masalah penelitian"
        },
        {
          "word": "helder",
          "phonetic": "hehl-duhr",
          "meaning": "gamblang / jelas"
        }
      ]
    },
    {
      "id": "nl2-s3",
      "speakerId": "student",
      "speakerName": "Bram",
      "speakerRole": "Masterstudent",
      "avatar": "🎓",
      "nativeText": "Fijn om te horen! Heeft u nog specifieke feedback op de kwantitatieve analysemethode die ik heb gekozen?",
      "phoneticText": "Fein ohm tuh hoh-ruhn! Hayft oo nohkh spay-see-fee-kuh feed-bahk ohp duh kwahn-tee-tah-tee-vuh ah-nah-lee-zuh-may-toh-duh?",
      "translationId": "Senang mendengarnya! Apakah Bapak memiliki masukan spesifik atas metode analisis kuantitatif yang saya pilih?",
      "audioVoiceLang": "nl-NL",
      "words": [
        {
          "word": "feedback",
          "phonetic": "feed-bahk",
          "meaning": "masukan evaluasi / saran"
        },
        {
          "word": "kwantitatieve",
          "phonetic": "kwahn-tee-tah-tee-vuh",
          "meaning": "kuantitatif"
        },
        {
          "word": "analysemethode",
          "phonetic": "ah-nah-lee-zuh-may-toh-duh",
          "meaning": "metode analisis data"
        }
      ]
    },
    {
      "id": "nl2-s4",
      "speakerId": "prof",
      "speakerName": "Professor Van Dijk",
      "speakerRole": "Afstudeerbegeleider",
      "avatar": "👨‍🏫",
      "nativeText": "Zorg dat je regressieanalyse robuust genoeg is en toets op mogelijke confounders in de dataset.",
      "phoneticText": "Zohrk daht yuh ray-khreh-see-ah-nah-lee-zuh roh-boost khuh-nookh is ehn toots ohp moh-khuh-luh-kuh kohn-fown-duhrs.",
      "translationId": "Pastikan analisis regresimu cukup kokoh dan lakukan uji terhadap variabel perancu potensial dalam dataset.",
      "audioVoiceLang": "nl-NL",
      "words": [
        {
          "word": "regressieanalyse",
          "phonetic": "ray-khreh-see-ah-nah-lee-zuh",
          "meaning": "analisis regresi statistik"
        },
        {
          "word": "robuust",
          "phonetic": "roh-boost",
          "meaning": "kokoh / andal"
        },
        {
          "word": "dataset",
          "phonetic": "dah-tah-seht",
          "meaning": "kumpulan data empiris"
        }
      ]
    },
    {
      "id": "nl2-s5",
      "speakerId": "student",
      "speakerName": "Bram",
      "speakerRole": "Masterstudent",
      "avatar": "🎓",
      "nativeText": "Duidelijk professor, ik ga de robuustheidstesten toevoegen en stuur u volgende week de aangepaste versie.",
      "phoneticText": "Doy-duh-look proh-feh-sohr, ik khah duh roh-boost-heits-tehs-tuhn too-voo-khuhn ehn stoor oo vohl-khuhn-duh wayk duh ahn-khuh-pahs-tuh vehr-see.",
      "translationId": "Sangat jelas profesor, saya akan menambahkan uji ketahanan tersebut dan mengirimkan versi yang disesuaikan pekan depan.",
      "audioVoiceLang": "nl-NL",
      "words": [
        {
          "word": "duidelijk",
          "phonetic": "doy-duh-look",
          "meaning": "jelas / dimengerti"
        },
        {
          "word": "toevoegen",
          "phonetic": "too-voo-khuhn",
          "meaning": "menambahkan"
        },
        {
          "word": "aangepaste versie",
          "phonetic": "ahn-khuh-pahs-tuh vehr-see",
          "meaning": "versi yang disesuaikan / diperbaiki"
        }
      ]
    }
  ],
  "comprehensionQuiz": [
    {
      "id": "qz-nl-2-1",
      "type": "multiple_choice",
      "prompt": "Waarover overleggen Bram en Professor Van Dijk tijdens het gesprek?",
      "options": [
        "Over een kamerhuurcontract",
        "Over het scriptievoorstel van de masteropleiding",
        "Over het annuleren van een tentamen",
        "Over een reis naar het buitenland"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bram bedankt de professor 'om mijn scriptievoorstel te bespreken' (membahas proposal tesis)."
    },
    {
      "id": "qz-nl-2-2",
      "type": "multiple_choice",
      "prompt": "Wat oordeelt de professor over de probleemstelling van Bram?",
      "options": [
        "Onduidelijk en vaag",
        "Helder geformuleerd (dirumuskan dengan jelas)",
        "Veel te lang",
        "Niet wetenschappelijk"
      ],
      "correctAnswerIndex": 1,
      "explanation": "De hoogleraar zegt: 'de probleemstelling is helder geformuleerd' (rumusan masalah jelas)."
    },
    {
      "id": "qz-nl-2-3",
      "type": "sentence_reorder",
      "prompt": "Zet in de juiste academische volgorde: 'Dank u voor het bespreken van mijn scriptie'",
      "scrambledWords": [
        "Hartelijk dank",
        "om mijn scriptie",
        "vandaag",
        "te bespreken"
      ],
      "correctOrder": [
        "Hartelijk dank",
        "om mijn scriptie",
        "vandaag",
        "te bespreken"
      ],
      "explanation": "Vaste volgorde: Hartelijk dank + om + object (mijn scriptie) + tijd (vandaag) + te + infinitief (bespreken)."
    },
    {
      "id": "qz-nl-2-4",
      "type": "multiple_choice",
      "prompt": "Welk methodologisch advies geeft de professor voor de data-analyse?",
      "options": [
        "Geen statistiek gebruiken",
        "Toetsen op mogelijke confounders en zorgen voor een robuuste analyse",
        "Slechts 5 respondenten ondervragen",
        "De dataset weggooien"
      ],
      "correctAnswerIndex": 1,
      "explanation": "De professor benadrukt: 'toets op mogelijke confounders in de dataset'."
    },
    {
      "id": "qz-nl-2-5",
      "type": "multiple_choice",
      "prompt": "Wanneer zal Bram de aangepaste versie van zijn voorstel toesturen?",
      "options": [
        "Vandaag binnen een uur",
        "Volgende week",
        "Over een half jaar",
        "Nooit"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bram belooft: 'en stuur u volgende week de aangepaste versie'."
    }
  ]
}
];
