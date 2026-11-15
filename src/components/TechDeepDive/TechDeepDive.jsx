import { useState } from 'react';
import './TechDeepDive.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import { HtmlText } from '../HtmlText.jsx';
import softwareBackground from '../../assets/ParadiseHR_WebApp/pWeb_dashboard.webp';
import deliveryBackground from '../../assets/experienceBg/thienvu_3.webp';
import aiBackground from '../../assets/ai_knowledge.webp';
import professionalBackground from '../../assets/experienceBg/thienVu_4.webp';
import vietTinLogo from '../../assets/vtsLogo.svg';
import paradiseProject from '../../assets/ParadiseHR_WebApp/pWeb_dashboard.webp';
import vaoCaProject from '../../assets/ChamCongGPS/pApp-GPS.webp';
import vaoCaWebProject from '../../assets/VaoCaLandingPage/VaoCa-LandingPage.webp';
import leaveRequestProject from '../../assets/QuanLyNghiPhep/request1.webp';
import hiringProject from '../../assets/TuyenDung/navt-recruitment.webp';
import lichienLogo from '../../assets/customer/lichien.webp';
import steelFlowerLogo from '../../assets/customer/STEALFLOWER.removebg-preview.svg';
import tripodLogo from '../../assets/customer/tripodLogo.svg';
import saigonWickerLogo from '../../assets/customer/sgw-logo.webp';
import vietUcLogo from '../../assets/customer/VietUc_Logo.webp';
import lotteLogo from '../../assets/customer/lotte.webp';

const KNOWLEDGE_AREAS = {
  vi: [
    ['ERP Domain Knowledge', 'Tri thức nghiệp vụ và quy trình vận hành doanh nghiệp tích lũy qua phát triển, triển khai và tư vấn giải pháp ERP. Phạm vi đã có kinh nghiệm gồm CRM, Sales Order, Purchase Order, Warehouse Management, Manufacturing, Asset Management, Finance & Accounting và Human Resources Management.', ['CRM', 'Sales Order', 'Purchase Order', 'Warehouse Management', 'Manufacturing', 'Asset Management', 'Finance & Accounting', 'HRM']],
    ['Software Engineering Knowledge', 'Kiến thức xây dựng ứng dụng web và hệ thống nghiệp vụ: frontend component-based, API integration, dữ liệu, source control, hiệu năng và kiểm thử tự động.', ['JavaScript / React', 'Java / Python', 'REST APIs', 'SQL Server / NoSQL', 'Git / GitHub', 'Playwright', 'UI/UX / PWA']],
    ['Solution Delivery Knowledge', 'Khung tri thức đưa bài toán nghiệp vụ thành giải pháp có thể vận hành: khảo sát hiện trạng, phân tích yêu cầu, thiết kế giải pháp, lập kế hoạch triển khai và hỗ trợ go-live.', ['AS-IS / TO-BE', 'Requirements analysis', 'Solution design', 'Implementation planning', 'Data readiness', 'Go-live support']],
    ['AI Systems & Knowledge Engineering', 'Thiết kế hệ thống AI có căn cứ: tổ chức Knowledge Base, retrieval/RAG, đánh giá đầu ra, Loop Engine và Human-in-the-Loop với checkpoint trách nhiệm rõ ràng.', ['Knowledge Base', 'RAG / Retrieval', 'Grounded responses', 'Prompt engineering', 'Output verification', 'Loop Engine', 'Human-in-the-Loop']],
    ['AI-enabled Workflows', 'Ứng dụng AI Agent để tăng tốc phát triển phần mềm, nghiên cứu giải pháp kỹ thuật và tự động hóa công việc lặp lại như soạn email, biên bản, hợp đồng, hướng dẫn và báo cáo.', ['AI Agents', 'Software acceleration', 'Technical research', 'Email drafting', 'Meeting notes', 'Contracts', 'Guides & reports', 'Workflow automation']],
  ],
  en: [
    ['ERP Domain Knowledge', 'Enterprise process knowledge built through ERP development, implementation, and solution consulting. Experience includes CRM, Sales Order, Purchase Order, Warehouse Management, Manufacturing, Asset Management, Finance & Accounting, and Human Resources Management.', ['CRM', 'Sales Order', 'Purchase Order', 'Warehouse Management', 'Manufacturing', 'Asset Management', 'Finance & Accounting', 'HRM']],
    ['Software Engineering Knowledge', 'Knowledge for web and business-system delivery: component-based frontend work, API integration, data, source control, performance, and automation testing.', ['JavaScript / React', 'Java / Python', 'REST APIs', 'SQL Server / NoSQL', 'Git / GitHub', 'Playwright', 'UI/UX / PWA']],
    ['Solution Delivery Knowledge', 'Turning business problems into operable solutions through discovery, requirements analysis, solution design, implementation planning, and go-live support.', ['AS-IS / TO-BE', 'Requirements analysis', 'Solution design', 'Implementation planning', 'Data readiness', 'Go-live support']],
    ['AI Systems & Knowledge Engineering', 'Designing evidence-based AI systems with Knowledge Bases, retrieval/RAG, output evaluation, Loop Engines, and accountable Human-in-the-Loop checkpoints.', ['Knowledge Base', 'RAG / Retrieval', 'Grounded responses', 'Prompt engineering', 'Output verification', 'Loop Engine', 'Human-in-the-Loop']],
    ['AI-enabled Workflows', 'Using AI Agents to accelerate software delivery, research technical options, and automate repetitive work such as emails, minutes, contracts, guides, and reports.', ['AI Agents', 'Software acceleration', 'Technical research', 'Email drafting', 'Meeting notes', 'Contracts', 'Guides & reports', 'Workflow automation']],
  ],
};

