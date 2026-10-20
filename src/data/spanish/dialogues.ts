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
  },
{
  "id": "es-dial-2",
  "languageId": "spanish",
  "level": "B2",
  "title": "Konsultasi Rencana Tesis dengan Profesor di Kampus",
  "titleNative": "Tutoría académica sobre el Trabajo de Fin de Máster con el director de tesis",
  "description": "Percakapan formal akademis saat sesi tutorial bimbingan bersama dosen pembimbing mengenai kerangka konseptual proposal tesis, metodologi penelitian, dan jadwal sidang.",
  "category": "Kampus & Akademik",
  "iconName": "GraduationCap",
  "characters": [
    {
      "id": "prof",
      "name": "Catedrático Dr. Navarro",
      "role": "Director de TFM",
      "avatar": "👨‍🏫"
    },
    {
      "id": "student",
      "name": "Lucía",
      "role": "Estudiante de Posgrado",
      "avatar": "🎓"
    }
  ],
  "sentences": [
    {
      "id": "es2-s1",
      "speakerId": "student",
      "speakerName": "Lucía",
      "speakerRole": "Estudiante de Posgrado",
      "avatar": "🎓",
      "nativeText": "Buenos días, estimado doctor Navarro. Le agradezco enormemente que me haya concedido esta tutoría para revisar mi TFM.",
      "phoneticText": "Bweh-nohs dee-ahs, ehs-tee-mah-doh dohk-tohr Nah-vah-rroh. Leh ah-grah-dehth-koh eh-nohr-meh-mehn-teh keh meh ah-yah kohn-theh-dee-doh ehs-tah too-toh-ree-ah.",
      "translationId": "Selamat pagi, Yth. Dokter Navarro. Saya sangat berterima kasih atas kesediaan Anda meluangkan waktu bimbingan tutorial untuk meninjau Tesis Magister saya.",
      "audioVoiceLang": "es-ES",
      "words": [
        {
          "word": "tutoría",
          "phonetic": "too-toh-ree-ah",
          "meaning": "sesi bimbingan tutorial dosen"
        },
        {
          "word": "concedido",
          "phonetic": "kohn-theh-dee-doh",
          "meaning": "meluangkan / memberikan"
        },
        {
          "word": "TFM",
          "phonetic": "teh-eh-feh-eh-meh",
          "meaning": "Trabajo de Fin de Máster (tesis)"
        }
      ]
    },
    {
      "id": "es2-s2",
      "speakerId": "prof",
      "speakerName": "Catedrático Dr. Navarro",
      "speakerRole": "Director de TFM",
      "avatar": "👨‍🏫",
      "nativeText": "Buenos días, Lucía. Siéntate, por favor. He examinado tu marco teórico y la fundamentación epistemológica me parece excelente.",
      "phoneticText": "Bweh-nohs dee-ahs, Loo-thee-ah. Syehn-tah-teh, pohr fah-vohr. Eh ehk-sah-mee-nah-doh too mahr-koh tay-oh-ree-koh ee lah foon-dah-mehn-tah-syohn eh-pehs-teh-moh-loh-khee-kah.",
      "translationId": "Selamat pagi, Lucía. Silakan duduk. Saya telah memeriksa kerangka teori Anda dan landasan epistemologisnya tampak sangat unggul.",
      "audioVoiceLang": "es-ES",
      "words": [
        {
          "word": "siéntate",
          "phonetic": "syehn-tah-teh",
          "meaning": "silakan duduk"
        },
        {
          "word": "marco teórico",
          "phonetic": "mahr-koh tay-oh-ree-koh",
          "meaning": "kerangka landasan teori"
        },
        {
          "word": "epistemológica",
          "phonetic": "eh-pehs-teh-moh-loh-khee-kah",
          "meaning": "epistemologis / dasar keilmuan"
        }
      ]
    },
    {
      "id": "es2-s3",
      "speakerId": "student",
      "speakerName": "Lucía",
      "speakerRole": "Estudiante de Posgrado",
      "avatar": "🎓",
      "nativeText": "Muchas gracias, profesor. Quería consultarle sobre el tamaño muestral para asegurar la representatividad en el trabajo de campo.",
      "phoneticText": "Moo-chahs grah-syahs, proh-feh-sohr. Keh-ree-ah kohn-sool-tahr-leh soh-breh ehl tah-mah-nyoh mwehs-trahl pah-rah ah-seh-goo-rahr lah reh-preh-sehn-tah-tee-vee-dahd.",
      "translationId": "Terima kasih banyak, profesor. Saya ingin berkonsultasi mengenai ukuran sampel demi memastikan keterwakilan dalam kerja lapangan.",
      "audioVoiceLang": "es-ES",
      "words": [
        {
          "word": "tamaño muestral",
          "phonetic": "tah-mah-nyoh mwehs-trahl",
          "meaning": "ukuran sampel penelitian"
        },
        {
          "word": "representatividad",
          "phonetic": "reh-preh-sehn-tah-tee-vee-dahd",
          "meaning": "keterwakilan data representatif"
        },
        {
          "word": "trabajo de campo",
          "phonetic": "trah-bah-khoh deh kahm-poh",
          "meaning": "kerja riset lapangan"
        }
      ]
    },
    {
      "id": "es2-s4",
      "speakerId": "prof",
      "speakerName": "Catedrático Dr. Navarro",
      "speakerRole": "Director de TFM",
      "avatar": "👨‍🏫",
      "nativeText": "Recomiendo aplicar un muestreo estratificado de al menos doscientos sujetos para evitar sesgos en el análisis multivariante.",
      "phoneticText": "Reh-koh-myehn-doh ah-plee-kahr un mwehs-treh-oh ehs-trah-tee-fee-kah-doh deh ahl meh-nohs dohs-thyehn-tohs soo-kheh-tohs pah-rah eh-vee-tahr sehs-gohs.",
      "translationId": "Saya menyarankan menerapkan teknik sampling berstrata minimal dua ratus responden guna menghindari bias dalam analisis multivariat.",
      "audioVoiceLang": "es-ES",
      "words": [
        {
          "word": "muestreo estratificado",
          "phonetic": "mwehs-treh-oh ehs-trah-tee-fee-kah-doh",
          "meaning": "sampling berstrata"
        },
        {
          "word": "sesgos",
          "phonetic": "sehs-gohs",
          "meaning": "bias / deviasi galat"
        },
        {
          "word": "multivariante",
          "phonetic": "mool-tee-vah-ryahn-teh",
          "meaning": "multivariat"
        }
      ]
    },
    {
      "id": "es2-s5",
      "speakerId": "student",
      "speakerName": "Lucía",
      "speakerRole": "Estudiante de Posgrado",
      "avatar": "🎓",
      "nativeText": "Tomo nota de sus sugerencias, doctor. Incorporaré el diseño muestral y le enviaré el borrador definitivo el próximo viernes.",
      "phoneticText": "Toh-moh noh-tah deh soos soo-kheh-rehn-syahs, dohk-tohr. Een-kohr-poh-rah-reh ehl dee-seh-nyoh mwehs-trahl ee leh ehn-vyah-reh ehl boh-rrah-dohr.",
      "translationId": "Saya catat saran-saran Anda, dokter. Saya akan menyertakan desain sampel tersebut dan mengirimkan draf final Jumat depan.",
      "audioVoiceLang": "es-ES",
      "words": [
        {
          "word": "tomo nota",
          "phonetic": "toh-moh noh-tah",
          "meaning": "saya catat / perhatikan"
        },
        {
          "word": "sugerencias",
          "phonetic": "soo-kheh-rehn-syahs",
          "meaning": "saran-saran masukan"
        },
        {
          "word": "borrador definitivo",
          "phonetic": "boh-rrah-dohr deh-fee-nee-tee-voh",
          "meaning": "draf naskah final"
        }
      ]
    }
  ],
  "comprehensionQuiz": [
    {
      "id": "qz-es-2-1",
      "type": "multiple_choice",
      "prompt": "¿Cuál es el propósito central de la tutoría académica entre Lucía y el doctor Navarro?",
      "options": [
        "Pedir una prórroga para pagar la matrícula",
        "Revisar el Trabajo de Fin de Máster (TFM)",
        "Solicitar una beca deportiva",
        "Comprar libros de texto"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Lucía agradece la oportunidad de 'revisar mi TFM' (meninjau Tesis Magister)."
    },
    {
      "id": "qz-es-2-2",
      "type": "multiple_choice",
      "prompt": "¿Qué valoración hace el catedrático sobre el marco teórico presentado?",
      "options": [
        "Completamente erróneo",
        "Excelente y con sólida fundamentación epistemológica",
        "Demasiado breve",
        "Sin interés científico"
      ],
      "correctAnswerIndex": 1,
      "explanation": "El doctor Navarro califica el marco teórico de 'excelente'."
    },
    {
      "id": "qz-es-2-3",
      "type": "sentence_reorder",
      "prompt": "Ordene la expresión formal de agradecimiento:",
      "scrambledWords": [
        "Le agradezco",
        "enormemente",
        "su orientación",
        "académica"
      ],
      "correctOrder": [
        "Le agradezco",
        "enormemente",
        "su orientación",
        "académica"
      ],
      "explanation": "Orden formal español: Le agradezco + enormemente + objeto directo (su orientación académica)."
    },
    {
      "id": "qz-es-2-4",
      "type": "multiple_choice",
      "prompt": "¿Qué técnica de muestreo metodológico aconseja el profesor para el trabajo de campo?",
      "options": [
        "Muestreo estratificado de al menos doscientos sujetos",
        "Elegir a diez amigos al azar",
        "No realizar trabajo de campo",
        "Encuestas por redes sociales"
      ],
      "correctAnswerIndex": 0,
      "explanation": "El catedrático recomienda: 'un muestreo estratificado de al menos doscientos sujetos'."
    },
    {
      "id": "qz-es-2-5",
      "type": "multiple_choice",
      "prompt": "¿Cuándo se compromete Lucía a remitir el borrador definitivo con las mejoras incorporadas?",
      "options": [
        "Dentro de tres meses",
        "El próximo viernes",
        "Mañana mismo a primera hora",
        "El año que viene"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Lucía afirma: 'le enviaré el borrador definitivo el próximo viernes'."
    }
  ]
}
];
