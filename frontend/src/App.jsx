import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

// ─── ICONS (inline SVG) ───────────────────────────────────────────────────────
const IconGithub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconMusic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);
const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);
const IconPalette = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
  </svg>
);

// ─── ANIMATED BACKGROUND ──────────────────────────────────────────────────────
function AnimatedBackground() {
  return (
    <>
      <style>{`
        @keyframes moveGrid {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-grid { animation: moveGrid 3s linear infinite; }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
      
      <div className="fixed inset-0 z-[-1] bg-[#070b14] overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.2] animate-grid"
          style={{
            backgroundImage:
              "linear-gradient(to right, #4fd1c5 1px, transparent 1px), linear-gradient(to bottom, #4fd1c5 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            width: "100%",
            height: "200vh",
            top: "-100vh",
          }}
        />
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-cyan-900/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[#070b14]/50" />
      </div>
    </>
  );
}

// ─── TYPEWRITER COMPONENT ─────────────────────────────────────────
function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  const currentWord = words[index] || "";

  return (
    <span className="inline-flex items-center">
      {currentWord.substring(0, subIndex)}
      <span className={`inline-block w-[3px] h-[1.1em] bg-cyan-400 ml-1 transition-opacity duration-100 ${blink ? "opacity-100" : "opacity-0"}`}></span>
    </span>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ data }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Menghapus 'Experience' dari Navigation links
  const navLinks = ["About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#070b14]/90 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span
          className="text-xl font-black tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-white">{data.navName}</span>
          <span className="text-cyan-400">.</span>
        </span>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {l}
            </button>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#070b14]/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-slate-300 hover:text-cyan-400 text-left text-sm font-medium transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── HERO & VINYL RECORD ──────────────────────────────────────────────────────
function Hero({ data }) {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const heroSkills = data.skillCategories.flatMap(c => c.items).slice(0, 7);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    const maxTilt = 20;

    setRotation({
      x: -y * maxTilt,
      y: x * maxTilt
    });
  };

  const layers = [
    { id: 1, opacity: 0.15, z: -100, blur: "blur(6px)" },
    { id: 2, opacity: 0.30, z: -60,  blur: "blur(3px)" },
    { id: 3, opacity: 0.60, z: -30,  blur: "blur(1px)" },
    { id: 4, opacity: 1.00, z: 0,    blur: "blur(0px)" }, 
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white tracking-tighter">
            {data.heroName}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-300 font-medium tracking-wide min-h-[32px]">
            <Typewriter words={data.roles} />
          </h2>
          
          <p className="text-slate-400 max-w-lg leading-relaxed text-lg">
            {data.about}
          </p>

          
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#070b14] text-sm font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
            >
              View My Projects
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-sm font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm"
            >
              Let's Connect
            </button>
          </div>

          <div className="flex gap-4 pt-4">
            <a href={data.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <IconGithub />
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <IconLinkedin />
            </a>
            <a href={`mailto:${data.email}`} className="text-slate-500 hover:text-cyan-400 transition-colors">
              <IconMail />
            </a>
          </div>
        </div>

        {/* ─── INTERACTIVE 3D PARALLAX TILT ─── */}
        <div className="md:col-span-2 relative w-full h-[400px] md:h-[550px] flex items-center justify-center mt-10 md:mt-0" style={{ perspective: "1000px" }}>
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d", 
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: "transform 0.3s ease-out", 
            }}
          >
            {layers.map((layer) => (
              <img
                key={layer.id}
                src={data.profileImage}
                alt="Muhammad Mumtaaz"
                /* Perbaikan CSS:
                  - Menghapus rounded-2xl dan object-cover
                  - Menggunakan max-w-none agar tidak terjepit grid
                  - w-[110%] md:h-[125%] akan menskalakan gambar agar memanjang dari atas H1 ke bawah tombol CTA
                */
                className="absolute w-full h-[110%] md:h-[125%] max-w-none object-contain object-center pointer-events-none drop-shadow-2xl"
                style={{
                  opacity: layer.opacity,
                  filter: layer.blur,
                  transform: `translateZ(${layer.z}px)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT (3D PARALLAX TILT + PERSISTENT STATE) ───────────────────────────
function About({ data }) {
  return (
    <section id="about" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Kolom Teks */}
        <div>
          <SectionTitle label="Tentang Saya" title="The Journey" />
          <p className="text-slate-400 leading-relaxed mt-6">{data.about}</p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { label: "Proyek Selesai", value: "20+" },
              { label: "Tahun Pengalaman", value: "5+" },
              { label: "Klien Puas", value: "15+" },
              { label: "Kontribusi GitHub", value: "300+" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0b1120]/60 backdrop-blur-md border border-slate-800/50 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-colors">
                <p className="text-2xl font-extrabold text-cyan-400">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan Dikosongkan Sesuai Permintaan */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}

function ScrambleText({ text, trigger }) {
  const intervalRef = useRef(null);
  const [display, setDisplay] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  useEffect(() => {
    if (!trigger) {
      setDisplay(text);
      return;
    }

    let iteration = 0;
    
    if (intervalRef.current) {
    clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 30);

    return () => clearInterval(intervalRef.current);
  }, [trigger, text]);

  return <span>{display}</span>;
}

function SkillItem({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 bg-[#070b14]/80 border border-slate-800/50 rounded-xl px-4 py-3 hover:bg-slate-800/40 hover:border-cyan-500/30 transition-all duration-300 group"
    >
      <img 
        src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`} 
        alt={item.name} 
        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-slate-300 text-sm font-semibold">
        <ScrambleText text={item.name} trigger={hovered} />
      </span>
    </div>
  );
}

// ─── SKILLS (KARTU KATEGORI) ──────────────────────────────────────────────────
function Skills({ data }) {
  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Tools & Technologies</h2>
          <p className="text-slate-400 text-sm md:text-base font-medium">Technologies I work with daily</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.skillCategories.map((category, idx) => (
            <div key={idx} className="bg-[#0b1120]/80 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-slate-800/50 pb-4">
                <span className="text-cyan-400">
                  {category.icon === "code" && <IconCode />}
                  {category.icon === "layers" && <IconLayers />}
                  {category.icon === "palette" && <IconPalette />}
                </span>
                <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3">
                {category.items.map((item, i) => (
                <SkillItem key={i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects({ data }) {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="Portofolio" title="Proyek Terbaru" />
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {data.projects.map((p) => (
            <div
              key={p.id}
              className="group bg-[#0b1120]/60 backdrop-blur-md border border-slate-800/50 hover:border-cyan-500/40 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                    <IconGithub />
                  </a>
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400">
                    <IconExternal />
                  </a>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono text-cyan-400 bg-cyan-500/10 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact({ data }) {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <SectionTitle label="Kontak" title="Hubungi Saya" center />
        <p className="text-slate-400 mt-4 leading-relaxed">
          Punya proyek menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi baru!
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#070b14] font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <IconMail /> Kirim Email
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition-all backdrop-blur-sm bg-black/20"
          >
            <IconLinkedin /> LinkedIn
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition-all backdrop-blur-sm bg-black/20"
          >
            <IconGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ data }) {
  return (
    <footer className="py-8 px-6 border-t border-slate-800/50 text-center text-slate-500 text-sm relative z-10 backdrop-blur-sm bg-black/10">
      <p>
        Dibuat dengan ❤️ oleh{" "}
        <span className="text-cyan-400 font-medium">{data.heroName}</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

// ─── SECTION TITLE HELPER ─────────────────────────────────────────────────────
function SectionTitle({ label, title, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-cyan-500 font-mono text-xs tracking-widest uppercase mb-2">{label}</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
      <div className={`mt-3 h-1 w-16 bg-cyan-500 rounded-full ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Meminta data ke backend
    axios.get("http://localhost:8080/")
      .then((response) => {
        setPortfolioData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Tampilkan layar loading selama data belum didapatkan
  if (loading || !portfolioData) {
    return (
      <div className="min-h-screen bg-[#070b14] flex items-center justify-center">
        <span className="text-cyan-400 font-mono animate-pulse tracking-widest text-sm">
          MENGHUBUNGKAN KE SERVER...
        </span>
      </div>
    );
  }

  // Lempar portfolioData ke semua sub-komponen melalui props 'data'
  return (
    <div className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar data={portfolioData} />
      <Hero data={portfolioData} />
      <About data={portfolioData} />
      <Skills data={portfolioData} />
      <Projects data={portfolioData} />
      <Contact data={portfolioData} />
      <Footer data={portfolioData} />
    </div>
  );
}