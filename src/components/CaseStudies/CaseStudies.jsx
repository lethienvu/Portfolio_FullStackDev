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
import originalTitles from './projectTitles.json';
import aiPreview from '../../assets/ai_knowledge.webp';
const titles = Object.fromEntries(Object.entries(originalTitles).map(([locale, values]) => [locale, [...values.slice(0, 11), 'AI Agent Engineering & ERP Knowledge Base']]));
import EditorialProjectCard from './EditorialProjectCard.jsx';
import { projectCardCopy } from './projectCardCopy.js';

const IMAGES = [paradisePreview, gpsPreview, vaoCaPreview, vaoCaLandingPreview, leavePreview, hiringPreview, lichienLogo, steelFlowerLogo, tripodLogo, saigonWickerLogo, vietUcLogo, aiPreview];
const VISIBLE_PROJECTS = [...projectEvidence.slice(0, 11), { value: { vi: 'AI Agent và cơ sở tri thức ERP phục vụ tra cứu, phân tích nghiệp vụ.', en: 'AI agents and an ERP knowledge base for information retrieval and business analysis.', ja: '業務調査と情報検索に活用するAIエージェントおよびERPナレッジベース。', zh: '用于信息检索与业务分析的AI智能体和ERP知识库。' } }];
const PROJECT_ORDER = [11, 0, 2, 8, 1, 6, 4, 9, 5, 7, 3, 10];
const isSoftware = index => index < 6 || index === 11;
const EMBEDDED_CASES = {
  11: { file: 'ai_agent_knowledge_base.html', marker: 'body' },
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
    pending: 'Dự án đã triển khai', missingRole: 'Tham gia triển khai theo vai trò kỹ thuật và nghiệp vụ.',
    missingContribution: 'Cấu hình, hỗ trợ triển khai và phối hợp bàn giao cho khách hàng.',
    missingChallenge: 'Đáp ứng yêu cầu vận hành của dự án.',
    missingDecision: 'Chọn giải pháp phù hợp với quy trình và yêu cầu triển khai.',
    missingOutcome: 'Dự án đã được đưa vào quy trình vận hành.',
    decisionNote: 'Thiết kế và triển khai theo nhu cầu nghiệp vụ của doanh nghiệp.',
    cv: 'Kinh nghiệm tại Viet Tin Software.', cvLink: 'Đọc CV (PDF)',
    sourceNote: 'Thông tin tổng hợp từ kinh nghiệm làm việc thực tế.',
    imageNote: 'Ảnh minh họa giao diện sản phẩm.',
    logoNote: 'Logo nhận diện thương hiệu khách hàng.',
    clientRole: 'Tham gia triển khai và hỗ trợ vận hành hệ thống Paradise HR.',
    evidencePending: 'Thông tin dự án đã được tổng hợp.',
  },
  en: {
    title: 'Featured projects', subtitle: 'Software development and ERP/HRM implementation — from product to operations.',
    view: 'View project details', close: 'Close project details', role: 'My role', contribution: 'Personal contribution',
    sections: ['Overview', 'My Role', 'Challenge', 'Solution & Decisions', 'Outcomes', 'Evidence'],
    groups: ['Participation in web and app development projects', 'Direct implementation of ERP and HRM projects'],
    software: 'Software product', implementation: 'HRM / ERP implementation', skills: 'Source-backed capabilities',
    pending: 'Implemented project', missingRole: 'Contributed through technical and business analysis responsibilities.',
    missingContribution: 'Configured, supported implementation and coordinated delivery with the client.',
    missingChallenge: 'Addressed the operational requirements of the project.',
    missingDecision: 'Selected an approach aligned with business processes and deployment needs.',
    missingOutcome: 'The solution was adopted into operating workflows.',
    decisionNote: 'Designed and delivered according to the organization’s business requirements.',
    cv: 'Experience at Viet Tin Software.', cvLink: 'Read CV (PDF)',
    sourceNote: 'Information summarized from hands-on work experience.',
    imageNote: 'Product interface illustration.',
    logoNote: 'Client brand identifier.',
    clientRole: 'Supported Paradise HR implementation and operations.',
    evidencePending: 'Project information has been summarized.',
  },
  ja: {
    title: '注目プロジェクト', subtitle: 'ソフトウェア開発とERP/HRM導入 — 製品から運用まで。',
    view: 'プロジェクトの詳細を見る', close: 'プロジェクト詳細を閉じる', role: '担当範囲', contribution: '主な貢献',
    sections: ['概要', '担当範囲', '課題', 'ソリューションと意思決定', '成果', '証跡'],
    groups: ['Web・アプリ開発プロジェクトへの参加', 'ERP・HRM導入への直接的な対応'],
    software: 'ソフトウェア製品', implementation: 'HRM / ERP導入', skills: '保有スキル',
    pending: '導入実績プロジェクト', missingRole: '技術面と業務分析面で導入を支援しました。',
    missingContribution: '設定、導入支援、顧客との引継ぎを担当しました。',
    missingChallenge: '顧客の業務運用要件に対応しました。',
    missingDecision: '業務フローと導入要件に合う方式を選定しました。',
    missingOutcome: 'ソリューションを業務運用へ導入しました。',
    decisionNote: '企業の業務要件に沿って設計・導入しました。',
    cv: 'Viet Tin Softwareでの職務経験。', cvLink: '履歴書を読む（PDF）',
    sourceNote: '実務経験を基に整理した情報です。',
    imageNote: '製品インターフェースのイメージです。',
    logoNote: 'クライアントブランドの識別情報です。',
    clientRole: 'Paradise HRの導入と運用を支援しました。',
    evidencePending: 'プロジェクト情報を整理しました。',
  },
  zh: {
    title: '精选项目', subtitle: '软件开发与ERP/HRM实施——从产品到运营。',
    view: '查看项目详情', close: '关闭项目详情', role: '我的职责', contribution: '主要贡献',
    sections: ['概述', '我的职责', '挑战', '解决方案与决策', '成果', '依据'],
    groups: ['参与Web与应用开发项目', '直接实施ERP与HRM项目'],
    software: '软件产品', implementation: 'HRM / ERP实施', skills: '专业能力',
    pending: '已交付项目', missingRole: '在技术与业务分析方面参与实施工作。',
    missingContribution: '负责配置、实施支持以及与客户协作交付。',
    missingChallenge: '解决项目的实际运营需求。',
    missingDecision: '根据业务流程与实施要求选择合适方案。',
    missingOutcome: '解决方案已应用于实际运营流程。',
    decisionNote: '依据企业业务需求进行设计与交付。',
    cv: '曾在Viet Tin Software工作。', cvLink: '查看简历（PDF）',
    sourceNote: '根据实际工作经验整理。',
    imageNote: '产品界面示意图。',
    logoNote: '客户品牌标识。',
    clientRole: '参与Paradise HR系统的实施与运营支持。',
    evidencePending: '项目信息已整理。',
  },
};

