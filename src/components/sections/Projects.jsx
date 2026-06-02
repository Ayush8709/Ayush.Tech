import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
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
      category: "AI/ML",
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
      category: "Full Stack",
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

  const filterTabs = ["All", "Full Stack", "AI/ML"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-24 w-full relative"
    >
      <RevealOnScroll>
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
          <div className="flex justify-center space-x-2 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
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
      </RevealOnScroll>
    </section>
  );
};

