import { useState } from "react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "apnabook.com",
      description:
        "A premium SaaS platform designed for comprehensive book management and publishing logistics, built using a unified MERN stack, MySQL databases, payment gateways, and Nginx deployment pipelines.",
      tech: ["React", "Node.js", "MySQL", "MongoDB", "Payment Integration", "Nginx", "CI/CD"],
      category: "SaaS",
      liveLink: "https://apnabook.com",
      // SaaS-themed visual SVG header
      svgHeader: (
        <svg viewBox="0 0 400 160" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="saasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <rect width="400" height="160" fill="url(#saasGrad)" />
          {/* SaaS gear nodes & database */}
          <rect x="150" y="30" width="100" height="60" rx="8" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <circle cx="200" cy="60" r="16" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
          <line x1="200" y1="30" x2="200" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="150" y1="60" x2="250" y2="60" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <circle cx="160" cy="120" r="10" fill="rgba(255,255,255,0.2)" />
          <circle cx="240" cy="120" r="10" fill="rgba(255,255,255,0.2)" />
          {/* Glowing central node */}
          <circle cx="200" cy="60" r="8" fill="#ffffff" className="animate-pulse" />
        </svg>
      ),
    },
    {
      title: "Oxford Book House",
      description:
        "A high-performance book selling e-commerce store engineered with Next.js, featuring integrated Shiprocket logistics automation and secure PhonePe payment gateways for full checkout services.",
      tech: ["Next.js", "PhonePe", "Shiprocket", "TailwindCSS"],
      category: "E-Commerce",
      liveLink: "https://oxfordbookhouse.in",
      // Books/Ecommerce visual SVG header
      svgHeader: (
        <svg viewBox="0 0 400 160" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="oxfordGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4c1d95" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <rect width="400" height="160" fill="url(#oxfordGrad)" />
          {/* Books layout stack */}
          <rect x="120" y="60" width="160" height="25" rx="4" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.4)" />
          <rect x="140" y="30" width="120" height="25" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" />
          <rect x="110" y="90" width="180" height="25" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />
          {/* Shipping truck simple vector overlay */}
          <circle cx="160" cy="130" r="6" fill="#a78bfa" />
          <circle cx="240" cy="130" r="6" fill="#a78bfa" />
          <path d="M140 120 h100 v-10 h-10 v-10 h-40 v20" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      title: "DSkinova Silk",
      description:
        "A premium clinical healthcare website designed for skin, hair, and acne treatments, engineered with Next.js and fully optimized with custom layouts and thorough SEO setups.",
      tech: ["Next.js", "TailwindCSS", "SEO Config", "UX Design"],
      category: "Health",
      liveLink: "https://dskinova-silk.vercel.app/",
      // Skincare/Wellness themed visual SVG header
      svgHeader: (
        <svg viewBox="0 0 400 160" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="silkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#065f46" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <rect width="400" height="160" fill="url(#silkGrad)" />
          {/* Wellness DNA glowing curve */}
          <path d="M 80 80 C 130 30, 150 130, 200 80 C 250 30, 270 130, 320 80" stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" />
          <path d="M 80 80 C 130 130, 150 30, 200 80 C 250 130, 270 30, 320 80" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" fill="none" />
          <circle cx="140" cy="55" r="5" fill="#34d399" className="animate-pulse" />
          <circle cx="200" cy="80" r="6" fill="#ffffff" />
          <circle cx="260" cy="105" r="5" fill="#34d399" />
          {/* Skincare leaves symbol */}
          <path d="M200 40 Q220 50 200 80 Q180 50 200 40" fill="rgba(255,255,255,0.2)" />
        </svg>
      ),
    },
    {
      title: "Infinity Space Group",
      description:
        "A modern corporate portfolio website designed for premium construction builders and architects, showcasing home blueprints, luxury building designs, and structural apartment plans.",
      tech: ["Next.js", "TailwindCSS", "Architectural UX", "Responsive UI"],
      category: "Construction",
      liveLink: "https://infinity-space-group.vercel.app/",
      // Construction/Space themed visual SVG header
      svgHeader: (
        <svg viewBox="0 0 400 160" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="infGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          <rect width="400" height="160" fill="url(#infGrad)" />
          {/* Construction apartment outlines */}
          <rect x="80" y="50" width="60" height="80" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />
          <rect x="150" y="30" width="70" height="100" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" />
          <rect x="230" y="60" width="60" height="70" rx="4" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" />
          {/* Little glowing windows */}
          <circle cx="170" cy="50" r="2.5" fill="#3b82f6" className="animate-pulse" />
          <circle cx="190" cy="50" r="2.5" fill="#3b82f6" />
          <circle cx="170" cy="70" r="2.5" fill="#3b82f6" />
          <circle cx="190" cy="70" r="2.5" fill="#3b82f6" className="animate-pulse" />
        </svg>
      ),
    },
    {
      title: "Vyoom Builders",
      description:
        "A sleek and high-performance corporate landing web portal designed for real estate development and modern architectural construction solutions, featuring animated gallery designs.",
      tech: ["React", "TailwindCSS", "CSS Transitions", "UI Design"],
      category: "Construction",
      liveLink: "https://vyoom.vercel.app/",
      // Construction/Amber themed visual SVG header
      svgHeader: (
        <svg viewBox="0 0 400 160" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="vyoomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c2d12" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
          <rect width="400" height="160" fill="url(#vyoomGrad)" />
          {/* Structural beams & geometry */}
          <line x1="80" y1="120" x2="200" y2="40" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <line x1="200" y1="40" x2="320" y2="120" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
          <line x1="80" y1="120" x2="320" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <line x1="140" y1="120" x2="140" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="260" y1="120" x2="260" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <circle cx="200" cy="40" r="6" fill="#ffffff" className="animate-pulse" />
        </svg>
      ),
    },
    {
      title: "Real-Time Chat App",
      description:
        "A feature-rich chat application that provides group chats, presence detection, real-time messaging, and integrated video calling via WebRTC for smooth peer-to-peer communication.",
      tech: ["Express", "Microservices", "React", "Socket.IO", "WebRTC"],
      category: "Full Stack",
      liveLink: "https://full-stack-chat-video-u5mz.vercel.app",
      // Messenger-themed visual SVG header
      svgHeader: (
        <svg viewBox="0 0 400 160" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <rect width="400" height="160" fill="url(#chatGrad)" />
          {/* Chat bubbles */}
          <rect x="50" y="30" width="180" height="45" rx="15" fill="rgba(255,255,255,0.15)" />
          <circle cx="210" cy="52" r="6" fill="#60a5fa" className="animate-pulse" />
          <rect x="170" y="85" width="180" height="45" rx="15" fill="rgba(255,255,255,0.07)" />
          {/* Audio wave grid lines */}
          <line x1="80" y1="52" x2="180" y2="52" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeDasharray="5,10" />
          <line x1="200" y1="108" x2="300" y2="108" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeDasharray="3,7" />
        </svg>
      ),
    },
    {
      title: "College Placement Cell with AI",
      description:
        "A modern placement platform utilizing generative AI models to replicate AI-driven video mock interviews, technical diagnostics, student performance analytics, and dynamic grading responses.",
      tech: ["Firebase", "Next.js", "OpenRouterAI", "Vapi.AI", "TailwindCSS"],
      category: "AI & ML",
      liveLink: "https://placement-cell-ai-interview.vercel.app",
      // AI-themed visual SVG header
      svgHeader: (
        <svg viewBox="0 0 400 160" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#083344" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
          <rect width="400" height="160" fill="url(#aiGrad)" />
          {/* Neural lines */}
          <path d="M 50 80 Q 120 20 200 80 T 350 80" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
          <path d="M 50 80 Q 120 140 200 80 T 350 80" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
          <circle cx="200" cy="80" r="24" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />
          {/* AI Core circle */}
          <circle cx="200" cy="80" r="14" fill="#22d3ee" className="animate-pulse" />
          {/* Connections */}
          <circle cx="100" cy="50" r="5" fill="#22d3ee" />
          <circle cx="100" cy="110" r="5" fill="#22d3ee" />
          <circle cx="300" cy="50" r="5" fill="#22d3ee" />
          <circle cx="300" cy="110" r="5" fill="#22d3ee" />
        </svg>
      ),
    },
    {
      title: "E-Commerce Web App",
      description:
        "A full-stack premium storefront featuring a dynamic catalog layout, persistent shopping cart, Stripe payment gateways integration, and fully responsive checkout portals.",
      tech: ["Next.js", "MongoDB", "Stripe", "Microservices", "TailwindCSS"],
      category: "E-Commerce",
      liveLink: "https://next-ecoshop.vercel.app",
      // Shop-themed visual SVG header
      svgHeader: (
        <svg viewBox="0 0 400 160" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="shopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#311042" />
              <stop offset="100%" stopColor="#701a75" />
            </linearGradient>
          </defs>
          <rect width="400" height="160" fill="url(#shopGrad)" />
          {/* Decorative Card & Cart outlines */}
          <rect x="130" y="30" width="140" height="90" rx="10" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
          <circle cx="170" cy="100" r="6" fill="#f472b6" />
          <circle cx="230" cy="100" r="6" fill="#f472b6" />
          {/* Glowing credit card line */}
          <rect x="150" y="45" width="100" height="24" rx="4" fill="rgba(255,255,255,0.1)" />
          <line x1="160" y1="80" x2="220" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
        </svg>
      ),
    },
  ];

  const filterTabs = [
    "All",
    "SaaS",
    "E-Commerce",
    "Health",
    "Construction",
    "AI & ML",
    "Full Stack",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-start md:items-center justify-center py-28 md:py-24 w-full relative"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent inline-block">
            Featured Projects
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-xl mx-auto text-base">
            A curated collection of full-stack systems and smart client interfaces 
            engineered with cutting-edge tools.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-12 max-w-full px-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === tab
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 border-transparent"
                  : "border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-blue-500/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col group h-full hover:-translate-y-1.5"
            >
              {/* SVG Visual Header */}
              <div className="h-40 overflow-hidden relative border-b border-[var(--border-color)]">
                {project.svgHeader}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-white/10 text-white/90 text-xs px-2.5 py-1 rounded-full font-medium shadow-md">
                  {project.category}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2 mt-auto">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-blue-500/10 text-blue-400 text-xs font-semibold py-0.5 px-2 rounded-md border border-blue-500/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="pt-2 border-t border-[var(--border-color)]">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors group/link"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1.5 transform transition-transform group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

