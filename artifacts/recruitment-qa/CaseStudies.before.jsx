import { useEffect, useRef, useState } from 'react';
import './CaseStudies.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import ProductImageSection from '../ProductImageSection/ProductImageSection.jsx';
import paradisePreview from '../../assets/pWeb_dashboard.webp';
import vaoCaPreview from '../../assets/pApp-GPS.webp';
import leavePreview from '../../assets/request1.webp';
import hiringPreview from '../../assets/navt-recruitment.webp';
import vaoCaLandingPreview from '../../assets/VaoCa-LandingPage.webp';
import lichienLogo from '../../assets/customer/lichien.png';
import steelFlowerLogo from '../../assets/customer/STEALFLOWER.removebg-preview.svg';
import tripodLogo from '../../assets/customer/tripodLogo.svg';
import saigonWickerLogo from '../../assets/customer/sgw-logo.png';
import vietUcLogo from '../../assets/customer/VietUc_Logo.png';
import lotteLogo from '../../assets/customer/lotte.webp';

const IMAGES = [paradisePreview, vaoCaPreview, vaoCaPreview, vaoCaLandingPreview, leavePreview, hiringPreview, lichienLogo, steelFlowerLogo, tripodLogo, saigonWickerLogo, vietUcLogo, lotteLogo];
const DETAILS = {
  vi: { title: 'Các dự án nổi bật', subtitle: 'Các dự án phát triển và triển khai được chọn lọc từ hồ sơ năng lực. Hình ảnh đã được đơn giản hóa để bảo vệ dữ liệu khách hàng.', view: 'Xem case study', close: 'Đóng chi tiết dự án', role: 'Vai trò', problem: 'Bài toán', solution: 'Giải pháp', outcome: 'Kết quả', stack: 'Nền tảng kỹ thuật', items: [
    { title: 'Paradise HR — Single-Page Web Application', label: 'Nền tảng HR doanh nghiệp', slide: 1, role: 'Kỹ sư phần mềm & Chuyên viên triển khai ERP', problem: 'Chuẩn hóa vận hành nhân sự phức tạp cho doanh nghiệp đa mô hình.', solution: 'Chuyển 150+ quy trình thành đặc tả, điều phối triển khai module và tối ưu trải nghiệm nghiệp vụ.', outcome: 'Hỗ trợ 10+ đợt triển khai, phục vụ tổng cộng 14.000+ người dùng cuối.', stack: ['JavaScript', 'Java', 'SQL Server', 'REST API'] },
    { title: 'Chấm công GPS', label: 'Chấm công và xác thực vị trí', slide: 4, role: 'Full-stack product engineering', problem: 'Cần ghi nhận chấm công ngoài hiện trường có kiểm tra vị trí và thiết bị.', solution: 'Tích hợp Geolocation, xác thực vị trí và luồng dữ liệu có kiểm tra trạng thái.', outcome: 'Tạo quy trình chấm công di động phù hợp cho môi trường doanh nghiệp.', stack: ['PWA', 'Geolocation API', 'REST API', 'Validation'] },
    { title: 'Vào Ca — Ứng dụng quản lý nhân sự', label: 'PWA quản lý ca làm việc', slide: 4, role: 'Phát triển luồng nghiệp vụ mobile web', problem: 'Nhân viên cần xem lịch ca và thao tác ổn định trong điều kiện kết nối không ổn định.', solution: 'Thiết kế PWA ưu tiên offline, đồng bộ trạng thái và kiểm tra dữ liệu theo luồng ca.', outcome: 'Đưa trải nghiệm quản lý ca lên thiết bị di động.', stack: ['PWA', 'IndexedDB', 'Service Worker', 'REST API'] },
    { title: 'Vào Ca — Website landing page', label: 'Website giới thiệu ứng dụng', slide: 13, role: 'Thiết kế và phát triển landing page', problem: 'Cần điểm chạm rõ ràng để giới thiệu giá trị và luồng sử dụng sản phẩm.', solution: 'Xây dựng landing page responsive theo định hướng lợi ích sản phẩm và CTA.', outcome: 'Tạo trải nghiệm giới thiệu nhất quán trên desktop và di động.', stack: ['Landing Page', 'Responsive Web', 'UI/UX'] },
    { title: 'Hệ thống đăng ký nghỉ phép đa nền tảng', label: 'Đơn từ và phê duyệt nội bộ', slide: 7, role: 'Phát triển luồng request và approval', problem: 'Quy trình đăng ký, phê duyệt nghỉ phép cần rõ trạng thái và vận hành xuyên nền tảng.', solution: 'Thiết kế form, luồng phê duyệt và trạng thái xử lý có kiểm tra dữ liệu.', outcome: 'Chuẩn hóa thao tác yêu cầu nghỉ phép nội bộ.', stack: ['Workflow', 'REST API', 'UI/UX', 'Approval'] },
    { title: 'Paradise Hiring — Phân hệ tuyển dụng', label: 'Quản lý nhu cầu và ứng viên', slide: 5, role: 'Phân tích và phát triển phân hệ tuyển dụng', problem: 'Quản lý nhu cầu tuyển dụng, hồ sơ ứng viên và các bước phỏng vấn trong một luồng thống nhất.', solution: 'Xây dựng các màn hình nghiệp vụ, luồng yêu cầu và theo dõi tiến độ tuyển dụng.', outcome: 'Số hóa thông tin tuyển dụng và hỗ trợ phối hợp giữa các bên liên quan.', stack: ['HRM', 'Workflow', 'SQL Server', 'REST API'] },
    { title: 'Lichien Vietnam Paper Products', label: 'Triển khai HRM', slide: 6, role: 'Triển khai & tư vấn HRM', problem: 'Chuẩn hóa nhân sự, chấm công, phân ca và dữ liệu vận hành cho nhà máy giấy.', solution: 'Khảo sát nghiệp vụ, cấu hình luồng HRM và hướng dẫn người dùng vận hành.', outcome: 'Thiết lập nền tảng HRM phù hợp bối cảnh vận hành sản xuất.', stack: ['HRM', 'Timekeeping', 'Shift Planning', 'Training'] },
    { title: 'Haiphong Steel Flower', label: 'Triển khai HRM', slide: 6, role: 'Khảo sát & triển khai', problem: 'Môi trường sản xuất cần quy trình nhân sự và dữ liệu vận hành nhất quán.', solution: 'Khảo sát, cấu hình quy trình và đồng hành hướng dẫn sử dụng.', outcome: 'Hỗ trợ đưa hệ thống HRM vào vận hành.', stack: ['HRM', 'Workflow', 'User Training'] },
    { title: 'Tripod Vietnam', label: 'Triển khai HRM đa nhà máy', slide: 7, role: 'Điều phối triển khai', problem: 'Hai nhà máy cần cấu hình riêng nhưng báo cáo nhất quán.', solution: 'Điều phối cấu hình theo đơn vị và chuẩn hóa dữ liệu báo cáo.', outcome: 'Hỗ trợ vận hành HRM đồng bộ giữa các nhà máy.', stack: ['HRM', 'Multi-site', 'Reporting'] },
    { title: 'Saigon Wicker', label: 'Tư vấn & triển khai ERP', slide: 7, role: 'Tư vấn nghiệp vụ ERP', problem: 'Các quy trình CRM, bán hàng, kho, mua hàng, sản xuất, kế toán và HRM cần liên kết.', solution: 'Khảo sát nghiệp vụ và tư vấn phạm vi triển khai ERP xuyên phòng ban.', outcome: 'Xác lập định hướng giải pháp theo chuỗi vận hành doanh nghiệp.', stack: ['ERP', 'CRM', 'Manufacturing', 'Accounting'] },
    { title: 'Việt Úc', label: 'Tư vấn & triển khai ERP', slide: 8, role: 'Tư vấn giải pháp ERP', problem: 'Doanh nghiệp sản xuất cần liên kết quy trình từ CRM đến kế toán.', solution: 'Phân tích yêu cầu và tư vấn luồng CRM, bán hàng, kho, mua hàng, sản xuất, kế toán.', outcome: 'Hỗ trợ định hình giải pháp ERP cho bối cảnh sản xuất.', stack: ['ERP', 'CRM', 'Inventory', 'Manufacturing'] },
    { title: 'Lotte Vietnam', label: 'Module Audit', slide: 8, role: 'Triển khai module Audit', problem: 'Cần theo dõi và truy vết hoạt động trong hệ thống.', solution: 'Triển khai module Audit, hỗ trợ thiết lập cơ chế giám sát và truy vết.', outcome: 'Tăng khả năng theo dõi hoạt động hệ thống.', stack: ['Audit Log', 'Traceability', 'SQL Server'] },
  ] },
  en: { title: 'Featured projects', subtitle: 'Selected development and implementation projects from my professional profile. Screens have been simplified to protect client data.', view: 'View case study', close: 'Close project details', role: 'Role', problem: 'Problem', solution: 'Solution', outcome: 'Outcome', stack: 'Technical foundation', items: [
    { title: 'Paradise HR — Single-Page Web Application', label: 'Enterprise HR platform', slide: 1, role: 'Software Engineer & ERP Implementation Specialist', problem: 'Standardize complex HR operations across enterprise models.', solution: 'Translated 150+ workflows into specifications and coordinated module delivery.', outcome: 'Supported 10+ implementations serving 14,000+ end users.', stack: ['JavaScript', 'Java', 'SQL Server', 'REST API'] },
    { title: 'GPS Timekeeping', label: 'Location-verified attendance', slide: 4, role: 'Full-stack product engineering', problem: 'Field attendance required location and device validation.', solution: 'Integrated geolocation, validation, and state-aware flows.', outcome: 'Delivered a mobile attendance workflow for enterprise use.', stack: ['PWA', 'Geolocation API', 'REST API', 'Validation'] },
    { title: 'Vào Ca — Human Resources Management Application', label: 'Shift-management PWA', slide: 4, role: 'Mobile web workflow development', problem: 'Staff needed dependable shift operations under unreliable connectivity.', solution: 'Built an offline-oriented PWA with state synchronization.', outcome: 'Brought shift management to mobile devices.', stack: ['PWA', 'IndexedDB', 'Service Worker', 'REST API'] },
    { title: 'Vào Ca — Landing Page', label: 'Product website', slide: 13, role: 'Landing page design and development', problem: 'The product needed a clear value and conversion entry point.', solution: 'Built a responsive benefit-led landing page with CTA.', outcome: 'Created a cohesive product introduction across devices.', stack: ['Landing Page', 'Responsive Web', 'UI/UX'] },
    { title: 'Multi-platform Leave Request System', label: 'Internal request and approval', slide: 7, role: 'Request and approval workflow development', problem: 'Leave requests needed clear status and cross-platform operation.', solution: 'Designed data-validated forms, approval flows, and processing states.', outcome: 'Standardized internal leave-request operations.', stack: ['Workflow', 'REST API', 'UI/UX', 'Approval'] },
    { title: 'Paradise Hiring — Recruitment Module', label: 'Hiring requisition and candidate management', slide: 5, role: 'Recruitment module analysis and development', problem: 'Hiring requisitions, candidates, and interviews needed one coordinated flow.', solution: 'Built operational screens and recruitment workflow tracking.', outcome: 'Digitized hiring information and stakeholder collaboration.', stack: ['HRM', 'Workflow', 'SQL Server', 'REST API'] },
    { title: 'Lichien Vietnam Paper Products', label: 'HRM implementation', slide: 6, role: 'HRM implementation & consulting', problem: 'A paper mill needed standardized HR records, timekeeping, shift planning, and operations data.', solution: 'Conducted discovery, configured HRM workflows, and enabled users.', outcome: 'Established an HRM foundation for manufacturing operations.', stack: ['HRM', 'Timekeeping', 'Shift Planning', 'Training'] },
    { title: 'Haiphong Steel Flower', label: 'HRM implementation', slide: 6, role: 'Discovery & implementation', problem: 'A production environment needed consistent people processes and operational data.', solution: 'Conducted discovery, configured workflows, and supported user enablement.', outcome: 'Supported HRM operational rollout.', stack: ['HRM', 'Workflow', 'User Training'] },
    { title: 'Tripod Vietnam', label: 'Multi-site HRM rollout', slide: 7, role: 'Implementation coordination', problem: 'Two factories needed distinct configurations with consistent reporting.', solution: 'Coordinated site-specific configuration and reporting data standards.', outcome: 'Supported aligned HRM operations across plants.', stack: ['HRM', 'Multi-site', 'Reporting'] },
    { title: 'Saigon Wicker', label: 'ERP consulting & implementation', slide: 7, role: 'ERP business consultant', problem: 'CRM, sales, inventory, procurement, manufacturing, accounting, and HRM processes needed connection.', solution: 'Mapped operations and advised ERP delivery across functions.', outcome: 'Established solution direction for enterprise operations.', stack: ['ERP', 'CRM', 'Manufacturing', 'Accounting'] },
    { title: 'Viet Uc', label: 'ERP consulting & implementation', slide: 8, role: 'ERP solution consultant', problem: 'A manufacturer needed connected processes from CRM through accounting.', solution: 'Analyzed requirements and advised CRM, sales, inventory, procurement, manufacturing, and accounting flows.', outcome: 'Helped shape an ERP solution for manufacturing.', stack: ['ERP', 'CRM', 'Inventory', 'Manufacturing'] },
    { title: 'Lotte Vietnam', label: 'Audit module', slide: 8, role: 'Audit module implementation', problem: 'System activities needed monitoring and traceability.', solution: 'Implemented the Audit module and supported monitoring configuration.', outcome: 'Improved system activity traceability.', stack: ['Audit Log', 'Traceability', 'SQL Server'] },
  ] },
};

