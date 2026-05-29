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
  about: "I build things — for the web, for games, and for the real world...",
  email: "mumtaazraihaan@gmail.com",
  github: "https://github.com/tazzz-dev",
  linkedin: "https://linkedin.com/in/muhammadmumtaaz",
  profileImage: "/foto-saya.png",
  
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
        { name: "CodeIgniter", slug: "codeigniter", color: "#EF4223" },
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
      title: "SocialAct",
      description: "Platform aksi sosial berbasis web untuk manajemen relawan dan donasi.",
      tags: ["CodeIgniter 3", "MySQL", "Bootstrap"],
      link: "#",
      repo: "#",
    },
    {
      id: 2,
      title: "FoodApp",
      description: "Aplikasi mobile pemesanan makanan dengan antarmuka yang intuitif.",
      tags: ["Android Studio", "Java", "XML"],
      link: "#",
      repo: "#",
    },
    {
      id: 3,
      title: "Robotika Survey System",
      description: "Sistem pengumpulan data survei kepuasan anggota KSM Robotika UPNVJ.",
      tags: ["React", "Express", "Tailwind"],
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