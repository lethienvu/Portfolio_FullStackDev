// Lucian UX/UI Prompt #318 · MIT License (c) 2026 Seokwoooo · adapted for this portfolio.
import { useEffect, useId, useRef, useState } from 'react';
import './ExperienceRouteTimeline.css';

// The journey rises chronologically from lower-left to upper-right across the full stage width.
const ROUTE_WIDTH = 1200;
const ROUTE_HEIGHT = 920;

function routeData(points) {
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let index = 1; index < points.length; index += 1) {
    const [x1, y1] = points[index - 1];
    const [x2, y2] = points[index];
    const midY = (y1 + y2) / 2;
    d += ` C${x1} ${midY} ${x2} ${midY} ${x2} ${y2}`;
  }
  return d;
}

export default function ExperienceRouteTimeline({ jobs, label, detailLabel, onSelect, CompanyMark }) {
  const scrollerRef = useRef(null);
  const routeRef = useRef(null);
  const planeRef = useRef(null);
  const awardCardRef = useRef(null);
  const [awardCallout, setAwardCallout] = useState('');
  const uid = useId();
  // Source data is newest-first; render oldest-first so time increases from lower-left to upper-right.
  const chronologicalJobs = [...jobs].reverse();
  const points = chronologicalJobs.map((_, index) => {
    const progress = chronologicalJobs.length <= 1 ? 0 : index / (chronologicalJobs.length - 1);
    return [96 + progress * (ROUTE_WIDTH - 192), ROUTE_HEIGHT - 145 - progress * (ROUTE_HEIGHT - 290)];
  });
  const d = routeData(points);
  const awardIndex = chronologicalJobs.findIndex((job) => job.tags?.includes('Employee of the Year'));
  const awardPoint = awardIndex >= 0 ? points[awardIndex] : null;

  useEffect(() => {
    const map = scrollerRef.current?.querySelector('.u318-map');
    const card = awardCardRef.current;
    if (!awardPoint || !map || !card) return undefined;

    const placeCallout = () => {
      const mapBox = map.getBoundingClientRect();
      const cardBox = card.getBoundingClientRect();
      const endX = ((cardBox.left - mapBox.left + 8) / mapBox.width) * ROUTE_WIDTH;
      const endY = ((cardBox.top - mapBox.top + 8) / mapBox.height) * ROUTE_HEIGHT;
      const startX = awardPoint[0] + 13;
      const startY = awardPoint[1] + 14;
      setAwardCallout(`M${startX} ${startY} C${startX + 68} ${startY + 84} ${endX - 84} ${endY - 58} ${endX} ${endY}`);
    };
    placeCallout();
    const observer = new ResizeObserver(placeCallout);
    observer.observe(map);
    observer.observe(card);
    return () => observer.disconnect();
  }, [awardPoint]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const route = routeRef.current;
    const plane = planeRef.current;
    if (!scroller || !route || !plane) return undefined;
    // SVG geometry may be unavailable during an interrupted browser paint; retain the visible fallback.
    if (typeof route.getTotalLength !== 'function' || typeof route.getPointAtLength !== 'function') return undefined;
    const totalLength = route.getTotalLength();
    route.style.strokeDasharray = `${totalLength} ${totalLength}`;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = 6200;
    let frame = 0;
    let startedAt = 0;

    route.style.strokeDashoffset = '0';
    points.forEach((_, index) => {
      document.getElementById(`${uid}-route-stop-${index}`)?.classList.add('on');
      document.getElementById(`${uid}-route-card-${index}`)?.classList.add('on');
    });

    const movePlane = (now) => {
      if (!startedAt) startedAt = now;
      const progress = ((now - startedAt) % duration) / duration;
      const length = totalLength * progress;
      const position = route.getPointAtLength(length);
      const next = route.getPointAtLength(Math.min(totalLength, length + 2));
      const angle = Math.atan2(next.y - position.y, next.x - position.x) * 180 / Math.PI;
      plane.setAttribute('transform', `translate(${position.x} ${position.y}) rotate(${angle})`);
      frame = window.requestAnimationFrame(movePlane);
    };

    if (reduceMotion) {
      const position = route.getPointAtLength(totalLength);
      plane.setAttribute('transform', `translate(${position.x} ${position.y})`);
    } else {
      frame = window.requestAnimationFrame(movePlane);
    }
    return () => { if (frame) window.cancelAnimationFrame(frame); };
  }, [d, points, uid]);

  return <div className="u318 experience-route" aria-label={label}>
    <div ref={scrollerRef} className="u318-sc" tabIndex="0" aria-label={label}>
      <div className="u318-map" style={{ height: `${ROUTE_HEIGHT}px` }}> 
        <svg viewBox={`0 0 ${ROUTE_WIDTH} ${ROUTE_HEIGHT}`} preserveAspectRatio="none" aria-hidden="true">
          <defs><marker id={`${uid}-award-arrow`} markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto"><path d="M0 0 12 6 0 12 3.25 6Z" className="u318-award-arrowhead" /></marker></defs>
          <path className="u318-guide" d={d} />
          <path ref={routeRef} className="u318-route" d={d} />
          {awardCallout && <path className="u318-award-arrow" d={awardCallout} markerEnd={`url(#${uid}-award-arrow)`} />}
          {/* One SVG dot per experience milestone, including the final ASOFT stop. */}
          {points.map(([x, y], index) => <g id={`${uid}-route-stop-${index}`} key={`${x}-${y}`} className="u318-stop"><circle className="u318-dot" cx={x} cy={y} r="10" /><circle className="u318-dotc" cx={x} cy={y} r="5" /></g>)}
          <path ref={planeRef} className="u318-pl" d="M12 0L-8 -8L-4 0L-8 8z" />
        </svg>
        {chronologicalJobs.map((job, index) => {
          const [x, y] = points[index];
          const isAward = job.tags?.includes('Employee of the Year');
          // Keep experience cards clear of their dots; the first milestone card sits below its own dot.
          // The recognition card remains a deliberate bottom-right callout.
          const cardY = isAward ? 660 : index === 0 ? y + 34 : index === 1 ? y - 111 : index === 2 ? y - 140 : index === 4 ? y + 2 : index === 5 ? y - 62 : index < Math.ceil(points.length / 2) ? y - 158 : y + 34;
          if (isAward) return <button ref={awardCardRef} id={`${uid}-route-card-${index}`} className="u318-card u318-card--award on" key={`${job.company}-${job.period}`} style={{ '--card-y': `${cardY}px` }} type="button" onClick={() => onSelect(job)} aria-label={`${detailLabel}: ${job.role}, ${job.company}`}>
            <span className="u318-award__face"><svg className="u318-award__trophy" viewBox="0 0 1024 1024" aria-hidden="true"><path d="M469 683h86v128h-86zM435 811h154c5 0 9 4 9 8v34H427v-34c0-4 4-8 8-8Z" fill="#ea9518" /><path d="M384 853h256a43 43 0 0 1 43 43v43H341v-43a43 43 0 0 1 43-43Z" fill="#6e4a32" /><path d="M213 256v85a43 43 0 0 0 86 0v-85h-86Zm-43-43h171v128a85 85 0 1 1-171 0V213Zm555 43v85a43 43 0 0 0 86 0v-85h-86Zm-43-43h171v128a85 85 0 1 1-171 0V213Z" fill="#f4ea2a" /><path d="M299 85h426a43 43 0 0 1 43 43v341a256 256 0 1 1-512 0V128a43 43 0 0 1 43-43Z" fill="#f2be45" /><path d="m512 469-100 53 19-112-81-79 112-16 50-102 50 102 112 16-81 79 19 112Z" fill="#fff2a0" /></svg><span className="u318-award__rank">2024</span><span className="u318-award__line" /><strong>{job.role}</strong><span className="u318-award__company-logo"><CompanyMark company={job.company} /></span></span>
          </button>;
          return <button id={`${uid}-route-card-${index}`} className={`u318-card on${index === 1 ? ' u318-card--left-of-dot' : ''}${index === 2 ? ' u318-card--offset-left' : ''}${index === 4 ? ' u318-card--offset-right' : ''}${index === 5 ? ' u318-card--upper-left' : ''}`} key={`${job.company}-${job.period}`} style={{ '--card-y': `${cardY}px`, '--route-x': `${(x / ROUTE_WIDTH) * 100}%` }} type="button" onClick={() => onSelect(job)} aria-label={`${detailLabel}: ${job.role}, ${job.company}`}>
            <span className="u318-card__mark"><CompanyMark company={job.company} /></span><b className="u318-card__role">{job.role}</b><span className="u318-card__company">{job.company}</span><small className="u318-card__period">{job.period}</small>
          </button>;
        })}
      </div>
    </div>
  </div>;
}
