import { useState, useCallback, lazy, Suspense, useEffect, useRef } from "react";
import "./App.css";
import { useLanguage } from "./i18n/LanguageContext.jsx";
import { useScrollAnimation } from "./hooks/useScrollAnimation.js";
import HeroSection from "./components/HeroSection/HeroSection";
import VerticalToggle from "./components/VerticalToggle/VerticalToggle";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";
import ThemeSkySwitch from "./components/ThemeSkySwitch/ThemeSkySwitch";

// Code splitting: Lazy load below-the-fold sections
const ExperienceSection = lazy(() => import("./components/ExperienceSection/ExperienceSection"));
const TechDeepDive = lazy(() => import("./components/TechDeepDive/TechDeepDive"));
const ClientsAndProducts = lazy(() => import("./components/ClientsAndProducts/ClientsAndProducts"));
const CaseStudies = lazy(() => import("./components/CaseStudies/CaseStudies"));
const ProductImageSection = lazy(() => import("./components/ProductImageSection/ProductImageSection"));
const Lightbox = lazy(() => import("./components/common/Lightbox.jsx"));


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

function PortfolioNavigation({ theme, onThemeToggle }) {
  return (
    <header className="top-menubar" aria-label="Portfolio navigation">
      <div className="top-menubar__content">
        <a className="top-menubar__brand" href="#hero" aria-label="Lê Thiên Vũ — Giới thiệu">
          <img src={`${import.meta.env.BASE_URL}vu-logo-mark.svg`} alt="" width="28" height="28" />
        </a>
        <VerticalToggle />
        <div className="top-menubar__utilities"><ThemeSkySwitch theme={theme} onToggle={onThemeToggle} /><LanguageSelect /></div>
      </div>
    </header>
  );
}


export default function App() {
  useScrollAnimation();
  const { lang } = useLanguage();
  const [lightboxData, setLightboxData] = useState({ isOpen: false, images: [], index: 0 });
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "light");
  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }, []);

  const openLightbox = useCallback((images, index = 0) => {
    setLightboxData({ isOpen: true, images, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxData(prev => ({ ...prev, isOpen: false }));
  }, []);

  const nextLightboxImg = useCallback(() => {
    setLightboxData(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length
    }));
  }, []);

  const prevLightboxImg = useCallback(() => {
    setLightboxData(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length
    }));
  }, []);

  const handleGlobalImageClick = useCallback((e) => {
    if (e.target.tagName === 'IMG') {
      const isInteractive = e.target.closest('button') || e.target.closest('a') || e.target.classList.contains('no-lightbox') || e.target.closest('.no-lightbox');
      if (!isInteractive) {
        openLightbox([e.target.src], 0);
      }
    }
  }, [openLightbox]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

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
      <PortfolioNavigation theme={theme} onThemeToggle={toggleTheme} />
      <div className="page-wrapper" onClick={handleGlobalImageClick}>
        <main id="main-content">
          <HeroSection onOpenLightbox={openLightbox} />

          <div id="skills-knowledge" className="portfolio-zone portfolio-zone--skills" aria-label="Skills and knowledge">
            <DeferredSection minHeight="500px"><TechDeepDive /></DeferredSection>
            <DeferredSection minHeight="450px"><ClientsAndProducts /></DeferredSection>
          </div>

          <div className="portfolio-zone portfolio-zone--experience">
            <DeferredSection minHeight="700px"><ExperienceSection /></DeferredSection>
          </div>

          <div id="featured-projects" className="portfolio-zone portfolio-zone--projects" aria-label="Featured projects">
            <DeferredSection minHeight="900px"><CaseStudies /></DeferredSection>
            <DeferredSection minHeight="700px">
              <ProductImageSection onOpenLightbox={openLightbox} isLightboxOpen={lightboxData.isOpen} />
            </DeferredSection>
          </div>

          <Footer />
        </main>
      </div>

      {lightboxData.isOpen && (
        <Suspense fallback={null}>
          <Lightbox
            images={lightboxData.images}
            index={lightboxData.index}
            onClose={closeLightbox}
            onNext={nextLightboxImg}
            onPrev={prevLightboxImg}
          />
        </Suspense>
      )}
    </>
  );
}
