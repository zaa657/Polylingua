import { StudyTargetTest, QuizQuestion, StudyAbroadDestination } from '@/types/learning';
import {
  THAILAND_STUDY_TESTS,
  RUSSIA_STUDY_TESTS,
  ARABIC_STUDY_TESTS,
  FRANCE_STUDY_TESTS,
  NETHERLANDS_STUDY_TESTS,
  GERMANY_STUDY_TESTS,
  SPAIN_STUDY_TESTS,
} from './studyTargetTestsExtended';

export {
  THAILAND_STUDY_TESTS,
  RUSSIA_STUDY_TESTS,
  ARABIC_STUDY_TESTS,
  FRANCE_STUDY_TESTS,
  NETHERLANDS_STUDY_TESTS,
  GERMANY_STUDY_TESTS,
  SPAIN_STUDY_TESTS,
};

export const CHINA_50_QUESTIONS: QuizQuestion[] = [
  {
    "id": "q-cn-pg-1",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilih kata depan (preposisi formal) yang paling tepat untuk melengkapi kalimat administrasi kampus berikut:",
    "targetSentence": "请____学校的最新规定提交奖学金申请材料。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "按照 (ànzhào) — sesuai dengan / menurut ketentuan",
      "尽管 (jǐnguǎn) — meskipun / walaupun",
      "甚至 (shènzhì) — bahkan / sampai-sampai",
      "几乎 (jīhū) — hampir / nyaris"
    ],
    "correctAnswerIndex": 0,
    "explanation": "'按照' (ànzhào) berarti 'sesuai dengan / menurut ketentuan'. Digunakan dalam instruksi resmi administrasi universitas di Tiongkok."
  },
  {
    "id": "q-cn-pg-2",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilih kata sifat yang tepat untuk melengkapi kalimat situasi darurat di laboratorium riset:",
    "targetSentence": "遇到突发紧急情况时，最重要的是保持____并听从导师指导。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "骄傲 (jiāo'ào) — sombong / bangga",
      "冷静 (lěngjìng) — tenang / berkepala dingin",
      "马虎 (mǎhu) — ceroboh / sembrono",
      "活泼 (huópo) — lincah / ceria"
    ],
    "correctAnswerIndex": 1,
    "explanation": "'冷静' (lěngjìng) berarti tenang / berkepala dingin. Ketenangan adalah kompetensi kunci dalam SOP keselamatan laboratorium Tiongkok."
  },
  {
    "id": "q-cn-pg-3",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilih pasangan kata kerja (kolokasi) yang tepat untuk mendampingi objek 'prestasi/hasil akademik (成绩)':",
    "targetSentence": "经过一年的刻苦钻研，他在学术研究中____了优异的成绩。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "发生 (fāshēng) — terjadi / berlangsung",
      "建立 (jiànlì) — membangun / mendirikan",
      "取得 (qǔdé) — meraih / memperoleh",
      "造成 (zàochéng) — menimbulkan / mengakibatkan"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Dalam bahasa Mandarin formal, kolokasi baku untuk prestasi (成绩) adalah 取得成绩 (meraih prestasi)."
  },
  {
    "id": "q-cn-pg-4",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilih pasangan konjungsi konsesif yang tepat untuk menghubungkan dua klausa berikut:",
    "targetSentence": "这篇学术论文____篇幅不长，____论点非常鲜明有力。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "不但...而且... (búdàn... érqiě...) — tidak hanya... tetapi juga...",
      "只要...就... (zhǐyào... jiù...) — asalkan... maka...",
      "因为...所以... (yīnwèi... suǒyǐ...) — karena... maka...",
      "虽然...但是... (suīrán... dànshì...) — meskipun... tetapi..."
    ],
    "correctAnswerIndex": 3,
    "explanation": "'虽然...但是...' digunakan untuk menyatakan pertentangan konsesif (meskipun... tetapi...)."
  },
  {
    "id": "q-cn-pg-5",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Saat wawancara lisan beasiswa/kampus, dosen bertanya: '你为什么选择来我们大学攻读硕士学位？'. Jawaban terstruktur dan paling santun adalah:",
    "audioVoiceLang": "zh-CN",
    "options": [
      "在我看来，贵校在该领域拥有顶尖的科研师资和实验平台，这非常符合我的学术研究方向。 — Menurut saya, universitas Anda memiliki pengajar riset dan fasilitas lab terbaik yang sesuai dengan arah penelitian saya.",
      "我也不知道，是我的父母让我申请贵校的，我觉得随便读哪个学校都可以。 — Saya juga tidak tahu, orang tua saya yang menyuruh mendaftar, kuliah di mana saja sama saja.",
      "贵校在市中心，买东西很方便，有很多好吃的餐馆，所以我很喜欢。 — Kampus Anda di pusat kota, mudah berbelanja dan banyak restoran enak.",
      "因为其他大学的学费太贵了，只有贵校给的奖学金最多。 — Karena biaya kuliah kampus lain terlalu mahal dan hanya kampus Anda yang memberi beasiswa terbesar."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Jawaban formal akademik harus berorientasi pada reputasi ilmiah (科研师资), sarana riset (实验平台), dan kesesuaian minat studi (学术研究方向)."
  },
  {
    "id": "q-cn-pg-6",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Jika dalam seminar dosen berbicara terlalu cepat dan Anda belum paham, ungkapan paling santun untuk memohon pengulangan adalah:",
    "audioVoiceLang": "zh-CN",
    "options": [
      "你说得太快了，我听不懂，你重新说一遍吧！ — Anda bicara terlalu cepat, saya tidak mengerti, ulangi sekali lagi!",
      "教授，不好意思，刚才那部分我没太听懂，能不能请您再详细阐述一下？ — Profesor, mohon maaf, bagian tadi saya kurang paham, bisakah Anda menjelaskannya lebih rinci?",
      "算了，我不想听了，你直接把PPT发给我看吧。 — Sudahlah, saya malas mendengar, kirimkan saja PPT-nya kepada saya.",
      "你说的这个理论根本就不对，我不赞成。 — Teori yang Anda katakan sama sekali salah, saya tidak setuju."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Gunakan kata santun 不好意思 (maaf), sebut gelar 教授 (Profesor), dan gunakan verba formal 请您再详细阐述一下 (mohon berkenan menguraikan kembali)."
  },
  {
    "id": "q-cn-pg-7",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pada silabus ujian tertulis tertulis: '本门课程期末考核形式为闭卷笔试'. Arti istilah '闭卷笔试' adalah:",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Ujian lisan wawancara tatap muka",
      "Ujian kelompok santai tanpa batas waktu",
      "Ujian tertulis tutup buku (tanpa boleh membuka catatan atau buku)",
      "Ujian praktik lapangan mandiri"
    ],
    "correctAnswerIndex": 2,
    "explanation": "闭卷笔试 (bìjuàn bǐshì) adalah ujian tertulis tutup buku resmi (lawan dari 开卷考试 - open book)."
  },
  {
    "id": "q-cn-pg-8",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Konjungsi ragam tulis resmi (书面语) yang paling tepat untuk menambahkan poin pendukung dalam Proposal Rencana Studi (学习计划) adalah:",
    "audioVoiceLang": "zh-CN",
    "options": [
      "还有啊 (hái yǒu a) — satu lagi ya (ragam lisan santai)",
      "顺便说一下 (shùnbiàn shuō yíxià) — ngomong-ngomong (ragam percakapan)",
      "对啦 (duì le) — oh iya (ragam lisan)",
      "此外 (cǐwài) — selain itu / di samping itu (ragam tulis formal)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "'此外' (cǐwài: selain itu) adalah konjungsi书面语 standar; hindari bahasa lisan santai seperti '还有啊' atau '对啦'."
  },
  {
    "id": "q-cn-pg-9",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilih verba kausatif berkonotasi negatif yang paling tepat untuk melengkapi kalimat analisis dampak:",
    "targetSentence": "实验过程中温度控制不当，往往会____化合物发生不可逆的化学分解。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "导致 (dǎozhì) — mengakibatkan / menyebabkan (dampak negatif)",
      "促进 (cùjìn) — mendorong / memajukan (dampak positif)",
      "有利于 (yǒulì yú) — bermanfaat bagi / menguntungkan",
      "取得 (qǔdé) — memperoleh / meraih (prestasi)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "'导致' (dǎozhì) khusus digunakan untuk akibat negatif yang tidak diharapkan (dekomposisi senyawa yang merusak)."
  },
  {
    "id": "q-cn-pg-10",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Partikel klasik '之' (zhī) dalam kalimat ilmiah '重中之重' (zhòng zhōng zhī zhòng) berfungsi sebagai:",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Kata ganti penunjuk orang ketiga jamak",
      "Penanda kepemilikan / relasi atributif formal (setara dengan kata '的')",
      "Kata seru penutup kalimat tanya",
      "Kata bilangan kelipatan sepuluh"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Partikel 文言文 '之' dalam bahasa tulis akademik modern berfungsi sebagai modifikator atributif formal yang setara dengan '的'."
  },
  {
    "id": "q-cn-es-1",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "科学研究是一条漫长而艰辛的道路，最忌讳的就是半途而废。 (Kēxué yánjiū shì yì tiáo màncháng ér jiānxīn de dàolù, zuì jìhuì de jiù shì bàntú'érfèi.)",
    "audioVoiceLang": "zh-CN",
    "sampleAnswer": "Penelitian ilmiah adalah jalan yang panjang dan penuh liku kepedihan, hal yang paling dipantangkan adalah berhenti di tengah jalan.",
    "keywords": [
      "penelitian",
      "ilmiah",
      "jalan",
      "panjang"
    ],
    "explanation": "Kalimat akademik pola 成语 (Chéngyǔ) Kunci 1: Filosofi Ketekunan & Perjuangan Hidup: '科学研究是一条漫长而艰辛的道路，最忌讳的就是半途而废。' diterjemahkan secara akurat menjadi 'Penelitian ilmiah adalah jalan yang panjang dan penuh liku kepedihan, hal yang paling dipantangkan adalah berhenti di tengah jalan.'."
  },
  {
    "id": "q-cn-es-2",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "面对未来可能出现的就业竞争压力，大学生应当未雨绸缪，及早规划职业道路。 (Miànduì wèilái kěnéng chūxiàn de jiùyè jìngzhēng yālì, dàxuéshēng yīngdāng wèiyǔchóumóu, jízǎo guīhuà zhíyè dàolù.)",
    "audioVoiceLang": "zh-CN",
    "sampleAnswer": "Menghadapi tekanan persaingan kerja yang mungkin muncul di masa depan, mahasiswa patut bersiap siaga sedia payung sebelum hujan, merencanakan jalur karier sedini mungkin.",
    "keywords": [
      "menghadapi",
      "tekanan",
      "persaingan",
      "kerja"
    ],
    "explanation": "Kalimat akademik pola 成语 (Chéngyǔ) Kunci 2: Strategi, Kebijaksanaan, & Kewaspadaan: '面对未来可能出现的就业竞争压力，大学生应当未雨绸缪，及早规划职业道路。' diterjemahkan secara akurat menjadi 'Menghadapi tekanan persaingan kerja yang mungkin muncul di masa depan, mahasiswa patut bersiap siaga sedia payung sebelum hujan, merencanakan jalur karier sedini mungkin.'."
  },
  {
    "id": "q-cn-es-3",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "该学者毕业于北京大学物理系，其主要研究方向为量子计算。 (Gāi xuézhě bìyè yú Běijīng Dàxué wùlǐ xì, qí zhǔyào yánjiū fāngxiàng wéi liàngzǐ jìsuàn.)",
    "audioVoiceLang": "zh-CN",
    "sampleAnswer": "Ilmuwan tersebut lulus dari Departemen Fisika Universitas Peking, arah penelitian utamanya adalah komputasi kuantum.",
    "keywords": [
      "ilmuwan",
      "tersebut",
      "lulus",
      "departemen"
    ],
    "explanation": "Kalimat akademik pola Partikel Klasik 文言虚词 dalam Mandarin Modern: 之, 其, 以, 于: '该学者毕业于北京大学物理系，其主要研究方向为量子计算。' diterjemahkan secara akurat menjadi 'Ilmuwan tersebut lulus dari Departemen Fisika Universitas Peking, arah penelitian utamanya adalah komputasi kuantum.'."
  },
  {
    "id": "q-cn-es-4",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "鉴于当前国际金融市场的严峻形势，各国央行势必采取更加谨慎的货币政策。 (Jiànyú dāngqián guójì jīnróng shìchǎng de yánjùn xíngshì, gè guó yāngháng shìbì cǎiqǔ gèngjiā jǐnshèn de huòbì zhèngcè.)",
    "audioVoiceLang": "zh-CN",
    "sampleAnswer": "Menimbang situasi genting pasar keuangan internasional saat ini, bank-bank sentral berbagai negara pasti tak terelakkan akan mengambil kebijakan moneter yang jauh lebih berhati-hati.",
    "keywords": [
      "menimbang",
      "situasi",
      "genting",
      "pasar"
    ],
    "explanation": "Kalimat akademik pola Penanda Wacana Deduktif Akademis: 鉴于 (jiànyú), 势必 (shìbì), 毋庸置疑: '鉴于当前国际金融市场的严峻形势，各国央行势必采取更加谨慎的货币政策。' diterjemahkan secara akurat menjadi 'Menimbang situasi genting pasar keuangan internasional saat ini, bank-bank sentral berbagai negara pasti tak terelakkan akan mengambil kebijakan moneter yang jauh lebih berhati-hati.'."
  },
  {
    "id": "q-cn-es-5",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "他今天在学术上所取得的非凡成就，很大程度上缘于他童年时期养成的阅读习惯。 (Tā jīntiān zài xuéshù shàng suǒ qǔdé de fēifán chéngjiù, hěn dà chéngdù shàng yuányú tā tóngnián shíqī yǎngchéng de yuèdú xíguàn.)",
    "audioVoiceLang": "zh-CN",
    "sampleAnswer": "Prestasi luar biasa yang diraihnya dalam dunia akademik hari ini, sebagian besar berakar dari kebiasaan membaca yang ditanamkan sejak masa kanak-kanaknya.",
    "keywords": [
      "prestasi",
      "luar",
      "biasa",
      "diraihnya"
    ],
    "explanation": "Kalimat akademik pola Pola Kausalitas Filosofis: 缘于 (yuányú), 归咎于 (guījiùyú), 取决于: '他今天在学术上所取得的非凡成就，很大程度上缘于他童年时期养成的阅读习惯。' diterjemahkan secara akurat menjadi 'Prestasi luar biasa yang diraihnya dalam dunia akademik hari ini, sebagian besar berakar dari kebiasaan membaca yang ditanamkan sejak masa kanak-kanaknya.'."
  },
  {
    "id": "q-cn-es-6",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "凡是在本学期取得HSK 6级高分的国际留学生，均有资格申请优秀学业一等奖学金。 (Fánshì zài běn xuéqī qǔdé HSK liù jí gāofēn de guójì liúxuéshēng, jūn yǒu zīgé shēnqǐng yōuxiù xuéyè yīděng jiǎngxuéjīn.)",
    "audioVoiceLang": "zh-CN",
    "sampleAnswer": "Semua mahasiswa internasional yang meraih skor tinggi HSK 6 pada semester ini, seluruhnya berhak mengajukan beasiswa prestasi akademik peringkat satu.",
    "keywords": [
      "semua",
      "mahasiswa",
      "internasional",
      "meraih"
    ],
    "explanation": "Kalimat akademik pola Sintaksis Bahasa Hukum & Regulasi: 凡是...均... / 一概 (yígài): '凡是在本学期取得HSK 6级高分的国际留学生，均有资格申请优秀学业一等奖学金。' diterjemahkan secara akurat menjadi 'Semua mahasiswa internasional yang meraih skor tinggi HSK 6 pada semester ini, seluruhnya berhak mengajukan beasiswa prestasi akademik peringkat satu.'."
  },
  {
    "id": "q-cn-es-7",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "故宫博物院展出的历代青铜器与古代书画藏品，其工艺精湛，令人叹为观止。 (Gùgōng Bówùyuàn zhǎnchū de lìdài qīngtóngqì yǔ gǔdài shūhuà cángpǐn, qí gōngyì jīngzhàn, lìng rén tànwéiguānzhǐ.)",
    "audioVoiceLang": "zh-CN",
    "sampleAnswer": "Koleksi bejana perunggu dan lukisan kaligrafi kuno yang dipamerkan di Museum Istana Kota Terlarang, keahlian kriyanya begitu luar biasa hingga membuat siapa pun yang memandangnya takjub berdecak kagum.",
    "keywords": [
      "koleksi",
      "bejana",
      "perunggu",
      "lukisan"
    ],
    "explanation": "Kalimat akademik pola Ekspresi Derajat Ekstrem Abstrak: 无可奈何, 叹为观止, 淋漓尽致: '故宫博物院展出的历代青铜器与古代书画藏品，其工艺精湛，令人叹为观止。' diterjemahkan secara akurat menjadi 'Koleksi bejana perunggu dan lukisan kaligrafi kuno yang dipamerkan di Museum Istana Kota Terlarang, keahlian kriyanya begitu luar biasa hingga membuat siapa pun yang memandangnya takjub berdecak kagum.'."
  },
  {
    "id": "q-cn-es-8",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "这次学术讲座使我明白了科研诚信的重要性。 (Zhè cì xuéshù jiǎngzuò shǐ wǒ míngbai le kēyán chéngxìn de zhòngyàoxìng.)",
    "audioVoiceLang": "zh-CN",
    "sampleAnswer": "Kuliah umum akademik kali ini membuat saya memahami pentingnya integritas riset ilmiah.",
    "keywords": [
      "kuliah",
      "umum",
      "akademik",
      "kali"
    ],
    "explanation": "Kalimat akademik pola Analisis Kesalahan Kalimat Kompleks 病句 (Bìngjù): Kerancuan Subjek & Logika: '这次学术讲座使我明白了科研诚信的重要性。' diterjemahkan secara akurat menjadi 'Kuliah umum akademik kali ini membuat saya memahami pentingnya integritas riset ilmiah.'."
  },
  {
    "id": "q-cn-es-9",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "人工智能技术的迅猛发展诚然极大地解放了生产力，然而其引发的伦理风险与法律滞后亦不容忽视。 (Réngōng zhìnéng jìshù de xùnměng fāzhǎn chéngrán jí dà de jiěfàng le shēngchǎnlì, rán'ér qí yǐnfā de lúnlǐ fēngxiǎn yǔ fǎlǜ zhìhòu yì bùróng hūshì.)",
    "audioVoiceLang": "zh-CN",
    "sampleAnswer": "Perkembangan pesat teknologi kecerdasan buatan memang benar secara masif membebaskan daya produktivitas, namun risiko etika dan ketertinggalan regulasi hukum yang dipicunya juga tidak boleh dipandang sebelah mata.",
    "keywords": [
      "perkembangan",
      "pesat",
      "teknologi",
      "kecerdasan"
    ],
    "explanation": "Kalimat akademik pola Retorika Debat Publik & Esai Kritis: 诚然...固然...然而: '人工智能技术的迅猛发展诚然极大地解放了生产力，然而其引发的伦理风险与法律滞后亦不容忽视。' diterjemahkan secara akurat menjadi 'Perkembangan pesat teknologi kecerdasan buatan memang benar secara masif membebaskan daya produktivitas, namun risiko etika dan ketertinggalan regulasi hukum yang dipicunya juga tidak boleh dipandang sebelah mata.'."
  },
  {
    "id": "q-cn-es-10",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "纵观人类历史长河，唯有秉持开放包容、兼收并蓄之胸襟，不同文明方能在互学互鉴中共同绽放异彩。 (Zòngguān rénlèi lìshǐ chánghé, wéiyǒu bǐngchí kāifàng bāoróng, jiānshōubìngxù zhī xiōngjīn, bùtóng wénmíng fāng néng zài hùxué hùjiàn zhōng gòngtóng zhànfàng yìcǎi.)",
    "audioVoiceLang": "zh-CN",
    "sampleAnswer": "Memandang panorama panjang sejarah peradaban manusia, hanya dengan memegang teguh keterbukaan inklusif dan kelapangan dada yang merangkul keberagaman, peradaban-peradaban yang berlainan baru dapat bersama-sama memancarkan kemilau kejayaan dalam semangat saling belajar dan bertukar kebajikan.",
    "keywords": [
      "memandang",
      "panorama",
      "panjang",
      "sejarah"
    ],
    "explanation": "Kalimat akademik pola Sintaksis Tingkat Mahir Fluktuasi Wacana & Evaluasi Komprehensif HSK 6: '纵观人类历史长河，唯有秉持开放包容、兼收并蓄之胸襟，不同文明方能在互学互鉴中共同绽放异彩。' diterjemahkan secara akurat menjadi 'Memandang panorama panjang sejarah peradaban manusia, hanya dengan memegang teguh keterbukaan inklusif dan kelapangan dada yang merangkul keberagaman, peradaban-peradaban yang berlainan baru dapat bersama-sama memancarkan kemilau kejayaan dalam semangat saling belajar dan bertukar kebajikan.'."
  },
  {
    "id": "q-cn-sk-1",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi kalimat instruksi penyerahan berkas beasiswa yang baku:",
    "scrambledWords": [
      "提交至",
      "留学生办公室",
      "请在截止日期前",
      "将申请奖学金的材料"
    ],
    "correctOrder": [
      "请在截止日期前",
      "将申请奖学金的材料",
      "提交至",
      "留学生办公室"
    ],
    "targetSentence": "请在截止日期前将申请奖学金的材料提交至留学生办公室。",
    "audioVoiceLang": "zh-CN",
    "explanation": "Urutan baku: Keterangan waktu (请在截止日期前) + Objek penanda disposisi (将申请奖学金的材料) + Kata kerja arah (提交至) + Tempat tujuan (留学生办公室)."
  },
  {
    "id": "q-cn-sk-2",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi kalimat permohonan bimbingan skripsi formal:",
    "scrambledWords": [
      "深入的探讨",
      "进行",
      "就毕业论文的提纲",
      "我想与导师"
    ],
    "correctOrder": [
      "我想与导师",
      "就毕业论文的提纲",
      "进行",
      "深入的探讨"
    ],
    "targetSentence": "我想与导师就毕业论文的提纲进行深入的探讨。",
    "audioVoiceLang": "zh-CN",
    "explanation": "Urutan baku: Subjek (我想与导师) + Frasa preposisi topik (就毕业论文的提纲) + Kata kerja formal (进行) + Objek tindakan (深入的探讨)."
  },
  {
    "id": "q-cn-sk-3",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi kalimat tata tertib keselamatan laboratorium:",
    "scrambledWords": [
      "专业防护装备",
      "必须佩戴",
      "所有科研人员",
      "进入重点实验室前"
    ],
    "correctOrder": [
      "进入重点实验室前",
      "所有科研人员",
      "必须佩戴",
      "专业防护装备"
    ],
    "targetSentence": "进入重点实验室前，所有科研人员必须佩戴专业防护装备。",
    "audioVoiceLang": "zh-CN",
    "explanation": "Urutan klausa waktu di depan (进入...前) diikuti Subjek (所有科研人员) + Modalitas (必须佩戴) + Objek (专业防护装备)."
  },
  {
    "id": "q-cn-sk-4",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi pengumuman pengisian KRS perkuliahan:",
    "scrambledWords": [
      "尽快完成",
      "本学期的专业选课",
      "教务系统开放之后",
      "请同学们"
    ],
    "correctOrder": [
      "教务系统开放之后",
      "请同学们",
      "尽快完成",
      "本学期的专业选课"
    ],
    "targetSentence": "教务系统开放之后，请同学们尽快完成本学期的专业选课。",
    "audioVoiceLang": "zh-CN",
    "explanation": "Urutan waktu pembukaan sistem (教务系统开放之后) + Himbauan permohonan (请同学们尽快完成) + Objek KRS (本学期的专业选课)."
  },
  {
    "id": "q-cn-sk-5",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi penjelasan fasilitas Beasiswa Pemerintah Tiongkok:",
    "scrambledWords": [
      "以及生活补贴",
      "全额学费减免",
      "为优秀留学生提供",
      "中国政府奖学金"
    ],
    "correctOrder": [
      "中国政府奖学金",
      "为优秀留学生提供",
      "全额学费减免",
      "以及生活补贴"
    ],
    "targetSentence": "中国政府奖学金为优秀留学生提供全额学费减免以及生活补贴。",
    "audioVoiceLang": "zh-CN",
    "explanation": "Subjek lembaga beasiswa (中国政府奖学金) + Frasa penerima manfaat (为优秀留学生提供) + Komponen beasiswa (全额学费减免以及生活补贴)."
  },
  {
    "id": "q-cn-ar-1",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan bahasa Indonesia yang paling akurat untuk pasangan istilah kurikulum: '必修课 (Bìxiūkè)' dan '选修课 (Xuǎnxiūkè)':",
    "targetSentence": "本专业研究生必须按时修满三十学分的必修课与选修课。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Mata kuliah wajib dan mata kuliah pilihan",
      "Mata kuliah praktik dan mata kuliah teori",
      "Mata kuliah pagi dan mata kuliah sore",
      "Ujian masuk dan ujian kelulusan"
    ],
    "correctAnswerIndex": 0,
    "explanation": "必修课 (bìxiūkè) = mata kuliah wajib; 选修课 (xuǎnxiūkè) = mata kuliah pilihan/elektif."
  },
  {
    "id": "q-cn-ar-2",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti yang tepat dari istilah akademik penting: '毕业论文答辩 (Bìyè lùnwén dábiàn)':",
    "targetSentence": "通过毕业论文答辩是获得硕士学位证书的前提条件。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Pencetakan jilid sampul buku tugas akhir",
      "Sidang ujian / pertahanan skripsi atau tesis kelulusan",
      "Pendaftaran wisuda akbar universitas",
      "Pembagian toga kelulusan mahasiswa"
    ],
    "correctAnswerIndex": 1,
    "explanation": "答辩 (dábiàn) dalam konteks perguruan tinggi bermakna sidang ujian pertahanan tesis/disertasi di hadapan dewan penguji."
  },
  {
    "id": "q-cn-ar-3",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan yang tepat untuk istilah regulasi mahasiswa asing: '勤工俭学 (Qíngōng jiǎnxué)':",
    "targetSentence": "留学生在校期间参加勤工俭学，必须遵守国家相关出入境法规。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Kegiatan olahraga bersama mahasiswa lokal",
      "Program pertukaran pelajar antar negara",
      "Bekerja paruh waktu resmi sambil kuliah (work-study program)",
      "Membayar uang SPP secara mencicil"
    ],
    "correctAnswerIndex": 2,
    "explanation": "勤工俭学 adalah istilah resmi Tiongkok untuk program bekerja paruh waktu yang sah bagi mahasiswa sambil menempuh pendidikan."
  },
  {
    "id": "q-cn-ar-4",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti yang tepat dari istilah seminar proposal: '开题报告 (Kāití bàogào)':",
    "targetSentence": "研究生必须在入学第二学期结束前完成学位论文的开题报告。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Laporan keuangan kegiatan organisasi kemahasiswaan",
      "Kartu hasil studi semester pertama",
      "Surat izin sakit dari klinik kampus",
      "Laporan / seminar pembukaan proposal penelitian tugas akhir"
    ],
    "correctAnswerIndex": 3,
    "explanation": "开题报告 adalah tahapan seminar proposal penelitian di mana mahasiswa memaparkan latar belakang, metodologi, dan urgensi riset di hadapan dewan dosen."
  },
  {
    "id": "q-cn-ar-5",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan berkas pendaftaran: '成绩单公证件 (Chéngjīdān gōngzhèngjiàn)':",
    "targetSentence": "申请攻读博士学位者需提供本科及硕士阶段的成绩单公证件。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Salinan transkrip nilai akademik yang telah dilegalisasi oleh notaris/kedutaan",
      "Brosur promosi program studi universitas",
      "Kuitansi pembayaran biaya formulir pendaftaran",
      "Kartu tanda pengenal mahasiswa sementara"
    ],
    "correctAnswerIndex": 0,
    "explanation": "公证件 (gōngzhèngjiàn) berarti dokumen notaris / legalisir resmi dari instansi berwenang."
  },
  {
    "id": "q-cn-ar-6",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti yang tepat dari istilah surat beasiswa: '专家推荐信 (Zhuānjiā tuījiànxìn)':",
    "targetSentence": "申请中国政府奖学金需随附两名教授或副教授出具的专家推荐信。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Surat keterangan sehat dari rumah sakit",
      "Surat rekomendasi akademik dari pakar / profesor",
      "Surat pernyataan bebas catatan kepolisian",
      "Surat bukti kepemilikan rekening tabungan"
    ],
    "correctAnswerIndex": 1,
    "explanation": "推荐信 = surat rekomendasi (letter of recommendation); 专家 = pakar/guru besar."
  },
  {
    "id": "q-cn-ar-7",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan yang tepat untuk prosedur keimigrasian: '居留许可延期 (Jūliú xǔkě yánqī)':",
    "targetSentence": "护照上的学习类居留许可延期手续，必须在到期前三十日内办理。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Pembuatan paspor baru di kedutaan besar",
      "Pembelian tiket pesawat pulang pergi",
      "Perpanjangan izin tinggal (Residence Permit) pelajar asing di kepolisian (PSB)",
      "Penyewaan kamar asrama internasional"
    ],
    "correctAnswerIndex": 2,
    "explanation": "居留许可 = izin tinggal (Residence Permit); 延期 = perpanjangan masa berlaku."
  },
  {
    "id": "q-cn-ar-8",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti istilah pengawasan karya ilmiah: '学术查重率 (Xuéshù cháchóng lǜ)':",
    "targetSentence": "提交毕业论文终稿前，全文学术查重率不得超过百分之十。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Jumlah cetakan buku di percetakan universitas",
      "Kecepatan pengetikan naskah dalam satu menit",
      "Bobot persentase nilai ujian akhir semester",
      "Tingkat persentase kemiripan / uji plagiarisme karya tulis ilmiah"
    ],
    "correctAnswerIndex": 3,
    "explanation": "查重率 (similarity index) adalah persentase kesamaan teks dengan basis data publikasi terdahulu untuk mencegah plagiarisme."
  },
  {
    "id": "q-cn-ar-9",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan yang tepat dari istilah: '跨专业申请 (Kuà zhuānyè shēnqǐng)':",
    "targetSentence": "跨专业申请研究生的考生，通常需要参加入学专业课附加笔试。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Mendaftar program studi lintas jurusan / bidang ilmu yang berbeda dari jenjang sebelumnya",
      "Pindah kampus di tengah masa perkuliahan",
      "Mengambil dua gelar sarjana secara bersamaan",
      "Mengundurkan diri dari jurusan saat ini"
    ],
    "correctAnswerIndex": 0,
    "explanation": "跨 (melintasi) + 专业 (jurusan/bidang studi) = pendaftaran lintas disiplin ilmu."
  },
  {
    "id": "q-cn-ar-10",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan yang tepat untuk status beasiswa: '全额奖学金 (Quán'é jiǎngxuéjīn)':",
    "targetSentence": "获得全额奖学金的学生享有学费免除、免费住宿及每月生活津贴。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Potongan biaya kuliah setengah semester",
      "Beasiswa penuh (mencakup biaya kuliah, asrama, dan tunjangan hidup bulanan)",
      "Pinjaman dana pendidikan tanpa bunga",
      "Hadiah uang tunai satu kali untuk juara lomba"
    ],
    "correctAnswerIndex": 1,
    "explanation": "全额 (jumlah penuh) + 奖学金 (beasiswa) = beasiswa penuh (Full Scholarship)."
  },
  {
    "id": "q-cn-bb-1",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Baca teks silabus singkat berikut:\n'本门专业课考核采用综合评定制：期末闭卷考试占总成绩50%，课堂讨论及文献汇报占30%，平时出勤与课后作业占20%。旷课超过三次者，取消期末考试资格。'\n\nApa akibat yang akan diterima mahasiswa jika membolos kuliah lebih dari tiga kali?",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Diberikan tugas tambahan membuat rangkuman buku",
      "Hanya dikenai pemotongan nilai sebesar lima persen",
      "Didiskualifikasi dan kehilangan hak mengikuti ujian akhir semester",
      "Diminta pindah ke kelas perkuliahan malam"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Teks menyatakan tegas: '旷课超过三次者，取消期末考试资格' (Membolos lebih dari 3 kali akan dibatalkan hak ujian akhirnya)."
  },
  {
    "id": "q-cn-bb-2",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Baca teks aturan perpustakaan berikut:\n'读者借阅中文图书每次限借10本，借期30天；外文原版图书限借3本，借期15天。图书逾期未还者，系统将每日计收滞纳金，并冻结借书权限直至还清欠费。'\n\nBerapa batas waktu peminjaman buku asli berbahasa asing (外文原版图书)?",
    "audioVoiceLang": "zh-CN",
    "options": [
      "30 hari",
      "60 hari",
      "Satu semester",
      "15 hari"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dalam teks tertulis: '外文原版图书限借3本，借期15天' (Buku berbahasa asing dibatasi 3 eksemplar dengan masa pinjam 15 hari)."
  },
  {
    "id": "q-cn-bb-3",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Baca wacana pengumuman beasiswa berikut:\n'国家留学基金委（CSC）年度评审工作已启动。凡上学年出现不及格科目（挂科）或有严重违反校纪校规行为者，评审结果将判定为不合格，并自下学期起中止发放奖学金生活费。'\n\nKondisi apa yang menyebabkan pencairan uang saku beasiswa dihentikan?",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Terdapat mata kuliah yang tidak lulus (挂科) atau pelanggaran disiplin berat",
      "Terlambat mengumpulkan draf proposal skripsi selama dua hari",
      "Tidak menghadiri acara festival seni budaya kampus",
      "Meminjam buku perpustakaan melebihi kuota"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Teks menegaskan: 不及格科目（挂科）atau pelanggaran disiplin menyebabkan beasiswa diputus (中止发放)."
  },
  {
    "id": "q-cn-bb-4",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Dengarkan audio pengumuman kantor jurusan berikut dan pilih simpulan informasinya:",
    "targetSentence": "各位留学生同学请注意：本周五下午两点在学术报告厅举行毕业论文开题动员大会，届时将详细讲解论文查重与答辩时间节点，请全体研二同学务必准时出席。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Ujian skripsi dimajukan ke hari Jumat pagi di laboratorium komputer",
      "Pertemuan sosialisasi seminar proposal dan jadwal ujian skripsi diadakan Jumat jam 2 siang untuk mahasiswa tingkat dua",
      "Perpustakaan pusat akan ditutup pada hari Jumat siang untuk renovasi",
      "Wisuda akbar mahasiswa asing akan diselenggarakan di aula utama"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Audio mengumumkan: 开题动员大会 (rapat pengarahan proposal) pada Jumat jam 14.00 di aula akademik untuk mahasiswa tahun ke-2."
  },
  {
    "id": "q-cn-bb-5",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Dengarkan audio instruksi keselamatan lab berikut:",
    "targetSentence": "实验人员离开实验室前，必须逐一检查水阀、气阀、电源开关是否完全关闭，并确认门窗上锁。如遇突发漏气或电路短路，请立即按下紧急报警按钮并迅速撤离。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Larangan membawa tas ransel dan jaket tebal ke dalam laboratorium",
      "Jadwal pergantian shift asisten peneliti laboratorium",
      "Kewajiban memeriksa air, gas, listrik, dan mengunci pintu sebelum meninggalkan lab",
      "Petunjuk tata cara mencuci alat gelas kimia setelah percobaan"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Audio menjelaskan protokol penutupan kran air, katup gas, listrik, serta evakuasi darurat laboratorium."
  },
  {
    "id": "q-cn-bb-6",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Dengarkan audio percakapan konsultasi dengan staf administrasi kampus:",
    "targetSentence": "你的在读证明和中文成绩单已经打印盖章了，请带上学生证到留学生事务大厅三号窗口领取。",
    "audioVoiceLang": "zh-CN",
    "options": [
      "Pendaftaran kartu asuransi kesehatan ditolak karena berkas tidak lengkap",
      "Kartu tanda mahasiswa hilang dan harus membayar denda pembuatan ulang",
      "Jadwal wawancara beasiswa dipindahkan ke aula administrasi",
      "Surat keterangan mahasiswa aktif dan transkrip nilai resmi sudah siap diambil di loket 3"
    ],
    "correctAnswerIndex": 3,
    "explanation": "在读证明 = surat keterangan mahasiswa aktif; 盖章 = telah dicap resmi; 领取 = silakan diambil."
  },
  {
    "id": "q-cn-bb-7",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Isilah bagian rumpang kalimat akademik berikut dengan konjungsi 书面语 yang tepat:\n'____传统宏观经济模型无法完全解释近期的金融市场波动，学术界____提出了多项修正假设。'",
    "audioVoiceLang": "zh-CN",
    "options": [
      "鉴于...因而... (Jiànyú... yīn'ér...) — mengingat... oleh karena itu...",
      "不管...但也... (bùguǎn... dàn yě...) — tidak peduli... namun juga...",
      "只要...才... (zhǐyào... cái...) — asalkan... barulah...",
      "虽然...所以... (suīrán... suǒyǐ...) — meskipun... jadi..."
    ],
    "correctAnswerIndex": 0,
    "explanation": "'鉴于' (mengingat / mempertimbangkan bahwa...) berkolokasi formal dengan '因而' (oleh karenanya) dalam teks karya ilmiah."
  },
  {
    "id": "q-cn-bb-8",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Pilih kata bentukan istilah ilmiah yang tepat untuk melengkapi kalimat:\n'随着数字技术的普及，该研究项目旨在推动传统文献资源的数字化与____建设。'",
    "audioVoiceLang": "zh-CN",
    "options": [
      "规范性 (guīfànxìng) — sifat normatif / keteraturan",
      "规范化 (guīfànhuà) — standardisasi / pembakuan",
      "规范度 (guīfàndù) — tingkat keteraturan",
      "规范感 (guīfàngǎn) — kesan keteraturan"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sufiks '化' (-isasi) menyatakan proses perubahan menuju suatu standar (数字化 dan 规范化: standardisasi)."
  },
  {
    "id": "q-cn-bb-9",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Pilih pasangan kata penanda topik perbandingan yang tepat:\n'____实验组的数据表现稳定，对照组的测量指标____出现了较大的离散偏差。'",
    "audioVoiceLang": "zh-CN",
    "options": [
      "虽然...就... (suīrán... jiù...) — meskipun... langsung...",
      "即使...才... (jíshǐ... cái...) — kalaupun... barulah...",
      "相较于...则... (Xiāng jiàoyú... zé...) — dibandingkan dengan... sedangkan...",
      "不但...反之... (búdàn... fǎnzhī...) — tidak hanya... sebaliknya..."
    ],
    "correctAnswerIndex": 2,
    "explanation": "'相较于 [A] ... [B] 则 ...' (Dibandingkan dengan A, maka B justru ...) adalah sintaksis komparatif standar laporan penelitian."
  },
  {
    "id": "q-cn-bb-10",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Analisis kalimat rusak (病句辨析): Manakah kalimat di bawah ini yang SALAH secara tata bahasa struktur 把 (bǎ)?",
    "options": [
      "他没有把那个实验结果记录在笔记本上。 — Dia tidak mencatat hasil eksperimen itu di buku catatan.",
      "请把你的学术论文按时提交给导师。 — Harap serahkan makalah akademik Anda tepat waktu kepada dosen pembimbing.",
      "研究人员把样本放进了超低温冰箱。 — Peneliti memasukkan sampel ke dalam lemari pendingin suhu ultra-rendah.",
      "他把那个实验结果没有记录在笔记本上。 — Dia hasil eksperimen itu tidak mencatat di buku catatan (negasi salah posisi)."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Dalam kalimat 把 (bǎ), kata negasi (没有 / 不) wajib diletakkan SEBELUM kata 把 ('他没有把那个实验结果记录在笔记本上'), bukan sesudah objek 把."
  },
  {
    "id": "q-cn-bb-11",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Analisis kalimat rusak (病句辨析): Manakah kalimat berikut yang memiliki susunan sintaksis paling SEMPURNA dan bebas cacat gramatika?",
    "options": [
      "导师的悉心指导，使我的学术论文质量得到了显著提高。 — Bimbingan cermat dosen pembimbing membuat kualitas tesis akademik saya meningkat pesat (subjek utuh).",
      "经过导师的悉心指导，使我的学术论文质量得到了显著提高。 — Melalui bimbingan cermat dosen, membuat kualitas tesis saya meningkat (kehilangan subjek).",
      "在导师的悉心指导下，使我成功发表了高水平学术论文。 — Di bawah bimbingan cermat dosen, membuat saya berhasil menerbitkan makalah (kehilangan subjek).",
      "通过导师的悉心指导，从而让我掌握了正确的实验方法。 — Lewat bimbingan dosen, sehingga membuat saya menguasai metode eksperimen (kehilangan subjek)."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Kalimat '导师的悉心指导，使我的学术论文质量得到了显著提高。' adalah kalimat baku yang memiliki subjek jelas (导师的悉心指导), sedangkan opsi lainnya kehilangan subjek akibat menggabungkan preposisi (经过/在/通过) dengan 使/让."
  },
  {
    "id": "q-cn-bb-12",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Dalam wawancara sidang skripsi, penguji mengajukan pertanyaan teoretis yang sama sekali belum pernah Anda pelajari. Sikap akademis paling etis adalah:",
    "options": [
      "Mengarang teori palsu secara percaya diri agar tidak dianggap bodoh oleh penguji.",
      "Jujur mengakui bahwa topik tersebut belum tercakup dalam batasan riset saat ini, dan berterima kasih atas masukan berharga penguji untuk riset lanjutan.",
      "Menyalahkan dosen pembimbing karena tidak mengajarkan materi tersebut saat bimbingan.",
      "Diam seribu bahasa dan menatap lantai selama lima menit."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Kejujuran intelektual dan sikap terbuka terhadap batasan riset (局限性) adalah etika ilmiah universal yang sangat dihormati."
  },
  {
    "id": "q-cn-bb-13",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Jika seorang dosen memiliki gelar fungsional Profesor (教授) sekaligus menjabat sebagai Dekan Fakultas (院长), cara menyapa lisan yang paling lazim dan santun adalah:",
    "options": [
      "老王 (Lǎo Wáng) — Si Tua Wang (sapaan akrab sebaya, tidak sopan untuk dosen)",
      "王老师的朋友 (Wáng lǎoshī de péngyǒu) — Temannya Guru Wang",
      "王院长 (Wáng Yuànzhǎng) / 王教授 (Wáng Jiàoshòu) — Dekan Wang / Profesor Wang (sapaan resmi akademik)",
      "大叔 (Dàshū) — Paman (sapaan jalanan informal)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Gunakan nama marga + jabatan administratif (王院长) atau jabatan fungsional akademik (王教授). Jangan gunakan sebutan informal."
  },
  {
    "id": "q-cn-bb-14",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Idiom Chengyu (成语) '严谨治学' (Yánjǐn zhìxué) paling tepat menggambarkan profil seorang akademisi yang:",
    "options": [
      "Suka mengkritik orang lain tanpa memberikan solusi konkret",
      "Belajar hanya saat menjelang malam sebelum ujian semester",
      "Memiliki banyak gelar tetapi jarang masuk laboratorium",
      "Menjalankan penelitian ilmiah dengan dedikasi tinggi, cermat, teliti, dan tanpa kompromi terhadap kesalahan data"
    ],
    "correctAnswerIndex": 3,
    "explanation": "严谨治学 adalah semboyan integritas universitas top Tiongkok yang berarti ketat, cermat, dan berdisiplin tinggi dalam menuntut ilmu."
  },
  {
    "id": "q-cn-bb-15",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Setelah tiba di Tiongkok dengan Visa Pelajar X1, dalam berapa harikah mahasiswa asing WAJIB mengurus konversi ke Izin Tinggal Studi (学习类居留许可)?",
    "options": [
      "Dalam waktu 30 hari sejak tanggal stempel kedatangan di imigrasi Tiongkok",
      "Boleh kapan saja sebelum semester pertama berakhir",
      "Dalam waktu 6 bulan setelah orientasi kampus",
      "Tidak perlu diurus jika sudah memegang paspor resmi"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Undang-undang keimigrasian Tiongkok mewajibkan pemegang visa X1 mendaftarkan Izin Tinggal (居留许可) ke Biro Keamanan Publik (出入境管理局) dalam kurun waktu 30 hari."
  }
];

export const JAPAN_50_QUESTIONS: QuizQuestion[] = [
  {
    "id": "q-jp-pg-1",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Dalam etiket Keigo, bentuk kata kerja Sonkeigo (menghormati lawan bicara) yang tepat untuk perbuatan dosen 'membaca naskah proposal mahasiswa' adalah:",
    "targetSentence": "先生、私の研究計画書を____いただけましたでしょうか。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "拝見して (haiken shite) — membaca / melihat (bentuk merendah Kenjougo untuk diri sendiri)",
      "ご覧になって (goran ni natte) — membaca / melihat (bentuk hormat Sonkeigo untuk dosen)",
      "読まれてきて (yomarete kite) — dibaca lalu datang (bentuk pasif tidak lazim)",
      "見せて (misete) — memperlihatkan (bentuk kasual)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "ご覧になる (goran ni naru) adalah bentuk Sonkeigo (menghormati tindakan dosen). Sedangkan 拝见する (haiken suru) adalah Kenjougo (merendahkan diri sendiri)."
  },
  {
    "id": "q-jp-pg-2",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Sebaliknya, bentuk Kenjougo (merendahkan diri sendiri) saat mahasiswa menyatakan telah 'membaca buku karya profesor' adalah:",
    "targetSentence": "先生の最新のご著書を昨晩、確かに____。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "ご覧になりました (goran ni narimashita) — beliau telah membaca (Sonkeigo)",
      "お読みになられました (oyomi ni nararemashita) — beliau telah membaca (hormat ganda)",
      "拝見いたしました (haiken itashimashita) — saya telah membaca dengan hormat (Kenjougo)",
      "見ちゃいました (micha imashita) — sudah telanjur melihat (ragam lisan santai)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "拝見いたしました adalah bentuk Kenjougo resmi yang digunakan saat merendahkan tindakan diri sendiri di hadapan profesor/atasan."
  },
  {
    "id": "q-jp-pg-3",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilihlah cara baca Kanji resmi yang tepat untuk istilah akademik '履修 (pengambilan mata kuliah)' dan '把握 (pemahaman situasi)':",
    "targetSentence": "履修登録の要件を正確に把握してください。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "ふしゅう (fushū — bacaan salah) & はそく (hasoku — bacaan salah)",
      "りしょう (rishō — bacaan salah) & ばあく (ba'aku — bacaan salah)",
      "はいしゅう (haishū — bacaan salah) & はくあ (hakua — bacaan salah)",
      "りしゅう (rishū — pengambilan mata kuliah) & はあく (ha'aku — pemahaman situasi)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "履修 dibaca りしゅう (rishū) dan 把握 dibaca はあく (ha'aku)."
  },
  {
    "id": "q-jp-pg-4",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilihlah pola tata bahasa N2 yang tepat untuk menyatakan titik awal rangkaian acara besar perkuliahan:",
    "targetSentence": "本日の入学ガイダンス____、各研究室の専門セミナーが開始されます。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "を皮切りに (o kawakiri ni) — dimulai dari / diawali dengan",
      "に際して (ni saishite) — pada kesempatan / saat menghadapi",
      "を通じて (o tsūjite) — melalui / sepanjang",
      "を抜きにして (o nuki ni shite) — dengan mengesampingkan / tanpa"
    ],
    "correctAnswerIndex": 0,
    "explanation": "〜を皮切りに (o kawakiri ni) berarti 'dimulai dengan... lalu disusul peristiwa-peristiwa penting lainnya'."
  },
  {
    "id": "q-jp-pg-5",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Dalam penulisan Proposal Riset (研究計画書) dan Skripsi (論文) di Jepang, gaya bahasa akhir kalimat yang WAJIB digunakan adalah:",
    "audioVoiceLang": "ja-JP",
    "options": [
      "です・ます調 (desu/masu) — ragam sopan umum (untuk surat/percakapan)",
      "である調 (da/de aru: 〜である, 〜だ) — ragam tulis ilmiah objektif (wajib untuk skripsi/proposal)",
      "カジュアル会話調 — ragam percakapan kasual sehari-hari",
      "方言調 — ragam dialek daerah"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Seluruh karya ilmiah di universitas Jepang wajib ditulis dalam である調 (da/de aru). Dilarang keras menggunakan です・ます調."
  },
  {
    "id": "q-jp-pg-6",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Dalam ujian membaca cepat akademik (Dokkai), konjungsi yang berfungsi menyajikan data perbandingan kontras berimbang adalah:",
    "targetSentence": "国内消費が低迷している____、海外市場における売上は急速に拡大している。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "したがって (shitagatte) — oleh karena itu (konklusi kausal)",
      "すなわち (sunawachi) — yaitu / dengan kata lain",
      "一方で (ippō de) — di sisi lain / sebaliknya (kontras berimbang)",
      "つまり (tsumari) — intinya / singkatnya"
    ],
    "correctAnswerIndex": 2,
    "explanation": "〜一方で (ippō de: di satu sisi... di sisi lain...) membandingkan dua situasi yang saling bertolak belakang secara berimbang."
  },
  {
    "id": "q-jp-pg-7",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Ungkapan penolakan sopan ala Jepang saat pihak jurusan tidak dapat memenuhi permintaan di luar ketentuan adalah:",
    "targetSentence": "誠に申し訳ございませんが、締め切り後の提出は受理____。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "いたしかねません (itashikanemasen) — berisiko dapat terjadi (makna kemungkinan negatif)",
      "できませんよ (dekimasen yo) — tidak bisa lho (lisan langsung)",
      "やりません (yarimasen) — tidak mau mengerjakan (kasar/langsung)",
      "いたしかねます (itashikanemasu) — mohon maaf, kami tidak dapat melakukannya (penolakan formal)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "〜かねます (〜kanemasu: sulit/tidak dapat kami lakukan) adalah eufemisme formal resmi dalam korespondensi administrasi Jepang."
  },
  {
    "id": "q-jp-pg-8",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Istilah resmi untuk 'Satuan Kredit Semester (SKS)' dalam sistem akademik Jepang adalah:",
    "audioVoiceLang": "ja-JP",
    "options": [
      "単位 (tan'i) — Satuan Kredit Semester (SKS)",
      "点数 (tensū) — skor / poin nilai ujian",
      "等級 (tōkyū) — kelas / tingkatan mutu",
      "学年 (gakunen) — tingkat tahun ajaran"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Di universitas Jepang, bobot kredit perkuliahan disebut 単位 (tan'i). Contoh: 履修登録で20単位を取得する."
  },
  {
    "id": "q-jp-pg-9",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pola tata bahasa tingkat mahir JLPT N1 '〜極まりない' (kiwamarinai) memiliki arti:",
    "targetSentence": "研究データの一部を故意に改ざんする行為は、研究者として無責任____。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "にすぎない (ni suginai: hanya sekadar)",
      "極まりない (kiwamarinai: sangat tidak bertanggung jawab tak ada batasnya)",
      "ほかはない (hoka wa nai: tidak ada pilihan lain)",
      "にこしたことはない (ni koshita koto wa nai: lebih baik)"
    ],
    "correctAnswerIndex": 1,
    "explanation": "〜極まりない (kiwamarinai) menyatakan derajat puncak kemutlakan suatu sifat ekstrem yang tidak dapat ditoleransi."
  },
  {
    "id": "q-jp-pg-10",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Kalimat penutup surat/email paling standar dan berbobot sopan tinggi saat meminta bantuan bimbingan kepada dosen adalah:",
    "audioVoiceLang": "ja-JP",
    "options": [
      "じゃあ、お返事待ってますね！よろしく！ — Kalau begitu, saya tunggu balasannya ya! Salam!",
      "早く返信してください、困っています。 — Tolong cepat balas, saya sedang kesulitan.",
      "ご多忙の折、大変恐縮ではございますが、何卒よろしくお願い申し上げます。 — Di tengah kesibukan Profesor, dengan segala kerendahan hati saya memohon bimbingan Anda.",
      "それではバイバイ、また来週。 — Kalau begitu dadah, sampai minggu depan."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Frasa penutup standar Keigo: 'ご多忙の折、大変恐縮ではございますが、何卒よろしくお願い申し上げます' (Di tengah kesibukan Anda, mohon maaf merepotkan, mohon bimbingannya)."
  },
  {
    "id": "q-jp-es-1",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "研究データを改ざんして論文を発表するなど、研究者として無責任極まりない行為であり、到底容認できない。 (Kenkyū dēta o kaizan shite ronbun o happyō suru nado, kenkyūsha to shite musekinin kiwamarinai kōi de ari, tōtei yōnin dekinai.)",
    "audioVoiceLang": "ja-JP",
    "sampleAnswer": "Tindakan seperti memanipulasi data riset lalu mempublikasikannya dalam makalah adalah perbuatan yang teramat sangat tidak bertanggung jawab bagi seorang peneliti, dan sama sekali tidak dapat ditoleransi.",
    "keywords": [
      "tindakan",
      "memanipulasi",
      "data",
      "riset"
    ],
    "explanation": "Kalimat akademik pola Derajat Ekstrem Bahasa Tulis: 〜極まりない (kiwamarinai) & 〜極まる (kiwamaru): '研究データを改ざんして論文を発表するなど、研究者として無責任極まりない行為であり、到底容認できない。' diterjemahkan secara akurat menjadi 'Tindakan seperti memanipulasi data riset lalu mempublikasikannya dalam makalah adalah perbuatan yang teramat sangat tidak bertanggung jawab bagi seorang peneliti, dan sama sekali tidak dapat ditoleransi.'."
  },
  {
    "id": "q-jp-es-2",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "世界的人気バンドの来日ツアーは、来月5日の東京ドーム公演を皮切りに全国6大ドームで開催されます。 (Sekai-teki ninki bando no rainichi tsuā wa, raigetsu itsuka no Tōkyō Dōmu kōen o kawakiri ni zenkoku rokudai dōmu de kaisai saremasu.)",
    "audioVoiceLang": "ja-JP",
    "sampleAnswer": "Tur kedatangan grup musik terkenal dunia ke Jepang akan diselenggarakan di 6 stadion kubah nasional, diawali dengan konser Tokyo Dome pada tanggal 5 bulan depan.",
    "keywords": [
      "kedatangan",
      "grup",
      "musik",
      "terkenal"
    ],
    "explanation": "Kalimat akademik pola Titik Tolak Rangkaian Peristiwa: 〜を皮切りに (o kawakiri ni): '世界的人気バンドの来日ツアーは、来月5日の東京ドーム公演を皮切りに全国6大ドームで開催されます。' diterjemahkan secara akurat menjadi 'Tur kedatangan grup musik terkenal dunia ke Jepang akan diselenggarakan di 6 stadion kubah nasional, diawali dengan konser Tokyo Dome pada tanggal 5 bulan depan.'."
  },
  {
    "id": "q-jp-es-3",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "机上の空論ではなく、被災地の厳しい実情に即した迅速な復興支援策を策定すべきである。 (Kijō no kūron dewa naku, hisaichi no kibishii jitsujō ni sokushite jinsoku na fukkō shiensaku o sakutei subeki de aru.)",
    "audioVoiceLang": "ja-JP",
    "sampleAnswer": "Bukan sekadar teori hampa di atas meja, semestinya kita merumuskan kebijakan bantuan rekonstruksi yang cepat dan selaras persis dengan kondisi riil korban bencana di lapangan.",
    "keywords": [
      "sekadar",
      "teori",
      "hampa",
      "atas"
    ],
    "explanation": "Kalimat akademik pola Kesesuaian Ketat terhadap Kaidah: 〜に即して (ni sokushite): '机上の空論ではなく、被災地の厳しい実情に即した迅速な復興支援策を策定すべきである。' diterjemahkan secara akurat menjadi 'Bukan sekadar teori hampa di atas meja, semestinya kita merumuskan kebijakan bantuan rekonstruksi yang cepat dan selaras persis dengan kondisi riil korban bencana di lapangan.'."
  },
  {
    "id": "q-jp-es-4",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "台風の接近に伴う交通網の混乱とお客様の安全を鑑みて、本日の公演はやむを得ず中止とさせていただきます。 (Taifū no sekkin ni tomonau kōtsūmō no konran to okyakusama no anzen o kangamite, honjitsu no kōen wa yamu o ezu chūshi to sasete itadakimasu.)",
    "audioVoiceLang": "ja-JP",
    "sampleAnswer": "Menimbang kekacauan jaringan transportasi akibat mendekatnya topan dan keselamatan para pengunjung, pertunjukan hari ini dengan amat berat hati terpaksa kami batalkan.",
    "keywords": [
      "menimbang",
      "kekacauan",
      "jaringan",
      "transportasi"
    ],
    "explanation": "Kalimat akademik pola Mempertimbangkan Situasi Luas: 〜を鑑みて (o kangamite): '台風の接近に伴う交通網の混乱とお客様の安全を鑑みて、本日の公演はやむを得ず中止とさせていただきます。' diterjemahkan secara akurat menjadi 'Menimbang kekacauan jaringan transportasi akibat mendekatnya topan dan keselamatan para pengunjung, pertunjukan hari ini dengan amat berat hati terpaksa kami batalkan.'."
  },
  {
    "id": "q-jp-es-5",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "母校を巣立ち社会へと羽ばたく若者たちの前途に、幸多からんことを祈ってやみません。 (Bokō o sudachi shakai e to habataku wakamonotachi no zento ni, sachi ōkaran koto o inotte yamimasen.)",
    "audioVoiceLang": "ja-JP",
    "sampleAnswer": "Saya tiada henti-hentinya memanjatkan doa dari lubuk hati terdalam agar limpahan kebahagiaan menyertai masa depan para pemuda yang meninggalkan almamater dan mengepakkan sayap menuju masyarakat.",
    "keywords": [
      "tiada",
      "henti",
      "hentinya",
      "memanjatkan"
    ],
    "explanation": "Kalimat akademik pola Perasaan Emosional Mendalam: 〜てやまない (te yamanai) & 〜を禁じ得ない (o kinji enai): '母校を巣立ち社会へと羽ばたく若者たちの前途に、幸多からんことを祈ってやみません。' diterjemahkan secara akurat menjadi 'Saya tiada henti-hentinya memanjatkan doa dari lubuk hati terdalam agar limpahan kebahagiaan menyertai masa depan para pemuda yang meninggalkan almamater dan mengepakkan sayap menuju masyarakat.'."
  },
  {
    "id": "q-jp-es-6",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "事故の衝撃で足を骨折してしまい、走ることはおろか、一人で自立して立ち上がることさえできません。 (Jiko no shōgeki de ashi o kossetsu shite shimai, hashiru koto wa oroka, hitori de jiritsu shite tachiagaru koto sae dekimasen.)",
    "audioVoiceLang": "ja-JP",
    "sampleAnswer": "Kaki saya patah akibat benturan kecelakaan, jangankan untuk berlari, untuk berdiri tegak mandiri seorang diri saja bahkan tak berdaya.",
    "keywords": [
      "kaki",
      "patah",
      "akibat",
      "benturan"
    ],
    "explanation": "Kalimat akademik pola Mengesampingkan yang Ekstrem: 〜はおろか (wa oroka) & 〜ならいざ知らず (nara iza shirazu): '事故の衝撃で足を骨折してしまい、走ることはおろか、一人で自立して立ち上がることさえできません。' diterjemahkan secara akurat menjadi 'Kaki saya patah akibat benturan kecelakaan, jangankan untuk berlari, untuk berdiri tegak mandiri seorang diri saja bahkan tak berdaya.'."
  },
  {
    "id": "q-jp-es-7",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "彼が数々の逆境を乗り越えて偉業を達成できたのは、不撓不屈の信念を持ち続けたからにほかならない。 (Kare ga kazukazu no gyakkyō o norikoete igyō o tassei dekita no wa, futōfukutsu no shinnen o mochitsuzuketa kara ni hokanaranai.)",
    "audioVoiceLang": "ja-JP",
    "sampleAnswer": "Keberhasilannya melampaui berbagai rintangan nestapa dan menorehkan prestasi agung tiada lain dan tak bukan adalah semata-mata karena ia terus menggenggam keyakinan yang pantang menyerah.",
    "keywords": [
      "keberhasilannya",
      "melampaui",
      "berbagai",
      "rintangan"
    ],
    "explanation": "Kalimat akademik pola Kalimat Formal Akademis: 〜にほかならない (ni hokanaranai) & 〜とされている: '彼が数々の逆境を乗り越えて偉業を達成できたのは、不撓不屈の信念を持ち続けたからにほかならない。' diterjemahkan secara akurat menjadi 'Keberhasilannya melampaui berbagai rintangan nestapa dan menorehkan prestasi agung tiada lain dan tak bukan adalah semata-mata karena ia terus menggenggam keyakinan yang pantang menyerah.'."
  },
  {
    "id": "q-jp-es-8",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "大地震による原子力発電所の事故により、数万人もの住民が住み慣れた故郷からの避難生活を余儀なくされました。 (Dai-jishin ni yoru genshiryoku hatsudensho no jiko ni yori, sūman-nin mono jūmin ga suminareta kokyō kara no hinan seikatsu o yogi naku saremashita.)",
    "audioVoiceLang": "ja-JP",
    "sampleAnswer": "Akibat kecelakaan instalasi pembangkit listrik tenaga nuklir yang dipicu gempa dahsyat, puluhan ribu warga terpaksa harus menjalani hidup mengungsi meninggalkan tanah kelahiran yang mereka cintai.",
    "keywords": [
      "akibat",
      "kecelakaan",
      "instalasi",
      "pembangkit"
    ],
    "explanation": "Kalimat akademik pola Tekanan Keadaan yang Tak Terelakkan: 〜を余儀なくされる (o yogi naku sareru): '大地震による原子力発電所の事故により、数万人もの住民が住み慣れた故郷からの避難生活を余儀なくされました。' diterjemahkan secara akurat menjadi 'Akibat kecelakaan instalasi pembangkit listrik tenaga nuklir yang dipicu gempa dahsyat, puluhan ribu warga terpaksa harus menjalani hidup mengungsi meninggalkan tanah kelahiran yang mereka cintai.'."
  },
  {
    "id": "q-jp-es-9",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "マニュアル通りの画一的な対応にとらわれず、現場の状況に応じて臨機応変に対処する柔軟性が求められる。 (Manyuarudōri no kakuitsuteki na taiō ni torawarezu, genba no jōkyō ni ōjite rinki-ōhen ni taisho suru jūnansei ga motomerareru.)",
    "audioVoiceLang": "ja-JP",
    "sampleAnswer": "Tanpa terpaku pada respons seragam yang kaku sesuai manual, kita dituntut memiliki kelenturan untuk bertindak secara luwes menyesuaikan diri dengan situasi di lapangan.",
    "keywords": [
      "tanpa",
      "terpaku",
      "respons",
      "seragam"
    ],
    "explanation": "Kalimat akademik pola Yojijukugo (Idiom Empat Kanji) dalam Diskursus Resmi N1: 'マニュアル通りの画一的な対応にとらわれず、現場の状況に応じて臨機応変に対処する柔軟性が求められる。' diterjemahkan secara akurat menjadi 'Tanpa terpaku pada respons seragam yang kaku sesuai manual, kita dituntut memiliki kelenturan untuk bertindak secara luwes menyesuaikan diri dengan situasi di lapangan.'."
  },
  {
    "id": "q-jp-es-10",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "本研究は、急速に進展する生成AI技術の倫理的課題をめぐり、国内外の法制度と照らし合わせつつ、現実に即したガバナンスモデルの構築を目指すものである。 (Hon-kenkyū wa, kyūsoku ni shinten suru seisei Ē-ai gijutsu no rinriteki kadai o meguri, kokunaigai no hōseido to terashiawasetsutsu, genjitsu ni sokushita gabanansu moderu no kōchiku o mezasu mono de aru.)",
    "audioVoiceLang": "ja-JP",
    "sampleAnswer": "Penelitian ini, seputar tantangan etika teknologi AI generatif yang berkembang pesat, bertujuan membangun model tata kelola yang selaras dengan kenyataan lapangan sembari menyandingkannya dengan sistem hukum domestik dan internasional.",
    "keywords": [
      "penelitian",
      "seputar",
      "tantangan",
      "etika"
    ],
    "explanation": "Kalimat akademik pola Mahakarya Kelulusan JLPT N1 & Bahasa Jepang Akademik Perguruan Tinggi (Capstone Unit): '本研究は、急速に進展する生成AI技術の倫理的課題をめぐり、国内外の法制度と照らし合わせつつ、現実に即したガバナンスモデルの構築を目指すものである。' diterjemahkan secara akurat menjadi 'Penelitian ini, seputar tantangan etika teknologi AI generatif yang berkembang pesat, bertujuan membangun model tata kelola yang selaras dengan kenyataan lapangan sembari menyandingkannya dengan sistem hukum domestik dan internasional.'."
  },
  {
    "id": "q-jp-sk-1",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi kalimat permohonan bimbingan proposal riset kepada profesor:",
    "scrambledWords": [
      "賜りたく存じます",
      "教授のご指導を",
      "研究計画書につきまして"
    ],
    "correctOrder": [
      "研究計画書につきまして",
      "教授のご指導を",
      "賜りたく存じます"
    ],
    "targetSentence": "研究計画書につきまして、教授のご指導を賜りたく存じます。",
    "audioVoiceLang": "ja-JP",
    "explanation": "Topik bahasan (研究計画書につきまして) + Objek penghormatan (教授のご指導を) + Verba Kenjougo permohonan (賜りたく存じます: sudilah kiranya memberi bimbingan)."
  },
  {
    "id": "q-jp-sk-2",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi pengumuman batas waktu registrasi mata kuliah (KRS):",
    "scrambledWords": [
      "完了してください",
      "今学期の履修登録は",
      "4月20日までに"
    ],
    "correctOrder": [
      "今学期の履修登録は",
      "4月20日までに",
      "完了してください"
    ],
    "targetSentence": "今学期の履修登録は、4月20日までに完了してください。",
    "audioVoiceLang": "ja-JP",
    "explanation": "Topik (今学期の履修登録は) + Batas waktu tegas (4月20日までに) + Instruksi tindakan (完了してください)."
  },
  {
    "id": "q-jp-sk-3",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi kalimat kesiapan presentasi seminar riset:",
    "scrambledWords": [
      "行う予定です",
      "先行研究の発表を",
      "来週のゼミにて"
    ],
    "correctOrder": [
      "来週のゼミにて",
      "先行研究の発表を",
      "行う予定です"
    ],
    "targetSentence": "来週のゼミにて、先行研究の発表を行う予定です。",
    "audioVoiceLang": "ja-JP",
    "explanation": "Keterangan waktu & tempat (来週のゼミにて) + Objek presentasi riset terdahulu (先行研究の発表を) + Jadwal rencana (行う予定です)."
  },
  {
    "id": "q-jp-sk-4",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi kalimat persiapan pendaftaran beasiswa MEXT:",
    "scrambledWords": [
      "準備しております",
      "文部科学省の奨学金に",
      "応募するための書類を"
    ],
    "correctOrder": [
      "文部科学省の奨学金に",
      "応募するための書類を",
      "準備しております"
    ],
    "targetSentence": "文部科学省の奨学金に応募するための書類を準備しております。",
    "audioVoiceLang": "ja-JP",
    "explanation": "Tujuan beasiswa (文部科学省の奨学金に) + Frasa dokumen persyaratan (応募するための書類を) + Kata kerja progresif sopan (準備しております)."
  },
  {
    "id": "q-jp-sk-5",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi instruksi penutupan laboratorium riset:",
    "scrambledWords": [
      "施錠してください",
      "必ず安全確認を行い",
      "実験終了後は"
    ],
    "correctOrder": [
      "実験終了後は",
      "必ず安全確認を行い",
      "施錠してください"
    ],
    "targetSentence": "実験終了後は、必ず安全確認を行い施錠してください。",
    "audioVoiceLang": "ja-JP",
    "explanation": "Waktu pasca-eksperimen (実験終了後は) + Tindakan inspeksi keselamatan (必ず安全確認を行い) + Perintah penguncian pintu (施錠してください)."
  },
  {
    "id": "q-jp-ar-1",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan bahasa Indonesia yang tepat untuk istilah akademik: '履修登録 (Rishū tōroku)':",
    "targetSentence": "教務課のウェブサイトにて今学期の履修登録を行ってください。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Pembayaran uang pangkal gedung perkuliahan",
      "Pendaftaran rencana studi / pengisian KRS mata kuliah semester",
      "Pencetakan kartu perpustakaan universitas",
      "Permohonan cuti kuliah sementara"
    ],
    "correctAnswerIndex": 1,
    "explanation": "履修 (pengambilan mata kuliah) + 登録 (registrasi) = pengisian Kartu Rencana Studi (KRS) resmi."
  },
  {
    "id": "q-jp-ar-2",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti yang tepat dari istilah riset: '先行研究 (Senkō kenkyū)':",
    "targetSentence": "先行研究の批判的検討を通じて、本論文の独自性を明確にする。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Biaya perjalanan dinas riset luar negeri",
      "Hasil eksperimen yang gagal di laboratorium",
      "Studi / penelitian terdahulu yang relevan dalam tinjauan pustaka",
      "Rencana jadwal wisuda kelulusan mahasiswa"
    ],
    "correctAnswerIndex": 2,
    "explanation": "先行 (terdahulu) + 研究 (penelitian) = literatur / penelitian terdahulu yang menjadi pijakan riset."
  },
  {
    "id": "q-jp-ar-3",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti yang tepat dari istilah: '参考文献 (Sankō bunken)':",
    "targetSentence": "引用したすべての書籍や論文を参考文献リストに記載しなければならない。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Brosur panduan beasiswa pemerintah",
      "Catatan kuliah harian mahasiswa",
      "Surat keterangan kelakuan baik",
      "Daftar pustaka / literatur rujukan ilmiah"
    ],
    "correctAnswerIndex": 3,
    "explanation": "参考文献 (sankō bunken) adalah daftar pustaka / bibliografi yang dirujuk dalam karya tulis ilmiah."
  },
  {
    "id": "q-jp-ar-4",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan jabatan pembimbing riset: '指導教員 (Shidō kyōin)':",
    "targetSentence": "研究計画の内容について、事前に指導教員の承認を得る必要がある。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Dosen pembimbing akademik / profesor pembimbing tugas akhir",
      "Petugas kebersihan laboratorium",
      "Kepala asrama mahasiswa internasional",
      "Instruktur pelatihan olahraga kampus"
    ],
    "correctAnswerIndex": 0,
    "explanation": "指導 (bimbingan) + 教員 (tenaga pendidik) = dosen pembimbing akademik."
  },
  {
    "id": "q-jp-ar-5",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan yang tepat untuk pengumuman jadwal: '休講 (Kyūkō)' dan '補講 (Hokō)':",
    "targetSentence": "明日の経済学講義は休講となり、来週水曜日に補講が行われます。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Ujian tengah semester dan ujian susulan",
      "Kuliah ditiadakan (kosong) dan kuliah pengganti",
      "Orientasi mahasiswa baru dan temu alumni",
      "Praktikum laboratorium dan seminar proposal"
    ],
    "correctAnswerIndex": 1,
    "explanation": "休講 = perkuliahan ditiadakan; 補講 = kelas kuliah pengganti."
  },
  {
    "id": "q-jp-ar-6",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti dari karya akhir pascasarjana: '修士論文 (Shūshi ronbun)':",
    "targetSentence": "修士論文の口頭試問を無事に通過し、修了が認定された。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Skripsi sarjana muda jenjang D3",
      "Disertasi doktoral jenjang S3",
      "Tesis magister / tugas akhir jenjang S2",
      "Laporan magang kerja lapangan"
    ],
    "correctAnswerIndex": 2,
    "explanation": "修士 (magister / S2) + 論文 (karya tulis ilmiah) = tesis magister S2."
  },
  {
    "id": "q-jp-ar-7",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan dokumen: '成績証明書 (Seiseki shōmeisho)':",
    "targetSentence": "大学院入試の出願書類として、出身大学の成績証明書を提出した。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Ijazah kelulusan sementara",
      "Surat bukti pembayaran SPP",
      "Pas foto ukuran paspor",
      "Transkrip nilai akademik resmi"
    ],
    "correctAnswerIndex": 3,
    "explanation": "成績 (nilai hasil studi) + 証明書 (surat keterangan resmi) = transkrip nilai akademik."
  },
  {
    "id": "q-jp-ar-8",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan prosedur imigrasi: '在留資格更新 (Zairyū shikaku kōshin)':",
    "targetSentence": "在留期間満了日の三か月前から在留資格更新の申請が可能である。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Perpanjangan izin status kependudukan / visa pelajar di kantor imigrasi Jepang",
      "Pembuatan rekening bank pos Jepang",
      "Pendaftaran asuransi kesehatan nasional",
      "Lapor diri ke kedutaan besar Republik Indonesia"
    ],
    "correctAnswerIndex": 0,
    "explanation": "在留資格 (status izin tinggal) + 更新 (pembaruan / perpanjangan)."
  },
  {
    "id": "q-jp-ar-9",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti status studi: '研究生 (Kenkyūsei)':",
    "targetSentence": "大学院修士課程の本科生に入学する前、半年間研究生として在籍した。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Dosen tamu dari luar negeri",
      "Mahasiswa peneliti non-gelar persiapan masuk program magister/doktoral",
      "Alumni yang sudah lulus wisuda",
      "Asisten administrasi kantor jurusan"
    ],
    "correctAnswerIndex": 1,
    "explanation": "研究生 adalah mahasiswa riset non-degree yang belajar di bawah bimbingan profesor sebelum menempuh ujian seleksi masuk reguler (Insei)."
  },
  {
    "id": "q-jp-ar-10",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti istilah izin kerja: '資格外活動許可 (Shikakugai katsudō kyoka)':",
    "targetSentence": "留学生がアルバイトをする場合、入国管理局から資格外活動許可を受けなければならない。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Izin mengikuti ujian surat izin mengemudi mobil",
      "Izin perjalanan liburan ke luar negeri",
      "Izin resmi bekerja paruh waktu (arubaito) di luar status visa pelajar (maksimal 28 jam/minggu)",
      "Sertifikat kelulusan uji kecakapan bahasa"
    ],
    "correctAnswerIndex": 2,
    "explanation": "資格外活動許可 adalah cap izin resmi dari imigrasi yang memperbolehkan pemegang visa pelajar bekerja paruh waktu secara legal."
  },
  {
    "id": "q-jp-bb-1",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Baca teks pengumuman evaluasi perkuliahan berikut:\n'本講義の評価基準は、期末筆記試験60%、各回小レポート30%、出席率10%とする。なお、小レポートは締め切りを過ぎた場合、理由の如何を問わず一切採点対象としない。また、出席回数が全講義の3分の2に満たない者は自動的に不合格（D評価）となる。'\n\nBerapa batas minimal kehadiran agar mahasiswa tidak otomatis dinyatakan tidak lulus (tidak mendapat nilai D)?",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Minimal hadir 50% dari total kuliah",
      "Cukup hadir saat ujian akhir semester saja",
      "Minimal hadir 100% tanpa pernah absen satu kali pun",
      "Minimal hadir 2/3 (dua pertiga) dari total sesi perkuliahan"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Teks menyatakan: '出席回数が全講義の3分の2に満たない者は自動的に不合格' (Kurang dari 2/3 kehadiran otomatis tidak lulus)."
  },
  {
    "id": "q-jp-bb-2",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Baca teks aturan perpustakaan kampus berikut:\n'学部生の図書貸出冊数は最大5冊まで、期間は14日間です。大学院生は最大15冊まで、期間は30日間貸出可能です。返却期限日を過ぎた図書がある場合、遅延日数分だけ新たな貸出および予約が禁止されます。'\n\nApa sanksi keterlambatan pengembalian buku di perpustakaan tersebut?",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Pemblokiran peminjaman dan reservasi buku baru selama jumlah hari keterlambatan",
      "Denda uang tunai sebesar seribu yen per hari",
      "Pencabutan status kartu mahasiswa",
      "Kewajiban membeli buku yang sama sebanyak dua eksemplar"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Sanksi dalam teks: '遅延日数分だけ新たな貸出および予約が禁止されます' (Dilarang meminjam selama jumlah hari telat)."
  },
  {
    "id": "q-jp-bb-3",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Baca wacana ketentuan beasiswa MEXT (Pemerintah Jepang):\n'文部科学省国費外国人留学生は、毎月所定の期日までに大学留学生支援窓口にて在籍簿に自筆署名（サイン）を行わなければならない。出張・病気等の正当な理由なく署名を行わなかった月は、当月分の奨学金が支給されない。'\n\nApa yang wajib dilakukan mahasiswa setiap bulan agar uang saku beasiswa MEXT cair?",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Mengirim email laporan pengeluaran belanja harian ke kementerian",
      "Menandatangani buku presensi kehadiran (在籍簿) secara langsung di loket kampus",
      "Menyerahkan salinan slip gaji pekerjaan paruh waktu",
      "Mengikuti ujian wawancara online setiap awal bulan"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Penerima beasiswa MEXT wajib hadir menandatangani buku bukti keberadaan di Jepang (在籍確認のサイン) setiap bulan."
  },
  {
    "id": "q-jp-bb-4",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Dengarkan audio pengumuman sidang tesis pascasarjana berikut:",
    "targetSentence": "修士論文発表会は来月十日、第一共同セミナー室にて午前九時半より開始いたします。発表時間は質疑応答を含め一人三十分です。発表者は開始十五分前までにプロジェクターの接続確認を完了してください。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Sidang tesis dibatalkan karena renovasi proyektor ruang seminar",
      "Ujian lisan dipindahkan ke ruang dosen pembimbing masing-masing",
      "Sidang tesis dimulai tanggal 10 bulan depan jam 09.30, durasi 30 menit per orang, dan wajib cek proyektor 15 menit sebelumnya",
      "Presentasi berlangsung selama 2 jam tanpa sesi tanya jawab"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Pengumuman: tanggal 10 jam 09.30, ruang seminar 1, waktu 30 menit (termasuk tanya jawab), dan cek proyektor 15 menit sebelum mulai."
  },
  {
    "id": "q-jp-bb-5",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Dengarkan audio aturan keselamatan laboratorium berikut:",
    "targetSentence": "有機溶媒および酸性試薬を使用した後は、必ずドラフトチャンバー内で適切な廃液容器に分別廃棄してください。誤って一般下水に流すことは法律により厳禁されています。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Larangan menyalakan lampu laboratorium setelah jam lima sore",
      "Petunjuk cara mencampur asam sulfat pekat dengan air keran",
      "Pemberitahuan pemadaman listrik berkala di gedung sains",
      "Kewajiban membuang limbah reagen kimia dan pelarut organik ke jerigen pemilahan khusus di dalam fume hood (lemari asam)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Instruksi: limbah pelarut organik wajib dibuang terpisah di fume hood (ドラフトチャンバー内), dilarang dibuang ke saluran air biasa."
  },
  {
    "id": "q-jp-bb-6",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Dengarkan audio percakapan dengan petugas bagian kemahasiswaan (教務係):",
    "targetSentence": "先ほど申請いただいた健康診断証明書と在学証明書の発行手続きが完了しました。自動発行機に学生証をタッチしていただければ、本日中に印刷可能です。",
    "audioVoiceLang": "ja-JP",
    "options": [
      "Surat keterangan sehat dan surat mahasiswa aktif sudah bisa dicetak langsung di mesin otomatis menggunakan kartu mahasiswa",
      "Kartu tanda mahasiswa Anda ditolak karena belum membayar uang semester",
      "Pemeriksaan kesehatan tahunan akan diadakan lusa di aula olahraga",
      "Surat pengantar visa baru bisa diambil minggu depan"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Petugas menginformasikan sertifikat sudah siap dicetak di mesin mandiri (自動発行機) dengan menempelkan kartu mahasiswa."
  },
  {
    "id": "q-jp-bb-7",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Pilihlah ungkapan tata bahasa N2 yang tepat untuk melengkapi hubungan kausalitas simultan:\n'科学技術の急速な進歩____、従来のプライバシー保護法の見直しが迫られている。'",
    "audioVoiceLang": "ja-JP",
    "options": [
      "をおいて (o oite) — selain... tidak ada yang lain",
      "に伴い (ni tomonai) — seiring dengan / bersamaan dengan",
      "に反して (ni hanshite) — bertentangan dengan / berlawanan dengan",
      "を皮切りに (o kawakiri ni) — diawali dengan / dimulai dari"
    ],
    "correctAnswerIndex": 1,
    "explanation": "〜に伴い (ni tomonai: seiring dengan berkembangnya...) menyatakan perubahan A yang memicu perubahan B secara simultan."
  },
  {
    "id": "q-jp-bb-8",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Pilihlah bentuk tata bahasa yang tepat untuk menyatakan ketidaksanggupan psikologis/etika seorang peneliti:\n'研究不正を目の当たりにした以上、研究者としての良心から黙認する____。'",
    "audioVoiceLang": "ja-JP",
    "options": [
      "わけがない (wake ga nai: mustahil kenyataannya)",
      "に違いない (ni chigainai: pasti)",
      "わけにはいかない (wake ni wa ikanai: tidak mungkin bisa membiarkannya secara nurani)",
      "にすぎない (ni suginai: hanya sekadar)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "〜わけにはいかない menyatakan bahwa dari segi etika moral / norma sosial, tindakan tersebut tidak boleh dilakukan."
  },
  {
    "id": "q-jp-bb-9",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Pilihlah bentuk tata bahasa yang menyatakan keharusan tanpa pilihan lain:\n'台風の接近により交通機関が全面的に麻痺したため、本日の学会発表を中止____。'",
    "audioVoiceLang": "ja-JP",
    "options": [
      "するはずがなかった (suru hazu ga nakatta) — tidak mungkin dijadwalkan terjadi",
      "したくてたまらなかった (shitakute tamaranakatta) — sangat ingin melakukannya",
      "することになったわけではない (suru koto ni natta wake dewa nai) — bukan berarti diputuskan demikian",
      "せざるを得なかった (sezaru o enakatta) — terpaksa membatalkan tanpa pilihan lain"
    ],
    "correctAnswerIndex": 3,
    "explanation": "〜ざるを得ない (sezaru o enai) berarti 'terpaksa harus melakukan hal tersebut karena tidak ada pilihan lain yang memungkinkan'."
  },
  {
    "id": "q-jp-bb-10",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Manakah perbedaan makna yang BENAR antara '〜わけではない' dan '〜わけがない'?",
    "options": [
      "〜わけではない berarti penyangkalan sebagian ('bukan berarti selalu demikian'), sedangkan 〜わけがない berarti penyangkalan mutlak ('mustahil sekali')",
      "Keduanya memiliki arti yang sama persis tanpa perbedaan",
      "〜わけではない digunakan untuk masa depan, sedangkan 〜わけがない untuk masa lalu",
      "〜わけがない adalah bahasa slang anak muda, sedangkan 〜わけではない bahasa resmi"
    ],
    "correctAnswerIndex": 0,
    "explanation": "〜わけではない = partial denial (tidak selalu); 〜わけがない = absolute impossibility (mustahil/tidak mungkin)."
  },
  {
    "id": "q-jp-bb-11",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Dalam wawancara seleksi pascasarjana, penguji menanyakan: 'Jika hipotesis Anda ternyata keliru di tengah penelitian, apa yang akan Anda lakukan?'. Jawaban paling tepat adalah:",
    "options": [
      "Tetap memaksakan data agar sesuai dengan hipotesis awal",
      "Segera meninjau kembali variabel eksperimen, menganalisis faktor penyebab deviasi data bersama profesor pembimbing, dan merumuskan pendekatan alternatif",
      "Langsung menyerah dan berganti topik penelitian baru",
      "Menyalahkan alat ukur laboratorium yang sudah tua"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sikap ilmiah yang matang mengedepankan analisis penyebab anomali data (データ偏差の要因分析) dan pemecahan masalah objektif."
  },
  {
    "id": "q-jp-bb-12",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Di lingkungan universitas Jepang, bagaimana cara memanggil profesor pembimbing Anda saat bertegur sapa secara langsung?",
    "options": [
      "〇〇教授 (〇〇-kyōju) — gelar jabatan tertulis pada dokumen/surat resmi",
      "〇〇さん (〇〇-san) — panggilan umum antar rekan (kurang sopan untuk profesor)",
      "〇〇先生 (〇〇-sensei) — panggilan langsung yang sopan kepada dosen/profesor di kampus",
      "あなた (Anata) — Anda (tidak sopan bila digunakan kepada atasan/dosen)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Dalam percakapan langsung tatap muka, seluruh dosen wajib dipanggil dengan akhiran '〜先生' (Sensei). Sebutan 〇〇教授 lazimnya untuk ragam tulis."
  },
  {
    "id": "q-jp-bb-13",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Makna dari peribahasa akademik empat karakter (四字熟語) '切磋琢磨' (Sessa takuma) adalah:",
    "options": [
      "Bekerja lembur sampai larut malam tanpa istirahat",
      "Membuang barang-barang yang sudah tidak terpakai",
      "Berdebat keras sampai bermusuhan",
      "Saling mengasah kemampuan, memacu prestasi, dan belajar bersama dengan rekan demi mencapai kualitas terbaik"
    ],
    "correctAnswerIndex": 3,
    "explanation": "切磋琢磨 (sessa takuma) adalah ungkapan yang sangat dijunjung dalam budaya laboratorium Jepang (saling mengasah dan memotivasi antarpeneliti)."
  },
  {
    "id": "q-jp-bb-14",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Apa etiket penting yang harus diperhatikan saat pertama kali berkunjung ke laboratorium riset (研究室訪問 - Kenkyūshitsu Hōmon)?",
    "options": [
      "Membuat janji terlebih dahulu via email resmi, membaca publikasi profesor sebelumnya, hadir 5 menit lebih awal, dan berpakaian rapi formal (setelan jas)",
      "Langsung datang mengetuk pintu tanpa pemberitahuan sebelumnya agar terlihat bersemangat",
      "Membawa hadiah mewah mahal untuk menyogok profesor",
      "Membawa teman satu angkatan yang banyak agar ramai"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Kenkyuushitsu Houmon wajib dijadwalkan via email (アポイントメント), membaca riset profesor, hadir tepat waktu, dan berbusana formal (スーツ)."
  },
  {
    "id": "q-jp-bb-15",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Berapa batas maksimal jam kerja paruh waktu (arubaito) yang diizinkan oleh hukum imigrasi Jepang bagi mahasiswa asing pemegang izin resmi selama masa aktif perkuliahan?",
    "options": [
      "Bebas tanpa batas jam asalkan nilai tidak turun",
      "Maksimal 28 jam per minggu (dan hingga 40 jam per minggu saat libur panjang semester)",
      "Maksimal 10 jam per minggu",
      "Dilarang bekerja sama sekali dalam kondisi apapun"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Undang-undang keimigrasian Jepang menetapkan batas legal arubaito mahasiswa asing adalah 28 jam per minggu (週28時間以内)."
  }
];

export const KOREA_50_QUESTIONS: QuizQuestion[] = [
  {
    "id": "q-kr-pg-1",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilihlah tata bahasa tingkat menengah TOPIK II yang tepat untuk menyatakan dua hal positif yang saling mengakumulasi secara formal:",
    "targetSentence": "그 후보자는 뛰어난 연구 실적을 갖추었을____, 유창한 한국어 구사 능력도 겸비하고 있다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "반면에 (banmyeone: di sisi lain)",
      "바람에 (barame: akibat yang merugikan)",
      "뿐만 아니라 (ppunman anira: tidak hanya... tetapi juga...)",
      "탓에 (tase: gara-gara)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "-(으)ㄹ 뿐만 아니라 digunakan untuk menambahkan informasi pendukung sejajar (tidak hanya A, tetapi juga B)."
  },
  {
    "id": "q-kr-pg-2",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilihlah kosakata berakar karakter Hanja yang tepat untuk istilah akademik 'pendaftaran mata kuliah / pengisian KRS':",
    "targetSentence": "이번 학기 전공과목 ____ 기간은 다음 주 월요일부터 시작됩니다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "졸업증명 (joreopjeungmyeong [卒業證明]) — surat keterangan lulus / ijazah",
      "입학시험 (iphaksihyeom [入學試驗]) — ujian saringan masuk universitas",
      "출석체크 (chulseokchekeu) — pemeriksaan daftar hadir kuliah",
      "수강신청 (sugangsincheong [受講申請]) — pendaftaran rencana studi / pengisian KRS"
    ],
    "correctAnswerIndex": 3,
    "explanation": "수강신청 (受講申請: sugangsincheong) adalah istilah resmi untuk pendaftaran mata kuliah / KRS di universitas Korea."
  },
  {
    "id": "q-kr-pg-3",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Dalam penulisan artikel ilmiah, bentuk kutipan tidak langsung yang paling tepat untuk mengutip temuan peneliti terdahulu adalah:",
    "targetSentence": "선행 연구에 따르면, 기후 변화가 농업 생산성에 직접적인 영향을 ____.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "미친다고 보고되었다 (michindago bogodoeeotda) — dilaporkan memberikan pengaruh (kutipan tidak langsung ilmiah)",
      "미쳐요라고 했어요 (michyeoyo-rago haesseoyo) — katanya berpengaruh (ragam lisan santai)",
      "미치네요 (michineyo) — ternyata berpengaruh ya (ekspresi lisan)",
      "미칠 것 같아요 (michil geot gat-ayo) — sepertinya akan berpengaruh (dugaan subjektif lisan)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "-(ㄴ/는)다고 보고되었다/밝혀졌다 adalah bentuk kutipan objektif pasif formal dalam makalah akademik Korea."
  },
  {
    "id": "q-kr-pg-4",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Dalam esai argumentatif TOPIK II (Soal No. 54), akhiran kalimat yang WAJIB digunakan untuk menjaga nada netral ilmiah adalah:",
    "audioVoiceLang": "ko-KR",
    "options": [
      "해요체 (-아/어요) — ragam sopan percakapan sehari-hari",
      "해라체 / Plain Style (-ㄴ/는다, -았다/었다, -(으)ㅁ) — ragam tulis netral ilmiah (wajib untuk esai TOPIK & jurnal)",
      "하십시오체 (-습니다/십니까) — ragam formal lisan / presentasi",
      "반말 (-어/야) — ragam akrab tidak sopan"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Esai akademik dan laporan riset Korea wajib ditulis dengan gaya netral plain style (해라체: -ㄴ/는다). Penggunaan -아요/어요 akan dikenai penalti nilai."
  },
  {
    "id": "q-kr-pg-5",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilihlah partikel penanda rujukan data yang tepat untuk teks laporan akademik:",
    "targetSentence": "통계청이 발표한 최근 조사 결과____, 1인 가구의 비율이 급증하고 있다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "에 비해서 (e bihaeseo) — dibandingkan dengan",
      "에 대하여 (e daehayeo) — mengenai / tentang",
      "에 의하면 (e uihamyeon) — berdasarkan / menurut rujukan data",
      "에 불구하고 (e bulguhago) — terlepas dari / meskipun"
    ],
    "correctAnswerIndex": 2,
    "explanation": "-에 의하면 / -에 따르면 digunakan secara formal untuk menunjukkan sumber rujukan data resmi."
  },
  {
    "id": "q-kr-pg-6",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilihlah bentuk tata bahasa sebab-akibat formal netral yang paling tepat untuk kalimat fenomena alam:",
    "targetSentence": "유례없는 집중호우____ 산사태가 발생하여 도로가 통제되었다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "느라고 (neurago: karena sibuk melakukan suatu aksi)",
      "자마자 (jamaja: segera setelah)",
      "길래 (gillae: ragam lisan santai)",
      "로 인해 (ro inhae: dikarenakan oleh / akibat)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "-(으)로 인해 adalah bentuk sebab-akibat formal tertulis tingkat tinggi untuk menjelaskan fenomena alam atau sosial."
  },
  {
    "id": "q-kr-pg-7",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Konjungsi logis yang tepat untuk menarik kesimpulan akhir pada paragraf penutup esai TOPIK No. 54 adalah:",
    "targetSentence": "____ 정부와 시민사회가 긴밀히 협력하여 지속 가능한 대책을 마련해야 한다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "따라서 (ttaraseo: oleh karena itu)",
      "그런데 (geureonde: ngomong-ngomong)",
      "하지만 (hajiman: tetapi)",
      "왜냐하면 (waenyahamyeon: karena)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "'따라서' (oleh karena itu) adalah konjungsi standar penutup argumen deduktif dalam wacana esai formal."
  },
  {
    "id": "q-kr-pg-8",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Istilah hukum dan etika akademik untuk tindakan ilegal menjiplak karya orang lain tanpa mencantumkan sumber adalah:",
    "audioVoiceLang": "ko-KR",
    "options": [
      "출판 (chulpan [出版: penerbitan])",
      "표절 (pyojeol [剽竊: plagiarisme])",
      "열람 (yeollam [閱覽: membaca])",
      "기부 (gibu [寄附: donasi])"
    ],
    "correctAnswerIndex": 1,
    "explanation": "표절 (pyojeol) adalah istilah hukum akademik untuk plagiarisme di perguruan tinggi Korea."
  },
  {
    "id": "q-kr-pg-9",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilihlah pasangan kata yang membedakan 'menuju/mengarah ke tujuan baik' dan 'menghindari/menolak perbuatan buruk':",
    "targetSentence": "학문적 창의성을 ____하고, 무분별한 단순 암기식 학습은 ____해야 한다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "지양(止揚 — menghindari) - 지향(指向 — mengarah ke tujuan)",
      "가속(加速 — percepatan) - 발전(發展 — perkembangan)",
      "지향(指向 — mengarah ke tujuan positif) - 지양(止揚 — menghindari hal negatif)",
      "포기(抛棄 — menyerah) - 장려(奬勵 — mendorong/menganjurkan)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "지향하다 (指向) = mengarah ke tujuan positif; 지양하다 (止揚) = menghindari / menghentikan kebiasaan negatif."
  },
  {
    "id": "q-kr-pg-10",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Pilihlah format salam penutup email yang paling santun dan baku saat mengirimkan draf proposal kepada Dosen Pembimbing (지도교수님):",
    "audioVoiceLang": "ko-KR",
    "options": [
      "그럼 다음에 또 연락할게요. 안녕히 계세요! — Kalau begitu lain kali saya hubungi lagi ya. Sampai jumpa!",
      "빨리 답장 부탁드립니다. 수고하세요! — Tolong cepat balas ya. Selamat bekerja!",
      "바이바이, 다음 주에 봐요. — Dadah, sampai ketemu minggu depan.",
      "교수님의 건강과 행복을 기원합니다. 학생 [이름] 올림 (또는 드림) — Saya mendoakan kesehatan dan kebahagiaan Profesor. Hormat saya, Mahasiswa [Nama]."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Salam penutup Keigo Korea: mendoakan kesehatan dosen diikuti [이름] 올림 (mempersembahkan ke atas) atau 드림."
  },
  {
    "id": "q-kr-es-1",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "수년간의 피나는 노력과 역경 끝에 세계적인 바이오 벤처기업을 일궈낸 대표의 성공 스토리는 고진감래의 진정한 표상이다. (Sunyeon-gan-ui pinaneun noryeok-gwa yeokgyeong kkeut-e segyejeok-in ba-io bencheogieop-eul ilgwonaen daepyo-ui seong-gong seutori-neun gojingamrae-ui jinjeonghan pyosang-ida.)",
    "audioVoiceLang": "ko-KR",
    "sampleAnswer": "Kisah sukses sang CEO yang membangun perusahaan rintisan bioteknologi kelas dunia setelah melewati perjuangan berdarah-darah dan rintangan nestapa bertahun-tahun adalah lambang sejati dari pepatah gojingamrae (habis pahit terbitlah manis).",
    "keywords": [
      "kisah",
      "sukses",
      "membangun",
      "perusahaan"
    ],
    "explanation": "Kalimat akademik pola Saja-seong-eo Filosofis 1 (사자성어): 고진감래, 일석이조, 작심삼일: '수년간의 피나는 노력과 역경 끝에 세계적인 바이오 벤처기업을 일궈낸 대표의 성공 스토리는 고진감래의 진정한 표상이다.' diterjemahkan secara akurat menjadi 'Kisah sukses sang CEO yang membangun perusahaan rintisan bioteknologi kelas dunia setelah melewati perjuangan berdarah-darah dan rintangan nestapa bertahun-tahun adalah lambang sejati dari pepatah gojingamrae (habis pahit terbitlah manis).'."
  },
  {
    "id": "q-kr-es-2",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "상대방의 처지를 역지사지의 자세로 헤아리지 않고 일방적인 주장만을 되풀이한다면 대화의 물꼬를 틀 수 없다. (Sangdaebang-ui cheoji-reul yeokjisaji-ui jase-ro he-ariji ankgo ilbangjeok-in jujangman-eul doepurihandamyeon daehwa-ui mulkko-reul teul su eopda.)",
    "audioVoiceLang": "ko-KR",
    "sampleAnswer": "Jika kita tidak menimbang kondisi mitra bicara dengan sikap empati menempatkan diri pada posisinya (yeokjisaji) dan hanya mengulang-ulang klaim sepihak, keran dialog mustahil dapat dibuka.",
    "keywords": [
      "menimbang",
      "kondisi",
      "mitra",
      "bicara"
    ],
    "explanation": "Kalimat akademik pola Saja-seong-eo Filosofis 2 (사자성어): 설상가상, 역지사지, 유비무환: '상대방의 처지를 역지사지의 자세로 헤아리지 않고 일방적인 주장만을 되풀이한다면 대화의 물꼬를 틀 수 없다.' diterjemahkan secara akurat menjadi 'Jika kita tidak menimbang kondisi mitra bicara dengan sikap empati menempatkan diri pada posisinya (yeokjisaji) dan hanya mengulang-ulang klaim sepihak, keran dialog mustahil dapat dibuka.'."
  },
  {
    "id": "q-kr-es-3",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "그 연구소는 최첨단 연구 장비를 완비하고 있거니와 세계 정상급 석학들이 대거 포진해 있어 학계의 기대를 한 몸에 받고 있다. (Geu yeon-guso-neun choecheomdan yeon-gu jangbi-reul wanbihago itgeoniwa segye jeongsanggeup seokhaktdeul-i daegeo pojinhae isseo hakgye-ui gidae-reul han mom-e batgo itda.)",
    "audioVoiceLang": "ko-KR",
    "sampleAnswer": "Di samping laboratorium tersebut telah melengkapi fasilitas peralatan riset mutakhir tentu saja demikian, para cendekiawan terkemuka kelas dunia pun bersiaga dalam jumlah besar di sana, sehingga menyerap tumpuan harapan komunitas akademik.",
    "keywords": [
      "samping",
      "laboratorium",
      "tersebut",
      "melengkapi"
    ],
    "explanation": "Kalimat akademik pola Penambahan Bertingkat & Pengandaian Ekstrem: -거니와 & -라손 치더라도: '그 연구소는 최첨단 연구 장비를 완비하고 있거니와 세계 정상급 석학들이 대거 포진해 있어 학계의 기대를 한 몸에 받고 있다.' diterjemahkan secara akurat menjadi 'Di samping laboratorium tersebut telah melengkapi fasilitas peralatan riset mutakhir tentu saja demikian, para cendekiawan terkemuka kelas dunia pun bersiaga dalam jumlah besar di sana, sehingga menyerap tumpuan harapan komunitas akademik.'."
  },
  {
    "id": "q-kr-es-4",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "평소 피나는 연습과 철저한 자기관리를 거치지 않고서야 저토록 완벽하고 경이로운 무대를 선보일 수는 없다. (Pyeongso pinaneun yeonseup-gwa cheoljeohan jagigwanri-reul geochiji ankoseoya jeotorok wanbyeokhago gyeong-iroun mudae-reul seonbo-il su-neun eopda.)",
    "audioVoiceLang": "ko-KR",
    "sampleAnswer": "Tanpa melalui latihan berdarah-darah dan disiplin diri yang ketat sehari-harinya, mustahil seseorang mampu mempersembahkan panggung pertunjukan yang sebegitu sempurna dan mengagumkan.",
    "keywords": [
      "tanpa",
      "melalui",
      "latihan",
      "berdarah"
    ],
    "explanation": "Kalimat akademik pola Prasyarat Kritis & Kemustahilan Absolut: -지 않고서야 & -(으)ㄹ 턱이 없다: '평소 피나는 연습과 철저한 자기관리를 거치지 않고서야 저토록 완벽하고 경이로운 무대를 선보일 수는 없다.' diterjemahkan secara akurat menjadi 'Tanpa melalui latihan berdarah-darah dan disiplin diri yang ketat sehari-harinya, mustahil seseorang mampu mempersembahkan panggung pertunjukan yang sebegitu sempurna dan mengagumkan.'."
  },
  {
    "id": "q-kr-es-5",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "두 기업은 상호 원천 기술을 동등하게 공유한다는 전제하에 차세대 친환경 전기차 공동 개발 협약을 체결했습니다. (Du gieop-eun sangho woncheon gisul-eul dongdeunghage gong-yuhandaneun jeonjeha-e chasedae chinhwan-gyeong jeon-gicha gongdong gaebal hyeobyak-eul chegyeolhaesseumnida.)",
    "audioVoiceLang": "ko-KR",
    "sampleAnswer": "Kedua korporasi menandatangani perjanjian pengembangan bersama mobil listrik ramah lingkungan generasi berikutnya dengan premis asumsi bahwa kedua pihak saling berbagi teknologi sumber secara setara.",
    "keywords": [
      "kedua",
      "korporasi",
      "menandatangani",
      "perjanjian"
    ],
    "explanation": "Kalimat akademik pola Premis Prasyarat & Momen Titik Balik: -ㄴ/는다는 전제하에 & -를 계기로: '두 기업은 상호 원천 기술을 동등하게 공유한다는 전제하에 차세대 친환경 전기차 공동 개발 협약을 체결했습니다.' diterjemahkan secara akurat menjadi 'Kedua korporasi menandatangani perjanjian pengembangan bersama mobil listrik ramah lingkungan generasi berikutnya dengan premis asumsi bahwa kedua pihak saling berbagi teknologi sumber secara setara.'."
  },
  {
    "id": "q-kr-es-6",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "어떠한 외압이나 부당한 회유가 있더라도 사법부의 독립성과 법치주의의 원칙은 결코 흔들려서는 안 됩니다. (Eotteohan oe-ap-ina budanghan hoeyu-ga itdeorado sabeopbu-ui dongnipseong-gwa beopchijuui-ui wonchik-eun gyeolko heundeullyeoseoneun an doemnida.)",
    "audioVoiceLang": "ko-KR",
    "sampleAnswer": "Kendatipun terdapat tekanan eksternal atau bujukan tak adil dalam bentuk apa pun, independensi kekuasaan kehakiman dan prinsip negara hukum sama sekali tak boleh goyah.",
    "keywords": [
      "kendatipun",
      "terdapat",
      "tekanan",
      "eksternal"
    ],
    "explanation": "Kalimat akademik pola Penyangkalan Paling Mutlak: 결코 -지 않다 & 전무하다: '어떠한 외압이나 부당한 회유가 있더라도 사법부의 독립성과 법치주의의 원칙은 결코 흔들려서는 안 됩니다.' diterjemahkan secara akurat menjadi 'Kendatipun terdapat tekanan eksternal atau bujukan tak adil dalam bentuk apa pun, independensi kekuasaan kehakiman dan prinsip negara hukum sama sekali tak boleh goyah.'."
  },
  {
    "id": "q-kr-es-7",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "헌법과 형사소송법이 규정한 적법 절차의 원칙에 의거하여 수사를 진행하고 증거를 엄격히 채택해야 한다. (Heonbeop-gwa hyeongsasosongbeop-i gyujeonghan jeokbeop jeolcha-ui wonchik-e uigeohayeo susa-reul jinhaenghago jeung-geo-reul eomgyeokhi chaetaekhaeya handa.)",
    "audioVoiceLang": "ko-KR",
    "sampleAnswer": "Penyelidikan harus dilangsungkan dan barang bukti harus diadopsi secara ketat berdasarkan landasan prinsip proses hukum yang adil yang diatur oleh konstitusi dan hukum acara pidana.",
    "keywords": [
      "penyelidikan",
      "dilangsungkan",
      "barang",
      "bukti"
    ],
    "explanation": "Kalimat akademik pola Berdasarkan Kaidah Hukum & Tanpa Dibatasi: -에 의거하여 & -에 국한되지 않다: '헌법과 형사소송법이 규정한 적법 절차의 원칙에 의거하여 수사를 진행하고 증거를 엄격히 채택해야 한다.' diterjemahkan secara akurat menjadi 'Penyelidikan harus dilangsungkan dan barang bukti harus diadopsi secara ketat berdasarkan landasan prinsip proses hukum yang adil yang diatur oleh konstitusi dan hukum acara pidana.'."
  },
  {
    "id": "q-kr-es-8",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "통계청이 발표한 자료에 따르면 국내 1인 가구 수는 2010년 414만 가구에서 2020년에는 664만 가구로 10년 사이에 무려 60% 급증한 것으로 나타났다. (Tonggyecheong-i balpyohan jaryo-e ttareumyeon gungnae il-in gagu su-neun icheonsimnyeon sabaeksipsaman gagu-eseo icheoni-simnyeon-eneun yukbaekyuksipsaman gagu-ro simnyeon sa-i-e muryeo yuksip peosenteu geupjeonghan geos-euro natanatda.)",
    "audioVoiceLang": "ko-KR",
    "sampleAnswer": "Menurut data yang dirilis Badan Pusat Statistik Korea, jumlah rumah tangga berpenghuni tunggal (1 orang) di dalam negeri melonjak drastis sebesar 60% dalam kurun waktu 10 tahun, dari 4,14 juta rumah tangga pada tahun 2010 menjadi 6,64 juta rumah tangga pada tahun 2020.",
    "keywords": [
      "menurut",
      "data",
      "dirilis",
      "badan"
    ],
    "explanation": "Kalimat akademik pola Retorika Analisis Grafik & Statistik Penulisan Soal No. 53: '통계청이 발표한 자료에 따르면 국내 1인 가구 수는 2010년 414만 가구에서 2020년에는 664만 가구로 10년 사이에 무려 60% 급증한 것으로 나타났다.' diterjemahkan secara akurat menjadi 'Menurut data yang dirilis Badan Pusat Statistik Korea, jumlah rumah tangga berpenghuni tunggal (1 orang) di dalam negeri melonjak drastis sebesar 60% dalam kurun waktu 10 tahun, dari 4,14 juta rumah tangga pada tahun 2010 menjadi 6,64 juta rumah tangga pada tahun 2020.'."
  },
  {
    "id": "q-kr-es-9",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "폭설로 도로가 전면 마비되는 바람에 제시간에 도착하기는커녕 고속도로 한가운데에 갇혀 꼬박 밤을 지새웠습니다. (Pokseol-ro doro-ga jeonmyeon mabidoeneun baram-e jesigan-e dochakhagineunkeonyeong gosokdoro han-gaunde-e gachyeo kkobak bam-eul jisaewosseumnida.)",
    "audioVoiceLang": "ko-KR",
    "sampleAnswer": "Gara-gara salju lebat melumpuhkan jalanan total, alih-alih tiba tepat waktu, jangankan itu, kami justru terjebak di tengah jalan tol dan begadang semalaman suntuk.",
    "keywords": [
      "gara",
      "salju",
      "lebat",
      "melumpuhkan"
    ],
    "explanation": "Kalimat akademik pola Penyangkalan Total & Ketiadaan Jeda: -기는커녕 & -새도 없이: '폭설로 도로가 전면 마비되는 바람에 제시간에 도착하기는커녕 고속도로 한가운데에 갇혀 꼬박 밤을 지새웠습니다.' diterjemahkan secara akurat menjadi 'Gara-gara salju lebat melumpuhkan jalanan total, alih-alih tiba tepat waktu, jangankan itu, kami justru terjebak di tengah jalan tol dan begadang semalaman suntuk.'."
  },
  {
    "id": "q-kr-es-10",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "본 연구는 현대 다문화 사회에서 발생하는 갈등의 구조적 원인을 법철학적 준거에 의거하여 규명하는 한편, 특정 집단에 국한되지 않는 보편적 공존 모델을 도출한다는 전제하에 기획되었다. (Bon yeon-gu-neun hyeondae damunhwa sahoe-eseo balsaenghaneun galdeung-ui gujojeok wonin-eul beobcheolhakjeok jun-geo-e uigeohayeo gyumyeonghaneun hanpyeon, teukjeong jipdan-e guk-handoeji anneun bopyeonjeok gongjon moder-eul dochulhandaneun jeonjeha-e gihoekdoe-eotda.)",
    "audioVoiceLang": "ko-KR",
    "sampleAnswer": "Penelitian ini direncanakan dengan premis asumsi bahwa di samping mengungkap akar struktural konflik yang timbul dalam masyarakat multikultural modern berlandaskan kaidah filsafat hukum, kami secara simultan menarik model koeksistensi universal yang tidak dibatasi hanya pada kelompok tertentu saja.",
    "keywords": [
      "penelitian",
      "direncanakan",
      "premis",
      "asumsi"
    ],
    "explanation": "Kalimat akademik pola Mahakarya Kelulusan TOPIK 2 Level 6 & Bahasa Korea Akademik Perguruan Tinggi (Capstone Unit): '본 연구는 현대 다문화 사회에서 발생하는 갈등의 구조적 원인을 법철학적 준거에 의거하여 규명하는 한편, 특정 집단에 국한되지 않는 보편적 공존 모델을 도출한다는 전제하에 기획되었다.' diterjemahkan secara akurat menjadi 'Penelitian ini direncanakan dengan premis asumsi bahwa di samping mengungkap akar struktural konflik yang timbul dalam masyarakat multikultural modern berlandaskan kaidah filsafat hukum, kami secara simultan menarik model koeksistensi universal yang tidak dibatasi hanya pada kelompok tertentu saja.'."
  },
  {
    "id": "q-kr-sk-1",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi pengumuman resmi pendaftaran mata kuliah (KRS):",
    "scrambledWords": [
      "완료해 주시기 바랍니다",
      "이번 학기 수강신청을",
      "기한 내에"
    ],
    "correctOrder": [
      "이번 학기 수강신청을",
      "기한 내에",
      "완료해 주시기 바랍니다"
    ],
    "targetSentence": "이번 학기 수강신청을 기한 내에 완료해 주시기 바랍니다.",
    "audioVoiceLang": "ko-KR",
    "explanation": "Objek kalimat (이번 학기 수강신청을) + Keterangan batas waktu (기한 내에) + Permohonan tindakan formal (완료해 주시기 바랍니다)."
  },
  {
    "id": "q-kr-sk-2",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi kalimat pemeriksaan berkas beasiswa pemerintah Korea:",
    "scrambledWords": [
      "꼼꼼하게 검토했습니다",
      "지원 서류를",
      "정부초청 외국인 장학생"
    ],
    "correctOrder": [
      "정부초청 외국인 장학생",
      "지원 서류를",
      "꼼꼼하게 검토했습니다"
    ],
    "targetSentence": "정부초청 외국인 장학생 지원 서류를 꼼꼼하게 검토했습니다.",
    "audioVoiceLang": "ko-KR",
    "explanation": "Frasa program beasiswa (정부초청 외국인 장학생) + Objek dokumen (지원 서류를) + Adverbia & verba lampau (꼼꼼하게 검토했습니다)."
  },
  {
    "id": "q-kr-sk-3",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi kalimat penyerahan draf proposal tesis:",
    "scrambledWords": [
      "피드백을 받았습니다",
      "학위논문 연구계획서를",
      "지도교수님께 제출하여"
    ],
    "correctOrder": [
      "학위논문 연구계획서를",
      "지도교수님께 제출하여",
      "피드백을 받았습니다"
    ],
    "targetSentence": "학위논문 연구계획서를 지도교수님께 제출하여 피드백을 받았습니다.",
    "audioVoiceLang": "ko-KR",
    "explanation": "Objek proposal riset (학위논문 연구계획서를) + Aksi penyerahan ke dosen (지도교수님께 제출하여) + Hasil penerimaan evaluasi (피드백을 받았습니다)."
  },
  {
    "id": "q-kr-sk-4",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi tata tertib peminjaman buku perpustakaan kampus:",
    "scrambledWords": [
      "반납해야 합니다",
      "연체되지 않도록",
      "도서관에서 대출한 전공서적은"
    ],
    "correctOrder": [
      "도서관에서 대출한 전공서적은",
      "연체되지 않도록",
      "반납해야 합니다"
    ],
    "targetSentence": "도서관에서 대출한 전공서적은 연체되지 않도록 반납해야 합니다.",
    "audioVoiceLang": "ko-KR",
    "explanation": "Topik buku pinjaman (도서관에서 대출한 전공서적은) + Klausa tujuan agar tidak denda (연체되지 않도록) + Keharusan pengembalian (반납해야 합니다)."
  },
  {
    "id": "q-kr-sk-5",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Susun kata-kata acak berikut menjadi pengumuman presentasi seminar riset lab:",
    "scrambledWords": [
      "발표할 예정입니다",
      "다음 주 학술 세미나에서",
      "최신 연구 동향을"
    ],
    "correctOrder": [
      "다음 주 학술 세미나에서",
      "최신 연구 동향을",
      "발표할 예정입니다"
    ],
    "targetSentence": "다음 주 학술 세미나에서 최신 연구 동향을 발표할 예정입니다.",
    "audioVoiceLang": "ko-KR",
    "explanation": "Keterangan waktu & forum (다음 주 학술 세미나에서) + Topik tren penelitian (최신 연구 동향을) + Rencana presentasi (발표할 예정입니다)."
  },
  {
    "id": "q-kr-ar-1",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan bahasa Indonesia yang paling akurat untuk istilah administrasi perkuliahan: '수강신청 (Sugang sincheong)':",
    "targetSentence": "포털 시스템을 통해 전공 필수 과목의 수강신청을 완료했다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Pembayaran uang kuliah tunggal di bank kampus",
      "Permohonan kartu anggota perpustakaan",
      "Pendaftaran mata kuliah / pengisian KRS semester online",
      "Pendaftaran wisuda sarjana"
    ],
    "correctAnswerIndex": 2,
    "explanation": "수강신청 adalah registrasi pendaftaran mata kuliah perkuliahan (Course Registration)."
  },
  {
    "id": "q-kr-ar-2",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti yang tepat dari istilah beasiswa: '장학금 수혜 (Janghakgeum suhye)':",
    "targetSentence": "우수한 학업 성적을 인정받아 1년간 전액 장학금 수혜 대상자로 선발되었다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Pengembalian dana pinjaman mahasiswa",
      "Pemotongan gaji asisten laboratorium",
      "Iuran wajib organisasi kemahasiswaan",
      "Penerimaan hak / perolehan manfaat beasiswa pendidikan"
    ],
    "correctAnswerIndex": 3,
    "explanation": "수혜 (受惠: menerima manfaat/kebaikan) + 장학금 (beasiswa) = perolehan hak beasiswa."
  },
  {
    "id": "q-kr-ar-3",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan dokumen akademik: '학업계획서 (Hageop gyehoekseo)':",
    "targetSentence": "대학원 입학 지원서와 함께 상세한 학업계획서를 제출해야 한다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Rencana studi / Statement of Purpose (SOP)",
      "Buku harian kegiatan ekstrakurikuler",
      "Kuitansi sewa kamar kos mahasiswa",
      "Daftar menu kantin asrama"
    ],
    "correctAnswerIndex": 0,
    "explanation": "학업계획서 (Study Plan / Statement of Purpose) adalah proposal rencana studi akademik pelamar universitas."
  },
  {
    "id": "q-kr-ar-4",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti yang tepat dari dokumen: '성적증명서 (Seongjeok jeungmyeongseo)':",
    "targetSentence": "아포스티유 인증을 받은 최종 학력 성적증명서 원본을 제출하십시오.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Ijazah kelulusan sekolah",
      "Transkrip nilai akademik resmi",
      "Surat keterangan sehat",
      "Pas foto resmi visa"
    ],
    "correctAnswerIndex": 1,
    "explanation": "성적 (nilai hasil belajar) + 증명서 (surat sertifikat keterangan) = transkrip nilai resmi."
  },
  {
    "id": "q-kr-ar-5",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan posisi pendidik: '지도교수 (Jido gyosu)':",
    "targetSentence": "학위논문 작성을 위해서는 반드시 소속 전공의 지도교수를 배정받아야 한다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Dekan fakultas kedokteran",
      "Ketua senat universitas",
      "Dosen pembimbing akademik / pembimbing tugas akhir skripsi",
      "Staf keamanan gerbang kampus"
    ],
    "correctAnswerIndex": 2,
    "explanation": "지도 (membimbing) + 교수 (profesor) = Dosen Pembimbing Akademik / Thesis Supervisor."
  },
  {
    "id": "q-kr-ar-6",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan prosedur status studi: '휴학 (Hyuhak)' dan '복학 (Bokhak)':",
    "targetSentence": "군 복무를 위해 2년간 휴학한 후, 이번 학기에 성공적으로 복학하였다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Lulus sarjana dan wisuda pascasarjana",
      "Ujian masuk dan orientasi mahasiswa",
      "Pindah jurusan dan pindah universitas",
      "Cuti kuliah sementara dan aktif kuliah kembali"
    ],
    "correctAnswerIndex": 3,
    "explanation": "휴학 (休學) = cuti kuliah; 복학 (復學) = kembali aktif kuliah setelah masa cuti."
  },
  {
    "id": "q-kr-ar-7",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti istilah integritas: '연구 윤리 (Yeon-gu yunri)':",
    "targetSentence": "모든 연구자는 연구 윤리 준수 서약서에 서명하고 교육을 이수해야 한다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Etika penelitian ilmiah",
      "Anggaran biaya operasional riset",
      "Jadwal libur laboratorium",
      "Lomba karya ilmiah mahasiswa"
    ],
    "correctAnswerIndex": 0,
    "explanation": "연구 윤리 (Research Ethics) adalah pedoman kejujuran dan etika integritas dalam penelitian ilmiah."
  },
  {
    "id": "q-kr-ar-8",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan tahapan akhir kelulusan: '논문 심사 (Nonmun simsa)':",
    "targetSentence": "최종 논문 심사위원회의 엄격한 구두 구술 심사를 거쳤다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Pencetakan naskah tugas akhir di percetakan",
      "Sidang ujian dan evaluasi kelayakan tesis/disertasi",
      "Penyimpanan berkas di arsip nasional",
      "Pengumuman daftar mahasiswa baru"
    ],
    "correctAnswerIndex": 1,
    "explanation": "논문 (tesis/disertasi) + 심사 (evaluasi/sidang penilaian) = sidang ujian tesis."
  },
  {
    "id": "q-kr-ar-9",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan prosedur imigrasi Korea: '체류자격 연장 (Cheryujagyeok yeonjang)':",
    "targetSentence": "외국인등록증 뒷면의 체류기간 만료일 전에 체류자격 연장을 신청해야 한다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Pembuatan kartu ATM bank universitas",
      "Registrasi nomor telepon seluler pascabayar",
      "Perpanjangan izin masa tinggal visa pelajar di kantor imigrasi (HiKorea)",
      "Pendaftaran kartu transportasi umum T-Money"
    ],
    "correctAnswerIndex": 2,
    "explanation": "체류자격 (status izin tinggal) + 연장 (perpanjangan masa berlaku)."
  },
  {
    "id": "q-kr-ar-10",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti kelompok mata kuliah: '전공필수 (Jeongong pilsu)':",
    "targetSentence": "졸업 요건을 충족하려면 전공필수 18학점을 모두 이수해야 합니다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Mata kuliah olahraga pilihan",
      "Kuliah kerja nyata pengabdian masyarakat",
      "Bimbingan belajar bahasa asing tambahan",
      "Mata kuliah wajib program studi / jurusan"
    ],
    "correctAnswerIndex": 3,
    "explanation": "전공 (jurusan spesialisasi) + 필수 (wajib) = mata kuliah wajib jurusan (Major Required Course)."
  },
  {
    "id": "q-kr-bb-1",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Baca teks wacana akademik TOPIK II berikut:\n'출산율 감소와 급속한 고령화로 인해 생산가능인구가 급감하고 있다. 이에 따라 정부는 정년 연장과 함께 청년층의 고용 안정을 도모하는 입체적 고용 대책을 시급히 수립해야 한다.'\n\nApa dampak utama dari penurunan angka kelahiran dan penuaan populasi menurut teks?",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Populasi usia kerja produktif (생산가능인구) mengalami penurunan drastis",
      "Angka pengangguran usia lanjut mencapai nol persen",
      "Biaya pendidikan universitas menjadi gratis",
      "Jumlah mahasiswa asing di Korea ditutup"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Teks secara eksplisit menyatakan: '생산가능인구가 급감하고 있다' (Populasi usia kerja mengalami penurunan tajam)."
  },
  {
    "id": "q-kr-bb-2",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Baca wacana aturan perpustakaan universitas berikut:\n'도서관 열람실 좌석은 모바일 앱을 통해 좌석 발권을 마친 후 이용해야 합니다. 발권 후 30분 이내에 게이트에 학생증을 태그하지 않거나, 2시간 이상 공석 상태가 지속될 경우 자동으로 퇴실 처리되며, 3회 누적 시 일주일간 좌석 배정이 제한됩니다.'\n\nApa yang terjadi jika mahasiswa meninggalkan kursi perpustakaan kosong selama lebih dari dua jam?",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Dikenai denda uang tunai sebesar lima ribu won",
      "Kursi otomatis dibatalkan (퇴실 처리), dan jika terjadi 3 kali akan diblokir selama satu minggu",
      "Buku yang ada di meja akan disita dan dibakar",
      "Tidak ada sanksi apapun"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Aturan menetapkan: '2시간 이상 공석 시 자동 퇴실, 3회 누적 시 일주일간 좌석 배정 제한'."
  },
  {
    "id": "q-kr-bb-3",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Baca wacana seleksi Beasiswa Pemerintah Korea (GKS):\n'GKS 장학생으로 선발된 자는 본 과정 진학 전 1년간 국립국제교육원이 지정한 대학 한국어연수기관에서 한국어 연수를 이수해야 한다. 1년 연수 종료 시까지 TOPIK 3급 이상을 취득하지 못할 경우 장학생 자격이 취소된다.'\n\nBerapa level minimal TOPIK yang wajib diraih setelah 1 tahun kursus bahasa agar beasiswa GKS tidak dibatalkan?",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Minimal TOPIK Level 5",
      "Minimal TOPIK Level 1",
      "Minimal TOPIK Level 3",
      "Tidak diwajibkan ujian TOPIK"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Ketentuan resmi GKS: wajib meraih minimal TOPIK 3급 (Level 3) setelah 1 tahun kursus bahasa sebelum masuk kuliah reguler."
  },
  {
    "id": "q-kr-bb-4",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Dengarkan audio pengumuman kantor jurusan (학과 사무실) berikut:",
    "targetSentence": "학과 사무실에서 공지합니다. 이번 학기 대학원 학위청구논문 예비심사 신청 마감은 이번 주 금요일 오후 다섯 시까지입니다. 신청서와 지도교수 추천서를 첨부하여 교학팀에 직접 제출하시기 바랍니다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Sidang skripsi dibatalkan dan diganti dengan pembuatan laporan magang",
      "Dosen pembimbing meminta seluruh mahasiswa hadir rapat di aula utama",
      "Pendaftaran beasiswa dibuka sampai akhir bulan depan",
      "Batas akhir pendaftaran ujian pra-sidang tesis adalah Jumat ini jam 17.00, berkas diserahkan langsung ke kantor jurusan"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Pengumuman: 예비심사 신청 마감 (batas pra-sidang tesis) pada Jumat pukul 17.00 diserahkan langsung (직접 제출)."
  },
  {
    "id": "q-kr-bb-5",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Dengarkan audio petunjuk keselamatan laboratorium riset:",
    "targetSentence": "실험실 내에서는 반드시 실험복과 보안경을 착용해야 하며, 음식물 반입은 일절 금지됩니다. 화학물질 유출 사고 발생 시 비상샤워기를 즉시 가동하고 비상연락망으로 보고하십시오.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Kewajiban memakai jas lab dan kacamata pelindung, larangan membawa makanan, serta prosedur darurat tumpahan kimia",
      "Jadwal perbaikan pendingin ruangan laboratorium",
      "Instruksi pembelian alat-alat keselamatan kerja mandiri",
      "Larangan menyalakan komputer lab di atas jam sepuluh malam"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Audio memuat aturan standar lab: jas lab (실험복), kacamata (보안경), larangan makanan, dan pancuran darurat (비상샤워기)."
  },
  {
    "id": "q-kr-bb-6",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Dengarkan audio informasi pengurusan kartu identitas orang asing (외국인등록증):",
    "targetSentence": "입국일로부터 구십 일 이내에 출입국관리사무소를 방문하여 외국인등록을 마쳐야 합니다. 하이코리아 웹사이트에서 사전에 방문 예약을 하지 않으면 당일 접수가 불가능합니다.",
    "audioVoiceLang": "ko-KR",
    "options": [
      "Pembuatan visa baru di bandara internasional Incheon",
      "Kewajiban registrasi orang asing dalam 90 hari sejak kedatangan dan wajib reservasi online terlebih dahulu di HiKorea",
      "Pemeriksaan kesehatan gratis di puskesmas distrik",
      "Pembukaan rekening tabungan bank kampus"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Wajib lapor asing dalam 90 hari (90일 이내) dan wajib reservasi online di HiKorea (사전 방문 예약)."
  },
  {
    "id": "q-kr-bb-7",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Pilihlah bentuk tata bahasa formal penanda sudut pandang evaluasi:\n'국제 통상 환경의 급변과 공급망 불안정____, 수출 의존도가 높은 국가들은 경제적 다변화를 서둘러야 한다.'",
    "audioVoiceLang": "ko-KR",
    "options": [
      "에 불과하고 (e bulgwahago) — hanya sekadar / tidak lebih dari",
      "에 다름없다 (e dareumeopda) — sama saja dengan / tiada bedanya dengan",
      "에 비추어 볼 때 (e bichueo bol ttae) — ditinjau dari / berkaca pada",
      "을 막론하고 (eul mangnonhago) — tanpa memandang / terlepas dari"
    ],
    "correctAnswerIndex": 2,
    "explanation": "-에 비추어 볼 때 (berkaca dari / meninjau situasi...) adalah pola evaluasi formal standar dalam teks opini ilmiah."
  },
  {
    "id": "q-kr-bb-8",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Pilihlah bentuk tata bahasa penegasan ganda (double negative) yang menyatakan keniscayaan tak terbantahkan:\n'인공지능의 급속한 발전은 기존의 고용 구조에 지대한 변화를 가져____.'",
    "audioVoiceLang": "ko-KR",
    "options": [
      "올 리가 없다 (ol riga eopda) — mustahil akan terjadi",
      "올 턱이 없다 (ol teogi eopda) — sama sekali tidak ada alasan untuk terjadi",
      "오다시피 했다 (odasipi haetda) — hampir saja datang",
      "오지 않을 수 없다 (oji aneul su eopda) — niscaya pasti membawa perubahan (penegasan ganda)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "-지 않을 수 없다 (tidak bisa untuk tidak...) menyatakan kepastian absolut yang niscaya terjadi."
  },
  {
    "id": "q-kr-bb-9",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Pilihlah bentuk kausatif perintah instruksional akademik:\n'지도교수는 연구원들에게 연구 윤리 지침을 철저히 ____ 조치했다.'",
    "audioVoiceLang": "ko-KR",
    "options": [
      "준수하도록 (junsuhadorok) — agar mematuhi / supaya menaati",
      "준수하는 바람에 (junsuhaneun barame) — gara-gara mematuhi (sebab negatif)",
      "준수하다시피 (junsuhadasipi) — sebagaimana hampir mematuhi",
      "준수할지라도 (junsuhaljirado) — sekalipun mematuhi"
    ],
    "correctAnswerIndex": 0,
    "explanation": "-도록 하다 / -도록 조치하다 adalah konstruksi kausatif formal untuk memerintahkan suatu prosedur dipatuhi."
  },
  {
    "id": "q-kr-bb-10",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Analisis kesalahan tata bahasa (문법 오류 수정): Manakah kalimat yang BENAR secara penulisan netral esai TOPIK No. 54?",
    "options": [
      "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제예요. — ... adalah tugas yang tak dapat ditunda lagi (ragam lisan 해요체).",
      "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제이다. — Dalam masyarakat modern, pelestarian lingkungan adalah tugas yang tak dapat ditunda lagi (ragam tulis 해라체).",
      "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제입니다. — ... adalah tugas yang tak dapat ditunda lagi (ragam formal lisan 하십시오체).",
      "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제야. — ... adalah tugas yang tak dapat ditunda lagi (ragam akrab 반말)."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Predikat kata benda dalam gaya netral bertuliskan '과제이다' (-이다). Bentuk -예요, -입니다, -야 dilarang dalam esai No. 54."
  },
  {
    "id": "q-kr-bb-11",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Dalam wawancara beasiswa GKS, pewawancara menanyakan: 'Apa yang akan Anda lakukan jika riset Anda di lab mengalami kebuntuan?'. Jawaban paling berbobot adalah:",
    "options": [
      "Pulang ke negara asal dan liburan selama satu bulan",
      "Menyalahkan alat laboratorium universitas yang kurang canggih",
      "Mengkaji ulang literatur internasional terbaru, berdiskusi aktif mencari solusi dengan profesor pembimbing dan rekan lab, serta melakukan eksperimen alternatif",
      "Membuat data fiktif agar laporan cepat selesai"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Kematangan mental peneliti dinilai dari ketangguhan mengatasi kegagalan eksperimen (실패 극복 능력) melalui metode ilmiah."
  },
  {
    "id": "q-kr-bb-12",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Bagaimana cara menyapa Dosen Pembimbing sekaligus Ketua Jurusan saat berpapasan di lorong kampus Korea?",
    "options": [
      "야, 형! (Ya, hyeong!) — Hei, Bang! (sapaan kasar/akrab)",
      "아저씨, 안녕하세요! (Ajeossi, annyeonghaseyo!) — Paman, halo! (tidak sopan untuk dosen)",
      "선생, 잘 지냈어? (Seonsaeng, jal jinaesseo?) — Guru, apa kabar? (kalimat 반말 tidak sopan)",
      "교수님 (Gyosunim) / 학과장님 (Hakgwajangnim), 안녕하십니까! — Profesor / Bapak-Ibu Ketua Jurusan, selamat pagi/siang! (sapaan hormat resmi)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Gunakan sebutan kehormatan 교수님 (Profesor) atau jabatan struktural 학과장님 (Ketua Jurusan) disertai salam formal 안녕하십니까."
  },
  {
    "id": "q-kr-bb-13",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Makna dari peribahasa empat karakter (사자성어) '일석이조 (一石二鳥)' adalah:",
    "options": [
      "Sekali mendayung dua tiga pulau terlampaui (meraih dua keuntungan sekaligus dalam satu tindakan)",
      "Melempar batu sembunyi tangan",
      "Batu yang menggelinding tidak akan ditumbuhi lumut",
      "Burung yang terbang tinggi mencari mangsa"
    ],
    "correctAnswerIndex": 0,
    "explanation": "일석이조 (一石二鳥: melempar satu batu mendapat dua burung) = meraih dua manfaat ganda sekaligus."
  },
  {
    "id": "q-kr-bb-14",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Dalam budaya laboratorium universitas Korea (랩실 문화), apa peran dari seorang '랩장' (Raepjang)?",
    "options": [
      "Dosen tamu dari luar negeri",
      "Mahasiswa senior yang ditunjuk profesor sebagai koordinator harian keselamatan, jadwal, dan administrasi laboratorium",
      "Petugas kebersihan gedung kampus",
      "Dekan fakultas teknologi"
    ],
    "correctAnswerIndex": 1,
    "explanation": "랩장 (Lab Leader) adalah mahasiswa pascasarjana senior yang memimpin koordinasi operasional riset di laboratorium."
  },
  {
    "id": "q-kr-bb-15",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Berdasarkan peraturan imigrasi Korea Selatan, berapa jam batas kerja paruh waktu (알바) per minggu yang diizinkan untuk mahasiswa program gelar yang telah memiliki sertifikat TOPIK yang dipersyaratkan?",
    "options": [
      "Maksimal 40 jam per minggu setiap saat",
      "Maksimal 5 jam per minggu saja",
      "Maksimal 20 hingga 25 jam per minggu (dan tanpa batas jam saat liburan semester resmi)",
      "Dilarang bekerja sama sekali selama studi"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Mahasiswa asing dengan izin resmi (체류자격외 활동허가) diizinkan bekerja paruh waktu 20-25 jam/minggu saat masa kuliah aktif."
  }
];

export const ENGLISH_50_QUESTIONS: QuizQuestion[] = [
  {
    "id": "q-en-pg-1",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Choose the correct Negative Inversion structure for academic rhetorical emphasis:",
    "targetSentence": "______ such unprecedented resilience in international supply chain networks.",
    "audioVoiceLang": "en-US",
    "options": [
      "Rarely econometric indicators have revealed — Susunan tanpa inversi kata kerja bantu (tidak baku)",
      "Rarely econometric indicators revealed — Susunan tanpa kata kerja bantu (tidak baku)",
      "Rarely did econometric indicators has revealed — Konjugasi ganda did + has yang salah secara gramatika",
      "Rarely have econometric indicators revealed — Jarang sekali indikator ekonometrika memperlihatkan (inversi negatif baku)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "After restrictive adverbials like 'Rarely' or 'Seldom', subject-auxiliary inversion is mandatory ('have econometric indicators revealed')."
  },
  {
    "id": "q-en-pg-2",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Identify the proper mandative subjunctive form in university regulatory discourse:",
    "targetSentence": "The academic ethics board mandated that the doctoral candidate ______ all raw empirical datasets by Friday.",
    "audioVoiceLang": "en-US",
    "options": [
      "submit (bare infinitive) — menyerahkan (bentuk subjunktif mandatif yang tepat setelah \"mandates that...\")",
      "submits (third-person singular) — menyerahkan (bentuk indikatif biasa, kurang tepat untuk mandatif formal)",
      "submitted (past tense) — telah menyerahkan (bentuk lampau yang tidak sesuai konteks regulasi)",
      "will submit (future modal) — akan menyerahkan (modal futur tidak dipakai dalam subjunktif mandatif)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "In formal mandative subjunctive clauses triggered by 'mandated that', the verb must remain in bare infinitive form ('submit')."
  },
  {
    "id": "q-en-pg-3",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Select the nominalised formulation that achieves optimal academic lexical density:",
    "audioVoiceLang": "en-US",
    "options": [
      "Because digital platforms proliferated really fast, lawmakers had to change how antitrust laws work. — Karena platform digital tumbuh sangat cepat, pembuat UU harus mengubah cara kerja hukum (gaya lisan).",
      "The rapid proliferation of digital platforms precipitated an overhaul of antitrust jurisprudence. — Pesatnya proliferasi platform digital memicu perombakan yurisprudensi antimonopoli (nominalisasi akademik padat).",
      "Digital platforms grew very quickly and then people decided to make new rules for them. — Platform digital tumbuh cepat lalu orang memutuskan membuat aturan baru (kosakata terlalu umum).",
      "Since everyone uses digital platforms now, courts have changed their decisions. — Karena semua orang memakai platform digital sekarang, pengadilan mengubah putusan (kurang presisi)."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Nominalisation packs active verbal processes into dense, objective noun phrases ('The rapid proliferation... precipitated an overhaul')."
  },
  {
    "id": "q-en-pg-4",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Which sentence demonstrates appropriate Academic Hedging for empirical findings?",
    "audioVoiceLang": "en-US",
    "options": [
      "Our experiment proves with 100% certainty that all previous scientists were completely mistaken. — Eksperimen kami membuktikan 100% bahwa semua ilmuwan terdahulu salah total (klaim absolut berlebihan).",
      "This data unquestionably demonstrates the absolute truth of our theory. — Data ini tanpa keraguan menunjukkan kebenaran mutlak teori kami (tidak objektif).",
      "The preliminary dataset appears to suggest a tentative correlation between the two variables. — Data awal tampaknya mengindikasikan korelasi tentatif antara kedua variabel (hedging akademik tepat).",
      "Everyone must agree that these results cannot possibly be challenged. — Semua orang wajib setuju bahwa hasil ini mustahil dibantah (dogmatis)."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Academic hedging uses cautious epistemic stance ('appears to suggest a tentative correlation') rather than absolutist dogmatism."
  },
  {
    "id": "q-en-pg-5",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Select the correct inverted conditional structure without 'if' for formal correspondence:",
    "targetSentence": "______ further clarification regarding the methodology, please contact the principal investigator.",
    "audioVoiceLang": "en-US",
    "options": [
      "If should you require — Gabungan \"if\" dan inversi yang salah secara sintaksis",
      "Were you require — Bentuk \"were\" yang salah karena diikuti bare infinitive tanpa \"to\"",
      "Had you required — Kondisional tipe 3 (masa lampau tak nyata), tidak tepat untuk korespondensi masa depan",
      "Should you require — Apabila Anda memerlukan (inversi kondisional formal tanpa \"if\")"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Inverted conditional Type 1 uses 'Should + Subject + bare infinitive' ('Should you require') without the conjunction 'if'."
  },
  {
    "id": "q-en-pg-6",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Choose the formal complex preposition that correctly indicates legal conformity:",
    "targetSentence": "The research protocol was audited ______ institutional biohazard regulations.",
    "audioVoiceLang": "en-US",
    "options": [
      "in accordance with — sesuai dengan / berdasarkan ketentuan hukum",
      "in accordance to — preposisi pasangan yang salah (seharusnya \"with\")",
      "pursuant of — preposisi pasangan yang salah (seharusnya \"pursuant to\")",
      "with compliance at — kolokasi preposisi yang tidak baku (seharusnya \"in compliance with\")"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The standard collocations are 'in accordance with' and 'pursuant to'."
  },
  {
    "id": "q-en-pg-7",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Identify the thesis statement that maintains strict syntactic parallelism:",
    "audioVoiceLang": "en-US",
    "options": [
      "The initiative aims to enhance transparency, streamlining governance, and innovation. — Mencampur to-infinitive, gerund, dan nomina (tidak paralel).",
      "The initiative aims to enhance transparency, to streamline governance, and to foster innovation. — Inisiatif ini bertujuan meningkatkan transparansi, merampingkan tata kelola, dan mendorong inovasi (paralelisme utuh).",
      "The initiative aims at transparency, to streamline governance, and fostering innovation. — Mencampur preposisi, to-infinitive, dan gerund (tidak paralel).",
      "The initiative aims to enhance transparency, stream governance, and fostered innovation. — Mencampur present infinitive dan past participle (tidak paralel)."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Parallelism requires consistent grammatical structures across listed items ('to enhance... to streamline... to foster')."
  },
  {
    "id": "q-en-pg-8",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Choose the correct concessive transition marker that pairs with 'nevertheless':",
    "targetSentence": "______, the upfront capital expenditure is substantial; nevertheless, the projected operational efficiencies justify the investment.",
    "audioVoiceLang": "en-US",
    "options": [
      "Because — Karena (konjungsi subordinatif kausal)",
      "Consequently — Akibatnya / oleh karena itu (transisi akibat)",
      "Admittedly — Memang harus diakui (penanda konsesif yang berpasangan dengan \"nevertheless\")",
      "Furthermore — Selain itu / lebih lanjut (transisi aditif)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "'Admittedly... nevertheless' is a classic rhetorical pairing that concedes a counterpoint before reasserting the core thesis."
  },
  {
    "id": "q-en-pg-9",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Select the diplomatic euphemism used in academic peer review to state that an empirical section is deficient:",
    "targetSentence": "The statistical verification in Chapter 4 regrettably ______.",
    "audioVoiceLang": "en-US",
    "options": [
      "is complete garbage — sama sekali sampah (bahasa kasar tidak ilmiah)",
      "fails in every single way — gagal total dalam segala hal (hiperbola emosional)",
      "is totally useless — sama sekali tidak berguna (bahasa informal kasar)",
      "leaves much to be desired — masih sangat perlu ditingkatkan / belum memadai (eufemisme akademik sopan)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "'Leaves much to be desired' is the standard diplomatic understatement in British and American peer reviews for substandard work."
  },
  {
    "id": "q-en-pg-10",
    "type": "multiple_choice",
    "sectionType": "pg",
    "prompt": "Choose the academic verb that correctly collocates with 'hypothesis' in research reporting:",
    "targetSentence": "Subsequent longitudinal trials failed to ______ the initial hypothesis.",
    "audioVoiceLang": "en-US",
    "options": [
      "substantiate (corroborate with evidence) — memperkuat / membuktikan kebenaran hipotesis dengan bukti empiris",
      "manufacture — memproduksi barang pabrik / mengarang cerita",
      "exaggerate — melebih-lebihkan secara tidak proporsional",
      "speculate — berspekulasi tanpa bukti"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The academic collocation is 'substantiate a hypothesis' (memperkuat/memvalidasi hipotesis dengan data empiris)."
  },
  {
    "id": "q-en-es-1",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "Seldom have international macroeconomic indicators shown such profound resilience amidst global supply disruptions. (ˈsɛldəm hæv ˌɪntəˈnæʃnəl ˌmækrəʊˌiːkəˈnɒmɪk ˈɪndɪkeɪtəz ʃəʊn sʌtʃ prəˈfaʊnd rɪˈzɪlɪəns əˈmɪdst ˈgləʊbl səˈplaɪ dɪsˈrʌpʃnz.)",
    "audioVoiceLang": "en-US",
    "sampleAnswer": "Jarang sekali indikator ekonomi makro internasional menunjukkan ketahanan yang begitu mendalam di tengah gangguan pasokan rantai global.",
    "keywords": [
      "jarang",
      "sekali",
      "indikator",
      "ekonomi"
    ],
    "explanation": "Kalimat akademik pola Negative Inversion & Emphatic Fronting (Formal Rhetorical Emphasis): 'Seldom have international macroeconomic indicators shown such profound resilience amidst global supply disruptions.' diterjemahkan secara akurat menjadi 'Jarang sekali indikator ekonomi makro internasional menunjukkan ketahanan yang begitu mendalam di tengah gangguan pasokan rantai global.'."
  },
  {
    "id": "q-en-es-2",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "The academic ethics committee recommended that the professor's research grant be temporarily suspended pending thorough investigation. (ði ˌækəˈdɛmɪk ˈɛθɪks kəˈmɪti ˌrɛkəˈmɛndɪd ðæt ðə prəˈfɛsəz rɪˈsɜːtʃ grɑːnt biː ˈtɛmpərərəli səˈspɛndɪd ˈpɛndɪŋ ˈθʌrə ɪnˌvɛstɪˈgeɪʃn.)",
    "audioVoiceLang": "en-US",
    "sampleAnswer": "Komite etika akademik merekomendasikan agar dana hibah penelitian profesor tersebut dibekukan sementara seraya menunggu investigasi menyeluruh.",
    "keywords": [
      "komite",
      "etika",
      "akademik",
      "merekomendasikan"
    ],
    "explanation": "Kalimat akademik pola The Subjunctive Mood in Formal Mandates & Nuanced Recommendations: 'The academic ethics committee recommended that the professor's research grant be temporarily suspended pending thorough investigation.' diterjemahkan secara akurat menjadi 'Komite etika akademik merekomendasikan agar dana hibah penelitian profesor tersebut dibekukan sementara seraya menunggu investigasi menyeluruh.'."
  },
  {
    "id": "q-en-es-3",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "The rapid proliferation of generative artificial intelligence necessitates a comprehensive recalibration of intellectual property statutes. (ðə ˈræpɪd prəˌlɪfəˈreɪʃn ɒv ˈdʒɛnərətɪv ˌɑːtɪˈfɪʃl ɪnˈtɛlɪdʒəns nɪˈsɛsɪteɪts ə ˌkɒmprɪˈhɛnsɪv ˌriːˌkælɪˈbreɪʃn ɒv ˌɪntɪˈlɛktʃʊəl ˈprɒpəti ˈstætjuːts.)",
    "audioVoiceLang": "en-US",
    "sampleAnswer": "Penyebaran pesat kecerdasan buatan generatif menuntut kalibrasi ulang yang komprehensif terhadap undang-undang hak kekayaan intelektual.",
    "keywords": [
      "penyebaran",
      "pesat",
      "kecerdasan",
      "buatan"
    ],
    "explanation": "Kalimat akademik pola Nominalisation for Academic Conciseness & Dense Prose: 'The rapid proliferation of generative artificial intelligence necessitates a comprehensive recalibration of intellectual property statutes.' diterjemahkan secara akurat menjadi 'Penyebaran pesat kecerdasan buatan generatif menuntut kalibrasi ulang yang komprehensif terhadap undang-undang hak kekayaan intelektual.'."
  },
  {
    "id": "q-en-es-4",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "The longitudinal dataset appears to indicate a statistically significant correlation between early bilingualism and executive function enhancement. (ðə ˌlɒŋgɪˈtjuːdɪnl ˈdeɪtəsɛt əˈpɪəz tuː ˈɪndɪkeɪt ə stəˈtɪstɪkli sɪgˈnɪfɪkənt ˌkɒrəˈleɪʃn bɪˈtwiːn ˈɜːli baɪˈlɪŋgwəlɪzm ænd ɪgˈzɛkjʊtɪv ˈfʌŋkʃn ɪnˈhɑːnsmənt.)",
    "audioVoiceLang": "en-US",
    "sampleAnswer": "Kumpulan data longitudinal tersebut tampaknya mengindikasikan korelasi yang signifikan secara statistik antara kedwibahasaan sejak dini dan peningkatan fungsi eksekutif.",
    "keywords": [
      "kumpulan",
      "data",
      "longitudinal",
      "tersebut"
    ],
    "explanation": "Kalimat akademik pola Academic Hedging & Nuanced Epistemic Stance: 'The longitudinal dataset appears to indicate a statistically significant correlation between early bilingualism and executive function enhancement.' diterjemahkan secara akurat menjadi 'Kumpulan data longitudinal tersebut tampaknya mengindikasikan korelasi yang signifikan secara statistik antara kedwibahasaan sejak dini dan peningkatan fungsi eksekutif.'."
  },
  {
    "id": "q-en-es-5",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "Should foreign delegates experience any scheduling conflicts, the liaison office stands ready to facilitate itinerary adjustments. (ʃʊd ˈfɒrɪn ˈdɛlɪgɪts ɪkˈspɪərɪəns ˈɛni ˈʃɛdjuːlɪŋ ˈkɒnflɪkts, ðə liˈeɪzɒn ˈɒfɪs stændz ˈrɛdi tuː fəˈsɪlɪteɪt aɪˈtɪnərəri əˈdʒʌstmənts.)",
    "audioVoiceLang": "en-US",
    "sampleAnswer": "Sekiranya para delegasi asing mengalami kendala jadwal acara, kantor penghubung siap sedia memfasilitasi penyesuaian rencana perjalanan.",
    "keywords": [
      "sekiranya",
      "delegasi",
      "asing",
      "mengalami"
    ],
    "explanation": "Kalimat akademik pola Inverted Conditionals without 'If' (Had, Were, Should): 'Should foreign delegates experience any scheduling conflicts, the liaison office stands ready to facilitate itinerary adjustments.' diterjemahkan secara akurat menjadi 'Sekiranya para delegasi asing mengalami kendala jadwal acara, kantor penghubung siap sedia memfasilitasi penyesuaian rencana perjalanan.'."
  },
  {
    "id": "q-en-es-6",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "Pursuant to the provisions stipulated in Section 4 of the Employment Rights Act, severance packages must be disbursed within fourteen business days. (pəˈsjuːənt tuː ðə prəˈvɪʒnz ˈstɪpjʊleɪtɪd ɪn ˈsɛkʃn fɔːr ɒv ði ɪmˈplɔɪmənt raɪts ækt, ˈsɛvərəns ˈpækɪdʒɪz mʌst biː dɪsˈbɜːst wɪˈðɪn ˈfɔːˈtiːn ˈbɪznɪs deɪz.)",
    "audioVoiceLang": "en-US",
    "sampleAnswer": "Sesuai dengan ketentuan yang diatur dalam Bagian 4 Undang-Undang Hak Ketenagakerjaan, paket uang pesangon harus dicairkan dalam waktu empat belas hari kerja.",
    "keywords": [
      "sesuai",
      "ketentuan",
      "diatur",
      "bagian"
    ],
    "explanation": "Kalimat akademik pola Complex Prepositional Phrases & Formal Administrative Register: 'Pursuant to the provisions stipulated in Section 4 of the Employment Rights Act, severance packages must be disbursed within fourteen business days.' diterjemahkan secara akurat menjadi 'Sesuai dengan ketentuan yang diatur dalam Bagian 4 Undang-Undang Hak Ketenagakerjaan, paket uang pesangon harus dicairkan dalam waktu empat belas hari kerja.'."
  },
  {
    "id": "q-en-es-7",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "Neither by suppressing academic dissension nor by withholding critical evidentiary audits can an institution safeguard its enduring intellectual integrity. (ˈnaɪðə baɪ səˈprɛsɪŋ ˌækəˈdɛmɪk dɪˈsɛnʃn nɔː baɪ wɪðˈhəʊldɪŋ ˈkrɪtɪkl ˌɛvɪˈdɛnʃəri ˈɔːdɪts kæn ən ˌɪnstɪˈtjuːʃn ˈseɪfgɑːd ɪts ɪnˈdjʊərɪŋ ˌɪntɪˈlɛktʃʊəl ɪnˈtɛgrɪti.)",
    "audioVoiceLang": "en-US",
    "sampleAnswer": "Baik dengan cara membungkam perbedaan pendapat akademik maupun dengan menahan audit pembuktian penting, suatu institusi tidak akan pernah bisa menjaga integritas intelektualnya yang abadi.",
    "keywords": [
      "baik",
      "cara",
      "membungkam",
      "perbedaan"
    ],
    "explanation": "Kalimat akademik pola Rhetorical Parallelism & Balanced Periodic Sentences: 'Neither by suppressing academic dissension nor by withholding critical evidentiary audits can an institution safeguard its enduring intellectual integrity.' diterjemahkan secara akurat menjadi 'Baik dengan cara membungkam perbedaan pendapat akademik maupun dengan menahan audit pembuktian penting, suatu institusi tidak akan pernah bisa menjaga integritas intelektualnya yang abadi.'."
  },
  {
    "id": "q-en-es-8",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "Formidable though the diplomatic obstacles appeared, the summit interlocutors succeeded in formulating a provisional demilitarisation roadmap. (ˈfɔːmɪdəbl ðəʊ ðə ˌdɪpləˈmætɪk ˈɒbstəklz əˈpɪəd, ðə ˈsʌmɪt ˌɪntəˈlɒkjʊtəz səkˈsiːdɪd ɪn ˈfɔːmjʊleɪtɪŋ ə prəˈvɪʒənl ˌdiːˌmɪlɪtəraɪˈzeɪʃn ˈrəʊdmæp.)",
    "audioVoiceLang": "en-US",
    "sampleAnswer": "Betapapun beratnya rintangan diplomatik tersebut terlihat, para negosiator dalam konferensi tingkat tinggi itu berhasil merumuskan peta jalan demiliterisasi sementara.",
    "keywords": [
      "betapapun",
      "beratnya",
      "rintangan",
      "diplomatik"
    ],
    "explanation": "Kalimat akademik pola Stylistic Concession & Antithesis (Admittedly, Albeit, In Spite of): 'Formidable though the diplomatic obstacles appeared, the summit interlocutors succeeded in formulating a provisional demilitarisation roadmap.' diterjemahkan secara akurat menjadi 'Betapapun beratnya rintangan diplomatik tersebut terlihat, para negosiator dalam konferensi tingkat tinggi itu berhasil merumuskan peta jalan demiliterisasi sementara.'."
  },
  {
    "id": "q-en-es-9",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "The bilateral communique noted that recent cross-border airspace encroachments were viewed with grave concern by international observers. (ðə baɪˈlætərəl kəˈmjuːnɪkeɪ ˈnəʊtɪd ðæt ˈriːsnt krɒs-ˈbɔːdər ˈeəspeɪs ɪnˈkrəʊtʃmənts wɜː vjuːd wɪð greɪv kənˈsɜːn baɪ ˌɪntəˈnæʃnəl əbˈzɜːvəz.)",
    "audioVoiceLang": "en-US",
    "sampleAnswer": "Komunike bilateral tersebut mencatat bahwa pelanggaran ruang udara lintas batas baru-baru ini dipandang dengan keprihatinan mendalam oleh para pengamat internasional.",
    "keywords": [
      "komunike",
      "bilateral",
      "tersebut",
      "mencatat"
    ],
    "explanation": "Kalimat akademik pola Nuanced Diplomatic Modals & Bureaucratic Prudence: 'The bilateral communique noted that recent cross-border airspace encroachments were viewed with grave concern by international observers.' diterjemahkan secara akurat menjadi 'Komunike bilateral tersebut mencatat bahwa pelanggaran ruang udara lintas batas baru-baru ini dipandang dengan keprihatinan mendalam oleh para pengamat internasional.'."
  },
  {
    "id": "q-en-es-10",
    "type": "essay",
    "sectionType": "essai",
    "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
    "targetSentence": "Notwithstanding the proliferation of empirical scholarship addressing transnational capital mobility, significant lacunae persist regarding the sovereign debt vulnerability of emerging market economies. (ˌnɒtwɪθˈstændɪŋ ðə prəˌlɪfəˈreɪʃn ɒv ɪmˈpɪrɪkl ˈskɒləʃɪp əˈdrɛsɪŋ trænzˈnæʃnəl ˈkæpɪtl məʊˈbɪlɪti, sɪgˈnɪfɪkənt ləˈkjuːniː pəˈsɪst rɪˈgɑːdɪŋ ðə ˈsɒvrɪn dɛt ˌvʌlnərəˈbɪlɪti ɒv ɪˈmɜːdʒɪŋ ˈmɑːkɪt iːˈkɒnəmiz.)",
    "audioVoiceLang": "en-US",
    "sampleAnswer": "Meskipun terjadi pertumbuhan pesat riset empiris yang menelaah mobilitas modal lintas negara, kesenjangan signifikan masih bertahan terkait kerentanan utang luar negeri negara-negara berkembang.",
    "keywords": [
      "meskipun",
      "terjadi",
      "pertumbuhan",
      "pesat"
    ],
    "explanation": "Kalimat akademik pola C1 Capstone: Academic Research Paper Discursive Architecture & University Dissertation Prose: 'Notwithstanding the proliferation of empirical scholarship addressing transnational capital mobility, significant lacunae persist regarding the sovereign debt vulnerability of emerging market economies.' diterjemahkan secara akurat menjadi 'Meskipun terjadi pertumbuhan pesat riset empiris yang menelaah mobilitas modal lintas negara, kesenjangan signifikan masih bertahan terkait kerentanan utang luar negeri negara-negara berkembang.'."
  },
  {
    "id": "q-en-sk-1",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Reorder the scrambled phrases into a grammatically coherent academic admissions instruction:",
    "scrambledWords": [
      "their authenticated transcripts",
      "prior to the deadline",
      "prospective international scholars",
      "are required to submit"
    ],
    "correctOrder": [
      "prospective international scholars",
      "are required to submit",
      "their authenticated transcripts",
      "prior to the deadline"
    ],
    "targetSentence": "Prospective international scholars are required to submit their authenticated transcripts prior to the deadline.",
    "audioVoiceLang": "en-US",
    "explanation": "Subject phrase (prospective international scholars) + Passive mandate (are required to submit) + Object (their authenticated transcripts) + Prepositional time modifier (prior to the deadline)."
  },
  {
    "id": "q-en-sk-2",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Reorder the scrambled phrases into a formal empirical findings statement:",
    "scrambledWords": [
      "and variable B",
      "between variable A",
      "a statistically significant correlation",
      "the empirical findings indicate"
    ],
    "correctOrder": [
      "the empirical findings indicate",
      "a statistically significant correlation",
      "between variable A",
      "and variable B"
    ],
    "targetSentence": "The empirical findings indicate a statistically significant correlation between variable A and variable B.",
    "audioVoiceLang": "en-US",
    "explanation": "Reporting clause (the empirical findings indicate) + Noun phrase (a statistically significant correlation) + Correlative prepositional complement (between variable A and variable B)."
  },
  {
    "id": "q-en-sk-3",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Reorder the scrambled phrases into a bioethics research compliance protocol sentence:",
    "scrambledWords": [
      "review board",
      "from the institutional",
      "must receive prior clearance",
      "all biomedical research protocols"
    ],
    "correctOrder": [
      "all biomedical research protocols",
      "must receive prior clearance",
      "from the institutional",
      "review board"
    ],
    "targetSentence": "All biomedical research protocols must receive prior clearance from the institutional review board.",
    "audioVoiceLang": "en-US",
    "explanation": "Subject (all biomedical research protocols) + Modal obligation (must receive prior clearance) + Source authority (from the institutional review board)."
  },
  {
    "id": "q-en-sk-4",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Reorder the scrambled phrases into an academic registrar course enrollment announcement:",
    "scrambledWords": [
      "through the central academic portal",
      "starting next Monday",
      "graduate students may register",
      "for elective seminars"
    ],
    "correctOrder": [
      "graduate students may register",
      "for elective seminars",
      "through the central academic portal",
      "starting next Monday"
    ],
    "targetSentence": "Graduate students may register for elective seminars through the central academic portal starting next Monday.",
    "audioVoiceLang": "en-US",
    "explanation": "Subject & modal verb (graduate students may register) + Course complement (for elective seminars) + Means (through the central academic portal) + Temporal clause (starting next Monday)."
  },
  {
    "id": "q-en-sk-5",
    "type": "sentence_reorder",
    "sectionType": "sambung_kata",
    "prompt": "Reorder the scrambled phrases into a doctoral dissertation defense summary sentence:",
    "scrambledWords": [
      "yesterday afternoon",
      "before the academic tribunal",
      "her dissertation on renewable energy",
      "the doctoral candidate successfully defended"
    ],
    "correctOrder": [
      "the doctoral candidate successfully defended",
      "her dissertation on renewable energy",
      "before the academic tribunal",
      "yesterday afternoon"
    ],
    "targetSentence": "The doctoral candidate successfully defended her dissertation on renewable energy before the academic tribunal yesterday afternoon.",
    "audioVoiceLang": "en-US",
    "explanation": "Subject & transitive verb (the doctoral candidate successfully defended) + Direct object (her dissertation on renewable energy) + Locational tribunal (before the academic tribunal) + Time (yesterday afternoon)."
  },
  {
    "id": "q-en-ar-1",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan bahasa Indonesia yang paling tepat untuk dokumen seleksi: 'Statement of Purpose (SOP)':",
    "targetSentence": "Applicants must submit a 1,000-word Statement of Purpose articulating their research motivations.",
    "audioVoiceLang": "en-US",
    "options": [
      "Daftar riwayat hidup riwayat pekerjaan",
      "Kuitansi bukti pembayaran formulir pendaftaran",
      "Surat keterangan catatan kepolisian",
      "Surat pernyataan tujuan dan motivasi studi akademik pelamar"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Statement of Purpose (SOP) adalah esai akademik formal yang menguraikan latar belakang intelektual, tujuan riset, dan motivasi pelamar."
  },
  {
    "id": "q-en-ar-2",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti yang tepat dari istilah publikasi ilmiah: 'Peer-Reviewed Journal':",
    "targetSentence": "Publishing in a peer-reviewed journal is an essential prerequisite for doctoral graduation.",
    "audioVoiceLang": "en-US",
    "options": [
      "Jurnal ilmiah bereputasi yang ditinjau dan dievaluasi secara ketat oleh para pakar sejawat (mitra bestari)",
      "Majalah berita umum mingguan di perpustakaan",
      "Buku catatan harian mahasiswa di laboratorium",
      "Koran dinding pengumuman kegiatan organisasi mahasiswa"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Peer-reviewed journal adalah jurnal ilmiah yang menerapkan mekanisme penelaahan sejawat sebelum sebuah artikel dinyatakan layak terbit."
  },
  {
    "id": "q-en-ar-3",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan berkas rekomendasi: 'Letters of Recommendation (LoR)':",
    "targetSentence": "Three confidential Letters of Recommendation must be submitted directly by academic referees.",
    "audioVoiceLang": "en-US",
    "options": [
      "Surat pengantar izin cuti kuliah",
      "Surat rekomendasi rahasia dari dosen pembimbing atau akademisi rujukan",
      "Surat penagihan biaya asrama universitas",
      "Surat ucapan selamat ulang tahun dari rektor"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Letters of Recommendation (LoR) adalah surat penilaian kompetensi dari profesor rujukan pelamar."
  },
  {
    "id": "q-en-ar-4",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti istilah akademik: 'Dissertation Defense / Viva Voce':",
    "targetSentence": "The candidate was awarded the PhD degree upon successfully passing the oral dissertation defense.",
    "audioVoiceLang": "en-US",
    "options": [
      "Lomba debat mahasiswa antar fakultas",
      "Upacara penyambutan mahasiswa baru",
      "Sidang ujian lisan pertahanan disertasi doktoral di hadapan dewan penguji",
      "Pemeriksaan kesehatan fisik calon wisudawan"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Dissertation defense (atau Viva Voce di sistem Inggris) adalah sidang ujian lisan akhir untuk mempertahankan disertasi PhD."
  },
  {
    "id": "q-en-ar-5",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan yang tepat untuk kurikulum: 'Syllabus & Prerequisites':",
    "targetSentence": "Please review the course syllabus to ensure you have fulfilled all necessary prerequisites.",
    "audioVoiceLang": "en-US",
    "options": [
      "Denah gedung kampus dan jadwal bus antar-jemput",
      "Daftar buku wajib di toko buku universitas",
      "Jadwal ujian akhir semester dan libur musim panas",
      "Silabus perkuliahan dan mata kuliah prasyarat"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Syllabus = rencana pembelajaran semester; Prerequisites = syarat kelulusan mata kuliah dasar sebelum mengambil mata kuliah lanjutan."
  },
  {
    "id": "q-en-ar-6",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti istilah beasiswa penuh: 'Full Tuition Waiver & Living Stipend':",
    "targetSentence": "The prestigious scholarship package encompasses a full tuition waiver and a monthly living stipend.",
    "audioVoiceLang": "en-US",
    "options": [
      "Pembebasan 100% biaya kuliah serta tunjangan biaya hidup bulanan",
      "Pinjaman uang kuliah yang harus dikembalikan setelah lulus",
      "Diskon sepuluh persen biaya pembelian buku teks",
      "Bantuan kuota internet dan makan siang gratis di kantin"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Tuition waiver = pembebasan biaya kuliah; Living stipend = tunjangan biaya hidup bulanan (Full Scholarship)."
  },
  {
    "id": "q-en-ar-7",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan parameter integritas: 'Plagiarism Similarity Index':",
    "targetSentence": "Manuscripts exceeding a 15% plagiarism similarity index on Turnitin will be automatically flagged for investigation.",
    "audioVoiceLang": "en-US",
    "options": [
      "Peringkat kelulusan sarjana berdasarkan nilai IPK",
      "Indeks persentase kemiripan teks / uji plagiarisme pada piranti lunak Turnitin",
      "Jumlah kata yang diketik dalam satu halaman tugas",
      "Batas kecepatan internet di laboratorium komputer"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Similarity index adalah skor persentase kesamaan teks dengan basis data internet dan karya ilmiah terdahulu."
  },
  {
    "id": "q-en-ar-8",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti istilah status mutu perguruan tinggi: 'Institutional Accreditation':",
    "targetSentence": "Enrolling in a university with rigorous institutional accreditation ensures international degree recognition.",
    "audioVoiceLang": "en-US",
    "options": [
      "Pemberian bantuan dana riset dari alumni",
      "Pembangunan gedung laboratorium baru",
      "Akreditasi resmi mutu institusi pendidikan tinggi oleh badan evaluasi independen",
      "Perekrutan dosen tamu dari industri teknologi"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Institutional accreditation adalah status legal penjaminan mutu sebuah perguruan tinggi di tingkat nasional/global."
  },
  {
    "id": "q-en-ar-9",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah terjemahan istilah metodologi: 'Methodological Triangulation':",
    "targetSentence": "By deploying methodological triangulation, the study integrates quantitative surveys and qualitative interviews.",
    "audioVoiceLang": "en-US",
    "options": [
      "Pengukuran sudut geometri dalam pemetaan lahan",
      "Pemisahan tiga kelompok responden berdasarkan usia",
      "Pembagian tiga bab utama dalam naskah skripsi",
      "Triangulasi metodologis (penggabungan berbagai metode riset untuk memverifikasi keabsahan data)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Methodological triangulation adalah teknik validasi ilmiah yang menggabungkan berbagai pendekatan metodologis (mixed-methods)."
  },
  {
    "id": "q-en-ar-10",
    "type": "translation",
    "sectionType": "artikan",
    "prompt": "Pilihlah arti istilah jabatan asisten pengajar: 'Graduate Teaching Assistantship (GTA)':",
    "targetSentence": "The department awarded her a Graduate Teaching Assistantship to facilitate undergraduate discussion sections.",
    "audioVoiceLang": "en-US",
    "options": [
      "Beasiswa asisten pengajar pascasarjana untuk mendampingi sesi tutorial/praktikum mahasiswa sarjana",
      "Penghargaan mahasiswa terpopuler di fakultas",
      "Tugas membersihkan ruang perpustakaan setiap sore",
      "Magang kerja paruh waktu di restoran kampus"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Teaching Assistantship (TA/GTA) adalah posisi akademik berbayar di universitas Barat di mana mahasiswa pascasarjana mengajar kelas tutorial."
  },
  {
    "id": "q-en-bb-1",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Read the following academic syllabus excerpt:\n'Grading Policy: Final Proctored Exam (50%), Research Term Paper (30%), Seminar Participation (20%). Late submissions of the term paper incur a penalty of 5 percentage points per calendar day. Submissions delayed by more than 7 days will receive an automatic failing grade (0%).'\n\nWhat is the consequence if a student submits the research paper 8 days after the official deadline?",
    "audioVoiceLang": "en-US",
    "options": [
      "The grade is docked by exactly 40 percentage points",
      "The submission automatically receives a failing grade of zero percent (0%)",
      "The student is granted an oral re-examination",
      "The student must write an additional book review"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The text explicitly states: 'Submissions delayed by more than 7 days will receive an automatic failing grade (0%).'"
  },
  {
    "id": "q-en-bb-2",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Read the university library borrowing regulation:\n'Undergraduate students may borrow up to 10 standard monographs for 21 days, whereas postgraduate researchers are entitled to borrow 30 items for up to 90 days. Special collections, rare manuscripts, and course reserves are strictly non-circulating and may only be consulted within the designated reading room.'\n\nWhere may students consult rare manuscripts and course reserve materials?",
    "audioVoiceLang": "en-US",
    "options": [
      "They may be borrowed and taken home for 90 days",
      "In the campus dormitory cafeteria",
      "Exclusively within the designated library reading room (strictly non-circulating)",
      "They can only be read online via smartphone"
    ],
    "correctAnswerIndex": 2,
    "explanation": "The policy specifies that rare manuscripts are 'strictly non-circulating and may only be consulted within the designated reading room.'"
  },
  {
    "id": "q-en-bb-3",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Read the scholarship guidelines for international candidates:\n'To qualify for the Chevening/Fulbright Postgraduate Fellowship, applicants must possess a minimum of two years of substantive professional work experience (equivalent to at least 2,800 hours) and have completed an undergraduate degree with at least upper second-class honours (2:1). Meeting these thresholds does not guarantee shortlisting for the panel interview.'\n\nWhat are the dual baseline eligibility criteria specified in the text?",
    "audioVoiceLang": "en-US",
    "options": [
      "A doctorate in economics and fluent bilingualism in four languages",
      "Five published papers in Scopus Q1 journals and ten recommendation letters",
      "Full residency citizenship in the United Kingdom or United States",
      "At least 2 years (2,800 hours) of professional experience and an undergraduate degree of at least 2:1 honours"
    ],
    "correctAnswerIndex": 3,
    "explanation": "The criteria are two years of work experience (2,800 hours) plus a 2:1 honours bachelor's degree."
  },
  {
    "id": "q-en-bb-4",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Listen to the university registrar announcement and select the accurate summary:",
    "targetSentence": "All international graduate scholars holding student visas must complete mandatory in-person identity verification at the Student Services Hub before Friday at 4:00 PM. Failure to present your original passport and biometric residence permit will result in immediate registration hold.",
    "audioVoiceLang": "en-US",
    "options": [
      "Mandatory in-person identity verification with original passport and BRP before Friday 4 PM to prevent registration hold",
      "All campus libraries will be closed on Friday afternoon for inventory checks",
      "Students are invited to a welcome party at the international dormitory hall",
      "Final examination timetables have been published online"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The announcement mandates in-person verification with original passport/BRP before Friday 4:00 PM under penalty of a registration hold."
  },
  {
    "id": "q-en-bb-5",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Listen to the laboratory biosafety officer's briefing:",
    "targetSentence": "Before commencing any procedures involving volatile organic compounds, ensure that the mechanical exhaust ventilation hood is fully operational and the sash is positioned at the marked safety line. In the event of an accidental solvent spill exceeding 500 millilitres, evacuate the room and activate the emergency spill protocol.",
    "audioVoiceLang": "en-US",
    "options": [
      "Switching off all electrical equipment every hour to save energy",
      "Verifying exhaust ventilation hood operation and evacuating if a solvent spill exceeds 500 mL",
      "Wearing headphones while conducting chemical synthesis experiments",
      "Cleaning laboratory glassware using standard tap water without soap"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The audio dictates fume hood sash positioning and immediate evacuation if an organic chemical spill exceeds 500 mL."
  },
  {
    "id": "q-en-bb-6",
    "type": "listen_comprehension",
    "sectionType": "bebas",
    "prompt": "Listen to the graduate thesis coordinator's instruction:",
    "targetSentence": "Doctoral dissertations must be formatted strictly in accordance with university typography guidelines and uploaded to the institutional repository in PDF/A format by the first of November. Electronic submissions will undergo automated similarity analysis before distribution to the external examiners.",
    "audioVoiceLang": "en-US",
    "options": [
      "Hard copies of dissertations must be hand-bound in leather and submitted to the dean",
      "External examiners will conduct oral interviews before reviewing the written manuscript",
      "Dissertations must adhere to typography guidelines, be uploaded in PDF/A format by Nov 1, and pass similarity analysis prior to external examination",
      "Dissertation deadlines are indefinitely postponed until next spring semester"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Key points: PDF/A format, Nov 1 deadline, institutional repository upload, and pre-examination similarity checks."
  },
  {
    "id": "q-en-bb-7",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Select the formal discourse marker that introduces a logical consequence in academic prose:\n'The macroeconomic model failed to account for sudden capital flight; ______, its fiscal projections proved substantially inaccurate.'",
    "audioVoiceLang": "en-US",
    "options": [
      "conversely — sebaliknya / di sisi lain",
      "nevertheless — namun demikian / meskipun begitu",
      "notwithstanding — terlepas dari / kendatipun",
      "consequently (as a direct result) — akibatnya / oleh karena itu"
    ],
    "correctAnswerIndex": 3,
    "explanation": "'Consequently' introduces a direct logical cause-and-effect relationship between the model's flaw and inaccurate projections."
  },
  {
    "id": "q-en-bb-8",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Choose the correct academic passive modal construction for institutional policy:\n'In light of geopolitical volatility, it ______ to diversify institutional foreign exchange endowments.'",
    "audioVoiceLang": "en-US",
    "options": [
      "is deemed advisable — dipandang bijaksana / dianjurkan secara institusional",
      "is dreaming advisable — kesalahan leksikal (\"dreaming\" = bermimpi)",
      "is deeming advisable — bentuk aktif progresif yang salah (seharusnya pasif \"is deemed\")",
      "was deeming advice — kesalahan bentuk aktif dan kelas kata nomina"
    ],
    "correctAnswerIndex": 0,
    "explanation": "'It is deemed advisable' (dipandang bijaksana/dianjurkan) is the standard formal impersonal passive in administrative policy."
  },
  {
    "id": "q-en-bb-9",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Identify the sentence that correctly deploys a participial clause without dangling modifier errors:",
    "audioVoiceLang": "en-US",
    "options": [
      "Having analyzed the longitudinal panel data, a divergence across cohorts was observed by the computer. — Dangling modifier (seolah-olah \"divergensi\" yang menganalisis data).",
      "Having analyzed the longitudinal panel data, the researchers observed a statistically robust divergence across cohorts. — Setelah menganalisis data panel longitudinal, para peneliti mengamati divergensi signifikan (subjek klausa utama sesuai).",
      "Analyzing the longitudinal panel data, the computer crashed several times. — Dangling modifier (seolah-olah \"komputer\" yang menjadi peneliti).",
      "Having analyzed the longitudinal panel data, the hypothesis became much clearer to everybody. — Dangling modifier (seolah-olah \"hipotesis\" yang menganalisis data)."
    ],
    "correctAnswerIndex": 1,
    "explanation": "In Option 1, the subject of the main clause ('the researchers') logically matches the agent of the participial phrase ('Having analyzed...'). In the others, the modifier dangles."
  },
  {
    "id": "q-en-bb-10",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Which response represents the most professional stance when an interviewer questions a limitation in your proposed research methodology?",
    "options": [
      "Deny that any limitation exists and accuse the interviewer of misinterpreting scientific principles",
      "Blame your master's thesis supervisor for forcing you to use that flawed methodology",
      "Acknowledge the limitation candidly, explain why that trade-off was methodologically necessary, and outline supplementary sensitivity tests to mitigate bias",
      "Apologize profusely and offer to abandon the research proposal immediately"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Demonstrating awareness of methodological trade-offs (batasan metodologi) and outlining mitigation strategies reflects advanced academic maturity."
  },
  {
    "id": "q-en-bb-11",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "In British and Commonwealth universities, what is the formal title and etiquette for addressing a faculty member who holds a doctorate but has not been promoted to a full professorial chair?",
    "options": [
      "Professor [Surname] (reserved strictly for full chair holders in UK conventions)",
      "Mr./Ms. [Surname]",
      "Teacher [Surname]",
      "Dr. [Surname] (Doctor [Surname])"
    ],
    "correctAnswerIndex": 3,
    "explanation": "In the UK/Commonwealth, 'Professor' is a formal rank held only by chairs; senior lecturers with a PhD are addressed as 'Dr. [Surname]'. 'Teacher' is never used."
  },
  {
    "id": "q-en-bb-12",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "The academic term 'Paradigm Shift' (originated by Thomas Kuhn) refers to:",
    "options": [
      "A fundamental, revolutionary transformation in the foundational concepts and practices of a scientific discipline",
      "A minor change in a laboratory's weekly meeting schedule",
      "Switching from one computer software to another",
      "Translating an article into a different dialect"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A paradigm shift (pergeseran paradigma) represents an epistemic revolution that fundamentally alters scientific consensus."
  },
  {
    "id": "q-en-bb-13",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "In Anglo-American university lab culture, what is the primary pedagogical purpose of a 'Journal Club' meeting?",
    "options": [
      "Students gather to write recreational poetry and short stories",
      "Graduate researchers present and critically dissect peer-reviewed papers published by external research teams to stay abreast of scientific frontiers",
      "Faculty members read novels out loud for relaxation",
      "Administrative staff review university budget invoices"
    ],
    "correctAnswerIndex": 1,
    "explanation": "A Journal Club is an essential seminar where lab members rigorously critique contemporary literature to sharpen analytical faculties."
  },
  {
    "id": "q-en-bb-14",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Under UK Student Visa (formerly Tier 4) and US F-1 Visa regulations, what is the statutory ceiling for employment hours permitted during term time?",
    "options": [
      "Unlimited hours provided the student maintains a 3.5 GPA",
      "Exactly 40 hours per week at all times",
      "A maximum of 20 hours per week during term time (with full-time employment permitted during official vacation periods)",
      "No off-campus or on-campus work is ever permitted"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Both UK and US student visa frameworks enforce a strict cap of 20 hours per week during active academic terms."
  },
  {
    "id": "q-en-bb-15",
    "type": "multiple_choice",
    "sectionType": "bebas",
    "prompt": "Which academic phrase best conveys that two variables are mutually dependent and cannot be disentangled?",
    "audioVoiceLang": "en-US",
    "options": [
      "totally separated — terpisah sama sekali",
      "somewhat friends — agak berteman (ungkapan informal tidak ilmiah)",
      "vaguely beside each other — samar-samar bersebelahan (tidak akademis)",
      "inextricably linked — terkait erat dan tidak dapat dipisahkan satu sama lain"
    ],
    "correctAnswerIndex": 3,
    "explanation": "'Inextricably linked' (terkait erat dan tak terpisahkan) is an authentic academic collocation for codependent phenomena."
  }
];

export const CHINA_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "cn-1": {
    "id": "test-cn-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Tiongkok (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Tiongkok.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-cn-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilih kata depan (preposisi formal) yang paling tepat untuk melengkapi kalimat administrasi kampus berikut:",
        "targetSentence": "请____学校的最新规定提交奖学金申请材料。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "按照 (ànzhào) — sesuai dengan / menurut ketentuan",
          "尽管 (jǐnguǎn) — meskipun / walaupun",
          "甚至 (shènzhì) — bahkan / sampai-sampai",
          "几乎 (jīhū) — hampir / nyaris"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'按照' (ànzhào) berarti 'sesuai dengan / menurut ketentuan'. Digunakan dalam instruksi resmi administrasi universitas di Tiongkok."
      },
      {
        "id": "q-cn-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilih kata sifat yang tepat untuk melengkapi kalimat situasi darurat di laboratorium riset:",
        "targetSentence": "遇到突发紧急情况时，最重要的是保持____并听从导师指导。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "骄傲 (jiāo'ào) — sombong / bangga",
          "冷静 (lěngjìng) — tenang / berkepala dingin",
          "马虎 (mǎhu) — ceroboh / sembrono",
          "活泼 (huópo) — lincah / ceria"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'冷静' (lěngjìng) berarti tenang / berkepala dingin. Ketenangan adalah kompetensi kunci dalam SOP keselamatan laboratorium Tiongkok."
      },
      {
        "id": "q-cn-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilih pasangan kata kerja (kolokasi) yang tepat untuk mendampingi objek 'prestasi/hasil akademik (成绩)':",
        "targetSentence": "经过一年的刻苦钻研，他在学术研究中____了优异的成绩。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "发生 (fāshēng) — terjadi / berlangsung",
          "建立 (jiànlì) — membangun / mendirikan",
          "取得 (qǔdé) — meraih / memperoleh",
          "造成 (zàochéng) — menimbulkan / mengakibatkan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Dalam bahasa Mandarin formal, kolokasi baku untuk prestasi (成绩) adalah 取得成绩 (meraih prestasi)."
      },
      {
        "id": "q-cn-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilih pasangan konjungsi konsesif yang tepat untuk menghubungkan dua klausa berikut:",
        "targetSentence": "这篇学术论文____篇幅不长，____论点非常鲜明有力。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "不但...而且... (búdàn... érqiě...) — tidak hanya... tetapi juga...",
          "只要...就... (zhǐyào... jiù...) — asalkan... maka...",
          "因为...所以... (yīnwèi... suǒyǐ...) — karena... maka...",
          "虽然...但是... (suīrán... dànshì...) — meskipun... tetapi..."
        ],
        "correctAnswerIndex": 3,
        "explanation": "'虽然...但是...' digunakan untuk menyatakan pertentangan konsesif (meskipun... tetapi...)."
      },
      {
        "id": "q-cn-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Saat wawancara lisan beasiswa/kampus, dosen bertanya: '你为什么选择来我们大学攻读硕士学位？'. Jawaban terstruktur dan paling santun adalah:",
        "audioVoiceLang": "zh-CN",
        "options": [
          "在我看来，贵校在该领域拥有顶尖的科研师资和实验平台，这非常符合我的学术研究方向。 — Menurut saya, universitas Anda memiliki pengajar riset dan fasilitas lab terbaik yang sesuai dengan arah penelitian saya.",
          "我也不知道，是我的父母让我申请贵校的，我觉得随便读哪个学校都可以。 — Saya juga tidak tahu, orang tua saya yang menyuruh mendaftar, kuliah di mana saja sama saja.",
          "贵校在市中心，买东西很方便，有很多好吃的餐馆，所以我很喜欢。 — Kampus Anda di pusat kota, mudah berbelanja dan banyak restoran enak.",
          "因为其他大学的学费太贵了，只有贵校给的奖学金最多。 — Karena biaya kuliah kampus lain terlalu mahal dan hanya kampus Anda yang memberi beasiswa terbesar."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Jawaban formal akademik harus berorientasi pada reputasi ilmiah (科研师资), sarana riset (实验平台), dan kesesuaian minat studi (学术研究方向)."
      },
      {
        "id": "q-cn-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Jika dalam seminar dosen berbicara terlalu cepat dan Anda belum paham, ungkapan paling santun untuk memohon pengulangan adalah:",
        "audioVoiceLang": "zh-CN",
        "options": [
          "你说得太快了，我听不懂，你重新说一遍吧！ — Anda bicara terlalu cepat, saya tidak mengerti, ulangi sekali lagi!",
          "教授，不好意思，刚才那部分我没太听懂，能不能请您再详细阐述一下？ — Profesor, mohon maaf, bagian tadi saya kurang paham, bisakah Anda menjelaskannya lebih rinci?",
          "算了，我不想听了，你直接把PPT发给我看吧。 — Sudahlah, saya malas mendengar, kirimkan saja PPT-nya kepada saya.",
          "你说的这个理论根本就不对，我不赞成。 — Teori yang Anda katakan sama sekali salah, saya tidak setuju."
        ],
        "correctAnswerIndex": 1,
        "explanation": "Gunakan kata santun 不好意思 (maaf), sebut gelar 教授 (Profesor), dan gunakan verba formal 请您再详细阐述一下 (mohon berkenan menguraikan kembali)."
      },
      {
        "id": "q-cn-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pada silabus ujian tertulis tertulis: '本门课程期末考核形式为闭卷笔试'. Arti istilah '闭卷笔试' adalah:",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Ujian lisan wawancara tatap muka",
          "Ujian kelompok santai tanpa batas waktu",
          "Ujian tertulis tutup buku (tanpa boleh membuka catatan atau buku)",
          "Ujian praktik lapangan mandiri"
        ],
        "correctAnswerIndex": 2,
        "explanation": "闭卷笔试 (bìjuàn bǐshì) adalah ujian tertulis tutup buku resmi (lawan dari 开卷考试 - open book)."
      },
      {
        "id": "q-cn-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Konjungsi ragam tulis resmi (书面语) yang paling tepat untuk menambahkan poin pendukung dalam Proposal Rencana Studi (学习计划) adalah:",
        "audioVoiceLang": "zh-CN",
        "options": [
          "还有啊 (hái yǒu a) — satu lagi ya (ragam lisan santai)",
          "顺便说一下 (shùnbiàn shuō yíxià) — ngomong-ngomong (ragam percakapan)",
          "对啦 (duì le) — oh iya (ragam lisan)",
          "此外 (cǐwài) — selain itu / di samping itu (ragam tulis formal)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "'此外' (cǐwài: selain itu) adalah konjungsi书面语 standar; hindari bahasa lisan santai seperti '还有啊' atau '对啦'."
      },
      {
        "id": "q-cn-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilih verba kausatif berkonotasi negatif yang paling tepat untuk melengkapi kalimat analisis dampak:",
        "targetSentence": "实验过程中温度控制不当，往往会____化合物发生不可逆的化学分解。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "导致 (dǎozhì) — mengakibatkan / menyebabkan (dampak negatif)",
          "促进 (cùjìn) — mendorong / memajukan (dampak positif)",
          "有利于 (yǒulì yú) — bermanfaat bagi / menguntungkan",
          "取得 (qǔdé) — memperoleh / meraih (prestasi)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'导致' (dǎozhì) khusus digunakan untuk akibat negatif yang tidak diharapkan (dekomposisi senyawa yang merusak)."
      },
      {
        "id": "q-cn-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Partikel klasik '之' (zhī) dalam kalimat ilmiah '重中之重' (zhòng zhōng zhī zhòng) berfungsi sebagai:",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Kata ganti penunjuk orang ketiga jamak",
          "Penanda kepemilikan / relasi atributif formal (setara dengan kata '的')",
          "Kata seru penutup kalimat tanya",
          "Kata bilangan kelipatan sepuluh"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Partikel 文言文 '之' dalam bahasa tulis akademik modern berfungsi sebagai modifikator atributif formal yang setara dengan '的'."
      }
    ]
  },
  "cn-2": {
    "id": "test-cn-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Uji kemampuan menyusun esai motivasi, proposal rencana riset, etika akademik, dan korespondensi formal dengan dosen di Tiongkok.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-cn-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "科学研究是一条漫长而艰辛的道路，最忌讳的就是半途而废。 (Kēxué yánjiū shì yì tiáo màncháng ér jiānxīn de dàolù, zuì jìhuì de jiù shì bàntú'érfèi.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Penelitian ilmiah adalah jalan yang panjang dan penuh liku kepedihan, hal yang paling dipantangkan adalah berhenti di tengah jalan.",
        "keywords": [
          "penelitian",
          "ilmiah",
          "jalan",
          "panjang"
        ],
        "explanation": "Kalimat akademik pola 成语 (Chéngyǔ) Kunci 1: Filosofi Ketekunan & Perjuangan Hidup: '科学研究是一条漫长而艰辛的道路，最忌讳的就是半途而废。' diterjemahkan secara akurat menjadi 'Penelitian ilmiah adalah jalan yang panjang dan penuh liku kepedihan, hal yang paling dipantangkan adalah berhenti di tengah jalan.'."
      },
      {
        "id": "q-cn-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "面对未来可能出现的就业竞争压力，大学生应当未雨绸缪，及早规划职业道路。 (Miànduì wèilái kěnéng chūxiàn de jiùyè jìngzhēng yālì, dàxuéshēng yīngdāng wèiyǔchóumóu, jízǎo guīhuà zhíyè dàolù.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Menghadapi tekanan persaingan kerja yang mungkin muncul di masa depan, mahasiswa patut bersiap siaga sedia payung sebelum hujan, merencanakan jalur karier sedini mungkin.",
        "keywords": [
          "menghadapi",
          "tekanan",
          "persaingan",
          "kerja"
        ],
        "explanation": "Kalimat akademik pola 成语 (Chéngyǔ) Kunci 2: Strategi, Kebijaksanaan, & Kewaspadaan: '面对未来可能出现的就业竞争压力，大学生应当未雨绸缪，及早规划职业道路。' diterjemahkan secara akurat menjadi 'Menghadapi tekanan persaingan kerja yang mungkin muncul di masa depan, mahasiswa patut bersiap siaga sedia payung sebelum hujan, merencanakan jalur karier sedini mungkin.'."
      },
      {
        "id": "q-cn-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "该学者毕业于北京大学物理系，其主要研究方向为量子计算。 (Gāi xuézhě bìyè yú Běijīng Dàxué wùlǐ xì, qí zhǔyào yánjiū fāngxiàng wéi liàngzǐ jìsuàn.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Ilmuwan tersebut lulus dari Departemen Fisika Universitas Peking, arah penelitian utamanya adalah komputasi kuantum.",
        "keywords": [
          "ilmuwan",
          "tersebut",
          "lulus",
          "departemen"
        ],
        "explanation": "Kalimat akademik pola Partikel Klasik 文言虚词 dalam Mandarin Modern: 之, 其, 以, 于: '该学者毕业于北京大学物理系，其主要研究方向为量子计算。' diterjemahkan secara akurat menjadi 'Ilmuwan tersebut lulus dari Departemen Fisika Universitas Peking, arah penelitian utamanya adalah komputasi kuantum.'."
      },
      {
        "id": "q-cn-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "鉴于当前国际金融市场的严峻形势，各国央行势必采取更加谨慎的货币政策。 (Jiànyú dāngqián guójì jīnróng shìchǎng de yánjùn xíngshì, gè guó yāngháng shìbì cǎiqǔ gèngjiā jǐnshèn de huòbì zhèngcè.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Menimbang situasi genting pasar keuangan internasional saat ini, bank-bank sentral berbagai negara pasti tak terelakkan akan mengambil kebijakan moneter yang jauh lebih berhati-hati.",
        "keywords": [
          "menimbang",
          "situasi",
          "genting",
          "pasar"
        ],
        "explanation": "Kalimat akademik pola Penanda Wacana Deduktif Akademis: 鉴于 (jiànyú), 势必 (shìbì), 毋庸置疑: '鉴于当前国际金融市场的严峻形势，各国央行势必采取更加谨慎的货币政策。' diterjemahkan secara akurat menjadi 'Menimbang situasi genting pasar keuangan internasional saat ini, bank-bank sentral berbagai negara pasti tak terelakkan akan mengambil kebijakan moneter yang jauh lebih berhati-hati.'."
      },
      {
        "id": "q-cn-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "他今天在学术上所取得的非凡成就，很大程度上缘于他童年时期养成的阅读习惯。 (Tā jīntiān zài xuéshù shàng suǒ qǔdé de fēifán chéngjiù, hěn dà chéngdù shàng yuányú tā tóngnián shíqī yǎngchéng de yuèdú xíguàn.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Prestasi luar biasa yang diraihnya dalam dunia akademik hari ini, sebagian besar berakar dari kebiasaan membaca yang ditanamkan sejak masa kanak-kanaknya.",
        "keywords": [
          "prestasi",
          "luar",
          "biasa",
          "diraihnya"
        ],
        "explanation": "Kalimat akademik pola Pola Kausalitas Filosofis: 缘于 (yuányú), 归咎于 (guījiùyú), 取决于: '他今天在学术上所取得的非凡成就，很大程度上缘于他童年时期养成的阅读习惯。' diterjemahkan secara akurat menjadi 'Prestasi luar biasa yang diraihnya dalam dunia akademik hari ini, sebagian besar berakar dari kebiasaan membaca yang ditanamkan sejak masa kanak-kanaknya.'."
      },
      {
        "id": "q-cn-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "凡是在本学期取得HSK 6级高分的国际留学生，均有资格申请优秀学业一等奖学金。 (Fánshì zài běn xuéqī qǔdé HSK liù jí gāofēn de guójì liúxuéshēng, jūn yǒu zīgé shēnqǐng yōuxiù xuéyè yīděng jiǎngxuéjīn.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Semua mahasiswa internasional yang meraih skor tinggi HSK 6 pada semester ini, seluruhnya berhak mengajukan beasiswa prestasi akademik peringkat satu.",
        "keywords": [
          "semua",
          "mahasiswa",
          "internasional",
          "meraih"
        ],
        "explanation": "Kalimat akademik pola Sintaksis Bahasa Hukum & Regulasi: 凡是...均... / 一概 (yígài): '凡是在本学期取得HSK 6级高分的国际留学生，均有资格申请优秀学业一等奖学金。' diterjemahkan secara akurat menjadi 'Semua mahasiswa internasional yang meraih skor tinggi HSK 6 pada semester ini, seluruhnya berhak mengajukan beasiswa prestasi akademik peringkat satu.'."
      },
      {
        "id": "q-cn-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "故宫博物院展出的历代青铜器与古代书画藏品，其工艺精湛，令人叹为观止。 (Gùgōng Bówùyuàn zhǎnchū de lìdài qīngtóngqì yǔ gǔdài shūhuà cángpǐn, qí gōngyì jīngzhàn, lìng rén tànwéiguānzhǐ.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Koleksi bejana perunggu dan lukisan kaligrafi kuno yang dipamerkan di Museum Istana Kota Terlarang, keahlian kriyanya begitu luar biasa hingga membuat siapa pun yang memandangnya takjub berdecak kagum.",
        "keywords": [
          "koleksi",
          "bejana",
          "perunggu",
          "lukisan"
        ],
        "explanation": "Kalimat akademik pola Ekspresi Derajat Ekstrem Abstrak: 无可奈何, 叹为观止, 淋漓尽致: '故宫博物院展出的历代青铜器与古代书画藏品，其工艺精湛，令人叹为观止。' diterjemahkan secara akurat menjadi 'Koleksi bejana perunggu dan lukisan kaligrafi kuno yang dipamerkan di Museum Istana Kota Terlarang, keahlian kriyanya begitu luar biasa hingga membuat siapa pun yang memandangnya takjub berdecak kagum.'."
      },
      {
        "id": "q-cn-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "这次学术讲座使我明白了科研诚信的重要性。 (Zhè cì xuéshù jiǎngzuò shǐ wǒ míngbai le kēyán chéngxìn de zhòngyàoxìng.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Kuliah umum akademik kali ini membuat saya memahami pentingnya integritas riset ilmiah.",
        "keywords": [
          "kuliah",
          "umum",
          "akademik",
          "kali"
        ],
        "explanation": "Kalimat akademik pola Analisis Kesalahan Kalimat Kompleks 病句 (Bìngjù): Kerancuan Subjek & Logika: '这次学术讲座使我明白了科研诚信的重要性。' diterjemahkan secara akurat menjadi 'Kuliah umum akademik kali ini membuat saya memahami pentingnya integritas riset ilmiah.'."
      },
      {
        "id": "q-cn-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "人工智能技术的迅猛发展诚然极大地解放了生产力，然而其引发的伦理风险与法律滞后亦不容忽视。 (Réngōng zhìnéng jìshù de xùnměng fāzhǎn chéngrán jí dà de jiěfàng le shēngchǎnlì, rán'ér qí yǐnfā de lúnlǐ fēngxiǎn yǔ fǎlǜ zhìhòu yì bùróng hūshì.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Perkembangan pesat teknologi kecerdasan buatan memang benar secara masif membebaskan daya produktivitas, namun risiko etika dan ketertinggalan regulasi hukum yang dipicunya juga tidak boleh dipandang sebelah mata.",
        "keywords": [
          "perkembangan",
          "pesat",
          "teknologi",
          "kecerdasan"
        ],
        "explanation": "Kalimat akademik pola Retorika Debat Publik & Esai Kritis: 诚然...固然...然而: '人工智能技术的迅猛发展诚然极大地解放了生产力，然而其引发的伦理风险与法律滞后亦不容忽视。' diterjemahkan secara akurat menjadi 'Perkembangan pesat teknologi kecerdasan buatan memang benar secara masif membebaskan daya produktivitas, namun risiko etika dan ketertinggalan regulasi hukum yang dipicunya juga tidak boleh dipandang sebelah mata.'."
      },
      {
        "id": "q-cn-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "纵观人类历史长河，唯有秉持开放包容、兼收并蓄之胸襟，不同文明方能在互学互鉴中共同绽放异彩。 (Zòngguān rénlèi lìshǐ chánghé, wéiyǒu bǐngchí kāifàng bāoróng, jiānshōubìngxù zhī xiōngjīn, bùtóng wénmíng fāng néng zài hùxué hùjiàn zhōng gòngtóng zhànfàng yìcǎi.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Memandang panorama panjang sejarah peradaban manusia, hanya dengan memegang teguh keterbukaan inklusif dan kelapangan dada yang merangkul keberagaman, peradaban-peradaban yang berlainan baru dapat bersama-sama memancarkan kemilau kejayaan dalam semangat saling belajar dan bertukar kebajikan.",
        "keywords": [
          "memandang",
          "panorama",
          "panjang",
          "sejarah"
        ],
        "explanation": "Kalimat akademik pola Sintaksis Tingkat Mahir Fluktuasi Wacana & Evaluasi Komprehensif HSK 6: '纵观人类历史长河，唯有秉持开放包容、兼收并蓄之胸襟，不同文明方能在互学互鉴中共同绽放异彩。' diterjemahkan secara akurat menjadi 'Memandang panorama panjang sejarah peradaban manusia, hanya dengan memegang teguh keterbukaan inklusif dan kelapangan dada yang merangkul keberagaman, peradaban-peradaban yang berlainan baru dapat bersama-sama memancarkan kemilau kejayaan dalam semangat saling belajar dan bertukar kebajikan.'."
      }
    ]
  },
  "cn-3": {
    "id": "test-cn-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis & Struktur Kalimat Tiongkok (5 Soal Sambung Kata)",
    "description": "Uji keterampilan merangkai kata dan frasa acak menjadi kalimat instruksi perkuliahan, riset lab, dan administrasi beasiswa yang runtut.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-cn-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat instruksi penyerahan berkas beasiswa yang baku:",
        "scrambledWords": [
          "提交至",
          "留学生办公室",
          "请在截止日期前",
          "将申请奖学金的材料"
        ],
        "correctOrder": [
          "请在截止日期前",
          "将申请奖学金的材料",
          "提交至",
          "留学生办公室"
        ],
        "targetSentence": "请在截止日期前将申请奖学金的材料提交至留学生办公室。",
        "audioVoiceLang": "zh-CN",
        "explanation": "Urutan baku: Keterangan waktu (请在截止日期前) + Objek penanda disposisi (将申请奖学金的材料) + Kata kerja arah (提交至) + Tempat tujuan (留学生办公室)."
      },
      {
        "id": "q-cn-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat permohonan bimbingan skripsi formal:",
        "scrambledWords": [
          "深入的探讨",
          "进行",
          "就毕业论文的提纲",
          "我想与导师"
        ],
        "correctOrder": [
          "我想与导师",
          "就毕业论文的提纲",
          "进行",
          "深入的探讨"
        ],
        "targetSentence": "我想与导师就毕业论文的提纲进行深入的探讨。",
        "audioVoiceLang": "zh-CN",
        "explanation": "Urutan baku: Subjek (我想与导师) + Frasa preposisi topik (就毕业论文的提纲) + Kata kerja formal (进行) + Objek tindakan (深入的探讨)."
      },
      {
        "id": "q-cn-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat tata tertib keselamatan laboratorium:",
        "scrambledWords": [
          "专业防护装备",
          "必须佩戴",
          "所有科研人员",
          "进入重点实验室前"
        ],
        "correctOrder": [
          "进入重点实验室前",
          "所有科研人员",
          "必须佩戴",
          "专业防护装备"
        ],
        "targetSentence": "进入重点实验室前，所有科研人员必须佩戴专业防护装备。",
        "audioVoiceLang": "zh-CN",
        "explanation": "Urutan klausa waktu di depan (进入...前) diikuti Subjek (所有科研人员) + Modalitas (必须佩戴) + Objek (专业防护装备)."
      },
      {
        "id": "q-cn-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi pengumuman pengisian KRS perkuliahan:",
        "scrambledWords": [
          "尽快完成",
          "本学期的专业选课",
          "教务系统开放之后",
          "请同学们"
        ],
        "correctOrder": [
          "教务系统开放之后",
          "请同学们",
          "尽快完成",
          "本学期的专业选课"
        ],
        "targetSentence": "教务系统开放之后，请同学们尽快完成本学期的专业选课。",
        "audioVoiceLang": "zh-CN",
        "explanation": "Urutan waktu pembukaan sistem (教务系统开放之后) + Himbauan permohonan (请同学们尽快完成) + Objek KRS (本学期的专业选课)."
      },
      {
        "id": "q-cn-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi penjelasan fasilitas Beasiswa Pemerintah Tiongkok:",
        "scrambledWords": [
          "以及生活补贴",
          "全额学费减免",
          "为优秀留学生提供",
          "中国政府奖学金"
        ],
        "correctOrder": [
          "中国政府奖学金",
          "为优秀留学生提供",
          "全额学费减免",
          "以及生活补贴"
        ],
        "targetSentence": "中国政府奖学金为优秀留学生提供全额学费减免以及生活补贴。",
        "audioVoiceLang": "zh-CN",
        "explanation": "Subjek lembaga beasiswa (中国政府奖学金) + Frasa penerima manfaat (为优秀留学生提供) + Komponen beasiswa (全额学费减免以及生活补贴)."
      }
    ]
  },
  "cn-4": {
    "id": "test-cn-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Tiongkok (10 Soal Artikan)",
    "description": "Uji akurasi penerjemahan dan pemahaman istilah krusial kampus (KRS, transkrip, sidang tesis, visa pelajar, dan beasiswa).",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-cn-ar-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan bahasa Indonesia yang paling akurat untuk pasangan istilah kurikulum: '必修课 (Bìxiūkè)' dan '选修课 (Xuǎnxiūkè)':",
        "targetSentence": "本专业研究生必须按时修满三十学分的必修课与选修课。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Mata kuliah wajib dan mata kuliah pilihan",
          "Mata kuliah praktik dan mata kuliah teori",
          "Mata kuliah pagi dan mata kuliah sore",
          "Ujian masuk dan ujian kelulusan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "必修课 (bìxiūkè) = mata kuliah wajib; 选修课 (xuǎnxiūkè) = mata kuliah pilihan/elektif."
      },
      {
        "id": "q-cn-ar-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah akademik penting: '毕业论文答辩 (Bìyè lùnwén dábiàn)':",
        "targetSentence": "通过毕业论文答辩是获得硕士学位证书的前提条件。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Pencetakan jilid sampul buku tugas akhir",
          "Sidang ujian / pertahanan skripsi atau tesis kelulusan",
          "Pendaftaran wisuda akbar universitas",
          "Pembagian toga kelulusan mahasiswa"
        ],
        "correctAnswerIndex": 1,
        "explanation": "答辩 (dábiàn) dalam konteks perguruan tinggi bermakna sidang ujian pertahanan tesis/disertasi di hadapan dewan penguji."
      },
      {
        "id": "q-cn-ar-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat untuk istilah regulasi mahasiswa asing: '勤工俭学 (Qíngōng jiǎnxué)':",
        "targetSentence": "留学生在校期间参加勤工俭学，必须遵守国家相关出入境法规。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Kegiatan olahraga bersama mahasiswa lokal",
          "Program pertukaran pelajar antar negara",
          "Bekerja paruh waktu resmi sambil kuliah (work-study program)",
          "Membayar uang SPP secara mencicil"
        ],
        "correctAnswerIndex": 2,
        "explanation": "勤工俭学 adalah istilah resmi Tiongkok untuk program bekerja paruh waktu yang sah bagi mahasiswa sambil menempuh pendidikan."
      },
      {
        "id": "q-cn-ar-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah seminar proposal: '开题报告 (Kāití bàogào)':",
        "targetSentence": "研究生必须在入学第二学期结束前完成学位论文的开题报告。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Laporan keuangan kegiatan organisasi kemahasiswaan",
          "Kartu hasil studi semester pertama",
          "Surat izin sakit dari klinik kampus",
          "Laporan / seminar pembukaan proposal penelitian tugas akhir"
        ],
        "correctAnswerIndex": 3,
        "explanation": "开题报告 adalah tahapan seminar proposal penelitian di mana mahasiswa memaparkan latar belakang, metodologi, dan urgensi riset di hadapan dewan dosen."
      },
      {
        "id": "q-cn-ar-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan berkas pendaftaran: '成绩单公证件 (Chéngjīdān gōngzhèngjiàn)':",
        "targetSentence": "申请攻读博士学位者需提供本科及硕士阶段的成绩单公证件。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Salinan transkrip nilai akademik yang telah dilegalisasi oleh notaris/kedutaan",
          "Brosur promosi program studi universitas",
          "Kuitansi pembayaran biaya formulir pendaftaran",
          "Kartu tanda pengenal mahasiswa sementara"
        ],
        "correctAnswerIndex": 0,
        "explanation": "公证件 (gōngzhèngjiàn) berarti dokumen notaris / legalisir resmi dari instansi berwenang."
      },
      {
        "id": "q-cn-ar-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah surat beasiswa: '专家推荐信 (Zhuānjiā tuījiànxìn)':",
        "targetSentence": "申请中国政府奖学金需随附两名教授或副教授出具的专家推荐信。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Surat keterangan sehat dari rumah sakit",
          "Surat rekomendasi akademik dari pakar / profesor",
          "Surat pernyataan bebas catatan kepolisian",
          "Surat bukti kepemilikan rekening tabungan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "推荐信 = surat rekomendasi (letter of recommendation); 专家 = pakar/guru besar."
      },
      {
        "id": "q-cn-ar-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat untuk prosedur keimigrasian: '居留许可延期 (Jūliú xǔkě yánqī)':",
        "targetSentence": "护照上的学习类居留许可延期手续，必须在到期前三十日内办理。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Pembuatan paspor baru di kedutaan besar",
          "Pembelian tiket pesawat pulang pergi",
          "Perpanjangan izin tinggal (Residence Permit) pelajar asing di kepolisian (PSB)",
          "Penyewaan kamar asrama internasional"
        ],
        "correctAnswerIndex": 2,
        "explanation": "居留许可 = izin tinggal (Residence Permit); 延期 = perpanjangan masa berlaku."
      },
      {
        "id": "q-cn-ar-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah pengawasan karya ilmiah: '学术查重率 (Xuéshù cháchóng lǜ)':",
        "targetSentence": "提交毕业论文终稿前，全文学术查重率不得超过百分之十。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Jumlah cetakan buku di percetakan universitas",
          "Kecepatan pengetikan naskah dalam satu menit",
          "Bobot persentase nilai ujian akhir semester",
          "Tingkat persentase kemiripan / uji plagiarisme karya tulis ilmiah"
        ],
        "correctAnswerIndex": 3,
        "explanation": "查重率 (similarity index) adalah persentase kesamaan teks dengan basis data publikasi terdahulu untuk mencegah plagiarisme."
      },
      {
        "id": "q-cn-ar-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat dari istilah: '跨专业申请 (Kuà zhuānyè shēnqǐng)':",
        "targetSentence": "跨专业申请研究生的考生，通常需要参加入学专业课附加笔试。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Mendaftar program studi lintas jurusan / bidang ilmu yang berbeda dari jenjang sebelumnya",
          "Pindah kampus di tengah masa perkuliahan",
          "Mengambil dua gelar sarjana secara bersamaan",
          "Mengundurkan diri dari jurusan saat ini"
        ],
        "correctAnswerIndex": 0,
        "explanation": "跨 (melintasi) + 专业 (jurusan/bidang studi) = pendaftaran lintas disiplin ilmu."
      },
      {
        "id": "q-cn-ar-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat untuk status beasiswa: '全额奖学金 (Quán'é jiǎngxuéjīn)':",
        "targetSentence": "获得全额奖学金的学生享有学费免除、免费住宿及每月生活津贴。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Potongan biaya kuliah setengah semester",
          "Beasiswa penuh (mencakup biaya kuliah, asrama, dan tunjangan hidup bulanan)",
          "Pinjaman dana pendidikan tanpa bunga",
          "Hadiah uang tunai satu kali untuk juara lomba"
        ],
        "correctAnswerIndex": 1,
        "explanation": "全额 (jumlah penuh) + 奖学金 (beasiswa) = beasiswa penuh (Full Scholarship)."
      }
    ]
  },
  "cn-5": {
    "id": "test-cn-5",
    "title": "Bagian 5: Wacana Dokkai, Listening Audio, & Kasus Kampus Tiongkok (15 Soal Bebas)",
    "description": "Uji analitis komprehensif terhadap silabus ujian, aturan perpustakaan, audio pengumuman jurusan, etika lab, dan studi kasus nyata.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-cn-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca teks silabus singkat berikut:\n'本门专业课考核采用综合评定制：期末闭卷考试占总成绩50%，课堂讨论及文献汇报占30%，平时出勤与课后作业占20%。旷课超过三次者，取消期末考试资格。'\n\nApa akibat yang akan diterima mahasiswa jika membolos kuliah lebih dari tiga kali?",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Diberikan tugas tambahan membuat rangkuman buku",
          "Hanya dikenai pemotongan nilai sebesar lima persen",
          "Didiskualifikasi dan kehilangan hak mengikuti ujian akhir semester",
          "Diminta pindah ke kelas perkuliahan malam"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Teks menyatakan tegas: '旷课超过三次者，取消期末考试资格' (Membolos lebih dari 3 kali akan dibatalkan hak ujian akhirnya)."
      },
      {
        "id": "q-cn-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca teks aturan perpustakaan berikut:\n'读者借阅中文图书每次限借10本，借期30天；外文原版图书限借3本，借期15天。图书逾期未还者，系统将每日计收滞纳金，并冻结借书权限直至还清欠费。'\n\nBerapa batas waktu peminjaman buku asli berbahasa asing (外文原版图书)?",
        "audioVoiceLang": "zh-CN",
        "options": [
          "30 hari",
          "60 hari",
          "Satu semester",
          "15 hari"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Dalam teks tertulis: '外文原版图书限借3本，借期15天' (Buku berbahasa asing dibatasi 3 eksemplar dengan masa pinjam 15 hari)."
      },
      {
        "id": "q-cn-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca wacana pengumuman beasiswa berikut:\n'国家留学基金委（CSC）年度评审工作已启动。凡上学年出现不及格科目（挂科）或有严重违反校纪校规行为者，评审结果将判定为不合格，并自下学期起中止发放奖学金生活费。'\n\nKondisi apa yang menyebabkan pencairan uang saku beasiswa dihentikan?",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Terdapat mata kuliah yang tidak lulus (挂科) atau pelanggaran disiplin berat",
          "Terlambat mengumpulkan draf proposal skripsi selama dua hari",
          "Tidak menghadiri acara festival seni budaya kampus",
          "Meminjam buku perpustakaan melebihi kuota"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Teks menegaskan: 不及格科目（挂科）atau pelanggaran disiplin menyebabkan beasiswa diputus (中止发放)."
      },
      {
        "id": "q-cn-bb-4",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio pengumuman kantor jurusan berikut dan pilih simpulan informasinya:",
        "targetSentence": "各位留学生同学请注意：本周五下午两点在学术报告厅举行毕业论文开题动员大会，届时将详细讲解论文查重与答辩时间节点，请全体研二同学务必准时出席。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Ujian skripsi dimajukan ke hari Jumat pagi di laboratorium komputer",
          "Pertemuan sosialisasi seminar proposal dan jadwal ujian skripsi diadakan Jumat jam 2 siang untuk mahasiswa tingkat dua",
          "Perpustakaan pusat akan ditutup pada hari Jumat siang untuk renovasi",
          "Wisuda akbar mahasiswa asing akan diselenggarakan di aula utama"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Audio mengumumkan: 开题动员大会 (rapat pengarahan proposal) pada Jumat jam 14.00 di aula akademik untuk mahasiswa tahun ke-2."
      },
      {
        "id": "q-cn-bb-5",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio instruksi keselamatan lab berikut:",
        "targetSentence": "实验人员离开实验室前，必须逐一检查水阀、气阀、电源开关是否完全关闭，并确认门窗上锁。如遇突发漏气或电路短路，请立即按下紧急报警按钮并迅速撤离。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Larangan membawa tas ransel dan jaket tebal ke dalam laboratorium",
          "Jadwal pergantian shift asisten peneliti laboratorium",
          "Kewajiban memeriksa air, gas, listrik, dan mengunci pintu sebelum meninggalkan lab",
          "Petunjuk tata cara mencuci alat gelas kimia setelah percobaan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Audio menjelaskan protokol penutupan kran air, katup gas, listrik, serta evakuasi darurat laboratorium."
      },
      {
        "id": "q-cn-bb-6",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio percakapan konsultasi dengan staf administrasi kampus:",
        "targetSentence": "你的在读证明和中文成绩单已经打印盖章了，请带上学生证到留学生事务大厅三号窗口领取。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Pendaftaran kartu asuransi kesehatan ditolak karena berkas tidak lengkap",
          "Kartu tanda mahasiswa hilang dan harus membayar denda pembuatan ulang",
          "Jadwal wawancara beasiswa dipindahkan ke aula administrasi",
          "Surat keterangan mahasiswa aktif dan transkrip nilai resmi sudah siap diambil di loket 3"
        ],
        "correctAnswerIndex": 3,
        "explanation": "在读证明 = surat keterangan mahasiswa aktif; 盖章 = telah dicap resmi; 领取 = silakan diambil."
      },
      {
        "id": "q-cn-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Isilah bagian rumpang kalimat akademik berikut dengan konjungsi 书面语 yang tepat:\n'____传统宏观经济模型无法完全解释近期的金融市场波动，学术界____提出了多项修正假设。'",
        "audioVoiceLang": "zh-CN",
        "options": [
          "鉴于...因而... (Jiànyú... yīn'ér...) — mengingat... oleh karena itu...",
          "不管...但也... (bùguǎn... dàn yě...) — tidak peduli... namun juga...",
          "只要...才... (zhǐyào... cái...) — asalkan... barulah...",
          "虽然...所以... (suīrán... suǒyǐ...) — meskipun... jadi..."
        ],
        "correctAnswerIndex": 0,
        "explanation": "'鉴于' (mengingat / mempertimbangkan bahwa...) berkolokasi formal dengan '因而' (oleh karenanya) dalam teks karya ilmiah."
      },
      {
        "id": "q-cn-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilih kata bentukan istilah ilmiah yang tepat untuk melengkapi kalimat:\n'随着数字技术的普及，该研究项目旨在推动传统文献资源的数字化与____建设。'",
        "audioVoiceLang": "zh-CN",
        "options": [
          "规范性 (guīfànxìng) — sifat normatif / keteraturan",
          "规范化 (guīfànhuà) — standardisasi / pembakuan",
          "规范度 (guīfàndù) — tingkat keteraturan",
          "规范感 (guīfàngǎn) — kesan keteraturan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Sufiks '化' (-isasi) menyatakan proses perubahan menuju suatu standar (数字化 dan 规范化: standardisasi)."
      },
      {
        "id": "q-cn-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilih pasangan kata penanda topik perbandingan yang tepat:\n'____实验组的数据表现稳定，对照组的测量指标____出现了较大的离散偏差。'",
        "audioVoiceLang": "zh-CN",
        "options": [
          "虽然...就... (suīrán... jiù...) — meskipun... langsung...",
          "即使...才... (jíshǐ... cái...) — kalaupun... barulah...",
          "相较于...则... (Xiāng jiàoyú... zé...) — dibandingkan dengan... sedangkan...",
          "不但...反之... (búdàn... fǎnzhī...) — tidak hanya... sebaliknya..."
        ],
        "correctAnswerIndex": 2,
        "explanation": "'相较于 [A] ... [B] 则 ...' (Dibandingkan dengan A, maka B justru ...) adalah sintaksis komparatif standar laporan penelitian."
      },
      {
        "id": "q-cn-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Analisis kalimat rusak (病句辨析): Manakah kalimat di bawah ini yang SALAH secara tata bahasa struktur 把 (bǎ)?",
        "options": [
          "他没有把那个实验结果记录在笔记本上。 — Dia tidak mencatat hasil eksperimen itu di buku catatan.",
          "请把你的学术论文按时提交给导师。 — Harap serahkan makalah akademik Anda tepat waktu kepada dosen pembimbing.",
          "研究人员把样本放进了超低温冰箱。 — Peneliti memasukkan sampel ke dalam lemari pendingin suhu ultra-rendah.",
          "他把那个实验结果没有记录在笔记本上。 — Dia hasil eksperimen itu tidak mencatat di buku catatan (negasi salah posisi)."
        ],
        "correctAnswerIndex": 3,
        "explanation": "Dalam kalimat 把 (bǎ), kata negasi (没有 / 不) wajib diletakkan SEBELUM kata 把 ('他没有把那个实验结果记录在笔记本上'), bukan sesudah objek 把."
      },
      {
        "id": "q-cn-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Analisis kalimat rusak (病句辨析): Manakah kalimat berikut yang memiliki susunan sintaksis paling SEMPURNA dan bebas cacat gramatika?",
        "options": [
          "导师的悉心指导，使我的学术论文质量得到了显著提高。 — Bimbingan cermat dosen pembimbing membuat kualitas tesis akademik saya meningkat pesat (subjek utuh).",
          "经过导师的悉心指导，使我的学术论文质量得到了显著提高。 — Melalui bimbingan cermat dosen, membuat kualitas tesis saya meningkat (kehilangan subjek).",
          "在导师的悉心指导下，使我成功发表了高水平学术论文。 — Di bawah bimbingan cermat dosen, membuat saya berhasil menerbitkan makalah (kehilangan subjek).",
          "通过导师的悉心指导，从而让我掌握了正确的实验方法。 — Lewat bimbingan dosen, sehingga membuat saya menguasai metode eksperimen (kehilangan subjek)."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat '导师的悉心指导，使我的学术论文质量得到了显著提高。' adalah kalimat baku yang memiliki subjek jelas (导师的悉心指导), sedangkan opsi lainnya kehilangan subjek akibat menggabungkan preposisi (经过/在/通过) dengan 使/让."
      },
      {
        "id": "q-cn-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam wawancara sidang skripsi, penguji mengajukan pertanyaan teoretis yang sama sekali belum pernah Anda pelajari. Sikap akademis paling etis adalah:",
        "options": [
          "Mengarang teori palsu secara percaya diri agar tidak dianggap bodoh oleh penguji.",
          "Jujur mengakui bahwa topik tersebut belum tercakup dalam batasan riset saat ini, dan berterima kasih atas masukan berharga penguji untuk riset lanjutan.",
          "Menyalahkan dosen pembimbing karena tidak mengajarkan materi tersebut saat bimbingan.",
          "Diam seribu bahasa dan menatap lantai selama lima menit."
        ],
        "correctAnswerIndex": 1,
        "explanation": "Kejujuran intelektual dan sikap terbuka terhadap batasan riset (局限性) adalah etika ilmiah universal yang sangat dihormati."
      },
      {
        "id": "q-cn-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Jika seorang dosen memiliki gelar fungsional Profesor (教授) sekaligus menjabat sebagai Dekan Fakultas (院长), cara menyapa lisan yang paling lazim dan santun adalah:",
        "options": [
          "老王 (Lǎo Wáng) — Si Tua Wang (sapaan akrab sebaya, tidak sopan untuk dosen)",
          "王老师的朋友 (Wáng lǎoshī de péngyǒu) — Temannya Guru Wang",
          "王院长 (Wáng Yuànzhǎng) / 王教授 (Wáng Jiàoshòu) — Dekan Wang / Profesor Wang (sapaan resmi akademik)",
          "大叔 (Dàshū) — Paman (sapaan jalanan informal)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Gunakan nama marga + jabatan administratif (王院长) atau jabatan fungsional akademik (王教授). Jangan gunakan sebutan informal."
      },
      {
        "id": "q-cn-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Idiom Chengyu (成语) '严谨治学' (Yánjǐn zhìxué) paling tepat menggambarkan profil seorang akademisi yang:",
        "options": [
          "Suka mengkritik orang lain tanpa memberikan solusi konkret",
          "Belajar hanya saat menjelang malam sebelum ujian semester",
          "Memiliki banyak gelar tetapi jarang masuk laboratorium",
          "Menjalankan penelitian ilmiah dengan dedikasi tinggi, cermat, teliti, dan tanpa kompromi terhadap kesalahan data"
        ],
        "correctAnswerIndex": 3,
        "explanation": "严谨治学 adalah semboyan integritas universitas top Tiongkok yang berarti ketat, cermat, dan berdisiplin tinggi dalam menuntut ilmu."
      },
      {
        "id": "q-cn-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Setelah tiba di Tiongkok dengan Visa Pelajar X1, dalam berapa harikah mahasiswa asing WAJIB mengurus konversi ke Izin Tinggal Studi (学习类居留许可)?",
        "options": [
          "Dalam waktu 30 hari sejak tanggal stempel kedatangan di imigrasi Tiongkok",
          "Boleh kapan saja sebelum semester pertama berakhir",
          "Dalam waktu 6 bulan setelah orientasi kampus",
          "Tidak perlu diurus jika sudah memegang paspor resmi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Undang-undang keimigrasian Tiongkok mewajibkan pemegang visa X1 mendaftarkan Izin Tinggal (居留许可) ke Biro Keamanan Publik (出入境管理局) dalam kurun waktu 30 hari."
      }
    ]
  },
  "cn-full": {
    "id": "test-cn-full",
    "title": "Ujian Simulasi Lengkap Target Capaian Kuliah Tiongkok (50 Soal Lengkap)",
    "description": "Evaluasi menyeluruh 50 soal berstandar resmi: 10 Soal PG, 10 Soal Essai, 5 Soal Sambung Kata, 10 Soal Artikan, dan 15 Soal Analisis Bebas.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-cn-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilih kata depan (preposisi formal) yang paling tepat untuk melengkapi kalimat administrasi kampus berikut:",
        "targetSentence": "请____学校的最新规定提交奖学金申请材料。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "按照 (ànzhào) — sesuai dengan / menurut ketentuan",
          "尽管 (jǐnguǎn) — meskipun / walaupun",
          "甚至 (shènzhì) — bahkan / sampai-sampai",
          "几乎 (jīhū) — hampir / nyaris"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'按照' (ànzhào) berarti 'sesuai dengan / menurut ketentuan'. Digunakan dalam instruksi resmi administrasi universitas di Tiongkok."
      },
      {
        "id": "q-cn-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilih kata sifat yang tepat untuk melengkapi kalimat situasi darurat di laboratorium riset:",
        "targetSentence": "遇到突发紧急情况时，最重要的是保持____并听从导师指导。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "骄傲 (jiāo'ào) — sombong / bangga",
          "冷静 (lěngjìng) — tenang / berkepala dingin",
          "马虎 (mǎhu) — ceroboh / sembrono",
          "活泼 (huópo) — lincah / ceria"
        ],
        "correctAnswerIndex": 1,
        "explanation": "'冷静' (lěngjìng) berarti tenang / berkepala dingin. Ketenangan adalah kompetensi kunci dalam SOP keselamatan laboratorium Tiongkok."
      },
      {
        "id": "q-cn-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilih pasangan kata kerja (kolokasi) yang tepat untuk mendampingi objek 'prestasi/hasil akademik (成绩)':",
        "targetSentence": "经过一年的刻苦钻研，他在学术研究中____了优异的成绩。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "发生 (fāshēng) — terjadi / berlangsung",
          "建立 (jiànlì) — membangun / mendirikan",
          "取得 (qǔdé) — meraih / memperoleh",
          "造成 (zàochéng) — menimbulkan / mengakibatkan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Dalam bahasa Mandarin formal, kolokasi baku untuk prestasi (成绩) adalah 取得成绩 (meraih prestasi)."
      },
      {
        "id": "q-cn-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilih pasangan konjungsi konsesif yang tepat untuk menghubungkan dua klausa berikut:",
        "targetSentence": "这篇学术论文____篇幅不长，____论点非常鲜明有力。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "不但...而且... (búdàn... érqiě...) — tidak hanya... tetapi juga...",
          "只要...就... (zhǐyào... jiù...) — asalkan... maka...",
          "因为...所以... (yīnwèi... suǒyǐ...) — karena... maka...",
          "虽然...但是... (suīrán... dànshì...) — meskipun... tetapi..."
        ],
        "correctAnswerIndex": 3,
        "explanation": "'虽然...但是...' digunakan untuk menyatakan pertentangan konsesif (meskipun... tetapi...)."
      },
      {
        "id": "q-cn-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Saat wawancara lisan beasiswa/kampus, dosen bertanya: '你为什么选择来我们大学攻读硕士学位？'. Jawaban terstruktur dan paling santun adalah:",
        "audioVoiceLang": "zh-CN",
        "options": [
          "在我看来，贵校在该领域拥有顶尖的科研师资和实验平台，这非常符合我的学术研究方向。 — Menurut saya, universitas Anda memiliki pengajar riset dan fasilitas lab terbaik yang sesuai dengan arah penelitian saya.",
          "我也不知道，是我的父母让我申请贵校的，我觉得随便读哪个学校都可以。 — Saya juga tidak tahu, orang tua saya yang menyuruh mendaftar, kuliah di mana saja sama saja.",
          "贵校在市中心，买东西很方便，有很多好吃的餐馆，所以我很喜欢。 — Kampus Anda di pusat kota, mudah berbelanja dan banyak restoran enak.",
          "因为其他大学的学费太贵了，只有贵校给的奖学金最多。 — Karena biaya kuliah kampus lain terlalu mahal dan hanya kampus Anda yang memberi beasiswa terbesar."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Jawaban formal akademik harus berorientasi pada reputasi ilmiah (科研师资), sarana riset (实验平台), dan kesesuaian minat studi (学术研究方向)."
      },
      {
        "id": "q-cn-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Jika dalam seminar dosen berbicara terlalu cepat dan Anda belum paham, ungkapan paling santun untuk memohon pengulangan adalah:",
        "audioVoiceLang": "zh-CN",
        "options": [
          "你说得太快了，我听不懂，你重新说一遍吧！ — Anda bicara terlalu cepat, saya tidak mengerti, ulangi sekali lagi!",
          "教授，不好意思，刚才那部分我没太听懂，能不能请您再详细阐述一下？ — Profesor, mohon maaf, bagian tadi saya kurang paham, bisakah Anda menjelaskannya lebih rinci?",
          "算了，我不想听了，你直接把PPT发给我看吧。 — Sudahlah, saya malas mendengar, kirimkan saja PPT-nya kepada saya.",
          "你说的这个理论根本就不对，我不赞成。 — Teori yang Anda katakan sama sekali salah, saya tidak setuju."
        ],
        "correctAnswerIndex": 1,
        "explanation": "Gunakan kata santun 不好意思 (maaf), sebut gelar 教授 (Profesor), dan gunakan verba formal 请您再详细阐述一下 (mohon berkenan menguraikan kembali)."
      },
      {
        "id": "q-cn-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pada silabus ujian tertulis tertulis: '本门课程期末考核形式为闭卷笔试'. Arti istilah '闭卷笔试' adalah:",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Ujian lisan wawancara tatap muka",
          "Ujian kelompok santai tanpa batas waktu",
          "Ujian tertulis tutup buku (tanpa boleh membuka catatan atau buku)",
          "Ujian praktik lapangan mandiri"
        ],
        "correctAnswerIndex": 2,
        "explanation": "闭卷笔试 (bìjuàn bǐshì) adalah ujian tertulis tutup buku resmi (lawan dari 开卷考试 - open book)."
      },
      {
        "id": "q-cn-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Konjungsi ragam tulis resmi (书面语) yang paling tepat untuk menambahkan poin pendukung dalam Proposal Rencana Studi (学习计划) adalah:",
        "audioVoiceLang": "zh-CN",
        "options": [
          "还有啊 (hái yǒu a) — satu lagi ya (ragam lisan santai)",
          "顺便说一下 (shùnbiàn shuō yíxià) — ngomong-ngomong (ragam percakapan)",
          "对啦 (duì le) — oh iya (ragam lisan)",
          "此外 (cǐwài) — selain itu / di samping itu (ragam tulis formal)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "'此外' (cǐwài: selain itu) adalah konjungsi书面语 standar; hindari bahasa lisan santai seperti '还有啊' atau '对啦'."
      },
      {
        "id": "q-cn-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilih verba kausatif berkonotasi negatif yang paling tepat untuk melengkapi kalimat analisis dampak:",
        "targetSentence": "实验过程中温度控制不当，往往会____化合物发生不可逆的化学分解。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "导致 (dǎozhì) — mengakibatkan / menyebabkan (dampak negatif)",
          "促进 (cùjìn) — mendorong / memajukan (dampak positif)",
          "有利于 (yǒulì yú) — bermanfaat bagi / menguntungkan",
          "取得 (qǔdé) — memperoleh / meraih (prestasi)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'导致' (dǎozhì) khusus digunakan untuk akibat negatif yang tidak diharapkan (dekomposisi senyawa yang merusak)."
      },
      {
        "id": "q-cn-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Partikel klasik '之' (zhī) dalam kalimat ilmiah '重中之重' (zhòng zhōng zhī zhòng) berfungsi sebagai:",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Kata ganti penunjuk orang ketiga jamak",
          "Penanda kepemilikan / relasi atributif formal (setara dengan kata '的')",
          "Kata seru penutup kalimat tanya",
          "Kata bilangan kelipatan sepuluh"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Partikel 文言文 '之' dalam bahasa tulis akademik modern berfungsi sebagai modifikator atributif formal yang setara dengan '的'."
      },
      {
        "id": "q-cn-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "科学研究是一条漫长而艰辛的道路，最忌讳的就是半途而废。 (Kēxué yánjiū shì yì tiáo màncháng ér jiānxīn de dàolù, zuì jìhuì de jiù shì bàntú'érfèi.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Penelitian ilmiah adalah jalan yang panjang dan penuh liku kepedihan, hal yang paling dipantangkan adalah berhenti di tengah jalan.",
        "keywords": [
          "penelitian",
          "ilmiah",
          "jalan",
          "panjang"
        ],
        "explanation": "Kalimat akademik pola 成语 (Chéngyǔ) Kunci 1: Filosofi Ketekunan & Perjuangan Hidup: '科学研究是一条漫长而艰辛的道路，最忌讳的就是半途而废。' diterjemahkan secara akurat menjadi 'Penelitian ilmiah adalah jalan yang panjang dan penuh liku kepedihan, hal yang paling dipantangkan adalah berhenti di tengah jalan.'."
      },
      {
        "id": "q-cn-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "面对未来可能出现的就业竞争压力，大学生应当未雨绸缪，及早规划职业道路。 (Miànduì wèilái kěnéng chūxiàn de jiùyè jìngzhēng yālì, dàxuéshēng yīngdāng wèiyǔchóumóu, jízǎo guīhuà zhíyè dàolù.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Menghadapi tekanan persaingan kerja yang mungkin muncul di masa depan, mahasiswa patut bersiap siaga sedia payung sebelum hujan, merencanakan jalur karier sedini mungkin.",
        "keywords": [
          "menghadapi",
          "tekanan",
          "persaingan",
          "kerja"
        ],
        "explanation": "Kalimat akademik pola 成语 (Chéngyǔ) Kunci 2: Strategi, Kebijaksanaan, & Kewaspadaan: '面对未来可能出现的就业竞争压力，大学生应当未雨绸缪，及早规划职业道路。' diterjemahkan secara akurat menjadi 'Menghadapi tekanan persaingan kerja yang mungkin muncul di masa depan, mahasiswa patut bersiap siaga sedia payung sebelum hujan, merencanakan jalur karier sedini mungkin.'."
      },
      {
        "id": "q-cn-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "该学者毕业于北京大学物理系，其主要研究方向为量子计算。 (Gāi xuézhě bìyè yú Běijīng Dàxué wùlǐ xì, qí zhǔyào yánjiū fāngxiàng wéi liàngzǐ jìsuàn.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Ilmuwan tersebut lulus dari Departemen Fisika Universitas Peking, arah penelitian utamanya adalah komputasi kuantum.",
        "keywords": [
          "ilmuwan",
          "tersebut",
          "lulus",
          "departemen"
        ],
        "explanation": "Kalimat akademik pola Partikel Klasik 文言虚词 dalam Mandarin Modern: 之, 其, 以, 于: '该学者毕业于北京大学物理系，其主要研究方向为量子计算。' diterjemahkan secara akurat menjadi 'Ilmuwan tersebut lulus dari Departemen Fisika Universitas Peking, arah penelitian utamanya adalah komputasi kuantum.'."
      },
      {
        "id": "q-cn-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "鉴于当前国际金融市场的严峻形势，各国央行势必采取更加谨慎的货币政策。 (Jiànyú dāngqián guójì jīnróng shìchǎng de yánjùn xíngshì, gè guó yāngháng shìbì cǎiqǔ gèngjiā jǐnshèn de huòbì zhèngcè.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Menimbang situasi genting pasar keuangan internasional saat ini, bank-bank sentral berbagai negara pasti tak terelakkan akan mengambil kebijakan moneter yang jauh lebih berhati-hati.",
        "keywords": [
          "menimbang",
          "situasi",
          "genting",
          "pasar"
        ],
        "explanation": "Kalimat akademik pola Penanda Wacana Deduktif Akademis: 鉴于 (jiànyú), 势必 (shìbì), 毋庸置疑: '鉴于当前国际金融市场的严峻形势，各国央行势必采取更加谨慎的货币政策。' diterjemahkan secara akurat menjadi 'Menimbang situasi genting pasar keuangan internasional saat ini, bank-bank sentral berbagai negara pasti tak terelakkan akan mengambil kebijakan moneter yang jauh lebih berhati-hati.'."
      },
      {
        "id": "q-cn-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "他今天在学术上所取得的非凡成就，很大程度上缘于他童年时期养成的阅读习惯。 (Tā jīntiān zài xuéshù shàng suǒ qǔdé de fēifán chéngjiù, hěn dà chéngdù shàng yuányú tā tóngnián shíqī yǎngchéng de yuèdú xíguàn.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Prestasi luar biasa yang diraihnya dalam dunia akademik hari ini, sebagian besar berakar dari kebiasaan membaca yang ditanamkan sejak masa kanak-kanaknya.",
        "keywords": [
          "prestasi",
          "luar",
          "biasa",
          "diraihnya"
        ],
        "explanation": "Kalimat akademik pola Pola Kausalitas Filosofis: 缘于 (yuányú), 归咎于 (guījiùyú), 取决于: '他今天在学术上所取得的非凡成就，很大程度上缘于他童年时期养成的阅读习惯。' diterjemahkan secara akurat menjadi 'Prestasi luar biasa yang diraihnya dalam dunia akademik hari ini, sebagian besar berakar dari kebiasaan membaca yang ditanamkan sejak masa kanak-kanaknya.'."
      },
      {
        "id": "q-cn-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "凡是在本学期取得HSK 6级高分的国际留学生，均有资格申请优秀学业一等奖学金。 (Fánshì zài běn xuéqī qǔdé HSK liù jí gāofēn de guójì liúxuéshēng, jūn yǒu zīgé shēnqǐng yōuxiù xuéyè yīděng jiǎngxuéjīn.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Semua mahasiswa internasional yang meraih skor tinggi HSK 6 pada semester ini, seluruhnya berhak mengajukan beasiswa prestasi akademik peringkat satu.",
        "keywords": [
          "semua",
          "mahasiswa",
          "internasional",
          "meraih"
        ],
        "explanation": "Kalimat akademik pola Sintaksis Bahasa Hukum & Regulasi: 凡是...均... / 一概 (yígài): '凡是在本学期取得HSK 6级高分的国际留学生，均有资格申请优秀学业一等奖学金。' diterjemahkan secara akurat menjadi 'Semua mahasiswa internasional yang meraih skor tinggi HSK 6 pada semester ini, seluruhnya berhak mengajukan beasiswa prestasi akademik peringkat satu.'."
      },
      {
        "id": "q-cn-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "故宫博物院展出的历代青铜器与古代书画藏品，其工艺精湛，令人叹为观止。 (Gùgōng Bówùyuàn zhǎnchū de lìdài qīngtóngqì yǔ gǔdài shūhuà cángpǐn, qí gōngyì jīngzhàn, lìng rén tànwéiguānzhǐ.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Koleksi bejana perunggu dan lukisan kaligrafi kuno yang dipamerkan di Museum Istana Kota Terlarang, keahlian kriyanya begitu luar biasa hingga membuat siapa pun yang memandangnya takjub berdecak kagum.",
        "keywords": [
          "koleksi",
          "bejana",
          "perunggu",
          "lukisan"
        ],
        "explanation": "Kalimat akademik pola Ekspresi Derajat Ekstrem Abstrak: 无可奈何, 叹为观止, 淋漓尽致: '故宫博物院展出的历代青铜器与古代书画藏品，其工艺精湛，令人叹为观止。' diterjemahkan secara akurat menjadi 'Koleksi bejana perunggu dan lukisan kaligrafi kuno yang dipamerkan di Museum Istana Kota Terlarang, keahlian kriyanya begitu luar biasa hingga membuat siapa pun yang memandangnya takjub berdecak kagum.'."
      },
      {
        "id": "q-cn-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "这次学术讲座使我明白了科研诚信的重要性。 (Zhè cì xuéshù jiǎngzuò shǐ wǒ míngbai le kēyán chéngxìn de zhòngyàoxìng.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Kuliah umum akademik kali ini membuat saya memahami pentingnya integritas riset ilmiah.",
        "keywords": [
          "kuliah",
          "umum",
          "akademik",
          "kali"
        ],
        "explanation": "Kalimat akademik pola Analisis Kesalahan Kalimat Kompleks 病句 (Bìngjù): Kerancuan Subjek & Logika: '这次学术讲座使我明白了科研诚信的重要性。' diterjemahkan secara akurat menjadi 'Kuliah umum akademik kali ini membuat saya memahami pentingnya integritas riset ilmiah.'."
      },
      {
        "id": "q-cn-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "人工智能技术的迅猛发展诚然极大地解放了生产力，然而其引发的伦理风险与法律滞后亦不容忽视。 (Réngōng zhìnéng jìshù de xùnměng fāzhǎn chéngrán jí dà de jiěfàng le shēngchǎnlì, rán'ér qí yǐnfā de lúnlǐ fēngxiǎn yǔ fǎlǜ zhìhòu yì bùróng hūshì.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Perkembangan pesat teknologi kecerdasan buatan memang benar secara masif membebaskan daya produktivitas, namun risiko etika dan ketertinggalan regulasi hukum yang dipicunya juga tidak boleh dipandang sebelah mata.",
        "keywords": [
          "perkembangan",
          "pesat",
          "teknologi",
          "kecerdasan"
        ],
        "explanation": "Kalimat akademik pola Retorika Debat Publik & Esai Kritis: 诚然...固然...然而: '人工智能技术的迅猛发展诚然极大地解放了生产力，然而其引发的伦理风险与法律滞后亦不容忽视。' diterjemahkan secara akurat menjadi 'Perkembangan pesat teknologi kecerdasan buatan memang benar secara masif membebaskan daya produktivitas, namun risiko etika dan ketertinggalan regulasi hukum yang dipicunya juga tidak boleh dipandang sebelah mata.'."
      },
      {
        "id": "q-cn-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "纵观人类历史长河，唯有秉持开放包容、兼收并蓄之胸襟，不同文明方能在互学互鉴中共同绽放异彩。 (Zòngguān rénlèi lìshǐ chánghé, wéiyǒu bǐngchí kāifàng bāoróng, jiānshōubìngxù zhī xiōngjīn, bùtóng wénmíng fāng néng zài hùxué hùjiàn zhōng gòngtóng zhànfàng yìcǎi.)",
        "audioVoiceLang": "zh-CN",
        "sampleAnswer": "Memandang panorama panjang sejarah peradaban manusia, hanya dengan memegang teguh keterbukaan inklusif dan kelapangan dada yang merangkul keberagaman, peradaban-peradaban yang berlainan baru dapat bersama-sama memancarkan kemilau kejayaan dalam semangat saling belajar dan bertukar kebajikan.",
        "keywords": [
          "memandang",
          "panorama",
          "panjang",
          "sejarah"
        ],
        "explanation": "Kalimat akademik pola Sintaksis Tingkat Mahir Fluktuasi Wacana & Evaluasi Komprehensif HSK 6: '纵观人类历史长河，唯有秉持开放包容、兼收并蓄之胸襟，不同文明方能在互学互鉴中共同绽放异彩。' diterjemahkan secara akurat menjadi 'Memandang panorama panjang sejarah peradaban manusia, hanya dengan memegang teguh keterbukaan inklusif dan kelapangan dada yang merangkul keberagaman, peradaban-peradaban yang berlainan baru dapat bersama-sama memancarkan kemilau kejayaan dalam semangat saling belajar dan bertukar kebajikan.'."
      },
      {
        "id": "q-cn-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat instruksi penyerahan berkas beasiswa yang baku:",
        "scrambledWords": [
          "提交至",
          "留学生办公室",
          "请在截止日期前",
          "将申请奖学金的材料"
        ],
        "correctOrder": [
          "请在截止日期前",
          "将申请奖学金的材料",
          "提交至",
          "留学生办公室"
        ],
        "targetSentence": "请在截止日期前将申请奖学金的材料提交至留学生办公室。",
        "audioVoiceLang": "zh-CN",
        "explanation": "Urutan baku: Keterangan waktu (请在截止日期前) + Objek penanda disposisi (将申请奖学金的材料) + Kata kerja arah (提交至) + Tempat tujuan (留学生办公室)."
      },
      {
        "id": "q-cn-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat permohonan bimbingan skripsi formal:",
        "scrambledWords": [
          "深入的探讨",
          "进行",
          "就毕业论文的提纲",
          "我想与导师"
        ],
        "correctOrder": [
          "我想与导师",
          "就毕业论文的提纲",
          "进行",
          "深入的探讨"
        ],
        "targetSentence": "我想与导师就毕业论文的提纲进行深入的探讨。",
        "audioVoiceLang": "zh-CN",
        "explanation": "Urutan baku: Subjek (我想与导师) + Frasa preposisi topik (就毕业论文的提纲) + Kata kerja formal (进行) + Objek tindakan (深入的探讨)."
      },
      {
        "id": "q-cn-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat tata tertib keselamatan laboratorium:",
        "scrambledWords": [
          "专业防护装备",
          "必须佩戴",
          "所有科研人员",
          "进入重点实验室前"
        ],
        "correctOrder": [
          "进入重点实验室前",
          "所有科研人员",
          "必须佩戴",
          "专业防护装备"
        ],
        "targetSentence": "进入重点实验室前，所有科研人员必须佩戴专业防护装备。",
        "audioVoiceLang": "zh-CN",
        "explanation": "Urutan klausa waktu di depan (进入...前) diikuti Subjek (所有科研人员) + Modalitas (必须佩戴) + Objek (专业防护装备)."
      },
      {
        "id": "q-cn-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi pengumuman pengisian KRS perkuliahan:",
        "scrambledWords": [
          "尽快完成",
          "本学期的专业选课",
          "教务系统开放之后",
          "请同学们"
        ],
        "correctOrder": [
          "教务系统开放之后",
          "请同学们",
          "尽快完成",
          "本学期的专业选课"
        ],
        "targetSentence": "教务系统开放之后，请同学们尽快完成本学期的专业选课。",
        "audioVoiceLang": "zh-CN",
        "explanation": "Urutan waktu pembukaan sistem (教务系统开放之后) + Himbauan permohonan (请同学们尽快完成) + Objek KRS (本学期的专业选课)."
      },
      {
        "id": "q-cn-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi penjelasan fasilitas Beasiswa Pemerintah Tiongkok:",
        "scrambledWords": [
          "以及生活补贴",
          "全额学费减免",
          "为优秀留学生提供",
          "中国政府奖学金"
        ],
        "correctOrder": [
          "中国政府奖学金",
          "为优秀留学生提供",
          "全额学费减免",
          "以及生活补贴"
        ],
        "targetSentence": "中国政府奖学金为优秀留学生提供全额学费减免以及生活补贴。",
        "audioVoiceLang": "zh-CN",
        "explanation": "Subjek lembaga beasiswa (中国政府奖学金) + Frasa penerima manfaat (为优秀留学生提供) + Komponen beasiswa (全额学费减免以及生活补贴)."
      },
      {
        "id": "q-cn-ar-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan bahasa Indonesia yang paling akurat untuk pasangan istilah kurikulum: '必修课 (Bìxiūkè)' dan '选修课 (Xuǎnxiūkè)':",
        "targetSentence": "本专业研究生必须按时修满三十学分的必修课与选修课。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Mata kuliah wajib dan mata kuliah pilihan",
          "Mata kuliah praktik dan mata kuliah teori",
          "Mata kuliah pagi dan mata kuliah sore",
          "Ujian masuk dan ujian kelulusan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "必修课 (bìxiūkè) = mata kuliah wajib; 选修课 (xuǎnxiūkè) = mata kuliah pilihan/elektif."
      },
      {
        "id": "q-cn-ar-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah akademik penting: '毕业论文答辩 (Bìyè lùnwén dábiàn)':",
        "targetSentence": "通过毕业论文答辩是获得硕士学位证书的前提条件。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Pencetakan jilid sampul buku tugas akhir",
          "Sidang ujian / pertahanan skripsi atau tesis kelulusan",
          "Pendaftaran wisuda akbar universitas",
          "Pembagian toga kelulusan mahasiswa"
        ],
        "correctAnswerIndex": 1,
        "explanation": "答辩 (dábiàn) dalam konteks perguruan tinggi bermakna sidang ujian pertahanan tesis/disertasi di hadapan dewan penguji."
      },
      {
        "id": "q-cn-ar-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat untuk istilah regulasi mahasiswa asing: '勤工俭学 (Qíngōng jiǎnxué)':",
        "targetSentence": "留学生在校期间参加勤工俭学，必须遵守国家相关出入境法规。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Kegiatan olahraga bersama mahasiswa lokal",
          "Program pertukaran pelajar antar negara",
          "Bekerja paruh waktu resmi sambil kuliah (work-study program)",
          "Membayar uang SPP secara mencicil"
        ],
        "correctAnswerIndex": 2,
        "explanation": "勤工俭学 adalah istilah resmi Tiongkok untuk program bekerja paruh waktu yang sah bagi mahasiswa sambil menempuh pendidikan."
      },
      {
        "id": "q-cn-ar-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah seminar proposal: '开题报告 (Kāití bàogào)':",
        "targetSentence": "研究生必须在入学第二学期结束前完成学位论文的开题报告。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Laporan keuangan kegiatan organisasi kemahasiswaan",
          "Kartu hasil studi semester pertama",
          "Surat izin sakit dari klinik kampus",
          "Laporan / seminar pembukaan proposal penelitian tugas akhir"
        ],
        "correctAnswerIndex": 3,
        "explanation": "开题报告 adalah tahapan seminar proposal penelitian di mana mahasiswa memaparkan latar belakang, metodologi, dan urgensi riset di hadapan dewan dosen."
      },
      {
        "id": "q-cn-ar-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan berkas pendaftaran: '成绩单公证件 (Chéngjīdān gōngzhèngjiàn)':",
        "targetSentence": "申请攻读博士学位者需提供本科及硕士阶段的成绩单公证件。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Salinan transkrip nilai akademik yang telah dilegalisasi oleh notaris/kedutaan",
          "Brosur promosi program studi universitas",
          "Kuitansi pembayaran biaya formulir pendaftaran",
          "Kartu tanda pengenal mahasiswa sementara"
        ],
        "correctAnswerIndex": 0,
        "explanation": "公证件 (gōngzhèngjiàn) berarti dokumen notaris / legalisir resmi dari instansi berwenang."
      },
      {
        "id": "q-cn-ar-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah surat beasiswa: '专家推荐信 (Zhuānjiā tuījiànxìn)':",
        "targetSentence": "申请中国政府奖学金需随附两名教授或副教授出具的专家推荐信。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Surat keterangan sehat dari rumah sakit",
          "Surat rekomendasi akademik dari pakar / profesor",
          "Surat pernyataan bebas catatan kepolisian",
          "Surat bukti kepemilikan rekening tabungan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "推荐信 = surat rekomendasi (letter of recommendation); 专家 = pakar/guru besar."
      },
      {
        "id": "q-cn-ar-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat untuk prosedur keimigrasian: '居留许可延期 (Jūliú xǔkě yánqī)':",
        "targetSentence": "护照上的学习类居留许可延期手续，必须在到期前三十日内办理。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Pembuatan paspor baru di kedutaan besar",
          "Pembelian tiket pesawat pulang pergi",
          "Perpanjangan izin tinggal (Residence Permit) pelajar asing di kepolisian (PSB)",
          "Penyewaan kamar asrama internasional"
        ],
        "correctAnswerIndex": 2,
        "explanation": "居留许可 = izin tinggal (Residence Permit); 延期 = perpanjangan masa berlaku."
      },
      {
        "id": "q-cn-ar-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah pengawasan karya ilmiah: '学术查重率 (Xuéshù cháchóng lǜ)':",
        "targetSentence": "提交毕业论文终稿前，全文学术查重率不得超过百分之十。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Jumlah cetakan buku di percetakan universitas",
          "Kecepatan pengetikan naskah dalam satu menit",
          "Bobot persentase nilai ujian akhir semester",
          "Tingkat persentase kemiripan / uji plagiarisme karya tulis ilmiah"
        ],
        "correctAnswerIndex": 3,
        "explanation": "查重率 (similarity index) adalah persentase kesamaan teks dengan basis data publikasi terdahulu untuk mencegah plagiarisme."
      },
      {
        "id": "q-cn-ar-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat dari istilah: '跨专业申请 (Kuà zhuānyè shēnqǐng)':",
        "targetSentence": "跨专业申请研究生的考生，通常需要参加入学专业课附加笔试。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Mendaftar program studi lintas jurusan / bidang ilmu yang berbeda dari jenjang sebelumnya",
          "Pindah kampus di tengah masa perkuliahan",
          "Mengambil dua gelar sarjana secara bersamaan",
          "Mengundurkan diri dari jurusan saat ini"
        ],
        "correctAnswerIndex": 0,
        "explanation": "跨 (melintasi) + 专业 (jurusan/bidang studi) = pendaftaran lintas disiplin ilmu."
      },
      {
        "id": "q-cn-ar-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat untuk status beasiswa: '全额奖学金 (Quán'é jiǎngxuéjīn)':",
        "targetSentence": "获得全额奖学金的学生享有学费免除、免费住宿及每月生活津贴。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Potongan biaya kuliah setengah semester",
          "Beasiswa penuh (mencakup biaya kuliah, asrama, dan tunjangan hidup bulanan)",
          "Pinjaman dana pendidikan tanpa bunga",
          "Hadiah uang tunai satu kali untuk juara lomba"
        ],
        "correctAnswerIndex": 1,
        "explanation": "全额 (jumlah penuh) + 奖学金 (beasiswa) = beasiswa penuh (Full Scholarship)."
      },
      {
        "id": "q-cn-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca teks silabus singkat berikut:\n'本门专业课考核采用综合评定制：期末闭卷考试占总成绩50%，课堂讨论及文献汇报占30%，平时出勤与课后作业占20%。旷课超过三次者，取消期末考试资格。'\n\nApa akibat yang akan diterima mahasiswa jika membolos kuliah lebih dari tiga kali?",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Diberikan tugas tambahan membuat rangkuman buku",
          "Hanya dikenai pemotongan nilai sebesar lima persen",
          "Didiskualifikasi dan kehilangan hak mengikuti ujian akhir semester",
          "Diminta pindah ke kelas perkuliahan malam"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Teks menyatakan tegas: '旷课超过三次者，取消期末考试资格' (Membolos lebih dari 3 kali akan dibatalkan hak ujian akhirnya)."
      },
      {
        "id": "q-cn-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca teks aturan perpustakaan berikut:\n'读者借阅中文图书每次限借10本，借期30天；外文原版图书限借3本，借期15天。图书逾期未还者，系统将每日计收滞纳金，并冻结借书权限直至还清欠费。'\n\nBerapa batas waktu peminjaman buku asli berbahasa asing (外文原版图书)?",
        "audioVoiceLang": "zh-CN",
        "options": [
          "30 hari",
          "60 hari",
          "Satu semester",
          "15 hari"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Dalam teks tertulis: '外文原版图书限借3本，借期15天' (Buku berbahasa asing dibatasi 3 eksemplar dengan masa pinjam 15 hari)."
      },
      {
        "id": "q-cn-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca wacana pengumuman beasiswa berikut:\n'国家留学基金委（CSC）年度评审工作已启动。凡上学年出现不及格科目（挂科）或有严重违反校纪校规行为者，评审结果将判定为不合格，并自下学期起中止发放奖学金生活费。'\n\nKondisi apa yang menyebabkan pencairan uang saku beasiswa dihentikan?",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Terdapat mata kuliah yang tidak lulus (挂科) atau pelanggaran disiplin berat",
          "Terlambat mengumpulkan draf proposal skripsi selama dua hari",
          "Tidak menghadiri acara festival seni budaya kampus",
          "Meminjam buku perpustakaan melebihi kuota"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Teks menegaskan: 不及格科目（挂科）atau pelanggaran disiplin menyebabkan beasiswa diputus (中止发放)."
      },
      {
        "id": "q-cn-bb-4",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio pengumuman kantor jurusan berikut dan pilih simpulan informasinya:",
        "targetSentence": "各位留学生同学请注意：本周五下午两点在学术报告厅举行毕业论文开题动员大会，届时将详细讲解论文查重与答辩时间节点，请全体研二同学务必准时出席。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Ujian skripsi dimajukan ke hari Jumat pagi di laboratorium komputer",
          "Pertemuan sosialisasi seminar proposal dan jadwal ujian skripsi diadakan Jumat jam 2 siang untuk mahasiswa tingkat dua",
          "Perpustakaan pusat akan ditutup pada hari Jumat siang untuk renovasi",
          "Wisuda akbar mahasiswa asing akan diselenggarakan di aula utama"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Audio mengumumkan: 开题动员大会 (rapat pengarahan proposal) pada Jumat jam 14.00 di aula akademik untuk mahasiswa tahun ke-2."
      },
      {
        "id": "q-cn-bb-5",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio instruksi keselamatan lab berikut:",
        "targetSentence": "实验人员离开实验室前，必须逐一检查水阀、气阀、电源开关是否完全关闭，并确认门窗上锁。如遇突发漏气或电路短路，请立即按下紧急报警按钮并迅速撤离。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Larangan membawa tas ransel dan jaket tebal ke dalam laboratorium",
          "Jadwal pergantian shift asisten peneliti laboratorium",
          "Kewajiban memeriksa air, gas, listrik, dan mengunci pintu sebelum meninggalkan lab",
          "Petunjuk tata cara mencuci alat gelas kimia setelah percobaan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Audio menjelaskan protokol penutupan kran air, katup gas, listrik, serta evakuasi darurat laboratorium."
      },
      {
        "id": "q-cn-bb-6",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio percakapan konsultasi dengan staf administrasi kampus:",
        "targetSentence": "你的在读证明和中文成绩单已经打印盖章了，请带上学生证到留学生事务大厅三号窗口领取。",
        "audioVoiceLang": "zh-CN",
        "options": [
          "Pendaftaran kartu asuransi kesehatan ditolak karena berkas tidak lengkap",
          "Kartu tanda mahasiswa hilang dan harus membayar denda pembuatan ulang",
          "Jadwal wawancara beasiswa dipindahkan ke aula administrasi",
          "Surat keterangan mahasiswa aktif dan transkrip nilai resmi sudah siap diambil di loket 3"
        ],
        "correctAnswerIndex": 3,
        "explanation": "在读证明 = surat keterangan mahasiswa aktif; 盖章 = telah dicap resmi; 领取 = silakan diambil."
      },
      {
        "id": "q-cn-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Isilah bagian rumpang kalimat akademik berikut dengan konjungsi 书面语 yang tepat:\n'____传统宏观经济模型无法完全解释近期的金融市场波动，学术界____提出了多项修正假设。'",
        "audioVoiceLang": "zh-CN",
        "options": [
          "鉴于...因而... (Jiànyú... yīn'ér...) — mengingat... oleh karena itu...",
          "不管...但也... (bùguǎn... dàn yě...) — tidak peduli... namun juga...",
          "只要...才... (zhǐyào... cái...) — asalkan... barulah...",
          "虽然...所以... (suīrán... suǒyǐ...) — meskipun... jadi..."
        ],
        "correctAnswerIndex": 0,
        "explanation": "'鉴于' (mengingat / mempertimbangkan bahwa...) berkolokasi formal dengan '因而' (oleh karenanya) dalam teks karya ilmiah."
      },
      {
        "id": "q-cn-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilih kata bentukan istilah ilmiah yang tepat untuk melengkapi kalimat:\n'随着数字技术的普及，该研究项目旨在推动传统文献资源的数字化与____建设。'",
        "audioVoiceLang": "zh-CN",
        "options": [
          "规范性 (guīfànxìng) — sifat normatif / keteraturan",
          "规范化 (guīfànhuà) — standardisasi / pembakuan",
          "规范度 (guīfàndù) — tingkat keteraturan",
          "规范感 (guīfàngǎn) — kesan keteraturan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Sufiks '化' (-isasi) menyatakan proses perubahan menuju suatu standar (数字化 dan 规范化: standardisasi)."
      },
      {
        "id": "q-cn-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilih pasangan kata penanda topik perbandingan yang tepat:\n'____实验组的数据表现稳定，对照组的测量指标____出现了较大的离散偏差。'",
        "audioVoiceLang": "zh-CN",
        "options": [
          "虽然...就... (suīrán... jiù...) — meskipun... langsung...",
          "即使...才... (jíshǐ... cái...) — kalaupun... barulah...",
          "相较于...则... (Xiāng jiàoyú... zé...) — dibandingkan dengan... sedangkan...",
          "不但...反之... (búdàn... fǎnzhī...) — tidak hanya... sebaliknya..."
        ],
        "correctAnswerIndex": 2,
        "explanation": "'相较于 [A] ... [B] 则 ...' (Dibandingkan dengan A, maka B justru ...) adalah sintaksis komparatif standar laporan penelitian."
      },
      {
        "id": "q-cn-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Analisis kalimat rusak (病句辨析): Manakah kalimat di bawah ini yang SALAH secara tata bahasa struktur 把 (bǎ)?",
        "options": [
          "他没有把那个实验结果记录在笔记本上。 — Dia tidak mencatat hasil eksperimen itu di buku catatan.",
          "请把你的学术论文按时提交给导师。 — Harap serahkan makalah akademik Anda tepat waktu kepada dosen pembimbing.",
          "研究人员把样本放进了超低温冰箱。 — Peneliti memasukkan sampel ke dalam lemari pendingin suhu ultra-rendah.",
          "他把那个实验结果没有记录在笔记本上。 — Dia hasil eksperimen itu tidak mencatat di buku catatan (negasi salah posisi)."
        ],
        "correctAnswerIndex": 3,
        "explanation": "Dalam kalimat 把 (bǎ), kata negasi (没有 / 不) wajib diletakkan SEBELUM kata 把 ('他没有把那个实验结果记录在笔记本上'), bukan sesudah objek 把."
      },
      {
        "id": "q-cn-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Analisis kalimat rusak (病句辨析): Manakah kalimat berikut yang memiliki susunan sintaksis paling SEMPURNA dan bebas cacat gramatika?",
        "options": [
          "导师的悉心指导，使我的学术论文质量得到了显著提高。 — Bimbingan cermat dosen pembimbing membuat kualitas tesis akademik saya meningkat pesat (subjek utuh).",
          "经过导师的悉心指导，使我的学术论文质量得到了显著提高。 — Melalui bimbingan cermat dosen, membuat kualitas tesis saya meningkat (kehilangan subjek).",
          "在导师的悉心指导下，使我成功发表了高水平学术论文。 — Di bawah bimbingan cermat dosen, membuat saya berhasil menerbitkan makalah (kehilangan subjek).",
          "通过导师的悉心指导，从而让我掌握了正确的实验方法。 — Lewat bimbingan dosen, sehingga membuat saya menguasai metode eksperimen (kehilangan subjek)."
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kalimat '导师的悉心指导，使我的学术论文质量得到了显著提高。' adalah kalimat baku yang memiliki subjek jelas (导师的悉心指导), sedangkan opsi lainnya kehilangan subjek akibat menggabungkan preposisi (经过/在/通过) dengan 使/让."
      },
      {
        "id": "q-cn-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam wawancara sidang skripsi, penguji mengajukan pertanyaan teoretis yang sama sekali belum pernah Anda pelajari. Sikap akademis paling etis adalah:",
        "options": [
          "Mengarang teori palsu secara percaya diri agar tidak dianggap bodoh oleh penguji.",
          "Jujur mengakui bahwa topik tersebut belum tercakup dalam batasan riset saat ini, dan berterima kasih atas masukan berharga penguji untuk riset lanjutan.",
          "Menyalahkan dosen pembimbing karena tidak mengajarkan materi tersebut saat bimbingan.",
          "Diam seribu bahasa dan menatap lantai selama lima menit."
        ],
        "correctAnswerIndex": 1,
        "explanation": "Kejujuran intelektual dan sikap terbuka terhadap batasan riset (局限性) adalah etika ilmiah universal yang sangat dihormati."
      },
      {
        "id": "q-cn-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Jika seorang dosen memiliki gelar fungsional Profesor (教授) sekaligus menjabat sebagai Dekan Fakultas (院长), cara menyapa lisan yang paling lazim dan santun adalah:",
        "options": [
          "老王 (Lǎo Wáng) — Si Tua Wang (sapaan akrab sebaya, tidak sopan untuk dosen)",
          "王老师的朋友 (Wáng lǎoshī de péngyǒu) — Temannya Guru Wang",
          "王院长 (Wáng Yuànzhǎng) / 王教授 (Wáng Jiàoshòu) — Dekan Wang / Profesor Wang (sapaan resmi akademik)",
          "大叔 (Dàshū) — Paman (sapaan jalanan informal)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Gunakan nama marga + jabatan administratif (王院长) atau jabatan fungsional akademik (王教授). Jangan gunakan sebutan informal."
      },
      {
        "id": "q-cn-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Idiom Chengyu (成语) '严谨治学' (Yánjǐn zhìxué) paling tepat menggambarkan profil seorang akademisi yang:",
        "options": [
          "Suka mengkritik orang lain tanpa memberikan solusi konkret",
          "Belajar hanya saat menjelang malam sebelum ujian semester",
          "Memiliki banyak gelar tetapi jarang masuk laboratorium",
          "Menjalankan penelitian ilmiah dengan dedikasi tinggi, cermat, teliti, dan tanpa kompromi terhadap kesalahan data"
        ],
        "correctAnswerIndex": 3,
        "explanation": "严谨治学 adalah semboyan integritas universitas top Tiongkok yang berarti ketat, cermat, dan berdisiplin tinggi dalam menuntut ilmu."
      },
      {
        "id": "q-cn-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Setelah tiba di Tiongkok dengan Visa Pelajar X1, dalam berapa harikah mahasiswa asing WAJIB mengurus konversi ke Izin Tinggal Studi (学习类居留许可)?",
        "options": [
          "Dalam waktu 30 hari sejak tanggal stempel kedatangan di imigrasi Tiongkok",
          "Boleh kapan saja sebelum semester pertama berakhir",
          "Dalam waktu 6 bulan setelah orientasi kampus",
          "Tidak perlu diurus jika sudah memegang paspor resmi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Undang-undang keimigrasian Tiongkok mewajibkan pemegang visa X1 mendaftarkan Izin Tinggal (居留许可) ke Biro Keamanan Publik (出入境管理局) dalam kurun waktu 30 hari."
      }
    ]
  }
};

export const JAPAN_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "jp-1": {
    "id": "test-jp-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Jepang (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Jepang.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-jp-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Dalam etiket Keigo, bentuk kata kerja Sonkeigo (menghormati lawan bicara) yang tepat untuk perbuatan dosen 'membaca naskah proposal mahasiswa' adalah:",
        "targetSentence": "先生、私の研究計画書を____いただけましたでしょうか。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "拝見して (haiken shite) — membaca / melihat (bentuk merendah Kenjougo untuk diri sendiri)",
          "ご覧になって (goran ni natte) — membaca / melihat (bentuk hormat Sonkeigo untuk dosen)",
          "読まれてきて (yomarete kite) — dibaca lalu datang (bentuk pasif tidak lazim)",
          "見せて (misete) — memperlihatkan (bentuk kasual)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ご覧になる (goran ni naru) adalah bentuk Sonkeigo (menghormati tindakan dosen). Sedangkan 拝见する (haiken suru) adalah Kenjougo (merendahkan diri sendiri)."
      },
      {
        "id": "q-jp-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Sebaliknya, bentuk Kenjougo (merendahkan diri sendiri) saat mahasiswa menyatakan telah 'membaca buku karya profesor' adalah:",
        "targetSentence": "先生の最新のご著書を昨晩、確かに____。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "ご覧になりました (goran ni narimashita) — beliau telah membaca (Sonkeigo)",
          "お読みになられました (oyomi ni nararemashita) — beliau telah membaca (hormat ganda)",
          "拝見いたしました (haiken itashimashita) — saya telah membaca dengan hormat (Kenjougo)",
          "見ちゃいました (micha imashita) — sudah telanjur melihat (ragam lisan santai)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "拝見いたしました adalah bentuk Kenjougo resmi yang digunakan saat merendahkan tindakan diri sendiri di hadapan profesor/atasan."
      },
      {
        "id": "q-jp-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah cara baca Kanji resmi yang tepat untuk istilah akademik '履修 (pengambilan mata kuliah)' dan '把握 (pemahaman situasi)':",
        "targetSentence": "履修登録の要件を正確に把握してください。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "ふしゅう (fushū — bacaan salah) & はそく (hasoku — bacaan salah)",
          "りしょう (rishō — bacaan salah) & ばあく (ba'aku — bacaan salah)",
          "はいしゅう (haishū — bacaan salah) & はくあ (hakua — bacaan salah)",
          "りしゅう (rishū — pengambilan mata kuliah) & はあく (ha'aku — pemahaman situasi)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "履修 dibaca りしゅう (rishū) dan 把握 dibaca はあく (ha'aku)."
      },
      {
        "id": "q-jp-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah pola tata bahasa N2 yang tepat untuk menyatakan titik awal rangkaian acara besar perkuliahan:",
        "targetSentence": "本日の入学ガイダンス____、各研究室の専門セミナーが開始されます。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "を皮切りに (o kawakiri ni) — dimulai dari / diawali dengan",
          "に際して (ni saishite) — pada kesempatan / saat menghadapi",
          "を通じて (o tsūjite) — melalui / sepanjang",
          "を抜きにして (o nuki ni shite) — dengan mengesampingkan / tanpa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "〜を皮切りに (o kawakiri ni) berarti 'dimulai dengan... lalu disusul peristiwa-peristiwa penting lainnya'."
      },
      {
        "id": "q-jp-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Dalam penulisan Proposal Riset (研究計画書) dan Skripsi (論文) di Jepang, gaya bahasa akhir kalimat yang WAJIB digunakan adalah:",
        "audioVoiceLang": "ja-JP",
        "options": [
          "です・ます調 (desu/masu) — ragam sopan umum (untuk surat/percakapan)",
          "である調 (da/de aru: 〜である, 〜だ) — ragam tulis ilmiah objektif (wajib untuk skripsi/proposal)",
          "カジュアル会話調 — ragam percakapan kasual sehari-hari",
          "方言調 — ragam dialek daerah"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Seluruh karya ilmiah di universitas Jepang wajib ditulis dalam である調 (da/de aru). Dilarang keras menggunakan です・ます調."
      },
      {
        "id": "q-jp-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Dalam ujian membaca cepat akademik (Dokkai), konjungsi yang berfungsi menyajikan data perbandingan kontras berimbang adalah:",
        "targetSentence": "国内消費が低迷している____、海外市場における売上は急速に拡大している。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "したがって (shitagatte) — oleh karena itu (konklusi kausal)",
          "すなわち (sunawachi) — yaitu / dengan kata lain",
          "一方で (ippō de) — di sisi lain / sebaliknya (kontras berimbang)",
          "つまり (tsumari) — intinya / singkatnya"
        ],
        "correctAnswerIndex": 2,
        "explanation": "〜一方で (ippō de: di satu sisi... di sisi lain...) membandingkan dua situasi yang saling bertolak belakang secara berimbang."
      },
      {
        "id": "q-jp-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Ungkapan penolakan sopan ala Jepang saat pihak jurusan tidak dapat memenuhi permintaan di luar ketentuan adalah:",
        "targetSentence": "誠に申し訳ございませんが、締め切り後の提出は受理____。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "いたしかねません (itashikanemasen) — berisiko dapat terjadi (makna kemungkinan negatif)",
          "できませんよ (dekimasen yo) — tidak bisa lho (lisan langsung)",
          "やりません (yarimasen) — tidak mau mengerjakan (kasar/langsung)",
          "いたしかねます (itashikanemasu) — mohon maaf, kami tidak dapat melakukannya (penolakan formal)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "〜かねます (〜kanemasu: sulit/tidak dapat kami lakukan) adalah eufemisme formal resmi dalam korespondensi administrasi Jepang."
      },
      {
        "id": "q-jp-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Istilah resmi untuk 'Satuan Kredit Semester (SKS)' dalam sistem akademik Jepang adalah:",
        "audioVoiceLang": "ja-JP",
        "options": [
          "単位 (tan'i) — Satuan Kredit Semester (SKS)",
          "点数 (tensū) — skor / poin nilai ujian",
          "等級 (tōkyū) — kelas / tingkatan mutu",
          "学年 (gakunen) — tingkat tahun ajaran"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Di universitas Jepang, bobot kredit perkuliahan disebut 単位 (tan'i). Contoh: 履修登録で20単位を取得する."
      },
      {
        "id": "q-jp-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pola tata bahasa tingkat mahir JLPT N1 '〜極まりない' (kiwamarinai) memiliki arti:",
        "targetSentence": "研究データの一部を故意に改ざんする行為は、研究者として無責任____。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "にすぎない (ni suginai: hanya sekadar)",
          "極まりない (kiwamarinai: sangat tidak bertanggung jawab tak ada batasnya)",
          "ほかはない (hoka wa nai: tidak ada pilihan lain)",
          "にこしたことはない (ni koshita koto wa nai: lebih baik)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "〜極まりない (kiwamarinai) menyatakan derajat puncak kemutlakan suatu sifat ekstrem yang tidak dapat ditoleransi."
      },
      {
        "id": "q-jp-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Kalimat penutup surat/email paling standar dan berbobot sopan tinggi saat meminta bantuan bimbingan kepada dosen adalah:",
        "audioVoiceLang": "ja-JP",
        "options": [
          "じゃあ、お返事待ってますね！よろしく！ — Kalau begitu, saya tunggu balasannya ya! Salam!",
          "早く返信してください、困っています。 — Tolong cepat balas, saya sedang kesulitan.",
          "ご多忙の折、大変恐縮ではございますが、何卒よろしくお願い申し上げます。 — Di tengah kesibukan Profesor, dengan segala kerendahan hati saya memohon bimbingan Anda.",
          "それではバイバイ、また来週。 — Kalau begitu dadah, sampai minggu depan."
        ],
        "correctAnswerIndex": 2,
        "explanation": "Frasa penutup standar Keigo: 'ご多忙の折、大変恐縮ではございますが、何卒よろしくお願い申し上げます' (Di tengah kesibukan Anda, mohon maaf merepotkan, mohon bimbingannya)."
      }
    ]
  },
  "jp-2": {
    "id": "test-jp-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Uji kemampuan menyusun esai motivasi, proposal rencana riset, etika akademik, dan korespondensi formal dengan dosen di Jepang.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-jp-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "研究データを改ざんして論文を発表するなど、研究者として無責任極まりない行為であり、到底容認できない。 (Kenkyū dēta o kaizan shite ronbun o happyō suru nado, kenkyūsha to shite musekinin kiwamarinai kōi de ari, tōtei yōnin dekinai.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Tindakan seperti memanipulasi data riset lalu mempublikasikannya dalam makalah adalah perbuatan yang teramat sangat tidak bertanggung jawab bagi seorang peneliti, dan sama sekali tidak dapat ditoleransi.",
        "keywords": [
          "tindakan",
          "memanipulasi",
          "data",
          "riset"
        ],
        "explanation": "Kalimat akademik pola Derajat Ekstrem Bahasa Tulis: 〜極まりない (kiwamarinai) & 〜極まる (kiwamaru): '研究データを改ざんして論文を発表するなど、研究者として無責任極まりない行為であり、到底容認できない。' diterjemahkan secara akurat menjadi 'Tindakan seperti memanipulasi data riset lalu mempublikasikannya dalam makalah adalah perbuatan yang teramat sangat tidak bertanggung jawab bagi seorang peneliti, dan sama sekali tidak dapat ditoleransi.'."
      },
      {
        "id": "q-jp-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "世界的人気バンドの来日ツアーは、来月5日の東京ドーム公演を皮切りに全国6大ドームで開催されます。 (Sekai-teki ninki bando no rainichi tsuā wa, raigetsu itsuka no Tōkyō Dōmu kōen o kawakiri ni zenkoku rokudai dōmu de kaisai saremasu.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Tur kedatangan grup musik terkenal dunia ke Jepang akan diselenggarakan di 6 stadion kubah nasional, diawali dengan konser Tokyo Dome pada tanggal 5 bulan depan.",
        "keywords": [
          "kedatangan",
          "grup",
          "musik",
          "terkenal"
        ],
        "explanation": "Kalimat akademik pola Titik Tolak Rangkaian Peristiwa: 〜を皮切りに (o kawakiri ni): '世界的人気バンドの来日ツアーは、来月5日の東京ドーム公演を皮切りに全国6大ドームで開催されます。' diterjemahkan secara akurat menjadi 'Tur kedatangan grup musik terkenal dunia ke Jepang akan diselenggarakan di 6 stadion kubah nasional, diawali dengan konser Tokyo Dome pada tanggal 5 bulan depan.'."
      },
      {
        "id": "q-jp-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "机上の空論ではなく、被災地の厳しい実情に即した迅速な復興支援策を策定すべきである。 (Kijō no kūron dewa naku, hisaichi no kibishii jitsujō ni sokushite jinsoku na fukkō shiensaku o sakutei subeki de aru.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Bukan sekadar teori hampa di atas meja, semestinya kita merumuskan kebijakan bantuan rekonstruksi yang cepat dan selaras persis dengan kondisi riil korban bencana di lapangan.",
        "keywords": [
          "sekadar",
          "teori",
          "hampa",
          "atas"
        ],
        "explanation": "Kalimat akademik pola Kesesuaian Ketat terhadap Kaidah: 〜に即して (ni sokushite): '机上の空論ではなく、被災地の厳しい実情に即した迅速な復興支援策を策定すべきである。' diterjemahkan secara akurat menjadi 'Bukan sekadar teori hampa di atas meja, semestinya kita merumuskan kebijakan bantuan rekonstruksi yang cepat dan selaras persis dengan kondisi riil korban bencana di lapangan.'."
      },
      {
        "id": "q-jp-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "台風の接近に伴う交通網の混乱とお客様の安全を鑑みて、本日の公演はやむを得ず中止とさせていただきます。 (Taifū no sekkin ni tomonau kōtsūmō no konran to okyakusama no anzen o kangamite, honjitsu no kōen wa yamu o ezu chūshi to sasete itadakimasu.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Menimbang kekacauan jaringan transportasi akibat mendekatnya topan dan keselamatan para pengunjung, pertunjukan hari ini dengan amat berat hati terpaksa kami batalkan.",
        "keywords": [
          "menimbang",
          "kekacauan",
          "jaringan",
          "transportasi"
        ],
        "explanation": "Kalimat akademik pola Mempertimbangkan Situasi Luas: 〜を鑑みて (o kangamite): '台風の接近に伴う交通網の混乱とお客様の安全を鑑みて、本日の公演はやむを得ず中止とさせていただきます。' diterjemahkan secara akurat menjadi 'Menimbang kekacauan jaringan transportasi akibat mendekatnya topan dan keselamatan para pengunjung, pertunjukan hari ini dengan amat berat hati terpaksa kami batalkan.'."
      },
      {
        "id": "q-jp-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "母校を巣立ち社会へと羽ばたく若者たちの前途に、幸多からんことを祈ってやみません。 (Bokō o sudachi shakai e to habataku wakamonotachi no zento ni, sachi ōkaran koto o inotte yamimasen.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Saya tiada henti-hentinya memanjatkan doa dari lubuk hati terdalam agar limpahan kebahagiaan menyertai masa depan para pemuda yang meninggalkan almamater dan mengepakkan sayap menuju masyarakat.",
        "keywords": [
          "tiada",
          "henti",
          "hentinya",
          "memanjatkan"
        ],
        "explanation": "Kalimat akademik pola Perasaan Emosional Mendalam: 〜てやまない (te yamanai) & 〜を禁じ得ない (o kinji enai): '母校を巣立ち社会へと羽ばたく若者たちの前途に、幸多からんことを祈ってやみません。' diterjemahkan secara akurat menjadi 'Saya tiada henti-hentinya memanjatkan doa dari lubuk hati terdalam agar limpahan kebahagiaan menyertai masa depan para pemuda yang meninggalkan almamater dan mengepakkan sayap menuju masyarakat.'."
      },
      {
        "id": "q-jp-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "事故の衝撃で足を骨折してしまい、走ることはおろか、一人で自立して立ち上がることさえできません。 (Jiko no shōgeki de ashi o kossetsu shite shimai, hashiru koto wa oroka, hitori de jiritsu shite tachiagaru koto sae dekimasen.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Kaki saya patah akibat benturan kecelakaan, jangankan untuk berlari, untuk berdiri tegak mandiri seorang diri saja bahkan tak berdaya.",
        "keywords": [
          "kaki",
          "patah",
          "akibat",
          "benturan"
        ],
        "explanation": "Kalimat akademik pola Mengesampingkan yang Ekstrem: 〜はおろか (wa oroka) & 〜ならいざ知らず (nara iza shirazu): '事故の衝撃で足を骨折してしまい、走ることはおろか、一人で自立して立ち上がることさえできません。' diterjemahkan secara akurat menjadi 'Kaki saya patah akibat benturan kecelakaan, jangankan untuk berlari, untuk berdiri tegak mandiri seorang diri saja bahkan tak berdaya.'."
      },
      {
        "id": "q-jp-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "彼が数々の逆境を乗り越えて偉業を達成できたのは、不撓不屈の信念を持ち続けたからにほかならない。 (Kare ga kazukazu no gyakkyō o norikoete igyō o tassei dekita no wa, futōfukutsu no shinnen o mochitsuzuketa kara ni hokanaranai.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Keberhasilannya melampaui berbagai rintangan nestapa dan menorehkan prestasi agung tiada lain dan tak bukan adalah semata-mata karena ia terus menggenggam keyakinan yang pantang menyerah.",
        "keywords": [
          "keberhasilannya",
          "melampaui",
          "berbagai",
          "rintangan"
        ],
        "explanation": "Kalimat akademik pola Kalimat Formal Akademis: 〜にほかならない (ni hokanaranai) & 〜とされている: '彼が数々の逆境を乗り越えて偉業を達成できたのは、不撓不屈の信念を持ち続けたからにほかならない。' diterjemahkan secara akurat menjadi 'Keberhasilannya melampaui berbagai rintangan nestapa dan menorehkan prestasi agung tiada lain dan tak bukan adalah semata-mata karena ia terus menggenggam keyakinan yang pantang menyerah.'."
      },
      {
        "id": "q-jp-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "大地震による原子力発電所の事故により、数万人もの住民が住み慣れた故郷からの避難生活を余儀なくされました。 (Dai-jishin ni yoru genshiryoku hatsudensho no jiko ni yori, sūman-nin mono jūmin ga suminareta kokyō kara no hinan seikatsu o yogi naku saremashita.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Akibat kecelakaan instalasi pembangkit listrik tenaga nuklir yang dipicu gempa dahsyat, puluhan ribu warga terpaksa harus menjalani hidup mengungsi meninggalkan tanah kelahiran yang mereka cintai.",
        "keywords": [
          "akibat",
          "kecelakaan",
          "instalasi",
          "pembangkit"
        ],
        "explanation": "Kalimat akademik pola Tekanan Keadaan yang Tak Terelakkan: 〜を余儀なくされる (o yogi naku sareru): '大地震による原子力発電所の事故により、数万人もの住民が住み慣れた故郷からの避難生活を余儀なくされました。' diterjemahkan secara akurat menjadi 'Akibat kecelakaan instalasi pembangkit listrik tenaga nuklir yang dipicu gempa dahsyat, puluhan ribu warga terpaksa harus menjalani hidup mengungsi meninggalkan tanah kelahiran yang mereka cintai.'."
      },
      {
        "id": "q-jp-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "マニュアル通りの画一的な対応にとらわれず、現場の状況に応じて臨機応変に対処する柔軟性が求められる。 (Manyuarudōri no kakuitsuteki na taiō ni torawarezu, genba no jōkyō ni ōjite rinki-ōhen ni taisho suru jūnansei ga motomerareru.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Tanpa terpaku pada respons seragam yang kaku sesuai manual, kita dituntut memiliki kelenturan untuk bertindak secara luwes menyesuaikan diri dengan situasi di lapangan.",
        "keywords": [
          "tanpa",
          "terpaku",
          "respons",
          "seragam"
        ],
        "explanation": "Kalimat akademik pola Yojijukugo (Idiom Empat Kanji) dalam Diskursus Resmi N1: 'マニュアル通りの画一的な対応にとらわれず、現場の状況に応じて臨機応変に対処する柔軟性が求められる。' diterjemahkan secara akurat menjadi 'Tanpa terpaku pada respons seragam yang kaku sesuai manual, kita dituntut memiliki kelenturan untuk bertindak secara luwes menyesuaikan diri dengan situasi di lapangan.'."
      },
      {
        "id": "q-jp-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "本研究は、急速に進展する生成AI技術の倫理的課題をめぐり、国内外の法制度と照らし合わせつつ、現実に即したガバナンスモデルの構築を目指すものである。 (Hon-kenkyū wa, kyūsoku ni shinten suru seisei Ē-ai gijutsu no rinriteki kadai o meguri, kokunaigai no hōseido to terashiawasetsutsu, genjitsu ni sokushita gabanansu moderu no kōchiku o mezasu mono de aru.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Penelitian ini, seputar tantangan etika teknologi AI generatif yang berkembang pesat, bertujuan membangun model tata kelola yang selaras dengan kenyataan lapangan sembari menyandingkannya dengan sistem hukum domestik dan internasional.",
        "keywords": [
          "penelitian",
          "seputar",
          "tantangan",
          "etika"
        ],
        "explanation": "Kalimat akademik pola Mahakarya Kelulusan JLPT N1 & Bahasa Jepang Akademik Perguruan Tinggi (Capstone Unit): '本研究は、急速に進展する生成AI技術の倫理的課題をめぐり、国内外の法制度と照らし合わせつつ、現実に即したガバナンスモデルの構築を目指すものである。' diterjemahkan secara akurat menjadi 'Penelitian ini, seputar tantangan etika teknologi AI generatif yang berkembang pesat, bertujuan membangun model tata kelola yang selaras dengan kenyataan lapangan sembari menyandingkannya dengan sistem hukum domestik dan internasional.'."
      }
    ]
  },
  "jp-3": {
    "id": "test-jp-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis & Struktur Kalimat Jepang (5 Soal Sambung Kata)",
    "description": "Uji keterampilan merangkai kata dan frasa acak menjadi kalimat instruksi perkuliahan, riset lab, dan administrasi beasiswa yang runtut.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-jp-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat permohonan bimbingan proposal riset kepada profesor:",
        "scrambledWords": [
          "賜りたく存じます",
          "教授のご指導を",
          "研究計画書につきまして"
        ],
        "correctOrder": [
          "研究計画書につきまして",
          "教授のご指導を",
          "賜りたく存じます"
        ],
        "targetSentence": "研究計画書につきまして、教授のご指導を賜りたく存じます。",
        "audioVoiceLang": "ja-JP",
        "explanation": "Topik bahasan (研究計画書につきまして) + Objek penghormatan (教授のご指導を) + Verba Kenjougo permohonan (賜りたく存じます: sudilah kiranya memberi bimbingan)."
      },
      {
        "id": "q-jp-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi pengumuman batas waktu registrasi mata kuliah (KRS):",
        "scrambledWords": [
          "完了してください",
          "今学期の履修登録は",
          "4月20日までに"
        ],
        "correctOrder": [
          "今学期の履修登録は",
          "4月20日までに",
          "完了してください"
        ],
        "targetSentence": "今学期の履修登録は、4月20日までに完了してください。",
        "audioVoiceLang": "ja-JP",
        "explanation": "Topik (今学期の履修登録は) + Batas waktu tegas (4月20日までに) + Instruksi tindakan (完了してください)."
      },
      {
        "id": "q-jp-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat kesiapan presentasi seminar riset:",
        "scrambledWords": [
          "行う予定です",
          "先行研究の発表を",
          "来週のゼミにて"
        ],
        "correctOrder": [
          "来週のゼミにて",
          "先行研究の発表を",
          "行う予定です"
        ],
        "targetSentence": "来週のゼミにて、先行研究の発表を行う予定です。",
        "audioVoiceLang": "ja-JP",
        "explanation": "Keterangan waktu & tempat (来週のゼミにて) + Objek presentasi riset terdahulu (先行研究の発表を) + Jadwal rencana (行う予定です)."
      },
      {
        "id": "q-jp-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat persiapan pendaftaran beasiswa MEXT:",
        "scrambledWords": [
          "準備しております",
          "文部科学省の奨学金に",
          "応募するための書類を"
        ],
        "correctOrder": [
          "文部科学省の奨学金に",
          "応募するための書類を",
          "準備しております"
        ],
        "targetSentence": "文部科学省の奨学金に応募するための書類を準備しております。",
        "audioVoiceLang": "ja-JP",
        "explanation": "Tujuan beasiswa (文部科学省の奨学金に) + Frasa dokumen persyaratan (応募するための書類を) + Kata kerja progresif sopan (準備しております)."
      },
      {
        "id": "q-jp-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi instruksi penutupan laboratorium riset:",
        "scrambledWords": [
          "施錠してください",
          "必ず安全確認を行い",
          "実験終了後は"
        ],
        "correctOrder": [
          "実験終了後は",
          "必ず安全確認を行い",
          "施錠してください"
        ],
        "targetSentence": "実験終了後は、必ず安全確認を行い施錠してください。",
        "audioVoiceLang": "ja-JP",
        "explanation": "Waktu pasca-eksperimen (実験終了後は) + Tindakan inspeksi keselamatan (必ず安全確認を行い) + Perintah penguncian pintu (施錠してください)."
      }
    ]
  },
  "jp-4": {
    "id": "test-jp-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Jepang (10 Soal Artikan)",
    "description": "Uji akurasi penerjemahan dan pemahaman istilah krusial kampus (KRS, transkrip, sidang tesis, visa pelajar, dan beasiswa).",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-jp-ar-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan bahasa Indonesia yang tepat untuk istilah akademik: '履修登録 (Rishū tōroku)':",
        "targetSentence": "教務課のウェブサイトにて今学期の履修登録を行ってください。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Pembayaran uang pangkal gedung perkuliahan",
          "Pendaftaran rencana studi / pengisian KRS mata kuliah semester",
          "Pencetakan kartu perpustakaan universitas",
          "Permohonan cuti kuliah sementara"
        ],
        "correctAnswerIndex": 1,
        "explanation": "履修 (pengambilan mata kuliah) + 登録 (registrasi) = pengisian Kartu Rencana Studi (KRS) resmi."
      },
      {
        "id": "q-jp-ar-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah riset: '先行研究 (Senkō kenkyū)':",
        "targetSentence": "先行研究の批判的検討を通じて、本論文の独自性を明確にする。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Biaya perjalanan dinas riset luar negeri",
          "Hasil eksperimen yang gagal di laboratorium",
          "Studi / penelitian terdahulu yang relevan dalam tinjauan pustaka",
          "Rencana jadwal wisuda kelulusan mahasiswa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "先行 (terdahulu) + 研究 (penelitian) = literatur / penelitian terdahulu yang menjadi pijakan riset."
      },
      {
        "id": "q-jp-ar-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah: '参考文献 (Sankō bunken)':",
        "targetSentence": "引用したすべての書籍や論文を参考文献リストに記載しなければならない。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Brosur panduan beasiswa pemerintah",
          "Catatan kuliah harian mahasiswa",
          "Surat keterangan kelakuan baik",
          "Daftar pustaka / literatur rujukan ilmiah"
        ],
        "correctAnswerIndex": 3,
        "explanation": "参考文献 (sankō bunken) adalah daftar pustaka / bibliografi yang dirujuk dalam karya tulis ilmiah."
      },
      {
        "id": "q-jp-ar-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan jabatan pembimbing riset: '指導教員 (Shidō kyōin)':",
        "targetSentence": "研究計画の内容について、事前に指導教員の承認を得る必要がある。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Dosen pembimbing akademik / profesor pembimbing tugas akhir",
          "Petugas kebersihan laboratorium",
          "Kepala asrama mahasiswa internasional",
          "Instruktur pelatihan olahraga kampus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "指導 (bimbingan) + 教員 (tenaga pendidik) = dosen pembimbing akademik."
      },
      {
        "id": "q-jp-ar-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat untuk pengumuman jadwal: '休講 (Kyūkō)' dan '補講 (Hokō)':",
        "targetSentence": "明日の経済学講義は休講となり、来週水曜日に補講が行われます。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Ujian tengah semester dan ujian susulan",
          "Kuliah ditiadakan (kosong) dan kuliah pengganti",
          "Orientasi mahasiswa baru dan temu alumni",
          "Praktikum laboratorium dan seminar proposal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "休講 = perkuliahan ditiadakan; 補講 = kelas kuliah pengganti."
      },
      {
        "id": "q-jp-ar-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti dari karya akhir pascasarjana: '修士論文 (Shūshi ronbun)':",
        "targetSentence": "修士論文の口頭試問を無事に通過し、修了が認定された。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Skripsi sarjana muda jenjang D3",
          "Disertasi doktoral jenjang S3",
          "Tesis magister / tugas akhir jenjang S2",
          "Laporan magang kerja lapangan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "修士 (magister / S2) + 論文 (karya tulis ilmiah) = tesis magister S2."
      },
      {
        "id": "q-jp-ar-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan dokumen: '成績証明書 (Seiseki shōmeisho)':",
        "targetSentence": "大学院入試の出願書類として、出身大学の成績証明書を提出した。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Ijazah kelulusan sementara",
          "Surat bukti pembayaran SPP",
          "Pas foto ukuran paspor",
          "Transkrip nilai akademik resmi"
        ],
        "correctAnswerIndex": 3,
        "explanation": "成績 (nilai hasil studi) + 証明書 (surat keterangan resmi) = transkrip nilai akademik."
      },
      {
        "id": "q-jp-ar-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan prosedur imigrasi: '在留資格更新 (Zairyū shikaku kōshin)':",
        "targetSentence": "在留期間満了日の三か月前から在留資格更新の申請が可能である。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Perpanjangan izin status kependudukan / visa pelajar di kantor imigrasi Jepang",
          "Pembuatan rekening bank pos Jepang",
          "Pendaftaran asuransi kesehatan nasional",
          "Lapor diri ke kedutaan besar Republik Indonesia"
        ],
        "correctAnswerIndex": 0,
        "explanation": "在留資格 (status izin tinggal) + 更新 (pembaruan / perpanjangan)."
      },
      {
        "id": "q-jp-ar-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti status studi: '研究生 (Kenkyūsei)':",
        "targetSentence": "大学院修士課程の本科生に入学する前、半年間研究生として在籍した。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Dosen tamu dari luar negeri",
          "Mahasiswa peneliti non-gelar persiapan masuk program magister/doktoral",
          "Alumni yang sudah lulus wisuda",
          "Asisten administrasi kantor jurusan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "研究生 adalah mahasiswa riset non-degree yang belajar di bawah bimbingan profesor sebelum menempuh ujian seleksi masuk reguler (Insei)."
      },
      {
        "id": "q-jp-ar-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah izin kerja: '資格外活動許可 (Shikakugai katsudō kyoka)':",
        "targetSentence": "留学生がアルバイトをする場合、入国管理局から資格外活動許可を受けなければならない。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Izin mengikuti ujian surat izin mengemudi mobil",
          "Izin perjalanan liburan ke luar negeri",
          "Izin resmi bekerja paruh waktu (arubaito) di luar status visa pelajar (maksimal 28 jam/minggu)",
          "Sertifikat kelulusan uji kecakapan bahasa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "資格外活動許可 adalah cap izin resmi dari imigrasi yang memperbolehkan pemegang visa pelajar bekerja paruh waktu secara legal."
      }
    ]
  },
  "jp-5": {
    "id": "test-jp-5",
    "title": "Bagian 5: Wacana Dokkai, Listening Audio, & Kasus Kampus Jepang (15 Soal Bebas)",
    "description": "Uji analitis komprehensif terhadap silabus ujian, aturan perpustakaan, audio pengumuman jurusan, etika lab, dan studi kasus nyata.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-jp-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca teks pengumuman evaluasi perkuliahan berikut:\n'本講義の評価基準は、期末筆記試験60%、各回小レポート30%、出席率10%とする。なお、小レポートは締め切りを過ぎた場合、理由の如何を問わず一切採点対象としない。また、出席回数が全講義の3分の2に満たない者は自動的に不合格（D評価）となる。'\n\nBerapa batas minimal kehadiran agar mahasiswa tidak otomatis dinyatakan tidak lulus (tidak mendapat nilai D)?",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Minimal hadir 50% dari total kuliah",
          "Cukup hadir saat ujian akhir semester saja",
          "Minimal hadir 100% tanpa pernah absen satu kali pun",
          "Minimal hadir 2/3 (dua pertiga) dari total sesi perkuliahan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Teks menyatakan: '出席回数が全講義の3分の2に満たない者は自動的に不合格' (Kurang dari 2/3 kehadiran otomatis tidak lulus)."
      },
      {
        "id": "q-jp-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca teks aturan perpustakaan kampus berikut:\n'学部生の図書貸出冊数は最大5冊まで、期間は14日間です。大学院生は最大15冊まで、期間は30日間貸出可能です。返却期限日を過ぎた図書がある場合、遅延日数分だけ新たな貸出および予約が禁止されます。'\n\nApa sanksi keterlambatan pengembalian buku di perpustakaan tersebut?",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Pemblokiran peminjaman dan reservasi buku baru selama jumlah hari keterlambatan",
          "Denda uang tunai sebesar seribu yen per hari",
          "Pencabutan status kartu mahasiswa",
          "Kewajiban membeli buku yang sama sebanyak dua eksemplar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Sanksi dalam teks: '遅延日数分だけ新たな貸出および予約が禁止されます' (Dilarang meminjam selama jumlah hari telat)."
      },
      {
        "id": "q-jp-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca wacana ketentuan beasiswa MEXT (Pemerintah Jepang):\n'文部科学省国費外国人留学生は、毎月所定の期日までに大学留学生支援窓口にて在籍簿に自筆署名（サイン）を行わなければならない。出張・病気等の正当な理由なく署名を行わなかった月は、当月分の奨学金が支給されない。'\n\nApa yang wajib dilakukan mahasiswa setiap bulan agar uang saku beasiswa MEXT cair?",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Mengirim email laporan pengeluaran belanja harian ke kementerian",
          "Menandatangani buku presensi kehadiran (在籍簿) secara langsung di loket kampus",
          "Menyerahkan salinan slip gaji pekerjaan paruh waktu",
          "Mengikuti ujian wawancara online setiap awal bulan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Penerima beasiswa MEXT wajib hadir menandatangani buku bukti keberadaan di Jepang (在籍確認のサイン) setiap bulan."
      },
      {
        "id": "q-jp-bb-4",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio pengumuman sidang tesis pascasarjana berikut:",
        "targetSentence": "修士論文発表会は来月十日、第一共同セミナー室にて午前九時半より開始いたします。発表時間は質疑応答を含め一人三十分です。発表者は開始十五分前までにプロジェクターの接続確認を完了してください。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Sidang tesis dibatalkan karena renovasi proyektor ruang seminar",
          "Ujian lisan dipindahkan ke ruang dosen pembimbing masing-masing",
          "Sidang tesis dimulai tanggal 10 bulan depan jam 09.30, durasi 30 menit per orang, dan wajib cek proyektor 15 menit sebelumnya",
          "Presentasi berlangsung selama 2 jam tanpa sesi tanya jawab"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Pengumuman: tanggal 10 jam 09.30, ruang seminar 1, waktu 30 menit (termasuk tanya jawab), dan cek proyektor 15 menit sebelum mulai."
      },
      {
        "id": "q-jp-bb-5",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio aturan keselamatan laboratorium berikut:",
        "targetSentence": "有機溶媒および酸性試薬を使用した後は、必ずドラフトチャンバー内で適切な廃液容器に分別廃棄してください。誤って一般下水に流すことは法律により厳禁されています。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Larangan menyalakan lampu laboratorium setelah jam lima sore",
          "Petunjuk cara mencampur asam sulfat pekat dengan air keran",
          "Pemberitahuan pemadaman listrik berkala di gedung sains",
          "Kewajiban membuang limbah reagen kimia dan pelarut organik ke jerigen pemilahan khusus di dalam fume hood (lemari asam)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Instruksi: limbah pelarut organik wajib dibuang terpisah di fume hood (ドラフトチャンバー内), dilarang dibuang ke saluran air biasa."
      },
      {
        "id": "q-jp-bb-6",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio percakapan dengan petugas bagian kemahasiswaan (教務係):",
        "targetSentence": "先ほど申請いただいた健康診断証明書と在学証明書の発行手続きが完了しました。自動発行機に学生証をタッチしていただければ、本日中に印刷可能です。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Surat keterangan sehat dan surat mahasiswa aktif sudah bisa dicetak langsung di mesin otomatis menggunakan kartu mahasiswa",
          "Kartu tanda mahasiswa Anda ditolak karena belum membayar uang semester",
          "Pemeriksaan kesehatan tahunan akan diadakan lusa di aula olahraga",
          "Surat pengantar visa baru bisa diambil minggu depan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Petugas menginformasikan sertifikat sudah siap dicetak di mesin mandiri (自動発行機) dengan menempelkan kartu mahasiswa."
      },
      {
        "id": "q-jp-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah ungkapan tata bahasa N2 yang tepat untuk melengkapi hubungan kausalitas simultan:\n'科学技術の急速な進歩____、従来のプライバシー保護法の見直しが迫られている。'",
        "audioVoiceLang": "ja-JP",
        "options": [
          "をおいて (o oite) — selain... tidak ada yang lain",
          "に伴い (ni tomonai) — seiring dengan / bersamaan dengan",
          "に反して (ni hanshite) — bertentangan dengan / berlawanan dengan",
          "を皮切りに (o kawakiri ni) — diawali dengan / dimulai dari"
        ],
        "correctAnswerIndex": 1,
        "explanation": "〜に伴い (ni tomonai: seiring dengan berkembangnya...) menyatakan perubahan A yang memicu perubahan B secara simultan."
      },
      {
        "id": "q-jp-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah bentuk tata bahasa yang tepat untuk menyatakan ketidaksanggupan psikologis/etika seorang peneliti:\n'研究不正を目の当たりにした以上、研究者としての良心から黙認する____。'",
        "audioVoiceLang": "ja-JP",
        "options": [
          "わけがない (wake ga nai: mustahil kenyataannya)",
          "に違いない (ni chigainai: pasti)",
          "わけにはいかない (wake ni wa ikanai: tidak mungkin bisa membiarkannya secara nurani)",
          "にすぎない (ni suginai: hanya sekadar)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "〜わけにはいかない menyatakan bahwa dari segi etika moral / norma sosial, tindakan tersebut tidak boleh dilakukan."
      },
      {
        "id": "q-jp-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah bentuk tata bahasa yang menyatakan keharusan tanpa pilihan lain:\n'台風の接近により交通機関が全面的に麻痺したため、本日の学会発表を中止____。'",
        "audioVoiceLang": "ja-JP",
        "options": [
          "するはずがなかった (suru hazu ga nakatta) — tidak mungkin dijadwalkan terjadi",
          "したくてたまらなかった (shitakute tamaranakatta) — sangat ingin melakukannya",
          "することになったわけではない (suru koto ni natta wake dewa nai) — bukan berarti diputuskan demikian",
          "せざるを得なかった (sezaru o enakatta) — terpaksa membatalkan tanpa pilihan lain"
        ],
        "correctAnswerIndex": 3,
        "explanation": "〜ざるを得ない (sezaru o enai) berarti 'terpaksa harus melakukan hal tersebut karena tidak ada pilihan lain yang memungkinkan'."
      },
      {
        "id": "q-jp-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Manakah perbedaan makna yang BENAR antara '〜わけではない' dan '〜わけがない'?",
        "options": [
          "〜わけではない berarti penyangkalan sebagian ('bukan berarti selalu demikian'), sedangkan 〜わけがない berarti penyangkalan mutlak ('mustahil sekali')",
          "Keduanya memiliki arti yang sama persis tanpa perbedaan",
          "〜わけではない digunakan untuk masa depan, sedangkan 〜わけがない untuk masa lalu",
          "〜わけがない adalah bahasa slang anak muda, sedangkan 〜わけではない bahasa resmi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "〜わけではない = partial denial (tidak selalu); 〜わけがない = absolute impossibility (mustahil/tidak mungkin)."
      },
      {
        "id": "q-jp-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam wawancara seleksi pascasarjana, penguji menanyakan: 'Jika hipotesis Anda ternyata keliru di tengah penelitian, apa yang akan Anda lakukan?'. Jawaban paling tepat adalah:",
        "options": [
          "Tetap memaksakan data agar sesuai dengan hipotesis awal",
          "Segera meninjau kembali variabel eksperimen, menganalisis faktor penyebab deviasi data bersama profesor pembimbing, dan merumuskan pendekatan alternatif",
          "Langsung menyerah dan berganti topik penelitian baru",
          "Menyalahkan alat ukur laboratorium yang sudah tua"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Sikap ilmiah yang matang mengedepankan analisis penyebab anomali data (データ偏差の要因分析) dan pemecahan masalah objektif."
      },
      {
        "id": "q-jp-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Di lingkungan universitas Jepang, bagaimana cara memanggil profesor pembimbing Anda saat bertegur sapa secara langsung?",
        "options": [
          "〇〇教授 (〇〇-kyōju) — gelar jabatan tertulis pada dokumen/surat resmi",
          "〇〇さん (〇〇-san) — panggilan umum antar rekan (kurang sopan untuk profesor)",
          "〇〇先生 (〇〇-sensei) — panggilan langsung yang sopan kepada dosen/profesor di kampus",
          "あなた (Anata) — Anda (tidak sopan bila digunakan kepada atasan/dosen)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Dalam percakapan langsung tatap muka, seluruh dosen wajib dipanggil dengan akhiran '〜先生' (Sensei). Sebutan 〇〇教授 lazimnya untuk ragam tulis."
      },
      {
        "id": "q-jp-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Makna dari peribahasa akademik empat karakter (四字熟語) '切磋琢磨' (Sessa takuma) adalah:",
        "options": [
          "Bekerja lembur sampai larut malam tanpa istirahat",
          "Membuang barang-barang yang sudah tidak terpakai",
          "Berdebat keras sampai bermusuhan",
          "Saling mengasah kemampuan, memacu prestasi, dan belajar bersama dengan rekan demi mencapai kualitas terbaik"
        ],
        "correctAnswerIndex": 3,
        "explanation": "切磋琢磨 (sessa takuma) adalah ungkapan yang sangat dijunjung dalam budaya laboratorium Jepang (saling mengasah dan memotivasi antarpeneliti)."
      },
      {
        "id": "q-jp-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa etiket penting yang harus diperhatikan saat pertama kali berkunjung ke laboratorium riset (研究室訪問 - Kenkyūshitsu Hōmon)?",
        "options": [
          "Membuat janji terlebih dahulu via email resmi, membaca publikasi profesor sebelumnya, hadir 5 menit lebih awal, dan berpakaian rapi formal (setelan jas)",
          "Langsung datang mengetuk pintu tanpa pemberitahuan sebelumnya agar terlihat bersemangat",
          "Membawa hadiah mewah mahal untuk menyogok profesor",
          "Membawa teman satu angkatan yang banyak agar ramai"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kenkyuushitsu Houmon wajib dijadwalkan via email (アポイントメント), membaca riset profesor, hadir tepat waktu, dan berbusana formal (スーツ)."
      },
      {
        "id": "q-jp-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas maksimal jam kerja paruh waktu (arubaito) yang diizinkan oleh hukum imigrasi Jepang bagi mahasiswa asing pemegang izin resmi selama masa aktif perkuliahan?",
        "options": [
          "Bebas tanpa batas jam asalkan nilai tidak turun",
          "Maksimal 28 jam per minggu (dan hingga 40 jam per minggu saat libur panjang semester)",
          "Maksimal 10 jam per minggu",
          "Dilarang bekerja sama sekali dalam kondisi apapun"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Undang-undang keimigrasian Jepang menetapkan batas legal arubaito mahasiswa asing adalah 28 jam per minggu (週28時間以内)."
      }
    ]
  },
  "jp-full": {
    "id": "test-jp-full",
    "title": "Ujian Simulasi Lengkap Target Capaian Kuliah Jepang (50 Soal Lengkap)",
    "description": "Evaluasi menyeluruh 50 soal berstandar resmi: 10 Soal PG, 10 Soal Essai, 5 Soal Sambung Kata, 10 Soal Artikan, dan 15 Soal Analisis Bebas.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-jp-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Dalam etiket Keigo, bentuk kata kerja Sonkeigo (menghormati lawan bicara) yang tepat untuk perbuatan dosen 'membaca naskah proposal mahasiswa' adalah:",
        "targetSentence": "先生、私の研究計画書を____いただけましたでしょうか。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "拝見して (haiken shite) — membaca / melihat (bentuk merendah Kenjougo untuk diri sendiri)",
          "ご覧になって (goran ni natte) — membaca / melihat (bentuk hormat Sonkeigo untuk dosen)",
          "読まれてきて (yomarete kite) — dibaca lalu datang (bentuk pasif tidak lazim)",
          "見せて (misete) — memperlihatkan (bentuk kasual)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "ご覧になる (goran ni naru) adalah bentuk Sonkeigo (menghormati tindakan dosen). Sedangkan 拝见する (haiken suru) adalah Kenjougo (merendahkan diri sendiri)."
      },
      {
        "id": "q-jp-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Sebaliknya, bentuk Kenjougo (merendahkan diri sendiri) saat mahasiswa menyatakan telah 'membaca buku karya profesor' adalah:",
        "targetSentence": "先生の最新のご著書を昨晩、確かに____。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "ご覧になりました (goran ni narimashita) — beliau telah membaca (Sonkeigo)",
          "お読みになられました (oyomi ni nararemashita) — beliau telah membaca (hormat ganda)",
          "拝見いたしました (haiken itashimashita) — saya telah membaca dengan hormat (Kenjougo)",
          "見ちゃいました (micha imashita) — sudah telanjur melihat (ragam lisan santai)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "拝見いたしました adalah bentuk Kenjougo resmi yang digunakan saat merendahkan tindakan diri sendiri di hadapan profesor/atasan."
      },
      {
        "id": "q-jp-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah cara baca Kanji resmi yang tepat untuk istilah akademik '履修 (pengambilan mata kuliah)' dan '把握 (pemahaman situasi)':",
        "targetSentence": "履修登録の要件を正確に把握してください。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "ふしゅう (fushū — bacaan salah) & はそく (hasoku — bacaan salah)",
          "りしょう (rishō — bacaan salah) & ばあく (ba'aku — bacaan salah)",
          "はいしゅう (haishū — bacaan salah) & はくあ (hakua — bacaan salah)",
          "りしゅう (rishū — pengambilan mata kuliah) & はあく (ha'aku — pemahaman situasi)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "履修 dibaca りしゅう (rishū) dan 把握 dibaca はあく (ha'aku)."
      },
      {
        "id": "q-jp-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah pola tata bahasa N2 yang tepat untuk menyatakan titik awal rangkaian acara besar perkuliahan:",
        "targetSentence": "本日の入学ガイダンス____、各研究室の専門セミナーが開始されます。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "を皮切りに (o kawakiri ni) — dimulai dari / diawali dengan",
          "に際して (ni saishite) — pada kesempatan / saat menghadapi",
          "を通じて (o tsūjite) — melalui / sepanjang",
          "を抜きにして (o nuki ni shite) — dengan mengesampingkan / tanpa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "〜を皮切りに (o kawakiri ni) berarti 'dimulai dengan... lalu disusul peristiwa-peristiwa penting lainnya'."
      },
      {
        "id": "q-jp-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Dalam penulisan Proposal Riset (研究計画書) dan Skripsi (論文) di Jepang, gaya bahasa akhir kalimat yang WAJIB digunakan adalah:",
        "audioVoiceLang": "ja-JP",
        "options": [
          "です・ます調 (desu/masu) — ragam sopan umum (untuk surat/percakapan)",
          "である調 (da/de aru: 〜である, 〜だ) — ragam tulis ilmiah objektif (wajib untuk skripsi/proposal)",
          "カジュアル会話調 — ragam percakapan kasual sehari-hari",
          "方言調 — ragam dialek daerah"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Seluruh karya ilmiah di universitas Jepang wajib ditulis dalam である調 (da/de aru). Dilarang keras menggunakan です・ます調."
      },
      {
        "id": "q-jp-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Dalam ujian membaca cepat akademik (Dokkai), konjungsi yang berfungsi menyajikan data perbandingan kontras berimbang adalah:",
        "targetSentence": "国内消費が低迷している____、海外市場における売上は急速に拡大している。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "したがって (shitagatte) — oleh karena itu (konklusi kausal)",
          "すなわち (sunawachi) — yaitu / dengan kata lain",
          "一方で (ippō de) — di sisi lain / sebaliknya (kontras berimbang)",
          "つまり (tsumari) — intinya / singkatnya"
        ],
        "correctAnswerIndex": 2,
        "explanation": "〜一方で (ippō de: di satu sisi... di sisi lain...) membandingkan dua situasi yang saling bertolak belakang secara berimbang."
      },
      {
        "id": "q-jp-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Ungkapan penolakan sopan ala Jepang saat pihak jurusan tidak dapat memenuhi permintaan di luar ketentuan adalah:",
        "targetSentence": "誠に申し訳ございませんが、締め切り後の提出は受理____。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "いたしかねません (itashikanemasen) — berisiko dapat terjadi (makna kemungkinan negatif)",
          "できませんよ (dekimasen yo) — tidak bisa lho (lisan langsung)",
          "やりません (yarimasen) — tidak mau mengerjakan (kasar/langsung)",
          "いたしかねます (itashikanemasu) — mohon maaf, kami tidak dapat melakukannya (penolakan formal)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "〜かねます (〜kanemasu: sulit/tidak dapat kami lakukan) adalah eufemisme formal resmi dalam korespondensi administrasi Jepang."
      },
      {
        "id": "q-jp-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Istilah resmi untuk 'Satuan Kredit Semester (SKS)' dalam sistem akademik Jepang adalah:",
        "audioVoiceLang": "ja-JP",
        "options": [
          "単位 (tan'i) — Satuan Kredit Semester (SKS)",
          "点数 (tensū) — skor / poin nilai ujian",
          "等級 (tōkyū) — kelas / tingkatan mutu",
          "学年 (gakunen) — tingkat tahun ajaran"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Di universitas Jepang, bobot kredit perkuliahan disebut 単位 (tan'i). Contoh: 履修登録で20単位を取得する."
      },
      {
        "id": "q-jp-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pola tata bahasa tingkat mahir JLPT N1 '〜極まりない' (kiwamarinai) memiliki arti:",
        "targetSentence": "研究データの一部を故意に改ざんする行為は、研究者として無責任____。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "にすぎない (ni suginai: hanya sekadar)",
          "極まりない (kiwamarinai: sangat tidak bertanggung jawab tak ada batasnya)",
          "ほかはない (hoka wa nai: tidak ada pilihan lain)",
          "にこしたことはない (ni koshita koto wa nai: lebih baik)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "〜極まりない (kiwamarinai) menyatakan derajat puncak kemutlakan suatu sifat ekstrem yang tidak dapat ditoleransi."
      },
      {
        "id": "q-jp-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Kalimat penutup surat/email paling standar dan berbobot sopan tinggi saat meminta bantuan bimbingan kepada dosen adalah:",
        "audioVoiceLang": "ja-JP",
        "options": [
          "じゃあ、お返事待ってますね！よろしく！ — Kalau begitu, saya tunggu balasannya ya! Salam!",
          "早く返信してください、困っています。 — Tolong cepat balas, saya sedang kesulitan.",
          "ご多忙の折、大変恐縮ではございますが、何卒よろしくお願い申し上げます。 — Di tengah kesibukan Profesor, dengan segala kerendahan hati saya memohon bimbingan Anda.",
          "それではバイバイ、また来週。 — Kalau begitu dadah, sampai minggu depan."
        ],
        "correctAnswerIndex": 2,
        "explanation": "Frasa penutup standar Keigo: 'ご多忙の折、大変恐縮ではございますが、何卒よろしくお願い申し上げます' (Di tengah kesibukan Anda, mohon maaf merepotkan, mohon bimbingannya)."
      },
      {
        "id": "q-jp-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "研究データを改ざんして論文を発表するなど、研究者として無責任極まりない行為であり、到底容認できない。 (Kenkyū dēta o kaizan shite ronbun o happyō suru nado, kenkyūsha to shite musekinin kiwamarinai kōi de ari, tōtei yōnin dekinai.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Tindakan seperti memanipulasi data riset lalu mempublikasikannya dalam makalah adalah perbuatan yang teramat sangat tidak bertanggung jawab bagi seorang peneliti, dan sama sekali tidak dapat ditoleransi.",
        "keywords": [
          "tindakan",
          "memanipulasi",
          "data",
          "riset"
        ],
        "explanation": "Kalimat akademik pola Derajat Ekstrem Bahasa Tulis: 〜極まりない (kiwamarinai) & 〜極まる (kiwamaru): '研究データを改ざんして論文を発表するなど、研究者として無責任極まりない行為であり、到底容認できない。' diterjemahkan secara akurat menjadi 'Tindakan seperti memanipulasi data riset lalu mempublikasikannya dalam makalah adalah perbuatan yang teramat sangat tidak bertanggung jawab bagi seorang peneliti, dan sama sekali tidak dapat ditoleransi.'."
      },
      {
        "id": "q-jp-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "世界的人気バンドの来日ツアーは、来月5日の東京ドーム公演を皮切りに全国6大ドームで開催されます。 (Sekai-teki ninki bando no rainichi tsuā wa, raigetsu itsuka no Tōkyō Dōmu kōen o kawakiri ni zenkoku rokudai dōmu de kaisai saremasu.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Tur kedatangan grup musik terkenal dunia ke Jepang akan diselenggarakan di 6 stadion kubah nasional, diawali dengan konser Tokyo Dome pada tanggal 5 bulan depan.",
        "keywords": [
          "kedatangan",
          "grup",
          "musik",
          "terkenal"
        ],
        "explanation": "Kalimat akademik pola Titik Tolak Rangkaian Peristiwa: 〜を皮切りに (o kawakiri ni): '世界的人気バンドの来日ツアーは、来月5日の東京ドーム公演を皮切りに全国6大ドームで開催されます。' diterjemahkan secara akurat menjadi 'Tur kedatangan grup musik terkenal dunia ke Jepang akan diselenggarakan di 6 stadion kubah nasional, diawali dengan konser Tokyo Dome pada tanggal 5 bulan depan.'."
      },
      {
        "id": "q-jp-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "机上の空論ではなく、被災地の厳しい実情に即した迅速な復興支援策を策定すべきである。 (Kijō no kūron dewa naku, hisaichi no kibishii jitsujō ni sokushite jinsoku na fukkō shiensaku o sakutei subeki de aru.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Bukan sekadar teori hampa di atas meja, semestinya kita merumuskan kebijakan bantuan rekonstruksi yang cepat dan selaras persis dengan kondisi riil korban bencana di lapangan.",
        "keywords": [
          "sekadar",
          "teori",
          "hampa",
          "atas"
        ],
        "explanation": "Kalimat akademik pola Kesesuaian Ketat terhadap Kaidah: 〜に即して (ni sokushite): '机上の空論ではなく、被災地の厳しい実情に即した迅速な復興支援策を策定すべきである。' diterjemahkan secara akurat menjadi 'Bukan sekadar teori hampa di atas meja, semestinya kita merumuskan kebijakan bantuan rekonstruksi yang cepat dan selaras persis dengan kondisi riil korban bencana di lapangan.'."
      },
      {
        "id": "q-jp-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "台風の接近に伴う交通網の混乱とお客様の安全を鑑みて、本日の公演はやむを得ず中止とさせていただきます。 (Taifū no sekkin ni tomonau kōtsūmō no konran to okyakusama no anzen o kangamite, honjitsu no kōen wa yamu o ezu chūshi to sasete itadakimasu.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Menimbang kekacauan jaringan transportasi akibat mendekatnya topan dan keselamatan para pengunjung, pertunjukan hari ini dengan amat berat hati terpaksa kami batalkan.",
        "keywords": [
          "menimbang",
          "kekacauan",
          "jaringan",
          "transportasi"
        ],
        "explanation": "Kalimat akademik pola Mempertimbangkan Situasi Luas: 〜を鑑みて (o kangamite): '台風の接近に伴う交通網の混乱とお客様の安全を鑑みて、本日の公演はやむを得ず中止とさせていただきます。' diterjemahkan secara akurat menjadi 'Menimbang kekacauan jaringan transportasi akibat mendekatnya topan dan keselamatan para pengunjung, pertunjukan hari ini dengan amat berat hati terpaksa kami batalkan.'."
      },
      {
        "id": "q-jp-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "母校を巣立ち社会へと羽ばたく若者たちの前途に、幸多からんことを祈ってやみません。 (Bokō o sudachi shakai e to habataku wakamonotachi no zento ni, sachi ōkaran koto o inotte yamimasen.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Saya tiada henti-hentinya memanjatkan doa dari lubuk hati terdalam agar limpahan kebahagiaan menyertai masa depan para pemuda yang meninggalkan almamater dan mengepakkan sayap menuju masyarakat.",
        "keywords": [
          "tiada",
          "henti",
          "hentinya",
          "memanjatkan"
        ],
        "explanation": "Kalimat akademik pola Perasaan Emosional Mendalam: 〜てやまない (te yamanai) & 〜を禁じ得ない (o kinji enai): '母校を巣立ち社会へと羽ばたく若者たちの前途に、幸多からんことを祈ってやみません。' diterjemahkan secara akurat menjadi 'Saya tiada henti-hentinya memanjatkan doa dari lubuk hati terdalam agar limpahan kebahagiaan menyertai masa depan para pemuda yang meninggalkan almamater dan mengepakkan sayap menuju masyarakat.'."
      },
      {
        "id": "q-jp-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "事故の衝撃で足を骨折してしまい、走ることはおろか、一人で自立して立ち上がることさえできません。 (Jiko no shōgeki de ashi o kossetsu shite shimai, hashiru koto wa oroka, hitori de jiritsu shite tachiagaru koto sae dekimasen.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Kaki saya patah akibat benturan kecelakaan, jangankan untuk berlari, untuk berdiri tegak mandiri seorang diri saja bahkan tak berdaya.",
        "keywords": [
          "kaki",
          "patah",
          "akibat",
          "benturan"
        ],
        "explanation": "Kalimat akademik pola Mengesampingkan yang Ekstrem: 〜はおろか (wa oroka) & 〜ならいざ知らず (nara iza shirazu): '事故の衝撃で足を骨折してしまい、走ることはおろか、一人で自立して立ち上がることさえできません。' diterjemahkan secara akurat menjadi 'Kaki saya patah akibat benturan kecelakaan, jangankan untuk berlari, untuk berdiri tegak mandiri seorang diri saja bahkan tak berdaya.'."
      },
      {
        "id": "q-jp-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "彼が数々の逆境を乗り越えて偉業を達成できたのは、不撓不屈の信念を持ち続けたからにほかならない。 (Kare ga kazukazu no gyakkyō o norikoete igyō o tassei dekita no wa, futōfukutsu no shinnen o mochitsuzuketa kara ni hokanaranai.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Keberhasilannya melampaui berbagai rintangan nestapa dan menorehkan prestasi agung tiada lain dan tak bukan adalah semata-mata karena ia terus menggenggam keyakinan yang pantang menyerah.",
        "keywords": [
          "keberhasilannya",
          "melampaui",
          "berbagai",
          "rintangan"
        ],
        "explanation": "Kalimat akademik pola Kalimat Formal Akademis: 〜にほかならない (ni hokanaranai) & 〜とされている: '彼が数々の逆境を乗り越えて偉業を達成できたのは、不撓不屈の信念を持ち続けたからにほかならない。' diterjemahkan secara akurat menjadi 'Keberhasilannya melampaui berbagai rintangan nestapa dan menorehkan prestasi agung tiada lain dan tak bukan adalah semata-mata karena ia terus menggenggam keyakinan yang pantang menyerah.'."
      },
      {
        "id": "q-jp-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "大地震による原子力発電所の事故により、数万人もの住民が住み慣れた故郷からの避難生活を余儀なくされました。 (Dai-jishin ni yoru genshiryoku hatsudensho no jiko ni yori, sūman-nin mono jūmin ga suminareta kokyō kara no hinan seikatsu o yogi naku saremashita.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Akibat kecelakaan instalasi pembangkit listrik tenaga nuklir yang dipicu gempa dahsyat, puluhan ribu warga terpaksa harus menjalani hidup mengungsi meninggalkan tanah kelahiran yang mereka cintai.",
        "keywords": [
          "akibat",
          "kecelakaan",
          "instalasi",
          "pembangkit"
        ],
        "explanation": "Kalimat akademik pola Tekanan Keadaan yang Tak Terelakkan: 〜を余儀なくされる (o yogi naku sareru): '大地震による原子力発電所の事故により、数万人もの住民が住み慣れた故郷からの避難生活を余儀なくされました。' diterjemahkan secara akurat menjadi 'Akibat kecelakaan instalasi pembangkit listrik tenaga nuklir yang dipicu gempa dahsyat, puluhan ribu warga terpaksa harus menjalani hidup mengungsi meninggalkan tanah kelahiran yang mereka cintai.'."
      },
      {
        "id": "q-jp-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "マニュアル通りの画一的な対応にとらわれず、現場の状況に応じて臨機応変に対処する柔軟性が求められる。 (Manyuarudōri no kakuitsuteki na taiō ni torawarezu, genba no jōkyō ni ōjite rinki-ōhen ni taisho suru jūnansei ga motomerareru.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Tanpa terpaku pada respons seragam yang kaku sesuai manual, kita dituntut memiliki kelenturan untuk bertindak secara luwes menyesuaikan diri dengan situasi di lapangan.",
        "keywords": [
          "tanpa",
          "terpaku",
          "respons",
          "seragam"
        ],
        "explanation": "Kalimat akademik pola Yojijukugo (Idiom Empat Kanji) dalam Diskursus Resmi N1: 'マニュアル通りの画一的な対応にとらわれず、現場の状況に応じて臨機応変に対処する柔軟性が求められる。' diterjemahkan secara akurat menjadi 'Tanpa terpaku pada respons seragam yang kaku sesuai manual, kita dituntut memiliki kelenturan untuk bertindak secara luwes menyesuaikan diri dengan situasi di lapangan.'."
      },
      {
        "id": "q-jp-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "本研究は、急速に進展する生成AI技術の倫理的課題をめぐり、国内外の法制度と照らし合わせつつ、現実に即したガバナンスモデルの構築を目指すものである。 (Hon-kenkyū wa, kyūsoku ni shinten suru seisei Ē-ai gijutsu no rinriteki kadai o meguri, kokunaigai no hōseido to terashiawasetsutsu, genjitsu ni sokushita gabanansu moderu no kōchiku o mezasu mono de aru.)",
        "audioVoiceLang": "ja-JP",
        "sampleAnswer": "Penelitian ini, seputar tantangan etika teknologi AI generatif yang berkembang pesat, bertujuan membangun model tata kelola yang selaras dengan kenyataan lapangan sembari menyandingkannya dengan sistem hukum domestik dan internasional.",
        "keywords": [
          "penelitian",
          "seputar",
          "tantangan",
          "etika"
        ],
        "explanation": "Kalimat akademik pola Mahakarya Kelulusan JLPT N1 & Bahasa Jepang Akademik Perguruan Tinggi (Capstone Unit): '本研究は、急速に進展する生成AI技術の倫理的課題をめぐり、国内外の法制度と照らし合わせつつ、現実に即したガバナンスモデルの構築を目指すものである。' diterjemahkan secara akurat menjadi 'Penelitian ini, seputar tantangan etika teknologi AI generatif yang berkembang pesat, bertujuan membangun model tata kelola yang selaras dengan kenyataan lapangan sembari menyandingkannya dengan sistem hukum domestik dan internasional.'."
      },
      {
        "id": "q-jp-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat permohonan bimbingan proposal riset kepada profesor:",
        "scrambledWords": [
          "賜りたく存じます",
          "教授のご指導を",
          "研究計画書につきまして"
        ],
        "correctOrder": [
          "研究計画書につきまして",
          "教授のご指導を",
          "賜りたく存じます"
        ],
        "targetSentence": "研究計画書につきまして、教授のご指導を賜りたく存じます。",
        "audioVoiceLang": "ja-JP",
        "explanation": "Topik bahasan (研究計画書につきまして) + Objek penghormatan (教授のご指導を) + Verba Kenjougo permohonan (賜りたく存じます: sudilah kiranya memberi bimbingan)."
      },
      {
        "id": "q-jp-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi pengumuman batas waktu registrasi mata kuliah (KRS):",
        "scrambledWords": [
          "完了してください",
          "今学期の履修登録は",
          "4月20日までに"
        ],
        "correctOrder": [
          "今学期の履修登録は",
          "4月20日までに",
          "完了してください"
        ],
        "targetSentence": "今学期の履修登録は、4月20日までに完了してください。",
        "audioVoiceLang": "ja-JP",
        "explanation": "Topik (今学期の履修登録は) + Batas waktu tegas (4月20日までに) + Instruksi tindakan (完了してください)."
      },
      {
        "id": "q-jp-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat kesiapan presentasi seminar riset:",
        "scrambledWords": [
          "行う予定です",
          "先行研究の発表を",
          "来週のゼミにて"
        ],
        "correctOrder": [
          "来週のゼミにて",
          "先行研究の発表を",
          "行う予定です"
        ],
        "targetSentence": "来週のゼミにて、先行研究の発表を行う予定です。",
        "audioVoiceLang": "ja-JP",
        "explanation": "Keterangan waktu & tempat (来週のゼミにて) + Objek presentasi riset terdahulu (先行研究の発表を) + Jadwal rencana (行う予定です)."
      },
      {
        "id": "q-jp-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat persiapan pendaftaran beasiswa MEXT:",
        "scrambledWords": [
          "準備しております",
          "文部科学省の奨学金に",
          "応募するための書類を"
        ],
        "correctOrder": [
          "文部科学省の奨学金に",
          "応募するための書類を",
          "準備しております"
        ],
        "targetSentence": "文部科学省の奨学金に応募するための書類を準備しております。",
        "audioVoiceLang": "ja-JP",
        "explanation": "Tujuan beasiswa (文部科学省の奨学金に) + Frasa dokumen persyaratan (応募するための書類を) + Kata kerja progresif sopan (準備しております)."
      },
      {
        "id": "q-jp-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi instruksi penutupan laboratorium riset:",
        "scrambledWords": [
          "施錠してください",
          "必ず安全確認を行い",
          "実験終了後は"
        ],
        "correctOrder": [
          "実験終了後は",
          "必ず安全確認を行い",
          "施錠してください"
        ],
        "targetSentence": "実験終了後は、必ず安全確認を行い施錠してください。",
        "audioVoiceLang": "ja-JP",
        "explanation": "Waktu pasca-eksperimen (実験終了後は) + Tindakan inspeksi keselamatan (必ず安全確認を行い) + Perintah penguncian pintu (施錠してください)."
      },
      {
        "id": "q-jp-ar-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan bahasa Indonesia yang tepat untuk istilah akademik: '履修登録 (Rishū tōroku)':",
        "targetSentence": "教務課のウェブサイトにて今学期の履修登録を行ってください。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Pembayaran uang pangkal gedung perkuliahan",
          "Pendaftaran rencana studi / pengisian KRS mata kuliah semester",
          "Pencetakan kartu perpustakaan universitas",
          "Permohonan cuti kuliah sementara"
        ],
        "correctAnswerIndex": 1,
        "explanation": "履修 (pengambilan mata kuliah) + 登録 (registrasi) = pengisian Kartu Rencana Studi (KRS) resmi."
      },
      {
        "id": "q-jp-ar-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah riset: '先行研究 (Senkō kenkyū)':",
        "targetSentence": "先行研究の批判的検討を通じて、本論文の独自性を明確にする。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Biaya perjalanan dinas riset luar negeri",
          "Hasil eksperimen yang gagal di laboratorium",
          "Studi / penelitian terdahulu yang relevan dalam tinjauan pustaka",
          "Rencana jadwal wisuda kelulusan mahasiswa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "先行 (terdahulu) + 研究 (penelitian) = literatur / penelitian terdahulu yang menjadi pijakan riset."
      },
      {
        "id": "q-jp-ar-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah: '参考文献 (Sankō bunken)':",
        "targetSentence": "引用したすべての書籍や論文を参考文献リストに記載しなければならない。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Brosur panduan beasiswa pemerintah",
          "Catatan kuliah harian mahasiswa",
          "Surat keterangan kelakuan baik",
          "Daftar pustaka / literatur rujukan ilmiah"
        ],
        "correctAnswerIndex": 3,
        "explanation": "参考文献 (sankō bunken) adalah daftar pustaka / bibliografi yang dirujuk dalam karya tulis ilmiah."
      },
      {
        "id": "q-jp-ar-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan jabatan pembimbing riset: '指導教員 (Shidō kyōin)':",
        "targetSentence": "研究計画の内容について、事前に指導教員の承認を得る必要がある。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Dosen pembimbing akademik / profesor pembimbing tugas akhir",
          "Petugas kebersihan laboratorium",
          "Kepala asrama mahasiswa internasional",
          "Instruktur pelatihan olahraga kampus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "指導 (bimbingan) + 教員 (tenaga pendidik) = dosen pembimbing akademik."
      },
      {
        "id": "q-jp-ar-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat untuk pengumuman jadwal: '休講 (Kyūkō)' dan '補講 (Hokō)':",
        "targetSentence": "明日の経済学講義は休講となり、来週水曜日に補講が行われます。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Ujian tengah semester dan ujian susulan",
          "Kuliah ditiadakan (kosong) dan kuliah pengganti",
          "Orientasi mahasiswa baru dan temu alumni",
          "Praktikum laboratorium dan seminar proposal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "休講 = perkuliahan ditiadakan; 補講 = kelas kuliah pengganti."
      },
      {
        "id": "q-jp-ar-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti dari karya akhir pascasarjana: '修士論文 (Shūshi ronbun)':",
        "targetSentence": "修士論文の口頭試問を無事に通過し、修了が認定された。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Skripsi sarjana muda jenjang D3",
          "Disertasi doktoral jenjang S3",
          "Tesis magister / tugas akhir jenjang S2",
          "Laporan magang kerja lapangan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "修士 (magister / S2) + 論文 (karya tulis ilmiah) = tesis magister S2."
      },
      {
        "id": "q-jp-ar-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan dokumen: '成績証明書 (Seiseki shōmeisho)':",
        "targetSentence": "大学院入試の出願書類として、出身大学の成績証明書を提出した。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Ijazah kelulusan sementara",
          "Surat bukti pembayaran SPP",
          "Pas foto ukuran paspor",
          "Transkrip nilai akademik resmi"
        ],
        "correctAnswerIndex": 3,
        "explanation": "成績 (nilai hasil studi) + 証明書 (surat keterangan resmi) = transkrip nilai akademik."
      },
      {
        "id": "q-jp-ar-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan prosedur imigrasi: '在留資格更新 (Zairyū shikaku kōshin)':",
        "targetSentence": "在留期間満了日の三か月前から在留資格更新の申請が可能である。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Perpanjangan izin status kependudukan / visa pelajar di kantor imigrasi Jepang",
          "Pembuatan rekening bank pos Jepang",
          "Pendaftaran asuransi kesehatan nasional",
          "Lapor diri ke kedutaan besar Republik Indonesia"
        ],
        "correctAnswerIndex": 0,
        "explanation": "在留資格 (status izin tinggal) + 更新 (pembaruan / perpanjangan)."
      },
      {
        "id": "q-jp-ar-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti status studi: '研究生 (Kenkyūsei)':",
        "targetSentence": "大学院修士課程の本科生に入学する前、半年間研究生として在籍した。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Dosen tamu dari luar negeri",
          "Mahasiswa peneliti non-gelar persiapan masuk program magister/doktoral",
          "Alumni yang sudah lulus wisuda",
          "Asisten administrasi kantor jurusan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "研究生 adalah mahasiswa riset non-degree yang belajar di bawah bimbingan profesor sebelum menempuh ujian seleksi masuk reguler (Insei)."
      },
      {
        "id": "q-jp-ar-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah izin kerja: '資格外活動許可 (Shikakugai katsudō kyoka)':",
        "targetSentence": "留学生がアルバイトをする場合、入国管理局から資格外活動許可を受けなければならない。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Izin mengikuti ujian surat izin mengemudi mobil",
          "Izin perjalanan liburan ke luar negeri",
          "Izin resmi bekerja paruh waktu (arubaito) di luar status visa pelajar (maksimal 28 jam/minggu)",
          "Sertifikat kelulusan uji kecakapan bahasa"
        ],
        "correctAnswerIndex": 2,
        "explanation": "資格外活動許可 adalah cap izin resmi dari imigrasi yang memperbolehkan pemegang visa pelajar bekerja paruh waktu secara legal."
      },
      {
        "id": "q-jp-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca teks pengumuman evaluasi perkuliahan berikut:\n'本講義の評価基準は、期末筆記試験60%、各回小レポート30%、出席率10%とする。なお、小レポートは締め切りを過ぎた場合、理由の如何を問わず一切採点対象としない。また、出席回数が全講義の3分の2に満たない者は自動的に不合格（D評価）となる。'\n\nBerapa batas minimal kehadiran agar mahasiswa tidak otomatis dinyatakan tidak lulus (tidak mendapat nilai D)?",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Minimal hadir 50% dari total kuliah",
          "Cukup hadir saat ujian akhir semester saja",
          "Minimal hadir 100% tanpa pernah absen satu kali pun",
          "Minimal hadir 2/3 (dua pertiga) dari total sesi perkuliahan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Teks menyatakan: '出席回数が全講義の3分の2に満たない者は自動的に不合格' (Kurang dari 2/3 kehadiran otomatis tidak lulus)."
      },
      {
        "id": "q-jp-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca teks aturan perpustakaan kampus berikut:\n'学部生の図書貸出冊数は最大5冊まで、期間は14日間です。大学院生は最大15冊まで、期間は30日間貸出可能です。返却期限日を過ぎた図書がある場合、遅延日数分だけ新たな貸出および予約が禁止されます。'\n\nApa sanksi keterlambatan pengembalian buku di perpustakaan tersebut?",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Pemblokiran peminjaman dan reservasi buku baru selama jumlah hari keterlambatan",
          "Denda uang tunai sebesar seribu yen per hari",
          "Pencabutan status kartu mahasiswa",
          "Kewajiban membeli buku yang sama sebanyak dua eksemplar"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Sanksi dalam teks: '遅延日数分だけ新たな貸出および予約が禁止されます' (Dilarang meminjam selama jumlah hari telat)."
      },
      {
        "id": "q-jp-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca wacana ketentuan beasiswa MEXT (Pemerintah Jepang):\n'文部科学省国費外国人留学生は、毎月所定の期日までに大学留学生支援窓口にて在籍簿に自筆署名（サイン）を行わなければならない。出張・病気等の正当な理由なく署名を行わなかった月は、当月分の奨学金が支給されない。'\n\nApa yang wajib dilakukan mahasiswa setiap bulan agar uang saku beasiswa MEXT cair?",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Mengirim email laporan pengeluaran belanja harian ke kementerian",
          "Menandatangani buku presensi kehadiran (在籍簿) secara langsung di loket kampus",
          "Menyerahkan salinan slip gaji pekerjaan paruh waktu",
          "Mengikuti ujian wawancara online setiap awal bulan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Penerima beasiswa MEXT wajib hadir menandatangani buku bukti keberadaan di Jepang (在籍確認のサイン) setiap bulan."
      },
      {
        "id": "q-jp-bb-4",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio pengumuman sidang tesis pascasarjana berikut:",
        "targetSentence": "修士論文発表会は来月十日、第一共同セミナー室にて午前九時半より開始いたします。発表時間は質疑応答を含め一人三十分です。発表者は開始十五分前までにプロジェクターの接続確認を完了してください。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Sidang tesis dibatalkan karena renovasi proyektor ruang seminar",
          "Ujian lisan dipindahkan ke ruang dosen pembimbing masing-masing",
          "Sidang tesis dimulai tanggal 10 bulan depan jam 09.30, durasi 30 menit per orang, dan wajib cek proyektor 15 menit sebelumnya",
          "Presentasi berlangsung selama 2 jam tanpa sesi tanya jawab"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Pengumuman: tanggal 10 jam 09.30, ruang seminar 1, waktu 30 menit (termasuk tanya jawab), dan cek proyektor 15 menit sebelum mulai."
      },
      {
        "id": "q-jp-bb-5",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio aturan keselamatan laboratorium berikut:",
        "targetSentence": "有機溶媒および酸性試薬を使用した後は、必ずドラフトチャンバー内で適切な廃液容器に分別廃棄してください。誤って一般下水に流すことは法律により厳禁されています。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Larangan menyalakan lampu laboratorium setelah jam lima sore",
          "Petunjuk cara mencampur asam sulfat pekat dengan air keran",
          "Pemberitahuan pemadaman listrik berkala di gedung sains",
          "Kewajiban membuang limbah reagen kimia dan pelarut organik ke jerigen pemilahan khusus di dalam fume hood (lemari asam)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Instruksi: limbah pelarut organik wajib dibuang terpisah di fume hood (ドラフトチャンバー内), dilarang dibuang ke saluran air biasa."
      },
      {
        "id": "q-jp-bb-6",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio percakapan dengan petugas bagian kemahasiswaan (教務係):",
        "targetSentence": "先ほど申請いただいた健康診断証明書と在学証明書の発行手続きが完了しました。自動発行機に学生証をタッチしていただければ、本日中に印刷可能です。",
        "audioVoiceLang": "ja-JP",
        "options": [
          "Surat keterangan sehat dan surat mahasiswa aktif sudah bisa dicetak langsung di mesin otomatis menggunakan kartu mahasiswa",
          "Kartu tanda mahasiswa Anda ditolak karena belum membayar uang semester",
          "Pemeriksaan kesehatan tahunan akan diadakan lusa di aula olahraga",
          "Surat pengantar visa baru bisa diambil minggu depan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Petugas menginformasikan sertifikat sudah siap dicetak di mesin mandiri (自動発行機) dengan menempelkan kartu mahasiswa."
      },
      {
        "id": "q-jp-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah ungkapan tata bahasa N2 yang tepat untuk melengkapi hubungan kausalitas simultan:\n'科学技術の急速な進歩____、従来のプライバシー保護法の見直しが迫られている。'",
        "audioVoiceLang": "ja-JP",
        "options": [
          "をおいて (o oite) — selain... tidak ada yang lain",
          "に伴い (ni tomonai) — seiring dengan / bersamaan dengan",
          "に反して (ni hanshite) — bertentangan dengan / berlawanan dengan",
          "を皮切りに (o kawakiri ni) — diawali dengan / dimulai dari"
        ],
        "correctAnswerIndex": 1,
        "explanation": "〜に伴い (ni tomonai: seiring dengan berkembangnya...) menyatakan perubahan A yang memicu perubahan B secara simultan."
      },
      {
        "id": "q-jp-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah bentuk tata bahasa yang tepat untuk menyatakan ketidaksanggupan psikologis/etika seorang peneliti:\n'研究不正を目の当たりにした以上、研究者としての良心から黙認する____。'",
        "audioVoiceLang": "ja-JP",
        "options": [
          "わけがない (wake ga nai: mustahil kenyataannya)",
          "に違いない (ni chigainai: pasti)",
          "わけにはいかない (wake ni wa ikanai: tidak mungkin bisa membiarkannya secara nurani)",
          "にすぎない (ni suginai: hanya sekadar)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "〜わけにはいかない menyatakan bahwa dari segi etika moral / norma sosial, tindakan tersebut tidak boleh dilakukan."
      },
      {
        "id": "q-jp-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah bentuk tata bahasa yang menyatakan keharusan tanpa pilihan lain:\n'台風の接近により交通機関が全面的に麻痺したため、本日の学会発表を中止____。'",
        "audioVoiceLang": "ja-JP",
        "options": [
          "するはずがなかった (suru hazu ga nakatta) — tidak mungkin dijadwalkan terjadi",
          "したくてたまらなかった (shitakute tamaranakatta) — sangat ingin melakukannya",
          "することになったわけではない (suru koto ni natta wake dewa nai) — bukan berarti diputuskan demikian",
          "せざるを得なかった (sezaru o enakatta) — terpaksa membatalkan tanpa pilihan lain"
        ],
        "correctAnswerIndex": 3,
        "explanation": "〜ざるを得ない (sezaru o enai) berarti 'terpaksa harus melakukan hal tersebut karena tidak ada pilihan lain yang memungkinkan'."
      },
      {
        "id": "q-jp-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Manakah perbedaan makna yang BENAR antara '〜わけではない' dan '〜わけがない'?",
        "options": [
          "〜わけではない berarti penyangkalan sebagian ('bukan berarti selalu demikian'), sedangkan 〜わけがない berarti penyangkalan mutlak ('mustahil sekali')",
          "Keduanya memiliki arti yang sama persis tanpa perbedaan",
          "〜わけではない digunakan untuk masa depan, sedangkan 〜わけがない untuk masa lalu",
          "〜わけがない adalah bahasa slang anak muda, sedangkan 〜わけではない bahasa resmi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "〜わけではない = partial denial (tidak selalu); 〜わけがない = absolute impossibility (mustahil/tidak mungkin)."
      },
      {
        "id": "q-jp-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam wawancara seleksi pascasarjana, penguji menanyakan: 'Jika hipotesis Anda ternyata keliru di tengah penelitian, apa yang akan Anda lakukan?'. Jawaban paling tepat adalah:",
        "options": [
          "Tetap memaksakan data agar sesuai dengan hipotesis awal",
          "Segera meninjau kembali variabel eksperimen, menganalisis faktor penyebab deviasi data bersama profesor pembimbing, dan merumuskan pendekatan alternatif",
          "Langsung menyerah dan berganti topik penelitian baru",
          "Menyalahkan alat ukur laboratorium yang sudah tua"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Sikap ilmiah yang matang mengedepankan analisis penyebab anomali data (データ偏差の要因分析) dan pemecahan masalah objektif."
      },
      {
        "id": "q-jp-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Di lingkungan universitas Jepang, bagaimana cara memanggil profesor pembimbing Anda saat bertegur sapa secara langsung?",
        "options": [
          "〇〇教授 (〇〇-kyōju) — gelar jabatan tertulis pada dokumen/surat resmi",
          "〇〇さん (〇〇-san) — panggilan umum antar rekan (kurang sopan untuk profesor)",
          "〇〇先生 (〇〇-sensei) — panggilan langsung yang sopan kepada dosen/profesor di kampus",
          "あなた (Anata) — Anda (tidak sopan bila digunakan kepada atasan/dosen)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Dalam percakapan langsung tatap muka, seluruh dosen wajib dipanggil dengan akhiran '〜先生' (Sensei). Sebutan 〇〇教授 lazimnya untuk ragam tulis."
      },
      {
        "id": "q-jp-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Makna dari peribahasa akademik empat karakter (四字熟語) '切磋琢磨' (Sessa takuma) adalah:",
        "options": [
          "Bekerja lembur sampai larut malam tanpa istirahat",
          "Membuang barang-barang yang sudah tidak terpakai",
          "Berdebat keras sampai bermusuhan",
          "Saling mengasah kemampuan, memacu prestasi, dan belajar bersama dengan rekan demi mencapai kualitas terbaik"
        ],
        "correctAnswerIndex": 3,
        "explanation": "切磋琢磨 (sessa takuma) adalah ungkapan yang sangat dijunjung dalam budaya laboratorium Jepang (saling mengasah dan memotivasi antarpeneliti)."
      },
      {
        "id": "q-jp-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Apa etiket penting yang harus diperhatikan saat pertama kali berkunjung ke laboratorium riset (研究室訪問 - Kenkyūshitsu Hōmon)?",
        "options": [
          "Membuat janji terlebih dahulu via email resmi, membaca publikasi profesor sebelumnya, hadir 5 menit lebih awal, dan berpakaian rapi formal (setelan jas)",
          "Langsung datang mengetuk pintu tanpa pemberitahuan sebelumnya agar terlihat bersemangat",
          "Membawa hadiah mewah mahal untuk menyogok profesor",
          "Membawa teman satu angkatan yang banyak agar ramai"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Kenkyuushitsu Houmon wajib dijadwalkan via email (アポイントメント), membaca riset profesor, hadir tepat waktu, dan berbusana formal (スーツ)."
      },
      {
        "id": "q-jp-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berapa batas maksimal jam kerja paruh waktu (arubaito) yang diizinkan oleh hukum imigrasi Jepang bagi mahasiswa asing pemegang izin resmi selama masa aktif perkuliahan?",
        "options": [
          "Bebas tanpa batas jam asalkan nilai tidak turun",
          "Maksimal 28 jam per minggu (dan hingga 40 jam per minggu saat libur panjang semester)",
          "Maksimal 10 jam per minggu",
          "Dilarang bekerja sama sekali dalam kondisi apapun"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Undang-undang keimigrasian Jepang menetapkan batas legal arubaito mahasiswa asing adalah 28 jam per minggu (週28時間以内)."
      }
    ]
  }
};

export const KOREA_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "kr-1": {
    "id": "test-kr-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Korea Selatan (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Korea Selatan.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-kr-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah tata bahasa tingkat menengah TOPIK II yang tepat untuk menyatakan dua hal positif yang saling mengakumulasi secara formal:",
        "targetSentence": "그 후보자는 뛰어난 연구 실적을 갖추었을____, 유창한 한국어 구사 능력도 겸비하고 있다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "반면에 (banmyeone: di sisi lain)",
          "바람에 (barame: akibat yang merugikan)",
          "뿐만 아니라 (ppunman anira: tidak hanya... tetapi juga...)",
          "탓에 (tase: gara-gara)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "-(으)ㄹ 뿐만 아니라 digunakan untuk menambahkan informasi pendukung sejajar (tidak hanya A, tetapi juga B)."
      },
      {
        "id": "q-kr-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah kosakata berakar karakter Hanja yang tepat untuk istilah akademik 'pendaftaran mata kuliah / pengisian KRS':",
        "targetSentence": "이번 학기 전공과목 ____ 기간은 다음 주 월요일부터 시작됩니다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "졸업증명 (joreopjeungmyeong [卒業證明]) — surat keterangan lulus / ijazah",
          "입학시험 (iphaksihyeom [入學試驗]) — ujian saringan masuk universitas",
          "출석체크 (chulseokchekeu) — pemeriksaan daftar hadir kuliah",
          "수강신청 (sugangsincheong [受講申請]) — pendaftaran rencana studi / pengisian KRS"
        ],
        "correctAnswerIndex": 3,
        "explanation": "수강신청 (受講申請: sugangsincheong) adalah istilah resmi untuk pendaftaran mata kuliah / KRS di universitas Korea."
      },
      {
        "id": "q-kr-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Dalam penulisan artikel ilmiah, bentuk kutipan tidak langsung yang paling tepat untuk mengutip temuan peneliti terdahulu adalah:",
        "targetSentence": "선행 연구에 따르면, 기후 변화가 농업 생산성에 직접적인 영향을 ____.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "미친다고 보고되었다 (michindago bogodoeeotda) — dilaporkan memberikan pengaruh (kutipan tidak langsung ilmiah)",
          "미쳐요라고 했어요 (michyeoyo-rago haesseoyo) — katanya berpengaruh (ragam lisan santai)",
          "미치네요 (michineyo) — ternyata berpengaruh ya (ekspresi lisan)",
          "미칠 것 같아요 (michil geot gat-ayo) — sepertinya akan berpengaruh (dugaan subjektif lisan)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "-(ㄴ/는)다고 보고되었다/밝혀졌다 adalah bentuk kutipan objektif pasif formal dalam makalah akademik Korea."
      },
      {
        "id": "q-kr-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Dalam esai argumentatif TOPIK II (Soal No. 54), akhiran kalimat yang WAJIB digunakan untuk menjaga nada netral ilmiah adalah:",
        "audioVoiceLang": "ko-KR",
        "options": [
          "해요체 (-아/어요) — ragam sopan percakapan sehari-hari",
          "해라체 / Plain Style (-ㄴ/는다, -았다/었다, -(으)ㅁ) — ragam tulis netral ilmiah (wajib untuk esai TOPIK & jurnal)",
          "하십시오체 (-습니다/십니까) — ragam formal lisan / presentasi",
          "반말 (-어/야) — ragam akrab tidak sopan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Esai akademik dan laporan riset Korea wajib ditulis dengan gaya netral plain style (해라체: -ㄴ/는다). Penggunaan -아요/어요 akan dikenai penalti nilai."
      },
      {
        "id": "q-kr-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah partikel penanda rujukan data yang tepat untuk teks laporan akademik:",
        "targetSentence": "통계청이 발표한 최근 조사 결과____, 1인 가구의 비율이 급증하고 있다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "에 비해서 (e bihaeseo) — dibandingkan dengan",
          "에 대하여 (e daehayeo) — mengenai / tentang",
          "에 의하면 (e uihamyeon) — berdasarkan / menurut rujukan data",
          "에 불구하고 (e bulguhago) — terlepas dari / meskipun"
        ],
        "correctAnswerIndex": 2,
        "explanation": "-에 의하면 / -에 따르면 digunakan secara formal untuk menunjukkan sumber rujukan data resmi."
      },
      {
        "id": "q-kr-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah bentuk tata bahasa sebab-akibat formal netral yang paling tepat untuk kalimat fenomena alam:",
        "targetSentence": "유례없는 집중호우____ 산사태가 발생하여 도로가 통제되었다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "느라고 (neurago: karena sibuk melakukan suatu aksi)",
          "자마자 (jamaja: segera setelah)",
          "길래 (gillae: ragam lisan santai)",
          "로 인해 (ro inhae: dikarenakan oleh / akibat)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "-(으)로 인해 adalah bentuk sebab-akibat formal tertulis tingkat tinggi untuk menjelaskan fenomena alam atau sosial."
      },
      {
        "id": "q-kr-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Konjungsi logis yang tepat untuk menarik kesimpulan akhir pada paragraf penutup esai TOPIK No. 54 adalah:",
        "targetSentence": "____ 정부와 시민사회가 긴밀히 협력하여 지속 가능한 대책을 마련해야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "따라서 (ttaraseo: oleh karena itu)",
          "그런데 (geureonde: ngomong-ngomong)",
          "하지만 (hajiman: tetapi)",
          "왜냐하면 (waenyahamyeon: karena)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'따라서' (oleh karena itu) adalah konjungsi standar penutup argumen deduktif dalam wacana esai formal."
      },
      {
        "id": "q-kr-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Istilah hukum dan etika akademik untuk tindakan ilegal menjiplak karya orang lain tanpa mencantumkan sumber adalah:",
        "audioVoiceLang": "ko-KR",
        "options": [
          "출판 (chulpan [出版: penerbitan])",
          "표절 (pyojeol [剽竊: plagiarisme])",
          "열람 (yeollam [閱覽: membaca])",
          "기부 (gibu [寄附: donasi])"
        ],
        "correctAnswerIndex": 1,
        "explanation": "표절 (pyojeol) adalah istilah hukum akademik untuk plagiarisme di perguruan tinggi Korea."
      },
      {
        "id": "q-kr-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah pasangan kata yang membedakan 'menuju/mengarah ke tujuan baik' dan 'menghindari/menolak perbuatan buruk':",
        "targetSentence": "학문적 창의성을 ____하고, 무분별한 단순 암기식 학습은 ____해야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "지양(止揚 — menghindari) - 지향(指向 — mengarah ke tujuan)",
          "가속(加速 — percepatan) - 발전(發展 — perkembangan)",
          "지향(指向 — mengarah ke tujuan positif) - 지양(止揚 — menghindari hal negatif)",
          "포기(抛棄 — menyerah) - 장려(奬勵 — mendorong/menganjurkan)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "지향하다 (指向) = mengarah ke tujuan positif; 지양하다 (止揚) = menghindari / menghentikan kebiasaan negatif."
      },
      {
        "id": "q-kr-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah format salam penutup email yang paling santun dan baku saat mengirimkan draf proposal kepada Dosen Pembimbing (지도교수님):",
        "audioVoiceLang": "ko-KR",
        "options": [
          "그럼 다음에 또 연락할게요. 안녕히 계세요! — Kalau begitu lain kali saya hubungi lagi ya. Sampai jumpa!",
          "빨리 답장 부탁드립니다. 수고하세요! — Tolong cepat balas ya. Selamat bekerja!",
          "바이바이, 다음 주에 봐요. — Dadah, sampai ketemu minggu depan.",
          "교수님의 건강과 행복을 기원합니다. 학생 [이름] 올림 (또는 드림) — Saya mendoakan kesehatan dan kebahagiaan Profesor. Hormat saya, Mahasiswa [Nama]."
        ],
        "correctAnswerIndex": 3,
        "explanation": "Salam penutup Keigo Korea: mendoakan kesehatan dosen diikuti [이름] 올림 (mempersembahkan ke atas) atau 드림."
      }
    ]
  },
  "kr-2": {
    "id": "test-kr-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Uji kemampuan menyusun esai motivasi, proposal rencana riset, etika akademik, dan korespondensi formal dengan dosen di Korea Selatan.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-kr-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "수년간의 피나는 노력과 역경 끝에 세계적인 바이오 벤처기업을 일궈낸 대표의 성공 스토리는 고진감래의 진정한 표상이다. (Sunyeon-gan-ui pinaneun noryeok-gwa yeokgyeong kkeut-e segyejeok-in ba-io bencheogieop-eul ilgwonaen daepyo-ui seong-gong seutori-neun gojingamrae-ui jinjeonghan pyosang-ida.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Kisah sukses sang CEO yang membangun perusahaan rintisan bioteknologi kelas dunia setelah melewati perjuangan berdarah-darah dan rintangan nestapa bertahun-tahun adalah lambang sejati dari pepatah gojingamrae (habis pahit terbitlah manis).",
        "keywords": [
          "kisah",
          "sukses",
          "membangun",
          "perusahaan"
        ],
        "explanation": "Kalimat akademik pola Saja-seong-eo Filosofis 1 (사자성어): 고진감래, 일석이조, 작심삼일: '수년간의 피나는 노력과 역경 끝에 세계적인 바이오 벤처기업을 일궈낸 대표의 성공 스토리는 고진감래의 진정한 표상이다.' diterjemahkan secara akurat menjadi 'Kisah sukses sang CEO yang membangun perusahaan rintisan bioteknologi kelas dunia setelah melewati perjuangan berdarah-darah dan rintangan nestapa bertahun-tahun adalah lambang sejati dari pepatah gojingamrae (habis pahit terbitlah manis).'."
      },
      {
        "id": "q-kr-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "상대방의 처지를 역지사지의 자세로 헤아리지 않고 일방적인 주장만을 되풀이한다면 대화의 물꼬를 틀 수 없다. (Sangdaebang-ui cheoji-reul yeokjisaji-ui jase-ro he-ariji ankgo ilbangjeok-in jujangman-eul doepurihandamyeon daehwa-ui mulkko-reul teul su eopda.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Jika kita tidak menimbang kondisi mitra bicara dengan sikap empati menempatkan diri pada posisinya (yeokjisaji) dan hanya mengulang-ulang klaim sepihak, keran dialog mustahil dapat dibuka.",
        "keywords": [
          "menimbang",
          "kondisi",
          "mitra",
          "bicara"
        ],
        "explanation": "Kalimat akademik pola Saja-seong-eo Filosofis 2 (사자성어): 설상가상, 역지사지, 유비무환: '상대방의 처지를 역지사지의 자세로 헤아리지 않고 일방적인 주장만을 되풀이한다면 대화의 물꼬를 틀 수 없다.' diterjemahkan secara akurat menjadi 'Jika kita tidak menimbang kondisi mitra bicara dengan sikap empati menempatkan diri pada posisinya (yeokjisaji) dan hanya mengulang-ulang klaim sepihak, keran dialog mustahil dapat dibuka.'."
      },
      {
        "id": "q-kr-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "그 연구소는 최첨단 연구 장비를 완비하고 있거니와 세계 정상급 석학들이 대거 포진해 있어 학계의 기대를 한 몸에 받고 있다. (Geu yeon-guso-neun choecheomdan yeon-gu jangbi-reul wanbihago itgeoniwa segye jeongsanggeup seokhaktdeul-i daegeo pojinhae isseo hakgye-ui gidae-reul han mom-e batgo itda.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Di samping laboratorium tersebut telah melengkapi fasilitas peralatan riset mutakhir tentu saja demikian, para cendekiawan terkemuka kelas dunia pun bersiaga dalam jumlah besar di sana, sehingga menyerap tumpuan harapan komunitas akademik.",
        "keywords": [
          "samping",
          "laboratorium",
          "tersebut",
          "melengkapi"
        ],
        "explanation": "Kalimat akademik pola Penambahan Bertingkat & Pengandaian Ekstrem: -거니와 & -라손 치더라도: '그 연구소는 최첨단 연구 장비를 완비하고 있거니와 세계 정상급 석학들이 대거 포진해 있어 학계의 기대를 한 몸에 받고 있다.' diterjemahkan secara akurat menjadi 'Di samping laboratorium tersebut telah melengkapi fasilitas peralatan riset mutakhir tentu saja demikian, para cendekiawan terkemuka kelas dunia pun bersiaga dalam jumlah besar di sana, sehingga menyerap tumpuan harapan komunitas akademik.'."
      },
      {
        "id": "q-kr-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "평소 피나는 연습과 철저한 자기관리를 거치지 않고서야 저토록 완벽하고 경이로운 무대를 선보일 수는 없다. (Pyeongso pinaneun yeonseup-gwa cheoljeohan jagigwanri-reul geochiji ankoseoya jeotorok wanbyeokhago gyeong-iroun mudae-reul seonbo-il su-neun eopda.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Tanpa melalui latihan berdarah-darah dan disiplin diri yang ketat sehari-harinya, mustahil seseorang mampu mempersembahkan panggung pertunjukan yang sebegitu sempurna dan mengagumkan.",
        "keywords": [
          "tanpa",
          "melalui",
          "latihan",
          "berdarah"
        ],
        "explanation": "Kalimat akademik pola Prasyarat Kritis & Kemustahilan Absolut: -지 않고서야 & -(으)ㄹ 턱이 없다: '평소 피나는 연습과 철저한 자기관리를 거치지 않고서야 저토록 완벽하고 경이로운 무대를 선보일 수는 없다.' diterjemahkan secara akurat menjadi 'Tanpa melalui latihan berdarah-darah dan disiplin diri yang ketat sehari-harinya, mustahil seseorang mampu mempersembahkan panggung pertunjukan yang sebegitu sempurna dan mengagumkan.'."
      },
      {
        "id": "q-kr-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "두 기업은 상호 원천 기술을 동등하게 공유한다는 전제하에 차세대 친환경 전기차 공동 개발 협약을 체결했습니다. (Du gieop-eun sangho woncheon gisul-eul dongdeunghage gong-yuhandaneun jeonjeha-e chasedae chinhwan-gyeong jeon-gicha gongdong gaebal hyeobyak-eul chegyeolhaesseumnida.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Kedua korporasi menandatangani perjanjian pengembangan bersama mobil listrik ramah lingkungan generasi berikutnya dengan premis asumsi bahwa kedua pihak saling berbagi teknologi sumber secara setara.",
        "keywords": [
          "kedua",
          "korporasi",
          "menandatangani",
          "perjanjian"
        ],
        "explanation": "Kalimat akademik pola Premis Prasyarat & Momen Titik Balik: -ㄴ/는다는 전제하에 & -를 계기로: '두 기업은 상호 원천 기술을 동등하게 공유한다는 전제하에 차세대 친환경 전기차 공동 개발 협약을 체결했습니다.' diterjemahkan secara akurat menjadi 'Kedua korporasi menandatangani perjanjian pengembangan bersama mobil listrik ramah lingkungan generasi berikutnya dengan premis asumsi bahwa kedua pihak saling berbagi teknologi sumber secara setara.'."
      },
      {
        "id": "q-kr-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "어떠한 외압이나 부당한 회유가 있더라도 사법부의 독립성과 법치주의의 원칙은 결코 흔들려서는 안 됩니다. (Eotteohan oe-ap-ina budanghan hoeyu-ga itdeorado sabeopbu-ui dongnipseong-gwa beopchijuui-ui wonchik-eun gyeolko heundeullyeoseoneun an doemnida.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Kendatipun terdapat tekanan eksternal atau bujukan tak adil dalam bentuk apa pun, independensi kekuasaan kehakiman dan prinsip negara hukum sama sekali tak boleh goyah.",
        "keywords": [
          "kendatipun",
          "terdapat",
          "tekanan",
          "eksternal"
        ],
        "explanation": "Kalimat akademik pola Penyangkalan Paling Mutlak: 결코 -지 않다 & 전무하다: '어떠한 외압이나 부당한 회유가 있더라도 사법부의 독립성과 법치주의의 원칙은 결코 흔들려서는 안 됩니다.' diterjemahkan secara akurat menjadi 'Kendatipun terdapat tekanan eksternal atau bujukan tak adil dalam bentuk apa pun, independensi kekuasaan kehakiman dan prinsip negara hukum sama sekali tak boleh goyah.'."
      },
      {
        "id": "q-kr-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "헌법과 형사소송법이 규정한 적법 절차의 원칙에 의거하여 수사를 진행하고 증거를 엄격히 채택해야 한다. (Heonbeop-gwa hyeongsasosongbeop-i gyujeonghan jeokbeop jeolcha-ui wonchik-e uigeohayeo susa-reul jinhaenghago jeung-geo-reul eomgyeokhi chaetaekhaeya handa.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Penyelidikan harus dilangsungkan dan barang bukti harus diadopsi secara ketat berdasarkan landasan prinsip proses hukum yang adil yang diatur oleh konstitusi dan hukum acara pidana.",
        "keywords": [
          "penyelidikan",
          "dilangsungkan",
          "barang",
          "bukti"
        ],
        "explanation": "Kalimat akademik pola Berdasarkan Kaidah Hukum & Tanpa Dibatasi: -에 의거하여 & -에 국한되지 않다: '헌법과 형사소송법이 규정한 적법 절차의 원칙에 의거하여 수사를 진행하고 증거를 엄격히 채택해야 한다.' diterjemahkan secara akurat menjadi 'Penyelidikan harus dilangsungkan dan barang bukti harus diadopsi secara ketat berdasarkan landasan prinsip proses hukum yang adil yang diatur oleh konstitusi dan hukum acara pidana.'."
      },
      {
        "id": "q-kr-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "통계청이 발표한 자료에 따르면 국내 1인 가구 수는 2010년 414만 가구에서 2020년에는 664만 가구로 10년 사이에 무려 60% 급증한 것으로 나타났다. (Tonggyecheong-i balpyohan jaryo-e ttareumyeon gungnae il-in gagu su-neun icheonsimnyeon sabaeksipsaman gagu-eseo icheoni-simnyeon-eneun yukbaekyuksipsaman gagu-ro simnyeon sa-i-e muryeo yuksip peosenteu geupjeonghan geos-euro natanatda.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Menurut data yang dirilis Badan Pusat Statistik Korea, jumlah rumah tangga berpenghuni tunggal (1 orang) di dalam negeri melonjak drastis sebesar 60% dalam kurun waktu 10 tahun, dari 4,14 juta rumah tangga pada tahun 2010 menjadi 6,64 juta rumah tangga pada tahun 2020.",
        "keywords": [
          "menurut",
          "data",
          "dirilis",
          "badan"
        ],
        "explanation": "Kalimat akademik pola Retorika Analisis Grafik & Statistik Penulisan Soal No. 53: '통계청이 발표한 자료에 따르면 국내 1인 가구 수는 2010년 414만 가구에서 2020년에는 664만 가구로 10년 사이에 무려 60% 급증한 것으로 나타났다.' diterjemahkan secara akurat menjadi 'Menurut data yang dirilis Badan Pusat Statistik Korea, jumlah rumah tangga berpenghuni tunggal (1 orang) di dalam negeri melonjak drastis sebesar 60% dalam kurun waktu 10 tahun, dari 4,14 juta rumah tangga pada tahun 2010 menjadi 6,64 juta rumah tangga pada tahun 2020.'."
      },
      {
        "id": "q-kr-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "폭설로 도로가 전면 마비되는 바람에 제시간에 도착하기는커녕 고속도로 한가운데에 갇혀 꼬박 밤을 지새웠습니다. (Pokseol-ro doro-ga jeonmyeon mabidoeneun baram-e jesigan-e dochakhagineunkeonyeong gosokdoro han-gaunde-e gachyeo kkobak bam-eul jisaewosseumnida.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Gara-gara salju lebat melumpuhkan jalanan total, alih-alih tiba tepat waktu, jangankan itu, kami justru terjebak di tengah jalan tol dan begadang semalaman suntuk.",
        "keywords": [
          "gara",
          "salju",
          "lebat",
          "melumpuhkan"
        ],
        "explanation": "Kalimat akademik pola Penyangkalan Total & Ketiadaan Jeda: -기는커녕 & -새도 없이: '폭설로 도로가 전면 마비되는 바람에 제시간에 도착하기는커녕 고속도로 한가운데에 갇혀 꼬박 밤을 지새웠습니다.' diterjemahkan secara akurat menjadi 'Gara-gara salju lebat melumpuhkan jalanan total, alih-alih tiba tepat waktu, jangankan itu, kami justru terjebak di tengah jalan tol dan begadang semalaman suntuk.'."
      },
      {
        "id": "q-kr-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "본 연구는 현대 다문화 사회에서 발생하는 갈등의 구조적 원인을 법철학적 준거에 의거하여 규명하는 한편, 특정 집단에 국한되지 않는 보편적 공존 모델을 도출한다는 전제하에 기획되었다. (Bon yeon-gu-neun hyeondae damunhwa sahoe-eseo balsaenghaneun galdeung-ui gujojeok wonin-eul beobcheolhakjeok jun-geo-e uigeohayeo gyumyeonghaneun hanpyeon, teukjeong jipdan-e guk-handoeji anneun bopyeonjeok gongjon moder-eul dochulhandaneun jeonjeha-e gihoekdoe-eotda.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Penelitian ini direncanakan dengan premis asumsi bahwa di samping mengungkap akar struktural konflik yang timbul dalam masyarakat multikultural modern berlandaskan kaidah filsafat hukum, kami secara simultan menarik model koeksistensi universal yang tidak dibatasi hanya pada kelompok tertentu saja.",
        "keywords": [
          "penelitian",
          "direncanakan",
          "premis",
          "asumsi"
        ],
        "explanation": "Kalimat akademik pola Mahakarya Kelulusan TOPIK 2 Level 6 & Bahasa Korea Akademik Perguruan Tinggi (Capstone Unit): '본 연구는 현대 다문화 사회에서 발생하는 갈등의 구조적 원인을 법철학적 준거에 의거하여 규명하는 한편, 특정 집단에 국한되지 않는 보편적 공존 모델을 도출한다는 전제하에 기획되었다.' diterjemahkan secara akurat menjadi 'Penelitian ini direncanakan dengan premis asumsi bahwa di samping mengungkap akar struktural konflik yang timbul dalam masyarakat multikultural modern berlandaskan kaidah filsafat hukum, kami secara simultan menarik model koeksistensi universal yang tidak dibatasi hanya pada kelompok tertentu saja.'."
      }
    ]
  },
  "kr-3": {
    "id": "test-kr-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis & Struktur Kalimat Korea Selatan (5 Soal Sambung Kata)",
    "description": "Uji keterampilan merangkai kata dan frasa acak menjadi kalimat instruksi perkuliahan, riset lab, dan administrasi beasiswa yang runtut.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-kr-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi pengumuman resmi pendaftaran mata kuliah (KRS):",
        "scrambledWords": [
          "완료해 주시기 바랍니다",
          "이번 학기 수강신청을",
          "기한 내에"
        ],
        "correctOrder": [
          "이번 학기 수강신청을",
          "기한 내에",
          "완료해 주시기 바랍니다"
        ],
        "targetSentence": "이번 학기 수강신청을 기한 내에 완료해 주시기 바랍니다.",
        "audioVoiceLang": "ko-KR",
        "explanation": "Objek kalimat (이번 학기 수강신청을) + Keterangan batas waktu (기한 내에) + Permohonan tindakan formal (완료해 주시기 바랍니다)."
      },
      {
        "id": "q-kr-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat pemeriksaan berkas beasiswa pemerintah Korea:",
        "scrambledWords": [
          "꼼꼼하게 검토했습니다",
          "지원 서류를",
          "정부초청 외국인 장학생"
        ],
        "correctOrder": [
          "정부초청 외국인 장학생",
          "지원 서류를",
          "꼼꼼하게 검토했습니다"
        ],
        "targetSentence": "정부초청 외국인 장학생 지원 서류를 꼼꼼하게 검토했습니다.",
        "audioVoiceLang": "ko-KR",
        "explanation": "Frasa program beasiswa (정부초청 외국인 장학생) + Objek dokumen (지원 서류를) + Adverbia & verba lampau (꼼꼼하게 검토했습니다)."
      },
      {
        "id": "q-kr-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat penyerahan draf proposal tesis:",
        "scrambledWords": [
          "피드백을 받았습니다",
          "학위논문 연구계획서를",
          "지도교수님께 제출하여"
        ],
        "correctOrder": [
          "학위논문 연구계획서를",
          "지도교수님께 제출하여",
          "피드백을 받았습니다"
        ],
        "targetSentence": "학위논문 연구계획서를 지도교수님께 제출하여 피드백을 받았습니다.",
        "audioVoiceLang": "ko-KR",
        "explanation": "Objek proposal riset (학위논문 연구계획서를) + Aksi penyerahan ke dosen (지도교수님께 제출하여) + Hasil penerimaan evaluasi (피드백을 받았습니다)."
      },
      {
        "id": "q-kr-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi tata tertib peminjaman buku perpustakaan kampus:",
        "scrambledWords": [
          "반납해야 합니다",
          "연체되지 않도록",
          "도서관에서 대출한 전공서적은"
        ],
        "correctOrder": [
          "도서관에서 대출한 전공서적은",
          "연체되지 않도록",
          "반납해야 합니다"
        ],
        "targetSentence": "도서관에서 대출한 전공서적은 연체되지 않도록 반납해야 합니다.",
        "audioVoiceLang": "ko-KR",
        "explanation": "Topik buku pinjaman (도서관에서 대출한 전공서적은) + Klausa tujuan agar tidak denda (연체되지 않도록) + Keharusan pengembalian (반납해야 합니다)."
      },
      {
        "id": "q-kr-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi pengumuman presentasi seminar riset lab:",
        "scrambledWords": [
          "발표할 예정입니다",
          "다음 주 학술 세미나에서",
          "최신 연구 동향을"
        ],
        "correctOrder": [
          "다음 주 학술 세미나에서",
          "최신 연구 동향을",
          "발표할 예정입니다"
        ],
        "targetSentence": "다음 주 학술 세미나에서 최신 연구 동향을 발표할 예정입니다.",
        "audioVoiceLang": "ko-KR",
        "explanation": "Keterangan waktu & forum (다음 주 학술 세미나에서) + Topik tren penelitian (최신 연구 동향을) + Rencana presentasi (발표할 예정입니다)."
      }
    ]
  },
  "kr-4": {
    "id": "test-kr-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Korea Selatan (10 Soal Artikan)",
    "description": "Uji akurasi penerjemahan dan pemahaman istilah krusial kampus (KRS, transkrip, sidang tesis, visa pelajar, dan beasiswa).",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-kr-ar-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan bahasa Indonesia yang paling akurat untuk istilah administrasi perkuliahan: '수강신청 (Sugang sincheong)':",
        "targetSentence": "포털 시스템을 통해 전공 필수 과목의 수강신청을 완료했다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Pembayaran uang kuliah tunggal di bank kampus",
          "Permohonan kartu anggota perpustakaan",
          "Pendaftaran mata kuliah / pengisian KRS semester online",
          "Pendaftaran wisuda sarjana"
        ],
        "correctAnswerIndex": 2,
        "explanation": "수강신청 adalah registrasi pendaftaran mata kuliah perkuliahan (Course Registration)."
      },
      {
        "id": "q-kr-ar-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah beasiswa: '장학금 수혜 (Janghakgeum suhye)':",
        "targetSentence": "우수한 학업 성적을 인정받아 1년간 전액 장학금 수혜 대상자로 선발되었다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Pengembalian dana pinjaman mahasiswa",
          "Pemotongan gaji asisten laboratorium",
          "Iuran wajib organisasi kemahasiswaan",
          "Penerimaan hak / perolehan manfaat beasiswa pendidikan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "수혜 (受惠: menerima manfaat/kebaikan) + 장학금 (beasiswa) = perolehan hak beasiswa."
      },
      {
        "id": "q-kr-ar-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan dokumen akademik: '학업계획서 (Hageop gyehoekseo)':",
        "targetSentence": "대학원 입학 지원서와 함께 상세한 학업계획서를 제출해야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Rencana studi / Statement of Purpose (SOP)",
          "Buku harian kegiatan ekstrakurikuler",
          "Kuitansi sewa kamar kos mahasiswa",
          "Daftar menu kantin asrama"
        ],
        "correctAnswerIndex": 0,
        "explanation": "학업계획서 (Study Plan / Statement of Purpose) adalah proposal rencana studi akademik pelamar universitas."
      },
      {
        "id": "q-kr-ar-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari dokumen: '성적증명서 (Seongjeok jeungmyeongseo)':",
        "targetSentence": "아포스티유 인증을 받은 최종 학력 성적증명서 원본을 제출하십시오.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Ijazah kelulusan sekolah",
          "Transkrip nilai akademik resmi",
          "Surat keterangan sehat",
          "Pas foto resmi visa"
        ],
        "correctAnswerIndex": 1,
        "explanation": "성적 (nilai hasil belajar) + 증명서 (surat sertifikat keterangan) = transkrip nilai resmi."
      },
      {
        "id": "q-kr-ar-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan posisi pendidik: '지도교수 (Jido gyosu)':",
        "targetSentence": "학위논문 작성을 위해서는 반드시 소속 전공의 지도교수를 배정받아야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Dekan fakultas kedokteran",
          "Ketua senat universitas",
          "Dosen pembimbing akademik / pembimbing tugas akhir skripsi",
          "Staf keamanan gerbang kampus"
        ],
        "correctAnswerIndex": 2,
        "explanation": "지도 (membimbing) + 교수 (profesor) = Dosen Pembimbing Akademik / Thesis Supervisor."
      },
      {
        "id": "q-kr-ar-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan prosedur status studi: '휴학 (Hyuhak)' dan '복학 (Bokhak)':",
        "targetSentence": "군 복무를 위해 2년간 휴학한 후, 이번 학기에 성공적으로 복학하였다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Lulus sarjana dan wisuda pascasarjana",
          "Ujian masuk dan orientasi mahasiswa",
          "Pindah jurusan dan pindah universitas",
          "Cuti kuliah sementara dan aktif kuliah kembali"
        ],
        "correctAnswerIndex": 3,
        "explanation": "휴학 (休學) = cuti kuliah; 복학 (復學) = kembali aktif kuliah setelah masa cuti."
      },
      {
        "id": "q-kr-ar-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah integritas: '연구 윤리 (Yeon-gu yunri)':",
        "targetSentence": "모든 연구자는 연구 윤리 준수 서약서에 서명하고 교육을 이수해야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Etika penelitian ilmiah",
          "Anggaran biaya operasional riset",
          "Jadwal libur laboratorium",
          "Lomba karya ilmiah mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "연구 윤리 (Research Ethics) adalah pedoman kejujuran dan etika integritas dalam penelitian ilmiah."
      },
      {
        "id": "q-kr-ar-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan tahapan akhir kelulusan: '논문 심사 (Nonmun simsa)':",
        "targetSentence": "최종 논문 심사위원회의 엄격한 구두 구술 심사를 거쳤다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Pencetakan naskah tugas akhir di percetakan",
          "Sidang ujian dan evaluasi kelayakan tesis/disertasi",
          "Penyimpanan berkas di arsip nasional",
          "Pengumuman daftar mahasiswa baru"
        ],
        "correctAnswerIndex": 1,
        "explanation": "논문 (tesis/disertasi) + 심사 (evaluasi/sidang penilaian) = sidang ujian tesis."
      },
      {
        "id": "q-kr-ar-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan prosedur imigrasi Korea: '체류자격 연장 (Cheryujagyeok yeonjang)':",
        "targetSentence": "외국인등록증 뒷면의 체류기간 만료일 전에 체류자격 연장을 신청해야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Pembuatan kartu ATM bank universitas",
          "Registrasi nomor telepon seluler pascabayar",
          "Perpanjangan izin masa tinggal visa pelajar di kantor imigrasi (HiKorea)",
          "Pendaftaran kartu transportasi umum T-Money"
        ],
        "correctAnswerIndex": 2,
        "explanation": "체류자격 (status izin tinggal) + 연장 (perpanjangan masa berlaku)."
      },
      {
        "id": "q-kr-ar-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti kelompok mata kuliah: '전공필수 (Jeongong pilsu)':",
        "targetSentence": "졸업 요건을 충족하려면 전공필수 18학점을 모두 이수해야 합니다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Mata kuliah olahraga pilihan",
          "Kuliah kerja nyata pengabdian masyarakat",
          "Bimbingan belajar bahasa asing tambahan",
          "Mata kuliah wajib program studi / jurusan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "전공 (jurusan spesialisasi) + 필수 (wajib) = mata kuliah wajib jurusan (Major Required Course)."
      }
    ]
  },
  "kr-5": {
    "id": "test-kr-5",
    "title": "Bagian 5: Wacana Dokkai, Listening Audio, & Kasus Kampus Korea Selatan (15 Soal Bebas)",
    "description": "Uji analitis komprehensif terhadap silabus ujian, aturan perpustakaan, audio pengumuman jurusan, etika lab, dan studi kasus nyata.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-kr-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca teks wacana akademik TOPIK II berikut:\n'출산율 감소와 급속한 고령화로 인해 생산가능인구가 급감하고 있다. 이에 따라 정부는 정년 연장과 함께 청년층의 고용 안정을 도모하는 입체적 고용 대책을 시급히 수립해야 한다.'\n\nApa dampak utama dari penurunan angka kelahiran dan penuaan populasi menurut teks?",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Populasi usia kerja produktif (생산가능인구) mengalami penurunan drastis",
          "Angka pengangguran usia lanjut mencapai nol persen",
          "Biaya pendidikan universitas menjadi gratis",
          "Jumlah mahasiswa asing di Korea ditutup"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Teks secara eksplisit menyatakan: '생산가능인구가 급감하고 있다' (Populasi usia kerja mengalami penurunan tajam)."
      },
      {
        "id": "q-kr-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca wacana aturan perpustakaan universitas berikut:\n'도서관 열람실 좌석은 모바일 앱을 통해 좌석 발권을 마친 후 이용해야 합니다. 발권 후 30분 이내에 게이트에 학생증을 태그하지 않거나, 2시간 이상 공석 상태가 지속될 경우 자동으로 퇴실 처리되며, 3회 누적 시 일주일간 좌석 배정이 제한됩니다.'\n\nApa yang terjadi jika mahasiswa meninggalkan kursi perpustakaan kosong selama lebih dari dua jam?",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Dikenai denda uang tunai sebesar lima ribu won",
          "Kursi otomatis dibatalkan (퇴실 처리), dan jika terjadi 3 kali akan diblokir selama satu minggu",
          "Buku yang ada di meja akan disita dan dibakar",
          "Tidak ada sanksi apapun"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Aturan menetapkan: '2시간 이상 공석 시 자동 퇴실, 3회 누적 시 일주일간 좌석 배정 제한'."
      },
      {
        "id": "q-kr-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca wacana seleksi Beasiswa Pemerintah Korea (GKS):\n'GKS 장학생으로 선발된 자는 본 과정 진학 전 1년간 국립국제교육원이 지정한 대학 한국어연수기관에서 한국어 연수를 이수해야 한다. 1년 연수 종료 시까지 TOPIK 3급 이상을 취득하지 못할 경우 장학생 자격이 취소된다.'\n\nBerapa level minimal TOPIK yang wajib diraih setelah 1 tahun kursus bahasa agar beasiswa GKS tidak dibatalkan?",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Minimal TOPIK Level 5",
          "Minimal TOPIK Level 1",
          "Minimal TOPIK Level 3",
          "Tidak diwajibkan ujian TOPIK"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Ketentuan resmi GKS: wajib meraih minimal TOPIK 3급 (Level 3) setelah 1 tahun kursus bahasa sebelum masuk kuliah reguler."
      },
      {
        "id": "q-kr-bb-4",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio pengumuman kantor jurusan (학과 사무실) berikut:",
        "targetSentence": "학과 사무실에서 공지합니다. 이번 학기 대학원 학위청구논문 예비심사 신청 마감은 이번 주 금요일 오후 다섯 시까지입니다. 신청서와 지도교수 추천서를 첨부하여 교학팀에 직접 제출하시기 바랍니다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Sidang skripsi dibatalkan dan diganti dengan pembuatan laporan magang",
          "Dosen pembimbing meminta seluruh mahasiswa hadir rapat di aula utama",
          "Pendaftaran beasiswa dibuka sampai akhir bulan depan",
          "Batas akhir pendaftaran ujian pra-sidang tesis adalah Jumat ini jam 17.00, berkas diserahkan langsung ke kantor jurusan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Pengumuman: 예비심사 신청 마감 (batas pra-sidang tesis) pada Jumat pukul 17.00 diserahkan langsung (직접 제출)."
      },
      {
        "id": "q-kr-bb-5",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio petunjuk keselamatan laboratorium riset:",
        "targetSentence": "실험실 내에서는 반드시 실험복과 보안경을 착용해야 하며, 음식물 반입은 일절 금지됩니다. 화학물질 유출 사고 발생 시 비상샤워기를 즉시 가동하고 비상연락망으로 보고하십시오.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Kewajiban memakai jas lab dan kacamata pelindung, larangan membawa makanan, serta prosedur darurat tumpahan kimia",
          "Jadwal perbaikan pendingin ruangan laboratorium",
          "Instruksi pembelian alat-alat keselamatan kerja mandiri",
          "Larangan menyalakan komputer lab di atas jam sepuluh malam"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memuat aturan standar lab: jas lab (실험복), kacamata (보안경), larangan makanan, dan pancuran darurat (비상샤워기)."
      },
      {
        "id": "q-kr-bb-6",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio informasi pengurusan kartu identitas orang asing (외국인등록증):",
        "targetSentence": "입국일로부터 구십 일 이내에 출입국관리사무소를 방문하여 외국인등록을 마쳐야 합니다. 하이코리아 웹사이트에서 사전에 방문 예약을 하지 않으면 당일 접수가 불가능합니다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Pembuatan visa baru di bandara internasional Incheon",
          "Kewajiban registrasi orang asing dalam 90 hari sejak kedatangan dan wajib reservasi online terlebih dahulu di HiKorea",
          "Pemeriksaan kesehatan gratis di puskesmas distrik",
          "Pembukaan rekening tabungan bank kampus"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Wajib lapor asing dalam 90 hari (90일 이내) dan wajib reservasi online di HiKorea (사전 방문 예약)."
      },
      {
        "id": "q-kr-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah bentuk tata bahasa formal penanda sudut pandang evaluasi:\n'국제 통상 환경의 급변과 공급망 불안정____, 수출 의존도가 높은 국가들은 경제적 다변화를 서둘러야 한다.'",
        "audioVoiceLang": "ko-KR",
        "options": [
          "에 불과하고 (e bulgwahago) — hanya sekadar / tidak lebih dari",
          "에 다름없다 (e dareumeopda) — sama saja dengan / tiada bedanya dengan",
          "에 비추어 볼 때 (e bichueo bol ttae) — ditinjau dari / berkaca pada",
          "을 막론하고 (eul mangnonhago) — tanpa memandang / terlepas dari"
        ],
        "correctAnswerIndex": 2,
        "explanation": "-에 비추어 볼 때 (berkaca dari / meninjau situasi...) adalah pola evaluasi formal standar dalam teks opini ilmiah."
      },
      {
        "id": "q-kr-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah bentuk tata bahasa penegasan ganda (double negative) yang menyatakan keniscayaan tak terbantahkan:\n'인공지능의 급속한 발전은 기존의 고용 구조에 지대한 변화를 가져____.'",
        "audioVoiceLang": "ko-KR",
        "options": [
          "올 리가 없다 (ol riga eopda) — mustahil akan terjadi",
          "올 턱이 없다 (ol teogi eopda) — sama sekali tidak ada alasan untuk terjadi",
          "오다시피 했다 (odasipi haetda) — hampir saja datang",
          "오지 않을 수 없다 (oji aneul su eopda) — niscaya pasti membawa perubahan (penegasan ganda)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "-지 않을 수 없다 (tidak bisa untuk tidak...) menyatakan kepastian absolut yang niscaya terjadi."
      },
      {
        "id": "q-kr-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah bentuk kausatif perintah instruksional akademik:\n'지도교수는 연구원들에게 연구 윤리 지침을 철저히 ____ 조치했다.'",
        "audioVoiceLang": "ko-KR",
        "options": [
          "준수하도록 (junsuhadorok) — agar mematuhi / supaya menaati",
          "준수하는 바람에 (junsuhaneun barame) — gara-gara mematuhi (sebab negatif)",
          "준수하다시피 (junsuhadasipi) — sebagaimana hampir mematuhi",
          "준수할지라도 (junsuhaljirado) — sekalipun mematuhi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "-도록 하다 / -도록 조치하다 adalah konstruksi kausatif formal untuk memerintahkan suatu prosedur dipatuhi."
      },
      {
        "id": "q-kr-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Analisis kesalahan tata bahasa (문법 오류 수정): Manakah kalimat yang BENAR secara penulisan netral esai TOPIK No. 54?",
        "options": [
          "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제예요. — ... adalah tugas yang tak dapat ditunda lagi (ragam lisan 해요체).",
          "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제이다. — Dalam masyarakat modern, pelestarian lingkungan adalah tugas yang tak dapat ditunda lagi (ragam tulis 해라체).",
          "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제입니다. — ... adalah tugas yang tak dapat ditunda lagi (ragam formal lisan 하십시오체).",
          "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제야. — ... adalah tugas yang tak dapat ditunda lagi (ragam akrab 반말)."
        ],
        "correctAnswerIndex": 1,
        "explanation": "Predikat kata benda dalam gaya netral bertuliskan '과제이다' (-이다). Bentuk -예요, -입니다, -야 dilarang dalam esai No. 54."
      },
      {
        "id": "q-kr-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam wawancara beasiswa GKS, pewawancara menanyakan: 'Apa yang akan Anda lakukan jika riset Anda di lab mengalami kebuntuan?'. Jawaban paling berbobot adalah:",
        "options": [
          "Pulang ke negara asal dan liburan selama satu bulan",
          "Menyalahkan alat laboratorium universitas yang kurang canggih",
          "Mengkaji ulang literatur internasional terbaru, berdiskusi aktif mencari solusi dengan profesor pembimbing dan rekan lab, serta melakukan eksperimen alternatif",
          "Membuat data fiktif agar laporan cepat selesai"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Kematangan mental peneliti dinilai dari ketangguhan mengatasi kegagalan eksperimen (실패 극복 능력) melalui metode ilmiah."
      },
      {
        "id": "q-kr-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana cara menyapa Dosen Pembimbing sekaligus Ketua Jurusan saat berpapasan di lorong kampus Korea?",
        "options": [
          "야, 형! (Ya, hyeong!) — Hei, Bang! (sapaan kasar/akrab)",
          "아저씨, 안녕하세요! (Ajeossi, annyeonghaseyo!) — Paman, halo! (tidak sopan untuk dosen)",
          "선생, 잘 지냈어? (Seonsaeng, jal jinaesseo?) — Guru, apa kabar? (kalimat 반말 tidak sopan)",
          "교수님 (Gyosunim) / 학과장님 (Hakgwajangnim), 안녕하십니까! — Profesor / Bapak-Ibu Ketua Jurusan, selamat pagi/siang! (sapaan hormat resmi)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Gunakan sebutan kehormatan 교수님 (Profesor) atau jabatan struktural 학과장님 (Ketua Jurusan) disertai salam formal 안녕하십니까."
      },
      {
        "id": "q-kr-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Makna dari peribahasa empat karakter (사자성어) '일석이조 (一石二鳥)' adalah:",
        "options": [
          "Sekali mendayung dua tiga pulau terlampaui (meraih dua keuntungan sekaligus dalam satu tindakan)",
          "Melempar batu sembunyi tangan",
          "Batu yang menggelinding tidak akan ditumbuhi lumut",
          "Burung yang terbang tinggi mencari mangsa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "일석이조 (一石二鳥: melempar satu batu mendapat dua burung) = meraih dua manfaat ganda sekaligus."
      },
      {
        "id": "q-kr-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam budaya laboratorium universitas Korea (랩실 문화), apa peran dari seorang '랩장' (Raepjang)?",
        "options": [
          "Dosen tamu dari luar negeri",
          "Mahasiswa senior yang ditunjuk profesor sebagai koordinator harian keselamatan, jadwal, dan administrasi laboratorium",
          "Petugas kebersihan gedung kampus",
          "Dekan fakultas teknologi"
        ],
        "correctAnswerIndex": 1,
        "explanation": "랩장 (Lab Leader) adalah mahasiswa pascasarjana senior yang memimpin koordinasi operasional riset di laboratorium."
      },
      {
        "id": "q-kr-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berdasarkan peraturan imigrasi Korea Selatan, berapa jam batas kerja paruh waktu (알바) per minggu yang diizinkan untuk mahasiswa program gelar yang telah memiliki sertifikat TOPIK yang dipersyaratkan?",
        "options": [
          "Maksimal 40 jam per minggu setiap saat",
          "Maksimal 5 jam per minggu saja",
          "Maksimal 20 hingga 25 jam per minggu (dan tanpa batas jam saat liburan semester resmi)",
          "Dilarang bekerja sama sekali selama studi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Mahasiswa asing dengan izin resmi (체류자격외 활동허가) diizinkan bekerja paruh waktu 20-25 jam/minggu saat masa kuliah aktif."
      }
    ]
  },
  "kr-full": {
    "id": "test-kr-full",
    "title": "Ujian Simulasi Lengkap Target Capaian Kuliah Korea Selatan (50 Soal Lengkap)",
    "description": "Evaluasi menyeluruh 50 soal berstandar resmi: 10 Soal PG, 10 Soal Essai, 5 Soal Sambung Kata, 10 Soal Artikan, dan 15 Soal Analisis Bebas.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-kr-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah tata bahasa tingkat menengah TOPIK II yang tepat untuk menyatakan dua hal positif yang saling mengakumulasi secara formal:",
        "targetSentence": "그 후보자는 뛰어난 연구 실적을 갖추었을____, 유창한 한국어 구사 능력도 겸비하고 있다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "반면에 (banmyeone: di sisi lain)",
          "바람에 (barame: akibat yang merugikan)",
          "뿐만 아니라 (ppunman anira: tidak hanya... tetapi juga...)",
          "탓에 (tase: gara-gara)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "-(으)ㄹ 뿐만 아니라 digunakan untuk menambahkan informasi pendukung sejajar (tidak hanya A, tetapi juga B)."
      },
      {
        "id": "q-kr-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah kosakata berakar karakter Hanja yang tepat untuk istilah akademik 'pendaftaran mata kuliah / pengisian KRS':",
        "targetSentence": "이번 학기 전공과목 ____ 기간은 다음 주 월요일부터 시작됩니다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "졸업증명 (joreopjeungmyeong [卒業證明]) — surat keterangan lulus / ijazah",
          "입학시험 (iphaksihyeom [入學試驗]) — ujian saringan masuk universitas",
          "출석체크 (chulseokchekeu) — pemeriksaan daftar hadir kuliah",
          "수강신청 (sugangsincheong [受講申請]) — pendaftaran rencana studi / pengisian KRS"
        ],
        "correctAnswerIndex": 3,
        "explanation": "수강신청 (受講申請: sugangsincheong) adalah istilah resmi untuk pendaftaran mata kuliah / KRS di universitas Korea."
      },
      {
        "id": "q-kr-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Dalam penulisan artikel ilmiah, bentuk kutipan tidak langsung yang paling tepat untuk mengutip temuan peneliti terdahulu adalah:",
        "targetSentence": "선행 연구에 따르면, 기후 변화가 농업 생산성에 직접적인 영향을 ____.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "미친다고 보고되었다 (michindago bogodoeeotda) — dilaporkan memberikan pengaruh (kutipan tidak langsung ilmiah)",
          "미쳐요라고 했어요 (michyeoyo-rago haesseoyo) — katanya berpengaruh (ragam lisan santai)",
          "미치네요 (michineyo) — ternyata berpengaruh ya (ekspresi lisan)",
          "미칠 것 같아요 (michil geot gat-ayo) — sepertinya akan berpengaruh (dugaan subjektif lisan)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "-(ㄴ/는)다고 보고되었다/밝혀졌다 adalah bentuk kutipan objektif pasif formal dalam makalah akademik Korea."
      },
      {
        "id": "q-kr-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Dalam esai argumentatif TOPIK II (Soal No. 54), akhiran kalimat yang WAJIB digunakan untuk menjaga nada netral ilmiah adalah:",
        "audioVoiceLang": "ko-KR",
        "options": [
          "해요체 (-아/어요) — ragam sopan percakapan sehari-hari",
          "해라체 / Plain Style (-ㄴ/는다, -았다/었다, -(으)ㅁ) — ragam tulis netral ilmiah (wajib untuk esai TOPIK & jurnal)",
          "하십시오체 (-습니다/십니까) — ragam formal lisan / presentasi",
          "반말 (-어/야) — ragam akrab tidak sopan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Esai akademik dan laporan riset Korea wajib ditulis dengan gaya netral plain style (해라체: -ㄴ/는다). Penggunaan -아요/어요 akan dikenai penalti nilai."
      },
      {
        "id": "q-kr-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah partikel penanda rujukan data yang tepat untuk teks laporan akademik:",
        "targetSentence": "통계청이 발표한 최근 조사 결과____, 1인 가구의 비율이 급증하고 있다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "에 비해서 (e bihaeseo) — dibandingkan dengan",
          "에 대하여 (e daehayeo) — mengenai / tentang",
          "에 의하면 (e uihamyeon) — berdasarkan / menurut rujukan data",
          "에 불구하고 (e bulguhago) — terlepas dari / meskipun"
        ],
        "correctAnswerIndex": 2,
        "explanation": "-에 의하면 / -에 따르면 digunakan secara formal untuk menunjukkan sumber rujukan data resmi."
      },
      {
        "id": "q-kr-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah bentuk tata bahasa sebab-akibat formal netral yang paling tepat untuk kalimat fenomena alam:",
        "targetSentence": "유례없는 집중호우____ 산사태가 발생하여 도로가 통제되었다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "느라고 (neurago: karena sibuk melakukan suatu aksi)",
          "자마자 (jamaja: segera setelah)",
          "길래 (gillae: ragam lisan santai)",
          "로 인해 (ro inhae: dikarenakan oleh / akibat)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "-(으)로 인해 adalah bentuk sebab-akibat formal tertulis tingkat tinggi untuk menjelaskan fenomena alam atau sosial."
      },
      {
        "id": "q-kr-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Konjungsi logis yang tepat untuk menarik kesimpulan akhir pada paragraf penutup esai TOPIK No. 54 adalah:",
        "targetSentence": "____ 정부와 시민사회가 긴밀히 협력하여 지속 가능한 대책을 마련해야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "따라서 (ttaraseo: oleh karena itu)",
          "그런데 (geureonde: ngomong-ngomong)",
          "하지만 (hajiman: tetapi)",
          "왜냐하면 (waenyahamyeon: karena)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'따라서' (oleh karena itu) adalah konjungsi standar penutup argumen deduktif dalam wacana esai formal."
      },
      {
        "id": "q-kr-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Istilah hukum dan etika akademik untuk tindakan ilegal menjiplak karya orang lain tanpa mencantumkan sumber adalah:",
        "audioVoiceLang": "ko-KR",
        "options": [
          "출판 (chulpan [出版: penerbitan])",
          "표절 (pyojeol [剽竊: plagiarisme])",
          "열람 (yeollam [閱覽: membaca])",
          "기부 (gibu [寄附: donasi])"
        ],
        "correctAnswerIndex": 1,
        "explanation": "표절 (pyojeol) adalah istilah hukum akademik untuk plagiarisme di perguruan tinggi Korea."
      },
      {
        "id": "q-kr-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah pasangan kata yang membedakan 'menuju/mengarah ke tujuan baik' dan 'menghindari/menolak perbuatan buruk':",
        "targetSentence": "학문적 창의성을 ____하고, 무분별한 단순 암기식 학습은 ____해야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "지양(止揚 — menghindari) - 지향(指向 — mengarah ke tujuan)",
          "가속(加速 — percepatan) - 발전(發展 — perkembangan)",
          "지향(指向 — mengarah ke tujuan positif) - 지양(止揚 — menghindari hal negatif)",
          "포기(抛棄 — menyerah) - 장려(奬勵 — mendorong/menganjurkan)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "지향하다 (指向) = mengarah ke tujuan positif; 지양하다 (止揚) = menghindari / menghentikan kebiasaan negatif."
      },
      {
        "id": "q-kr-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Pilihlah format salam penutup email yang paling santun dan baku saat mengirimkan draf proposal kepada Dosen Pembimbing (지도교수님):",
        "audioVoiceLang": "ko-KR",
        "options": [
          "그럼 다음에 또 연락할게요. 안녕히 계세요! — Kalau begitu lain kali saya hubungi lagi ya. Sampai jumpa!",
          "빨리 답장 부탁드립니다. 수고하세요! — Tolong cepat balas ya. Selamat bekerja!",
          "바이바이, 다음 주에 봐요. — Dadah, sampai ketemu minggu depan.",
          "교수님의 건강과 행복을 기원합니다. 학생 [이름] 올림 (또는 드림) — Saya mendoakan kesehatan dan kebahagiaan Profesor. Hormat saya, Mahasiswa [Nama]."
        ],
        "correctAnswerIndex": 3,
        "explanation": "Salam penutup Keigo Korea: mendoakan kesehatan dosen diikuti [이름] 올림 (mempersembahkan ke atas) atau 드림."
      },
      {
        "id": "q-kr-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "수년간의 피나는 노력과 역경 끝에 세계적인 바이오 벤처기업을 일궈낸 대표의 성공 스토리는 고진감래의 진정한 표상이다. (Sunyeon-gan-ui pinaneun noryeok-gwa yeokgyeong kkeut-e segyejeok-in ba-io bencheogieop-eul ilgwonaen daepyo-ui seong-gong seutori-neun gojingamrae-ui jinjeonghan pyosang-ida.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Kisah sukses sang CEO yang membangun perusahaan rintisan bioteknologi kelas dunia setelah melewati perjuangan berdarah-darah dan rintangan nestapa bertahun-tahun adalah lambang sejati dari pepatah gojingamrae (habis pahit terbitlah manis).",
        "keywords": [
          "kisah",
          "sukses",
          "membangun",
          "perusahaan"
        ],
        "explanation": "Kalimat akademik pola Saja-seong-eo Filosofis 1 (사자성어): 고진감래, 일석이조, 작심삼일: '수년간의 피나는 노력과 역경 끝에 세계적인 바이오 벤처기업을 일궈낸 대표의 성공 스토리는 고진감래의 진정한 표상이다.' diterjemahkan secara akurat menjadi 'Kisah sukses sang CEO yang membangun perusahaan rintisan bioteknologi kelas dunia setelah melewati perjuangan berdarah-darah dan rintangan nestapa bertahun-tahun adalah lambang sejati dari pepatah gojingamrae (habis pahit terbitlah manis).'."
      },
      {
        "id": "q-kr-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "상대방의 처지를 역지사지의 자세로 헤아리지 않고 일방적인 주장만을 되풀이한다면 대화의 물꼬를 틀 수 없다. (Sangdaebang-ui cheoji-reul yeokjisaji-ui jase-ro he-ariji ankgo ilbangjeok-in jujangman-eul doepurihandamyeon daehwa-ui mulkko-reul teul su eopda.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Jika kita tidak menimbang kondisi mitra bicara dengan sikap empati menempatkan diri pada posisinya (yeokjisaji) dan hanya mengulang-ulang klaim sepihak, keran dialog mustahil dapat dibuka.",
        "keywords": [
          "menimbang",
          "kondisi",
          "mitra",
          "bicara"
        ],
        "explanation": "Kalimat akademik pola Saja-seong-eo Filosofis 2 (사자성어): 설상가상, 역지사지, 유비무환: '상대방의 처지를 역지사지의 자세로 헤아리지 않고 일방적인 주장만을 되풀이한다면 대화의 물꼬를 틀 수 없다.' diterjemahkan secara akurat menjadi 'Jika kita tidak menimbang kondisi mitra bicara dengan sikap empati menempatkan diri pada posisinya (yeokjisaji) dan hanya mengulang-ulang klaim sepihak, keran dialog mustahil dapat dibuka.'."
      },
      {
        "id": "q-kr-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "그 연구소는 최첨단 연구 장비를 완비하고 있거니와 세계 정상급 석학들이 대거 포진해 있어 학계의 기대를 한 몸에 받고 있다. (Geu yeon-guso-neun choecheomdan yeon-gu jangbi-reul wanbihago itgeoniwa segye jeongsanggeup seokhaktdeul-i daegeo pojinhae isseo hakgye-ui gidae-reul han mom-e batgo itda.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Di samping laboratorium tersebut telah melengkapi fasilitas peralatan riset mutakhir tentu saja demikian, para cendekiawan terkemuka kelas dunia pun bersiaga dalam jumlah besar di sana, sehingga menyerap tumpuan harapan komunitas akademik.",
        "keywords": [
          "samping",
          "laboratorium",
          "tersebut",
          "melengkapi"
        ],
        "explanation": "Kalimat akademik pola Penambahan Bertingkat & Pengandaian Ekstrem: -거니와 & -라손 치더라도: '그 연구소는 최첨단 연구 장비를 완비하고 있거니와 세계 정상급 석학들이 대거 포진해 있어 학계의 기대를 한 몸에 받고 있다.' diterjemahkan secara akurat menjadi 'Di samping laboratorium tersebut telah melengkapi fasilitas peralatan riset mutakhir tentu saja demikian, para cendekiawan terkemuka kelas dunia pun bersiaga dalam jumlah besar di sana, sehingga menyerap tumpuan harapan komunitas akademik.'."
      },
      {
        "id": "q-kr-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "평소 피나는 연습과 철저한 자기관리를 거치지 않고서야 저토록 완벽하고 경이로운 무대를 선보일 수는 없다. (Pyeongso pinaneun yeonseup-gwa cheoljeohan jagigwanri-reul geochiji ankoseoya jeotorok wanbyeokhago gyeong-iroun mudae-reul seonbo-il su-neun eopda.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Tanpa melalui latihan berdarah-darah dan disiplin diri yang ketat sehari-harinya, mustahil seseorang mampu mempersembahkan panggung pertunjukan yang sebegitu sempurna dan mengagumkan.",
        "keywords": [
          "tanpa",
          "melalui",
          "latihan",
          "berdarah"
        ],
        "explanation": "Kalimat akademik pola Prasyarat Kritis & Kemustahilan Absolut: -지 않고서야 & -(으)ㄹ 턱이 없다: '평소 피나는 연습과 철저한 자기관리를 거치지 않고서야 저토록 완벽하고 경이로운 무대를 선보일 수는 없다.' diterjemahkan secara akurat menjadi 'Tanpa melalui latihan berdarah-darah dan disiplin diri yang ketat sehari-harinya, mustahil seseorang mampu mempersembahkan panggung pertunjukan yang sebegitu sempurna dan mengagumkan.'."
      },
      {
        "id": "q-kr-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "두 기업은 상호 원천 기술을 동등하게 공유한다는 전제하에 차세대 친환경 전기차 공동 개발 협약을 체결했습니다. (Du gieop-eun sangho woncheon gisul-eul dongdeunghage gong-yuhandaneun jeonjeha-e chasedae chinhwan-gyeong jeon-gicha gongdong gaebal hyeobyak-eul chegyeolhaesseumnida.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Kedua korporasi menandatangani perjanjian pengembangan bersama mobil listrik ramah lingkungan generasi berikutnya dengan premis asumsi bahwa kedua pihak saling berbagi teknologi sumber secara setara.",
        "keywords": [
          "kedua",
          "korporasi",
          "menandatangani",
          "perjanjian"
        ],
        "explanation": "Kalimat akademik pola Premis Prasyarat & Momen Titik Balik: -ㄴ/는다는 전제하에 & -를 계기로: '두 기업은 상호 원천 기술을 동등하게 공유한다는 전제하에 차세대 친환경 전기차 공동 개발 협약을 체결했습니다.' diterjemahkan secara akurat menjadi 'Kedua korporasi menandatangani perjanjian pengembangan bersama mobil listrik ramah lingkungan generasi berikutnya dengan premis asumsi bahwa kedua pihak saling berbagi teknologi sumber secara setara.'."
      },
      {
        "id": "q-kr-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "어떠한 외압이나 부당한 회유가 있더라도 사법부의 독립성과 법치주의의 원칙은 결코 흔들려서는 안 됩니다. (Eotteohan oe-ap-ina budanghan hoeyu-ga itdeorado sabeopbu-ui dongnipseong-gwa beopchijuui-ui wonchik-eun gyeolko heundeullyeoseoneun an doemnida.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Kendatipun terdapat tekanan eksternal atau bujukan tak adil dalam bentuk apa pun, independensi kekuasaan kehakiman dan prinsip negara hukum sama sekali tak boleh goyah.",
        "keywords": [
          "kendatipun",
          "terdapat",
          "tekanan",
          "eksternal"
        ],
        "explanation": "Kalimat akademik pola Penyangkalan Paling Mutlak: 결코 -지 않다 & 전무하다: '어떠한 외압이나 부당한 회유가 있더라도 사법부의 독립성과 법치주의의 원칙은 결코 흔들려서는 안 됩니다.' diterjemahkan secara akurat menjadi 'Kendatipun terdapat tekanan eksternal atau bujukan tak adil dalam bentuk apa pun, independensi kekuasaan kehakiman dan prinsip negara hukum sama sekali tak boleh goyah.'."
      },
      {
        "id": "q-kr-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "헌법과 형사소송법이 규정한 적법 절차의 원칙에 의거하여 수사를 진행하고 증거를 엄격히 채택해야 한다. (Heonbeop-gwa hyeongsasosongbeop-i gyujeonghan jeokbeop jeolcha-ui wonchik-e uigeohayeo susa-reul jinhaenghago jeung-geo-reul eomgyeokhi chaetaekhaeya handa.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Penyelidikan harus dilangsungkan dan barang bukti harus diadopsi secara ketat berdasarkan landasan prinsip proses hukum yang adil yang diatur oleh konstitusi dan hukum acara pidana.",
        "keywords": [
          "penyelidikan",
          "dilangsungkan",
          "barang",
          "bukti"
        ],
        "explanation": "Kalimat akademik pola Berdasarkan Kaidah Hukum & Tanpa Dibatasi: -에 의거하여 & -에 국한되지 않다: '헌법과 형사소송법이 규정한 적법 절차의 원칙에 의거하여 수사를 진행하고 증거를 엄격히 채택해야 한다.' diterjemahkan secara akurat menjadi 'Penyelidikan harus dilangsungkan dan barang bukti harus diadopsi secara ketat berdasarkan landasan prinsip proses hukum yang adil yang diatur oleh konstitusi dan hukum acara pidana.'."
      },
      {
        "id": "q-kr-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "통계청이 발표한 자료에 따르면 국내 1인 가구 수는 2010년 414만 가구에서 2020년에는 664만 가구로 10년 사이에 무려 60% 급증한 것으로 나타났다. (Tonggyecheong-i balpyohan jaryo-e ttareumyeon gungnae il-in gagu su-neun icheonsimnyeon sabaeksipsaman gagu-eseo icheoni-simnyeon-eneun yukbaekyuksipsaman gagu-ro simnyeon sa-i-e muryeo yuksip peosenteu geupjeonghan geos-euro natanatda.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Menurut data yang dirilis Badan Pusat Statistik Korea, jumlah rumah tangga berpenghuni tunggal (1 orang) di dalam negeri melonjak drastis sebesar 60% dalam kurun waktu 10 tahun, dari 4,14 juta rumah tangga pada tahun 2010 menjadi 6,64 juta rumah tangga pada tahun 2020.",
        "keywords": [
          "menurut",
          "data",
          "dirilis",
          "badan"
        ],
        "explanation": "Kalimat akademik pola Retorika Analisis Grafik & Statistik Penulisan Soal No. 53: '통계청이 발표한 자료에 따르면 국내 1인 가구 수는 2010년 414만 가구에서 2020년에는 664만 가구로 10년 사이에 무려 60% 급증한 것으로 나타났다.' diterjemahkan secara akurat menjadi 'Menurut data yang dirilis Badan Pusat Statistik Korea, jumlah rumah tangga berpenghuni tunggal (1 orang) di dalam negeri melonjak drastis sebesar 60% dalam kurun waktu 10 tahun, dari 4,14 juta rumah tangga pada tahun 2010 menjadi 6,64 juta rumah tangga pada tahun 2020.'."
      },
      {
        "id": "q-kr-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "폭설로 도로가 전면 마비되는 바람에 제시간에 도착하기는커녕 고속도로 한가운데에 갇혀 꼬박 밤을 지새웠습니다. (Pokseol-ro doro-ga jeonmyeon mabidoeneun baram-e jesigan-e dochakhagineunkeonyeong gosokdoro han-gaunde-e gachyeo kkobak bam-eul jisaewosseumnida.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Gara-gara salju lebat melumpuhkan jalanan total, alih-alih tiba tepat waktu, jangankan itu, kami justru terjebak di tengah jalan tol dan begadang semalaman suntuk.",
        "keywords": [
          "gara",
          "salju",
          "lebat",
          "melumpuhkan"
        ],
        "explanation": "Kalimat akademik pola Penyangkalan Total & Ketiadaan Jeda: -기는커녕 & -새도 없이: '폭설로 도로가 전면 마비되는 바람에 제시간에 도착하기는커녕 고속도로 한가운데에 갇혀 꼬박 밤을 지새웠습니다.' diterjemahkan secara akurat menjadi 'Gara-gara salju lebat melumpuhkan jalanan total, alih-alih tiba tepat waktu, jangankan itu, kami justru terjebak di tengah jalan tol dan begadang semalaman suntuk.'."
      },
      {
        "id": "q-kr-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "본 연구는 현대 다문화 사회에서 발생하는 갈등의 구조적 원인을 법철학적 준거에 의거하여 규명하는 한편, 특정 집단에 국한되지 않는 보편적 공존 모델을 도출한다는 전제하에 기획되었다. (Bon yeon-gu-neun hyeondae damunhwa sahoe-eseo balsaenghaneun galdeung-ui gujojeok wonin-eul beobcheolhakjeok jun-geo-e uigeohayeo gyumyeonghaneun hanpyeon, teukjeong jipdan-e guk-handoeji anneun bopyeonjeok gongjon moder-eul dochulhandaneun jeonjeha-e gihoekdoe-eotda.)",
        "audioVoiceLang": "ko-KR",
        "sampleAnswer": "Penelitian ini direncanakan dengan premis asumsi bahwa di samping mengungkap akar struktural konflik yang timbul dalam masyarakat multikultural modern berlandaskan kaidah filsafat hukum, kami secara simultan menarik model koeksistensi universal yang tidak dibatasi hanya pada kelompok tertentu saja.",
        "keywords": [
          "penelitian",
          "direncanakan",
          "premis",
          "asumsi"
        ],
        "explanation": "Kalimat akademik pola Mahakarya Kelulusan TOPIK 2 Level 6 & Bahasa Korea Akademik Perguruan Tinggi (Capstone Unit): '본 연구는 현대 다문화 사회에서 발생하는 갈등의 구조적 원인을 법철학적 준거에 의거하여 규명하는 한편, 특정 집단에 국한되지 않는 보편적 공존 모델을 도출한다는 전제하에 기획되었다.' diterjemahkan secara akurat menjadi 'Penelitian ini direncanakan dengan premis asumsi bahwa di samping mengungkap akar struktural konflik yang timbul dalam masyarakat multikultural modern berlandaskan kaidah filsafat hukum, kami secara simultan menarik model koeksistensi universal yang tidak dibatasi hanya pada kelompok tertentu saja.'."
      },
      {
        "id": "q-kr-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi pengumuman resmi pendaftaran mata kuliah (KRS):",
        "scrambledWords": [
          "완료해 주시기 바랍니다",
          "이번 학기 수강신청을",
          "기한 내에"
        ],
        "correctOrder": [
          "이번 학기 수강신청을",
          "기한 내에",
          "완료해 주시기 바랍니다"
        ],
        "targetSentence": "이번 학기 수강신청을 기한 내에 완료해 주시기 바랍니다.",
        "audioVoiceLang": "ko-KR",
        "explanation": "Objek kalimat (이번 학기 수강신청을) + Keterangan batas waktu (기한 내에) + Permohonan tindakan formal (완료해 주시기 바랍니다)."
      },
      {
        "id": "q-kr-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat pemeriksaan berkas beasiswa pemerintah Korea:",
        "scrambledWords": [
          "꼼꼼하게 검토했습니다",
          "지원 서류를",
          "정부초청 외국인 장학생"
        ],
        "correctOrder": [
          "정부초청 외국인 장학생",
          "지원 서류를",
          "꼼꼼하게 검토했습니다"
        ],
        "targetSentence": "정부초청 외국인 장학생 지원 서류를 꼼꼼하게 검토했습니다.",
        "audioVoiceLang": "ko-KR",
        "explanation": "Frasa program beasiswa (정부초청 외국인 장학생) + Objek dokumen (지원 서류를) + Adverbia & verba lampau (꼼꼼하게 검토했습니다)."
      },
      {
        "id": "q-kr-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi kalimat penyerahan draf proposal tesis:",
        "scrambledWords": [
          "피드백을 받았습니다",
          "학위논문 연구계획서를",
          "지도교수님께 제출하여"
        ],
        "correctOrder": [
          "학위논문 연구계획서를",
          "지도교수님께 제출하여",
          "피드백을 받았습니다"
        ],
        "targetSentence": "학위논문 연구계획서를 지도교수님께 제출하여 피드백을 받았습니다.",
        "audioVoiceLang": "ko-KR",
        "explanation": "Objek proposal riset (학위논문 연구계획서를) + Aksi penyerahan ke dosen (지도교수님께 제출하여) + Hasil penerimaan evaluasi (피드백을 받았습니다)."
      },
      {
        "id": "q-kr-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi tata tertib peminjaman buku perpustakaan kampus:",
        "scrambledWords": [
          "반납해야 합니다",
          "연체되지 않도록",
          "도서관에서 대출한 전공서적은"
        ],
        "correctOrder": [
          "도서관에서 대출한 전공서적은",
          "연체되지 않도록",
          "반납해야 합니다"
        ],
        "targetSentence": "도서관에서 대출한 전공서적은 연체되지 않도록 반납해야 합니다.",
        "audioVoiceLang": "ko-KR",
        "explanation": "Topik buku pinjaman (도서관에서 대출한 전공서적은) + Klausa tujuan agar tidak denda (연체되지 않도록) + Keharusan pengembalian (반납해야 합니다)."
      },
      {
        "id": "q-kr-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Susun kata-kata acak berikut menjadi pengumuman presentasi seminar riset lab:",
        "scrambledWords": [
          "발표할 예정입니다",
          "다음 주 학술 세미나에서",
          "최신 연구 동향을"
        ],
        "correctOrder": [
          "다음 주 학술 세미나에서",
          "최신 연구 동향을",
          "발표할 예정입니다"
        ],
        "targetSentence": "다음 주 학술 세미나에서 최신 연구 동향을 발표할 예정입니다.",
        "audioVoiceLang": "ko-KR",
        "explanation": "Keterangan waktu & forum (다음 주 학술 세미나에서) + Topik tren penelitian (최신 연구 동향을) + Rencana presentasi (발표할 예정입니다)."
      },
      {
        "id": "q-kr-ar-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan bahasa Indonesia yang paling akurat untuk istilah administrasi perkuliahan: '수강신청 (Sugang sincheong)':",
        "targetSentence": "포털 시스템을 통해 전공 필수 과목의 수강신청을 완료했다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Pembayaran uang kuliah tunggal di bank kampus",
          "Permohonan kartu anggota perpustakaan",
          "Pendaftaran mata kuliah / pengisian KRS semester online",
          "Pendaftaran wisuda sarjana"
        ],
        "correctAnswerIndex": 2,
        "explanation": "수강신청 adalah registrasi pendaftaran mata kuliah perkuliahan (Course Registration)."
      },
      {
        "id": "q-kr-ar-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah beasiswa: '장학금 수혜 (Janghakgeum suhye)':",
        "targetSentence": "우수한 학업 성적을 인정받아 1년간 전액 장학금 수혜 대상자로 선발되었다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Pengembalian dana pinjaman mahasiswa",
          "Pemotongan gaji asisten laboratorium",
          "Iuran wajib organisasi kemahasiswaan",
          "Penerimaan hak / perolehan manfaat beasiswa pendidikan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "수혜 (受惠: menerima manfaat/kebaikan) + 장학금 (beasiswa) = perolehan hak beasiswa."
      },
      {
        "id": "q-kr-ar-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan dokumen akademik: '학업계획서 (Hageop gyehoekseo)':",
        "targetSentence": "대학원 입학 지원서와 함께 상세한 학업계획서를 제출해야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Rencana studi / Statement of Purpose (SOP)",
          "Buku harian kegiatan ekstrakurikuler",
          "Kuitansi sewa kamar kos mahasiswa",
          "Daftar menu kantin asrama"
        ],
        "correctAnswerIndex": 0,
        "explanation": "학업계획서 (Study Plan / Statement of Purpose) adalah proposal rencana studi akademik pelamar universitas."
      },
      {
        "id": "q-kr-ar-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari dokumen: '성적증명서 (Seongjeok jeungmyeongseo)':",
        "targetSentence": "아포스티유 인증을 받은 최종 학력 성적증명서 원본을 제출하십시오.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Ijazah kelulusan sekolah",
          "Transkrip nilai akademik resmi",
          "Surat keterangan sehat",
          "Pas foto resmi visa"
        ],
        "correctAnswerIndex": 1,
        "explanation": "성적 (nilai hasil belajar) + 증명서 (surat sertifikat keterangan) = transkrip nilai resmi."
      },
      {
        "id": "q-kr-ar-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan posisi pendidik: '지도교수 (Jido gyosu)':",
        "targetSentence": "학위논문 작성을 위해서는 반드시 소속 전공의 지도교수를 배정받아야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Dekan fakultas kedokteran",
          "Ketua senat universitas",
          "Dosen pembimbing akademik / pembimbing tugas akhir skripsi",
          "Staf keamanan gerbang kampus"
        ],
        "correctAnswerIndex": 2,
        "explanation": "지도 (membimbing) + 교수 (profesor) = Dosen Pembimbing Akademik / Thesis Supervisor."
      },
      {
        "id": "q-kr-ar-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan prosedur status studi: '휴학 (Hyuhak)' dan '복학 (Bokhak)':",
        "targetSentence": "군 복무를 위해 2년간 휴학한 후, 이번 학기에 성공적으로 복학하였다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Lulus sarjana dan wisuda pascasarjana",
          "Ujian masuk dan orientasi mahasiswa",
          "Pindah jurusan dan pindah universitas",
          "Cuti kuliah sementara dan aktif kuliah kembali"
        ],
        "correctAnswerIndex": 3,
        "explanation": "휴학 (休學) = cuti kuliah; 복학 (復學) = kembali aktif kuliah setelah masa cuti."
      },
      {
        "id": "q-kr-ar-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah integritas: '연구 윤리 (Yeon-gu yunri)':",
        "targetSentence": "모든 연구자는 연구 윤리 준수 서약서에 서명하고 교육을 이수해야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Etika penelitian ilmiah",
          "Anggaran biaya operasional riset",
          "Jadwal libur laboratorium",
          "Lomba karya ilmiah mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "연구 윤리 (Research Ethics) adalah pedoman kejujuran dan etika integritas dalam penelitian ilmiah."
      },
      {
        "id": "q-kr-ar-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan tahapan akhir kelulusan: '논문 심사 (Nonmun simsa)':",
        "targetSentence": "최종 논문 심사위원회의 엄격한 구두 구술 심사를 거쳤다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Pencetakan naskah tugas akhir di percetakan",
          "Sidang ujian dan evaluasi kelayakan tesis/disertasi",
          "Penyimpanan berkas di arsip nasional",
          "Pengumuman daftar mahasiswa baru"
        ],
        "correctAnswerIndex": 1,
        "explanation": "논문 (tesis/disertasi) + 심사 (evaluasi/sidang penilaian) = sidang ujian tesis."
      },
      {
        "id": "q-kr-ar-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan prosedur imigrasi Korea: '체류자격 연장 (Cheryujagyeok yeonjang)':",
        "targetSentence": "외국인등록증 뒷면의 체류기간 만료일 전에 체류자격 연장을 신청해야 한다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Pembuatan kartu ATM bank universitas",
          "Registrasi nomor telepon seluler pascabayar",
          "Perpanjangan izin masa tinggal visa pelajar di kantor imigrasi (HiKorea)",
          "Pendaftaran kartu transportasi umum T-Money"
        ],
        "correctAnswerIndex": 2,
        "explanation": "체류자격 (status izin tinggal) + 연장 (perpanjangan masa berlaku)."
      },
      {
        "id": "q-kr-ar-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti kelompok mata kuliah: '전공필수 (Jeongong pilsu)':",
        "targetSentence": "졸업 요건을 충족하려면 전공필수 18학점을 모두 이수해야 합니다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Mata kuliah olahraga pilihan",
          "Kuliah kerja nyata pengabdian masyarakat",
          "Bimbingan belajar bahasa asing tambahan",
          "Mata kuliah wajib program studi / jurusan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "전공 (jurusan spesialisasi) + 필수 (wajib) = mata kuliah wajib jurusan (Major Required Course)."
      },
      {
        "id": "q-kr-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca teks wacana akademik TOPIK II berikut:\n'출산율 감소와 급속한 고령화로 인해 생산가능인구가 급감하고 있다. 이에 따라 정부는 정년 연장과 함께 청년층의 고용 안정을 도모하는 입체적 고용 대책을 시급히 수립해야 한다.'\n\nApa dampak utama dari penurunan angka kelahiran dan penuaan populasi menurut teks?",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Populasi usia kerja produktif (생산가능인구) mengalami penurunan drastis",
          "Angka pengangguran usia lanjut mencapai nol persen",
          "Biaya pendidikan universitas menjadi gratis",
          "Jumlah mahasiswa asing di Korea ditutup"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Teks secara eksplisit menyatakan: '생산가능인구가 급감하고 있다' (Populasi usia kerja mengalami penurunan tajam)."
      },
      {
        "id": "q-kr-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca wacana aturan perpustakaan universitas berikut:\n'도서관 열람실 좌석은 모바일 앱을 통해 좌석 발권을 마친 후 이용해야 합니다. 발권 후 30분 이내에 게이트에 학생증을 태그하지 않거나, 2시간 이상 공석 상태가 지속될 경우 자동으로 퇴실 처리되며, 3회 누적 시 일주일간 좌석 배정이 제한됩니다.'\n\nApa yang terjadi jika mahasiswa meninggalkan kursi perpustakaan kosong selama lebih dari dua jam?",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Dikenai denda uang tunai sebesar lima ribu won",
          "Kursi otomatis dibatalkan (퇴실 처리), dan jika terjadi 3 kali akan diblokir selama satu minggu",
          "Buku yang ada di meja akan disita dan dibakar",
          "Tidak ada sanksi apapun"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Aturan menetapkan: '2시간 이상 공석 시 자동 퇴실, 3회 누적 시 일주일간 좌석 배정 제한'."
      },
      {
        "id": "q-kr-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Baca wacana seleksi Beasiswa Pemerintah Korea (GKS):\n'GKS 장학생으로 선발된 자는 본 과정 진학 전 1년간 국립국제교육원이 지정한 대학 한국어연수기관에서 한국어 연수를 이수해야 한다. 1년 연수 종료 시까지 TOPIK 3급 이상을 취득하지 못할 경우 장학생 자격이 취소된다.'\n\nBerapa level minimal TOPIK yang wajib diraih setelah 1 tahun kursus bahasa agar beasiswa GKS tidak dibatalkan?",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Minimal TOPIK Level 5",
          "Minimal TOPIK Level 1",
          "Minimal TOPIK Level 3",
          "Tidak diwajibkan ujian TOPIK"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Ketentuan resmi GKS: wajib meraih minimal TOPIK 3급 (Level 3) setelah 1 tahun kursus bahasa sebelum masuk kuliah reguler."
      },
      {
        "id": "q-kr-bb-4",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio pengumuman kantor jurusan (학과 사무실) berikut:",
        "targetSentence": "학과 사무실에서 공지합니다. 이번 학기 대학원 학위청구논문 예비심사 신청 마감은 이번 주 금요일 오후 다섯 시까지입니다. 신청서와 지도교수 추천서를 첨부하여 교학팀에 직접 제출하시기 바랍니다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Sidang skripsi dibatalkan dan diganti dengan pembuatan laporan magang",
          "Dosen pembimbing meminta seluruh mahasiswa hadir rapat di aula utama",
          "Pendaftaran beasiswa dibuka sampai akhir bulan depan",
          "Batas akhir pendaftaran ujian pra-sidang tesis adalah Jumat ini jam 17.00, berkas diserahkan langsung ke kantor jurusan"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Pengumuman: 예비심사 신청 마감 (batas pra-sidang tesis) pada Jumat pukul 17.00 diserahkan langsung (직접 제출)."
      },
      {
        "id": "q-kr-bb-5",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio petunjuk keselamatan laboratorium riset:",
        "targetSentence": "실험실 내에서는 반드시 실험복과 보안경을 착용해야 하며, 음식물 반입은 일절 금지됩니다. 화학물질 유출 사고 발생 시 비상샤워기를 즉시 가동하고 비상연락망으로 보고하십시오.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Kewajiban memakai jas lab dan kacamata pelindung, larangan membawa makanan, serta prosedur darurat tumpahan kimia",
          "Jadwal perbaikan pendingin ruangan laboratorium",
          "Instruksi pembelian alat-alat keselamatan kerja mandiri",
          "Larangan menyalakan komputer lab di atas jam sepuluh malam"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Audio memuat aturan standar lab: jas lab (실험복), kacamata (보안경), larangan makanan, dan pancuran darurat (비상샤워기)."
      },
      {
        "id": "q-kr-bb-6",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Dengarkan audio informasi pengurusan kartu identitas orang asing (외국인등록증):",
        "targetSentence": "입국일로부터 구십 일 이내에 출입국관리사무소를 방문하여 외국인등록을 마쳐야 합니다. 하이코리아 웹사이트에서 사전에 방문 예약을 하지 않으면 당일 접수가 불가능합니다.",
        "audioVoiceLang": "ko-KR",
        "options": [
          "Pembuatan visa baru di bandara internasional Incheon",
          "Kewajiban registrasi orang asing dalam 90 hari sejak kedatangan dan wajib reservasi online terlebih dahulu di HiKorea",
          "Pemeriksaan kesehatan gratis di puskesmas distrik",
          "Pembukaan rekening tabungan bank kampus"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Wajib lapor asing dalam 90 hari (90일 이내) dan wajib reservasi online di HiKorea (사전 방문 예약)."
      },
      {
        "id": "q-kr-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah bentuk tata bahasa formal penanda sudut pandang evaluasi:\n'국제 통상 환경의 급변과 공급망 불안정____, 수출 의존도가 높은 국가들은 경제적 다변화를 서둘러야 한다.'",
        "audioVoiceLang": "ko-KR",
        "options": [
          "에 불과하고 (e bulgwahago) — hanya sekadar / tidak lebih dari",
          "에 다름없다 (e dareumeopda) — sama saja dengan / tiada bedanya dengan",
          "에 비추어 볼 때 (e bichueo bol ttae) — ditinjau dari / berkaca pada",
          "을 막론하고 (eul mangnonhago) — tanpa memandang / terlepas dari"
        ],
        "correctAnswerIndex": 2,
        "explanation": "-에 비추어 볼 때 (berkaca dari / meninjau situasi...) adalah pola evaluasi formal standar dalam teks opini ilmiah."
      },
      {
        "id": "q-kr-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah bentuk tata bahasa penegasan ganda (double negative) yang menyatakan keniscayaan tak terbantahkan:\n'인공지능의 급속한 발전은 기존의 고용 구조에 지대한 변화를 가져____.'",
        "audioVoiceLang": "ko-KR",
        "options": [
          "올 리가 없다 (ol riga eopda) — mustahil akan terjadi",
          "올 턱이 없다 (ol teogi eopda) — sama sekali tidak ada alasan untuk terjadi",
          "오다시피 했다 (odasipi haetda) — hampir saja datang",
          "오지 않을 수 없다 (oji aneul su eopda) — niscaya pasti membawa perubahan (penegasan ganda)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "-지 않을 수 없다 (tidak bisa untuk tidak...) menyatakan kepastian absolut yang niscaya terjadi."
      },
      {
        "id": "q-kr-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Pilihlah bentuk kausatif perintah instruksional akademik:\n'지도교수는 연구원들에게 연구 윤리 지침을 철저히 ____ 조치했다.'",
        "audioVoiceLang": "ko-KR",
        "options": [
          "준수하도록 (junsuhadorok) — agar mematuhi / supaya menaati",
          "준수하는 바람에 (junsuhaneun barame) — gara-gara mematuhi (sebab negatif)",
          "준수하다시피 (junsuhadasipi) — sebagaimana hampir mematuhi",
          "준수할지라도 (junsuhaljirado) — sekalipun mematuhi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "-도록 하다 / -도록 조치하다 adalah konstruksi kausatif formal untuk memerintahkan suatu prosedur dipatuhi."
      },
      {
        "id": "q-kr-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Analisis kesalahan tata bahasa (문법 오류 수정): Manakah kalimat yang BENAR secara penulisan netral esai TOPIK No. 54?",
        "options": [
          "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제예요. — ... adalah tugas yang tak dapat ditunda lagi (ragam lisan 해요체).",
          "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제이다. — Dalam masyarakat modern, pelestarian lingkungan adalah tugas yang tak dapat ditunda lagi (ragam tulis 해라체).",
          "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제입니다. — ... adalah tugas yang tak dapat ditunda lagi (ragam formal lisan 하십시오체).",
          "현대 사회에서 환경 보호는 더 이상 미룰 수 없는 과제야. — ... adalah tugas yang tak dapat ditunda lagi (ragam akrab 반말)."
        ],
        "correctAnswerIndex": 1,
        "explanation": "Predikat kata benda dalam gaya netral bertuliskan '과제이다' (-이다). Bentuk -예요, -입니다, -야 dilarang dalam esai No. 54."
      },
      {
        "id": "q-kr-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam wawancara beasiswa GKS, pewawancara menanyakan: 'Apa yang akan Anda lakukan jika riset Anda di lab mengalami kebuntuan?'. Jawaban paling berbobot adalah:",
        "options": [
          "Pulang ke negara asal dan liburan selama satu bulan",
          "Menyalahkan alat laboratorium universitas yang kurang canggih",
          "Mengkaji ulang literatur internasional terbaru, berdiskusi aktif mencari solusi dengan profesor pembimbing dan rekan lab, serta melakukan eksperimen alternatif",
          "Membuat data fiktif agar laporan cepat selesai"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Kematangan mental peneliti dinilai dari ketangguhan mengatasi kegagalan eksperimen (실패 극복 능력) melalui metode ilmiah."
      },
      {
        "id": "q-kr-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Bagaimana cara menyapa Dosen Pembimbing sekaligus Ketua Jurusan saat berpapasan di lorong kampus Korea?",
        "options": [
          "야, 형! (Ya, hyeong!) — Hei, Bang! (sapaan kasar/akrab)",
          "아저씨, 안녕하세요! (Ajeossi, annyeonghaseyo!) — Paman, halo! (tidak sopan untuk dosen)",
          "선생, 잘 지냈어? (Seonsaeng, jal jinaesseo?) — Guru, apa kabar? (kalimat 반말 tidak sopan)",
          "교수님 (Gyosunim) / 학과장님 (Hakgwajangnim), 안녕하십니까! — Profesor / Bapak-Ibu Ketua Jurusan, selamat pagi/siang! (sapaan hormat resmi)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Gunakan sebutan kehormatan 교수님 (Profesor) atau jabatan struktural 학과장님 (Ketua Jurusan) disertai salam formal 안녕하십니까."
      },
      {
        "id": "q-kr-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Makna dari peribahasa empat karakter (사자성어) '일석이조 (一石二鳥)' adalah:",
        "options": [
          "Sekali mendayung dua tiga pulau terlampaui (meraih dua keuntungan sekaligus dalam satu tindakan)",
          "Melempar batu sembunyi tangan",
          "Batu yang menggelinding tidak akan ditumbuhi lumut",
          "Burung yang terbang tinggi mencari mangsa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "일석이조 (一石二鳥: melempar satu batu mendapat dua burung) = meraih dua manfaat ganda sekaligus."
      },
      {
        "id": "q-kr-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Dalam budaya laboratorium universitas Korea (랩실 문화), apa peran dari seorang '랩장' (Raepjang)?",
        "options": [
          "Dosen tamu dari luar negeri",
          "Mahasiswa senior yang ditunjuk profesor sebagai koordinator harian keselamatan, jadwal, dan administrasi laboratorium",
          "Petugas kebersihan gedung kampus",
          "Dekan fakultas teknologi"
        ],
        "correctAnswerIndex": 1,
        "explanation": "랩장 (Lab Leader) adalah mahasiswa pascasarjana senior yang memimpin koordinasi operasional riset di laboratorium."
      },
      {
        "id": "q-kr-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Berdasarkan peraturan imigrasi Korea Selatan, berapa jam batas kerja paruh waktu (알바) per minggu yang diizinkan untuk mahasiswa program gelar yang telah memiliki sertifikat TOPIK yang dipersyaratkan?",
        "options": [
          "Maksimal 40 jam per minggu setiap saat",
          "Maksimal 5 jam per minggu saja",
          "Maksimal 20 hingga 25 jam per minggu (dan tanpa batas jam saat liburan semester resmi)",
          "Dilarang bekerja sama sekali selama studi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Mahasiswa asing dengan izin resmi (체류자격외 활동허가) diizinkan bekerja paruh waktu 20-25 jam/minggu saat masa kuliah aktif."
      }
    ]
  }
};

export const ENGLISH_STUDY_TESTS: Record<string, StudyTargetTest> = {
  "en-1": {
    "id": "test-en-1",
    "title": "Bagian 1: Pilihan Ganda Akademik Inggris & Global (10 Soal PG)",
    "description": "Uji pemahaman komprehensif kosakata formal, tata bahasa standar, dan kolokasi penting untuk perkuliahan di Inggris & Global.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-en-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choose the correct Negative Inversion structure for academic rhetorical emphasis:",
        "targetSentence": "______ such unprecedented resilience in international supply chain networks.",
        "audioVoiceLang": "en-US",
        "options": [
          "Rarely econometric indicators have revealed — Susunan tanpa inversi kata kerja bantu (tidak baku)",
          "Rarely econometric indicators revealed — Susunan tanpa kata kerja bantu (tidak baku)",
          "Rarely did econometric indicators has revealed — Konjugasi ganda did + has yang salah secara gramatika",
          "Rarely have econometric indicators revealed — Jarang sekali indikator ekonometrika memperlihatkan (inversi negatif baku)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "After restrictive adverbials like 'Rarely' or 'Seldom', subject-auxiliary inversion is mandatory ('have econometric indicators revealed')."
      },
      {
        "id": "q-en-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Identify the proper mandative subjunctive form in university regulatory discourse:",
        "targetSentence": "The academic ethics board mandated that the doctoral candidate ______ all raw empirical datasets by Friday.",
        "audioVoiceLang": "en-US",
        "options": [
          "submit (bare infinitive) — menyerahkan (bentuk subjunktif mandatif yang tepat setelah \"mandates that...\")",
          "submits (third-person singular) — menyerahkan (bentuk indikatif biasa, kurang tepat untuk mandatif formal)",
          "submitted (past tense) — telah menyerahkan (bentuk lampau yang tidak sesuai konteks regulasi)",
          "will submit (future modal) — akan menyerahkan (modal futur tidak dipakai dalam subjunktif mandatif)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "In formal mandative subjunctive clauses triggered by 'mandated that', the verb must remain in bare infinitive form ('submit')."
      },
      {
        "id": "q-en-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Select the nominalised formulation that achieves optimal academic lexical density:",
        "audioVoiceLang": "en-US",
        "options": [
          "Because digital platforms proliferated really fast, lawmakers had to change how antitrust laws work. — Karena platform digital tumbuh sangat cepat, pembuat UU harus mengubah cara kerja hukum (gaya lisan).",
          "The rapid proliferation of digital platforms precipitated an overhaul of antitrust jurisprudence. — Pesatnya proliferasi platform digital memicu perombakan yurisprudensi antimonopoli (nominalisasi akademik padat).",
          "Digital platforms grew very quickly and then people decided to make new rules for them. — Platform digital tumbuh cepat lalu orang memutuskan membuat aturan baru (kosakata terlalu umum).",
          "Since everyone uses digital platforms now, courts have changed their decisions. — Karena semua orang memakai platform digital sekarang, pengadilan mengubah putusan (kurang presisi)."
        ],
        "correctAnswerIndex": 1,
        "explanation": "Nominalisation packs active verbal processes into dense, objective noun phrases ('The rapid proliferation... precipitated an overhaul')."
      },
      {
        "id": "q-en-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Which sentence demonstrates appropriate Academic Hedging for empirical findings?",
        "audioVoiceLang": "en-US",
        "options": [
          "Our experiment proves with 100% certainty that all previous scientists were completely mistaken. — Eksperimen kami membuktikan 100% bahwa semua ilmuwan terdahulu salah total (klaim absolut berlebihan).",
          "This data unquestionably demonstrates the absolute truth of our theory. — Data ini tanpa keraguan menunjukkan kebenaran mutlak teori kami (tidak objektif).",
          "The preliminary dataset appears to suggest a tentative correlation between the two variables. — Data awal tampaknya mengindikasikan korelasi tentatif antara kedua variabel (hedging akademik tepat).",
          "Everyone must agree that these results cannot possibly be challenged. — Semua orang wajib setuju bahwa hasil ini mustahil dibantah (dogmatis)."
        ],
        "correctAnswerIndex": 2,
        "explanation": "Academic hedging uses cautious epistemic stance ('appears to suggest a tentative correlation') rather than absolutist dogmatism."
      },
      {
        "id": "q-en-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Select the correct inverted conditional structure without 'if' for formal correspondence:",
        "targetSentence": "______ further clarification regarding the methodology, please contact the principal investigator.",
        "audioVoiceLang": "en-US",
        "options": [
          "If should you require — Gabungan \"if\" dan inversi yang salah secara sintaksis",
          "Were you require — Bentuk \"were\" yang salah karena diikuti bare infinitive tanpa \"to\"",
          "Had you required — Kondisional tipe 3 (masa lampau tak nyata), tidak tepat untuk korespondensi masa depan",
          "Should you require — Apabila Anda memerlukan (inversi kondisional formal tanpa \"if\")"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Inverted conditional Type 1 uses 'Should + Subject + bare infinitive' ('Should you require') without the conjunction 'if'."
      },
      {
        "id": "q-en-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choose the formal complex preposition that correctly indicates legal conformity:",
        "targetSentence": "The research protocol was audited ______ institutional biohazard regulations.",
        "audioVoiceLang": "en-US",
        "options": [
          "in accordance with — sesuai dengan / berdasarkan ketentuan hukum",
          "in accordance to — preposisi pasangan yang salah (seharusnya \"with\")",
          "pursuant of — preposisi pasangan yang salah (seharusnya \"pursuant to\")",
          "with compliance at — kolokasi preposisi yang tidak baku (seharusnya \"in compliance with\")"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The standard collocations are 'in accordance with' and 'pursuant to'."
      },
      {
        "id": "q-en-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Identify the thesis statement that maintains strict syntactic parallelism:",
        "audioVoiceLang": "en-US",
        "options": [
          "The initiative aims to enhance transparency, streamlining governance, and innovation. — Mencampur to-infinitive, gerund, dan nomina (tidak paralel).",
          "The initiative aims to enhance transparency, to streamline governance, and to foster innovation. — Inisiatif ini bertujuan meningkatkan transparansi, merampingkan tata kelola, dan mendorong inovasi (paralelisme utuh).",
          "The initiative aims at transparency, to streamline governance, and fostering innovation. — Mencampur preposisi, to-infinitive, dan gerund (tidak paralel).",
          "The initiative aims to enhance transparency, stream governance, and fostered innovation. — Mencampur present infinitive dan past participle (tidak paralel)."
        ],
        "correctAnswerIndex": 1,
        "explanation": "Parallelism requires consistent grammatical structures across listed items ('to enhance... to streamline... to foster')."
      },
      {
        "id": "q-en-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choose the correct concessive transition marker that pairs with 'nevertheless':",
        "targetSentence": "______, the upfront capital expenditure is substantial; nevertheless, the projected operational efficiencies justify the investment.",
        "audioVoiceLang": "en-US",
        "options": [
          "Because — Karena (konjungsi subordinatif kausal)",
          "Consequently — Akibatnya / oleh karena itu (transisi akibat)",
          "Admittedly — Memang harus diakui (penanda konsesif yang berpasangan dengan \"nevertheless\")",
          "Furthermore — Selain itu / lebih lanjut (transisi aditif)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "'Admittedly... nevertheless' is a classic rhetorical pairing that concedes a counterpoint before reasserting the core thesis."
      },
      {
        "id": "q-en-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Select the diplomatic euphemism used in academic peer review to state that an empirical section is deficient:",
        "targetSentence": "The statistical verification in Chapter 4 regrettably ______.",
        "audioVoiceLang": "en-US",
        "options": [
          "is complete garbage — sama sekali sampah (bahasa kasar tidak ilmiah)",
          "fails in every single way — gagal total dalam segala hal (hiperbola emosional)",
          "is totally useless — sama sekali tidak berguna (bahasa informal kasar)",
          "leaves much to be desired — masih sangat perlu ditingkatkan / belum memadai (eufemisme akademik sopan)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "'Leaves much to be desired' is the standard diplomatic understatement in British and American peer reviews for substandard work."
      },
      {
        "id": "q-en-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choose the academic verb that correctly collocates with 'hypothesis' in research reporting:",
        "targetSentence": "Subsequent longitudinal trials failed to ______ the initial hypothesis.",
        "audioVoiceLang": "en-US",
        "options": [
          "substantiate (corroborate with evidence) — memperkuat / membuktikan kebenaran hipotesis dengan bukti empiris",
          "manufacture — memproduksi barang pabrik / mengarang cerita",
          "exaggerate — melebih-lebihkan secara tidak proporsional",
          "speculate — berspekulasi tanpa bukti"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The academic collocation is 'substantiate a hypothesis' (memperkuat/memvalidasi hipotesis dengan data empiris)."
      }
    ]
  },
  "en-2": {
    "id": "test-en-2",
    "title": "Bagian 2: Terjemahan Kalimat Akademik (10 Soal Terjemahkan)",
    "description": "Uji kemampuan menyusun esai motivasi, proposal rencana riset, etika akademik, dan korespondensi formal dengan dosen di Inggris & Global.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-en-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Seldom have international macroeconomic indicators shown such profound resilience amidst global supply disruptions. (ˈsɛldəm hæv ˌɪntəˈnæʃnəl ˌmækrəʊˌiːkəˈnɒmɪk ˈɪndɪkeɪtəz ʃəʊn sʌtʃ prəˈfaʊnd rɪˈzɪlɪəns əˈmɪdst ˈgləʊbl səˈplaɪ dɪsˈrʌpʃnz.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Jarang sekali indikator ekonomi makro internasional menunjukkan ketahanan yang begitu mendalam di tengah gangguan pasokan rantai global.",
        "keywords": [
          "jarang",
          "sekali",
          "indikator",
          "ekonomi"
        ],
        "explanation": "Kalimat akademik pola Negative Inversion & Emphatic Fronting (Formal Rhetorical Emphasis): 'Seldom have international macroeconomic indicators shown such profound resilience amidst global supply disruptions.' diterjemahkan secara akurat menjadi 'Jarang sekali indikator ekonomi makro internasional menunjukkan ketahanan yang begitu mendalam di tengah gangguan pasokan rantai global.'."
      },
      {
        "id": "q-en-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "The academic ethics committee recommended that the professor's research grant be temporarily suspended pending thorough investigation. (ði ˌækəˈdɛmɪk ˈɛθɪks kəˈmɪti ˌrɛkəˈmɛndɪd ðæt ðə prəˈfɛsəz rɪˈsɜːtʃ grɑːnt biː ˈtɛmpərərəli səˈspɛndɪd ˈpɛndɪŋ ˈθʌrə ɪnˌvɛstɪˈgeɪʃn.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Komite etika akademik merekomendasikan agar dana hibah penelitian profesor tersebut dibekukan sementara seraya menunggu investigasi menyeluruh.",
        "keywords": [
          "komite",
          "etika",
          "akademik",
          "merekomendasikan"
        ],
        "explanation": "Kalimat akademik pola The Subjunctive Mood in Formal Mandates & Nuanced Recommendations: 'The academic ethics committee recommended that the professor's research grant be temporarily suspended pending thorough investigation.' diterjemahkan secara akurat menjadi 'Komite etika akademik merekomendasikan agar dana hibah penelitian profesor tersebut dibekukan sementara seraya menunggu investigasi menyeluruh.'."
      },
      {
        "id": "q-en-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "The rapid proliferation of generative artificial intelligence necessitates a comprehensive recalibration of intellectual property statutes. (ðə ˈræpɪd prəˌlɪfəˈreɪʃn ɒv ˈdʒɛnərətɪv ˌɑːtɪˈfɪʃl ɪnˈtɛlɪdʒəns nɪˈsɛsɪteɪts ə ˌkɒmprɪˈhɛnsɪv ˌriːˌkælɪˈbreɪʃn ɒv ˌɪntɪˈlɛktʃʊəl ˈprɒpəti ˈstætjuːts.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Penyebaran pesat kecerdasan buatan generatif menuntut kalibrasi ulang yang komprehensif terhadap undang-undang hak kekayaan intelektual.",
        "keywords": [
          "penyebaran",
          "pesat",
          "kecerdasan",
          "buatan"
        ],
        "explanation": "Kalimat akademik pola Nominalisation for Academic Conciseness & Dense Prose: 'The rapid proliferation of generative artificial intelligence necessitates a comprehensive recalibration of intellectual property statutes.' diterjemahkan secara akurat menjadi 'Penyebaran pesat kecerdasan buatan generatif menuntut kalibrasi ulang yang komprehensif terhadap undang-undang hak kekayaan intelektual.'."
      },
      {
        "id": "q-en-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "The longitudinal dataset appears to indicate a statistically significant correlation between early bilingualism and executive function enhancement. (ðə ˌlɒŋgɪˈtjuːdɪnl ˈdeɪtəsɛt əˈpɪəz tuː ˈɪndɪkeɪt ə stəˈtɪstɪkli sɪgˈnɪfɪkənt ˌkɒrəˈleɪʃn bɪˈtwiːn ˈɜːli baɪˈlɪŋgwəlɪzm ænd ɪgˈzɛkjʊtɪv ˈfʌŋkʃn ɪnˈhɑːnsmənt.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Kumpulan data longitudinal tersebut tampaknya mengindikasikan korelasi yang signifikan secara statistik antara kedwibahasaan sejak dini dan peningkatan fungsi eksekutif.",
        "keywords": [
          "kumpulan",
          "data",
          "longitudinal",
          "tersebut"
        ],
        "explanation": "Kalimat akademik pola Academic Hedging & Nuanced Epistemic Stance: 'The longitudinal dataset appears to indicate a statistically significant correlation between early bilingualism and executive function enhancement.' diterjemahkan secara akurat menjadi 'Kumpulan data longitudinal tersebut tampaknya mengindikasikan korelasi yang signifikan secara statistik antara kedwibahasaan sejak dini dan peningkatan fungsi eksekutif.'."
      },
      {
        "id": "q-en-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Should foreign delegates experience any scheduling conflicts, the liaison office stands ready to facilitate itinerary adjustments. (ʃʊd ˈfɒrɪn ˈdɛlɪgɪts ɪkˈspɪərɪəns ˈɛni ˈʃɛdjuːlɪŋ ˈkɒnflɪkts, ðə liˈeɪzɒn ˈɒfɪs stændz ˈrɛdi tuː fəˈsɪlɪteɪt aɪˈtɪnərəri əˈdʒʌstmənts.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Sekiranya para delegasi asing mengalami kendala jadwal acara, kantor penghubung siap sedia memfasilitasi penyesuaian rencana perjalanan.",
        "keywords": [
          "sekiranya",
          "delegasi",
          "asing",
          "mengalami"
        ],
        "explanation": "Kalimat akademik pola Inverted Conditionals without 'If' (Had, Were, Should): 'Should foreign delegates experience any scheduling conflicts, the liaison office stands ready to facilitate itinerary adjustments.' diterjemahkan secara akurat menjadi 'Sekiranya para delegasi asing mengalami kendala jadwal acara, kantor penghubung siap sedia memfasilitasi penyesuaian rencana perjalanan.'."
      },
      {
        "id": "q-en-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Pursuant to the provisions stipulated in Section 4 of the Employment Rights Act, severance packages must be disbursed within fourteen business days. (pəˈsjuːənt tuː ðə prəˈvɪʒnz ˈstɪpjʊleɪtɪd ɪn ˈsɛkʃn fɔːr ɒv ði ɪmˈplɔɪmənt raɪts ækt, ˈsɛvərəns ˈpækɪdʒɪz mʌst biː dɪsˈbɜːst wɪˈðɪn ˈfɔːˈtiːn ˈbɪznɪs deɪz.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Sesuai dengan ketentuan yang diatur dalam Bagian 4 Undang-Undang Hak Ketenagakerjaan, paket uang pesangon harus dicairkan dalam waktu empat belas hari kerja.",
        "keywords": [
          "sesuai",
          "ketentuan",
          "diatur",
          "bagian"
        ],
        "explanation": "Kalimat akademik pola Complex Prepositional Phrases & Formal Administrative Register: 'Pursuant to the provisions stipulated in Section 4 of the Employment Rights Act, severance packages must be disbursed within fourteen business days.' diterjemahkan secara akurat menjadi 'Sesuai dengan ketentuan yang diatur dalam Bagian 4 Undang-Undang Hak Ketenagakerjaan, paket uang pesangon harus dicairkan dalam waktu empat belas hari kerja.'."
      },
      {
        "id": "q-en-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Neither by suppressing academic dissension nor by withholding critical evidentiary audits can an institution safeguard its enduring intellectual integrity. (ˈnaɪðə baɪ səˈprɛsɪŋ ˌækəˈdɛmɪk dɪˈsɛnʃn nɔː baɪ wɪðˈhəʊldɪŋ ˈkrɪtɪkl ˌɛvɪˈdɛnʃəri ˈɔːdɪts kæn ən ˌɪnstɪˈtjuːʃn ˈseɪfgɑːd ɪts ɪnˈdjʊərɪŋ ˌɪntɪˈlɛktʃʊəl ɪnˈtɛgrɪti.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Baik dengan cara membungkam perbedaan pendapat akademik maupun dengan menahan audit pembuktian penting, suatu institusi tidak akan pernah bisa menjaga integritas intelektualnya yang abadi.",
        "keywords": [
          "baik",
          "cara",
          "membungkam",
          "perbedaan"
        ],
        "explanation": "Kalimat akademik pola Rhetorical Parallelism & Balanced Periodic Sentences: 'Neither by suppressing academic dissension nor by withholding critical evidentiary audits can an institution safeguard its enduring intellectual integrity.' diterjemahkan secara akurat menjadi 'Baik dengan cara membungkam perbedaan pendapat akademik maupun dengan menahan audit pembuktian penting, suatu institusi tidak akan pernah bisa menjaga integritas intelektualnya yang abadi.'."
      },
      {
        "id": "q-en-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Formidable though the diplomatic obstacles appeared, the summit interlocutors succeeded in formulating a provisional demilitarisation roadmap. (ˈfɔːmɪdəbl ðəʊ ðə ˌdɪpləˈmætɪk ˈɒbstəklz əˈpɪəd, ðə ˈsʌmɪt ˌɪntəˈlɒkjʊtəz səkˈsiːdɪd ɪn ˈfɔːmjʊleɪtɪŋ ə prəˈvɪʒənl ˌdiːˌmɪlɪtəraɪˈzeɪʃn ˈrəʊdmæp.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Betapapun beratnya rintangan diplomatik tersebut terlihat, para negosiator dalam konferensi tingkat tinggi itu berhasil merumuskan peta jalan demiliterisasi sementara.",
        "keywords": [
          "betapapun",
          "beratnya",
          "rintangan",
          "diplomatik"
        ],
        "explanation": "Kalimat akademik pola Stylistic Concession & Antithesis (Admittedly, Albeit, In Spite of): 'Formidable though the diplomatic obstacles appeared, the summit interlocutors succeeded in formulating a provisional demilitarisation roadmap.' diterjemahkan secara akurat menjadi 'Betapapun beratnya rintangan diplomatik tersebut terlihat, para negosiator dalam konferensi tingkat tinggi itu berhasil merumuskan peta jalan demiliterisasi sementara.'."
      },
      {
        "id": "q-en-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "The bilateral communique noted that recent cross-border airspace encroachments were viewed with grave concern by international observers. (ðə baɪˈlætərəl kəˈmjuːnɪkeɪ ˈnəʊtɪd ðæt ˈriːsnt krɒs-ˈbɔːdər ˈeəspeɪs ɪnˈkrəʊtʃmənts wɜː vjuːd wɪð greɪv kənˈsɜːn baɪ ˌɪntəˈnæʃnəl əbˈzɜːvəz.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Komunike bilateral tersebut mencatat bahwa pelanggaran ruang udara lintas batas baru-baru ini dipandang dengan keprihatinan mendalam oleh para pengamat internasional.",
        "keywords": [
          "komunike",
          "bilateral",
          "tersebut",
          "mencatat"
        ],
        "explanation": "Kalimat akademik pola Nuanced Diplomatic Modals & Bureaucratic Prudence: 'The bilateral communique noted that recent cross-border airspace encroachments were viewed with grave concern by international observers.' diterjemahkan secara akurat menjadi 'Komunike bilateral tersebut mencatat bahwa pelanggaran ruang udara lintas batas baru-baru ini dipandang dengan keprihatinan mendalam oleh para pengamat internasional.'."
      },
      {
        "id": "q-en-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Notwithstanding the proliferation of empirical scholarship addressing transnational capital mobility, significant lacunae persist regarding the sovereign debt vulnerability of emerging market economies. (ˌnɒtwɪθˈstændɪŋ ðə prəˌlɪfəˈreɪʃn ɒv ɪmˈpɪrɪkl ˈskɒləʃɪp əˈdrɛsɪŋ trænzˈnæʃnəl ˈkæpɪtl məʊˈbɪlɪti, sɪgˈnɪfɪkənt ləˈkjuːniː pəˈsɪst rɪˈgɑːdɪŋ ðə ˈsɒvrɪn dɛt ˌvʌlnərəˈbɪlɪti ɒv ɪˈmɜːdʒɪŋ ˈmɑːkɪt iːˈkɒnəmiz.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Meskipun terjadi pertumbuhan pesat riset empiris yang menelaah mobilitas modal lintas negara, kesenjangan signifikan masih bertahan terkait kerentanan utang luar negeri negara-negara berkembang.",
        "keywords": [
          "meskipun",
          "terjadi",
          "pertumbuhan",
          "pesat"
        ],
        "explanation": "Kalimat akademik pola C1 Capstone: Academic Research Paper Discursive Architecture & University Dissertation Prose: 'Notwithstanding the proliferation of empirical scholarship addressing transnational capital mobility, significant lacunae persist regarding the sovereign debt vulnerability of emerging market economies.' diterjemahkan secara akurat menjadi 'Meskipun terjadi pertumbuhan pesat riset empiris yang menelaah mobilitas modal lintas negara, kesenjangan signifikan masih bertahan terkait kerentanan utang luar negeri negara-negara berkembang.'."
      }
    ]
  },
  "en-3": {
    "id": "test-en-3",
    "title": "Bagian 3: Rekonstruksi Sintaksis & Struktur Kalimat Inggris & Global (5 Soal Sambung Kata)",
    "description": "Uji keterampilan merangkai kata dan frasa acak menjadi kalimat instruksi perkuliahan, riset lab, dan administrasi beasiswa yang runtut.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-en-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Reorder the scrambled phrases into a grammatically coherent academic admissions instruction:",
        "scrambledWords": [
          "their authenticated transcripts",
          "prior to the deadline",
          "prospective international scholars",
          "are required to submit"
        ],
        "correctOrder": [
          "prospective international scholars",
          "are required to submit",
          "their authenticated transcripts",
          "prior to the deadline"
        ],
        "targetSentence": "Prospective international scholars are required to submit their authenticated transcripts prior to the deadline.",
        "audioVoiceLang": "en-US",
        "explanation": "Subject phrase (prospective international scholars) + Passive mandate (are required to submit) + Object (their authenticated transcripts) + Prepositional time modifier (prior to the deadline)."
      },
      {
        "id": "q-en-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Reorder the scrambled phrases into a formal empirical findings statement:",
        "scrambledWords": [
          "and variable B",
          "between variable A",
          "a statistically significant correlation",
          "the empirical findings indicate"
        ],
        "correctOrder": [
          "the empirical findings indicate",
          "a statistically significant correlation",
          "between variable A",
          "and variable B"
        ],
        "targetSentence": "The empirical findings indicate a statistically significant correlation between variable A and variable B.",
        "audioVoiceLang": "en-US",
        "explanation": "Reporting clause (the empirical findings indicate) + Noun phrase (a statistically significant correlation) + Correlative prepositional complement (between variable A and variable B)."
      },
      {
        "id": "q-en-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Reorder the scrambled phrases into a bioethics research compliance protocol sentence:",
        "scrambledWords": [
          "review board",
          "from the institutional",
          "must receive prior clearance",
          "all biomedical research protocols"
        ],
        "correctOrder": [
          "all biomedical research protocols",
          "must receive prior clearance",
          "from the institutional",
          "review board"
        ],
        "targetSentence": "All biomedical research protocols must receive prior clearance from the institutional review board.",
        "audioVoiceLang": "en-US",
        "explanation": "Subject (all biomedical research protocols) + Modal obligation (must receive prior clearance) + Source authority (from the institutional review board)."
      },
      {
        "id": "q-en-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Reorder the scrambled phrases into an academic registrar course enrollment announcement:",
        "scrambledWords": [
          "through the central academic portal",
          "starting next Monday",
          "graduate students may register",
          "for elective seminars"
        ],
        "correctOrder": [
          "graduate students may register",
          "for elective seminars",
          "through the central academic portal",
          "starting next Monday"
        ],
        "targetSentence": "Graduate students may register for elective seminars through the central academic portal starting next Monday.",
        "audioVoiceLang": "en-US",
        "explanation": "Subject & modal verb (graduate students may register) + Course complement (for elective seminars) + Means (through the central academic portal) + Temporal clause (starting next Monday)."
      },
      {
        "id": "q-en-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Reorder the scrambled phrases into a doctoral dissertation defense summary sentence:",
        "scrambledWords": [
          "yesterday afternoon",
          "before the academic tribunal",
          "her dissertation on renewable energy",
          "the doctoral candidate successfully defended"
        ],
        "correctOrder": [
          "the doctoral candidate successfully defended",
          "her dissertation on renewable energy",
          "before the academic tribunal",
          "yesterday afternoon"
        ],
        "targetSentence": "The doctoral candidate successfully defended her dissertation on renewable energy before the academic tribunal yesterday afternoon.",
        "audioVoiceLang": "en-US",
        "explanation": "Subject & transitive verb (the doctoral candidate successfully defended) + Direct object (her dissertation on renewable energy) + Locational tribunal (before the academic tribunal) + Time (yesterday afternoon)."
      }
    ]
  },
  "en-4": {
    "id": "test-en-4",
    "title": "Bagian 4: Ketepatan Makna Istilah Perkuliahan Inggris & Global (10 Soal Artikan)",
    "description": "Uji akurasi penerjemahan dan pemahaman istilah krusial kampus (KRS, transkrip, sidang tesis, visa pelajar, dan beasiswa).",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-en-ar-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan bahasa Indonesia yang paling tepat untuk dokumen seleksi: 'Statement of Purpose (SOP)':",
        "targetSentence": "Applicants must submit a 1,000-word Statement of Purpose articulating their research motivations.",
        "audioVoiceLang": "en-US",
        "options": [
          "Daftar riwayat hidup riwayat pekerjaan",
          "Kuitansi bukti pembayaran formulir pendaftaran",
          "Surat keterangan catatan kepolisian",
          "Surat pernyataan tujuan dan motivasi studi akademik pelamar"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Statement of Purpose (SOP) adalah esai akademik formal yang menguraikan latar belakang intelektual, tujuan riset, dan motivasi pelamar."
      },
      {
        "id": "q-en-ar-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah publikasi ilmiah: 'Peer-Reviewed Journal':",
        "targetSentence": "Publishing in a peer-reviewed journal is an essential prerequisite for doctoral graduation.",
        "audioVoiceLang": "en-US",
        "options": [
          "Jurnal ilmiah bereputasi yang ditinjau dan dievaluasi secara ketat oleh para pakar sejawat (mitra bestari)",
          "Majalah berita umum mingguan di perpustakaan",
          "Buku catatan harian mahasiswa di laboratorium",
          "Koran dinding pengumuman kegiatan organisasi mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Peer-reviewed journal adalah jurnal ilmiah yang menerapkan mekanisme penelaahan sejawat sebelum sebuah artikel dinyatakan layak terbit."
      },
      {
        "id": "q-en-ar-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan berkas rekomendasi: 'Letters of Recommendation (LoR)':",
        "targetSentence": "Three confidential Letters of Recommendation must be submitted directly by academic referees.",
        "audioVoiceLang": "en-US",
        "options": [
          "Surat pengantar izin cuti kuliah",
          "Surat rekomendasi rahasia dari dosen pembimbing atau akademisi rujukan",
          "Surat penagihan biaya asrama universitas",
          "Surat ucapan selamat ulang tahun dari rektor"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Letters of Recommendation (LoR) adalah surat penilaian kompetensi dari profesor rujukan pelamar."
      },
      {
        "id": "q-en-ar-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah akademik: 'Dissertation Defense / Viva Voce':",
        "targetSentence": "The candidate was awarded the PhD degree upon successfully passing the oral dissertation defense.",
        "audioVoiceLang": "en-US",
        "options": [
          "Lomba debat mahasiswa antar fakultas",
          "Upacara penyambutan mahasiswa baru",
          "Sidang ujian lisan pertahanan disertasi doktoral di hadapan dewan penguji",
          "Pemeriksaan kesehatan fisik calon wisudawan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Dissertation defense (atau Viva Voce di sistem Inggris) adalah sidang ujian lisan akhir untuk mempertahankan disertasi PhD."
      },
      {
        "id": "q-en-ar-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat untuk kurikulum: 'Syllabus & Prerequisites':",
        "targetSentence": "Please review the course syllabus to ensure you have fulfilled all necessary prerequisites.",
        "audioVoiceLang": "en-US",
        "options": [
          "Denah gedung kampus dan jadwal bus antar-jemput",
          "Daftar buku wajib di toko buku universitas",
          "Jadwal ujian akhir semester dan libur musim panas",
          "Silabus perkuliahan dan mata kuliah prasyarat"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Syllabus = rencana pembelajaran semester; Prerequisites = syarat kelulusan mata kuliah dasar sebelum mengambil mata kuliah lanjutan."
      },
      {
        "id": "q-en-ar-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah beasiswa penuh: 'Full Tuition Waiver & Living Stipend':",
        "targetSentence": "The prestigious scholarship package encompasses a full tuition waiver and a monthly living stipend.",
        "audioVoiceLang": "en-US",
        "options": [
          "Pembebasan 100% biaya kuliah serta tunjangan biaya hidup bulanan",
          "Pinjaman uang kuliah yang harus dikembalikan setelah lulus",
          "Diskon sepuluh persen biaya pembelian buku teks",
          "Bantuan kuota internet dan makan siang gratis di kantin"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tuition waiver = pembebasan biaya kuliah; Living stipend = tunjangan biaya hidup bulanan (Full Scholarship)."
      },
      {
        "id": "q-en-ar-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan parameter integritas: 'Plagiarism Similarity Index':",
        "targetSentence": "Manuscripts exceeding a 15% plagiarism similarity index on Turnitin will be automatically flagged for investigation.",
        "audioVoiceLang": "en-US",
        "options": [
          "Peringkat kelulusan sarjana berdasarkan nilai IPK",
          "Indeks persentase kemiripan teks / uji plagiarisme pada piranti lunak Turnitin",
          "Jumlah kata yang diketik dalam satu halaman tugas",
          "Batas kecepatan internet di laboratorium komputer"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Similarity index adalah skor persentase kesamaan teks dengan basis data internet dan karya ilmiah terdahulu."
      },
      {
        "id": "q-en-ar-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah status mutu perguruan tinggi: 'Institutional Accreditation':",
        "targetSentence": "Enrolling in a university with rigorous institutional accreditation ensures international degree recognition.",
        "audioVoiceLang": "en-US",
        "options": [
          "Pemberian bantuan dana riset dari alumni",
          "Pembangunan gedung laboratorium baru",
          "Akreditasi resmi mutu institusi pendidikan tinggi oleh badan evaluasi independen",
          "Perekrutan dosen tamu dari industri teknologi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Institutional accreditation adalah status legal penjaminan mutu sebuah perguruan tinggi di tingkat nasional/global."
      },
      {
        "id": "q-en-ar-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan istilah metodologi: 'Methodological Triangulation':",
        "targetSentence": "By deploying methodological triangulation, the study integrates quantitative surveys and qualitative interviews.",
        "audioVoiceLang": "en-US",
        "options": [
          "Pengukuran sudut geometri dalam pemetaan lahan",
          "Pemisahan tiga kelompok responden berdasarkan usia",
          "Pembagian tiga bab utama dalam naskah skripsi",
          "Triangulasi metodologis (penggabungan berbagai metode riset untuk memverifikasi keabsahan data)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Methodological triangulation adalah teknik validasi ilmiah yang menggabungkan berbagai pendekatan metodologis (mixed-methods)."
      },
      {
        "id": "q-en-ar-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah jabatan asisten pengajar: 'Graduate Teaching Assistantship (GTA)':",
        "targetSentence": "The department awarded her a Graduate Teaching Assistantship to facilitate undergraduate discussion sections.",
        "audioVoiceLang": "en-US",
        "options": [
          "Beasiswa asisten pengajar pascasarjana untuk mendampingi sesi tutorial/praktikum mahasiswa sarjana",
          "Penghargaan mahasiswa terpopuler di fakultas",
          "Tugas membersihkan ruang perpustakaan setiap sore",
          "Magang kerja paruh waktu di restoran kampus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Teaching Assistantship (TA/GTA) adalah posisi akademik berbayar di universitas Barat di mana mahasiswa pascasarjana mengajar kelas tutorial."
      }
    ]
  },
  "en-5": {
    "id": "test-en-5",
    "title": "Bagian 5: Wacana Dokkai, Listening Audio, & Kasus Kampus Inggris & Global (15 Soal Bebas)",
    "description": "Uji analitis komprehensif terhadap silabus ujian, aturan perpustakaan, audio pengumuman jurusan, etika lab, dan studi kasus nyata.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-en-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Read the following academic syllabus excerpt:\n'Grading Policy: Final Proctored Exam (50%), Research Term Paper (30%), Seminar Participation (20%). Late submissions of the term paper incur a penalty of 5 percentage points per calendar day. Submissions delayed by more than 7 days will receive an automatic failing grade (0%).'\n\nWhat is the consequence if a student submits the research paper 8 days after the official deadline?",
        "audioVoiceLang": "en-US",
        "options": [
          "The grade is docked by exactly 40 percentage points",
          "The submission automatically receives a failing grade of zero percent (0%)",
          "The student is granted an oral re-examination",
          "The student must write an additional book review"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The text explicitly states: 'Submissions delayed by more than 7 days will receive an automatic failing grade (0%).'"
      },
      {
        "id": "q-en-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Read the university library borrowing regulation:\n'Undergraduate students may borrow up to 10 standard monographs for 21 days, whereas postgraduate researchers are entitled to borrow 30 items for up to 90 days. Special collections, rare manuscripts, and course reserves are strictly non-circulating and may only be consulted within the designated reading room.'\n\nWhere may students consult rare manuscripts and course reserve materials?",
        "audioVoiceLang": "en-US",
        "options": [
          "They may be borrowed and taken home for 90 days",
          "In the campus dormitory cafeteria",
          "Exclusively within the designated library reading room (strictly non-circulating)",
          "They can only be read online via smartphone"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The policy specifies that rare manuscripts are 'strictly non-circulating and may only be consulted within the designated reading room.'"
      },
      {
        "id": "q-en-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Read the scholarship guidelines for international candidates:\n'To qualify for the Chevening/Fulbright Postgraduate Fellowship, applicants must possess a minimum of two years of substantive professional work experience (equivalent to at least 2,800 hours) and have completed an undergraduate degree with at least upper second-class honours (2:1). Meeting these thresholds does not guarantee shortlisting for the panel interview.'\n\nWhat are the dual baseline eligibility criteria specified in the text?",
        "audioVoiceLang": "en-US",
        "options": [
          "A doctorate in economics and fluent bilingualism in four languages",
          "Five published papers in Scopus Q1 journals and ten recommendation letters",
          "Full residency citizenship in the United Kingdom or United States",
          "At least 2 years (2,800 hours) of professional experience and an undergraduate degree of at least 2:1 honours"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The criteria are two years of work experience (2,800 hours) plus a 2:1 honours bachelor's degree."
      },
      {
        "id": "q-en-bb-4",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Listen to the university registrar announcement and select the accurate summary:",
        "targetSentence": "All international graduate scholars holding student visas must complete mandatory in-person identity verification at the Student Services Hub before Friday at 4:00 PM. Failure to present your original passport and biometric residence permit will result in immediate registration hold.",
        "audioVoiceLang": "en-US",
        "options": [
          "Mandatory in-person identity verification with original passport and BRP before Friday 4 PM to prevent registration hold",
          "All campus libraries will be closed on Friday afternoon for inventory checks",
          "Students are invited to a welcome party at the international dormitory hall",
          "Final examination timetables have been published online"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The announcement mandates in-person verification with original passport/BRP before Friday 4:00 PM under penalty of a registration hold."
      },
      {
        "id": "q-en-bb-5",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Listen to the laboratory biosafety officer's briefing:",
        "targetSentence": "Before commencing any procedures involving volatile organic compounds, ensure that the mechanical exhaust ventilation hood is fully operational and the sash is positioned at the marked safety line. In the event of an accidental solvent spill exceeding 500 millilitres, evacuate the room and activate the emergency spill protocol.",
        "audioVoiceLang": "en-US",
        "options": [
          "Switching off all electrical equipment every hour to save energy",
          "Verifying exhaust ventilation hood operation and evacuating if a solvent spill exceeds 500 mL",
          "Wearing headphones while conducting chemical synthesis experiments",
          "Cleaning laboratory glassware using standard tap water without soap"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The audio dictates fume hood sash positioning and immediate evacuation if an organic chemical spill exceeds 500 mL."
      },
      {
        "id": "q-en-bb-6",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Listen to the graduate thesis coordinator's instruction:",
        "targetSentence": "Doctoral dissertations must be formatted strictly in accordance with university typography guidelines and uploaded to the institutional repository in PDF/A format by the first of November. Electronic submissions will undergo automated similarity analysis before distribution to the external examiners.",
        "audioVoiceLang": "en-US",
        "options": [
          "Hard copies of dissertations must be hand-bound in leather and submitted to the dean",
          "External examiners will conduct oral interviews before reviewing the written manuscript",
          "Dissertations must adhere to typography guidelines, be uploaded in PDF/A format by Nov 1, and pass similarity analysis prior to external examination",
          "Dissertation deadlines are indefinitely postponed until next spring semester"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Key points: PDF/A format, Nov 1 deadline, institutional repository upload, and pre-examination similarity checks."
      },
      {
        "id": "q-en-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Select the formal discourse marker that introduces a logical consequence in academic prose:\n'The macroeconomic model failed to account for sudden capital flight; ______, its fiscal projections proved substantially inaccurate.'",
        "audioVoiceLang": "en-US",
        "options": [
          "conversely — sebaliknya / di sisi lain",
          "nevertheless — namun demikian / meskipun begitu",
          "notwithstanding — terlepas dari / kendatipun",
          "consequently (as a direct result) — akibatnya / oleh karena itu"
        ],
        "correctAnswerIndex": 3,
        "explanation": "'Consequently' introduces a direct logical cause-and-effect relationship between the model's flaw and inaccurate projections."
      },
      {
        "id": "q-en-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Choose the correct academic passive modal construction for institutional policy:\n'In light of geopolitical volatility, it ______ to diversify institutional foreign exchange endowments.'",
        "audioVoiceLang": "en-US",
        "options": [
          "is deemed advisable — dipandang bijaksana / dianjurkan secara institusional",
          "is dreaming advisable — kesalahan leksikal (\"dreaming\" = bermimpi)",
          "is deeming advisable — bentuk aktif progresif yang salah (seharusnya pasif \"is deemed\")",
          "was deeming advice — kesalahan bentuk aktif dan kelas kata nomina"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'It is deemed advisable' (dipandang bijaksana/dianjurkan) is the standard formal impersonal passive in administrative policy."
      },
      {
        "id": "q-en-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Identify the sentence that correctly deploys a participial clause without dangling modifier errors:",
        "audioVoiceLang": "en-US",
        "options": [
          "Having analyzed the longitudinal panel data, a divergence across cohorts was observed by the computer. — Dangling modifier (seolah-olah \"divergensi\" yang menganalisis data).",
          "Having analyzed the longitudinal panel data, the researchers observed a statistically robust divergence across cohorts. — Setelah menganalisis data panel longitudinal, para peneliti mengamati divergensi signifikan (subjek klausa utama sesuai).",
          "Analyzing the longitudinal panel data, the computer crashed several times. — Dangling modifier (seolah-olah \"komputer\" yang menjadi peneliti).",
          "Having analyzed the longitudinal panel data, the hypothesis became much clearer to everybody. — Dangling modifier (seolah-olah \"hipotesis\" yang menganalisis data)."
        ],
        "correctAnswerIndex": 1,
        "explanation": "In Option 1, the subject of the main clause ('the researchers') logically matches the agent of the participial phrase ('Having analyzed...'). In the others, the modifier dangles."
      },
      {
        "id": "q-en-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Which response represents the most professional stance when an interviewer questions a limitation in your proposed research methodology?",
        "options": [
          "Deny that any limitation exists and accuse the interviewer of misinterpreting scientific principles",
          "Blame your master's thesis supervisor for forcing you to use that flawed methodology",
          "Acknowledge the limitation candidly, explain why that trade-off was methodologically necessary, and outline supplementary sensitivity tests to mitigate bias",
          "Apologize profusely and offer to abandon the research proposal immediately"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Demonstrating awareness of methodological trade-offs (batasan metodologi) and outlining mitigation strategies reflects advanced academic maturity."
      },
      {
        "id": "q-en-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "In British and Commonwealth universities, what is the formal title and etiquette for addressing a faculty member who holds a doctorate but has not been promoted to a full professorial chair?",
        "options": [
          "Professor [Surname] (reserved strictly for full chair holders in UK conventions)",
          "Mr./Ms. [Surname]",
          "Teacher [Surname]",
          "Dr. [Surname] (Doctor [Surname])"
        ],
        "correctAnswerIndex": 3,
        "explanation": "In the UK/Commonwealth, 'Professor' is a formal rank held only by chairs; senior lecturers with a PhD are addressed as 'Dr. [Surname]'. 'Teacher' is never used."
      },
      {
        "id": "q-en-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "The academic term 'Paradigm Shift' (originated by Thomas Kuhn) refers to:",
        "options": [
          "A fundamental, revolutionary transformation in the foundational concepts and practices of a scientific discipline",
          "A minor change in a laboratory's weekly meeting schedule",
          "Switching from one computer software to another",
          "Translating an article into a different dialect"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A paradigm shift (pergeseran paradigma) represents an epistemic revolution that fundamentally alters scientific consensus."
      },
      {
        "id": "q-en-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "In Anglo-American university lab culture, what is the primary pedagogical purpose of a 'Journal Club' meeting?",
        "options": [
          "Students gather to write recreational poetry and short stories",
          "Graduate researchers present and critically dissect peer-reviewed papers published by external research teams to stay abreast of scientific frontiers",
          "Faculty members read novels out loud for relaxation",
          "Administrative staff review university budget invoices"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A Journal Club is an essential seminar where lab members rigorously critique contemporary literature to sharpen analytical faculties."
      },
      {
        "id": "q-en-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Under UK Student Visa (formerly Tier 4) and US F-1 Visa regulations, what is the statutory ceiling for employment hours permitted during term time?",
        "options": [
          "Unlimited hours provided the student maintains a 3.5 GPA",
          "Exactly 40 hours per week at all times",
          "A maximum of 20 hours per week during term time (with full-time employment permitted during official vacation periods)",
          "No off-campus or on-campus work is ever permitted"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both UK and US student visa frameworks enforce a strict cap of 20 hours per week during active academic terms."
      },
      {
        "id": "q-en-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Which academic phrase best conveys that two variables are mutually dependent and cannot be disentangled?",
        "audioVoiceLang": "en-US",
        "options": [
          "totally separated — terpisah sama sekali",
          "somewhat friends — agak berteman (ungkapan informal tidak ilmiah)",
          "vaguely beside each other — samar-samar bersebelahan (tidak akademis)",
          "inextricably linked — terkait erat dan tidak dapat dipisahkan satu sama lain"
        ],
        "correctAnswerIndex": 3,
        "explanation": "'Inextricably linked' (terkait erat dan tak terpisahkan) is an authentic academic collocation for codependent phenomena."
      }
    ]
  },
  "en-full": {
    "id": "test-en-full",
    "title": "Ujian Simulasi Lengkap Target Capaian Kuliah Inggris & Global (50 Soal Lengkap)",
    "description": "Evaluasi menyeluruh 50 soal berstandar resmi: 10 Soal PG, 10 Soal Essai, 5 Soal Sambung Kata, 10 Soal Artikan, dan 15 Soal Analisis Bebas.",
    "passingScorePercent": 75,
    "questions": [
      {
        "id": "q-en-pg-1",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choose the correct Negative Inversion structure for academic rhetorical emphasis:",
        "targetSentence": "______ such unprecedented resilience in international supply chain networks.",
        "audioVoiceLang": "en-US",
        "options": [
          "Rarely econometric indicators have revealed — Susunan tanpa inversi kata kerja bantu (tidak baku)",
          "Rarely econometric indicators revealed — Susunan tanpa kata kerja bantu (tidak baku)",
          "Rarely did econometric indicators has revealed — Konjugasi ganda did + has yang salah secara gramatika",
          "Rarely have econometric indicators revealed — Jarang sekali indikator ekonometrika memperlihatkan (inversi negatif baku)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "After restrictive adverbials like 'Rarely' or 'Seldom', subject-auxiliary inversion is mandatory ('have econometric indicators revealed')."
      },
      {
        "id": "q-en-pg-2",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Identify the proper mandative subjunctive form in university regulatory discourse:",
        "targetSentence": "The academic ethics board mandated that the doctoral candidate ______ all raw empirical datasets by Friday.",
        "audioVoiceLang": "en-US",
        "options": [
          "submit (bare infinitive) — menyerahkan (bentuk subjunktif mandatif yang tepat setelah \"mandates that...\")",
          "submits (third-person singular) — menyerahkan (bentuk indikatif biasa, kurang tepat untuk mandatif formal)",
          "submitted (past tense) — telah menyerahkan (bentuk lampau yang tidak sesuai konteks regulasi)",
          "will submit (future modal) — akan menyerahkan (modal futur tidak dipakai dalam subjunktif mandatif)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "In formal mandative subjunctive clauses triggered by 'mandated that', the verb must remain in bare infinitive form ('submit')."
      },
      {
        "id": "q-en-pg-3",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Select the nominalised formulation that achieves optimal academic lexical density:",
        "audioVoiceLang": "en-US",
        "options": [
          "Because digital platforms proliferated really fast, lawmakers had to change how antitrust laws work. — Karena platform digital tumbuh sangat cepat, pembuat UU harus mengubah cara kerja hukum (gaya lisan).",
          "The rapid proliferation of digital platforms precipitated an overhaul of antitrust jurisprudence. — Pesatnya proliferasi platform digital memicu perombakan yurisprudensi antimonopoli (nominalisasi akademik padat).",
          "Digital platforms grew very quickly and then people decided to make new rules for them. — Platform digital tumbuh cepat lalu orang memutuskan membuat aturan baru (kosakata terlalu umum).",
          "Since everyone uses digital platforms now, courts have changed their decisions. — Karena semua orang memakai platform digital sekarang, pengadilan mengubah putusan (kurang presisi)."
        ],
        "correctAnswerIndex": 1,
        "explanation": "Nominalisation packs active verbal processes into dense, objective noun phrases ('The rapid proliferation... precipitated an overhaul')."
      },
      {
        "id": "q-en-pg-4",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Which sentence demonstrates appropriate Academic Hedging for empirical findings?",
        "audioVoiceLang": "en-US",
        "options": [
          "Our experiment proves with 100% certainty that all previous scientists were completely mistaken. — Eksperimen kami membuktikan 100% bahwa semua ilmuwan terdahulu salah total (klaim absolut berlebihan).",
          "This data unquestionably demonstrates the absolute truth of our theory. — Data ini tanpa keraguan menunjukkan kebenaran mutlak teori kami (tidak objektif).",
          "The preliminary dataset appears to suggest a tentative correlation between the two variables. — Data awal tampaknya mengindikasikan korelasi tentatif antara kedua variabel (hedging akademik tepat).",
          "Everyone must agree that these results cannot possibly be challenged. — Semua orang wajib setuju bahwa hasil ini mustahil dibantah (dogmatis)."
        ],
        "correctAnswerIndex": 2,
        "explanation": "Academic hedging uses cautious epistemic stance ('appears to suggest a tentative correlation') rather than absolutist dogmatism."
      },
      {
        "id": "q-en-pg-5",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Select the correct inverted conditional structure without 'if' for formal correspondence:",
        "targetSentence": "______ further clarification regarding the methodology, please contact the principal investigator.",
        "audioVoiceLang": "en-US",
        "options": [
          "If should you require — Gabungan \"if\" dan inversi yang salah secara sintaksis",
          "Were you require — Bentuk \"were\" yang salah karena diikuti bare infinitive tanpa \"to\"",
          "Had you required — Kondisional tipe 3 (masa lampau tak nyata), tidak tepat untuk korespondensi masa depan",
          "Should you require — Apabila Anda memerlukan (inversi kondisional formal tanpa \"if\")"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Inverted conditional Type 1 uses 'Should + Subject + bare infinitive' ('Should you require') without the conjunction 'if'."
      },
      {
        "id": "q-en-pg-6",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choose the formal complex preposition that correctly indicates legal conformity:",
        "targetSentence": "The research protocol was audited ______ institutional biohazard regulations.",
        "audioVoiceLang": "en-US",
        "options": [
          "in accordance with — sesuai dengan / berdasarkan ketentuan hukum",
          "in accordance to — preposisi pasangan yang salah (seharusnya \"with\")",
          "pursuant of — preposisi pasangan yang salah (seharusnya \"pursuant to\")",
          "with compliance at — kolokasi preposisi yang tidak baku (seharusnya \"in compliance with\")"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The standard collocations are 'in accordance with' and 'pursuant to'."
      },
      {
        "id": "q-en-pg-7",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Identify the thesis statement that maintains strict syntactic parallelism:",
        "audioVoiceLang": "en-US",
        "options": [
          "The initiative aims to enhance transparency, streamlining governance, and innovation. — Mencampur to-infinitive, gerund, dan nomina (tidak paralel).",
          "The initiative aims to enhance transparency, to streamline governance, and to foster innovation. — Inisiatif ini bertujuan meningkatkan transparansi, merampingkan tata kelola, dan mendorong inovasi (paralelisme utuh).",
          "The initiative aims at transparency, to streamline governance, and fostering innovation. — Mencampur preposisi, to-infinitive, dan gerund (tidak paralel).",
          "The initiative aims to enhance transparency, stream governance, and fostered innovation. — Mencampur present infinitive dan past participle (tidak paralel)."
        ],
        "correctAnswerIndex": 1,
        "explanation": "Parallelism requires consistent grammatical structures across listed items ('to enhance... to streamline... to foster')."
      },
      {
        "id": "q-en-pg-8",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choose the correct concessive transition marker that pairs with 'nevertheless':",
        "targetSentence": "______, the upfront capital expenditure is substantial; nevertheless, the projected operational efficiencies justify the investment.",
        "audioVoiceLang": "en-US",
        "options": [
          "Because — Karena (konjungsi subordinatif kausal)",
          "Consequently — Akibatnya / oleh karena itu (transisi akibat)",
          "Admittedly — Memang harus diakui (penanda konsesif yang berpasangan dengan \"nevertheless\")",
          "Furthermore — Selain itu / lebih lanjut (transisi aditif)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "'Admittedly... nevertheless' is a classic rhetorical pairing that concedes a counterpoint before reasserting the core thesis."
      },
      {
        "id": "q-en-pg-9",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Select the diplomatic euphemism used in academic peer review to state that an empirical section is deficient:",
        "targetSentence": "The statistical verification in Chapter 4 regrettably ______.",
        "audioVoiceLang": "en-US",
        "options": [
          "is complete garbage — sama sekali sampah (bahasa kasar tidak ilmiah)",
          "fails in every single way — gagal total dalam segala hal (hiperbola emosional)",
          "is totally useless — sama sekali tidak berguna (bahasa informal kasar)",
          "leaves much to be desired — masih sangat perlu ditingkatkan / belum memadai (eufemisme akademik sopan)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "'Leaves much to be desired' is the standard diplomatic understatement in British and American peer reviews for substandard work."
      },
      {
        "id": "q-en-pg-10",
        "type": "multiple_choice",
        "sectionType": "pg",
        "prompt": "Choose the academic verb that correctly collocates with 'hypothesis' in research reporting:",
        "targetSentence": "Subsequent longitudinal trials failed to ______ the initial hypothesis.",
        "audioVoiceLang": "en-US",
        "options": [
          "substantiate (corroborate with evidence) — memperkuat / membuktikan kebenaran hipotesis dengan bukti empiris",
          "manufacture — memproduksi barang pabrik / mengarang cerita",
          "exaggerate — melebih-lebihkan secara tidak proporsional",
          "speculate — berspekulasi tanpa bukti"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The academic collocation is 'substantiate a hypothesis' (memperkuat/memvalidasi hipotesis dengan data empiris)."
      },
      {
        "id": "q-en-es-1",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Seldom have international macroeconomic indicators shown such profound resilience amidst global supply disruptions. (ˈsɛldəm hæv ˌɪntəˈnæʃnəl ˌmækrəʊˌiːkəˈnɒmɪk ˈɪndɪkeɪtəz ʃəʊn sʌtʃ prəˈfaʊnd rɪˈzɪlɪəns əˈmɪdst ˈgləʊbl səˈplaɪ dɪsˈrʌpʃnz.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Jarang sekali indikator ekonomi makro internasional menunjukkan ketahanan yang begitu mendalam di tengah gangguan pasokan rantai global.",
        "keywords": [
          "jarang",
          "sekali",
          "indikator",
          "ekonomi"
        ],
        "explanation": "Kalimat akademik pola Negative Inversion & Emphatic Fronting (Formal Rhetorical Emphasis): 'Seldom have international macroeconomic indicators shown such profound resilience amidst global supply disruptions.' diterjemahkan secara akurat menjadi 'Jarang sekali indikator ekonomi makro internasional menunjukkan ketahanan yang begitu mendalam di tengah gangguan pasokan rantai global.'."
      },
      {
        "id": "q-en-es-2",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "The academic ethics committee recommended that the professor's research grant be temporarily suspended pending thorough investigation. (ði ˌækəˈdɛmɪk ˈɛθɪks kəˈmɪti ˌrɛkəˈmɛndɪd ðæt ðə prəˈfɛsəz rɪˈsɜːtʃ grɑːnt biː ˈtɛmpərərəli səˈspɛndɪd ˈpɛndɪŋ ˈθʌrə ɪnˌvɛstɪˈgeɪʃn.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Komite etika akademik merekomendasikan agar dana hibah penelitian profesor tersebut dibekukan sementara seraya menunggu investigasi menyeluruh.",
        "keywords": [
          "komite",
          "etika",
          "akademik",
          "merekomendasikan"
        ],
        "explanation": "Kalimat akademik pola The Subjunctive Mood in Formal Mandates & Nuanced Recommendations: 'The academic ethics committee recommended that the professor's research grant be temporarily suspended pending thorough investigation.' diterjemahkan secara akurat menjadi 'Komite etika akademik merekomendasikan agar dana hibah penelitian profesor tersebut dibekukan sementara seraya menunggu investigasi menyeluruh.'."
      },
      {
        "id": "q-en-es-3",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "The rapid proliferation of generative artificial intelligence necessitates a comprehensive recalibration of intellectual property statutes. (ðə ˈræpɪd prəˌlɪfəˈreɪʃn ɒv ˈdʒɛnərətɪv ˌɑːtɪˈfɪʃl ɪnˈtɛlɪdʒəns nɪˈsɛsɪteɪts ə ˌkɒmprɪˈhɛnsɪv ˌriːˌkælɪˈbreɪʃn ɒv ˌɪntɪˈlɛktʃʊəl ˈprɒpəti ˈstætjuːts.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Penyebaran pesat kecerdasan buatan generatif menuntut kalibrasi ulang yang komprehensif terhadap undang-undang hak kekayaan intelektual.",
        "keywords": [
          "penyebaran",
          "pesat",
          "kecerdasan",
          "buatan"
        ],
        "explanation": "Kalimat akademik pola Nominalisation for Academic Conciseness & Dense Prose: 'The rapid proliferation of generative artificial intelligence necessitates a comprehensive recalibration of intellectual property statutes.' diterjemahkan secara akurat menjadi 'Penyebaran pesat kecerdasan buatan generatif menuntut kalibrasi ulang yang komprehensif terhadap undang-undang hak kekayaan intelektual.'."
      },
      {
        "id": "q-en-es-4",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "The longitudinal dataset appears to indicate a statistically significant correlation between early bilingualism and executive function enhancement. (ðə ˌlɒŋgɪˈtjuːdɪnl ˈdeɪtəsɛt əˈpɪəz tuː ˈɪndɪkeɪt ə stəˈtɪstɪkli sɪgˈnɪfɪkənt ˌkɒrəˈleɪʃn bɪˈtwiːn ˈɜːli baɪˈlɪŋgwəlɪzm ænd ɪgˈzɛkjʊtɪv ˈfʌŋkʃn ɪnˈhɑːnsmənt.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Kumpulan data longitudinal tersebut tampaknya mengindikasikan korelasi yang signifikan secara statistik antara kedwibahasaan sejak dini dan peningkatan fungsi eksekutif.",
        "keywords": [
          "kumpulan",
          "data",
          "longitudinal",
          "tersebut"
        ],
        "explanation": "Kalimat akademik pola Academic Hedging & Nuanced Epistemic Stance: 'The longitudinal dataset appears to indicate a statistically significant correlation between early bilingualism and executive function enhancement.' diterjemahkan secara akurat menjadi 'Kumpulan data longitudinal tersebut tampaknya mengindikasikan korelasi yang signifikan secara statistik antara kedwibahasaan sejak dini dan peningkatan fungsi eksekutif.'."
      },
      {
        "id": "q-en-es-5",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Should foreign delegates experience any scheduling conflicts, the liaison office stands ready to facilitate itinerary adjustments. (ʃʊd ˈfɒrɪn ˈdɛlɪgɪts ɪkˈspɪərɪəns ˈɛni ˈʃɛdjuːlɪŋ ˈkɒnflɪkts, ðə liˈeɪzɒn ˈɒfɪs stændz ˈrɛdi tuː fəˈsɪlɪteɪt aɪˈtɪnərəri əˈdʒʌstmənts.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Sekiranya para delegasi asing mengalami kendala jadwal acara, kantor penghubung siap sedia memfasilitasi penyesuaian rencana perjalanan.",
        "keywords": [
          "sekiranya",
          "delegasi",
          "asing",
          "mengalami"
        ],
        "explanation": "Kalimat akademik pola Inverted Conditionals without 'If' (Had, Were, Should): 'Should foreign delegates experience any scheduling conflicts, the liaison office stands ready to facilitate itinerary adjustments.' diterjemahkan secara akurat menjadi 'Sekiranya para delegasi asing mengalami kendala jadwal acara, kantor penghubung siap sedia memfasilitasi penyesuaian rencana perjalanan.'."
      },
      {
        "id": "q-en-es-6",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Pursuant to the provisions stipulated in Section 4 of the Employment Rights Act, severance packages must be disbursed within fourteen business days. (pəˈsjuːənt tuː ðə prəˈvɪʒnz ˈstɪpjʊleɪtɪd ɪn ˈsɛkʃn fɔːr ɒv ði ɪmˈplɔɪmənt raɪts ækt, ˈsɛvərəns ˈpækɪdʒɪz mʌst biː dɪsˈbɜːst wɪˈðɪn ˈfɔːˈtiːn ˈbɪznɪs deɪz.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Sesuai dengan ketentuan yang diatur dalam Bagian 4 Undang-Undang Hak Ketenagakerjaan, paket uang pesangon harus dicairkan dalam waktu empat belas hari kerja.",
        "keywords": [
          "sesuai",
          "ketentuan",
          "diatur",
          "bagian"
        ],
        "explanation": "Kalimat akademik pola Complex Prepositional Phrases & Formal Administrative Register: 'Pursuant to the provisions stipulated in Section 4 of the Employment Rights Act, severance packages must be disbursed within fourteen business days.' diterjemahkan secara akurat menjadi 'Sesuai dengan ketentuan yang diatur dalam Bagian 4 Undang-Undang Hak Ketenagakerjaan, paket uang pesangon harus dicairkan dalam waktu empat belas hari kerja.'."
      },
      {
        "id": "q-en-es-7",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Neither by suppressing academic dissension nor by withholding critical evidentiary audits can an institution safeguard its enduring intellectual integrity. (ˈnaɪðə baɪ səˈprɛsɪŋ ˌækəˈdɛmɪk dɪˈsɛnʃn nɔː baɪ wɪðˈhəʊldɪŋ ˈkrɪtɪkl ˌɛvɪˈdɛnʃəri ˈɔːdɪts kæn ən ˌɪnstɪˈtjuːʃn ˈseɪfgɑːd ɪts ɪnˈdjʊərɪŋ ˌɪntɪˈlɛktʃʊəl ɪnˈtɛgrɪti.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Baik dengan cara membungkam perbedaan pendapat akademik maupun dengan menahan audit pembuktian penting, suatu institusi tidak akan pernah bisa menjaga integritas intelektualnya yang abadi.",
        "keywords": [
          "baik",
          "cara",
          "membungkam",
          "perbedaan"
        ],
        "explanation": "Kalimat akademik pola Rhetorical Parallelism & Balanced Periodic Sentences: 'Neither by suppressing academic dissension nor by withholding critical evidentiary audits can an institution safeguard its enduring intellectual integrity.' diterjemahkan secara akurat menjadi 'Baik dengan cara membungkam perbedaan pendapat akademik maupun dengan menahan audit pembuktian penting, suatu institusi tidak akan pernah bisa menjaga integritas intelektualnya yang abadi.'."
      },
      {
        "id": "q-en-es-8",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Formidable though the diplomatic obstacles appeared, the summit interlocutors succeeded in formulating a provisional demilitarisation roadmap. (ˈfɔːmɪdəbl ðəʊ ðə ˌdɪpləˈmætɪk ˈɒbstəklz əˈpɪəd, ðə ˈsʌmɪt ˌɪntəˈlɒkjʊtəz səkˈsiːdɪd ɪn ˈfɔːmjʊleɪtɪŋ ə prəˈvɪʒənl ˌdiːˌmɪlɪtəraɪˈzeɪʃn ˈrəʊdmæp.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Betapapun beratnya rintangan diplomatik tersebut terlihat, para negosiator dalam konferensi tingkat tinggi itu berhasil merumuskan peta jalan demiliterisasi sementara.",
        "keywords": [
          "betapapun",
          "beratnya",
          "rintangan",
          "diplomatik"
        ],
        "explanation": "Kalimat akademik pola Stylistic Concession & Antithesis (Admittedly, Albeit, In Spite of): 'Formidable though the diplomatic obstacles appeared, the summit interlocutors succeeded in formulating a provisional demilitarisation roadmap.' diterjemahkan secara akurat menjadi 'Betapapun beratnya rintangan diplomatik tersebut terlihat, para negosiator dalam konferensi tingkat tinggi itu berhasil merumuskan peta jalan demiliterisasi sementara.'."
      },
      {
        "id": "q-en-es-9",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "The bilateral communique noted that recent cross-border airspace encroachments were viewed with grave concern by international observers. (ðə baɪˈlætərəl kəˈmjuːnɪkeɪ ˈnəʊtɪd ðæt ˈriːsnt krɒs-ˈbɔːdər ˈeəspeɪs ɪnˈkrəʊtʃmənts wɜː vjuːd wɪð greɪv kənˈsɜːn baɪ ˌɪntəˈnæʃnəl əbˈzɜːvəz.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Komunike bilateral tersebut mencatat bahwa pelanggaran ruang udara lintas batas baru-baru ini dipandang dengan keprihatinan mendalam oleh para pengamat internasional.",
        "keywords": [
          "komunike",
          "bilateral",
          "tersebut",
          "mencatat"
        ],
        "explanation": "Kalimat akademik pola Nuanced Diplomatic Modals & Bureaucratic Prudence: 'The bilateral communique noted that recent cross-border airspace encroachments were viewed with grave concern by international observers.' diterjemahkan secara akurat menjadi 'Komunike bilateral tersebut mencatat bahwa pelanggaran ruang udara lintas batas baru-baru ini dipandang dengan keprihatinan mendalam oleh para pengamat internasional.'."
      },
      {
        "id": "q-en-es-10",
        "type": "essay",
        "sectionType": "essai",
        "prompt": "Terjemahkan kalimat akademik berikut ke dalam Bahasa Indonesia:",
        "targetSentence": "Notwithstanding the proliferation of empirical scholarship addressing transnational capital mobility, significant lacunae persist regarding the sovereign debt vulnerability of emerging market economies. (ˌnɒtwɪθˈstændɪŋ ðə prəˌlɪfəˈreɪʃn ɒv ɪmˈpɪrɪkl ˈskɒləʃɪp əˈdrɛsɪŋ trænzˈnæʃnəl ˈkæpɪtl məʊˈbɪlɪti, sɪgˈnɪfɪkənt ləˈkjuːniː pəˈsɪst rɪˈgɑːdɪŋ ðə ˈsɒvrɪn dɛt ˌvʌlnərəˈbɪlɪti ɒv ɪˈmɜːdʒɪŋ ˈmɑːkɪt iːˈkɒnəmiz.)",
        "audioVoiceLang": "en-US",
        "sampleAnswer": "Meskipun terjadi pertumbuhan pesat riset empiris yang menelaah mobilitas modal lintas negara, kesenjangan signifikan masih bertahan terkait kerentanan utang luar negeri negara-negara berkembang.",
        "keywords": [
          "meskipun",
          "terjadi",
          "pertumbuhan",
          "pesat"
        ],
        "explanation": "Kalimat akademik pola C1 Capstone: Academic Research Paper Discursive Architecture & University Dissertation Prose: 'Notwithstanding the proliferation of empirical scholarship addressing transnational capital mobility, significant lacunae persist regarding the sovereign debt vulnerability of emerging market economies.' diterjemahkan secara akurat menjadi 'Meskipun terjadi pertumbuhan pesat riset empiris yang menelaah mobilitas modal lintas negara, kesenjangan signifikan masih bertahan terkait kerentanan utang luar negeri negara-negara berkembang.'."
      },
      {
        "id": "q-en-sk-1",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Reorder the scrambled phrases into a grammatically coherent academic admissions instruction:",
        "scrambledWords": [
          "their authenticated transcripts",
          "prior to the deadline",
          "prospective international scholars",
          "are required to submit"
        ],
        "correctOrder": [
          "prospective international scholars",
          "are required to submit",
          "their authenticated transcripts",
          "prior to the deadline"
        ],
        "targetSentence": "Prospective international scholars are required to submit their authenticated transcripts prior to the deadline.",
        "audioVoiceLang": "en-US",
        "explanation": "Subject phrase (prospective international scholars) + Passive mandate (are required to submit) + Object (their authenticated transcripts) + Prepositional time modifier (prior to the deadline)."
      },
      {
        "id": "q-en-sk-2",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Reorder the scrambled phrases into a formal empirical findings statement:",
        "scrambledWords": [
          "and variable B",
          "between variable A",
          "a statistically significant correlation",
          "the empirical findings indicate"
        ],
        "correctOrder": [
          "the empirical findings indicate",
          "a statistically significant correlation",
          "between variable A",
          "and variable B"
        ],
        "targetSentence": "The empirical findings indicate a statistically significant correlation between variable A and variable B.",
        "audioVoiceLang": "en-US",
        "explanation": "Reporting clause (the empirical findings indicate) + Noun phrase (a statistically significant correlation) + Correlative prepositional complement (between variable A and variable B)."
      },
      {
        "id": "q-en-sk-3",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Reorder the scrambled phrases into a bioethics research compliance protocol sentence:",
        "scrambledWords": [
          "review board",
          "from the institutional",
          "must receive prior clearance",
          "all biomedical research protocols"
        ],
        "correctOrder": [
          "all biomedical research protocols",
          "must receive prior clearance",
          "from the institutional",
          "review board"
        ],
        "targetSentence": "All biomedical research protocols must receive prior clearance from the institutional review board.",
        "audioVoiceLang": "en-US",
        "explanation": "Subject (all biomedical research protocols) + Modal obligation (must receive prior clearance) + Source authority (from the institutional review board)."
      },
      {
        "id": "q-en-sk-4",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Reorder the scrambled phrases into an academic registrar course enrollment announcement:",
        "scrambledWords": [
          "through the central academic portal",
          "starting next Monday",
          "graduate students may register",
          "for elective seminars"
        ],
        "correctOrder": [
          "graduate students may register",
          "for elective seminars",
          "through the central academic portal",
          "starting next Monday"
        ],
        "targetSentence": "Graduate students may register for elective seminars through the central academic portal starting next Monday.",
        "audioVoiceLang": "en-US",
        "explanation": "Subject & modal verb (graduate students may register) + Course complement (for elective seminars) + Means (through the central academic portal) + Temporal clause (starting next Monday)."
      },
      {
        "id": "q-en-sk-5",
        "type": "sentence_reorder",
        "sectionType": "sambung_kata",
        "prompt": "Reorder the scrambled phrases into a doctoral dissertation defense summary sentence:",
        "scrambledWords": [
          "yesterday afternoon",
          "before the academic tribunal",
          "her dissertation on renewable energy",
          "the doctoral candidate successfully defended"
        ],
        "correctOrder": [
          "the doctoral candidate successfully defended",
          "her dissertation on renewable energy",
          "before the academic tribunal",
          "yesterday afternoon"
        ],
        "targetSentence": "The doctoral candidate successfully defended her dissertation on renewable energy before the academic tribunal yesterday afternoon.",
        "audioVoiceLang": "en-US",
        "explanation": "Subject & transitive verb (the doctoral candidate successfully defended) + Direct object (her dissertation on renewable energy) + Locational tribunal (before the academic tribunal) + Time (yesterday afternoon)."
      },
      {
        "id": "q-en-ar-1",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan bahasa Indonesia yang paling tepat untuk dokumen seleksi: 'Statement of Purpose (SOP)':",
        "targetSentence": "Applicants must submit a 1,000-word Statement of Purpose articulating their research motivations.",
        "audioVoiceLang": "en-US",
        "options": [
          "Daftar riwayat hidup riwayat pekerjaan",
          "Kuitansi bukti pembayaran formulir pendaftaran",
          "Surat keterangan catatan kepolisian",
          "Surat pernyataan tujuan dan motivasi studi akademik pelamar"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Statement of Purpose (SOP) adalah esai akademik formal yang menguraikan latar belakang intelektual, tujuan riset, dan motivasi pelamar."
      },
      {
        "id": "q-en-ar-2",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti yang tepat dari istilah publikasi ilmiah: 'Peer-Reviewed Journal':",
        "targetSentence": "Publishing in a peer-reviewed journal is an essential prerequisite for doctoral graduation.",
        "audioVoiceLang": "en-US",
        "options": [
          "Jurnal ilmiah bereputasi yang ditinjau dan dievaluasi secara ketat oleh para pakar sejawat (mitra bestari)",
          "Majalah berita umum mingguan di perpustakaan",
          "Buku catatan harian mahasiswa di laboratorium",
          "Koran dinding pengumuman kegiatan organisasi mahasiswa"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Peer-reviewed journal adalah jurnal ilmiah yang menerapkan mekanisme penelaahan sejawat sebelum sebuah artikel dinyatakan layak terbit."
      },
      {
        "id": "q-en-ar-3",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan berkas rekomendasi: 'Letters of Recommendation (LoR)':",
        "targetSentence": "Three confidential Letters of Recommendation must be submitted directly by academic referees.",
        "audioVoiceLang": "en-US",
        "options": [
          "Surat pengantar izin cuti kuliah",
          "Surat rekomendasi rahasia dari dosen pembimbing atau akademisi rujukan",
          "Surat penagihan biaya asrama universitas",
          "Surat ucapan selamat ulang tahun dari rektor"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Letters of Recommendation (LoR) adalah surat penilaian kompetensi dari profesor rujukan pelamar."
      },
      {
        "id": "q-en-ar-4",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah akademik: 'Dissertation Defense / Viva Voce':",
        "targetSentence": "The candidate was awarded the PhD degree upon successfully passing the oral dissertation defense.",
        "audioVoiceLang": "en-US",
        "options": [
          "Lomba debat mahasiswa antar fakultas",
          "Upacara penyambutan mahasiswa baru",
          "Sidang ujian lisan pertahanan disertasi doktoral di hadapan dewan penguji",
          "Pemeriksaan kesehatan fisik calon wisudawan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Dissertation defense (atau Viva Voce di sistem Inggris) adalah sidang ujian lisan akhir untuk mempertahankan disertasi PhD."
      },
      {
        "id": "q-en-ar-5",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan yang tepat untuk kurikulum: 'Syllabus & Prerequisites':",
        "targetSentence": "Please review the course syllabus to ensure you have fulfilled all necessary prerequisites.",
        "audioVoiceLang": "en-US",
        "options": [
          "Denah gedung kampus dan jadwal bus antar-jemput",
          "Daftar buku wajib di toko buku universitas",
          "Jadwal ujian akhir semester dan libur musim panas",
          "Silabus perkuliahan dan mata kuliah prasyarat"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Syllabus = rencana pembelajaran semester; Prerequisites = syarat kelulusan mata kuliah dasar sebelum mengambil mata kuliah lanjutan."
      },
      {
        "id": "q-en-ar-6",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah beasiswa penuh: 'Full Tuition Waiver & Living Stipend':",
        "targetSentence": "The prestigious scholarship package encompasses a full tuition waiver and a monthly living stipend.",
        "audioVoiceLang": "en-US",
        "options": [
          "Pembebasan 100% biaya kuliah serta tunjangan biaya hidup bulanan",
          "Pinjaman uang kuliah yang harus dikembalikan setelah lulus",
          "Diskon sepuluh persen biaya pembelian buku teks",
          "Bantuan kuota internet dan makan siang gratis di kantin"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Tuition waiver = pembebasan biaya kuliah; Living stipend = tunjangan biaya hidup bulanan (Full Scholarship)."
      },
      {
        "id": "q-en-ar-7",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan parameter integritas: 'Plagiarism Similarity Index':",
        "targetSentence": "Manuscripts exceeding a 15% plagiarism similarity index on Turnitin will be automatically flagged for investigation.",
        "audioVoiceLang": "en-US",
        "options": [
          "Peringkat kelulusan sarjana berdasarkan nilai IPK",
          "Indeks persentase kemiripan teks / uji plagiarisme pada piranti lunak Turnitin",
          "Jumlah kata yang diketik dalam satu halaman tugas",
          "Batas kecepatan internet di laboratorium komputer"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Similarity index adalah skor persentase kesamaan teks dengan basis data internet dan karya ilmiah terdahulu."
      },
      {
        "id": "q-en-ar-8",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah status mutu perguruan tinggi: 'Institutional Accreditation':",
        "targetSentence": "Enrolling in a university with rigorous institutional accreditation ensures international degree recognition.",
        "audioVoiceLang": "en-US",
        "options": [
          "Pemberian bantuan dana riset dari alumni",
          "Pembangunan gedung laboratorium baru",
          "Akreditasi resmi mutu institusi pendidikan tinggi oleh badan evaluasi independen",
          "Perekrutan dosen tamu dari industri teknologi"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Institutional accreditation adalah status legal penjaminan mutu sebuah perguruan tinggi di tingkat nasional/global."
      },
      {
        "id": "q-en-ar-9",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah terjemahan istilah metodologi: 'Methodological Triangulation':",
        "targetSentence": "By deploying methodological triangulation, the study integrates quantitative surveys and qualitative interviews.",
        "audioVoiceLang": "en-US",
        "options": [
          "Pengukuran sudut geometri dalam pemetaan lahan",
          "Pemisahan tiga kelompok responden berdasarkan usia",
          "Pembagian tiga bab utama dalam naskah skripsi",
          "Triangulasi metodologis (penggabungan berbagai metode riset untuk memverifikasi keabsahan data)"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Methodological triangulation adalah teknik validasi ilmiah yang menggabungkan berbagai pendekatan metodologis (mixed-methods)."
      },
      {
        "id": "q-en-ar-10",
        "type": "translation",
        "sectionType": "artikan",
        "prompt": "Pilihlah arti istilah jabatan asisten pengajar: 'Graduate Teaching Assistantship (GTA)':",
        "targetSentence": "The department awarded her a Graduate Teaching Assistantship to facilitate undergraduate discussion sections.",
        "audioVoiceLang": "en-US",
        "options": [
          "Beasiswa asisten pengajar pascasarjana untuk mendampingi sesi tutorial/praktikum mahasiswa sarjana",
          "Penghargaan mahasiswa terpopuler di fakultas",
          "Tugas membersihkan ruang perpustakaan setiap sore",
          "Magang kerja paruh waktu di restoran kampus"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Teaching Assistantship (TA/GTA) adalah posisi akademik berbayar di universitas Barat di mana mahasiswa pascasarjana mengajar kelas tutorial."
      },
      {
        "id": "q-en-bb-1",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Read the following academic syllabus excerpt:\n'Grading Policy: Final Proctored Exam (50%), Research Term Paper (30%), Seminar Participation (20%). Late submissions of the term paper incur a penalty of 5 percentage points per calendar day. Submissions delayed by more than 7 days will receive an automatic failing grade (0%).'\n\nWhat is the consequence if a student submits the research paper 8 days after the official deadline?",
        "audioVoiceLang": "en-US",
        "options": [
          "The grade is docked by exactly 40 percentage points",
          "The submission automatically receives a failing grade of zero percent (0%)",
          "The student is granted an oral re-examination",
          "The student must write an additional book review"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The text explicitly states: 'Submissions delayed by more than 7 days will receive an automatic failing grade (0%).'"
      },
      {
        "id": "q-en-bb-2",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Read the university library borrowing regulation:\n'Undergraduate students may borrow up to 10 standard monographs for 21 days, whereas postgraduate researchers are entitled to borrow 30 items for up to 90 days. Special collections, rare manuscripts, and course reserves are strictly non-circulating and may only be consulted within the designated reading room.'\n\nWhere may students consult rare manuscripts and course reserve materials?",
        "audioVoiceLang": "en-US",
        "options": [
          "They may be borrowed and taken home for 90 days",
          "In the campus dormitory cafeteria",
          "Exclusively within the designated library reading room (strictly non-circulating)",
          "They can only be read online via smartphone"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The policy specifies that rare manuscripts are 'strictly non-circulating and may only be consulted within the designated reading room.'"
      },
      {
        "id": "q-en-bb-3",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Read the scholarship guidelines for international candidates:\n'To qualify for the Chevening/Fulbright Postgraduate Fellowship, applicants must possess a minimum of two years of substantive professional work experience (equivalent to at least 2,800 hours) and have completed an undergraduate degree with at least upper second-class honours (2:1). Meeting these thresholds does not guarantee shortlisting for the panel interview.'\n\nWhat are the dual baseline eligibility criteria specified in the text?",
        "audioVoiceLang": "en-US",
        "options": [
          "A doctorate in economics and fluent bilingualism in four languages",
          "Five published papers in Scopus Q1 journals and ten recommendation letters",
          "Full residency citizenship in the United Kingdom or United States",
          "At least 2 years (2,800 hours) of professional experience and an undergraduate degree of at least 2:1 honours"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The criteria are two years of work experience (2,800 hours) plus a 2:1 honours bachelor's degree."
      },
      {
        "id": "q-en-bb-4",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Listen to the university registrar announcement and select the accurate summary:",
        "targetSentence": "All international graduate scholars holding student visas must complete mandatory in-person identity verification at the Student Services Hub before Friday at 4:00 PM. Failure to present your original passport and biometric residence permit will result in immediate registration hold.",
        "audioVoiceLang": "en-US",
        "options": [
          "Mandatory in-person identity verification with original passport and BRP before Friday 4 PM to prevent registration hold",
          "All campus libraries will be closed on Friday afternoon for inventory checks",
          "Students are invited to a welcome party at the international dormitory hall",
          "Final examination timetables have been published online"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The announcement mandates in-person verification with original passport/BRP before Friday 4:00 PM under penalty of a registration hold."
      },
      {
        "id": "q-en-bb-5",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Listen to the laboratory biosafety officer's briefing:",
        "targetSentence": "Before commencing any procedures involving volatile organic compounds, ensure that the mechanical exhaust ventilation hood is fully operational and the sash is positioned at the marked safety line. In the event of an accidental solvent spill exceeding 500 millilitres, evacuate the room and activate the emergency spill protocol.",
        "audioVoiceLang": "en-US",
        "options": [
          "Switching off all electrical equipment every hour to save energy",
          "Verifying exhaust ventilation hood operation and evacuating if a solvent spill exceeds 500 mL",
          "Wearing headphones while conducting chemical synthesis experiments",
          "Cleaning laboratory glassware using standard tap water without soap"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The audio dictates fume hood sash positioning and immediate evacuation if an organic chemical spill exceeds 500 mL."
      },
      {
        "id": "q-en-bb-6",
        "type": "listen_comprehension",
        "sectionType": "bebas",
        "prompt": "Listen to the graduate thesis coordinator's instruction:",
        "targetSentence": "Doctoral dissertations must be formatted strictly in accordance with university typography guidelines and uploaded to the institutional repository in PDF/A format by the first of November. Electronic submissions will undergo automated similarity analysis before distribution to the external examiners.",
        "audioVoiceLang": "en-US",
        "options": [
          "Hard copies of dissertations must be hand-bound in leather and submitted to the dean",
          "External examiners will conduct oral interviews before reviewing the written manuscript",
          "Dissertations must adhere to typography guidelines, be uploaded in PDF/A format by Nov 1, and pass similarity analysis prior to external examination",
          "Dissertation deadlines are indefinitely postponed until next spring semester"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Key points: PDF/A format, Nov 1 deadline, institutional repository upload, and pre-examination similarity checks."
      },
      {
        "id": "q-en-bb-7",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Select the formal discourse marker that introduces a logical consequence in academic prose:\n'The macroeconomic model failed to account for sudden capital flight; ______, its fiscal projections proved substantially inaccurate.'",
        "audioVoiceLang": "en-US",
        "options": [
          "conversely — sebaliknya / di sisi lain",
          "nevertheless — namun demikian / meskipun begitu",
          "notwithstanding — terlepas dari / kendatipun",
          "consequently (as a direct result) — akibatnya / oleh karena itu"
        ],
        "correctAnswerIndex": 3,
        "explanation": "'Consequently' introduces a direct logical cause-and-effect relationship between the model's flaw and inaccurate projections."
      },
      {
        "id": "q-en-bb-8",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Choose the correct academic passive modal construction for institutional policy:\n'In light of geopolitical volatility, it ______ to diversify institutional foreign exchange endowments.'",
        "audioVoiceLang": "en-US",
        "options": [
          "is deemed advisable — dipandang bijaksana / dianjurkan secara institusional",
          "is dreaming advisable — kesalahan leksikal (\"dreaming\" = bermimpi)",
          "is deeming advisable — bentuk aktif progresif yang salah (seharusnya pasif \"is deemed\")",
          "was deeming advice — kesalahan bentuk aktif dan kelas kata nomina"
        ],
        "correctAnswerIndex": 0,
        "explanation": "'It is deemed advisable' (dipandang bijaksana/dianjurkan) is the standard formal impersonal passive in administrative policy."
      },
      {
        "id": "q-en-bb-9",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Identify the sentence that correctly deploys a participial clause without dangling modifier errors:",
        "audioVoiceLang": "en-US",
        "options": [
          "Having analyzed the longitudinal panel data, a divergence across cohorts was observed by the computer. — Dangling modifier (seolah-olah \"divergensi\" yang menganalisis data).",
          "Having analyzed the longitudinal panel data, the researchers observed a statistically robust divergence across cohorts. — Setelah menganalisis data panel longitudinal, para peneliti mengamati divergensi signifikan (subjek klausa utama sesuai).",
          "Analyzing the longitudinal panel data, the computer crashed several times. — Dangling modifier (seolah-olah \"komputer\" yang menjadi peneliti).",
          "Having analyzed the longitudinal panel data, the hypothesis became much clearer to everybody. — Dangling modifier (seolah-olah \"hipotesis\" yang menganalisis data)."
        ],
        "correctAnswerIndex": 1,
        "explanation": "In Option 1, the subject of the main clause ('the researchers') logically matches the agent of the participial phrase ('Having analyzed...'). In the others, the modifier dangles."
      },
      {
        "id": "q-en-bb-10",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Which response represents the most professional stance when an interviewer questions a limitation in your proposed research methodology?",
        "options": [
          "Deny that any limitation exists and accuse the interviewer of misinterpreting scientific principles",
          "Blame your master's thesis supervisor for forcing you to use that flawed methodology",
          "Acknowledge the limitation candidly, explain why that trade-off was methodologically necessary, and outline supplementary sensitivity tests to mitigate bias",
          "Apologize profusely and offer to abandon the research proposal immediately"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Demonstrating awareness of methodological trade-offs (batasan metodologi) and outlining mitigation strategies reflects advanced academic maturity."
      },
      {
        "id": "q-en-bb-11",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "In British and Commonwealth universities, what is the formal title and etiquette for addressing a faculty member who holds a doctorate but has not been promoted to a full professorial chair?",
        "options": [
          "Professor [Surname] (reserved strictly for full chair holders in UK conventions)",
          "Mr./Ms. [Surname]",
          "Teacher [Surname]",
          "Dr. [Surname] (Doctor [Surname])"
        ],
        "correctAnswerIndex": 3,
        "explanation": "In the UK/Commonwealth, 'Professor' is a formal rank held only by chairs; senior lecturers with a PhD are addressed as 'Dr. [Surname]'. 'Teacher' is never used."
      },
      {
        "id": "q-en-bb-12",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "The academic term 'Paradigm Shift' (originated by Thomas Kuhn) refers to:",
        "options": [
          "A fundamental, revolutionary transformation in the foundational concepts and practices of a scientific discipline",
          "A minor change in a laboratory's weekly meeting schedule",
          "Switching from one computer software to another",
          "Translating an article into a different dialect"
        ],
        "correctAnswerIndex": 0,
        "explanation": "A paradigm shift (pergeseran paradigma) represents an epistemic revolution that fundamentally alters scientific consensus."
      },
      {
        "id": "q-en-bb-13",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "In Anglo-American university lab culture, what is the primary pedagogical purpose of a 'Journal Club' meeting?",
        "options": [
          "Students gather to write recreational poetry and short stories",
          "Graduate researchers present and critically dissect peer-reviewed papers published by external research teams to stay abreast of scientific frontiers",
          "Faculty members read novels out loud for relaxation",
          "Administrative staff review university budget invoices"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A Journal Club is an essential seminar where lab members rigorously critique contemporary literature to sharpen analytical faculties."
      },
      {
        "id": "q-en-bb-14",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Under UK Student Visa (formerly Tier 4) and US F-1 Visa regulations, what is the statutory ceiling for employment hours permitted during term time?",
        "options": [
          "Unlimited hours provided the student maintains a 3.5 GPA",
          "Exactly 40 hours per week at all times",
          "A maximum of 20 hours per week during term time (with full-time employment permitted during official vacation periods)",
          "No off-campus or on-campus work is ever permitted"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both UK and US student visa frameworks enforce a strict cap of 20 hours per week during active academic terms."
      },
      {
        "id": "q-en-bb-15",
        "type": "multiple_choice",
        "sectionType": "bebas",
        "prompt": "Which academic phrase best conveys that two variables are mutually dependent and cannot be disentangled?",
        "audioVoiceLang": "en-US",
        "options": [
          "totally separated — terpisah sama sekali",
          "somewhat friends — agak berteman (ungkapan informal tidak ilmiah)",
          "vaguely beside each other — samar-samar bersebelahan (tidak akademis)",
          "inextricably linked — terkait erat dan tidak dapat dipisahkan satu sama lain"
        ],
        "correctAnswerIndex": 3,
        "explanation": "'Inextricably linked' (terkait erat dan tak terpisahkan) is an authentic academic collocation for codependent phenomena."
      }
    ]
  }
};

export const FULL_STUDY_TESTS: Record<StudyAbroadDestination, StudyTargetTest> = {
  china: CHINA_STUDY_TESTS['cn-full'],
  japan: JAPAN_STUDY_TESTS['jp-full'],
  korea: KOREA_STUDY_TESTS['kr-full'],
  english: ENGLISH_STUDY_TESTS['en-full'],
  thailand: THAILAND_STUDY_TESTS['th-full'],
  russia: RUSSIA_STUDY_TESTS['ru-full'],
  arabic: ARABIC_STUDY_TESTS['ar-full'],
  france: FRANCE_STUDY_TESTS['fr-full'],
  netherlands: NETHERLANDS_STUDY_TESTS['nl-full'],
  germany: GERMANY_STUDY_TESTS['de-full'],
  spain: SPAIN_STUDY_TESTS['es-full'],
};
