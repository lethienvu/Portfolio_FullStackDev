import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import './VerticalToggle.css';

export default function VerticalToggle() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  const sections = useMemo(() => [
    { id: 'hero', label: t.nav.home },
    { id: 'experience', label: t.nav.experience },
    { id: 'product-images', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact }
  ], [t.nav.home, t.nav.experience, t.nav.projects, t.nav.contact]);

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
    <div className="radio-container">
      {sections.map((section) => (
        <>
          <input
            key={section.id}
            id={`radio-${section.id}`}
            name="navigation"
            type="radio"
            checked={activeSection === section.id}
            onChange={() => handleSectionChange(section.id)}
          />
          <label htmlFor={`radio-${section.id}`}>{section.label}</label>
        </>
      ))}
      <div className="liquid-slider"></div>
    </div>
  );
}