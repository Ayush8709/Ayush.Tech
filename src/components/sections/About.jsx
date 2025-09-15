import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = [
    "Node.js & Express.js",
    "Microservices",
    "Spring Boot",
    "REST",
    "Docker",
    "MongoDB",
    "MySQL",
    "REDIS",
    "MVC",
    "Vercel",
    "Netlify",
  ];

  const programmingSkills = [
    "Java",
    "JavaScript",
    "Python",
    "OOPS",
    "DSA",
  ];

  const tools = [
    "Git",
    "GitHub",
    "CI/CD",
  ];

  const databases = [
    "SQL",
    "NoSQL",
  ];


  const renderSkillGroup = (title, skills) => (
    <div className="rounded-xl p-6 bg-white/5 hover:-translate-y-1 transition-all shadow-sm">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={`${title}-${skill}`}
            className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-shadow shadow hover:shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Intro and Skills */}
          <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-all">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
              I'm a passionate full-stack developer skilled in crafting
              high-performance, scalable web applications. I love working with
              modern tech stacks and turning complex problems into clean,
              efficient solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderSkillGroup("Frontend", frontendSkills)}
              {renderSkillGroup("Backend", backendSkills)}
              {renderSkillGroup("Programming Languages", programmingSkills)}
              {renderSkillGroup("Databases", databases)}
              {renderSkillGroup("Tools", tools)}
            </div>
          </div>

          {/* Education and Work */}
          {/* Education and Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-all shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Master of Computer Applications (MCA)</strong> — Ranchi University (2023–2025)
                </li>
                <li>
                  Key Subjects: Data Structures & Algorithms, Cloud Computing, Web Development, DBMS, Software Engineering
                </li>
                <li>
                  Built multiple academic projects using <strong>React</strong>, <strong>Node.js</strong>, and <strong>Firebase</strong>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-all shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-white">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Project Intern — Shashi Infotech Pvt. Ltd.
                    <span className="block text-sm text-gray-400">Mar 2025 – May 2025</span>
                  </h4>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      Developed a full-stack campus placement portal using <strong>Next.js</strong> and <strong>Firebase</strong>, including role-based dashboards for students and recruiters.
                    </li>
                    <li>
                      Designed and integrated an <strong>AI-powered mock interview module</strong> that generates MCQs, tracks performance, and provides dynamic feedback — improved student preparation by <strong>60%</strong>.
                    </li>
                    <li>
                      Automated job postings, interview scheduling, and feedback systems — reduced manual coordination by <strong>70%</strong>.
                    </li>
                    <li>
                      Achieved <strong>95%+ performance scores</strong> in Lighthouse audits by optimizing responsiveness and accessibility with <strong>Tailwind CSS</strong>.
                    </li>
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
