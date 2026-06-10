import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-grid { animation: moveGrid 3s linear infinite; }
        .animate-blob { animation: blob 10s infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-hologram {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; filter: blur(20px); }
          50% { opacity: 0.8; filter: blur(40px); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float-hologram { animation: float-hologram 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }

        /* Scroll Transition Styles */
        .fade-in-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity, transform;
        }
        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
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

// ─── UTILS ───────────────────────────────────────────────────────────────────
const scrollPageTo = (id) => {
  const targetId = id.toLowerCase();
  const element = document.getElementById(targetId);
  
  if (element) {
    const trigger = ScrollTrigger.getAll().find(st => st.trigger === element);
    if (trigger) {
      gsap.to(window, {
        scrollTo: { y: trigger.end },
        duration: 1.2,
        ease: "power3.inOut"
      });
    } else {
      gsap.to(window, {
        scrollTo: { y: element, offsetY: 80 },
        duration: 1.2,
        ease: "power3.inOut"
      });
    }
  }
};

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar({ data }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = ["About", "Tools", "Projects", "Contact"];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNavClick = (id) => {
    scrollPageTo(id);
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
              onClick={() => handleNavClick(l)}
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
              onClick={() => handleNavClick(l)}
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

function HolographicSphere({ skills }) {
  const [rotation, setRotation] = useState({ x: -20, y: -20 });
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const [radius, setRadius] = useState(150);

  useEffect(() => {
    const updateSize = () => {
      setRadius(window.innerWidth >= 768 ? 210 : 140);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Filter skills and create a flat list of items
  const sphereLogos = skills?.flatMap(cat => cat.items) || [];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;
      setRotation(prev => ({ x: prev.x - deltaY * 0.5, y: prev.y + deltaX * 0.5 }));
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      {/* Unified 3D Container */}
      <div className="relative w-full h-full flex items-center justify-center transition-transform duration-75 ease-out"
           style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, transformStyle: "preserve-3d" }}>
        
        {/* Core Glow */}
        <div className="absolute w-32 h-32 bg-cyan-500/30 rounded-full blur-[60px]" style={{ transform: "translateZ(0)" }} />
        
        {/* 1. Sphere Mesh Rings */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
          {[0, 30, 60, 90, 120, 150].map((deg) => (
            <div key={`v-${deg}`} 
                 className="absolute rounded-full border border-cyan-500/20"
                 style={{ 
                   width: radius * 2, height: radius * 2,
                   transform: `rotateY(${deg}deg)`, 
                   backgroundImage: "radial-gradient(circle at center, transparent 70%, rgba(6, 182, 212, 0.05) 100%)" 
                 }} />
          ))}
          {[0, 45, 90].map((deg) => (
            <div key={`h-${deg}`} 
                 className="absolute rounded-full border border-cyan-500/10"
                 style={{ 
                   width: radius * 2, height: radius * 2,
                   transform: `rotateX(${deg}deg)` 
                 }} />
          ))}
        </div>

        {/* 2. Global Network Nodes - Background Points */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transformStyle: "preserve-3d" }}>
          {[...Array(20)].map((_, i) => {
            const phi = Math.acos(-1 + (2 * i) / 20);
            const theta = Math.sqrt(20 * Math.PI) * phi;
            const r = radius; 
            const dx = r * Math.sin(phi) * Math.cos(theta);
            const dy = r * Math.sin(phi) * Math.sin(theta);
            const dz = r * Math.cos(phi);

            return (
              <div key={i} 
                   className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                   style={{ 
                     transform: `translate3d(${dx}px, ${dy}px, ${dz}px)`,
                     left: "-0.5px", top: "-0.5px" 
                   }} />
            );
          })}
        </div>

        {/* 3. Technology Logos - Distributed across the sphere */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0" style={{ transformStyle: "preserve-3d" }}>
          {sphereLogos.map((logo, idx) => {
            // Fibonacci Sphere distribution for logos
            const total = sphereLogos.length;
            const phi = Math.acos(-1 + (2 * idx) / total);
            const theta = Math.sqrt(total * Math.PI) * phi;
            
            // Push logos slightly further out than the rings for visibility
            const r = radius * 1.1; 
            const dx = r * Math.sin(phi) * Math.cos(theta);
            const dy = r * Math.sin(phi) * Math.sin(theta);
            const dz = r * Math.cos(phi);

            return (
              <div key={idx} 
                   className="absolute w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#070b14]/90 backdrop-blur-md border border-cyan-500/40 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:border-cyan-400 transition-colors"
                   style={{ 
                     transform: `translate3d(${dx}px, ${dy}px, ${dz}px) rotateX(${-rotation.x}deg) rotateY(${-rotation.y}deg)`,
                     left: "-20px", top: "-20px"
                   }}>
                <img src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color}`} className="w-5 h-5 md:w-6 md:h-6 pointer-events-none" alt={logo.slug} />
              </div>
            );
          })}
        </div>

      </div>
      
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-500 uppercase tracking-widest opacity-50 pointer-events-none">
        Click & Drag to Rotate
      </div>
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ data }) {
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
          <p className="text-slate-400 max-w-2xl leading-relaxed text-lg">
            {data.about}
          </p>
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => scrollPageTo("Projects")}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#070b14] text-sm font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollPageTo("Contact")}
              className="px-6 py-3 border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-sm font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm"
            >
              Let's Connect
            </button>
          </div>
          <div className="flex gap-4 pt-4">
            <a href={data.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors"><IconGithub /></a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors"><IconLinkedin /></a>
            <a href={`mailto:${data.email}`} className="text-slate-500 hover:text-cyan-400 transition-colors"><IconMail /></a>
          </div>
        </div>
        <div className="md:col-span-2 relative w-full h-[400px] md:h-[550px] flex items-center justify-center mt-10 md:mt-0">
           <HolographicSphere skills={data.skillCategories} />
        </div>
      </div>
    </section>
  );
}

function JourneyTimeline({ timeline }) {
  const [activeStep, setActiveStep] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "+=300%",
        scrub: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          if (self.progress < 0.25) setActiveStep(null);
          else if (self.progress < 0.50) setActiveStep(0);
          else if (self.progress < 0.75) setActiveStep(1);
          else setActiveStep(2);
        }
      }
    });
    return () => tl.kill();
  }, []);

  return (
    <div className="relative flex flex-col gap-5 pl-10">
      {/* 1. Garis Konektor Neon Dinamis */}
      <div className="absolute left-[8px] top-12 bottom-12 w-[2px] bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="w-full bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {timeline.slice(0, 3).map((item, index) => {
        const isActive = activeStep === index;
        return (
          <div key={index} className="relative group/item">
            <div 
              className={`absolute left-[-40px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 z-10
                ${isActive 
                  ? "bg-cyan-400 border-cyan-300 scale-125 shadow-[0_0_15px_rgba(34,211,238,0.8)]" 
                  : "bg-[#070b14] border-slate-700 scale-100 group-hover/item:border-cyan-500/50"
                }`}
            >
              {isActive && <div className="absolute inset-0 rounded-full animate-ping bg-cyan-400/40" />}
            </div>

            <div 
              className={`p-5 rounded-xl border transition-all duration-500 backdrop-blur-md cursor-default
                ${isActive 
                  ? "bg-[#0b1120] border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)] translate-x-2 opacity-100" 
                  : "bg-[#0b1120]/60 border-slate-800/30 opacity-100 hover:bg-[#0b1120]/80 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:translate-x-1"
                }`}
            >
              <span className={`text-[10px] font-mono font-bold tracking-widest uppercase transition-colors duration-500 ${isActive ? "text-cyan-400" : "text-slate-600 group-hover/item:text-cyan-500/70"}`}>
                {item.year}
              </span>
              <h4 className={`text-base font-bold mt-0.5 transition-colors duration-500 ${isActive ? "text-white" : "text-slate-400 group-hover/item:text-white"}`}>
                {item.title}
              </h4>
              <p className={`text-xs leading-relaxed mt-1.5 transition-colors duration-500 ${isActive ? "text-slate-300" : "text-slate-500 group-hover/item:text-slate-300"}`}>
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── ABOUT (GSAP HORIZONTAL REVEAL WITH PAUSE) ───────────────────────────
function About({ data }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%", 
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.fromTo(contentRef.current, 
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, ease: "power2.out" }
      )
      .to({}, { duration: 0.5 }); 
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="h-screen flex items-center bg-transparent overflow-hidden relative z-10">
      <div ref={contentRef} className="max-w-6xl mx-auto px-6 w-full flex flex-col">
  
  {/* Bottom Part: Grid for Images and Timeline */}
  <div className="grid md:grid-cols-2 gap-16 items-end">
    
    {/* Left: Pindahkan Title ke Sini dan bungkus dengan Image Grid */}
    <div className="flex flex-col gap-6"> 
      {/* Header container sekarang di atas foto persis */}
      <div className="max-w-2xl">
        <SectionTitle label="Tentang Saya" title="The Journey" />
        <p className="text-slate-400 leading-relaxed mt-2 text-sm">{data.about}</p>
      </div>

      {/* Left: Image Grid */}
      <div className="grid grid-cols-3 gap-3 h-80">
        <div className="col-span-2 rounded-2xl overflow-hidden border border-slate-800/50 group">
          <img src={data.aboutImages?.[0]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="h-1/2 rounded-2xl overflow-hidden border border-slate-800/50 group">
            <img src={data.aboutImages?.[1]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
          </div>
          <div className="h-1/2 rounded-2xl overflow-hidden border border-slate-800/50 group">
            <img src={data.aboutImages?.[2]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
          </div>
        </div>
      </div>
    </div>
    
    {/* Right: Journey Timeline */}
    <div className="hidden md:block">
       {data.timeline && <JourneyTimeline timeline={data.timeline} />}
    </div>
  </div>
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

function ToolItem({ item }) {
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

// ─── TOOLS (GSAP HORIZONTAL REVEAL WITH PAUSE) ──────────────────────────────────────────────────
function Tools({ data }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%", 
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.fromTo(contentRef.current, 
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, ease: "power2.out" }
      )
      .to({}, { duration: 0.5 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="tools" className="h-screen flex items-center bg-transparent overflow-hidden relative z-10">
      <div ref={contentRef} className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Tools & Technologies</h2>
          <div className="mt-3 h-1 w-32 bg-cyan-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 text-sm md:text-base font-medium">Technologies I work with daily</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-[#0b1120]/80 backdrop-blur-md border border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl transition-all duration-500 
                         hover:bg-[#0b1120]/95 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 border-b border-slate-800/50 pb-4 transition-colors duration-500 group-hover:border-cyan-500/30">
                <span className="text-cyan-400">
                  {category.icon === "code" && <IconCode />}
                  {category.icon === "layers" && <IconLayers />}
                  {category.icon === "palette" && <IconPalette />}
                </span>
                <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3">
                {category.items.map((item, i) => (
                <ToolItem key={i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PDF MODAL COMPONENT ──────────────────────────────────────────────────────
function PdfModal({ url, onClose }) {
  // Function to transform Google Drive view links to preview links for iframe
  const getPreviewUrl = (originalUrl) => {
    if (originalUrl.includes("drive.google.com")) {
      return originalUrl.replace("/view?usp=sharing", "/preview").replace("/view", "/preview");
    }
    return originalUrl;
  };

  const previewUrl = getPreviewUrl(url);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fadeIn">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl h-[80vh] md:h-[90vh] bg-[#0b1120] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden flex flex-col z-10">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            Project Document
          </h3>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <IconClose />
          </button>
        </div>
        <div className="flex-1 bg-[#070b14]">
          <iframe 
            src={previewUrl} 
            className="w-full h-full border-none"
            title="PDF Preview"
            allow="autoplay"
          />
        </div>
        <div className="px-6 py-3 border-t border-slate-800 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PROJECTS (GSAP HORIZONTAL REVEAL WITH VERTICAL SCROLL) ──────────────────────────────────────────────────
function Projects({ data, onOpenPdf }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%", // Sedikit lebih pendek agar tidak terlalu lama mengunci sebelum bisa scroll ke bawah
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.fromTo(contentRef.current, 
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, ease: "power2.out" }
      )
      .to({}, { duration: 0.5 }); // Jeda diam sejenak di bagian atas proyek
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen flex flex-col bg-transparent overflow-hidden relative z-10 pt-32 pb-24">
      <div ref={contentRef} className="max-w-4xl mx-auto px-6 w-full">
        <SectionTitle label="Portofolio" title="Proyek Terbaru" />
        
        <div className="mt-8 flex flex-col gap-4">
          {data.projects.map((p) => (
            <div
              key={p.id}
              className="group relative bg-[#0b1120]/60 backdrop-blur-md border border-slate-800/50 rounded-2xl overflow-hidden cursor-pointer
                         transition-all duration-500 ease-in-out flex flex-col md:flex-row
                         hover:bg-[#0f172a]/95 hover:border-cyan-500/50 
                         hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]"
            >
              <div className="w-full md:w-0 group-hover:md:w-72 h-48 md:h-auto transition-all duration-700 ease-in-out overflow-hidden relative border-r border-transparent group-hover:border-slate-800">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f172a]/40" />
              </div>

              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative">
                <div className="absolute top-6 right-6 flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                   <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter bg-slate-800 text-slate-400 border border-slate-700 rounded">
                    {p.role}
                  </span>
                  <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter rounded border ${
                    p.status === "Completed" 
                      ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
                      : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                  }`}>
                    {p.status}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-cyan-500/50 group-hover:text-cyan-400 transition-colors tracking-[0.2em]">
                    {p.year}
                  </span>
                  <div className="flex items-center gap-4">
                    <h3 className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">
                      {p.title}
                    </h3>
                    <div className="h-[1px] flex-1 bg-slate-800 group-hover:bg-cyan-900/50 transition-colors hidden md:block" />
                  </div>

                  <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono font-bold text-cyan-500/60 group-hover:text-cyan-400 transition-colors">
                        #{t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                    <p className="text-slate-500 text-sm mt-4 border-l-2 border-cyan-500/30 pl-4 italic">
                      {p.longDescription}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all hover:scale-110">
                    <IconGithub />
                  </a>
                  {p.link && p.link !== "#" && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPdf(p.link);
                      }} 
                      className="text-slate-500 hover:text-cyan-400 transition-all hover:scale-110"
                    >
                      <IconExternal />
                    </button>
                  )}
                </div>
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT (GSAP HORIZONTAL REVEAL WITH PAUSE) ──────────────────────────────────────────────────
function Contact({ data }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%", 
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      tl.fromTo(contentRef.current, 
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, ease: "power2.out" }
      )
      .to({}, { duration: 0.5 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="h-screen flex items-center bg-transparent overflow-hidden relative z-10">
      <div ref={contentRef} className="max-w-2xl mx-auto text-center px-6 w-full">
        <SectionTitle label="Contact" title="Get in Touch" center />
        <p className="text-slate-400 mt-4 leading-relaxed">
          Have an interesting project or want to collaborate? Feel free to reach out. I'm always open to new discussions!
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#070b14] font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <IconMail /> Email
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
        Built by{" "}
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

// ─── FADE IN SECTION COMPONENT ──────────────────────────────────────────────
function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [phase, setPhase] = useState(0); 
  const [selectedPdf, setSelectedPdf] = useState(null);

  useEffect(() => {
    const startTime = Date.now();
    axios.get("http://localhost:8080/")
      .then((response) => {
        setPortfolioData(response.data);
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, 2000 - elapsedTime);
        setTimeout(() => {
          setPhase(1); 
          setTimeout(() => {
            setPhase(2); 
            setTimeout(() => {
              setPhase(3); 
            }, 800);
          }, 1200); 
        }, remainingTime);
      })
      .catch((error) => {
        console.error("Kesalahan pengambilan data:", error);
      });
  }, []);

  return (
    <>
      <style>{`
        @keyframes trace-light {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-trace {
          stroke-dasharray: 25 75; 
          animation: trace-light 1.5s linear infinite;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity, transform;
        }
        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {phase < 3 && (
        <div className={`fixed inset-0 z-[100] bg-[#070b14] flex items-center justify-center overflow-hidden transition-transform duration-[800ms] ease-in-out ${phase >= 2 ? "translate-x-full" : "translate-x-0"}`}>
          <div className={`transition-all duration-[700ms] ease-in-out flex items-center justify-center overflow-hidden ${phase === 0 ? "w-32 h-32 bg-transparent" : "w-[100vw] h-1 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,1)]"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-[700ms] ease-in-out ${phase === 0 ? "w-24 h-24 opacity-100 scale-100" : "w-24 h-0 opacity-0 scale-y-0"}`}>
              <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" stroke="currentColor" className="text-cyan-950" />
              <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" stroke="currentColor" pathLength="100" className="text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.9)] animate-trace" />
            </svg>
          </div>
        </div>
      )}

      {portfolioData ? (
        <div className="min-h-screen text-white relative">
          <AnimatedBackground />
          <Navbar data={portfolioData} />
          
          <Hero data={portfolioData} />

          <About data={portfolioData} />

          <Tools data={portfolioData} />

          <Projects data={portfolioData} onOpenPdf={(url) => setSelectedPdf(url)} />

          <Contact data={portfolioData} />
          
          <Footer data={portfolioData} />

          {selectedPdf && (
            <PdfModal 
              url={selectedPdf} 
              onClose={() => setSelectedPdf(null)} 
            />
          )}
        </div>
      ) : (
        <div className="min-h-screen bg-[#070b14]" />
      )}
    </>
  );
}

