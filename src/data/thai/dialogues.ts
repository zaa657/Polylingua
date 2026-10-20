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
  },
{
  "id": "th-dial-2",
  "languageId": "thai",
  "level": "TH3",
  "title": "Konsultasi Rencana Tesis dengan Profesor di Kampus",
  "titleNative": "ปรึกษาหัวข้อวิทยานิพนธ์กับอาจารย์ที่ปรึกษา",
  "description": "Latihan percakapan formal akademis dengan dosen pembimbing mengenai proposal penelitian skripsi, metodologi riset, dan pengumpulan data.",
  "category": "Kampus & Akademik",
  "iconName": "GraduationCap",
  "characters": [
    {
      "id": "prof",
      "name": "อาจารย์สมชาย (Prof. Somchai)",
      "role": "Dosen Pembimbing",
      "avatar": "👨‍🏫"
    },
    {
      "id": "student",
      "name": "รินดา (Rinda)",
      "role": "Mahasiswa Asing",
      "avatar": "🎓"
    }
  ],
  "sentences": [
    {
      "id": "th2-s1",
      "speakerId": "student",
      "speakerName": "รินดา (Rinda)",
      "speakerRole": "Mahasiswa Asing",
      "avatar": "🎓",
      "nativeText": "กราบเรียนท่านอาจารย์คะ หนูขออนุญาตเข้าพบเพื่อปรึกษาเรื่องโครงร่างวิทยานิพนธ์ค่ะ",
      "phoneticText": "Kraap-rian thaan ajaan kha, noo khor anuyaat khao phop phuea prueksaa rueang khrong-raang wittayaniphon kha.",
      "translationId": "Dengan hormat Profesor, saya memohon izin menemui Bapak untuk berkonsultasi mengenai proposal tesis saya.",
      "audioVoiceLang": "th-TH",
      "words": [
        {
          "word": "กราบเรียน",
          "phonetic": "kraap-rian",
          "meaning": "dengan hormat (sangat sopan)"
        },
        {
          "word": "ท่านอาจารย์",
          "phonetic": "thaan ajaan",
          "meaning": "Bapak Profesor"
        },
        {
          "word": "ขออนุญาต",
          "phonetic": "khor anuyaat",
          "meaning": "mohon izin"
        },
        {
          "word": "โครงร่างวิทยานิพนธ์",
          "phonetic": "khrong-raang wittayaniphon",
          "meaning": "proposal rancangan tesis"
        }
      ]
    },
    {
      "id": "th2-s2",
      "speakerId": "prof",
      "speakerName": "อาจารย์สมชาย (Prof. Somchai)",
      "speakerRole": "Dosen Pembimbing",
      "avatar": "👨‍🏫",
      "nativeText": "เชิญนั่งก่อนครับรินดา ครูได้อ่านบทคัดย่อที่ส่งมาทางอีเมลแล้ว หัวข้อน่าสนใจมาก",
      "phoneticText": "Choen nang korn khrap Rinda, khroo dai aan bot-khat-yor thii song maa thaang ee-meo laew, hua-khor naa son-jai maak.",
      "translationId": "Silakan duduk dulu Rinda. Saya sudah membaca abstrak yang dikirim lewat surel, topiknya sangat menarik.",
      "audioVoiceLang": "th-TH",
      "words": [
        {
          "word": "เชิญนั่ง",
          "phonetic": "choen nang",
          "meaning": "silakan duduk"
        },
        {
          "word": "บทคัดย่อ",
          "phonetic": "bot-khat-yor",
          "meaning": "abstrak penelitian"
        },
        {
          "word": "น่าสนใจ",
          "phonetic": "naa son-jai",
          "meaning": "menarik perhatian"
        }
      ]
    },
    {
      "id": "th2-s3",
      "speakerId": "student",
      "speakerName": "รินดา (Rinda)",
      "speakerRole": "Mahasiswa Asing",
      "avatar": "🎓",
      "nativeText": "ขอบพระคุณค่ะอาจารย์ หนูมีข้อสงสัยเรื่องกลุ่มตัวอย่างที่ต้องใช้ในการเก็บข้อมูลภาคสนามค่ะ",
      "phoneticText": "Khop-phra-khun kha ajaan, noo mee khor song-sai rueang klum tua-yaang thii tong chai nai kaan kep khor-moon phaak sa-naam kha.",
      "translationId": "Terima kasih banyak Profesor. Saya ada keraguan perihal jumlah sampel yang harus digunakan dalam pengambilan data lapangan.",
      "audioVoiceLang": "th-TH",
      "words": [
        {
          "word": "ขอบพระคุณ",
          "phonetic": "khop-phra-khun",
          "meaning": "terima kasih banyak (hormat)"
        },
        {
          "word": "กลุ่มตัวอย่าง",
          "phonetic": "klum tua-yaang",
          "meaning": "kelompok sampel penelitian"
        },
        {
          "word": "ภาคสนาม",
          "phonetic": "phaak sa-naam",
          "meaning": "lapangan"
        }
      ]
    },
    {
      "id": "th2-s4",
      "speakerId": "prof",
      "speakerName": "อาจารย์สมชาย (Prof. Somchai)",
      "speakerRole": "Dosen Pembimbing",
      "avatar": "👨‍🏫",
      "nativeText": "ครูแนะนำให้ขยายกลุ่มตัวอย่างเป็นอย่างน้อยสามร้อยคนเพื่อให้ผลทางสถิติมีความน่าเชื่อถือ",
      "phoneticText": "Khroo nae-nam hai kha-yaai klum tua-yaang pen yaang-noi saam-roi khon phuea hai phon thaang sa-thi-ti mee khwam naa chuea-thue.",
      "translationId": "Saya menyarankan untuk memperluas sampel menjadi minimal 300 orang agar hasil statistiknya valid dan kredibel.",
      "audioVoiceLang": "th-TH",
      "words": [
        {
          "word": "แนะนำ",
          "phonetic": "nae-nam",
          "meaning": "menyarankan / merekomendasikan"
        },
        {
          "word": "ขยาย",
          "phonetic": "kha-yaai",
          "meaning": "memperluas / memperbesar"
        },
        {
          "word": "ความน่าเชื่อถือ",
          "phonetic": "khwam naa chuea-thue",
          "meaning": "reliabilitas / kredibilitas"
        }
      ]
    },
    {
      "id": "th2-s5",
      "speakerId": "student",
      "speakerName": "รินดา (Rinda)",
      "speakerRole": "Mahasiswa Asing",
      "avatar": "🎓",
      "nativeText": "รับทราบค่ะอาจารย์ หนูจะปรับปรุงแก้ไขแล้วส่งฉบับแก้ไขให้ภายในวันศุกร์หน้านะคะ",
      "phoneticText": "Rap-saap kha ajaan, noo ja prap-proong kae-khai laew song cha-bap kae-khai hai phaai-nai wan suk naa na kha.",
      "translationId": "Baik saya pahami Profesor. Saya akan merevisi dan mengirimkan naskah perbaikan sebelum Jumat depan.",
      "audioVoiceLang": "th-TH",
      "words": [
        {
          "word": "รับทราบ",
          "phonetic": "rap-saap",
          "meaning": "dimengerti / dipahami"
        },
        {
          "word": "ปรับปรุงแก้ไข",
          "phonetic": "prap-proong kae-khai",
          "meaning": "merevisi / memperbaiki"
        },
        {
          "word": "ภายใน",
          "phonetic": "phaai-nai",
          "meaning": "dalam kurun / sebelum"
        }
      ]
    }
  ],
  "comprehensionQuiz": [
    {
      "id": "qz-th-2-1",
      "type": "multiple_choice",
      "prompt": "Apa tujuan kedatangan Rinda ke ruang kerja Profesor Somchai?",
      "options": [
        "Meminjam buku perpustakaan",
        "Konsultasi rencana proposal tesis kelulusan",
        "Mendaftar asrama kampus",
        "Meminta izin libur kuliah"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Rinda berkata ingin berkonsultasi mengenai 'โครงร่างวิทยานิพนธ์' (proposal tesis)."
    },
    {
      "id": "qz-th-2-2",
      "type": "multiple_choice",
      "prompt": "Berapakah saran jumlah sampel minimal yang direkomendasikan profesor?",
      "options": [
        "50 orang",
        "100 orang",
        "Minimal 300 orang (สามร้อยคน)",
        "1.000 orang"
      ],
      "correctAnswerIndex": 2,
      "explanation": "Profesor menyarankan: 'อย่างน้อยสามร้อยคน' (minimal 300 orang) demi validitas statistik."
    },
    {
      "id": "qz-th-2-3",
      "type": "sentence_reorder",
      "prompt": "Susun kalimat sopan: 'Saya memohon izin berkonsultasi tesis'",
      "scrambledWords": [
        "หนูขออนุญาต",
        "ปรึกษา",
        "เรื่องวิทยานิพนธ์",
        "ค่ะ"
      ],
      "correctOrder": [
        "หนูขออนุญาต",
        "ปรึกษา",
        "เรื่องวิทยานิพนธ์",
        "ค่ะ"
      ],
      "explanation": "Urutan sopan: หนูขออนุญาต + verba (ปรึกษา) + topik (เรื่องวิทยานิพนธ์) + partikel (ค่ะ)."
    },
    {
      "id": "qz-th-2-4",
      "type": "multiple_choice",
      "prompt": "Bagian dokumen apa yang telah dibaca terlebih dahulu oleh profesor lewat email?",
      "options": [
        "บทคัดย่อ (Abstrak)",
        "Bab kesimpulan",
        "Kwitansi biaya",
        "Daftar pustaka"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Profesor berkata: 'ครูได้อ่านบทคัดย่อที่ส่งมาทางอีเมลแล้ว' (Saya sudah membaca abstraknya)."
    },
    {
      "id": "qz-th-2-5",
      "type": "multiple_choice",
      "prompt": "Kapan Rinda berjanji akan mengirimkan naskah revisi hasil bimbingan?",
      "options": [
        "Sore ini juga",
        "Sebelum hari Jumat depan (ภายในวันศุกร์หน้า)",
        "Bulan depan",
        "Tahun depan"
      ],
      "correctAnswerIndex": 1,
      "explanation": "Rinda berkata: 'ส่งฉบับแก้ไขให้ภายในวันศุกร์หน้านะคะ' (mengirimkan revisi sebelum Jumat depan)."
    }
  ]
}
];
