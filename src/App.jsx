import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { BackgroundGlow } from "./components/BackgroundGlow";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; // default to dark
  });

  // Sync theme to document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen relative transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-[var(--bg-primary)] text-[var(--text-primary)]`}
      >
        {/* Dynamic Glowing Ambient background */}
        <BackgroundGlow />

        {/* Content Shell */}
        <div className="relative z-10">
          <Navbar
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
          <MobileMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
          <main className="w-full flex flex-col items-center">
            <Home />
            <About />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;

