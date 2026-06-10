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
      title: "Barn-E",
      year: "2024",
      description: "Aplikasi digital pendamping peternakan berbasis user-centered design.",
      longDescription: "Barn-E adalah aplikasi digital untuk membantu peternak mengelola stok, memantau kesehatan ternak, dan mengatur jadwal perawatan secara efisien. Dilengkapi dengan fitur AI dan toko ternak terintegrasi untuk mendukung kebutuhan pengguna dalam satu platform.",
      image: "/barne.png",
      status: "Completed",
      role: "System Analyst & UI/UX Designer",
      tags: ["Figma", "DesignThinking", "UI/UX", "UserResearch"],
      link: "https://drive.google.com/file/d/1rK7i85SV2_ShIVejU0QhCFVDje97b9Oi/view?usp=sharing",
      repo: "#"
    },
    {
      id: 2,
      title: "PongGame",
      year: "2025",
      description: "Game simulasi tenis meja retro 2D berbasis desktop.",
      longDescription: "Game simulasi tenis meja 2D desktop (Pong Game) klasik yang dibangun menggunakan bahasa C++. Proyek ini menekankan pada implementasi logika fisika sederhana, termasuk kalkulasi pergerakan bola di ruang dua dimensi, penanganan pantulan sudut saat bola mengenai papan (paddle) pemain, serta sistem perhitungan dan pembaruan skor otomatis ketika salah satu pihak gagal menghalau bola.",
      image: "/pong.png",
      status: "Completed",
      role: "Game Developer",
      tags: ["C++", "Makefile"],
      link: "#",
      repo: "https://github.com/tazzz-dev/pong-classic",
    },
    {
      id: 3,
      title: "Snake Classic Game",
      year: "2025",
      description: "Game arkade desktop ular klasik berbasis C++.",
      longDescription: "Game arkade desktop ular klasik (Snake Game) yang dikembangkan dengan implementasi Pemrograman Berorientasi Objek (OOP) menggunakan C++. Proyek ini berfokus pada logika penanganan input keyboard secara real-time, pelacakan koordinat objek, deteksi tabrakan (collision detection) pada dinding atau tubuh ular, serta integrasi efek suara dinamis saat ular memakan objek pangan atau mengalami game over.",
      image: "/snake.png",
      status: "Completed",
      role: "Game Developer",
      tags: ["C++", "Makefile", "MP3AudioAPI"],
      link: "#",
      repo: "https://github.com/tazzz-dev/snake-classic",
    },
    {
      id: 4,
      title: "RestoApp",
      year: "2025",
      description: "Aplikasi pemesanan menu restoran berbasis QR Code.",
      longDescription: "Aplikasi sistem manajemen restoran dan Point of Sale (POS) berbasis web untuk mengelola transaksi pemesanan, manajemen stok, nomor meja, hingga pendaftaran akun pengguna (kasir/admin). Sistem ini memodernisasi operasional restoran dengan mendukung fitur self-service bagi pelanggan melalui pemindaian QR Code, serta menyediakan modul internal untuk pengelolaan kasir dan administrator secara real-time.",
      image: "/restoapp.png",
      status: "Completed",
      role: "Full-Stack Developer",
      tags: ["CodeIgniter 3", "MySQL", "PHP", "JavaScript", "HTML5", "CSS3"],
      link: "https://drive.google.com/file/d/1dW2HLf8hsP0f4ay-uhhRwHA0k_RJILgF/view?usp=sharing",
      repo: "https://github.com/tazzz-dev/resto-app",
    },
    {
      id: 5,
      title: "SocialAct",
      year: "2025",
      description: "Platform aksi sosial untuk manajemen relawan.",
      longDescription: "Platform komprehensif yang dirancang untuk memfasilitasi organisasi sosial dalam mengelola relawan, kampanye donasi, dan pelaporan dampak secara transparan.",
      image: "/socialact.png",
      status: "Completed",
      role: "Full-Stack Developer",
      tags: ["CodeIgniter3", "MySQL", "PHP", "JavaScript", "HTML5", "CSS3"],
      link: "https://drive.google.com/file/d/13XTpE8D5Czjirxtala-_8ay9_ixYSN38/view?usp=sharing",
      repo: "https://github.com/mfaatihyusron/socialact",
    }
  ]
};

export default portfolioData;