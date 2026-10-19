import { useState } from 'react';
import { HtmlText } from '../HtmlText.jsx';
import './HeroSection.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import ProfileCard from '../ProfileCard/ProfileCard.jsx';

import imgHeroMobile from '../../assets/hero-mobileApp.webp';
import imgHeroPweb from '../../assets/hero-pweb.webp';
import imgHeroPweb3 from '../../assets/hero-pweb3.webp';
import imgHeroVcshow from '../../assets/hero-vcshow.webp';
import navtLogo from '../../assets/customer/NAVT.svg';
import steelFlowerLogo from '../../assets/customer/STEALFLOWER.removebg-preview.svg';
import lichienLogo from '../../assets/customer/lichien.webp';
import detmoldLogo from '../../assets/customer/DETMOLD_packaging.webp';
import tripodLogo from '../../assets/customer/tvc_logo.webp';
import genepaLogo from '../../assets/customer/genepa-logo.svg';
import sgwLogo from '../../assets/customer/sgw-logo.png';
import vietUcLogo from '../../assets/customer/VietUc_Logo.png';

const PROJECT_PREVIEWS = [
  { src: imgHeroMobile, title: 'Mobile operations app', type: 'Field-workflow solution', result: 'Responsive task delivery' },
  { src: imgHeroPweb, title: 'Enterprise web portal', type: 'Business workflow', result: 'Streamlined daily tasks' },
  { src: imgHeroPweb3, title: 'Operations web dashboard', type: 'System visibility', result: 'Clearer operational tracking' },
  { src: imgHeroVcshow, title: 'ERP reporting dashboard', type: 'Performance optimization', result: '50% faster report processing' },
];
// Public sources verified 2026-10-14. “Không công bố” means no reliable public headcount was found.
const CLIENTS = [
  { nameEn: 'Nidec Advanced Motor (Vietnam) Co., Ltd.', nameVi: 'Công ty TNHH Nidec Advanced Motor (Việt Nam)', logo: navtLogo, className: 'hero__client-logo--navt' },
  { nameEn: 'Haiphong Steel Flower Electrical & Machinery Company Limited', nameVi: 'Công ty TNHH Điện tử & Máy móc Steel Flower Hải Phòng', logo: steelFlowerLogo, className: 'hero__client-logo--steel-flower' },
  { nameEn: 'LOTTE Vietnam Co., Ltd.', nameVi: 'Công ty TNHH Lotte Việt Nam', logo: `${import.meta.env.BASE_URL}customer/lotte.webp`, className: 'hero__client-logo--lotte' },
  { nameEn: 'Lichien Vietnam Paper Products Co., Ltd.', nameVi: 'Công ty TNHH Sản phẩm Giấy Lichien Việt Nam', logo: lichienLogo, className: 'hero__client-logo--lichien' },
  { nameEn: 'Detmold Packaging Vietnam Co., Ltd.', nameVi: 'Công ty TNHH Detmold Packaging Việt Nam', logo: detmoldLogo, className: 'hero__client-logo--detmold' },
  { nameEn: 'Tripod Vietnam Co., Ltd.', nameVi: 'Công ty TNHH Tripod Việt Nam', logo: tripodLogo, className: 'hero__client-logo--tripod' },
  { nameEn: 'GENEPA Vietnam Co., Ltd.', nameVi: 'Công ty TNHH Genepa Việt Nam', logo: genepaLogo, className: 'hero__client-logo--genepa' },
  { nameEn: 'Viet Uc Manufacturing Trading Service Co., Ltd.', nameVi: 'Công ty TNHH Sản xuất Thương mại Dịch vụ Việt Úc', logo: vietUcLogo, className: 'hero__client-logo--viet-uc' },
  { nameEn: 'SGW Joint Stock Company', nameVi: 'Công ty Cổ phần SGW', logo: sgwLogo, className: 'hero__client-logo--sgw' },
];

function ScatteredFrames({ onOpenLightbox }) {
  const previewSources = PROJECT_PREVIEWS.map(({ src }) => src);

  return (
    <div className="hero-scatter" aria-label="Project previews">
      {PROJECT_PREVIEWS.map(({ src, title, type, result }, index) => (
        <button
          key={src}
          type="button"
          className={`hero-scatter__card hero-scatter__card--${index}`}
          onClick={() => onOpenLightbox(previewSources, index)}
          aria-label={`Open ${title}: ${type}. ${result}.`}
        >
          <img src={src} alt={`${title} preview`} className="hero-scatter__img" width="1300" height="900" loading="lazy" decoding="async" />
          <span className="hero-scatter__caption">
            <strong>{title}</strong>
            <span>{type} · {result}</span>
          </span>
          <span className="hero-scatter__hint" aria-hidden="true">View work ↗</span>
        </button>
      ))}
    </div>
  );
}

