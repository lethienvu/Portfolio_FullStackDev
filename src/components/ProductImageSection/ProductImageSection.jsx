import { useState, useEffect } from 'react';
import './ProductImageSection.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import phoneFrame from '../../assets/phone-frame.svg';

// ── Web (Laptop) screenshots ──────────────────────────────────────────────────
import imgPWebLauncher      from '../../assets/pWeb-launcher.jpg';
import imgPWebDashboard     from '../../assets/pWeb_dashboard.jpg';
import imgPWebEmployeeList  from '../../assets/pWeb-employeeList.jpg';
import imgPWebProfile       from '../../assets/pWeb-profile.jpg';
import imgPWebDetmold       from '../../assets/pWeb-Detmold.jpg';
import imgPWebDetmold2      from '../../assets/pWeb-Detmold2.jpg';
import imgPWebSettings      from '../../assets/pWeb-settings.PNG';
import imgPWebRequestCreate from '../../assets/request1.jpg';
import imgNavtRecruitment   from '../../assets/navt-recruitment.jpeg';
import imgDPVN              from '../../assets/dpvn.jpg';
import imgVaoCaLanding      from '../../assets/VaoCa-LandingPage.JPG';
import imgDevWeb            from '../../assets/DevWeb.png';
import imgVCLandingPage     from '../../assets/VC_LandingPage.png';
import imgPwebDb            from '../../assets/pweb_db.png';
import imgPwebLoginNew      from '../../assets/pWeb_Login.png';

// ── Mobile (Phone) screenshots ────────────────────────────────────────────────
import imgPAppAttendance    from '../../assets/pApp-attendance.PNG';
import imgPAppGps           from '../../assets/pApp-GPS.jpg';
import imgPAppReport        from '../../assets/pApp-report.PNG';
import imgPAppReport2       from '../../assets/pApp-report2.PNG';
import imgPAppApproveLeave  from '../../assets/pApp_approveleave.jpg';
import imgPAppTimesheet     from '../../assets/pApp_timesheet.PNG';
import imgPAppHiringReq     from '../../assets/pApp_navt_hiringRequest.jpg';
import imgVCQr              from '../../assets/VC-qr.PNG';
import imgGPSCamera         from '../../assets/GPS-camera.JPG';
import imgVCDashboard       from '../../assets/vc-dashboard.jpg';
import imgPWebVaoCaWireframe from '../../assets/pWeb_vaoCaWireframe.jpg';
import imgPWebHiringHr      from '../../assets/pWeb_navt_hiringhr.jpg';
import imgPAppHiringInterview from '../../assets/pApp_navt_hiringinterview.png';