const AI_KNOWLEDGE_VIEW = {
  vi: {
    eyebrow: 'Tri thức có cấu trúc · AI-ready knowledge',
    title: 'Knowledge Base cho AI',
    subtitle: 'Bản đồ tri thức được tổ chức theo domain, kỹ thuật, delivery và AI workflow để AI Agent có thể truy xuất, đối chiếu và hỗ trợ công việc trên nền tảng có căn cứ.'
  },
  en: {
    eyebrow: 'Structured knowledge · AI-ready knowledge',
    title: 'Knowledge Base for AI',
    subtitle: 'A knowledge map organized across domain, engineering, delivery, and AI workflows so AI Agents can retrieve, validate, and support work with grounded context.'
  }
};

const HUMAN_SKILLS = {
  vi: {
    eyebrow: 'Hồ sơ năng lực · Professional profile', title: 'Năng lực chuyên môn', subtitle: 'Bốn nhóm năng lực cốt lõi giúp nhà tuyển dụng đánh giá nhanh phạm vi chuyên môn và cách tôi tạo giá trị trong dự án.',
    groups: [
      ['Phát triển phần mềm · Software Development', 'Phát triển ứng dụng web và hệ thống nghiệp vụ, từ thiết kế giao diện, xây dựng chức năng đến tích hợp và tối ưu dữ liệu.', [
        ['Java · Python · JavaScript', 'Phát triển logic nghiệp vụ, xử lý dữ liệu và automation workflow.'],
        ['HTML · CSS · ReactJS', 'Xây dựng giao diện responsive, component-based và SPA.'],
        ['UI/UX với Figma · Affinity', 'Thiết kế wireframe, user flow và bàn giao giao diện cho phát triển.'],
        ['REST APIs & Backend Integration', 'Tích hợp API, xử lý luồng dữ liệu và lỗi phía client.'],
        ['SQL Server · NoSQL', 'Thiết kế truy vấn, tối ưu dữ liệu vận hành và báo cáo.'],
        ['Git · GitHub', 'Quản lý source code, branch và phối hợp phát triển.'],
        ['Playwright & AI-assisted Testing', 'Thiết kế automation test, debug và kiểm chứng kết quả hỗ trợ bởi AI.']
      ]],
      ['Triển khai dự án · Project Delivery', 'Kinh nghiệm triển khai phân hệ ERP và vận dụng vòng đời phát triển phần mềm từ khảo sát đến vận hành.', [
        ['Phân hệ ERP đã có kinh nghiệm triển khai', 'ERP Modules', [['Quản lý quan hệ khách hàng (CRM)', 'Quản lý thông tin, tương tác và hành trình khách hàng.'], ['Quản lý đơn hàng bán (SO)', 'Quản lý đơn hàng bán'], ['Quản lý đơn hàng mua (PO)', 'Quản lý đơn hàng mua'], ['Quản lý kho (WM)', 'Quản lý kho'], ['Quản lý sản xuất (M)', 'Quản lý sản xuất'], ['Quản lý tài sản (AM)', 'Quản lý tài sản'], ['Tài chính & kế toán (FA)', 'Tài chính - kế toán'], ['Quản lý nhân sự (HRM)', 'Quản lý nhân sự']]],
        ['Khảo sát hiện trạng & phân tích yêu cầu', 'Khảo sát AS-IS, xác định TO-BE, phạm vi và tiêu chí nghiệm thu.'],
        ['Lập kế hoạch triển khai', 'Xác định mốc, phụ thuộc, rủi ro và kế hoạch bàn giao.'],
        ['Thiết kế giải pháp phần mềm', 'Chuyển yêu cầu nghiệp vụ thành luồng xử lý, đặc tả và phương án tích hợp phù hợp.'],
        ['Go-live & cải tiến vận hành', 'Hỗ trợ chuyển đổi, xử lý sự cố ban đầu và theo dõi cải tiến sau vận hành.']
      ]],
      ['AI ứng dụng & Tự động hóa thông minh · Applied AI & Intelligent Automation', 'Ứng dụng AI có chủ đích, luôn đánh giá và kiểm chứng đầu ra.', [
        ['Prompt Engineering', 'Soạn prompt có cấu trúc cho phân tích, tài liệu và công việc kỹ thuật.'],
        ['Đánh giá & kiểm chứng đầu ra AI', 'Đối chiếu nguồn, kiểm tra logic và thực hiện human review trước khi dùng.'],
        ['Thiết kế Loop Engine & Human-in-the-Loop', 'Thiết kế workflow lặp có checkpoint, phân vai rõ ràng giữa AI và người chịu trách nhiệm.'],
        ['Xây dựng Knowledge Base với RAG', 'Tổ chức nguồn tri thức, retrieval và grounding để AI trả lời có căn cứ.'],
        ['AI Agent cho công việc lặp lại', 'Hỗ trợ soạn email, biên bản, hợp đồng, hướng dẫn sử dụng và tài liệu báo cáo.'],
        ['Tăng tốc phát triển phần mềm', 'Tăng tốc quá trình phát triển phần mềm bằng hỗ trợ AI trong các tác vụ phù hợp.'],
        ['Tìm kiếm giải pháp kỹ thuật', 'Nghiên cứu và so sánh phương án xử lý vấn đề kỹ thuật nhanh hơn.'],
        ['Tối ưu quy trình dự án', 'Chuẩn hóa và tự động hóa các bước lặp lại để tối ưu quy trình làm việc trong dự án.']
      ]],
      ['Năng lực chuyên nghiệp · Professional Skills', 'Cộng tác hiệu quả với đội ngũ, khách hàng và stakeholder.', [
        ['Giao tiếp stakeholder', 'Trao đổi rõ ràng về yêu cầu, phương án và quyết định dự án.'],
        ['Xác định đúng vấn đề & giải quyết vấn đề', 'Phân tích nguyên nhân, làm rõ vấn đề cần xử lý, đưa ra phương án khả thi và theo dõi kết quả.'],
        ['Tư duy phản biện', 'Đặt câu hỏi, kiểm tra giả định và đánh giá phương án trước khi ra quyết định.'],
        ['Khả năng thích nghi', 'Điều chỉnh cách làm theo bối cảnh sản phẩm, dự án và thay đổi ưu tiên.'],
        ['Tư duy sản phẩm', 'Cân bằng nhu cầu người dùng, mục tiêu nghiệp vụ và tính khả thi kỹ thuật.'],
        ['Khả năng làm việc nhóm', 'Phối hợp hiệu quả với nghiệp vụ, kỹ thuật và các bên liên quan trong quá trình delivery.']
      ]]
    ]
  },
  en: {
    eyebrow: 'Professional capabilities', title: 'Skills & knowledge', subtitle: 'Four core capability areas with clear application scope and proficiency signals for recruiters.',
    groups: [
      ['Software Development · Phát triển phần mềm', 'Developing web applications and business systems, from interface design and feature development to data integration and optimization.', [['Java · Python · JavaScript', 'Business logic, data processing, and workflow automation.'], ['HTML · CSS · ReactJS', 'Responsive, component-based interfaces and SPAs.'], ['UI/UX with Figma · Affinity', 'Wireframes, user flows, and design-to-development handoff.'], ['REST APIs & Backend Integration', 'API integration, data flows, and client-side error handling.'], ['SQL Server · NoSQL', 'Operational queries, data optimization, and reporting.'], ['Git · GitHub', 'Source control, branches, and development collaboration.'], ['Playwright & AI-assisted Testing', 'Automation test design, debugging, and AI-assisted verification.']]],
      ['Project Delivery · Triển khai dự án', 'Turning business requirements into deployable and operable solutions.', [['Business Analysis & Requirements', 'Clarifying problems, scope, and solution specifications.'], ['Waterfall · Scrum · Agile', 'Applied pragmatically across delivery and ERP projects.'], ['Implementation Planning', 'Milestones, dependencies, risks, and handover plans.'], ['HR/ERP Rollout & User Training', 'Go-live support, training, and operational issue resolution.']]],
      ['Applied AI & Intelligent Automation · AI ứng dụng & Tự động hóa thông minh', 'Using AI intentionally with evaluation and verification.', [['Prompt Engineering', 'Structured prompts for analysis, documentation, and technical work.'], ['AI Output Evaluation & Verification', 'Source checks, logic review, and human review before use.'], ['Loop Engine & Human-in-the-Loop Design', 'Iterative workflows with checkpoints and clear AI/human accountability.'], ['Knowledge Base & RAG', 'Knowledge organization, retrieval, and grounded AI responses.'], ['AI Agents for Repetitive Work', 'Email, meeting notes, contracts, guides, and report-draft support.'], ['Software Development Acceleration', 'AI support for appropriate development tasks.'], ['Technical Solution Research', 'Faster investigation and comparison of technical options.'], ['Project Workflow Optimization', 'Standardizing and automating repetitive project steps.']]],
      ['Professional Skills · Năng lực chuyên nghiệp', 'Working effectively with teams, customers, and stakeholders.', [['Stakeholder Communication', 'Clear communication of requirements, options, and decisions.'], ['Problem Solving', 'Root-cause analysis, practical options, and outcome follow-up.'], ['Cross-functional Collaboration', 'Connecting business, technical, and user perspectives.'], ['User Training & Support', 'Guidance, feedback handling, and adoption support.']]]
    ]
  }
};

