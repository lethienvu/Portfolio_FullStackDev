import { useState, lazy, Suspense, useEffect, useRef } from "react";
import "./App.css";
import { useLanguage } from "./i18n/LanguageContext.jsx";
import { useScrollAnimation } from "./hooks/useScrollAnimation.js";
import HeroSection from "./components/HeroSection/HeroSection";
import VerticalToggle from "./components/VerticalToggle/VerticalToggle";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";

// Code splitting: Lazy load below-the-fold sections
const ExperienceSection = lazy(() => import("./components/ExperienceSection/ExperienceSection"));
const TechDeepDive = lazy(() => import("./components/TechDeepDive/TechDeepDive"));
const ClientsAndProducts = lazy(() => import("./components/ClientsAndProducts/ClientsAndProducts"));
const CaseStudies = lazy(() => import("./components/CaseStudies/CaseStudies"));
const ContactSection = lazy(() => import("./components/ContactSection/ContactSection"));


function SectionFallback() {
  return (
    <div style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="section-loader" style={{ width: "28px", height: "28px", border: "2px solid rgba(255,255,255,0.1)", borderTopColor: "var(--accent, #6366f1)", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
    </div>
  );
}

// Defer loading below-the-fold chunks until their section approaches the viewport.
function DeferredSection({ children, minHeight = "200px" }) {
  const [shouldRender, setShouldRender] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const element = placeholderRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldRender(true);
        observer.disconnect();
      }
    }, { rootMargin: "600px 0px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={placeholderRef} style={{ minHeight }}>
      {shouldRender ? <Suspense fallback={<SectionFallback />}>{children}</Suspense> : null}
    </div>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="footer__name" href="#hero">LÊ THIÊN VŨ</a>
          <p className="footer__tagline">{t.footer.aiNote}</p>
          <p className="footer__meta">© {new Date().getFullYear()} Lê Thiên Vũ · {t.footer.built}</p>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#hero">{t.nav.home}</a>
          <a href="#skills-knowledge">{t.nav.technical}</a>
          <a href="#featured-projects">{t.nav.projects}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="footer__contact">
          <span className="footer__label">{t.nav.contact}</span>
          <a href="mailto:lethienvu.se@gmail.com">lethienvu.se@gmail.com</a>
          <div className="footer__socials">
            <a href="https://github.com/lethienvu" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/lê-thiên-vũ-291219229/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>Software Engineer · ERP / HRM · Full-stack Delivery</span>
        <a href="#hero" aria-label="Back to top">↑</a>
      </div>
    </footer>
  );
}

function PortfolioNavigation() {
  const { t, lang, setLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileLanguages = [
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'en', label: 'English' },
    { code: 'ja', label: '日本語' },
    { code: 'zh', label: '中文' },
  ];
  const mobileLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'skills-knowledge', label: t.nav.technical },
    { id: 'experience', label: t.nav.experience },
    { id: 'featured-projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navigateMobile = (id) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="top-menubar" aria-label="Portfolio navigation">
        <div className="top-menubar__content">
          <a className="top-menubar__brand" href="#hero" aria-label="Lê Thiên Vũ — Giới thiệu">
            <img src={`${import.meta.env.BASE_URL}vu-logo-mark.svg`} alt="" width="28" height="28" />
          </a>
          <VerticalToggle />
          <div className="top-menubar__utilities"><LanguageSelect /></div>
          <button
            className={`top-menubar__hamburger${isMobileMenuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav
        id="mobile-navigation"
        className={`mobile-menu${isMobileMenuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-menu__header">
          <a className="top-menubar__brand" href="#hero" aria-label="Lê Thiên Vũ — Giới thiệu" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={`${import.meta.env.BASE_URL}vu-logo-mark.svg`} alt="" width="28" height="28" />
          </a>
          <button className="mobile-menu__close" type="button" aria-label="Đóng menu" onClick={() => setIsMobileMenuOpen(false)}>×</button>
        </div>
        <div className="mobile-menu__content">
          <div className="mobile-menu__nav">
            {mobileLinks.map((link) => (
              <button className="mobile-menu__link" type="button" key={link.id} onClick={() => navigateMobile(link.id)}>
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mobile-menu__footer">
          <div className="mobile-menu__lang" aria-label="Language">
            {mobileLanguages.map((language) => (
              <button
                className={`mobile-menu__lang-button${lang === language.code ? ' is-active' : ''}`}
                type="button"
                key={language.code}
                aria-pressed={lang === language.code}
                onClick={() => setLang(language.code)}
              >
                {language.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}


export default function App() {
  useScrollAnimation();
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = "light";
  }, []);

  return (
    <>
      <svg style={{ display: "none" }}>
        <filter id="glass-distortion" primitiveUnits="objectBoundingBox">
          <feImage result="map" width="100%" height="100%" x="0" y="0" href={`${import.meta.env.BASE_URL}glass-map.webp`} />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.04" result="blur" />
          <feDisplacementMap id="disp" in="blur" in2="map" scale="0.5" xChannelSelector="R" yChannelSelector="G">
          </feDisplacementMap>
        </filter>
      </svg>
      <PortfolioNavigation />
      <div className="page-wrapper">
        <main id="main-content">
          <HeroSection />

          <div className="portfolio-zone portfolio-zone--clients" aria-label="Clients and products">
            <DeferredSection minHeight="450px"><ClientsAndProducts /></DeferredSection>
          </div>

          <div id="skills-knowledge" className="portfolio-zone portfolio-zone--skills" aria-label="Skills and knowledge">
            <DeferredSection minHeight="500px"><TechDeepDive /></DeferredSection>
          </div>

          <div className="portfolio-zone portfolio-zone--experience">
            <DeferredSection minHeight="700px"><ExperienceSection /></DeferredSection>
          </div>

          <div id="featured-projects" className="portfolio-zone portfolio-zone--projects" aria-label="Featured projects">
            <DeferredSection minHeight="900px"><CaseStudies /></DeferredSection>
          </div>

          <div className="portfolio-zone portfolio-zone--contact">
            <DeferredSection minHeight="650px"><ContactSection /></DeferredSection>
          </div>

          <Footer />
        </main>
      </div>

    </>
  );
}
