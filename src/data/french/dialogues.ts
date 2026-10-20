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
  },
{
  "id": "fr-dial-2",
  "languageId": "french",
  "level": "B2",
  "title": "Konsultasi Rencana Tesis dengan Profesor di Kampus",
  "titleNative": "Entretien pédagogique avec le directeur de mémoire à l'université",
  "description": "Percakapan formal akademis dengan dosen pembimbing mengenai perumusan problématique, metodologi penelitian kualitatif, dan penyusunan naskah tesis master.",
  "category": "Kampus & Akademik",
  "iconName": "GraduationCap",
  "characters": [
    {
      "id": "prof",
      "name": "Professeur Laurent",
      "role": "Directeur de recherche",
      "avatar": "👨‍🏫"
    },
    {
      "id": "student",
      "name": "Camille",
      "role": "Étudiante en Master",
      "avatar": "🎓"
    }
  ],
  "sentences": [
    {
      "id": "fr2-s1",
      "speakerId": "student",
      "speakerName": "Camille",
      "speakerRole": "Étudiante en Master",
      "avatar": "🎓",
      "nativeText": "Bonjour Monsieur le Professeur, je vous remercie de me recevoir pour faire le point sur mon mémoire.",
      "phoneticText": "Bon-zhoor muh-syuh luh proh-feh-seur, zhuh voo ruh-mehr-see duh muh ruh-suh-vwahr poor fehr luh pwan soor mon may-mwar.",
      "translationId": "Halo Bapak Profesor, terima kasih telah berkenan menerima saya untuk membahas perkembangan tugas akhir tesis saya.",
      "audioVoiceLang": "fr-FR",
      "words": [
        {
          "word": "recevoir",
          "phonetic": "ruh-suh-vwahr",
          "meaning": "menerima kunjungan"
        },
        {
          "word": "faire le point",
          "phonetic": "fehr luh pwan",
          "meaning": "meninjau perkembangan terkini"
        },
        {
          "word": "mémoire",
          "phonetic": "may-mwar",
          "meaning": "tesis / karya tulis kelulusan"
        }
      ]
    },
    {
      "id": "fr2-s2",
      "speakerId": "prof",
      "speakerName": "Professeur Laurent",
      "speakerRole": "Directeur de recherche",
      "avatar": "👨‍🏫",
      "nativeText": "Bonjour Camille, asseyez-vous je vous prie. J'ai lu votre proposition de problématique avec grand intérêt.",
      "phoneticText": "Bon-zhoor Kah-meel, ah-say-yay-voo zhuh voo pree. Zhay loo voh-truh proh-poh-zee-syohn duh proh-blay-mah-teek ah-vehk grahn tan-tay-reh.",
      "translationId": "Halo Camille, silakan duduk. Saya telah membaca usulan problématique Anda dengan penuh minat.",
      "audioVoiceLang": "fr-FR",
      "words": [
        {
          "word": "asseyez-vous",
          "phonetic": "ah-say-yay-voo",
          "meaning": "silakan duduk"
        },
        {
          "word": "problématique",
          "phonetic": "proh-blay-mah-teek",
          "meaning": "rumusan masalah konseptual"
        },
        {
          "word": "grand intérêt",
          "phonetic": "grahn tan-tay-reh",
          "meaning": "perhatian dan minat besar"
        }
      ]
    },
    {
      "id": "fr2-s3",
      "speakerId": "student",
      "speakerName": "Camille",
      "speakerRole": "Étudiante en Master",
      "avatar": "🎓",
      "nativeText": "Pensez-vous que mon corpus d'entretiens qualitatifs soit suffisant pour valider les hypothèses ?",
      "phoneticText": "Pahn-say-voo kuh mon kohr-poos dahn-truh-tyang kah-lee-tah-teef swah soo-fee-zahn poor vah-lee-day layz ee-poh-tez?",
      "translationId": "Menurut Bapak apakah korpus data wawancara kualitatif saya sudah memadai untuk menguji hipotesis?",
      "audioVoiceLang": "fr-FR",
      "words": [
        {
          "word": "corpus",
          "phonetic": "kohr-poos",
          "meaning": "korpus data himpunan"
        },
        {
          "word": "entretiens",
          "phonetic": "ahn-truh-tyang",
          "meaning": "wawancara penelitian"
        },
        {
          "word": "suffisant",
          "phonetic": "soo-fee-zahn",
          "meaning": "cukup / memadai"
        }
      ]
    },
    {
      "id": "fr2-s4",
      "speakerId": "prof",
      "speakerName": "Professeur Laurent",
      "speakerRole": "Directeur de recherche",
      "avatar": "👨‍🏫",
      "nativeText": "Il serait judicieux d'y ajouter cinq entretiens avec des experts pour consolider le plan en trois parties.",
      "phoneticText": "Eel suh-reh zhoo-dee-syuh dee ah-zhoo-tay sank ahn-truh-tyang ah-vehk dayz ehks-pehr poor kohn-soh-lee-day luh plahn ahn trwah pahr-tee.",
      "translationId": "Akan sangat bijak menambahkan lima sesi wawancara dengan para pakar untuk memantapkan struktur rencana 3 bagian.",
      "audioVoiceLang": "fr-FR",
      "words": [
        {
          "word": "judicieux",
          "phonetic": "zhoo-dee-syuh",
          "meaning": "bijak / tepat sasaran"
        },
        {
          "word": "experts",
          "phonetic": "ehks-pehr",
          "meaning": "ahli / pakar spesialis"
        },
        {
          "word": "plan en trois parties",
          "phonetic": "plahn ahn trwah pahr-tee",
          "meaning": "struktur esai 3 bagian khas Prancis"
        }
      ]
    },
    {
      "id": "fr2-s5",
      "speakerId": "student",
      "speakerName": "Camille",
      "speakerRole": "Étudiante en Master",
      "avatar": "🎓",
      "nativeText": "Entendu Monsieur. Je vous remettrai la deuxième version corrigée avant la fin du mois.",
      "phoneticText": "Ahn-tahn-doo Muh-syuh. Zhuh voo ruh-meh-tray lah duh-zyem vehr-syohn koh-ree-zhay ah-vahn lah fang doo mwah.",
      "translationId": "Dipahami Bapak. Saya akan menyerahkan draf versi revisi kedua kepada Anda sebelum akhir bulan ini.",
      "audioVoiceLang": "fr-FR",
      "words": [
        {
          "word": "entendu",
          "phonetic": "ahn-tahn-doo",
          "meaning": "dimengerti / dipahami"
        },
        {
          "word": "remettre",
          "phonetic": "ruh-mehtr",
          "meaning": "menyerahkan berkas"
        },
        {
          "word": "version corrigée",
          "phonetic": "vehr-syohn koh-ree-zhay",
          "meaning": "versi hasil revisi perbaikan"
        }
      ]
    }
  ],
  "comprehensionQuiz": [
    {
      "id": "qz-fr-2-1",
      "type": "multiple_choice",
      "prompt": "Pour quel motif Camille rencontre-t-elle le Professeur Laurent ?",
      "options": [
        "Pour demander une bourse de voyage",
        "Pour faire le point sur l'avancement de son mémoire",
        "Pour annuler son inscription",
        "Pour emprunter du matériel de laboratoire"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Camille précise : 'pour faire le point sur mon mémoire' (membahas perkembangan tesisnya)."
    },
    {
      "id": "qz-fr-2-2",
      "type": "multiple_choice",
      "prompt": "Quelle recommandation le professeur formule-t-il au sujet du corpus de recherche ?",
      "options": [
        "Supprimer tous les entretiens",
        "Ajouter cinq entretiens avec des experts",
        "Changer totalement de sujet",
        "Ne pas rédiger de conclusion"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Le professeur conseille d'ajouter 'cinq entretiens avec des experts' (lima wawancara dengan pakar)."
    },
    {
      "id": "qz-fr-2-3",
      "type": "sentence_reorder",
      "prompt": "Remettez dans l'ordre formel : 'Merci de me recevoir pour discuter'",
      "scrambledWords": [
        "Je vous remercie",
        "de me recevoir",
        "pour discuter",
        "du mémoire"
      ],
      "correctOrder": [
        "Je vous remercie",
        "de me recevoir",
        "pour discuter",
        "du mémoire"
      ],
      "explanation": "Ordre syntaxique formel : Je vous remercie + de me recevoir + pour discuter + du mémoire."
    },
    {
      "id": "qz-fr-2-4",
      "type": "multiple_choice",
      "prompt": "Quel modèle de dissertation universitaire français est mentionné par le directeur de recherche ?",
      "options": [
        "Le plan en trois parties",
        "Le résumé en un paragraphe",
        "La liste à puces",
        "L'article journalistique"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Le professeur évoque 'le plan en trois parties' (struktur esai analitis 3 bagian khas Prancis)."
    },
    {
      "id": "qz-fr-2-5",
      "type": "multiple_choice",
      "prompt": "Quand Camille s'engage-t-elle à soumettre la version corrigée de son manuscrit ?",
      "options": [
        "Demain matin",
        "Avant la fin du mois",
        "L'année prochaine",
        "Après la soutenance"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Camille déclare : 'avant la fin du mois' (sebelum akhir bulan)."
    }
  ]
}
];