const OVERVIEW_META = [
  { label: 'Build', symbol: '</>', tags: ['JavaScript', 'React', 'SQL', 'REST API'], image: softwareBackground, position: 'center top' },
  { label: 'Deliver', symbol: '↗', tags: ['ERP / HRM', 'AS-IS / TO-BE', 'Go-live'], image: deliveryBackground, position: 'center' },
  { label: 'Applied AI', symbol: '✦', tags: ['RAG', 'AI Agents', 'Human review'], image: aiBackground, position: 'center top' },
  { label: 'Collaborate', symbol: '○', tags: ['Stakeholders', 'Problem solving', 'Ownership'], image: professionalBackground, position: 'center' },
];
const PROFESSIONAL_CONTEXT = {
  vi: { experience: 'Kinh nghiệm làm việc', projects: 'Dự án thực tế', company: 'Công ty TNHH Giải pháp Phần mềm Việt Tín', years: 'Hơn 3 năm kinh nghiệm phát triển và triển khai giải pháp phần mềm.', projectItems: [{ name: 'Paradise HR — Single-Page Web Application', subtitle: 'Tái cấu trúc web-app theo kiến trúc SPA.', logo: paradiseProject, target: 'case-study-paradise-hr' }, { name: 'Chấm công GPS', subtitle: 'Chấm công bằng GPS và xác thực khuôn mặt.', logo: vaoCaProject, target: 'case-study-vao-ca' }, { name: 'Vào Ca — Ứng dụng quản lý nhân sự', subtitle: 'Ứng dụng nhân sự trên thiết bị di động.', logo: vaoCaWebProject, target: 'case-study-vao-ca' }, { name: 'Vào Ca — Website landing page', subtitle: 'Website giới thiệu ứng dụng tại vaoca.com.', logo: vaoCaWebProject, target: 'case-study-vao-ca-landing' }, { name: 'Hệ thống đăng ký nghỉ phép đa nền tảng', subtitle: 'Đăng ký và phê duyệt nghỉ phép nội bộ.', logo: leaveRequestProject, target: 'product-showcase' }, { name: 'Paradise Hiring — Phân hệ tuyển dụng', subtitle: 'Quản lý nhu cầu, hồ sơ và quy trình tuyển dụng.', logo: hiringProject, target: 'product-showcase' }] },
  en: { experience: 'Work experience', projects: 'Selected projects', company: 'VIET TIN SOFTWARE SOLUTION COMPANY LIMITED', years: 'Over 3 years of experience developing and implementing software solutions.', projectItems: [{ name: 'Paradise HR — Single-Page Web Application', subtitle: 'Single-page web application restructuring.', logo: paradiseProject, target: 'case-study-paradise-hr' }, { name: 'GPS Timekeeping', subtitle: 'GPS and facial-verification attendance.', logo: vaoCaProject, target: 'case-study-vao-ca' }, { name: 'Vào Ca — Human Resources Management Application', subtitle: 'Mobile human resources application.', logo: vaoCaWebProject, target: 'case-study-vao-ca' }, { name: 'Vào Ca — Landing Page', subtitle: 'Product landing page at vaoca.com.', logo: vaoCaWebProject, target: 'case-study-vao-ca-landing' }, { name: 'Multi-platform Leave Request System', subtitle: 'Internal leave request and approval.', logo: leaveRequestProject, target: 'product-showcase' }, { name: 'Paradise Hiring — Recruitment Module', subtitle: 'Hiring needs, candidate, and workflow management.', logo: hiringProject, target: 'product-showcase' }] },
};
const IMPLEMENTATION_PROJECTS = {
  vi: [
    { name: 'Lichien Vietnam Paper Products', subtitle: 'Triển khai HRM cho nhà máy giấy: chuẩn hóa hồ sơ nhân sự, chấm công, phân ca và dữ liệu vận hành.', logo: lichienLogo },
    { name: 'Haiphong Steel Flower', subtitle: 'Triển khai HRM cho môi trường sản xuất: khảo sát nghiệp vụ, cấu hình quy trình và hướng dẫn người dùng vận hành.', logo: steelFlowerLogo },
    { name: 'Tripod Vietnam', subtitle: 'Triển khai HRM đồng bộ cho 2 nhà máy độc lập, bảo đảm cấu hình phù hợp từng đơn vị và nhất quán báo cáo.', logo: tripodLogo },
    { name: 'Saigon Wicker', subtitle: 'Khảo sát và tư vấn triển khai ERP xuyên suốt CRM, bán hàng, kho, mua hàng, sản xuất, kế toán và HRM.', logo: saigonWickerLogo },
    { name: 'Việt Úc', subtitle: 'Tư vấn và triển khai ERP cho doanh nghiệp sản xuất, liên kết quy trình CRM, bán hàng, kho, mua hàng, sản xuất và kế toán.', logo: vietUcLogo },
    { name: 'Lotte Vietnam', subtitle: 'Triển khai module Audit, hỗ trợ thiết lập cơ chế theo dõi và truy vết hoạt động trong hệ thống.', logo: lotteLogo },
  ],
  en: [
    { name: 'Lichien Vietnam Paper Products', subtitle: 'HRM rollout for a paper mill, standardizing employee records, timekeeping, shift planning, and operational data.', logo: lichienLogo },
    { name: 'Haiphong Steel Flower', subtitle: 'HRM implementation for a production environment: process discovery, workflow configuration, and user enablement.', logo: steelFlowerLogo },
    { name: 'Tripod Vietnam', subtitle: 'Coordinated HRM rollout across two independent factories, balancing site-specific configuration with consistent reporting.', logo: tripodLogo },
    { name: 'Saigon Wicker', subtitle: 'ERP discovery and delivery spanning CRM, sales, inventory, procurement, manufacturing, accounting, and HRM.', logo: saigonWickerLogo },
    { name: 'Viet Uc', subtitle: 'ERP consulting and implementation connecting CRM, sales, inventory, procurement, manufacturing, and accounting workflows.', logo: vietUcLogo },
    { name: 'Lotte Vietnam', subtitle: 'Implemented the Audit module, supporting activity monitoring and traceability within the system.', logo: lotteLogo },
  ],
};

