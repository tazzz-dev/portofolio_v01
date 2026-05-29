import express from "express";
import cors from "cors";
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (req, res) => {
  res.json({
    // Data Proyek Asli Kamu
    projects: [
      {
        title: "SocialAct",
        desc: "Platform aksi sosial berbasis web untuk manajemen relawan dan donasi.",
        tech: ["CodeIgniter 3", "MySQL", "Bootstrap"],
        category: "Web Development"
      },
      {
        title: "FoodApp",
        desc: "Aplikasi mobile pemesanan makanan dengan antarmuka yang intuitif.",
        tech: ["Android Studio", "Java", "XML"],
        category: "Mobile Development"
      },
      {
        title: "Robotika Survey System",
        desc: "Sistem pengumpulan data survei kepuasan anggota KSM Robotika UPNVJ.",
        tech: ["React", "Express", "Tailwind"],
        category: "Internal System"
      }
    ],
    // Daftar Keahlian
    skills: ["CodeIgniter 3", "React.js", "Node.js", "Android Studio", "Cisco Packet Tracer"]
  });
});

app.listen(8080, () => {
  console.log("Server portofolio berjalan di port 8080");
});