// Lucian UX/UI Prompt #049 · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/uxui-prompt/#049
import { useRef, useState } from 'react';
import './EditorialProjectCard.css';

export default function EditorialProjectCard({ index, title, image, category, summary, role, highlight, copy, onOpen }) {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const cta = useRef(null);
  const reset = () => { root.current?.style.setProperty('--px', 0); root.current?.style.setProperty('--py', 0); };
  if (index >= 6) {
    const vi = copy.view === 'Xem chi tiết dự án';
    const descriptions = vi
      ? ['Triển khai hệ thống quản trị nhân sự HRM.', 'Triển khai hệ thống quản trị nhân sự HRM.', 'Triển khai giải pháp quản trị nhân sự Paradise HR.', 'Tư vấn giải pháp quản trị doanh nghiệp ERP.', 'Tư vấn giải pháp quản trị doanh nghiệp ERP.', 'Giải pháp quản trị nhân sự Paradise HR.']
      : ['HRM implementation for human resources management.', 'HRM implementation for human resources management.', 'Paradise HR implementation for human resources management.', 'ERP consulting for enterprise management.', 'ERP consulting for enterprise management.', 'Paradise HR human resources management solution.'];
    return <article className="enterprise-card" aria-labelledby={`project-title-${index}`}>
      <div className="enterprise-card__identity"><img src={image} alt="" loading="lazy" decoding="async" /></div>
      <p className="enterprise-card__category">{category}</p>
      <h4 id={`project-title-${index}`}>{title}</h4>
      <p className="enterprise-card__summary">{descriptions[index - 6]}</p>
      <button type="button" className="enterprise-card__cta" aria-haspopup="dialog" aria-label={`${copy.view}: ${title}`} onClick={onOpen}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
      </button>
    </article>;
  }
  return <article ref={root} className={`u049${open ? ' is-open' : ''}${index < 6 ? ' u049--editorial' : ''}${index >= 6 ? ' u049--logo' : ''}${index === 5 ? ' u049--hiring' : ''}`} aria-labelledby={`project-title-${index}`}
    onPointerEnter={e => { if (e.pointerType === 'mouse') setOpen(true); }}
    onPointerMove={e => { if (e.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--px', ((e.clientX-r.left)/r.width*2-1).toFixed(3)); e.currentTarget.style.setProperty('--py', ((e.clientY-r.top)/r.height*2-1).toFixed(3)); }}
    onPointerLeave={e => { reset(); if (e.pointerType === 'mouse' && !e.currentTarget.contains(document.activeElement)) setOpen(false); }}
    onClick={e => { if (!e.target.closest('button')) cta.current?.click(); }}
    onFocus={() => setOpen(true)}
    onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget) && !e.relatedTarget?.closest('[role="dialog"]')) setOpen(false); }}
    >
    <div className="u049-art" aria-hidden="true"><div className="u049-l1"><img src={image} alt="" loading="lazy" decoding="async" /></div></div>
    <div className="u049-top"><span className="u049-tag">{category}</span></div>
    <div className="u049-body"><h4 className="u049-t" id={`project-title-${index}`}>{title}</h4>
      <div className="u049-reveal"><p className="u049-sum">{summary}</p><div className="u049-foot"><p className="u049-by" title={role}><span>{copy.role}: </span>{role}</p>{index >= 6 && highlight && <p className="u049-highlight">{highlight}</p>}<button ref={cta} className="u049-cta" type="button" aria-haspopup="dialog" aria-labelledby={`project-cta-${index} project-title-${index}`} onClick={onOpen}><span id={`project-cta-${index}`}>{copy.view}</span><span className="u049-cta-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 18 18 6M6 6h12v12"/></svg></span></button></div></div>
    </div>
  </article>;
}