function Tags({ items, className = '' }) { return <ul className={`capability-tags ${className}`}>{items.map((item) => <li key={item}>{item}</li>)}</ul>; }
function StackIcons({ items }) { return <div className="capability-mini-card__stacks" aria-label={`Technology stack: ${items.join(', ')}`}>{items.map((item) => <span key={item}>{item}</span>)}</div>; }
function MiniCard({ title, text, stacks = [] }) { return <article className="capability-mini-card"><strong>{title}</strong><p>{text}</p>{stacks.length > 0 && <StackIcons items={stacks} />}</article>; }

function ProjectLinks({ lang, label }) {
  const { projects, projectItems } = PROFESSIONAL_CONTEXT[lang] || PROFESSIONAL_CONTEXT.en;
  const heading = label || projects;
  return <section className="capability-context__projects capability-context__projects--showcase" aria-label={heading}><p>{heading}</p><div>{projectItems.map((project) => <a href={`#${project.target}`} key={`${project.target}-${project.name}`}><img src={project.logo} alt="" /><span><strong>{project.name}</strong><small>{project.subtitle}</small></span></a>)}</div></section>;
}
function ImplementationProjects({ lang }) {
  const projects = IMPLEMENTATION_PROJECTS[lang] || IMPLEMENTATION_PROJECTS.en;
  const heading = lang === 'vi' ? 'Dự án đã triển khai' : 'Implemented projects';
  return <section className="capability-context__projects capability-context__projects--showcase" aria-label={heading}><p>{heading}</p><div>{projects.map((project) => <article key={project.name}><img src={project.logo} alt="" /><span><strong>{project.name}</strong><small>{project.subtitle}</small></span></article>)}</div></section>;
}

