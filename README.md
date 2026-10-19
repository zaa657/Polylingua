# Polylingua - Multi-Language Learning & Study Abroad Platform

Platform web modern untuk pembelajaran mandiri 4 bahasa: **Mandarin (Chinese)**, **Jepang (Japanese)**, **Korea (Korean)**, dan **Inggris (English)** berbasis **Next.js 16 (App Router)**, **Tailwind CSS**, dan **Firebase Auth/Firestore**.

Aplikasi ini mendukung **Google Sign-In** untuk sinkronisasi progres ke Cloud, serta **Mode Tamu Mandiri (Offline-First)** menggunakan LocalStorage peramban secara otomatis tanpa perlu konfigurasi rumit.

---

## 🌟 Fitur Utama

1. **4 Bahasa Utama & Kurikulum Berjenjang (Level Gating)**:
   - 🇨🇳 **Mandarin (中文)**: Kurikulum HSK 1 hingga HSK 6, Hanzi, Pinyin, sistem nada, dan pola disposisi 把.
   - 🇯🇵 **Jepang (日本語)**: Kurikulum JLPT N5 hingga N1, Hiragana, Katakana, Kanji dengan Furigana, dan partikel gramatikal.
   - 🇰🇷 **Korea (한국어)**: Kurikulum TOPIK 1 hingga TOPIK 2 Level 6, Hangul, Batchim, dan kesopanan formal/akademik.
   - 🇬🇧 **Inggris (English)**: Standar CEFR A2, B1, B2, hingga C1 Advanced Academic Inversion.

2. **Kamus Kosakata Interaktif & Mode Uji Hafalan (Active Recall)**:
   - Ratusan entri kosakata per bahasa dengan audio pengucapan asli (*Web Speech API*).
   - Mode Active Recall: menyembunyikan arti dan fonetik secara default untuk menguji ingatan aktif.
   - Fitur simpan kosakata favorit dan pencarian cepat.

3. **Step-by-Step Dialogue Carousel & Roleplay**:
   - Kartu dialog interaktif kalimat demi kalimat dengan audio native.
   - Pilihan kecepatan audio: normal (1.0x) dan lambat (0.75x).
   - **Mode Latihan Peran (Roleplay)**: Pilih karakter dan latih berbicara saat giliran tiba.

4. **Kuis Evaluasi 25 Soal (Timer 40 Menit)**:
   - Pilihan ganda (*Multiple Choice*), esai pemahaman, dan susun kata (*Sentence Reorder*).
   - Penilaian otomatis berstandar persentase dengan animasi perayaan *canvas-confetti*.

5. **Target Kuliah Luar Negeri & Ujian Kesiapan (50 Soal • 90 Menit)**:
   - Panduan beasiswa (CSC, MEXT, GKS, LPDP, Chevening, AAS).
   - Checklist dokumen dan simulasi ujian kesiapan 50 soal komprehensif.

6. **Bilingual UI (Indonesia ⇄ English)**:
   - Switch bahasa langsung di navbar atas yang mengubah seluruh antarmuka secara instan.

7. **Otentikasi Google & Mode Tamu Terisolasi**:
   - Masuk cepat menggunakan Akun Google dengan Firebase Authentication.
   - Progres otomatis tersimpan ke Cloud Firestore.
   - Mode Tamu Mandiri tetap tersedia dengan penyimpanan terisolasi tanpa tercampur akun lain.

---

## 🚀 Panduan Menjalankan

### 1. Salin Pengaturan Lingkungan
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Masukkan kredensial Firebase Anda ke `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```
*(Catatan: Jika `.env.local` tidak diisi, aplikasi akan otomatis berjalan dalam **Mode Tamu Mandiri** menggunakan LocalStorage tanpa error).*

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka peramban di [http://localhost:3000](http://localhost:3000).

### 4. Build untuk Produksi
```bash
npm run build
npm run start
```
