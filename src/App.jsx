import { useState } from "react";
import "./App.css";
import { useLanguage } from "./i18n/LanguageContext.jsx";
import HeroSection from "./components/HeroSection/HeroSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import TechDeepDive from "./components/TechDeepDive/TechDeepDive";
import ProductImageSection from "./components/ProductImageSection/ProductImageSection";

import ContactSection from "./components/ContactSection/ContactSection";
import ClientsAndProducts from "./components/ClientsAndProducts/ClientsAndProducts";

function LangToggle() {
  const { lang, toggleLang } = useLanguage();
  const isVi = lang === "vi";
  return (
    <label
      className="switch"
      aria-label={isVi ? "Switch to English" : "Chuyển sang Tiếng Việt"}
      title={isVi ? "Switch to English" : "Chuyển sang Tiếng Việt"}
    >
      <input
        type="checkbox"
        checked={!isVi}
        onChange={toggleLang}
        aria-checked={!isVi}
      />
      <span className="slider"></span>
    </label>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const NAV_LINKS = [
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.technical, href: "#technical" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner">
          <a href="#hero" className="navbar__logo">
            <img src="../public/icons.svg" alt="Logo portfolio" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Lê Thiên Vũ</span>
              <span className="navbar__logo-sub">Portfolio</span>
            </div>
          </a>

          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop: lang toggle + hire CTA */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="navbar__desktop-actions"
          >
            <LangToggle />
            <a href="mailto:lethienvu.se@gmail.com" className="navbar__cta">
              {t.nav.hire}
            </a>
          </div>

          <button
            className="navbar__hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} role="menu">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            role="menuitem"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="mailto:lethienvu.se@gmail.com"
          role="menuitem"
          onClick={() => setMenuOpen(false)}
        >
          {t.nav.hire} →
        </a>
        {/* Language toggle in mobile menu */}
        <div style={{ paddingTop: "8px" }}>
          <LangToggle />
        </div>
      </div>
    </>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      className="footer"
      role="contentinfo"
      style={{
        position: "relative",
        zIndex: 1,
        borderColor: "rgba(255,255,255,0.1)",
        marginTop: 0,
        paddingBottom: "40px",
      }}
    >
      <div className="container footer__inner">
        <p className="footer__copy" style={{ color: "rgba(255,255,255,0.7)" }}>
          © {new Date().getFullYear()} Lê Thiên Vũ. {t.footer.built} <br />
          <span
            style={{
              fontSize: "13px",
              opacity: 0.8,
              display: "inline-block",
              marginTop: "4px",
            }}
          >
            {t.footer.aiNote}
          </span>
        </p>
        <nav className="footer__links" aria-label="Footer navigation">
          <a
            href="https://github.com/lethienvu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lê-thiên-vũ-291219229/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:lethienvu.se@gmail.com"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <main id="main-content">
          <HeroSection />
          <ExperienceSection />
          <ClientsAndProducts />
          <TechDeepDive />
          <ProductImageSection />
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#050505",
            }}
          >
            <div
              className="uiverse-midnight-sky"
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                minHeight: "100%",
              }}
            >
              <div className="sky-canvas">
                <div className="stars stars-1"></div>
                <div className="stars stars-2"></div>
                <div className="stars stars-3"></div>

                <div className="meteor m1"></div>
                <div className="meteor m2"></div>
                <div className="meteor m3"></div>

                <div className="moon"></div>
              </div>
            </div>
            <ContactSection />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