function SoftwareDetail({ lang }) {
  const cards = [
    ['Front-end Development & UI Engineering', 'Phát triển giao diện web responsive theo kiến trúc component và SPA, chú trọng trải nghiệm người dùng, khả năng tái sử dụng và hiệu suất hiển thị.', ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'UI/UX Design']],
    ['Back-end Development & System Integration', 'Phát triển logic nghiệp vụ, tích hợp RESTful API và xử lý luồng dữ liệu giữa các thành phần hệ thống.', ['Java', 'Python', 'RESTful API', 'SQL Server']],
    ['Database Management & Query Optimization', 'Thiết kế và tối ưu truy vấn dữ liệu, phục vụ vận hành hệ thống, xử lý nghiệp vụ và xây dựng báo cáo.', ['SQL Server', 'NoSQL', 'Query Optimization']],
    ['Test Automation & AI-Assisted Development', 'Quản lý mã nguồn, phối hợp phát triển và ứng dụng AI trong kiểm thử, gỡ lỗi và tự động hóa quy trình làm việc.', ['Playwright', 'AI-Assisted Testing', 'Workflow Automation']],
  ];
  return <div className="capability-layout capability-layout--software"><section className="capability-mini-grid">{cards.map(([title, text, stacks]) => <MiniCard key={title} title={title} text={text} stacks={stacks} />)}</section><ProjectLinks lang={lang} /></div>;
}

