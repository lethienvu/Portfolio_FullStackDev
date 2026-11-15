import CaseStudyReader from './CaseStudyReader';
import { useCallback, useEffect, useRef, useState } from 'react';
import './CaseStudies.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import paradisePreview from '../../assets/ParadiseHR_WebApp/hero-pweb.webp';
import gpsPreview from '../../assets/ChamCongGPS/pApp-GPS_Home.png';
import vaoCaPreview from '../../assets/VaoCa/hero-vcshow.webp';
import leavePreview from '../../assets/DPVN/dpvn.webp';
import hiringPreview from '../../assets/TuyenDung/navt-recruitment.webp';
import vaoCaLandingPreview from '../../assets/VaoCaLandingPage/VaoCa-LandingPage.webp';
import lichienLogo from '../../assets/customer/lichien.webp';
import steelFlowerLogo from '../../assets/customer/STEALFLOWER.removebg-preview.svg';
import tripodLogo from '../../assets/customer/tripodLogo.svg';
import saigonWickerLogo from '../../assets/customer/sgw-logo.webp';
import vietUcLogo from '../../assets/customer/VietUc_Logo.webp';

import { createPortal } from 'react-dom';
import { projectEvidence } from './projectEvidence.js';
import titles from './projectTitles.json';
import EditorialProjectCard from './EditorialProjectCard.jsx';
import { projectCardCopy } from './projectCardCopy.js';

const IMAGES = [paradisePreview, gpsPreview, vaoCaPreview, vaoCaLandingPreview, leavePreview, hiringPreview, lichienLogo, steelFlowerLogo, tripodLogo, saigonWickerLogo, vietUcLogo];
const VISIBLE_PROJECTS = projectEvidence.slice(0, 11);
const EMBEDDED_CASES = {
  0: { file: 'paradisehr.html', marker: '#web-gallery' },
  1: { file: 'gps-attendance.html', marker: '.hero' },
  2: { file: 'vaoca-product.html', marker: '.hero' },
  3: { file: 'VaoCa_LandingPage.html', marker: 'main .hero' },
  4: { file: 'leave-request.html', marker: '.hero' },
  5: { file: 'paradise-hiring.html', marker: 'main' },
  6: { file: 'lichien_paradise_hr.html', marker: 'body' },
  7: { file: 'steel_flower_paradise_hr.html', marker: 'body' },
  8: { file: 'tripod_paradise_hr.html', marker: 'body' },
  9: { file: 'saigon_wicker_asoft_erp.html', marker: 'body' },
  10: { file: 'viet_uc_asoft_erp.html', marker: 'body' },
};
const COPY = {
  vi: {
    title: 'Các dự án nổi bật', subtitle: 'Phát triển phần mềm và triển khai ERP/HRM — từ sản phẩm đến vận hành.',
    view: 'Xem chi tiết dự án', close: 'Đóng chi tiết dự án', role: 'Vai trò của tôi', contribution: 'Đóng góp cá nhân',
    sections: ['Tổng quan', 'Vai trò của tôi', 'Thách thức', 'Giải pháp & quyết định', 'Kết quả', 'Bằng chứng'],
    groups: ['Tham gia, thực hiện các dự án phát triển ứng dụng web - app', 'Trực tiếp triển khai các dự án ERP, HRM'],
    software: 'Sản phẩm phần mềm', implementation: 'Triển khai HRM / ERP', skills: 'Năng lực có nguồn',
    pending: 'Cần xác minh', missingRole: 'Chưa xác minh phạm vi trách nhiệm cá nhân.',
    missingContribution: 'Cần bổ sung phần việc trực tiếp thực hiện và tài liệu bàn giao.',
    missingChallenge: 'Chưa có tình huống nghiệp vụ hoặc kỹ thuật được xác nhận cho dự án này.',
    missingDecision: 'Chưa có quyết định, phương án cân nhắc hoặc tài liệu nghiệm thu được xác nhận.',
    missingOutcome: 'Chưa có kết quả riêng của dự án được xác nhận. Không suy ra hiệu quả từ ảnh hoặc logo.',
    decisionNote: 'Cần bổ sung lý do lựa chọn, phương án thay thế và cách kiểm thử; CV chưa ghi chi tiết này.',
    cv: 'Nguồn: CV — mục kinh nghiệm tại Viet Tin Software.', cvLink: 'Đọc CV nguồn (PDF)',
    sourceNote: 'CV là nguồn tự khai, chưa phải xác nhận độc lập của khách hàng.',
    imageNote: 'Ảnh giao diện minh họa sản phẩm; không chứng minh quyền tác giả, công nghệ hay hiệu quả vận hành.',
    logoNote: 'Logo nhận diện khách hàng; không phải bằng chứng nghiệm thu hay chứng thực của khách hàng.',
    clientRole: 'CV có nêu tham gia triển khai Paradise HR; phần việc tại khách hàng này cần xác minh.',
    evidencePending: 'Mới có nội dung portfolio và asset; cần xác nhận từ người thực hiện.',
  },
  en: {
    title: 'Featured projects', subtitle: 'Software development and ERP/HRM implementation — from product to operations.',
    view: 'View project details', close: 'Close project details', role: 'My role', contribution: 'Personal contribution',
    sections: ['Overview', 'My Role', 'Challenge', 'Solution & Decisions', 'Outcomes', 'Evidence'],
    groups: ['Participation in web and app development projects', 'Direct implementation of ERP and HRM projects'],
    software: 'Software product', implementation: 'HRM / ERP implementation', skills: 'Source-backed capabilities',
    pending: 'Needs verification', missingRole: 'Personal responsibility has not yet been verified.',
    missingContribution: 'Directly owned work and delivery evidence are still needed.',
    missingChallenge: 'No confirmed technical or business case is available for this project.',
    missingDecision: 'Decisions, alternatives and acceptance evidence have not yet been confirmed.',
    missingOutcome: 'No project-specific outcome has been confirmed. Images and logos do not establish operational impact.',
    decisionNote: 'Decision rationale, alternatives and test criteria are still needed; the CV does not provide them.',
    cv: 'Source: CV — experience at Viet Tin Software.', cvLink: 'Read source CV (PDF)',
    sourceNote: 'The CV is self-reported evidence, not independent client validation.',
    imageNote: 'Product interface illustration; not proof of authorship, technology or operational impact.',
    logoNote: 'Client identity only; not acceptance evidence or a client endorsement.',
    clientRole: 'The CV describes Paradise HR implementation participation; client-specific ownership needs verification.',
    evidencePending: 'Only portfolio copy and an asset are available; confirmation from the contributor is needed.',
  },
};

