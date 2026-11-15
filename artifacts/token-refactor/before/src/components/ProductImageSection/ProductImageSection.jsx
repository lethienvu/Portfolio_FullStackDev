import { useState, useEffect } from 'react';
import './ProductImageSection.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';

// ── Web (Laptop) screenshots ──────────────────────────────────────────────────
import imgPWebLauncher      from '../../assets/ParadiseHR_WebApp/pWeb-launcher.webp';
import imgPWebDashboard     from '../../assets/ParadiseHR_WebApp/pWeb_dashboard.webp';
import imgPWebEmployeeList  from '../../assets/ParadiseHR_WebApp/pWeb-employeeList.webp';
import imgPWebProfile       from '../../assets/ParadiseHR_WebApp/pWeb-profile.webp';
import imgPWebDetmold       from '../../assets/ParadiseHR_WebApp/pWeb-Detmold.webp';
import imgPWebDetmold2      from '../../assets/ParadiseHR_WebApp/pWeb-Detmold2.webp';
import imgPWebSettings      from '../../assets/ParadiseHR_WebApp/pWeb-settings.webp';
import imgPWebRequestCreate from '../../assets/QuanLyNghiPhep/request1.webp';
import imgNavtRecruitment   from '../../assets/TuyenDung/navt-recruitment.webp';
import imgDPVN              from '../../assets/DPVN/dpvn.webp';
import imgVaoCaLanding      from '../../assets/VaoCaLandingPage/VaoCa-LandingPage.webp';
import imgDevWeb            from '../../assets/DevWeb/DevWeb.webp';
import imgVCLandingPage     from '../../assets/VaoCaLandingPage/VC_LandingPage.webp';
import imgPwebDb            from '../../assets/ParadiseHR_WebApp/pweb_db.webp';
import imgPwebLoginNew      from '../../assets/ParadiseHR_WebApp/pWeb_Login.webp';

// ── Slide Definitions ─────────────────────────────────────────────────────────
// Each slide uses a web screenshot in a laptop frame.
const SLIDES = [
  {
    id: 1,
    laptop: imgPWebLauncher,
    title:  'Micro-Frontend Architecture & SSO',
    desc:   'Xây dựng kiến trúc SPA tùy chỉnh phân tách module nghiệp vụ. Tích hợp xác thực SSO bằng JWT an toàn, đồng bộ trạng thái phiên xuyên suốt cả Web lẫn Mobile App.',
  },
  {
    id: 2,
    laptop: imgPWebDashboard,
    title:  'Data Visualization & API Optimization',
    desc:   'Trực quan hóa hàng triệu bản ghi thành biểu đồ tương tác thời gian thực. Tối ưu T-SQL và Stored Procedure để giảm thời gian phản hồi API xuống mức mili-giây.',
  },
  {
    id: 3,
    laptop: imgPWebEmployeeList,
    title:  'High-Performance Virtual DOM Rendering',
    desc:   'Triển khai Virtual Scrolling render mượt mà danh sách hơn 10.000+ nodes ở 60 FPS. Theo dõi chấm công thời gian thực với grid layout thông minh trên mobile.',
  },
  {
    id: 4,
    laptop: imgPWebProfile,
    title:  'Complex Form State Management',
    desc:   'Xây dựng form linh động với hàng trăm trường dữ liệu lồng nhau. Schema Validation nghiêm ngặt đảm bảo tính toàn vẹn dữ liệu từ Frontend đến Backend.',
  },
  {
    id: 5,
    laptop: imgVaoCaLanding,
    title:  'Progressive Web App & Geolocation',
    desc:   'Phát triển PWA hỗ trợ offline-first qua Service Workers. Khai thác Geolocation API và thuật toán không gian để chấm công GPS với độ chính xác cao.',
  },
  {
    id: 6,
    laptop: imgNavtRecruitment,
    title:  'Automated Workflow & Approval Engine',
    desc:   'Thiết kế Engine quy trình tuyển dụng tự động hóa đầu cuối. Phê duyệt yêu cầu đa cấp với routing thông minh — từ màn quản trị web đến mobile duyệt đơn tức thì.',
  },
  {
    id: 7,
    laptop: imgPWebDetmold,
    title:  'Multi-Tenant Enterprise Architecture',
    desc:   'Hệ thống Multi-Tenant cho phép tùy biến sâu nghiệp vụ đặc thù của từng doanh nghiệp sản xuất. Timesheet calendar hiển thị dữ liệu ca làm việc phức tạp trực quan trên mobile.',
  },
  {
    id: 8,
    laptop: imgPWebDetmold2,
    title:  'High-Throughput Big Data Handling',
    desc:   'Tối ưu SQL Server bằng Indexing và Partitioning để ghi nhận lượng cực lớn Audit Log mỗi giây. Báo cáo tổng hợp theo kỳ với xếp hạng nhân viên trực quan trên mobile.',
  },
  {
    id: 9,
    laptop: imgPwebLoginNew,
    title:  'Security & Native Device Integration',
    desc:   'Sử dụng WebRTC truy cập camera thiết bị để xác thực sinh trắc học FaceID trực tiếp trên trình duyệt. Mã hóa đường truyền GPS chống giả mạo tọa độ.',
  },
  {
    id: 10,
    laptop: imgPWebSettings,
    title:  'Personalization & Leave Management',
    desc:   'Trang thiết lập cá nhân hóa: ngôn ngữ đa quốc gia (VI/EN/中文), dark/light mode, sinh trắc học. Duyệt đơn nghỉ phép tập trung với filter trạng thái thông minh trên mobile.',
  },
  {
    id: 11,
    laptop: imgPWebRequestCreate,
    title:  'JSON Schema Driven UI & QR Sync',
    desc:   'Hệ thống Component động tự động render UI từ cấu hình JSON Backend. Quét mã QR để chấm công tức thời — kết nối thiết bị máy chấm công vật lý với hệ thống cloud.',
  },
  {
    id: 12,
    laptop: imgDPVN,
    title:  'Cross-Platform API Orchestration',
    desc:   'Thiết kế RESTful API đóng vai trò Orchestrator, giao tiếp xuyên suốt giữa CSDL lõi, Web SPA và Mobile App của hàng ngàn công nhân đa nhà máy.',
  },
  {
    id: 13,
    laptop: imgDevWeb,
    title:  'Software Development & Prototyping',
    desc:   'Từ phác thảo ý tưởng Wireframe UI/UX trên mobile đến quá trình hiện thực hóa bằng mã nguồn thành sản phẩm web thực tế có khả năng mở rộng.',
  },
  {
    id: 14,
    laptop: imgVCLandingPage,
    title:  'Landing Page & HR Management',
    desc:   'Xây dựng trang đích (Landing Page) hiện đại giới thiệu sản phẩm. Đồng thời tối ưu hóa luồng quản lý nhân sự chuyên sâu ngay trên thiết bị di động.',
  },
  {
    id: 15,
    laptop: imgPwebDb,
    title:  'Database Architecture & Recruitment',
    desc:   'Thiết kế kiến trúc cơ sở dữ liệu linh hoạt cho phân hệ tuyển dụng. Số hóa toàn bộ quy trình từ đăng tuyển, quản lý hồ sơ đến đánh giá phỏng vấn.',
  }
];

