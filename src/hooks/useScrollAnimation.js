import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Delay để tránh observe quá nhiều elements cùng lúc
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('section:not(.animate-on-scroll), .timeline__item:not(.animate-on-scroll), .tech__card:not(.animate-on-scroll), .project-card:not(.animate-on-scroll)');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);
}

