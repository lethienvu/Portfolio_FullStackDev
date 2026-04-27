import React, { useState, useEffect } from 'react';
import './ProductImageSection.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import imgPweb from '../../assets/hero-pweb.png';
import imgMobileApp from '../../assets/hero-mobileApp.png';
import imgPweb3 from '../../assets/hero-pweb3.png';
import imgVcshow from '../../assets/hero-vcshow.png';
import phoneFrame from '../../assets/phone-frame.svg';

import imgVaoCaLanding from '../../assets/VaoCa-LandingPage.JPG';
import imgPAppGps from '../../assets/pApp-GPS.jpg';
import imgPAppReport from '../../assets/pApp-report.PNG';
import imgPAppReport2 from '../../assets/pApp-report2.PNG';
import imgPWebDetmold from '../../assets/pWeb-Detmold.png';
import imgPWebEmployeeList from '../../assets/pWeb-employeeList.png';
import imgPWebLauncher from '../../assets/pWeb-launcher.png';
import imgPWebProfile from '../../assets/pWeb-profile.png';
import imgPWebDashboard from '../../assets/pWeb_dashboard.png';
import imgNavtRecruitment from '../../assets/navt-recruitment.jpeg';
import imgPWebLogin from '../../assets/pWeb-login.png';
import imgPAppAttendance from '../../assets/pApp-attendance.PNG';
import imgVCQr from '../../assets/VC-qr.PNG';
import imgGPSCamera from '../../assets/GPS-camera.JPG';
import imgPWebRequestCreate from '../../assets/request1.png';
import imgDPVN from '../../assets/dpvn.jpg';

const SLIDES = [
  { 
    id: 1, 
    laptop: imgPWebLauncher, 
    phone: imgPAppReport, 
    title: 'Micro-Frontend Architecture & SSO',
    desc: 'Xây dựng kiến trúc phân tách các module nghiệp vụ lớn bằng React. Tích hợp xác thực Single Sign-On (SSO) an toàn bằng JWT cho cả nền tảng Web và Mobile App.'
  },
  { 
    id: 2, 
    laptop: imgPWebDashboard, 
    phone: imgPAppReport2, 
    title: 'Data Visualization & API Optimization',
    desc: 'Trực quan hóa hàng triệu bản ghi thành biểu đồ tương tác thời gian thực. Tối ưu hóa truy vấn SQL Server để giảm thời gian phản hồi API xuống mức mili-giây.'
  },
  { 
    id: 3, 
    laptop: imgPWebEmployeeList, 
    phone: imgMobileApp, 
    title: 'High-Performance Virtual DOM Rendering',
    desc: 'Triển khai Virtual Scrolling render mượt mà danh sách hơn 10.000+ nodes ở 60 FPS. Tối ưu hóa luồng re-render bằng Memoization và quản lý state phức tạp.'
  },
  { 
    id: 4, 
    laptop: imgPWebProfile, 
    phone: imgPAppReport, 
    title: 'Complex Form State Management',
    desc: 'Xây dựng form linh động với hàng trăm trường dữ liệu lồng nhau. Áp dụng kỹ thuật Schema Validation khắt khe để đảm bảo tính toàn vẹn dữ liệu từ Frontend.'
  },
  { 
    id: 5, 
    laptop: imgVaoCaLanding, 
    phone: imgPAppGps, 
    title: 'Progressive Web App & Geolocation',
    desc: 'Phát triển ứng dụng PWA hỗ trợ offline-first qua Service Workers. Khai thác Geolocation API và thuật toán không gian để tính toán vị trí GPS có độ chính xác cao.'
  },
  { 
    id: 6, 
    laptop: imgNavtRecruitment, 
    phone: imgVCQr, 
    title: 'Automated Workflow & Real-time Sync',
    desc: 'Thiết kế Engine quy trình tự động hóa linh hoạt bằng Node.js / C#. Tích hợp thuật toán tạo mã QR động và đồng bộ trạng thái realtime qua WebSocket/SignalR.'
  },
  { 
    id: 7, 
    laptop: imgPWebDetmold, 
    phone: imgPAppAttendance, 
    title: 'Multi-Tenant Enterprise Architecture',
    desc: 'Phát triển hệ thống kiến trúc Multi-Tenant, cho phép tùy biến sâu các nghiệp vụ đặc thù cho doanh nghiệp sản xuất quy mô lớn mà không phá vỡ logic Core.'
  },
  { 
    id: 8, 
    laptop: imgVcshow, 
    phone: imgMobileApp, 
    title: 'High-Throughput Big Data Handling',
    desc: 'Tối ưu hóa CSDL SQL Server bằng kỹ thuật Indexing và Partitioning để ghi nhận lượng cực lớn Audit Log mỗi giây. Broadcast dữ liệu real-time lên thiết bị IoT.'
  },
  { 
    id: 9, 
    laptop: imgPWebLogin, 
    phone: imgGPSCamera, 
    title: 'Security & Native Device Integration',
    desc: 'Sử dụng WebRTC truy cập camera thiết bị để xác thực sinh trắc học trực tiếp trên trình duyệt. Áp dụng mã hóa đường truyền chống giả mạo tọa độ GPS.'
  },
  { 
    id: 10, 
    laptop: imgPWebRequestCreate, 
    phone: imgPAppReport2, 
    title: 'JSON Schema Driven UI Generation',
    desc: 'Thiết kế hệ thống Component động tự động render UI dựa vào cấu hình JSON từ Backend, cho phép Admin tùy chỉnh giao diện hệ thống mà không cần chạm vào code.'
  },
  {
    id: 11,
    laptop: imgDPVN,
    phone: imgPAppGps,
    title: 'Cross-Platform API Orchestration',
    desc: 'Thiết kế hệ thống RESTful API linh hoạt đóng vai trò như một Orchestrator, giao tiếp xuyên suốt giữa CSDL lõi với trình duyệt web và di động của hàng ngàn công nhân.'
  }
];
const LAPTOP_IMGS = SLIDES.map(s => s.laptop);
const PHONE_IMGS = SLIDES.map(s => s.phone);