// ── Slide Definitions ─────────────────────────────────────────────────────────
// Each slide: laptop = web screenshot (16:10 landscape), phone = mobile screenshot (9:19.5 portrait)
const SLIDES = [
  {
    id: 1,
    laptop: imgPWebLauncher,
    phone:  imgVCDashboard,
    title:  'Micro-Frontend Architecture & SSO',
    desc:   'Xây dựng kiến trúc SPA tùy chỉnh phân tách module nghiệp vụ. Tích hợp xác thực SSO bằng JWT an toàn, đồng bộ trạng thái phiên xuyên suốt cả Web lẫn Mobile App.',
  },
  {
    id: 2,
    laptop: imgPWebDashboard,
    phone:  imgPAppReport,
    title:  'Data Visualization & API Optimization',
    desc:   'Trực quan hóa hàng triệu bản ghi thành biểu đồ tương tác thời gian thực. Tối ưu T-SQL và Stored Procedure để giảm thời gian phản hồi API xuống mức mili-giây.',
  },
  {
    id: 3,
    laptop: imgPWebEmployeeList,
    phone:  imgPAppTimesheet,
    title:  'High-Performance Virtual DOM Rendering',
    desc:   'Triển khai Virtual Scrolling render mượt mà danh sách hơn 10.000+ nodes ở 60 FPS. Theo dõi chấm công thời gian thực với grid layout thông minh trên mobile.',
  },
  {
    id: 4,
    laptop: imgPWebProfile,
    phone:  imgPAppAttendance,
    title:  'Complex Form State Management',
    desc:   'Xây dựng form linh động với hàng trăm trường dữ liệu lồng nhau. Schema Validation nghiêm ngặt đảm bảo tính toàn vẹn dữ liệu từ Frontend đến Backend.',
  },
  {
    id: 5,
    laptop: imgVaoCaLanding,
    phone:  imgPAppGps,
    title:  'Progressive Web App & Geolocation',
    desc:   'Phát triển PWA hỗ trợ offline-first qua Service Workers. Khai thác Geolocation API và thuật toán không gian để chấm công GPS với độ chính xác cao.',
  },
  {
    id: 6,
    laptop: imgNavtRecruitment,
    phone:  imgPAppHiringReq,
    title:  'Automated Workflow & Approval Engine',
    desc:   'Thiết kế Engine quy trình tuyển dụng tự động hóa đầu cuối. Phê duyệt yêu cầu đa cấp với routing thông minh — từ màn quản trị web đến mobile duyệt đơn tức thì.',
  },
  {
    id: 7,
    laptop: imgPWebDetmold,
    phone:  imgPAppTimesheet,
    title:  'Multi-Tenant Enterprise Architecture',
    desc:   'Hệ thống Multi-Tenant cho phép tùy biến sâu nghiệp vụ đặc thù của từng doanh nghiệp sản xuất. Timesheet calendar hiển thị dữ liệu ca làm việc phức tạp trực quan trên mobile.',
  },
  {
    id: 8,
    laptop: imgPWebDetmold2,
    phone:  imgPAppReport2,
    title:  'High-Throughput Big Data Handling',
    desc:   'Tối ưu SQL Server bằng Indexing và Partitioning để ghi nhận lượng cực lớn Audit Log mỗi giây. Báo cáo tổng hợp theo kỳ với xếp hạng nhân viên trực quan trên mobile.',
  },
  {
    id: 9,
    laptop: imgPwebLoginNew,
    phone:  imgGPSCamera,
    title:  'Security & Native Device Integration',
    desc:   'Sử dụng WebRTC truy cập camera thiết bị để xác thực sinh trắc học FaceID trực tiếp trên trình duyệt. Mã hóa đường truyền GPS chống giả mạo tọa độ.',
  },
  {
    id: 10,
    laptop: imgPWebSettings,
    phone:  imgPAppApproveLeave,
    title:  'Personalization & Leave Management',
    desc:   'Trang thiết lập cá nhân hóa: ngôn ngữ đa quốc gia (VI/EN/中文), dark/light mode, sinh trắc học. Duyệt đơn nghỉ phép tập trung với filter trạng thái thông minh trên mobile.',
  },
  {
    id: 11,
    laptop: imgPWebRequestCreate,
    phone:  imgVCQr,
    title:  'JSON Schema Driven UI & QR Sync',
    desc:   'Hệ thống Component động tự động render UI từ cấu hình JSON Backend. Quét mã QR để chấm công tức thời — kết nối thiết bị máy chấm công vật lý với hệ thống cloud.',
  },
  {
    id: 12,
    laptop: imgDPVN,
    phone:  imgPAppReport,
    title:  'Cross-Platform API Orchestration',
    desc:   'Thiết kế RESTful API đóng vai trò Orchestrator, giao tiếp xuyên suốt giữa CSDL lõi, Web SPA và Mobile App của hàng ngàn công nhân đa nhà máy.',
  },
  {
    id: 13,
    laptop: imgDevWeb,
    phone:  imgPWebVaoCaWireframe,
    title:  'Software Development & Prototyping',
    desc:   'Từ phác thảo ý tưởng Wireframe UI/UX trên mobile đến quá trình hiện thực hóa bằng mã nguồn thành sản phẩm web thực tế có khả năng mở rộng.',
  },
  {
    id: 14,
    laptop: imgVCLandingPage,
    phone:  imgPWebHiringHr,
    title:  'Landing Page & HR Management',
    desc:   'Xây dựng trang đích (Landing Page) hiện đại giới thiệu sản phẩm. Đồng thời tối ưu hóa luồng quản lý nhân sự chuyên sâu ngay trên thiết bị di động.',
  },
  {
    id: 15,
    laptop: imgPwebDb,
    phone:  imgPAppHiringInterview,
    title:  'Database Architecture & Recruitment',
    desc:   'Thiết kế kiến trúc cơ sở dữ liệu linh hoạt cho phân hệ tuyển dụng. Số hóa toàn bộ quy trình từ đăng tuyển, quản lý hồ sơ đến đánh giá phỏng vấn.',
  }
];

