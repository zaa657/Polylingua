import { DialogueScenario } from '@/types/learning';

export const ARABIC_DIALOGUES: DialogueScenario[] = [
  {
    "id": "ar-dial-1",
    "languageId": "arabic",
    "level": "Mustawa 1 (Dasar & Hijaiyah)",
    "title": "Ta'aruf & Perkenalan di Kampus Universitas",
    "titleNative": "التعارف في الحرم الجامعي",
    "description": "Percakapan dua mahasiswa di perpustakaan universitas saling menyapa dengan salam Fusha dan menanyakan jurusan kuliah.",
    "category": "Kampus & Pendidikan",
    "iconName": "GraduationCap",
    "characters": [
      {
        "id": "ahmad",
        "name": "Ahmad",
        "role": "Mahasiswa",
        "avatar": "🧑‍🎓"
      },
      {
        "id": "tariq",
        "name": "Tariq",
        "role": "Mahasiswa",
        "avatar": "👨‍🎓"
      }
    ],
    "sentences": [
      {
        "id": "s1",
        "speakerId": "ahmad",
        "speakerName": "Ahmad",
        "speakerRole": "Mahasiswa",
        "avatar": "🧑‍🎓",
        "nativeText": "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
        "phoneticText": "As-salamu 'alaykum wa rahmatullah",
        "translationId": "Semoga keselamatan dan rahmat Allah tercurah kepada Anda.",
        "audioVoiceLang": "ar-SA",
        "words": [
          {
            "word": "السَّلَامُ",
            "phonetic": "As-salamu",
            "meaning": "keselamatan"
          },
          {
            "word": "عَلَيْكُمْ",
            "phonetic": "'alaykum",
            "meaning": "atas kalian"
          }
        ]
      },
      {
        "id": "s2",
        "speakerId": "tariq",
        "speakerName": "Tariq",
        "speakerRole": "Mahasiswa",
        "avatar": "👨‍🎓",
        "nativeText": "وَعَلَيْكُمُ السَّلَامُ! أَهْلًا وَسَهْلًا، أَنَا طَارِقٌ.",
        "phoneticText": "Wa 'alaykumu as-salam! Ahlan wa sahlan, ana Tariq.",
        "translationId": "Dan atas Anda keselamatan! Selamat datang, saya Tariq.",
        "audioVoiceLang": "ar-SA",
        "words": [
          {
            "word": "أَهْلًا وَسَهْلًا",
            "phonetic": "Ahlan wa sahlan",
            "meaning": "selamat datang"
          },
          {
            "word": "أَنَا",
            "phonetic": "ana",
            "meaning": "saya"
          }
        ]
      },
      {
        "id": "s3",
        "speakerId": "ahmad",
        "speakerName": "Ahmad",
        "speakerRole": "Mahasiswa",
        "avatar": "🧑‍🎓",
        "nativeText": "تَشَرَّفْنَا يَا طَارِقُ. مَاذَا تَدْرُسُ فِي الجَامِعَةِ؟",
        "phoneticText": "Tasyarrafna ya Tariq. Madza tadrusu fi al-jami'ah?",
        "translationId": "Senang berkenalan, Tariq. Apa yang kamu pelajari di universitas?",
        "audioVoiceLang": "ar-SA",
        "words": [
          {
            "word": "تَشَرَّفْنَا",
            "phonetic": "Tasyarrafna",
            "meaning": "suatu kehormatan/senang berkenalan"
          },
          {
            "word": "مَاذَا",
            "phonetic": "Madza",
            "meaning": "apa yang"
          },
          {
            "word": "تَدْرُسُ",
            "phonetic": "tadrusu",
            "meaning": "kamu pelajari"
          },
          {
            "word": "الجَامِعَةِ",
            "phonetic": "al-jami'ah",
            "meaning": "universitas"
          }
        ]
      },
      {
        "id": "s4",
        "speakerId": "tariq",
        "speakerName": "Tariq",
        "speakerRole": "Mahasiswa",
        "avatar": "👨‍🎓",
        "nativeText": "أَدْرُسُ اللُّغَةَ العَرَبِيَّةَ وَالشَّرِيعَةَ، وَأَنْتَ؟",
        "phoneticText": "Adrusu al-lughata al-'arabiyyata wa asy-syari'ah, wa anta?",
        "translationId": "Saya belajar bahasa Arab dan Syariah, dan kamu?",
        "audioVoiceLang": "ar-SA",
        "words": [
          {
            "word": "أَدْرُسُ",
            "phonetic": "Adrusu",
            "meaning": "saya belajar"
          },
          {
            "word": "وَأَنْتَ",
            "phonetic": "wa anta",
            "meaning": "dan kamu?"
          }
        ]
      }
    ],
    "comprehensionQuiz": [
      {
        "id": "ar-d1-q1",
        "type": "multiple_choice",
        "prompt": "Jurusan apakah yang dipelajari oleh Tariq?",
        "options": [
          "Bahasa Arab & Syariah (اللغة العربية والشريعة)",
          "Teknik Kedokteran",
          "Ilmu Komputer",
          "Sastra Inggris"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tariq menjawab: 'Adrusu al-lughata al-'arabiyyata wa asy-syari'ah'."
      }
    ]
  }
];
