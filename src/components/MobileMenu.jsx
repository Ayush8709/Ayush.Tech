import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen, isDarkMode, toggleTheme }) => {
  useEffect(() => {
    // Disable body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-30 flex flex-col items-center justify-center
                 transition-all duration-500 ease-in-out backdrop-blur-2xl
                 ${
                   menuOpen
                     ? "opacity-100 pointer-events-auto translate-x-0"
                     : "opacity-0 pointer-events-none translate-x-full"
                 }
                `}
      style={{
        background: "rgba(var(--accent-glow), 0.05)",
        backgroundColor: "var(--bg-card)",
      }}
    >
      {/* Menu Links */}
      <div className="flex flex-col items-center space-y-8">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-3xl font-semibold tracking-wide text-[var(--text-primary)] hover:text-blue-500 transition-all duration-300 transform
                        ${
                          menuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }
                      `}
            style={{
              transitionDelay: `${idx * 100}ms`,
            }}
          >
            {link.label}
          </a>
        ))}

        {/* In-menu theme toggle button */}
        <div
          className={`flex items-center space-x-3 pt-6 border-t border-[var(--border-color)] transition-all duration-500
            ${
              menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }
          `}
          style={{ transitionDelay: "400ms" }}
        >
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            {isDarkMode ? "Dark Theme" : "Light Theme"}
          </span>
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--text-primary)] hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg
                className="w-6 h-6 text-yellow-400"
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
              <svg
                className="w-6 h-6 text-slate-700"
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
        </div>
      </div>
    </div>
  );
};