const LAPTOP_IMGS = SLIDES.map(s => s.laptop);
const PHONE_IMGS  = SLIDES.map(s => s.phone);

// ── Sub-components ────────────────────────────────────────────────────────────

function ImageWithSkeleton({ src, alt, className, onClick, title, active, objectFit = 'cover', objectPosition = 'top' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`skeleton-wrapper ${active ? 'active' : ''}`}
      style={{
        position: 'absolute',
        inset: 0,
        opacity: active ? 1 : 0,
        pointerEvents: active ? 'all' : 'none',
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: active ? 2 : 1,
      }}
    >
      {!loaded && (
        <div className="skeleton-loader" style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          background: 'linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeleton-shimmer 1.5s infinite linear',
          borderRadius: 'inherit',
        }} />
      )}
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={onClick}
        onLoad={() => setLoaded(true)}
        title={title}
        loading="eager"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
          width: '100%',
          height: '100%',
          objectFit,
          objectPosition,
          display: 'block',
        }}
      />
    </div>
  );
}

function ProductShowcase({ current, setCurrent, onOpenLightbox, isLightboxOpen, content }) {
  // Preload all images
  useEffect(() => {
    [...LAPTOP_IMGS, ...PHONE_IMGS].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isLightboxOpen) {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isLightboxOpen, setCurrent]);

  return (
    <div className="product-showcase">
      <header className="product-images__header">
        <h2 id="product-images-heading" className="section-title">{content.title}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
        <div className="security-notice">
          <strong>⚠️ Lưu ý:</strong> Các hình ảnh minh họa trong phần này đã được đơn giản hóa để bảo vệ dữ liệu người dùng và tuân thủ quy định về quyền riêng tư.
        </div>
      </header>
      <div className="device-composite">

        {/* ── Laptop Frame ─────────────────────────────── */}
        <div className="device-laptop laptop">
          <div className="screen">
            <div className="header"></div>
            <div className="screen-content">
              {SLIDES.map((slide, idx) => (
                <ImageWithSkeleton
                  key={`laptop-${slide.id}`}
                  src={slide.laptop}
                  alt={slide.title}
                  className={`device-img ${idx === current ? 'active' : ''}`}
                  onClick={() => onOpenLightbox(LAPTOP_IMGS, idx)}
                  title="Xem toàn màn hình"
                  active={idx === current}
                  objectFit="cover"
                  objectPosition="top"
                />
              ))}
            </div>
          </div>
          <div className="keyboard"></div>
          <div className="product-slider__overlay">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>

        {/* ── Phone Frame ───────────────────────────────── */}
        <div className="device-phone">
          <img src={phoneFrame} alt="Phone Frame" className="phone-frame-img no-lightbox" />
          <div className="device-phone__screen">
            {SLIDES.map((slide, idx) => (
              <ImageWithSkeleton
                key={`phone-${slide.id}`}
                src={slide.phone}
                alt={slide.title}
                className={`device-img ${idx === current ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(PHONE_IMGS, idx);
                }}
                title="Xem toàn màn hình"
                active={idx === current}
                objectFit="cover"
                objectPosition="top center"
              />
            ))}
          </div>
          <div className="product-slider__overlay">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>

      </div>

      {/* ── Controls ──────────────────────────────────── */}
      <div className="product-showcase__controls">
        <div className="product-showcase__info">
          <h3 className="product-showcase__title">{SLIDES[current].title}</h3>
          <p className="product-showcase__desc">{SLIDES[current].desc}</p>
        </div>

        <div className="product-showcase__dots">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              className={`showcase-dot ${idx === current ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Show slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function ProductImageSection({ onOpenLightbox, isLightboxOpen }) {
  const { t } = useLanguage();
  const content = t.productImages;
  const [current, setCurrent] = useState(0);

  return (
    <section id="product-images" className="product-images-section" aria-labelledby="product-images-heading">
      {/* Blurred ambient background from current slide */}
      <div
        className="product-images__bg-blur"
        style={{ backgroundImage: `url(${SLIDES[current].laptop})` }}
      />
      <div className="product-images__bg-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <div className="product-images__content">
          <ProductShowcase
            current={current}
            setCurrent={setCurrent}
            onOpenLightbox={onOpenLightbox}
            isLightboxOpen={isLightboxOpen}
            content={content}
          />
        </div>
      </div>
    </section>
  );
}
