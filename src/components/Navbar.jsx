import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const sections = ["home", "about", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
        scrolled
          ? "py-3 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-xl border-[var(--border-color)] shadow-lg"
          : "py-5 bg-transparent border-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "var(--bg-card)" : "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-2xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-opacity"
          >
            Ayush<span className="text-blue-500">.tech</span>
          </a>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Nav links for desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`text-[15px] font-medium tracking-wide transition-all duration-300 relative py-1 ${
                    activeSection === link.id
                      ? "text-blue-500 font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 rounded-full animate-pulse" />
                  )}
                </a>
              ))}
            </div>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--text-primary)] hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                // Sun Icon
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              ) : (
                // Moon Icon
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Burger Menu Button */}
            <button
              className="w-8 h-8 flex flex-col justify-center items-center relative cursor-pointer z-50 md:hidden p-1 rounded hover:bg-[var(--input-bg)]"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <span
                className={`w-6 h-[2px] bg-[var(--text-primary)] rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-[var(--text-primary)] rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "mb-1.5"
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-[var(--text-primary)] rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

