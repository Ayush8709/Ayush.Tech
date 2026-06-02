import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const roles = [
    "Full-Stack Web Applications",
    "Robust Backend Systems",
    "Custom Software Solutions",
    "AI Integrations & Tools",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentRole.slice(0, currentText.length + 1));
      }, 70);
    }

    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-28 pb-16 md:py-16 px-6 max-w-6xl mx-auto"
    >
      <RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
          {/* Left Text Column */}
          <div className="md:col-span-7 flex flex-col text-left space-y-6 z-10 Order-2 md:order-1">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 py-1.5 px-3.5 rounded-full text-xs font-semibold uppercase tracking-wider w-fit border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span>Available for opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Hi, I'm{" "}
              <span className="block mt-2 bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-none">
                Ayush Kr. Singh
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-8 flex items-center">
              <h2 className="text-xl sm:text-2xl font-mono text-[var(--text-secondary)] font-medium">
                I build{" "}
                <span className="text-blue-500 dark:text-blue-400 font-semibold border-r-2 border-blue-500 animate-pulse pr-1">
                  {currentText || "\u00A0"}
                </span>
              </h2>
            </div>

            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-lg">
              With <strong>1+ year of professional experience</strong>, I am a passionate software engineer specializing in modern web ecosystems. 
              I focus on building high-performance, scalable web systems with clean code and great user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-[var(--border-color)] text-[var(--text-primary)] bg-[var(--input-bg)] font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right SVG Column */}
          <div className="md:col-span-5 flex justify-center items-center z-10 order-1 md:order-2 animate-float">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-96">
              {/* Glowing Background Blob behind SVG */}
              <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-full filter blur-3xl" />
              
              {/* Premium Wireframe SVG Grid */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-blue-500/70 dark:text-blue-400/80 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                fill="none"
              >
                <defs>
                  <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Cyber Hexagon Sphere */}
                <circle cx="100" cy="100" r="70" stroke="url(#glowGrad)" strokeWidth="1.5" strokeDasharray="3, 3" />
                <circle cx="100" cy="100" r="50" stroke="url(#glowGrad)" strokeWidth="1" strokeDasharray="8, 4" />
                <circle cx="100" cy="100" r="30" stroke="url(#glowGrad)" strokeWidth="1" />
                
                {/* Floating Node Connections */}
                <line x1="100" y1="30" x2="100" y2="170" stroke="url(#glowGrad)" strokeWidth="1" />
                <line x1="30" y1="100" x2="170" y2="100" stroke="url(#glowGrad)" strokeWidth="1" />
                <line x1="50" y1="50" x2="150" y2="150" stroke="url(#glowGrad)" strokeWidth="0.8" />
                <line x1="50" y1="150" x2="150" y2="50" stroke="url(#glowGrad)" strokeWidth="0.8" />

                {/* Core Node Glows */}
                <circle cx="100" cy="30" r="5" fill="#3b82f6" className="animate-pulse" />
                <circle cx="100" cy="170" r="5" fill="#06b6d4" />
                <circle cx="30" cy="100" r="5" fill="#06b6d4" />
                <circle cx="170" cy="100" r="5" fill="#3b82f6" className="animate-pulse" />
                <circle cx="50" cy="50" r="4" fill="#3b82f6" />
                <circle cx="150" cy="150" r="4" fill="#06b6d4" />
                
                {/* Central server-core glowing rings */}
                <rect x="80" y="80" width="40" height="40" rx="6" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" />
                <path d="M90 100 L110 100" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                <path d="M100 90 L100 110" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