function DeliveryDetail({ skills, lang }) {
  const [modules, ...capabilities] = skills;
  return <div className="capability-layout capability-layout--delivery"><section className="capability-domains"><p>{lang === 'vi' ? 'Kinh nghiệm nghiệp vụ ERP / HRM' : 'ERP / HRM domain experience'}</p><div>{modules[2].map(([name, description]) => <article key={name}><strong>{name}</strong><span>{description}</span></article>)}</div></section><section className="capability-feature-grid">{capabilities.map(([title, text]) => <MiniCard key={title} title={title} text={text} />)}</section><ImplementationProjects lang={lang} /></div>;
}

function AIDetail({ skills }) {
  const areas = skills.slice(0, 5).map(([title]) => title);
  const cases = [
    ['Prompt Engineering', skills[0]?.[1]],
    ['Loop Engine & Human-in-the-Loop', skills[2]?.[1]],
    ['Knowledge Base & RAG', skills[3]?.[1]],
    ['AI Agent', skills[4]?.[1]],
  ];
  return <div className="capability-layout capability-layout--ai"><section className="capability-stack"><p>Applied AI areas</p><Tags items={areas} /></section><section className="capability-mini-grid capability-mini-grid--ai-focus">{cases.map(([title, text]) => <MiniCard key={title} title={title} text={text} />)}</section></div>;
}

function ProfessionalDetail({ skills }) {
  return <div className="capability-layout capability-layout--professional"><section className="capability-mini-grid capability-mini-grid--professional">{skills.map(([title, text]) => <MiniCard key={title} title={title} text={text} />)}</section></div>;
}

