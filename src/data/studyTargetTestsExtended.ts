import { StudyTargetTest } from '@/types/learning';

export const THAILAND_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "th-1": {
    "id": "test-th-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Thailand (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Thailand.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-th-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำว่า 'วิทยานิพนธ์' ในบริบทมหาวิทยาลัยมีความหมายตรงกับข้อใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Tesis / Disertasi kelulusan",
          "Kartu registrasi ujian",
          "Biaya kuliah semester",
          "Asrama mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "วิทยานิพนธ์ (wittayaniphon) berarti tesis/disertasi penelitian akademik."
      },
      {
        "id": "q-th-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำเชื่อมทางการข้อใดเหมาะสมที่สุดในการเขียนรายงานวิจัย: '______ มีข้อจำกัดด้านเวลา แต่งานวิจัยนี้ก็บรรลุเป้าหมาย'",
        "audioVoiceLang": "th-TH",
        "options": [
          "เพราะว่า (phrowaa - karena)",
          "แม้ว่า (meswaa - meskipun)",
          "และ (lae - dan)",
          "หรือ (reuu - atau)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "แม้ว่า... แต่... (meswaa... tae...) adalah konjungsi konsesif resmi dalam penulisan ilmiah bahasa Thai."
      },
      {
        "id": "q-th-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ในการติดต่ออาจารย์ที่ปรึกษา คำสรรพนามเรียกอาจารย์ที่สุภาพที่สุดคือข้อใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "คุณ (khun) — Anda (sapaan umum sehari-hari)",
          "เธอ (thoe) — Kamu (sapaan akrab sebaya)",
          "อาจารย์ (aajaan) หรือ ท่านอาจารย์ — Dosen / Yang Terhormat Profesor (sapaan akademik paling sopan)",
          "พี่ (phii) — Kakak (sapaan informal untuk senior)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Dalam etika akademik Thailand, menyapa dosen/profesor dengan 'ท่านอาจารย์' atau 'อาจารย์' mencerminkan rasa hormat tertinggi."
      },
      {
        "id": "q-th-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ข้อใดคือเอกสาร 'ใบรายงานผลการศึกษา' ในภาษาไทย?",
        "audioVoiceLang": "th-TH",
        "options": [
          "ใบสุทธิ — Surat keterangan tamat sekolah dasar/menengah",
          "ใบเสร็จรับเงิน — Kuitansi pembayaran uang",
          "ใบขับขี่ — Surat Izin Mengemudi (SIM)",
          "ใบแสดงผลการเรียน (Transcript) — Transkrip nilai akademik resmi universitas"
        ],
        "correctAnswerIndex": 3,
        "explanation": "ใบแสดงผลการเรียน (bai sadaeng phon kaan rian) adalah transkrip nilai resmi."
      },
      {
        "id": "q-th-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำว่า 'ลงทะเบียนเรียน' หมายถึงกิจกรรมทางวิชาการใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Registrasi / KRS mata kuliah semester",
          "Membayar sewa kamar asrama",
          "Mengikuti wisuda",
          "Meminjam buku perpustakaan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ลงทะเบียนเรียน (long thabian rian) adalah proses registrasi/KRS mata kuliah."
      },
      {
        "id": "q-th-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "เมื่อต้องการขออนุญาตเข้าพบอาจารย์ในห้องทำงาน ควรใช้ประโยคใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "ผมจะเข้าไปเดี๋ยวนี้ — Saya akan masuk sekarang juga (tidak sopan)",
          "ขออนุญาตเข้าพบอาจารย์ครับ/ค่ะ — Mohon izin menemui Profesor (ungkapan formal sopan)",
          "เปิดประตูให้หน่อย — Tolong bukakan pintu sebentar (perintah kasual)",
          "รอแป๊บหนึ่ง — Tunggu sebentar ya (bahasa lisan santai)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ขออนุญาตเข้าพบ... adalah ungkapan baku sopan untuk memohon izin menemui dosen."
      },
      {
        "id": "q-th-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำว่า 'ทุนการศึกษา' มีความหมายตรงกับคำในภาษาอินโดนีเซียข้อใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Uang sewa laboratorium",
          "Biaya wisuda",
          "Beasiswa pendidikan",
          "Denda keterlambatan buku"
        ],
        "correctAnswerIndex": 2,
        "explanation": "ทุนการศึกษา (thun kaan seuksaa) berarti beasiswa pendidikan."
      },
      {
        "id": "q-th-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ข้อใดคือคำศัพท์ที่หมายถึง 'การสอบป้องกันวิทยานิพนธ์ (Thesis Defense)'?",
        "audioVoiceLang": "th-TH",
        "options": [
          "การแข่งขันกีฬา — Pertandingan olahraga kampus",
          "งานเลี้ยงสังสรรค์ — Pesta ramah tamah / perjamuan",
          "การปฐมนิเทศ — Orientasi mahasiswa baru",
          "การสอบป้องกันวิทยานิพนธ์ — Sidang ujian mempertahankan tesis/disertasi (Thesis Defense)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "การสอบป้องกันวิทยานิพนธ์ adalah sidang ujian mempertahankan tesis/skripsi."
      },
      {
        "id": "q-th-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำว่า 'ห้องสมุดกลาง' หมายถึงสถานที่ใดในมหาวิทยาลัย?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Perpustakaan pusat kampus",
          "Gedung olahraga",
          "Kantin fakultas",
          "Pusat kesehatan mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ห้องสมุดกลาง (hong samut klang) adalah perpustakaan pusat universitas."
      },
      {
        "id": "q-th-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ประโยค 'กรุณาส่งงานวิจัยก่อนกำหนดเวลา' มีความหมายว่าอย่างไร?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Silakan cetak laporan di perpustakaan",
          "Harap kumpulkan tugas riset sebelum tenggat waktu",
          "Harap datang ke kelas tepat waktu",
          "Jangan lupa bawa kartu mahasiswa"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ส่งงานวิจัยก่อนกำหนดเวลา berarti mengumpulkan riset sebelum tenggat waktu (deadline)."
      }
    ]
  },
  "th-2": {
    "id": "test-th-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Thailand.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-th-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "จึงเรียนมาเพื่อโปรดพิจารณาให้ความอนุเคราะห์ในการเข้าใช้สถานที่เพื่อการวิจัยครับ (jʉng rian maa phʉ̂a bpròot phí-jaa-rá-naa hâi khwaam à-nú-khrɔ́ nai gaan khâo chái sà-thǎan-thîi phʉ̂a gaan wí-jai khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Demikian surat ini disampaikan agar kiranya berkenan dipertimbangkan untuk izin penggunaan fasilitas demi kepentingan riset.",
        "keywords": [
          "demikian",
          "surat",
          "disampaikan",
          "agar"
        ],
        "explanation": "Kalimat akademik pola Ragam Bahasa Formal & Korespondensi Surat Resmi: 'จึงเรียนมาเพื่อโปรดพิจารณาให้ความอนุเคราะห์ในการเข้าใช้สถานที่เพื่อการวิจัยครับ' diterjemahkan secara akurat menjadi 'Demikian surat ini disampaikan agar kiranya berkenan dipertimbangkan untuk izin penggunaan fasilitas demi kepentingan riset.'."
      },
      {
        "id": "q-th-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "มหาวิทยาลัยได้รับพระมหากรุณาธิคุณในการเสด็จพระราชดำเนินมาเปิดอาคารวิจัยหลังใหม่ (má-hǎa-wít-thá-yaa-lai dâi ráp phrá-má-hǎa-gà-rú-naa-thí-khun nai gaan sà-dèt phrá-râat-chá-dam-nəən maa bpə̀ət aa-khaan wí-jai lǎng mài)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Universitas menerima kehormatan mulia atas perkenan kunjungan kerajaan meresmikan gedung riset baru.",
        "keywords": [
          "universitas",
          "menerima",
          "kehormatan",
          "mulia"
        ],
        "explanation": "Kalimat akademik pola Kosakata & Ungkapan Tingkat Tinggi (ราชาศัพท์ & Ragam Baku): 'มหาวิทยาลัยได้รับพระมหากรุณาธิคุณในการเสด็จพระราชดำเนินมาเปิดอาคารวิจัยหลังใหม่' diterjemahkan secara akurat menjadi 'Universitas menerima kehormatan mulia atas perkenan kunjungan kerajaan meresmikan gedung riset baru.'."
      },
      {
        "id": "q-th-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "กราบเรียนท่านประธานและคณะกรรมการผู้ทรงคุณวุฒิทุกท่าน ผมขอเริ่มนำเสนอวิทยานิพนธ์ ณ บัดนี้ครับ (gràap rian thân bprà-thaan lɛ́ khá-ná gam-má-gaan phûu-song-khun-ná-wút thúk thân phǒm khɔ̌ɔ rə̂əm nam-sà-nə̌ə wít-thá-yaa-ní-phon ná bàt níi khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Yth. Ketua Sidang dan dewan penguji yang terhormat, saya mohon izin memulai pemaparan tesis ini.",
        "keywords": [
          "ketua",
          "sidang",
          "dewan",
          "penguji"
        ],
        "explanation": "Kalimat akademik pola Struktur Retorika Presentasi & Argumentasi Ilmiah: 'กราบเรียนท่านประธานและคณะกรรมการผู้ทรงคุณวุฒิทุกท่าน ผมขอเริ่มนำเสนอวิทยานิพนธ์ ณ บัดนี้ครับ' diterjemahkan secara akurat menjadi 'Yth. Ketua Sidang dan dewan penguji yang terhormat, saya mohon izin memulai pemaparan tesis ini.'."
      },
      {
        "id": "q-th-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "ตามที่ศาสตราจารย์สมเกียรติได้ชี้ให้เห็นในงานวิจัยปี 2565 ปัจจัยด้านสิ่งแวดล้อมมีผลต่อการเรียนรู้ครับ (dtaam thîi sàat-dtraa-jaan sǒm-gìat dâi chíi hâi hěn nai ngaan wí-jai bpii sɔ̌ɔng phan hâa rɔ́ɔi hòk sìp hâa bpàt-jai dâan sìng-wɛ́ɛt-lɔ́ɔm mii phǒn dtɔ̀ɔ gaan rian rúu khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Sebagaimana telah ditunjukkan Profesor Somkiat dalam riset tahun 2022, faktor lingkungan berdampak nyata terhadap pembelajaran.",
        "keywords": [
          "sebagaimana",
          "ditunjukkan",
          "profesor",
          "somkiat"
        ],
        "explanation": "Kalimat akademik pola Rujukan & Sitasi Menurut ตามที่ (dtaam thîi) & อ้างอิง: 'ตามที่ศาสตราจารย์สมเกียรติได้ชี้ให้เห็นในงานวิจัยปี 2565 ปัจจัยด้านสิ่งแวดล้อมมีผลต่อการเรียนรู้ครับ' diterjemahkan secara akurat menjadi 'Sebagaimana telah ditunjukkan Profesor Somkiat dalam riset tahun 2022, faktor lingkungan berdampak nyata terhadap pembelajaran.'."
      },
      {
        "id": "q-th-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "วิกฤตเศรษฐกิจในครั้งนี้ส่งผลกระทบอย่างรุนแรงต่อภาคการท่องเที่ยว อันเนื่องมาจากการปิดประเทศครับ (wí-grìt sèet-thà-gìt nai khráng níi sòng phǒn grà-thóp yàang run-rɛɛng dtɔ̀ɔ phâak gaan thîang-thîaw an nʉ̂ang maa jàak gaan bpìt bprà-thêet khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Krisis ekonomi kali ini memberikan dampak berat terhadap sektor pariwisata yang timbul akibat penutupan wilayah negara.",
        "keywords": [
          "krisis",
          "ekonomi",
          "kali",
          "memberikan"
        ],
        "explanation": "Kalimat akademik pola Kausalitas Kompleks อันเนื่องมาจาก (an nʉ̂ang maa jàak): 'วิกฤตเศรษฐกิจในครั้งนี้ส่งผลกระทบอย่างรุนแรงต่อภาคการท่องเที่ยว อันเนื่องมาจากการปิดประเทศครับ' diterjemahkan secara akurat menjadi 'Krisis ekonomi kali ini memberikan dampak berat terhadap sektor pariwisata yang timbul akibat penutupan wilayah negara.'."
      },
      {
        "id": "q-th-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "กลุ่มตัวอย่างที่หนึ่งมีอัตราการฟื้นตัวอย่างรวดเร็ว ในทางกลับกัน กลุ่มควบคุมกลับไม่แสดงพัฒนาการที่ชัดเจนครับ (glùm dtua-yàang thîi nʉ̀ng mii àt-dtraa gaan fʉ́ʉn dtua yàang rùat-reo nai thaang glàp gan glùm khûap-khum glàp mâi sà-dɛɛng phát-thá-naa-gaan thîi chát-jeen khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Kelompok sampel pertama menunjukkan laju pemulihan yang cepat. Sebaliknya, kelompok kontrol justru tidak memperlihatkan kemajuan nyata.",
        "keywords": [
          "kelompok",
          "sampel",
          "pertama",
          "menunjukkan"
        ],
        "explanation": "Kalimat akademik pola Pernyataan Kontradiksi Formal ในทางกลับกัน (nai thaang glàp gan): 'กลุ่มตัวอย่างที่หนึ่งมีอัตราการฟื้นตัวอย่างรวดเร็ว ในทางกลับกัน กลุ่มควบคุมกลับไม่แสดงพัฒนาการที่ชัดเจนครับ' diterjemahkan secara akurat menjadi 'Kelompok sampel pertama menunjukkan laju pemulihan yang cepat. Sebaliknya, kelompok kontrol justru tidak memperlihatkan kemajuan nyata.'."
      },
      {
        "id": "q-th-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "โดยสรุป งานวิจัยนี้ได้ชี้ชัดถึงความสำคัญของการนำเทคโนโลยีดิจิทัลมาประยุกต์ใช้ในการศึกษาระดับอุดมศึกษาครับ (dooy sà-rùp ngaan wí-jai níi dâi chíi chát thʉ̌ng khwaam-sǎm-khan khɔ̌ɔng gaan nam thék-noo-loo-yîi dí-jì-thâl maa bprà-yúk chái nai gaan-sʉ̀k-sǎa rá-dàp ù-dom-sʉ̀k-sǎa khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Sebagai kesimpulan, penelitian ini secara tegas menunjukkan pentingnya adopsi teknologi digital di pendidikan tinggi.",
        "keywords": [
          "kesimpulan",
          "penelitian",
          "secara",
          "tegas"
        ],
        "explanation": "Kalimat akademik pola Kesimpulan & Penegasan Riset โดยสรุป (dooy sà-rùp): 'โดยสรุป งานวิจัยนี้ได้ชี้ชัดถึงความสำคัญของการนำเทคโนโลยีดิจิทัลมาประยุกต์ใช้ในการศึกษาระดับอุดมศึกษาครับ' diterjemahkan secara akurat menjadi 'Sebagai kesimpulan, penelitian ini secara tegas menunjukkan pentingnya adopsi teknologi digital di pendidikan tinggi.'."
      },
      {
        "id": "q-th-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "สัญญานี้ทำขึ้นเป็นสองฉบับมีข้อความถูกต้องตรงกัน คู่สัญญาทั้งสองฝ่ายได้อ่านและเข้าใจข้อความโดยละเอียดแล้วครับ (sǎn-yaa níi tham khʉ̂n bpen sɔ̌ɔng chà-bàp mii khɔ̂ɔ-khwaam thùuk-dtɔ̂ng dtrong gan khûu sǎn-yaa tháng sɔ̌ɔng fǎai dâi àan lɛ́ khâo-jai khɔ̂ɔ-khwaam dooy lá-ìat lɛ́ɛw khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Perjanjian ini dibuat rangkap dua dengan bunyi teks yang sama, kedua belah pihak telah membaca dan memahami seluruh isinya secara saksama.",
        "keywords": [
          "perjanjian",
          "dibuat",
          "rangkap",
          "bunyi"
        ],
        "explanation": "Kalimat akademik pola Bahasa Kontrak, Hukum & Perjanjian Bisnis: 'สัญญานี้ทำขึ้นเป็นสองฉบับมีข้อความถูกต้องตรงกัน คู่สัญญาทั้งสองฝ่ายได้อ่านและเข้าใจข้อความโดยละเอียดแล้วครับ' diterjemahkan secara akurat menjadi 'Perjanjian ini dibuat rangkap dua dengan bunyi teks yang sama, kedua belah pihak telah membaca dan memahami seluruh isinya secara saksama.'."
      },
      {
        "id": "q-th-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "จากตารางที่ 4.2 พบว่าค่าเฉลี่ยของกลุ่มทดลองสูงกว่ากลุ่มควบคุมอย่างมีนัยสำคัญทางสถิติที่ระดับ .01 ครับ (jàak dtaa-raang thîi sìi jùt sɔ̌ɔng phóp wâa khâa chè-lìia khɔ̌ɔng glùm thót-lɔɔng sǔung gwàa glùm khûap-khum yàang mii nai-yá-sǎm-khan thaang sà-thì-dtì thîi rá-dàp jùt sǔun nʉ̀ng khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Berdasarkan Tabel 4.2 ditemukan bahwa nilai rata-rata kelompok eksperimen lebih tinggi daripada kelompok kontrol pada taraf signifikansi .01.",
        "keywords": [
          "berdasarkan",
          "tabel",
          "ditemukan",
          "bahwa"
        ],
        "explanation": "Kalimat akademik pola Analisis Data Statistik & Pelaporan Tren Akademik: 'จากตารางที่ 4.2 พบว่าค่าเฉลี่ยของกลุ่มทดลองสูงกว่ากลุ่มควบคุมอย่างมีนัยสำคัญทางสถิติที่ระดับ .01 ครับ' diterjemahkan secara akurat menjadi 'Berdasarkan Tabel 4.2 ditemukan bahwa nilai rata-rata kelompok eksperimen lebih tinggi daripada kelompok kontrol pada taraf signifikansi .01.'."
      },
      {
        "id": "q-th-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "บทคัดย่อ: การวิจัยนี้มีวัตถุประสงค์เพื่อพัฒนารูปแบบการสอนภาษาไทยสำหรับชาวต่างชาติ ผลการศึกษาพบว่ารูปแบบใหม่มีประสิทธิผลสูงกว่าเกณฑ์ที่กำหนดอย่างมีนัยสำคัญครับ (bòt-khát-yɔ̂ɔ: gaan wí-jai níi mii wát-thù-bprà-sǒng phʉ̂a phát-thá-naa rûup-bɛ̀ɛp gaan sɔ̌ɔn phaa-sǎa thai sǎm-ràp chaao dtàang-châat phǒn gaan sʉ̀k-sǎa phóp wâa rûup-bɛ̀ɛp mài mii bprà-sìt-thí-phǒn sǔung gwàa geen thîi gam-nòt yàang mii nai-yá-sǎm-khan khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Abstrak: Penelitian ini bertujuan mengembangkan model pembelajaran bahasa Thai bagi penutur asing. Hasil studi menemukan bahwa model baru memiliki efektivitas di atas standar signifikan.",
        "keywords": [
          "abstrak",
          "penelitian",
          "bertujuan",
          "mengembangkan"
        ],
        "explanation": "Kalimat akademik pola Penulisan Abstrak Skripsi & Tesis Ilmiah: 'บทคัดย่อ: การวิจัยนี้มีวัตถุประสงค์เพื่อพัฒนารูปแบบการสอนภาษาไทยสำหรับชาวต่างชาติ ผลการศึกษาพบว่ารูปแบบใหม่มีประสิทธิผลสูงกว่าเกณฑ์ที่กำหนดอย่างมีนัยสำคัญครับ' diterjemahkan secara akurat menjadi 'Abstrak: Penelitian ini bertujuan mengembangkan model pembelajaran bahasa Thai bagi penutur asing. Hasil studi menemukan bahwa model baru memiliki efektivitas di atas standar signifikan.'."
      }
    ]
  },
  "th-3": {
    "id": "test-th-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis Kalimat Thailand (5 Soal Sambung Kata)",
    "description": "Uji ketelitian menyusun tata urutan klausa regulasi kampus, registrasi mata kuliah, dan korespondensi resmi di Thailand.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-th-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan resmi: 'Saya ingin mengajukan permohonan transkrip nilai resmi'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "อย่างเป็นทางการ",
          "ขอใบแสดงผลการเรียน",
          "ยื่นคำร้อง",
          "ผมขอ"
        ],
        "correctOrder": [
          "ผมขอ",
          "ยื่นคำร้อง",
          "ขอใบแสดงผลการเรียน",
          "อย่างเป็นทางการ"
        ],
        "explanation": "Struktur: Subjek/Permohonan (ผมขอยื่นคำร้อง) + Objek (ขอใบแสดงผลการเรียน) + Keterangan resmi (อย่างเป็นทางการ).",
        "targetSentence": "ผมขอยื่นคำร้องขอใบแสดงผลการเรียนอย่างเป็นทางการ"
      },
      {
        "id": "q-th-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat konsultasi dosen: 'Bolehkah saya berkonsultasi mengenai proposal penelitian?'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ได้ไหมครับ",
          "เรื่องข้อเสนอโครงการวิจัย",
          "ปรึกษาอาจารย์",
          "ขออนุญาต"
        ],
        "correctOrder": [
          "ขออนุญาต",
          "ปรึกษาอาจารย์",
          "เรื่องข้อเสนอโครงการวิจัย",
          "ได้ไหมครับ"
        ],
        "explanation": "Urutan sopan: ขออนุญาต + Verba (ปรึกษาอาจารย์) + Topik (เรื่องข้อเสนอโครงการวิจัย) + Partikel (ได้ไหมครับ).",
        "targetSentence": "ขออนุญาตปรึกษาอาจารย์เรื่องข้อเสนอโครงการวิจัยได้ไหมครับ"
      },
      {
        "id": "q-th-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat registrasi: 'Mahasiswa baru harus melapor di kantor urusan internasional'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ที่สำนักงานวิเทศสัมพันธ์",
          "นักศึกษาใหม่",
          "ต้องไปรายงานตัว"
        ],
        "correctOrder": [
          "นักศึกษาใหม่",
          "ต้องไปรายงานตัว",
          "ที่สำนักงานวิเทศสัมพันธ์"
        ],
        "explanation": "Urutan baku: Subjek (นักศึกษาใหม่) + Verba modal (ต้องไปรายงานตัว) + Keterangan tempat (ที่สำนักงานวิเทศสัมพันธ์).",
        "targetSentence": "นักศึกษาใหม่ต้องไปรายงานตัวที่สำนักงานวิเทศสัมพันธ์"
      },
      {
        "id": "q-th-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Buku referensi ini tidak boleh dipinjam ke luar gedung'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "นอกอาคารหอสมุด",
          "ห้ามนำออก",
          "หนังสืออ้างอิงเล่มนี้"
        ],
        "correctOrder": [
          "หนังสืออ้างอิงเล่มนี้",
          "ห้ามนำออก",
          "นอกอาคารหอสมุด"
        ],
        "explanation": "Urutan aturan: Objek topik (หนังสืออ้างอิงเล่มนี้) + Larangan (ห้ามนำออก) + Lokasi (นอกอาคารหอสมุด).",
        "targetSentence": "หนังสืออ้างอิงเล่มนี้ห้ามนำออกนอกอาคารหอสมุด"
      },
      {
        "id": "q-th-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Penerima beasiswa wajib menyerahkan laporan kemajuan akademik setiap semester'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ทุกภาคการศึกษา",
          "ผู้รับทุนการศึกษา",
          "ต้องส่งรายงานความก้าวหน้า"
        ],
        "correctOrder": [
          "ผู้รับทุนการศึกษา",
          "ต้องส่งรายงานความก้าวหน้า",
          "ทุกภาคการศึกษา"
        ],
        "explanation": "Urutan regulasi: Subjek (ผู้รับทุนการศึกษา) + Kewajiban (ต้องส่งรายงานความก้าวหน้า) + Waktu (ทุกภาคการศึกษา).",
        "targetSentence": "ผู้รับทุนการศึกษาต้องส่งรายงานความก้าวหน้าทุกภาคการศึกษา"
      }
    ]
  },
  "th-4": {
    "id": "test-th-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Thailand (10 Soal Artikan)",
    "description": "Uji penguasaan glosarium akademik, peristilahan seminar ilmiah, dan sistem administrasi kampus di Thailand.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-th-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'มหาวิทยาลัย (mahawitthayalai)':",
        "targetSentence": "มหาวิทยาลัย",
        "audioVoiceLang": "th-TH",
        "options": [
          "Universitas / Perguruan Tinggi",
          "Satuan Kredit Semester (SKS)",
          "Ujian Akhir Semester (UAS)",
          "Surat Keterangan Mahasiswa Aktif"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'มหาวิทยาลัย (mahawitthayalai)' adalah padanan untuk 'Universitas / Perguruan Tinggi'."
      },
      {
        "id": "q-th-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'อาจารย์ที่ปรึกษา (aajaan thii prueksaa)':",
        "targetSentence": "อาจารย์ที่ปรึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Semester perkuliahan",
          "Dosen Pembimbing Akademik / Tesis",
          "Kartu Tanda Mahasiswa (KTM)",
          "Program Studi / Jurusan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'อาจารย์ที่ปรึกษา (aajaan thii prueksaa)' adalah padanan untuk 'Dosen Pembimbing Akademik / Tesis'."
      },
      {
        "id": "q-th-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'หน่วยกิต (nuay kit)':",
        "targetSentence": "หน่วยกิต",
        "audioVoiceLang": "th-TH",
        "options": [
          "Ujian Akhir Semester (UAS)",
          "Asrama mahasiswa",
          "Satuan Kredit Semester (SKS)",
          "Lulus kuliah / Wisuda kelulusan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'หน่วยกิต (nuay kit)' adalah padanan untuk 'Satuan Kredit Semester (SKS)'."
      },
      {
        "id": "q-th-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'ภาคการศึกษา (phaak kaan seuksaa)':",
        "targetSentence": "ภาคการศึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Kartu Tanda Mahasiswa (KTM)",
          "Surat Keterangan Mahasiswa Aktif",
          "Universitas / Perguruan Tinggi",
          "Semester perkuliahan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'ภาคการศึกษา (phaak kaan seuksaa)' adalah padanan untuk 'Semester perkuliahan'."
      },
      {
        "id": "q-th-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'การสอบไล่ (kaan sop lai)':",
        "targetSentence": "การสอบไล่",
        "audioVoiceLang": "th-TH",
        "options": [
          "Ujian Akhir Semester (UAS)",
          "Asrama mahasiswa",
          "Program Studi / Jurusan",
          "Dosen Pembimbing Akademik / Tesis"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'การสอบไล่ (kaan sop lai)' adalah padanan untuk 'Ujian Akhir Semester (UAS)'."
      },
      {
        "id": "q-th-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'บัตรประจำตัวนักศึกษา (bat pracamtua nakseuksaa)':",
        "targetSentence": "บัตรประจำตัวนักศึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Surat Keterangan Mahasiswa Aktif",
          "Kartu Tanda Mahasiswa (KTM)",
          "Lulus kuliah / Wisuda kelulusan",
          "Satuan Kredit Semester (SKS)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'บัตรประจำตัวนักศึกษา (bat pracamtua nakseuksaa)' adalah padanan untuk 'Kartu Tanda Mahasiswa (KTM)'."
      },
      {
        "id": "q-th-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'หอพักนักศึกษา (ho phak nakseuksaa)':",
        "targetSentence": "หอพักนักศึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Program Studi / Jurusan",
          "Universitas / Perguruan Tinggi",
          "Asrama mahasiswa",
          "Semester perkuliahan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'หอพักนักศึกษา (ho phak nakseuksaa)' adalah padanan untuk 'Asrama mahasiswa'."
      },
      {
        "id": "q-th-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'ใบรับรองการศึกษา (bai raprong kaan seuksaa)':",
        "targetSentence": "ใบรับรองการศึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Lulus kuliah / Wisuda kelulusan",
          "Dosen Pembimbing Akademik / Tesis",
          "Ujian Akhir Semester (UAS)",
          "Surat Keterangan Mahasiswa Aktif"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'ใบรับรองการศึกษา (bai raprong kaan seuksaa)' adalah padanan untuk 'Surat Keterangan Mahasiswa Aktif'."
      },
      {
        "id": "q-th-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'สาขาวิชา (saakhaa wicha)':",
        "targetSentence": "สาขาวิชา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Program Studi / Jurusan",
          "Universitas / Perguruan Tinggi",
          "Satuan Kredit Semester (SKS)",
          "Kartu Tanda Mahasiswa (KTM)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'สาขาวิชา (saakhaa wicha)' adalah padanan untuk 'Program Studi / Jurusan'."
      },
      {
        "id": "q-th-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'สำเร็จการศึกษา (samret kaan seuksaa)':",
        "targetSentence": "สำเร็จการศึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Dosen Pembimbing Akademik / Tesis",
          "Lulus kuliah / Wisuda kelulusan",
          "Semester perkuliahan",
          "Asrama mahasiswa"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'สำเร็จการศึกษา (samret kaan seuksaa)' adalah padanan untuk 'Lulus kuliah / Wisuda kelulusan'."
      }
    ]
  },
  "th-5": {
    "id": "test-th-5",
    "title": "Bagian 5: Wacana Silabus & Analisis Kasus Kampus Thailand (15 Soal Analisis Bebas)",
    "description": "Uji kesiapan komprehensif menghadapi perkuliahan nyata, etika laboratorium, dan dinamika mahasiswa internasional di Thailand.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-th-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam budaya akademik Thailand, apa makna tradisi 'ไหว้ครู' (Wai Kru)?",
        "options": [
          "Festival olahraga antar kampus",
          "Pesta penyambutan mahasiswa baru di pantai",
          "Upacara tahunan menghormati dan mengungkapkan terima kasih kepada dosen/guru",
          "Ujian evaluasi tengah semester"
        ],
        "correctAnswerIndex": 2,
        "explanation": "พิธีไหว้ครู (Wai Kru) adalah tradisi sakral civitas academica Thailand untuk menghormati guru dan dosen."
      },
      {
        "id": "q-th-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batasan jam kerja paruh waktu legal untuk pemegang visa pelajar di Thailand?",
        "options": [
          "Bebas bekerja hingga 40 jam per minggu",
          "Boleh bekerja paruh waktu tanpa izin",
          "Wajib bekerja 10 jam per minggu",
          "Hukum visa pelajar Thailand secara umum tidak mengizinkan pekerjaan berupah di luar kampus tanpa izin kerja khusus"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Pemegang visa Non-Immigrant ED di Thailand tidak otomatis memiliki izin kerja."
      },
      {
        "id": "q-th-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan sistem 'GPA' (เกรดเฉลี่ย) skala 4.0 di perguruan tinggi Thailand?",
        "options": [
          "Indeks Prestasi Kumulatif (IPK) dengan nilai minimal kelulusan sarjana umumnya 2.00 dan magister 3.00",
          "Peringkat nomor urut absen",
          "Jumlah kehadiran tatap muka di kelas",
          "Skor tes fisik kebugaran"
        ],
        "correctAnswerIndex": 0,
        "explanation": "เกรดเฉลี่ยสะสม (GPAX) menggunakan skala 4.00."
      },
      {
        "id": "q-th-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana etika bertanya di dalam kelas kuliah bersama profesor di Thailand?",
        "options": [
          "Langsung menyela dosen di tengah penjelasan",
          "Mengangkat tangan dengan sopan, menunggu dipersilakan, dan menggunakan partikel ครับ (khrap) / ค่ะ (kha)",
          "Berbicara santai tanpa partikel sopan",
          "Meninggalkan ruang kelas tanpa izin"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Kesopanan dan penghormatan kepada dosen sangat ditekankan dalam tata krama ruang kuliah Thailand."
      },
      {
        "id": "q-th-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Singkatan 'ม.' dalam penulisan nama kampus di Thailand merupakan kependekan dari:",
        "options": [
          "เมือง (Kota)",
          "มูลนิธิ (Yayasan)",
          "มหาวิทยาลัย (Universitas)",
          "มิตรภาพ (Persahabatan)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "'ม.' adalah singkatan baku tertulis untuk 'มหาวิทยาลัย' (Universitas)."
      },
      {
        "id": "q-th-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi kantor 'กองวิเทศสัมพันธ์' (Office of International Affairs) di kampus Thailand?",
        "options": [
          "Mengelola parkir kendaraan",
          "Menjual buku diktat kuliah",
          "Menyediakan layanan katering",
          "Menangani administrasi mahasiswa asing, perpanjangan visa, dan kerja sama internasional"
        ],
        "correctAnswerIndex": 3,
        "explanation": "กองวิเทศสัมพันธ์ adalah biro urusan internasional kampus."
      },
      {
        "id": "q-th-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa standar nilai minimal kelulusan untuk setiap mata kuliah wajib jenjang Master (S2) di Thailand?",
        "options": [
          "Umumnya minimal nilai B (skor 3.00)",
          "Nilai D sudah cukup lulus",
          "C minus",
          "Hanya memerlukan kehadiran tanpa nilai"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Di jenjang magister Thailand, mata kuliah dengan nilai di bawah B umumnya harus diulang."
      },
      {
        "id": "q-th-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Ketika mengajukan permohonan beasiswa TICA (Thailand International Cooperation Agency), dokumen apa yang krusial?",
        "options": [
          "Kwitansi belanja",
          "Proposal studi, surat rekomendasi akademik, transkrip nilai, dan sertifikat kemahiran bahasa",
          "Surat izin mengemudi",
          "Tiket bioskop"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Dokumen akademik resmi dan proposal riset adalah syarat fundamental beasiswa TICA."
      },
      {
        "id": "q-th-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa sebutan untuk ujian proposal penelitian skripsi/tesis dalam bahasa akademik Thai?",
        "options": [
          "การแข่งขันตอบปัญหา — Lomba cerdas cermat",
          "การแสดงดนตรี — Pertunjukan musik",
          "การสอบโครงร่างวิทยานิพนธ์ — Ujian seminar proposal tesis/disertasi",
          "การออกค่ายอาสา — Kegiatan kemah bakti sosial"
        ],
        "correctAnswerIndex": 2,
        "explanation": "การสอบโครงร่างวิทยานิพนธ์ adalah seminar ujian proposal tesis."
      },
      {
        "id": "q-th-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bulan apakah semester ganjil (ภาคการศึกษาต้น) biasanya dimulai di universitas Thailand?",
        "options": [
          "Bulan Januari",
          "Bulan Mei",
          "Bulan Desember",
          "Bulan Agustus / September (mengikuti kalender ASEAN)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Sebagian besar universitas Thailand memulai semester pertama pada bulan Agustus sesuai kalender akademik ASEAN."
      },
      {
        "id": "q-th-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kata 'อาจารย์ใหญ่' atau 'อธิการบดี' mengacu pada jabatan struktural apa di universitas?",
        "options": [
          "Rektor Universitas",
          "Ketua Himpunan Mahasiswa",
          "Kepala Satpam",
          "Petugas Kebersihan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "อธิการบดี (Athikaanbodi) berarti Rektor Universitas."
      },
      {
        "id": "q-th-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah gelar akademik 'ดร.' di depan nama dosen Thailand melambangkan?",
        "options": [
          "Dokter hewan",
          "Doktor (Ph.D.)",
          "Duta besar",
          "Direktur swasta"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'ดร.' adalah singkatan untuk Doktor (Doctorate / Ph.D.)."
      },
      {
        "id": "q-th-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam penulisan ilmiah bahasa Thai, kata 'สรุป' diletakkan pada bagian mana?",
        "options": [
          "Daftar Isi",
          "Kata Pengantar",
          "Kesimpulan / Bab Akhir",
          "Sampul Depan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "สรุป (sarup) berarti kesimpulan / ringkasan akhir."
      },
      {
        "id": "q-th-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi sistem 'Turnitin' yang diterapkan di universitas-universitas Thailand?",
        "options": [
          "Pencatatan absensi harian",
          "Pengisian saldo dompet digital",
          "Pemesanan makanan kantin",
          "Pemeriksaan tingkat plagiarisme dan orisinalitas naskah akademik"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Turnitin digunakan secara ketat untuk memverifikasi keaslian karya ilmiah mahasiswa."
      },
      {
        "id": "q-th-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa ingin mengambil cuti kuliah satu semester, formulir apa yang harus diajukan?",
        "options": [
          "คำร้องขอลาพักการศึกษา (Permohonan Cuti Studi)",
          "คำร้องขอลาออก (Pengunduran diri)",
          "ใบสมัครงาน (Lamaran kerja)",
          "แบบฟอร์มขอคืนเงิน (Pengembalian dana)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "คำร้องขอลาพักการศึกษา adalah formulir permohonan resmi cuti akademik sementara."
      }
    ]
  },
  "th-full": {
    "id": "test-th-full",
    "title": "Simulasi Ujian Masuk Lengkap Kuliah Thailand (50 Soal Standar Ujian)",
    "description": "Simulasi ujian komprehensif berstandar masuk universitas terkemuka di Thailand (90 Menit). Mencakup seluruh 5 aspek kesiapan akademik dan bahasa.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-th-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำว่า 'วิทยานิพนธ์' ในบริบทมหาวิทยาลัยมีความหมายตรงกับข้อใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Tesis / Disertasi kelulusan",
          "Kartu registrasi ujian",
          "Biaya kuliah semester",
          "Asrama mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "วิทยานิพนธ์ (wittayaniphon) berarti tesis/disertasi penelitian akademik."
      },
      {
        "id": "q-th-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำเชื่อมทางการข้อใดเหมาะสมที่สุดในการเขียนรายงานวิจัย: '______ มีข้อจำกัดด้านเวลา แต่งานวิจัยนี้ก็บรรลุเป้าหมาย'",
        "audioVoiceLang": "th-TH",
        "options": [
          "เพราะว่า (phrowaa - karena)",
          "แม้ว่า (meswaa - meskipun)",
          "และ (lae - dan)",
          "หรือ (reuu - atau)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "แม้ว่า... แต่... (meswaa... tae...) adalah konjungsi konsesif resmi dalam penulisan ilmiah bahasa Thai."
      },
      {
        "id": "q-th-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ในการติดต่ออาจารย์ที่ปรึกษา คำสรรพนามเรียกอาจารย์ที่สุภาพที่สุดคือข้อใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "คุณ (khun) — Anda (sapaan umum sehari-hari)",
          "เธอ (thoe) — Kamu (sapaan akrab sebaya)",
          "อาจารย์ (aajaan) หรือ ท่านอาจารย์ — Dosen / Yang Terhormat Profesor (sapaan akademik paling sopan)",
          "พี่ (phii) — Kakak (sapaan informal untuk senior)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Dalam etika akademik Thailand, menyapa dosen/profesor dengan 'ท่านอาจารย์' atau 'อาจารย์' mencerminkan rasa hormat tertinggi."
      },
      {
        "id": "q-th-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ข้อใดคือเอกสาร 'ใบรายงานผลการศึกษา' ในภาษาไทย?",
        "audioVoiceLang": "th-TH",
        "options": [
          "ใบสุทธิ — Surat keterangan tamat sekolah dasar/menengah",
          "ใบเสร็จรับเงิน — Kuitansi pembayaran uang",
          "ใบขับขี่ — Surat Izin Mengemudi (SIM)",
          "ใบแสดงผลการเรียน (Transcript) — Transkrip nilai akademik resmi universitas"
        ],
        "correctAnswerIndex": 3,
        "explanation": "ใบแสดงผลการเรียน (bai sadaeng phon kaan rian) adalah transkrip nilai resmi."
      },
      {
        "id": "q-th-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำว่า 'ลงทะเบียนเรียน' หมายถึงกิจกรรมทางวิชาการใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Registrasi / KRS mata kuliah semester",
          "Membayar sewa kamar asrama",
          "Mengikuti wisuda",
          "Meminjam buku perpustakaan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ลงทะเบียนเรียน (long thabian rian) adalah proses registrasi/KRS mata kuliah."
      },
      {
        "id": "q-th-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "เมื่อต้องการขออนุญาตเข้าพบอาจารย์ในห้องทำงาน ควรใช้ประโยคใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "ผมจะเข้าไปเดี๋ยวนี้ — Saya akan masuk sekarang juga (tidak sopan)",
          "ขออนุญาตเข้าพบอาจารย์ครับ/ค่ะ — Mohon izin menemui Profesor (ungkapan formal sopan)",
          "เปิดประตูให้หน่อย — Tolong bukakan pintu sebentar (perintah kasual)",
          "รอแป๊บหนึ่ง — Tunggu sebentar ya (bahasa lisan santai)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ขออนุญาตเข้าพบ... adalah ungkapan baku sopan untuk memohon izin menemui dosen."
      },
      {
        "id": "q-th-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำว่า 'ทุนการศึกษา' มีความหมายตรงกับคำในภาษาอินโดนีเซียข้อใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Uang sewa laboratorium",
          "Biaya wisuda",
          "Beasiswa pendidikan",
          "Denda keterlambatan buku"
        ],
        "correctAnswerIndex": 2,
        "explanation": "ทุนการศึกษา (thun kaan seuksaa) berarti beasiswa pendidikan."
      },
      {
        "id": "q-th-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ข้อใดคือคำศัพท์ที่หมายถึง 'การสอบป้องกันวิทยานิพนธ์ (Thesis Defense)'?",
        "audioVoiceLang": "th-TH",
        "options": [
          "การแข่งขันกีฬา — Pertandingan olahraga kampus",
          "งานเลี้ยงสังสรรค์ — Pesta ramah tamah / perjamuan",
          "การปฐมนิเทศ — Orientasi mahasiswa baru",
          "การสอบป้องกันวิทยานิพนธ์ — Sidang ujian mempertahankan tesis/disertasi (Thesis Defense)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "การสอบป้องกันวิทยานิพนธ์ adalah sidang ujian mempertahankan tesis/skripsi."
      },
      {
        "id": "q-th-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำว่า 'ห้องสมุดกลาง' หมายถึงสถานที่ใดในมหาวิทยาลัย?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Perpustakaan pusat kampus",
          "Gedung olahraga",
          "Kantin fakultas",
          "Pusat kesehatan mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ห้องสมุดกลาง (hong samut klang) adalah perpustakaan pusat universitas."
      },
      {
        "id": "q-th-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ประโยค 'กรุณาส่งงานวิจัยก่อนกำหนดเวลา' มีความหมายว่าอย่างไร?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Silakan cetak laporan di perpustakaan",
          "Harap kumpulkan tugas riset sebelum tenggat waktu",
          "Harap datang ke kelas tepat waktu",
          "Jangan lupa bawa kartu mahasiswa"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ส่งงานวิจัยก่อนกำหนดเวลา berarti mengumpulkan riset sebelum tenggat waktu (deadline)."
      },
      {
        "id": "q-th-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "จึงเรียนมาเพื่อโปรดพิจารณาให้ความอนุเคราะห์ในการเข้าใช้สถานที่เพื่อการวิจัยครับ (jʉng rian maa phʉ̂a bpròot phí-jaa-rá-naa hâi khwaam à-nú-khrɔ́ nai gaan khâo chái sà-thǎan-thîi phʉ̂a gaan wí-jai khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Demikian surat ini disampaikan agar kiranya berkenan dipertimbangkan untuk izin penggunaan fasilitas demi kepentingan riset.",
        "keywords": [
          "demikian",
          "surat",
          "disampaikan",
          "agar"
        ],
        "explanation": "Kalimat akademik pola Ragam Bahasa Formal & Korespondensi Surat Resmi: 'จึงเรียนมาเพื่อโปรดพิจารณาให้ความอนุเคราะห์ในการเข้าใช้สถานที่เพื่อการวิจัยครับ' diterjemahkan secara akurat menjadi 'Demikian surat ini disampaikan agar kiranya berkenan dipertimbangkan untuk izin penggunaan fasilitas demi kepentingan riset.'."
      },
      {
        "id": "q-th-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "มหาวิทยาลัยได้รับพระมหากรุณาธิคุณในการเสด็จพระราชดำเนินมาเปิดอาคารวิจัยหลังใหม่ (má-hǎa-wít-thá-yaa-lai dâi ráp phrá-má-hǎa-gà-rú-naa-thí-khun nai gaan sà-dèt phrá-râat-chá-dam-nəən maa bpə̀ət aa-khaan wí-jai lǎng mài)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Universitas menerima kehormatan mulia atas perkenan kunjungan kerajaan meresmikan gedung riset baru.",
        "keywords": [
          "universitas",
          "menerima",
          "kehormatan",
          "mulia"
        ],
        "explanation": "Kalimat akademik pola Kosakata & Ungkapan Tingkat Tinggi (ราชาศัพท์ & Ragam Baku): 'มหาวิทยาลัยได้รับพระมหากรุณาธิคุณในการเสด็จพระราชดำเนินมาเปิดอาคารวิจัยหลังใหม่' diterjemahkan secara akurat menjadi 'Universitas menerima kehormatan mulia atas perkenan kunjungan kerajaan meresmikan gedung riset baru.'."
      },
      {
        "id": "q-th-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "กราบเรียนท่านประธานและคณะกรรมการผู้ทรงคุณวุฒิทุกท่าน ผมขอเริ่มนำเสนอวิทยานิพนธ์ ณ บัดนี้ครับ (gràap rian thân bprà-thaan lɛ́ khá-ná gam-má-gaan phûu-song-khun-ná-wút thúk thân phǒm khɔ̌ɔ rə̂əm nam-sà-nə̌ə wít-thá-yaa-ní-phon ná bàt níi khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Yth. Ketua Sidang dan dewan penguji yang terhormat, saya mohon izin memulai pemaparan tesis ini.",
        "keywords": [
          "ketua",
          "sidang",
          "dewan",
          "penguji"
        ],
        "explanation": "Kalimat akademik pola Struktur Retorika Presentasi & Argumentasi Ilmiah: 'กราบเรียนท่านประธานและคณะกรรมการผู้ทรงคุณวุฒิทุกท่าน ผมขอเริ่มนำเสนอวิทยานิพนธ์ ณ บัดนี้ครับ' diterjemahkan secara akurat menjadi 'Yth. Ketua Sidang dan dewan penguji yang terhormat, saya mohon izin memulai pemaparan tesis ini.'."
      },
      {
        "id": "q-th-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "ตามที่ศาสตราจารย์สมเกียรติได้ชี้ให้เห็นในงานวิจัยปี 2565 ปัจจัยด้านสิ่งแวดล้อมมีผลต่อการเรียนรู้ครับ (dtaam thîi sàat-dtraa-jaan sǒm-gìat dâi chíi hâi hěn nai ngaan wí-jai bpii sɔ̌ɔng phan hâa rɔ́ɔi hòk sìp hâa bpàt-jai dâan sìng-wɛ́ɛt-lɔ́ɔm mii phǒn dtɔ̀ɔ gaan rian rúu khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Sebagaimana telah ditunjukkan Profesor Somkiat dalam riset tahun 2022, faktor lingkungan berdampak nyata terhadap pembelajaran.",
        "keywords": [
          "sebagaimana",
          "ditunjukkan",
          "profesor",
          "somkiat"
        ],
        "explanation": "Kalimat akademik pola Rujukan & Sitasi Menurut ตามที่ (dtaam thîi) & อ้างอิง: 'ตามที่ศาสตราจารย์สมเกียรติได้ชี้ให้เห็นในงานวิจัยปี 2565 ปัจจัยด้านสิ่งแวดล้อมมีผลต่อการเรียนรู้ครับ' diterjemahkan secara akurat menjadi 'Sebagaimana telah ditunjukkan Profesor Somkiat dalam riset tahun 2022, faktor lingkungan berdampak nyata terhadap pembelajaran.'."
      },
      {
        "id": "q-th-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "วิกฤตเศรษฐกิจในครั้งนี้ส่งผลกระทบอย่างรุนแรงต่อภาคการท่องเที่ยว อันเนื่องมาจากการปิดประเทศครับ (wí-grìt sèet-thà-gìt nai khráng níi sòng phǒn grà-thóp yàang run-rɛɛng dtɔ̀ɔ phâak gaan thîang-thîaw an nʉ̂ang maa jàak gaan bpìt bprà-thêet khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Krisis ekonomi kali ini memberikan dampak berat terhadap sektor pariwisata yang timbul akibat penutupan wilayah negara.",
        "keywords": [
          "krisis",
          "ekonomi",
          "kali",
          "memberikan"
        ],
        "explanation": "Kalimat akademik pola Kausalitas Kompleks อันเนื่องมาจาก (an nʉ̂ang maa jàak): 'วิกฤตเศรษฐกิจในครั้งนี้ส่งผลกระทบอย่างรุนแรงต่อภาคการท่องเที่ยว อันเนื่องมาจากการปิดประเทศครับ' diterjemahkan secara akurat menjadi 'Krisis ekonomi kali ini memberikan dampak berat terhadap sektor pariwisata yang timbul akibat penutupan wilayah negara.'."
      },
      {
        "id": "q-th-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "กลุ่มตัวอย่างที่หนึ่งมีอัตราการฟื้นตัวอย่างรวดเร็ว ในทางกลับกัน กลุ่มควบคุมกลับไม่แสดงพัฒนาการที่ชัดเจนครับ (glùm dtua-yàang thîi nʉ̀ng mii àt-dtraa gaan fʉ́ʉn dtua yàang rùat-reo nai thaang glàp gan glùm khûap-khum glàp mâi sà-dɛɛng phát-thá-naa-gaan thîi chát-jeen khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Kelompok sampel pertama menunjukkan laju pemulihan yang cepat. Sebaliknya, kelompok kontrol justru tidak memperlihatkan kemajuan nyata.",
        "keywords": [
          "kelompok",
          "sampel",
          "pertama",
          "menunjukkan"
        ],
        "explanation": "Kalimat akademik pola Pernyataan Kontradiksi Formal ในทางกลับกัน (nai thaang glàp gan): 'กลุ่มตัวอย่างที่หนึ่งมีอัตราการฟื้นตัวอย่างรวดเร็ว ในทางกลับกัน กลุ่มควบคุมกลับไม่แสดงพัฒนาการที่ชัดเจนครับ' diterjemahkan secara akurat menjadi 'Kelompok sampel pertama menunjukkan laju pemulihan yang cepat. Sebaliknya, kelompok kontrol justru tidak memperlihatkan kemajuan nyata.'."
      },
      {
        "id": "q-th-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "โดยสรุป งานวิจัยนี้ได้ชี้ชัดถึงความสำคัญของการนำเทคโนโลยีดิจิทัลมาประยุกต์ใช้ในการศึกษาระดับอุดมศึกษาครับ (dooy sà-rùp ngaan wí-jai níi dâi chíi chát thʉ̌ng khwaam-sǎm-khan khɔ̌ɔng gaan nam thék-noo-loo-yîi dí-jì-thâl maa bprà-yúk chái nai gaan-sʉ̀k-sǎa rá-dàp ù-dom-sʉ̀k-sǎa khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Sebagai kesimpulan, penelitian ini secara tegas menunjukkan pentingnya adopsi teknologi digital di pendidikan tinggi.",
        "keywords": [
          "kesimpulan",
          "penelitian",
          "secara",
          "tegas"
        ],
        "explanation": "Kalimat akademik pola Kesimpulan & Penegasan Riset โดยสรุป (dooy sà-rùp): 'โดยสรุป งานวิจัยนี้ได้ชี้ชัดถึงความสำคัญของการนำเทคโนโลยีดิจิทัลมาประยุกต์ใช้ในการศึกษาระดับอุดมศึกษาครับ' diterjemahkan secara akurat menjadi 'Sebagai kesimpulan, penelitian ini secara tegas menunjukkan pentingnya adopsi teknologi digital di pendidikan tinggi.'."
      },
      {
        "id": "q-th-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "สัญญานี้ทำขึ้นเป็นสองฉบับมีข้อความถูกต้องตรงกัน คู่สัญญาทั้งสองฝ่ายได้อ่านและเข้าใจข้อความโดยละเอียดแล้วครับ (sǎn-yaa níi tham khʉ̂n bpen sɔ̌ɔng chà-bàp mii khɔ̂ɔ-khwaam thùuk-dtɔ̂ng dtrong gan khûu sǎn-yaa tháng sɔ̌ɔng fǎai dâi àan lɛ́ khâo-jai khɔ̂ɔ-khwaam dooy lá-ìat lɛ́ɛw khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Perjanjian ini dibuat rangkap dua dengan bunyi teks yang sama, kedua belah pihak telah membaca dan memahami seluruh isinya secara saksama.",
        "keywords": [
          "perjanjian",
          "dibuat",
          "rangkap",
          "bunyi"
        ],
        "explanation": "Kalimat akademik pola Bahasa Kontrak, Hukum & Perjanjian Bisnis: 'สัญญานี้ทำขึ้นเป็นสองฉบับมีข้อความถูกต้องตรงกัน คู่สัญญาทั้งสองฝ่ายได้อ่านและเข้าใจข้อความโดยละเอียดแล้วครับ' diterjemahkan secara akurat menjadi 'Perjanjian ini dibuat rangkap dua dengan bunyi teks yang sama, kedua belah pihak telah membaca dan memahami seluruh isinya secara saksama.'."
      },
      {
        "id": "q-th-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "จากตารางที่ 4.2 พบว่าค่าเฉลี่ยของกลุ่มทดลองสูงกว่ากลุ่มควบคุมอย่างมีนัยสำคัญทางสถิติที่ระดับ .01 ครับ (jàak dtaa-raang thîi sìi jùt sɔ̌ɔng phóp wâa khâa chè-lìia khɔ̌ɔng glùm thót-lɔɔng sǔung gwàa glùm khûap-khum yàang mii nai-yá-sǎm-khan thaang sà-thì-dtì thîi rá-dàp jùt sǔun nʉ̀ng khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Berdasarkan Tabel 4.2 ditemukan bahwa nilai rata-rata kelompok eksperimen lebih tinggi daripada kelompok kontrol pada taraf signifikansi .01.",
        "keywords": [
          "berdasarkan",
          "tabel",
          "ditemukan",
          "bahwa"
        ],
        "explanation": "Kalimat akademik pola Analisis Data Statistik & Pelaporan Tren Akademik: 'จากตารางที่ 4.2 พบว่าค่าเฉลี่ยของกลุ่มทดลองสูงกว่ากลุ่มควบคุมอย่างมีนัยสำคัญทางสถิติที่ระดับ .01 ครับ' diterjemahkan secara akurat menjadi 'Berdasarkan Tabel 4.2 ditemukan bahwa nilai rata-rata kelompok eksperimen lebih tinggi daripada kelompok kontrol pada taraf signifikansi .01.'."
      },
      {
        "id": "q-th-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "บทคัดย่อ: การวิจัยนี้มีวัตถุประสงค์เพื่อพัฒนารูปแบบการสอนภาษาไทยสำหรับชาวต่างชาติ ผลการศึกษาพบว่ารูปแบบใหม่มีประสิทธิผลสูงกว่าเกณฑ์ที่กำหนดอย่างมีนัยสำคัญครับ (bòt-khát-yɔ̂ɔ: gaan wí-jai níi mii wát-thù-bprà-sǒng phʉ̂a phát-thá-naa rûup-bɛ̀ɛp gaan sɔ̌ɔn phaa-sǎa thai sǎm-ràp chaao dtàang-châat phǒn gaan sʉ̀k-sǎa phóp wâa rûup-bɛ̀ɛp mài mii bprà-sìt-thí-phǒn sǔung gwàa geen thîi gam-nòt yàang mii nai-yá-sǎm-khan khráp)",
        "audioVoiceLang": "th-TH",
        "sampleAnswer": "Abstrak: Penelitian ini bertujuan mengembangkan model pembelajaran bahasa Thai bagi penutur asing. Hasil studi menemukan bahwa model baru memiliki efektivitas di atas standar signifikan.",
        "keywords": [
          "abstrak",
          "penelitian",
          "bertujuan",
          "mengembangkan"
        ],
        "explanation": "Kalimat akademik pola Penulisan Abstrak Skripsi & Tesis Ilmiah: 'บทคัดย่อ: การวิจัยนี้มีวัตถุประสงค์เพื่อพัฒนารูปแบบการสอนภาษาไทยสำหรับชาวต่างชาติ ผลการศึกษาพบว่ารูปแบบใหม่มีประสิทธิผลสูงกว่าเกณฑ์ที่กำหนดอย่างมีนัยสำคัญครับ' diterjemahkan secara akurat menjadi 'Abstrak: Penelitian ini bertujuan mengembangkan model pembelajaran bahasa Thai bagi penutur asing. Hasil studi menemukan bahwa model baru memiliki efektivitas di atas standar signifikan.'."
      },
      {
        "id": "q-th-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan resmi: 'Saya ingin mengajukan permohonan transkrip nilai resmi'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "อย่างเป็นทางการ",
          "ขอใบแสดงผลการเรียน",
          "ยื่นคำร้อง",
          "ผมขอ"
        ],
        "correctOrder": [
          "ผมขอ",
          "ยื่นคำร้อง",
          "ขอใบแสดงผลการเรียน",
          "อย่างเป็นทางการ"
        ],
        "explanation": "Struktur: Subjek/Permohonan (ผมขอยื่นคำร้อง) + Objek (ขอใบแสดงผลการเรียน) + Keterangan resmi (อย่างเป็นทางการ).",
        "targetSentence": "ผมขอยื่นคำร้องขอใบแสดงผลการเรียนอย่างเป็นทางการ"
      },
      {
        "id": "q-th-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat konsultasi dosen: 'Bolehkah saya berkonsultasi mengenai proposal penelitian?'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ได้ไหมครับ",
          "เรื่องข้อเสนอโครงการวิจัย",
          "ปรึกษาอาจารย์",
          "ขออนุญาต"
        ],
        "correctOrder": [
          "ขออนุญาต",
          "ปรึกษาอาจารย์",
          "เรื่องข้อเสนอโครงการวิจัย",
          "ได้ไหมครับ"
        ],
        "explanation": "Urutan sopan: ขออนุญาต + Verba (ปรึกษาอาจารย์) + Topik (เรื่องข้อเสนอโครงการวิจัย) + Partikel (ได้ไหมครับ).",
        "targetSentence": "ขออนุญาตปรึกษาอาจารย์เรื่องข้อเสนอโครงการวิจัยได้ไหมครับ"
      },
      {
        "id": "q-th-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat registrasi: 'Mahasiswa baru harus melapor di kantor urusan internasional'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ที่สำนักงานวิเทศสัมพันธ์",
          "นักศึกษาใหม่",
          "ต้องไปรายงานตัว"
        ],
        "correctOrder": [
          "นักศึกษาใหม่",
          "ต้องไปรายงานตัว",
          "ที่สำนักงานวิเทศสัมพันธ์"
        ],
        "explanation": "Urutan baku: Subjek (นักศึกษาใหม่) + Verba modal (ต้องไปรายงานตัว) + Keterangan tempat (ที่สำนักงานวิเทศสัมพันธ์).",
        "targetSentence": "นักศึกษาใหม่ต้องไปรายงานตัวที่สำนักงานวิเทศสัมพันธ์"
      },
      {
        "id": "q-th-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Buku referensi ini tidak boleh dipinjam ke luar gedung'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "นอกอาคารหอสมุด",
          "ห้ามนำออก",
          "หนังสืออ้างอิงเล่มนี้"
        ],
        "correctOrder": [
          "หนังสืออ้างอิงเล่มนี้",
          "ห้ามนำออก",
          "นอกอาคารหอสมุด"
        ],
        "explanation": "Urutan aturan: Objek topik (หนังสืออ้างอิงเล่มนี้) + Larangan (ห้ามนำออก) + Lokasi (นอกอาคารหอสมุด).",
        "targetSentence": "หนังสืออ้างอิงเล่มนี้ห้ามนำออกนอกอาคารหอสมุด"
      },
      {
        "id": "q-th-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Penerima beasiswa wajib menyerahkan laporan kemajuan akademik setiap semester'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ทุกภาคการศึกษา",
          "ผู้รับทุนการศึกษา",
          "ต้องส่งรายงานความก้าวหน้า"
        ],
        "correctOrder": [
          "ผู้รับทุนการศึกษา",
          "ต้องส่งรายงานความก้าวหน้า",
          "ทุกภาคการศึกษา"
        ],
        "explanation": "Urutan regulasi: Subjek (ผู้รับทุนการศึกษา) + Kewajiban (ต้องส่งรายงานความก้าวหน้า) + Waktu (ทุกภาคการศึกษา).",
        "targetSentence": "ผู้รับทุนการศึกษาต้องส่งรายงานความก้าวหน้าทุกภาคการศึกษา"
      },
      {
        "id": "q-th-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'มหาวิทยาลัย (mahawitthayalai)':",
        "targetSentence": "มหาวิทยาลัย",
        "audioVoiceLang": "th-TH",
        "options": [
          "Universitas / Perguruan Tinggi",
          "Satuan Kredit Semester (SKS)",
          "Ujian Akhir Semester (UAS)",
          "Surat Keterangan Mahasiswa Aktif"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'มหาวิทยาลัย (mahawitthayalai)' adalah padanan untuk 'Universitas / Perguruan Tinggi'."
      },
      {
        "id": "q-th-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'อาจารย์ที่ปรึกษา (aajaan thii prueksaa)':",
        "targetSentence": "อาจารย์ที่ปรึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Semester perkuliahan",
          "Dosen Pembimbing Akademik / Tesis",
          "Kartu Tanda Mahasiswa (KTM)",
          "Program Studi / Jurusan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'อาจารย์ที่ปรึกษา (aajaan thii prueksaa)' adalah padanan untuk 'Dosen Pembimbing Akademik / Tesis'."
      },
      {
        "id": "q-th-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'หน่วยกิต (nuay kit)':",
        "targetSentence": "หน่วยกิต",
        "audioVoiceLang": "th-TH",
        "options": [
          "Ujian Akhir Semester (UAS)",
          "Asrama mahasiswa",
          "Satuan Kredit Semester (SKS)",
          "Lulus kuliah / Wisuda kelulusan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'หน่วยกิต (nuay kit)' adalah padanan untuk 'Satuan Kredit Semester (SKS)'."
      },
      {
        "id": "q-th-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'ภาคการศึกษา (phaak kaan seuksaa)':",
        "targetSentence": "ภาคการศึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Kartu Tanda Mahasiswa (KTM)",
          "Surat Keterangan Mahasiswa Aktif",
          "Universitas / Perguruan Tinggi",
          "Semester perkuliahan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'ภาคการศึกษา (phaak kaan seuksaa)' adalah padanan untuk 'Semester perkuliahan'."
      },
      {
        "id": "q-th-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'การสอบไล่ (kaan sop lai)':",
        "targetSentence": "การสอบไล่",
        "audioVoiceLang": "th-TH",
        "options": [
          "Ujian Akhir Semester (UAS)",
          "Asrama mahasiswa",
          "Program Studi / Jurusan",
          "Dosen Pembimbing Akademik / Tesis"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'การสอบไล่ (kaan sop lai)' adalah padanan untuk 'Ujian Akhir Semester (UAS)'."
      },
      {
        "id": "q-th-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'บัตรประจำตัวนักศึกษา (bat pracamtua nakseuksaa)':",
        "targetSentence": "บัตรประจำตัวนักศึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Surat Keterangan Mahasiswa Aktif",
          "Kartu Tanda Mahasiswa (KTM)",
          "Lulus kuliah / Wisuda kelulusan",
          "Satuan Kredit Semester (SKS)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'บัตรประจำตัวนักศึกษา (bat pracamtua nakseuksaa)' adalah padanan untuk 'Kartu Tanda Mahasiswa (KTM)'."
      },
      {
        "id": "q-th-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'หอพักนักศึกษา (ho phak nakseuksaa)':",
        "targetSentence": "หอพักนักศึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Program Studi / Jurusan",
          "Universitas / Perguruan Tinggi",
          "Asrama mahasiswa",
          "Semester perkuliahan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'หอพักนักศึกษา (ho phak nakseuksaa)' adalah padanan untuk 'Asrama mahasiswa'."
      },
      {
        "id": "q-th-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'ใบรับรองการศึกษา (bai raprong kaan seuksaa)':",
        "targetSentence": "ใบรับรองการศึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Lulus kuliah / Wisuda kelulusan",
          "Dosen Pembimbing Akademik / Tesis",
          "Ujian Akhir Semester (UAS)",
          "Surat Keterangan Mahasiswa Aktif"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'ใบรับรองการศึกษา (bai raprong kaan seuksaa)' adalah padanan untuk 'Surat Keterangan Mahasiswa Aktif'."
      },
      {
        "id": "q-th-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'สาขาวิชา (saakhaa wicha)':",
        "targetSentence": "สาขาวิชา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Program Studi / Jurusan",
          "Universitas / Perguruan Tinggi",
          "Satuan Kredit Semester (SKS)",
          "Kartu Tanda Mahasiswa (KTM)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'สาขาวิชา (saakhaa wicha)' adalah padanan untuk 'Program Studi / Jurusan'."
      },
      {
        "id": "q-th-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'สำเร็จการศึกษา (samret kaan seuksaa)':",
        "targetSentence": "สำเร็จการศึกษา",
        "audioVoiceLang": "th-TH",
        "options": [
          "Dosen Pembimbing Akademik / Tesis",
          "Lulus kuliah / Wisuda kelulusan",
          "Semester perkuliahan",
          "Asrama mahasiswa"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'สำเร็จการศึกษา (samret kaan seuksaa)' adalah padanan untuk 'Lulus kuliah / Wisuda kelulusan'."
      },
      {
        "id": "q-th-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam budaya akademik Thailand, apa makna tradisi 'ไหว้ครู' (Wai Kru)?",
        "options": [
          "Festival olahraga antar kampus",
          "Pesta penyambutan mahasiswa baru di pantai",
          "Upacara tahunan menghormati dan mengungkapkan terima kasih kepada dosen/guru",
          "Ujian evaluasi tengah semester"
        ],
        "correctAnswerIndex": 2,
        "explanation": "พิธีไหว้ครู (Wai Kru) adalah tradisi sakral civitas academica Thailand untuk menghormati guru dan dosen."
      },
      {
        "id": "q-th-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batasan jam kerja paruh waktu legal untuk pemegang visa pelajar di Thailand?",
        "options": [
          "Bebas bekerja hingga 40 jam per minggu",
          "Boleh bekerja paruh waktu tanpa izin",
          "Wajib bekerja 10 jam per minggu",
          "Hukum visa pelajar Thailand secara umum tidak mengizinkan pekerjaan berupah di luar kampus tanpa izin kerja khusus"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Pemegang visa Non-Immigrant ED di Thailand tidak otomatis memiliki izin kerja."
      },
      {
        "id": "q-th-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan sistem 'GPA' (เกรดเฉลี่ย) skala 4.0 di perguruan tinggi Thailand?",
        "options": [
          "Indeks Prestasi Kumulatif (IPK) dengan nilai minimal kelulusan sarjana umumnya 2.00 dan magister 3.00",
          "Peringkat nomor urut absen",
          "Jumlah kehadiran tatap muka di kelas",
          "Skor tes fisik kebugaran"
        ],
        "correctAnswerIndex": 0,
        "explanation": "เกรดเฉลี่ยสะสม (GPAX) menggunakan skala 4.00."
      },
      {
        "id": "q-th-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana etika bertanya di dalam kelas kuliah bersama profesor di Thailand?",
        "options": [
          "Langsung menyela dosen di tengah penjelasan",
          "Mengangkat tangan dengan sopan, menunggu dipersilakan, dan menggunakan partikel ครับ (khrap) / ค่ะ (kha)",
          "Berbicara santai tanpa partikel sopan",
          "Meninggalkan ruang kelas tanpa izin"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Kesopanan dan penghormatan kepada dosen sangat ditekankan dalam tata krama ruang kuliah Thailand."
      },
      {
        "id": "q-th-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Singkatan 'ม.' dalam penulisan nama kampus di Thailand merupakan kependekan dari:",
        "options": [
          "เมือง (Kota)",
          "มูลนิธิ (Yayasan)",
          "มหาวิทยาลัย (Universitas)",
          "มิตรภาพ (Persahabatan)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "'ม.' adalah singkatan baku tertulis untuk 'มหาวิทยาลัย' (Universitas)."
      },
      {
        "id": "q-th-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi kantor 'กองวิเทศสัมพันธ์' (Office of International Affairs) di kampus Thailand?",
        "options": [
          "Mengelola parkir kendaraan",
          "Menjual buku diktat kuliah",
          "Menyediakan layanan katering",
          "Menangani administrasi mahasiswa asing, perpanjangan visa, dan kerja sama internasional"
        ],
        "correctAnswerIndex": 3,
        "explanation": "กองวิเทศสัมพันธ์ adalah biro urusan internasional kampus."
      },
      {
        "id": "q-th-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa standar nilai minimal kelulusan untuk setiap mata kuliah wajib jenjang Master (S2) di Thailand?",
        "options": [
          "Umumnya minimal nilai B (skor 3.00)",
          "Nilai D sudah cukup lulus",
          "C minus",
          "Hanya memerlukan kehadiran tanpa nilai"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Di jenjang magister Thailand, mata kuliah dengan nilai di bawah B umumnya harus diulang."
      },
      {
        "id": "q-th-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Ketika mengajukan permohonan beasiswa TICA (Thailand International Cooperation Agency), dokumen apa yang krusial?",
        "options": [
          "Kwitansi belanja",
          "Proposal studi, surat rekomendasi akademik, transkrip nilai, dan sertifikat kemahiran bahasa",
          "Surat izin mengemudi",
          "Tiket bioskop"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Dokumen akademik resmi dan proposal riset adalah syarat fundamental beasiswa TICA."
      },
      {
        "id": "q-th-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa sebutan untuk ujian proposal penelitian skripsi/tesis dalam bahasa akademik Thai?",
        "options": [
          "การแข่งขันตอบปัญหา — Lomba cerdas cermat",
          "การแสดงดนตรี — Pertunjukan musik",
          "การสอบโครงร่างวิทยานิพนธ์ — Ujian seminar proposal tesis/disertasi",
          "การออกค่ายอาสา — Kegiatan kemah bakti sosial"
        ],
        "correctAnswerIndex": 2,
        "explanation": "การสอบโครงร่างวิทยานิพนธ์ adalah seminar ujian proposal tesis."
      },
      {
        "id": "q-th-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bulan apakah semester ganjil (ภาคการศึกษาต้น) biasanya dimulai di universitas Thailand?",
        "options": [
          "Bulan Januari",
          "Bulan Mei",
          "Bulan Desember",
          "Bulan Agustus / September (mengikuti kalender ASEAN)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Sebagian besar universitas Thailand memulai semester pertama pada bulan Agustus sesuai kalender akademik ASEAN."
      },
      {
        "id": "q-th-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kata 'อาจารย์ใหญ่' atau 'อธิการบดี' mengacu pada jabatan struktural apa di universitas?",
        "options": [
          "Rektor Universitas",
          "Ketua Himpunan Mahasiswa",
          "Kepala Satpam",
          "Petugas Kebersihan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "อธิการบดี (Athikaanbodi) berarti Rektor Universitas."
      },
      {
        "id": "q-th-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah gelar akademik 'ดร.' di depan nama dosen Thailand melambangkan?",
        "options": [
          "Dokter hewan",
          "Doktor (Ph.D.)",
          "Duta besar",
          "Direktur swasta"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'ดร.' adalah singkatan untuk Doktor (Doctorate / Ph.D.)."
      },
      {
        "id": "q-th-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam penulisan ilmiah bahasa Thai, kata 'สรุป' diletakkan pada bagian mana?",
        "options": [
          "Daftar Isi",
          "Kata Pengantar",
          "Kesimpulan / Bab Akhir",
          "Sampul Depan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "สรุป (sarup) berarti kesimpulan / ringkasan akhir."
      },
      {
        "id": "q-th-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi sistem 'Turnitin' yang diterapkan di universitas-universitas Thailand?",
        "options": [
          "Pencatatan absensi harian",
          "Pengisian saldo dompet digital",
          "Pemesanan makanan kantin",
          "Pemeriksaan tingkat plagiarisme dan orisinalitas naskah akademik"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Turnitin digunakan secara ketat untuk memverifikasi keaslian karya ilmiah mahasiswa."
      },
      {
        "id": "q-th-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa ingin mengambil cuti kuliah satu semester, formulir apa yang harus diajukan?",
        "options": [
          "คำร้องขอลาพักการศึกษา (Permohonan Cuti Studi)",
          "คำร้องขอลาออก (Pengunduran diri)",
          "ใบสมัครงาน (Lamaran kerja)",
          "แบบฟอร์มขอคืนเงิน (Pengembalian dana)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "คำร้องขอลาพักการศึกษา adalah formulir permohonan resmi cuti akademik sementara."
      }
    ]
  }
};

export const RUSSIA_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "ru-1": {
    "id": "test-ru-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Rusia (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Rusia.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ru-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что означает термин 'курсовая работа' в российском университете?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Kartu ujian masuk",
          "Makalah / karya ilmiah terstruktur per semester",
          "Jadwal libur musim dingin",
          "Kuitansi asrama"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Курсовая работа adalah karya ilmiah wajib yang disusun mahasiswa di setiap tahun akademik."
      },
      {
        "id": "q-ru-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Выберите правильный предлог: 'Студент успешно сдал экзамен _____ специальности.'",
        "audioVoiceLang": "ru-RU",
        "options": [
          "к — menuju / kepada",
          "в — di dalam / ke",
          "по (по специальности) — pada / di bidang jurusan (preposisi baku setelah экзамен)",
          "от — dari / milik"
        ],
        "correctAnswerIndex": 2,
        "explanation": "В русском языке используется предлог 'по' с дательным падежом: 'экзамен по специальности'."
      },
      {
        "id": "q-ru-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Как принято уважительно обращаться к преподавателю в российских вузах?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Только по фамилии — Hanya menyebut nama keluarga saja (tidak sopan)",
          "Эй, учитель — Hei, guru (kasar dan tidak baku di universitas)",
          "По имени и слову 'друг' — Menyebut nama depan dan kata 'teman'",
          "По имени и отчеству (например: Иван Иванович) — Menyebut nama depan dan patronimik (sapaan hormat baku di Rusia)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Обращение по имени и отчеству — ключевая норма академического этикета в России."
      },
      {
        "id": "q-ru-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Какой документ подтверждает статус студента и право на льготный проезд?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Студенческий билет — Kartu Tanda Mahasiswa (KTM) resmi untuk akses kampus & diskon transportasi",
          "Паспорт гражданина — Paspor warga negara",
          "Диплом бакалавра — Ijazah kelulusan sarjana",
          "Медицинская страховка — Polis asuransi kesehatan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Студенческий билет подтверждает статус студента университета."
      },
      {
        "id": "q-ru-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что такое 'зачётная книжка' (зачётка)?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Buku catatan harian kuliah",
          "Buku nilai hasil ujian dan зачёт mahasiswa",
          "Daftar pinjaman buku perpustakaan",
          "Katalog mata kuliah"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Зачётная книжка содержит официальные записи обо всех сданных зачётах и экзаменах."
      },
      {
        "id": "q-ru-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "'Научный руководитель' выполняет какую функцию в университете?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Petugas tata usaha pendaftaran",
          "Pengawas kebersihan kampus",
          "Dosen pembimbing skripsi, tesis, dan riset akademik",
          "Instruktur olahraga"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Научный руководитель курирует написание дипломной работы или диссертации."
      },
      {
        "id": "q-ru-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что такое 'коллоквиум' в учебном процессе российского вуза?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Pesta tari tahun baru",
          "Perjalanan wisata kampus",
          "Latihan paduan suara",
          "Diskusi ilmiah / sesi tanya jawab evaluasi pemahaman materi"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Коллоквиум — это форма проверки и закрепления знаний студентов в виде научной беседы."
      },
      {
        "id": "q-ru-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Слово 'стипендия' означает:",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Beasiswa / tunjangan bulanan mahasiswa",
          "Uang denda keterlambatan buku",
          "Biaya cetak makalah",
          "Tiket kereta antar-kota"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Стипендия — денежная выплата, назначаемая студентам для поддержки во время обучения."
      },
      {
        "id": "q-ru-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Перед кем проходит официальная защита дипломной работы выпускника?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Перед комендантом общежития — Di hadapan pengelola asrama",
          "Перед Государственной экзаменационной комиссией (ГЭК) — Di hadapan Komisi Ujian Negara (dewan penguji resmi)",
          "Перед однокурсниками в кафе — Di hadapan teman sekelas di kafe",
          "Перед сотрудниками библиотеки — Di hadapan petugas perpustakaan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Защита дипломного проекта проходит публично перед членами ГЭК."
      },
      {
        "id": "q-ru-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что такое 'подфак' (подготовительный факультет) для иностранных студентов?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Fakultas khusus ilmu kedokteran",
          "Lembaga penerbitan buku kampus",
          "Fakultas persiapan bahasa Rusia dan matrikulasi pra-kuliah",
          "Organisasi alumni universitas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Подготовительный факультет обучает иностранцев русскому языку перед поступлением на первый курс."
      }
    ]
  },
  "ru-2": {
    "id": "test-ru-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Rusia.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ru-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Научная новизна исследования заключается в разработке инновационной математической модели.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Kebaruan ilmiah dari riset ini terletak pada pengembangan model matematika yang inovatif.",
        "keywords": [
          "kebaruan",
          "ilmiah",
          "riset",
          "terletak"
        ],
        "explanation": "Kalimat akademik pola Penulisan Abstrak & Tinjauan Pustaka Ilmiah (Научный стиль): 'Научная новизна исследования заключается в разработке инновационной математической модели.' diterjemahkan secara akurat menjadi 'Kebaruan ilmiah dari riset ini terletak pada pengembangan model matematika yang inovatif.'."
      },
      {
        "id": "q-ru-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Это решение вряд ли можно признать оптимальным в данных сложных обстоятельствах.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Keputusan ini tampaknya sulit diakui sebagai langkah optimal dalam situasi rumit saat ini.",
        "keywords": [
          "keputusan",
          "tampaknya",
          "sulit",
          "diakui"
        ],
        "explanation": "Kalimat akademik pola Partikel Penegas & Nuansa Disparitas Wacana (Ведь, Же, То, -таки): 'Это решение вряд ли можно признать оптимальным в данных сложных обстоятельствах.' diterjemahkan secara akurat menjadi 'Keputusan ini tampaknya sulit diakui sebagai langkah optimal dalam situasi rumit saat ini.'."
      },
      {
        "id": "q-ru-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "При всём уважении к позиции уважаемого оппонента, позвольте не согласиться с этим выводом.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Dengan segala hormat terhadap posisi penguji yang terhormat, izinkan saya tidak sependapat dengan simpulan ini.",
        "keywords": [
          "segala",
          "hormat",
          "terhadap",
          "posisi"
        ],
        "explanation": "Kalimat akademik pola Retorika Debat & Sanggahan Akademik Berbobot: 'При всём уважении к позиции уважаемого оппонента, позвольте не согласиться с этим выводом.' diterjemahkan secara akurat menjadi 'Dengan segala hormat terhadap posisi penguji yang terhormat, izinkan saya tidak sependapat dengan simpulan ini.'."
      },
      {
        "id": "q-ru-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Автор детально анализирует и всесторонне освещает изучаемое социальное явление.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Penulis menganalisis secara detail dan menguraikan secara menyeluruh fenomena sosial yang dikaji.",
        "keywords": [
          "penulis",
          "menganalisis",
          "secara",
          "detail"
        ],
        "explanation": "Kalimat akademik pola Analisis Semantik & Stilistika Leksikal Lanjutan: 'Автор детально анализирует и всесторонне освещает изучаемое социальное явление.' diterjemahkan secara akurat menjadi 'Penulis menganalisis secara detail dan menguraikan secara menyeluruh fenomena sosial yang dikaji.'."
      },
      {
        "id": "q-ru-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Принимая во внимание комплексный характер проблемы, исследование опирается на междисциплинарный подход.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Mengingat sifat permasalahan yang kompleks, penelitian ini bertumpu pada pendekatan interdisipliner.",
        "keywords": [
          "mengingat",
          "sifat",
          "permasalahan",
          "kompleks"
        ],
        "explanation": "Kalimat akademik pola Kalimat Majemuk Bertingkat Kompleks (Многокомпонентные периоды): 'Принимая во внимание комплексный характер проблемы, исследование опирается на междисциплинарный подход.' diterjemahkan secara akurat menjadi 'Mengingat sifat permasalahan yang kompleks, penelitian ini bertumpu pada pendekatan interdisipliner.'."
      },
      {
        "id": "q-ru-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "В рамках современной исследовательской парадигмы данный феномен рассматривается как когнитивный конструкт.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Dalam kerangka paradigma riset kontemporer, fenomena ini dipandang sebagai konstruk kognitif.",
        "keywords": [
          "kerangka",
          "paradigma",
          "riset",
          "kontemporer"
        ],
        "explanation": "Kalimat akademik pola Metafora Konseptual & Terminologi Epistemologis: 'В рамках современной исследовательской парадигмы данный феномен рассматривается как когнитивный конструкт.' diterjemahkan secara akurat menjadi 'Dalam kerangka paradigma riset kontemporer, fenomena ini dipandang sebagai konstruk kognitif.'."
      },
      {
        "id": "q-ru-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Высокие Договаривающиеся Стороны обязуются добросовестно выполнять положения настоящего соглашения.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Para Pihak Tinggi yang Berjanji berkewajiban melaksanakan ketentuan perjanjian ini dengan iktikad baik.",
        "keywords": [
          "pihak",
          "tinggi",
          "berjanji",
          "berkewajiban"
        ],
        "explanation": "Kalimat akademik pola Bahasa Regulasi, Hukum & Diplomasi Federasi Rusia: 'Высокие Договаривающиеся Стороны обязуются добросовестно выполнять положения настоящего соглашения.' diterjemahkan secara akurat menjadi 'Para Pihak Tinggi yang Berjanji berkewajiban melaksanakan ketentuan perjanjian ini dengan iktikad baik.'."
      },
      {
        "id": "q-ru-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "В романе Достоевского прослеживается глубокий экзистенциальный конфликт личности и общества.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Dalam novel Dostoevsky terjejak konflik eksistensial yang mendalam antara individu dan masyarakat.",
        "keywords": [
          "novel",
          "dostoevsky",
          "terjejak",
          "konflik"
        ],
        "explanation": "Kalimat akademik pola Analisis Teks Sastra Klasik & Hermeneutika Kritis: 'В романе Достоевского прослеживается глубокий экзистенциальный конфликт личности и общества.' diterjemahkan secara akurat menjadi 'Dalam novel Dostoevsky terjejak konflik eksistensial yang mendalam antara individu dan masyarakat.'."
      },
      {
        "id": "q-ru-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Источниковедческая база диссертации включает ранее не опубликованные архивные рукописи.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Basis kajian sumber disertasi ini mencakup manuskrip arsip yang belum pernah diterbitkan sebelumnya.",
        "keywords": [
          "basis",
          "kajian",
          "sumber",
          "disertasi"
        ],
        "explanation": "Kalimat akademik pola Kritik Sumber & Metodologi Penelitian Bidang Humaniora: 'Источниковедческая база диссертации включает ранее не опубликованные архивные рукописи.' diterjemahkan secara akurat menjadi 'Basis kajian sumber disertasi ini mencakup manuskrip arsip yang belum pernah diterbitkan sebelumnya.'."
      },
      {
        "id": "q-ru-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Уважаемый председатель и члены диссертационного совета, на ваше рассмотрение выносится диссертация!",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Ketua dan anggota dewan disertasi yang terhormat, ke hadapan Anda disajikan penelitian disertasi ini!",
        "keywords": [
          "ketua",
          "anggota",
          "dewan",
          "disertasi"
        ],
        "explanation": "Kalimat akademik pola Sintesis Tesis & Pertahanan Disertasi di Dewan Ilmiah: 'Уважаемый председатель и члены диссертационного совета, на ваше рассмотрение выносится диссертация!' diterjemahkan secara akurat menjadi 'Ketua dan anggota dewan disertasi yang terhormat, ke hadapan Anda disajikan penelitian disertasi ini!'."
      }
    ]
  },
  "ru-3": {
    "id": "test-ru-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis Kalimat Rusia (5 Soal Sambung Kata)",
    "description": "Uji ketelitian menyusun tata urutan klausa regulasi kampus, registrasi mata kuliah, dan korespondensi resmi di Rusia.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ru-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat resmi konsultasi dosen: 'Saya ingin mendaftar janji konsultasi dengan profesor'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "по курсовой работе",
          "к профессору",
          "записаться на консультацию",
          "Я хочу"
        ],
        "correctOrder": [
          "Я хочу",
          "записаться на консультацию",
          "к профессору",
          "по курсовой работе"
        ],
        "explanation": "Urutan baku: Subjek/Keinginan (Я хочу) + Frasa verba (записаться на консультацию) + Dosen (к профессору) + Topik (по курсовой работе).",
        "targetSentence": "Я хочу записаться на консультацию к профессору по курсовой работе"
      },
      {
        "id": "q-ru-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat imigrasi: 'Mahasiswa asing wajib memperpanjang registrasi tepat waktu'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "миграционный учёт",
          "Иностранные студенты",
          "обязаны вовремя продлевать"
        ],
        "correctOrder": [
          "Иностранные студенты",
          "обязаны вовремя продлевать",
          "миграционный учёт"
        ],
        "explanation": "Urutan regulasi: Subjek (Иностранные студенты) + Predikat kewajiban (обязаны вовремя продлевать) + Objek (миграционный учёт).",
        "targetSentence": "Иностранные студенты обязаны вовремя продлевать миграционный учёт"
      },
      {
        "id": "q-ru-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat penulisan ilmiah: 'Daftar pustaka disusun sesuai aturan standar nasional'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "с государственным стандартом",
          "оформляется в соответствии",
          "Список литературы"
        ],
        "correctOrder": [
          "Список литературы",
          "оформляется в соответствии",
          "с государственным стандартом"
        ],
        "explanation": "Urutan formal: Subjek (Список литературы) + Verba pasif (оформляется в соответствии) + Acuan baku (с государственным стандартом).",
        "targetSentence": "Список литературы оформляется в соответствии с государственным стандартом"
      },
      {
        "id": "q-ru-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Di perpustakaan kampus tersedia pangkalan data ilmiah internasional'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "научные базы данных",
          "В университетской библиотеке",
          "доступны международные"
        ],
        "correctOrder": [
          "В университетской библиотеке",
          "доступны международные",
          "научные базы данных"
        ],
        "explanation": "Urutan wajar: Keterangan tempat (В университетской библиотеке) + Predikatif (доступны) + Subjek objek (международные научные базы данных).",
        "targetSentence": "В университетской библиотеке доступны международные научные базы данных"
      },
      {
        "id": "q-ru-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang kelulusan: 'Sidang promosi tesis magister akan diselenggarakan bulan depan'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "месяце перед комиссией",
          "состоится в следующем",
          "Защита магистерской диссертации"
        ],
        "correctOrder": [
          "Защита магистерской диссертации",
          "состоится в следующем",
          "месяце перед комиссией"
        ],
        "explanation": "Urutan agenda: Topik (Защита магистерской диссертации) + Waktu tempat (состоится в следующем месяце перед комиссией).",
        "targetSentence": "Защита магистерской диссертации состоится в следующем месяце перед комиссией"
      }
    ]
  },
  "ru-4": {
    "id": "test-ru-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Rusia (10 Soal Artikan)",
    "description": "Uji penguasaan glosarium akademik, peristilahan seminar ilmiah, dan sistem administrasi kampus di Rusia.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ru-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Научный руководитель (nauchnyy rukovoditel':",
        "targetSentence": "Научный руководитель (nauchnyy rukovoditel",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Ruang kuliah / Ruang kelas",
          "Dosen Pembimbing Riset / Skripsi",
          "Asrama mahasiswa kampus",
          "Magang / Praktik kerja lapangan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Научный руководитель (nauchnyy rukovoditel')' adalah padanan untuk 'Dosen Pembimbing Riset / Skripsi' di universitas Rusia."
      },
      {
        "id": "q-ru-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Экзаменационная сессия (sessiya)':",
        "targetSentence": "Экзаменационная сессия",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Jadwal perkuliahan",
          "Departemen / Program Studi",
          "Masa Ujian Akhir Semester",
          "Ijazah Predikat Cum Laude (Ijazah Merah)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Экзаменационная сессия (sessiya)' adalah padanan untuk 'Masa Ujian Akhir Semester' di universitas Rusia."
      },
      {
        "id": "q-ru-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Аудитория (auditoriya)':",
        "targetSentence": "Аудитория",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Asrama mahasiswa kampus",
          "Kantor Dekanat Fakultas",
          "Cuti perkuliahan akademik",
          "Ruang kuliah / Ruang kelas"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Аудитория (auditoriya)' adalah padanan untuk 'Ruang kuliah / Ruang kelas' di universitas Rusia."
      },
      {
        "id": "q-ru-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Расписание занятий (raspisaniye)':",
        "targetSentence": "Расписание занятий",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Jadwal perkuliahan",
          "Departemen / Program Studi",
          "Magang / Praktik kerja lapangan",
          "Dosen Pembimbing Riset / Skripsi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Расписание занятий (raspisaniye)' adalah padanan untuk 'Jadwal perkuliahan' di universitas Rusia."
      },
      {
        "id": "q-ru-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Общежитие (obshchezhitie)':",
        "targetSentence": "Общежитие",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Kantor Dekanat Fakultas",
          "Asrama mahasiswa kampus",
          "Ijazah Predikat Cum Laude (Ijazah Merah)",
          "Masa Ujian Akhir Semester"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Общежитие (obshchezhitie)' adalah padanan untuk 'Asrama mahasiswa kampus' di universitas Rusia."
      },
      {
        "id": "q-ru-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Кафедра (kafedra)':",
        "targetSentence": "Кафедра",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Magang / Praktik kerja lapangan",
          "Cuti perkuliahan akademik",
          "Departemen / Program Studi",
          "Ruang kuliah / Ruang kelas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Кафедра (kafedra)' adalah padanan untuk 'Departemen / Program Studi' di universitas Rusia."
      },
      {
        "id": "q-ru-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Деканат (dekanat)':",
        "targetSentence": "Деканат",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Ijazah Predikat Cum Laude (Ijazah Merah)",
          "Dosen Pembimbing Riset / Skripsi",
          "Jadwal perkuliahan",
          "Kantor Dekanat Fakultas"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Деканат (dekanat)' adalah padanan untuk 'Kantor Dekanat Fakultas' di universitas Rusia."
      },
      {
        "id": "q-ru-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Стажировка / практика (stazhirovka)':",
        "targetSentence": "Стажировка / практика",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Magang / Praktik kerja lapangan",
          "Cuti perkuliahan akademik",
          "Masa Ujian Akhir Semester",
          "Asrama mahasiswa kampus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Стажировка / практика (stazhirovka)' adalah padanan untuk 'Magang / Praktik kerja lapangan' di universitas Rusia."
      },
      {
        "id": "q-ru-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Диплом с отличием (krasnyy diplom)':",
        "targetSentence": "Диплом с отличием",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Dosen Pembimbing Riset / Skripsi",
          "Ijazah Predikat Cum Laude (Ijazah Merah)",
          "Ruang kuliah / Ruang kelas",
          "Departemen / Program Studi"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Диплом с отличием (krasnyy diplom)' adalah padanan untuk 'Ijazah Predikat Cum Laude (Ijazah Merah)' di universitas Rusia."
      },
      {
        "id": "q-ru-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Академический отпуск (akademicheskiy otpusk)':",
        "targetSentence": "Академический отпуск",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Masa Ujian Akhir Semester",
          "Jadwal perkuliahan",
          "Cuti perkuliahan akademik",
          "Kantor Dekanat Fakultas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Академический отпуск (akademicheskiy otpusk)' adalah padanan untuk 'Cuti perkuliahan akademik' di universitas Rusia."
      }
    ]
  },
  "ru-5": {
    "id": "test-ru-5",
    "title": "Bagian 5: Wacana Silabus & Analisis Kasus Kampus Rusia (15 Soal Analisis Bebas)",
    "description": "Uji kesiapan komprehensif menghadapi perkuliahan nyata, etika laboratorium, dan dinamika mahasiswa internasional di Rusia.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ru-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Sistem penilaian universitas di Rusia menggunakan skala berapa?",
        "options": [
          "Skala huruf A sampai F",
          "Skala 0 sampai 100",
          "Skala bintang 1 sampai 10",
          "Skala 1 sampai 5 (5=Отлично, 4=Хорошо, 3=Удовлетворительно, 2=Неудовлетворительно)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "В российских вузах традиционно используется пятибалльная система оценивания."
      },
      {
        "id": "q-ru-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas waktu lapor migrasi (регистрация) bagi mahasiswa asing setibanya di asrama Rusia?",
        "options": [
          "Dalam waktu 7 hari kerja setelah kedatangan di tempat tinggal baru",
          "3 bulan setelah tiba",
          "Boleh kapan saja sebelum lulus",
          "Tidak perlu mendaftar sama sekali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Иностранный гражданин обязан встать на миграционный учёт в течение 7 рабочих дней."
      },
      {
        "id": "q-ru-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Красный диплом' (Ijazah Merah) di universitas Rusia?",
        "options": [
          "Ijazah untuk mahasiswa yang drop out",
          "Ijazah kelulusan berpredikat Cum Laude (minimal 75% nilai 5 dan tanpa nilai 3)",
          "Surat peringatan disiplin kampus",
          "Kartu anggota partai"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Красный диплом — диплом с отличием, свидетельствующий о наивысших академических успехах."
      },
      {
        "id": "q-ru-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan kompetisi 'Open Doors: Russian Scholarship Project'?",
        "options": [
          "Pameran busana kampus",
          "Lomba lari maraton antar-kampus",
          "Olimpiade internasional berhadiah beasiswa penuh S2/S3 di universitas top Rusia",
          "Pameran kuliner mahasiswa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Олимпиада Open Doors позволяет иностранным абитуриентам поступить в магистратуру и аспирантуру без экзаменов."
      },
      {
        "id": "q-ru-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana pakaian yang pantas saat menghadiri ujian lisan (устный экзамен) bersama profesor di Rusia?",
        "options": [
          "Baju kaos santai dan celana pendek",
          "Pakaian olahraga gym",
          "Pakaian renang",
          "Pakaian formal rapi (kemeja/blazer), sopan dan profesional"
        ],
        "correctAnswerIndex": 3,
        "explanation": "На экзамены в российских университетах принято приходить в строгой деловой одежде."
      },
      {
        "id": "q-ru-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa singkatan 'ГОСТ' yang sering dijadikan acuan format penulisan makalah di Rusia?",
        "options": [
          "Государственный стандарт (Standar Nasional Negara)",
          "Городской отдел спорта",
          "Главная организация студентов",
          "Государственный оперный театр"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ГОСТ — Государственный стандарт, регламентирующий правила оформления научных работ."
      },
      {
        "id": "q-ru-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kapan periode 'Зимняя сессия' (Ujian Semester Musim Dingin) umumnya berlangsung di Rusia?",
        "options": [
          "Bulan Agustus",
          "Bulan Januari",
          "Bulan Mei",
          "Bulan Oktober"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Зимняя экзаменационная сессия традиционно проходит в январе после зачётной недели в декабре."
      },
      {
        "id": "q-ru-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bolehkan mahasiswa asing pemegang visa pelajar di Rusia bekerja paruh waktu saat ini?",
        "options": [
          "Dilarang bekerja sama sekali",
          "Hanya boleh bekerja di kedutaan",
          "Boleh bekerja secara legal tanpa perlu izin kerja terpisah (work permit) di waktu luang",
          "Wajib bekerja 40 jam per minggu"
        ],
        "correctAnswerIndex": 2,
        "explanation": "С 2020 года иностранные студенты очных отделений в РФ имеют право работать в свободное от учёбы время без специального разрешения."
      },
      {
        "id": "q-ru-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa perbedaan mendasar antara 'Бакалавриат' dan 'Специалитет' di Rusia?",
        "options": [
          "Бакалавриат hanya untuk seni",
          "Специалитет adalah kursus kilat 3 bulan",
          "Tidak ada bedanya",
          "Бакалавриат berdurasi 4 tahun (sistem Bologna), sedangkan Специалитет berdurasi 5-6 tahun (program profesi tradisional Rusia)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Специалитет — традиционная форма российского высшего образования длительностью 5–6 лет."
      },
      {
        "id": "q-ru-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa tugas dari dekanat fakultas (деканат)?",
        "options": [
          "Mengurus administrasi akademik mahasiswa, jadwal, presensi, dan surat keterangan resmi",
          "Menjual makanan di kantin",
          "Memperbaiki jaringan pipa",
          "Mengatur satpam gerbang"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Деканат руководит учебной и административной работой факультета."
      },
      {
        "id": "q-ru-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti kata 'Отчисление' dalam peraturan kampus Rusia?",
        "options": [
          "Penerimaan beasiswa",
          "Pemberhentian status mahasiswa (Drop Out / Pemecatan)",
          "Kenaikan semester",
          "Pemberian penghargaan riset"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Отчисление — исключение студента из списков учащихся университета."
      },
      {
        "id": "q-ru-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah nama tes kemahiran bahasa Rusia internasional yang setara dengan TOEFL/IELTS?",
        "options": [
          "HSK",
          "JLPT",
          "ТРКИ (TORFL - Тест по русскому языку как иностранному)",
          "DELE"
        ],
        "correctAnswerIndex": 2,
        "explanation": "ТРКИ — официальный международный сертификационный экзамен по русскому языку."
      },
      {
        "id": "q-ru-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi kartu 'Тройка' bagi mahasiswa di kota Moskow?",
        "options": [
          "Kartu diskon restoran mahal",
          "Tiket masuk museum gratis setiap hari",
          "Kartu izin belanja",
          "Kartu transportasi umum bersubsidi (Metro, bus, trem) dengan tarif mahasiswa hemat"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Студенческая карта позволяет пользоваться общественным транспортом Москвы со значительной скидкой."
      },
      {
        "id": "q-ru-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Istilah 'Автореферат' dalam disertasi Rusia berarti:",
        "options": [
          "Ringkasan eksekutif penelitian disertasi yang dicetak dan dipublikasikan luas sebelum sidang",
          "Buku catatan pribadi peneliti",
          "Buku panduan mengemudi mobil",
          "Daftar hadir dewan juri"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Автореферат диссертации кратко излагает основные положения и выводы научного исследования."
      },
      {
        "id": "q-ru-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa sakit saat masa ujian сессия, apa yang harus dilakukan?",
        "options": [
          "Mengabaikan ujian dan pasrah drop out",
          "Menyerahkan surat keterangan dokter resmi dari poliklinik mahasiswa ke dekanat untuk memperpanjang sesi ujian",
          "Meminta teman menggantikan ujian",
          "Membuat surat izin palsu"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Официальная медицинская справка позволяет продлить экзаменационную сессию по уважительной причине."
      }
    ]
  },
  "ru-full": {
    "id": "test-ru-full",
    "title": "Simulasi Ujian Masuk Lengkap Kuliah Rusia (50 Soal Standar Ujian)",
    "description": "Simulasi ujian komprehensif berstandar masuk universitas terkemuka di Rusia (90 Menit). Mencakup seluruh 5 aspek kesiapan akademik dan bahasa.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ru-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что означает термин 'курсовая работа' в российском университете?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Kartu ujian masuk",
          "Makalah / karya ilmiah terstruktur per semester",
          "Jadwal libur musim dingin",
          "Kuitansi asrama"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Курсовая работа adalah karya ilmiah wajib yang disusun mahasiswa di setiap tahun akademik."
      },
      {
        "id": "q-ru-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Выберите правильный предлог: 'Студент успешно сдал экзамен _____ специальности.'",
        "audioVoiceLang": "ru-RU",
        "options": [
          "к — menuju / kepada",
          "в — di dalam / ke",
          "по (по специальности) — pada / di bidang jurusan (preposisi baku setelah экзамен)",
          "от — dari / milik"
        ],
        "correctAnswerIndex": 2,
        "explanation": "В русском языке используется предлог 'по' с дательным падежом: 'экзамен по специальности'."
      },
      {
        "id": "q-ru-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Как принято уважительно обращаться к преподавателю в российских вузах?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Только по фамилии — Hanya menyebut nama keluarga saja (tidak sopan)",
          "Эй, учитель — Hei, guru (kasar dan tidak baku di universitas)",
          "По имени и слову 'друг' — Menyebut nama depan dan kata 'teman'",
          "По имени и отчеству (например: Иван Иванович) — Menyebut nama depan dan patronimik (sapaan hormat baku di Rusia)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Обращение по имени и отчеству — ключевая норма академического этикета в России."
      },
      {
        "id": "q-ru-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Какой документ подтверждает статус студента и право на льготный проезд?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Студенческий билет — Kartu Tanda Mahasiswa (KTM) resmi untuk akses kampus & diskon transportasi",
          "Паспорт гражданина — Paspor warga negara",
          "Диплом бакалавра — Ijazah kelulusan sarjana",
          "Медицинская страховка — Polis asuransi kesehatan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Студенческий билет подтверждает статус студента университета."
      },
      {
        "id": "q-ru-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что такое 'зачётная книжка' (зачётка)?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Buku catatan harian kuliah",
          "Buku nilai hasil ujian dan зачёт mahasiswa",
          "Daftar pinjaman buku perpustakaan",
          "Katalog mata kuliah"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Зачётная книжка содержит официальные записи обо всех сданных зачётах и экзаменах."
      },
      {
        "id": "q-ru-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "'Научный руководитель' выполняет какую функцию в университете?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Petugas tata usaha pendaftaran",
          "Pengawas kebersihan kampus",
          "Dosen pembimbing skripsi, tesis, dan riset akademik",
          "Instruktur olahraga"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Научный руководитель курирует написание дипломной работы или диссертации."
      },
      {
        "id": "q-ru-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что такое 'коллоквиум' в учебном процессе российского вуза?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Pesta tari tahun baru",
          "Perjalanan wisata kampus",
          "Latihan paduan suara",
          "Diskusi ilmiah / sesi tanya jawab evaluasi pemahaman materi"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Коллоквиум — это форма проверки и закрепления знаний студентов в виде научной беседы."
      },
      {
        "id": "q-ru-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Слово 'стипендия' означает:",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Beasiswa / tunjangan bulanan mahasiswa",
          "Uang denda keterlambatan buku",
          "Biaya cetak makalah",
          "Tiket kereta antar-kota"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Стипендия — денежная выплата, назначаемая студентам для поддержки во время обучения."
      },
      {
        "id": "q-ru-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Перед кем проходит официальная защита дипломной работы выпускника?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Перед комендантом общежития — Di hadapan pengelola asrama",
          "Перед Государственной экзаменационной комиссией (ГЭК) — Di hadapan Komisi Ujian Negara (dewan penguji resmi)",
          "Перед однокурсниками в кафе — Di hadapan teman sekelas di kafe",
          "Перед сотрудниками библиотеки — Di hadapan petugas perpustakaan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Защита дипломного проекта проходит публично перед членами ГЭК."
      },
      {
        "id": "q-ru-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что такое 'подфак' (подготовительный факультет) для иностранных студентов?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Fakultas khusus ilmu kedokteran",
          "Lembaga penerbitan buku kampus",
          "Fakultas persiapan bahasa Rusia dan matrikulasi pra-kuliah",
          "Organisasi alumni universitas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Подготовительный факультет обучает иностранцев русскому языку перед поступлением на первый курс."
      },
      {
        "id": "q-ru-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Научная новизна исследования заключается в разработке инновационной математической модели.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Kebaruan ilmiah dari riset ini terletak pada pengembangan model matematika yang inovatif.",
        "keywords": [
          "kebaruan",
          "ilmiah",
          "riset",
          "terletak"
        ],
        "explanation": "Kalimat akademik pola Penulisan Abstrak & Tinjauan Pustaka Ilmiah (Научный стиль): 'Научная новизна исследования заключается в разработке инновационной математической модели.' diterjemahkan secara akurat menjadi 'Kebaruan ilmiah dari riset ini terletak pada pengembangan model matematika yang inovatif.'."
      },
      {
        "id": "q-ru-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Это решение вряд ли можно признать оптимальным в данных сложных обстоятельствах.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Keputusan ini tampaknya sulit diakui sebagai langkah optimal dalam situasi rumit saat ini.",
        "keywords": [
          "keputusan",
          "tampaknya",
          "sulit",
          "diakui"
        ],
        "explanation": "Kalimat akademik pola Partikel Penegas & Nuansa Disparitas Wacana (Ведь, Же, То, -таки): 'Это решение вряд ли можно признать оптимальным в данных сложных обстоятельствах.' diterjemahkan secara akurat menjadi 'Keputusan ini tampaknya sulit diakui sebagai langkah optimal dalam situasi rumit saat ini.'."
      },
      {
        "id": "q-ru-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "При всём уважении к позиции уважаемого оппонента, позвольте не согласиться с этим выводом.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Dengan segala hormat terhadap posisi penguji yang terhormat, izinkan saya tidak sependapat dengan simpulan ini.",
        "keywords": [
          "segala",
          "hormat",
          "terhadap",
          "posisi"
        ],
        "explanation": "Kalimat akademik pola Retorika Debat & Sanggahan Akademik Berbobot: 'При всём уважении к позиции уважаемого оппонента, позвольте не согласиться с этим выводом.' diterjemahkan secara akurat menjadi 'Dengan segala hormat terhadap posisi penguji yang terhormat, izinkan saya tidak sependapat dengan simpulan ini.'."
      },
      {
        "id": "q-ru-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Автор детально анализирует и всесторонне освещает изучаемое социальное явление.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Penulis menganalisis secara detail dan menguraikan secara menyeluruh fenomena sosial yang dikaji.",
        "keywords": [
          "penulis",
          "menganalisis",
          "secara",
          "detail"
        ],
        "explanation": "Kalimat akademik pola Analisis Semantik & Stilistika Leksikal Lanjutan: 'Автор детально анализирует и всесторонне освещает изучаемое социальное явление.' diterjemahkan secara akurat menjadi 'Penulis menganalisis secara detail dan menguraikan secara menyeluruh fenomena sosial yang dikaji.'."
      },
      {
        "id": "q-ru-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Принимая во внимание комплексный характер проблемы, исследование опирается на междисциплинарный подход.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Mengingat sifat permasalahan yang kompleks, penelitian ini bertumpu pada pendekatan interdisipliner.",
        "keywords": [
          "mengingat",
          "sifat",
          "permasalahan",
          "kompleks"
        ],
        "explanation": "Kalimat akademik pola Kalimat Majemuk Bertingkat Kompleks (Многокомпонентные периоды): 'Принимая во внимание комплексный характер проблемы, исследование опирается на междисциплинарный подход.' diterjemahkan secara akurat menjadi 'Mengingat sifat permasalahan yang kompleks, penelitian ini bertumpu pada pendekatan interdisipliner.'."
      },
      {
        "id": "q-ru-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "В рамках современной исследовательской парадигмы данный феномен рассматривается как когнитивный конструкт.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Dalam kerangka paradigma riset kontemporer, fenomena ini dipandang sebagai konstruk kognitif.",
        "keywords": [
          "kerangka",
          "paradigma",
          "riset",
          "kontemporer"
        ],
        "explanation": "Kalimat akademik pola Metafora Konseptual & Terminologi Epistemologis: 'В рамках современной исследовательской парадигмы данный феномен рассматривается как когнитивный конструкт.' diterjemahkan secara akurat menjadi 'Dalam kerangka paradigma riset kontemporer, fenomena ini dipandang sebagai konstruk kognitif.'."
      },
      {
        "id": "q-ru-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Высокие Договаривающиеся Стороны обязуются добросовестно выполнять положения настоящего соглашения.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Para Pihak Tinggi yang Berjanji berkewajiban melaksanakan ketentuan perjanjian ini dengan iktikad baik.",
        "keywords": [
          "pihak",
          "tinggi",
          "berjanji",
          "berkewajiban"
        ],
        "explanation": "Kalimat akademik pola Bahasa Regulasi, Hukum & Diplomasi Federasi Rusia: 'Высокие Договаривающиеся Стороны обязуются добросовестно выполнять положения настоящего соглашения.' diterjemahkan secara akurat menjadi 'Para Pihak Tinggi yang Berjanji berkewajiban melaksanakan ketentuan perjanjian ini dengan iktikad baik.'."
      },
      {
        "id": "q-ru-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "В романе Достоевского прослеживается глубокий экзистенциальный конфликт личности и общества.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Dalam novel Dostoevsky terjejak konflik eksistensial yang mendalam antara individu dan masyarakat.",
        "keywords": [
          "novel",
          "dostoevsky",
          "terjejak",
          "konflik"
        ],
        "explanation": "Kalimat akademik pola Analisis Teks Sastra Klasik & Hermeneutika Kritis: 'В романе Достоевского прослеживается глубокий экзистенциальный конфликт личности и общества.' diterjemahkan secara akurat menjadi 'Dalam novel Dostoevsky terjejak konflik eksistensial yang mendalam antara individu dan masyarakat.'."
      },
      {
        "id": "q-ru-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Источниковедческая база диссертации включает ранее не опубликованные архивные рукописи.",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Basis kajian sumber disertasi ini mencakup manuskrip arsip yang belum pernah diterbitkan sebelumnya.",
        "keywords": [
          "basis",
          "kajian",
          "sumber",
          "disertasi"
        ],
        "explanation": "Kalimat akademik pola Kritik Sumber & Metodologi Penelitian Bidang Humaniora: 'Источниковедческая база диссертации включает ранее не опубликованные архивные рукописи.' diterjemahkan secara akurat menjadi 'Basis kajian sumber disertasi ini mencakup manuskrip arsip yang belum pernah diterbitkan sebelumnya.'."
      },
      {
        "id": "q-ru-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Уважаемый председатель и члены диссертационного совета, на ваше рассмотрение выносится диссертация!",
        "audioVoiceLang": "ru-RU",
        "sampleAnswer": "Ketua dan anggota dewan disertasi yang terhormat, ke hadapan Anda disajikan penelitian disertasi ini!",
        "keywords": [
          "ketua",
          "anggota",
          "dewan",
          "disertasi"
        ],
        "explanation": "Kalimat akademik pola Sintesis Tesis & Pertahanan Disertasi di Dewan Ilmiah: 'Уважаемый председатель и члены диссертационного совета, на ваше рассмотрение выносится диссертация!' diterjemahkan secara akurat menjadi 'Ketua dan anggota dewan disertasi yang terhormat, ke hadapan Anda disajikan penelitian disertasi ini!'."
      },
      {
        "id": "q-ru-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat resmi konsultasi dosen: 'Saya ingin mendaftar janji konsultasi dengan profesor'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "по курсовой работе",
          "к профессору",
          "записаться на консультацию",
          "Я хочу"
        ],
        "correctOrder": [
          "Я хочу",
          "записаться на консультацию",
          "к профессору",
          "по курсовой работе"
        ],
        "explanation": "Urutan baku: Subjek/Keinginan (Я хочу) + Frasa verba (записаться на консультацию) + Dosen (к профессору) + Topik (по курсовой работе).",
        "targetSentence": "Я хочу записаться на консультацию к профессору по курсовой работе"
      },
      {
        "id": "q-ru-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat imigrasi: 'Mahasiswa asing wajib memperpanjang registrasi tepat waktu'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "миграционный учёт",
          "Иностранные студенты",
          "обязаны вовремя продлевать"
        ],
        "correctOrder": [
          "Иностранные студенты",
          "обязаны вовремя продлевать",
          "миграционный учёт"
        ],
        "explanation": "Urutan regulasi: Subjek (Иностранные студенты) + Predikat kewajiban (обязаны вовремя продлевать) + Objek (миграционный учёт).",
        "targetSentence": "Иностранные студенты обязаны вовремя продлевать миграционный учёт"
      },
      {
        "id": "q-ru-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat penulisan ilmiah: 'Daftar pustaka disusun sesuai aturan standar nasional'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "с государственным стандартом",
          "оформляется в соответствии",
          "Список литературы"
        ],
        "correctOrder": [
          "Список литературы",
          "оформляется в соответствии",
          "с государственным стандартом"
        ],
        "explanation": "Urutan formal: Subjek (Список литературы) + Verba pasif (оформляется в соответствии) + Acuan baku (с государственным стандартом).",
        "targetSentence": "Список литературы оформляется в соответствии с государственным стандартом"
      },
      {
        "id": "q-ru-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Di perpustakaan kampus tersedia pangkalan data ilmiah internasional'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "научные базы данных",
          "В университетской библиотеке",
          "доступны международные"
        ],
        "correctOrder": [
          "В университетской библиотеке",
          "доступны международные",
          "научные базы данных"
        ],
        "explanation": "Urutan wajar: Keterangan tempat (В университетской библиотеке) + Predikatif (доступны) + Subjek objek (международные научные базы данных).",
        "targetSentence": "В университетской библиотеке доступны международные научные базы данных"
      },
      {
        "id": "q-ru-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang kelulusan: 'Sidang promosi tesis magister akan diselenggarakan bulan depan'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "месяце перед комиссией",
          "состоится в следующем",
          "Защита магистерской диссертации"
        ],
        "correctOrder": [
          "Защита магистерской диссертации",
          "состоится в следующем",
          "месяце перед комиссией"
        ],
        "explanation": "Urutan agenda: Topik (Защита магистерской диссертации) + Waktu tempat (состоится в следующем месяце перед комиссией).",
        "targetSentence": "Защита магистерской диссертации состоится в следующем месяце перед комиссией"
      },
      {
        "id": "q-ru-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Научный руководитель (nauchnyy rukovoditel':",
        "targetSentence": "Научный руководитель (nauchnyy rukovoditel",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Ruang kuliah / Ruang kelas",
          "Dosen Pembimbing Riset / Skripsi",
          "Asrama mahasiswa kampus",
          "Magang / Praktik kerja lapangan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Научный руководитель (nauchnyy rukovoditel')' adalah padanan untuk 'Dosen Pembimbing Riset / Skripsi' di universitas Rusia."
      },
      {
        "id": "q-ru-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Экзаменационная сессия (sessiya)':",
        "targetSentence": "Экзаменационная сессия",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Jadwal perkuliahan",
          "Departemen / Program Studi",
          "Masa Ujian Akhir Semester",
          "Ijazah Predikat Cum Laude (Ijazah Merah)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Экзаменационная сессия (sessiya)' adalah padanan untuk 'Masa Ujian Akhir Semester' di universitas Rusia."
      },
      {
        "id": "q-ru-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Аудитория (auditoriya)':",
        "targetSentence": "Аудитория",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Asrama mahasiswa kampus",
          "Kantor Dekanat Fakultas",
          "Cuti perkuliahan akademik",
          "Ruang kuliah / Ruang kelas"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Аудитория (auditoriya)' adalah padanan untuk 'Ruang kuliah / Ruang kelas' di universitas Rusia."
      },
      {
        "id": "q-ru-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Расписание занятий (raspisaniye)':",
        "targetSentence": "Расписание занятий",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Jadwal perkuliahan",
          "Departemen / Program Studi",
          "Magang / Praktik kerja lapangan",
          "Dosen Pembimbing Riset / Skripsi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Расписание занятий (raspisaniye)' adalah padanan untuk 'Jadwal perkuliahan' di universitas Rusia."
      },
      {
        "id": "q-ru-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Общежитие (obshchezhitie)':",
        "targetSentence": "Общежитие",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Kantor Dekanat Fakultas",
          "Asrama mahasiswa kampus",
          "Ijazah Predikat Cum Laude (Ijazah Merah)",
          "Masa Ujian Akhir Semester"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Общежитие (obshchezhitie)' adalah padanan untuk 'Asrama mahasiswa kampus' di universitas Rusia."
      },
      {
        "id": "q-ru-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Кафедра (kafedra)':",
        "targetSentence": "Кафедра",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Magang / Praktik kerja lapangan",
          "Cuti perkuliahan akademik",
          "Departemen / Program Studi",
          "Ruang kuliah / Ruang kelas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Кафедра (kafedra)' adalah padanan untuk 'Departemen / Program Studi' di universitas Rusia."
      },
      {
        "id": "q-ru-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Деканат (dekanat)':",
        "targetSentence": "Деканат",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Ijazah Predikat Cum Laude (Ijazah Merah)",
          "Dosen Pembimbing Riset / Skripsi",
          "Jadwal perkuliahan",
          "Kantor Dekanat Fakultas"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Деканат (dekanat)' adalah padanan untuk 'Kantor Dekanat Fakultas' di universitas Rusia."
      },
      {
        "id": "q-ru-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Стажировка / практика (stazhirovka)':",
        "targetSentence": "Стажировка / практика",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Magang / Praktik kerja lapangan",
          "Cuti perkuliahan akademik",
          "Masa Ujian Akhir Semester",
          "Asrama mahasiswa kampus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Стажировка / практика (stazhirovka)' adalah padanan untuk 'Magang / Praktik kerja lapangan' di universitas Rusia."
      },
      {
        "id": "q-ru-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Диплом с отличием (krasnyy diplom)':",
        "targetSentence": "Диплом с отличием",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Dosen Pembimbing Riset / Skripsi",
          "Ijazah Predikat Cum Laude (Ijazah Merah)",
          "Ruang kuliah / Ruang kelas",
          "Departemen / Program Studi"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Диплом с отличием (krasnyy diplom)' adalah padanan untuk 'Ijazah Predikat Cum Laude (Ijazah Merah)' di universitas Rusia."
      },
      {
        "id": "q-ru-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Академический отпуск (akademicheskiy otpusk)':",
        "targetSentence": "Академический отпуск",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Masa Ujian Akhir Semester",
          "Jadwal perkuliahan",
          "Cuti perkuliahan akademik",
          "Kantor Dekanat Fakultas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Академический отпуск (akademicheskiy otpusk)' adalah padanan untuk 'Cuti perkuliahan akademik' di universitas Rusia."
      },
      {
        "id": "q-ru-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Sistem penilaian universitas di Rusia menggunakan skala berapa?",
        "options": [
          "Skala huruf A sampai F",
          "Skala 0 sampai 100",
          "Skala bintang 1 sampai 10",
          "Skala 1 sampai 5 (5=Отлично, 4=Хорошо, 3=Удовлетворительно, 2=Неудовлетворительно)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "В российских вузах традиционно используется пятибалльная система оценивания."
      },
      {
        "id": "q-ru-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas waktu lapor migrasi (регистрация) bagi mahasiswa asing setibanya di asrama Rusia?",
        "options": [
          "Dalam waktu 7 hari kerja setelah kedatangan di tempat tinggal baru",
          "3 bulan setelah tiba",
          "Boleh kapan saja sebelum lulus",
          "Tidak perlu mendaftar sama sekali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Иностранный гражданин обязан встать на миграционный учёт в течение 7 рабочих дней."
      },
      {
        "id": "q-ru-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Красный диплом' (Ijazah Merah) di universitas Rusia?",
        "options": [
          "Ijazah untuk mahasiswa yang drop out",
          "Ijazah kelulusan berpredikat Cum Laude (minimal 75% nilai 5 dan tanpa nilai 3)",
          "Surat peringatan disiplin kampus",
          "Kartu anggota partai"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Красный диплом — диплом с отличием, свидетельствующий о наивысших академических успехах."
      },
      {
        "id": "q-ru-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan kompetisi 'Open Doors: Russian Scholarship Project'?",
        "options": [
          "Pameran busana kampus",
          "Lomba lari maraton antar-kampus",
          "Olimpiade internasional berhadiah beasiswa penuh S2/S3 di universitas top Rusia",
          "Pameran kuliner mahasiswa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Олимпиада Open Doors позволяет иностранным абитуриентам поступить в магистратуру и аспирантуру без экзаменов."
      },
      {
        "id": "q-ru-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana pakaian yang pantas saat menghadiri ujian lisan (устный экзамен) bersama profesor di Rusia?",
        "options": [
          "Baju kaos santai dan celana pendek",
          "Pakaian olahraga gym",
          "Pakaian renang",
          "Pakaian formal rapi (kemeja/blazer), sopan dan profesional"
        ],
        "correctAnswerIndex": 3,
        "explanation": "На экзамены в российских университетах принято приходить в строгой деловой одежде."
      },
      {
        "id": "q-ru-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa singkatan 'ГОСТ' yang sering dijadikan acuan format penulisan makalah di Rusia?",
        "options": [
          "Государственный стандарт (Standar Nasional Negara)",
          "Городской отдел спорта",
          "Главная организация студентов",
          "Государственный оперный театр"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ГОСТ — Государственный стандарт, регламентирующий правила оформления научных работ."
      },
      {
        "id": "q-ru-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kapan periode 'Зимняя сессия' (Ujian Semester Musim Dingin) umumnya berlangsung di Rusia?",
        "options": [
          "Bulan Agustus",
          "Bulan Januari",
          "Bulan Mei",
          "Bulan Oktober"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Зимняя экзаменационная сессия традиционно проходит в январе после зачётной недели в декабре."
      },
      {
        "id": "q-ru-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bolehkan mahasiswa asing pemegang visa pelajar di Rusia bekerja paruh waktu saat ini?",
        "options": [
          "Dilarang bekerja sama sekali",
          "Hanya boleh bekerja di kedutaan",
          "Boleh bekerja secara legal tanpa perlu izin kerja terpisah (work permit) di waktu luang",
          "Wajib bekerja 40 jam per minggu"
        ],
        "correctAnswerIndex": 2,
        "explanation": "С 2020 года иностранные студенты очных отделений в РФ имеют право работать в свободное от учёбы время без специального разрешения."
      },
      {
        "id": "q-ru-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa perbedaan mendasar antara 'Бакалавриат' dan 'Специалитет' di Rusia?",
        "options": [
          "Бакалавриат hanya untuk seni",
          "Специалитет adalah kursus kilat 3 bulan",
          "Tidak ada bedanya",
          "Бакалавриат berdurasi 4 tahun (sistem Bologna), sedangkan Специалитет berdurasi 5-6 tahun (program profesi tradisional Rusia)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Специалитет — традиционная форма российского высшего образования длительностью 5–6 лет."
      },
      {
        "id": "q-ru-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa tugas dari dekanat fakultas (деканат)?",
        "options": [
          "Mengurus administrasi akademik mahasiswa, jadwal, presensi, dan surat keterangan resmi",
          "Menjual makanan di kantin",
          "Memperbaiki jaringan pipa",
          "Mengatur satpam gerbang"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Деканат руководит учебной и административной работой факультета."
      },
      {
        "id": "q-ru-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti kata 'Отчисление' dalam peraturan kampus Rusia?",
        "options": [
          "Penerimaan beasiswa",
          "Pemberhentian status mahasiswa (Drop Out / Pemecatan)",
          "Kenaikan semester",
          "Pemberian penghargaan riset"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Отчисление — исключение студента из списков учащихся университета."
      },
      {
        "id": "q-ru-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah nama tes kemahiran bahasa Rusia internasional yang setara dengan TOEFL/IELTS?",
        "options": [
          "HSK",
          "JLPT",
          "ТРКИ (TORFL - Тест по русскому языку как иностранному)",
          "DELE"
        ],
        "correctAnswerIndex": 2,
        "explanation": "ТРКИ — официальный международный сертификационный экзамен по русскому языку."
      },
      {
        "id": "q-ru-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi kartu 'Тройка' bagi mahasiswa di kota Moskow?",
        "options": [
          "Kartu diskon restoran mahal",
          "Tiket masuk museum gratis setiap hari",
          "Kartu izin belanja",
          "Kartu transportasi umum bersubsidi (Metro, bus, trem) dengan tarif mahasiswa hemat"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Студенческая карта позволяет пользоваться общественным транспортом Москвы со значительной скидкой."
      },
      {
        "id": "q-ru-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Istilah 'Автореферат' dalam disertasi Rusia berarti:",
        "options": [
          "Ringkasan eksekutif penelitian disertasi yang dicetak dan dipublikasikan luas sebelum sidang",
          "Buku catatan pribadi peneliti",
          "Buku panduan mengemudi mobil",
          "Daftar hadir dewan juri"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Автореферат диссертации кратко излагает основные положения и выводы научного исследования."
      },
      {
        "id": "q-ru-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa sakit saat masa ujian сессия, apa yang harus dilakukan?",
        "options": [
          "Mengabaikan ujian dan pasrah drop out",
          "Menyerahkan surat keterangan dokter resmi dari poliklinik mahasiswa ke dekanat untuk memperpanjang sesi ujian",
          "Meminta teman menggantikan ujian",
          "Membuat surat izin palsu"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Официальная медицинская справка позволяет продлить экзаменационную сессию по уважительной причине."
      }
    ]
  }
};

export const ARABIC_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "ar-1": {
    "id": "test-ar-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Arab Saudi / Timur Tengah (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Arab Saudi / Timur Tengah.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ar-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما معنى مصطلح 'رسالة الماجستير' في السياق الأكاديمي الجامعي؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ijazah Sarjana Muda S1",
          "Kwitansi biaya kuliah",
          "Tesis Magister S2",
          "Kartu registrasi perpustakaan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "رسالة الماجستير تعني البحث العلمي المتقدم لنيل درجة الماجستير."
      },
      {
        "id": "q-ar-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "اختر حرف الجر المناسب: 'التحق الطالب الجديد _____ كلية العلوم التطبيقية.'",
        "audioVoiceLang": "ar-SA",
        "options": [
          "من — dari",
          "عن — tentang / dari",
          "حتى — hingga / sampai",
          "بـِ (بكلية) — pada / di fakultas (huruf jar yang tepat untuk fi'il التحق)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "الفعل 'التحق' يتعدى بحرف الجر الباء: 'التحق بالكلية'."
      },
      {
        "id": "q-ar-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما اللقب الأكاديمي الرسمي لمن يحمل أعلى رتبة تدريسية في الجامعة؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "الأستاذ الدكتور (البروفيسور) — Profesor Doktor (Guru Besar, jenjang akademik tertinggi)",
          "المعيد — Asisten dosen muda",
          "المحاضر — Dosen pengajar (lektor)",
          "الطالب — Mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "الأستاذ الدكتور (أ.د.) هو أعلى لقب أكاديمي جامعي."
      },
      {
        "id": "q-ar-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما هي 'الساعات المعتمدة' في النظام الجامعي الفصلي؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "ساعات الدوام اليومي — Jam kerja kantor harian",
          "الساعات المعتمدة التي تحدد العبء الدراسي — Satuan Kredit Semester (SKS) yang menentukan beban studi",
          "ساعات النوم في السكن — Jam tidur di asrama mahasiswa",
          "ساعات فتح المكتبة — Jam operasional buka perpustakaan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "الساعات المعتمدة (Credit Hours) تعبر عن الثقل الأكاديمي لكل مقرر."
      },
      {
        "id": "q-ar-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما معنى مصطلح 'السجل الأكاديمي' (كشف الدرجات)؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "جدول الرحلات الترفيهية — Jadwal perjalanan wisata rekreasi",
          "قائمة أسماء الطلاب الغائبين — Daftar nama mahasiswa yang absen",
          "كشف الدرجات الرسمي الذي يوثق المعدل التراكمي — Transkrip nilai akademik resmi yang memuat riwayat IPK",
          "دفتر استعارة الكتب — Buku catatan peminjaman perpustakaan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "السجل الأكاديمي (Transcript) يوثق جميع الدرجات والمعدلات التراكمية."
      },
      {
        "id": "q-ar-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "'المشرف الأكاديمي' هو الشخص الذي يتولى:",
        "audioVoiceLang": "ar-SA",
        "options": [
          "إصلاح الأجهزة في المختبر — Memperbaiki peralatan rusak di laboratorium",
          "تنظيم حركة المرور بالجامعة — Mengatur lalu lintas kendaraan di kampus",
          "تقديم الوجبات في المطعم الجامعي — Menyajikan makanan di kantin universitas",
          "إرشاد الطالب في إعداد خطة البحث ورسالته العلمية — Membimbing mahasiswa dalam menyusun proposal riset dan tesis ilmiahnya"
        ],
        "correctAnswerIndex": 3,
        "explanation": "المشرف الأكاديمي يقود ويوجه الطالب علمياً حتى مناقشة رسالته."
      },
      {
        "id": "q-ar-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما معنى مصطلح 'المقرر الاختياري'؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "المقرر الذي يختاره الطالب وفق اهتمامه البحثي — Mata kuliah pilihan yang diambil sesuai minat studi",
          "المقرر الإجباري العام — Mata kuliah wajib umum universitas",
          "امتحان القبول النهائي — Ujian saringan masuk akhir",
          "النشاط الرياضي الإلزامي — Kegiatan olahraga wajib"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المقرر الاختياري (Elective Course) يختاره الطالب من قائمة محددة."
      },
      {
        "id": "q-ar-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "عبارة 'منحة دراسية كاملة' تعني في الجامعات السعودية:",
        "audioVoiceLang": "ar-SA",
        "options": [
          "تخفيض 10% من الرسوم فقط — Hanya potongan biaya kuliah sebesar 10%",
          "تغطية الرسوم الدراسية، والسكن، وتذكرة السفر، ومكافأة شهرية — Mencakup biaya kuliah, asrama, tiket pesawat, dan tunjangan bulanan",
          "إقامة في فندق خارجي — Menginap di hotel luar kampus",
          "الحصول على كتب مجانية فقط — Hanya mendapatkan buku cetak gratis"
        ],
        "correctAnswerIndex": 1,
        "explanation": "المنحة الكاملة تغطي كافة تكاليف الدراسة والمعيشة والمكافأة الشهرية."
      },
      {
        "id": "q-ar-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "أين تجري عادةً 'مناقشة الرسالة العلمية' العلنية؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "في مكتبة الحي — Di perpustakaan lingkungan perumahan",
          "عبر الهاتف المحمول — Melalui panggilan telepon genggam",
          "في قاعة المناقشات الرسمية أمام لجنة التحكيم — Di aula sidang resmi di hadapan dewan penguji",
          "في حديقة الجامعة — Di taman terbuka universitas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "تتم مناقشة الأطروحة علناً في قاعة مخصصة بحضور لجنة المناقشة والحكم."
      },
      {
        "id": "q-ar-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما هو 'معهد تعليم اللغة العربية لغير الناطقين بها'؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "نادي رياضي صيفي — Klub olahraga musim panas",
          "مدرسة لتعليم قيادة السيارات — Sekolah kursus mengemudi mobil",
          "مكتب لتوزيع المنح — Kantor pembagian dana bantuan",
          "معهد تأهيلي لتعليم الفصحى قبل الالتحاق بالكليات المتخصصة — Lembaga persiapan bahasa Arab Fusha sebelum masuk fakultas jurusan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "المعهد يؤهل الطلاب الأجانب لغوياً وثقافياً للدراسة الأكاديمية."
      }
    ]
  },
  "ar-2": {
    "id": "test-ar-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Arab Saudi / Timur Tengah.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ar-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.",
        "keywords": [
          "ulama",
          "menyampaikan",
          "perkataan",
          "tepat"
        ],
        "explanation": "Kalimat akademik pola Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال): 'قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ' diterjemahkan secara akurat menjadi 'Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.'."
      },
      {
        "id": "q-ar-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!",
        "keywords": [
          "betapa",
          "indahnya",
          "bahasa",
          "arab"
        ],
        "explanation": "Kalimat akademik pola Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم): 'مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا' diterjemahkan secara akurat menjadi 'Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!'."
      },
      {
        "id": "q-ar-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Buku itu telah saya baca seluruhnya dengan penuh perhatian.",
        "keywords": [
          "buku",
          "baca",
          "seluruhnya",
          "penuh"
        ],
        "explanation": "Kalimat akademik pola Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع): 'الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ' diterjemahkan secara akurat menjadi 'Buku itu telah saya baca seluruhnya dengan penuh perhatian.'."
      },
      {
        "id": "q-ar-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.",
        "keywords": [
          "sesungguhnya",
          "ilmu",
          "pengetahuan",
          "benar"
        ],
        "explanation": "Kalimat akademik pola Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني): 'إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ' diterjemahkan secara akurat menjadi 'Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.'."
      },
      {
        "id": "q-ar-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.",
        "keywords": [
          "seorang",
          "alim",
          "bagaikan",
          "samudra"
        ],
        "explanation": "Kalimat akademik pola Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان): 'الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ' diterjemahkan secara akurat menjadi 'Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.'."
      },
      {
        "id": "q-ar-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.",
        "keywords": [
          "ibnu",
          "khaldun",
          "menyebutkan",
          "muqaddimah"
        ],
        "explanation": "Kalimat akademik pola Wacana Akademik dan Sitasi Kitab Turats (النص التراثي): 'ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ' diterjemahkan secara akurat menjadi 'Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.'."
      },
      {
        "id": "q-ar-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.",
        "keywords": [
          "rumusan",
          "masalah",
          "studi",
          "terletak"
        ],
        "explanation": "Kalimat akademik pola Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة): 'تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ' diterjemahkan secara akurat menjadi 'Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.'."
      },
      {
        "id": "q-ar-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.",
        "keywords": [
          "samar",
          "lagi",
          "bagi",
          "keluasan"
        ],
        "explanation": "Kalimat akademik pola Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة): 'لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ' diterjemahkan secara akurat menjadi 'Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.'."
      },
      {
        "id": "q-ar-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).",
        "keywords": [
          "penelitian",
          "hasil",
          "hasilnya",
          "mengagumkan"
        ],
        "explanation": "Kalimat akademik pola Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل): 'هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)' diterjemahkan secara akurat menjadi 'Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).'."
      },
      {
        "id": "q-ar-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.",
        "keywords": [
          "penutup",
          "peneliti",
          "merekomendasikan",
          "pengintegrasian"
        ],
        "explanation": "Kalimat akademik pola Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي): 'وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ' diterjemahkan secara akurat menjadi 'Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.'."
      }
    ]
  },
  "ar-3": {
    "id": "test-ar-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis Kalimat Arab Saudi / Timur Tengah (5 Soal Sambung Kata)",
    "description": "Uji ketelitian menyusun tata urutan klausa regulasi kampus, registrasi mata kuliah, dan korespondensi resmi di Arab Saudi / Timur Tengah.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ar-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan registrasi: 'Saya ingin mendaftar mata kuliah semester ini'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "لهذا الفصل الدراسي",
          "أود تسجيل",
          "المقررات الدراسية"
        ],
        "correctOrder": [
          "أود تسجيل",
          "المقررات الدراسية",
          "لهذا الفصل الدراسي"
        ],
        "explanation": "Urutan formal: Keinginan sopan (أود تسجيل) + Objek (المقررات الدراسية) + Waktu (لهذا الفصل الدراسي).",
        "targetSentence": "أود تسجيل المقررات الدراسية لهذا الفصل الدراسي"
      },
      {
        "id": "q-ar-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat etika tugas: 'Mahasiswa wajib mematuhi batas waktu pengumpulan tugas riset'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "البحوث العلمية",
          "الالتزام بمواعيد تسليم",
          "يجب على الطلاب"
        ],
        "correctOrder": [
          "يجب على الطلاب",
          "الالتزام بمواعيد تسليم",
          "البحوث العلمية"
        ],
        "explanation": "Urutan kewajiban: Subjek kewajiban (يجب على الطلاب) + Verba masdar (الالتزام بمواعيد تسليم) + Objek (البحوث العلمية).",
        "targetSentence": "يجب على الطلاب الالتزام بمواعيد تسليم البحوث العلمية"
      },
      {
        "id": "q-ar-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Saya mendapatkan beasiswa penuh dari universitas'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "من الجامعة",
          "حصلت على",
          "منحة دراسية كاملة"
        ],
        "correctOrder": [
          "حصلت على",
          "منحة دراسية كاملة",
          "من الجامعة"
        ],
        "explanation": "Urutan: Fi'il & Fa'il (حصلت على) + Objek (منحة دراسية كاملة) + Asal sumber (من الجامعة).",
        "targetSentence": "حصلت على منحة دراسية كاملة من الجامعة"
      },
      {
        "id": "q-ar-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang tesis: 'Sidang promosi tesis magister diselenggarakan akhir tahun'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "أمام اللجنة",
          "في نهاية العام الجامعي",
          "تنعقد مناقشة الرسالة"
        ],
        "correctOrder": [
          "تنعقد مناقشة الرسالة",
          "في نهاية العام الجامعي",
          "أمام اللجنة"
        ],
        "explanation": "Urutan: Subjek agenda (تنعقد مناقشة الرسالة) + Waktu (في نهاية العام الجامعي) + Majelis (أمام اللجنة).",
        "targetSentence": "تنعقد مناقشة الرسالة في نهاية العام الجامعي أمام اللجنة"
      },
      {
        "id": "q-ar-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan pusat menyediakan referensi ilmiah yang sangat berharga'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "للباحثين",
          "توفر المكتبة المركزية",
          "مراجع علمية قيمة"
        ],
        "correctOrder": [
          "توفر المكتبة المركزية",
          "مراجع علمية قيمة",
          "للباحثين"
        ],
        "explanation": "Urutan: Predikat & Subjek (توفر المكتبة المركزية) + Objek (مراجع علمية قيمة) + Penerima (للباحثين).",
        "targetSentence": "توفر المكتبة المركزية مراجع علمية قيمة للباحثين"
      }
    ]
  },
  "ar-4": {
    "id": "test-ar-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Arab Saudi / Timur Tengah (10 Soal Artikan)",
    "description": "Uji penguasaan glosarium akademik, peristilahan seminar ilmiah, dan sistem administrasi kampus di Arab Saudi / Timur Tengah.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ar-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'عميد الكلية (Ameed al-kulliyyah)':",
        "targetSentence": "عميد الكلية",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Indeks Prestasi Kumulatif (IPK)",
          "Asrama mahasiswa kampus",
          "Dekan Fakultas",
          "Praktik kerja lapangan / Magang klinis"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'عميد الكلية (Ameed al-kulliyyah)' adalah padanan untuk 'Dekan Fakultas'."
      },
      {
        "id": "q-ar-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'رئيس القسم (Ra':",
        "targetSentence": "رئيس القسم (Ra",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ruang kuliah / Auditorium perkuliahan",
          "Mata kuliah prasyarat umum universitas",
          "Predikat Kehormatan / Cum Laude",
          "Ketua Jurusan / Departemen"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'رئيس القسم (Ra'ees al-qism)' adalah padanan untuk 'Ketua Jurusan / Departemen'."
      },
      {
        "id": "q-ar-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'المعدل التراكمي (Al-Mu':",
        "targetSentence": "المعدل التراكمي (Al-Mu",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Indeks Prestasi Kumulatif (IPK)",
          "Asrama mahasiswa kampus",
          "Upacara wisuda kelulusan",
          "Kartu Tanda Mahasiswa (KTM)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'المعدل التراكمي (Al-Mu'addal at-tarakumi)' adalah padanan untuk 'Indeks Prestasi Kumulatif (IPK)'."
      },
      {
        "id": "q-ar-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'قاعة المحاضرات (Qaa':",
        "targetSentence": "قاعة المحاضرات (Qaa",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mata kuliah prasyarat umum universitas",
          "Ruang kuliah / Auditorium perkuliahan",
          "Praktik kerja lapangan / Magang klinis",
          "Dekan Fakultas"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'قاعة المحاضرات (Qaa'at al-muhaadarat)' adalah padanan untuk 'Ruang kuliah / Auditorium perkuliahan'."
      },
      {
        "id": "q-ar-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'السكن الجامعي (As-Sakan al-jaami':",
        "targetSentence": "السكن الجامعي (As-Sakan al-jaami",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Upacara wisuda kelulusan",
          "Predikat Kehormatan / Cum Laude",
          "Asrama mahasiswa kampus",
          "Ketua Jurusan / Departemen"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'السكن الجامعي (As-Sakan al-jaami'i)' adalah padanan untuk 'Asrama mahasiswa kampus'."
      },
      {
        "id": "q-ar-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'متطلب جامعي (Mutatallab jaami':",
        "targetSentence": "متطلب جامعي (Mutatallab jaami",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Praktik kerja lapangan / Magang klinis",
          "Kartu Tanda Mahasiswa (KTM)",
          "Indeks Prestasi Kumulatif (IPK)",
          "Mata kuliah prasyarat umum universitas"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'متطلب جامعي (Mutatallab jaami'i)' adalah padanan untuk 'Mata kuliah prasyarat umum universitas'."
      },
      {
        "id": "q-ar-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'حفل التخرج (Hafl at-takharrruj)':",
        "targetSentence": "حفل التخرج",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Upacara wisuda kelulusan",
          "Predikat Kehormatan / Cum Laude",
          "Dekan Fakultas",
          "Ruang kuliah / Auditorium perkuliahan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'حفل التخرج (Hafl at-takharrruj)' adalah padanan untuk 'Upacara wisuda kelulusan'."
      },
      {
        "id": "q-ar-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'تدريب ميداني (Tadreeb maydaani)':",
        "targetSentence": "تدريب ميداني",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kartu Tanda Mahasiswa (KTM)",
          "Praktik kerja lapangan / Magang klinis",
          "Ketua Jurusan / Departemen",
          "Asrama mahasiswa kampus"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'تدريب ميداني (Tadreeb maydaani)' adalah padanan untuk 'Praktik kerja lapangan / Magang klinis'."
      },
      {
        "id": "q-ar-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'مرتبة الشرف (Martabat ash-sharaf)':",
        "targetSentence": "مرتبة الشرف",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Dekan Fakultas",
          "Indeks Prestasi Kumulatif (IPK)",
          "Predikat Kehormatan / Cum Laude",
          "Mata kuliah prasyarat umum universitas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'مرتبة الشرف (Martabat ash-sharaf)' adalah padanan untuk 'Predikat Kehormatan / Cum Laude'."
      },
      {
        "id": "q-ar-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'بطاقة الطالب الجامعية (Bitaaqat at-taalib)':",
        "targetSentence": "بطاقة الطالب الجامعية",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ketua Jurusan / Departemen",
          "Ruang kuliah / Auditorium perkuliahan",
          "Upacara wisuda kelulusan",
          "Kartu Tanda Mahasiswa (KTM)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'بطاقة الطالب الجامعية (Bitaaqat at-taalib)' adalah padanan untuk 'Kartu Tanda Mahasiswa (KTM)'."
      }
    ]
  },
  "ar-5": {
    "id": "test-ar-5",
    "title": "Bagian 5: Wacana Silabus & Analisis Kasus Kampus Arab Saudi / Timur Tengah (15 Soal Analisis Bebas)",
    "description": "Uji kesiapan komprehensif menghadapi perkuliahan nyata, etika laboratorium, dan dinamika mahasiswa internasional di Arab Saudi / Timur Tengah.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ar-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Sistem penilaian IPK di sebagian besar universitas Arab Saudi (seperti KSU dan KAU) menggunakan skala berapa?",
        "options": [
          "Skala 5.00 (dengan nilai A+ = 5.0, A = 4.75, B+ = 4.5)",
          "Skala 4.00",
          "Skala 10.00",
          "Skala 20.00"
        ],
        "correctAnswerIndex": 0,
        "explanation": "معظم الجامعات السعودية تعتمد سلم المعدل التراكمي من 5.00 نقاط."
      },
      {
        "id": "q-ar-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa nama portal resmi terpadu dari Kementerian Pendidikan Arab Saudi untuk pendaftaran beasiswa mahasiswa internasional?",
        "options": [
          "منصة أبشر (Absher) — Portal layanan administrasi kependudukan & imigrasi Kementerian Dalam Negeri",
          "منصة ادرس في السعودية (Study in Saudi) — Portal resmi pendaftaran mahasiswa internasional Kementerian Pendidikan Saudi",
          "منصة توكلنا (Tawakkalna) — Aplikasi identitas digital & layanan kesehatan nasional",
          "منصة مدرستي (Madrasati) — Portal pembelajaran daring untuk sekolah dasar dan menengah"
        ],
        "correctAnswerIndex": 1,
        "explanation": "بوابة 'ادرس في السعودية' هي المنصة الرسمية الموحدة لاستقبال طلبات المنح للطلاب الدوليين."
      },
      {
        "id": "q-ar-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fasilitas yang umumnya diperoleh penerima beasiswa penuh (المنحة الخارجية) di Arab Saudi?",
        "options": [
          "Tiket bus saja",
          "Potongan harga kantin 10%",
          "Tiket pesawat tahunan pulang-pergi, asrama gratis, tunjangan uang saku bulanan, dan asuransi kesehatan",
          "Pinjaman berbunga"
        ],
        "correctAnswerIndex": 2,
        "explanation": "تشمل المنحة الدراسية الخارجية الكاملة تذاكر السفر والمكافأة الشهرية والسكن المجاني والرعاية الصحية."
      },
      {
        "id": "q-ar-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kriteria predikat kelulusan 'مرتبة الشرف الأولى' (First Class Honors) di Arab Saudi?",
        "options": [
          "Meraih IPK minimal 2.00",
          "Lulus paling cepat 2 tahun",
          "Menang lomba lari",
          "Meraih IPK kumulatif antara 4.75 hingga 5.00 tanpa pernah gagal dalam satu mata kuliah pun"
        ],
        "correctAnswerIndex": 3,
        "explanation": "تمنح مرتبة الشرف الأولى للطالب الحاصل على معدل تراكمي لا يقل عن 4.75 من 5.00."
      },
      {
        "id": "q-ar-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Di manakah letak universitas riset internasional terkemuka KAUST di Arab Saudi?",
        "options": [
          "Di Thuwal (dekat pesisir Laut Merah utara Jeddah)",
          "Di kota Riyadh",
          "Di kota Madinah",
          "Di kota Dammam"
        ],
        "correctAnswerIndex": 0,
        "explanation": "تقع جامعة الملك عبد الله للعلوم والتقنية (كاوست) في ثول على ساحل البحر الأحمر."
      },
      {
        "id": "q-ar-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah bahasa pengantar utama di King Fahd University of Petroleum and Minerals (KFUPM) untuk bidang sains & teknik?",
        "options": [
          "Bahasa Arab dialek lokal",
          "Bahasa Inggris penuh untuk sains, teknik, dan bisnis",
          "Bahasa Prancis",
          "Bahasa Jerman"
        ],
        "correctAnswerIndex": 1,
        "explanation": "جامعة الملك فهد للبترول والمعادن تعتمد اللغة الإنجليزية لغة تدريس أساسية للبرامج العلمية والهندسية."
      },
      {
        "id": "q-ar-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa istilah untuk izin tinggal resmi bagi mahasiswa asing di Arab Saudi?",
        "options": [
          "تأشيرة سياحة — Visa kunjungan wisata turis",
          "تأشيرة عمل تجارية — Visa kerja kunjungan bisnis",
          "إقامة طالب (Iqamah Thalib) — Kartu izin tinggal resmi pelajar asing di Arab Saudi",
          "فيزا ترانزيت — Visa singgah sementara (transit)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "الإقامة الطلابية هي الوثيقة النظامية لإثبات الهوية والإقامة القانونية بالمملكة."
      },
      {
        "id": "q-ar-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'السنة التحضيرية' (Tahun Persiapan) di universitas-universitas Saudi?",
        "options": [
          "Tahun libur bebas",
          "Tahun dinas militer",
          "Tahun magang perusahaan",
          "Tahun pertama perkuliahan yang memfokuskan pada penguatan bahasa Inggris, matematika, dan sains dasar"
        ],
        "correctAnswerIndex": 3,
        "explanation": "السنة التحضيرية تهدف إلى ردم الفجوة الأكاديمية وتهيئة الطالب للدراسة التخصصية."
      },
      {
        "id": "q-ar-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa ingin meminta dispensasi keterlambatan tugas karena sakit, apa yang harus dibawa?",
        "options": [
          "تقرير طبي معتمد من المركز الطبي الجامعي — Laporan keterangan medis resmi dari klinik universitas",
          "تذكرة سفر — Tiket perjalanan pesawat",
          "فاتورة مطعم — Struk tagihan rumah makan",
          "رسالة من صديقه — Surat pribadi dari teman"
        ],
        "correctAnswerIndex": 0,
        "explanation": "العذر الطبي المقبول يجب أن يكون صادراً أو مصدقاً من الإدارة الطبية بالجامعة."
      },
      {
        "id": "q-ar-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kata 'محاضرة' في البيئة الجامعية تعني:",
        "options": [
          "جلسة شاي — Acara minum teh santai",
          "درس أكاديمي يلقيه الأستاذ في القاعة — Perkuliahan tatap muka yang disampaikan dosen di kelas",
          "مباراة كرة قدم — Pertandingan sepak bola",
          "حفلة موسيقية — Pertunjukan konser musik"
        ],
        "correctAnswerIndex": 1,
        "explanation": "المحاضرة هي الدرس الأكاديمي الذي يلقيه أستاذ المادة على الطلاب."
      },
      {
        "id": "q-ar-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "ما هي وظيفة 'عمادة شؤون الطلاب' في الجامعات السعودية؟",
        "options": [
          "حراسة بوابات المدينة — Menjaga gerbang kota",
          "بيع الوقود — Menjual bahan bakar",
          "رعاية شؤون الطلاب، والإسكان الجامعي، والأنشطة الطلابية، والمكافآت — Mengelola layanan kemahasiswaan, asrama, kegiatan ekstrakurikuler, dan tunjangan",
          "صيانة محطات الكهرباء — Memelihara gardu listrik"
        ],
        "correctAnswerIndex": 2,
        "explanation": "عمادة شؤون الطلاب مسؤولة عن كافة الخدمات والأنشطة غير الأكاديمية الداعمة للطلاب."
      },
      {
        "id": "q-ar-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi penulisan 'الفهرس' في نهاية الرسالة العلمية؟",
        "options": [
          "قائمة أسماء الأصدقاء — Daftar nama teman dekat",
          "صفحة الإعلانات — Halaman iklan komersial",
          "أرقام الهواتف الشخصية — Daftar nomor telepon pribadi",
          "قائمة منظمة بالموضوعات والجداول لتسهيل تصفح الرسالة — Daftar isi, tabel, dan indeks topik untuk memudahkan navigasi pembaca"
        ],
        "correctAnswerIndex": 3,
        "explanation": "الفهارس الفنية تضمن سهولة الرجوع للموضوعات والآيات والأحاديث والمصادر."
      },
      {
        "id": "q-ar-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas absensi maksimal sebelum seorang mahasiswa mendapatkan status 'حرمان' (Denial/Diskualifikasi ujian)?",
        "options": [
          "تجاوز نسبة الغياب 25% من إجمالي الساعات المعتمدة — Ketidakhadiran melebihi 25% dari total jam pertemuan kuliah",
          "غياب 5% — Absen sebanyak 5%",
          "غياب 90% — Absen sebanyak 90%",
          "لا يوجد حرمان — Tidak ada aturan batas absensi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "يحرم الطالب من دخول الاختبار النهائي إذا تجاوزت نسبة غيابه 25% من مجموع المحاضرات."
      },
      {
        "id": "q-ar-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "ما هو 'المجلس العلمي' في الجامعة؟",
        "options": [
          "نادي المشجعين — Klub pendukung olahraga",
          "مجلس يتولى شؤون البحث العلمي والترقيات الأكاديمية لأعضاء هيئة التدريس — Dewan senat keilmuan yang mengurus riset ilmiah dan kenaikan pangkat akademik dosen",
          "لجنة تنسيق الرحلات — Panitia koordinasi darmawisata",
          "جمعية حماية المستهلك — Lembaga perlindungan konsumen"
        ],
        "correctAnswerIndex": 1,
        "explanation": "المجلس العلمي هو أعلى سلطة تشرف على الأبحاث والترقيات العلمية بالجامعة."
      },
      {
        "id": "q-ar-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'الخطة الدراسية' (Study Plan) bagi mahasiswa baru?",
        "options": [
          "جدول رحلات نهاية الأسبوع — Jadwal tamasya akhir pekan",
          "قائمة أسعار الكتب — Daftar harga buku toko",
          "دليل المقررات الدراسية المعتمدة لكل فصل دراسي حتى التخرج — Bagan kurikulum resmi yang memuat daftar mata kuliah per semester hingga lulus",
          "دفتر يوميات الطالب — Buku harian pribadi mahasiswa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "الخطة الدراسية هي الخريطة الأكاديمية الإلزامية لنيل الدرجة العلمية."
      }
    ]
  },
  "ar-full": {
    "id": "test-ar-full",
    "title": "Simulasi Ujian Masuk Lengkap Kuliah Arab Saudi / Timur Tengah (50 Soal Standar Ujian)",
    "description": "Simulasi ujian komprehensif berstandar masuk universitas terkemuka di Arab Saudi / Timur Tengah (90 Menit). Mencakup seluruh 5 aspek kesiapan akademik dan bahasa.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ar-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما معنى مصطلح 'رسالة الماجستير' في السياق الأكاديمي الجامعي؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ijazah Sarjana Muda S1",
          "Kwitansi biaya kuliah",
          "Tesis Magister S2",
          "Kartu registrasi perpustakaan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "رسالة الماجستير تعني البحث العلمي المتقدم لنيل درجة الماجستير."
      },
      {
        "id": "q-ar-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "اختر حرف الجر المناسب: 'التحق الطالب الجديد _____ كلية العلوم التطبيقية.'",
        "audioVoiceLang": "ar-SA",
        "options": [
          "من — dari",
          "عن — tentang / dari",
          "حتى — hingga / sampai",
          "بـِ (بكلية) — pada / di fakultas (huruf jar yang tepat untuk fi'il التحق)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "الفعل 'التحق' يتعدى بحرف الجر الباء: 'التحق بالكلية'."
      },
      {
        "id": "q-ar-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما اللقب الأكاديمي الرسمي لمن يحمل أعلى رتبة تدريسية في الجامعة؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "الأستاذ الدكتور (البروفيسور) — Profesor Doktor (Guru Besar, jenjang akademik tertinggi)",
          "المعيد — Asisten dosen muda",
          "المحاضر — Dosen pengajar (lektor)",
          "الطالب — Mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "الأستاذ الدكتور (أ.د.) هو أعلى لقب أكاديمي جامعي."
      },
      {
        "id": "q-ar-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما هي 'الساعات المعتمدة' في النظام الجامعي الفصلي؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "ساعات الدوام اليومي — Jam kerja kantor harian",
          "الساعات المعتمدة التي تحدد العبء الدراسي — Satuan Kredit Semester (SKS) yang menentukan beban studi",
          "ساعات النوم في السكن — Jam tidur di asrama mahasiswa",
          "ساعات فتح المكتبة — Jam operasional buka perpustakaan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "الساعات المعتمدة (Credit Hours) تعبر عن الثقل الأكاديمي لكل مقرر."
      },
      {
        "id": "q-ar-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما معنى مصطلح 'السجل الأكاديمي' (كشف الدرجات)؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "جدول الرحلات الترفيهية — Jadwal perjalanan wisata rekreasi",
          "قائمة أسماء الطلاب الغائبين — Daftar nama mahasiswa yang absen",
          "كشف الدرجات الرسمي الذي يوثق المعدل التراكمي — Transkrip nilai akademik resmi yang memuat riwayat IPK",
          "دفتر استعارة الكتب — Buku catatan peminjaman perpustakaan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "السجل الأكاديمي (Transcript) يوثق جميع الدرجات والمعدلات التراكمية."
      },
      {
        "id": "q-ar-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "'المشرف الأكاديمي' هو الشخص الذي يتولى:",
        "audioVoiceLang": "ar-SA",
        "options": [
          "إصلاح الأجهزة في المختبر — Memperbaiki peralatan rusak di laboratorium",
          "تنظيم حركة المرور بالجامعة — Mengatur lalu lintas kendaraan di kampus",
          "تقديم الوجبات في المطعم الجامعي — Menyajikan makanan di kantin universitas",
          "إرشاد الطالب في إعداد خطة البحث ورسالته العلمية — Membimbing mahasiswa dalam menyusun proposal riset dan tesis ilmiahnya"
        ],
        "correctAnswerIndex": 3,
        "explanation": "المشرف الأكاديمي يقود ويوجه الطالب علمياً حتى مناقشة رسالته."
      },
      {
        "id": "q-ar-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما معنى مصطلح 'المقرر الاختياري'؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "المقرر الذي يختاره الطالب وفق اهتمامه البحثي — Mata kuliah pilihan yang diambil sesuai minat studi",
          "المقرر الإجباري العام — Mata kuliah wajib umum universitas",
          "امتحان القبول النهائي — Ujian saringan masuk akhir",
          "النشاط الرياضي الإلزامي — Kegiatan olahraga wajib"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المقرر الاختياري (Elective Course) يختاره الطالب من قائمة محددة."
      },
      {
        "id": "q-ar-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "عبارة 'منحة دراسية كاملة' تعني في الجامعات السعودية:",
        "audioVoiceLang": "ar-SA",
        "options": [
          "تخفيض 10% من الرسوم فقط — Hanya potongan biaya kuliah sebesar 10%",
          "تغطية الرسوم الدراسية، والسكن، وتذكرة السفر، ومكافأة شهرية — Mencakup biaya kuliah, asrama, tiket pesawat, dan tunjangan bulanan",
          "إقامة في فندق خارجي — Menginap di hotel luar kampus",
          "الحصول على كتب مجانية فقط — Hanya mendapatkan buku cetak gratis"
        ],
        "correctAnswerIndex": 1,
        "explanation": "المنحة الكاملة تغطي كافة تكاليف الدراسة والمعيشة والمكافأة الشهرية."
      },
      {
        "id": "q-ar-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "أين تجري عادةً 'مناقشة الرسالة العلمية' العلنية؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "في مكتبة الحي — Di perpustakaan lingkungan perumahan",
          "عبر الهاتف المحمول — Melalui panggilan telepon genggam",
          "في قاعة المناقشات الرسمية أمام لجنة التحكيم — Di aula sidang resmi di hadapan dewan penguji",
          "في حديقة الجامعة — Di taman terbuka universitas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "تتم مناقشة الأطروحة علناً في قاعة مخصصة بحضور لجنة المناقشة والحكم."
      },
      {
        "id": "q-ar-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما هو 'معهد تعليم اللغة العربية لغير الناطقين بها'؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "نادي رياضي صيفي — Klub olahraga musim panas",
          "مدرسة لتعليم قيادة السيارات — Sekolah kursus mengemudi mobil",
          "مكتب لتوزيع المنح — Kantor pembagian dana bantuan",
          "معهد تأهيلي لتعليم الفصحى قبل الالتحاق بالكليات المتخصصة — Lembaga persiapan bahasa Arab Fusha sebelum masuk fakultas jurusan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "المعهد يؤهل الطلاب الأجانب لغوياً وثقافياً للدراسة الأكاديمية."
      },
      {
        "id": "q-ar-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.",
        "keywords": [
          "ulama",
          "menyampaikan",
          "perkataan",
          "tepat"
        ],
        "explanation": "Kalimat akademik pola Kaidah I'lal dan Ibdal dalam Morfologi Lanjutan (الإعلال والإبدال): 'قَالَ الْعَالِمُ قَوْلًا سَدِيدًا فِي مَسْأَلَةِ الِاجْتِهَادِ' diterjemahkan secara akurat menjadi 'Ulama itu menyampaikan perkataan yang tepat mengenai persoalan ijtihad.'."
      },
      {
        "id": "q-ar-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!",
        "keywords": [
          "betapa",
          "indahnya",
          "bahasa",
          "arab"
        ],
        "explanation": "Kalimat akademik pola Kaidah Ta'ajjub dan Madh/Dzamm (أسلوب التعجب والمدح والذم): 'مَا أَجْمَلَ اللُّغَةَ الْعَرَبِيَّةَ وَأَعْذَبَ بَيَانَهَا' diterjemahkan secara akurat menjadi 'Betapa indahnya bahasa Arab dan betapa merdu kefasihan penjelasannya!'."
      },
      {
        "id": "q-ar-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Buku itu telah saya baca seluruhnya dengan penuh perhatian.",
        "keywords": [
          "buku",
          "baca",
          "seluruhnya",
          "penuh"
        ],
        "explanation": "Kalimat akademik pola Sintaksis Lanjutan: Isytighal dan Tanazu' (الاشتغال والتنازع): 'الْكِتَابَ قَرَأْتُهُ كُلَّهُ بِاهْتِمَامٍ' diterjemahkan secara akurat menjadi 'Buku itu telah saya baca seluruhnya dengan penuh perhatian.'."
      },
      {
        "id": "q-ar-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.",
        "keywords": [
          "sesungguhnya",
          "ilmu",
          "pengetahuan",
          "benar"
        ],
        "explanation": "Kalimat akademik pola Balaghah Ilmu Ma'ani: Kalam Khabar dan Insya' (علم المعاني): 'إِنَّ الْعِلْمَ لَهُوَ السَّبِيلُ الْأَوْحَدُ لِلرُّقِيِّ' diterjemahkan secara akurat menjadi 'Sesungguhnya ilmu pengetahuan benar-benar jalan satu-satunya menuju kemajuan.'."
      },
      {
        "id": "q-ar-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.",
        "keywords": [
          "seorang",
          "alim",
          "bagaikan",
          "samudra"
        ],
        "explanation": "Kalimat akademik pola Balaghah Ilmu Bayan: Tasybih dan Majaz (علم البيان): 'الْعَالِمُ كَالْبَحْرِ فِي سَعَةِ عِلْمِهِ وَفَيْضِهِ' diterjemahkan secara akurat menjadi 'Seorang alim bagaikan samudra dalam keluasan ilmu dan limpahan manfaatnya.'."
      },
      {
        "id": "q-ar-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.",
        "keywords": [
          "ibnu",
          "khaldun",
          "menyebutkan",
          "muqaddimah"
        ],
        "explanation": "Kalimat akademik pola Wacana Akademik dan Sitasi Kitab Turats (النص التراثي): 'ذَكَرَ ابْنُ خَلْدُونَ فِي مُقَدِّمَتِهِ أَنَّ اللُّغَةَ مَلَكَةٌ صِنَاعِيَّةٌ' diterjemahkan secara akurat menjadi 'Ibnu Khaldun menyebutkan dalam Muqaddimah-nya bahwa bahasa adalah kecakapan yang terbentuk lewat pembiasaan.'."
      },
      {
        "id": "q-ar-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.",
        "keywords": [
          "rumusan",
          "masalah",
          "studi",
          "terletak"
        ],
        "explanation": "Kalimat akademik pola Perumusan Tesis Modern Standard Arabic (صياغة الأطروحة): 'تَكْمُنُ مُشْكِلَةُ الدِّرَاسَةِ فِي نُدْرَةِ الْأَبْحَاثِ التَّطْبِيقِيَّةِ فِي هَذَا الْحَقْلِ' diterjemahkan secara akurat menjadi 'Rumusan masalah studi ini terletak pada kelangkaan riset terapan di bidang kajian ini.'."
      },
      {
        "id": "q-ar-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.",
        "keywords": [
          "samar",
          "lagi",
          "bagi",
          "keluasan"
        ],
        "explanation": "Kalimat akademik pola Retorika Khutbah dan Debat Ilmiah (الخطابة والمناظرة): 'لَا يَخْفَى عَلَى شَرِيفِ عِلْمِكُمْ أَنَّ هَذِهِ الْمَسْأَلَةَ مَحَلُّ خِلَافٍ بَيْنَ الْعُلَمَاءِ' diterjemahkan secara akurat menjadi 'Tidak samar lagi bagi keluasan ilmu Anda sekalian bahwa masalah ini merupakan letak perbedaan pendapat di kalangan ulama.'."
      },
      {
        "id": "q-ar-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).",
        "keywords": [
          "penelitian",
          "hasil",
          "hasilnya",
          "mengagumkan"
        ],
        "explanation": "Kalimat akademik pola Analisis I'rab Kalimat Majemuk Kompleks (إعراب الجمل): 'هَذَا بَحْثٌ نَتَائِجُهُ مُبْهِرَةٌ (جملة في محل رفع نعت)' diterjemahkan secara akurat menjadi 'Ini adalah penelitian yang hasil-hasilnya sangat mengagumkan (klausa berkedudukan rafa' sebagai na'at).'."
      },
      {
        "id": "q-ar-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ",
        "audioVoiceLang": "ar-SA",
        "sampleAnswer": "Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.",
        "keywords": [
          "penutup",
          "peneliti",
          "merekomendasikan",
          "pengintegrasian"
        ],
        "explanation": "Kalimat akademik pola Penulisan Makalah Ilmiah & Rekomendasi Sidang (التقرير النهائي): 'وَفِي الْخِتَامِ يُوصِي الْبَاحِثُ بِإِدْرَاجِ مَادَّةِ اللِّسَانِيَّاتِ التَّطْبِيقِيَّةِ فِي الْمَنَاهِجِ' diterjemahkan secara akurat menjadi 'Sebagai penutup, peneliti merekomendasikan pengintegrasian mata kuliah linguistik terapan ke dalam kurikulum.'."
      },
      {
        "id": "q-ar-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan registrasi: 'Saya ingin mendaftar mata kuliah semester ini'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "لهذا الفصل الدراسي",
          "أود تسجيل",
          "المقررات الدراسية"
        ],
        "correctOrder": [
          "أود تسجيل",
          "المقررات الدراسية",
          "لهذا الفصل الدراسي"
        ],
        "explanation": "Urutan formal: Keinginan sopan (أود تسجيل) + Objek (المقررات الدراسية) + Waktu (لهذا الفصل الدراسي).",
        "targetSentence": "أود تسجيل المقررات الدراسية لهذا الفصل الدراسي"
      },
      {
        "id": "q-ar-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat etika tugas: 'Mahasiswa wajib mematuhi batas waktu pengumpulan tugas riset'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "البحوث العلمية",
          "الالتزام بمواعيد تسليم",
          "يجب على الطلاب"
        ],
        "correctOrder": [
          "يجب على الطلاب",
          "الالتزام بمواعيد تسليم",
          "البحوث العلمية"
        ],
        "explanation": "Urutan kewajiban: Subjek kewajiban (يجب على الطلاب) + Verba masdar (الالتزام بمواعيد تسليم) + Objek (البحوث العلمية).",
        "targetSentence": "يجب على الطلاب الالتزام بمواعيد تسليم البحوث العلمية"
      },
      {
        "id": "q-ar-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Saya mendapatkan beasiswa penuh dari universitas'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "من الجامعة",
          "حصلت على",
          "منحة دراسية كاملة"
        ],
        "correctOrder": [
          "حصلت على",
          "منحة دراسية كاملة",
          "من الجامعة"
        ],
        "explanation": "Urutan: Fi'il & Fa'il (حصلت على) + Objek (منحة دراسية كاملة) + Asal sumber (من الجامعة).",
        "targetSentence": "حصلت على منحة دراسية كاملة من الجامعة"
      },
      {
        "id": "q-ar-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang tesis: 'Sidang promosi tesis magister diselenggarakan akhir tahun'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "أمام اللجنة",
          "في نهاية العام الجامعي",
          "تنعقد مناقشة الرسالة"
        ],
        "correctOrder": [
          "تنعقد مناقشة الرسالة",
          "في نهاية العام الجامعي",
          "أمام اللجنة"
        ],
        "explanation": "Urutan: Subjek agenda (تنعقد مناقشة الرسالة) + Waktu (في نهاية العام الجامعي) + Majelis (أمام اللجنة).",
        "targetSentence": "تنعقد مناقشة الرسالة في نهاية العام الجامعي أمام اللجنة"
      },
      {
        "id": "q-ar-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan pusat menyediakan referensi ilmiah yang sangat berharga'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "للباحثين",
          "توفر المكتبة المركزية",
          "مراجع علمية قيمة"
        ],
        "correctOrder": [
          "توفر المكتبة المركزية",
          "مراجع علمية قيمة",
          "للباحثين"
        ],
        "explanation": "Urutan: Predikat & Subjek (توفر المكتبة المركزية) + Objek (مراجع علمية قيمة) + Penerima (للباحثين).",
        "targetSentence": "توفر المكتبة المركزية مراجع علمية قيمة للباحثين"
      },
      {
        "id": "q-ar-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'عميد الكلية (Ameed al-kulliyyah)':",
        "targetSentence": "عميد الكلية",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Indeks Prestasi Kumulatif (IPK)",
          "Asrama mahasiswa kampus",
          "Dekan Fakultas",
          "Praktik kerja lapangan / Magang klinis"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'عميد الكلية (Ameed al-kulliyyah)' adalah padanan untuk 'Dekan Fakultas'."
      },
      {
        "id": "q-ar-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'رئيس القسم (Ra':",
        "targetSentence": "رئيس القسم (Ra",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ruang kuliah / Auditorium perkuliahan",
          "Mata kuliah prasyarat umum universitas",
          "Predikat Kehormatan / Cum Laude",
          "Ketua Jurusan / Departemen"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'رئيس القسم (Ra'ees al-qism)' adalah padanan untuk 'Ketua Jurusan / Departemen'."
      },
      {
        "id": "q-ar-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'المعدل التراكمي (Al-Mu':",
        "targetSentence": "المعدل التراكمي (Al-Mu",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Indeks Prestasi Kumulatif (IPK)",
          "Asrama mahasiswa kampus",
          "Upacara wisuda kelulusan",
          "Kartu Tanda Mahasiswa (KTM)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'المعدل التراكمي (Al-Mu'addal at-tarakumi)' adalah padanan untuk 'Indeks Prestasi Kumulatif (IPK)'."
      },
      {
        "id": "q-ar-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'قاعة المحاضرات (Qaa':",
        "targetSentence": "قاعة المحاضرات (Qaa",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mata kuliah prasyarat umum universitas",
          "Ruang kuliah / Auditorium perkuliahan",
          "Praktik kerja lapangan / Magang klinis",
          "Dekan Fakultas"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'قاعة المحاضرات (Qaa'at al-muhaadarat)' adalah padanan untuk 'Ruang kuliah / Auditorium perkuliahan'."
      },
      {
        "id": "q-ar-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'السكن الجامعي (As-Sakan al-jaami':",
        "targetSentence": "السكن الجامعي (As-Sakan al-jaami",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Upacara wisuda kelulusan",
          "Predikat Kehormatan / Cum Laude",
          "Asrama mahasiswa kampus",
          "Ketua Jurusan / Departemen"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'السكن الجامعي (As-Sakan al-jaami'i)' adalah padanan untuk 'Asrama mahasiswa kampus'."
      },
      {
        "id": "q-ar-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'متطلب جامعي (Mutatallab jaami':",
        "targetSentence": "متطلب جامعي (Mutatallab jaami",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Praktik kerja lapangan / Magang klinis",
          "Kartu Tanda Mahasiswa (KTM)",
          "Indeks Prestasi Kumulatif (IPK)",
          "Mata kuliah prasyarat umum universitas"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'متطلب جامعي (Mutatallab jaami'i)' adalah padanan untuk 'Mata kuliah prasyarat umum universitas'."
      },
      {
        "id": "q-ar-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'حفل التخرج (Hafl at-takharrruj)':",
        "targetSentence": "حفل التخرج",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Upacara wisuda kelulusan",
          "Predikat Kehormatan / Cum Laude",
          "Dekan Fakultas",
          "Ruang kuliah / Auditorium perkuliahan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'حفل التخرج (Hafl at-takharrruj)' adalah padanan untuk 'Upacara wisuda kelulusan'."
      },
      {
        "id": "q-ar-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'تدريب ميداني (Tadreeb maydaani)':",
        "targetSentence": "تدريب ميداني",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Kartu Tanda Mahasiswa (KTM)",
          "Praktik kerja lapangan / Magang klinis",
          "Ketua Jurusan / Departemen",
          "Asrama mahasiswa kampus"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'تدريب ميداني (Tadreeb maydaani)' adalah padanan untuk 'Praktik kerja lapangan / Magang klinis'."
      },
      {
        "id": "q-ar-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'مرتبة الشرف (Martabat ash-sharaf)':",
        "targetSentence": "مرتبة الشرف",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Dekan Fakultas",
          "Indeks Prestasi Kumulatif (IPK)",
          "Predikat Kehormatan / Cum Laude",
          "Mata kuliah prasyarat umum universitas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'مرتبة الشرف (Martabat ash-sharaf)' adalah padanan untuk 'Predikat Kehormatan / Cum Laude'."
      },
      {
        "id": "q-ar-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'بطاقة الطالب الجامعية (Bitaaqat at-taalib)':",
        "targetSentence": "بطاقة الطالب الجامعية",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Ketua Jurusan / Departemen",
          "Ruang kuliah / Auditorium perkuliahan",
          "Upacara wisuda kelulusan",
          "Kartu Tanda Mahasiswa (KTM)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'بطاقة الطالب الجامعية (Bitaaqat at-taalib)' adalah padanan untuk 'Kartu Tanda Mahasiswa (KTM)'."
      },
      {
        "id": "q-ar-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Sistem penilaian IPK di sebagian besar universitas Arab Saudi (seperti KSU dan KAU) menggunakan skala berapa?",
        "options": [
          "Skala 5.00 (dengan nilai A+ = 5.0, A = 4.75, B+ = 4.5)",
          "Skala 4.00",
          "Skala 10.00",
          "Skala 20.00"
        ],
        "correctAnswerIndex": 0,
        "explanation": "معظم الجامعات السعودية تعتمد سلم المعدل التراكمي من 5.00 نقاط."
      },
      {
        "id": "q-ar-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa nama portal resmi terpadu dari Kementerian Pendidikan Arab Saudi untuk pendaftaran beasiswa mahasiswa internasional?",
        "options": [
          "منصة أبشر (Absher) — Portal layanan administrasi kependudukan & imigrasi Kementerian Dalam Negeri",
          "منصة ادرس في السعودية (Study in Saudi) — Portal resmi pendaftaran mahasiswa internasional Kementerian Pendidikan Saudi",
          "منصة توكلنا (Tawakkalna) — Aplikasi identitas digital & layanan kesehatan nasional",
          "منصة مدرستي (Madrasati) — Portal pembelajaran daring untuk sekolah dasar dan menengah"
        ],
        "correctAnswerIndex": 1,
        "explanation": "بوابة 'ادرس في السعودية' هي المنصة الرسمية الموحدة لاستقبال طلبات المنح للطلاب الدوليين."
      },
      {
        "id": "q-ar-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fasilitas yang umumnya diperoleh penerima beasiswa penuh (المنحة الخارجية) di Arab Saudi?",
        "options": [
          "Tiket bus saja",
          "Potongan harga kantin 10%",
          "Tiket pesawat tahunan pulang-pergi, asrama gratis, tunjangan uang saku bulanan, dan asuransi kesehatan",
          "Pinjaman berbunga"
        ],
        "correctAnswerIndex": 2,
        "explanation": "تشمل المنحة الدراسية الخارجية الكاملة تذاكر السفر والمكافأة الشهرية والسكن المجاني والرعاية الصحية."
      },
      {
        "id": "q-ar-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kriteria predikat kelulusan 'مرتبة الشرف الأولى' (First Class Honors) di Arab Saudi?",
        "options": [
          "Meraih IPK minimal 2.00",
          "Lulus paling cepat 2 tahun",
          "Menang lomba lari",
          "Meraih IPK kumulatif antara 4.75 hingga 5.00 tanpa pernah gagal dalam satu mata kuliah pun"
        ],
        "correctAnswerIndex": 3,
        "explanation": "تمنح مرتبة الشرف الأولى للطالب الحاصل على معدل تراكمي لا يقل عن 4.75 من 5.00."
      },
      {
        "id": "q-ar-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Di manakah letak universitas riset internasional terkemuka KAUST di Arab Saudi?",
        "options": [
          "Di Thuwal (dekat pesisir Laut Merah utara Jeddah)",
          "Di kota Riyadh",
          "Di kota Madinah",
          "Di kota Dammam"
        ],
        "correctAnswerIndex": 0,
        "explanation": "تقع جامعة الملك عبد الله للعلوم والتقنية (كاوست) في ثول على ساحل البحر الأحمر."
      },
      {
        "id": "q-ar-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah bahasa pengantar utama di King Fahd University of Petroleum and Minerals (KFUPM) untuk bidang sains & teknik?",
        "options": [
          "Bahasa Arab dialek lokal",
          "Bahasa Inggris penuh untuk sains, teknik, dan bisnis",
          "Bahasa Prancis",
          "Bahasa Jerman"
        ],
        "correctAnswerIndex": 1,
        "explanation": "جامعة الملك فهد للبترول والمعادن تعتمد اللغة الإنجليزية لغة تدريس أساسية للبرامج العلمية والهندسية."
      },
      {
        "id": "q-ar-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa istilah untuk izin tinggal resmi bagi mahasiswa asing di Arab Saudi?",
        "options": [
          "تأشيرة سياحة — Visa kunjungan wisata turis",
          "تأشيرة عمل تجارية — Visa kerja kunjungan bisnis",
          "إقامة طالب (Iqamah Thalib) — Kartu izin tinggal resmi pelajar asing di Arab Saudi",
          "فيزا ترانزيت — Visa singgah sementara (transit)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "الإقامة الطلابية هي الوثيقة النظامية لإثبات الهوية والإقامة القانونية بالمملكة."
      },
      {
        "id": "q-ar-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'السنة التحضيرية' (Tahun Persiapan) di universitas-universitas Saudi?",
        "options": [
          "Tahun libur bebas",
          "Tahun dinas militer",
          "Tahun magang perusahaan",
          "Tahun pertama perkuliahan yang memfokuskan pada penguatan bahasa Inggris, matematika, dan sains dasar"
        ],
        "correctAnswerIndex": 3,
        "explanation": "السنة التحضيرية تهدف إلى ردم الفجوة الأكاديمية وتهيئة الطالب للدراسة التخصصية."
      },
      {
        "id": "q-ar-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa ingin meminta dispensasi keterlambatan tugas karena sakit, apa yang harus dibawa?",
        "options": [
          "تقرير طبي معتمد من المركز الطبي الجامعي — Laporan keterangan medis resmi dari klinik universitas",
          "تذكرة سفر — Tiket perjalanan pesawat",
          "فاتورة مطعم — Struk tagihan rumah makan",
          "رسالة من صديقه — Surat pribadi dari teman"
        ],
        "correctAnswerIndex": 0,
        "explanation": "العذر الطبي المقبول يجب أن يكون صادراً أو مصدقاً من الإدارة الطبية بالجامعة."
      },
      {
        "id": "q-ar-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kata 'محاضرة' في البيئة الجامعية تعني:",
        "options": [
          "جلسة شاي — Acara minum teh santai",
          "درس أكاديمي يلقيه الأستاذ في القاعة — Perkuliahan tatap muka yang disampaikan dosen di kelas",
          "مباراة كرة قدم — Pertandingan sepak bola",
          "حفلة موسيقية — Pertunjukan konser musik"
        ],
        "correctAnswerIndex": 1,
        "explanation": "المحاضرة هي الدرس الأكاديمي الذي يلقيه أستاذ المادة على الطلاب."
      },
      {
        "id": "q-ar-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "ما هي وظيفة 'عمادة شؤون الطلاب' في الجامعات السعودية؟",
        "options": [
          "حراسة بوابات المدينة — Menjaga gerbang kota",
          "بيع الوقود — Menjual bahan bakar",
          "رعاية شؤون الطلاب، والإسكان الجامعي، والأنشطة الطلابية، والمكافآت — Mengelola layanan kemahasiswaan, asrama, kegiatan ekstrakurikuler, dan tunjangan",
          "صيانة محطات الكهرباء — Memelihara gardu listrik"
        ],
        "correctAnswerIndex": 2,
        "explanation": "عمادة شؤون الطلاب مسؤولة عن كافة الخدمات والأنشطة غير الأكاديمية الداعمة للطلاب."
      },
      {
        "id": "q-ar-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi penulisan 'الفهرس' في نهاية الرسالة العلمية؟",
        "options": [
          "قائمة أسماء الأصدقاء — Daftar nama teman dekat",
          "صفحة الإعلانات — Halaman iklan komersial",
          "أرقام الهواتف الشخصية — Daftar nomor telepon pribadi",
          "قائمة منظمة بالموضوعات والجداول لتسهيل تصفح الرسالة — Daftar isi, tabel, dan indeks topik untuk memudahkan navigasi pembaca"
        ],
        "correctAnswerIndex": 3,
        "explanation": "الفهارس الفنية تضمن سهولة الرجوع للموضوعات والآيات والأحاديث والمصادر."
      },
      {
        "id": "q-ar-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas absensi maksimal sebelum seorang mahasiswa mendapatkan status 'حرمان' (Denial/Diskualifikasi ujian)?",
        "options": [
          "تجاوز نسبة الغياب 25% من إجمالي الساعات المعتمدة — Ketidakhadiran melebihi 25% dari total jam pertemuan kuliah",
          "غياب 5% — Absen sebanyak 5%",
          "غياب 90% — Absen sebanyak 90%",
          "لا يوجد حرمان — Tidak ada aturan batas absensi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "يحرم الطالب من دخول الاختبار النهائي إذا تجاوزت نسبة غيابه 25% من مجموع المحاضرات."
      },
      {
        "id": "q-ar-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "ما هو 'المجلس العلمي' في الجامعة؟",
        "options": [
          "نادي المشجعين — Klub pendukung olahraga",
          "مجلس يتولى شؤون البحث العلمي والترقيات الأكاديمية لأعضاء هيئة التدريس — Dewan senat keilmuan yang mengurus riset ilmiah dan kenaikan pangkat akademik dosen",
          "لجنة تنسيق الرحلات — Panitia koordinasi darmawisata",
          "جمعية حماية المستهلك — Lembaga perlindungan konsumen"
        ],
        "correctAnswerIndex": 1,
        "explanation": "المجلس العلمي هو أعلى سلطة تشرف على الأبحاث والترقيات العلمية بالجامعة."
      },
      {
        "id": "q-ar-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'الخطة الدراسية' (Study Plan) bagi mahasiswa baru?",
        "options": [
          "جدول رحلات نهاية الأسبوع — Jadwal tamasya akhir pekan",
          "قائمة أسعار الكتب — Daftar harga buku toko",
          "دليل المقررات الدراسية المعتمدة لكل فصل دراسي حتى التخرج — Bagan kurikulum resmi yang memuat daftar mata kuliah per semester hingga lulus",
          "دفتر يوميات الطالب — Buku harian pribadi mahasiswa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "الخطة الدراسية هي الخريطة الأكاديمية الإلزامية لنيل الدرجة العلمية."
      }
    ]
  }
};

export const FRANCE_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "fr-1": {
    "id": "test-fr-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Prancis (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Prancis.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-fr-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que signifie le terme 'mémoire de recherche' dans une université française ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Ijazah sarjana muda",
          "Kartu ujian perpustakaan",
          "Kwitansi biaya sewa",
          "Tesis riset akademik jenjang Master"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Le mémoire de recherche est un travail scientifique écrit soutenu à la fin du Master."
      },
      {
        "id": "q-fr-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choisissez la préposition correcte : 'Ce cours magistral s'adresse _____ étudiants de Master.'",
        "audioVoiceLang": "fr-FR",
        "options": [
          "aux (à + les) — kepada para (kontraksi preposisi yang tepat untuk jamak \"étudiants\")",
          "des (de + les) — dari para",
          "pour — untuk (tidak berpasangan dengan verba pronominal \"s'adresser à\")",
          "vers — menuju ke arah fisik"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le verbe 's'adresser' se construit avec la préposition 'à' : s'adresser aux étudiants."
      },
      {
        "id": "q-fr-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quelle formule de politesse utilise-t-on pour s'adresser à un enseignant-chercheur ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Salut cher prof — Halo Pak/Bu Guru tersayang (terlalu santai)",
          "Monsieur le Professeur / Madame la Professeure — Bapak Profesor / Ibu Profesor (sapaan hormat resmi)",
          "Hé toi — Hei kamu (tidak sopan)",
          "Mon cher ami — Sahabatku tersayang (tidak pantas untuk dosen)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "L'adresse formelle 'Monsieur le Professeur' ou 'Madame la Professeure' respecte les usages universitaires."
      },
      {
        "id": "q-fr-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quel document officiel atteste de l'inscription administrative d'un étudiant ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Le permis de conduire — Surat Izin Mengemudi (SIM)",
          "La carte de fidélité — Kartu keanggotaan diskon toko",
          "Le certificat de scolarité — Surat keterangan terdaftar sebagai mahasiswa aktif",
          "Le ticket de caisse — Struk bukti belanja kasir"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Le certificat de scolarité prouve l'inscription administrative régulière dans l'établissement."
      },
      {
        "id": "q-fr-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que désignent les crédits ECTS dans le système européen LMD ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Points de réduction pour le restaurant — Poin potongan harga di restoran",
          "Crédits téléphoniques — Pulsa telepon seluler",
          "Heures de sport — Jam kegiatan olahraga",
          "Crédits d'évaluation semestriels (30 ECTS par semestre / 60 par an) — Satuan kredit akademik Eropa (30 ECTS per semester / 60 per tahun)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Les crédits ECTS (European Credit Transfer System) mesurent le volume de travail requis."
      },
      {
        "id": "q-fr-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quelle est la différence fondamentale entre un CM (Cours Magistral) et un TD (Travaux Dirigés) ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Le CM a lieu en amphithéâtre pour la théorie, le TD en petit groupe pour les exercices pratiques — CM adalah kuliah teori di aula besar, sedangkan TD adalah kelas diskusi praktik kelompok kecil",
          "Le CM est réservé aux vacances — CM hanya diadakan saat musim liburan",
          "Le TD est un cours de sport — TD adalah pelajaran olahraga",
          "Il n'y a aucune différence — Tidak ada perbedaan sama sekali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le cours magistral transmet les concepts généraux alors que le TD applique la méthode en groupes restreints."
      },
      {
        "id": "q-fr-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que signifie l'acronyme CROUS dans la vie étudiante en France ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Club de Randonnée et d'Orientation Universitaire — Klub pendakian dan orientasi alam kampus",
          "Centre Régional des Œuvres Universitaires et Scolaires (résidences et Restos U) — Badan layanan kemahasiswaan regional (pengelola asrama & kantin mahasiswa bersubsidi)",
          "Comité de Recherche d'Ouvrages Spécialisés — Komite pencarian buku khusus",
          "Centre de Réparation d'Outils Numériques — Pusat reparasi perangkat digital"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Le CROUS gère les logements universitaires, la restauration étudiante et les bourses sur critères sociaux."
      },
      {
        "id": "q-fr-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Le terme 'soutenance de mémoire' correspond à :",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Un examen médical annuel — Pemeriksaan kesehatan tahunan",
          "Une fête de fin d'année — Pesta perayaan akhir tahun",
          "L'épreuve orale publique de présentation et de défense des conclusions de la recherche — Sidang ujian lisan terbuka untuk mempresentasikan dan mempertahankan hasil riset tesis",
          "L'achat de matériel de laboratoire — Pembelian peralatan laboratorium"
        ],
        "correctAnswerIndex": 2,
        "explanation": "La soutenance est l'évaluation orale terminale devant un jury académique."
      },
      {
        "id": "q-fr-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que signifie l'aide 'APL' accordée par la CAF aux étudiants louant un logement ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Assurance Prévoyance Logement — Asuransi perlindungan tempat tinggal",
          "Abonnement Pour Livres — Langganan peminjaman buku",
          "Allocation Pour Loisirs — Tunjangan dana rekreasi",
          "Aide Personnalisée au Logement (allocation financière réduisant le loyer mensuel) — Tunjangan subsidi sewa tempat tinggal dari pemerintah Prancis (CAF)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "L'APL est une prestation de la Caisse d'Allocations Familiales qui diminue le montant du loyer."
      },
      {
        "id": "q-fr-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quelle note minimale sur 20 est traditionnellement requise pour valider une unité d'enseignement (UE) ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "10 sur 20 (la moyenne) — Nilai 10 dari 20 (batas nilai rata-rata kelulusan)",
          "5 sur 20 — Nilai 5 dari 20 (tidak lulus)",
          "18 sur 20 — Nilai 18 dari 20 (sangat memuaskan)",
          "15 sur 20 — Nilai 15 dari 20 (predikat Bien)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La note de 10/20 représente le seuil de validation d'un module ou d'un semestre."
      }
    ]
  },
  "fr-2": {
    "id": "test-fr-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Prancis.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-fr-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Sans doute les historiens retiendront-ils cette période comme un tournant décisif.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Tidak diragukan lagi para sejarawan akan mencatat periode ini sebagai titik balik yang menentukan.",
        "keywords": [
          "diragukan",
          "lagi",
          "sejarawan",
          "mencatat"
        ],
        "explanation": "Kalimat akademik pola L'Inversion du Sujet dans le Style Littéraire et Académique: 'Sans doute les historiens retiendront-ils cette période comme un tournant décisif.' diterjemahkan secara akurat menjadi 'Tidak diragukan lagi para sejarawan akan mencatat periode ini sebagai titik balik yang menentukan.'."
      },
      {
        "id": "q-fr-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Il eût fallu que la communauté internationale prît conscience du danger imminent.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Komunitas internasional semestinya telah menyadari bahaya yang mengancam tersebut.",
        "keywords": [
          "komunitas",
          "internasional",
          "semestinya",
          "menyadari"
        ],
        "explanation": "Kalimat akademik pola Le Subjonctif Imparfait et Plus-que-parfait: 'Il eût fallu que la communauté internationale prît conscience du danger imminent.' diterjemahkan secara akurat menjadi 'Komunitas internasional semestinya telah menyadari bahaya yang mengancam tersebut.'."
      },
      {
        "id": "q-fr-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Cette découverte permettrait de reconsidérer l'ensemble de la chronologie antique.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Penemuan ini diperkirakan dapat meninjau ulang keseluruhan kronologi sejarah kuno.",
        "keywords": [
          "penemuan",
          "diperkirakan",
          "meninjau",
          "ulang"
        ],
        "explanation": "Kalimat akademik pola Nuances Polyphoniques et Modalisation du Discours: 'Cette découverte permettrait de reconsidérer l'ensemble de la chronologie antique.' diterjemahkan secara akurat menjadi 'Penemuan ini diperkirakan dapat meninjau ulang keseluruhan kronologi sejarah kuno.'."
      },
      {
        "id": "q-fr-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "La synthèse méthodique des archives permet de dégager trois axes d'interprétation.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Sintesis metodis terhadap arsip-arsip tersebut memungkinkan ditariknya tiga poros penafsiran.",
        "keywords": [
          "sintesis",
          "metodis",
          "terhadap",
          "arsip"
        ],
        "explanation": "Kalimat akademik pola Analyse Critique et Synthèse de Documents Universitaires: 'La synthèse méthodique des archives permet de dégager trois axes d'interprétation.' diterjemahkan secara akurat menjadi 'Sintesis metodis terhadap arsip-arsip tersebut memungkinkan ditariknya tiga poros penafsiran.'."
      },
      {
        "id": "q-fr-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Je vous saurais gré de bien vouloir examiner ma candidature avec bienveillance.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Saya akan sangat berterima kasih kiranya Anda berkenan meninjau berkas lamaran saya dengan penuh kebaikan.",
        "keywords": [
          "berterima",
          "kasih",
          "kiranya",
          "berkenan"
        ],
        "explanation": "Kalimat akademik pola Formules Épistolaires Académiques et Institutionnelles: 'Je vous saurais gré de bien vouloir examiner ma candidature avec bienveillance.' diterjemahkan secara akurat menjadi 'Saya akan sangat berterima kasih kiranya Anda berkenan meninjau berkas lamaran saya dengan penuh kebaikan.'."
      },
      {
        "id": "q-fr-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Cette crise politique est venue cristalliser des tensions socio-économiques larvées.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Krisis politik ini mengkristalkan ketegangan-ketegangan sosial ekonomi yang selama ini terpendam.",
        "keywords": [
          "krisis",
          "politik",
          "mengkristalkan",
          "ketegangan"
        ],
        "explanation": "Kalimat akademik pola Métaphores Conceptuelles et Collocations Soutenues: 'Cette crise politique est venue cristalliser des tensions socio-économiques larvées.' diterjemahkan secara akurat menjadi 'Krisis politik ini mengkristalkan ketegangan-ketegangan sosial ekonomi yang selama ini terpendam.'."
      },
      {
        "id": "q-fr-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Qu'il me soit permis de réfuter l'objection selon laquelle cette approche serait obsolète.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Perkenankanlah saya membantah keberatan yang menyatakan bahwa pendekatan ini telah usang.",
        "keywords": [
          "perkenankanlah",
          "membantah",
          "keberatan",
          "menyatakan"
        ],
        "explanation": "Kalimat akademik pola Rhétorique du Plaidoyer et de la Réfutation Dialectique: 'Qu'il me soit permis de réfuter l'objection selon laquelle cette approche serait obsolète.' diterjemahkan secara akurat menjadi 'Perkenankanlah saya membantah keberatan yang menyatakan bahwa pendekatan ini telah usang.'."
      },
      {
        "id": "q-fr-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Le présent décret entre en vigueur le premier jour du mois suivant sa publication.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Keputusan ini mulai berlaku pada hari pertama bulan berikutnya setelah tanggal pengundangannya.",
        "keywords": [
          "keputusan",
          "mulai",
          "berlaku",
          "hari"
        ],
        "explanation": "Kalimat akademik pola Stylistique des Textes Juridiques et Institutionnels Français: 'Le présent décret entre en vigueur le premier jour du mois suivant sa publication.' diterjemahkan secara akurat menjadi 'Keputusan ini mulai berlaku pada hari pertama bulan berikutnya setelah tanggal pengundangannya.'."
      },
      {
        "id": "q-fr-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "La problématique centrale interroge l'articulation dialectique entre tradition et modernité.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Rumusan masalah utama menelaah artikulasi dialektis antara tradisi dan modernitas.",
        "keywords": [
          "rumusan",
          "masalah",
          "utama",
          "menelaah"
        ],
        "explanation": "Kalimat akademik pola Rédaction de la Problématique et du Plan de Mémoire: 'La problématique centrale interroge l'articulation dialectique entre tradition et modernité.' diterjemahkan secara akurat menjadi 'Rumusan masalah utama menelaah artikulasi dialektis antara tradisi dan modernitas.'."
      },
      {
        "id": "q-fr-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Monsieur le Président, mesdames et messieurs les membres du jury, je vous remercie pour l'attention bienveillante que vous avez portée à mes travaux.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Bapak Ketua Sidang, Ibu dan Bapak anggota dewan penguji yang terhormat, saya mengucapkan terima kasih atas perhatian saksama yang Anda berikan terhadap karya penelitian saya.",
        "keywords": [
          "bapak",
          "ketua",
          "sidang",
          "anggota"
        ],
        "explanation": "Kalimat akademik pola Soutenance Orale de Thèse et Dialogue avec les Pairs: 'Monsieur le Président, mesdames et messieurs les membres du jury, je vous remercie pour l'attention bienveillante que vous avez portée à mes travaux.' diterjemahkan secara akurat menjadi 'Bapak Ketua Sidang, Ibu dan Bapak anggota dewan penguji yang terhormat, saya mengucapkan terima kasih atas perhatian saksama yang Anda berikan terhadap karya penelitian saya.'."
      }
    ]
  },
  "fr-3": {
    "id": "test-fr-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis Kalimat Prancis (5 Soal Sambung Kata)",
    "description": "Uji ketelitian menyusun tata urutan klausa regulasi kampus, registrasi mata kuliah, dan korespondensi resmi di Prancis.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-fr-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan janji temu: 'Saya ingin memohon janji temu untuk mendiskusikan perkembangan tugas akhir saya'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "sur mon mémoire",
          "pour faire le point",
          "solliciter un rendez-vous",
          "Je souhaite"
        ],
        "correctOrder": [
          "Je souhaite",
          "solliciter un rendez-vous",
          "pour faire le point",
          "sur mon mémoire"
        ],
        "explanation": "Ordre syntaxique formel : Sujet (Je souhaite) + Verbe/Objet (solliciter un rendez-vous) + But (pour faire le point sur mon mémoire).",
        "targetSentence": "Je souhaite solliciter un rendez-vous pour faire le point sur mon mémoire"
      },
      {
        "id": "q-fr-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat validasi ECTS: 'Mahasiswa harus menyelesaikan enam puluh kredit per tahun ajaran'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "par année universitaire",
          "Les étudiants doivent",
          "valider soixante crédits"
        ],
        "correctOrder": [
          "Les étudiants doivent",
          "valider soixante crédits",
          "par année universitaire"
        ],
        "explanation": "Ordre réglementaire : Sujet modal (Les étudiants doivent) + Verbe d'évaluation (valider soixante crédits) + Cadre temporel (par année universitaire).",
        "targetSentence": "Les étudiants doivent valider soixante crédits par année universitaire"
      },
      {
        "id": "q-fr-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat pendekatan ilmiah: 'Proyek penelitian ini sepenuhnya mengikuti kaidah ilmiah yang ketat'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "la démarche scientifique",
          "respecte scrupuleusement",
          "Ce projet de recherche"
        ],
        "correctOrder": [
          "Ce projet de recherche",
          "respecte scrupuleusement",
          "la démarche scientifique"
        ],
        "explanation": "Ordre académique : Sujet (Ce projet de recherche) + Adverbe/Verbe (respecte scrupuleusement) + Complément d'objet (la démarche scientifique).",
        "targetSentence": "Ce projet de recherche respecte scrupuleusement la démarche scientifique"
      },
      {
        "id": "q-fr-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan kampus menawarkan akses ke jurnal ilmiah internasional'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "aux revues scientifiques internationales",
          "La bibliothèque universitaire",
          "propose un accès"
        ],
        "correctOrder": [
          "La bibliothèque universitaire",
          "propose un accès",
          "aux revues scientifiques internationales"
        ],
        "explanation": "Ordre : Sujet (La bibliothèque universitaire) + Verbe/Objet (propose un accès) + Destinataire (aux revues scientifiques internationales).",
        "targetSentence": "La bibliothèque universitaire propose un accès aux revues scientifiques internationales"
      },
      {
        "id": "q-fr-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang kelulusan: 'Sidang presentasi tesis magister akan berlangsung pada bulan Juni di hadapan juri'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "devant le jury académique",
          "aura lieu en juin",
          "La soutenance du mémoire"
        ],
        "correctOrder": [
          "La soutenance du mémoire",
          "aura lieu en juin",
          "devant le jury académique"
        ],
        "explanation": "Ordre événementiel : Sujet (La soutenance du mémoire) + Verbe/Temps (aura lieu en juin) + Circonstance (devant le jury académique).",
        "targetSentence": "La soutenance du mémoire aura lieu en juin devant le jury académique"
      }
    ]
  },
  "fr-4": {
    "id": "test-fr-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Prancis (10 Soal Artikan)",
    "description": "Uji penguasaan glosarium akademik, peristilahan seminar ilmiah, dan sistem administrasi kampus di Prancis.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-fr-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Directeur de recherche (directeur de thèse)':",
        "targetSentence": "Directeur de recherche",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Kantin Universitas Bersubsidi CROUS",
          "Cuti Akademik / Tahun Jeda Kuliah",
          "Ruang Kuliah Teater / Auditorium",
          "Dosen Pembimbing Penelitian / Disertasi"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Directeur de recherche (directeur de thèse)' adalah padanan untuk 'Dosen Pembimbing Penelitian / Disertasi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Relevé de notes officiel (bulletin)':",
        "targetSentence": "Relevé de notes officiel",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Transkrip Nilai Akademik Resmi",
          "Jadwal Perkuliahan Mingguan",
          "Surat Perjanjian Magang Resmi",
          "Biaya Pendaftaran / SPP Universitas"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Relevé de notes officiel (bulletin)' adalah padanan untuk 'Transkrip Nilai Akademik Resmi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Resto U (Restaurant Universitaire)':",
        "targetSentence": "Resto U",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Cuti Akademik / Tahun Jeda Kuliah",
          "Kantin Universitas Bersubsidi CROUS",
          "Predikat Sangat Memuaskan / Cum Laude",
          "Kartu Izin Tinggal Pelajar Asing"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Resto U (Restaurant Universitaire)' adalah padanan untuk 'Kantin Universitas Bersubsidi CROUS' di universitas Prancis."
      },
      {
        "id": "q-fr-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Emploi du temps (planning des cours)':",
        "targetSentence": "Emploi du temps",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Surat Perjanjian Magang Resmi",
          "Ruang Kuliah Teater / Auditorium",
          "Jadwal Perkuliahan Mingguan",
          "Dosen Pembimbing Penelitian / Disertasi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Emploi du temps (planning des cours)' adalah padanan untuk 'Jadwal Perkuliahan Mingguan' di universitas Prancis."
      },
      {
        "id": "q-fr-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Année de césure (gap year)':",
        "targetSentence": "Année de césure",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Predikat Sangat Memuaskan / Cum Laude",
          "Biaya Pendaftaran / SPP Universitas",
          "Transkrip Nilai Akademik Resmi",
          "Cuti Akademik / Tahun Jeda Kuliah"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Année de césure (gap year)' adalah padanan untuk 'Cuti Akademik / Tahun Jeda Kuliah' di universitas Prancis."
      },
      {
        "id": "q-fr-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Convention de stage tripartite':",
        "targetSentence": "Convention de stage tripartite",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Surat Perjanjian Magang Resmi",
          "Ruang Kuliah Teater / Auditorium",
          "Kartu Izin Tinggal Pelajar Asing",
          "Kantin Universitas Bersubsidi CROUS"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Convention de stage tripartite' adalah padanan untuk 'Surat Perjanjian Magang Resmi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Mention très bien (avec félicitations)':",
        "targetSentence": "Mention très bien",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Biaya Pendaftaran / SPP Universitas",
          "Predikat Sangat Memuaskan / Cum Laude",
          "Dosen Pembimbing Penelitian / Disertasi",
          "Jadwal Perkuliahan Mingguan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Mention très bien (avec félicitations)' adalah padanan untuk 'Predikat Sangat Memuaskan / Cum Laude' di universitas Prancis."
      },
      {
        "id": "q-fr-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Amphithéâtre (amphi)':",
        "targetSentence": "Amphithéâtre",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Kartu Izin Tinggal Pelajar Asing",
          "Transkrip Nilai Akademik Resmi",
          "Ruang Kuliah Teater / Auditorium",
          "Cuti Akademik / Tahun Jeda Kuliah"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Amphithéâtre (amphi)' adalah padanan untuk 'Ruang Kuliah Teater / Auditorium' di universitas Prancis."
      },
      {
        "id": "q-fr-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Droits d':",
        "targetSentence": "Droits d",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Dosen Pembimbing Penelitian / Disertasi",
          "Kantin Universitas Bersubsidi CROUS",
          "Surat Perjanjian Magang Resmi",
          "Biaya Pendaftaran / SPP Universitas"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Droits d'inscription universitaire' adalah padanan untuk 'Biaya Pendaftaran / SPP Universitas' di universitas Prancis."
      },
      {
        "id": "q-fr-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Titre de séjour étudiant (VLS-TS)':",
        "targetSentence": "Titre de séjour étudiant",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Kartu Izin Tinggal Pelajar Asing",
          "Transkrip Nilai Akademik Resmi",
          "Jadwal Perkuliahan Mingguan",
          "Predikat Sangat Memuaskan / Cum Laude"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Titre de séjour étudiant (VLS-TS)' adalah padanan untuk 'Kartu Izin Tinggal Pelajar Asing' di universitas Prancis."
      }
    ]
  },
  "fr-5": {
    "id": "test-fr-5",
    "title": "Bagian 5: Wacana Silabus & Analisis Kasus Kampus Prancis (15 Soal Analisis Bebas)",
    "description": "Uji kesiapan komprehensif menghadapi perkuliahan nyata, etika laboratorium, dan dinamika mahasiswa internasional di Prancis.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-fr-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Skala penilaian akademik yang digunakan secara seragam di seluruh universitas Prancis adalah:",
        "options": [
          "Skala 0 sampai 4.00",
          "Skala nilai 0 sampai 20 (dengan 10 sebagai batas kelulusan)",
          "Skala huruf A sampai F",
          "Skala 0 sampai 100 persen"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Le système universitaire français note traditionnellement sur 20 points."
      },
      {
        "id": "q-fr-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas jam kerja sampingan berupah yang diizinkan untuk mahasiswa asing pemegang visa VLS-TS di Prancis?",
        "options": [
          "Bebas tanpa batasan jam kerja",
          "Hanya 5 jam per minggu",
          "Maksimal 60% dari durasi jam kerja legal tahunan (yaitu 964 jam per tahun)",
          "Dilarang bekerja sama sekali"
        ],
        "correctAnswerIndex": 2,
        "explanation": "La législation française autorise les étudiants étrangers à travailler jusqu'à 964 heures par an."
      },
      {
        "id": "q-fr-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa perbedaan antara Grandes Écoles dan Universités publiques di Prancis?",
        "options": [
          "Universités hanya mengajarkan seni",
          "Grandes Écoles adalah sekolah menengah",
          "Tidak ada perbedaan kurikulum",
          "Grandes Écoles adalah institusi selektif bergengsi dengan ujian masuk ketat (concours), sedangkan Universités memiliki akses terbuka untuk pemegang baccalauréat"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Les Grandes Écoles recrutent sur concours très sélectif et forment les cadres dirigeants."
      },
      {
        "id": "q-fr-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'CVEC' (Contribution Vie Étudiante et de Campus) yang wajib dibayar setiap tahun ajaran?",
        "options": [
          "Iuran wajib tahunan untuk mendanai layanan sosial, kesehatan, olahraga, dan budaya di kampus",
          "Biaya parkir sepeda",
          "Pajak sewa rumah",
          "Tiket bioskop kampus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La CVEC est obligatoire pour s'inscrire dans l'enseignement supérieur français."
      },
      {
        "id": "q-fr-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana sebutan untuk predikat kelulusan tertinggi (nilai 16/20 ke atas) di universitas Prancis?",
        "options": [
          "Mention Passable — Predikat Cukup Lulus (nilai 10–11,9/20)",
          "Mention Très Bien — Predikat Sangat Memuaskan / Cum Laude (nilai >= 16/20)",
          "Mention Assez Bien — Predikat Cukup Baik (nilai 12–13,9/20)",
          "Mention Éliminatoire — Nilai di bawah batas minimum yang menggugurkan kelulusan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "La mention Très Bien est décernée pour une moyenne égale ou supérieure à 16/20."
      },
      {
        "id": "q-fr-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi platform resmi 'Campus France' bagi calon mahasiswa internasional?",
        "options": [
          "Menjual tiket penerbangan",
          "Menyewakan apartemen mewah",
          "Memproses pendaftaran aplikasi studi, verifikasi dokumen, dan wawancara visa pelajar",
          "Memberikan pinjaman bank"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Campus France est l'agence publique chargée de promouvoir l'enseignement supérieur français."
      },
      {
        "id": "q-fr-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kapan tahun akademik perkuliahan (rentrée universitaire) biasanya dimulai di Prancis?",
        "options": [
          "Bulan Januari",
          "Bulan April",
          "Bulan Juli",
          "Bulan September atau awal Oktober"
        ],
        "correctAnswerIndex": 3,
        "explanation": "La rentrée universitaire s'effectue traditionnellement en septembre ou début octobre."
      },
      {
        "id": "q-fr-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam budaya penulisan esai ilmiah Prancis, apa yang dimaksud dengan 'Problématique'?",
        "options": [
          "Pertanyaan konseptual sentral yang memandu seluruh alur analisis dan perdebatan teoritis",
          "Daftar masalah pribadi mahasiswa",
          "Keluhan tentang fasilitas perpustakaan",
          "Biaya cetak makalah"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La problématique est la question centrale à laquelle la réflexion tente de répondre."
      },
      {
        "id": "q-fr-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah mahasiswa internasional di Prancis berhak mendapatkan jaminan kesehatan gratis?",
        "options": [
          "Tidak, harus membayar 5.000 euro per bulan",
          "Ya, berhak mendaftar di Sécurité Sociale (l'Assurance Maladie) secara gratis",
          "Hanya untuk warga negara Uni Eropa",
          "Hanya berlaku jika dirawat di rumah sakit swasta"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Les étudiants internationaux bénéficient de la gratuité de la Sécurité Sociale française."
      },
      {
        "id": "q-fr-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan istilah 'Partiels' dalam kalender akademik universitas Prancis?",
        "options": [
          "Pesta perkenalan mahasiswa",
          "Liburan akhir pekan",
          "Ujian semester berkala (tengah semester / akhir semester)",
          "Jadwal senam pagi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Les partiels sont les sessions d'examens semestriels écrits ou oraux."
      },
      {
        "id": "q-fr-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti kata 'Rattrapage' jika seorang mahasiswa belum mencapai nilai 10/20 di ujian pertama?",
        "options": [
          "Pengusiran dari kampus",
          "Pengulangan satu tahun penuh",
          "Pembayaran denda tunai",
          "Sesi ujian perbaikan / remedial kedua untuk memperbaiki nilai"
        ],
        "correctAnswerIndex": 3,
        "explanation": "La session de rattrapage (deuxième session) permet de repasser les épreuves non validées."
      },
      {
        "id": "q-fr-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'BU' (Bibliothèque Universitaire) dalam mendukung riset mahasiswa?",
        "options": [
          "Menyediakan ruang belajar tenang, peminjaman literatur, pangkalan data CAIRN, JSTOR, dan lokakarya metodologi",
          "Menjual makanan cepat saji",
          "Tempat menonton film bioskop",
          "Kantor pendaftaran kursus mobil"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La BU est le centre névralgique de la documentation universitaire et de la recherche."
      },
      {
        "id": "q-fr-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana struktur pembagian jenjang studi dalam sistem Eropa LMD di Prancis?",
        "options": [
          "Tiap jenjang memakan waktu 1 tahun",
          "Licence (3 ans - 180 ECTS), Master (2 ans - 120 ECTS), Doctorat (3 ans - 180 ECTS)",
          "Licence 5 tahun dan Master 5 tahun",
          "Tidak mengenal jenjang berjenjang"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Le système LMD est structuré en 3 niveaux d'études supérieures successifs."
      },
      {
        "id": "q-fr-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kepanjangan dari 'TGV' dan bagaimana relevansinya bagi mobilitas mahasiswa antar kota di Prancis?",
        "options": [
          "Transport Général de Ville",
          "Taxi Grand Volume",
          "Train à Grande Vitesse, dengan kartu diskon Carte Avantage Jeune untuk tarif hemat mahasiswa",
          "Téléphérique Gare Voyager"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Le TGV permet des liaisons ultra-rapides à travers la France avec des tarifs avantageux pour les jeunes."
      },
      {
        "id": "q-fr-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Sebelum menyerahkan laporan magang (rapport de stage), dokumen pengesahan apa yang harus ditandatangani perusahaan dan kampus?",
        "options": [
          "Kwitansi gaji bulanan",
          "Kartu nama direktur",
          "Foto bersama rekan kerja",
          "L'attestation de stage et la fiche d'évaluation du tuteur d'entreprise"
        ],
        "correctAnswerIndex": 3,
        "explanation": "L'attestation de stage certifie la réalisation effective et valide de la mission professionnelle."
      }
    ]
  },
  "fr-full": {
    "id": "test-fr-full",
    "title": "Simulasi Ujian Masuk Lengkap Kuliah Prancis (50 Soal Standar Ujian)",
    "description": "Simulasi ujian komprehensif berstandar masuk universitas terkemuka di Prancis (90 Menit). Mencakup seluruh 5 aspek kesiapan akademik dan bahasa.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-fr-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que signifie le terme 'mémoire de recherche' dans une université française ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Ijazah sarjana muda",
          "Kartu ujian perpustakaan",
          "Kwitansi biaya sewa",
          "Tesis riset akademik jenjang Master"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Le mémoire de recherche est un travail scientifique écrit soutenu à la fin du Master."
      },
      {
        "id": "q-fr-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choisissez la préposition correcte : 'Ce cours magistral s'adresse _____ étudiants de Master.'",
        "audioVoiceLang": "fr-FR",
        "options": [
          "aux (à + les) — kepada para (kontraksi preposisi yang tepat untuk jamak \"étudiants\")",
          "des (de + les) — dari para",
          "pour — untuk (tidak berpasangan dengan verba pronominal \"s'adresser à\")",
          "vers — menuju ke arah fisik"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le verbe 's'adresser' se construit avec la préposition 'à' : s'adresser aux étudiants."
      },
      {
        "id": "q-fr-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quelle formule de politesse utilise-t-on pour s'adresser à un enseignant-chercheur ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Salut cher prof — Halo Pak/Bu Guru tersayang (terlalu santai)",
          "Monsieur le Professeur / Madame la Professeure — Bapak Profesor / Ibu Profesor (sapaan hormat resmi)",
          "Hé toi — Hei kamu (tidak sopan)",
          "Mon cher ami — Sahabatku tersayang (tidak pantas untuk dosen)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "L'adresse formelle 'Monsieur le Professeur' ou 'Madame la Professeure' respecte les usages universitaires."
      },
      {
        "id": "q-fr-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quel document officiel atteste de l'inscription administrative d'un étudiant ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Le permis de conduire — Surat Izin Mengemudi (SIM)",
          "La carte de fidélité — Kartu keanggotaan diskon toko",
          "Le certificat de scolarité — Surat keterangan terdaftar sebagai mahasiswa aktif",
          "Le ticket de caisse — Struk bukti belanja kasir"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Le certificat de scolarité prouve l'inscription administrative régulière dans l'établissement."
      },
      {
        "id": "q-fr-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que désignent les crédits ECTS dans le système européen LMD ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Points de réduction pour le restaurant — Poin potongan harga di restoran",
          "Crédits téléphoniques — Pulsa telepon seluler",
          "Heures de sport — Jam kegiatan olahraga",
          "Crédits d'évaluation semestriels (30 ECTS par semestre / 60 par an) — Satuan kredit akademik Eropa (30 ECTS per semester / 60 per tahun)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Les crédits ECTS (European Credit Transfer System) mesurent le volume de travail requis."
      },
      {
        "id": "q-fr-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quelle est la différence fondamentale entre un CM (Cours Magistral) et un TD (Travaux Dirigés) ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Le CM a lieu en amphithéâtre pour la théorie, le TD en petit groupe pour les exercices pratiques — CM adalah kuliah teori di aula besar, sedangkan TD adalah kelas diskusi praktik kelompok kecil",
          "Le CM est réservé aux vacances — CM hanya diadakan saat musim liburan",
          "Le TD est un cours de sport — TD adalah pelajaran olahraga",
          "Il n'y a aucune différence — Tidak ada perbedaan sama sekali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le cours magistral transmet les concepts généraux alors que le TD applique la méthode en groupes restreints."
      },
      {
        "id": "q-fr-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que signifie l'acronyme CROUS dans la vie étudiante en France ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Club de Randonnée et d'Orientation Universitaire — Klub pendakian dan orientasi alam kampus",
          "Centre Régional des Œuvres Universitaires et Scolaires (résidences et Restos U) — Badan layanan kemahasiswaan regional (pengelola asrama & kantin mahasiswa bersubsidi)",
          "Comité de Recherche d'Ouvrages Spécialisés — Komite pencarian buku khusus",
          "Centre de Réparation d'Outils Numériques — Pusat reparasi perangkat digital"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Le CROUS gère les logements universitaires, la restauration étudiante et les bourses sur critères sociaux."
      },
      {
        "id": "q-fr-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Le terme 'soutenance de mémoire' correspond à :",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Un examen médical annuel — Pemeriksaan kesehatan tahunan",
          "Une fête de fin d'année — Pesta perayaan akhir tahun",
          "L'épreuve orale publique de présentation et de défense des conclusions de la recherche — Sidang ujian lisan terbuka untuk mempresentasikan dan mempertahankan hasil riset tesis",
          "L'achat de matériel de laboratoire — Pembelian peralatan laboratorium"
        ],
        "correctAnswerIndex": 2,
        "explanation": "La soutenance est l'évaluation orale terminale devant un jury académique."
      },
      {
        "id": "q-fr-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que signifie l'aide 'APL' accordée par la CAF aux étudiants louant un logement ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Assurance Prévoyance Logement — Asuransi perlindungan tempat tinggal",
          "Abonnement Pour Livres — Langganan peminjaman buku",
          "Allocation Pour Loisirs — Tunjangan dana rekreasi",
          "Aide Personnalisée au Logement (allocation financière réduisant le loyer mensuel) — Tunjangan subsidi sewa tempat tinggal dari pemerintah Prancis (CAF)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "L'APL est une prestation de la Caisse d'Allocations Familiales qui diminue le montant du loyer."
      },
      {
        "id": "q-fr-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quelle note minimale sur 20 est traditionnellement requise pour valider une unité d'enseignement (UE) ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "10 sur 20 (la moyenne) — Nilai 10 dari 20 (batas nilai rata-rata kelulusan)",
          "5 sur 20 — Nilai 5 dari 20 (tidak lulus)",
          "18 sur 20 — Nilai 18 dari 20 (sangat memuaskan)",
          "15 sur 20 — Nilai 15 dari 20 (predikat Bien)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La note de 10/20 représente le seuil de validation d'un module ou d'un semestre."
      },
      {
        "id": "q-fr-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Sans doute les historiens retiendront-ils cette période comme un tournant décisif.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Tidak diragukan lagi para sejarawan akan mencatat periode ini sebagai titik balik yang menentukan.",
        "keywords": [
          "diragukan",
          "lagi",
          "sejarawan",
          "mencatat"
        ],
        "explanation": "Kalimat akademik pola L'Inversion du Sujet dans le Style Littéraire et Académique: 'Sans doute les historiens retiendront-ils cette période comme un tournant décisif.' diterjemahkan secara akurat menjadi 'Tidak diragukan lagi para sejarawan akan mencatat periode ini sebagai titik balik yang menentukan.'."
      },
      {
        "id": "q-fr-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Il eût fallu que la communauté internationale prît conscience du danger imminent.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Komunitas internasional semestinya telah menyadari bahaya yang mengancam tersebut.",
        "keywords": [
          "komunitas",
          "internasional",
          "semestinya",
          "menyadari"
        ],
        "explanation": "Kalimat akademik pola Le Subjonctif Imparfait et Plus-que-parfait: 'Il eût fallu que la communauté internationale prît conscience du danger imminent.' diterjemahkan secara akurat menjadi 'Komunitas internasional semestinya telah menyadari bahaya yang mengancam tersebut.'."
      },
      {
        "id": "q-fr-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Cette découverte permettrait de reconsidérer l'ensemble de la chronologie antique.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Penemuan ini diperkirakan dapat meninjau ulang keseluruhan kronologi sejarah kuno.",
        "keywords": [
          "penemuan",
          "diperkirakan",
          "meninjau",
          "ulang"
        ],
        "explanation": "Kalimat akademik pola Nuances Polyphoniques et Modalisation du Discours: 'Cette découverte permettrait de reconsidérer l'ensemble de la chronologie antique.' diterjemahkan secara akurat menjadi 'Penemuan ini diperkirakan dapat meninjau ulang keseluruhan kronologi sejarah kuno.'."
      },
      {
        "id": "q-fr-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "La synthèse méthodique des archives permet de dégager trois axes d'interprétation.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Sintesis metodis terhadap arsip-arsip tersebut memungkinkan ditariknya tiga poros penafsiran.",
        "keywords": [
          "sintesis",
          "metodis",
          "terhadap",
          "arsip"
        ],
        "explanation": "Kalimat akademik pola Analyse Critique et Synthèse de Documents Universitaires: 'La synthèse méthodique des archives permet de dégager trois axes d'interprétation.' diterjemahkan secara akurat menjadi 'Sintesis metodis terhadap arsip-arsip tersebut memungkinkan ditariknya tiga poros penafsiran.'."
      },
      {
        "id": "q-fr-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Je vous saurais gré de bien vouloir examiner ma candidature avec bienveillance.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Saya akan sangat berterima kasih kiranya Anda berkenan meninjau berkas lamaran saya dengan penuh kebaikan.",
        "keywords": [
          "berterima",
          "kasih",
          "kiranya",
          "berkenan"
        ],
        "explanation": "Kalimat akademik pola Formules Épistolaires Académiques et Institutionnelles: 'Je vous saurais gré de bien vouloir examiner ma candidature avec bienveillance.' diterjemahkan secara akurat menjadi 'Saya akan sangat berterima kasih kiranya Anda berkenan meninjau berkas lamaran saya dengan penuh kebaikan.'."
      },
      {
        "id": "q-fr-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Cette crise politique est venue cristalliser des tensions socio-économiques larvées.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Krisis politik ini mengkristalkan ketegangan-ketegangan sosial ekonomi yang selama ini terpendam.",
        "keywords": [
          "krisis",
          "politik",
          "mengkristalkan",
          "ketegangan"
        ],
        "explanation": "Kalimat akademik pola Métaphores Conceptuelles et Collocations Soutenues: 'Cette crise politique est venue cristalliser des tensions socio-économiques larvées.' diterjemahkan secara akurat menjadi 'Krisis politik ini mengkristalkan ketegangan-ketegangan sosial ekonomi yang selama ini terpendam.'."
      },
      {
        "id": "q-fr-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Qu'il me soit permis de réfuter l'objection selon laquelle cette approche serait obsolète.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Perkenankanlah saya membantah keberatan yang menyatakan bahwa pendekatan ini telah usang.",
        "keywords": [
          "perkenankanlah",
          "membantah",
          "keberatan",
          "menyatakan"
        ],
        "explanation": "Kalimat akademik pola Rhétorique du Plaidoyer et de la Réfutation Dialectique: 'Qu'il me soit permis de réfuter l'objection selon laquelle cette approche serait obsolète.' diterjemahkan secara akurat menjadi 'Perkenankanlah saya membantah keberatan yang menyatakan bahwa pendekatan ini telah usang.'."
      },
      {
        "id": "q-fr-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Le présent décret entre en vigueur le premier jour du mois suivant sa publication.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Keputusan ini mulai berlaku pada hari pertama bulan berikutnya setelah tanggal pengundangannya.",
        "keywords": [
          "keputusan",
          "mulai",
          "berlaku",
          "hari"
        ],
        "explanation": "Kalimat akademik pola Stylistique des Textes Juridiques et Institutionnels Français: 'Le présent décret entre en vigueur le premier jour du mois suivant sa publication.' diterjemahkan secara akurat menjadi 'Keputusan ini mulai berlaku pada hari pertama bulan berikutnya setelah tanggal pengundangannya.'."
      },
      {
        "id": "q-fr-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "La problématique centrale interroge l'articulation dialectique entre tradition et modernité.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Rumusan masalah utama menelaah artikulasi dialektis antara tradisi dan modernitas.",
        "keywords": [
          "rumusan",
          "masalah",
          "utama",
          "menelaah"
        ],
        "explanation": "Kalimat akademik pola Rédaction de la Problématique et du Plan de Mémoire: 'La problématique centrale interroge l'articulation dialectique entre tradition et modernité.' diterjemahkan secara akurat menjadi 'Rumusan masalah utama menelaah artikulasi dialektis antara tradisi dan modernitas.'."
      },
      {
        "id": "q-fr-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Monsieur le Président, mesdames et messieurs les membres du jury, je vous remercie pour l'attention bienveillante que vous avez portée à mes travaux.",
        "audioVoiceLang": "fr-FR",
        "sampleAnswer": "Bapak Ketua Sidang, Ibu dan Bapak anggota dewan penguji yang terhormat, saya mengucapkan terima kasih atas perhatian saksama yang Anda berikan terhadap karya penelitian saya.",
        "keywords": [
          "bapak",
          "ketua",
          "sidang",
          "anggota"
        ],
        "explanation": "Kalimat akademik pola Soutenance Orale de Thèse et Dialogue avec les Pairs: 'Monsieur le Président, mesdames et messieurs les membres du jury, je vous remercie pour l'attention bienveillante que vous avez portée à mes travaux.' diterjemahkan secara akurat menjadi 'Bapak Ketua Sidang, Ibu dan Bapak anggota dewan penguji yang terhormat, saya mengucapkan terima kasih atas perhatian saksama yang Anda berikan terhadap karya penelitian saya.'."
      },
      {
        "id": "q-fr-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan janji temu: 'Saya ingin memohon janji temu untuk mendiskusikan perkembangan tugas akhir saya'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "sur mon mémoire",
          "pour faire le point",
          "solliciter un rendez-vous",
          "Je souhaite"
        ],
        "correctOrder": [
          "Je souhaite",
          "solliciter un rendez-vous",
          "pour faire le point",
          "sur mon mémoire"
        ],
        "explanation": "Ordre syntaxique formel : Sujet (Je souhaite) + Verbe/Objet (solliciter un rendez-vous) + But (pour faire le point sur mon mémoire).",
        "targetSentence": "Je souhaite solliciter un rendez-vous pour faire le point sur mon mémoire"
      },
      {
        "id": "q-fr-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat validasi ECTS: 'Mahasiswa harus menyelesaikan enam puluh kredit per tahun ajaran'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "par année universitaire",
          "Les étudiants doivent",
          "valider soixante crédits"
        ],
        "correctOrder": [
          "Les étudiants doivent",
          "valider soixante crédits",
          "par année universitaire"
        ],
        "explanation": "Ordre réglementaire : Sujet modal (Les étudiants doivent) + Verbe d'évaluation (valider soixante crédits) + Cadre temporel (par année universitaire).",
        "targetSentence": "Les étudiants doivent valider soixante crédits par année universitaire"
      },
      {
        "id": "q-fr-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat pendekatan ilmiah: 'Proyek penelitian ini sepenuhnya mengikuti kaidah ilmiah yang ketat'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "la démarche scientifique",
          "respecte scrupuleusement",
          "Ce projet de recherche"
        ],
        "correctOrder": [
          "Ce projet de recherche",
          "respecte scrupuleusement",
          "la démarche scientifique"
        ],
        "explanation": "Ordre académique : Sujet (Ce projet de recherche) + Adverbe/Verbe (respecte scrupuleusement) + Complément d'objet (la démarche scientifique).",
        "targetSentence": "Ce projet de recherche respecte scrupuleusement la démarche scientifique"
      },
      {
        "id": "q-fr-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan kampus menawarkan akses ke jurnal ilmiah internasional'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "aux revues scientifiques internationales",
          "La bibliothèque universitaire",
          "propose un accès"
        ],
        "correctOrder": [
          "La bibliothèque universitaire",
          "propose un accès",
          "aux revues scientifiques internationales"
        ],
        "explanation": "Ordre : Sujet (La bibliothèque universitaire) + Verbe/Objet (propose un accès) + Destinataire (aux revues scientifiques internationales).",
        "targetSentence": "La bibliothèque universitaire propose un accès aux revues scientifiques internationales"
      },
      {
        "id": "q-fr-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang kelulusan: 'Sidang presentasi tesis magister akan berlangsung pada bulan Juni di hadapan juri'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "devant le jury académique",
          "aura lieu en juin",
          "La soutenance du mémoire"
        ],
        "correctOrder": [
          "La soutenance du mémoire",
          "aura lieu en juin",
          "devant le jury académique"
        ],
        "explanation": "Ordre événementiel : Sujet (La soutenance du mémoire) + Verbe/Temps (aura lieu en juin) + Circonstance (devant le jury académique).",
        "targetSentence": "La soutenance du mémoire aura lieu en juin devant le jury académique"
      },
      {
        "id": "q-fr-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Directeur de recherche (directeur de thèse)':",
        "targetSentence": "Directeur de recherche",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Kantin Universitas Bersubsidi CROUS",
          "Cuti Akademik / Tahun Jeda Kuliah",
          "Ruang Kuliah Teater / Auditorium",
          "Dosen Pembimbing Penelitian / Disertasi"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Directeur de recherche (directeur de thèse)' adalah padanan untuk 'Dosen Pembimbing Penelitian / Disertasi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Relevé de notes officiel (bulletin)':",
        "targetSentence": "Relevé de notes officiel",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Transkrip Nilai Akademik Resmi",
          "Jadwal Perkuliahan Mingguan",
          "Surat Perjanjian Magang Resmi",
          "Biaya Pendaftaran / SPP Universitas"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Relevé de notes officiel (bulletin)' adalah padanan untuk 'Transkrip Nilai Akademik Resmi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Resto U (Restaurant Universitaire)':",
        "targetSentence": "Resto U",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Cuti Akademik / Tahun Jeda Kuliah",
          "Kantin Universitas Bersubsidi CROUS",
          "Predikat Sangat Memuaskan / Cum Laude",
          "Kartu Izin Tinggal Pelajar Asing"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Resto U (Restaurant Universitaire)' adalah padanan untuk 'Kantin Universitas Bersubsidi CROUS' di universitas Prancis."
      },
      {
        "id": "q-fr-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Emploi du temps (planning des cours)':",
        "targetSentence": "Emploi du temps",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Surat Perjanjian Magang Resmi",
          "Ruang Kuliah Teater / Auditorium",
          "Jadwal Perkuliahan Mingguan",
          "Dosen Pembimbing Penelitian / Disertasi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Emploi du temps (planning des cours)' adalah padanan untuk 'Jadwal Perkuliahan Mingguan' di universitas Prancis."
      },
      {
        "id": "q-fr-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Année de césure (gap year)':",
        "targetSentence": "Année de césure",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Predikat Sangat Memuaskan / Cum Laude",
          "Biaya Pendaftaran / SPP Universitas",
          "Transkrip Nilai Akademik Resmi",
          "Cuti Akademik / Tahun Jeda Kuliah"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Année de césure (gap year)' adalah padanan untuk 'Cuti Akademik / Tahun Jeda Kuliah' di universitas Prancis."
      },
      {
        "id": "q-fr-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Convention de stage tripartite':",
        "targetSentence": "Convention de stage tripartite",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Surat Perjanjian Magang Resmi",
          "Ruang Kuliah Teater / Auditorium",
          "Kartu Izin Tinggal Pelajar Asing",
          "Kantin Universitas Bersubsidi CROUS"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Convention de stage tripartite' adalah padanan untuk 'Surat Perjanjian Magang Resmi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Mention très bien (avec félicitations)':",
        "targetSentence": "Mention très bien",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Biaya Pendaftaran / SPP Universitas",
          "Predikat Sangat Memuaskan / Cum Laude",
          "Dosen Pembimbing Penelitian / Disertasi",
          "Jadwal Perkuliahan Mingguan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Mention très bien (avec félicitations)' adalah padanan untuk 'Predikat Sangat Memuaskan / Cum Laude' di universitas Prancis."
      },
      {
        "id": "q-fr-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Amphithéâtre (amphi)':",
        "targetSentence": "Amphithéâtre",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Kartu Izin Tinggal Pelajar Asing",
          "Transkrip Nilai Akademik Resmi",
          "Ruang Kuliah Teater / Auditorium",
          "Cuti Akademik / Tahun Jeda Kuliah"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Amphithéâtre (amphi)' adalah padanan untuk 'Ruang Kuliah Teater / Auditorium' di universitas Prancis."
      },
      {
        "id": "q-fr-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Droits d':",
        "targetSentence": "Droits d",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Dosen Pembimbing Penelitian / Disertasi",
          "Kantin Universitas Bersubsidi CROUS",
          "Surat Perjanjian Magang Resmi",
          "Biaya Pendaftaran / SPP Universitas"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Droits d'inscription universitaire' adalah padanan untuk 'Biaya Pendaftaran / SPP Universitas' di universitas Prancis."
      },
      {
        "id": "q-fr-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Titre de séjour étudiant (VLS-TS)':",
        "targetSentence": "Titre de séjour étudiant",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Kartu Izin Tinggal Pelajar Asing",
          "Transkrip Nilai Akademik Resmi",
          "Jadwal Perkuliahan Mingguan",
          "Predikat Sangat Memuaskan / Cum Laude"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Titre de séjour étudiant (VLS-TS)' adalah padanan untuk 'Kartu Izin Tinggal Pelajar Asing' di universitas Prancis."
      },
      {
        "id": "q-fr-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Skala penilaian akademik yang digunakan secara seragam di seluruh universitas Prancis adalah:",
        "options": [
          "Skala 0 sampai 4.00",
          "Skala nilai 0 sampai 20 (dengan 10 sebagai batas kelulusan)",
          "Skala huruf A sampai F",
          "Skala 0 sampai 100 persen"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Le système universitaire français note traditionnellement sur 20 points."
      },
      {
        "id": "q-fr-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas jam kerja sampingan berupah yang diizinkan untuk mahasiswa asing pemegang visa VLS-TS di Prancis?",
        "options": [
          "Bebas tanpa batasan jam kerja",
          "Hanya 5 jam per minggu",
          "Maksimal 60% dari durasi jam kerja legal tahunan (yaitu 964 jam per tahun)",
          "Dilarang bekerja sama sekali"
        ],
        "correctAnswerIndex": 2,
        "explanation": "La législation française autorise les étudiants étrangers à travailler jusqu'à 964 heures par an."
      },
      {
        "id": "q-fr-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa perbedaan antara Grandes Écoles dan Universités publiques di Prancis?",
        "options": [
          "Universités hanya mengajarkan seni",
          "Grandes Écoles adalah sekolah menengah",
          "Tidak ada perbedaan kurikulum",
          "Grandes Écoles adalah institusi selektif bergengsi dengan ujian masuk ketat (concours), sedangkan Universités memiliki akses terbuka untuk pemegang baccalauréat"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Les Grandes Écoles recrutent sur concours très sélectif et forment les cadres dirigeants."
      },
      {
        "id": "q-fr-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'CVEC' (Contribution Vie Étudiante et de Campus) yang wajib dibayar setiap tahun ajaran?",
        "options": [
          "Iuran wajib tahunan untuk mendanai layanan sosial, kesehatan, olahraga, dan budaya di kampus",
          "Biaya parkir sepeda",
          "Pajak sewa rumah",
          "Tiket bioskop kampus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La CVEC est obligatoire pour s'inscrire dans l'enseignement supérieur français."
      },
      {
        "id": "q-fr-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana sebutan untuk predikat kelulusan tertinggi (nilai 16/20 ke atas) di universitas Prancis?",
        "options": [
          "Mention Passable — Predikat Cukup Lulus (nilai 10–11,9/20)",
          "Mention Très Bien — Predikat Sangat Memuaskan / Cum Laude (nilai >= 16/20)",
          "Mention Assez Bien — Predikat Cukup Baik (nilai 12–13,9/20)",
          "Mention Éliminatoire — Nilai di bawah batas minimum yang menggugurkan kelulusan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "La mention Très Bien est décernée pour une moyenne égale ou supérieure à 16/20."
      },
      {
        "id": "q-fr-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi platform resmi 'Campus France' bagi calon mahasiswa internasional?",
        "options": [
          "Menjual tiket penerbangan",
          "Menyewakan apartemen mewah",
          "Memproses pendaftaran aplikasi studi, verifikasi dokumen, dan wawancara visa pelajar",
          "Memberikan pinjaman bank"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Campus France est l'agence publique chargée de promouvoir l'enseignement supérieur français."
      },
      {
        "id": "q-fr-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kapan tahun akademik perkuliahan (rentrée universitaire) biasanya dimulai di Prancis?",
        "options": [
          "Bulan Januari",
          "Bulan April",
          "Bulan Juli",
          "Bulan September atau awal Oktober"
        ],
        "correctAnswerIndex": 3,
        "explanation": "La rentrée universitaire s'effectue traditionnellement en septembre ou début octobre."
      },
      {
        "id": "q-fr-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam budaya penulisan esai ilmiah Prancis, apa yang dimaksud dengan 'Problématique'?",
        "options": [
          "Pertanyaan konseptual sentral yang memandu seluruh alur analisis dan perdebatan teoritis",
          "Daftar masalah pribadi mahasiswa",
          "Keluhan tentang fasilitas perpustakaan",
          "Biaya cetak makalah"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La problématique est la question centrale à laquelle la réflexion tente de répondre."
      },
      {
        "id": "q-fr-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah mahasiswa internasional di Prancis berhak mendapatkan jaminan kesehatan gratis?",
        "options": [
          "Tidak, harus membayar 5.000 euro per bulan",
          "Ya, berhak mendaftar di Sécurité Sociale (l'Assurance Maladie) secara gratis",
          "Hanya untuk warga negara Uni Eropa",
          "Hanya berlaku jika dirawat di rumah sakit swasta"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Les étudiants internationaux bénéficient de la gratuité de la Sécurité Sociale française."
      },
      {
        "id": "q-fr-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan istilah 'Partiels' dalam kalender akademik universitas Prancis?",
        "options": [
          "Pesta perkenalan mahasiswa",
          "Liburan akhir pekan",
          "Ujian semester berkala (tengah semester / akhir semester)",
          "Jadwal senam pagi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Les partiels sont les sessions d'examens semestriels écrits ou oraux."
      },
      {
        "id": "q-fr-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti kata 'Rattrapage' jika seorang mahasiswa belum mencapai nilai 10/20 di ujian pertama?",
        "options": [
          "Pengusiran dari kampus",
          "Pengulangan satu tahun penuh",
          "Pembayaran denda tunai",
          "Sesi ujian perbaikan / remedial kedua untuk memperbaiki nilai"
        ],
        "correctAnswerIndex": 3,
        "explanation": "La session de rattrapage (deuxième session) permet de repasser les épreuves non validées."
      },
      {
        "id": "q-fr-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'BU' (Bibliothèque Universitaire) dalam mendukung riset mahasiswa?",
        "options": [
          "Menyediakan ruang belajar tenang, peminjaman literatur, pangkalan data CAIRN, JSTOR, dan lokakarya metodologi",
          "Menjual makanan cepat saji",
          "Tempat menonton film bioskop",
          "Kantor pendaftaran kursus mobil"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La BU est le centre névralgique de la documentation universitaire et de la recherche."
      },
      {
        "id": "q-fr-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana struktur pembagian jenjang studi dalam sistem Eropa LMD di Prancis?",
        "options": [
          "Tiap jenjang memakan waktu 1 tahun",
          "Licence (3 ans - 180 ECTS), Master (2 ans - 120 ECTS), Doctorat (3 ans - 180 ECTS)",
          "Licence 5 tahun dan Master 5 tahun",
          "Tidak mengenal jenjang berjenjang"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Le système LMD est structuré en 3 niveaux d'études supérieures successifs."
      },
      {
        "id": "q-fr-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kepanjangan dari 'TGV' dan bagaimana relevansinya bagi mobilitas mahasiswa antar kota di Prancis?",
        "options": [
          "Transport Général de Ville",
          "Taxi Grand Volume",
          "Train à Grande Vitesse, dengan kartu diskon Carte Avantage Jeune untuk tarif hemat mahasiswa",
          "Téléphérique Gare Voyager"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Le TGV permet des liaisons ultra-rapides à travers la France avec des tarifs avantageux pour les jeunes."
      },
      {
        "id": "q-fr-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Sebelum menyerahkan laporan magang (rapport de stage), dokumen pengesahan apa yang harus ditandatangani perusahaan dan kampus?",
        "options": [
          "Kwitansi gaji bulanan",
          "Kartu nama direktur",
          "Foto bersama rekan kerja",
          "L'attestation de stage et la fiche d'évaluation du tuteur d'entreprise"
        ],
        "correctAnswerIndex": 3,
        "explanation": "L'attestation de stage certifie la réalisation effective et valide de la mission professionnelle."
      }
    ]
  }
};

export const NETHERLANDS_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "nl-1": {
    "id": "test-nl-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Belanda (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Belanda.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-nl-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat betekent het woord 'scriptie' aan een Nederlandse universiteit?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Tesis / Skripsi tugas akhir kelulusan sarjana atau master",
          "Kartu ujian masuk kampus",
          "Daftar belanjaan bulanan",
          "Kwitansi sewa kamar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Een scriptie is het afsluitende wetenschappelijke werkstuk voor het behalen van een academische graad."
      },
      {
        "id": "q-nl-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welk voegwoord is grammaticaal correct: 'De studenten werken hard ______ het tentamen te halen.'",
        "audioVoiceLang": "nl-NL",
        "options": [
          "want — karena (konjungsi koordinatif)",
          "om (... te) — untuk / guna (konjungsi tujuan dengan infinitif \"te halen\")",
          "omdat — karena (konjungsi subordinatif)",
          "hoewel — meskipun / walaupun"
        ],
        "correctAnswerIndex": 1,
        "explanation": "De constructie 'om + te + infinitief' drukt een doel uit: 'om het tentamen te halen'."
      },
      {
        "id": "q-nl-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Hoe noemt men het officiële overzicht met alle behaalde studieresultaten en studiepunten?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Het lesrooster — Jadwal mata pelajaran mingguan",
          "Het huurcontract — Surat kontrak sewa kamar",
          "De cijferlijst (Transcript of Records) — Transkrip nilai resmi yang memuat seluruh nilai dan kredit ECTS",
          "De collegekaart — Kartu tanda mahasiswa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Een cijferlijst geeft een officieel overzicht van vakken, cijfers en behaalde ECTS-punten."
      },
      {
        "id": "q-nl-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat is het verschil tussen een 'hoorcollege' en een 'werkcollege' in het Nederlands hoger onderwijs?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Hoorcollege is online; werkcollege is vakantie — Hoorcollege daring; werkcollege libur",
          "Werkcollege is uitsluitend sport — Werkcollege khusus olahraga",
          "Er is geen enkel verschil — Tidak ada perbedaan sama sekali",
          "Hoorcollege is een klassikale uiteenzetting in de aula; werkcollege is een interactieve oefengroep — Hoorcollege adalah kuliah teori di aula besar; werkcollege adalah kelas tutorial latihan interaktif"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Tijdens een hoorcollege luisteren studenten naar de docent; in een werkcollege lossen zij actief casussen op."
      },
      {
        "id": "q-nl-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat betekent de afkorting 'BSN' voor een internationale student in Nederland?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Burgerservicenummer (uniek identificatienummer voor bank, belasting en zorg) — Nomor induk layanan kependudukan (wajib untuk rekening bank, pajak, dan asuransi kesehatan)",
          "Basis Studie Nummer — Nomor studi dasar (istilah fiktif)",
          "Bibliotheek Service Nederland — Layanan perpustakaan Belanda",
          "Buitenlands Studenten Netwerk — Jaringan mahasiswa asing"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Het BSN is noodzakelijk voor alle officiële zaken bij de gemeente en instanties in Nederland."
      },
      {
        "id": "q-nl-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat is de taak van de universitaire 'studieadviseur'?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Het verkopen van studieboeken — Menjual buku teks perkuliahan",
          "Het adviseren en begeleiden van studenten bij studieplanning, vakkenkeuze en persoonlijke knelpunten — Membimbing mahasiswa terkait perencanaan studi, pemilihan mata kuliah, dan kendala akademik",
          "Het koken van maaltijden in de kantine — Memasak makanan di kantin kampus",
          "Het onderhouden van computers — Merawat komputer laboratorium"
        ],
        "correctAnswerIndex": 1,
        "explanation": "De studieadviseur helpt bij studievoortgang, studievertraging en regels van de examencommissie."
      },
      {
        "id": "q-nl-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat is het 'zoekjaar' (Orientation Year) voor afgestudeerden in Nederland?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Een jaar verplichte militaire dienst — Satu tahun wajib militer",
          "Een jaar gratis vakantie — Satu tahun liburan gratis",
          "Een verblijfsvergunning van één jaar om een baan als kennismigrant te zoeken na het afstuderen — Izin tinggal satu tahun pasca-kelulusan untuk mencari pekerjaan profesional di Belanda",
          "Een jaar wachten op het diploma — Satu tahun menunggu pencetakan ijazah"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Het zoekjaar biedt hoogopgeleide buitenlandse afgestudeerden de kans om werk te vinden in Nederland."
      },
      {
        "id": "q-nl-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat betekent 'een voldoende halen' in het Nederlandse beoordelingssysteem (schaal 1-10)?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Een cijfer 1 behalen — Mendapatkan nilai 1 (sangat buruk)",
          "Een 10 met lof scoren — Mendapatkan nilai sempurna 10",
          "Alleen aanwezig zijn in de les — Hanya sekadar hadir di kelas",
          "Minimaal een 5,5 of 6,0 behalen om te slagen voor het vak — Meraih nilai minimal 5,5 atau 6,0 untuk dinyatakan lulus mata kuliah"
        ],
        "correctAnswerIndex": 3,
        "explanation": "In het Nederlandse cijfersysteem geldt 5,5 (vaak afgerond naar 6) als de minimale voldoende grens."
      },
      {
        "id": "q-nl-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat houdt 'plagiaat' in volgens de academische gedragscode?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Het overnemen van andermans ideeën, data of teksten zonder correcte bronvermelding — Mengambil gagasan, data, atau teks orang lain tanpa mencantumkan sumber kutipan yang benar",
          "Te laat komen voor een college — Datang terlambat ke ruang kuliah",
          "Het lenen van een pen van een studiegenoot — Meminjam pena dari teman kuliah",
          "Het schrijven in het Engels — Menulis makalah dalam bahasa Inggris"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Plagiaat is een ernstige vorm van wetenschappelijk wangedrag die kan leiden tot schorsing."
      },
      {
        "id": "q-nl-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Waarvoor staat de overheidsinstantie 'DUO' in Nederland?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Digitale Universiteit Online — Universitas Digital Daring",
          "Dienst Uitvoering Onderwijs (verantwoordelijk voor examens, studiesubsidies en erkenning) — Badan Pelaksana Pendidikan Kementerian Belanda (pengelola pendanaan studi, ujian, dan penyetaraan ijazah)",
          "Directie Universitaire Opleidingen — Direktorat Pelatihan Universitas",
          "Dienst Uitwisseling Onderzoekers — Dinas Pertukaran Peneliti"
        ],
        "correctAnswerIndex": 1,
        "explanation": "DUO voert onderwijswetten uit namens het ministerie van Onderwijs, Cultuur en Wetenschap."
      }
    ]
  },
  "nl-2": {
    "id": "test-nl-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Belanda.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-nl-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "De commissie heeft de door diverse maatschappelijke organisaties ingediende bezwaren na ampele overweging verworpen.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Komisi tersebut setelah pertimbangan mendalam telah menolak keberatan-keberatan yang diajukan oleh berbagai organisasi kemasyarakatan.",
        "keywords": [
          "komisi",
          "tersebut",
          "setelah",
          "pertimbangan"
        ],
        "explanation": "Kalimat akademik pola Syntactische Verdichting en Complexe Tangconstructies: 'De commissie heeft de door diverse maatschappelijke organisaties ingediende bezwaren na ampele overweging verworpen.' diterjemahkan secara akurat menjadi 'Komisi tersebut setelah pertimbangan mendalam telah menolak keberatan-keberatan yang diajukan oleh berbagai organisasi kemasyarakatan.'."
      },
      {
        "id": "q-nl-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Deze bevindingen nopen tot een fundamentele herbezinning op de vigerende theoretische premissen.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Temuan-temuan ini mendorong peninjauan ulang secara mendasar terhadap premis-premis teoretis yang berlaku saat ini.",
        "keywords": [
          "temuan",
          "mendorong",
          "peninjauan",
          "ulang"
        ],
        "explanation": "Kalimat akademik pola Subtiele Stijlaspecten van Wetenschappelijk Nederlands: 'Deze bevindingen nopen tot een fundamentele herbezinning op de vigerende theoretische premissen.' diterjemahkan secara akurat menjadi 'Temuan-temuan ini mendorong peninjauan ulang secara mendasar terhadap premis-premis teoretis yang berlaku saat ini.'."
      },
      {
        "id": "q-nl-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "De centrale onderzoeksvraag luidt in hoeverre digitalisering bijdraagt aan kansengelijkheid in het onderwijs.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Pertanyaan penelitian utama berbunyi sejauh mana digitalisasi berkontribusi terhadap kesetaraan peluang dalam dunia pendidikan.",
        "keywords": [
          "pertanyaan",
          "penelitian",
          "utama",
          "berbunyi"
        ],
        "explanation": "Kalimat akademik pola Formulering van Onderzoeksvragen en Methodologische Verantwoording: 'De centrale onderzoeksvraag luidt in hoeverre digitalisering bijdraagt aan kansengelijkheid in het onderwijs.' diterjemahkan secara akurat menjadi 'Pertanyaan penelitian utama berbunyi sejauh mana digitalisasi berkontribusi terhadap kesetaraan peluang dalam dunia pendidikan.'."
      },
      {
        "id": "q-nl-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Zoals Van Dijk (2021) treffend uiteenzet, is de contextuele inbedding van doorslaggevend belang.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Sebagaimana diuraikan secara tepat oleh Van Dijk (2021), keterlekatan kontekstual memegang peranan yang sangat menentukan.",
        "keywords": [
          "sebagaimana",
          "diuraikan",
          "secara",
          "tepat"
        ],
        "explanation": "Kalimat akademik pola Kritische Bronvermelding en Parafraseringstechnieken: 'Zoals Van Dijk (2021) treffend uiteenzet, is de contextuele inbedding van doorslaggevend belang.' diterjemahkan secara akurat menjadi 'Sebagaimana diuraikan secara tepat oleh Van Dijk (2021), keterlekatan kontekstual memegang peranan yang sangat menentukan.'."
      },
      {
        "id": "q-nl-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Krachtens artikel 7 van de Wet op het hoger onderwijs is het instellingsbestuur bevoegd.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Berdasarkan Pasal 7 Undang-Undang Pendidikan Tinggi, dewan pengurus institusi memiliki kewenangan sah.",
        "keywords": [
          "berdasarkan",
          "pasal",
          "undang",
          "pendidikan"
        ],
        "explanation": "Kalimat akademik pola Juridische en Bestuurlijke Terminologie in de Lage Landen: 'Krachtens artikel 7 van de Wet op het hoger onderwijs is het instellingsbestuur bevoegd.' diterjemahkan secara akurat menjadi 'Berdasarkan Pasal 7 Undang-Undang Pendidikan Tinggi, dewan pengurus institusi memiliki kewenangan sah.'."
      },
      {
        "id": "q-nl-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Men zou hiertegen kunnen inbrengen dat de steekproefomvang beperkt is; deze tegenwerping snijdt evenwel geen hout.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Orang mungkin mengajukan keberatan bahwa ukuran sampel terbatas; namun sanggahan ini tidak berdasar kuat.",
        "keywords": [
          "orang",
          "mungkin",
          "mengajukan",
          "keberatan"
        ],
        "explanation": "Kalimat akademik pola Retorische Argumentatiestructuren en Tegenwerpingen: 'Men zou hiertegen kunnen inbrengen dat de steekproefomvang beperkt is; deze tegenwerping snijdt evenwel geen hout.' diterjemahkan secara akurat menjadi 'Orang mungkin mengajukan keberatan bahwa ukuran sampel terbatas; namun sanggahan ini tidak berdasar kuat.'."
      },
      {
        "id": "q-nl-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "In het overheidsbeleid wordt de arbeidsmarkt steevast geframed als een motor van economische vooruitgang.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Dalam kebijakan pemerintah, pasar tenaga kerja senantiasa dibingkai sebagai motor penggerak kemajuan ekonomi.",
        "keywords": [
          "kebijakan",
          "pemerintah",
          "pasar",
          "tenaga"
        ],
        "explanation": "Kalimat akademik pola Metaforen en Conceptuele Beeldspraak in Beleidsdocumenten: 'In het overheidsbeleid wordt de arbeidsmarkt steevast geframed als een motor van economische vooruitgang.' diterjemahkan secara akurat menjadi 'Dalam kebijakan pemerintah, pasar tenaga kerja senantiasa dibingkai sebagai motor penggerak kemajuan ekonomi.'."
      },
      {
        "id": "q-nl-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Een nauwgezette deconstructie van de tekst legt inherente tegenstrijdigheden bloot.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Dekonstruksi yang cermat terhadap teks tersebut menyingkap kontradiksi-kontradiksi yang melekat di dalamnya.",
        "keywords": [
          "dekonstruksi",
          "cermat",
          "terhadap",
          "teks"
        ],
        "explanation": "Kalimat akademik pola Discursieve Analyse van Filosofische en Maatschappelijke Teksten: 'Een nauwgezette deconstructie van de tekst legt inherente tegenstrijdigheden bloot.' diterjemahkan secara akurat menjadi 'Dekonstruksi yang cermat terhadap teks tersebut menyingkap kontradiksi-kontradiksi yang melekat di dalamnya.'."
      },
      {
        "id": "q-nl-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "De inleiding schetst de status quaestionis en formuleert de wetenschappelijke lacune die dit onderzoek vult.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Bab pendahuluan memetakan status quaestionis (perkembangan riset terkini) dan merumuskan celah keilmuan yang diisi oleh penelitian ini.",
        "keywords": [
          "pendahuluan",
          "memetakan",
          "status",
          "quaestionis"
        ],
        "explanation": "Kalimat akademik pola Redactie van de Inleiding en Conclusie van een Masterscriptie: 'De inleiding schetst de status quaestionis en formuleert de wetenschappelijke lacune die dit onderzoek vult.' diterjemahkan secara akurat menjadi 'Bab pendahuluan memetakan status quaestionis (perkembangan riset terkini) dan merumuskan celah keilmuan yang diisi oleh penelitian ini.'."
      },
      {
        "id": "q-nl-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Mijnheer de rector, geachte leden van de promotiecommissie, ik dank u voor de gelegenheid mijn proefschrift te verdedigen.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Bapak Rektor yang mulia, para anggota komisi promosi yang terhormat, saya mengucapkan terima kasih atas kesempatan mempertahankan disertasi saya.",
        "keywords": [
          "bapak",
          "rektor",
          "mulia",
          "anggota"
        ],
        "explanation": "Kalimat akademik pola Academische Openbare Verdediging van het Proefschrift: 'Mijnheer de rector, geachte leden van de promotiecommissie, ik dank u voor de gelegenheid mijn proefschrift te verdedigen.' diterjemahkan secara akurat menjadi 'Bapak Rektor yang mulia, para anggota komisi promosi yang terhormat, saya mengucapkan terima kasih atas kesempatan mempertahankan disertasi saya.'."
      }
    ]
  },
  "nl-3": {
    "id": "test-nl-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis Kalimat Belanda (5 Soal Sambung Kata)",
    "description": "Uji ketelitian menyusun tata urutan klausa regulasi kampus, registrasi mata kuliah, dan korespondensi resmi di Belanda.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-nl-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat resmi membuat janji temu: 'Saya ingin membuat janji temu dengan profesor untuk mendiskusikan penelitian saya'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "over mijn onderzoek",
          "met de professor",
          "een afspraak maken",
          "Ik wil graag"
        ],
        "correctOrder": [
          "Ik wil graag",
          "een afspraak maken",
          "met de professor",
          "over mijn onderzoek"
        ],
        "explanation": "Vaste volgorde: Modale constructie (Ik wil graag) + Infinitiefgroep (een afspraak maken) + Gesprekspartner (met de professor) + Onderwerp (over mijn onderzoek).",
        "targetSentence": "Ik wil graag een afspraak maken met de professor over mijn onderzoek"
      },
      {
        "id": "q-nl-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beban studi: 'Mahasiswa harus memperoleh enam puluh kredit ECTS setiap tahun akademik'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "per collegejaar",
          "behalen",
          "Studenten moeten",
          "zestig studiepunten"
        ],
        "correctOrder": [
          "Studenten moeten",
          "zestig studiepunten",
          "per collegejaar",
          "behalen"
        ],
        "explanation": "Reglementaire volgorde: Modale bepaling (Studenten moeten) + Object (zestig studiepunten) + Tijdskader (per collegejaar) + Hoofdwerkwoord (behalen).",
        "targetSentence": "Studenten moeten zestig studiepunten per collegejaar behalen"
      },
      {
        "id": "q-nl-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat nilai akademis: 'Universitas Belanda mendorong pemikiran mandiri dan kritis pada setiap mahasiswa'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "bij studenten",
          "en kritisch denken",
          "stimuleren zelfstandig",
          "Nederlandse universiteiten"
        ],
        "correctOrder": [
          "Nederlandse universiteiten",
          "stimuleren zelfstandig",
          "en kritisch denken",
          "bij studenten"
        ],
        "explanation": "Academische volgorde: Onderwerp (Nederlandse universiteiten) + Werkwoord (stimuleren) + Doel/Kwaliteit (zelfstandig en kritisch denken) + Doelgroep (bij studenten).",
        "targetSentence": "Nederlandse universiteiten stimuleren zelfstandig en kritisch denken bij studenten"
      },
      {
        "id": "q-nl-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat persetujuan komite: 'Proposal penelitian telah disetujui secara resmi oleh komite ujian'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "door de examencommissie",
          "officieel goedgekeurd",
          "Het onderzoeksvoorstel is"
        ],
        "correctOrder": [
          "Het onderzoeksvoorstel is",
          "officieel goedgekeurd",
          "door de examencommissie"
        ],
        "explanation": "Passieve volgorde: Onderwerp (Het onderzoeksvoorstel is) + Bepaling van wijze (officieel goedgekeurd) + Handelende instantie (door de examencommissie).",
        "targetSentence": "Het onderzoeksvoorstel is officieel goedgekeurd door de examencommissie"
      },
      {
        "id": "q-nl-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat bimbingan: 'Dosen pembimbing skripsi memberikan masukan yang sangat berharga atas naskah draft'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "op het conceptverslag",
          "De scriptiebegeleider geeft",
          "waardevolle feedback"
        ],
        "correctOrder": [
          "De scriptiebegeleider geeft",
          "waardevolle feedback",
          "op het conceptverslag"
        ],
        "explanation": "Urutan: Onderwerp/Werkwoord (De scriptiebegeleider geeft) + Lijdend voorwerp (waardevolle feedback) + Voorzetselvoorwerp (op het conceptverslag).",
        "targetSentence": "De scriptiebegeleider geeft waardevolle feedback op het conceptverslag"
      }
    ]
  },
  "nl-4": {
    "id": "test-nl-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Belanda (10 Soal Artikan)",
    "description": "Uji penguasaan glosarium akademik, peristilahan seminar ilmiah, dan sistem administrasi kampus di Belanda.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-nl-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Afstudeerbegeleider (promotor / scriptiebegeleider)':",
        "targetSentence": "Afstudeerbegeleider",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Dosen Pembimbing Skripsi / Tesis / Promotor",
          "Beban Studi Akademik (SKS Eropa)",
          "Krisis Ketersediaan Tempat Tinggal Mahasiswa",
          "Surat Keterangan Registrasi Mahasiswa Aktif"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Afstudeerbegeleider (promotor / scriptiebegeleider)' adalah padanan untuk 'Dosen Pembimbing Skripsi / Tesis / Promotor' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Tentamen (deeltentamen / hertentamen)':",
        "targetSentence": "Tentamen",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Uang Kuliah Tunggal / Biaya Pendidikan Tahunan",
          "Ujian Tertulis Resmi (Ujian Semester / Remedial)",
          "Komite Dewan Penguji Akademik Program Studi",
          "Dispensasi Pembebasan Mata Kuliah"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Tentamen (deeltentamen / hertentamen)' adalah padanan untuk 'Ujian Tertulis Resmi (Ujian Semester / Remedial)' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Studielast (in European Credits / ECTS)':",
        "targetSentence": "Studielast",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Krisis Ketersediaan Tempat Tinggal Mahasiswa",
          "Lulus dengan Predikat Pujian / Cum Laude",
          "Beban Studi Akademik (SKS Eropa)",
          "Skema Izin Tinggal Pekerja Migran Terampil"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Studielast (in European Credits / ECTS)' adalah padanan untuk 'Beban Studi Akademik (SKS Eropa)' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Collegegeld (wettelijk / instellingstarief)':",
        "targetSentence": "Collegegeld",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Komite Dewan Penguji Akademik Program Studi",
          "Surat Keterangan Registrasi Mahasiswa Aktif",
          "Dosen Pembimbing Skripsi / Tesis / Promotor",
          "Uang Kuliah Tunggal / Biaya Pendidikan Tahunan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Collegegeld (wettelijk / instellingstarief)' adalah padanan untuk 'Uang Kuliah Tunggal / Biaya Pendidikan Tahunan' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Kamernood (woningtekort voor studenten)':",
        "targetSentence": "Kamernood",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Krisis Ketersediaan Tempat Tinggal Mahasiswa",
          "Lulus dengan Predikat Pujian / Cum Laude",
          "Dispensasi Pembebasan Mata Kuliah",
          "Ujian Tertulis Resmi (Ujian Semester / Remedial)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Kamernood (woningtekort voor studenten)' adalah padanan untuk 'Krisis Ketersediaan Tempat Tinggal Mahasiswa' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Examencommissie van de opleiding':",
        "targetSentence": "Examencommissie van de opleiding",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Surat Keterangan Registrasi Mahasiswa Aktif",
          "Komite Dewan Penguji Akademik Program Studi",
          "Skema Izin Tinggal Pekerja Migran Terampil",
          "Beban Studi Akademik (SKS Eropa)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Examencommissie van de opleiding' adalah padanan untuk 'Komite Dewan Penguji Akademik Program Studi' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Cum laude afstuderen (met lof)':",
        "targetSentence": "Cum laude afstuderen",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Dispensasi Pembebasan Mata Kuliah",
          "Dosen Pembimbing Skripsi / Tesis / Promotor",
          "Lulus dengan Predikat Pujian / Cum Laude",
          "Uang Kuliah Tunggal / Biaya Pendidikan Tahunan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Cum laude afstuderen (met lof)' adalah padanan untuk 'Lulus dengan Predikat Pujian / Cum Laude' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Bewijs van inschrijving aan de universiteit':",
        "targetSentence": "Bewijs van inschrijving aan de universiteit",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Skema Izin Tinggal Pekerja Migran Terampil",
          "Ujian Tertulis Resmi (Ujian Semester / Remedial)",
          "Krisis Ketersediaan Tempat Tinggal Mahasiswa",
          "Surat Keterangan Registrasi Mahasiswa Aktif"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Bewijs van inschrijving aan de universiteit' adalah padanan untuk 'Surat Keterangan Registrasi Mahasiswa Aktif' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Vrijstelling voor een studieonderdeel':",
        "targetSentence": "Vrijstelling voor een studieonderdeel",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Dispensasi Pembebasan Mata Kuliah",
          "Dosen Pembimbing Skripsi / Tesis / Promotor",
          "Beban Studi Akademik (SKS Eropa)",
          "Komite Dewan Penguji Akademik Program Studi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Vrijstelling voor een studieonderdeel' adalah padanan untuk 'Dispensasi Pembebasan Mata Kuliah' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Kennismigrantenregeling (kennismigrant)':",
        "targetSentence": "Kennismigrantenregeling",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Ujian Tertulis Resmi (Ujian Semester / Remedial)",
          "Skema Izin Tinggal Pekerja Migran Terampil",
          "Uang Kuliah Tunggal / Biaya Pendidikan Tahunan",
          "Lulus dengan Predikat Pujian / Cum Laude"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Kennismigrantenregeling (kennismigrant)' adalah padanan untuk 'Skema Izin Tinggal Pekerja Migran Terampil' di perguruan tinggi Belanda."
      }
    ]
  },
  "nl-5": {
    "id": "test-nl-5",
    "title": "Bagian 5: Wacana Silabus & Analisis Kasus Kampus Belanda (15 Soal Analisis Bebas)",
    "description": "Uji kesiapan komprehensif menghadapi perkuliahan nyata, etika laboratorium, dan dinamika mahasiswa internasional di Belanda.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-nl-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa nilai rata-rata minimal yang biasanya disyaratkan untuk predikat 'Cum Laude' di universitas Belanda?",
        "options": [
          "Rata-rata 6,0",
          "Rata-rata 10,0 mutlak",
          "Rata-rata nilai minimal 8,0 tanpa ada nilai di bawah 7,0 dan tanpa remedial",
          "Hanya memerlukan kehadiran penuh"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Voor het judicium 'cum laude' is doorgaans een gewogen gemiddelde van minimaal een 8,0 vereist."
      },
      {
        "id": "q-nl-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan sistem 'BSA' (Bindend Studieadvies) di tahun pertama sarjana (Bachelor) di Belanda?",
        "options": [
          "Saran memilih pakaian",
          "Rekomendasi beasiswa",
          "Jadwal libur semester",
          "Anjuran studi mengikat: mahasiswa wajib mengumpulkan minimal kredit tertentu (misal 45 dari 60 ECTS) agar tidak di-drop out"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Het Bindend Studieadvies (BSA) stelt een minimale voortgangseis in het eerste jaar."
      },
      {
        "id": "q-nl-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa nama kartu transportasi umum nasional yang terintegrasi untuk kereta (NS), tram, dan bus di Belanda?",
        "options": [
          "OV-chipkaart (Openbaar Vervoer chipkaart)",
          "Museumkaart",
          "Stadspas",
          "Bankpas"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De OV-chipkaart is het universele betaalmiddel voor het openbaar vervoer in heel Nederland."
      },
      {
        "id": "q-nl-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batasan kerja paruh waktu bagi mahasiswa internasional non-Uni Eropa di Belanda dengan izin kerja TWV?",
        "options": [
          "Bebas hingga 40 jam setiap minggu",
          "Maksimal 16 jam per minggu selama masa kuliah atau penuh waktu hanya di musim panas (Juni-Agustus)",
          "Dilarang bekerja sama sekali",
          "Hanya boleh bekerja di akhir pekan 2 jam"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Niet-EU studenten mogen maximaal 16 uur per week werken (met tewerkstellingsvergunning TWV)."
      },
      {
        "id": "q-nl-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'IND' (Immigratie- en Naturalisatiedienst) bagi mahasiswa asing di Belanda?",
        "options": [
          "Kementerian Luar Negeri",
          "Kantor polisi lalu lintas",
          "Badan imigrasi pemerintah yang memproses penerbitan izin tinggal pelajar (verblijfsvergunning)",
          "Pengelola museum nasional"
        ],
        "correctAnswerIndex": 2,
        "explanation": "De IND behandelt aanvragen voor verblijfsvergunningen in Nederland."
      },
      {
        "id": "q-nl-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Mengapa mahasiswa disarankan mencari akomodasi (kamer) berbulan-bulan sebelum perkuliahan dimulai di Belanda?",
        "options": [
          "Karena kampus tidak memiliki gerbang",
          "Karena kamar harus dicat sendiri",
          "Karena cuaca sangat dingin",
          "Karena terjadi krisis perumahan mahasiswa parah (kamernood) di seluruh kota besar Belanda"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Er heerst een ernstig tekort aan studentenhuisvesting in universitaire steden."
      },
      {
        "id": "q-nl-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah universitas di Belanda umumnya menyediakan asrama mahasiswa sendiri untuk masa studi penuh?",
        "options": [
          "Sebagian besar tidak memiliki asrama permanen sendiri; akomodasi dikelola oleh yayasan perumahan pihak ketiga (seperti DUWO, SSH)",
          "Ya, seluruh mahasiswa tinggal di kamar kampus gratis",
          "Setiap mahasiswa wajib tinggal bersama profesor",
          "Asrama hanya ada di bandara"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Nederlandse universiteiten hebben zelden een campus met eigen permanente studentenwoningen."
      },
      {
        "id": "q-nl-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan konsep 'Fietsen' dalam budaya mobilitas mahasiswa di Belanda?",
        "options": [
          "Olahraga balap profesional",
          "Bersepeda merupakan moda transportasi utama dan paling lazim digunakan setiap hari oleh mahasiswa dan dosen",
          "Kendaraan khusus akhir pekan",
          "Hanya dipakai saat cuaca cerah"
        ],
        "correctAnswerIndex": 1,
        "explanation": "De fiets is het meest gebruikte vervoermiddel onder studenten in Nederland."
      },
      {
        "id": "q-nl-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa istilah untuk ujian perbaikan / remedial jika nilai ujian pertama di bawah standar kelulusan?",
        "options": [
          "Afstuderen — Kelulusan / wisuda akhir studi",
          "Colloquium — Seminar diskusi ilmiah",
          "Hertentamen (herkansing) — Ujian perbaikan / remedial ulang",
          "Inschrijving — Pendaftaran ulang / imatrikulasi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Een herkansing of hertentamen biedt een tweede kans om een onvoldoende op te halen."
      },
      {
        "id": "q-nl-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi sistem 'Canvas' atau 'Brightspace' yang digunakan di hampir semua universitas Belanda?",
        "options": [
          "Situs jejaring sosial hiburan",
          "Aplikasi pemesanan tiket kereta",
          "Pusat game online",
          "Sistem manajemen pembelajaran daring (LMS) untuk mengunduh materi kuliah, tugas, dan nilai"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Canvas en Brightspace zijn de gangbare digitale leeromgevingen aan Nederlandse universiteiten."
      },
      {
        "id": "q-nl-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah bahasa Inggris digunakan secara luas dalam kehidupan sehari-hari di Belanda?",
        "options": [
          "Ya, Belanda merupakan salah satu negara non-native dengan tingkat kemahiran bahasa Inggris tertinggi di dunia",
          "Tidak, masyarakat sama sekali tidak memahami bahasa Inggris",
          "Hanya pejabat kedutaan yang berbahasa Inggris",
          "Bahasa Inggris dilarang di jalan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Nederland staat wereldwijd aan de top qua beheersing van het Engels als tweede taal."
      },
      {
        "id": "q-nl-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Wetenschappelijke Integriteit' yang harus ditandatangani mahasiswa pascasarjana?",
        "options": [
          "Surat izin bepergian ke luar negeri",
          "Kode etik integritas ilmiah yang melarang fabrikasi data, pemalsuan, dan plagiarisme dalam riset",
          "Kartu anggota asosiasi olahraga",
          "Surat perjanjian sewa sepeda"
        ],
        "correctAnswerIndex": 1,
        "explanation": "De Nederlandse Gedragscode Wetenschappelijke Integriteit regelt eerlijk en zorgvuldig onderzoek."
      },
      {
        "id": "q-nl-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti istilah 'Korting' yang sering dilihat mahasiswa saat berbelanja di Belanda?",
        "options": [
          "Pajak tambahan",
          "Biaya masuk",
          "Potongan harga / diskon",
          "Denda parkir"
        ],
        "correctAnswerIndex": 2,
        "explanation": "'Korting' betekent prijsverlaging of reductie op artikelen."
      },
      {
        "id": "q-nl-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa ingin mendaftar ke dokter umum di lingkungan tempat tinggalnya, ia harus mencari:",
        "options": [
          "Direct naar het Academisch Ziekenhuis — Langsung datang ke rumah sakit pendidikan tanpa rujukan",
          "Apotheek — Apotek pengambilan obat",
          "Gemeentehuis — Kantor balai kota",
          "Een Huisarts — Dokter keluarga / dokter umum fasilitas kesehatan tingkat pertama"
        ],
        "correctAnswerIndex": 3,
        "explanation": "In Nederland is inschrijving bij een lokale huisarts de eerste stap voor medische zorg."
      },
      {
        "id": "q-nl-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam proses penulisan tesis magister di universitas Belanda, apa peran dari 'Peer review'?",
        "options": [
          "Mahasiswa saling meninjau dan mengkritisi naskah draf rekan sejawat secara konstruktif",
          "Ujian lisan di depan rektor",
          "Pemeriksaan tata bahasa otomatis",
          "Pencetakan jilid buku"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Peer review bevordert de kwaliteit van wetenschappelijke teksten door collegiale toetsing."
      }
    ]
  },
  "nl-full": {
    "id": "test-nl-full",
    "title": "Simulasi Ujian Masuk Lengkap Kuliah Belanda (50 Soal Standar Ujian)",
    "description": "Simulasi ujian komprehensif berstandar masuk universitas terkemuka di Belanda (90 Menit). Mencakup seluruh 5 aspek kesiapan akademik dan bahasa.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-nl-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat betekent het woord 'scriptie' aan een Nederlandse universiteit?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Tesis / Skripsi tugas akhir kelulusan sarjana atau master",
          "Kartu ujian masuk kampus",
          "Daftar belanjaan bulanan",
          "Kwitansi sewa kamar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Een scriptie is het afsluitende wetenschappelijke werkstuk voor het behalen van een academische graad."
      },
      {
        "id": "q-nl-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welk voegwoord is grammaticaal correct: 'De studenten werken hard ______ het tentamen te halen.'",
        "audioVoiceLang": "nl-NL",
        "options": [
          "want — karena (konjungsi koordinatif)",
          "om (... te) — untuk / guna (konjungsi tujuan dengan infinitif \"te halen\")",
          "omdat — karena (konjungsi subordinatif)",
          "hoewel — meskipun / walaupun"
        ],
        "correctAnswerIndex": 1,
        "explanation": "De constructie 'om + te + infinitief' drukt een doel uit: 'om het tentamen te halen'."
      },
      {
        "id": "q-nl-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Hoe noemt men het officiële overzicht met alle behaalde studieresultaten en studiepunten?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Het lesrooster — Jadwal mata pelajaran mingguan",
          "Het huurcontract — Surat kontrak sewa kamar",
          "De cijferlijst (Transcript of Records) — Transkrip nilai resmi yang memuat seluruh nilai dan kredit ECTS",
          "De collegekaart — Kartu tanda mahasiswa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Een cijferlijst geeft een officieel overzicht van vakken, cijfers en behaalde ECTS-punten."
      },
      {
        "id": "q-nl-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat is het verschil tussen een 'hoorcollege' en een 'werkcollege' in het Nederlands hoger onderwijs?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Hoorcollege is online; werkcollege is vakantie — Hoorcollege daring; werkcollege libur",
          "Werkcollege is uitsluitend sport — Werkcollege khusus olahraga",
          "Er is geen enkel verschil — Tidak ada perbedaan sama sekali",
          "Hoorcollege is een klassikale uiteenzetting in de aula; werkcollege is een interactieve oefengroep — Hoorcollege adalah kuliah teori di aula besar; werkcollege adalah kelas tutorial latihan interaktif"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Tijdens een hoorcollege luisteren studenten naar de docent; in een werkcollege lossen zij actief casussen op."
      },
      {
        "id": "q-nl-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat betekent de afkorting 'BSN' voor een internationale student in Nederland?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Burgerservicenummer (uniek identificatienummer voor bank, belasting en zorg) — Nomor induk layanan kependudukan (wajib untuk rekening bank, pajak, dan asuransi kesehatan)",
          "Basis Studie Nummer — Nomor studi dasar (istilah fiktif)",
          "Bibliotheek Service Nederland — Layanan perpustakaan Belanda",
          "Buitenlands Studenten Netwerk — Jaringan mahasiswa asing"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Het BSN is noodzakelijk voor alle officiële zaken bij de gemeente en instanties in Nederland."
      },
      {
        "id": "q-nl-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat is de taak van de universitaire 'studieadviseur'?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Het verkopen van studieboeken — Menjual buku teks perkuliahan",
          "Het adviseren en begeleiden van studenten bij studieplanning, vakkenkeuze en persoonlijke knelpunten — Membimbing mahasiswa terkait perencanaan studi, pemilihan mata kuliah, dan kendala akademik",
          "Het koken van maaltijden in de kantine — Memasak makanan di kantin kampus",
          "Het onderhouden van computers — Merawat komputer laboratorium"
        ],
        "correctAnswerIndex": 1,
        "explanation": "De studieadviseur helpt bij studievoortgang, studievertraging en regels van de examencommissie."
      },
      {
        "id": "q-nl-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat is het 'zoekjaar' (Orientation Year) voor afgestudeerden in Nederland?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Een jaar verplichte militaire dienst — Satu tahun wajib militer",
          "Een jaar gratis vakantie — Satu tahun liburan gratis",
          "Een verblijfsvergunning van één jaar om een baan als kennismigrant te zoeken na het afstuderen — Izin tinggal satu tahun pasca-kelulusan untuk mencari pekerjaan profesional di Belanda",
          "Een jaar wachten op het diploma — Satu tahun menunggu pencetakan ijazah"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Het zoekjaar biedt hoogopgeleide buitenlandse afgestudeerden de kans om werk te vinden in Nederland."
      },
      {
        "id": "q-nl-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat betekent 'een voldoende halen' in het Nederlandse beoordelingssysteem (schaal 1-10)?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Een cijfer 1 behalen — Mendapatkan nilai 1 (sangat buruk)",
          "Een 10 met lof scoren — Mendapatkan nilai sempurna 10",
          "Alleen aanwezig zijn in de les — Hanya sekadar hadir di kelas",
          "Minimaal een 5,5 of 6,0 behalen om te slagen voor het vak — Meraih nilai minimal 5,5 atau 6,0 untuk dinyatakan lulus mata kuliah"
        ],
        "correctAnswerIndex": 3,
        "explanation": "In het Nederlandse cijfersysteem geldt 5,5 (vaak afgerond naar 6) als de minimale voldoende grens."
      },
      {
        "id": "q-nl-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat houdt 'plagiaat' in volgens de academische gedragscode?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Het overnemen van andermans ideeën, data of teksten zonder correcte bronvermelding — Mengambil gagasan, data, atau teks orang lain tanpa mencantumkan sumber kutipan yang benar",
          "Te laat komen voor een college — Datang terlambat ke ruang kuliah",
          "Het lenen van een pen van een studiegenoot — Meminjam pena dari teman kuliah",
          "Het schrijven in het Engels — Menulis makalah dalam bahasa Inggris"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Plagiaat is een ernstige vorm van wetenschappelijk wangedrag die kan leiden tot schorsing."
      },
      {
        "id": "q-nl-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Waarvoor staat de overheidsinstantie 'DUO' in Nederland?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Digitale Universiteit Online — Universitas Digital Daring",
          "Dienst Uitvoering Onderwijs (verantwoordelijk voor examens, studiesubsidies en erkenning) — Badan Pelaksana Pendidikan Kementerian Belanda (pengelola pendanaan studi, ujian, dan penyetaraan ijazah)",
          "Directie Universitaire Opleidingen — Direktorat Pelatihan Universitas",
          "Dienst Uitwisseling Onderzoekers — Dinas Pertukaran Peneliti"
        ],
        "correctAnswerIndex": 1,
        "explanation": "DUO voert onderwijswetten uit namens het ministerie van Onderwijs, Cultuur en Wetenschap."
      },
      {
        "id": "q-nl-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "De commissie heeft de door diverse maatschappelijke organisaties ingediende bezwaren na ampele overweging verworpen.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Komisi tersebut setelah pertimbangan mendalam telah menolak keberatan-keberatan yang diajukan oleh berbagai organisasi kemasyarakatan.",
        "keywords": [
          "komisi",
          "tersebut",
          "setelah",
          "pertimbangan"
        ],
        "explanation": "Kalimat akademik pola Syntactische Verdichting en Complexe Tangconstructies: 'De commissie heeft de door diverse maatschappelijke organisaties ingediende bezwaren na ampele overweging verworpen.' diterjemahkan secara akurat menjadi 'Komisi tersebut setelah pertimbangan mendalam telah menolak keberatan-keberatan yang diajukan oleh berbagai organisasi kemasyarakatan.'."
      },
      {
        "id": "q-nl-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Deze bevindingen nopen tot een fundamentele herbezinning op de vigerende theoretische premissen.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Temuan-temuan ini mendorong peninjauan ulang secara mendasar terhadap premis-premis teoretis yang berlaku saat ini.",
        "keywords": [
          "temuan",
          "mendorong",
          "peninjauan",
          "ulang"
        ],
        "explanation": "Kalimat akademik pola Subtiele Stijlaspecten van Wetenschappelijk Nederlands: 'Deze bevindingen nopen tot een fundamentele herbezinning op de vigerende theoretische premissen.' diterjemahkan secara akurat menjadi 'Temuan-temuan ini mendorong peninjauan ulang secara mendasar terhadap premis-premis teoretis yang berlaku saat ini.'."
      },
      {
        "id": "q-nl-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "De centrale onderzoeksvraag luidt in hoeverre digitalisering bijdraagt aan kansengelijkheid in het onderwijs.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Pertanyaan penelitian utama berbunyi sejauh mana digitalisasi berkontribusi terhadap kesetaraan peluang dalam dunia pendidikan.",
        "keywords": [
          "pertanyaan",
          "penelitian",
          "utama",
          "berbunyi"
        ],
        "explanation": "Kalimat akademik pola Formulering van Onderzoeksvragen en Methodologische Verantwoording: 'De centrale onderzoeksvraag luidt in hoeverre digitalisering bijdraagt aan kansengelijkheid in het onderwijs.' diterjemahkan secara akurat menjadi 'Pertanyaan penelitian utama berbunyi sejauh mana digitalisasi berkontribusi terhadap kesetaraan peluang dalam dunia pendidikan.'."
      },
      {
        "id": "q-nl-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Zoals Van Dijk (2021) treffend uiteenzet, is de contextuele inbedding van doorslaggevend belang.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Sebagaimana diuraikan secara tepat oleh Van Dijk (2021), keterlekatan kontekstual memegang peranan yang sangat menentukan.",
        "keywords": [
          "sebagaimana",
          "diuraikan",
          "secara",
          "tepat"
        ],
        "explanation": "Kalimat akademik pola Kritische Bronvermelding en Parafraseringstechnieken: 'Zoals Van Dijk (2021) treffend uiteenzet, is de contextuele inbedding van doorslaggevend belang.' diterjemahkan secara akurat menjadi 'Sebagaimana diuraikan secara tepat oleh Van Dijk (2021), keterlekatan kontekstual memegang peranan yang sangat menentukan.'."
      },
      {
        "id": "q-nl-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Krachtens artikel 7 van de Wet op het hoger onderwijs is het instellingsbestuur bevoegd.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Berdasarkan Pasal 7 Undang-Undang Pendidikan Tinggi, dewan pengurus institusi memiliki kewenangan sah.",
        "keywords": [
          "berdasarkan",
          "pasal",
          "undang",
          "pendidikan"
        ],
        "explanation": "Kalimat akademik pola Juridische en Bestuurlijke Terminologie in de Lage Landen: 'Krachtens artikel 7 van de Wet op het hoger onderwijs is het instellingsbestuur bevoegd.' diterjemahkan secara akurat menjadi 'Berdasarkan Pasal 7 Undang-Undang Pendidikan Tinggi, dewan pengurus institusi memiliki kewenangan sah.'."
      },
      {
        "id": "q-nl-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Men zou hiertegen kunnen inbrengen dat de steekproefomvang beperkt is; deze tegenwerping snijdt evenwel geen hout.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Orang mungkin mengajukan keberatan bahwa ukuran sampel terbatas; namun sanggahan ini tidak berdasar kuat.",
        "keywords": [
          "orang",
          "mungkin",
          "mengajukan",
          "keberatan"
        ],
        "explanation": "Kalimat akademik pola Retorische Argumentatiestructuren en Tegenwerpingen: 'Men zou hiertegen kunnen inbrengen dat de steekproefomvang beperkt is; deze tegenwerping snijdt evenwel geen hout.' diterjemahkan secara akurat menjadi 'Orang mungkin mengajukan keberatan bahwa ukuran sampel terbatas; namun sanggahan ini tidak berdasar kuat.'."
      },
      {
        "id": "q-nl-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "In het overheidsbeleid wordt de arbeidsmarkt steevast geframed als een motor van economische vooruitgang.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Dalam kebijakan pemerintah, pasar tenaga kerja senantiasa dibingkai sebagai motor penggerak kemajuan ekonomi.",
        "keywords": [
          "kebijakan",
          "pemerintah",
          "pasar",
          "tenaga"
        ],
        "explanation": "Kalimat akademik pola Metaforen en Conceptuele Beeldspraak in Beleidsdocumenten: 'In het overheidsbeleid wordt de arbeidsmarkt steevast geframed als een motor van economische vooruitgang.' diterjemahkan secara akurat menjadi 'Dalam kebijakan pemerintah, pasar tenaga kerja senantiasa dibingkai sebagai motor penggerak kemajuan ekonomi.'."
      },
      {
        "id": "q-nl-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Een nauwgezette deconstructie van de tekst legt inherente tegenstrijdigheden bloot.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Dekonstruksi yang cermat terhadap teks tersebut menyingkap kontradiksi-kontradiksi yang melekat di dalamnya.",
        "keywords": [
          "dekonstruksi",
          "cermat",
          "terhadap",
          "teks"
        ],
        "explanation": "Kalimat akademik pola Discursieve Analyse van Filosofische en Maatschappelijke Teksten: 'Een nauwgezette deconstructie van de tekst legt inherente tegenstrijdigheden bloot.' diterjemahkan secara akurat menjadi 'Dekonstruksi yang cermat terhadap teks tersebut menyingkap kontradiksi-kontradiksi yang melekat di dalamnya.'."
      },
      {
        "id": "q-nl-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "De inleiding schetst de status quaestionis en formuleert de wetenschappelijke lacune die dit onderzoek vult.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Bab pendahuluan memetakan status quaestionis (perkembangan riset terkini) dan merumuskan celah keilmuan yang diisi oleh penelitian ini.",
        "keywords": [
          "pendahuluan",
          "memetakan",
          "status",
          "quaestionis"
        ],
        "explanation": "Kalimat akademik pola Redactie van de Inleiding en Conclusie van een Masterscriptie: 'De inleiding schetst de status quaestionis en formuleert de wetenschappelijke lacune die dit onderzoek vult.' diterjemahkan secara akurat menjadi 'Bab pendahuluan memetakan status quaestionis (perkembangan riset terkini) dan merumuskan celah keilmuan yang diisi oleh penelitian ini.'."
      },
      {
        "id": "q-nl-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Mijnheer de rector, geachte leden van de promotiecommissie, ik dank u voor de gelegenheid mijn proefschrift te verdedigen.",
        "audioVoiceLang": "nl-NL",
        "sampleAnswer": "Bapak Rektor yang mulia, para anggota komisi promosi yang terhormat, saya mengucapkan terima kasih atas kesempatan mempertahankan disertasi saya.",
        "keywords": [
          "bapak",
          "rektor",
          "mulia",
          "anggota"
        ],
        "explanation": "Kalimat akademik pola Academische Openbare Verdediging van het Proefschrift: 'Mijnheer de rector, geachte leden van de promotiecommissie, ik dank u voor de gelegenheid mijn proefschrift te verdedigen.' diterjemahkan secara akurat menjadi 'Bapak Rektor yang mulia, para anggota komisi promosi yang terhormat, saya mengucapkan terima kasih atas kesempatan mempertahankan disertasi saya.'."
      },
      {
        "id": "q-nl-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat resmi membuat janji temu: 'Saya ingin membuat janji temu dengan profesor untuk mendiskusikan penelitian saya'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "over mijn onderzoek",
          "met de professor",
          "een afspraak maken",
          "Ik wil graag"
        ],
        "correctOrder": [
          "Ik wil graag",
          "een afspraak maken",
          "met de professor",
          "over mijn onderzoek"
        ],
        "explanation": "Vaste volgorde: Modale constructie (Ik wil graag) + Infinitiefgroep (een afspraak maken) + Gesprekspartner (met de professor) + Onderwerp (over mijn onderzoek).",
        "targetSentence": "Ik wil graag een afspraak maken met de professor over mijn onderzoek"
      },
      {
        "id": "q-nl-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beban studi: 'Mahasiswa harus memperoleh enam puluh kredit ECTS setiap tahun akademik'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "per collegejaar",
          "behalen",
          "Studenten moeten",
          "zestig studiepunten"
        ],
        "correctOrder": [
          "Studenten moeten",
          "zestig studiepunten",
          "per collegejaar",
          "behalen"
        ],
        "explanation": "Reglementaire volgorde: Modale bepaling (Studenten moeten) + Object (zestig studiepunten) + Tijdskader (per collegejaar) + Hoofdwerkwoord (behalen).",
        "targetSentence": "Studenten moeten zestig studiepunten per collegejaar behalen"
      },
      {
        "id": "q-nl-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat nilai akademis: 'Universitas Belanda mendorong pemikiran mandiri dan kritis pada setiap mahasiswa'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "bij studenten",
          "en kritisch denken",
          "stimuleren zelfstandig",
          "Nederlandse universiteiten"
        ],
        "correctOrder": [
          "Nederlandse universiteiten",
          "stimuleren zelfstandig",
          "en kritisch denken",
          "bij studenten"
        ],
        "explanation": "Academische volgorde: Onderwerp (Nederlandse universiteiten) + Werkwoord (stimuleren) + Doel/Kwaliteit (zelfstandig en kritisch denken) + Doelgroep (bij studenten).",
        "targetSentence": "Nederlandse universiteiten stimuleren zelfstandig en kritisch denken bij studenten"
      },
      {
        "id": "q-nl-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat persetujuan komite: 'Proposal penelitian telah disetujui secara resmi oleh komite ujian'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "door de examencommissie",
          "officieel goedgekeurd",
          "Het onderzoeksvoorstel is"
        ],
        "correctOrder": [
          "Het onderzoeksvoorstel is",
          "officieel goedgekeurd",
          "door de examencommissie"
        ],
        "explanation": "Passieve volgorde: Onderwerp (Het onderzoeksvoorstel is) + Bepaling van wijze (officieel goedgekeurd) + Handelende instantie (door de examencommissie).",
        "targetSentence": "Het onderzoeksvoorstel is officieel goedgekeurd door de examencommissie"
      },
      {
        "id": "q-nl-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat bimbingan: 'Dosen pembimbing skripsi memberikan masukan yang sangat berharga atas naskah draft'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "op het conceptverslag",
          "De scriptiebegeleider geeft",
          "waardevolle feedback"
        ],
        "correctOrder": [
          "De scriptiebegeleider geeft",
          "waardevolle feedback",
          "op het conceptverslag"
        ],
        "explanation": "Urutan: Onderwerp/Werkwoord (De scriptiebegeleider geeft) + Lijdend voorwerp (waardevolle feedback) + Voorzetselvoorwerp (op het conceptverslag).",
        "targetSentence": "De scriptiebegeleider geeft waardevolle feedback op het conceptverslag"
      },
      {
        "id": "q-nl-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Afstudeerbegeleider (promotor / scriptiebegeleider)':",
        "targetSentence": "Afstudeerbegeleider",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Dosen Pembimbing Skripsi / Tesis / Promotor",
          "Beban Studi Akademik (SKS Eropa)",
          "Krisis Ketersediaan Tempat Tinggal Mahasiswa",
          "Surat Keterangan Registrasi Mahasiswa Aktif"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Afstudeerbegeleider (promotor / scriptiebegeleider)' adalah padanan untuk 'Dosen Pembimbing Skripsi / Tesis / Promotor' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Tentamen (deeltentamen / hertentamen)':",
        "targetSentence": "Tentamen",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Uang Kuliah Tunggal / Biaya Pendidikan Tahunan",
          "Ujian Tertulis Resmi (Ujian Semester / Remedial)",
          "Komite Dewan Penguji Akademik Program Studi",
          "Dispensasi Pembebasan Mata Kuliah"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Tentamen (deeltentamen / hertentamen)' adalah padanan untuk 'Ujian Tertulis Resmi (Ujian Semester / Remedial)' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Studielast (in European Credits / ECTS)':",
        "targetSentence": "Studielast",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Krisis Ketersediaan Tempat Tinggal Mahasiswa",
          "Lulus dengan Predikat Pujian / Cum Laude",
          "Beban Studi Akademik (SKS Eropa)",
          "Skema Izin Tinggal Pekerja Migran Terampil"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Studielast (in European Credits / ECTS)' adalah padanan untuk 'Beban Studi Akademik (SKS Eropa)' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Collegegeld (wettelijk / instellingstarief)':",
        "targetSentence": "Collegegeld",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Komite Dewan Penguji Akademik Program Studi",
          "Surat Keterangan Registrasi Mahasiswa Aktif",
          "Dosen Pembimbing Skripsi / Tesis / Promotor",
          "Uang Kuliah Tunggal / Biaya Pendidikan Tahunan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Collegegeld (wettelijk / instellingstarief)' adalah padanan untuk 'Uang Kuliah Tunggal / Biaya Pendidikan Tahunan' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Kamernood (woningtekort voor studenten)':",
        "targetSentence": "Kamernood",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Krisis Ketersediaan Tempat Tinggal Mahasiswa",
          "Lulus dengan Predikat Pujian / Cum Laude",
          "Dispensasi Pembebasan Mata Kuliah",
          "Ujian Tertulis Resmi (Ujian Semester / Remedial)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Kamernood (woningtekort voor studenten)' adalah padanan untuk 'Krisis Ketersediaan Tempat Tinggal Mahasiswa' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Examencommissie van de opleiding':",
        "targetSentence": "Examencommissie van de opleiding",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Surat Keterangan Registrasi Mahasiswa Aktif",
          "Komite Dewan Penguji Akademik Program Studi",
          "Skema Izin Tinggal Pekerja Migran Terampil",
          "Beban Studi Akademik (SKS Eropa)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Examencommissie van de opleiding' adalah padanan untuk 'Komite Dewan Penguji Akademik Program Studi' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Cum laude afstuderen (met lof)':",
        "targetSentence": "Cum laude afstuderen",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Dispensasi Pembebasan Mata Kuliah",
          "Dosen Pembimbing Skripsi / Tesis / Promotor",
          "Lulus dengan Predikat Pujian / Cum Laude",
          "Uang Kuliah Tunggal / Biaya Pendidikan Tahunan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Cum laude afstuderen (met lof)' adalah padanan untuk 'Lulus dengan Predikat Pujian / Cum Laude' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Bewijs van inschrijving aan de universiteit':",
        "targetSentence": "Bewijs van inschrijving aan de universiteit",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Skema Izin Tinggal Pekerja Migran Terampil",
          "Ujian Tertulis Resmi (Ujian Semester / Remedial)",
          "Krisis Ketersediaan Tempat Tinggal Mahasiswa",
          "Surat Keterangan Registrasi Mahasiswa Aktif"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Bewijs van inschrijving aan de universiteit' adalah padanan untuk 'Surat Keterangan Registrasi Mahasiswa Aktif' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Vrijstelling voor een studieonderdeel':",
        "targetSentence": "Vrijstelling voor een studieonderdeel",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Dispensasi Pembebasan Mata Kuliah",
          "Dosen Pembimbing Skripsi / Tesis / Promotor",
          "Beban Studi Akademik (SKS Eropa)",
          "Komite Dewan Penguji Akademik Program Studi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Vrijstelling voor een studieonderdeel' adalah padanan untuk 'Dispensasi Pembebasan Mata Kuliah' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Kennismigrantenregeling (kennismigrant)':",
        "targetSentence": "Kennismigrantenregeling",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Ujian Tertulis Resmi (Ujian Semester / Remedial)",
          "Skema Izin Tinggal Pekerja Migran Terampil",
          "Uang Kuliah Tunggal / Biaya Pendidikan Tahunan",
          "Lulus dengan Predikat Pujian / Cum Laude"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Kennismigrantenregeling (kennismigrant)' adalah padanan untuk 'Skema Izin Tinggal Pekerja Migran Terampil' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa nilai rata-rata minimal yang biasanya disyaratkan untuk predikat 'Cum Laude' di universitas Belanda?",
        "options": [
          "Rata-rata 6,0",
          "Rata-rata 10,0 mutlak",
          "Rata-rata nilai minimal 8,0 tanpa ada nilai di bawah 7,0 dan tanpa remedial",
          "Hanya memerlukan kehadiran penuh"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Voor het judicium 'cum laude' is doorgaans een gewogen gemiddelde van minimaal een 8,0 vereist."
      },
      {
        "id": "q-nl-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan sistem 'BSA' (Bindend Studieadvies) di tahun pertama sarjana (Bachelor) di Belanda?",
        "options": [
          "Saran memilih pakaian",
          "Rekomendasi beasiswa",
          "Jadwal libur semester",
          "Anjuran studi mengikat: mahasiswa wajib mengumpulkan minimal kredit tertentu (misal 45 dari 60 ECTS) agar tidak di-drop out"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Het Bindend Studieadvies (BSA) stelt een minimale voortgangseis in het eerste jaar."
      },
      {
        "id": "q-nl-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa nama kartu transportasi umum nasional yang terintegrasi untuk kereta (NS), tram, dan bus di Belanda?",
        "options": [
          "OV-chipkaart (Openbaar Vervoer chipkaart)",
          "Museumkaart",
          "Stadspas",
          "Bankpas"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De OV-chipkaart is het universele betaalmiddel voor het openbaar vervoer in heel Nederland."
      },
      {
        "id": "q-nl-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batasan kerja paruh waktu bagi mahasiswa internasional non-Uni Eropa di Belanda dengan izin kerja TWV?",
        "options": [
          "Bebas hingga 40 jam setiap minggu",
          "Maksimal 16 jam per minggu selama masa kuliah atau penuh waktu hanya di musim panas (Juni-Agustus)",
          "Dilarang bekerja sama sekali",
          "Hanya boleh bekerja di akhir pekan 2 jam"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Niet-EU studenten mogen maximaal 16 uur per week werken (met tewerkstellingsvergunning TWV)."
      },
      {
        "id": "q-nl-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'IND' (Immigratie- en Naturalisatiedienst) bagi mahasiswa asing di Belanda?",
        "options": [
          "Kementerian Luar Negeri",
          "Kantor polisi lalu lintas",
          "Badan imigrasi pemerintah yang memproses penerbitan izin tinggal pelajar (verblijfsvergunning)",
          "Pengelola museum nasional"
        ],
        "correctAnswerIndex": 2,
        "explanation": "De IND behandelt aanvragen voor verblijfsvergunningen in Nederland."
      },
      {
        "id": "q-nl-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Mengapa mahasiswa disarankan mencari akomodasi (kamer) berbulan-bulan sebelum perkuliahan dimulai di Belanda?",
        "options": [
          "Karena kampus tidak memiliki gerbang",
          "Karena kamar harus dicat sendiri",
          "Karena cuaca sangat dingin",
          "Karena terjadi krisis perumahan mahasiswa parah (kamernood) di seluruh kota besar Belanda"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Er heerst een ernstig tekort aan studentenhuisvesting in universitaire steden."
      },
      {
        "id": "q-nl-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah universitas di Belanda umumnya menyediakan asrama mahasiswa sendiri untuk masa studi penuh?",
        "options": [
          "Sebagian besar tidak memiliki asrama permanen sendiri; akomodasi dikelola oleh yayasan perumahan pihak ketiga (seperti DUWO, SSH)",
          "Ya, seluruh mahasiswa tinggal di kamar kampus gratis",
          "Setiap mahasiswa wajib tinggal bersama profesor",
          "Asrama hanya ada di bandara"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Nederlandse universiteiten hebben zelden een campus met eigen permanente studentenwoningen."
      },
      {
        "id": "q-nl-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan konsep 'Fietsen' dalam budaya mobilitas mahasiswa di Belanda?",
        "options": [
          "Olahraga balap profesional",
          "Bersepeda merupakan moda transportasi utama dan paling lazim digunakan setiap hari oleh mahasiswa dan dosen",
          "Kendaraan khusus akhir pekan",
          "Hanya dipakai saat cuaca cerah"
        ],
        "correctAnswerIndex": 1,
        "explanation": "De fiets is het meest gebruikte vervoermiddel onder studenten in Nederland."
      },
      {
        "id": "q-nl-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa istilah untuk ujian perbaikan / remedial jika nilai ujian pertama di bawah standar kelulusan?",
        "options": [
          "Afstuderen — Kelulusan / wisuda akhir studi",
          "Colloquium — Seminar diskusi ilmiah",
          "Hertentamen (herkansing) — Ujian perbaikan / remedial ulang",
          "Inschrijving — Pendaftaran ulang / imatrikulasi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Een herkansing of hertentamen biedt een tweede kans om een onvoldoende op te halen."
      },
      {
        "id": "q-nl-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi sistem 'Canvas' atau 'Brightspace' yang digunakan di hampir semua universitas Belanda?",
        "options": [
          "Situs jejaring sosial hiburan",
          "Aplikasi pemesanan tiket kereta",
          "Pusat game online",
          "Sistem manajemen pembelajaran daring (LMS) untuk mengunduh materi kuliah, tugas, dan nilai"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Canvas en Brightspace zijn de gangbare digitale leeromgevingen aan Nederlandse universiteiten."
      },
      {
        "id": "q-nl-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah bahasa Inggris digunakan secara luas dalam kehidupan sehari-hari di Belanda?",
        "options": [
          "Ya, Belanda merupakan salah satu negara non-native dengan tingkat kemahiran bahasa Inggris tertinggi di dunia",
          "Tidak, masyarakat sama sekali tidak memahami bahasa Inggris",
          "Hanya pejabat kedutaan yang berbahasa Inggris",
          "Bahasa Inggris dilarang di jalan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Nederland staat wereldwijd aan de top qua beheersing van het Engels als tweede taal."
      },
      {
        "id": "q-nl-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Wetenschappelijke Integriteit' yang harus ditandatangani mahasiswa pascasarjana?",
        "options": [
          "Surat izin bepergian ke luar negeri",
          "Kode etik integritas ilmiah yang melarang fabrikasi data, pemalsuan, dan plagiarisme dalam riset",
          "Kartu anggota asosiasi olahraga",
          "Surat perjanjian sewa sepeda"
        ],
        "correctAnswerIndex": 1,
        "explanation": "De Nederlandse Gedragscode Wetenschappelijke Integriteit regelt eerlijk en zorgvuldig onderzoek."
      },
      {
        "id": "q-nl-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti istilah 'Korting' yang sering dilihat mahasiswa saat berbelanja di Belanda?",
        "options": [
          "Pajak tambahan",
          "Biaya masuk",
          "Potongan harga / diskon",
          "Denda parkir"
        ],
        "correctAnswerIndex": 2,
        "explanation": "'Korting' betekent prijsverlaging of reductie op artikelen."
      },
      {
        "id": "q-nl-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa ingin mendaftar ke dokter umum di lingkungan tempat tinggalnya, ia harus mencari:",
        "options": [
          "Direct naar het Academisch Ziekenhuis — Langsung datang ke rumah sakit pendidikan tanpa rujukan",
          "Apotheek — Apotek pengambilan obat",
          "Gemeentehuis — Kantor balai kota",
          "Een Huisarts — Dokter keluarga / dokter umum fasilitas kesehatan tingkat pertama"
        ],
        "correctAnswerIndex": 3,
        "explanation": "In Nederland is inschrijving bij een lokale huisarts de eerste stap voor medische zorg."
      },
      {
        "id": "q-nl-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam proses penulisan tesis magister di universitas Belanda, apa peran dari 'Peer review'?",
        "options": [
          "Mahasiswa saling meninjau dan mengkritisi naskah draf rekan sejawat secara konstruktif",
          "Ujian lisan di depan rektor",
          "Pemeriksaan tata bahasa otomatis",
          "Pencetakan jilid buku"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Peer review bevordert de kwaliteit van wetenschappelijke teksten door collegiale toetsing."
      }
    ]
  }
};

export const GERMANY_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "de-1": {
    "id": "test-de-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Jerman (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Jerman.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-de-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was versteht man unter einer 'Masterarbeit' an einer deutschen Universität?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Ujian masuk matrikulasi",
          "Tesis akhir ilmiah kelulusan jenjang S2",
          "Daftar hadir perkuliahan",
          "Kuitansi biaya hidup bulanan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Die Masterarbeit ist die selbstständige wissenschaftliche Abschlussarbeit im Masterstudium."
      },
      {
        "id": "q-de-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welches Relativpronomen passt grammatikalisch: 'Das Forschungsprojekt, _____ der Professor leitet, ist international anerkannt.'",
        "audioVoiceLang": "de-DE",
        "options": [
          "den (Akkusativ Maskulinum / Dativ Plural) — kata ganti relatif maskulin akusatif",
          "dem (Dativ Maskulinum / Neutrum) — kata ganti relatif datif",
          "das (Akkusativ Neutrum) — yang (kata ganti relatif netral akusatif mengacu pada \"das Forschungsprojekt\")",
          "dessen (Genitiv Maskulinum / Neutrum) — yang miliknya (kata ganti relatif genitif)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Das Bezugswort 'das Projekt' ist sächlich und steht im Akkusativ: 'das der Professor leitet'."
      },
      {
        "id": "q-de-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wie nennt man die regelmäßige Sprechstunde eines Dozenten für studentische Anliegen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Die Vorlesung — Kuliah umum satu arah di auditorium",
          "Das Kolloquium — Seminar diskusi ilmiah / ujian tesis",
          "Die Klausur — Ujian tertulis terawasi di akhir semester",
          "Die Sprechstunde — Jam konsultasi bimbingan terjadwal bersama dosen"
        ],
        "correctAnswerIndex": 3,
        "explanation": "In der Sprechstunde besprechen Studierende akademische Fragen persönlich mit Dozierenden."
      },
      {
        "id": "q-de-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welches Dokument bescheinigt den offiziellen Status als immatrikulierter Student?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Die Immatrikulationsbescheinigung (Studienbescheinigung) — Surat keterangan resmi terdaftar sebagai mahasiswa aktif",
          "Der Führerschein — Surat Izin Mengemudi (SIM)",
          "Die Monatskarte — Tiket bulanan transportasi",
          "Das Zeugnis der Grundschule — Rapor sekolah dasar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Die Immatrikulationsbescheinigung dient als amtlicher Nachweis des Studierendenstatus."
      },
      {
        "id": "q-de-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was ist ein 'Studienkolleg' für ausländische Studienbewerber in Deutschland?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Ein Ferienlager für Jugendliche — Perkemahan liburan remaja",
          "Ein einjähriger Vorbereitungskurs zur Feststellungsprüfung bei nicht direkt anerkanntem Abitur — Program matrikulasi persiapan satu tahun menuju ujian penyetaraan masuk universitas Jerman (FSP)",
          "Ein Wohnheim für Doktoranden — Asrama khusus mahasiswa doktoral",
          "Eine Sprachschule für Touristen — Kursus bahasa untuk wisatawan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Das Studienkolleg bereitet internationale Bewerber fachlich und sprachlich auf das Hochschulstudium vor."
      },
      {
        "id": "q-de-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wofür steht die Abkürzung 'DAAD' im deutschen Hochschulwesen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Deutsche Agentur für Arbeit und Daten — Agen Tenaga Kerja dan Data Jerman",
          "Dachverband Akademischer Autoren Deutschlands — Asosiasi Penulis Akademik Jerman",
          "Deutscher Akademischer Austauschdienst — Dinas Pertukaran Akademik Jerman (lembaga pemberi beasiswa terbesar di Jerman)",
          "Direktion für Angewandte Ausbildung — Direktorat Pelatihan Terapan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Der DAAD ist die weltweit größte Förderorganisation für den internationalen Austausch von Studierenden und Forschenden."
      },
      {
        "id": "q-de-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was ist ein 'Sperrkonto' im Rahmen des deutschen Studentenvisums?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Ein Girokonto ohne Gebühren — Rekening giro biasa bebas biaya admin",
          "Ein Sparkonto für den Ruhestand — Rekening tabungan dana pensiun",
          "Ein Kreditkartensystem — Sistem pembayaran kartu kredit",
          "Ein spezielles Bankkonto mit gesperrtem Guthaben zur Sicherung des monatlichen Lebensunterhalts — Rekening bank khusus dengan dana dibekukan untuk menjamin biaya hidup bulanan selama studi"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Das Sperrkonto weist die finanzielle Leistungsfähigkeit für die Visumserteilung bei der Botschaft nach."
      },
      {
        "id": "q-de-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was ist der wesentliche Unterschied zwischen einer 'Vorlesung' und einem 'Seminar'?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Vorlesung ist dozentenzentriert im Hörsaal; Seminar erfordert aktive Diskussion und Referate der Studierenden — Vorlesung adalah kuliah teori oleh dosen di aula; Seminar menuntut diskusi aktif dan presentasi makalah mahasiswa",
          "Vorlesung findet abends statt; Seminar morgens — Vorlesung diadakan malam hari; Seminar pagi hari",
          "Vorlesung ist Sportunterricht — Vorlesung adalah pelajaran olahraga",
          "Es gibt keinen Unterschied — Tidak ada perbedaan sama sekali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "In der Vorlesung vermittelt der Dozent Stoff; im Seminar erarbeiten Studierende Themen interaktiv."
      },
      {
        "id": "q-de-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welche Note gilt im deutschen Hochschulnotensystem als Bestnote?",
        "audioVoiceLang": "de-DE",
        "options": [
          "5,0 (Nicht ausreichend) — Nilai 5,0 (Tidak Lulus / Gagal)",
          "1,0 (Sehr gut) — Nilai 1,0 (Sangat Baik / nilai tertinggi dalam skala 1,0–5,0 Jerman)",
          "10,0 — Tidak digunakan dalam skala universitas Jerman",
          "0,0 — Bukan nilai standar dalam transkrip universitas Jerman"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Das deutsche Notensystem reicht von 1,0 (sehr gut) bis 5,0 (nicht bestanden)."
      },
      {
        "id": "q-de-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welche Aufgaben übernimmt das 'Studierendenwerk' (Studentenwerk) an deutschen Hochschulen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Einschreibung von Studenten — Mengurus imatrikulasi akademik fakultas",
          "Abnahme von Masterprüfungen — Menguji sidang tesis Master",
          "Betrieb von Mensen, Wohnheimen, BAföG-Beratung und psychosozialer Unterstützung — Mengelola kantin mahasiswa (Mensa), asrama, konsultasi pendanaan studi, dan layanan psikososial",
          "Leitung der Fakultäten — Memimpin dekanat fakultas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Das Studierendenwerk erbringt soziale, wirtschaftliche und kulturelle Dienstleistungen für Studierende."
      }
    ]
  },
  "de-2": {
    "id": "test-de-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Jerman.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-de-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Die Implementierung des innovativen Curriculums führte zu einer messbaren Steigerung der Studienleistungen.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Implementasi kurikulum inovatif tersebut menghasilkan peningkatan capaian prestasi studi yang terukur.",
        "keywords": [
          "implementasi",
          "kurikulum",
          "inovatif",
          "tersebut"
        ],
        "explanation": "Kalimat akademik pola Nominalstil und Verbalstil: Transformationstechniken: 'Die Implementierung des innovativen Curriculums führte zu einer messbaren Steigerung der Studienleistungen.' diterjemahkan secara akurat menjadi 'Implementasi kurikulum inovatif tersebut menghasilkan peningkatan capaian prestasi studi yang terukur.'."
      },
      {
        "id": "q-de-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Die astronomische Entdeckung dürfte weitreichende Konsequenzen für die Kosmologie haben.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Penemuan astronomis tersebut diperkirakan kuat akan membawa konsekuensi luas bagi ilmu kosmologi.",
        "keywords": [
          "penemuan",
          "astronomis",
          "tersebut",
          "diperkirakan"
        ],
        "explanation": "Kalimat akademik pola Subjektive Bedeutung der Modalverben (Vermutung & Fremdaussage): 'Die astronomische Entdeckung dürfte weitreichende Konsequenzen für die Kosmologie haben.' diterjemahkan secara akurat menjadi 'Penemuan astronomis tersebut diperkirakan kuat akan membawa konsekuensi luas bagi ilmu kosmologi.'."
      },
      {
        "id": "q-de-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Die Theorie, die der Forscher entwickelte, als er am Institut tätig war, trug dazu bei, das Phänomen zu entschlüsseln.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Teori yang dikembangkan peneliti itu ketika beliau bertugas di institut tersebut turut berkontribusi memecahkan fenomena itu.",
        "keywords": [
          "teori",
          "dikembangkan",
          "peneliti",
          "beliau"
        ],
        "explanation": "Kalimat akademik pola Komplexe Satzgefüge mit verschachtelten Relativ- und Nebensätzen: 'Die Theorie, die der Forscher entwickelte, als er am Institut tätig war, trug dazu bei, das Phänomen zu entschlüsseln.' diterjemahkan secara akurat menjadi 'Teori yang dikembangkan peneliti itu ketika beliau bertugas di institut tersebut turut berkontribusi memecahkan fenomena itu.'."
      },
      {
        "id": "q-de-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Das vorliegende Exposé umreißt die theoretischen Prämissen und die forschungsleitenden Fragen des Dissertationsvorhabens.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Proposal riset (Exposé) ini menguraikan premis-premis teoretis serta pertanyaan penuntun riset dari proyek disertasi.",
        "keywords": [
          "proposal",
          "riset",
          "menguraikan",
          "premis"
        ],
        "explanation": "Kalimat akademik pola Wissenschaftliche Textsorten: Abstract, Exposee und Thesenpapier: 'Das vorliegende Exposé umreißt die theoretischen Prämissen und die forschungsleitenden Fragen des Dissertationsvorhabens.' diterjemahkan secara akurat menjadi 'Proposal riset (Exposé) ini menguraikan premis-premis teoretis serta pertanyaan penuntun riset dari proyek disertasi.'."
      },
      {
        "id": "q-de-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Thomas Kuhns Konzept des Paradigmenwechsels revolutionierte das Verständnis wissenschaftlicher Umbrüche.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Konsep pergeseran paradigma dari Thomas Kuhn telah merevolusi pemahaman mengenai perubahan besar keilmuan.",
        "keywords": [
          "konsep",
          "pergeseran",
          "paradigma",
          "thomas"
        ],
        "explanation": "Kalimat akademik pola Metaphorik und diskursive Nuancen im akademischen Diskurs: 'Thomas Kuhns Konzept des Paradigmenwechsels revolutionierte das Verständnis wissenschaftlicher Umbrüche.' diterjemahkan secara akurat menjadi 'Konsep pergeseran paradigma dari Thomas Kuhn telah merevolusi pemahaman mengenai perubahan besar keilmuan.'."
      },
      {
        "id": "q-de-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Man mag einwenden, dass der Ansatz reduktionistisch sei; diesem Vorwurf ist jedoch entschieden entgegenzutreten.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Orang mungkin menyanggah bahwa pendekatan ini bersifat reduksionis; namun tuduhan ini harus dibantah dengan tegas.",
        "keywords": [
          "orang",
          "mungkin",
          "menyanggah",
          "bahwa"
        ],
        "explanation": "Kalimat akademik pola Rhetorische Mittel der Argumentation und Gegenrede: 'Man mag einwenden, dass der Ansatz reduktionistisch sei; diesem Vorwurf ist jedoch entschieden entgegenzutreten.' diterjemahkan secara akurat menjadi 'Orang mungkin menyanggah bahwa pendekatan ini bersifat reduksionis; namun tuduhan ini harus dibantah dengan tegas.'."
      },
      {
        "id": "q-de-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Die hermeneutische Auslegung des Primärtextes erhellt die polyvalente Semantik des Werkes.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Penafsiran hermeneutis terhadap naskah primer tersebut menerangi semantik polivalen dari karya itu.",
        "keywords": [
          "penafsiran",
          "hermeneutis",
          "terhadap",
          "naskah"
        ],
        "explanation": "Kalimat akademik pola Fachsprachliche Terminologie der Natur- und Geisteswissenschaften: 'Die hermeneutische Auslegung des Primärtextes erhellt die polyvalente Semantik des Werkes.' diterjemahkan secara akurat menjadi 'Penafsiran hermeneutis terhadap naskah primer tersebut menerangi semantik polivalen dari karya itu.'."
      },
      {
        "id": "q-de-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Vorbehaltlich anderslautender Bestimmungen tritt die novellierte Promotionsordnung mit sofortiger Wirkung in Kraft.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Dengan tetap memperhatikan ketentuan lain yang berlaku, peraturan doktoral yang telah diperbarui ini mulai berlaku seketika.",
        "keywords": [
          "tetap",
          "memperhatikan",
          "ketentuan",
          "lain"
        ],
        "explanation": "Kalimat akademik pola Juristische und administrative Satzmuster in Deutschland: 'Vorbehaltlich anderslautender Bestimmungen tritt die novellierte Promotionsordnung mit sofortiger Wirkung in Kraft.' diterjemahkan secara akurat menjadi 'Dengan tetap memperhatikan ketentuan lain yang berlaku, peraturan doktoral yang telah diperbarui ini mulai berlaku seketika.'."
      },
      {
        "id": "q-de-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Die vorliegende Masterarbeit widmet sich der systematischen Rekonstruktion dieses Desiderats.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Tesis magister ini didedikasikan untuk merekonstruksi secara sistematis celah penelitian tersebut.",
        "keywords": [
          "tesis",
          "magister",
          "didedikasikan",
          "merekonstruksi"
        ],
        "explanation": "Kalimat akademik pola Gliederung und Einleitung einer wissenschaftlichen Masterarbeit: 'Die vorliegende Masterarbeit widmet sich der systematischen Rekonstruktion dieses Desiderats.' diterjemahkan secara akurat menjadi 'Tesis magister ini didedikasikan untuk merekonstruksi secara sistematis celah penelitian tersebut.'."
      },
      {
        "id": "q-de-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Sehr geehrte Frau Dekanin, verehrte Mitglieder der Promotionskommission, ich danke Ihnen für die Würdigung meiner Dissertation.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Ibu Dekan yang terhormat, para anggota komisi promosi yang mulia, saya berterima kasih atas apresiasi terhadap disertasi saya.",
        "keywords": [
          "dekan",
          "terhormat",
          "anggota",
          "komisi"
        ],
        "explanation": "Kalimat akademik pola Verteidigung der Dissertation und Disputation vor der Fakultät: 'Sehr geehrte Frau Dekanin, verehrte Mitglieder der Promotionskommission, ich danke Ihnen für die Würdigung meiner Dissertation.' diterjemahkan secara akurat menjadi 'Ibu Dekan yang terhormat, para anggota komisi promosi yang mulia, saya berterima kasih atas apresiasi terhadap disertasi saya.'."
      }
    ]
  },
  "de-3": {
    "id": "test-de-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis Kalimat Jerman (5 Soal Sambung Kata)",
    "description": "Uji ketelitian menyusun tata urutan klausa regulasi kampus, registrasi mata kuliah, dan korespondensi resmi di Jerman.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-de-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat resmi pendaftaran kuliah: 'Saya ingin mendaftarkan diri secara resmi untuk semester musim dingin mendatang'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "ordnungsgemäß",
          "an der Universität immatrikulieren",
          "Ich möchte mich",
          "für das kommende Wintersemester"
        ],
        "correctOrder": [
          "Ich möchte mich",
          "für das kommende Wintersemester",
          "ordnungsgemäß",
          "an der Universität immatrikulieren"
        ],
        "explanation": "Syntaktische Abfolge: Subjekt/Modalverb (Ich möchte mich) + Zeitangabe (für das kommende Wintersemester) + Modaladverb (ordnungsgemäß) + Akkusativobjekt/Infinitiv (an der Universität immatrikulieren).",
        "targetSentence": "Ich möchte mich für das kommende Wintersemester ordnungsgemäß an der Universität immatrikulieren"
      },
      {
        "id": "q-de-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat tenggat waktu tugas: 'Mahasiswa harus mengumpulkan makalah seminar tepat waktu sebelum batas akhir'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "beim Lehrstuhl einreichen",
          "fristgerecht vor Semesterende",
          "ihre Seminararbeiten",
          "Die Studierenden müssen"
        ],
        "correctOrder": [
          "Die Studierenden müssen",
          "ihre Seminararbeiten",
          "fristgerecht vor Semesterende",
          "beim Lehrstuhl einreichen"
        ],
        "explanation": "Reguläre Satzstellung: Modalrahmen (Die Studierenden müssen ... einreichen) mit Akkusativobjekt, Temporal- und Lokalbestimmung.",
        "targetSentence": "Die Studierenden müssen ihre Seminararbeiten fristgerecht vor Semesterende beim Lehrstuhl einreichen"
      },
      {
        "id": "q-de-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat asisten peneliti: 'Asisten peneliti mendampingi praktikum laboratorium mahasiswa semester awal'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "für die Erstsemester",
          "betreut das Laborpraktikum",
          "Der wissenschaftliche Mitarbeiter"
        ],
        "correctOrder": [
          "Der wissenschaftliche Mitarbeiter",
          "betreut das Laborpraktikum",
          "für die Erstsemester"
        ],
        "explanation": "Normale deutsche SVO-Struktur: Subjekt (Der wissenschaftliche Mitarbeiter) + Prädikat (betreut) + Akkusativobjekt (das Laborpraktikum) + Präpositionalattribut (für die Erstsemester).",
        "targetSentence": "Der wissenschaftliche Mitarbeiter betreut das Laborpraktikum für die Erstsemester"
      },
      {
        "id": "q-de-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Di perpustakaan universitas tersedia pangkalan data ilmiah khusus bagi para peneliti'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "für wissenschaftliche Recherchen",
          "zur Verfügung",
          "In der Universitätsbibliothek",
          "stehen Fachdatenbanken"
        ],
        "correctOrder": [
          "In der Universitätsbibliothek",
          "stehen Fachdatenbanken",
          "für wissenschaftliche Recherchen",
          "zur Verfügung"
        ],
        "explanation": "Funktionsverbgefüge: Lokalangabe (In der Universitätsbibliothek) + Verb (stehen) + Subjekt (Fachdatenbanken) + Finalangabe + Verbzusatz (zur Verfügung).",
        "targetSentence": "In der Universitätsbibliothek stehen Fachdatenbanken für wissenschaftliche Recherchen zur Verfügung"
      },
      {
        "id": "q-de-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat ujian penyetaraan: 'Ujian Feststellungsprüfung memungkinkan akses masuk perguruan tinggi bagi pendaftar internasional'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "für internationale Bewerber",
          "den Hochschulzugang",
          "Die Feststellungsprüfung ermöglicht"
        ],
        "correctOrder": [
          "Die Feststellungsprüfung ermöglicht",
          "den Hochschulzugang",
          "für internationale Bewerber"
        ],
        "explanation": "Urutan: Subjekt/Prädikat (Die Feststellungsprüfung ermöglicht) + Akkusativobjekt (den Hochschulzugang) + Adressat (für internationale Bewerber).",
        "targetSentence": "Die Feststellungsprüfung ermöglicht den Hochschulzugang für internationale Bewerber"
      }
    ]
  },
  "de-4": {
    "id": "test-de-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Jerman (10 Soal Artikan)",
    "description": "Uji penguasaan glosarium akademik, peristilahan seminar ilmiah, dan sistem administrasi kampus di Jerman.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-de-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Erstprüfer / Betreuer der Abschlussarbeit (Doktorvater)':",
        "targetSentence": "Erstprüfer / Betreuer der Abschlussarbeit",
        "audioVoiceLang": "de-DE",
        "options": [
          "Kantin Universitas Bersubsidi Khusus Mahasiswa",
          "Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi",
          "Daftar Ulang Administrasi Semester Berikutnya",
          "Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Erstprüfer / Betreuer der Abschlussarbeit (Doktorvater)' adalah padanan untuk 'Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi' di universitas Jerman."
      },
      {
        "id": "q-de-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Klausur (schriftliche Aufsichtsarbeit)':",
        "targetSentence": "Klausur",
        "audioVoiceLang": "de-DE",
        "options": [
          "Katalog Daftar Mata Kuliah / Buku Panduan Modul",
          "Transkrip Rekapitulasi Nilai Akademik Resmi",
          "Ujian Tertulis Terikat Waktu di Bawah Pengawasan",
          "Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Klausur (schriftliche Aufsichtsarbeit)' adalah padanan untuk 'Ujian Tertulis Terikat Waktu di Bawah Pengawasan' di universitas Jerman."
      },
      {
        "id": "q-de-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Mensa (Mensa Academica)':",
        "targetSentence": "Mensa",
        "audioVoiceLang": "de-DE",
        "options": [
          "Daftar Ulang Administrasi Semester Berikutnya",
          "Masa Studi Standar Resmi Perkuliahan",
          "Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)",
          "Kantin Universitas Bersubsidi Khusus Mahasiswa"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Mensa (Mensa Academica)' adalah padanan untuk 'Kantin Universitas Bersubsidi Khusus Mahasiswa' di universitas Jerman."
      },
      {
        "id": "q-de-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Vorlesungsverzeichnis (Modulhandbuch)':",
        "targetSentence": "Vorlesungsverzeichnis",
        "audioVoiceLang": "de-DE",
        "options": [
          "Katalog Daftar Mata Kuliah / Buku Panduan Modul",
          "Transkrip Rekapitulasi Nilai Akademik Resmi",
          "Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)",
          "Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Vorlesungsverzeichnis (Modulhandbuch)' adalah padanan untuk 'Katalog Daftar Mata Kuliah / Buku Panduan Modul' di universitas Jerman."
      },
      {
        "id": "q-de-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Rückmeldung zum Folgesemester':",
        "targetSentence": "Rückmeldung zum Folgesemester",
        "audioVoiceLang": "de-DE",
        "options": [
          "Masa Studi Standar Resmi Perkuliahan",
          "Daftar Ulang Administrasi Semester Berikutnya",
          "Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus",
          "Ujian Tertulis Terikat Waktu di Bawah Pengawasan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Rückmeldung zum Folgesemester' adalah padanan untuk 'Daftar Ulang Administrasi Semester Berikutnya' di universitas Jerman."
      },
      {
        "id": "q-de-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Notenspiegel (Leistungsübersicht)':",
        "targetSentence": "Notenspiegel",
        "audioVoiceLang": "de-DE",
        "options": [
          "Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)",
          "Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)",
          "Transkrip Rekapitulasi Nilai Akademik Resmi",
          "Kantin Universitas Bersubsidi Khusus Mahasiswa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Notenspiegel (Leistungsübersicht)' adalah padanan untuk 'Transkrip Rekapitulasi Nilai Akademik Resmi' di universitas Jerman."
      },
      {
        "id": "q-de-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Regelstudienzeit der Studiengänge':",
        "targetSentence": "Regelstudienzeit der Studiengänge",
        "audioVoiceLang": "de-DE",
        "options": [
          "Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus",
          "Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi",
          "Katalog Daftar Mata Kuliah / Buku Panduan Modul",
          "Masa Studi Standar Resmi Perkuliahan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Regelstudienzeit der Studiengänge' adalah padanan untuk 'Masa Studi Standar Resmi Perkuliahan' di universitas Jerman."
      },
      {
        "id": "q-de-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Zulassungsbescheid der Hochschule':",
        "targetSentence": "Zulassungsbescheid der Hochschule",
        "audioVoiceLang": "de-DE",
        "options": [
          "Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)",
          "Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)",
          "Ujian Tertulis Terikat Waktu di Bawah Pengawasan",
          "Daftar Ulang Administrasi Semester Berikutnya"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Zulassungsbescheid der Hochschule' adalah padanan untuk 'Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)' di universitas Jerman."
      },
      {
        "id": "q-de-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Wissenschaftliche Hilfskraft (HiWi)':",
        "targetSentence": "Wissenschaftliche Hilfskraft",
        "audioVoiceLang": "de-DE",
        "options": [
          "Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi",
          "Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus",
          "Kantin Universitas Bersubsidi Khusus Mahasiswa",
          "Transkrip Rekapitulasi Nilai Akademik Resmi"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Wissenschaftliche Hilfskraft (HiWi)' adalah padanan untuk 'Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus' di universitas Jerman."
      },
      {
        "id": "q-de-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Exmatrikulation nach Abschluss des Studiums':",
        "targetSentence": "Exmatrikulation nach Abschluss des Studiums",
        "audioVoiceLang": "de-DE",
        "options": [
          "Ujian Tertulis Terikat Waktu di Bawah Pengawasan",
          "Katalog Daftar Mata Kuliah / Buku Panduan Modul",
          "Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)",
          "Masa Studi Standar Resmi Perkuliahan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Exmatrikulation nach Abschluss des Studiums' adalah padanan untuk 'Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)' di universitas Jerman."
      }
    ]
  },
  "de-5": {
    "id": "test-de-5",
    "title": "Bagian 5: Wacana Silabus & Analisis Kasus Kampus Jerman (15 Soal Analisis Bebas)",
    "description": "Uji kesiapan komprehensif menghadapi perkuliahan nyata, etika laboratorium, dan dinamika mahasiswa internasional di Jerman.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-de-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah sebagian besar universitas negeri di Jerman mengenakan biaya kuliah (Studiengebühren) untuk program Bachelor dan Master reguler?",
        "options": [
          "Ya, biayanya 30.000 euro per semester",
          "Hanya mahasiswa kedokteran yang gratis",
          "Wajib membayar biaya gedung 10.000 euro",
          "Tidak ada biaya kuliah pokok (bebas SPP), mahasiswa hanya membayar iuran semester (Semesterbeitrag) yang sudah termasuk tiket transportasi"
        ],
        "correctAnswerIndex": 3,
        "explanation": "An den meisten staatlichen deutschen Universitäten fallen keine Studiengebühren für grundständige Studiengänge an."
      },
      {
        "id": "q-de-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas hari kerja resmi bagi mahasiswa asing non-Uni Eropa di Jerman per tahun kalender?",
        "options": [
          "Maksimal 120 hari kerja penuh (ganze Tage) atau 240 hari kerja paruh (halbe Tage) per tahun",
          "Bebas 365 hari tanpa batas",
          "Dilarang bekerja sama sekali",
          "Hanya 10 hari per tahun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Internationale Studierende aus Drittstaaten dürfen jährlich 120 volle oder 240 halbe Tage arbeiten."
      },
      {
        "id": "q-de-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Semesterticket' yang diperoleh mahasiswa Jerman?",
        "options": [
          "Tiket masuk bioskop",
          "Tiket terusan transportasi umum gratis/terdiskon selama satu semester penuh di seluruh wilayah negara bagian",
          "Karcis makan gratis",
          "Tiket konser musik"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Das Semesterticket ermöglicht die unbegrenzte Nutzung des regionalen Nahverkehrs während des Semesters."
      },
      {
        "id": "q-de-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa nilai minimal yang harus dicapai agar seorang mahasiswa dinyatakan 'lulus' (Bestanden) dalam ujian di Jerman?",
        "options": [
          "Nilai 1,0",
          "Nilai 5,0",
          "Nilai 4,0 (Ausreichend)",
          "Nilai 3,0"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Mit einer Note von 4,0 gilt eine Prüfungsleistung als bestanden; 5,0 bedeutet nicht bestanden."
      },
      {
        "id": "q-de-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'Ausländerbehörde' (Kantor Urusan Warga Asing) bagi mahasiswa Indonesia di Jerman?",
        "options": [
          "Menguji tes bahasa",
          "Mencari kamar kos",
          "Menjual tiket kereta",
          "Menerbitkan dan memperpanjang izin tinggal resmi (Aufenthaltstitel) setelah kedatangan di Jerman"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Die Ausländerbehörde ist für aufenthaltsrechtliche Angelegenheiten zuständig."
      },
      {
        "id": "q-de-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa itu 'Anmeldung' (Wohnsitzanmeldung) yang wajib dilakukan mahasiswa dalam waktu 14 hari setelah pindah ke tempat tinggal baru di Jerman?",
        "options": [
          "Pendaftaran alamat tempat tinggal resmi di kantor catatan sipil (Bürgeramt / Einwohnermeldeamt)",
          "Pendaftaran kursus mobil",
          "Pembelian kartu SIM",
          "Membuka rekening media sosial"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Die Wohnsitzanmeldung beim Einwohnermeldeamt ist innerhalb von zwei Wochen gesetzlich vorgeschrieben."
      },
      {
        "id": "q-de-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi asuransi kesehatan (Krankenversicherung) dalam proses imatrikulasi perkuliahan di Jerman?",
        "options": [
          "Hanya pelengkap opsional",
          "Wajib dimiliki (gesetzliche Krankenversicherung) sebagai syarat mutlak pendaftaran universitas dan visa",
          "Hanya jika mahasiswa sakit parah",
          "Tidak diperlukan sama sekali"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Ohne Nachweis einer gültigen Krankenversicherung ist eine Immatrikulation an deutschen Hochschulen unmöglich."
      },
      {
        "id": "q-de-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'C.T.' (cum tempore) pada jadwal perkuliahan di Jerman?",
        "options": [
          "Kuliah dimulai tepat waktu",
          "Kuliah dibatalkan",
          "Kuliah dimulai 15 menit setelah waktu yang tertera pada jadwal (akademische Viertelstunde)",
          "Kuliah berlangsung semalaman"
        ],
        "correctAnswerIndex": 2,
        "explanation": "'cum tempore' bedeutet Beginn mit der akademischen Viertelstunde Verspätung."
      },
      {
        "id": "q-de-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kebalikan dari 'c.t.', yaitu 'S.T.' (sine tempore)?",
        "options": [
          "Kuliah libur",
          "Kuliah di luar kampus",
          "Kuliah wajib pakai jas",
          "Kuliah dimulai tepat waktu tanpa keterlambatan 15 menit"
        ],
        "correctAnswerIndex": 3,
        "explanation": "'sine tempore' bedeutet pünktlicher Beginn zur angegebenen vollen Stunde."
      },
      {
        "id": "q-de-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'HiWi' (Wissenschaftliche Hilfskraft) di universitas Jerman?",
        "options": [
          "Pekerjaan paruh waktu sebagai asisten penelitian atau pengajar di institut universitas yang bergengsi untuk CV",
          "Petugas jaga malam",
          "Sopir bus kampus",
          "Petugas kebersihan laboratorium"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Eine HiWi-Stelle bietet Studierenden wertvolle Praxiserfahrungen im wissenschaftlichen Betrieb."
      },
      {
        "id": "q-de-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bulan apakah semester musim dingin (Wintersemester) biasanya secara resmi dimulai di universitas Jerman?",
        "options": [
          "1 Januari",
          "1 Oktober",
          "1 Mei",
          "1 Juli"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Das Wintersemester beginnt an deutschen Universitäten offiziell am 1. Oktober."
      },
      {
        "id": "q-de-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah nama ujian resmi kemahiran bahasa Jerman masuk universitas yang diakui secara nasional?",
        "options": [
          "TOEFL",
          "IELTS",
          "TestDaF (Test Deutsch als Fremdsprache) atau DSH (Deutsche Sprachprüfung für den Hochschulzugang)",
          "DELF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "TestDaF und DSH sind die anerkannten sprachlichen Zugangsprüfungen für das Hochschulstudium."
      },
      {
        "id": "q-de-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Exzellenzinitiative' / 'Exzellenzstrategie' di Jerman?",
        "options": [
          "Lomba olahraga tahunan",
          "Program beasiswa pariwisata",
          "Organisasi pers mahasiswa",
          "Program pendanaan riset bergengsi pemerintah federal untuk universitas-universitas riset terkemuka (Exzellenzuniversitäten)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Die Exzellenzstrategie fördert Spitzenforschung an deutschen Spitzenuniversitäten nachhaltig."
      },
      {
        "id": "q-de-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa gagal dalam ujian klausur sebanyak 3 kali (Drittversuch), apa konsekuensinya?",
        "options": [
          "Kehilangan hak studi untuk jurusan tersebut di seluruh Jerman (endgültig nicht bestanden)",
          "Boleh mengulang 10 kali lagi",
          "Hanya didenda uang",
          "Mendapat hadiah buku"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ein endgültiges Nichtbestehen führt zur Exmatrikulation und bundesweiten Sperre für das Studienfach."
      },
      {
        "id": "q-de-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Mengapa konsep 'Kolloquium' sangat penting menjelang penyelesaian tesis di Jerman?",
        "options": [
          "Pesta wisuda makan bersama",
          "Merupakan seminar presentasi ilmiah di mana mahasiswa mempertahankan metodologi dan hasil risetnya di hadapan dosen dan rekan peneliti",
          "Ujian praktik olahraga",
          "Pameran karya lukis"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Im Kolloquium werden Forschungsergebnisse präsentiert und im wissenschaftlichen Diskurs verteidigt."
      }
    ]
  },
  "de-full": {
    "id": "test-de-full",
    "title": "Simulasi Ujian Masuk Lengkap Kuliah Jerman (50 Soal Standar Ujian)",
    "description": "Simulasi ujian komprehensif berstandar masuk universitas terkemuka di Jerman (90 Menit). Mencakup seluruh 5 aspek kesiapan akademik dan bahasa.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-de-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was versteht man unter einer 'Masterarbeit' an einer deutschen Universität?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Ujian masuk matrikulasi",
          "Tesis akhir ilmiah kelulusan jenjang S2",
          "Daftar hadir perkuliahan",
          "Kuitansi biaya hidup bulanan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Die Masterarbeit ist die selbstständige wissenschaftliche Abschlussarbeit im Masterstudium."
      },
      {
        "id": "q-de-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welches Relativpronomen passt grammatikalisch: 'Das Forschungsprojekt, _____ der Professor leitet, ist international anerkannt.'",
        "audioVoiceLang": "de-DE",
        "options": [
          "den (Akkusativ Maskulinum / Dativ Plural) — kata ganti relatif maskulin akusatif",
          "dem (Dativ Maskulinum / Neutrum) — kata ganti relatif datif",
          "das (Akkusativ Neutrum) — yang (kata ganti relatif netral akusatif mengacu pada \"das Forschungsprojekt\")",
          "dessen (Genitiv Maskulinum / Neutrum) — yang miliknya (kata ganti relatif genitif)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Das Bezugswort 'das Projekt' ist sächlich und steht im Akkusativ: 'das der Professor leitet'."
      },
      {
        "id": "q-de-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wie nennt man die regelmäßige Sprechstunde eines Dozenten für studentische Anliegen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Die Vorlesung — Kuliah umum satu arah di auditorium",
          "Das Kolloquium — Seminar diskusi ilmiah / ujian tesis",
          "Die Klausur — Ujian tertulis terawasi di akhir semester",
          "Die Sprechstunde — Jam konsultasi bimbingan terjadwal bersama dosen"
        ],
        "correctAnswerIndex": 3,
        "explanation": "In der Sprechstunde besprechen Studierende akademische Fragen persönlich mit Dozierenden."
      },
      {
        "id": "q-de-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welches Dokument bescheinigt den offiziellen Status als immatrikulierter Student?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Die Immatrikulationsbescheinigung (Studienbescheinigung) — Surat keterangan resmi terdaftar sebagai mahasiswa aktif",
          "Der Führerschein — Surat Izin Mengemudi (SIM)",
          "Die Monatskarte — Tiket bulanan transportasi",
          "Das Zeugnis der Grundschule — Rapor sekolah dasar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Die Immatrikulationsbescheinigung dient als amtlicher Nachweis des Studierendenstatus."
      },
      {
        "id": "q-de-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was ist ein 'Studienkolleg' für ausländische Studienbewerber in Deutschland?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Ein Ferienlager für Jugendliche — Perkemahan liburan remaja",
          "Ein einjähriger Vorbereitungskurs zur Feststellungsprüfung bei nicht direkt anerkanntem Abitur — Program matrikulasi persiapan satu tahun menuju ujian penyetaraan masuk universitas Jerman (FSP)",
          "Ein Wohnheim für Doktoranden — Asrama khusus mahasiswa doktoral",
          "Eine Sprachschule für Touristen — Kursus bahasa untuk wisatawan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Das Studienkolleg bereitet internationale Bewerber fachlich und sprachlich auf das Hochschulstudium vor."
      },
      {
        "id": "q-de-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wofür steht die Abkürzung 'DAAD' im deutschen Hochschulwesen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Deutsche Agentur für Arbeit und Daten — Agen Tenaga Kerja dan Data Jerman",
          "Dachverband Akademischer Autoren Deutschlands — Asosiasi Penulis Akademik Jerman",
          "Deutscher Akademischer Austauschdienst — Dinas Pertukaran Akademik Jerman (lembaga pemberi beasiswa terbesar di Jerman)",
          "Direktion für Angewandte Ausbildung — Direktorat Pelatihan Terapan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Der DAAD ist die weltweit größte Förderorganisation für den internationalen Austausch von Studierenden und Forschenden."
      },
      {
        "id": "q-de-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was ist ein 'Sperrkonto' im Rahmen des deutschen Studentenvisums?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Ein Girokonto ohne Gebühren — Rekening giro biasa bebas biaya admin",
          "Ein Sparkonto für den Ruhestand — Rekening tabungan dana pensiun",
          "Ein Kreditkartensystem — Sistem pembayaran kartu kredit",
          "Ein spezielles Bankkonto mit gesperrtem Guthaben zur Sicherung des monatlichen Lebensunterhalts — Rekening bank khusus dengan dana dibekukan untuk menjamin biaya hidup bulanan selama studi"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Das Sperrkonto weist die finanzielle Leistungsfähigkeit für die Visumserteilung bei der Botschaft nach."
      },
      {
        "id": "q-de-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was ist der wesentliche Unterschied zwischen einer 'Vorlesung' und einem 'Seminar'?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Vorlesung ist dozentenzentriert im Hörsaal; Seminar erfordert aktive Diskussion und Referate der Studierenden — Vorlesung adalah kuliah teori oleh dosen di aula; Seminar menuntut diskusi aktif dan presentasi makalah mahasiswa",
          "Vorlesung findet abends statt; Seminar morgens — Vorlesung diadakan malam hari; Seminar pagi hari",
          "Vorlesung ist Sportunterricht — Vorlesung adalah pelajaran olahraga",
          "Es gibt keinen Unterschied — Tidak ada perbedaan sama sekali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "In der Vorlesung vermittelt der Dozent Stoff; im Seminar erarbeiten Studierende Themen interaktiv."
      },
      {
        "id": "q-de-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welche Note gilt im deutschen Hochschulnotensystem als Bestnote?",
        "audioVoiceLang": "de-DE",
        "options": [
          "5,0 (Nicht ausreichend) — Nilai 5,0 (Tidak Lulus / Gagal)",
          "1,0 (Sehr gut) — Nilai 1,0 (Sangat Baik / nilai tertinggi dalam skala 1,0–5,0 Jerman)",
          "10,0 — Tidak digunakan dalam skala universitas Jerman",
          "0,0 — Bukan nilai standar dalam transkrip universitas Jerman"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Das deutsche Notensystem reicht von 1,0 (sehr gut) bis 5,0 (nicht bestanden)."
      },
      {
        "id": "q-de-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welche Aufgaben übernimmt das 'Studierendenwerk' (Studentenwerk) an deutschen Hochschulen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Einschreibung von Studenten — Mengurus imatrikulasi akademik fakultas",
          "Abnahme von Masterprüfungen — Menguji sidang tesis Master",
          "Betrieb von Mensen, Wohnheimen, BAföG-Beratung und psychosozialer Unterstützung — Mengelola kantin mahasiswa (Mensa), asrama, konsultasi pendanaan studi, dan layanan psikososial",
          "Leitung der Fakultäten — Memimpin dekanat fakultas"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Das Studierendenwerk erbringt soziale, wirtschaftliche und kulturelle Dienstleistungen für Studierende."
      },
      {
        "id": "q-de-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Die Implementierung des innovativen Curriculums führte zu einer messbaren Steigerung der Studienleistungen.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Implementasi kurikulum inovatif tersebut menghasilkan peningkatan capaian prestasi studi yang terukur.",
        "keywords": [
          "implementasi",
          "kurikulum",
          "inovatif",
          "tersebut"
        ],
        "explanation": "Kalimat akademik pola Nominalstil und Verbalstil: Transformationstechniken: 'Die Implementierung des innovativen Curriculums führte zu einer messbaren Steigerung der Studienleistungen.' diterjemahkan secara akurat menjadi 'Implementasi kurikulum inovatif tersebut menghasilkan peningkatan capaian prestasi studi yang terukur.'."
      },
      {
        "id": "q-de-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Die astronomische Entdeckung dürfte weitreichende Konsequenzen für die Kosmologie haben.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Penemuan astronomis tersebut diperkirakan kuat akan membawa konsekuensi luas bagi ilmu kosmologi.",
        "keywords": [
          "penemuan",
          "astronomis",
          "tersebut",
          "diperkirakan"
        ],
        "explanation": "Kalimat akademik pola Subjektive Bedeutung der Modalverben (Vermutung & Fremdaussage): 'Die astronomische Entdeckung dürfte weitreichende Konsequenzen für die Kosmologie haben.' diterjemahkan secara akurat menjadi 'Penemuan astronomis tersebut diperkirakan kuat akan membawa konsekuensi luas bagi ilmu kosmologi.'."
      },
      {
        "id": "q-de-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Die Theorie, die der Forscher entwickelte, als er am Institut tätig war, trug dazu bei, das Phänomen zu entschlüsseln.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Teori yang dikembangkan peneliti itu ketika beliau bertugas di institut tersebut turut berkontribusi memecahkan fenomena itu.",
        "keywords": [
          "teori",
          "dikembangkan",
          "peneliti",
          "beliau"
        ],
        "explanation": "Kalimat akademik pola Komplexe Satzgefüge mit verschachtelten Relativ- und Nebensätzen: 'Die Theorie, die der Forscher entwickelte, als er am Institut tätig war, trug dazu bei, das Phänomen zu entschlüsseln.' diterjemahkan secara akurat menjadi 'Teori yang dikembangkan peneliti itu ketika beliau bertugas di institut tersebut turut berkontribusi memecahkan fenomena itu.'."
      },
      {
        "id": "q-de-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Das vorliegende Exposé umreißt die theoretischen Prämissen und die forschungsleitenden Fragen des Dissertationsvorhabens.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Proposal riset (Exposé) ini menguraikan premis-premis teoretis serta pertanyaan penuntun riset dari proyek disertasi.",
        "keywords": [
          "proposal",
          "riset",
          "menguraikan",
          "premis"
        ],
        "explanation": "Kalimat akademik pola Wissenschaftliche Textsorten: Abstract, Exposee und Thesenpapier: 'Das vorliegende Exposé umreißt die theoretischen Prämissen und die forschungsleitenden Fragen des Dissertationsvorhabens.' diterjemahkan secara akurat menjadi 'Proposal riset (Exposé) ini menguraikan premis-premis teoretis serta pertanyaan penuntun riset dari proyek disertasi.'."
      },
      {
        "id": "q-de-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Thomas Kuhns Konzept des Paradigmenwechsels revolutionierte das Verständnis wissenschaftlicher Umbrüche.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Konsep pergeseran paradigma dari Thomas Kuhn telah merevolusi pemahaman mengenai perubahan besar keilmuan.",
        "keywords": [
          "konsep",
          "pergeseran",
          "paradigma",
          "thomas"
        ],
        "explanation": "Kalimat akademik pola Metaphorik und diskursive Nuancen im akademischen Diskurs: 'Thomas Kuhns Konzept des Paradigmenwechsels revolutionierte das Verständnis wissenschaftlicher Umbrüche.' diterjemahkan secara akurat menjadi 'Konsep pergeseran paradigma dari Thomas Kuhn telah merevolusi pemahaman mengenai perubahan besar keilmuan.'."
      },
      {
        "id": "q-de-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Man mag einwenden, dass der Ansatz reduktionistisch sei; diesem Vorwurf ist jedoch entschieden entgegenzutreten.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Orang mungkin menyanggah bahwa pendekatan ini bersifat reduksionis; namun tuduhan ini harus dibantah dengan tegas.",
        "keywords": [
          "orang",
          "mungkin",
          "menyanggah",
          "bahwa"
        ],
        "explanation": "Kalimat akademik pola Rhetorische Mittel der Argumentation und Gegenrede: 'Man mag einwenden, dass der Ansatz reduktionistisch sei; diesem Vorwurf ist jedoch entschieden entgegenzutreten.' diterjemahkan secara akurat menjadi 'Orang mungkin menyanggah bahwa pendekatan ini bersifat reduksionis; namun tuduhan ini harus dibantah dengan tegas.'."
      },
      {
        "id": "q-de-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Die hermeneutische Auslegung des Primärtextes erhellt die polyvalente Semantik des Werkes.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Penafsiran hermeneutis terhadap naskah primer tersebut menerangi semantik polivalen dari karya itu.",
        "keywords": [
          "penafsiran",
          "hermeneutis",
          "terhadap",
          "naskah"
        ],
        "explanation": "Kalimat akademik pola Fachsprachliche Terminologie der Natur- und Geisteswissenschaften: 'Die hermeneutische Auslegung des Primärtextes erhellt die polyvalente Semantik des Werkes.' diterjemahkan secara akurat menjadi 'Penafsiran hermeneutis terhadap naskah primer tersebut menerangi semantik polivalen dari karya itu.'."
      },
      {
        "id": "q-de-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Vorbehaltlich anderslautender Bestimmungen tritt die novellierte Promotionsordnung mit sofortiger Wirkung in Kraft.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Dengan tetap memperhatikan ketentuan lain yang berlaku, peraturan doktoral yang telah diperbarui ini mulai berlaku seketika.",
        "keywords": [
          "tetap",
          "memperhatikan",
          "ketentuan",
          "lain"
        ],
        "explanation": "Kalimat akademik pola Juristische und administrative Satzmuster in Deutschland: 'Vorbehaltlich anderslautender Bestimmungen tritt die novellierte Promotionsordnung mit sofortiger Wirkung in Kraft.' diterjemahkan secara akurat menjadi 'Dengan tetap memperhatikan ketentuan lain yang berlaku, peraturan doktoral yang telah diperbarui ini mulai berlaku seketika.'."
      },
      {
        "id": "q-de-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Die vorliegende Masterarbeit widmet sich der systematischen Rekonstruktion dieses Desiderats.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Tesis magister ini didedikasikan untuk merekonstruksi secara sistematis celah penelitian tersebut.",
        "keywords": [
          "tesis",
          "magister",
          "didedikasikan",
          "merekonstruksi"
        ],
        "explanation": "Kalimat akademik pola Gliederung und Einleitung einer wissenschaftlichen Masterarbeit: 'Die vorliegende Masterarbeit widmet sich der systematischen Rekonstruktion dieses Desiderats.' diterjemahkan secara akurat menjadi 'Tesis magister ini didedikasikan untuk merekonstruksi secara sistematis celah penelitian tersebut.'."
      },
      {
        "id": "q-de-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Sehr geehrte Frau Dekanin, verehrte Mitglieder der Promotionskommission, ich danke Ihnen für die Würdigung meiner Dissertation.",
        "audioVoiceLang": "de-DE",
        "sampleAnswer": "Ibu Dekan yang terhormat, para anggota komisi promosi yang mulia, saya berterima kasih atas apresiasi terhadap disertasi saya.",
        "keywords": [
          "dekan",
          "terhormat",
          "anggota",
          "komisi"
        ],
        "explanation": "Kalimat akademik pola Verteidigung der Dissertation und Disputation vor der Fakultät: 'Sehr geehrte Frau Dekanin, verehrte Mitglieder der Promotionskommission, ich danke Ihnen für die Würdigung meiner Dissertation.' diterjemahkan secara akurat menjadi 'Ibu Dekan yang terhormat, para anggota komisi promosi yang mulia, saya berterima kasih atas apresiasi terhadap disertasi saya.'."
      },
      {
        "id": "q-de-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat resmi pendaftaran kuliah: 'Saya ingin mendaftarkan diri secara resmi untuk semester musim dingin mendatang'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "ordnungsgemäß",
          "an der Universität immatrikulieren",
          "Ich möchte mich",
          "für das kommende Wintersemester"
        ],
        "correctOrder": [
          "Ich möchte mich",
          "für das kommende Wintersemester",
          "ordnungsgemäß",
          "an der Universität immatrikulieren"
        ],
        "explanation": "Syntaktische Abfolge: Subjekt/Modalverb (Ich möchte mich) + Zeitangabe (für das kommende Wintersemester) + Modaladverb (ordnungsgemäß) + Akkusativobjekt/Infinitiv (an der Universität immatrikulieren).",
        "targetSentence": "Ich möchte mich für das kommende Wintersemester ordnungsgemäß an der Universität immatrikulieren"
      },
      {
        "id": "q-de-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat tenggat waktu tugas: 'Mahasiswa harus mengumpulkan makalah seminar tepat waktu sebelum batas akhir'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "beim Lehrstuhl einreichen",
          "fristgerecht vor Semesterende",
          "ihre Seminararbeiten",
          "Die Studierenden müssen"
        ],
        "correctOrder": [
          "Die Studierenden müssen",
          "ihre Seminararbeiten",
          "fristgerecht vor Semesterende",
          "beim Lehrstuhl einreichen"
        ],
        "explanation": "Reguläre Satzstellung: Modalrahmen (Die Studierenden müssen ... einreichen) mit Akkusativobjekt, Temporal- und Lokalbestimmung.",
        "targetSentence": "Die Studierenden müssen ihre Seminararbeiten fristgerecht vor Semesterende beim Lehrstuhl einreichen"
      },
      {
        "id": "q-de-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat asisten peneliti: 'Asisten peneliti mendampingi praktikum laboratorium mahasiswa semester awal'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "für die Erstsemester",
          "betreut das Laborpraktikum",
          "Der wissenschaftliche Mitarbeiter"
        ],
        "correctOrder": [
          "Der wissenschaftliche Mitarbeiter",
          "betreut das Laborpraktikum",
          "für die Erstsemester"
        ],
        "explanation": "Normale deutsche SVO-Struktur: Subjekt (Der wissenschaftliche Mitarbeiter) + Prädikat (betreut) + Akkusativobjekt (das Laborpraktikum) + Präpositionalattribut (für die Erstsemester).",
        "targetSentence": "Der wissenschaftliche Mitarbeiter betreut das Laborpraktikum für die Erstsemester"
      },
      {
        "id": "q-de-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Di perpustakaan universitas tersedia pangkalan data ilmiah khusus bagi para peneliti'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "für wissenschaftliche Recherchen",
          "zur Verfügung",
          "In der Universitätsbibliothek",
          "stehen Fachdatenbanken"
        ],
        "correctOrder": [
          "In der Universitätsbibliothek",
          "stehen Fachdatenbanken",
          "für wissenschaftliche Recherchen",
          "zur Verfügung"
        ],
        "explanation": "Funktionsverbgefüge: Lokalangabe (In der Universitätsbibliothek) + Verb (stehen) + Subjekt (Fachdatenbanken) + Finalangabe + Verbzusatz (zur Verfügung).",
        "targetSentence": "In der Universitätsbibliothek stehen Fachdatenbanken für wissenschaftliche Recherchen zur Verfügung"
      },
      {
        "id": "q-de-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat ujian penyetaraan: 'Ujian Feststellungsprüfung memungkinkan akses masuk perguruan tinggi bagi pendaftar internasional'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "für internationale Bewerber",
          "den Hochschulzugang",
          "Die Feststellungsprüfung ermöglicht"
        ],
        "correctOrder": [
          "Die Feststellungsprüfung ermöglicht",
          "den Hochschulzugang",
          "für internationale Bewerber"
        ],
        "explanation": "Urutan: Subjekt/Prädikat (Die Feststellungsprüfung ermöglicht) + Akkusativobjekt (den Hochschulzugang) + Adressat (für internationale Bewerber).",
        "targetSentence": "Die Feststellungsprüfung ermöglicht den Hochschulzugang für internationale Bewerber"
      },
      {
        "id": "q-de-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Erstprüfer / Betreuer der Abschlussarbeit (Doktorvater)':",
        "targetSentence": "Erstprüfer / Betreuer der Abschlussarbeit",
        "audioVoiceLang": "de-DE",
        "options": [
          "Kantin Universitas Bersubsidi Khusus Mahasiswa",
          "Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi",
          "Daftar Ulang Administrasi Semester Berikutnya",
          "Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Erstprüfer / Betreuer der Abschlussarbeit (Doktorvater)' adalah padanan untuk 'Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi' di universitas Jerman."
      },
      {
        "id": "q-de-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Klausur (schriftliche Aufsichtsarbeit)':",
        "targetSentence": "Klausur",
        "audioVoiceLang": "de-DE",
        "options": [
          "Katalog Daftar Mata Kuliah / Buku Panduan Modul",
          "Transkrip Rekapitulasi Nilai Akademik Resmi",
          "Ujian Tertulis Terikat Waktu di Bawah Pengawasan",
          "Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Klausur (schriftliche Aufsichtsarbeit)' adalah padanan untuk 'Ujian Tertulis Terikat Waktu di Bawah Pengawasan' di universitas Jerman."
      },
      {
        "id": "q-de-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Mensa (Mensa Academica)':",
        "targetSentence": "Mensa",
        "audioVoiceLang": "de-DE",
        "options": [
          "Daftar Ulang Administrasi Semester Berikutnya",
          "Masa Studi Standar Resmi Perkuliahan",
          "Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)",
          "Kantin Universitas Bersubsidi Khusus Mahasiswa"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Mensa (Mensa Academica)' adalah padanan untuk 'Kantin Universitas Bersubsidi Khusus Mahasiswa' di universitas Jerman."
      },
      {
        "id": "q-de-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Vorlesungsverzeichnis (Modulhandbuch)':",
        "targetSentence": "Vorlesungsverzeichnis",
        "audioVoiceLang": "de-DE",
        "options": [
          "Katalog Daftar Mata Kuliah / Buku Panduan Modul",
          "Transkrip Rekapitulasi Nilai Akademik Resmi",
          "Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)",
          "Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Vorlesungsverzeichnis (Modulhandbuch)' adalah padanan untuk 'Katalog Daftar Mata Kuliah / Buku Panduan Modul' di universitas Jerman."
      },
      {
        "id": "q-de-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Rückmeldung zum Folgesemester':",
        "targetSentence": "Rückmeldung zum Folgesemester",
        "audioVoiceLang": "de-DE",
        "options": [
          "Masa Studi Standar Resmi Perkuliahan",
          "Daftar Ulang Administrasi Semester Berikutnya",
          "Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus",
          "Ujian Tertulis Terikat Waktu di Bawah Pengawasan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Rückmeldung zum Folgesemester' adalah padanan untuk 'Daftar Ulang Administrasi Semester Berikutnya' di universitas Jerman."
      },
      {
        "id": "q-de-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Notenspiegel (Leistungsübersicht)':",
        "targetSentence": "Notenspiegel",
        "audioVoiceLang": "de-DE",
        "options": [
          "Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)",
          "Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)",
          "Transkrip Rekapitulasi Nilai Akademik Resmi",
          "Kantin Universitas Bersubsidi Khusus Mahasiswa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Notenspiegel (Leistungsübersicht)' adalah padanan untuk 'Transkrip Rekapitulasi Nilai Akademik Resmi' di universitas Jerman."
      },
      {
        "id": "q-de-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Regelstudienzeit der Studiengänge':",
        "targetSentence": "Regelstudienzeit der Studiengänge",
        "audioVoiceLang": "de-DE",
        "options": [
          "Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus",
          "Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi",
          "Katalog Daftar Mata Kuliah / Buku Panduan Modul",
          "Masa Studi Standar Resmi Perkuliahan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Regelstudienzeit der Studiengänge' adalah padanan untuk 'Masa Studi Standar Resmi Perkuliahan' di universitas Jerman."
      },
      {
        "id": "q-de-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Zulassungsbescheid der Hochschule':",
        "targetSentence": "Zulassungsbescheid der Hochschule",
        "audioVoiceLang": "de-DE",
        "options": [
          "Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)",
          "Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)",
          "Ujian Tertulis Terikat Waktu di Bawah Pengawasan",
          "Daftar Ulang Administrasi Semester Berikutnya"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Zulassungsbescheid der Hochschule' adalah padanan untuk 'Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)' di universitas Jerman."
      },
      {
        "id": "q-de-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Wissenschaftliche Hilfskraft (HiWi)':",
        "targetSentence": "Wissenschaftliche Hilfskraft",
        "audioVoiceLang": "de-DE",
        "options": [
          "Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi",
          "Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus",
          "Kantin Universitas Bersubsidi Khusus Mahasiswa",
          "Transkrip Rekapitulasi Nilai Akademik Resmi"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Wissenschaftliche Hilfskraft (HiWi)' adalah padanan untuk 'Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus' di universitas Jerman."
      },
      {
        "id": "q-de-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Exmatrikulation nach Abschluss des Studiums':",
        "targetSentence": "Exmatrikulation nach Abschluss des Studiums",
        "audioVoiceLang": "de-DE",
        "options": [
          "Ujian Tertulis Terikat Waktu di Bawah Pengawasan",
          "Katalog Daftar Mata Kuliah / Buku Panduan Modul",
          "Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)",
          "Masa Studi Standar Resmi Perkuliahan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Exmatrikulation nach Abschluss des Studiums' adalah padanan untuk 'Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)' di universitas Jerman."
      },
      {
        "id": "q-de-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah sebagian besar universitas negeri di Jerman mengenakan biaya kuliah (Studiengebühren) untuk program Bachelor dan Master reguler?",
        "options": [
          "Ya, biayanya 30.000 euro per semester",
          "Hanya mahasiswa kedokteran yang gratis",
          "Wajib membayar biaya gedung 10.000 euro",
          "Tidak ada biaya kuliah pokok (bebas SPP), mahasiswa hanya membayar iuran semester (Semesterbeitrag) yang sudah termasuk tiket transportasi"
        ],
        "correctAnswerIndex": 3,
        "explanation": "An den meisten staatlichen deutschen Universitäten fallen keine Studiengebühren für grundständige Studiengänge an."
      },
      {
        "id": "q-de-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas hari kerja resmi bagi mahasiswa asing non-Uni Eropa di Jerman per tahun kalender?",
        "options": [
          "Maksimal 120 hari kerja penuh (ganze Tage) atau 240 hari kerja paruh (halbe Tage) per tahun",
          "Bebas 365 hari tanpa batas",
          "Dilarang bekerja sama sekali",
          "Hanya 10 hari per tahun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Internationale Studierende aus Drittstaaten dürfen jährlich 120 volle oder 240 halbe Tage arbeiten."
      },
      {
        "id": "q-de-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Semesterticket' yang diperoleh mahasiswa Jerman?",
        "options": [
          "Tiket masuk bioskop",
          "Tiket terusan transportasi umum gratis/terdiskon selama satu semester penuh di seluruh wilayah negara bagian",
          "Karcis makan gratis",
          "Tiket konser musik"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Das Semesterticket ermöglicht die unbegrenzte Nutzung des regionalen Nahverkehrs während des Semesters."
      },
      {
        "id": "q-de-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa nilai minimal yang harus dicapai agar seorang mahasiswa dinyatakan 'lulus' (Bestanden) dalam ujian di Jerman?",
        "options": [
          "Nilai 1,0",
          "Nilai 5,0",
          "Nilai 4,0 (Ausreichend)",
          "Nilai 3,0"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Mit einer Note von 4,0 gilt eine Prüfungsleistung als bestanden; 5,0 bedeutet nicht bestanden."
      },
      {
        "id": "q-de-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'Ausländerbehörde' (Kantor Urusan Warga Asing) bagi mahasiswa Indonesia di Jerman?",
        "options": [
          "Menguji tes bahasa",
          "Mencari kamar kos",
          "Menjual tiket kereta",
          "Menerbitkan dan memperpanjang izin tinggal resmi (Aufenthaltstitel) setelah kedatangan di Jerman"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Die Ausländerbehörde ist für aufenthaltsrechtliche Angelegenheiten zuständig."
      },
      {
        "id": "q-de-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa itu 'Anmeldung' (Wohnsitzanmeldung) yang wajib dilakukan mahasiswa dalam waktu 14 hari setelah pindah ke tempat tinggal baru di Jerman?",
        "options": [
          "Pendaftaran alamat tempat tinggal resmi di kantor catatan sipil (Bürgeramt / Einwohnermeldeamt)",
          "Pendaftaran kursus mobil",
          "Pembelian kartu SIM",
          "Membuka rekening media sosial"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Die Wohnsitzanmeldung beim Einwohnermeldeamt ist innerhalb von zwei Wochen gesetzlich vorgeschrieben."
      },
      {
        "id": "q-de-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi asuransi kesehatan (Krankenversicherung) dalam proses imatrikulasi perkuliahan di Jerman?",
        "options": [
          "Hanya pelengkap opsional",
          "Wajib dimiliki (gesetzliche Krankenversicherung) sebagai syarat mutlak pendaftaran universitas dan visa",
          "Hanya jika mahasiswa sakit parah",
          "Tidak diperlukan sama sekali"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Ohne Nachweis einer gültigen Krankenversicherung ist eine Immatrikulation an deutschen Hochschulen unmöglich."
      },
      {
        "id": "q-de-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'C.T.' (cum tempore) pada jadwal perkuliahan di Jerman?",
        "options": [
          "Kuliah dimulai tepat waktu",
          "Kuliah dibatalkan",
          "Kuliah dimulai 15 menit setelah waktu yang tertera pada jadwal (akademische Viertelstunde)",
          "Kuliah berlangsung semalaman"
        ],
        "correctAnswerIndex": 2,
        "explanation": "'cum tempore' bedeutet Beginn mit der akademischen Viertelstunde Verspätung."
      },
      {
        "id": "q-de-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kebalikan dari 'c.t.', yaitu 'S.T.' (sine tempore)?",
        "options": [
          "Kuliah libur",
          "Kuliah di luar kampus",
          "Kuliah wajib pakai jas",
          "Kuliah dimulai tepat waktu tanpa keterlambatan 15 menit"
        ],
        "correctAnswerIndex": 3,
        "explanation": "'sine tempore' bedeutet pünktlicher Beginn zur angegebenen vollen Stunde."
      },
      {
        "id": "q-de-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'HiWi' (Wissenschaftliche Hilfskraft) di universitas Jerman?",
        "options": [
          "Pekerjaan paruh waktu sebagai asisten penelitian atau pengajar di institut universitas yang bergengsi untuk CV",
          "Petugas jaga malam",
          "Sopir bus kampus",
          "Petugas kebersihan laboratorium"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Eine HiWi-Stelle bietet Studierenden wertvolle Praxiserfahrungen im wissenschaftlichen Betrieb."
      },
      {
        "id": "q-de-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bulan apakah semester musim dingin (Wintersemester) biasanya secara resmi dimulai di universitas Jerman?",
        "options": [
          "1 Januari",
          "1 Oktober",
          "1 Mei",
          "1 Juli"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Das Wintersemester beginnt an deutschen Universitäten offiziell am 1. Oktober."
      },
      {
        "id": "q-de-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah nama ujian resmi kemahiran bahasa Jerman masuk universitas yang diakui secara nasional?",
        "options": [
          "TOEFL",
          "IELTS",
          "TestDaF (Test Deutsch als Fremdsprache) atau DSH (Deutsche Sprachprüfung für den Hochschulzugang)",
          "DELF"
        ],
        "correctAnswerIndex": 2,
        "explanation": "TestDaF und DSH sind die anerkannten sprachlichen Zugangsprüfungen für das Hochschulstudium."
      },
      {
        "id": "q-de-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Exzellenzinitiative' / 'Exzellenzstrategie' di Jerman?",
        "options": [
          "Lomba olahraga tahunan",
          "Program beasiswa pariwisata",
          "Organisasi pers mahasiswa",
          "Program pendanaan riset bergengsi pemerintah federal untuk universitas-universitas riset terkemuka (Exzellenzuniversitäten)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Die Exzellenzstrategie fördert Spitzenforschung an deutschen Spitzenuniversitäten nachhaltig."
      },
      {
        "id": "q-de-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa gagal dalam ujian klausur sebanyak 3 kali (Drittversuch), apa konsekuensinya?",
        "options": [
          "Kehilangan hak studi untuk jurusan tersebut di seluruh Jerman (endgültig nicht bestanden)",
          "Boleh mengulang 10 kali lagi",
          "Hanya didenda uang",
          "Mendapat hadiah buku"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ein endgültiges Nichtbestehen führt zur Exmatrikulation und bundesweiten Sperre für das Studienfach."
      },
      {
        "id": "q-de-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Mengapa konsep 'Kolloquium' sangat penting menjelang penyelesaian tesis di Jerman?",
        "options": [
          "Pesta wisuda makan bersama",
          "Merupakan seminar presentasi ilmiah di mana mahasiswa mempertahankan metodologi dan hasil risetnya di hadapan dosen dan rekan peneliti",
          "Ujian praktik olahraga",
          "Pameran karya lukis"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Im Kolloquium werden Forschungsergebnisse präsentiert und im wissenschaftlichen Diskurs verteidigt."
      }
    ]
  }
};

export const SPAIN_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "es-1": {
    "id": "test-es-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Spanyol (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Spanyol.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-es-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué significa la sigla 'TFM' en el sistema universitario español de posgrado?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Título de Formación Militar — Gelar Pelatihan Militer",
          "Tarifa de Ferrocarril Madrid — Tarif Kereta Api Madrid",
          "Trabajo de Fin de Máster (tesis de investigación de maestría) — Karya Tugas Akhir Magister (tesis penelitian kelulusan S2)",
          "Tarjeta Financiera Mensual — Kartu Keuangan Bulanan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "El TFM es el proyecto o memoria científica que culmina los estudios oficiales de máster."
      },
      {
        "id": "q-es-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Elija la conjunción concesiva formal adecuada: '______ los resultados son preliminares, confirman la hipótesis planteada.'",
        "audioVoiceLang": "es-ES",
        "options": [
          "Porque — Karena (konjungsi kausal)",
          "Por consiguiente — Oleh karena itu (konjungsi konsekutif)",
          "Para que — Agar / supaya (konjungsi final)",
          "Aunque — Meskipun / walaupun (konjungsi konsesif)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "La conjunción 'Aunque' introduce una cláusula concesiva formal adecuada al registro académico."
      },
      {
        "id": "q-es-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Cómo se denomina el documento oficial que certifica todas las asignaturas cursadas y las notas obtenidas?",
        "audioVoiceLang": "es-ES",
        "options": [
          "El certificado académico oficial (o expediente académico) — Transkrip akademik resmi yang memuat seluruh mata kuliah dan nilai",
          "El carné de biblioteca — Kartu anggota perpustakaan",
          "El recibo de alquiler — Kuitansi pembayaran sewa kamar",
          "La tarjeta sanitaria — Kartu jaminan kesehatan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El certificado académico oficial acredita el historial de calificaciones y créditos superados."
      },
      {
        "id": "q-es-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Cuál es la escala de calificaciones habitual en las universidades españolas?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Escala de letras de la A a la F — Skala huruf A sampai F",
          "Escala numérica de 0 a 10 (con 5,0 como nota mínima de aprobado) — Skala angka 0 sampai 10 (dengan 5,0 sebagai batas minimal kelulusan)",
          "Escala de 0 a 100 — Skala 0 sampai 100",
          "Escala de 1 a 5 — Skala 1 sampai 5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "El sistema de calificación universitario español va del 0 al 10 (5,0 es aprobado; 9,0-10 es sobresaliente)."
      },
      {
        "id": "q-es-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué significa obtener una 'Matrícula de Honor' en una asignatura universitaria?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Una sanción por impago — Sanksi denda akibat keterlambatan pembayaran",
          "Tener que repetir la materia — Kewajiban mengulang mata kuliah yang gagal",
          "La máxima distinción académica por rendimiento sobresaliente, que exime del pago de tasas en una asignatura del curso siguiente — Predikat kehormatan akademik tertinggi (nilai >= 9,0) yang membebaskan biaya SKS satu mata kuliah di tahun berikutnya",
          "Una multa económica — Denda administratif keuangan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "La Matrícula de Honor reconoce la excelencia (máximo una por cada 20 alumnos) y bonifica la matrícula futura."
      },
      {
        "id": "q-es-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué función cumple la plataforma 'UNEDasiss' para estudiantes internacionales?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Vende billetes de tren — Menjual tiket kereta api",
          "Organiza viajes turísticos — Menyelenggarakan perjalanan wisata",
          "Alquila pisos de estudiantes — Menyewakan apartemen mahasiswa",
          "Gestiona la acreditación de expedientes de bachillerato y pruebas de competencias específicas para el acceso a la universidad española — Mengelola penyetaraan ijazah sekolah menengah asing dan ujian kompetensi khusus (PCE) untuk masuk universitas Spanyol"
        ],
        "correctAnswerIndex": 3,
        "explanation": "UNEDasiss es el servicio de la UNED que gestiona el acceso de estudiantes internacionales a las universidades de España."
      },
      {
        "id": "q-es-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué es la 'tarjeta TIE' para un estudiante extranjero no comunitario en España?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Tarjeta de Identidad de Extranjero que acredita la autorización de estancia legal por estudios — Kartu Identitas Warga Asing resmi yang membuktikan izin tinggal sah untuk masa studi lebih dari 6 bulan",
          "Tarjeta de transporte de metro — Kartu langganan kereta bawah tanah",
          "Tarjeta de descuento de supermercado — Kartu diskon belanja supermarket",
          "Tarjeta de socio de club — Kartu anggota klub olahraga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La TIE acredita el permiso legal de estancia por estudios en territorio español."
      },
      {
        "id": "q-es-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué diferencia hay entre una 'clase magistral' y un 'seminario práctico'?",
        "audioVoiceLang": "es-ES",
        "options": [
          "La clase magistral es por la noche — Clase magistral diadakan malam hari",
          "La clase magistral expone la teoría en aula magna; el seminario debate textos y aplica casos en grupos reducidos — Clase magistral memaparkan teori di ruang kuliah besar; seminario mendiskusikan teks dan studi kasus dalam kelompok kecil",
          "El seminario es solo deporte — Seminario hanya berisi kegiatan olahraga",
          "No existe diferencia alguna — Tidak ada perbedaan sama sekali"
        ],
        "correctAnswerIndex": 1,
        "explanation": "La clase magistral fundamenta el marco conceptual y el seminario profundiza mediante el análisis interactivo."
      },
      {
        "id": "q-es-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué cobertura ofrece habitualmente una beca de posgrado de la Fundación Carolina?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Solo una camiseta del programa — Hanya kaos suvenir program",
          "Un descuento en librerías — Potongan harga di toko buku",
          "Matrícula académica, billete de avión, seguro médico y dotación mensual de manutención — Biaya kuliah penuh, tiket pesawat PP, asuransi kesehatan, dan tunjangan hidup bulanan",
          "Un préstamo bancario con intereses — Pinjaman bank berbunga"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Las prestigiosas becas de la Fundación Carolina financian íntegramente los estudios de posgrado en España."
      },
      {
        "id": "q-es-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué se entiende por un 'crédito ECTS' en el Espacio Europeo de Educación Superior?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Un euro de descuento — Potongan harga satu euro",
          "Un punto de gimnasio — Satu poin pusat kebugaran",
          "Una hora de examen — Satu jam durasi ujian",
          "Una unidad de medida que representa entre 25 y 30 horas de trabajo total del estudiante (clases y estudio autónomo) — Satuan beban belajar Eropa yang setara dengan 25–30 jam kerja mahasiswa (gabungan tatap muka dan belajar mandiri)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "El crédito ECTS cuantifica el esfuerzo formativo integral del estudiante en el marco europeo."
      }
    ]
  },
  "es-2": {
    "id": "test-es-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Spanyol.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-es-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Es precisamente esta divergencia interpretativa lo que confiere originalidad a nuestra propuesta.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Justru perbedaan penafsiran inilah yang memberikan nilai keaslian pada usulan penelitian kita.",
        "keywords": [
          "justru",
          "perbedaan",
          "penafsiran",
          "inilah"
        ],
        "explanation": "Kalimat akademik pola Inversión Sintáctica y Énfasis en el Discurso Académico: 'Es precisamente esta divergencia interpretativa lo que confiere originalidad a nuestra propuesta.' diterjemahkan secara akurat menjadi 'Justru perbedaan penafsiran inilah yang memberikan nilai keaslian pada usulan penelitian kita.'."
      },
      {
        "id": "q-es-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Si bien es cierto que el modelo presenta limitaciones, no es menos cierto que su valor predictivo es elevado.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Sekalipun memang benar bahwa model ini memiliki keterbatasan, tak kalah benarnya pula bahwa nilai prediktifnya sangat tinggi.",
        "keywords": [
          "sekalipun",
          "memang",
          "benar",
          "bahwa"
        ],
        "explanation": "Kalimat akademik pola Marcadores del Discurso para la Matización y Refutación: 'Si bien es cierto que el modelo presenta limitaciones, no es menos cierto que su valor predictivo es elevado.' diterjemahkan secara akurat menjadi 'Sekalipun memang benar bahwa model ini memiliki keterbatasan, tak kalah benarnya pula bahwa nilai prediktifnya sangat tinggi.'."
      },
      {
        "id": "q-es-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Quien infringiere los estatutos académicos será sancionado conforme a la reglamentación disciplinaria.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Barang siapa melanggar statuta akademik akan dikenai sanksi sesuai dengan peraturan disiplin yang berlaku.",
        "keywords": [
          "barang",
          "siapa",
          "melanggar",
          "statuta"
        ],
        "explanation": "Kalimat akademik pola Uso Retórico y Estilístico del Futuro de Subjuntivo en Textos Legales: 'Quien infringiere los estatutos académicos será sancionado conforme a la reglamentación disciplinaria.' diterjemahkan secara akurat menjadi 'Barang siapa melanggar statuta akademik akan dikenai sanksi sesuai dengan peraturan disiplin yang berlaku.'."
      },
      {
        "id": "q-es-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "La exhaustiva elucidación de los factores condicionantes permitió reconfigurar el modelo teórico.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Penjelasan menyeluruh terhadap faktor-faktor penentu tersebut memungkinkan penataan ulang model teoretis.",
        "keywords": [
          "penjelasan",
          "menyeluruh",
          "terhadap",
          "faktor"
        ],
        "explanation": "Kalimat akademik pola La Sustantivación Compleja y Estilo Nominal Científico: 'La exhaustiva elucidación de los factores condicionantes permitió reconfigurar el modelo teórico.' diterjemahkan secara akurat menjadi 'Penjelasan menyeluruh terhadap faktor-faktor penentu tersebut memungkinkan penataan ulang model teoretis.'."
      },
      {
        "id": "q-es-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "El estado de la cuestión revela una fractura epistemológica entre estructuralistas y postestructuralistas.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Tinjauan pustaka terkini menyingkapkan keretakan epistemologis antara kubu strukturalis dan pascastrukturalis.",
        "keywords": [
          "tinjauan",
          "pustaka",
          "terkini",
          "menyingkapkan"
        ],
        "explanation": "Kalimat akademik pola Análisis Crítico y Síntesis de Fuentes Documentales Múltiples: 'El estado de la cuestión revela una fractura epistemológica entre estructuralistas y postestructuralistas.' diterjemahkan secara akurat menjadi 'Tinjauan pustaka terkini menyingkapkan keretakan epistemologis antara kubu strukturalis dan pascastrukturalis.'."
      },
      {
        "id": "q-es-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Las recientes excavaciones arqueológicas vienen a arrojar luz sobre un período escasamente documentado.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Penggalian-penggalian arkeologis terkini memberikan titik terang atas suatu periode sejarah yang minim dokumentasi.",
        "keywords": [
          "penggalian",
          "arkeologis",
          "terkini",
          "memberikan"
        ],
        "explanation": "Kalimat akademik pola Metáforas Conceptuales y Colocaciones Léxicas de Alto Nivel: 'Las recientes excavaciones arqueológicas vienen a arrojar luz sobre un período escasamente documentado.' diterjemahkan secara akurat menjadi 'Penggalian-penggalian arkeologis terkini memberikan titik terang atas suatu periode sejarah yang minim dokumentasi.'."
      },
      {
        "id": "q-es-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "La sección de resultados expone de manera pormenorizada las correlaciones estadísticas identificadas.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Bagian hasil penelitian memaparkan secara terperinci korelasi-korelasi statistik yang berhasil diidentifikasi.",
        "keywords": [
          "bagian",
          "hasil",
          "penelitian",
          "memaparkan"
        ],
        "explanation": "Kalimat akademik pola Redacción de Artículos de Investigación y Ensayos Académicos: 'La sección de resultados expone de manera pormenorizada las correlaciones estadísticas identificadas.' diterjemahkan secara akurat menjadi 'Bagian hasil penelitian memaparkan secara terperinci korelasi-korelasi statistik yang berhasil diidentifikasi.'."
      },
      {
        "id": "q-es-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Se hace constar que el postulante ha cumplido a cabalidad con todos los requisitos conducentes al grado.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Dengan ini diterangkan bahwa pemohon telah memenuhi secara menyeluruh seluruh persyaratan untuk meraih gelar akademik tersebut.",
        "keywords": [
          "diterangkan",
          "bahwa",
          "pemohon",
          "memenuhi"
        ],
        "explanation": "Kalimat akademik pola Discurso Jurídico, Administrativo y Económico Hispanoamericano: 'Se hace constar que el postulante ha cumplido a cabalidad con todos los requisitos conducentes al grado.' diterjemahkan secara akurat menjadi 'Dengan ini diterangkan bahwa pemohon telah memenuhi secara menyeluruh seluruh persyaratan untuk meraih gelar akademik tersebut.'."
      },
      {
        "id": "q-es-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "La tesis doctoral articula un diálogo fructífero entre la sociología del conocimiento y la crítica textual.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Disertasi doktoral ini merajut dialog ilmiah yang produktif antara sosiologi pengetahuan dan kritik teks.",
        "keywords": [
          "disertasi",
          "doktoral",
          "merajut",
          "dialog"
        ],
        "explanation": "Kalimat akademik pola Elaboración de la Tesis de Maestría y Proyecto de Grado: 'La tesis doctoral articula un diálogo fructífero entre la sociología del conocimiento y la crítica textual.' diterjemahkan secara akurat menjadi 'Disertasi doktoral ini merajut dialog ilmiah yang produktif antara sosiologi pengetahuan dan kritik teks.'."
      },
      {
        "id": "q-es-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Señor presidente, señoras y señores vocales del tribunal: agradezco sinceramente la lectura atenta de mi tesis.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Bapak Ketua Sidang, Ibu dan Bapak anggota majelis penguji yang terhormat: saya mengucapkan terima kasih yang tulus atas pembacaan saksama terhadap disertasi saya.",
        "keywords": [
          "bapak",
          "ketua",
          "sidang",
          "anggota"
        ],
        "explanation": "Kalimat akademik pola Defensa Oral de la Disertación Doctoral ante el Tribunal: 'Señor presidente, señoras y señores vocales del tribunal: agradezco sinceramente la lectura atenta de mi tesis.' diterjemahkan secara akurat menjadi 'Bapak Ketua Sidang, Ibu dan Bapak anggota majelis penguji yang terhormat: saya mengucapkan terima kasih yang tulus atas pembacaan saksama terhadap disertasi saya.'."
      }
    ]
  },
  "es-3": {
    "id": "test-es-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis Kalimat Spanyol (5 Soal Sambung Kata)",
    "description": "Uji ketelitian menyusun tata urutan klausa regulasi kampus, registrasi mata kuliah, dan korespondensi resmi di Spanyol.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-es-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan tutorial: 'Saya ingin memohon sesi tutorial dengan dosen penanggung jawab untuk meninjau tesis saya'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "de mi trabajo de investigación",
          "para revisar el avance",
          "una tutoría con el profesor",
          "Deseo solicitar"
        ],
        "correctOrder": [
          "Deseo solicitar",
          "una tutoría con el profesor",
          "para revisar el avance",
          "de mi trabajo de investigación"
        ],
        "explanation": "Orden formal español: Sujeto implícito/Verbo (Deseo solicitar) + Complemento directo (una tutoría con el profesor) + Oración final (para revisar el avance de mi trabajo de investigación).",
        "targetSentence": "Deseo solicitar una tutoría con el profesor para revisar el avance de mi trabajo de investigación"
      },
      {
        "id": "q-es-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat penyelesaian SKS: 'Para mahasiswa wajib menyelesaikan enam puluh kredit per tahun akademik'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "en cada curso académico",
          "superar sesenta créditos",
          "Los estudiantes deben"
        ],
        "correctOrder": [
          "Los estudiantes deben",
          "superar sesenta créditos",
          "en cada curso académico"
        ],
        "explanation": "Orden sintáctico: Sujeto modal (Los estudiantes deben) + Verbo de superación (superar sesenta créditos) + Marco temporal (en cada curso académico).",
        "targetSentence": "Los estudiantes deben superar sesenta créditos en cada curso académico"
      },
      {
        "id": "q-es-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat metodologi: 'Penelitian ilmiah menuntut ketelitian analitis dan landasan metodologis yang kokoh'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "y una sólida metodología",
          "La investigación científica",
          "exige un riguroso análisis"
        ],
        "correctOrder": [
          "La investigación científica",
          "exige un riguroso análisis",
          "y una sólida metodología"
        ],
        "explanation": "Estructura SVO académica: Sujeto (La investigación científica) + Verbo transitivo (exige) + Objetos directos coordinados (un riguroso análisis y una sólida metodología).",
        "targetSentence": "La investigación científica exige un riguroso análisis y una sólida metodología"
      },
      {
        "id": "q-es-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan kampus menawarkan akses ke pangkalan data jurnal terindeks internasional'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "de revistas científicas indexadas",
          "ofrece acceso a bases de datos",
          "La biblioteca universitaria"
        ],
        "correctOrder": [
          "La biblioteca universitaria",
          "ofrece acceso a bases de datos",
          "de revistas científicas indexadas"
        ],
        "explanation": "Orden regular: Sujeto (La biblioteca universitaria) + Verbo transitivo (ofrece) + Objeto directo y complementos del nombre (acceso a bases de datos de revistas científicas indexadas).",
        "targetSentence": "La biblioteca universitaria ofrece acceso a bases de datos de revistas científicas indexadas"
      },
      {
        "id": "q-es-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Pendaftaran beasiswa pascasarjana akan ditutup secara resmi pada akhir bulan depan'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "a finales del próximo mes",
          "La convocatoria oficial de becas",
          "se cerrará formalmente"
        ],
        "correctOrder": [
          "La convocatoria oficial de becas",
          "se cerrará formalmente",
          "a finales del próximo mes"
        ],
        "explanation": "Estructura pasiva refleja: Sujeto paciente (La convocatoria oficial de becas) + Verbo pronominal pasivo (se cerrará formalmente) + Complemento temporal (a finales del próximo mes).",
        "targetSentence": "La convocatoria oficial de becas se cerrará formalmente a finales del próximo mes"
      }
    ]
  },
  "es-4": {
    "id": "test-es-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Spanyol (10 Soal Artikan)",
    "description": "Uji penguasaan glosarium akademik, peristilahan seminar ilmiah, dan sistem administrasi kampus di Spanyol.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-es-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Director de tesis doctoral (tutor del TFM)':",
        "targetSentence": "Director de tesis doctoral",
        "audioVoiceLang": "es-ES",
        "options": [
          "Silabus Kontrak Pembelajaran Mata Kuliah Resmi",
          "Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian",
          "Dosen Pembimbing Disertasi Doktor / Tesis Magister",
          "Rencana Kurikulum Program Studi Perguruan Tinggi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Director de tesis doctoral (tutor del TFM)' adalah padanan untuk 'Dosen Pembimbing Disertasi Doktor / Tesis Magister' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Convocatoria oficial de exámenes (ordinaria / extraordinaria)':",
        "targetSentence": "Convocatoria oficial de exámenes",
        "audioVoiceLang": "es-ES",
        "options": [
          "Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap",
          "Magang Kerja Kurikuler Wajib di Instansi / Perusahaan",
          "Biaya Pendaftaran dan Administrasi Perkuliahan Resmi",
          "Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Convocatoria oficial de exámenes (ordinaria / extraordinaria)' adalah padanan untuk 'Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Guía docente de la asignatura':",
        "targetSentence": "Guía docente de la asignatura",
        "audioVoiceLang": "es-ES",
        "options": [
          "Silabus Kontrak Pembelajaran Mata Kuliah Resmi",
          "Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian",
          "Predikat Nilai Sangat Memuaskan (A / Sobresaliente)",
          "Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Guía docente de la asignatura' adalah padanan untuk 'Silabus Kontrak Pembelajaran Mata Kuliah Resmi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Colegio Mayor / Residencia universitaria':",
        "targetSentence": "Colegio Mayor / Residencia universitaria",
        "audioVoiceLang": "es-ES",
        "options": [
          "Magang Kerja Kurikuler Wajib di Instansi / Perusahaan",
          "Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap",
          "Rencana Kurikulum Program Studi Perguruan Tinggi",
          "Dosen Pembimbing Disertasi Doktor / Tesis Magister"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Colegio Mayor / Residencia universitaria' adalah padanan untuk 'Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Homologación de título extranjero':",
        "targetSentence": "Homologación de título extranjero",
        "audioVoiceLang": "es-ES",
        "options": [
          "Predikat Nilai Sangat Memuaskan (A / Sobresaliente)",
          "Biaya Pendaftaran dan Administrasi Perkuliahan Resmi",
          "Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian",
          "Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Homologación de título extranjero' adalah padanan untuk 'Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Prácticas curriculares externas':",
        "targetSentence": "Prácticas curriculares externas",
        "audioVoiceLang": "es-ES",
        "options": [
          "Rencana Kurikulum Program Studi Perguruan Tinggi",
          "Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil",
          "Silabus Kontrak Pembelajaran Mata Kuliah Resmi",
          "Magang Kerja Kurikuler Wajib di Instansi / Perusahaan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Prácticas curriculares externas' adalah padanan untuk 'Magang Kerja Kurikuler Wajib di Instansi / Perusahaan' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Sobresaliente (calificación de 9,0 a 10,0)':",
        "targetSentence": "Sobresaliente",
        "audioVoiceLang": "es-ES",
        "options": [
          "Predikat Nilai Sangat Memuaskan (A / Sobresaliente)",
          "Biaya Pendaftaran dan Administrasi Perkuliahan Resmi",
          "Dosen Pembimbing Disertasi Doktor / Tesis Magister",
          "Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Sobresaliente (calificación de 9,0 a 10,0)' adalah padanan untuk 'Predikat Nilai Sangat Memuaskan (A / Sobresaliente)' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Plan de estudios de la titulación':",
        "targetSentence": "Plan de estudios de la titulación",
        "audioVoiceLang": "es-ES",
        "options": [
          "Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil",
          "Rencana Kurikulum Program Studi Perguruan Tinggi",
          "Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)",
          "Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Plan de estudios de la titulación' adalah padanan untuk 'Rencana Kurikulum Program Studi Perguruan Tinggi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Tasas de matrícula universitaria':",
        "targetSentence": "Tasas de matrícula universitaria",
        "audioVoiceLang": "es-ES",
        "options": [
          "Dosen Pembimbing Disertasi Doktor / Tesis Magister",
          "Silabus Kontrak Pembelajaran Mata Kuliah Resmi",
          "Biaya Pendaftaran dan Administrasi Perkuliahan Resmi",
          "Magang Kerja Kurikuler Wajib di Instansi / Perusahaan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Tasas de matrícula universitaria' adalah padanan untuk 'Biaya Pendaftaran dan Administrasi Perkuliahan Resmi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Certificado de empadronamiento':",
        "targetSentence": "Certificado de empadronamiento",
        "audioVoiceLang": "es-ES",
        "options": [
          "Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)",
          "Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap",
          "Predikat Nilai Sangat Memuaskan (A / Sobresaliente)",
          "Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Certificado de empadronamiento' adalah padanan untuk 'Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil' di perguruan tinggi Spanyol."
      }
    ]
  },
  "es-5": {
    "id": "test-es-5",
    "title": "Bagian 5: Wacana Silabus & Analisis Kasus Kampus Spanyol (15 Soal Analisis Bebas)",
    "description": "Uji kesiapan komprehensif menghadapi perkuliahan nyata, etika laboratorium, dan dinamika mahasiswa internasional di Spanyol.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-es-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batasan jam kerja per minggu yang diizinkan untuk mahasiswa internasional di Spanyol setelah reformasi UU Imigrasi terbaru?",
        "options": [
          "Hingga 30 jam per minggu (selama tidak mengganggu jam perkuliahan reguler)",
          "Maksimal 5 jam per minggu saja",
          "Dilarang bekerja sama sekali",
          "Bebas bekerja tanpa visa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tras la reforma del Reglamento de Extranjería, los estudiantes extranjeros pueden trabajar hasta 30 horas semanales."
      },
      {
        "id": "q-es-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Padrón municipal' (Certificado de Empadronamiento) di Spanyol?",
        "options": [
          "Karcis kereta api",
          "Pendaftaran alamat tempat tinggal resmi di kantor balai kota (Ayuntamiento) setempat",
          "Paspor baru",
          "Kartu perpustakaan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "El empadronamiento es el registro administrativo donde consta el domicilio habitual en el municipio."
      },
      {
        "id": "q-es-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa lama durasi masa studi jenjang sarjana (Grado) di universitas-universitas Spanyol pada umumnya?",
        "options": [
          "Hanya 1 tahun",
          "7 tahun",
          "Umumnya 4 tahun (240 créditos ECTS)",
          "2 tahun"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Los estudios de Grado en España tienen con carácter general una duración de 4 años (240 ECTS)."
      },
      {
        "id": "q-es-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa nama sertifikat tes kemahiran bahasa Spanyol resmi dari Instituto Cervantes yang berlaku seumur hidup?",
        "options": [
          "TOEFL",
          "IELTS",
          "DELF",
          "DELE (Diplomas de Español como Lengua Extranjera)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Los diplomas DELE expedidos por el Instituto Cervantes en nombre del Ministerio tienen validez indefinida."
      },
      {
        "id": "q-es-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa alternatif tes digital yang hasilnya berlaku 5 tahun dan diselenggarakan secara adaptif online?",
        "options": [
          "SIELE (Servicio Internacional de Evaluación de la Lengua Española)",
          "HSK",
          "TORFL",
          "JLPT"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El SIELE certifica el grado de competencia en español mediante pruebas digitales ágiles."
      },
      {
        "id": "q-es-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kapan periode semester pertama (primer cuatrimestre) biasanya dimulai di Spanyol?",
        "options": [
          "Bulan Januari",
          "Bulan September atau awal Oktober",
          "Bulan Juli",
          "Bulan Mei"
        ],
        "correctAnswerIndex": 1,
        "explanation": "El curso universitario español arranca habitualmente a mediados de septiembre o principios de octubre."
      },
      {
        "id": "q-es-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Convocatoria Extraordinaria' di universitas Spanyol?",
        "options": [
          "Pesta penyambutan liburan",
          "Ujian khusus atlet",
          "Periode ujian perbaikan / remedial (biasanya pada bulan Juni/Juli) bagi siswa yang tidak lulus di ujian reguler",
          "Ujian pemilihan presiden kampus"
        ],
        "correctAnswerIndex": 2,
        "explanation": "La convocatoria extraordinaria ofrece una segunda oportunidad para superar las asignaturas suspensas."
      },
      {
        "id": "q-es-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'Tribunal evaluador' dalam sidang akhir TFG/TFM?",
        "options": [
          "Petugas kepolisian kampus",
          "Kelompok penonton umum",
          "Tim penyedia konsumsi",
          "Dewan penguji akademis yang mendengarkan, menilai, dan memberikan pertanyaan atas presentasi naskah penelitian"
        ],
        "correctAnswerIndex": 3,
        "explanation": "El tribunal evaluador juzga la calidad científica y la exposición oral del trabajo."
      },
      {
        "id": "q-es-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah gelar 'Máster Oficial' berbeda dengan 'Título Propio' di Spanyol?",
        "options": [
          "Ya, Máster Oficial diakui oleh Kementerian dan seluruh kawasan Bologna (EEES) serta memberi akses ke jenjang S3 (Doctorado)",
          "Tidak ada bedanya sama sekali",
          "Título Propio adalah gelar palsu",
          "Máster Oficial hanya untuk warga lokal"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Los másteres oficiales están verificados por la ANECA y dan acceso a programas de doctorado."
      },
      {
        "id": "q-es-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Colegio Mayor' di lingkungan kampus Spanyol?",
        "options": [
          "Sekolah menengah atas",
          "Asrama universitas bernilai historis yang tidak hanya menyediakan kamar dan makan, tetapi juga menyelenggarakan kegiatan akademik dan budaya",
          "Gedung rektorat",
          "Pusat perbelanjaan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Un Colegio Mayor es un centro residencial universitario que fomenta la formación cultural y científica."
      },
      {
        "id": "q-es-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa memperoleh nilai 'Suspenso' dalam transkrip nilainya, apa artinya?",
        "options": [
          "Lulus sempurna",
          "Mendapat beasiswa",
          "Nilai di bawah 5,0 (Tidak Lulus / Gagal)",
          "Mendapat hadiah uang"
        ],
        "correctAnswerIndex": 2,
        "explanation": "La calificación de 'Suspenso' (0 a 4,9) indica que no se han superado los objetivos del curso."
      },
      {
        "id": "q-es-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti istilah 'Tutoría' dalam kalender akademik perkuliahan Spanyol?",
        "options": [
          "Jam istirahat makan siang",
          "Jadwal pertandingan sepak bola",
          "Ujian tengah semester",
          "Jam konsultasi bimbingan akademik tatap muka antara dosen dan mahasiswa"
        ],
        "correctAnswerIndex": 3,
        "explanation": "La tutoría es el espacio de atención individualizada o grupal para resolver dudas académicas."
      },
      {
        "id": "q-es-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi sistem 'Campus Virtual' di universitas-universitas Spanyol?",
        "options": [
          "Portal daring untuk materi perkuliahan, pengumpulan tugas, forum diskusi, dan pengumuman dosen",
          "Toko pakaian online",
          "Pemesanan tiket pesawat",
          "Permainan video"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El Campus Virtual centraliza la interacción formativa y docente en línea de cada universidad."
      },
      {
        "id": "q-es-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kepanjangan dari 'ANECA' di Spanyol?",
        "options": [
          "Asociación Nacional de Estudiantes de Cataluña — Asosiasi Mahasiswa Nasional Catalonia",
          "Agencia Nacional de Evaluación de la Calidad y Acreditación — Badan Nasional Evaluasi Mutu dan Akreditasi Pendidikan Tinggi Spanyol",
          "Academia Nacional de Educación Continua — Akademi Nasional Pendidikan Berkelanjutan",
          "Administración Nacional de Empleo — Administrasi Ketenagakerjaan Nasional"
        ],
        "correctAnswerIndex": 1,
        "explanation": "La ANECA evalúa y acredita la calidad de títulos y profesorado en el sistema universitario español."
      },
      {
        "id": "q-es-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam penulisan ilmiah bahasa Spanyol, bagian 'Agradecimientos' berisi apa?",
        "options": [
          "Daftar rumus matematika",
          "Daftar harga buku",
          "Ungkapan terima kasih dan apresiasi kepada pembimbing, institusi penyandang dana, dan keluarga",
          "Kritik terhadap dosen"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Los agradecimientos reconocen formalmente el apoyo recibido durante la realización de la tesis."
      }
    ]
  },
  "es-full": {
    "id": "test-es-full",
    "title": "Simulasi Ujian Masuk Lengkap Kuliah Spanyol (50 Soal Standar Ujian)",
    "description": "Simulasi ujian komprehensif berstandar masuk universitas terkemuka di Spanyol (90 Menit). Mencakup seluruh 5 aspek kesiapan akademik dan bahasa.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-es-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué significa la sigla 'TFM' en el sistema universitario español de posgrado?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Título de Formación Militar — Gelar Pelatihan Militer",
          "Tarifa de Ferrocarril Madrid — Tarif Kereta Api Madrid",
          "Trabajo de Fin de Máster (tesis de investigación de maestría) — Karya Tugas Akhir Magister (tesis penelitian kelulusan S2)",
          "Tarjeta Financiera Mensual — Kartu Keuangan Bulanan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "El TFM es el proyecto o memoria científica que culmina los estudios oficiales de máster."
      },
      {
        "id": "q-es-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Elija la conjunción concesiva formal adecuada: '______ los resultados son preliminares, confirman la hipótesis planteada.'",
        "audioVoiceLang": "es-ES",
        "options": [
          "Porque — Karena (konjungsi kausal)",
          "Por consiguiente — Oleh karena itu (konjungsi konsekutif)",
          "Para que — Agar / supaya (konjungsi final)",
          "Aunque — Meskipun / walaupun (konjungsi konsesif)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "La conjunción 'Aunque' introduce una cláusula concesiva formal adecuada al registro académico."
      },
      {
        "id": "q-es-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Cómo se denomina el documento oficial que certifica todas las asignaturas cursadas y las notas obtenidas?",
        "audioVoiceLang": "es-ES",
        "options": [
          "El certificado académico oficial (o expediente académico) — Transkrip akademik resmi yang memuat seluruh mata kuliah dan nilai",
          "El carné de biblioteca — Kartu anggota perpustakaan",
          "El recibo de alquiler — Kuitansi pembayaran sewa kamar",
          "La tarjeta sanitaria — Kartu jaminan kesehatan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El certificado académico oficial acredita el historial de calificaciones y créditos superados."
      },
      {
        "id": "q-es-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Cuál es la escala de calificaciones habitual en las universidades españolas?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Escala de letras de la A a la F — Skala huruf A sampai F",
          "Escala numérica de 0 a 10 (con 5,0 como nota mínima de aprobado) — Skala angka 0 sampai 10 (dengan 5,0 sebagai batas minimal kelulusan)",
          "Escala de 0 a 100 — Skala 0 sampai 100",
          "Escala de 1 a 5 — Skala 1 sampai 5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "El sistema de calificación universitario español va del 0 al 10 (5,0 es aprobado; 9,0-10 es sobresaliente)."
      },
      {
        "id": "q-es-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué significa obtener una 'Matrícula de Honor' en una asignatura universitaria?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Una sanción por impago — Sanksi denda akibat keterlambatan pembayaran",
          "Tener que repetir la materia — Kewajiban mengulang mata kuliah yang gagal",
          "La máxima distinción académica por rendimiento sobresaliente, que exime del pago de tasas en una asignatura del curso siguiente — Predikat kehormatan akademik tertinggi (nilai >= 9,0) yang membebaskan biaya SKS satu mata kuliah di tahun berikutnya",
          "Una multa económica — Denda administratif keuangan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "La Matrícula de Honor reconoce la excelencia (máximo una por cada 20 alumnos) y bonifica la matrícula futura."
      },
      {
        "id": "q-es-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué función cumple la plataforma 'UNEDasiss' para estudiantes internacionales?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Vende billetes de tren — Menjual tiket kereta api",
          "Organiza viajes turísticos — Menyelenggarakan perjalanan wisata",
          "Alquila pisos de estudiantes — Menyewakan apartemen mahasiswa",
          "Gestiona la acreditación de expedientes de bachillerato y pruebas de competencias específicas para el acceso a la universidad española — Mengelola penyetaraan ijazah sekolah menengah asing dan ujian kompetensi khusus (PCE) untuk masuk universitas Spanyol"
        ],
        "correctAnswerIndex": 3,
        "explanation": "UNEDasiss es el servicio de la UNED que gestiona el acceso de estudiantes internacionales a las universidades de España."
      },
      {
        "id": "q-es-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué es la 'tarjeta TIE' para un estudiante extranjero no comunitario en España?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Tarjeta de Identidad de Extranjero que acredita la autorización de estancia legal por estudios — Kartu Identitas Warga Asing resmi yang membuktikan izin tinggal sah untuk masa studi lebih dari 6 bulan",
          "Tarjeta de transporte de metro — Kartu langganan kereta bawah tanah",
          "Tarjeta de descuento de supermercado — Kartu diskon belanja supermarket",
          "Tarjeta de socio de club — Kartu anggota klub olahraga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La TIE acredita el permiso legal de estancia por estudios en territorio español."
      },
      {
        "id": "q-es-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué diferencia hay entre una 'clase magistral' y un 'seminario práctico'?",
        "audioVoiceLang": "es-ES",
        "options": [
          "La clase magistral es por la noche — Clase magistral diadakan malam hari",
          "La clase magistral expone la teoría en aula magna; el seminario debate textos y aplica casos en grupos reducidos — Clase magistral memaparkan teori di ruang kuliah besar; seminario mendiskusikan teks dan studi kasus dalam kelompok kecil",
          "El seminario es solo deporte — Seminario hanya berisi kegiatan olahraga",
          "No existe diferencia alguna — Tidak ada perbedaan sama sekali"
        ],
        "correctAnswerIndex": 1,
        "explanation": "La clase magistral fundamenta el marco conceptual y el seminario profundiza mediante el análisis interactivo."
      },
      {
        "id": "q-es-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué cobertura ofrece habitualmente una beca de posgrado de la Fundación Carolina?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Solo una camiseta del programa — Hanya kaos suvenir program",
          "Un descuento en librerías — Potongan harga di toko buku",
          "Matrícula académica, billete de avión, seguro médico y dotación mensual de manutención — Biaya kuliah penuh, tiket pesawat PP, asuransi kesehatan, dan tunjangan hidup bulanan",
          "Un préstamo bancario con intereses — Pinjaman bank berbunga"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Las prestigiosas becas de la Fundación Carolina financian íntegramente los estudios de posgrado en España."
      },
      {
        "id": "q-es-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué se entiende por un 'crédito ECTS' en el Espacio Europeo de Educación Superior?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Un euro de descuento — Potongan harga satu euro",
          "Un punto de gimnasio — Satu poin pusat kebugaran",
          "Una hora de examen — Satu jam durasi ujian",
          "Una unidad de medida que representa entre 25 y 30 horas de trabajo total del estudiante (clases y estudio autónomo) — Satuan beban belajar Eropa yang setara dengan 25–30 jam kerja mahasiswa (gabungan tatap muka dan belajar mandiri)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "El crédito ECTS cuantifica el esfuerzo formativo integral del estudiante en el marco europeo."
      },
      {
        "id": "q-es-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Es precisamente esta divergencia interpretativa lo que confiere originalidad a nuestra propuesta.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Justru perbedaan penafsiran inilah yang memberikan nilai keaslian pada usulan penelitian kita.",
        "keywords": [
          "justru",
          "perbedaan",
          "penafsiran",
          "inilah"
        ],
        "explanation": "Kalimat akademik pola Inversión Sintáctica y Énfasis en el Discurso Académico: 'Es precisamente esta divergencia interpretativa lo que confiere originalidad a nuestra propuesta.' diterjemahkan secara akurat menjadi 'Justru perbedaan penafsiran inilah yang memberikan nilai keaslian pada usulan penelitian kita.'."
      },
      {
        "id": "q-es-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Si bien es cierto que el modelo presenta limitaciones, no es menos cierto que su valor predictivo es elevado.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Sekalipun memang benar bahwa model ini memiliki keterbatasan, tak kalah benarnya pula bahwa nilai prediktifnya sangat tinggi.",
        "keywords": [
          "sekalipun",
          "memang",
          "benar",
          "bahwa"
        ],
        "explanation": "Kalimat akademik pola Marcadores del Discurso para la Matización y Refutación: 'Si bien es cierto que el modelo presenta limitaciones, no es menos cierto que su valor predictivo es elevado.' diterjemahkan secara akurat menjadi 'Sekalipun memang benar bahwa model ini memiliki keterbatasan, tak kalah benarnya pula bahwa nilai prediktifnya sangat tinggi.'."
      },
      {
        "id": "q-es-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Quien infringiere los estatutos académicos será sancionado conforme a la reglamentación disciplinaria.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Barang siapa melanggar statuta akademik akan dikenai sanksi sesuai dengan peraturan disiplin yang berlaku.",
        "keywords": [
          "barang",
          "siapa",
          "melanggar",
          "statuta"
        ],
        "explanation": "Kalimat akademik pola Uso Retórico y Estilístico del Futuro de Subjuntivo en Textos Legales: 'Quien infringiere los estatutos académicos será sancionado conforme a la reglamentación disciplinaria.' diterjemahkan secara akurat menjadi 'Barang siapa melanggar statuta akademik akan dikenai sanksi sesuai dengan peraturan disiplin yang berlaku.'."
      },
      {
        "id": "q-es-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "La exhaustiva elucidación de los factores condicionantes permitió reconfigurar el modelo teórico.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Penjelasan menyeluruh terhadap faktor-faktor penentu tersebut memungkinkan penataan ulang model teoretis.",
        "keywords": [
          "penjelasan",
          "menyeluruh",
          "terhadap",
          "faktor"
        ],
        "explanation": "Kalimat akademik pola La Sustantivación Compleja y Estilo Nominal Científico: 'La exhaustiva elucidación de los factores condicionantes permitió reconfigurar el modelo teórico.' diterjemahkan secara akurat menjadi 'Penjelasan menyeluruh terhadap faktor-faktor penentu tersebut memungkinkan penataan ulang model teoretis.'."
      },
      {
        "id": "q-es-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "El estado de la cuestión revela una fractura epistemológica entre estructuralistas y postestructuralistas.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Tinjauan pustaka terkini menyingkapkan keretakan epistemologis antara kubu strukturalis dan pascastrukturalis.",
        "keywords": [
          "tinjauan",
          "pustaka",
          "terkini",
          "menyingkapkan"
        ],
        "explanation": "Kalimat akademik pola Análisis Crítico y Síntesis de Fuentes Documentales Múltiples: 'El estado de la cuestión revela una fractura epistemológica entre estructuralistas y postestructuralistas.' diterjemahkan secara akurat menjadi 'Tinjauan pustaka terkini menyingkapkan keretakan epistemologis antara kubu strukturalis dan pascastrukturalis.'."
      },
      {
        "id": "q-es-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Las recientes excavaciones arqueológicas vienen a arrojar luz sobre un período escasamente documentado.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Penggalian-penggalian arkeologis terkini memberikan titik terang atas suatu periode sejarah yang minim dokumentasi.",
        "keywords": [
          "penggalian",
          "arkeologis",
          "terkini",
          "memberikan"
        ],
        "explanation": "Kalimat akademik pola Metáforas Conceptuales y Colocaciones Léxicas de Alto Nivel: 'Las recientes excavaciones arqueológicas vienen a arrojar luz sobre un período escasamente documentado.' diterjemahkan secara akurat menjadi 'Penggalian-penggalian arkeologis terkini memberikan titik terang atas suatu periode sejarah yang minim dokumentasi.'."
      },
      {
        "id": "q-es-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "La sección de resultados expone de manera pormenorizada las correlaciones estadísticas identificadas.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Bagian hasil penelitian memaparkan secara terperinci korelasi-korelasi statistik yang berhasil diidentifikasi.",
        "keywords": [
          "bagian",
          "hasil",
          "penelitian",
          "memaparkan"
        ],
        "explanation": "Kalimat akademik pola Redacción de Artículos de Investigación y Ensayos Académicos: 'La sección de resultados expone de manera pormenorizada las correlaciones estadísticas identificadas.' diterjemahkan secara akurat menjadi 'Bagian hasil penelitian memaparkan secara terperinci korelasi-korelasi statistik yang berhasil diidentifikasi.'."
      },
      {
        "id": "q-es-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Se hace constar que el postulante ha cumplido a cabalidad con todos los requisitos conducentes al grado.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Dengan ini diterangkan bahwa pemohon telah memenuhi secara menyeluruh seluruh persyaratan untuk meraih gelar akademik tersebut.",
        "keywords": [
          "diterangkan",
          "bahwa",
          "pemohon",
          "memenuhi"
        ],
        "explanation": "Kalimat akademik pola Discurso Jurídico, Administrativo y Económico Hispanoamericano: 'Se hace constar que el postulante ha cumplido a cabalidad con todos los requisitos conducentes al grado.' diterjemahkan secara akurat menjadi 'Dengan ini diterangkan bahwa pemohon telah memenuhi secara menyeluruh seluruh persyaratan untuk meraih gelar akademik tersebut.'."
      },
      {
        "id": "q-es-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "La tesis doctoral articula un diálogo fructífero entre la sociología del conocimiento y la crítica textual.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Disertasi doktoral ini merajut dialog ilmiah yang produktif antara sosiologi pengetahuan dan kritik teks.",
        "keywords": [
          "disertasi",
          "doktoral",
          "merajut",
          "dialog"
        ],
        "explanation": "Kalimat akademik pola Elaboración de la Tesis de Maestría y Proyecto de Grado: 'La tesis doctoral articula un diálogo fructífero entre la sociología del conocimiento y la crítica textual.' diterjemahkan secara akurat menjadi 'Disertasi doktoral ini merajut dialog ilmiah yang produktif antara sosiologi pengetahuan dan kritik teks.'."
      },
      {
        "id": "q-es-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Señor presidente, señoras y señores vocales del tribunal: agradezco sinceramente la lectura atenta de mi tesis.",
        "audioVoiceLang": "es-ES",
        "sampleAnswer": "Bapak Ketua Sidang, Ibu dan Bapak anggota majelis penguji yang terhormat: saya mengucapkan terima kasih yang tulus atas pembacaan saksama terhadap disertasi saya.",
        "keywords": [
          "bapak",
          "ketua",
          "sidang",
          "anggota"
        ],
        "explanation": "Kalimat akademik pola Defensa Oral de la Disertación Doctoral ante el Tribunal: 'Señor presidente, señoras y señores vocales del tribunal: agradezco sinceramente la lectura atenta de mi tesis.' diterjemahkan secara akurat menjadi 'Bapak Ketua Sidang, Ibu dan Bapak anggota majelis penguji yang terhormat: saya mengucapkan terima kasih yang tulus atas pembacaan saksama terhadap disertasi saya.'."
      },
      {
        "id": "q-es-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan tutorial: 'Saya ingin memohon sesi tutorial dengan dosen penanggung jawab untuk meninjau tesis saya'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "de mi trabajo de investigación",
          "para revisar el avance",
          "una tutoría con el profesor",
          "Deseo solicitar"
        ],
        "correctOrder": [
          "Deseo solicitar",
          "una tutoría con el profesor",
          "para revisar el avance",
          "de mi trabajo de investigación"
        ],
        "explanation": "Orden formal español: Sujeto implícito/Verbo (Deseo solicitar) + Complemento directo (una tutoría con el profesor) + Oración final (para revisar el avance de mi trabajo de investigación).",
        "targetSentence": "Deseo solicitar una tutoría con el profesor para revisar el avance de mi trabajo de investigación"
      },
      {
        "id": "q-es-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat penyelesaian SKS: 'Para mahasiswa wajib menyelesaikan enam puluh kredit per tahun akademik'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "en cada curso académico",
          "superar sesenta créditos",
          "Los estudiantes deben"
        ],
        "correctOrder": [
          "Los estudiantes deben",
          "superar sesenta créditos",
          "en cada curso académico"
        ],
        "explanation": "Orden sintáctico: Sujeto modal (Los estudiantes deben) + Verbo de superación (superar sesenta créditos) + Marco temporal (en cada curso académico).",
        "targetSentence": "Los estudiantes deben superar sesenta créditos en cada curso académico"
      },
      {
        "id": "q-es-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat metodologi: 'Penelitian ilmiah menuntut ketelitian analitis dan landasan metodologis yang kokoh'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "y una sólida metodología",
          "La investigación científica",
          "exige un riguroso análisis"
        ],
        "correctOrder": [
          "La investigación científica",
          "exige un riguroso análisis",
          "y una sólida metodología"
        ],
        "explanation": "Estructura SVO académica: Sujeto (La investigación científica) + Verbo transitivo (exige) + Objetos directos coordinados (un riguroso análisis y una sólida metodología).",
        "targetSentence": "La investigación científica exige un riguroso análisis y una sólida metodología"
      },
      {
        "id": "q-es-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan kampus menawarkan akses ke pangkalan data jurnal terindeks internasional'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "de revistas científicas indexadas",
          "ofrece acceso a bases de datos",
          "La biblioteca universitaria"
        ],
        "correctOrder": [
          "La biblioteca universitaria",
          "ofrece acceso a bases de datos",
          "de revistas científicas indexadas"
        ],
        "explanation": "Orden regular: Sujeto (La biblioteca universitaria) + Verbo transitivo (ofrece) + Objeto directo y complementos del nombre (acceso a bases de datos de revistas científicas indexadas).",
        "targetSentence": "La biblioteca universitaria ofrece acceso a bases de datos de revistas científicas indexadas"
      },
      {
        "id": "q-es-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Pendaftaran beasiswa pascasarjana akan ditutup secara resmi pada akhir bulan depan'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "a finales del próximo mes",
          "La convocatoria oficial de becas",
          "se cerrará formalmente"
        ],
        "correctOrder": [
          "La convocatoria oficial de becas",
          "se cerrará formalmente",
          "a finales del próximo mes"
        ],
        "explanation": "Estructura pasiva refleja: Sujeto paciente (La convocatoria oficial de becas) + Verbo pronominal pasivo (se cerrará formalmente) + Complemento temporal (a finales del próximo mes).",
        "targetSentence": "La convocatoria oficial de becas se cerrará formalmente a finales del próximo mes"
      },
      {
        "id": "q-es-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Director de tesis doctoral (tutor del TFM)':",
        "targetSentence": "Director de tesis doctoral",
        "audioVoiceLang": "es-ES",
        "options": [
          "Silabus Kontrak Pembelajaran Mata Kuliah Resmi",
          "Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian",
          "Dosen Pembimbing Disertasi Doktor / Tesis Magister",
          "Rencana Kurikulum Program Studi Perguruan Tinggi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Director de tesis doctoral (tutor del TFM)' adalah padanan untuk 'Dosen Pembimbing Disertasi Doktor / Tesis Magister' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Convocatoria oficial de exámenes (ordinaria / extraordinaria)':",
        "targetSentence": "Convocatoria oficial de exámenes",
        "audioVoiceLang": "es-ES",
        "options": [
          "Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap",
          "Magang Kerja Kurikuler Wajib di Instansi / Perusahaan",
          "Biaya Pendaftaran dan Administrasi Perkuliahan Resmi",
          "Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Convocatoria oficial de exámenes (ordinaria / extraordinaria)' adalah padanan untuk 'Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Guía docente de la asignatura':",
        "targetSentence": "Guía docente de la asignatura",
        "audioVoiceLang": "es-ES",
        "options": [
          "Silabus Kontrak Pembelajaran Mata Kuliah Resmi",
          "Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian",
          "Predikat Nilai Sangat Memuaskan (A / Sobresaliente)",
          "Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Guía docente de la asignatura' adalah padanan untuk 'Silabus Kontrak Pembelajaran Mata Kuliah Resmi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Colegio Mayor / Residencia universitaria':",
        "targetSentence": "Colegio Mayor / Residencia universitaria",
        "audioVoiceLang": "es-ES",
        "options": [
          "Magang Kerja Kurikuler Wajib di Instansi / Perusahaan",
          "Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap",
          "Rencana Kurikulum Program Studi Perguruan Tinggi",
          "Dosen Pembimbing Disertasi Doktor / Tesis Magister"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Colegio Mayor / Residencia universitaria' adalah padanan untuk 'Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Homologación de título extranjero':",
        "targetSentence": "Homologación de título extranjero",
        "audioVoiceLang": "es-ES",
        "options": [
          "Predikat Nilai Sangat Memuaskan (A / Sobresaliente)",
          "Biaya Pendaftaran dan Administrasi Perkuliahan Resmi",
          "Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian",
          "Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Homologación de título extranjero' adalah padanan untuk 'Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Prácticas curriculares externas':",
        "targetSentence": "Prácticas curriculares externas",
        "audioVoiceLang": "es-ES",
        "options": [
          "Rencana Kurikulum Program Studi Perguruan Tinggi",
          "Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil",
          "Silabus Kontrak Pembelajaran Mata Kuliah Resmi",
          "Magang Kerja Kurikuler Wajib di Instansi / Perusahaan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Prácticas curriculares externas' adalah padanan untuk 'Magang Kerja Kurikuler Wajib di Instansi / Perusahaan' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Sobresaliente (calificación de 9,0 a 10,0)':",
        "targetSentence": "Sobresaliente",
        "audioVoiceLang": "es-ES",
        "options": [
          "Predikat Nilai Sangat Memuaskan (A / Sobresaliente)",
          "Biaya Pendaftaran dan Administrasi Perkuliahan Resmi",
          "Dosen Pembimbing Disertasi Doktor / Tesis Magister",
          "Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Istilah 'Sobresaliente (calificación de 9,0 a 10,0)' adalah padanan untuk 'Predikat Nilai Sangat Memuaskan (A / Sobresaliente)' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Plan de estudios de la titulación':",
        "targetSentence": "Plan de estudios de la titulación",
        "audioVoiceLang": "es-ES",
        "options": [
          "Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil",
          "Rencana Kurikulum Program Studi Perguruan Tinggi",
          "Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)",
          "Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Istilah 'Plan de estudios de la titulación' adalah padanan untuk 'Rencana Kurikulum Program Studi Perguruan Tinggi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Tasas de matrícula universitaria':",
        "targetSentence": "Tasas de matrícula universitaria",
        "audioVoiceLang": "es-ES",
        "options": [
          "Dosen Pembimbing Disertasi Doktor / Tesis Magister",
          "Silabus Kontrak Pembelajaran Mata Kuliah Resmi",
          "Biaya Pendaftaran dan Administrasi Perkuliahan Resmi",
          "Magang Kerja Kurikuler Wajib di Instansi / Perusahaan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Istilah 'Tasas de matrícula universitaria' adalah padanan untuk 'Biaya Pendaftaran dan Administrasi Perkuliahan Resmi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilih arti bahasa Indonesia yang tepat untuk istilah akademik 'Certificado de empadronamiento':",
        "targetSentence": "Certificado de empadronamiento",
        "audioVoiceLang": "es-ES",
        "options": [
          "Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)",
          "Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap",
          "Predikat Nilai Sangat Memuaskan (A / Sobresaliente)",
          "Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Istilah 'Certificado de empadronamiento' adalah padanan untuk 'Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batasan jam kerja per minggu yang diizinkan untuk mahasiswa internasional di Spanyol setelah reformasi UU Imigrasi terbaru?",
        "options": [
          "Hingga 30 jam per minggu (selama tidak mengganggu jam perkuliahan reguler)",
          "Maksimal 5 jam per minggu saja",
          "Dilarang bekerja sama sekali",
          "Bebas bekerja tanpa visa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tras la reforma del Reglamento de Extranjería, los estudiantes extranjeros pueden trabajar hasta 30 horas semanales."
      },
      {
        "id": "q-es-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Padrón municipal' (Certificado de Empadronamiento) di Spanyol?",
        "options": [
          "Karcis kereta api",
          "Pendaftaran alamat tempat tinggal resmi di kantor balai kota (Ayuntamiento) setempat",
          "Paspor baru",
          "Kartu perpustakaan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "El empadronamiento es el registro administrativo donde consta el domicilio habitual en el municipio."
      },
      {
        "id": "q-es-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa lama durasi masa studi jenjang sarjana (Grado) di universitas-universitas Spanyol pada umumnya?",
        "options": [
          "Hanya 1 tahun",
          "7 tahun",
          "Umumnya 4 tahun (240 créditos ECTS)",
          "2 tahun"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Los estudios de Grado en España tienen con carácter general una duración de 4 años (240 ECTS)."
      },
      {
        "id": "q-es-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa nama sertifikat tes kemahiran bahasa Spanyol resmi dari Instituto Cervantes yang berlaku seumur hidup?",
        "options": [
          "TOEFL",
          "IELTS",
          "DELF",
          "DELE (Diplomas de Español como Lengua Extranjera)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Los diplomas DELE expedidos por el Instituto Cervantes en nombre del Ministerio tienen validez indefinida."
      },
      {
        "id": "q-es-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa alternatif tes digital yang hasilnya berlaku 5 tahun dan diselenggarakan secara adaptif online?",
        "options": [
          "SIELE (Servicio Internacional de Evaluación de la Lengua Española)",
          "HSK",
          "TORFL",
          "JLPT"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El SIELE certifica el grado de competencia en español mediante pruebas digitales ágiles."
      },
      {
        "id": "q-es-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kapan periode semester pertama (primer cuatrimestre) biasanya dimulai di Spanyol?",
        "options": [
          "Bulan Januari",
          "Bulan September atau awal Oktober",
          "Bulan Juli",
          "Bulan Mei"
        ],
        "correctAnswerIndex": 1,
        "explanation": "El curso universitario español arranca habitualmente a mediados de septiembre o principios de octubre."
      },
      {
        "id": "q-es-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Convocatoria Extraordinaria' di universitas Spanyol?",
        "options": [
          "Pesta penyambutan liburan",
          "Ujian khusus atlet",
          "Periode ujian perbaikan / remedial (biasanya pada bulan Juni/Juli) bagi siswa yang tidak lulus di ujian reguler",
          "Ujian pemilihan presiden kampus"
        ],
        "correctAnswerIndex": 2,
        "explanation": "La convocatoria extraordinaria ofrece una segunda oportunidad para superar las asignaturas suspensas."
      },
      {
        "id": "q-es-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'Tribunal evaluador' dalam sidang akhir TFG/TFM?",
        "options": [
          "Petugas kepolisian kampus",
          "Kelompok penonton umum",
          "Tim penyedia konsumsi",
          "Dewan penguji akademis yang mendengarkan, menilai, dan memberikan pertanyaan atas presentasi naskah penelitian"
        ],
        "correctAnswerIndex": 3,
        "explanation": "El tribunal evaluador juzga la calidad científica y la exposición oral del trabajo."
      },
      {
        "id": "q-es-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah gelar 'Máster Oficial' berbeda dengan 'Título Propio' di Spanyol?",
        "options": [
          "Ya, Máster Oficial diakui oleh Kementerian dan seluruh kawasan Bologna (EEES) serta memberi akses ke jenjang S3 (Doctorado)",
          "Tidak ada bedanya sama sekali",
          "Título Propio adalah gelar palsu",
          "Máster Oficial hanya untuk warga lokal"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Los másteres oficiales están verificados por la ANECA y dan acceso a programas de doctorado."
      },
      {
        "id": "q-es-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Colegio Mayor' di lingkungan kampus Spanyol?",
        "options": [
          "Sekolah menengah atas",
          "Asrama universitas bernilai historis yang tidak hanya menyediakan kamar dan makan, tetapi juga menyelenggarakan kegiatan akademik dan budaya",
          "Gedung rektorat",
          "Pusat perbelanjaan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Un Colegio Mayor es un centro residencial universitario que fomenta la formación cultural y científica."
      },
      {
        "id": "q-es-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa memperoleh nilai 'Suspenso' dalam transkrip nilainya, apa artinya?",
        "options": [
          "Lulus sempurna",
          "Mendapat beasiswa",
          "Nilai di bawah 5,0 (Tidak Lulus / Gagal)",
          "Mendapat hadiah uang"
        ],
        "correctAnswerIndex": 2,
        "explanation": "La calificación de 'Suspenso' (0 a 4,9) indica que no se han superado los objetivos del curso."
      },
      {
        "id": "q-es-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti istilah 'Tutoría' dalam kalender akademik perkuliahan Spanyol?",
        "options": [
          "Jam istirahat makan siang",
          "Jadwal pertandingan sepak bola",
          "Ujian tengah semester",
          "Jam konsultasi bimbingan akademik tatap muka antara dosen dan mahasiswa"
        ],
        "correctAnswerIndex": 3,
        "explanation": "La tutoría es el espacio de atención individualizada o grupal para resolver dudas académicas."
      },
      {
        "id": "q-es-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi sistem 'Campus Virtual' di universitas-universitas Spanyol?",
        "options": [
          "Portal daring untuk materi perkuliahan, pengumpulan tugas, forum diskusi, dan pengumuman dosen",
          "Toko pakaian online",
          "Pemesanan tiket pesawat",
          "Permainan video"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El Campus Virtual centraliza la interacción formativa y docente en línea de cada universidad."
      },
      {
        "id": "q-es-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kepanjangan dari 'ANECA' di Spanyol?",
        "options": [
          "Asociación Nacional de Estudiantes de Cataluña — Asosiasi Mahasiswa Nasional Catalonia",
          "Agencia Nacional de Evaluación de la Calidad y Acreditación — Badan Nasional Evaluasi Mutu dan Akreditasi Pendidikan Tinggi Spanyol",
          "Academia Nacional de Educación Continua — Akademi Nasional Pendidikan Berkelanjutan",
          "Administración Nacional de Empleo — Administrasi Ketenagakerjaan Nasional"
        ],
        "correctAnswerIndex": 1,
        "explanation": "La ANECA evalúa y acredita la calidad de títulos y profesorado en el sistema universitario español."
      },
      {
        "id": "q-es-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam penulisan ilmiah bahasa Spanyol, bagian 'Agradecimientos' berisi apa?",
        "options": [
          "Daftar rumus matematika",
          "Daftar harga buku",
          "Ungkapan terima kasih dan apresiasi kepada pembimbing, institusi penyandang dana, dan keluarga",
          "Kritik terhadap dosen"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Los agradecimientos reconocen formalmente el apoyo recibido durante la realización de la tesis."
      }
    ]
  }
};
