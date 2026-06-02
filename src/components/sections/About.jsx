import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skillCategories = [
    {
      title: "💻 Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "TailwindCSS", level: 95 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      title: "⚙️ Backend",
      skills: [
        { name: "Node.js & Express.js", level: 88 },
        { name: "Spring Boot", level: 75 },
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 80 },
        { name: "Docker", level: 70 },
      ],
    },
    {
      title: "🗄️ Databases & Caching",
      skills: [
        { name: "SQL", level: 85 },
        { name: "NoSQL (MongoDB)", level: 88 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      title: "🔧 Languages & Core",
      skills: [
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 75 },
        { name: "DSA / OOPs", level: 80 },
        { name: "Git & GitHub", level: 90 },
      ],
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
      role: "Project Intern",
      company: "Shashi Infotech Pvt. Ltd.",
      period: "Mar 2025 – May 2025",
      bullets: [
        "Engineered full-stack placement portal using Next.js, role-based dashboards, and secure Firestore integration.",
        "Built AI-powered interview module that generates technical MCQ diagnostics and delivers dynamic preparative feedback.",
        "Automated job dispatch, scheduling, and feedback reporting, slashing manual coordination tasks by 70%.",
        "Achieved 95%+ performance audits on Lighthouse using responsive techniques in Tailwind CSS.",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24 w-full relative overflow-hidden"
    >
      <RevealOnScroll>
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
                className="glass-panel p-6 rounded-2xl flex flex-col space-y-5"
              >
                <h4 className="text-lg font-bold text-[var(--text-primary)] tracking-wide">
                  {category.title}
                </h4>
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-[var(--text-primary)]">{skill.name}</span>
                        <span className="text-blue-500 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      {/* Premium animated progress bar */}
                      <div className="w-full h-2 bg-blue-500/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
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
              
              <div className="relative pl-6 border-l-2 border-[var(--timeline-line)] space-y-12">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative">
                    {/* Glowing Timeline Marker */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[var(--bg-primary)] shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-pulse" />
                    
                    <div className="glass-panel p-6 rounded-2xl flex flex-col space-y-3">
                      <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-full w-fit">
                        {exp.period}
                      </span>
                      <h4 className="text-lg font-bold text-[var(--text-primary)]">
                        {exp.role} <span className="text-blue-500 font-normal">@ {exp.company}</span>
                      </h4>
                      <ul className="space-y-2 text-sm text-[var(--text-secondary)] list-disc list-inside">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="leading-relaxed pl-1">
                            {bullet}
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
              
              <div className="relative pl-6 border-l-2 border-[var(--timeline-line)] space-y-12">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Glowing Timeline Marker */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[var(--bg-primary)] shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    
                    <div className="glass-panel p-6 rounded-2xl flex flex-col space-y-3">
                      <span className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-semibold rounded-full w-fit">
                        {edu.period}
                      </span>
                      <h4 className="text-lg font-bold text-[var(--text-primary)]">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-500 text-sm font-medium">{edu.institution}</p>
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
      </RevealOnScroll>
    </section>
  );
};

