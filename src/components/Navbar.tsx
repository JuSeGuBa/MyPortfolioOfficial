import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const NAV_ITEMS = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Skills", path: "#skills" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      {/* Brand */}
      <a href="#home" className="navbar__brand">
        <span className="navbar__brand-bracket">[</span>
        <span className="navbar__brand-name">SG</span>
        <span className="navbar__brand-bracket">]</span>
      </a>

      {/* Desktop */}
      <ul className="navbar__links">
        {NAV_ITEMS.map(({ label, path }, i) => (
          <li key={path}>
            <a href={path} className="navbar__link">
              <span className="navbar__link-index">
                {String(i + 1).padStart(2, "0")}.
              </span>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <button
        className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`navbar__drawer ${menuOpen ? "navbar__drawer--open" : ""}`}
      >
        <ul className="navbar__drawer-links">
          {NAV_ITEMS.map(({ label, path }, i) => (
            <li key={path} style={{ "--i": i } as React.CSSProperties}>
              <a
                href={path}
                className="navbar__drawer-link"
                onClick={handleClick}
              >
                <span className="navbar__link-index">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
