# WebPorto - Modern Interactive Portfolio

Sebuah portofolio web interaktif yang dibangun dengan fokus pada pengalaman pengguna yang dinamis, estetika futuristik, dan animasi scroll yang halus. Proyek ini menggunakan arsitektur Fullstack (React + Express) untuk manajemen data yang dinamis.

## 🚀 Fitur Utama

- **GSAP Scroll Pinning**: Navigasi naratif di mana setiap bagian muncul dengan animasi horizontal (reveal) dan jeda scroll yang memberikan fokus pada konten.
- **Dynamic Project List**: Daftar proyek dengan efek hover "drawer" di mana gambar muncul dari kiri dan penjelasan detail memanjang ke kanan.
- **Project Tags & Status**: Menampilkan peran, status proyek (In Development/Completed), tahun, dan keahlian yang digunakan secara real-time.
- **Animated Background**: Latar belakang grid biru futuristik dengan elemen blob cahaya yang bergerak secara dinamis.
- **Fully Responsive**: Antarmuka yang dioptimalkan untuk berbagai ukuran perangkat dari desktop hingga mobile.
- **Dynamic Backend API**: Data portofolio dikelola melalui server Express.js untuk kemudahan pembaruan konten.

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **GSAP (GreenSock Animation Platform)** & **ScrollTrigger**
- **Tailwind CSS** (Styling)
- **Axios** (Data fetching)

### Backend
- **Node.js**
- **Express.js**
- **CORS** (Cross-Origin Resource Sharing)

## 📦 Instalasi & Persiapan

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek di mesin lokal Anda:

### 1. Clone Repository
```bash
git clone https://github.com/tazzz-dev/WebPorto.git
cd WebPorto
```

### 2. Persiapan Backend
```bash
cd backend
npm install
node server.js
```
*Server backend akan berjalan di `http://localhost:8080`*

### 3. Persiapan Frontend
Buka terminal baru di folder akar proyek:
```bash
cd frontend
npm install
npm run dev
```
*Aplikasi frontend akan berjalan di `http://localhost:5173`*

## 📁 Struktur Direktori

- `frontend/src/App.jsx`: Logika utama aplikasi, komponen UI, dan integrasi animasi GSAP.
- `backend/server.js`: API sederhana yang menyimpan dan mengirimkan data portofolio.
- `frontend/public/`: Aset statis seperti foto profil dan ikon.

## 📝 Konfigurasi Proyek

Untuk mengubah data proyek atau informasi diri:
1. Buka file `backend/server.js`.
2. Edit objek `portfolioData` sesuai dengan data Anda.
3. Restart server backend untuk menerapkan perubahan.

## 🤝 Kontribusi
Kontribusi selalu terbuka! Jika Anda memiliki ide untuk meningkatkan animasi atau fitur, silakan buat pull request atau laporkan issue.

---
Dibuat dengan ❤️ oleh **Muhammad Mumtaaz**