function ProfessionalContext({ lang }) {
  const content = PROFESSIONAL_CONTEXT[lang] || PROFESSIONAL_CONTEXT.en;
  return <div className="capability-context"><section className="capability-context__experience" aria-label={content.experience}><p>{content.experience}</p><div><img src={vietTinLogo} alt="Viet Tin Software" /><dl><dt>{content.company}</dt><dd>{content.years}</dd></dl></div></section></div>;
}

function HumanView({ content, lang }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [title, note, skills] = content.groups[selectedIndex];
  const formatGroupTitle = (groupTitle) => groupTitle.split(' · ');
  const [primaryTitle, secondaryTitle] = formatGroupTitle(title);
  const selectedId = `professional-panel-${selectedIndex}`;
  const renderDetail = () => [<SoftwareDetail lang={lang} />, <DeliveryDetail skills={skills} lang={lang} />, <AIDetail skills={skills} />, <ProfessionalDetail skills={skills} />][selectedIndex];
  const selectCapability = (next) => { setSelectedIndex(next); document.getElementById(`professional-tab-${next}`)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest', inline: 'center' }); };
  const onKeyDown = (event) => { if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return; event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 3 : (selectedIndex + (event.key === 'ArrowRight' ? 1 : -1) + 4) % 4; selectCapability(next); document.getElementById(`professional-tab-${next}`)?.focus(); };
  return <div className="professional-showcase"><div className="professional-showcase__overview" role="tablist" aria-label="Nhóm năng lực chuyên môn" onKeyDown={onKeyDown}>{content.groups.map(([groupTitle], index) => { const item = OVERVIEW_META[index]; const [primary, secondary] = formatGroupTitle(groupTitle); return <button key={groupTitle} id={`professional-tab-${index}`} className={`capability-overview${selectedIndex === index ? ' is-selected' : ''}`} type="button" role="tab" aria-selected={selectedIndex === index} aria-controls={selectedId} tabIndex={selectedIndex === index ? 0 : -1} onClick={() => selectCapability(index)} style={{ '--capability-image': `url(${item.image})`, '--capability-image-position': item.position }}><span><strong>{primary}</strong>{secondary && <small>{secondary}</small>}</span></button>; })}</div><section id={selectedId} className={`capability-stage capability-stage--${selectedIndex}`} role="tabpanel" aria-labelledby={`professional-tab-${selectedIndex}`} tabIndex="0"><header><h3>{primaryTitle}<small>{secondaryTitle}</small></h3><p>{note}</p>{selectedIndex === 0 && <ProfessionalContext lang={lang} />}</header><div className="capability-stage__content" key={`${selectedIndex}-${title}`}>{renderDetail()}</div></section></div>;
}

function KnowledgeBaseView({ areas }) {
  return <div className="knowledge-grid" role="list">{areas.map(([title, desc, tags], index) => <article className="knowledge-card" role="listitem" key={title}><span className="knowledge-card__index">0{index + 1}</span><h3>{title}</h3><p><HtmlText>{desc}</HtmlText></p><ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>;
}

export default function TechDeepDive() {
  const { lang } = useLanguage();
  const [view, setView] = useState('human');
  const areas = KNOWLEDGE_AREAS[lang] || KNOWLEDGE_AREAS.en;
  const human = HUMAN_SKILLS[lang] || HUMAN_SKILLS.en;
  const aiKnowledge = AI_KNOWLEDGE_VIEW[lang] || AI_KNOWLEDGE_VIEW.en;
  const activeView = view === 'human' ? human : aiKnowledge;

  return <section id="technical" className="tech" aria-labelledby="tech-heading"><div className="container tech__inner"><header className="tech__header"><div className="tech__heading-row"><div><p className="tech__eyebrow">{activeView.eyebrow}</p><h2 id="tech-heading" className="section-title">{activeView.title}</h2></div><div className={`tech-view-toggle${view === 'ai' ? ' is-ai' : ''}`} role="group" aria-label="Skills view"><span className="tech-view-toggle__indicator" aria-hidden="true" /><button type="button" className={view === 'human' ? 'is-active' : ''} onClick={() => setView('human')} aria-pressed={view === 'human'}>Human View</button><button type="button" className={view === 'ai' ? 'is-active' : ''} onClick={() => setView('ai')} aria-pressed={view === 'ai'}>Knowledge base for AI</button></div></div><p className="section-subtitle">{activeView.subtitle}</p></header><div className="tech__view-content" key={view}>{view === 'human' ? <HumanView content={human} lang={lang} /> : <KnowledgeBaseView areas={areas} />}</div></div></section>;
}
