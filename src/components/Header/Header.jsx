import {useEffect, useState} from 'react';
import "./Header.css";

const navItems = [
    {label: "Home", target: "home"},
    {label: "About", target: "about"},
    {label: "Directory", target: "directory"},
    {label: "News", target: "news"},
    {label: "Articles", target: "articles"},
    {label: "Resources", target: "resources"},
    {label: "Events", target: "events"},
];

export default function Header({ onAuthOpen }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            setScrolled(window.scrollY >20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const scrollToSection = (target) => {
    const section = document.getElementById(target);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    setMenuOpen(false);
};

    return (
    <header className={`header ${scrolled ? "header-scroll" : ""}`}>
      <div className="header-container">

        {/* Logo */}

        <button
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          <div className="logo-icon">
            IAN
          </div>

          <div className="logo-text">
            <h2>Institute Alumni</h2>
            <span>Network</span>
          </div>
        </button>

        {/* Mobile */}

        <button
          className="mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}

        <nav className={`nav ${menuOpen ? "show-menu" : ""}`}>

          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
            >
              {item.label}
            </button>
          ))}

          <button
            className="login-btn"
            onClick={() => onAuthOpen("login")}
          >
            Login
          </button>

        </nav>

      </div>
    </header>
  );
}
