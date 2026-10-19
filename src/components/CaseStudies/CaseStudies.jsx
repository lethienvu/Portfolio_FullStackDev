import './CaseStudies.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import paradisePreview from '../../assets/pWeb_dashboard.webp';
import vaoCaPreview from '../../assets/pApp-GPS.webp';
import performancePreview from '../../assets/pWeb-employeeList.webp';

const CONTENT = {
  vi: {
    eyebrow: 'Case studies',
    title: 'Ba bài toán tôi đã trực tiếp giải quyết',
    subtitle: 'Tóm tắt theo bối cảnh, vai trò, giải pháp và kết quả. Hình ảnh đã được đơn giản hóa để bảo vệ dữ liệu khách hàng.',
    role: 'Vai trò', problem: 'Bài toán', solution: 'Giải pháp', outcome: 'Kết quả', stack: 'Nền tảng kỹ thuật',
    items: [
      { title: 'Paradise HR', label: 'Nền tảng HR doanh nghiệp', image: paradisePreview, alt: 'Giao diện dashboard Paradise HR đã đơn giản hóa', role: 'Software Engineer | ERP Implementation Specialist — Kỹ sư Phần mềm | Chuyên viên Triển khai ERP; kết nối nghiệp vụ HR với đội phát triển và khách hàng.', problem: 'Chuẩn hóa các quy trình HR phức tạp cho nhiều doanh nghiệp với nhu cầu vận hành khác nhau.', solution: 'Phân tích yêu cầu, chuyển 150+ quy trình thành đặc tả, điều phối triển khai module và tối ưu trải nghiệm nghiệp vụ.', outcome: 'Hỗ trợ 10+ đợt triển khai, phục vụ tổng cộng 14.000+ người dùng cuối.', stack: ['JavaScript', 'Java', 'SQL Server', 'REST API', 'Business Analysis'] },
      { title: 'Vào Ca', label: 'PWA chấm công và quản lý ca', image: vaoCaPreview, alt: 'Giao diện PWA Vào Ca đã đơn giản hóa', role: 'Full-stack product engineering cho luồng ca làm việc trên web di động.', problem: 'Nhân viên cần chấm công, xem lịch ca và thao tác trong điều kiện kết nối không ổn định.', solution: 'Thiết kế PWA ưu tiên offline, đồng bộ trạng thái, xác thực vị trí và luồng quản lý ca có kiểm tra dữ liệu.', outcome: 'Đưa trải nghiệm thao tác ca làm việc lên thiết bị di động với quy trình phù hợp môi trường doanh nghiệp.', stack: ['PWA', 'IndexedDB', 'Service Worker', 'Geolocation API', 'REST API'] },
      { title: 'Hiệu năng danh sách & Audit Log', label: 'Performance engineering', image: performancePreview, alt: 'Danh sách nhân viên cuộn ảo đã đơn giản hóa', role: 'Thiết kế và tối ưu các thành phần UI, truy vấn và cấu trúc dữ liệu cho màn hình dữ liệu lớn.', problem: 'Danh sách nhân sự và audit log có khối lượng lớn dễ làm chậm thao tác và báo cáo.', solution: 'Áp dụng virtual scrolling, tối ưu T-SQL/stored procedure, cùng indexing và partitioning phù hợp cho audit log.', outcome: 'Demo UI xử lý 10.000+ nodes ở 60 FPS; báo cáo phức tạp được rút ngắn từ vài phút xuống vài giây trong các luồng đã tối ưu.', stack: ['Virtual Scrolling', 'SQL Server', 'T-SQL', 'Performance Profiling', 'SPA'] },
    ],
  },
  en: {
    eyebrow: 'Case studies', title: 'Three problems I directly helped solve', subtitle: 'A concise view of context, role, solution, and outcome. Screens have been simplified to protect client data.',
    role: 'Role', problem: 'Problem', solution: 'Solution', outcome: 'Outcome', stack: 'Technical foundation',
    items: [
      { title: 'Paradise HR', label: 'Enterprise HR platform', image: paradisePreview, alt: 'Simplified Paradise HR dashboard', role: 'Software Engineer | ERP Implementation Specialist — Kỹ sư Phần mềm | Chuyên viên Triển khai ERP; connecting HR operations, engineering, and enterprise clients.', problem: 'Standardize complex HR workflows across enterprises with different operating requirements.', solution: 'Analyzed requirements, translated 150+ workflows into specifications, coordinated module delivery, and improved operational UX.', outcome: 'Supported 10+ implementations serving a combined 14,000+ end users.', stack: ['JavaScript', 'Java', 'SQL Server', 'REST API', 'Business Analysis'] },
      { title: 'Vào Ca', label: 'Timekeeping and shift PWA', image: vaoCaPreview, alt: 'Simplified Vào Ca PWA interface', role: 'Full-stack product engineering for mobile-web shift workflows.', problem: 'Employees needed to check in, view shifts, and complete tasks under unreliable connectivity.', solution: 'Designed an offline-oriented PWA with state synchronization, location validation, and data-checked shift flows.', outcome: 'Brought a mobile-first shift-work experience to an enterprise operating environment.', stack: ['PWA', 'IndexedDB', 'Service Worker', 'Geolocation API', 'REST API'] },
      { title: 'Large-list & Audit-log performance', label: 'Performance engineering', image: performancePreview, alt: 'Simplified virtual-scrolling employee list', role: 'Designed and optimized UI components, queries, and data structures for high-volume screens.', problem: 'Large employee lists and audit logs can degrade everyday operations and reporting.', solution: 'Applied virtual scrolling, optimized T-SQL/stored procedures, and used indexing and partitioning patterns for audit logs.', outcome: 'UI demo handles 10,000+ nodes at 60 FPS; optimized reporting flows went from minutes to seconds.', stack: ['Virtual Scrolling', 'SQL Server', 'T-SQL', 'Performance Profiling', 'SPA'] },
    ],
  },
};

export default function CaseStudies() {
  const { lang } = useLanguage();
  const content = CONTENT[lang] || CONTENT.en;

  return (
    <section id="case-studies" className="case-studies" aria-labelledby="case-studies-heading">
      <div className="container">
        <header className="case-studies__header">
          <p className="case-studies__eyebrow">{content.eyebrow}</p>
          <h2 id="case-studies-heading" className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </header>
        <div className="case-studies__grid">
          {content.items.map((item) => (
            <article className="case-study" key={item.title}>
              <img className="case-study__image" src={item.image} alt={item.alt} width="900" height="560" loading="lazy" decoding="async" />
              <div className="case-study__body">
                <p className="case-study__label">{item.label}</p>
                <h3>{item.title}</h3>
                <dl className="case-study__details">
                  <div><dt>{content.role}</dt><dd>{item.role}</dd></div>
                  <div><dt>{content.problem}</dt><dd>{item.problem}</dd></div>
                  <div><dt>{content.solution}</dt><dd>{item.solution}</dd></div>
                  <div><dt>{content.outcome}</dt><dd>{item.outcome}</dd></div>
                </dl>
                <p className="case-study__stack-label">{content.stack}</p>
                <ul className="case-study__stack">{item.stack.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                <a className="case-study__cta" href="#contact">{lang === 'vi' ? 'Trao đổi về dự án' : 'Discuss a similar project'}<span aria-hidden="true">›</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
