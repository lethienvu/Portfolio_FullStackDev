import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import './VerticalToggle.css';

export default function VerticalToggle() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  const sections = useMemo(() => [
    { id: 'hero', label: t.nav.home },
    { id: 'skills-knowledge', label: t.nav.technical },
    { id: 'experience', label: t.nav.experience },
    { id: 'featured-projects', label: t.nav.projects }
  ], [t.nav.home, t.nav.technical, t.nav.experience, t.nav.projects]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="radio-container" aria-label="Portfolio sections">
      {sections.map((section) => (
        <button
          className={`radio-container__item${activeSection === section.id ? ' is-active' : ''}`}
          key={section.id}
          type="button"
          onClick={() => handleSectionChange(section.id)}
          aria-current={activeSection === section.id ? 'page' : undefined}
        >
          <i aria-hidden="true" />
          <span>{section.label}</span>
        </button>
      ))}
    </nav>
  );
}