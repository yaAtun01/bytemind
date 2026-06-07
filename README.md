# ByteMind ⚡

> **Pahami Kode Lebih Cerdas** — Platform berbasis AI yang membantu pemula memahami kode pemrograman dengan penjelasan langkah demi langkah yang jelas, terperinci, dan mudah dipahami.

🌐 **Live Web Link**: [https://bytemind.vercel.app](https://bytemind.vercel.app) *(atau sesuaikan dengan URL hasil deploy Vercel Anda)*

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Express.js](https://img.shields.io/badge/Express.js-4-green?logo=express)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)

---

## ✨ Fitur-Fitur Utama (Key Features)

ByteMind dilengkapi dengan berbagai fitur premium untuk mempermudah proses belajar coding bagi pemula:

1. **🤖 Penjelasan Berbasis AI (Live & Offline)**
   * **Live Mode**: Didukung oleh Google Gemini API untuk memberikan analisis kode yang dinamis, akurat, dan cerdas.
   * **Simulation Mode**: Dilengkapi dengan *ByteMind Simulation Engine* agar aplikasi tetap dapat berjalan offline jika API Key Gemini tidak dikonfigurasi.
2. **🌐 Dukungan Bilingual (Bahasa Indonesia & English)**
   * Seluruh antarmuka aplikasi dan hasil analisis AI dapat diubah bahasanya secara instan sesuai kebutuhan Anda.
3. **🐍 Dukungan 6 Bahasa Pemrograman Populer**
   * Menganalisis dan menjelaskan baris kode dari bahasa: **Python, JavaScript, Java, C++, HTML/CSS, dan SQL**.
4. **🔢 Penjelasan Langkah demi Langkah (Step-by-Step)**
   * Hasil analisis dipecah menjadi ringkasan umum (*summary*) dan langkah-langkah bernomor yang mendetail agar mudah diikuti alurnya.
5. **📝 Editor Kode dengan Nomor Baris (Line Numbers)**
   * Dilengkapi kolom editor interaktif yang memiliki penomoran baris otomatis layaknya text editor profesional.
6. **🌓 Mode Gelap & Terang Otomatis (Dark/Light Theme)**
   * Perpindahan tema gelap/terang secara mulus melalui tombol toggle dengan transisi animasi yang interaktif.
7. **🎨 Desain UI Premium (Glassmorphism)**
   * Menggunakan estetika modern dengan efek kartu kaca transparan, gradient mesh yang indah, skeleton loaders saat proses analisis, dan animasi mikro yang responsif.
8. **📋 Salin & Bagikan (Copy to Clipboard)**
   * Menyalin ringkasan serta langkah-langkah penjelasan AI dengan satu kali klik untuk disimpan di catatan belajar Anda.

---

## 🛠️ Teknologi yang Digunakan

* **Frontend**: Next.js 16 (App Router), Tailwind CSS v4, TypeScript, React 19
* **Backend**: Express.js, Node.js
* **Deployment**: Vercel (Frontend) & Render/Heroku/Vercel (Backend)

---

## 🚀 Cara Memulai (Getting Started)

### Prasyarat
- **Node.js** (versi 18+) dan **npm** sudah terinstal di komputer Anda.
- API Key Gemini dari [Google AI Studio](https://aistudio.google.com/apikey).

### Instalasi Lokal
Aplikasi ini menggunakan dependensi frontend dan backend terpisah. Ikuti langkah di bawah untuk instalasi:

**1. Instal Dependensi**
Jalankan perintah ini di terminal direktori utama (`bytemind/`):
```bash
# Instal dependensi frontend
npm install

# Instal dependensi backend
npm --prefix server install
```

**2. Konfigurasi Environment Variables**
* Buat berkas `.env.local` di folder **root** (frontend):
  ```env
  NEXT_PUBLIC_API_URL=http://localhost:5000
  ```
* Buat berkas `.env` di dalam folder **`server/`** (backend):
  ```env
  PORT=5000
  GEMINI_API_KEY=KUNCI_API_GEMINI_ANDA
  ```

**3. Jalankan Aplikasi Secara Bersamaan**
Gunakan perintah `dev` di folder root untuk menjalankan frontend dan backend secara bersamaan menggunakan `concurrently`:
```bash
npm run dev
```
*Aplikasi Frontend akan berjalan di [http://localhost:3000](http://localhost:3000) dan API Backend berjalan di [http://localhost:5000](http://localhost:5000).*

---

## ☁️ Cara Deploy ke Vercel

Jika Anda ingin mempublikasikan aplikasi ini ke **Vercel** tetapi belum menginstal Vercel CLI secara global, Anda dapat menggunakan perintah **`npx`** tanpa perlu menginstalnya secara global.

Jalankan perintah berikut pada terminal direktori utama:
```bash
npx vercel --prod
```
Perintah di atas akan mengunduh paket Vercel CLI secara temporer, meminta Anda masuk (login/register) ke akun Vercel, lalu melakukan deployment langsung ke server produksi Vercel. Setelah selesai, perbarui link web utama di bagian atas berkas `README.md` ini dengan tautan produksi Vercel Anda.

---

## 📄 Lisensi
Lisensi MIT — Bebas dikembangkan dan digunakan untuk tujuan pembelajaran.
