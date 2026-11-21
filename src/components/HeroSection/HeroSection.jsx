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
  const localized = {
    vi: {
      headline: 'Thiết kế và triển khai hệ thống ERP tích hợp — từ kiến trúc, dữ liệu đến <em>tự động hóa AI.</em>',
      specialties: ['Kiến trúc giải pháp & thiết kế hệ thống', 'Quản trị cơ sở dữ liệu (SQL)', 'Phát triển & tích hợp API', 'Thiết kế UI/UX', 'Triển khai giải pháp ERP', 'Tích hợp & tự động hóa AI'],
      stats: [
        { value: '4+', label: 'Năm thực chiến', detail: 'Phát triển & triển khai hệ thống ERP/HRM' },
        { value: '15K+', label: 'Người dùng sản phẩm', detail: 'Hỗ trợ vận hành hệ thống ở quy mô lớn' },
        { value: 'x2–x3', label: 'Hiệu suất làm việc', detail: 'Ứng dụng AI vào quy trình thực tế' },
      ],
      profileAria: 'Thông tin hồ sơ và trạng thái website',
    },
    en: {
      headline: 'Design and deliver integrated ERP systems — from architecture and data to <em>AI automation.</em>',
      specialties: ['Solution Architecture & System Design', 'Database Management (SQL)', 'API Development & Integration', 'UI/UX Design', 'ERP Solution Delivery', 'AI Integration & Automation'],
      stats: [
        { value: '4+', label: 'Years in practice', detail: 'ERP/HRM software development and delivery' },
        { value: '15K+', label: 'Product users', detail: 'Supporting large-scale system operations' },
        { value: 'x2–x3', label: 'Work efficiency', detail: 'Applying AI to practical workflows' },
      ],
      profileAria: 'Profile information and website status',
    },
    ja: {
      headline: 'ERPシステムを設計・導入 — アーキテクチャとデータから<em>AI自動化</em>まで。',
      specialties: ['ソリューション設計', 'データベース管理（SQL）', 'API開発・連携', 'UI/UXデザイン', 'ERP導入', 'AI連携・自動化'],
      stats: [
        { value: '4+', label: '実務経験年数', detail: 'ERP/HRMの開発・導入' },
        { value: '15K+', label: '製品ユーザー', detail: '大規模システムの運用支援' },
        { value: 'x2–x3', label: '業務効率', detail: '実務ワークフローへのAI活用' },
      ],
      profileAria: 'プロフィール情報とサイト更新状況',
    },
    zh: {
      headline: '设计并交付集成ERP系统——从架构、数据到<em>AI自动化。</em>',
      specialties: ['解决方案架构与系统设计', '数据库管理（SQL）', 'API开发与集成', 'UI/UX设计', 'ERP解决方案交付', 'AI集成与自动化'],
      stats: [
        { value: '4+', label: '实际经验年限', detail: 'ERP/HRM系统开发与交付' },
        { value: '15K+', label: '产品用户', detail: '支持大规模系统运营' },
        { value: 'x2–x3', label: '工作效率', detail: '将AI应用于实际工作流程' },
      ],
      profileAria: '个人资料与网站状态',
    },
  }[lang] || {};
  const specialties = localized.specialties;
  const stats = localized.stats;
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 id="hero-heading" className="hero__headline hero__entrance">
            <span className="hero__identity">
              <span className="hero__name">Lê Thiên <em>Vũ</em></span>
            </span>
            <span className="hero__value-headline"><HtmlText>{localized.headline}</HtmlText></span>
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
          <ul className="hero__specialties" aria-label={lang === 'vi' ? 'Năng lực chuyên môn cốt lõi' : lang === 'ja' ? '主要な専門領域' : lang === 'zh' ? '核心专业能力' : 'Core specialties'}>
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
            <div className="hero__stat-cards" role="list" aria-label={lang === 'vi' ? 'Điểm nổi bật trong sự nghiệp' : lang === 'ja' ? 'キャリアハイライト' : lang === 'zh' ? '职业亮点' : 'Career highlights'}>
              {stats.map(({ value, label, detail }, index) => (
                <div key={label} className={`hero__stat-card hero__stat-card--${index}`} role="listitem">
                  <strong>{value}</strong><span>{label}</span><small>{detail}</small>
                </div>
              ))}
            </div>
          </aside>
        </div>
        <footer className="hero__footer hero__entrance" aria-label={localized.profileAria}>
          <div className="hero__profile-details">
            <span><img src={`${import.meta.env.BASE_URL}birthday.svg`} alt="" aria-hidden="true" /><small>Năm sinh</small><strong>2000</strong></span>
            <span><img src={`${import.meta.env.BASE_URL}gender.svg`} alt="" aria-hidden="true" /><small>Giới tính</small><strong>Nam</strong></span>
            <span><img src={`${import.meta.env.BASE_URL}city.svg`} alt="" aria-hidden="true" /><small>Tại</small><strong>TP. Hồ Chí Minh</strong></span>
            <span><small>Học vị · Trường Đại học Sài Gòn</small><strong>Kỹ sư phần mềm (Bachelor of Engineering)</strong></span>
          </div>
        </footer>
      </div>
    </section>
  );
}
