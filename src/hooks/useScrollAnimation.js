import { useEffect } from 'react';

// Progressive reveal for the real portfolio sections. It observes once, then releases
// each element to keep scrolling inexpensive on long pages.
export function useScrollAnimation() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selector = [
      'section:not(#hero)',
      '.timeline__item',
      '.tech__card',
      '.project-card',
      '.case-study',
      '.experience-node',
    ].join(', ');
    const elements = [...document.querySelectorAll(selector)];

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add('animate-on-scroll', 'animated'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('animate-on-scroll', 'animated');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6%' });

    // Let the first paint settle, then hydrate motion without blocking the hero.
    const timeoutId = window.setTimeout(() => elements.forEach((element) => observer.observe(element)), 80);
    return () => { window.clearTimeout(timeoutId); observer.disconnect(); };
  }, []);
}