// ── Sub-components ────────────────────────────────────────────────────────────

function ImageWithSkeleton({ src, alt, className, width, height, objectFit = 'cover', objectPosition = 'top' }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="skeleton-wrapper active"
      style={{
        position: 'absolute',
        inset: 0,
        opacity: 1,
        pointerEvents: 'all',
        transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 2,
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
        onLoad={() => setLoaded(true)}
        width={width}
        height={height}
        loading="eager"
        decoding="async"
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

export default function ProductImageSection({ embedded = false, current: controlledCurrent, setCurrent: controlledSetCurrent }) {
  const { t } = useLanguage();
  const [internalCurrent, setInternalCurrent] = useState(0);
  const current = controlledCurrent ?? internalCurrent;
  const setCurrent = controlledSetCurrent ?? setInternalCurrent;
  const content = t.productImages;
  const showcase = <ProductShowcase current={current} setCurrent={setCurrent} slides={SLIDES} />;
  if (embedded) return showcase;
  return <section id="product-images" className="product-images-section" aria-label={content.title}><div className="product-images__bg-blur" style={{ backgroundImage: `url(${SLIDES[current].laptop})` }} /><div className="product-images__bg-overlay" /><div className="container" style={{ position: 'relative', zIndex: 1 }}><div className="product-images__content">{showcase}</div></div></section>;
}

function ProductShowcase({ current, setCurrent, slides = SLIDES }) {
  // Smart on-demand preloading: only preload next slide
  useEffect(() => {
    const nextIdx = (current + 1) % slides.length;
    const nextLaptop = slides[nextIdx]?.laptop;
    [nextLaptop].forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, [current, slides]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [setCurrent, slides.length]);

  return (
    <div id="product-showcase" className="product-showcase" tabIndex="-1">
      <div className="device-composite">

        {/* ── Laptop Frame ─────────────────────────────── */}
        <div className="device-laptop laptop">
          <div className="screen">
            <div className="header"></div>
            <div className="screen-content">
              <ImageWithSkeleton
                key={`laptop-${slides[current].id}`}
                src={slides[current].laptop}
                alt={slides[current].title}
                className="device-img active"
                width="1300"
                height="1350"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
          <div className="keyboard"></div>

        </div>


      </div>

      {/* ── Controls ──────────────────────────────────── */}
      <div className="product-showcase__controls">
        <div className="product-showcase__dots">
          {slides.map((s, idx) => (
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