export default function CaseStudies() {
  const { lang } = useLanguage();
  const locale = lang === 'vi' ? 'vi' : 'en';
  const copy = COPY[locale];
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef(null);
  const closeDialog = useCallback(() => setIsClosing(true), []);
  const finishClose = useCallback(() => { setActiveIndex(null); setIsClosing(false); }, []);
  const openerRef = useRef(null);
  const closeRef = useRef(null);
  const frameRef = useRef(null);
  const [frameStatus, setFrameStatus] = useState('loading');
  const navigate = useCallback((direction) => {
    const current = Number(dialogRef.current?.dataset.projectIndex);
    if (!Number.isInteger(current) || current + direction < 0 || current + direction >= VISIBLE_PROJECTS.length) return;
    setActiveIndex(index => index === null ? null : Math.max(0, Math.min(VISIBLE_PROJECTS.length - 1, index + direction)));
    setFrameStatus('loading');
    closeRef.current?.focus({ preventScroll: true });
  }, []);
  const frameCleanupRef = useRef(null);
  const frameControls = () => [...(frameRef.current?.contentDocument?.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select, textarea, summary, [tabindex="0"], [contenteditable="true"]') || [])].filter(node => node.getClientRects().length && node.tabIndex >= 0);
  const bindFrame = (event) => {
    if (event.currentTarget !== frameRef.current) return;
    frameCleanupRef.current?.();
    const doc = frameRef.current?.contentDocument;
    if (!doc) return;
    if (!doc.querySelector(EMBEDDED_CASES[activeIndex]?.marker || '#web-gallery')) { setFrameStatus('error'); return; }
    setFrameStatus('ready');
    const onKey = event => {
      if (event.key === 'Escape') { event.preventDefault(); closeDialog(); }
      if (event.key !== 'Tab') return;
      const controls = frameControls();
      if ((event.shiftKey && doc.activeElement === controls[0]) || (!event.shiftKey && doc.activeElement === controls.at(-1)) || !controls.length) {
        event.preventDefault();
        const hostControls = [...dialogRef.current.querySelectorAll('button:not([disabled])')];
        (event.shiftKey ? closeRef.current : hostControls[0])?.focus();
      }
    };
    doc.addEventListener('keydown', onKey, true);
    frameCleanupRef.current = () => doc.removeEventListener('keydown', onKey, true);
  };
  useEffect(() => () => { frameCleanupRef.current?.(); frameCleanupRef.current = null; }, [activeIndex]);
  useEffect(() => {
    if (activeIndex === null) return;
    const content = dialogRef.current?.querySelector('.case-study-dialog__content');
    if (content) content.scrollTop = 0;
  }, [activeIndex]);
  const isOpen = activeIndex !== null;
  const item = isOpen ? projectEvidence[activeIndex] : null;
  const text = (value) => value?.[locale];
  const role = (project) => text(project.role) || (project.source === 'cv-client' ? copy.clientRole : copy.missingRole);

  // Keep the modal, focus trap and scroll lock alive until the exit finishes.
  useEffect(() => {
    if (!isClosing) return undefined;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const duration = parseFloat(getComputedStyle(dialogRef.current).getPropertyValue('--dialog-exit-ms')) || 200;
    const timer = window.setTimeout(finishClose, motion.matches ? 0 : duration + 80);
    return () => window.clearTimeout(timer);
  }, [isClosing, finishClose]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const root = document.getElementById('root');
    const previousInert = root?.inert;
    // The case study is portaled outside #root; keep the background inert.
    if (root) root.inert = true;
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); closeDialog(); }
      if (dialogRef.current?.dataset.state !== 'closing' && ['ArrowLeft', 'ArrowRight'].includes(event.key) && !event.target.closest('input, textarea, select, [contenteditable], .case-reader__explorer, [role="slider"]')) {
        event.preventDefault(); navigate(event.key === 'ArrowLeft' ? -1 : 1); return;
      }
      if (event.key !== 'Tab') return;
      if (frameRef.current && document.activeElement === closeRef.current && !event.shiftKey) {
        event.preventDefault();
        const controls = frameControls();
        controls[0]?.focus();
        if (!controls.length) frameRef.current.focus();
        return;
      }
      const controls = [...dialogRef.current.querySelectorAll('button:not([disabled]), a[href], summary, [tabindex="0"]')].filter(node => node.getClientRects().length);
      const first = controls[0]; const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); (frameRef.current ? (frameControls().at(-1) || closeRef.current) : last)?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', onKeyDown, true);
    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.body.style.overflow = previousOverflow;
      if (root) root.inert = previousInert;
      openerRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen, closeDialog, navigate]);

  return <section id="case-studies" className="case-studies" aria-labelledby="case-studies-heading" lang={locale}>
    <div className="container">
      <header className="case-studies__header"><h2 id="case-studies-heading" className="section-title">{copy.title}</h2><p className="section-subtitle">{copy.subtitle}</p></header>
      <div className="case-studies__filters" role="group" aria-label={locale === 'vi' ? 'Lọc dự án' : 'Filter projects'}>
        {['all', 'software', 'implementation'].map((value, index) => <button key={value} type="button" aria-pressed={filter === value} aria-controls="project-grid" onClick={() => setFilter(value)}>{(locale === 'vi' ? ['Tất cả', 'Phát triển phần mềm', 'Triển khai ERP/HRM'] : ['All', 'Software development', 'ERP/HRM implementation'])[index]}</button>)}
      </div>
      <div id="project-grid" className="case-studies__grid">
        {[0, 2, 8, 1, 6, 4, 9, 5, 7, 3, 10].filter(index => filter === 'all' || (filter === 'software' ? index < 6 : index >= 6)).map(index => { const project = VISIBLE_PROJECTS[index]; return <EditorialProjectCard key={titles.en[index]} index={index} title={titles[locale][index]} image={IMAGES[index]} category={index < 6 ? copy.software : copy.implementation} summary={text(project.value)} role={role(project)} contribution={text(project.contribution) || copy.missingContribution} {...(locale === 'vi' ? projectCardCopy[index] : {})} copy={copy} onOpen={(event) => { openerRef.current = event.currentTarget; setIsClosing(false); setFrameStatus('loading'); setActiveIndex(index); }} />; })}
      </div>
    </div>
    {item && createPortal(<div className={`case-study-dialog${EMBEDDED_CASES[activeIndex] ? ' case-study-dialog--embedded' : ''}`} data-project-index={activeIndex} data-state={isClosing ? 'closing' : 'open'} onAnimationEnd={(event) => { if (event.target === event.currentTarget && isClosing) finishClose(); }} lang={locale} ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-navigation-title" onMouseDown={(event) => { if (event.target === event.currentTarget) closeDialog(); }}>
      <div className="case-study-dialog__panel">
        <header className="case-study-dialog__header">
          <img className="case-study-dialog__logo" src={activeIndex >= 6 ? IMAGES[activeIndex] : `${import.meta.env.BASE_URL}product/${[1, 3].includes(activeIndex) ? 'LogoVaoCa_Full.svg' : 'ParadiseOfficallLogo.svg'}`} alt="" />
          <div className="case-study-dialog__heading" aria-live="polite" aria-atomic="true"><strong id="project-navigation-title">{titles[locale][activeIndex]}</strong><span className="case-study-dialog__label">{activeIndex < 6 ? copy.software : copy.implementation}</span></div>
          <nav className="case-study-dialog__navigation" aria-label={locale === 'vi' ? 'Điều hướng dự án' : 'Project navigation'}>
            {[-1, 1].map(direction => <button key={direction} type="button" className={`case-study-dialog__nav case-study-dialog__nav--${direction < 0 ? 'previous' : 'next'}`} disabled={isClosing || (direction < 0 ? activeIndex === 0 : activeIndex === VISIBLE_PROJECTS.length - 1)} onClick={() => navigate(direction)} title={locale === 'vi' ? (direction < 0 ? 'Dự án trước' : 'Dự án tiếp theo') : (direction < 0 ? 'Previous project' : 'Next project')} aria-label={locale === 'vi' ? (direction < 0 ? 'Dự án trước' : 'Dự án tiếp theo') : (direction < 0 ? 'Previous project' : 'Next project')}><img className="case-study-dialog__control-icon" src={`${import.meta.env.BASE_URL}${direction < 0 ? 'arrow-left.svg' : 'arrow-right.svg'}`} alt="" aria-hidden="true" /></button>)}
          </nav>
        </header>
        <div className="case-study-dialog__content">
          {EMBEDDED_CASES[activeIndex] ? <>{frameStatus !== 'ready' && <div className="case-study-dialog__frame-status" role="status">{frameStatus === 'error' ? (locale === 'vi' ? 'Không tải được nội dung. Đóng và mở lại để thử lại.' : 'Content unavailable. Close and reopen to retry.') : (locale === 'vi' ? 'Đang tải dự án…' : 'Loading project…')}</div>}<iframe key={activeIndex} ref={frameRef} className="case-study-dialog__frame" title={titles[locale][activeIndex]} src={`${import.meta.env.BASE_URL}case-studies/${EMBEDDED_CASES[activeIndex].file}`} onLoad={bindFrame} onError={() => setFrameStatus('error')} style={{ visibility: frameStatus === 'ready' ? 'visible' : 'hidden' }} /></> : <CaseStudyReader key={activeIndex} index={activeIndex} item={item} title={titles[locale][activeIndex]} image={IMAGES[activeIndex]} locale={locale} />}
        </div>
      </div>
      <button ref={closeRef} type="button" className="case-study-dialog__close" onClick={closeDialog} aria-label={copy.close}><img className="case-study-dialog__control-icon" src={`${import.meta.env.BASE_URL}svg_close-sm.svg`} alt="" aria-hidden="true" /></button>
    </div>, document.body)}
  </section>;
}