export default function HeroSection({ onOpenLightbox }) {
  const { t, lang } = useLanguage();
  const h = t.hero;
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const specialties = [
    'Solution Architecture & System Design',
    'Database Management (SQL)',
    'API Development & Integration',
    'UI/UX Design',
    'ERP Solution Delivery',
    'AI Integration & Automation',
  ];
  const stats = [
    { value: '3+', label: h.stats.exp, detail: 'Kinh nghiệm triển khai & phát triển sản phẩm' },
    { value: '15K+', label: h.stats.users, detail: 'Người dùng cuối được hỗ trợ qua các đợt triển khai' },
    { value: '50%', label: h.stats.faster, detail: 'Case study hiệu năng · đo thời gian xử lý báo cáo trước/sau tối ưu', href: '#case-studies' },
  ];
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 id="hero-heading" className="hero__headline hero__entrance">
            <span className="hero__identity">
              <span className="hero__name">Lê Thiên <em>Vũ</em></span>
              <span className="hero__profile-details">TP. Hồ Chí Minh · Available for ERP & software delivery</span>
            </span>
            <span className="hero__value-headline">Thiết kế và triển khai hệ thống ERP tích hợp — từ kiến trúc, dữ liệu đến <em>tự động hóa AI.</em></span>
            <span className="hero__role" aria-label="Fullstack Software Engineer and ERP Implementation Specialist">
              <span className="hero__role-track hero__role-track--engineering">
                <span className="hero__role-kicker">Fullstack</span>
                <span className="hero__role-title">Software Engineer</span>
                <span className="hero__role-vietnamese">Kỹ sư phần mềm</span>
              </span>
              <span className="hero__role-mark" aria-hidden="true">
                <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" />
              </span>
              <span className="hero__role-track hero__role-track--erp">
                <span className="hero__role-kicker">ERP</span>
                <span className="hero__role-title">Implementation Engineer</span>
                <span className="hero__role-vietnamese">Kỹ sư triển khai</span>
              </span>
            </span>
          </h1>
          <div className={`hero__desc hero__entrance ${isDescriptionExpanded ? 'hero__desc--expanded' : ''}`}>
            <p id="hero-description"><HtmlText>{h.desc}</HtmlText></p>
            <button type="button" className="hero__desc-toggle" aria-expanded={isDescriptionExpanded} aria-controls="hero-description" onClick={() => setIsDescriptionExpanded((expanded) => !expanded)}>
              {isDescriptionExpanded ? (lang === 'vi' ? 'Thu gọn' : 'Show less') : (lang === 'vi' ? 'Xem thêm' : 'Read more')}
              <span aria-hidden="true">{isDescriptionExpanded ? '↑' : '↓'}</span>
            </button>
          </div>
          <ul className="hero__specialties" aria-label="Core specialties">
            {specialties.map((specialty) => <li key={specialty}><span>{specialty}</span></li>)}
          </ul>
          <div className="hero__actions hero__entrance">
            <a href={`${import.meta.env.BASE_URL}LeThienVu_CV.pdf`} download="LeThienVu_CV.pdf" className="btn btn-primary btn--md">{h.cta.cv}</a>
            <a href="#case-studies" className="btn btn-secondary btn--md">{h.cta.projects}</a>
          </div>
        </div>
        <div className="hero__right-col">
          <aside className="hero__graphics hero__visual-entrance" aria-label="Profile and portfolio showcase">
            <div className="hero__orb" aria-hidden="true" />
            <div className="hero__card-wrapper"><ProfileCard /></div>
            <ScatteredFrames onOpenLightbox={onOpenLightbox} />
          </aside>
          <div className="hero__stats hero__stats--right" role="list" aria-label="Career highlights">
            {stats.map(({ value, label, detail, href }) => (
              <div key={label} className="hero__stat-item" role="listitem">
                <strong>{value}</strong><span>{label}</span><small>{detail}</small>
                {href && <a href={href}>Xem case study <span aria-hidden="true">↘</span></a>}
              </div>
            ))}
          </div>
          <section className="hero__clients hero__clients-entrance" aria-label="Clients I have worked with">
            <p className="hero__clients-label"><span>Trusted by teams at</span></p>
            <ul className="hero__clients-list">
              {CLIENTS.map((client) => (
                <li key={client.nameEn} className={`hero__client-logo ${client.className}`} tabIndex="0" aria-label={`${client.nameEn}. ${client.nameVi}`}>
                  <img src={client.logo} alt={client.nameEn} width="96" height="42" loading="lazy" decoding="async" />
                  <div className="hero__client-popover" role="tooltip"><strong lang="en">{client.nameEn}</strong><span lang="vi">{client.nameVi}</span></div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
