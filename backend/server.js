import express from "express";
import cors from "cors";
const app = express();

// Konfigurasi CORS agar frontend Vite bisa mengakses API ini
app.use(cors({ origin: "http://localhost:5173" }));

// 1. Pindahkan data dari App.jsx ke sini
const portfolioData = {
  navName: "HAN",
  heroName: "Muhammad Mumtaaz",
  roles: [
    "Fullstack Developer", 
    "Game Developer", 
    "Robotics Enthusiast"
  ],
  about: "I explore what exists, imagine what doesn't, and build what's next.",
  email: "mumtaazraihaan@gmail.com",
  github: "https://github.com/tazzz-dev",
  linkedin: "https://linkedin.com/in/muhammadmumtaaz",
  profileImage: "/foto-saya.png",
  
  aboutImages: [
    "/Journey1.jpg",
    "/Journey2.jpg",
    "/Journey3.jpg"
  ],

  timeline: [
    {
      year: "2021",
      title: "The Genesis",
      desc: "Memulai langkah awal di dunia rekayasa web dengan mempelajari fondasi struktur dan tata letak antarmuka digital menggunakan HTML5 dan CSS3 dasar."
    },
    {
      year: "2024",
      title: "Academic Foundation",
      desc: "Memasuki bangku kuliah tingkat awal dan memperkuat pemahaman fundamental pemrograman lewat bahasa C, manajemen basis data relasional (MySQL), serta logika dasar ilmu komputer."
    },
    {
      year: "2025 - present",
      title: "Modern Tech Stack",
      desc: "Berfokus pada pengembangan aplikasi modern dengan menguasai ekosistem JavaScript (React.js & Node.js), manajemen repositori (Git), serta arsitektur full-stack yang skalabel."
    }
  ],

  // (Masukkan juga object skillCategories dari App.jsx di sini)
  skillCategories: [
    {
      title: "Languages",
      icon: "code",
      items: [
        { name: "HTML", slug: "html5", color: "E34F26" },
        { name: "CSS", slug: "css", color: "1572B6" },
        { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
        { name: "TypeScript", slug: "typescript", color: "3178C6" }
      ]
    },
    {
      title: "Frameworks",
      icon: "layers",
      items: [
        { name: "React", slug: "react", color: "61DAFB" },
        { name: "Node.js", slug: "nodedotjs", color: "339933" },
        { name: "Express", slug: "express", color: "ffffff" },
        { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" }
      ]
    }, 
    {
      title: "Creative & Tools",
      icon: "palette",
      items: [
        { name: "Unity", slug: "unity", color: "ffffff" },
        { name: "Arduino", slug: "arduino", color: "00979D" },
        { name: "MYSQL", slug: "mysql", color: "4479A1" },
        { name: "Git", slug: "git", color: "F05032" }
      ]
    }
  ],

  // Gunakan data proyek asli Anda yang disesuaikan dengan struktur UI
  projects: [
    {
      id: 1,
      title: "BarnE",
      year: "2024",
      description: "Sistem manajemen inventaris peternakan modern.",
      longDescription: "BarnE adalah solusi digital untuk mengelola stok pakan, kesehatan hewan, dan jadwal panen secara efisien. Membantu pemilik peternakan memantau aset mereka dalam satu dasbor terpusat.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      status: "Completed",
      role: "System Analyst & UI/UX Designer",
      tags: ["React", "Node.js", "PostgreSQL"],
      link: "#",
      repo: "#",
    },
    {
      id: 2,
      title: "PongGame",
      year: "2023",
      description: "Reinkarnasi modern dari game arcade klasik Pong.",
      longDescription: "Dibuat dengan mesin game web modern, PongGame menawarkan kontrol yang responsif, sistem skor real-time, dan kecerdasan buatan (AI) yang menantang untuk pemain tunggal.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      status: "Completed",
      role: "Game Developer",
      tags: ["JavaScript", "HTML5 Canvas"],
      link: "#",
      repo: "#",
    },
    {
      id: 3,
      title: "RestoApp",
      year: "2024",
      description: "Aplikasi pemesanan menu restoran berbasis QR Code.",
      longDescription: "RestoApp memungkinkan pelanggan memesan makanan langsung dari meja mereka melalui pemindaian kode QR, mengintegrasikan sistem dapur langsung dengan pesanan pelanggan.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      status: "Completed",
      role: "Frontend Developer",
      tags: ["React", "Firebase", "Tailwind"],
      link: "#",
      repo: "#",
    },
    {
      id: 4,
      title: "SnakeGame",
      year: "2022",
      description: "Game ular klasik dengan peningkatan grafis dan level.",
      longDescription: "SnakeGame membawa kembali nostalgia dengan tambahan rintangan dinamis, berbagai jenis 'makanan' dengan efek berbeda, dan sistem peringkat global (leaderboard).",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
      status: "Completed",
      role: "Game Developer",
      tags: ["TypeScript", "Phaser"],
      link: "#",
      repo: "#",
    },
    {
      id: 5,
      title: "SocialAct",
      year: "2024",
      description: "Platform aksi sosial untuk manajemen relawan.",
      longDescription: "Platform komprehensif yang dirancang untuk memfasilitasi organisasi sosial dalam mengelola relawan, kampanye donasi, dan pelaporan dampak secara transparan.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      status: "Completed",
      role: "Lead Developer",
      tags: ["CodeIgniter 3", "Bootstrap", "MySQL"],
      link: "#",
      repo: "#",
    }
  ]
};

app.get("/", (req, res) => {
  // 2. Kirim JSON data portofolio
  res.json(portfolioData);
});

app.listen(8080, () => {
  console.log("Server portofolio berjalan di port 8080");
});