export default function CaseStudies() {
  const { lang } = useLanguage();
  const locale = ['vi', 'en', 'ja', 'zh'].includes(lang) ? lang : 'en';
  const copy = COPY[locale];
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef(null);
  const closeDialog = useCallback(() => setIsClosing(true), []);
  const finishClose = useCallback(() => {
    setActiveIndex(null);
    setIsClosing(false);
    if (/^#case-study-\d+$/.test(window.location.hash)) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
  }, []);
  const openerRef = useRef(null);
  const closeRef = useRef(null);
  const frameRef = useRef(null);
  const [frameStatus, setFrameStatus] = useState('loading');
  const openProject = useCallback((index) => {
    if (!Number.isInteger(index) || index < 0 || index >= VISIBLE_PROJECTS.length) return;
    openerRef.current = document.activeElement;
    setIsClosing(false);
    setFrameStatus('loading');
    setActiveIndex(index);
  }, []);
  useEffect(() => {
    const openFromHash = () => {
      const match = window.location.hash.match(/^#case-study-(\d+)$/);
      if (match) openProject(Number(match[1]));
    };
    const openFromEvent = (event) => openProject(event.detail?.index);
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    window.addEventListener('portfolio:open-project', openFromEvent);
    return () => {
      window.removeEventListener('hashchange', openFromHash);
      window.removeEventListener('portfolio:open-project', openFromEvent);
    };
  }, [openProject]);
  const navigate = useCallback((direction) => {
    const current = Number(dialogRef.current?.dataset.projectIndex);
    const next = PROJECT_ORDER.indexOf(current) + direction;
    if (next < 0 || next >= PROJECT_ORDER.length) return;
    setActiveIndex(PROJECT_ORDER[next]);
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
  const item = isOpen ? VISIBLE_PROJECTS[activeIndex] : null;
  const text = (value) => value?.[locale] || value?.en || value?.vi;
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
      <header className="case-studies__header">
        <div className="case-studies__heading">
          <h2 id="case-studies-heading" className="section-title">{copy.title}</h2>
          <p className="section-subtitle">{copy.subtitle}</p>
        </div>
        <div className="case-studies__filters" role="group" aria-label={locale === 'vi' ? 'Lọc dự án' : locale === 'ja' ? 'プロジェクトを絞り込む' : locale === 'zh' ? '筛选项目' : 'Filter projects'}>
          {['all', 'software', 'implementation'].map((value, index) => {
            const filterLabels = locale === 'vi' ? ['Tất cả', 'Phát triển phần mềm', 'Triển khai ERP/HRM']
              : locale === 'ja' ? ['すべて', 'ソフトウェア開発', 'ERP/HRM導入']
              : locale === 'zh' ? ['全部', '软件开发', 'ERP/HRM实施']
              : ['All', 'Software development', 'ERP/HRM implementation'];
            return <button key={value} type="button" aria-pressed={filter === value} aria-controls="project-grid" onClick={() => setFilter(value)}>{filterLabels[index]}</button>;
          })}
        </div>
      </header>
      <div id="project-grid" className="case-studies__grid">
        {PROJECT_ORDER.filter(index => filter === 'all' || (filter === 'software' ? isSoftware(index) : !isSoftware(index))).map(index => { const project = VISIBLE_PROJECTS[index]; return <EditorialProjectCard key={titles.en[index]} index={index} title={titles[locale][index]} image={IMAGES[index]} category={isSoftware(index) ? copy.software : copy.implementation} summary={text(project.value)} role={role(project)} contribution={text(project.contribution) || copy.missingContribution} {...(locale === 'vi' ? projectCardCopy[index] : {})} copy={copy} onOpen={(event) => { openerRef.current = event.currentTarget; setIsClosing(false); setFrameStatus('loading'); setActiveIndex(index); }} />; })}
      </div>
    </div>
    {item && createPortal(<div className={`case-study-dialog${EMBEDDED_CASES[activeIndex] ? ' case-study-dialog--embedded' : ''}`} data-project-index={activeIndex} data-state={isClosing ? 'closing' : 'open'} onAnimationEnd={(event) => { if (event.target === event.currentTarget && isClosing) finishClose(); }} lang={locale} ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="project-navigation-title" onMouseDown={(event) => { if (event.target === event.currentTarget) closeDialog(); }}>
      <div className="case-study-dialog__panel">
        <header className="case-study-dialog__header">
          <img className="case-study-dialog__logo" src={activeIndex >= 6 ? IMAGES[activeIndex] : `${import.meta.env.BASE_URL}product/${[1, 3].includes(activeIndex) ? 'LogoVaoCa_Full.svg' : 'ParadiseOfficallLogo.svg'}`} alt="" />
          <div className="case-study-dialog__heading" aria-live="polite" aria-atomic="true"><strong id="project-navigation-title">{titles[locale][activeIndex]}</strong><span className="case-study-dialog__label">{isSoftware(activeIndex) ? copy.software : copy.implementation}</span></div>
          <nav className="case-study-dialog__navigation" aria-label={locale === 'vi' ? 'Điều hướng dự án' : locale === 'ja' ? 'プロジェクトナビゲーション' : locale === 'zh' ? '项目导航' : 'Project navigation'}>
            {[-1, 1].map(direction => {
              const navigationLabel = locale === 'vi' ? (direction < 0 ? 'Dự án trước' : 'Dự án tiếp theo')
                : locale === 'ja' ? (direction < 0 ? '前のプロジェクト' : '次のプロジェクト')
                : locale === 'zh' ? (direction < 0 ? '上一个项目' : '下一个项目')
                : (direction < 0 ? 'Previous project' : 'Next project');
              return <button key={direction} type="button" className={`case-study-dialog__nav case-study-dialog__nav--${direction < 0 ? 'previous' : 'next'}`} disabled={isClosing || (direction < 0 ? activeIndex === PROJECT_ORDER[0] : activeIndex === PROJECT_ORDER.at(-1))} onClick={() => navigate(direction)} title={navigationLabel} aria-label={navigationLabel}><img className="case-study-dialog__control-icon" src={`${import.meta.env.BASE_URL}${direction < 0 ? 'arrow-left.svg' : 'arrow-right.svg'}`} alt="" aria-hidden="true" /></button>;
            })}
          </nav>
        </header>
        <div className="case-study-dialog__content">
          {EMBEDDED_CASES[activeIndex] ? <>{frameStatus !== 'ready' && <div className="case-study-dialog__frame-status" role="status">{frameStatus === 'error'
            ? (locale === 'vi' ? 'Không tải được nội dung. Đóng và mở lại để thử lại.' : locale === 'ja' ? 'コンテンツを読み込めません。閉じて再度開いてください。' : locale === 'zh' ? '无法加载内容。请关闭后重新打开。' : 'Content unavailable. Close and reopen to retry.')
            : (locale === 'vi' ? 'Đang tải dự án…' : locale === 'ja' ? 'プロジェクトを読み込んでいます…' : locale === 'zh' ? '正在加载项目…' : 'Loading project…')}</div>}<iframe key={activeIndex} ref={frameRef} className="case-study-dialog__frame" title={titles[locale][activeIndex]} src={`${import.meta.env.BASE_URL}case-studies/${EMBEDDED_CASES[activeIndex].file}`} onLoad={bindFrame} onError={() => setFrameStatus('error')} style={{ visibility: frameStatus === 'ready' ? 'visible' : 'hidden' }} /></> : <CaseStudyReader key={activeIndex} index={activeIndex} item={item} title={titles[locale][activeIndex]} image={IMAGES[activeIndex]} locale={locale} />}
        </div>
      </div>
      <button ref={closeRef} type="button" className="case-study-dialog__close" onClick={closeDialog} aria-label={copy.close}><img className="case-study-dialog__control-icon" src={`${import.meta.env.BASE_URL}svg_close-sm.svg`} alt="" aria-hidden="true" /></button>
    </div>, document.body)}
  </section>;
}
