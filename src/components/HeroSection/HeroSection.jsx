import { useRef, useState } from 'react';
import { HtmlText } from '../HtmlText.jsx';
import './HeroSection.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import ProfileCard from '../ProfileCard/ProfileCard.jsx';

export default function HeroSection() {
  const { t, lang } = useLanguage();
  const h = t.hero;
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const descriptionRef = useRef(null);
  const descriptionAnimationRef = useRef(null);

  const toggleDescription = () => {
    const description = descriptionRef.current;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!description || prefersReducedMotion) {
      setIsDescriptionExpanded((expanded) => !expanded);
      return;
    }

    descriptionAnimationRef.current?.cancel();
    const startHeight = description.getBoundingClientRect().height;
    const nextExpanded = !isDescriptionExpanded;

    description.style.height = 'auto';
    setIsDescriptionExpanded(nextExpanded);

    requestAnimationFrame(() => {
      const endHeight = description.getBoundingClientRect().height;
      description.style.height = `${startHeight}px`;
      description.style.overflow = 'clip';

      const animation = description.animate(
        [
          { height: `${startHeight}px`, opacity: 0.94, filter: 'blur(.35px)' },
          { height: `${endHeight}px`, opacity: 1, filter: 'blur(0)' },
        ],
        { duration: nextExpanded ? 460 : 340, easing: 'cubic-bezier(.16, 1, .3, 1)', fill: 'both' },
      );
      descriptionAnimationRef.current = animation;

      animation.onfinish = () => {
        // A finished fill-mode animation still owns `height`; clear it explicitly
        // so the following collapse can measure and animate from the real layout.
        description.style.height = `${endHeight}px`;
        animation.cancel();
        description.style.height = '';
        description.style.overflow = '';
        if (descriptionAnimationRef.current === animation) descriptionAnimationRef.current = null;
      };
    });
  };
  const specialties = [
    'Solution Architecture & System Design',
    'Database Management (SQL)',
    'API Development & Integration',
    'UI/UX Design',
    'ERP Solution Delivery',
    'AI Integration & Automation',
  ];
  const stats = [
    { value: '4+', label: 'Năm thực chiến', detail: 'Phát triển & triển khai hệ thống ERP/HRM' },
    { value: '15K+', label: 'Người dùng sản phẩm', detail: 'Đồng hành vận hành hệ thống ở quy mô lớn' },
    { value: 'x2–x3', label: 'Hiệu suất cá nhân', detail: 'Ứng dụng AI vào quy trình làm việc' },
  ];
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 id="hero-heading" className="hero__headline hero__entrance">
            <span className="hero__identity">
              <span className="hero__name">Lê Thiên <em>Vũ</em></span>
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
          <div ref={descriptionRef} className={`hero__desc hero__entrance ${isDescriptionExpanded ? 'hero__desc--expanded' : ''}`}>
            <p id="hero-description"><HtmlText>{h.desc}</HtmlText></p>
            <button type="button" className="hero__desc-toggle" aria-expanded={isDescriptionExpanded} aria-controls="hero-description" onClick={toggleDescription}>
              {isDescriptionExpanded ? (lang === 'vi' ? 'Thu gọn' : 'Show less') : (lang === 'vi' ? 'Xem thêm' : 'Read more')}
              <span className="hero__desc-toggle-icon" aria-hidden="true" />
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
            <div className="hero__stat-cards" role="list" aria-label="Career highlights">
              {stats.map(({ value, label, detail }, index) => (
                <div key={label} className={`hero__stat-card hero__stat-card--${index}`} role="listitem">
                  <strong>{value}</strong><span>{label}</span><small>{detail}</small>
                </div>
              ))}
            </div>
          </aside>
        </div>
        <footer className="hero__footer hero__entrance" aria-label="Thông tin hồ sơ và trạng thái website">
          <div className="hero__profile-details">
            <span><img src={`${import.meta.env.BASE_URL}birthday.svg`} alt="" aria-hidden="true" /><small>Năm sinh</small><strong>2000</strong></span>
            <span><img src={`${import.meta.env.BASE_URL}gender.svg`} alt="" aria-hidden="true" /><small>Giới tính</small><strong>Nam</strong></span>
            <span><img src={`${import.meta.env.BASE_URL}city.svg`} alt="" aria-hidden="true" /><small>Địa điểm</small><strong>TP. Hồ Chí Minh</strong></span>
            <span><small>Học vị · Trường Đại học Sài Gòn</small><strong>Kỹ sư phần mềm (Bachelor of Engineering)</strong></span>
          </div>
          <div className="hero__site-status" aria-label="Thông tin cập nhật website">
            <span><small>Cập nhật gần nhất</small><strong>20.10.2026 · Version 2.6.0.2</strong></span>
          </div>
        </footer>
      </div>
    </section>
  );
}
