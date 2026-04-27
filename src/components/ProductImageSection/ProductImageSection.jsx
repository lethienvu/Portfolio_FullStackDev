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

function ProductShowcase({ current, setCurrent, lightbox, setLightbox }) {
  useEffect(() => {
    const timer = setInterval(() => {
      if (!lightbox.isOpen) {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [lightbox.isOpen, setCurrent]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({ ...prev, index: (prev.index - 1 + SLIDES.length) % SLIDES.length }));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({ ...prev, index: (prev.index + 1) % SLIDES.length }));
  };

  return (
    <div className="product-showcase">
      <div className="device-composite">
        {/* Laptop Frame */}
        <div className="device-laptop laptop">
          <div className="screen">
            <div className="header"></div>
            <div className="screen-content">
              {SLIDES.map((slide, idx) => (
                <img 
                  key={`laptop-${slide.id}`}
                  src={slide.laptop} 
                  alt={slide.title} 
                  className={`device-img ${idx === current ? 'active' : ''}`}
                  onClick={() => setLightbox({ isOpen: true, type: 'laptop', index: idx })}
                  title="Xem toàn màn hình"
                />
              ))}
            </div>
          </div>
          <div className="keyboard"></div>
        </div>

        {/* Phone Frame */}
        <div className="device-phone">
          <img src={phoneFrame} alt="Phone Frame" className="phone-frame-img" />
          <div className="device-phone__screen">
             {SLIDES.map((slide, idx) => (
              <img 
                key={`phone-${slide.id}`}
                src={slide.phone} 
                alt={slide.title} 
                className={`device-img ${idx === current ? 'active' : ''}`}
                onClick={() => setLightbox({ isOpen: true, type: 'phone', index: idx })}
                title="Xem toàn màn hình"
              />
            ))}
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

      {lightbox.isOpen && (
        <div className="product-lightbox" onClick={() => setLightbox(prev => ({ ...prev, isOpen: false }))}>
          <div className="product-lightbox__header" onClick={e => e.stopPropagation()}>
            <div className="product-lightbox__logo-container">
              <img src="../../../public/icons.svg" alt="Logo portfolio" className="product-lightbox__logo-icon" />
              <div className="product-lightbox__logo-text">
                <span className="product-lightbox__logo-name">Lê Thiên Vũ</span>
                <span className="product-lightbox__logo-sub">Portfolio</span>
              </div>
            </div>
            <button className="product-lightbox__close" onClick={() => setLightbox(prev => ({ ...prev, isOpen: false }))} title="Đóng">×</button>
          </div>

          <div className="product-lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.type === 'laptop' ? SLIDES[lightbox.index].laptop : SLIDES[lightbox.index].phone} alt="Full screen view" className="product-lightbox__img" />
          </div>

          <div className="product-lightbox__center-nav" onClick={e => e.stopPropagation()}>
            <button className="product-lightbox__nav-inline prev" onClick={handlePrev} title="Trước">‹</button>
            <span className="product-lightbox__counter">
              {lightbox.index + 1} / {SLIDES.length}
            </span>
            <button className="product-lightbox__nav-inline next" onClick={handleNext} title="Tiếp">›</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductImageSection() {
  const { t } = useLanguage();
  const content = t.productImages;
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState({ isOpen: false, type: 'laptop', index: 0 });

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
            lightbox={lightbox} 
            setLightbox={setLightbox} 
          />
        </div>
      </div>
    </section>
  );
}
