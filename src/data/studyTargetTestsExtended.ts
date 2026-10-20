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
          "แม้ว่า (meswaa - meskipun)",
          "เพราะว่า (phrowaa - karena)",
          "และ (lae - dan)",
          "หรือ (reuu - atau)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "แม้ว่า... แต่... (meswaa... tae...) adalah konjungsi konsesif resmi dalam penulisan ilmiah bahasa Thai."
      },
      {
        "id": "q-th-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ในการติดต่ออาจารย์ที่ปรึกษา คำสรรพนามเรียกอาจารย์ที่สุภาพที่สุดคือข้อใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "อาจารย์ (aajaan) หรือ ท่านอาจารย์",
          "คุณ (khun)",
          "เธอ (thoe)",
          "พี่ (phii)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam etika akademik Thailand, menyapa dosen/profesor dengan 'ท่านอาจารย์' atau 'อาจารย์' mencerminkan rasa hormat tertinggi."
      },
      {
        "id": "q-th-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ข้อใดคือเอกสาร 'ใบรายงานผลการศึกษา' ในภาษาไทย?",
        "audioVoiceLang": "th-TH",
        "options": [
          "ใบสุทธิ",
          "ใบแสดงผลการเรียน (Transcript)",
          "ใบเสร็จรับเงิน",
          "ใบขับขี่"
        ],
        "correctAnswerIndex": 1,
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
          "ขออนุญาตเข้าพบอาจารย์ครับ/ค่ะ",
          "ผมจะเข้าไปเดี๋ยวนี้",
          "เปิดประตูให้หน่อย",
          "รอแป๊บหนึ่ง"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ขออนุญาตเข้าพบ... adalah ungkapan baku sopan untuk memohon izin menemui dosen."
      },
      {
        "id": "q-th-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำว่า 'ทุนการศึกษา' มีความหมายตรงกับคำในภาษาอินโดนีเซียข้อใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Beasiswa pendidikan",
          "Uang sewa laboratorium",
          "Biaya wisuda",
          "Denda keterlambatan buku"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ทุนการศึกษา (thun kaan seuksaa) berarti beasiswa pendidikan."
      },
      {
        "id": "q-th-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ข้อใดคือคำศัพท์ที่หมายถึง 'การสอบป้องกันวิทยานิพนธ์ (Thesis Defense)'?",
        "audioVoiceLang": "th-TH",
        "options": [
          "การสอบป้องกันวิทยานิพนธ์",
          "การแข่งขันกีฬา",
          "งานเลี้ยงสังสรรค์",
          "การปฐมนิเทศ"
        ],
        "correctAnswerIndex": 0,
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
          "Harap kumpulkan tugas riset sebelum tenggat waktu",
          "Silakan cetak laporan di perpustakaan",
          "Harap datang ke kelas tepat waktu",
          "Jangan lupa bawa kartu mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ส่งงานวิจัยก่อนกำหนดเวลา berarti mengumpulkan riset sebelum tenggat waktu (deadline)."
      }
    ]
  },
  "th-2": {
    "id": "test-th-2",
    "title": "Bagian 2: Esai Rencana Studi & Analisis Konseptual Thailand (10 Soal Essai)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Thailand.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-th-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Jelaskan rencana riset akademis Anda saat mendaftar beasiswa di universitas Thailand (โครงร่างงานวิจัย).",
        "sampleAnswer": "Proposal riset harus mencakup latar belakang masalah, rumusan masalah, metodologi, dan kontribusi bagi kerja sama bilateral Indonesia-Thailand.",
        "keywords": [
          "งานวิจัย",
          "เป้าหมาย",
          "วิธีการ",
          "ประโยชน์"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Bagaimana etika menyurati calon profesor pembimbing (อาจารย์ที่ปรึกษา) di Thailand?",
        "sampleAnswer": "Gunakan salam resmi (กราบเรียน / เรียน ท่านอาจารย์), perkenalkan diri, cantumkan riwayat akademis, lampirkan CV dan draft proposal riset.",
        "keywords": [
          "กราบเรียน",
          "อาจารย์",
          "ความสนใจ",
          "วิทยานิพนธ์"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Uraikan alasan memilih Thailand sebagai destinasi studi internasional Anda.",
        "sampleAnswer": "Kualitas pendidikan riset unggul di universitas terkemuka seperti Chulalongkorn/Mahidol, biaya hidup terjangkau, dan kedekatan kultural ASEAN.",
        "keywords": [
          "การศึกษา",
          "มหาวิทยาลัย",
          "วัฒนธรรม",
          "อาเซียน"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Jelaskan perbedaan antara mata kuliah wajib (วิชาบังคับ) dan mata kuliah pilihan (วิชาเลือก).",
        "sampleAnswer": "วิชาบังคับ adalah mata kuliah wajib yang harus diselesaikan untuk syarat kelulusan, sedangkan วิชาเลือก adalah mata kuliah peminatan sesuai minat riset.",
        "keywords": [
          "วิชาบังคับ",
          "วิชาเลือก",
          "หน่วยกิต"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Bagaimana prosedur mengurus perpanjangan visa pelajar (Non-Immigrant ED Visa) di Kantor Imigrasi Thailand?",
        "sampleAnswer": "Meminta surat keterangan mahasiswa aktif dari kantor urusan internasional universitas, mengisi formulir TM.7, pasfoto, dan biaya perpanjangan resmi.",
        "keywords": [
          "วีซ่า",
          "สำนักงานตรวจคนเข้าเมือง",
          "นักศึกษา"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Tuliskan refleksi singkat tentang pentingnya menguasai aksara dan sistem nada bahasa Thai untuk perkuliahan.",
        "sampleAnswer": "Aksara dan nada membedakan arti kata secara fundamental. Penguasaan nada mencegah kesalahpahaman dalam diskusi dan presentasi akademis.",
        "keywords": [
          "วรรณยุกต์",
          "ตัวอักษร",
          "ความหมาย",
          "การสื่อสาร"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Bagaimana etika berpakaian mahasiswa di lingkungan kampus universitas Thailand?",
        "sampleAnswer": "Sebagian besar kampus sarjana di Thailand mewajibkan seragam universitas formal (เครื่องแบบนักศึกษา) dengan lencana resmi universitas.",
        "keywords": [
          "เครื่องแบบ",
          "สุภาพ",
          "มหาวิทยาลัย",
          "กฎระเบียบ"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Jelaskan kontribusi hasil studi Anda bagi pembangunan Indonesia setelah menyelesaikan perkuliahan di Thailand.",
        "sampleAnswer": "Menerapkan inovasi teknologi pertanian, kesehatan masyarakat, atau hubungan diplomasi ekonomi ASEAN yang dipelajari di Thailand untuk Indonesia.",
        "keywords": [
          "พัฒนา",
          "ประเทศ",
          "ความร่วมมือ",
          "เทคโนโลยี"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Apa yang harus dipersiapkan sebelum mengikuti seminar proposal tesis (การสัมมนาข้อเสนอโครงการวิจัย)?",
        "sampleAnswer": "Menyiapkan slide presentasi terstruktur, menguasai kajian literatur, dan mengantisipasi pertanyaan metodologis dari dewan penguji.",
        "keywords": [
          "การนำเสนอ",
          "ทบทวนวรรณกรรม",
          "ข้อเสนอโครงการ"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Tuliskan salam penutup resmi dalam korespondensi formal surat menyurat bahasa Thai.",
        "sampleAnswer": "Ungkapan penutup resmi adalah 'ขอแสดงความนับถืออย่างสูง' (Dengan hormat / Hormat saya).",
        "keywords": [
          "ขอแสดงความนับถืออย่างสูง",
          "สุภาพ",
          "จดหมาย"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
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
          "ผมขอ",
          "ยื่นคำร้อง",
          "ขอใบแสดงผลการเรียน",
          "อย่างเป็นทางการ"
        ],
        "correctOrder": [
          "ผมขอ",
          "ยื่นคำร้อง",
          "ขอใบแสดงผลการเรียน",
          "อย่างเป็นทางการ"
        ],
        "explanation": "Struktur: Subjek/Permohonan (ผมขอยื่นคำร้อง) + Objek (ขอใบแสดงผลการเรียน) + Keterangan resmi (อย่างเป็นทางการ)."
      },
      {
        "id": "q-th-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat konsultasi dosen: 'Bolehkah saya berkonsultasi mengenai proposal penelitian?'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ขออนุญาต",
          "ปรึกษาอาจารย์",
          "เรื่องข้อเสนอโครงการวิจัย",
          "ได้ไหมครับ"
        ],
        "correctOrder": [
          "ขออนุญาต",
          "ปรึกษาอาจารย์",
          "เรื่องข้อเสนอโครงการวิจัย",
          "ได้ไหมครับ"
        ],
        "explanation": "Urutan sopan: ขออนุญาต + Verba (ปรึกษาอาจารย์) + Topik (เรื่องข้อเสนอโครงการวิจัย) + Partikel (ได้ไหมครับ)."
      },
      {
        "id": "q-th-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat registrasi: 'Mahasiswa baru harus melapor di kantor urusan internasional'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "นักศึกษาใหม่",
          "ต้องไปรายงานตัว",
          "ที่สำนักงานวิเทศสัมพันธ์"
        ],
        "correctOrder": [
          "นักศึกษาใหม่",
          "ต้องไปรายงานตัว",
          "ที่สำนักงานวิเทศสัมพันธ์"
        ],
        "explanation": "Urutan baku: Subjek (นักศึกษาใหม่) + Verba modal (ต้องไปรายงานตัว) + Keterangan tempat (ที่สำนักงานวิเทศสัมพันธ์)."
      },
      {
        "id": "q-th-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Buku referensi ini tidak boleh dipinjam ke luar gedung'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "หนังสืออ้างอิงเล่มนี้",
          "ห้ามนำออก",
          "นอกอาคารหอสมุด"
        ],
        "correctOrder": [
          "หนังสืออ้างอิงเล่มนี้",
          "ห้ามนำออก",
          "นอกอาคารหอสมุด"
        ],
        "explanation": "Urutan aturan: Objek topik (หนังสืออ้างอิงเล่มนี้) + Larangan (ห้ามนำออก) + Lokasi (นอกอาคารหอสมุด)."
      },
      {
        "id": "q-th-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Penerima beasiswa wajib menyerahkan laporan kemajuan akademik setiap semester'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ผู้รับทุนการศึกษา",
          "ต้องส่งรายงานความก้าวหน้า",
          "ทุกภาคการศึกษา"
        ],
        "correctOrder": [
          "ผู้รับทุนการศึกษา",
          "ต้องส่งรายงานความก้าวหน้า",
          "ทุกภาคการศึกษา"
        ],
        "explanation": "Urutan regulasi: Subjek (ผู้รับทุนการศึกษา) + Kewajiban (ต้องส่งรายงานความก้าวหน้า) + Waktu (ทุกภาคการศึกษา)."
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
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'มหาวิทยาลัย (mahawitthayalai)'",
        "sampleAnswer": "Universitas / Perguruan Tinggi",
        "keywords": [
          "universitas",
          "kuliah"
        ],
        "explanation": "Istilah 'มหาวิทยาลัย (mahawitthayalai)' adalah padanan untuk 'Universitas / Perguruan Tinggi'."
      },
      {
        "id": "q-th-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'อาจารย์ที่ปรึกษา (aajaan thii prueksaa)'",
        "sampleAnswer": "Dosen Pembimbing Akademik / Tesis",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'อาจารย์ที่ปรึกษา (aajaan thii prueksaa)' adalah padanan untuk 'Dosen Pembimbing Akademik / Tesis'."
      },
      {
        "id": "q-th-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'หน่วยกิต (nuay kit)'",
        "sampleAnswer": "Satuan Kredit Semester (SKS)",
        "keywords": [
          "satuan",
          "kuliah"
        ],
        "explanation": "Istilah 'หน่วยกิต (nuay kit)' adalah padanan untuk 'Satuan Kredit Semester (SKS)'."
      },
      {
        "id": "q-th-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'ภาคการศึกษา (phaak kaan seuksaa)'",
        "sampleAnswer": "Semester perkuliahan",
        "keywords": [
          "semester",
          "kuliah"
        ],
        "explanation": "Istilah 'ภาคการศึกษา (phaak kaan seuksaa)' adalah padanan untuk 'Semester perkuliahan'."
      },
      {
        "id": "q-th-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'การสอบไล่ (kaan sop lai)'",
        "sampleAnswer": "Ujian Akhir Semester (UAS)",
        "keywords": [
          "ujian",
          "kuliah"
        ],
        "explanation": "Istilah 'การสอบไล่ (kaan sop lai)' adalah padanan untuk 'Ujian Akhir Semester (UAS)'."
      },
      {
        "id": "q-th-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'บัตรประจำตัวนักศึกษา (bat pracamtua nakseuksaa)'",
        "sampleAnswer": "Kartu Tanda Mahasiswa (KTM)",
        "keywords": [
          "kartu",
          "kuliah"
        ],
        "explanation": "Istilah 'บัตรประจำตัวนักศึกษา (bat pracamtua nakseuksaa)' adalah padanan untuk 'Kartu Tanda Mahasiswa (KTM)'."
      },
      {
        "id": "q-th-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'หอพักนักศึกษา (ho phak nakseuksaa)'",
        "sampleAnswer": "Asrama mahasiswa",
        "keywords": [
          "asrama",
          "kuliah"
        ],
        "explanation": "Istilah 'หอพักนักศึกษา (ho phak nakseuksaa)' adalah padanan untuk 'Asrama mahasiswa'."
      },
      {
        "id": "q-th-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'ใบรับรองการศึกษา (bai raprong kaan seuksaa)'",
        "sampleAnswer": "Surat Keterangan Mahasiswa Aktif",
        "keywords": [
          "surat",
          "kuliah"
        ],
        "explanation": "Istilah 'ใบรับรองการศึกษา (bai raprong kaan seuksaa)' adalah padanan untuk 'Surat Keterangan Mahasiswa Aktif'."
      },
      {
        "id": "q-th-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'สาขาวิชา (saakhaa wicha)'",
        "sampleAnswer": "Program Studi / Jurusan",
        "keywords": [
          "program",
          "kuliah"
        ],
        "explanation": "Istilah 'สาขาวิชา (saakhaa wicha)' adalah padanan untuk 'Program Studi / Jurusan'."
      },
      {
        "id": "q-th-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'สำเร็จการศึกษา (samret kaan seuksaa)'",
        "sampleAnswer": "Lulus kuliah / Wisuda kelulusan",
        "keywords": [
          "lulus",
          "kuliah"
        ],
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
          "Upacara tahunan menghormati dan mengungkapkan terima kasih kepada dosen/guru",
          "Festival olahraga antar kampus",
          "Pesta penyambutan mahasiswa baru di pantai",
          "Ujian evaluasi tengah semester"
        ],
        "correctAnswerIndex": 0,
        "explanation": "พิธีไหว้ครู (Wai Kru) adalah tradisi sakral civitas academica Thailand untuk menghormati guru dan dosen."
      },
      {
        "id": "q-th-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batasan jam kerja paruh waktu legal untuk pemegang visa pelajar di Thailand?",
        "options": [
          "Hukum visa pelajar Thailand secara umum tidak mengizinkan pekerjaan berupah di luar kampus tanpa izin kerja khusus",
          "Bebas bekerja hingga 40 jam per minggu",
          "Boleh bekerja paruh waktu tanpa izin",
          "Wajib bekerja 10 jam per minggu"
        ],
        "correctAnswerIndex": 0,
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
          "Mengangkat tangan dengan sopan, menunggu dipersilakan, dan menggunakan partikel ครับ (khrap) / ค่ะ (kha)",
          "Langsung menyela dosen di tengah penjelasan",
          "Berbicara santai tanpa partikel sopan",
          "Meninggalkan ruang kelas tanpa izin"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kesopanan dan penghormatan kepada dosen sangat ditekankan dalam tata krama ruang kuliah Thailand."
      },
      {
        "id": "q-th-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Singkatan 'ม.' dalam penulisan nama kampus di Thailand merupakan kependekan dari:",
        "options": [
          "มหาวิทยาลัย (Universitas)",
          "เมือง (Kota)",
          "มูลนิธิ (Yayasan)",
          "มิตรภาพ (Persahabatan)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'ม.' adalah singkatan baku tertulis untuk 'มหาวิทยาลัย' (Universitas)."
      },
      {
        "id": "q-th-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi kantor 'กองวิเทศสัมพันธ์' (Office of International Affairs) di kampus Thailand?",
        "options": [
          "Menangani administrasi mahasiswa asing, perpanjangan visa, dan kerja sama internasional",
          "Mengelola parkir kendaraan",
          "Menjual buku diktat kuliah",
          "Menyediakan layanan katering"
        ],
        "correctAnswerIndex": 0,
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
          "Proposal studi, surat rekomendasi akademik, transkrip nilai, dan sertifikat kemahiran bahasa",
          "Kwitansi belanja",
          "Surat izin mengemudi",
          "Tiket bioskop"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dokumen akademik resmi dan proposal riset adalah syarat fundamental beasiswa TICA."
      },
      {
        "id": "q-th-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa sebutan untuk ujian proposal penelitian skripsi/tesis dalam bahasa akademik Thai?",
        "options": [
          "การสอบโครงร่างวิทยานิพนธ์",
          "การแข่งขันตอบปัญหา",
          "การแสดงดนตรี",
          "การออกค่ายอาสา"
        ],
        "correctAnswerIndex": 0,
        "explanation": "การสอบโครงร่างวิทยานิพนธ์ adalah seminar ujian proposal tesis."
      },
      {
        "id": "q-th-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bulan apakah semester ganjil (ภาคการศึกษาต้น) biasanya dimulai di universitas Thailand?",
        "options": [
          "Bulan Agustus / September (mengikuti kalender ASEAN)",
          "Bulan Januari",
          "Bulan Mei",
          "Bulan Desember"
        ],
        "correctAnswerIndex": 0,
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
          "Doktor (Ph.D.)",
          "Dokter hewan",
          "Duta besar",
          "Direktur swasta"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'ดร.' adalah singkatan untuk Doktor (Doctorate / Ph.D.)."
      },
      {
        "id": "q-th-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam penulisan ilmiah bahasa Thai, kata 'สรุป' diletakkan pada bagian mana?",
        "options": [
          "Kesimpulan / Bab Akhir",
          "Daftar Isi",
          "Kata Pengantar",
          "Sampul Depan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "สรุป (sarup) berarti kesimpulan / ringkasan akhir."
      },
      {
        "id": "q-th-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi sistem 'Turnitin' yang diterapkan di universitas-universitas Thailand?",
        "options": [
          "Pemeriksaan tingkat plagiarisme dan orisinalitas naskah akademik",
          "Pencatatan absensi harian",
          "Pengisian saldo dompet digital",
          "Pemesanan makanan kantin"
        ],
        "correctAnswerIndex": 0,
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
          "แม้ว่า (meswaa - meskipun)",
          "เพราะว่า (phrowaa - karena)",
          "และ (lae - dan)",
          "หรือ (reuu - atau)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "แม้ว่า... แต่... (meswaa... tae...) adalah konjungsi konsesif resmi dalam penulisan ilmiah bahasa Thai."
      },
      {
        "id": "q-th-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ในการติดต่ออาจารย์ที่ปรึกษา คำสรรพนามเรียกอาจารย์ที่สุภาพที่สุดคือข้อใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "อาจารย์ (aajaan) หรือ ท่านอาจารย์",
          "คุณ (khun)",
          "เธอ (thoe)",
          "พี่ (phii)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dalam etika akademik Thailand, menyapa dosen/profesor dengan 'ท่านอาจารย์' atau 'อาจารย์' mencerminkan rasa hormat tertinggi."
      },
      {
        "id": "q-th-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ข้อใดคือเอกสาร 'ใบรายงานผลการศึกษา' ในภาษาไทย?",
        "audioVoiceLang": "th-TH",
        "options": [
          "ใบสุทธิ",
          "ใบแสดงผลการเรียน (Transcript)",
          "ใบเสร็จรับเงิน",
          "ใบขับขี่"
        ],
        "correctAnswerIndex": 1,
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
          "ขออนุญาตเข้าพบอาจารย์ครับ/ค่ะ",
          "ผมจะเข้าไปเดี๋ยวนี้",
          "เปิดประตูให้หน่อย",
          "รอแป๊บหนึ่ง"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ขออนุญาตเข้าพบ... adalah ungkapan baku sopan untuk memohon izin menemui dosen."
      },
      {
        "id": "q-th-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "คำว่า 'ทุนการศึกษา' มีความหมายตรงกับคำในภาษาอินโดนีเซียข้อใด?",
        "audioVoiceLang": "th-TH",
        "options": [
          "Beasiswa pendidikan",
          "Uang sewa laboratorium",
          "Biaya wisuda",
          "Denda keterlambatan buku"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ทุนการศึกษา (thun kaan seuksaa) berarti beasiswa pendidikan."
      },
      {
        "id": "q-th-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ข้อใดคือคำศัพท์ที่หมายถึง 'การสอบป้องกันวิทยานิพนธ์ (Thesis Defense)'?",
        "audioVoiceLang": "th-TH",
        "options": [
          "การสอบป้องกันวิทยานิพนธ์",
          "การแข่งขันกีฬา",
          "งานเลี้ยงสังสรรค์",
          "การปฐมนิเทศ"
        ],
        "correctAnswerIndex": 0,
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
          "Harap kumpulkan tugas riset sebelum tenggat waktu",
          "Silakan cetak laporan di perpustakaan",
          "Harap datang ke kelas tepat waktu",
          "Jangan lupa bawa kartu mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ส่งงานวิจัยก่อนกำหนดเวลา berarti mengumpulkan riset sebelum tenggat waktu (deadline)."
      },
      {
        "id": "q-th-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Jelaskan rencana riset akademis Anda saat mendaftar beasiswa di universitas Thailand (โครงร่างงานวิจัย).",
        "sampleAnswer": "Proposal riset harus mencakup latar belakang masalah, rumusan masalah, metodologi, dan kontribusi bagi kerja sama bilateral Indonesia-Thailand.",
        "keywords": [
          "งานวิจัย",
          "เป้าหมาย",
          "วิธีการ",
          "ประโยชน์"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Bagaimana etika menyurati calon profesor pembimbing (อาจารย์ที่ปรึกษา) di Thailand?",
        "sampleAnswer": "Gunakan salam resmi (กราบเรียน / เรียน ท่านอาจารย์), perkenalkan diri, cantumkan riwayat akademis, lampirkan CV dan draft proposal riset.",
        "keywords": [
          "กราบเรียน",
          "อาจารย์",
          "ความสนใจ",
          "วิทยานิพนธ์"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Uraikan alasan memilih Thailand sebagai destinasi studi internasional Anda.",
        "sampleAnswer": "Kualitas pendidikan riset unggul di universitas terkemuka seperti Chulalongkorn/Mahidol, biaya hidup terjangkau, dan kedekatan kultural ASEAN.",
        "keywords": [
          "การศึกษา",
          "มหาวิทยาลัย",
          "วัฒนธรรม",
          "อาเซียน"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Jelaskan perbedaan antara mata kuliah wajib (วิชาบังคับ) dan mata kuliah pilihan (วิชาเลือก).",
        "sampleAnswer": "วิชาบังคับ adalah mata kuliah wajib yang harus diselesaikan untuk syarat kelulusan, sedangkan วิชาเลือก adalah mata kuliah peminatan sesuai minat riset.",
        "keywords": [
          "วิชาบังคับ",
          "วิชาเลือก",
          "หน่วยกิต"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Bagaimana prosedur mengurus perpanjangan visa pelajar (Non-Immigrant ED Visa) di Kantor Imigrasi Thailand?",
        "sampleAnswer": "Meminta surat keterangan mahasiswa aktif dari kantor urusan internasional universitas, mengisi formulir TM.7, pasfoto, dan biaya perpanjangan resmi.",
        "keywords": [
          "วีซ่า",
          "สำนักงานตรวจคนเข้าเมือง",
          "นักศึกษา"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Tuliskan refleksi singkat tentang pentingnya menguasai aksara dan sistem nada bahasa Thai untuk perkuliahan.",
        "sampleAnswer": "Aksara dan nada membedakan arti kata secara fundamental. Penguasaan nada mencegah kesalahpahaman dalam diskusi dan presentasi akademis.",
        "keywords": [
          "วรรณยุกต์",
          "ตัวอักษร",
          "ความหมาย",
          "การสื่อสาร"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Bagaimana etika berpakaian mahasiswa di lingkungan kampus universitas Thailand?",
        "sampleAnswer": "Sebagian besar kampus sarjana di Thailand mewajibkan seragam universitas formal (เครื่องแบบนักศึกษา) dengan lencana resmi universitas.",
        "keywords": [
          "เครื่องแบบ",
          "สุภาพ",
          "มหาวิทยาลัย",
          "กฎระเบียบ"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Jelaskan kontribusi hasil studi Anda bagi pembangunan Indonesia setelah menyelesaikan perkuliahan di Thailand.",
        "sampleAnswer": "Menerapkan inovasi teknologi pertanian, kesehatan masyarakat, atau hubungan diplomasi ekonomi ASEAN yang dipelajari di Thailand untuk Indonesia.",
        "keywords": [
          "พัฒนา",
          "ประเทศ",
          "ความร่วมมือ",
          "เทคโนโลยี"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Apa yang harus dipersiapkan sebelum mengikuti seminar proposal tesis (การสัมมนาข้อเสนอโครงการวิจัย)?",
        "sampleAnswer": "Menyiapkan slide presentasi terstruktur, menguasai kajian literatur, dan mengantisipasi pertanyaan metodologis dari dewan penguji.",
        "keywords": [
          "การนำเสนอ",
          "ทบทวนวรรณกรรม",
          "ข้อเสนอโครงการ"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Tuliskan salam penutup resmi dalam korespondensi formal surat menyurat bahasa Thai.",
        "sampleAnswer": "Ungkapan penutup resmi adalah 'ขอแสดงความนับถืออย่างสูง' (Dengan hormat / Hormat saya).",
        "keywords": [
          "ขอแสดงความนับถืออย่างสูง",
          "สุภาพ",
          "จดหมาย"
        ],
        "explanation": "Evaluasi kesiapan konseptual dan proposal studi di Thailand."
      },
      {
        "id": "q-th-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan resmi: 'Saya ingin mengajukan permohonan transkrip nilai resmi'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ผมขอ",
          "ยื่นคำร้อง",
          "ขอใบแสดงผลการเรียน",
          "อย่างเป็นทางการ"
        ],
        "correctOrder": [
          "ผมขอ",
          "ยื่นคำร้อง",
          "ขอใบแสดงผลการเรียน",
          "อย่างเป็นทางการ"
        ],
        "explanation": "Struktur: Subjek/Permohonan (ผมขอยื่นคำร้อง) + Objek (ขอใบแสดงผลการเรียน) + Keterangan resmi (อย่างเป็นทางการ)."
      },
      {
        "id": "q-th-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat konsultasi dosen: 'Bolehkah saya berkonsultasi mengenai proposal penelitian?'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ขออนุญาต",
          "ปรึกษาอาจารย์",
          "เรื่องข้อเสนอโครงการวิจัย",
          "ได้ไหมครับ"
        ],
        "correctOrder": [
          "ขออนุญาต",
          "ปรึกษาอาจารย์",
          "เรื่องข้อเสนอโครงการวิจัย",
          "ได้ไหมครับ"
        ],
        "explanation": "Urutan sopan: ขออนุญาต + Verba (ปรึกษาอาจารย์) + Topik (เรื่องข้อเสนอโครงการวิจัย) + Partikel (ได้ไหมครับ)."
      },
      {
        "id": "q-th-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat registrasi: 'Mahasiswa baru harus melapor di kantor urusan internasional'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "นักศึกษาใหม่",
          "ต้องไปรายงานตัว",
          "ที่สำนักงานวิเทศสัมพันธ์"
        ],
        "correctOrder": [
          "นักศึกษาใหม่",
          "ต้องไปรายงานตัว",
          "ที่สำนักงานวิเทศสัมพันธ์"
        ],
        "explanation": "Urutan baku: Subjek (นักศึกษาใหม่) + Verba modal (ต้องไปรายงานตัว) + Keterangan tempat (ที่สำนักงานวิเทศสัมพันธ์)."
      },
      {
        "id": "q-th-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Buku referensi ini tidak boleh dipinjam ke luar gedung'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "หนังสืออ้างอิงเล่มนี้",
          "ห้ามนำออก",
          "นอกอาคารหอสมุด"
        ],
        "correctOrder": [
          "หนังสืออ้างอิงเล่มนี้",
          "ห้ามนำออก",
          "นอกอาคารหอสมุด"
        ],
        "explanation": "Urutan aturan: Objek topik (หนังสืออ้างอิงเล่มนี้) + Larangan (ห้ามนำออก) + Lokasi (นอกอาคารหอสมุด)."
      },
      {
        "id": "q-th-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Penerima beasiswa wajib menyerahkan laporan kemajuan akademik setiap semester'",
        "audioVoiceLang": "th-TH",
        "scrambledWords": [
          "ผู้รับทุนการศึกษา",
          "ต้องส่งรายงานความก้าวหน้า",
          "ทุกภาคการศึกษา"
        ],
        "correctOrder": [
          "ผู้รับทุนการศึกษา",
          "ต้องส่งรายงานความก้าวหน้า",
          "ทุกภาคการศึกษา"
        ],
        "explanation": "Urutan regulasi: Subjek (ผู้รับทุนการศึกษา) + Kewajiban (ต้องส่งรายงานความก้าวหน้า) + Waktu (ทุกภาคการศึกษา)."
      },
      {
        "id": "q-th-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'มหาวิทยาลัย (mahawitthayalai)'",
        "sampleAnswer": "Universitas / Perguruan Tinggi",
        "keywords": [
          "universitas",
          "kuliah"
        ],
        "explanation": "Istilah 'มหาวิทยาลัย (mahawitthayalai)' adalah padanan untuk 'Universitas / Perguruan Tinggi'."
      },
      {
        "id": "q-th-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'อาจารย์ที่ปรึกษา (aajaan thii prueksaa)'",
        "sampleAnswer": "Dosen Pembimbing Akademik / Tesis",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'อาจารย์ที่ปรึกษา (aajaan thii prueksaa)' adalah padanan untuk 'Dosen Pembimbing Akademik / Tesis'."
      },
      {
        "id": "q-th-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'หน่วยกิต (nuay kit)'",
        "sampleAnswer": "Satuan Kredit Semester (SKS)",
        "keywords": [
          "satuan",
          "kuliah"
        ],
        "explanation": "Istilah 'หน่วยกิต (nuay kit)' adalah padanan untuk 'Satuan Kredit Semester (SKS)'."
      },
      {
        "id": "q-th-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'ภาคการศึกษา (phaak kaan seuksaa)'",
        "sampleAnswer": "Semester perkuliahan",
        "keywords": [
          "semester",
          "kuliah"
        ],
        "explanation": "Istilah 'ภาคการศึกษา (phaak kaan seuksaa)' adalah padanan untuk 'Semester perkuliahan'."
      },
      {
        "id": "q-th-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'การสอบไล่ (kaan sop lai)'",
        "sampleAnswer": "Ujian Akhir Semester (UAS)",
        "keywords": [
          "ujian",
          "kuliah"
        ],
        "explanation": "Istilah 'การสอบไล่ (kaan sop lai)' adalah padanan untuk 'Ujian Akhir Semester (UAS)'."
      },
      {
        "id": "q-th-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'บัตรประจำตัวนักศึกษา (bat pracamtua nakseuksaa)'",
        "sampleAnswer": "Kartu Tanda Mahasiswa (KTM)",
        "keywords": [
          "kartu",
          "kuliah"
        ],
        "explanation": "Istilah 'บัตรประจำตัวนักศึกษา (bat pracamtua nakseuksaa)' adalah padanan untuk 'Kartu Tanda Mahasiswa (KTM)'."
      },
      {
        "id": "q-th-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'หอพักนักศึกษา (ho phak nakseuksaa)'",
        "sampleAnswer": "Asrama mahasiswa",
        "keywords": [
          "asrama",
          "kuliah"
        ],
        "explanation": "Istilah 'หอพักนักศึกษา (ho phak nakseuksaa)' adalah padanan untuk 'Asrama mahasiswa'."
      },
      {
        "id": "q-th-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'ใบรับรองการศึกษา (bai raprong kaan seuksaa)'",
        "sampleAnswer": "Surat Keterangan Mahasiswa Aktif",
        "keywords": [
          "surat",
          "kuliah"
        ],
        "explanation": "Istilah 'ใบรับรองการศึกษา (bai raprong kaan seuksaa)' adalah padanan untuk 'Surat Keterangan Mahasiswa Aktif'."
      },
      {
        "id": "q-th-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'สาขาวิชา (saakhaa wicha)'",
        "sampleAnswer": "Program Studi / Jurusan",
        "keywords": [
          "program",
          "kuliah"
        ],
        "explanation": "Istilah 'สาขาวิชา (saakhaa wicha)' adalah padanan untuk 'Program Studi / Jurusan'."
      },
      {
        "id": "q-th-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Thailand berikut ke dalam bahasa Indonesia: 'สำเร็จการศึกษา (samret kaan seuksaa)'",
        "sampleAnswer": "Lulus kuliah / Wisuda kelulusan",
        "keywords": [
          "lulus",
          "kuliah"
        ],
        "explanation": "Istilah 'สำเร็จการศึกษา (samret kaan seuksaa)' adalah padanan untuk 'Lulus kuliah / Wisuda kelulusan'."
      },
      {
        "id": "q-th-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam budaya akademik Thailand, apa makna tradisi 'ไหว้ครู' (Wai Kru)?",
        "options": [
          "Upacara tahunan menghormati dan mengungkapkan terima kasih kepada dosen/guru",
          "Festival olahraga antar kampus",
          "Pesta penyambutan mahasiswa baru di pantai",
          "Ujian evaluasi tengah semester"
        ],
        "correctAnswerIndex": 0,
        "explanation": "พิธีไหว้ครู (Wai Kru) adalah tradisi sakral civitas academica Thailand untuk menghormati guru dan dosen."
      },
      {
        "id": "q-th-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batasan jam kerja paruh waktu legal untuk pemegang visa pelajar di Thailand?",
        "options": [
          "Hukum visa pelajar Thailand secara umum tidak mengizinkan pekerjaan berupah di luar kampus tanpa izin kerja khusus",
          "Bebas bekerja hingga 40 jam per minggu",
          "Boleh bekerja paruh waktu tanpa izin",
          "Wajib bekerja 10 jam per minggu"
        ],
        "correctAnswerIndex": 0,
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
          "Mengangkat tangan dengan sopan, menunggu dipersilakan, dan menggunakan partikel ครับ (khrap) / ค่ะ (kha)",
          "Langsung menyela dosen di tengah penjelasan",
          "Berbicara santai tanpa partikel sopan",
          "Meninggalkan ruang kelas tanpa izin"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kesopanan dan penghormatan kepada dosen sangat ditekankan dalam tata krama ruang kuliah Thailand."
      },
      {
        "id": "q-th-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Singkatan 'ม.' dalam penulisan nama kampus di Thailand merupakan kependekan dari:",
        "options": [
          "มหาวิทยาลัย (Universitas)",
          "เมือง (Kota)",
          "มูลนิธิ (Yayasan)",
          "มิตรภาพ (Persahabatan)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'ม.' adalah singkatan baku tertulis untuk 'มหาวิทยาลัย' (Universitas)."
      },
      {
        "id": "q-th-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi kantor 'กองวิเทศสัมพันธ์' (Office of International Affairs) di kampus Thailand?",
        "options": [
          "Menangani administrasi mahasiswa asing, perpanjangan visa, dan kerja sama internasional",
          "Mengelola parkir kendaraan",
          "Menjual buku diktat kuliah",
          "Menyediakan layanan katering"
        ],
        "correctAnswerIndex": 0,
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
          "Proposal studi, surat rekomendasi akademik, transkrip nilai, dan sertifikat kemahiran bahasa",
          "Kwitansi belanja",
          "Surat izin mengemudi",
          "Tiket bioskop"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Dokumen akademik resmi dan proposal riset adalah syarat fundamental beasiswa TICA."
      },
      {
        "id": "q-th-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa sebutan untuk ujian proposal penelitian skripsi/tesis dalam bahasa akademik Thai?",
        "options": [
          "การสอบโครงร่างวิทยานิพนธ์",
          "การแข่งขันตอบปัญหา",
          "การแสดงดนตรี",
          "การออกค่ายอาสา"
        ],
        "correctAnswerIndex": 0,
        "explanation": "การสอบโครงร่างวิทยานิพนธ์ adalah seminar ujian proposal tesis."
      },
      {
        "id": "q-th-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bulan apakah semester ganjil (ภาคการศึกษาต้น) biasanya dimulai di universitas Thailand?",
        "options": [
          "Bulan Agustus / September (mengikuti kalender ASEAN)",
          "Bulan Januari",
          "Bulan Mei",
          "Bulan Desember"
        ],
        "correctAnswerIndex": 0,
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
          "Doktor (Ph.D.)",
          "Dokter hewan",
          "Duta besar",
          "Direktur swasta"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'ดร.' adalah singkatan untuk Doktor (Doctorate / Ph.D.)."
      },
      {
        "id": "q-th-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam penulisan ilmiah bahasa Thai, kata 'สรุป' diletakkan pada bagian mana?",
        "options": [
          "Kesimpulan / Bab Akhir",
          "Daftar Isi",
          "Kata Pengantar",
          "Sampul Depan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "สรุป (sarup) berarti kesimpulan / ringkasan akhir."
      },
      {
        "id": "q-th-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi sistem 'Turnitin' yang diterapkan di universitas-universitas Thailand?",
        "options": [
          "Pemeriksaan tingkat plagiarisme dan orisinalitas naskah akademik",
          "Pencatatan absensi harian",
          "Pengisian saldo dompet digital",
          "Pemesanan makanan kantin"
        ],
        "correctAnswerIndex": 0,
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
          "Makalah / karya ilmiah terstruktur per semester",
          "Kartu ujian masuk",
          "Jadwal libur musim dingin",
          "Kuitansi asrama"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Курсовая работа adalah karya ilmiah wajib yang disusun mahasiswa di setiap tahun akademik."
      },
      {
        "id": "q-ru-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Выберите правильный предлог: 'Студент успешно сдал экзамен _____ специальности.'",
        "audioVoiceLang": "ru-RU",
        "options": [
          "по (по специальности)",
          "к",
          "в",
          "от"
        ],
        "correctAnswerIndex": 0,
        "explanation": "В русском языке используется предлог 'по' с дательным падежом: 'экзамен по специальности'."
      },
      {
        "id": "q-ru-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Как принято уважительно обращаться к преподавателю в российских вузах?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "По имени и отчеству (например: Иван Иванович)",
          "Только по фамилии",
          "Эй, учитель",
          "По имени и слову 'друг'"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Обращение по имени и отчеству — ключевая норма академического этикета в России."
      },
      {
        "id": "q-ru-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Какой документ подтверждает статус студента и право на льготный проезд?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Студенческий билет",
          "Паспорт гражданина",
          "Диплом бакалавра",
          "Медицинская страховка"
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
          "Buku nilai hasil ujian dan зачёт mahasiswa",
          "Buku catatan harian kuliah",
          "Daftar pinjaman buku perpustakaan",
          "Katalog mata kuliah"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Зачётная книжка содержит официальные записи обо всех сданных зачётах и экзаменах."
      },
      {
        "id": "q-ru-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "'Научный руководитель' выполняет какую функцию в университете?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Dosen pembimbing skripsi, tesis, dan riset akademik",
          "Petugas tata usaha pendaftaran",
          "Pengawas kebersihan kampus",
          "Instruktur olahraga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Научный руководитель курирует написание дипломной работы или диссертации."
      },
      {
        "id": "q-ru-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что такое 'коллоквиум' в учебном процессе российского вуза?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Diskusi ilmiah / sesi tanya jawab evaluasi pemahaman materi",
          "Pesta tari tahun baru",
          "Perjalanan wisata kampus",
          "Latihan paduan suara"
        ],
        "correctAnswerIndex": 0,
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
          "Перед Государственной экзаменационной комиссией (ГЭК)",
          "Перед комендантом общежития",
          "Перед однокурсниками в кафе",
          "Перед сотрудниками библиотеки"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Защита дипломного проекта проходит публично перед членами ГЭК."
      },
      {
        "id": "q-ru-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что такое 'подфак' (подготовительный факультет) для иностранных студентов?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Fakultas persiapan bahasa Rusia dan matrikulasi pra-kuliah",
          "Fakultas khusus ilmu kedokteran",
          "Lembaga penerbitan buku kampus",
          "Organisasi alumni universitas"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Подготовительный факультет обучает иностранцев русскому языку перед поступлением на первый курс."
      }
    ]
  },
  "ru-2": {
    "id": "test-ru-2",
    "title": "Bagian 2: Esai Rencana Studi & Analisis Konseptual Rusia (10 Soal Essai)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Rusia.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ru-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Опишите ваши академические цели при поступлении в российский вуз (Цель исследования).",
        "sampleAnswer": "Цель исследования включает актуальность темы, объект, предмет, научную новизну и практическую ценность для развития сотрудничества России и Индонезии.",
        "keywords": [
          "цель",
          "исследование",
          "актуальность",
          "наука"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Как подготовиться к написанию курсовой работы в соответствии с требованиями ГОСТ?",
        "sampleAnswer": "Студент должен изучить научные источники, составить план, написать теоретическую и практическую главы, и оформить библиографию по ГОСТу.",
        "keywords": [
          "ГОСТ",
          "литература",
          "оформление",
          "план"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Объясните важность владения падежами русского языка для написания научных статей.",
        "sampleAnswer": "Падежная система точно выражает синтаксические связи между терминами, объектом, субъектом и инструментами анализа в научном стиле речи.",
        "keywords": [
          "падеж",
          "грамматика",
          "терминология",
          "точность"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Опишите процедуру продления студенческой визы и миграционного учёта в РФ.",
        "sampleAnswer": "Необходимо предоставить паспорт, миграционную карту, договор на обучение, фотографии и госпошлину в паспортно-визовый отдел университета за 45 дней.",
        "keywords": [
          "виза",
          "регистрация",
          "паспорт",
          "университет"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Почему вы выбрали обучение в России по государственной стипендии (квоте Правительства РФ)?",
        "sampleAnswer": "Россия славится сильными научными школами в области инженерии, фундаментальных наук и медицины, а программа квот предоставляет бесплатное образование.",
        "keywords": [
          "стипендия",
          "квота",
          "образование",
          "наука"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "В чём разница между зачётом и экзаменом в российском вузе?",
        "sampleAnswer": "Зачёт оценивается по системе 'зачтено/не зачтено' (или дифференцированно), а экзамен выставляет балл от 2 до 5 по пятибалльной шкале.",
        "keywords": [
          "зачёт",
          "экзамен",
          "оценка",
          "сессия"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Какова роль самостоятельной работы студентов (СРС) в учебном процессе?",
        "sampleAnswer": "СРС развивает навыки глубокого поиска источников, критического анализа и написания научных обзоров без постоянного контроля преподавателя.",
        "keywords": [
          "самостоятельная",
          "работа",
          "исследование",
          "литература"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Как построить академическую дискуссию во время семинарского занятия?",
        "sampleAnswer": "Следует приводить аргументы на основе проверенных данных, использовать вводные слова (во-первых, следовательно) и уважать точку зрения коллег.",
        "keywords": [
          "дискуссия",
          "аргумент",
          "семинар",
          "вежливость"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Опишите структуру научной статьи (Аннотация, Введение, Методы, Результаты, Заключение).",
        "sampleAnswer": "Научная статья должна следовать стандарту IMRAD с чётко сформулированной новизной и списком цитируемой литературы.",
        "keywords": [
          "аннотация",
          "методы",
          "результаты",
          "выводы"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Какие этические нормы приняты при общении с профессором по электронной почте?",
        "sampleAnswer": "Необходимо указать тему письма, вежливо поприветствовать профессора по имени-отчеству, представиться (ФИО, группа) и чётко сформулировать вопрос.",
        "keywords": [
          "письмо",
          "этикет",
          "обращение",
          "профессор"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
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
          "Я хочу",
          "записаться на консультацию",
          "к профессору",
          "по курсовой работе"
        ],
        "correctOrder": [
          "Я хочу",
          "записаться на консультацию",
          "к профессору",
          "по курсовой работе"
        ],
        "explanation": "Urutan baku: Subjek/Keinginan (Я хочу) + Frasa verba (записаться на консультацию) + Dosen (к профессору) + Topik (по курсовой работе)."
      },
      {
        "id": "q-ru-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat imigrasi: 'Mahasiswa asing wajib memperpanjang registrasi tepat waktu'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "Иностранные студенты",
          "обязаны вовремя продлевать",
          "миграционный учёт"
        ],
        "correctOrder": [
          "Иностранные студенты",
          "обязаны вовремя продлевать",
          "миграционный учёт"
        ],
        "explanation": "Urutan regulasi: Subjek (Иностранные студенты) + Predikat kewajiban (обязаны вовремя продлевать) + Objek (миграционный учёт)."
      },
      {
        "id": "q-ru-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat penulisan ilmiah: 'Daftar pustaka disusun sesuai aturan standar nasional'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "Список литературы",
          "оформляется в соответствии",
          "с государственным стандартом"
        ],
        "correctOrder": [
          "Список литературы",
          "оформляется в соответствии",
          "с государственным стандартом"
        ],
        "explanation": "Urutan formal: Subjek (Список литературы) + Verba pasif (оформляется в соответствии) + Acuan baku (с государственным стандартом)."
      },
      {
        "id": "q-ru-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Di perpustakaan kampus tersedia pangkalan data ilmiah internasional'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "В университетской библиотеке",
          "доступны международные",
          "научные базы данных"
        ],
        "correctOrder": [
          "В университетской библиотеке",
          "доступны международные",
          "научные базы данных"
        ],
        "explanation": "Urutan wajar: Keterangan tempat (В университетской библиотеке) + Predikatif (доступны) + Subjek objek (международные научные базы данных)."
      },
      {
        "id": "q-ru-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang kelulusan: 'Sidang promosi tesis magister akan diselenggarakan bulan depan'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "Защита магистерской диссертации",
          "состоится в следующем",
          "месяце перед комиссией"
        ],
        "correctOrder": [
          "Защита магистерской диссертации",
          "состоится в следующем",
          "месяце перед комиссией"
        ],
        "explanation": "Urutan agenda: Topik (Защита магистерской диссертации) + Waktu tempat (состоится в следующем месяце перед комиссией)."
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
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Научный руководитель (nauchnyy rukovoditel')'",
        "sampleAnswer": "Dosen Pembimbing Riset / Skripsi",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'Научный руководитель (nauchnyy rukovoditel')' adalah padanan untuk 'Dosen Pembimbing Riset / Skripsi' di universitas Rusia."
      },
      {
        "id": "q-ru-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Экзаменационная сессия (sessiya)'",
        "sampleAnswer": "Masa Ujian Akhir Semester",
        "keywords": [
          "masa",
          "kuliah"
        ],
        "explanation": "Istilah 'Экзаменационная сессия (sessiya)' adalah padanan untuk 'Masa Ujian Akhir Semester' di universitas Rusia."
      },
      {
        "id": "q-ru-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Аудитория (auditoriya)'",
        "sampleAnswer": "Ruang kuliah / Ruang kelas",
        "keywords": [
          "ruang",
          "kuliah"
        ],
        "explanation": "Istilah 'Аудитория (auditoriya)' adalah padanan untuk 'Ruang kuliah / Ruang kelas' di universitas Rusia."
      },
      {
        "id": "q-ru-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Расписание занятий (raspisaniye)'",
        "sampleAnswer": "Jadwal perkuliahan",
        "keywords": [
          "jadwal",
          "kuliah"
        ],
        "explanation": "Istilah 'Расписание занятий (raspisaniye)' adalah padanan untuk 'Jadwal perkuliahan' di universitas Rusia."
      },
      {
        "id": "q-ru-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Общежитие (obshchezhitie)'",
        "sampleAnswer": "Asrama mahasiswa kampus",
        "keywords": [
          "asrama",
          "kuliah"
        ],
        "explanation": "Istilah 'Общежитие (obshchezhitie)' adalah padanan untuk 'Asrama mahasiswa kampus' di universitas Rusia."
      },
      {
        "id": "q-ru-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Кафедра (kafedra)'",
        "sampleAnswer": "Departemen / Program Studi",
        "keywords": [
          "departemen",
          "kuliah"
        ],
        "explanation": "Istilah 'Кафедра (kafedra)' adalah padanan untuk 'Departemen / Program Studi' di universitas Rusia."
      },
      {
        "id": "q-ru-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Деканат (dekanat)'",
        "sampleAnswer": "Kantor Dekanat Fakultas",
        "keywords": [
          "kantor",
          "kuliah"
        ],
        "explanation": "Istilah 'Деканат (dekanat)' adalah padanan untuk 'Kantor Dekanat Fakultas' di universitas Rusia."
      },
      {
        "id": "q-ru-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Стажировка / практика (stazhirovka)'",
        "sampleAnswer": "Magang / Praktik kerja lapangan",
        "keywords": [
          "magang",
          "kuliah"
        ],
        "explanation": "Istilah 'Стажировка / практика (stazhirovka)' adalah padanan untuk 'Magang / Praktik kerja lapangan' di universitas Rusia."
      },
      {
        "id": "q-ru-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Диплом с отличием (krasnyy diplom)'",
        "sampleAnswer": "Ijazah Predikat Cum Laude (Ijazah Merah)",
        "keywords": [
          "ijazah",
          "kuliah"
        ],
        "explanation": "Istilah 'Диплом с отличием (krasnyy diplom)' adalah padanan untuk 'Ijazah Predikat Cum Laude (Ijazah Merah)' di universitas Rusia."
      },
      {
        "id": "q-ru-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Академический отпуск (akademicheskiy otpusk)'",
        "sampleAnswer": "Cuti perkuliahan akademik",
        "keywords": [
          "cuti",
          "kuliah"
        ],
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
          "Skala 1 sampai 5 (5=Отлично, 4=Хорошо, 3=Удовлетворительно, 2=Неудовлетворительно)",
          "Skala huruf A sampai F",
          "Skala 0 sampai 100",
          "Skala bintang 1 sampai 10"
        ],
        "correctAnswerIndex": 0,
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
          "Ijazah kelulusan berpredikat Cum Laude (minimal 75% nilai 5 dan tanpa nilai 3)",
          "Ijazah untuk mahasiswa yang drop out",
          "Surat peringatan disiplin kampus",
          "Kartu anggota partai"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Красный диплом — диплом с отличием, свидетельствующий о наивысших академических успехах."
      },
      {
        "id": "q-ru-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan kompetisi 'Open Doors: Russian Scholarship Project'?",
        "options": [
          "Olimpiade internasional berhadiah beasiswa penuh S2/S3 di universitas top Rusia",
          "Pameran busana kampus",
          "Lomba lari maraton antar-kampus",
          "Pameran kuliner mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Олимпиада Open Doors позволяет иностранным абитуриентам поступить в магистратуру и аспирантуру без экзаменов."
      },
      {
        "id": "q-ru-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana pakaian yang pantas saat menghadiri ujian lisan (устный экзамен) bersama profesor di Rusia?",
        "options": [
          "Pakaian formal rapi (kemeja/blazer), sopan dan profesional",
          "Baju kaos santai dan celana pendek",
          "Pakaian olahraga gym",
          "Pakaian renang"
        ],
        "correctAnswerIndex": 0,
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
          "Bulan Januari",
          "Bulan Agustus",
          "Bulan Mei",
          "Bulan Oktober"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Зимняя экзаменационная сессия традиционно проходит в январе после зачётной недели в декабре."
      },
      {
        "id": "q-ru-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bolehkan mahasiswa asing pemegang visa pelajar di Rusia bekerja paruh waktu saat ini?",
        "options": [
          "Boleh bekerja secara legal tanpa perlu izin kerja terpisah (work permit) di waktu luang",
          "Dilarang bekerja sama sekali",
          "Hanya boleh bekerja di kedutaan",
          "Wajib bekerja 40 jam per minggu"
        ],
        "correctAnswerIndex": 0,
        "explanation": "С 2020 года иностранные студенты очных отделений в РФ имеют право работать в свободное от учёбы время без специального разрешения."
      },
      {
        "id": "q-ru-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa perbedaan mendasar antara 'Бакалавриат' dan 'Специалитет' di Rusia?",
        "options": [
          "Бакалавриат berdurasi 4 tahun (sistem Bologna), sedangkan Специалитет berdurasi 5-6 tahun (program profesi tradisional Rusia)",
          "Бакалавриат hanya untuk seni",
          "Специалитет adalah kursus kilat 3 bulan",
          "Tidak ada bedanya"
        ],
        "correctAnswerIndex": 0,
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
          "Pemberhentian status mahasiswa (Drop Out / Pemecatan)",
          "Penerimaan beasiswa",
          "Kenaikan semester",
          "Pemberian penghargaan riset"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Отчисление — исключение студента из списков учащихся университета."
      },
      {
        "id": "q-ru-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah nama tes kemahiran bahasa Rusia internasional yang setara dengan TOEFL/IELTS?",
        "options": [
          "ТРКИ (TORFL - Тест по русскому языку как иностранному)",
          "HSK",
          "JLPT",
          "DELE"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ТРКИ — официальный международный сертификационный экзамен по русскому языку."
      },
      {
        "id": "q-ru-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi kartu 'Тройка' bagi mahasiswa di kota Moskow?",
        "options": [
          "Kartu transportasi umum bersubsidi (Metro, bus, trem) dengan tarif mahasiswa hemat",
          "Kartu diskon restoran mahal",
          "Tiket masuk museum gratis setiap hari",
          "Kartu izin belanja"
        ],
        "correctAnswerIndex": 0,
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
          "Menyerahkan surat keterangan dokter resmi dari poliklinik mahasiswa ke dekanat untuk memperpanjang sesi ujian",
          "Mengabaikan ujian dan pasrah drop out",
          "Meminta teman menggantikan ujian",
          "Membuat surat izin palsu"
        ],
        "correctAnswerIndex": 0,
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
          "Makalah / karya ilmiah terstruktur per semester",
          "Kartu ujian masuk",
          "Jadwal libur musim dingin",
          "Kuitansi asrama"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Курсовая работа adalah karya ilmiah wajib yang disusun mahasiswa di setiap tahun akademik."
      },
      {
        "id": "q-ru-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Выберите правильный предлог: 'Студент успешно сдал экзамен _____ специальности.'",
        "audioVoiceLang": "ru-RU",
        "options": [
          "по (по специальности)",
          "к",
          "в",
          "от"
        ],
        "correctAnswerIndex": 0,
        "explanation": "В русском языке используется предлог 'по' с дательным падежом: 'экзамен по специальности'."
      },
      {
        "id": "q-ru-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Как принято уважительно обращаться к преподавателю в российских вузах?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "По имени и отчеству (например: Иван Иванович)",
          "Только по фамилии",
          "Эй, учитель",
          "По имени и слову 'друг'"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Обращение по имени и отчеству — ключевая норма академического этикета в России."
      },
      {
        "id": "q-ru-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Какой документ подтверждает статус студента и право на льготный проезд?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Студенческий билет",
          "Паспорт гражданина",
          "Диплом бакалавра",
          "Медицинская страховка"
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
          "Buku nilai hasil ujian dan зачёт mahasiswa",
          "Buku catatan harian kuliah",
          "Daftar pinjaman buku perpustakaan",
          "Katalog mata kuliah"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Зачётная книжка содержит официальные записи обо всех сданных зачётах и экзаменах."
      },
      {
        "id": "q-ru-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "'Научный руководитель' выполняет какую функцию в университете?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Dosen pembimbing skripsi, tesis, dan riset akademik",
          "Petugas tata usaha pendaftaran",
          "Pengawas kebersihan kampus",
          "Instruktur olahraga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Научный руководитель курирует написание дипломной работы или диссертации."
      },
      {
        "id": "q-ru-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что такое 'коллоквиум' в учебном процессе российского вуза?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Diskusi ilmiah / sesi tanya jawab evaluasi pemahaman materi",
          "Pesta tari tahun baru",
          "Perjalanan wisata kampus",
          "Latihan paduan suara"
        ],
        "correctAnswerIndex": 0,
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
          "Перед Государственной экзаменационной комиссией (ГЭК)",
          "Перед комендантом общежития",
          "Перед однокурсниками в кафе",
          "Перед сотрудниками библиотеки"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Защита дипломного проекта проходит публично перед членами ГЭК."
      },
      {
        "id": "q-ru-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Что такое 'подфак' (подготовительный факультет) для иностранных студентов?",
        "audioVoiceLang": "ru-RU",
        "options": [
          "Fakultas persiapan bahasa Rusia dan matrikulasi pra-kuliah",
          "Fakultas khusus ilmu kedokteran",
          "Lembaga penerbitan buku kampus",
          "Organisasi alumni universitas"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Подготовительный факультет обучает иностранцев русскому языку перед поступлением на первый курс."
      },
      {
        "id": "q-ru-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Опишите ваши академические цели при поступлении в российский вуз (Цель исследования).",
        "sampleAnswer": "Цель исследования включает актуальность темы, объект, предмет, научную новизну и практическую ценность для развития сотрудничества России и Индонезии.",
        "keywords": [
          "цель",
          "исследование",
          "актуальность",
          "наука"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Как подготовиться к написанию курсовой работы в соответствии с требованиями ГОСТ?",
        "sampleAnswer": "Студент должен изучить научные источники, составить план, написать теоретическую и практическую главы, и оформить библиографию по ГОСТу.",
        "keywords": [
          "ГОСТ",
          "литература",
          "оформление",
          "план"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Объясните важность владения падежами русского языка для написания научных статей.",
        "sampleAnswer": "Падежная система точно выражает синтаксические связи между терминами, объектом, субъектом и инструментами анализа в научном стиле речи.",
        "keywords": [
          "падеж",
          "грамматика",
          "терминология",
          "точность"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Опишите процедуру продления студенческой визы и миграционного учёта в РФ.",
        "sampleAnswer": "Необходимо предоставить паспорт, миграционную карту, договор на обучение, фотографии и госпошлину в паспортно-визовый отдел университета за 45 дней.",
        "keywords": [
          "виза",
          "регистрация",
          "паспорт",
          "университет"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Почему вы выбрали обучение в России по государственной стипендии (квоте Правительства РФ)?",
        "sampleAnswer": "Россия славится сильными научными школами в области инженерии, фундаментальных наук и медицины, а программа квот предоставляет бесплатное образование.",
        "keywords": [
          "стипендия",
          "квота",
          "образование",
          "наука"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "В чём разница между зачётом и экзаменом в российском вузе?",
        "sampleAnswer": "Зачёт оценивается по системе 'зачтено/не зачтено' (или дифференцированно), а экзамен выставляет балл от 2 до 5 по пятибалльной шкале.",
        "keywords": [
          "зачёт",
          "экзамен",
          "оценка",
          "сессия"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Какова роль самостоятельной работы студентов (СРС) в учебном процессе?",
        "sampleAnswer": "СРС развивает навыки глубокого поиска источников, критического анализа и написания научных обзоров без постоянного контроля преподавателя.",
        "keywords": [
          "самостоятельная",
          "работа",
          "исследование",
          "литература"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Как построить академическую дискуссию во время семинарского занятия?",
        "sampleAnswer": "Следует приводить аргументы на основе проверенных данных, использовать вводные слова (во-первых, следовательно) и уважать точку зрения коллег.",
        "keywords": [
          "дискуссия",
          "аргумент",
          "семинар",
          "вежливость"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Опишите структуру научной статьи (Аннотация, Введение, Методы, Результаты, Заключение).",
        "sampleAnswer": "Научная статья должна следовать стандарту IMRAD с чётко сформулированной новизной и списком цитируемой литературы.",
        "keywords": [
          "аннотация",
          "методы",
          "результаты",
          "выводы"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Какие этические нормы приняты при общении с профессором по электронной почте?",
        "sampleAnswer": "Необходимо указать тему письма, вежливо поприветствовать профессора по имени-отчеству, представиться (ФИО, группа) и чётко сформулировать вопрос.",
        "keywords": [
          "письмо",
          "этикет",
          "обращение",
          "профессор"
        ],
        "explanation": "Evaluasi pemahaman sistem akademik dan etika perkuliahan di Rusia."
      },
      {
        "id": "q-ru-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat resmi konsultasi dosen: 'Saya ingin mendaftar janji konsultasi dengan profesor'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "Я хочу",
          "записаться на консультацию",
          "к профессору",
          "по курсовой работе"
        ],
        "correctOrder": [
          "Я хочу",
          "записаться на консультацию",
          "к профессору",
          "по курсовой работе"
        ],
        "explanation": "Urutan baku: Subjek/Keinginan (Я хочу) + Frasa verba (записаться на консультацию) + Dosen (к профессору) + Topik (по курсовой работе)."
      },
      {
        "id": "q-ru-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat imigrasi: 'Mahasiswa asing wajib memperpanjang registrasi tepat waktu'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "Иностранные студенты",
          "обязаны вовремя продлевать",
          "миграционный учёт"
        ],
        "correctOrder": [
          "Иностранные студенты",
          "обязаны вовремя продлевать",
          "миграционный учёт"
        ],
        "explanation": "Urutan regulasi: Subjek (Иностранные студенты) + Predikat kewajiban (обязаны вовремя продлевать) + Objek (миграционный учёт)."
      },
      {
        "id": "q-ru-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat penulisan ilmiah: 'Daftar pustaka disusun sesuai aturan standar nasional'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "Список литературы",
          "оформляется в соответствии",
          "с государственным стандартом"
        ],
        "correctOrder": [
          "Список литературы",
          "оформляется в соответствии",
          "с государственным стандартом"
        ],
        "explanation": "Urutan formal: Subjek (Список литературы) + Verba pasif (оформляется в соответствии) + Acuan baku (с государственным стандартом)."
      },
      {
        "id": "q-ru-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Di perpustakaan kampus tersedia pangkalan data ilmiah internasional'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "В университетской библиотеке",
          "доступны международные",
          "научные базы данных"
        ],
        "correctOrder": [
          "В университетской библиотеке",
          "доступны международные",
          "научные базы данных"
        ],
        "explanation": "Urutan wajar: Keterangan tempat (В университетской библиотеке) + Predikatif (доступны) + Subjek objek (международные научные базы данных)."
      },
      {
        "id": "q-ru-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang kelulusan: 'Sidang promosi tesis magister akan diselenggarakan bulan depan'",
        "audioVoiceLang": "ru-RU",
        "scrambledWords": [
          "Защита магистерской диссертации",
          "состоится в следующем",
          "месяце перед комиссией"
        ],
        "correctOrder": [
          "Защита магистерской диссертации",
          "состоится в следующем",
          "месяце перед комиссией"
        ],
        "explanation": "Urutan agenda: Topik (Защита магистерской диссертации) + Waktu tempat (состоится в следующем месяце перед комиссией)."
      },
      {
        "id": "q-ru-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Научный руководитель (nauchnyy rukovoditel')'",
        "sampleAnswer": "Dosen Pembimbing Riset / Skripsi",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'Научный руководитель (nauchnyy rukovoditel')' adalah padanan untuk 'Dosen Pembimbing Riset / Skripsi' di universitas Rusia."
      },
      {
        "id": "q-ru-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Экзаменационная сессия (sessiya)'",
        "sampleAnswer": "Masa Ujian Akhir Semester",
        "keywords": [
          "masa",
          "kuliah"
        ],
        "explanation": "Istilah 'Экзаменационная сессия (sessiya)' adalah padanan untuk 'Masa Ujian Akhir Semester' di universitas Rusia."
      },
      {
        "id": "q-ru-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Аудитория (auditoriya)'",
        "sampleAnswer": "Ruang kuliah / Ruang kelas",
        "keywords": [
          "ruang",
          "kuliah"
        ],
        "explanation": "Istilah 'Аудитория (auditoriya)' adalah padanan untuk 'Ruang kuliah / Ruang kelas' di universitas Rusia."
      },
      {
        "id": "q-ru-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Расписание занятий (raspisaniye)'",
        "sampleAnswer": "Jadwal perkuliahan",
        "keywords": [
          "jadwal",
          "kuliah"
        ],
        "explanation": "Istilah 'Расписание занятий (raspisaniye)' adalah padanan untuk 'Jadwal perkuliahan' di universitas Rusia."
      },
      {
        "id": "q-ru-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Общежитие (obshchezhitie)'",
        "sampleAnswer": "Asrama mahasiswa kampus",
        "keywords": [
          "asrama",
          "kuliah"
        ],
        "explanation": "Istilah 'Общежитие (obshchezhitie)' adalah padanan untuk 'Asrama mahasiswa kampus' di universitas Rusia."
      },
      {
        "id": "q-ru-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Кафедра (kafedra)'",
        "sampleAnswer": "Departemen / Program Studi",
        "keywords": [
          "departemen",
          "kuliah"
        ],
        "explanation": "Istilah 'Кафедра (kafedra)' adalah padanan untuk 'Departemen / Program Studi' di universitas Rusia."
      },
      {
        "id": "q-ru-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Деканат (dekanat)'",
        "sampleAnswer": "Kantor Dekanat Fakultas",
        "keywords": [
          "kantor",
          "kuliah"
        ],
        "explanation": "Istilah 'Деканат (dekanat)' adalah padanan untuk 'Kantor Dekanat Fakultas' di universitas Rusia."
      },
      {
        "id": "q-ru-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Стажировка / практика (stazhirovka)'",
        "sampleAnswer": "Magang / Praktik kerja lapangan",
        "keywords": [
          "magang",
          "kuliah"
        ],
        "explanation": "Istilah 'Стажировка / практика (stazhirovka)' adalah padanan untuk 'Magang / Praktik kerja lapangan' di universitas Rusia."
      },
      {
        "id": "q-ru-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Диплом с отличием (krasnyy diplom)'",
        "sampleAnswer": "Ijazah Predikat Cum Laude (Ijazah Merah)",
        "keywords": [
          "ijazah",
          "kuliah"
        ],
        "explanation": "Istilah 'Диплом с отличием (krasnyy diplom)' adalah padanan untuk 'Ijazah Predikat Cum Laude (Ijazah Merah)' di universitas Rusia."
      },
      {
        "id": "q-ru-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Rusia berikut ke dalam bahasa Indonesia: 'Академический отпуск (akademicheskiy otpusk)'",
        "sampleAnswer": "Cuti perkuliahan akademik",
        "keywords": [
          "cuti",
          "kuliah"
        ],
        "explanation": "Istilah 'Академический отпуск (akademicheskiy otpusk)' adalah padanan untuk 'Cuti perkuliahan akademik' di universitas Rusia."
      },
      {
        "id": "q-ru-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Sistem penilaian universitas di Rusia menggunakan skala berapa?",
        "options": [
          "Skala 1 sampai 5 (5=Отлично, 4=Хорошо, 3=Удовлетворительно, 2=Неудовлетворительно)",
          "Skala huruf A sampai F",
          "Skala 0 sampai 100",
          "Skala bintang 1 sampai 10"
        ],
        "correctAnswerIndex": 0,
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
          "Ijazah kelulusan berpredikat Cum Laude (minimal 75% nilai 5 dan tanpa nilai 3)",
          "Ijazah untuk mahasiswa yang drop out",
          "Surat peringatan disiplin kampus",
          "Kartu anggota partai"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Красный диплом — диплом с отличием, свидетельствующий о наивысших академических успехах."
      },
      {
        "id": "q-ru-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan kompetisi 'Open Doors: Russian Scholarship Project'?",
        "options": [
          "Olimpiade internasional berhadiah beasiswa penuh S2/S3 di universitas top Rusia",
          "Pameran busana kampus",
          "Lomba lari maraton antar-kampus",
          "Pameran kuliner mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Олимпиада Open Doors позволяет иностранным абитуриентам поступить в магистратуру и аспирантуру без экзаменов."
      },
      {
        "id": "q-ru-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana pakaian yang pantas saat menghadiri ujian lisan (устный экзамен) bersama profesor di Rusia?",
        "options": [
          "Pakaian formal rapi (kemeja/blazer), sopan dan profesional",
          "Baju kaos santai dan celana pendek",
          "Pakaian olahraga gym",
          "Pakaian renang"
        ],
        "correctAnswerIndex": 0,
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
          "Bulan Januari",
          "Bulan Agustus",
          "Bulan Mei",
          "Bulan Oktober"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Зимняя экзаменационная сессия традиционно проходит в январе после зачётной недели в декабре."
      },
      {
        "id": "q-ru-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bolehkan mahasiswa asing pemegang visa pelajar di Rusia bekerja paruh waktu saat ini?",
        "options": [
          "Boleh bekerja secara legal tanpa perlu izin kerja terpisah (work permit) di waktu luang",
          "Dilarang bekerja sama sekali",
          "Hanya boleh bekerja di kedutaan",
          "Wajib bekerja 40 jam per minggu"
        ],
        "correctAnswerIndex": 0,
        "explanation": "С 2020 года иностранные студенты очных отделений в РФ имеют право работать в свободное от учёбы время без специального разрешения."
      },
      {
        "id": "q-ru-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa perbedaan mendasar antara 'Бакалавриат' dan 'Специалитет' di Rusia?",
        "options": [
          "Бакалавриат berdurasi 4 tahun (sistem Bologna), sedangkan Специалитет berdurasi 5-6 tahun (program profesi tradisional Rusia)",
          "Бакалавриат hanya untuk seni",
          "Специалитет adalah kursus kilat 3 bulan",
          "Tidak ada bedanya"
        ],
        "correctAnswerIndex": 0,
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
          "Pemberhentian status mahasiswa (Drop Out / Pemecatan)",
          "Penerimaan beasiswa",
          "Kenaikan semester",
          "Pemberian penghargaan riset"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Отчисление — исключение студента из списков учащихся университета."
      },
      {
        "id": "q-ru-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah nama tes kemahiran bahasa Rusia internasional yang setara dengan TOEFL/IELTS?",
        "options": [
          "ТРКИ (TORFL - Тест по русскому языку как иностранному)",
          "HSK",
          "JLPT",
          "DELE"
        ],
        "correctAnswerIndex": 0,
        "explanation": "ТРКИ — официальный международный сертификационный экзамен по русскому языку."
      },
      {
        "id": "q-ru-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi kartu 'Тройка' bagi mahasiswa di kota Moskow?",
        "options": [
          "Kartu transportasi umum bersubsidi (Metro, bus, trem) dengan tarif mahasiswa hemat",
          "Kartu diskon restoran mahal",
          "Tiket masuk museum gratis setiap hari",
          "Kartu izin belanja"
        ],
        "correctAnswerIndex": 0,
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
          "Menyerahkan surat keterangan dokter resmi dari poliklinik mahasiswa ke dekanat untuk memperpanjang sesi ujian",
          "Mengabaikan ujian dan pasrah drop out",
          "Meminta teman menggantikan ujian",
          "Membuat surat izin palsu"
        ],
        "correctAnswerIndex": 0,
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
          "Tesis Magister S2",
          "Ijazah Sarjana Muda S1",
          "Kwitansi biaya kuliah",
          "Kartu registrasi perpustakaan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "رسالة الماجستير تعني البحث العلمي المتقدم لنيل درجة الماجستير."
      },
      {
        "id": "q-ar-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "اختر حرف الجر المناسب: 'التحق الطالب الجديد _____ كلية العلوم التطبيقية.'",
        "audioVoiceLang": "ar-SA",
        "options": [
          "بـِ (بكلية)",
          "من",
          "عن",
          "حتى"
        ],
        "correctAnswerIndex": 0,
        "explanation": "الفعل 'التحق' يتعدى بحرف الجر الباء: 'التحق بالكلية'."
      },
      {
        "id": "q-ar-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما اللقب الأكاديمي الرسمي لمن يحمل أعلى رتبة تدريسية في الجامعة؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "الأستاذ الدكتور (البروفيسور)",
          "المعيد",
          "المحاضر",
          "الطالب"
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
          "Satuan Kredit Semester (SKS) yang menentukan beban studi",
          "ساعات الدوام اليومي",
          "ساعات النوم في السكن",
          "ساعات فتح المكتبة"
        ],
        "correctAnswerIndex": 0,
        "explanation": "الساعات المعتمدة (Credit Hours) تعبر عن الثقل الأكاديمي لكل مقرر."
      },
      {
        "id": "q-ar-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما معنى مصطلح 'السجل الأكاديمي' (كشف الدرجات)؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Transkrip nilai akademik resmi yang memuat riwayat IPK",
          "جدول الرحلات الترفيهية",
          "قائمة أسماء الطلاب الغائبين",
          "دفتر استعارة الكتب"
        ],
        "correctAnswerIndex": 0,
        "explanation": "السجل الأكاديمي (Transcript) يوثق جميع الدرجات والمعدلات التراكمية."
      },
      {
        "id": "q-ar-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "'المشرف الأكاديمي' هو الشخص الذي يتولى:",
        "audioVoiceLang": "ar-SA",
        "options": [
          "إرشاد الطالب في إعداد خطة البحث ورسالته العلمية",
          "إصلاح الأجهزة في المختبر",
          "تنظيم حركة المرور بالجامعة",
          "تقديم الوجبات في المطعم الجامعي"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المشرف الأكاديمي يقود ويوجه الطالب علمياً حتى مناقشة رسالته."
      },
      {
        "id": "q-ar-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما معنى مصطلح 'المقرر الاختياري'؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mata kuliah pilihan yang dipilih sesuai minat studi",
          "المقرر الإجباري العام",
          "امتحان القبول النهائي",
          "النشاط الرياضي الإلزامي"
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
          "تغطية الرسوم الدراسية، والسكن، وتذكرة السفر، ومكافأة شهرية",
          "تخفيض 10% من الرسوم فقط",
          "إقامة في فندق خارجي",
          "الحصول على كتب مجانية فقط"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المنحة الكاملة تغطي كافة تكاليف الدراسة والمعيشة والمكافأة الشهرية."
      },
      {
        "id": "q-ar-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "أين تجري عادةً 'مناقشة الرسالة العلمية' العلنية؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "في قاعة المناقشات الرسمية أمام لجنة التحكيم",
          "في مكتبة الحي",
          "عبر الهاتف المحمول",
          "في حديقة الجامعة"
        ],
        "correctAnswerIndex": 0,
        "explanation": "تتم مناقشة الأطروحة علناً في قاعة مخصصة بحضور لجنة المناقشة والحكم."
      },
      {
        "id": "q-ar-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما هو 'معهد تعليم اللغة العربية لغير الناطقين بها'؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "معهد تأهيلي لتعليم الفصحى قبل الالتحاق بالكليات المتخصصة",
          "نادي رياضي صيفي",
          "مدرسة لتعليم قيادة السيارات",
          "مكتب لتوزيع المنح"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المعهد يؤهل الطلاب الأجانب لغوياً وثقافياً للدراسة الأكاديمية."
      }
    ]
  },
  "ar-2": {
    "id": "test-ar-2",
    "title": "Bagian 2: Esai Rencana Studi & Analisis Konseptual Arab Saudi / Timur Tengah (10 Soal Essai)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Arab Saudi / Timur Tengah.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-ar-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "اكتب نبذة عن خطتك البحثية لمتابعة الدراسات العليا في إحدى الجامعات السعودية.",
        "sampleAnswer": "يجب أن تتضمن الخطة: مشكلة البحث، وأهميته، والمنهج المتبع، والدراسات السابقة، والنتائج المتوقعة.",
        "keywords": [
          "بحث",
          "أهمية",
          "منهج",
          "نتائج"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "كيف تلتزم بالأمانة العلمية وقواعد التوثيق وفق نظام APA أو شيكاغو؟",
        "sampleAnswer": "بتوثيق كافة الاقتباسات بدقة ونسب الأقوال لأصحابها وتجنب الانتحال العلمي تماماً.",
        "keywords": [
          "أمانة",
          "توثيق",
          "مراجع",
          "اقتباس"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "بيّن أهمية دراسة النحو والصرف في فهم النصوص الفقهية والأدبية الأصيلة.",
        "sampleAnswer": "النحو يعصم اللسان من الخطأ ويحدد دلالات الإعراب والمعاني الدقيقة في التراث العربي.",
        "keywords": [
          "نحو",
          "صرف",
          "إعراب",
          "فهم"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "اشرح إجراءات إصدار الإقامة الطلابية والتأمين الصحي في المملكة.",
        "sampleAnswer": "يقوم قسم رعاية الطلاب الدوليين باستكمال الفحص الطبي وإصدار الإقامة الطلابية المعتمدة.",
        "keywords": [
          "إقامة",
          "جوازات",
          "تأمين",
          "جامعة"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "لماذا اخترت الدراسة في جامعات الشرق الأوسط عبر منصة 'ادرس في السعودية'؟",
        "sampleAnswer": "لتميز الجامعات السعودية في البحث العلمي والمراكز المتقدمة عالمياً والدعم السخي للمبتعثين.",
        "keywords": [
          "ادرس_في_السعودية",
          "تميز",
          "منحة",
          "تطوير"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "ما الفرق بين الامتحان النصفي والامتحان النهائي في حساب المعدل التراكمي؟",
        "sampleAnswer": "الامتحان النصفي يمثل جزءاً من أعمال الفصل (مثلاً 20-30%) والنهائي يحمل الوزن الأكبر (40-50%).",
        "keywords": [
          "نصفي",
          "نهائي",
          "معدل",
          "درجات"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "كيف تخطط للمشاركة في المؤتمرات والندوات العلمية الطلابية؟",
        "sampleAnswer": "بإعداد أوراق بحثية محكمة وتقديم ملصقات علمية وحضور ورش العمل التخصصية.",
        "keywords": [
          "مؤتمر",
          "ندوة",
          "ورقة",
          "مشاركة"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "وضّح أسلوب المخاطبة الرسمية للعميد ورؤساء الأقسام في المراسلات الجامعية.",
        "sampleAnswer": "يبدأ الخطاب بـ: 'فضيلة/سعادة العميد حفظه الله'، ثم 'السلام عليكم ورحمة الله'، ثم عرض الموضوع بإيجاز.",
        "keywords": [
          "سعادة",
          "عميد",
          "خطاب",
          "احترام"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "ما هي الشروط الواجب توفرها في خطة البحث (البروبوزال) المعتمدة؟",
        "sampleAnswer": "وضوح العنوان، وجدة الموضوع، وسلامة المنهج، وتوافر المراجع، وخطة زمنية واقعية للتنفيذ.",
        "keywords": [
          "خطة",
          "منهجية",
          "مراجع",
          "جدة"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "كيف تخدم مجتمعك ووطنك بعد التخرج من التخصص الذي اخترته؟",
        "sampleAnswer": "بنقل المعارف والتقنيات الحديثة، وتطوير التعليم، والإسهام في النهضة العلمية والاقتصادية للوطن.",
        "keywords": [
          "تطوير",
          "خدمة",
          "وطن",
          "معرفة"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
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
          "أود تسجيل",
          "المقررات الدراسية",
          "لهذا الفصل الدراسي"
        ],
        "correctOrder": [
          "أود تسجيل",
          "المقررات الدراسية",
          "لهذا الفصل الدراسي"
        ],
        "explanation": "Urutan formal: Keinginan sopan (أود تسجيل) + Objek (المقررات الدراسية) + Waktu (لهذا الفصل الدراسي)."
      },
      {
        "id": "q-ar-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat etika tugas: 'Mahasiswa wajib mematuhi batas waktu pengumpulan tugas riset'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "يجب على الطلاب",
          "الالتزام بمواعيد تسليم",
          "البحوث العلمية"
        ],
        "correctOrder": [
          "يجب على الطلاب",
          "الالتزام بمواعيد تسليم",
          "البحوث العلمية"
        ],
        "explanation": "Urutan kewajiban: Subjek kewajiban (يجب على الطلاب) + Verba masdar (الالتزام بمواعيد تسليم) + Objek (البحوث العلمية)."
      },
      {
        "id": "q-ar-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Saya mendapatkan beasiswa penuh dari universitas'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "حصلت على",
          "منحة دراسية كاملة",
          "من الجامعة"
        ],
        "correctOrder": [
          "حصلت على",
          "منحة دراسية كاملة",
          "من الجامعة"
        ],
        "explanation": "Urutan: Fi'il & Fa'il (حصلت على) + Objek (منحة دراسية كاملة) + Asal sumber (من الجامعة)."
      },
      {
        "id": "q-ar-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang tesis: 'Sidang promosi tesis magister diselenggarakan akhir tahun'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "تنعقد مناقشة الرسالة",
          "في نهاية العام الجامعي",
          "أمام اللجنة"
        ],
        "correctOrder": [
          "تنعقد مناقشة الرسالة",
          "في نهاية العام الجامعي",
          "أمام اللجنة"
        ],
        "explanation": "Urutan: Subjek agenda (تنعقد مناقشة الرسالة) + Waktu (في نهاية العام الجامعي) + Majelis (أمام اللجنة)."
      },
      {
        "id": "q-ar-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan pusat menyediakan referensi ilmiah yang sangat berharga'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "توفر المكتبة المركزية",
          "مراجع علمية قيمة",
          "للباحثين"
        ],
        "correctOrder": [
          "توفر المكتبة المركزية",
          "مراجع علمية قيمة",
          "للباحثين"
        ],
        "explanation": "Urutan: Predikat & Subjek (توفر المكتبة المركزية) + Objek (مراجع علمية قيمة) + Penerima (للباحثين)."
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
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'عميد الكلية (Ameed al-kulliyyah)'",
        "sampleAnswer": "Dekan Fakultas",
        "keywords": [
          "dekan",
          "kuliah"
        ],
        "explanation": "Istilah 'عميد الكلية (Ameed al-kulliyyah)' adalah padanan untuk 'Dekan Fakultas'."
      },
      {
        "id": "q-ar-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'رئيس القسم (Ra'ees al-qism)'",
        "sampleAnswer": "Ketua Jurusan / Departemen",
        "keywords": [
          "ketua",
          "kuliah"
        ],
        "explanation": "Istilah 'رئيس القسم (Ra'ees al-qism)' adalah padanan untuk 'Ketua Jurusan / Departemen'."
      },
      {
        "id": "q-ar-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'المعدل التراكمي (Al-Mu'addal at-tarakumi)'",
        "sampleAnswer": "Indeks Prestasi Kumulatif (IPK)",
        "keywords": [
          "indeks",
          "kuliah"
        ],
        "explanation": "Istilah 'المعدل التراكمي (Al-Mu'addal at-tarakumi)' adalah padanan untuk 'Indeks Prestasi Kumulatif (IPK)'."
      },
      {
        "id": "q-ar-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'قاعة المحاضرات (Qaa'at al-muhaadarat)'",
        "sampleAnswer": "Ruang kuliah / Auditorium perkuliahan",
        "keywords": [
          "ruang",
          "kuliah"
        ],
        "explanation": "Istilah 'قاعة المحاضرات (Qaa'at al-muhaadarat)' adalah padanan untuk 'Ruang kuliah / Auditorium perkuliahan'."
      },
      {
        "id": "q-ar-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'السكن الجامعي (As-Sakan al-jaami'i)'",
        "sampleAnswer": "Asrama mahasiswa kampus",
        "keywords": [
          "asrama",
          "kuliah"
        ],
        "explanation": "Istilah 'السكن الجامعي (As-Sakan al-jaami'i)' adalah padanan untuk 'Asrama mahasiswa kampus'."
      },
      {
        "id": "q-ar-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'متطلب جامعي (Mutatallab jaami'i)'",
        "sampleAnswer": "Mata kuliah prasyarat umum universitas",
        "keywords": [
          "mata",
          "kuliah"
        ],
        "explanation": "Istilah 'متطلب جامعي (Mutatallab jaami'i)' adalah padanan untuk 'Mata kuliah prasyarat umum universitas'."
      },
      {
        "id": "q-ar-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'حفل التخرج (Hafl at-takharrruj)'",
        "sampleAnswer": "Upacara wisuda kelulusan",
        "keywords": [
          "upacara",
          "kuliah"
        ],
        "explanation": "Istilah 'حفل التخرج (Hafl at-takharrruj)' adalah padanan untuk 'Upacara wisuda kelulusan'."
      },
      {
        "id": "q-ar-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'تدريب ميداني (Tadreeb maydaani)'",
        "sampleAnswer": "Praktik kerja lapangan / Magang klinis",
        "keywords": [
          "praktik",
          "kuliah"
        ],
        "explanation": "Istilah 'تدريب ميداني (Tadreeb maydaani)' adalah padanan untuk 'Praktik kerja lapangan / Magang klinis'."
      },
      {
        "id": "q-ar-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'مرتبة الشرف (Martabat ash-sharaf)'",
        "sampleAnswer": "Predikat Kehormatan / Cum Laude",
        "keywords": [
          "predikat",
          "kuliah"
        ],
        "explanation": "Istilah 'مرتبة الشرف (Martabat ash-sharaf)' adalah padanan untuk 'Predikat Kehormatan / Cum Laude'."
      },
      {
        "id": "q-ar-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'بطاقة الطالب الجامعية (Bitaaqat at-taalib)'",
        "sampleAnswer": "Kartu Tanda Mahasiswa (KTM)",
        "keywords": [
          "kartu",
          "kuliah"
        ],
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
          "منصة ادرس في السعودية (Study in Saudi Portal)",
          "منصة أبشر",
          "منصة توكلنا",
          "منصة مدرستي"
        ],
        "correctAnswerIndex": 0,
        "explanation": "بوابة 'ادرس في السعودية' هي المنصة الرسمية الموحدة لاستقبال طلبات المنح للطلاب الدوليين."
      },
      {
        "id": "q-ar-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fasilitas yang umumnya diperoleh penerima beasiswa penuh (المنحة الخارجية) di Arab Saudi?",
        "options": [
          "Tiket pesawat tahunan pulang-pergi, asrama gratis, tunjangan uang saku bulanan, dan asuransi kesehatan",
          "Tiket bus saja",
          "Potongan harga kantin 10%",
          "Pinjaman berbunga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "تشمل المنحة الدراسية الخارجية الكاملة تذاكر السفر والمكافأة الشهرية والسكن المجاني والرعاية الصحية."
      },
      {
        "id": "q-ar-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kriteria predikat kelulusan 'مرتبة الشرف الأولى' (First Class Honors) di Arab Saudi?",
        "options": [
          "Meraih IPK kumulatif antara 4.75 hingga 5.00 tanpa pernah gagal dalam satu mata kuliah pun",
          "Meraih IPK minimal 2.00",
          "Lulus paling cepat 2 tahun",
          "Menang lomba lari"
        ],
        "correctAnswerIndex": 0,
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
          "Bahasa Inggris penuh untuk sains, teknik, dan bisnis",
          "Bahasa Arab dialek lokal",
          "Bahasa Prancis",
          "Bahasa Jerman"
        ],
        "correctAnswerIndex": 0,
        "explanation": "جامعة الملك فهد للبترول والمعادن تعتمد اللغة الإنجليزية لغة تدريس أساسية للبرامج العلمية والهندسية."
      },
      {
        "id": "q-ar-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa istilah untuk izin tinggal resmi bagi mahasiswa asing di Arab Saudi?",
        "options": [
          "إقامة طالب (Iqamah Thalib)",
          "تأشيرة سياحة",
          "تأشيرة عمل تجارية",
          "فيزا ترانزيت"
        ],
        "correctAnswerIndex": 0,
        "explanation": "الإقامة الطلابية هي الوثيقة النظامية لإثبات الهوية والإقامة القانونية بالمملكة."
      },
      {
        "id": "q-ar-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'السنة التحضيرية' (Tahun Persiapan) di universitas-universitas Saudi?",
        "options": [
          "Tahun pertama perkuliahan yang memfokuskan pada penguatan bahasa Inggris, matematika, dan sains dasar",
          "Tahun libur bebas",
          "Tahun dinas militer",
          "Tahun magang perusahaan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "السنة التحضيرية تهدف إلى ردم الفجوة الأكاديمية وتهيئة الطالب للدراسة التخصصية."
      },
      {
        "id": "q-ar-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa ingin meminta dispensasi keterlambatan tugas karena sakit, apa yang harus dibawa?",
        "options": [
          "تقرير طبي معتمد من المركز الطبي الجامعي (Laporan medis resmi klinik universitas)",
          "تذكرة سفر",
          "فاتورة مطعم",
          "رسالة من صديقه"
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
          "Perkuliahan tatap muka / Kuliah dosen di kelas",
          "جلسة شاي",
          "مباراة كرة قدم",
          "حفلة موسيقية"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المحاضرة هي الدرس الأكاديمي الذي يلقيه أستاذ المادة على الطلاب."
      },
      {
        "id": "q-ar-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "ما هي وظيفة 'عمادة شؤون الطلاب' في الجامعات السعودية؟",
        "options": [
          "رعاية شؤون الطلاب، والإسكان الجامعي، والأنشطة الطلابية، والمكافآت",
          "حراسة بوابات المدينة",
          "بيع الوقود",
          "صيانة محطات الكهرباء"
        ],
        "correctAnswerIndex": 0,
        "explanation": "عمادة شؤون الطلاب مسؤولة عن كافة الخدمات والأنشطة غير الأكاديمية الداعمة للطلاب."
      },
      {
        "id": "q-ar-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi penulisan 'الفهرس' في نهاية الرسالة العلمية؟",
        "options": [
          "Daftar isi, tabel, dan indeks topik untuk memudahkan navigasi pembaca",
          "قائمة أسماء الأصدقاء",
          "صفحة الإعلانات",
          "أرقام الهواتف الشخصية"
        ],
        "correctAnswerIndex": 0,
        "explanation": "الفهارس الفنية تضمن سهولة الرجوع للموضوعات والآيات والأحاديث والمصادر."
      },
      {
        "id": "q-ar-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas absensi maksimal sebelum seorang mahasiswa mendapatkan status 'حرمان' (Denial/Diskualifikasi ujian)?",
        "options": [
          "Umumnya ketidakhadiran melebihi 25% dari total jam pertemuan kuliah",
          "غياب 5%",
          "غياب 90%",
          "لا يوجد حرمان"
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
          "مجلس يتولى شؤون البحث العلمي والترقيات الأكاديمية لأعضاء هيئة التدريس",
          "نادي المشجعين",
          "لجنة تنسيق الرحلات",
          "جمعية حماية المستهلك"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المجلس العلمي هو أعلى سلطة تشرف على الأبحاث والترقيات العلمية بالجامعة."
      },
      {
        "id": "q-ar-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'الخطة الدراسية' (Study Plan) bagi mahasiswa baru?",
        "options": [
          "Bagan kurikulum resmi yang memuat daftar mata kuliah yang harus ditempuh per semester hingga lulus",
          "جدول رحلات نهاية الأسبوع",
          "قائمة أسعار الكتب",
          "دفتر يوميات الطالب"
        ],
        "correctAnswerIndex": 0,
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
          "Tesis Magister S2",
          "Ijazah Sarjana Muda S1",
          "Kwitansi biaya kuliah",
          "Kartu registrasi perpustakaan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "رسالة الماجستير تعني البحث العلمي المتقدم لنيل درجة الماجستير."
      },
      {
        "id": "q-ar-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "اختر حرف الجر المناسب: 'التحق الطالب الجديد _____ كلية العلوم التطبيقية.'",
        "audioVoiceLang": "ar-SA",
        "options": [
          "بـِ (بكلية)",
          "من",
          "عن",
          "حتى"
        ],
        "correctAnswerIndex": 0,
        "explanation": "الفعل 'التحق' يتعدى بحرف الجر الباء: 'التحق بالكلية'."
      },
      {
        "id": "q-ar-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما اللقب الأكاديمي الرسمي لمن يحمل أعلى رتبة تدريسية في الجامعة؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "الأستاذ الدكتور (البروفيسور)",
          "المعيد",
          "المحاضر",
          "الطالب"
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
          "Satuan Kredit Semester (SKS) yang menentukan beban studi",
          "ساعات الدوام اليومي",
          "ساعات النوم في السكن",
          "ساعات فتح المكتبة"
        ],
        "correctAnswerIndex": 0,
        "explanation": "الساعات المعتمدة (Credit Hours) تعبر عن الثقل الأكاديمي لكل مقرر."
      },
      {
        "id": "q-ar-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما معنى مصطلح 'السجل الأكاديمي' (كشف الدرجات)؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Transkrip nilai akademik resmi yang memuat riwayat IPK",
          "جدول الرحلات الترفيهية",
          "قائمة أسماء الطلاب الغائبين",
          "دفتر استعارة الكتب"
        ],
        "correctAnswerIndex": 0,
        "explanation": "السجل الأكاديمي (Transcript) يوثق جميع الدرجات والمعدلات التراكمية."
      },
      {
        "id": "q-ar-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "'المشرف الأكاديمي' هو الشخص الذي يتولى:",
        "audioVoiceLang": "ar-SA",
        "options": [
          "إرشاد الطالب في إعداد خطة البحث ورسالته العلمية",
          "إصلاح الأجهزة في المختبر",
          "تنظيم حركة المرور بالجامعة",
          "تقديم الوجبات في المطعم الجامعي"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المشرف الأكاديمي يقود ويوجه الطالب علمياً حتى مناقشة رسالته."
      },
      {
        "id": "q-ar-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما معنى مصطلح 'المقرر الاختياري'؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "Mata kuliah pilihan yang dipilih sesuai minat studi",
          "المقرر الإجباري العام",
          "امتحان القبول النهائي",
          "النشاط الرياضي الإلزامي"
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
          "تغطية الرسوم الدراسية، والسكن، وتذكرة السفر، ومكافأة شهرية",
          "تخفيض 10% من الرسوم فقط",
          "إقامة في فندق خارجي",
          "الحصول على كتب مجانية فقط"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المنحة الكاملة تغطي كافة تكاليف الدراسة والمعيشة والمكافأة الشهرية."
      },
      {
        "id": "q-ar-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "أين تجري عادةً 'مناقشة الرسالة العلمية' العلنية؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "في قاعة المناقشات الرسمية أمام لجنة التحكيم",
          "في مكتبة الحي",
          "عبر الهاتف المحمول",
          "في حديقة الجامعة"
        ],
        "correctAnswerIndex": 0,
        "explanation": "تتم مناقشة الأطروحة علناً في قاعة مخصصة بحضور لجنة المناقشة والحكم."
      },
      {
        "id": "q-ar-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "ما هو 'معهد تعليم اللغة العربية لغير الناطقين بها'؟",
        "audioVoiceLang": "ar-SA",
        "options": [
          "معهد تأهيلي لتعليم الفصحى قبل الالتحاق بالكليات المتخصصة",
          "نادي رياضي صيفي",
          "مدرسة لتعليم قيادة السيارات",
          "مكتب لتوزيع المنح"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المعهد يؤهل الطلاب الأجانب لغوياً وثقافياً للدراسة الأكاديمية."
      },
      {
        "id": "q-ar-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "اكتب نبذة عن خطتك البحثية لمتابعة الدراسات العليا في إحدى الجامعات السعودية.",
        "sampleAnswer": "يجب أن تتضمن الخطة: مشكلة البحث، وأهميته، والمنهج المتبع، والدراسات السابقة، والنتائج المتوقعة.",
        "keywords": [
          "بحث",
          "أهمية",
          "منهج",
          "نتائج"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "كيف تلتزم بالأمانة العلمية وقواعد التوثيق وفق نظام APA أو شيكاغو؟",
        "sampleAnswer": "بتوثيق كافة الاقتباسات بدقة ونسب الأقوال لأصحابها وتجنب الانتحال العلمي تماماً.",
        "keywords": [
          "أمانة",
          "توثيق",
          "مراجع",
          "اقتباس"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "بيّن أهمية دراسة النحو والصرف في فهم النصوص الفقهية والأدبية الأصيلة.",
        "sampleAnswer": "النحو يعصم اللسان من الخطأ ويحدد دلالات الإعراب والمعاني الدقيقة في التراث العربي.",
        "keywords": [
          "نحو",
          "صرف",
          "إعراب",
          "فهم"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "اشرح إجراءات إصدار الإقامة الطلابية والتأمين الصحي في المملكة.",
        "sampleAnswer": "يقوم قسم رعاية الطلاب الدوليين باستكمال الفحص الطبي وإصدار الإقامة الطلابية المعتمدة.",
        "keywords": [
          "إقامة",
          "جوازات",
          "تأمين",
          "جامعة"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "لماذا اخترت الدراسة في جامعات الشرق الأوسط عبر منصة 'ادرس في السعودية'؟",
        "sampleAnswer": "لتميز الجامعات السعودية في البحث العلمي والمراكز المتقدمة عالمياً والدعم السخي للمبتعثين.",
        "keywords": [
          "ادرس_في_السعودية",
          "تميز",
          "منحة",
          "تطوير"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "ما الفرق بين الامتحان النصفي والامتحان النهائي في حساب المعدل التراكمي؟",
        "sampleAnswer": "الامتحان النصفي يمثل جزءاً من أعمال الفصل (مثلاً 20-30%) والنهائي يحمل الوزن الأكبر (40-50%).",
        "keywords": [
          "نصفي",
          "نهائي",
          "معدل",
          "درجات"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "كيف تخطط للمشاركة في المؤتمرات والندوات العلمية الطلابية؟",
        "sampleAnswer": "بإعداد أوراق بحثية محكمة وتقديم ملصقات علمية وحضور ورش العمل التخصصية.",
        "keywords": [
          "مؤتمر",
          "ندوة",
          "ورقة",
          "مشاركة"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "وضّح أسلوب المخاطبة الرسمية للعميد ورؤساء الأقسام في المراسلات الجامعية.",
        "sampleAnswer": "يبدأ الخطاب بـ: 'فضيلة/سعادة العميد حفظه الله'، ثم 'السلام عليكم ورحمة الله'، ثم عرض الموضوع بإيجاز.",
        "keywords": [
          "سعادة",
          "عميد",
          "خطاب",
          "احترام"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "ما هي الشروط الواجب توفرها في خطة البحث (البروبوزال) المعتمدة؟",
        "sampleAnswer": "وضوح العنوان، وجدة الموضوع، وسلامة المنهج، وتوافر المراجع، وخطة زمنية واقعية للتنفيذ.",
        "keywords": [
          "خطة",
          "منهجية",
          "مراجع",
          "جدة"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "كيف تخدم مجتمعك ووطنك بعد التخرج من التخصص الذي اخترته؟",
        "sampleAnswer": "بنقل المعارف والتقنيات الحديثة، وتطوير التعليم، والإسهام في النهضة العلمية والاقتصادية للوطن.",
        "keywords": [
          "تطوير",
          "خدمة",
          "وطن",
          "معرفة"
        ],
        "explanation": "Evaluasi kesiapan proposal riset dan etika korespondensi di Arab Saudi."
      },
      {
        "id": "q-ar-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan registrasi: 'Saya ingin mendaftar mata kuliah semester ini'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "أود تسجيل",
          "المقررات الدراسية",
          "لهذا الفصل الدراسي"
        ],
        "correctOrder": [
          "أود تسجيل",
          "المقررات الدراسية",
          "لهذا الفصل الدراسي"
        ],
        "explanation": "Urutan formal: Keinginan sopan (أود تسجيل) + Objek (المقررات الدراسية) + Waktu (لهذا الفصل الدراسي)."
      },
      {
        "id": "q-ar-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat etika tugas: 'Mahasiswa wajib mematuhi batas waktu pengumpulan tugas riset'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "يجب على الطلاب",
          "الالتزام بمواعيد تسليم",
          "البحوث العلمية"
        ],
        "correctOrder": [
          "يجب على الطلاب",
          "الالتزام بمواعيد تسليم",
          "البحوث العلمية"
        ],
        "explanation": "Urutan kewajiban: Subjek kewajiban (يجب على الطلاب) + Verba masdar (الالتزام بمواعيد تسليم) + Objek (البحوث العلمية)."
      },
      {
        "id": "q-ar-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Saya mendapatkan beasiswa penuh dari universitas'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "حصلت على",
          "منحة دراسية كاملة",
          "من الجامعة"
        ],
        "correctOrder": [
          "حصلت على",
          "منحة دراسية كاملة",
          "من الجامعة"
        ],
        "explanation": "Urutan: Fi'il & Fa'il (حصلت على) + Objek (منحة دراسية كاملة) + Asal sumber (من الجامعة)."
      },
      {
        "id": "q-ar-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang tesis: 'Sidang promosi tesis magister diselenggarakan akhir tahun'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "تنعقد مناقشة الرسالة",
          "في نهاية العام الجامعي",
          "أمام اللجنة"
        ],
        "correctOrder": [
          "تنعقد مناقشة الرسالة",
          "في نهاية العام الجامعي",
          "أمام اللجنة"
        ],
        "explanation": "Urutan: Subjek agenda (تنعقد مناقشة الرسالة) + Waktu (في نهاية العام الجامعي) + Majelis (أمام اللجنة)."
      },
      {
        "id": "q-ar-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan pusat menyediakan referensi ilmiah yang sangat berharga'",
        "audioVoiceLang": "ar-SA",
        "scrambledWords": [
          "توفر المكتبة المركزية",
          "مراجع علمية قيمة",
          "للباحثين"
        ],
        "correctOrder": [
          "توفر المكتبة المركزية",
          "مراجع علمية قيمة",
          "للباحثين"
        ],
        "explanation": "Urutan: Predikat & Subjek (توفر المكتبة المركزية) + Objek (مراجع علمية قيمة) + Penerima (للباحثين)."
      },
      {
        "id": "q-ar-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'عميد الكلية (Ameed al-kulliyyah)'",
        "sampleAnswer": "Dekan Fakultas",
        "keywords": [
          "dekan",
          "kuliah"
        ],
        "explanation": "Istilah 'عميد الكلية (Ameed al-kulliyyah)' adalah padanan untuk 'Dekan Fakultas'."
      },
      {
        "id": "q-ar-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'رئيس القسم (Ra'ees al-qism)'",
        "sampleAnswer": "Ketua Jurusan / Departemen",
        "keywords": [
          "ketua",
          "kuliah"
        ],
        "explanation": "Istilah 'رئيس القسم (Ra'ees al-qism)' adalah padanan untuk 'Ketua Jurusan / Departemen'."
      },
      {
        "id": "q-ar-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'المعدل التراكمي (Al-Mu'addal at-tarakumi)'",
        "sampleAnswer": "Indeks Prestasi Kumulatif (IPK)",
        "keywords": [
          "indeks",
          "kuliah"
        ],
        "explanation": "Istilah 'المعدل التراكمي (Al-Mu'addal at-tarakumi)' adalah padanan untuk 'Indeks Prestasi Kumulatif (IPK)'."
      },
      {
        "id": "q-ar-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'قاعة المحاضرات (Qaa'at al-muhaadarat)'",
        "sampleAnswer": "Ruang kuliah / Auditorium perkuliahan",
        "keywords": [
          "ruang",
          "kuliah"
        ],
        "explanation": "Istilah 'قاعة المحاضرات (Qaa'at al-muhaadarat)' adalah padanan untuk 'Ruang kuliah / Auditorium perkuliahan'."
      },
      {
        "id": "q-ar-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'السكن الجامعي (As-Sakan al-jaami'i)'",
        "sampleAnswer": "Asrama mahasiswa kampus",
        "keywords": [
          "asrama",
          "kuliah"
        ],
        "explanation": "Istilah 'السكن الجامعي (As-Sakan al-jaami'i)' adalah padanan untuk 'Asrama mahasiswa kampus'."
      },
      {
        "id": "q-ar-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'متطلب جامعي (Mutatallab jaami'i)'",
        "sampleAnswer": "Mata kuliah prasyarat umum universitas",
        "keywords": [
          "mata",
          "kuliah"
        ],
        "explanation": "Istilah 'متطلب جامعي (Mutatallab jaami'i)' adalah padanan untuk 'Mata kuliah prasyarat umum universitas'."
      },
      {
        "id": "q-ar-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'حفل التخرج (Hafl at-takharrruj)'",
        "sampleAnswer": "Upacara wisuda kelulusan",
        "keywords": [
          "upacara",
          "kuliah"
        ],
        "explanation": "Istilah 'حفل التخرج (Hafl at-takharrruj)' adalah padanan untuk 'Upacara wisuda kelulusan'."
      },
      {
        "id": "q-ar-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'تدريب ميداني (Tadreeb maydaani)'",
        "sampleAnswer": "Praktik kerja lapangan / Magang klinis",
        "keywords": [
          "praktik",
          "kuliah"
        ],
        "explanation": "Istilah 'تدريب ميداني (Tadreeb maydaani)' adalah padanan untuk 'Praktik kerja lapangan / Magang klinis'."
      },
      {
        "id": "q-ar-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'مرتبة الشرف (Martabat ash-sharaf)'",
        "sampleAnswer": "Predikat Kehormatan / Cum Laude",
        "keywords": [
          "predikat",
          "kuliah"
        ],
        "explanation": "Istilah 'مرتبة الشرف (Martabat ash-sharaf)' adalah padanan untuk 'Predikat Kehormatan / Cum Laude'."
      },
      {
        "id": "q-ar-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Arab Saudi / Timur Tengah berikut ke dalam bahasa Indonesia: 'بطاقة الطالب الجامعية (Bitaaqat at-taalib)'",
        "sampleAnswer": "Kartu Tanda Mahasiswa (KTM)",
        "keywords": [
          "kartu",
          "kuliah"
        ],
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
          "منصة ادرس في السعودية (Study in Saudi Portal)",
          "منصة أبشر",
          "منصة توكلنا",
          "منصة مدرستي"
        ],
        "correctAnswerIndex": 0,
        "explanation": "بوابة 'ادرس في السعودية' هي المنصة الرسمية الموحدة لاستقبال طلبات المنح للطلاب الدوليين."
      },
      {
        "id": "q-ar-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fasilitas yang umumnya diperoleh penerima beasiswa penuh (المنحة الخارجية) di Arab Saudi?",
        "options": [
          "Tiket pesawat tahunan pulang-pergi, asrama gratis, tunjangan uang saku bulanan, dan asuransi kesehatan",
          "Tiket bus saja",
          "Potongan harga kantin 10%",
          "Pinjaman berbunga"
        ],
        "correctAnswerIndex": 0,
        "explanation": "تشمل المنحة الدراسية الخارجية الكاملة تذاكر السفر والمكافأة الشهرية والسكن المجاني والرعاية الصحية."
      },
      {
        "id": "q-ar-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kriteria predikat kelulusan 'مرتبة الشرف الأولى' (First Class Honors) di Arab Saudi?",
        "options": [
          "Meraih IPK kumulatif antara 4.75 hingga 5.00 tanpa pernah gagal dalam satu mata kuliah pun",
          "Meraih IPK minimal 2.00",
          "Lulus paling cepat 2 tahun",
          "Menang lomba lari"
        ],
        "correctAnswerIndex": 0,
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
          "Bahasa Inggris penuh untuk sains, teknik, dan bisnis",
          "Bahasa Arab dialek lokal",
          "Bahasa Prancis",
          "Bahasa Jerman"
        ],
        "correctAnswerIndex": 0,
        "explanation": "جامعة الملك فهد للبترول والمعادن تعتمد اللغة الإنجليزية لغة تدريس أساسية للبرامج العلمية والهندسية."
      },
      {
        "id": "q-ar-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa istilah untuk izin tinggal resmi bagi mahasiswa asing di Arab Saudi?",
        "options": [
          "إقامة طالب (Iqamah Thalib)",
          "تأشيرة سياحة",
          "تأشيرة عمل تجارية",
          "فيزا ترانزيت"
        ],
        "correctAnswerIndex": 0,
        "explanation": "الإقامة الطلابية هي الوثيقة النظامية لإثبات الهوية والإقامة القانونية بالمملكة."
      },
      {
        "id": "q-ar-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'السنة التحضيرية' (Tahun Persiapan) di universitas-universitas Saudi?",
        "options": [
          "Tahun pertama perkuliahan yang memfokuskan pada penguatan bahasa Inggris, matematika, dan sains dasar",
          "Tahun libur bebas",
          "Tahun dinas militer",
          "Tahun magang perusahaan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "السنة التحضيرية تهدف إلى ردم الفجوة الأكاديمية وتهيئة الطالب للدراسة التخصصية."
      },
      {
        "id": "q-ar-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa ingin meminta dispensasi keterlambatan tugas karena sakit, apa yang harus dibawa?",
        "options": [
          "تقرير طبي معتمد من المركز الطبي الجامعي (Laporan medis resmi klinik universitas)",
          "تذكرة سفر",
          "فاتورة مطعم",
          "رسالة من صديقه"
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
          "Perkuliahan tatap muka / Kuliah dosen di kelas",
          "جلسة شاي",
          "مباراة كرة قدم",
          "حفلة موسيقية"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المحاضرة هي الدرس الأكاديمي الذي يلقيه أستاذ المادة على الطلاب."
      },
      {
        "id": "q-ar-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "ما هي وظيفة 'عمادة شؤون الطلاب' في الجامعات السعودية؟",
        "options": [
          "رعاية شؤون الطلاب، والإسكان الجامعي، والأنشطة الطلابية، والمكافآت",
          "حراسة بوابات المدينة",
          "بيع الوقود",
          "صيانة محطات الكهرباء"
        ],
        "correctAnswerIndex": 0,
        "explanation": "عمادة شؤون الطلاب مسؤولة عن كافة الخدمات والأنشطة غير الأكاديمية الداعمة للطلاب."
      },
      {
        "id": "q-ar-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi penulisan 'الفهرس' في نهاية الرسالة العلمية؟",
        "options": [
          "Daftar isi, tabel, dan indeks topik untuk memudahkan navigasi pembaca",
          "قائمة أسماء الأصدقاء",
          "صفحة الإعلانات",
          "أرقام الهواتف الشخصية"
        ],
        "correctAnswerIndex": 0,
        "explanation": "الفهارس الفنية تضمن سهولة الرجوع للموضوعات والآيات والأحاديث والمصادر."
      },
      {
        "id": "q-ar-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas absensi maksimal sebelum seorang mahasiswa mendapatkan status 'حرمان' (Denial/Diskualifikasi ujian)?",
        "options": [
          "Umumnya ketidakhadiran melebihi 25% dari total jam pertemuan kuliah",
          "غياب 5%",
          "غياب 90%",
          "لا يوجد حرمان"
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
          "مجلس يتولى شؤون البحث العلمي والترقيات الأكاديمية لأعضاء هيئة التدريس",
          "نادي المشجعين",
          "لجنة تنسيق الرحلات",
          "جمعية حماية المستهلك"
        ],
        "correctAnswerIndex": 0,
        "explanation": "المجلس العلمي هو أعلى سلطة تشرف على الأبحاث والترقيات العلمية بالجامعة."
      },
      {
        "id": "q-ar-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'الخطة الدراسية' (Study Plan) bagi mahasiswa baru?",
        "options": [
          "Bagan kurikulum resmi yang memuat daftar mata kuliah yang harus ditempuh per semester hingga lulus",
          "جدول رحلات نهاية الأسبوع",
          "قائمة أسعار الكتب",
          "دفتر يوميات الطالب"
        ],
        "correctAnswerIndex": 0,
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
          "Tesis riset akademik jenjang Master",
          "Ijazah sarjana muda",
          "Kartu ujian perpustakaan",
          "Kwitansi biaya sewa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le mémoire de recherche est un travail scientifique écrit soutenu à la fin du Master."
      },
      {
        "id": "q-fr-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choisissez la préposition correcte : 'Ce cours magistral s'adresse _____ étudiants de Master.'",
        "audioVoiceLang": "fr-FR",
        "options": [
          "aux (à les -> aux)",
          "des",
          "pour",
          "vers"
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
          "Monsieur le Professeur / Madame la Professeure",
          "Salut cher prof",
          "Hé toi",
          "Mon cher ami"
        ],
        "correctAnswerIndex": 0,
        "explanation": "L'adresse formelle 'Monsieur le Professeur' ou 'Madame la Professeure' respecte les usages universitaires."
      },
      {
        "id": "q-fr-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quel document officiel atteste de l'inscription administrative d'un étudiant ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Le certificat de scolarité",
          "Le permis de conduire",
          "La carte de fidélité",
          "Le ticket de caisse"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le certificat de scolarité prouve l'inscription administrative régulière dans l'établissement."
      },
      {
        "id": "q-fr-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que désignent les crédits ECTS dans le système européen LMD ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Crédits d'évaluation semestriels (30 ECTS par semestre / 60 par an)",
          "Points de réduction pour le restaurant",
          "Crédits téléphoniques",
          "Heures de sport"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Les crédits ECTS (European Credit Transfer System) mesurent le volume de travail requis."
      },
      {
        "id": "q-fr-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quelle est la différence fondamentale entre un CM (Cours Magistral) et un TD (Travaux Dirigés) ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Le CM a lieu en amphithéâtre pour la théorie, le TD en petit groupe pour les exercices pratiques",
          "Le CM est réservé aux vacances",
          "Le TD est un cours de sport",
          "Il n'y a aucune différence"
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
          "Centre Régional des Œuvres Universitaires et Scolaires (résidences et Restos U)",
          "Club de Randonnée et d'Orientation Universitaire",
          "Comité de Recherche d'Ouvrages Spécialisés",
          "Centre de Réparation d'Outils Numériques"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le CROUS gère les logements universitaires, la restauration étudiante et les bourses sur critères sociaux."
      },
      {
        "id": "q-fr-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Le terme 'soutenance de mémoire' correspond à :",
        "audioVoiceLang": "fr-FR",
        "options": [
          "L'épreuve orale publique de présentation et de défense des conclusions de la recherche",
          "Un examen médical annuel",
          "Une fête de fin d'année",
          "L'achat de matériel de laboratoire"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La soutenance est l'évaluation orale terminale devant un jury académique."
      },
      {
        "id": "q-fr-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que signifie l'aide 'APL' accordée par la CAF aux étudiants louant un logement ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Aide Personnalisée au Logement (allocation financière réduisant le loyer mensuel)",
          "Assurance Prévoyance Logement",
          "Abonnement Pour Livres",
          "Allocation Pour Loisirs"
        ],
        "correctAnswerIndex": 0,
        "explanation": "L'APL est une prestation de la Caisse d'Allocations Familiales qui diminue le montant du loyer."
      },
      {
        "id": "q-fr-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quelle note minimale sur 20 est traditionnellement requise pour valider une unité d'enseignement (UE) ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "10 sur 20 (la moyenne)",
          "5 sur 20",
          "18 sur 20",
          "15 sur 20"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La note de 10/20 représente le seuil de validation d'un module ou d'un semestre."
      }
    ]
  },
  "fr-2": {
    "id": "test-fr-2",
    "title": "Bagian 2: Esai Rencana Studi & Analisis Konseptual Prancis (10 Soal Essai)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Prancis.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-fr-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Présentez votre projet de recherche universitaire et sa problématique centrale.",
        "sampleAnswer": "Le projet doit exposer l'état de l'art, la question de recherche directrice (problématique), la méthodologie envisagée et les retombées attendues.",
        "keywords": [
          "problématique",
          "méthodologie",
          "recherche",
          "objectifs"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Expliquez la méthodologie de la dissertation française avec un plan en deux ou trois parties.",
        "sampleAnswer": "La dissertation exige une introduction rigoureuse (accroche, définition, problématique, annonce du plan), un développement équilibré et une conclusion.",
        "keywords": [
          "introduction",
          "plan",
          "problématique",
          "conclusion"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Pourquoi avez-vous postulé à une formation universitaire en France via Campus France ?",
        "sampleAnswer": "Pour la renommée académique, la rigueur méthodologique, l'accès aux grands laboratoires et le rayonnement de la francophonie scientifique.",
        "keywords": [
          "Campus_France",
          "excellence",
          "laboratoire",
          "coopération"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Décrivez les démarches de validation du titre de séjour étudiant (OFII / ANEF).",
        "sampleAnswer": "L'étudiant doit valider son VLS-TS en ligne sur le portail ANEF dans les trois mois suivant son arrivée en France en payant la taxe de séjour.",
        "keywords": [
          "ANEF",
          "OFII",
          "titre_de_séjour",
          "validation"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Comment structurez-vous une revue de littérature académique rigoureuse ?",
        "sampleAnswer": "En regroupant les publications majeures par axes thématiques, en identifiant les controverses théoriques et en mettant en relief le vide scientifique comblé.",
        "keywords": [
          "revue",
          "littérature",
          "état_de_l'art",
          "théorie"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "En quoi le système LMD (Licence, Master, Doctorat) favorise-t-il la mobilité internationale ?",
        "sampleAnswer": "Grâce aux crédits ECTS standardisés, à la reconnaissance mutuelle des diplômes européens et à la fluidité des transferts universitaires.",
        "keywords": [
          "LMD",
          "ECTS",
          "mobilité",
          "diplôme"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Comment préparez-vous votre recherche de stage obligatoire en entreprise ou laboratoire ?",
        "sampleAnswer": "En ciblant les offres sur les plateformes spécialisées, en personnalisant CV et lettre de motivation selon les exigences de la convention de stage.",
        "keywords": [
          "stage",
          "convention",
          "laboratoire",
          "CV"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Quelle est l'importance du respect des normes bibliographiques (Zotero, APA, Vancouver) ?",
        "sampleAnswer": "Elles garantissent l'honnêteté intellectuelle, permettent la traçabilité des sources et évitent toute accusation de plagiat académique.",
        "keywords": [
          "normes",
          "bibliographie",
          "plagiat",
          "rigueur"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Décrivez les étapes d'une candidature à la bourse d'excellence Eiffel.",
        "sampleAnswer": "La candidature est présentée directement par l'établissement d'accueil français sélectionné, après évaluation du dossier académique d'excellence.",
        "keywords": [
          "bourse_Eiffel",
          "excellence",
          "dossier",
          "ministère"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Quel impact professionnel envisagez-vous à votre retour en Indonésie ?",
        "sampleAnswer": "Mettre à profit l'expertise acquise pour enseigner dans l'enseignement supérieur, diriger des projets d'innovation et renforcer les liens franco-indonésiens.",
        "keywords": [
          "Indonésie",
          "expertise",
          "développement",
          "partenariat"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
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
          "Je souhaite",
          "solliciter un rendez-vous",
          "pour faire le point",
          "sur mon mémoire"
        ],
        "correctOrder": [
          "Je souhaite",
          "solliciter un rendez-vous",
          "pour faire le point",
          "sur mon mémoire"
        ],
        "explanation": "Ordre syntaxique formel : Sujet (Je souhaite) + Verbe/Objet (solliciter un rendez-vous) + But (pour faire le point sur mon mémoire)."
      },
      {
        "id": "q-fr-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat validasi ECTS: 'Mahasiswa harus menyelesaikan enam puluh kredit per tahun ajaran'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "Les étudiants doivent",
          "valider soixante crédits",
          "par année universitaire"
        ],
        "correctOrder": [
          "Les étudiants doivent",
          "valider soixante crédits",
          "par année universitaire"
        ],
        "explanation": "Ordre réglementaire : Sujet modal (Les étudiants doivent) + Verbe d'évaluation (valider soixante crédits) + Cadre temporel (par année universitaire)."
      },
      {
        "id": "q-fr-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat pendekatan ilmiah: 'Proyek penelitian ini sepenuhnya mengikuti kaidah ilmiah yang ketat'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "Ce projet de recherche",
          "respecte scrupuleusement",
          "la démarche scientifique"
        ],
        "correctOrder": [
          "Ce projet de recherche",
          "respecte scrupuleusement",
          "la démarche scientifique"
        ],
        "explanation": "Ordre académique : Sujet (Ce projet de recherche) + Adverbe/Verbe (respecte scrupuleusement) + Complément d'objet (la démarche scientifique)."
      },
      {
        "id": "q-fr-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan kampus menawarkan akses ke jurnal ilmiah internasional'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "La bibliothèque universitaire",
          "propose un accès",
          "aux revues scientifiques internationales"
        ],
        "correctOrder": [
          "La bibliothèque universitaire",
          "propose un accès",
          "aux revues scientifiques internationales"
        ],
        "explanation": "Ordre : Sujet (La bibliothèque universitaire) + Verbe/Objet (propose un accès) + Destinataire (aux revues scientifiques internationales)."
      },
      {
        "id": "q-fr-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang kelulusan: 'Sidang presentasi tesis magister akan berlangsung pada bulan Juni di hadapan juri'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "La soutenance du mémoire",
          "aura lieu en juin",
          "devant le jury académique"
        ],
        "correctOrder": [
          "La soutenance du mémoire",
          "aura lieu en juin",
          "devant le jury académique"
        ],
        "explanation": "Ordre événementiel : Sujet (La soutenance du mémoire) + Verbe/Temps (aura lieu en juin) + Circonstance (devant le jury académique)."
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
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Directeur de recherche (directeur de thèse)'",
        "sampleAnswer": "Dosen Pembimbing Penelitian / Disertasi",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'Directeur de recherche (directeur de thèse)' adalah padanan untuk 'Dosen Pembimbing Penelitian / Disertasi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Relevé de notes officiel (bulletin)'",
        "sampleAnswer": "Transkrip Nilai Akademik Resmi",
        "keywords": [
          "transkrip",
          "kuliah"
        ],
        "explanation": "Istilah 'Relevé de notes officiel (bulletin)' adalah padanan untuk 'Transkrip Nilai Akademik Resmi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Resto U (Restaurant Universitaire)'",
        "sampleAnswer": "Kantin Universitas Bersubsidi CROUS",
        "keywords": [
          "kantin",
          "kuliah"
        ],
        "explanation": "Istilah 'Resto U (Restaurant Universitaire)' adalah padanan untuk 'Kantin Universitas Bersubsidi CROUS' di universitas Prancis."
      },
      {
        "id": "q-fr-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Emploi du temps (planning des cours)'",
        "sampleAnswer": "Jadwal Perkuliahan Mingguan",
        "keywords": [
          "jadwal",
          "kuliah"
        ],
        "explanation": "Istilah 'Emploi du temps (planning des cours)' adalah padanan untuk 'Jadwal Perkuliahan Mingguan' di universitas Prancis."
      },
      {
        "id": "q-fr-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Année de césure (gap year)'",
        "sampleAnswer": "Cuti Akademik / Tahun Jeda Kuliah",
        "keywords": [
          "cuti",
          "kuliah"
        ],
        "explanation": "Istilah 'Année de césure (gap year)' adalah padanan untuk 'Cuti Akademik / Tahun Jeda Kuliah' di universitas Prancis."
      },
      {
        "id": "q-fr-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Convention de stage tripartite'",
        "sampleAnswer": "Surat Perjanjian Magang Resmi",
        "keywords": [
          "surat",
          "kuliah"
        ],
        "explanation": "Istilah 'Convention de stage tripartite' adalah padanan untuk 'Surat Perjanjian Magang Resmi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Mention très bien (avec félicitations)'",
        "sampleAnswer": "Predikat Sangat Memuaskan / Cum Laude",
        "keywords": [
          "predikat",
          "kuliah"
        ],
        "explanation": "Istilah 'Mention très bien (avec félicitations)' adalah padanan untuk 'Predikat Sangat Memuaskan / Cum Laude' di universitas Prancis."
      },
      {
        "id": "q-fr-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Amphithéâtre (amphi)'",
        "sampleAnswer": "Ruang Kuliah Teater / Auditorium",
        "keywords": [
          "ruang",
          "kuliah"
        ],
        "explanation": "Istilah 'Amphithéâtre (amphi)' adalah padanan untuk 'Ruang Kuliah Teater / Auditorium' di universitas Prancis."
      },
      {
        "id": "q-fr-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Droits d'inscription universitaire'",
        "sampleAnswer": "Biaya Pendaftaran / SPP Universitas",
        "keywords": [
          "biaya",
          "kuliah"
        ],
        "explanation": "Istilah 'Droits d'inscription universitaire' adalah padanan untuk 'Biaya Pendaftaran / SPP Universitas' di universitas Prancis."
      },
      {
        "id": "q-fr-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Titre de séjour étudiant (VLS-TS)'",
        "sampleAnswer": "Kartu Izin Tinggal Pelajar Asing",
        "keywords": [
          "kartu",
          "kuliah"
        ],
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
          "Skala nilai 0 sampai 20 (dengan 10 sebagai batas kelulusan)",
          "Skala 0 sampai 4.00",
          "Skala huruf A sampai F",
          "Skala 0 sampai 100 persen"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le système universitaire français note traditionnellement sur 20 points."
      },
      {
        "id": "q-fr-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas jam kerja sampingan berupah yang diizinkan untuk mahasiswa asing pemegang visa VLS-TS di Prancis?",
        "options": [
          "Maksimal 60% dari durasi jam kerja legal tahunan (yaitu 964 jam per tahun)",
          "Bebas tanpa batasan jam kerja",
          "Hanya 5 jam per minggu",
          "Dilarang bekerja sama sekali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La législation française autorise les étudiants étrangers à travailler jusqu'à 964 heures par an."
      },
      {
        "id": "q-fr-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa perbedaan antara Grandes Écoles dan Universités publiques di Prancis?",
        "options": [
          "Grandes Écoles adalah institusi selektif bergengsi dengan ujian masuk ketat (concours), sedangkan Universités memiliki akses terbuka untuk pemegang baccalauréat",
          "Universités hanya mengajarkan seni",
          "Grandes Écoles adalah sekolah menengah",
          "Tidak ada perbedaan kurikulum"
        ],
        "correctAnswerIndex": 0,
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
          "Mention Très Bien",
          "Mention Passable",
          "Mention Assez Bien",
          "Mention Éliminatoire"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La mention Très Bien est décernée pour une moyenne égale ou supérieure à 16/20."
      },
      {
        "id": "q-fr-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi platform resmi 'Campus France' bagi calon mahasiswa internasional?",
        "options": [
          "Memproses pendaftaran aplikasi studi, verifikasi dokumen, dan wawancara visa pelajar",
          "Menjual tiket penerbangan",
          "Menyewakan apartemen mewah",
          "Memberikan pinjaman bank"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Campus France est l'agence publique chargée de promouvoir l'enseignement supérieur français."
      },
      {
        "id": "q-fr-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kapan tahun akademik perkuliahan (rentrée universitaire) biasanya dimulai di Prancis?",
        "options": [
          "Bulan September atau awal Oktober",
          "Bulan Januari",
          "Bulan April",
          "Bulan Juli"
        ],
        "correctAnswerIndex": 0,
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
          "Ya, berhak mendaftar di Sécurité Sociale (l'Assurance Maladie) secara gratis",
          "Tidak, harus membayar 5.000 euro per bulan",
          "Hanya untuk warga negara Uni Eropa",
          "Hanya berlaku jika dirawat di rumah sakit swasta"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Les étudiants internationaux bénéficient de la gratuité de la Sécurité Sociale française."
      },
      {
        "id": "q-fr-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan istilah 'Partiels' dalam kalender akademik universitas Prancis?",
        "options": [
          "Ujian semester berkala (tengah semester / akhir semester)",
          "Pesta perkenalan mahasiswa",
          "Liburan akhir pekan",
          "Jadwal senam pagi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Les partiels sont les sessions d'examens semestriels écrits ou oraux."
      },
      {
        "id": "q-fr-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti kata 'Rattrapage' jika seorang mahasiswa belum mencapai nilai 10/20 di ujian pertama?",
        "options": [
          "Sesi ujian perbaikan / remedial kedua untuk memperbaiki nilai",
          "Pengusiran dari kampus",
          "Pengulangan satu tahun penuh",
          "Pembayaran denda tunai"
        ],
        "correctAnswerIndex": 0,
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
          "Licence (3 ans - 180 ECTS), Master (2 ans - 120 ECTS), Doctorat (3 ans - 180 ECTS)",
          "Tiap jenjang memakan waktu 1 tahun",
          "Licence 5 tahun dan Master 5 tahun",
          "Tidak mengenal jenjang berjenjang"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le système LMD est structuré en 3 niveaux d'études supérieures successifs."
      },
      {
        "id": "q-fr-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kepanjangan dari 'TGV' dan bagaimana relevansinya bagi mobilitas mahasiswa antar kota di Prancis?",
        "options": [
          "Train à Grande Vitesse, dengan kartu diskon Carte Avantage Jeune untuk tarif hemat mahasiswa",
          "Transport Général de Ville",
          "Taxi Grand Volume",
          "Téléphérique Gare Voyager"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le TGV permet des liaisons ultra-rapides à travers la France avec des tarifs avantageux pour les jeunes."
      },
      {
        "id": "q-fr-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Sebelum menyerahkan laporan magang (rapport de stage), dokumen pengesahan apa yang harus ditandatangani perusahaan dan kampus?",
        "options": [
          "L'attestation de stage et la fiche d'évaluation du tuteur d'entreprise",
          "Kwitansi gaji bulanan",
          "Kartu nama direktur",
          "Foto bersama rekan kerja"
        ],
        "correctAnswerIndex": 0,
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
          "Tesis riset akademik jenjang Master",
          "Ijazah sarjana muda",
          "Kartu ujian perpustakaan",
          "Kwitansi biaya sewa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le mémoire de recherche est un travail scientifique écrit soutenu à la fin du Master."
      },
      {
        "id": "q-fr-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choisissez la préposition correcte : 'Ce cours magistral s'adresse _____ étudiants de Master.'",
        "audioVoiceLang": "fr-FR",
        "options": [
          "aux (à les -> aux)",
          "des",
          "pour",
          "vers"
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
          "Monsieur le Professeur / Madame la Professeure",
          "Salut cher prof",
          "Hé toi",
          "Mon cher ami"
        ],
        "correctAnswerIndex": 0,
        "explanation": "L'adresse formelle 'Monsieur le Professeur' ou 'Madame la Professeure' respecte les usages universitaires."
      },
      {
        "id": "q-fr-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quel document officiel atteste de l'inscription administrative d'un étudiant ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Le certificat de scolarité",
          "Le permis de conduire",
          "La carte de fidélité",
          "Le ticket de caisse"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le certificat de scolarité prouve l'inscription administrative régulière dans l'établissement."
      },
      {
        "id": "q-fr-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que désignent les crédits ECTS dans le système européen LMD ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Crédits d'évaluation semestriels (30 ECTS par semestre / 60 par an)",
          "Points de réduction pour le restaurant",
          "Crédits téléphoniques",
          "Heures de sport"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Les crédits ECTS (European Credit Transfer System) mesurent le volume de travail requis."
      },
      {
        "id": "q-fr-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quelle est la différence fondamentale entre un CM (Cours Magistral) et un TD (Travaux Dirigés) ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Le CM a lieu en amphithéâtre pour la théorie, le TD en petit groupe pour les exercices pratiques",
          "Le CM est réservé aux vacances",
          "Le TD est un cours de sport",
          "Il n'y a aucune différence"
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
          "Centre Régional des Œuvres Universitaires et Scolaires (résidences et Restos U)",
          "Club de Randonnée et d'Orientation Universitaire",
          "Comité de Recherche d'Ouvrages Spécialisés",
          "Centre de Réparation d'Outils Numériques"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le CROUS gère les logements universitaires, la restauration étudiante et les bourses sur critères sociaux."
      },
      {
        "id": "q-fr-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Le terme 'soutenance de mémoire' correspond à :",
        "audioVoiceLang": "fr-FR",
        "options": [
          "L'épreuve orale publique de présentation et de défense des conclusions de la recherche",
          "Un examen médical annuel",
          "Une fête de fin d'année",
          "L'achat de matériel de laboratoire"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La soutenance est l'évaluation orale terminale devant un jury académique."
      },
      {
        "id": "q-fr-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Que signifie l'aide 'APL' accordée par la CAF aux étudiants louant un logement ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "Aide Personnalisée au Logement (allocation financière réduisant le loyer mensuel)",
          "Assurance Prévoyance Logement",
          "Abonnement Pour Livres",
          "Allocation Pour Loisirs"
        ],
        "correctAnswerIndex": 0,
        "explanation": "L'APL est une prestation de la Caisse d'Allocations Familiales qui diminue le montant du loyer."
      },
      {
        "id": "q-fr-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Quelle note minimale sur 20 est traditionnellement requise pour valider une unité d'enseignement (UE) ?",
        "audioVoiceLang": "fr-FR",
        "options": [
          "10 sur 20 (la moyenne)",
          "5 sur 20",
          "18 sur 20",
          "15 sur 20"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La note de 10/20 représente le seuil de validation d'un module ou d'un semestre."
      },
      {
        "id": "q-fr-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Présentez votre projet de recherche universitaire et sa problématique centrale.",
        "sampleAnswer": "Le projet doit exposer l'état de l'art, la question de recherche directrice (problématique), la méthodologie envisagée et les retombées attendues.",
        "keywords": [
          "problématique",
          "méthodologie",
          "recherche",
          "objectifs"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Expliquez la méthodologie de la dissertation française avec un plan en deux ou trois parties.",
        "sampleAnswer": "La dissertation exige une introduction rigoureuse (accroche, définition, problématique, annonce du plan), un développement équilibré et une conclusion.",
        "keywords": [
          "introduction",
          "plan",
          "problématique",
          "conclusion"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Pourquoi avez-vous postulé à une formation universitaire en France via Campus France ?",
        "sampleAnswer": "Pour la renommée académique, la rigueur méthodologique, l'accès aux grands laboratoires et le rayonnement de la francophonie scientifique.",
        "keywords": [
          "Campus_France",
          "excellence",
          "laboratoire",
          "coopération"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Décrivez les démarches de validation du titre de séjour étudiant (OFII / ANEF).",
        "sampleAnswer": "L'étudiant doit valider son VLS-TS en ligne sur le portail ANEF dans les trois mois suivant son arrivée en France en payant la taxe de séjour.",
        "keywords": [
          "ANEF",
          "OFII",
          "titre_de_séjour",
          "validation"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Comment structurez-vous une revue de littérature académique rigoureuse ?",
        "sampleAnswer": "En regroupant les publications majeures par axes thématiques, en identifiant les controverses théoriques et en mettant en relief le vide scientifique comblé.",
        "keywords": [
          "revue",
          "littérature",
          "état_de_l'art",
          "théorie"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "En quoi le système LMD (Licence, Master, Doctorat) favorise-t-il la mobilité internationale ?",
        "sampleAnswer": "Grâce aux crédits ECTS standardisés, à la reconnaissance mutuelle des diplômes européens et à la fluidité des transferts universitaires.",
        "keywords": [
          "LMD",
          "ECTS",
          "mobilité",
          "diplôme"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Comment préparez-vous votre recherche de stage obligatoire en entreprise ou laboratoire ?",
        "sampleAnswer": "En ciblant les offres sur les plateformes spécialisées, en personnalisant CV et lettre de motivation selon les exigences de la convention de stage.",
        "keywords": [
          "stage",
          "convention",
          "laboratoire",
          "CV"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Quelle est l'importance du respect des normes bibliographiques (Zotero, APA, Vancouver) ?",
        "sampleAnswer": "Elles garantissent l'honnêteté intellectuelle, permettent la traçabilité des sources et évitent toute accusation de plagiat académique.",
        "keywords": [
          "normes",
          "bibliographie",
          "plagiat",
          "rigueur"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Décrivez les étapes d'une candidature à la bourse d'excellence Eiffel.",
        "sampleAnswer": "La candidature est présentée directement par l'établissement d'accueil français sélectionné, après évaluation du dossier académique d'excellence.",
        "keywords": [
          "bourse_Eiffel",
          "excellence",
          "dossier",
          "ministère"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Quel impact professionnel envisagez-vous à votre retour en Indonésie ?",
        "sampleAnswer": "Mettre à profit l'expertise acquise pour enseigner dans l'enseignement supérieur, diriger des projets d'innovation et renforcer les liens franco-indonésiens.",
        "keywords": [
          "Indonésie",
          "expertise",
          "développement",
          "partenariat"
        ],
        "explanation": "Évaluation de la maturité méthodologique et de la rigueur académique française."
      },
      {
        "id": "q-fr-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan janji temu: 'Saya ingin memohon janji temu untuk mendiskusikan perkembangan tugas akhir saya'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "Je souhaite",
          "solliciter un rendez-vous",
          "pour faire le point",
          "sur mon mémoire"
        ],
        "correctOrder": [
          "Je souhaite",
          "solliciter un rendez-vous",
          "pour faire le point",
          "sur mon mémoire"
        ],
        "explanation": "Ordre syntaxique formel : Sujet (Je souhaite) + Verbe/Objet (solliciter un rendez-vous) + But (pour faire le point sur mon mémoire)."
      },
      {
        "id": "q-fr-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat validasi ECTS: 'Mahasiswa harus menyelesaikan enam puluh kredit per tahun ajaran'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "Les étudiants doivent",
          "valider soixante crédits",
          "par année universitaire"
        ],
        "correctOrder": [
          "Les étudiants doivent",
          "valider soixante crédits",
          "par année universitaire"
        ],
        "explanation": "Ordre réglementaire : Sujet modal (Les étudiants doivent) + Verbe d'évaluation (valider soixante crédits) + Cadre temporel (par année universitaire)."
      },
      {
        "id": "q-fr-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat pendekatan ilmiah: 'Proyek penelitian ini sepenuhnya mengikuti kaidah ilmiah yang ketat'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "Ce projet de recherche",
          "respecte scrupuleusement",
          "la démarche scientifique"
        ],
        "correctOrder": [
          "Ce projet de recherche",
          "respecte scrupuleusement",
          "la démarche scientifique"
        ],
        "explanation": "Ordre académique : Sujet (Ce projet de recherche) + Adverbe/Verbe (respecte scrupuleusement) + Complément d'objet (la démarche scientifique)."
      },
      {
        "id": "q-fr-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan kampus menawarkan akses ke jurnal ilmiah internasional'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "La bibliothèque universitaire",
          "propose un accès",
          "aux revues scientifiques internationales"
        ],
        "correctOrder": [
          "La bibliothèque universitaire",
          "propose un accès",
          "aux revues scientifiques internationales"
        ],
        "explanation": "Ordre : Sujet (La bibliothèque universitaire) + Verbe/Objet (propose un accès) + Destinataire (aux revues scientifiques internationales)."
      },
      {
        "id": "q-fr-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat sidang kelulusan: 'Sidang presentasi tesis magister akan berlangsung pada bulan Juni di hadapan juri'",
        "audioVoiceLang": "fr-FR",
        "scrambledWords": [
          "La soutenance du mémoire",
          "aura lieu en juin",
          "devant le jury académique"
        ],
        "correctOrder": [
          "La soutenance du mémoire",
          "aura lieu en juin",
          "devant le jury académique"
        ],
        "explanation": "Ordre événementiel : Sujet (La soutenance du mémoire) + Verbe/Temps (aura lieu en juin) + Circonstance (devant le jury académique)."
      },
      {
        "id": "q-fr-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Directeur de recherche (directeur de thèse)'",
        "sampleAnswer": "Dosen Pembimbing Penelitian / Disertasi",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'Directeur de recherche (directeur de thèse)' adalah padanan untuk 'Dosen Pembimbing Penelitian / Disertasi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Relevé de notes officiel (bulletin)'",
        "sampleAnswer": "Transkrip Nilai Akademik Resmi",
        "keywords": [
          "transkrip",
          "kuliah"
        ],
        "explanation": "Istilah 'Relevé de notes officiel (bulletin)' adalah padanan untuk 'Transkrip Nilai Akademik Resmi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Resto U (Restaurant Universitaire)'",
        "sampleAnswer": "Kantin Universitas Bersubsidi CROUS",
        "keywords": [
          "kantin",
          "kuliah"
        ],
        "explanation": "Istilah 'Resto U (Restaurant Universitaire)' adalah padanan untuk 'Kantin Universitas Bersubsidi CROUS' di universitas Prancis."
      },
      {
        "id": "q-fr-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Emploi du temps (planning des cours)'",
        "sampleAnswer": "Jadwal Perkuliahan Mingguan",
        "keywords": [
          "jadwal",
          "kuliah"
        ],
        "explanation": "Istilah 'Emploi du temps (planning des cours)' adalah padanan untuk 'Jadwal Perkuliahan Mingguan' di universitas Prancis."
      },
      {
        "id": "q-fr-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Année de césure (gap year)'",
        "sampleAnswer": "Cuti Akademik / Tahun Jeda Kuliah",
        "keywords": [
          "cuti",
          "kuliah"
        ],
        "explanation": "Istilah 'Année de césure (gap year)' adalah padanan untuk 'Cuti Akademik / Tahun Jeda Kuliah' di universitas Prancis."
      },
      {
        "id": "q-fr-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Convention de stage tripartite'",
        "sampleAnswer": "Surat Perjanjian Magang Resmi",
        "keywords": [
          "surat",
          "kuliah"
        ],
        "explanation": "Istilah 'Convention de stage tripartite' adalah padanan untuk 'Surat Perjanjian Magang Resmi' di universitas Prancis."
      },
      {
        "id": "q-fr-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Mention très bien (avec félicitations)'",
        "sampleAnswer": "Predikat Sangat Memuaskan / Cum Laude",
        "keywords": [
          "predikat",
          "kuliah"
        ],
        "explanation": "Istilah 'Mention très bien (avec félicitations)' adalah padanan untuk 'Predikat Sangat Memuaskan / Cum Laude' di universitas Prancis."
      },
      {
        "id": "q-fr-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Amphithéâtre (amphi)'",
        "sampleAnswer": "Ruang Kuliah Teater / Auditorium",
        "keywords": [
          "ruang",
          "kuliah"
        ],
        "explanation": "Istilah 'Amphithéâtre (amphi)' adalah padanan untuk 'Ruang Kuliah Teater / Auditorium' di universitas Prancis."
      },
      {
        "id": "q-fr-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Droits d'inscription universitaire'",
        "sampleAnswer": "Biaya Pendaftaran / SPP Universitas",
        "keywords": [
          "biaya",
          "kuliah"
        ],
        "explanation": "Istilah 'Droits d'inscription universitaire' adalah padanan untuk 'Biaya Pendaftaran / SPP Universitas' di universitas Prancis."
      },
      {
        "id": "q-fr-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Prancis berikut ke dalam bahasa Indonesia: 'Titre de séjour étudiant (VLS-TS)'",
        "sampleAnswer": "Kartu Izin Tinggal Pelajar Asing",
        "keywords": [
          "kartu",
          "kuliah"
        ],
        "explanation": "Istilah 'Titre de séjour étudiant (VLS-TS)' adalah padanan untuk 'Kartu Izin Tinggal Pelajar Asing' di universitas Prancis."
      },
      {
        "id": "q-fr-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Skala penilaian akademik yang digunakan secara seragam di seluruh universitas Prancis adalah:",
        "options": [
          "Skala nilai 0 sampai 20 (dengan 10 sebagai batas kelulusan)",
          "Skala 0 sampai 4.00",
          "Skala huruf A sampai F",
          "Skala 0 sampai 100 persen"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le système universitaire français note traditionnellement sur 20 points."
      },
      {
        "id": "q-fr-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas jam kerja sampingan berupah yang diizinkan untuk mahasiswa asing pemegang visa VLS-TS di Prancis?",
        "options": [
          "Maksimal 60% dari durasi jam kerja legal tahunan (yaitu 964 jam per tahun)",
          "Bebas tanpa batasan jam kerja",
          "Hanya 5 jam per minggu",
          "Dilarang bekerja sama sekali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La législation française autorise les étudiants étrangers à travailler jusqu'à 964 heures par an."
      },
      {
        "id": "q-fr-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa perbedaan antara Grandes Écoles dan Universités publiques di Prancis?",
        "options": [
          "Grandes Écoles adalah institusi selektif bergengsi dengan ujian masuk ketat (concours), sedangkan Universités memiliki akses terbuka untuk pemegang baccalauréat",
          "Universités hanya mengajarkan seni",
          "Grandes Écoles adalah sekolah menengah",
          "Tidak ada perbedaan kurikulum"
        ],
        "correctAnswerIndex": 0,
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
          "Mention Très Bien",
          "Mention Passable",
          "Mention Assez Bien",
          "Mention Éliminatoire"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La mention Très Bien est décernée pour une moyenne égale ou supérieure à 16/20."
      },
      {
        "id": "q-fr-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi platform resmi 'Campus France' bagi calon mahasiswa internasional?",
        "options": [
          "Memproses pendaftaran aplikasi studi, verifikasi dokumen, dan wawancara visa pelajar",
          "Menjual tiket penerbangan",
          "Menyewakan apartemen mewah",
          "Memberikan pinjaman bank"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Campus France est l'agence publique chargée de promouvoir l'enseignement supérieur français."
      },
      {
        "id": "q-fr-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Kapan tahun akademik perkuliahan (rentrée universitaire) biasanya dimulai di Prancis?",
        "options": [
          "Bulan September atau awal Oktober",
          "Bulan Januari",
          "Bulan April",
          "Bulan Juli"
        ],
        "correctAnswerIndex": 0,
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
          "Ya, berhak mendaftar di Sécurité Sociale (l'Assurance Maladie) secara gratis",
          "Tidak, harus membayar 5.000 euro per bulan",
          "Hanya untuk warga negara Uni Eropa",
          "Hanya berlaku jika dirawat di rumah sakit swasta"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Les étudiants internationaux bénéficient de la gratuité de la Sécurité Sociale française."
      },
      {
        "id": "q-fr-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan istilah 'Partiels' dalam kalender akademik universitas Prancis?",
        "options": [
          "Ujian semester berkala (tengah semester / akhir semester)",
          "Pesta perkenalan mahasiswa",
          "Liburan akhir pekan",
          "Jadwal senam pagi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Les partiels sont les sessions d'examens semestriels écrits ou oraux."
      },
      {
        "id": "q-fr-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti kata 'Rattrapage' jika seorang mahasiswa belum mencapai nilai 10/20 di ujian pertama?",
        "options": [
          "Sesi ujian perbaikan / remedial kedua untuk memperbaiki nilai",
          "Pengusiran dari kampus",
          "Pengulangan satu tahun penuh",
          "Pembayaran denda tunai"
        ],
        "correctAnswerIndex": 0,
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
          "Licence (3 ans - 180 ECTS), Master (2 ans - 120 ECTS), Doctorat (3 ans - 180 ECTS)",
          "Tiap jenjang memakan waktu 1 tahun",
          "Licence 5 tahun dan Master 5 tahun",
          "Tidak mengenal jenjang berjenjang"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le système LMD est structuré en 3 niveaux d'études supérieures successifs."
      },
      {
        "id": "q-fr-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kepanjangan dari 'TGV' dan bagaimana relevansinya bagi mobilitas mahasiswa antar kota di Prancis?",
        "options": [
          "Train à Grande Vitesse, dengan kartu diskon Carte Avantage Jeune untuk tarif hemat mahasiswa",
          "Transport Général de Ville",
          "Taxi Grand Volume",
          "Téléphérique Gare Voyager"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Le TGV permet des liaisons ultra-rapides à travers la France avec des tarifs avantageux pour les jeunes."
      },
      {
        "id": "q-fr-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Sebelum menyerahkan laporan magang (rapport de stage), dokumen pengesahan apa yang harus ditandatangani perusahaan dan kampus?",
        "options": [
          "L'attestation de stage et la fiche d'évaluation du tuteur d'entreprise",
          "Kwitansi gaji bulanan",
          "Kartu nama direktur",
          "Foto bersama rekan kerja"
        ],
        "correctAnswerIndex": 0,
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
          "om (... te)",
          "want",
          "omdat",
          "hoewel"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De constructie 'om + te + infinitief' drukt een doel uit: 'om het tentamen te halen'."
      },
      {
        "id": "q-nl-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Hoe noemt men het officiële overzicht met alle behaalde studieresultaten en studiepunten?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "De cijferlijst (Transcript of Records)",
          "Het lesrooster",
          "Het huurcontract",
          "De collegekaart"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Een cijferlijst geeft een officieel overzicht van vakken, cijfers en behaalde ECTS-punten."
      },
      {
        "id": "q-nl-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat is het verschil tussen een 'hoorcollege' en een 'werkcollege' in het Nederlands hoger onderwijs?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Hoorcollege is een klassikale uiteenzetting in de aula; werkcollege is een interactieve oefengroep",
          "Hoorcollege is online; werkcollege is vakantie",
          "Werkcollege is uitsluitend sport",
          "Er is geen enkel verschil"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tijdens een hoorcollege luisteren studenten naar de docent; in een werkcollege lossen zij actief casussen op."
      },
      {
        "id": "q-nl-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat betekent de afkorting 'BSN' voor een internationale student in Nederland?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Burgerservicenummer (uniek identificatienummer voor bank, belasting en zorg)",
          "Basis Studie Nummer",
          "Bibliotheek Service Nederland",
          "Buitenlands Studenten Netwerk"
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
          "Het adviseren en begeleiden van studenten bij studieplanning, vakkenkeuze en persoonlijke knelpunten",
          "Het verkopen van studieboeken",
          "Het koken van maaltijden in de kantine",
          "Het onderhouden van computers"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De studieadviseur helpt bij studievoortgang, studievertraging en regels van de examencommissie."
      },
      {
        "id": "q-nl-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat is het 'zoekjaar' (Orientation Year) voor afgestudeerden in Nederland?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Een verblijfsvergunning van één jaar om een baan als kennismigrant te zoeken na het afstuderen",
          "Een jaar verplichte militaire dienst",
          "Een jaar gratis vakantie",
          "Een jaar wachten op het diploma"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Het zoekjaar biedt hoogopgeleide buitenlandse afgestudeerden de kans om werk te vinden in Nederland."
      },
      {
        "id": "q-nl-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat betekent 'een voldoende halen' in het Nederlandse beoordelingssysteem (schaal 1-10)?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Minimaal een 5,5 of 6,0 behalen om te slagen voor het vak",
          "Een cijfer 1 behalen",
          "Een 10 met lof scoren",
          "Alleen aanwezig zijn in de les"
        ],
        "correctAnswerIndex": 0,
        "explanation": "In het Nederlandse cijfersysteem geldt 5,5 (vaak afgerond naar 6) als de minimale voldoende grens."
      },
      {
        "id": "q-nl-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat houdt 'plagiaat' in volgens de academische gedragscode?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Het overnemen van andermans ideeën, data of teksten zonder correcte bronvermelding",
          "Te laat komen voor een college",
          "Het lenen van een pen van een studiegenoot",
          "Het schrijven in het Engels"
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
          "Dienst Uitvoering Onderwijs (verantwoordelijk voor examens, studiesubsidies en erkenning)",
          "Digitale Universiteit Online",
          "Directie Universitaire Opleidingen",
          "Dienst Uitwisseling Onderzoekers"
        ],
        "correctAnswerIndex": 0,
        "explanation": "DUO voert onderwijswetten uit namens het ministerie van Onderwijs, Cultuur en Wetenschap."
      }
    ]
  },
  "nl-2": {
    "id": "test-nl-2",
    "title": "Bagian 2: Esai Rencana Studi & Analisis Konseptual Belanda (10 Soal Essai)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Belanda.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-nl-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Beschrijf uw onderzoeksplan voor de masterscriptie en de maatschappelijke relevantie ervan.",
        "sampleAnswer": "Het voorstel dient een duidelijke probleemstelling, theoretisch kader, methodologische opzet en maatschappelijke impact te bevatten.",
        "keywords": [
          "onderzoek",
          "relevantie",
          "methodologie",
          "probleemstelling"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Hoe gaat u om met de Nederlandse directe communicatiestijl tijdens academische bijeenkomsten?",
        "sampleAnswer": "Door open te staan voor kritische vragen, argumenten feitelijk te onderbouwen en feedback als professionele groei te beschouwen.",
        "keywords": [
          "directheid",
          "communicatie",
          "feedback",
          "argument"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Waarom koos u voor een academische opleiding in Nederland via het NL Scholarship?",
        "sampleAnswer": "Vanwege het hoogwaardige interactieve onderwijs, sterke internationale netwerken en innovatieve onderzoeksfaciliteiten.",
        "keywords": [
          "NL_Scholarship",
          "kwaliteit",
          "innovatie",
          "netwerk"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Leg de procedure uit voor de aanvraag van een verblijfsvergunning via de IND.",
        "sampleAnswer": "De universiteit start de aanvraag bij de IND nadat de student bewijs van financiële draagkracht en toelating heeft geleverd.",
        "keywords": [
          "IND",
          "verblijfsvergunning",
          "financiering",
          "aanvraag"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Wat zijn de voordelen van het Probleemgestuurd Onderwijs (PGO / PBL) aan Nederlandse universiteiten?",
        "sampleAnswer": "Studenten leren zelfstandig complexe vraagstukken analyseren, samenwerken in kleine teams en kennis praktisch toepassen.",
        "keywords": [
          "PGO",
          "PBL",
          "zelfstandigheid",
          "samenwerking"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Hoe bereidt u een wetenschappelijke presentatie voor tijdens een colloquium?",
        "sampleAnswer": "Door de kernboodschap visueel te structureren, complexe data helder uit te leggen en de tijdslimiet strikt te respecteren.",
        "keywords": [
          "presentatie",
          "colloquium",
          "helderheid",
          "tijdbeheer"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Welke stappen onderneemt u bij het vinden van geschikte studentenhuisvesting (kamer)?",
        "sampleAnswer": "Tijdig inschrijven bij studentenhuisvesters (zoals DUWO, SSH), netwerken via universitaire platforms en waakzaam zijn voor fraude.",
        "keywords": [
          "huisvesting",
          "kamer",
          "inschrijving",
          "DUWO"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Waarom is academische integriteit en collegiale toetsing (peer-review) cruciaal in onderzoek?",
        "sampleAnswer": "Zij waarborgen de reproduceerbaarheid van resultaten, methodologische betrouwbaarheid en het publieke vertrouwen in de wetenschap.",
        "keywords": [
          "integriteit",
          "peer_review",
          "betrouwbaarheid",
          "ethiek"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Beschrijf hoe uw studie bijdraagt aan de bilaterale samenwerking tussen Indonesië en Nederland.",
        "sampleAnswer": "Door gezamenlijke projecten te initiëren op het gebied van waterbeheer, duurzame landbouw, maritieme logistiek of cultureel erfgoed.",
        "keywords": [
          "bilateraal",
          "Indonesië",
          "Nederland",
          "samenwerking"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Wat zijn uw plannen voor het benutten van het zoekjaar na afstuderen?",
        "sampleAnswer": "Werkervaring opdoen bij toonaangevende onderzoeksinstellingen of innovatieve technologiebedrijven als kennismigrant.",
        "keywords": [
          "zoekjaar",
          "ervaring",
          "kennismigrant",
          "carrière"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
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
          "Ik wil graag",
          "een afspraak maken",
          "met de professor",
          "over mijn onderzoek"
        ],
        "correctOrder": [
          "Ik wil graag",
          "een afspraak maken",
          "met de professor",
          "over mijn onderzoek"
        ],
        "explanation": "Vaste volgorde: Modale constructie (Ik wil graag) + Infinitiefgroep (een afspraak maken) + Gesprekspartner (met de professor) + Onderwerp (over mijn onderzoek)."
      },
      {
        "id": "q-nl-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beban studi: 'Mahasiswa harus memperoleh enam puluh kredit ECTS setiap tahun akademik'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "Studenten moeten",
          "zestig studiepunten",
          "per collegejaar",
          "behalen"
        ],
        "correctOrder": [
          "Studenten moeten",
          "zestig studiepunten",
          "per collegejaar",
          "behalen"
        ],
        "explanation": "Reglementaire volgorde: Modale bepaling (Studenten moeten) + Object (zestig studiepunten) + Tijdskader (per collegejaar) + Hoofdwerkwoord (behalen)."
      },
      {
        "id": "q-nl-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat nilai akademis: 'Universitas Belanda mendorong pemikiran mandiri dan kritis pada setiap mahasiswa'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "Nederlandse universiteiten",
          "stimuleren zelfstandig",
          "en kritisch denken",
          "bij studenten"
        ],
        "correctOrder": [
          "Nederlandse universiteiten",
          "stimuleren zelfstandig",
          "en kritisch denken",
          "bij studenten"
        ],
        "explanation": "Academische volgorde: Onderwerp (Nederlandse universiteiten) + Werkwoord (stimuleren) + Doel/Kwaliteit (zelfstandig en kritisch denken) + Doelgroep (bij studenten)."
      },
      {
        "id": "q-nl-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat persetujuan komite: 'Proposal penelitian telah disetujui secara resmi oleh komite ujian'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "Het onderzoeksvoorstel is",
          "officieel goedgekeurd",
          "door de examencommissie"
        ],
        "correctOrder": [
          "Het onderzoeksvoorstel is",
          "officieel goedgekeurd",
          "door de examencommissie"
        ],
        "explanation": "Passieve volgorde: Onderwerp (Het onderzoeksvoorstel is) + Bepaling van wijze (officieel goedgekeurd) + Handelende instantie (door de examencommissie)."
      },
      {
        "id": "q-nl-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat bimbingan: 'Dosen pembimbing skripsi memberikan masukan yang sangat berharga atas naskah draft'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "De scriptiebegeleider geeft",
          "waardevolle feedback",
          "op het conceptverslag"
        ],
        "correctOrder": [
          "De scriptiebegeleider geeft",
          "waardevolle feedback",
          "op het conceptverslag"
        ],
        "explanation": "Urutan: Onderwerp/Werkwoord (De scriptiebegeleider geeft) + Lijdend voorwerp (waardevolle feedback) + Voorzetselvoorwerp (op het conceptverslag)."
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
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Afstudeerbegeleider (promotor / scriptiebegeleider)'",
        "sampleAnswer": "Dosen Pembimbing Skripsi / Tesis / Promotor",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'Afstudeerbegeleider (promotor / scriptiebegeleider)' adalah padanan untuk 'Dosen Pembimbing Skripsi / Tesis / Promotor' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Tentamen (deeltentamen / hertentamen)'",
        "sampleAnswer": "Ujian Tertulis Resmi (Ujian Semester / Remedial)",
        "keywords": [
          "ujian",
          "kuliah"
        ],
        "explanation": "Istilah 'Tentamen (deeltentamen / hertentamen)' adalah padanan untuk 'Ujian Tertulis Resmi (Ujian Semester / Remedial)' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Studielast (in European Credits / ECTS)'",
        "sampleAnswer": "Beban Studi Akademik (SKS Eropa)",
        "keywords": [
          "beban",
          "kuliah"
        ],
        "explanation": "Istilah 'Studielast (in European Credits / ECTS)' adalah padanan untuk 'Beban Studi Akademik (SKS Eropa)' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Collegegeld (wettelijk / instellingstarief)'",
        "sampleAnswer": "Uang Kuliah Tunggal / Biaya Pendidikan Tahunan",
        "keywords": [
          "uang",
          "kuliah"
        ],
        "explanation": "Istilah 'Collegegeld (wettelijk / instellingstarief)' adalah padanan untuk 'Uang Kuliah Tunggal / Biaya Pendidikan Tahunan' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Kamernood (woningtekort voor studenten)'",
        "sampleAnswer": "Krisis Ketersediaan Tempat Tinggal Mahasiswa",
        "keywords": [
          "krisis",
          "kuliah"
        ],
        "explanation": "Istilah 'Kamernood (woningtekort voor studenten)' adalah padanan untuk 'Krisis Ketersediaan Tempat Tinggal Mahasiswa' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Examencommissie van de opleiding'",
        "sampleAnswer": "Komite Dewan Penguji Akademik Program Studi",
        "keywords": [
          "komite",
          "kuliah"
        ],
        "explanation": "Istilah 'Examencommissie van de opleiding' adalah padanan untuk 'Komite Dewan Penguji Akademik Program Studi' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Cum laude afstuderen (met lof)'",
        "sampleAnswer": "Lulus dengan Predikat Pujian / Cum Laude",
        "keywords": [
          "lulus",
          "kuliah"
        ],
        "explanation": "Istilah 'Cum laude afstuderen (met lof)' adalah padanan untuk 'Lulus dengan Predikat Pujian / Cum Laude' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Bewijs van inschrijving aan de universiteit'",
        "sampleAnswer": "Surat Keterangan Registrasi Mahasiswa Aktif",
        "keywords": [
          "surat",
          "kuliah"
        ],
        "explanation": "Istilah 'Bewijs van inschrijving aan de universiteit' adalah padanan untuk 'Surat Keterangan Registrasi Mahasiswa Aktif' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Vrijstelling voor een studieonderdeel'",
        "sampleAnswer": "Dispensasi Pembebasan Mata Kuliah",
        "keywords": [
          "dispensasi",
          "kuliah"
        ],
        "explanation": "Istilah 'Vrijstelling voor een studieonderdeel' adalah padanan untuk 'Dispensasi Pembebasan Mata Kuliah' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Kennismigrantenregeling (kennismigrant)'",
        "sampleAnswer": "Skema Izin Tinggal Pekerja Migran Terampil",
        "keywords": [
          "skema",
          "kuliah"
        ],
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
          "Rata-rata nilai minimal 8,0 tanpa ada nilai di bawah 7,0 dan tanpa remedial",
          "Rata-rata 6,0",
          "Rata-rata 10,0 mutlak",
          "Hanya memerlukan kehadiran penuh"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Voor het judicium 'cum laude' is doorgaans een gewogen gemiddelde van minimaal een 8,0 vereist."
      },
      {
        "id": "q-nl-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan sistem 'BSA' (Bindend Studieadvies) di tahun pertama sarjana (Bachelor) di Belanda?",
        "options": [
          "Anjuran studi mengikat: mahasiswa wajib mengumpulkan minimal kredit tertentu (misal 45 dari 60 ECTS) agar tidak di-drop out",
          "Saran memilih pakaian",
          "Rekomendasi beasiswa",
          "Jadwal libur semester"
        ],
        "correctAnswerIndex": 0,
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
          "Maksimal 16 jam per minggu selama masa kuliah atau penuh waktu hanya di musim panas (Juni-Agustus)",
          "Bebas hingga 40 jam setiap minggu",
          "Dilarang bekerja sama sekali",
          "Hanya boleh bekerja di akhir pekan 2 jam"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Niet-EU studenten mogen maximaal 16 uur per week werken (met tewerkstellingsvergunning TWV)."
      },
      {
        "id": "q-nl-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'IND' (Immigratie- en Naturalisatiedienst) bagi mahasiswa asing di Belanda?",
        "options": [
          "Badan imigrasi pemerintah yang memproses penerbitan izin tinggal pelajar (verblijfsvergunning)",
          "Kementerian Luar Negeri",
          "Kantor polisi lalu lintas",
          "Pengelola museum nasional"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De IND behandelt aanvragen voor verblijfsvergunningen in Nederland."
      },
      {
        "id": "q-nl-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Mengapa mahasiswa disarankan mencari akomodasi (kamer) berbulan-bulan sebelum perkuliahan dimulai di Belanda?",
        "options": [
          "Karena terjadi krisis perumahan mahasiswa parah (kamernood) di seluruh kota besar Belanda",
          "Karena kampus tidak memiliki gerbang",
          "Karena kamar harus dicat sendiri",
          "Karena cuaca sangat dingin"
        ],
        "correctAnswerIndex": 0,
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
          "Bersepeda merupakan moda transportasi utama dan paling lazim digunakan setiap hari oleh mahasiswa dan dosen",
          "Olahraga balap profesional",
          "Kendaraan khusus akhir pekan",
          "Hanya dipakai saat cuaca cerah"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De fiets is het meest gebruikte vervoermiddel onder studenten in Nederland."
      },
      {
        "id": "q-nl-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa istilah untuk ujian perbaikan / remedial jika nilai ujian pertama di bawah standar kelulusan?",
        "options": [
          "Hertentamen (herkansing)",
          "Afstuderen",
          "Colloquium",
          "Inschrijving"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Een herkansing of hertentamen biedt een tweede kans om een onvoldoende op te halen."
      },
      {
        "id": "q-nl-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi sistem 'Canvas' atau 'Brightspace' yang digunakan di hampir semua universitas Belanda?",
        "options": [
          "Sistem manajemen pembelajaran daring (LMS) untuk mengunduh materi kuliah, tugas, dan nilai",
          "Situs jejaring sosial hiburan",
          "Aplikasi pemesanan tiket kereta",
          "Pusat game online"
        ],
        "correctAnswerIndex": 0,
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
          "Kode etik integritas ilmiah yang melarang fabrikasi data, pemalsuan, dan plagiarisme dalam riset",
          "Surat izin bepergian ke luar negeri",
          "Kartu anggota asosiasi olahraga",
          "Surat perjanjian sewa sepeda"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De Nederlandse Gedragscode Wetenschappelijke Integriteit regelt eerlijk en zorgvuldig onderzoek."
      },
      {
        "id": "q-nl-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti istilah 'Korting' yang sering dilihat mahasiswa saat berbelanja di Belanda?",
        "options": [
          "Potongan harga / diskon",
          "Pajak tambahan",
          "Biaya masuk",
          "Denda parkir"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'Korting' betekent prijsverlaging of reductie op artikelen."
      },
      {
        "id": "q-nl-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa ingin mendaftar ke dokter umum di lingkungan tempat tinggalnya, ia harus mencari:",
        "options": [
          "Een Huisarts (dokter keluarga/umum)",
          "Direct naar het Academisch Ziekenhuis",
          "Apotheek",
          "Gemeentehuis"
        ],
        "correctAnswerIndex": 0,
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
          "om (... te)",
          "want",
          "omdat",
          "hoewel"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De constructie 'om + te + infinitief' drukt een doel uit: 'om het tentamen te halen'."
      },
      {
        "id": "q-nl-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Hoe noemt men het officiële overzicht met alle behaalde studieresultaten en studiepunten?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "De cijferlijst (Transcript of Records)",
          "Het lesrooster",
          "Het huurcontract",
          "De collegekaart"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Een cijferlijst geeft een officieel overzicht van vakken, cijfers en behaalde ECTS-punten."
      },
      {
        "id": "q-nl-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat is het verschil tussen een 'hoorcollege' en een 'werkcollege' in het Nederlands hoger onderwijs?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Hoorcollege is een klassikale uiteenzetting in de aula; werkcollege is een interactieve oefengroep",
          "Hoorcollege is online; werkcollege is vakantie",
          "Werkcollege is uitsluitend sport",
          "Er is geen enkel verschil"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tijdens een hoorcollege luisteren studenten naar de docent; in een werkcollege lossen zij actief casussen op."
      },
      {
        "id": "q-nl-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat betekent de afkorting 'BSN' voor een internationale student in Nederland?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Burgerservicenummer (uniek identificatienummer voor bank, belasting en zorg)",
          "Basis Studie Nummer",
          "Bibliotheek Service Nederland",
          "Buitenlands Studenten Netwerk"
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
          "Het adviseren en begeleiden van studenten bij studieplanning, vakkenkeuze en persoonlijke knelpunten",
          "Het verkopen van studieboeken",
          "Het koken van maaltijden in de kantine",
          "Het onderhouden van computers"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De studieadviseur helpt bij studievoortgang, studievertraging en regels van de examencommissie."
      },
      {
        "id": "q-nl-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat is het 'zoekjaar' (Orientation Year) voor afgestudeerden in Nederland?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Een verblijfsvergunning van één jaar om een baan als kennismigrant te zoeken na het afstuderen",
          "Een jaar verplichte militaire dienst",
          "Een jaar gratis vakantie",
          "Een jaar wachten op het diploma"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Het zoekjaar biedt hoogopgeleide buitenlandse afgestudeerden de kans om werk te vinden in Nederland."
      },
      {
        "id": "q-nl-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat betekent 'een voldoende halen' in het Nederlandse beoordelingssysteem (schaal 1-10)?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Minimaal een 5,5 of 6,0 behalen om te slagen voor het vak",
          "Een cijfer 1 behalen",
          "Een 10 met lof scoren",
          "Alleen aanwezig zijn in de les"
        ],
        "correctAnswerIndex": 0,
        "explanation": "In het Nederlandse cijfersysteem geldt 5,5 (vaak afgerond naar 6) als de minimale voldoende grens."
      },
      {
        "id": "q-nl-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wat houdt 'plagiaat' in volgens de academische gedragscode?",
        "audioVoiceLang": "nl-NL",
        "options": [
          "Het overnemen van andermans ideeën, data of teksten zonder correcte bronvermelding",
          "Te laat komen voor een college",
          "Het lenen van een pen van een studiegenoot",
          "Het schrijven in het Engels"
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
          "Dienst Uitvoering Onderwijs (verantwoordelijk voor examens, studiesubsidies en erkenning)",
          "Digitale Universiteit Online",
          "Directie Universitaire Opleidingen",
          "Dienst Uitwisseling Onderzoekers"
        ],
        "correctAnswerIndex": 0,
        "explanation": "DUO voert onderwijswetten uit namens het ministerie van Onderwijs, Cultuur en Wetenschap."
      },
      {
        "id": "q-nl-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Beschrijf uw onderzoeksplan voor de masterscriptie en de maatschappelijke relevantie ervan.",
        "sampleAnswer": "Het voorstel dient een duidelijke probleemstelling, theoretisch kader, methodologische opzet en maatschappelijke impact te bevatten.",
        "keywords": [
          "onderzoek",
          "relevantie",
          "methodologie",
          "probleemstelling"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Hoe gaat u om met de Nederlandse directe communicatiestijl tijdens academische bijeenkomsten?",
        "sampleAnswer": "Door open te staan voor kritische vragen, argumenten feitelijk te onderbouwen en feedback als professionele groei te beschouwen.",
        "keywords": [
          "directheid",
          "communicatie",
          "feedback",
          "argument"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Waarom koos u voor een academische opleiding in Nederland via het NL Scholarship?",
        "sampleAnswer": "Vanwege het hoogwaardige interactieve onderwijs, sterke internationale netwerken en innovatieve onderzoeksfaciliteiten.",
        "keywords": [
          "NL_Scholarship",
          "kwaliteit",
          "innovatie",
          "netwerk"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Leg de procedure uit voor de aanvraag van een verblijfsvergunning via de IND.",
        "sampleAnswer": "De universiteit start de aanvraag bij de IND nadat de student bewijs van financiële draagkracht en toelating heeft geleverd.",
        "keywords": [
          "IND",
          "verblijfsvergunning",
          "financiering",
          "aanvraag"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Wat zijn de voordelen van het Probleemgestuurd Onderwijs (PGO / PBL) aan Nederlandse universiteiten?",
        "sampleAnswer": "Studenten leren zelfstandig complexe vraagstukken analyseren, samenwerken in kleine teams en kennis praktisch toepassen.",
        "keywords": [
          "PGO",
          "PBL",
          "zelfstandigheid",
          "samenwerking"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Hoe bereidt u een wetenschappelijke presentatie voor tijdens een colloquium?",
        "sampleAnswer": "Door de kernboodschap visueel te structureren, complexe data helder uit te leggen en de tijdslimiet strikt te respecteren.",
        "keywords": [
          "presentatie",
          "colloquium",
          "helderheid",
          "tijdbeheer"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Welke stappen onderneemt u bij het vinden van geschikte studentenhuisvesting (kamer)?",
        "sampleAnswer": "Tijdig inschrijven bij studentenhuisvesters (zoals DUWO, SSH), netwerken via universitaire platforms en waakzaam zijn voor fraude.",
        "keywords": [
          "huisvesting",
          "kamer",
          "inschrijving",
          "DUWO"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Waarom is academische integriteit en collegiale toetsing (peer-review) cruciaal in onderzoek?",
        "sampleAnswer": "Zij waarborgen de reproduceerbaarheid van resultaten, methodologische betrouwbaarheid en het publieke vertrouwen in de wetenschap.",
        "keywords": [
          "integriteit",
          "peer_review",
          "betrouwbaarheid",
          "ethiek"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Beschrijf hoe uw studie bijdraagt aan de bilaterale samenwerking tussen Indonesië en Nederland.",
        "sampleAnswer": "Door gezamenlijke projecten te initiëren op het gebied van waterbeheer, duurzame landbouw, maritieme logistiek of cultureel erfgoed.",
        "keywords": [
          "bilateraal",
          "Indonesië",
          "Nederland",
          "samenwerking"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Wat zijn uw plannen voor het benutten van het zoekjaar na afstuderen?",
        "sampleAnswer": "Werkervaring opdoen bij toonaangevende onderzoeksinstellingen of innovatieve technologiebedrijven als kennismigrant.",
        "keywords": [
          "zoekjaar",
          "ervaring",
          "kennismigrant",
          "carrière"
        ],
        "explanation": "Evaluatie van methodologische paraatheid en kennis van het Nederlandse academische stelsel."
      },
      {
        "id": "q-nl-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat resmi membuat janji temu: 'Saya ingin membuat janji temu dengan profesor untuk mendiskusikan penelitian saya'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "Ik wil graag",
          "een afspraak maken",
          "met de professor",
          "over mijn onderzoek"
        ],
        "correctOrder": [
          "Ik wil graag",
          "een afspraak maken",
          "met de professor",
          "over mijn onderzoek"
        ],
        "explanation": "Vaste volgorde: Modale constructie (Ik wil graag) + Infinitiefgroep (een afspraak maken) + Gesprekspartner (met de professor) + Onderwerp (over mijn onderzoek)."
      },
      {
        "id": "q-nl-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beban studi: 'Mahasiswa harus memperoleh enam puluh kredit ECTS setiap tahun akademik'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "Studenten moeten",
          "zestig studiepunten",
          "per collegejaar",
          "behalen"
        ],
        "correctOrder": [
          "Studenten moeten",
          "zestig studiepunten",
          "per collegejaar",
          "behalen"
        ],
        "explanation": "Reglementaire volgorde: Modale bepaling (Studenten moeten) + Object (zestig studiepunten) + Tijdskader (per collegejaar) + Hoofdwerkwoord (behalen)."
      },
      {
        "id": "q-nl-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat nilai akademis: 'Universitas Belanda mendorong pemikiran mandiri dan kritis pada setiap mahasiswa'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "Nederlandse universiteiten",
          "stimuleren zelfstandig",
          "en kritisch denken",
          "bij studenten"
        ],
        "correctOrder": [
          "Nederlandse universiteiten",
          "stimuleren zelfstandig",
          "en kritisch denken",
          "bij studenten"
        ],
        "explanation": "Academische volgorde: Onderwerp (Nederlandse universiteiten) + Werkwoord (stimuleren) + Doel/Kwaliteit (zelfstandig en kritisch denken) + Doelgroep (bij studenten)."
      },
      {
        "id": "q-nl-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat persetujuan komite: 'Proposal penelitian telah disetujui secara resmi oleh komite ujian'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "Het onderzoeksvoorstel is",
          "officieel goedgekeurd",
          "door de examencommissie"
        ],
        "correctOrder": [
          "Het onderzoeksvoorstel is",
          "officieel goedgekeurd",
          "door de examencommissie"
        ],
        "explanation": "Passieve volgorde: Onderwerp (Het onderzoeksvoorstel is) + Bepaling van wijze (officieel goedgekeurd) + Handelende instantie (door de examencommissie)."
      },
      {
        "id": "q-nl-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat bimbingan: 'Dosen pembimbing skripsi memberikan masukan yang sangat berharga atas naskah draft'",
        "audioVoiceLang": "nl-NL",
        "scrambledWords": [
          "De scriptiebegeleider geeft",
          "waardevolle feedback",
          "op het conceptverslag"
        ],
        "correctOrder": [
          "De scriptiebegeleider geeft",
          "waardevolle feedback",
          "op het conceptverslag"
        ],
        "explanation": "Urutan: Onderwerp/Werkwoord (De scriptiebegeleider geeft) + Lijdend voorwerp (waardevolle feedback) + Voorzetselvoorwerp (op het conceptverslag)."
      },
      {
        "id": "q-nl-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Afstudeerbegeleider (promotor / scriptiebegeleider)'",
        "sampleAnswer": "Dosen Pembimbing Skripsi / Tesis / Promotor",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'Afstudeerbegeleider (promotor / scriptiebegeleider)' adalah padanan untuk 'Dosen Pembimbing Skripsi / Tesis / Promotor' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Tentamen (deeltentamen / hertentamen)'",
        "sampleAnswer": "Ujian Tertulis Resmi (Ujian Semester / Remedial)",
        "keywords": [
          "ujian",
          "kuliah"
        ],
        "explanation": "Istilah 'Tentamen (deeltentamen / hertentamen)' adalah padanan untuk 'Ujian Tertulis Resmi (Ujian Semester / Remedial)' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Studielast (in European Credits / ECTS)'",
        "sampleAnswer": "Beban Studi Akademik (SKS Eropa)",
        "keywords": [
          "beban",
          "kuliah"
        ],
        "explanation": "Istilah 'Studielast (in European Credits / ECTS)' adalah padanan untuk 'Beban Studi Akademik (SKS Eropa)' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Collegegeld (wettelijk / instellingstarief)'",
        "sampleAnswer": "Uang Kuliah Tunggal / Biaya Pendidikan Tahunan",
        "keywords": [
          "uang",
          "kuliah"
        ],
        "explanation": "Istilah 'Collegegeld (wettelijk / instellingstarief)' adalah padanan untuk 'Uang Kuliah Tunggal / Biaya Pendidikan Tahunan' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Kamernood (woningtekort voor studenten)'",
        "sampleAnswer": "Krisis Ketersediaan Tempat Tinggal Mahasiswa",
        "keywords": [
          "krisis",
          "kuliah"
        ],
        "explanation": "Istilah 'Kamernood (woningtekort voor studenten)' adalah padanan untuk 'Krisis Ketersediaan Tempat Tinggal Mahasiswa' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Examencommissie van de opleiding'",
        "sampleAnswer": "Komite Dewan Penguji Akademik Program Studi",
        "keywords": [
          "komite",
          "kuliah"
        ],
        "explanation": "Istilah 'Examencommissie van de opleiding' adalah padanan untuk 'Komite Dewan Penguji Akademik Program Studi' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Cum laude afstuderen (met lof)'",
        "sampleAnswer": "Lulus dengan Predikat Pujian / Cum Laude",
        "keywords": [
          "lulus",
          "kuliah"
        ],
        "explanation": "Istilah 'Cum laude afstuderen (met lof)' adalah padanan untuk 'Lulus dengan Predikat Pujian / Cum Laude' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Bewijs van inschrijving aan de universiteit'",
        "sampleAnswer": "Surat Keterangan Registrasi Mahasiswa Aktif",
        "keywords": [
          "surat",
          "kuliah"
        ],
        "explanation": "Istilah 'Bewijs van inschrijving aan de universiteit' adalah padanan untuk 'Surat Keterangan Registrasi Mahasiswa Aktif' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Vrijstelling voor een studieonderdeel'",
        "sampleAnswer": "Dispensasi Pembebasan Mata Kuliah",
        "keywords": [
          "dispensasi",
          "kuliah"
        ],
        "explanation": "Istilah 'Vrijstelling voor een studieonderdeel' adalah padanan untuk 'Dispensasi Pembebasan Mata Kuliah' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Belanda berikut ke dalam bahasa Indonesia: 'Kennismigrantenregeling (kennismigrant)'",
        "sampleAnswer": "Skema Izin Tinggal Pekerja Migran Terampil",
        "keywords": [
          "skema",
          "kuliah"
        ],
        "explanation": "Istilah 'Kennismigrantenregeling (kennismigrant)' adalah padanan untuk 'Skema Izin Tinggal Pekerja Migran Terampil' di perguruan tinggi Belanda."
      },
      {
        "id": "q-nl-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa nilai rata-rata minimal yang biasanya disyaratkan untuk predikat 'Cum Laude' di universitas Belanda?",
        "options": [
          "Rata-rata nilai minimal 8,0 tanpa ada nilai di bawah 7,0 dan tanpa remedial",
          "Rata-rata 6,0",
          "Rata-rata 10,0 mutlak",
          "Hanya memerlukan kehadiran penuh"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Voor het judicium 'cum laude' is doorgaans een gewogen gemiddelde van minimaal een 8,0 vereist."
      },
      {
        "id": "q-nl-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan sistem 'BSA' (Bindend Studieadvies) di tahun pertama sarjana (Bachelor) di Belanda?",
        "options": [
          "Anjuran studi mengikat: mahasiswa wajib mengumpulkan minimal kredit tertentu (misal 45 dari 60 ECTS) agar tidak di-drop out",
          "Saran memilih pakaian",
          "Rekomendasi beasiswa",
          "Jadwal libur semester"
        ],
        "correctAnswerIndex": 0,
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
          "Maksimal 16 jam per minggu selama masa kuliah atau penuh waktu hanya di musim panas (Juni-Agustus)",
          "Bebas hingga 40 jam setiap minggu",
          "Dilarang bekerja sama sekali",
          "Hanya boleh bekerja di akhir pekan 2 jam"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Niet-EU studenten mogen maximaal 16 uur per week werken (met tewerkstellingsvergunning TWV)."
      },
      {
        "id": "q-nl-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'IND' (Immigratie- en Naturalisatiedienst) bagi mahasiswa asing di Belanda?",
        "options": [
          "Badan imigrasi pemerintah yang memproses penerbitan izin tinggal pelajar (verblijfsvergunning)",
          "Kementerian Luar Negeri",
          "Kantor polisi lalu lintas",
          "Pengelola museum nasional"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De IND behandelt aanvragen voor verblijfsvergunningen in Nederland."
      },
      {
        "id": "q-nl-bb-6",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Mengapa mahasiswa disarankan mencari akomodasi (kamer) berbulan-bulan sebelum perkuliahan dimulai di Belanda?",
        "options": [
          "Karena terjadi krisis perumahan mahasiswa parah (kamernood) di seluruh kota besar Belanda",
          "Karena kampus tidak memiliki gerbang",
          "Karena kamar harus dicat sendiri",
          "Karena cuaca sangat dingin"
        ],
        "correctAnswerIndex": 0,
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
          "Bersepeda merupakan moda transportasi utama dan paling lazim digunakan setiap hari oleh mahasiswa dan dosen",
          "Olahraga balap profesional",
          "Kendaraan khusus akhir pekan",
          "Hanya dipakai saat cuaca cerah"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De fiets is het meest gebruikte vervoermiddel onder studenten in Nederland."
      },
      {
        "id": "q-nl-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa istilah untuk ujian perbaikan / remedial jika nilai ujian pertama di bawah standar kelulusan?",
        "options": [
          "Hertentamen (herkansing)",
          "Afstuderen",
          "Colloquium",
          "Inschrijving"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Een herkansing of hertentamen biedt een tweede kans om een onvoldoende op te halen."
      },
      {
        "id": "q-nl-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa fungsi sistem 'Canvas' atau 'Brightspace' yang digunakan di hampir semua universitas Belanda?",
        "options": [
          "Sistem manajemen pembelajaran daring (LMS) untuk mengunduh materi kuliah, tugas, dan nilai",
          "Situs jejaring sosial hiburan",
          "Aplikasi pemesanan tiket kereta",
          "Pusat game online"
        ],
        "correctAnswerIndex": 0,
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
          "Kode etik integritas ilmiah yang melarang fabrikasi data, pemalsuan, dan plagiarisme dalam riset",
          "Surat izin bepergian ke luar negeri",
          "Kartu anggota asosiasi olahraga",
          "Surat perjanjian sewa sepeda"
        ],
        "correctAnswerIndex": 0,
        "explanation": "De Nederlandse Gedragscode Wetenschappelijke Integriteit regelt eerlijk en zorgvuldig onderzoek."
      },
      {
        "id": "q-nl-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti istilah 'Korting' yang sering dilihat mahasiswa saat berbelanja di Belanda?",
        "options": [
          "Potongan harga / diskon",
          "Pajak tambahan",
          "Biaya masuk",
          "Denda parkir"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'Korting' betekent prijsverlaging of reductie op artikelen."
      },
      {
        "id": "q-nl-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa ingin mendaftar ke dokter umum di lingkungan tempat tinggalnya, ia harus mencari:",
        "options": [
          "Een Huisarts (dokter keluarga/umum)",
          "Direct naar het Academisch Ziekenhuis",
          "Apotheek",
          "Gemeentehuis"
        ],
        "correctAnswerIndex": 0,
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
          "Tesis akhir ilmiah kelulusan jenjang S2",
          "Ujian masuk matrikulasi",
          "Daftar hadir perkuliahan",
          "Kuitansi biaya hidup bulanan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Die Masterarbeit ist die selbstständige wissenschaftliche Abschlussarbeit im Masterstudium."
      },
      {
        "id": "q-de-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welches Relativpronomen passt grammatikalisch: 'Das Forschungsprojekt, _____ der Professor leitet, ist international anerkannt.'",
        "audioVoiceLang": "de-DE",
        "options": [
          "das (Akkusativ Neutrum)",
          "den",
          "dem",
          "dessen"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Bezugswort 'das Projekt' ist sächlich und steht im Akkusativ: 'das der Professor leitet'."
      },
      {
        "id": "q-de-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wie nennt man die regelmäßige Sprechstunde eines Dozenten für studentische Anliegen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Die Sprechstunde",
          "Die Vorlesung",
          "Das Kolloquium",
          "Die Klausur"
        ],
        "correctAnswerIndex": 0,
        "explanation": "In der Sprechstunde besprechen Studierende akademische Fragen persönlich mit Dozierenden."
      },
      {
        "id": "q-de-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welches Dokument bescheinigt den offiziellen Status als immatrikulierter Student?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Die Immatrikulationsbescheinigung (Studienbescheinigung)",
          "Der Führerschein",
          "Die Monatskarte",
          "Das Zeugnis der Grundschule"
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
          "Ein einjähriger Vorbereitungskurs zur Feststellungsprüfung bei nicht direkt anerkanntem Abitur",
          "Ein Ferienlager für Jugendliche",
          "Ein Wohnheim für Doktoranden",
          "Eine Sprachschule für Touristen"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Studienkolleg bereitet internationale Bewerber fachlich und sprachlich auf das Hochschulstudium vor."
      },
      {
        "id": "q-de-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wofür steht die Abkürzung 'DAAD' im deutschen Hochschulwesen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Deutscher Akademischer Austauschdienst",
          "Deutsche Agentur für Arbeit und Daten",
          "Dachverband Akademischer Autoren Deutschlands",
          "Direktion für Angewandte Ausbildung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Der DAAD ist die weltweit größte Förderorganisation für den internationalen Austausch von Studierenden und Forschenden."
      },
      {
        "id": "q-de-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was ist ein 'Sperrkonto' im Rahmen des deutschen Studentenvisums?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Ein spezielles Bankkonto mit gesperrtem Guthaben zur Sicherung des monatlichen Lebensunterhalts",
          "Ein Girokonto ohne Gebühren",
          "Ein Sparkonto für den Ruhestand",
          "Ein Kreditkartensystem"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Sperrkonto weist die finanzielle Leistungsfähigkeit für die Visumserteilung bei der Botschaft nach."
      },
      {
        "id": "q-de-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was ist der wesentliche Unterschied zwischen einer 'Vorlesung' und einem 'Seminar'?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Vorlesung ist dozentenzentriert im Hörsaal; Seminar erfordert aktive Diskussion und Referate der Studierenden",
          "Vorlesung findet abends statt; Seminar morgens",
          "Vorlesung ist Sportunterricht",
          "Es gibt keinen Unterschied"
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
          "1,0 (Sehr gut)",
          "5,0",
          "10,0",
          "0,0"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das deutsche Notensystem reicht von 1,0 (sehr gut) bis 5,0 (nicht bestanden)."
      },
      {
        "id": "q-de-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welche Aufgaben übernimmt das 'Studierendenwerk' (Studentenwerk) an deutschen Hochschulen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Betrieb von Mensen, Wohnheimen, BAföG-Beratung und psychosozialer Unterstützung",
          "Einschreibung von Studenten",
          "Abnahme von Masterprüfungen",
          "Leitung der Fakultäten"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Studierendenwerk erbringt soziale, wirtschaftliche und kulturelle Dienstleistungen für Studierende."
      }
    ]
  },
  "de-2": {
    "id": "test-de-2",
    "title": "Bagian 2: Esai Rencana Studi & Analisis Konseptual Jerman (10 Soal Essai)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Jerman.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-de-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Formulieren Sie die zentrale Forschungsfrage und Zielsetzung Ihres geplanten Masterstudiums in Deutschland.",
        "sampleAnswer": "Die Forschungsfrage muss präzise, theoriegeleitet, methodisch überprüfbar und wissenschaftlich relevant formuliert sein.",
        "keywords": [
          "Forschungsfrage",
          "Zielsetzung",
          "Methodik",
          "Relevanz"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Beschreiben Sie die formalen Kriterien einer wissenschaftlichen Seminararbeit nach Zitierstandards.",
        "sampleAnswer": "Klare Gliederung (Einleitung, Hauptteil, Schluss), lückenloses Belegen aller Zitate, Einhaltung von Formatvorgaben und Plagiatserklärung.",
        "keywords": [
          "Gliederung",
          "Zitation",
          "Plagiatserklärung",
          "Format"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Warum haben Sie sich für ein Hochschulstudium in Deutschland und ein DAAD-Stipendium beworben?",
        "sampleAnswer": "Wegen der herausragenden Forschungsqualität, praxisnahen Ausbildung in den MINT-Fächern und international renommierten Abschlüssen.",
        "keywords": [
          "DAAD",
          "Forschungsqualität",
          "MINT",
          "Zukunft"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Erläutern Sie die Funktionsweise des Sperrkontos und die Beantragung des elektronischen Aufenthaltstitels (eAT).",
        "sampleAnswer": "Einzahlung des gesetzlichen Mindestbetrags, monatliche Freigabe und Einreichung der Meldebestätigung bei der Ausländerbehörde.",
        "keywords": [
          "Sperrkonto",
          "Aufenthaltstitel",
          "Ausländerbehörde",
          "Finanzierung"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Welche Bedeutung hat das Humboldtsche Bildungsideal (Einheit von Forschung und Lehre) für Sie?",
        "sampleAnswer": "Dass Studierende nicht nur theoretisches Wissen konsumieren, sondern von Beginn an aktiv an authentischen Forschungsprozessen mitwirken.",
        "keywords": [
          "Humboldt",
          "Forschung",
          "Lehre",
          "Wissenschaft"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Wie bereiten Sie sich auf eine mündliche Fachprüfung oder ein Kolloquium vor?",
        "sampleAnswer": "Durch systematisches Erstellen von Thesenpapieren, Simulation von Prüfungsgesprächen und vertiefte Fachliteraturlektüre.",
        "keywords": [
          "Prüfung",
          "Kolloquium",
          "Thesenpapier",
          "Vorbereitung"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Beschreiben Sie die Rolle der studentischen Selbstverwaltung (AStA) an deutschen Universitäten.",
        "sampleAnswer": "Der Allgemeine Studierendenausschuss vertritt die hochschulpolitischen, sozialen und wirtschaftlichen Interessen aller Studierenden.",
        "keywords": [
          "AStA",
          "Studierendenvertretung",
          "Interessen",
          "Demokratie"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Warum ist die Einhaltung guter wissenschaftlicher Praxis (Plagiatsvermeidung) von zentraler Bedeutung?",
        "sampleAnswer": "Sie sichert die Glaubwürdigkeit wissenschaftlicher Erkenntnisse, schützt geistiges Eigentum und wahrt den akademischen Ehrenkodex.",
        "keywords": [
          "wissenschaftliche_Praxis",
          "Plagiate",
          "Redlichkeit",
          "Ehrenkodex"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Welche beruflichen Perspektiven planen Sie nach dem erfolgreichen Abschluss in Deutschland?",
        "sampleAnswer": "Einsatz als qualifizierte Fachkraft in innovativen Forschungs- und Entwicklungsabteilungen oder Promotion an einem Exzellenzcluster.",
        "keywords": [
          "Karriere",
          "Promotion",
          "Fachkraft",
          "Entwicklung"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Wie wollen Sie den Wissenstransfer zwischen Deutschland und Indonesien aktiv fördern?",
        "sampleAnswer": "Durch Initiierung von Hochschulpartnerschaften, gemeinsamen Forschungsprojekten und Technologiekooperationen im Bereich erneuerbare Energien.",
        "keywords": [
          "Wissenstransfer",
          "Partnerschaft",
          "Indonesien",
          "Kooperation"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
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
          "Ich möchte mich",
          "für das kommende Wintersemester",
          "ordnungsgemäß",
          "an der Universität immatrikulieren"
        ],
        "correctOrder": [
          "Ich möchte mich",
          "für das kommende Wintersemester",
          "ordnungsgemäß",
          "an der Universität immatrikulieren"
        ],
        "explanation": "Syntaktische Abfolge: Subjekt/Modalverb (Ich möchte mich) + Zeitangabe (für das kommende Wintersemester) + Modaladverb (ordnungsgemäß) + Akkusativobjekt/Infinitiv (an der Universität immatrikulieren)."
      },
      {
        "id": "q-de-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat tenggat waktu tugas: 'Mahasiswa harus mengumpulkan makalah seminar tepat waktu sebelum batas akhir'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "Die Studierenden müssen",
          "ihre Seminararbeiten",
          "fristgerecht vor Semesterende",
          "beim Lehrstuhl einreichen"
        ],
        "correctOrder": [
          "Die Studierenden müssen",
          "ihre Seminararbeiten",
          "fristgerecht vor Semesterende",
          "beim Lehrstuhl einreichen"
        ],
        "explanation": "Reguläre Satzstellung: Modalrahmen (Die Studierenden müssen ... einreichen) mit Akkusativobjekt, Temporal- und Lokalbestimmung."
      },
      {
        "id": "q-de-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat asisten peneliti: 'Asisten peneliti mendampingi praktikum laboratorium mahasiswa semester awal'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "Der wissenschaftliche Mitarbeiter",
          "betreut das Laborpraktikum",
          "für die Erstsemester"
        ],
        "correctOrder": [
          "Der wissenschaftliche Mitarbeiter",
          "betreut das Laborpraktikum",
          "für die Erstsemester"
        ],
        "explanation": "Normale deutsche SVO-Struktur: Subjekt (Der wissenschaftliche Mitarbeiter) + Prädikat (betreut) + Akkusativobjekt (das Laborpraktikum) + Präpositionalattribut (für die Erstsemester)."
      },
      {
        "id": "q-de-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Di perpustakaan universitas tersedia pangkalan data ilmiah khusus bagi para peneliti'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "In der Universitätsbibliothek",
          "stehen Fachdatenbanken",
          "für wissenschaftliche Recherchen",
          "zur Verfügung"
        ],
        "correctOrder": [
          "In der Universitätsbibliothek",
          "stehen Fachdatenbanken",
          "für wissenschaftliche Recherchen",
          "zur Verfügung"
        ],
        "explanation": "Funktionsverbgefüge: Lokalangabe (In der Universitätsbibliothek) + Verb (stehen) + Subjekt (Fachdatenbanken) + Finalangabe + Verbzusatz (zur Verfügung)."
      },
      {
        "id": "q-de-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat ujian penyetaraan: 'Ujian Feststellungsprüfung memungkinkan akses masuk perguruan tinggi bagi pendaftar internasional'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "Die Feststellungsprüfung ermöglicht",
          "den Hochschulzugang",
          "für internationale Bewerber"
        ],
        "correctOrder": [
          "Die Feststellungsprüfung ermöglicht",
          "den Hochschulzugang",
          "für internationale Bewerber"
        ],
        "explanation": "Urutan: Subjekt/Prädikat (Die Feststellungsprüfung ermöglicht) + Akkusativobjekt (den Hochschulzugang) + Adressat (für internationale Bewerber)."
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
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Erstprüfer / Betreuer der Abschlussarbeit (Doktorvater)'",
        "sampleAnswer": "Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'Erstprüfer / Betreuer der Abschlussarbeit (Doktorvater)' adalah padanan untuk 'Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi' di universitas Jerman."
      },
      {
        "id": "q-de-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Klausur (schriftliche Aufsichtsarbeit)'",
        "sampleAnswer": "Ujian Tertulis Terikat Waktu di Bawah Pengawasan",
        "keywords": [
          "ujian",
          "kuliah"
        ],
        "explanation": "Istilah 'Klausur (schriftliche Aufsichtsarbeit)' adalah padanan untuk 'Ujian Tertulis Terikat Waktu di Bawah Pengawasan' di universitas Jerman."
      },
      {
        "id": "q-de-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Mensa (Mensa Academica)'",
        "sampleAnswer": "Kantin Universitas Bersubsidi Khusus Mahasiswa",
        "keywords": [
          "kantin",
          "kuliah"
        ],
        "explanation": "Istilah 'Mensa (Mensa Academica)' adalah padanan untuk 'Kantin Universitas Bersubsidi Khusus Mahasiswa' di universitas Jerman."
      },
      {
        "id": "q-de-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Vorlesungsverzeichnis (Modulhandbuch)'",
        "sampleAnswer": "Katalog Daftar Mata Kuliah / Buku Panduan Modul",
        "keywords": [
          "katalog",
          "kuliah"
        ],
        "explanation": "Istilah 'Vorlesungsverzeichnis (Modulhandbuch)' adalah padanan untuk 'Katalog Daftar Mata Kuliah / Buku Panduan Modul' di universitas Jerman."
      },
      {
        "id": "q-de-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Rückmeldung zum Folgesemester'",
        "sampleAnswer": "Daftar Ulang Administrasi Semester Berikutnya",
        "keywords": [
          "daftar",
          "kuliah"
        ],
        "explanation": "Istilah 'Rückmeldung zum Folgesemester' adalah padanan untuk 'Daftar Ulang Administrasi Semester Berikutnya' di universitas Jerman."
      },
      {
        "id": "q-de-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Notenspiegel (Leistungsübersicht)'",
        "sampleAnswer": "Transkrip Rekapitulasi Nilai Akademik Resmi",
        "keywords": [
          "transkrip",
          "kuliah"
        ],
        "explanation": "Istilah 'Notenspiegel (Leistungsübersicht)' adalah padanan untuk 'Transkrip Rekapitulasi Nilai Akademik Resmi' di universitas Jerman."
      },
      {
        "id": "q-de-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Regelstudienzeit der Studiengänge'",
        "sampleAnswer": "Masa Studi Standar Resmi Perkuliahan",
        "keywords": [
          "masa",
          "kuliah"
        ],
        "explanation": "Istilah 'Regelstudienzeit der Studiengänge' adalah padanan untuk 'Masa Studi Standar Resmi Perkuliahan' di universitas Jerman."
      },
      {
        "id": "q-de-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Zulassungsbescheid der Hochschule'",
        "sampleAnswer": "Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)",
        "keywords": [
          "surat",
          "kuliah"
        ],
        "explanation": "Istilah 'Zulassungsbescheid der Hochschule' adalah padanan untuk 'Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)' di universitas Jerman."
      },
      {
        "id": "q-de-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Wissenschaftliche Hilfskraft (HiWi)'",
        "sampleAnswer": "Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus",
        "keywords": [
          "asisten",
          "kuliah"
        ],
        "explanation": "Istilah 'Wissenschaftliche Hilfskraft (HiWi)' adalah padanan untuk 'Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus' di universitas Jerman."
      },
      {
        "id": "q-de-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Exmatrikulation nach Abschluss des Studiums'",
        "sampleAnswer": "Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)",
        "keywords": [
          "pemberhentian",
          "kuliah"
        ],
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
          "Tidak ada biaya kuliah pokok (bebas SPP), mahasiswa hanya membayar iuran semester (Semesterbeitrag) yang sudah termasuk tiket transportasi",
          "Ya, biayanya 30.000 euro per semester",
          "Hanya mahasiswa kedokteran yang gratis",
          "Wajib membayar biaya gedung 10.000 euro"
        ],
        "correctAnswerIndex": 0,
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
          "Tiket terusan transportasi umum gratis/terdiskon selama satu semester penuh di seluruh wilayah negara bagian",
          "Tiket masuk bioskop",
          "Karcis makan gratis",
          "Tiket konser musik"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Semesterticket ermöglicht die unbegrenzte Nutzung des regionalen Nahverkehrs während des Semesters."
      },
      {
        "id": "q-de-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa nilai minimal yang harus dicapai agar seorang mahasiswa dinyatakan 'lulus' (Bestanden) dalam ujian di Jerman?",
        "options": [
          "Nilai 4,0 (Ausreichend)",
          "Nilai 1,0",
          "Nilai 5,0",
          "Nilai 3,0"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Mit einer Note von 4,0 gilt eine Prüfungsleistung als bestanden; 5,0 bedeutet nicht bestanden."
      },
      {
        "id": "q-de-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'Ausländerbehörde' (Kantor Urusan Warga Asing) bagi mahasiswa Indonesia di Jerman?",
        "options": [
          "Menerbitkan dan memperpanjang izin tinggal resmi (Aufenthaltstitel) setelah kedatangan di Jerman",
          "Menguji tes bahasa",
          "Mencari kamar kos",
          "Menjual tiket kereta"
        ],
        "correctAnswerIndex": 0,
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
          "Wajib dimiliki (gesetzliche Krankenversicherung) sebagai syarat mutlak pendaftaran universitas dan visa",
          "Hanya pelengkap opsional",
          "Hanya jika mahasiswa sakit parah",
          "Tidak diperlukan sama sekali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ohne Nachweis einer gültigen Krankenversicherung ist eine Immatrikulation an deutschen Hochschulen unmöglich."
      },
      {
        "id": "q-de-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'C.T.' (cum tempore) pada jadwal perkuliahan di Jerman?",
        "options": [
          "Kuliah dimulai 15 menit setelah waktu yang tertera pada jadwal (akademische Viertelstunde)",
          "Kuliah dimulai tepat waktu",
          "Kuliah dibatalkan",
          "Kuliah berlangsung semalaman"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'cum tempore' bedeutet Beginn mit der akademischen Viertelstunde Verspätung."
      },
      {
        "id": "q-de-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kebalikan dari 'c.t.', yaitu 'S.T.' (sine tempore)?",
        "options": [
          "Kuliah dimulai tepat waktu tanpa keterlambatan 15 menit",
          "Kuliah libur",
          "Kuliah di luar kampus",
          "Kuliah wajib pakai jas"
        ],
        "correctAnswerIndex": 0,
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
          "1 Oktober",
          "1 Januari",
          "1 Mei",
          "1 Juli"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Wintersemester beginnt an deutschen Universitäten offiziell am 1. Oktober."
      },
      {
        "id": "q-de-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah nama ujian resmi kemahiran bahasa Jerman masuk universitas yang diakui secara nasional?",
        "options": [
          "TestDaF (Test Deutsch als Fremdsprache) atau DSH (Deutsche Sprachprüfung für den Hochschulzugang)",
          "TOEFL",
          "IELTS",
          "DELF"
        ],
        "correctAnswerIndex": 0,
        "explanation": "TestDaF und DSH sind die anerkannten sprachlichen Zugangsprüfungen für das Hochschulstudium."
      },
      {
        "id": "q-de-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Exzellenzinitiative' / 'Exzellenzstrategie' di Jerman?",
        "options": [
          "Program pendanaan riset bergengsi pemerintah federal untuk universitas-universitas riset terkemuka (Exzellenzuniversitäten)",
          "Lomba olahraga tahunan",
          "Program beasiswa pariwisata",
          "Organisasi pers mahasiswa"
        ],
        "correctAnswerIndex": 0,
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
          "Merupakan seminar presentasi ilmiah di mana mahasiswa mempertahankan metodologi dan hasil risetnya di hadapan dosen dan rekan peneliti",
          "Pesta wisuda makan bersama",
          "Ujian praktik olahraga",
          "Pameran karya lukis"
        ],
        "correctAnswerIndex": 0,
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
          "Tesis akhir ilmiah kelulusan jenjang S2",
          "Ujian masuk matrikulasi",
          "Daftar hadir perkuliahan",
          "Kuitansi biaya hidup bulanan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Die Masterarbeit ist die selbstständige wissenschaftliche Abschlussarbeit im Masterstudium."
      },
      {
        "id": "q-de-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welches Relativpronomen passt grammatikalisch: 'Das Forschungsprojekt, _____ der Professor leitet, ist international anerkannt.'",
        "audioVoiceLang": "de-DE",
        "options": [
          "das (Akkusativ Neutrum)",
          "den",
          "dem",
          "dessen"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Bezugswort 'das Projekt' ist sächlich und steht im Akkusativ: 'das der Professor leitet'."
      },
      {
        "id": "q-de-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wie nennt man die regelmäßige Sprechstunde eines Dozenten für studentische Anliegen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Die Sprechstunde",
          "Die Vorlesung",
          "Das Kolloquium",
          "Die Klausur"
        ],
        "correctAnswerIndex": 0,
        "explanation": "In der Sprechstunde besprechen Studierende akademische Fragen persönlich mit Dozierenden."
      },
      {
        "id": "q-de-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welches Dokument bescheinigt den offiziellen Status als immatrikulierter Student?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Die Immatrikulationsbescheinigung (Studienbescheinigung)",
          "Der Führerschein",
          "Die Monatskarte",
          "Das Zeugnis der Grundschule"
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
          "Ein einjähriger Vorbereitungskurs zur Feststellungsprüfung bei nicht direkt anerkanntem Abitur",
          "Ein Ferienlager für Jugendliche",
          "Ein Wohnheim für Doktoranden",
          "Eine Sprachschule für Touristen"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Studienkolleg bereitet internationale Bewerber fachlich und sprachlich auf das Hochschulstudium vor."
      },
      {
        "id": "q-de-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Wofür steht die Abkürzung 'DAAD' im deutschen Hochschulwesen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Deutscher Akademischer Austauschdienst",
          "Deutsche Agentur für Arbeit und Daten",
          "Dachverband Akademischer Autoren Deutschlands",
          "Direktion für Angewandte Ausbildung"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Der DAAD ist die weltweit größte Förderorganisation für den internationalen Austausch von Studierenden und Forschenden."
      },
      {
        "id": "q-de-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was ist ein 'Sperrkonto' im Rahmen des deutschen Studentenvisums?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Ein spezielles Bankkonto mit gesperrtem Guthaben zur Sicherung des monatlichen Lebensunterhalts",
          "Ein Girokonto ohne Gebühren",
          "Ein Sparkonto für den Ruhestand",
          "Ein Kreditkartensystem"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Sperrkonto weist die finanzielle Leistungsfähigkeit für die Visumserteilung bei der Botschaft nach."
      },
      {
        "id": "q-de-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Was ist der wesentliche Unterschied zwischen einer 'Vorlesung' und einem 'Seminar'?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Vorlesung ist dozentenzentriert im Hörsaal; Seminar erfordert aktive Diskussion und Referate der Studierenden",
          "Vorlesung findet abends statt; Seminar morgens",
          "Vorlesung ist Sportunterricht",
          "Es gibt keinen Unterschied"
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
          "1,0 (Sehr gut)",
          "5,0",
          "10,0",
          "0,0"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das deutsche Notensystem reicht von 1,0 (sehr gut) bis 5,0 (nicht bestanden)."
      },
      {
        "id": "q-de-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Welche Aufgaben übernimmt das 'Studierendenwerk' (Studentenwerk) an deutschen Hochschulen?",
        "audioVoiceLang": "de-DE",
        "options": [
          "Betrieb von Mensen, Wohnheimen, BAföG-Beratung und psychosozialer Unterstützung",
          "Einschreibung von Studenten",
          "Abnahme von Masterprüfungen",
          "Leitung der Fakultäten"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Studierendenwerk erbringt soziale, wirtschaftliche und kulturelle Dienstleistungen für Studierende."
      },
      {
        "id": "q-de-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Formulieren Sie die zentrale Forschungsfrage und Zielsetzung Ihres geplanten Masterstudiums in Deutschland.",
        "sampleAnswer": "Die Forschungsfrage muss präzise, theoriegeleitet, methodisch überprüfbar und wissenschaftlich relevant formuliert sein.",
        "keywords": [
          "Forschungsfrage",
          "Zielsetzung",
          "Methodik",
          "Relevanz"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Beschreiben Sie die formalen Kriterien einer wissenschaftlichen Seminararbeit nach Zitierstandards.",
        "sampleAnswer": "Klare Gliederung (Einleitung, Hauptteil, Schluss), lückenloses Belegen aller Zitate, Einhaltung von Formatvorgaben und Plagiatserklärung.",
        "keywords": [
          "Gliederung",
          "Zitation",
          "Plagiatserklärung",
          "Format"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Warum haben Sie sich für ein Hochschulstudium in Deutschland und ein DAAD-Stipendium beworben?",
        "sampleAnswer": "Wegen der herausragenden Forschungsqualität, praxisnahen Ausbildung in den MINT-Fächern und international renommierten Abschlüssen.",
        "keywords": [
          "DAAD",
          "Forschungsqualität",
          "MINT",
          "Zukunft"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Erläutern Sie die Funktionsweise des Sperrkontos und die Beantragung des elektronischen Aufenthaltstitels (eAT).",
        "sampleAnswer": "Einzahlung des gesetzlichen Mindestbetrags, monatliche Freigabe und Einreichung der Meldebestätigung bei der Ausländerbehörde.",
        "keywords": [
          "Sperrkonto",
          "Aufenthaltstitel",
          "Ausländerbehörde",
          "Finanzierung"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Welche Bedeutung hat das Humboldtsche Bildungsideal (Einheit von Forschung und Lehre) für Sie?",
        "sampleAnswer": "Dass Studierende nicht nur theoretisches Wissen konsumieren, sondern von Beginn an aktiv an authentischen Forschungsprozessen mitwirken.",
        "keywords": [
          "Humboldt",
          "Forschung",
          "Lehre",
          "Wissenschaft"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Wie bereiten Sie sich auf eine mündliche Fachprüfung oder ein Kolloquium vor?",
        "sampleAnswer": "Durch systematisches Erstellen von Thesenpapieren, Simulation von Prüfungsgesprächen und vertiefte Fachliteraturlektüre.",
        "keywords": [
          "Prüfung",
          "Kolloquium",
          "Thesenpapier",
          "Vorbereitung"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Beschreiben Sie die Rolle der studentischen Selbstverwaltung (AStA) an deutschen Universitäten.",
        "sampleAnswer": "Der Allgemeine Studierendenausschuss vertritt die hochschulpolitischen, sozialen und wirtschaftlichen Interessen aller Studierenden.",
        "keywords": [
          "AStA",
          "Studierendenvertretung",
          "Interessen",
          "Demokratie"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Warum ist die Einhaltung guter wissenschaftlicher Praxis (Plagiatsvermeidung) von zentraler Bedeutung?",
        "sampleAnswer": "Sie sichert die Glaubwürdigkeit wissenschaftlicher Erkenntnisse, schützt geistiges Eigentum und wahrt den akademischen Ehrenkodex.",
        "keywords": [
          "wissenschaftliche_Praxis",
          "Plagiate",
          "Redlichkeit",
          "Ehrenkodex"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Welche beruflichen Perspektiven planen Sie nach dem erfolgreichen Abschluss in Deutschland?",
        "sampleAnswer": "Einsatz als qualifizierte Fachkraft in innovativen Forschungs- und Entwicklungsabteilungen oder Promotion an einem Exzellenzcluster.",
        "keywords": [
          "Karriere",
          "Promotion",
          "Fachkraft",
          "Entwicklung"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Wie wollen Sie den Wissenstransfer zwischen Deutschland und Indonesien aktiv fördern?",
        "sampleAnswer": "Durch Initiierung von Hochschulpartnerschaften, gemeinsamen Forschungsprojekten und Technologiekooperationen im Bereich erneuerbare Energien.",
        "keywords": [
          "Wissenstransfer",
          "Partnerschaft",
          "Indonesien",
          "Kooperation"
        ],
        "explanation": "Bewertung der wissenschaftlichen Reife und des Verständnisses des deutschen Universitätssystems."
      },
      {
        "id": "q-de-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat resmi pendaftaran kuliah: 'Saya ingin mendaftarkan diri secara resmi untuk semester musim dingin mendatang'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "Ich möchte mich",
          "für das kommende Wintersemester",
          "ordnungsgemäß",
          "an der Universität immatrikulieren"
        ],
        "correctOrder": [
          "Ich möchte mich",
          "für das kommende Wintersemester",
          "ordnungsgemäß",
          "an der Universität immatrikulieren"
        ],
        "explanation": "Syntaktische Abfolge: Subjekt/Modalverb (Ich möchte mich) + Zeitangabe (für das kommende Wintersemester) + Modaladverb (ordnungsgemäß) + Akkusativobjekt/Infinitiv (an der Universität immatrikulieren)."
      },
      {
        "id": "q-de-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat tenggat waktu tugas: 'Mahasiswa harus mengumpulkan makalah seminar tepat waktu sebelum batas akhir'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "Die Studierenden müssen",
          "ihre Seminararbeiten",
          "fristgerecht vor Semesterende",
          "beim Lehrstuhl einreichen"
        ],
        "correctOrder": [
          "Die Studierenden müssen",
          "ihre Seminararbeiten",
          "fristgerecht vor Semesterende",
          "beim Lehrstuhl einreichen"
        ],
        "explanation": "Reguläre Satzstellung: Modalrahmen (Die Studierenden müssen ... einreichen) mit Akkusativobjekt, Temporal- und Lokalbestimmung."
      },
      {
        "id": "q-de-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat asisten peneliti: 'Asisten peneliti mendampingi praktikum laboratorium mahasiswa semester awal'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "Der wissenschaftliche Mitarbeiter",
          "betreut das Laborpraktikum",
          "für die Erstsemester"
        ],
        "correctOrder": [
          "Der wissenschaftliche Mitarbeiter",
          "betreut das Laborpraktikum",
          "für die Erstsemester"
        ],
        "explanation": "Normale deutsche SVO-Struktur: Subjekt (Der wissenschaftliche Mitarbeiter) + Prädikat (betreut) + Akkusativobjekt (das Laborpraktikum) + Präpositionalattribut (für die Erstsemester)."
      },
      {
        "id": "q-de-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Di perpustakaan universitas tersedia pangkalan data ilmiah khusus bagi para peneliti'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "In der Universitätsbibliothek",
          "stehen Fachdatenbanken",
          "für wissenschaftliche Recherchen",
          "zur Verfügung"
        ],
        "correctOrder": [
          "In der Universitätsbibliothek",
          "stehen Fachdatenbanken",
          "für wissenschaftliche Recherchen",
          "zur Verfügung"
        ],
        "explanation": "Funktionsverbgefüge: Lokalangabe (In der Universitätsbibliothek) + Verb (stehen) + Subjekt (Fachdatenbanken) + Finalangabe + Verbzusatz (zur Verfügung)."
      },
      {
        "id": "q-de-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat ujian penyetaraan: 'Ujian Feststellungsprüfung memungkinkan akses masuk perguruan tinggi bagi pendaftar internasional'",
        "audioVoiceLang": "de-DE",
        "scrambledWords": [
          "Die Feststellungsprüfung ermöglicht",
          "den Hochschulzugang",
          "für internationale Bewerber"
        ],
        "correctOrder": [
          "Die Feststellungsprüfung ermöglicht",
          "den Hochschulzugang",
          "für internationale Bewerber"
        ],
        "explanation": "Urutan: Subjekt/Prädikat (Die Feststellungsprüfung ermöglicht) + Akkusativobjekt (den Hochschulzugang) + Adressat (für internationale Bewerber)."
      },
      {
        "id": "q-de-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Erstprüfer / Betreuer der Abschlussarbeit (Doktorvater)'",
        "sampleAnswer": "Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'Erstprüfer / Betreuer der Abschlussarbeit (Doktorvater)' adalah padanan untuk 'Dosen Pembimbing Utama / Penguji Pertama Tesis / Disertasi' di universitas Jerman."
      },
      {
        "id": "q-de-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Klausur (schriftliche Aufsichtsarbeit)'",
        "sampleAnswer": "Ujian Tertulis Terikat Waktu di Bawah Pengawasan",
        "keywords": [
          "ujian",
          "kuliah"
        ],
        "explanation": "Istilah 'Klausur (schriftliche Aufsichtsarbeit)' adalah padanan untuk 'Ujian Tertulis Terikat Waktu di Bawah Pengawasan' di universitas Jerman."
      },
      {
        "id": "q-de-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Mensa (Mensa Academica)'",
        "sampleAnswer": "Kantin Universitas Bersubsidi Khusus Mahasiswa",
        "keywords": [
          "kantin",
          "kuliah"
        ],
        "explanation": "Istilah 'Mensa (Mensa Academica)' adalah padanan untuk 'Kantin Universitas Bersubsidi Khusus Mahasiswa' di universitas Jerman."
      },
      {
        "id": "q-de-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Vorlesungsverzeichnis (Modulhandbuch)'",
        "sampleAnswer": "Katalog Daftar Mata Kuliah / Buku Panduan Modul",
        "keywords": [
          "katalog",
          "kuliah"
        ],
        "explanation": "Istilah 'Vorlesungsverzeichnis (Modulhandbuch)' adalah padanan untuk 'Katalog Daftar Mata Kuliah / Buku Panduan Modul' di universitas Jerman."
      },
      {
        "id": "q-de-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Rückmeldung zum Folgesemester'",
        "sampleAnswer": "Daftar Ulang Administrasi Semester Berikutnya",
        "keywords": [
          "daftar",
          "kuliah"
        ],
        "explanation": "Istilah 'Rückmeldung zum Folgesemester' adalah padanan untuk 'Daftar Ulang Administrasi Semester Berikutnya' di universitas Jerman."
      },
      {
        "id": "q-de-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Notenspiegel (Leistungsübersicht)'",
        "sampleAnswer": "Transkrip Rekapitulasi Nilai Akademik Resmi",
        "keywords": [
          "transkrip",
          "kuliah"
        ],
        "explanation": "Istilah 'Notenspiegel (Leistungsübersicht)' adalah padanan untuk 'Transkrip Rekapitulasi Nilai Akademik Resmi' di universitas Jerman."
      },
      {
        "id": "q-de-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Regelstudienzeit der Studiengänge'",
        "sampleAnswer": "Masa Studi Standar Resmi Perkuliahan",
        "keywords": [
          "masa",
          "kuliah"
        ],
        "explanation": "Istilah 'Regelstudienzeit der Studiengänge' adalah padanan untuk 'Masa Studi Standar Resmi Perkuliahan' di universitas Jerman."
      },
      {
        "id": "q-de-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Zulassungsbescheid der Hochschule'",
        "sampleAnswer": "Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)",
        "keywords": [
          "surat",
          "kuliah"
        ],
        "explanation": "Istilah 'Zulassungsbescheid der Hochschule' adalah padanan untuk 'Surat Penerimaan Resmi Mahasiswa Baru (Letter of Acceptance)' di universitas Jerman."
      },
      {
        "id": "q-de-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Wissenschaftliche Hilfskraft (HiWi)'",
        "sampleAnswer": "Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus",
        "keywords": [
          "asisten",
          "kuliah"
        ],
        "explanation": "Istilah 'Wissenschaftliche Hilfskraft (HiWi)' adalah padanan untuk 'Asisten Peneliti Mahasiswa / Asisten Pengajar Kampus' di universitas Jerman."
      },
      {
        "id": "q-de-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Jerman berikut ke dalam bahasa Indonesia: 'Exmatrikulation nach Abschluss des Studiums'",
        "sampleAnswer": "Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)",
        "keywords": [
          "pemberhentian",
          "kuliah"
        ],
        "explanation": "Istilah 'Exmatrikulation nach Abschluss des Studiums' adalah padanan untuk 'Pemberhentian Resmi Status Mahasiswa (Setelah Kelulusan)' di universitas Jerman."
      },
      {
        "id": "q-de-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah sebagian besar universitas negeri di Jerman mengenakan biaya kuliah (Studiengebühren) untuk program Bachelor dan Master reguler?",
        "options": [
          "Tidak ada biaya kuliah pokok (bebas SPP), mahasiswa hanya membayar iuran semester (Semesterbeitrag) yang sudah termasuk tiket transportasi",
          "Ya, biayanya 30.000 euro per semester",
          "Hanya mahasiswa kedokteran yang gratis",
          "Wajib membayar biaya gedung 10.000 euro"
        ],
        "correctAnswerIndex": 0,
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
          "Tiket terusan transportasi umum gratis/terdiskon selama satu semester penuh di seluruh wilayah negara bagian",
          "Tiket masuk bioskop",
          "Karcis makan gratis",
          "Tiket konser musik"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Semesterticket ermöglicht die unbegrenzte Nutzung des regionalen Nahverkehrs während des Semesters."
      },
      {
        "id": "q-de-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa nilai minimal yang harus dicapai agar seorang mahasiswa dinyatakan 'lulus' (Bestanden) dalam ujian di Jerman?",
        "options": [
          "Nilai 4,0 (Ausreichend)",
          "Nilai 1,0",
          "Nilai 5,0",
          "Nilai 3,0"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Mit einer Note von 4,0 gilt eine Prüfungsleistung als bestanden; 5,0 bedeutet nicht bestanden."
      },
      {
        "id": "q-de-bb-5",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'Ausländerbehörde' (Kantor Urusan Warga Asing) bagi mahasiswa Indonesia di Jerman?",
        "options": [
          "Menerbitkan dan memperpanjang izin tinggal resmi (Aufenthaltstitel) setelah kedatangan di Jerman",
          "Menguji tes bahasa",
          "Mencari kamar kos",
          "Menjual tiket kereta"
        ],
        "correctAnswerIndex": 0,
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
          "Wajib dimiliki (gesetzliche Krankenversicherung) sebagai syarat mutlak pendaftaran universitas dan visa",
          "Hanya pelengkap opsional",
          "Hanya jika mahasiswa sakit parah",
          "Tidak diperlukan sama sekali"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Ohne Nachweis einer gültigen Krankenversicherung ist eine Immatrikulation an deutschen Hochschulen unmöglich."
      },
      {
        "id": "q-de-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'C.T.' (cum tempore) pada jadwal perkuliahan di Jerman?",
        "options": [
          "Kuliah dimulai 15 menit setelah waktu yang tertera pada jadwal (akademische Viertelstunde)",
          "Kuliah dimulai tepat waktu",
          "Kuliah dibatalkan",
          "Kuliah berlangsung semalaman"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'cum tempore' bedeutet Beginn mit der akademischen Viertelstunde Verspätung."
      },
      {
        "id": "q-de-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa kebalikan dari 'c.t.', yaitu 'S.T.' (sine tempore)?",
        "options": [
          "Kuliah dimulai tepat waktu tanpa keterlambatan 15 menit",
          "Kuliah libur",
          "Kuliah di luar kampus",
          "Kuliah wajib pakai jas"
        ],
        "correctAnswerIndex": 0,
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
          "1 Oktober",
          "1 Januari",
          "1 Mei",
          "1 Juli"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Das Wintersemester beginnt an deutschen Universitäten offiziell am 1. Oktober."
      },
      {
        "id": "q-de-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apakah nama ujian resmi kemahiran bahasa Jerman masuk universitas yang diakui secara nasional?",
        "options": [
          "TestDaF (Test Deutsch als Fremdsprache) atau DSH (Deutsche Sprachprüfung für den Hochschulzugang)",
          "TOEFL",
          "IELTS",
          "DELF"
        ],
        "correctAnswerIndex": 0,
        "explanation": "TestDaF und DSH sind die anerkannten sprachlichen Zugangsprüfungen für das Hochschulstudium."
      },
      {
        "id": "q-de-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Exzellenzinitiative' / 'Exzellenzstrategie' di Jerman?",
        "options": [
          "Program pendanaan riset bergengsi pemerintah federal untuk universitas-universitas riset terkemuka (Exzellenzuniversitäten)",
          "Lomba olahraga tahunan",
          "Program beasiswa pariwisata",
          "Organisasi pers mahasiswa"
        ],
        "correctAnswerIndex": 0,
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
          "Merupakan seminar presentasi ilmiah di mana mahasiswa mempertahankan metodologi dan hasil risetnya di hadapan dosen dan rekan peneliti",
          "Pesta wisuda makan bersama",
          "Ujian praktik olahraga",
          "Pameran karya lukis"
        ],
        "correctAnswerIndex": 0,
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
          "Trabajo de Fin de Máster (tesis de investigación de maestría)",
          "Título de Formación Militar",
          "Tarifa de Ferrocarril Madrid",
          "Tarjeta Financiera Mensual"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El TFM es el proyecto o memoria científica que culmina los estudios oficiales de máster."
      },
      {
        "id": "q-es-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Elija la conjunción concesiva formal adecuada: '______ los resultados son preliminares, confirman la hipótesis planteada.'",
        "audioVoiceLang": "es-ES",
        "options": [
          "Aunque",
          "Porque",
          "Por consiguiente",
          "Para que"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La conjunción 'Aunque' introduce una cláusula concesiva formal adecuada al registro académico."
      },
      {
        "id": "q-es-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Cómo se denomina el documento oficial que certifica todas las asignaturas cursadas y las notas obtenidas?",
        "audioVoiceLang": "es-ES",
        "options": [
          "El certificado académico oficial (o expediente académico)",
          "El carné de biblioteca",
          "El recibo de alquiler",
          "La tarjeta sanitaria"
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
          "Escala numérica de 0 a 10 (con 5,0 como nota mínima de aprobado)",
          "Escala de letras de la A a la F",
          "Escala de 0 a 100",
          "Escala de 1 a 5"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El sistema de calificación universitario español va del 0 al 10 (5,0 es aprobado; 9,0-10 es sobresaliente)."
      },
      {
        "id": "q-es-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué significa obtener una 'Matrícula de Honor' en una asignatura universitaria?",
        "audioVoiceLang": "es-ES",
        "options": [
          "La máxima distinción académica por rendimiento sobresaliente, que exime del pago de tasas en una asignatura del curso siguiente",
          "Una sanción por impago",
          "Tener que repetir la materia",
          "Una multa económica"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La Matrícula de Honor reconoce la excelencia (máximo una por cada 20 alumnos) y bonifica la matrícula futura."
      },
      {
        "id": "q-es-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué función cumple la plataforma 'UNEDasiss' para estudiantes internacionales?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Gestiona la acreditación de expedientes de bachillerato y pruebas de competencias específicas para el acceso a la universidad española",
          "Vende billetes de tren",
          "Organiza viajes turísticos",
          "Alquila pisos de estudiantes"
        ],
        "correctAnswerIndex": 0,
        "explanation": "UNEDasiss es el servicio de la UNED que gestiona el acceso de estudiantes internacionales a las universidades de España."
      },
      {
        "id": "q-es-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué es la 'tarjeta TIE' para un estudiante extranjero no comunitario en España?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Tarjeta de Identidad de Extranjero que acredita la autorización de estancia legal por estudios",
          "Tarjeta de transporte de metro",
          "Tarjeta de descuento de supermercado",
          "Tarjeta de socio de club"
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
          "La clase magistral expone la teoría en aula magna; el seminario debate textos y aplica casos en grupos reducidos",
          "La clase magistral es por la noche",
          "El seminario es solo deporte",
          "No existe diferencia alguna"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La clase magistral fundamenta el marco conceptual y el seminario profundiza mediante el análisis interactivo."
      },
      {
        "id": "q-es-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué cobertura ofrece habitualmente una beca de posgrado de la Fundación Carolina?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Matrícula académica, billete de avión, seguro médico y dotación mensual de manutención",
          "Solo una camiseta del programa",
          "Un descuento en librerías",
          "Un préstamo bancario con intereses"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Las prestigiosas becas de la Fundación Carolina financian íntegramente los estudios de posgrado en España."
      },
      {
        "id": "q-es-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué se entiende por un 'crédito ECTS' en el Espacio Europeo de Educación Superior?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Una unidad de medida que representa entre 25 y 30 horas de trabajo total del estudiante (clases y estudio autónomo)",
          "Un euro de descuento",
          "Un punto de gimnasio",
          "Una hora de examen"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El crédito ECTS cuantifica el esfuerzo formativo integral del estudiante en el marco europeo."
      }
    ]
  },
  "es-2": {
    "id": "test-es-2",
    "title": "Bagian 2: Esai Rencana Studi & Analisis Konseptual Spanyol (10 Soal Essai)",
    "description": "Evaluasi kompetensi menyusun argumen akademis, rencana riset tesis, dan etika komunikasi dengan profesor di Spanyol.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-es-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Redacte una síntesis de su proyecto de investigación académica y la justificación metodológica.",
        "sampleAnswer": "El resumen debe formular la hipótesis, el marco conceptual, el diseño metodológico cuantitativo o cualitativo y el impacto científico.",
        "keywords": [
          "hipótesis",
          "metodología",
          "justificación",
          "impacto"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Explique cómo citar fuentes correctamente y evitar el plagio según el formato APA en trabajos académicos.",
        "sampleAnswer": "Incluir autor y año en citas integradas, referenciar fielmente la bibliografía final y distinguir entre citas textuales y paráfrasis.",
        "keywords": [
          "citación",
          "APA",
          "plagio",
          "bibliografía"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "¿Por qué eligió España como destino universitario a través de las convocatorias de becas internacionales?",
        "sampleAnswer": "Por la excelencia de sus facultades, el liderazgo de sus grupos de investigación y la proyección global del idioma español.",
        "keywords": [
          "España",
          "excelencia",
          "investigación",
          "beca"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Detalle los pasos para la solicitud y renovación de la Tarjeta de Identidad de Extranjero (TIE) en la Oficina de Extranjería.",
        "sampleAnswer": "Petición de cita previa, modelo EX-17, empadronamiento actualizado, justificante de matrícula y abono de la tasa 790 código 012.",
        "keywords": [
          "TIE",
          "extranjería",
          "empadronamiento",
          "matrícula"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Describa la estructura típica de un Trabajo de Fin de Grado o Máster (TFG/TFM).",
        "sampleAnswer": "Portada institucional, índice, resumen y palabras clave, introducción, marco teórico, metodología, resultados, discusión y conclusiones.",
        "keywords": [
          "estructura",
          "marco_teórico",
          "metodología",
          "conclusiones"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "¿Cómo se prepara para la defensa oral de su investigación ante un tribunal académico universitario?",
        "sampleAnswer": "Elaboración de una presentación audiovisual clara, control estricto del tiempo asignado y anticipación de posibles preguntas críticas.",
        "keywords": [
          "defensa",
          "tribunal",
          "presentación",
          "tiempo"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Explique la importancia de la relación académica con su tutor o director de tesis.",
        "sampleAnswer": "El tutor orienta las decisiones metodológicas, sugiere lecturas clave y valida los avances periódicos hacia el manuscrito final.",
        "keywords": [
          "tutor",
          "orientación",
          "retroalimentación",
          "tesis"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "¿Qué valor aporta la inmersión cultural y el dominio del español académico a su perfil profesional?",
        "sampleAnswer": "Facilita la comunicación en el ámbito hispanohablante global, amplia horizontes de colaboración y refuerza la capacidad analítica.",
        "keywords": [
          "inmersión",
          "perfil",
          "colaboración",
          "comunicación"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Describa cómo piensa aplicar las competencias adquiridas en el desarrollo de Indonesia.",
        "sampleAnswer": "Promoviendo proyectos de transferencia tecnológica, sostenibilidad ambiental o políticas públicas inspiradas en modelos exitosos.",
        "keywords": [
          "Indonesia",
          "transferencia",
          "desarrollo",
          "competencias"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "¿Qué estrategias implementará para integrarse activamente en la vida universitaria española?",
        "sampleAnswer": "Participación en congresos estudiantiles, grupos de estudio colaborativo, asociaciones culturales y voluntariado universitario.",
        "keywords": [
          "integración",
          "asociaciones",
          "colaboración",
          "vida_universitaria"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
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
          "Deseo solicitar",
          "una tutoría con el profesor",
          "para revisar el avance",
          "de mi trabajo de investigación"
        ],
        "correctOrder": [
          "Deseo solicitar",
          "una tutoría con el profesor",
          "para revisar el avance",
          "de mi trabajo de investigación"
        ],
        "explanation": "Orden formal español: Sujeto implícito/Verbo (Deseo solicitar) + Complemento directo (una tutoría con el profesor) + Oración final (para revisar el avance de mi trabajo de investigación)."
      },
      {
        "id": "q-es-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat penyelesaian SKS: 'Para mahasiswa wajib menyelesaikan enam puluh kredit per tahun akademik'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "Los estudiantes deben",
          "superar sesenta créditos",
          "en cada curso académico"
        ],
        "correctOrder": [
          "Los estudiantes deben",
          "superar sesenta créditos",
          "en cada curso académico"
        ],
        "explanation": "Orden sintáctico: Sujeto modal (Los estudiantes deben) + Verbo de superación (superar sesenta créditos) + Marco temporal (en cada curso académico)."
      },
      {
        "id": "q-es-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat metodologi: 'Penelitian ilmiah menuntut ketelitian analitis dan landasan metodologis yang kokoh'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "La investigación científica",
          "exige un riguroso análisis",
          "y una sólida metodología"
        ],
        "correctOrder": [
          "La investigación científica",
          "exige un riguroso análisis",
          "y una sólida metodología"
        ],
        "explanation": "Estructura SVO académica: Sujeto (La investigación científica) + Verbo transitivo (exige) + Objetos directos coordinados (un riguroso análisis y una sólida metodología)."
      },
      {
        "id": "q-es-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan kampus menawarkan akses ke pangkalan data jurnal terindeks internasional'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "La biblioteca universitaria",
          "ofrece acceso a bases de datos",
          "de revistas científicas indexadas"
        ],
        "correctOrder": [
          "La biblioteca universitaria",
          "ofrece acceso a bases de datos",
          "de revistas científicas indexadas"
        ],
        "explanation": "Orden regular: Sujeto (La biblioteca universitaria) + Verbo transitivo (ofrece) + Objeto directo y complementos del nombre (acceso a bases de datos de revistas científicas indexadas)."
      },
      {
        "id": "q-es-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Pendaftaran beasiswa pascasarjana akan ditutup secara resmi pada akhir bulan depan'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "La convocatoria oficial de becas",
          "se cerrará formalmente",
          "a finales del próximo mes"
        ],
        "correctOrder": [
          "La convocatoria oficial de becas",
          "se cerrará formalmente",
          "a finales del próximo mes"
        ],
        "explanation": "Estructura pasiva refleja: Sujeto paciente (La convocatoria oficial de becas) + Verbo pronominal pasivo (se cerrará formalmente) + Complemento temporal (a finales del próximo mes)."
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
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Director de tesis doctoral (tutor del TFM)'",
        "sampleAnswer": "Dosen Pembimbing Disertasi Doktor / Tesis Magister",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'Director de tesis doctoral (tutor del TFM)' adalah padanan untuk 'Dosen Pembimbing Disertasi Doktor / Tesis Magister' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Convocatoria oficial de exámenes (ordinaria / extraordinaria)'",
        "sampleAnswer": "Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)",
        "keywords": [
          "jadwal",
          "kuliah"
        ],
        "explanation": "Istilah 'Convocatoria oficial de exámenes (ordinaria / extraordinaria)' adalah padanan untuk 'Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Guía docente de la asignatura'",
        "sampleAnswer": "Silabus Kontrak Pembelajaran Mata Kuliah Resmi",
        "keywords": [
          "silabus",
          "kuliah"
        ],
        "explanation": "Istilah 'Guía docente de la asignatura' adalah padanan untuk 'Silabus Kontrak Pembelajaran Mata Kuliah Resmi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Colegio Mayor / Residencia universitaria'",
        "sampleAnswer": "Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap",
        "keywords": [
          "asrama",
          "kuliah"
        ],
        "explanation": "Istilah 'Colegio Mayor / Residencia universitaria' adalah padanan untuk 'Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Homologación de título extranjero'",
        "sampleAnswer": "Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian",
        "keywords": [
          "penyetaraan",
          "kuliah"
        ],
        "explanation": "Istilah 'Homologación de título extranjero' adalah padanan untuk 'Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Prácticas curriculares externas'",
        "sampleAnswer": "Magang Kerja Kurikuler Wajib di Instansi / Perusahaan",
        "keywords": [
          "magang",
          "kuliah"
        ],
        "explanation": "Istilah 'Prácticas curriculares externas' adalah padanan untuk 'Magang Kerja Kurikuler Wajib di Instansi / Perusahaan' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Sobresaliente (calificación de 9,0 a 10,0)'",
        "sampleAnswer": "Predikat Nilai Sangat Memuaskan (A / Sobresaliente)",
        "keywords": [
          "predikat",
          "kuliah"
        ],
        "explanation": "Istilah 'Sobresaliente (calificación de 9,0 a 10,0)' adalah padanan untuk 'Predikat Nilai Sangat Memuaskan (A / Sobresaliente)' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Plan de estudios de la titulación'",
        "sampleAnswer": "Rencana Kurikulum Program Studi Perguruan Tinggi",
        "keywords": [
          "rencana",
          "kuliah"
        ],
        "explanation": "Istilah 'Plan de estudios de la titulación' adalah padanan untuk 'Rencana Kurikulum Program Studi Perguruan Tinggi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Tasas de matrícula universitaria'",
        "sampleAnswer": "Biaya Pendaftaran dan Administrasi Perkuliahan Resmi",
        "keywords": [
          "biaya",
          "kuliah"
        ],
        "explanation": "Istilah 'Tasas de matrícula universitaria' adalah padanan untuk 'Biaya Pendaftaran dan Administrasi Perkuliahan Resmi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Certificado de empadronamiento'",
        "sampleAnswer": "Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil",
        "keywords": [
          "surat",
          "kuliah"
        ],
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
          "Pendaftaran alamat tempat tinggal resmi di kantor balai kota (Ayuntamiento) setempat",
          "Karcis kereta api",
          "Paspor baru",
          "Kartu perpustakaan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El empadronamiento es el registro administrativo donde consta el domicilio habitual en el municipio."
      },
      {
        "id": "q-es-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa lama durasi masa studi jenjang sarjana (Grado) di universitas-universitas Spanyol pada umumnya?",
        "options": [
          "Umumnya 4 tahun (240 créditos ECTS)",
          "Hanya 1 tahun",
          "7 tahun",
          "2 tahun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Los estudios de Grado en España tienen con carácter general una duración de 4 años (240 ECTS)."
      },
      {
        "id": "q-es-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa nama sertifikat tes kemahiran bahasa Spanyol resmi dari Instituto Cervantes yang berlaku seumur hidup?",
        "options": [
          "DELE (Diplomas de Español como Lengua Extranjera)",
          "TOEFL",
          "IELTS",
          "DELF"
        ],
        "correctAnswerIndex": 0,
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
          "Bulan September atau awal Oktober",
          "Bulan Januari",
          "Bulan Juli",
          "Bulan Mei"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El curso universitario español arranca habitualmente a mediados de septiembre o principios de octubre."
      },
      {
        "id": "q-es-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Convocatoria Extraordinaria' di universitas Spanyol?",
        "options": [
          "Periode ujian perbaikan / remedial (biasanya pada bulan Juni/Juli) bagi siswa yang tidak lulus di ujian reguler",
          "Pesta penyambutan liburan",
          "Ujian khusus atlet",
          "Ujian pemilihan presiden kampus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La convocatoria extraordinaria ofrece una segunda oportunidad para superar las asignaturas suspensas."
      },
      {
        "id": "q-es-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'Tribunal evaluador' dalam sidang akhir TFG/TFM?",
        "options": [
          "Dewan penguji akademis yang mendengarkan, menilai, dan memberikan pertanyaan atas presentasi naskah penelitian",
          "Petugas kepolisian kampus",
          "Kelompok penonton umum",
          "Tim penyedia konsumsi"
        ],
        "correctAnswerIndex": 0,
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
          "Asrama universitas bernilai historis yang tidak hanya menyediakan kamar dan makan, tetapi juga menyelenggarakan kegiatan akademik dan budaya",
          "Sekolah menengah atas",
          "Gedung rektorat",
          "Pusat perbelanjaan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Un Colegio Mayor es un centro residencial universitario que fomenta la formación cultural y científica."
      },
      {
        "id": "q-es-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa memperoleh nilai 'Suspenso' dalam transkrip nilainya, apa artinya?",
        "options": [
          "Nilai di bawah 5,0 (Tidak Lulus / Gagal)",
          "Lulus sempurna",
          "Mendapat beasiswa",
          "Mendapat hadiah uang"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La calificación de 'Suspenso' (0 a 4,9) indica que no se han superado los objetivos del curso."
      },
      {
        "id": "q-es-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti istilah 'Tutoría' dalam kalender akademik perkuliahan Spanyol?",
        "options": [
          "Jam konsultasi bimbingan akademik tatap muka antara dosen dan mahasiswa",
          "Jam istirahat makan siang",
          "Jadwal pertandingan sepak bola",
          "Ujian tengah semester"
        ],
        "correctAnswerIndex": 0,
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
          "Agencia Nacional de Evaluación de la Calidad y Acreditación",
          "Asociación Nacional de Estudiantes de Cataluña",
          "Academia Nacional de Educación Continua",
          "Administración Nacional de Empleo"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La ANECA evalúa y acredita la calidad de títulos y profesorado en el sistema universitario español."
      },
      {
        "id": "q-es-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam penulisan ilmiah bahasa Spanyol, bagian 'Agradecimientos' berisi apa?",
        "options": [
          "Ungkapan terima kasih dan apresiasi kepada pembimbing, institusi penyandang dana, dan keluarga",
          "Daftar rumus matematika",
          "Daftar harga buku",
          "Kritik terhadap dosen"
        ],
        "correctAnswerIndex": 0,
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
          "Trabajo de Fin de Máster (tesis de investigación de maestría)",
          "Título de Formación Militar",
          "Tarifa de Ferrocarril Madrid",
          "Tarjeta Financiera Mensual"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El TFM es el proyecto o memoria científica que culmina los estudios oficiales de máster."
      },
      {
        "id": "q-es-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Elija la conjunción concesiva formal adecuada: '______ los resultados son preliminares, confirman la hipótesis planteada.'",
        "audioVoiceLang": "es-ES",
        "options": [
          "Aunque",
          "Porque",
          "Por consiguiente",
          "Para que"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La conjunción 'Aunque' introduce una cláusula concesiva formal adecuada al registro académico."
      },
      {
        "id": "q-es-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Cómo se denomina el documento oficial que certifica todas las asignaturas cursadas y las notas obtenidas?",
        "audioVoiceLang": "es-ES",
        "options": [
          "El certificado académico oficial (o expediente académico)",
          "El carné de biblioteca",
          "El recibo de alquiler",
          "La tarjeta sanitaria"
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
          "Escala numérica de 0 a 10 (con 5,0 como nota mínima de aprobado)",
          "Escala de letras de la A a la F",
          "Escala de 0 a 100",
          "Escala de 1 a 5"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El sistema de calificación universitario español va del 0 al 10 (5,0 es aprobado; 9,0-10 es sobresaliente)."
      },
      {
        "id": "q-es-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué significa obtener una 'Matrícula de Honor' en una asignatura universitaria?",
        "audioVoiceLang": "es-ES",
        "options": [
          "La máxima distinción académica por rendimiento sobresaliente, que exime del pago de tasas en una asignatura del curso siguiente",
          "Una sanción por impago",
          "Tener que repetir la materia",
          "Una multa económica"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La Matrícula de Honor reconoce la excelencia (máximo una por cada 20 alumnos) y bonifica la matrícula futura."
      },
      {
        "id": "q-es-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué función cumple la plataforma 'UNEDasiss' para estudiantes internacionales?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Gestiona la acreditación de expedientes de bachillerato y pruebas de competencias específicas para el acceso a la universidad española",
          "Vende billetes de tren",
          "Organiza viajes turísticos",
          "Alquila pisos de estudiantes"
        ],
        "correctAnswerIndex": 0,
        "explanation": "UNEDasiss es el servicio de la UNED que gestiona el acceso de estudiantes internacionales a las universidades de España."
      },
      {
        "id": "q-es-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué es la 'tarjeta TIE' para un estudiante extranjero no comunitario en España?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Tarjeta de Identidad de Extranjero que acredita la autorización de estancia legal por estudios",
          "Tarjeta de transporte de metro",
          "Tarjeta de descuento de supermercado",
          "Tarjeta de socio de club"
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
          "La clase magistral expone la teoría en aula magna; el seminario debate textos y aplica casos en grupos reducidos",
          "La clase magistral es por la noche",
          "El seminario es solo deporte",
          "No existe diferencia alguna"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La clase magistral fundamenta el marco conceptual y el seminario profundiza mediante el análisis interactivo."
      },
      {
        "id": "q-es-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué cobertura ofrece habitualmente una beca de posgrado de la Fundación Carolina?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Matrícula académica, billete de avión, seguro médico y dotación mensual de manutención",
          "Solo una camiseta del programa",
          "Un descuento en librerías",
          "Un préstamo bancario con intereses"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Las prestigiosas becas de la Fundación Carolina financian íntegramente los estudios de posgrado en España."
      },
      {
        "id": "q-es-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "¿Qué se entiende por un 'crédito ECTS' en el Espacio Europeo de Educación Superior?",
        "audioVoiceLang": "es-ES",
        "options": [
          "Una unidad de medida que representa entre 25 y 30 horas de trabajo total del estudiante (clases y estudio autónomo)",
          "Un euro de descuento",
          "Un punto de gimnasio",
          "Una hora de examen"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El crédito ECTS cuantifica el esfuerzo formativo integral del estudiante en el marco europeo."
      },
      {
        "id": "q-es-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Redacte una síntesis de su proyecto de investigación académica y la justificación metodológica.",
        "sampleAnswer": "El resumen debe formular la hipótesis, el marco conceptual, el diseño metodológico cuantitativo o cualitativo y el impacto científico.",
        "keywords": [
          "hipótesis",
          "metodología",
          "justificación",
          "impacto"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Explique cómo citar fuentes correctamente y evitar el plagio según el formato APA en trabajos académicos.",
        "sampleAnswer": "Incluir autor y año en citas integradas, referenciar fielmente la bibliografía final y distinguir entre citas textuales y paráfrasis.",
        "keywords": [
          "citación",
          "APA",
          "plagio",
          "bibliografía"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "¿Por qué eligió España como destino universitario a través de las convocatorias de becas internacionales?",
        "sampleAnswer": "Por la excelencia de sus facultades, el liderazgo de sus grupos de investigación y la proyección global del idioma español.",
        "keywords": [
          "España",
          "excelencia",
          "investigación",
          "beca"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Detalle los pasos para la solicitud y renovación de la Tarjeta de Identidad de Extranjero (TIE) en la Oficina de Extranjería.",
        "sampleAnswer": "Petición de cita previa, modelo EX-17, empadronamiento actualizado, justificante de matrícula y abono de la tasa 790 código 012.",
        "keywords": [
          "TIE",
          "extranjería",
          "empadronamiento",
          "matrícula"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Describa la estructura típica de un Trabajo de Fin de Grado o Máster (TFG/TFM).",
        "sampleAnswer": "Portada institucional, índice, resumen y palabras clave, introducción, marco teórico, metodología, resultados, discusión y conclusiones.",
        "keywords": [
          "estructura",
          "marco_teórico",
          "metodología",
          "conclusiones"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "¿Cómo se prepara para la defensa oral de su investigación ante un tribunal académico universitario?",
        "sampleAnswer": "Elaboración de una presentación audiovisual clara, control estricto del tiempo asignado y anticipación de posibles preguntas críticas.",
        "keywords": [
          "defensa",
          "tribunal",
          "presentación",
          "tiempo"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Explique la importancia de la relación académica con su tutor o director de tesis.",
        "sampleAnswer": "El tutor orienta las decisiones metodológicas, sugiere lecturas clave y valida los avances periódicos hacia el manuscrito final.",
        "keywords": [
          "tutor",
          "orientación",
          "retroalimentación",
          "tesis"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "¿Qué valor aporta la inmersión cultural y el dominio del español académico a su perfil profesional?",
        "sampleAnswer": "Facilita la comunicación en el ámbito hispanohablante global, amplia horizontes de colaboración y refuerza la capacidad analítica.",
        "keywords": [
          "inmersión",
          "perfil",
          "colaboración",
          "comunicación"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Describa cómo piensa aplicar las competencias adquiridas en el desarrollo de Indonesia.",
        "sampleAnswer": "Promoviendo proyectos de transferencia tecnológica, sostenibilidad ambiental o políticas públicas inspiradas en modelos exitosos.",
        "keywords": [
          "Indonesia",
          "transferencia",
          "desarrollo",
          "competencias"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "¿Qué estrategias implementará para integrarse activamente en la vida universitaria española?",
        "sampleAnswer": "Participación en congresos estudiantiles, grupos de estudio colaborativo, asociaciones culturales y voluntariado universitario.",
        "keywords": [
          "integración",
          "asociaciones",
          "colaboración",
          "vida_universitaria"
        ],
        "explanation": "Evaluación de la madurez científica y del dominio de las convenciones universitarias españolas."
      },
      {
        "id": "q-es-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat permohonan tutorial: 'Saya ingin memohon sesi tutorial dengan dosen penanggung jawab untuk meninjau tesis saya'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "Deseo solicitar",
          "una tutoría con el profesor",
          "para revisar el avance",
          "de mi trabajo de investigación"
        ],
        "correctOrder": [
          "Deseo solicitar",
          "una tutoría con el profesor",
          "para revisar el avance",
          "de mi trabajo de investigación"
        ],
        "explanation": "Orden formal español: Sujeto implícito/Verbo (Deseo solicitar) + Complemento directo (una tutoría con el profesor) + Oración final (para revisar el avance de mi trabajo de investigación)."
      },
      {
        "id": "q-es-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat penyelesaian SKS: 'Para mahasiswa wajib menyelesaikan enam puluh kredit per tahun akademik'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "Los estudiantes deben",
          "superar sesenta créditos",
          "en cada curso académico"
        ],
        "correctOrder": [
          "Los estudiantes deben",
          "superar sesenta créditos",
          "en cada curso académico"
        ],
        "explanation": "Orden sintáctico: Sujeto modal (Los estudiantes deben) + Verbo de superación (superar sesenta créditos) + Marco temporal (en cada curso académico)."
      },
      {
        "id": "q-es-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat metodologi: 'Penelitian ilmiah menuntut ketelitian analitis dan landasan metodologis yang kokoh'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "La investigación científica",
          "exige un riguroso análisis",
          "y una sólida metodología"
        ],
        "correctOrder": [
          "La investigación científica",
          "exige un riguroso análisis",
          "y una sólida metodología"
        ],
        "explanation": "Estructura SVO académica: Sujeto (La investigación científica) + Verbo transitivo (exige) + Objetos directos coordinados (un riguroso análisis y una sólida metodología)."
      },
      {
        "id": "q-es-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat perpustakaan: 'Perpustakaan kampus menawarkan akses ke pangkalan data jurnal terindeks internasional'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "La biblioteca universitaria",
          "ofrece acceso a bases de datos",
          "de revistas científicas indexadas"
        ],
        "correctOrder": [
          "La biblioteca universitaria",
          "ofrece acceso a bases de datos",
          "de revistas científicas indexadas"
        ],
        "explanation": "Orden regular: Sujeto (La biblioteca universitaria) + Verbo transitivo (ofrece) + Objeto directo y complementos del nombre (acceso a bases de datos de revistas científicas indexadas)."
      },
      {
        "id": "q-es-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kalimat beasiswa: 'Pendaftaran beasiswa pascasarjana akan ditutup secara resmi pada akhir bulan depan'",
        "audioVoiceLang": "es-ES",
        "scrambledWords": [
          "La convocatoria oficial de becas",
          "se cerrará formalmente",
          "a finales del próximo mes"
        ],
        "correctOrder": [
          "La convocatoria oficial de becas",
          "se cerrará formalmente",
          "a finales del próximo mes"
        ],
        "explanation": "Estructura pasiva refleja: Sujeto paciente (La convocatoria oficial de becas) + Verbo pronominal pasivo (se cerrará formalmente) + Complemento temporal (a finales del próximo mes)."
      },
      {
        "id": "q-es-art-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Director de tesis doctoral (tutor del TFM)'",
        "sampleAnswer": "Dosen Pembimbing Disertasi Doktor / Tesis Magister",
        "keywords": [
          "dosen",
          "kuliah"
        ],
        "explanation": "Istilah 'Director de tesis doctoral (tutor del TFM)' adalah padanan untuk 'Dosen Pembimbing Disertasi Doktor / Tesis Magister' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Convocatoria oficial de exámenes (ordinaria / extraordinaria)'",
        "sampleAnswer": "Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)",
        "keywords": [
          "jadwal",
          "kuliah"
        ],
        "explanation": "Istilah 'Convocatoria oficial de exámenes (ordinaria / extraordinaria)' adalah padanan untuk 'Jadwal Periode Pelaksanaan Ujian Resmi (Reguler / Remedial)' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Guía docente de la asignatura'",
        "sampleAnswer": "Silabus Kontrak Pembelajaran Mata Kuliah Resmi",
        "keywords": [
          "silabus",
          "kuliah"
        ],
        "explanation": "Istilah 'Guía docente de la asignatura' adalah padanan untuk 'Silabus Kontrak Pembelajaran Mata Kuliah Resmi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Colegio Mayor / Residencia universitaria'",
        "sampleAnswer": "Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap",
        "keywords": [
          "asrama",
          "kuliah"
        ],
        "explanation": "Istilah 'Colegio Mayor / Residencia universitaria' adalah padanan untuk 'Asrama Mahasiswa Kampus Tradisional Berfasilitas Lengkap' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Homologación de título extranjero'",
        "sampleAnswer": "Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian",
        "keywords": [
          "penyetaraan",
          "kuliah"
        ],
        "explanation": "Istilah 'Homologación de título extranjero' adalah padanan untuk 'Penyetaraan Ijazah Luar Negeri Resmi oleh Kementerian' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Prácticas curriculares externas'",
        "sampleAnswer": "Magang Kerja Kurikuler Wajib di Instansi / Perusahaan",
        "keywords": [
          "magang",
          "kuliah"
        ],
        "explanation": "Istilah 'Prácticas curriculares externas' adalah padanan untuk 'Magang Kerja Kurikuler Wajib di Instansi / Perusahaan' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Sobresaliente (calificación de 9,0 a 10,0)'",
        "sampleAnswer": "Predikat Nilai Sangat Memuaskan (A / Sobresaliente)",
        "keywords": [
          "predikat",
          "kuliah"
        ],
        "explanation": "Istilah 'Sobresaliente (calificación de 9,0 a 10,0)' adalah padanan untuk 'Predikat Nilai Sangat Memuaskan (A / Sobresaliente)' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Plan de estudios de la titulación'",
        "sampleAnswer": "Rencana Kurikulum Program Studi Perguruan Tinggi",
        "keywords": [
          "rencana",
          "kuliah"
        ],
        "explanation": "Istilah 'Plan de estudios de la titulación' adalah padanan untuk 'Rencana Kurikulum Program Studi Perguruan Tinggi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Tasas de matrícula universitaria'",
        "sampleAnswer": "Biaya Pendaftaran dan Administrasi Perkuliahan Resmi",
        "keywords": [
          "biaya",
          "kuliah"
        ],
        "explanation": "Istilah 'Tasas de matrícula universitaria' adalah padanan untuk 'Biaya Pendaftaran dan Administrasi Perkuliahan Resmi' di perguruan tinggi Spanyol."
      },
      {
        "id": "q-es-art-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Terjemahkan istilah akademik perkuliahan Spanyol berikut ke dalam bahasa Indonesia: 'Certificado de empadronamiento'",
        "sampleAnswer": "Surat Keterangan Domisili Resmi dari Kantor Catatan Sipil",
        "keywords": [
          "surat",
          "kuliah"
        ],
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
          "Pendaftaran alamat tempat tinggal resmi di kantor balai kota (Ayuntamiento) setempat",
          "Karcis kereta api",
          "Paspor baru",
          "Kartu perpustakaan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El empadronamiento es el registro administrativo donde consta el domicilio habitual en el municipio."
      },
      {
        "id": "q-es-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa lama durasi masa studi jenjang sarjana (Grado) di universitas-universitas Spanyol pada umumnya?",
        "options": [
          "Umumnya 4 tahun (240 créditos ECTS)",
          "Hanya 1 tahun",
          "7 tahun",
          "2 tahun"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Los estudios de Grado en España tienen con carácter general una duración de 4 años (240 ECTS)."
      },
      {
        "id": "q-es-bb-4",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa nama sertifikat tes kemahiran bahasa Spanyol resmi dari Instituto Cervantes yang berlaku seumur hidup?",
        "options": [
          "DELE (Diplomas de Español como Lengua Extranjera)",
          "TOEFL",
          "IELTS",
          "DELF"
        ],
        "correctAnswerIndex": 0,
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
          "Bulan September atau awal Oktober",
          "Bulan Januari",
          "Bulan Juli",
          "Bulan Mei"
        ],
        "correctAnswerIndex": 0,
        "explanation": "El curso universitario español arranca habitualmente a mediados de septiembre o principios de octubre."
      },
      {
        "id": "q-es-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa yang dimaksud dengan 'Convocatoria Extraordinaria' di universitas Spanyol?",
        "options": [
          "Periode ujian perbaikan / remedial (biasanya pada bulan Juni/Juli) bagi siswa yang tidak lulus di ujian reguler",
          "Pesta penyambutan liburan",
          "Ujian khusus atlet",
          "Ujian pemilihan presiden kampus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La convocatoria extraordinaria ofrece una segunda oportunidad para superar las asignaturas suspensas."
      },
      {
        "id": "q-es-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa peran dari 'Tribunal evaluador' dalam sidang akhir TFG/TFM?",
        "options": [
          "Dewan penguji akademis yang mendengarkan, menilai, dan memberikan pertanyaan atas presentasi naskah penelitian",
          "Petugas kepolisian kampus",
          "Kelompok penonton umum",
          "Tim penyedia konsumsi"
        ],
        "correctAnswerIndex": 0,
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
          "Asrama universitas bernilai historis yang tidak hanya menyediakan kamar dan makan, tetapi juga menyelenggarakan kegiatan akademik dan budaya",
          "Sekolah menengah atas",
          "Gedung rektorat",
          "Pusat perbelanjaan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Un Colegio Mayor es un centro residencial universitario que fomenta la formación cultural y científica."
      },
      {
        "id": "q-es-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bila seorang mahasiswa memperoleh nilai 'Suspenso' dalam transkrip nilainya, apa artinya?",
        "options": [
          "Nilai di bawah 5,0 (Tidak Lulus / Gagal)",
          "Lulus sempurna",
          "Mendapat beasiswa",
          "Mendapat hadiah uang"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La calificación de 'Suspenso' (0 a 4,9) indica que no se han superado los objetivos del curso."
      },
      {
        "id": "q-es-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa arti istilah 'Tutoría' dalam kalender akademik perkuliahan Spanyol?",
        "options": [
          "Jam konsultasi bimbingan akademik tatap muka antara dosen dan mahasiswa",
          "Jam istirahat makan siang",
          "Jadwal pertandingan sepak bola",
          "Ujian tengah semester"
        ],
        "correctAnswerIndex": 0,
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
          "Agencia Nacional de Evaluación de la Calidad y Acreditación",
          "Asociación Nacional de Estudiantes de Cataluña",
          "Academia Nacional de Educación Continua",
          "Administración Nacional de Empleo"
        ],
        "correctAnswerIndex": 0,
        "explanation": "La ANECA evalúa y acredita la calidad de títulos y profesorado en el sistema universitario español."
      },
      {
        "id": "q-es-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam penulisan ilmiah bahasa Spanyol, bagian 'Agradecimientos' berisi apa?",
        "options": [
          "Ungkapan terima kasih dan apresiasi kepada pembimbing, institusi penyandang dana, dan keluarga",
          "Daftar rumus matematika",
          "Daftar harga buku",
          "Kritik terhadap dosen"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Los agradecimientos reconocen formalmente el apoyo recibido durante la realización de la tesis."
      }
    ]
  }
};