function ImageWithSkeleton({ src, alt, className, onClick, title, active }) {
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
        background: '#222', // Dark grey fallback
        zIndex: active ? 2 : 1
      }}
    >
      {!loaded && (
        <div className="skeleton-loader" style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 10, 
          background: 'linear-gradient(90deg, #222 25%, #333 50%, #222 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeleton-shimmer 1.5s infinite linear'
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
          objectFit: 'cover'
        }}
      />
    </div>
  );
}

function ProductShowcase({ current, setCurrent, onOpenLightbox, isLightboxOpen }) {
  // Preload all images
  useEffect(() => {
    [...LAPTOP_IMGS, ...PHONE_IMGS].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
      <div className="device-composite">
        {/* Laptop Frame */}
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

        {/* Phone Frame */}
        <div className="device-phone">
          <img src={phoneFrame} alt="Phone Frame" className="phone-frame-img" />
          <div className="device-phone__screen">
             {SLIDES.map((slide, idx) => (
              <ImageWithSkeleton 
                key={`phone-${slide.id}`}
                src={slide.phone} 
                alt={slide.title} 
                className={`device-img ${idx === current ? 'active' : ''}`}
                onClick={() => onOpenLightbox(PHONE_IMGS, idx)}
                title="Xem toàn màn hình"
                active={idx === current}
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

export default function ProductImageSection({ onOpenLightbox, isLightboxOpen }) {
  const { t } = useLanguage();
  const content = t.productImages;
  const [current, setCurrent] = useState(0);

  return (
    <section id="product-images" className="product-images-section" aria-labelledby="product-images-heading">
      {/* Blurred background corresponding to the current slide */}
      <div 
        className="product-images__bg-blur"
        style={{ backgroundImage: `url(${SLIDES[current].laptop})` }}
      />
      <div className="product-images__bg-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <header className="product-images__header">
          <h2 id="product-images-heading" className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </header>

        <div className="product-images__content">
          <ProductShowcase 
            current={current} 
            setCurrent={setCurrent} 
            onOpenLightbox={onOpenLightbox} 
            isLightboxOpen={isLightboxOpen}
          />
        </div>
      </div>
    </section>
  );
}
