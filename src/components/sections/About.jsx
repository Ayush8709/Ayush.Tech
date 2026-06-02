
export const About = () => {
  const skillCategories = [
    {
      title: "💻 Frontend",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Bootstrap"],
    },
    {
      title: "⚙️ Backend",
      skills: ["Node.js & Express.js", "REST APIs", "Microservices", "RabbitMQ", "Docker"],
    },
    {
      title: "🗄️ Databases & Caching",
      skills: ["SQL", "NoSQL (MongoDB)", "Redis"],
    },
    {
      title: "🔧 Languages & Core",
      skills: ["Java", "JavaScript", "Python", "DSA / OOPs", "Git & GitHub", "GitHub Actions"],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Ranchi University",
      period: "2023 – 2025",
      description: "Focused on advanced computer science topics, cloud architectures, database design, and software engineering methodologies.",
    },
    {
      degree: "Academic Project Milestones",
      institution: "Ranchi University Projects",
      period: "2024",
      description: "Built full-stack collaborative portals incorporating React, Firebase, and real-time chat APIs.",
    },
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Enegix PVT LTD Ranchi",
      period: "7+ Months (Current)",
      bullets: [
        "Currently working on creating fast, reliable web systems.",
        "Collaborate directly with multiple clients on their custom projects and business needs.",
        "Design frontend interfaces, write backend APIs, and manage databases.",
        "Ensure high-quality features, clean code, and fast page speeds.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Shashi Infotech Pvt. Ltd.",
      period: "6 Months Internship",
      bullets: [
        "Learned how to work on industry-ready, professional web projects.",
        "Contributed by working on small modules and parts of the application.",
        "Gained hands-on experience in team collaboration and developer workflows.",
        "Explored and experimented with new web technologies to build features.",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-start md:items-center justify-center py-28 md:py-24 w-full relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent inline-block">
              About Me & Skills
            </h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              I turn sophisticated design blueprints into production-ready web applications. 
              Here is a look at my development competencies and professional history.
            </p>
          </div>

          {/* Intro Text */}
          <div className="glass-panel rounded-2xl p-8 mb-16 text-center max-w-4xl mx-auto">
            <p className="text-[var(--text-primary)] text-lg leading-relaxed font-normal">
              "I am a dedicated developer focused on delivering high-quality projects for my clients. 
              I have successfully built web systems for multiple clients who trust me for my clean code and great results. 
              My goal is simple: to create fast, reliable, and beautiful applications that solve real business needs."
            </p>
          </div>

          {/* Categorized Skills Section */}
          <h3 className="text-2xl font-bold mb-8 text-[var(--text-primary)] border-l-4 border-blue-500 pl-4">
            Technical Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl flex flex-col space-y-4 hover:-translate-y-1 transition-all"
              >
                <h4 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-2.5">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-blue-500/10 text-blue-400 py-1.5 px-3 rounded-xl text-sm font-medium border border-blue-500/15 hover:bg-blue-500/20 hover:border-blue-500/30 hover:shadow-[0_2px_10px_rgba(59,130,246,0.25)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Journey Section (Double Timelines) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            
            {/* Column 1: Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-10 text-[var(--text-primary)] border-l-4 border-blue-500 pl-4">
                💼 Experience
              </h3>
              
              <div className="relative pl-8 border-l border-[var(--timeline-line)] space-y-12">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative">
                    {/* Glowing Briefcase Timeline Badge */}
                    <div className="absolute -left-[45px] top-1.5 w-8 h-8 rounded-xl bg-blue-600 border border-blue-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-transform duration-300 hover:scale-110">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1.5 8.077c-.503.208-1.043.323-1.609.341A24.122 24.122 0 0110 15c.69 0 1.369-.03 2.029-.088a5.19 5.19 0 00-1.609-.341L10 14.5l-.5-.423z" clipRule="evenodd" />
                      </svg>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-2xl flex flex-col space-y-3.5 hover:-translate-y-1.5 duration-300">
                      <div className="flex flex-wrap justify-between items-start gap-2 border-b border-[var(--border-color)] pb-3">
                        <div>
                          <h4 className="text-lg font-bold text-[var(--text-primary)]">
                            {exp.role}
                          </h4>
                          <p className="text-blue-500 text-sm font-medium">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20 shadow-sm">
                          {exp.period}
                        </span>
                      </div>
                      
                      <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start leading-relaxed">
                            <span className="text-blue-500 mr-2.5 mt-1 text-xs">✦</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Education */}
            <div>
              <h3 className="text-2xl font-bold mb-10 text-[var(--text-primary)] border-l-4 border-cyan-400 pl-4">
                🎓 Education & Milestones
              </h3>
              
              <div className="relative pl-8 border-l border-[var(--timeline-line)] space-y-12">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Glowing Graduation Cap Timeline Badge */}
                    <div className="absolute -left-[45px] top-1.5 w-8 h-8 rounded-xl bg-cyan-600 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(8,145,178,0.4)] transition-transform duration-300 hover:scale-110">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 8.673v1.877c0 1.218.736 2.308 1.862 2.758a7.03 7.03 0 005.276 0c1.126-.45 1.862-1.54 1.862-2.758V8.673l1.69.724a1 1 0 01.597.918v4.186a1 1 0 01-.124.482L14 18.2V15a1 1 0 10-2 0v3.8l-1.61-.403A1 1 0 0110 17.436V12.93a1 1 0 00-.394-.788l-6.3-4.7a1 1 0 01.597-.918z" />
                      </svg>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-2xl flex flex-col space-y-3.5 hover:-translate-y-1.5 duration-300">
                      <div className="flex flex-wrap justify-between items-start gap-2 border-b border-[var(--border-color)] pb-3">
                        <div>
                          <h4 className="text-lg font-bold text-[var(--text-primary)]">
                            {edu.degree}
                          </h4>
                          <p className="text-cyan-500 text-sm font-medium">{edu.institution}</p>
                        </div>
                        <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-400/20 shadow-sm">
                          {edu.period}
                        </span>
                      </div>
                      
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
    </section>
  );
};