export default function CaseStudies({ onOpenLightbox, isLightboxOpen }) {
  const { lang } = useLanguage();
  const content = DETAILS[lang] || DETAILS.en;
  const [activeIndex, setActiveIndex] = useState(null);
  const closeRef = useRef(null);
  const item = activeIndex === null ? null : content.items[activeIndex];
  useEffect(() => { if (!item) return undefined; closeRef.current?.focus(); const onKeyDown = (event) => { if (event.key === 'Escape') setActiveIndex(null); }; window.addEventListener('keydown', onKeyDown); return () => window.removeEventListener('keydown', onKeyDown); }, [item]);
  return <section id="case-studies" className="case-studies" aria-labelledby="case-studies-heading"><div className="container">
    <header className="case-studies__header"><h2 id="case-studies-heading" className="section-title">{content.title}</h2><p className="section-subtitle">{content.subtitle}</p></header>
    <div className="case-studies__grid">
      {content.items.map((project, index) => (
        <article className="case-study-card" key={project.title}>
          <div className={`case-study-card__media${index >= 6 ? ' case-study-card__media--logo' : ''}`}>
            <img src={IMAGES[index]} alt="" width="900" height="560" loading="lazy" decoding="async" />
          </div>
          <div className="case-study-card__body">
            <h3 id={`project-title-${index}`}>{project.title}</h3>
            <p className="case-study-card__category">{project.label}</p>
            <p className="case-study-card__role">{project.role}</p>
            <ul className="case-study-card__tech" aria-label={content.stack}>
              {project.stack.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <button type="button" aria-haspopup="dialog" aria-labelledby={`project-cta-${index} project-title-${index}`} onClick={() => setActiveIndex(index)}>
              <span id={`project-cta-${index}`}>{content.view}</span>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </button>
          </div>
        </article>
      ))}
    </div>
  </div>{item && <div className="case-study-dialog" role="dialog" aria-modal="true" aria-labelledby="case-study-dialog-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}><div className="case-study-dialog__panel"><button ref={closeRef} type="button" className="case-study-dialog__close" onClick={() => setActiveIndex(null)} aria-label={content.close}>×</button><div className="case-study-dialog__visual"><ProductImageSection embedded current={item.slide} setCurrent={() => {}} onOpenLightbox={onOpenLightbox} isLightboxOpen={isLightboxOpen} /></div><article className="case-study-dialog__content"><p className="case-study__label">{item.label}</p><h3 id="case-study-dialog-title">{item.title}</h3><dl className="case-study__details-list"><div><dt>{content.role}</dt><dd>{item.role}</dd></div><div><dt>{content.problem}</dt><dd>{item.problem}</dd></div><div><dt>{content.solution}</dt><dd>{item.solution}</dd></div><div><dt>{content.outcome}</dt><dd>{item.outcome}</dd></div></dl><p className="case-study__stack-label">{content.stack}</p><ul className="case-study__stack">{item.stack.map((skill) => <li key={skill}>{skill}</li>)}</ul></article></div></div>}</section>;
}
