import { useState } from 'react';
import './TechDeepDive.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import { HtmlText } from '../HtmlText.jsx';

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
      ['Phát triển phần mềm · Software Development', 'Xây dựng ứng dụng web và hệ thống nghiệp vụ từ giao diện đến tích hợp dữ liệu.', [
        ['Java · Python · JavaScript', 'Phát triển logic nghiệp vụ, xử lý dữ liệu và automation workflow.'],
        ['HTML · CSS · ReactJS', 'Xây dựng giao diện responsive, component-based và SPA.'],
        ['UI/UX với Figma · Affinity', 'Thiết kế wireframe, user flow và bàn giao giao diện cho phát triển.'],
        ['REST APIs & Backend Integration', 'Tích hợp API, xử lý luồng dữ liệu và lỗi phía client.'],
        ['SQL Server · NoSQL', 'Thiết kế truy vấn, tối ưu dữ liệu vận hành và báo cáo.'],
        ['Git · GitHub', 'Quản lý source code, branch và phối hợp phát triển.'],
        ['Playwright & AI-assisted Testing', 'Thiết kế automation test, debug và kiểm chứng kết quả hỗ trợ bởi AI.']
      ]],
      ['Triển khai dự án · Project Delivery', 'Kinh nghiệm triển khai phân hệ ERP và vận dụng vòng đời phát triển phần mềm từ khảo sát đến vận hành.', [
        ['Phân hệ ERP đã có kinh nghiệm triển khai', 'ERP Modules', [['CRM', 'Quản lý quan hệ khách hàng'], ['Sales Order (SO)', 'Quản lý đơn hàng bán'], ['Purchase Order (PO)', 'Quản lý đơn hàng mua'], ['Warehouse Management (WM)', 'Quản lý kho'], ['Manufacturing (M)', 'Quản lý sản xuất'], ['Asset Management (AM)', 'Quản lý tài sản'], ['Finance & Accounting (FA)', 'Tài chính - kế toán'], ['Human Resources Management (HRM)', 'Quản lý nhân sự']]],
        ['Khảo sát hiện trạng & phân tích yêu cầu', 'Khảo sát AS-IS, xác định TO-BE, phạm vi và tiêu chí nghiệm thu.'],
        ['Lập kế hoạch triển khai', 'Xác định mốc, phụ thuộc, rủi ro và kế hoạch bàn giao.'],
        ['Thiết kế giải pháp phần mềm', 'Chuyển yêu cầu nghiệp vụ thành luồng xử lý, đặc tả và phương án tích hợp phù hợp.'],
        ['Go-live & cải tiến vận hành', 'Hỗ trợ chuyển đổi, xử lý sự cố ban đầu và theo dõi cải tiến sau vận hành.']
      ]],
      ['AI tạo sinh · Generative AI', 'Ứng dụng AI có chủ đích, luôn đánh giá và kiểm chứng đầu ra.', [
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
      ['Software Development', 'Building web applications and business systems from interface to data integration.', [['Java · Python · JavaScript', 'Business logic, data processing, and workflow automation.'], ['HTML · CSS · ReactJS', 'Responsive, component-based interfaces and SPAs.'], ['UI/UX with Figma · Affinity', 'Wireframes, user flows, and design-to-development handoff.'], ['REST APIs & Backend Integration', 'API integration, data flows, and client-side error handling.'], ['SQL Server · NoSQL', 'Operational queries, data optimization, and reporting.'], ['Git · GitHub', 'Source control, branches, and development collaboration.'], ['Playwright & AI-assisted Testing', 'Automation test design, debugging, and AI-assisted verification.']]],
      ['Project Delivery', 'Turning business requirements into deployable and operable solutions.', [['Business Analysis & Requirements', 'Clarifying problems, scope, and solution specifications.'], ['Waterfall · Scrum · Agile', 'Applied pragmatically across delivery and ERP projects.'], ['Implementation Planning', 'Milestones, dependencies, risks, and handover plans.'], ['HR/ERP Rollout & User Training', 'Go-live support, training, and operational issue resolution.']]],
      ['Generative AI', 'Using AI intentionally with evaluation and verification.', [['Prompt Engineering', 'Structured prompts for analysis, documentation, and technical work.'], ['AI Output Evaluation & Verification', 'Source checks, logic review, and human review before use.'], ['Loop Engine & Human-in-the-Loop Design', 'Iterative workflows with checkpoints and clear AI/human accountability.'], ['Knowledge Base & RAG', 'Knowledge organization, retrieval, and grounded AI responses.'], ['AI Agents for Repetitive Work', 'Email, meeting notes, contracts, guides, and report-draft support.'], ['Software Development Acceleration', 'AI support for appropriate development tasks.'], ['Technical Solution Research', 'Faster investigation and comparison of technical options.'], ['Project Workflow Optimization', 'Standardizing and automating repetitive project steps.']]],
      ['Professional Skills', 'Working effectively with teams, customers, and stakeholders.', [['Stakeholder Communication', 'Clear communication of requirements, options, and decisions.'], ['Problem Solving', 'Root-cause analysis, practical options, and outcome follow-up.'], ['Cross-functional Collaboration', 'Connecting business, technical, and user perspectives.'], ['User Training & Support', 'Guidance, feedback handling, and adoption support.']]]
    ]
  }
};

const OVERVIEW_META = [
  { label: 'Build', symbol: '</>', tags: ['JavaScript', 'React', 'SQL', 'REST API'] },
  { label: 'Deliver', symbol: '↗', tags: ['ERP / HRM', 'AS-IS / TO-BE', 'Go-live'] },
  { label: 'Applied AI', symbol: '✦', tags: ['RAG', 'AI Agents', 'Human review'] },
  { label: 'Collaborate', symbol: '○', tags: ['Stakeholders', 'Problem solving', 'Ownership'] },
];
const DELIVERY_FLOW = ['Khảo sát', 'Phân tích', 'Thiết kế', 'Kế hoạch', 'Go-live', 'Cải tiến'];
const AI_FLOW = ['Nguồn vào', 'Prompt / Retrieval', 'Đánh giá', 'Human review', 'Đầu ra'];

function Tags({ items, className = '' }) { return <ul className={`capability-tags ${className}`}>{items.map((item) => <li key={item}>{item}</li>)}</ul>; }
function MiniCard({ title, text, mark }) { return <article className="capability-mini-card"><span aria-hidden="true">{mark}</span><strong>{title}</strong><p>{text}</p></article>; }

function SoftwareDetail({ skills }) {
  const cards = [
    ['Frontend & UI', skills[1]?.[1], '01'], ['Backend integration', skills[3]?.[1], '02'],
    ['Data & queries', skills[4]?.[1], '03'], ['Testing & workflow', `${skills[5]?.[1]} ${skills[6]?.[1]}`, '04'],
  ];
  return <div className="capability-layout capability-layout--software"><section className="capability-stack"><p>Core stack</p><Tags items={['Java', 'Python', 'JavaScript', 'React', 'SQL Server', 'NoSQL', 'REST APIs', 'GitHub']} /></section><section className="capability-mini-grid">{cards.map(([title, text, mark]) => <MiniCard key={title} title={title} text={text} mark={mark} />)}</section><aside className="capability-note"><span>Full-cycle</span><strong>From interface to data integration</strong><p>Thiết kế, xây dựng và kiểm chứng hệ thống nghiệp vụ trong một dòng chảy liền mạch.</p></aside></div>;
}

function DeliveryDetail({ skills }) {
  const [modules, ...capabilities] = skills;
  return <div className="capability-layout capability-layout--delivery"><section className="capability-flow"><p>Implementation flow</p><ol>{DELIVERY_FLOW.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></li>)}</ol></section><section className="capability-domains"><p>ERP / HRM domain experience</p><div>{modules[2].map(([name, description]) => <article key={name}><strong>{name}</strong><span>{description}</span></article>)}</div></section><section className="capability-feature-grid">{capabilities.map(([title, text], index) => <MiniCard key={title} title={title} text={text} mark={String(index + 1).padStart(2, '0')} />)}</section></div>;
}

function AIDetail({ skills }) {
  const areas = skills.slice(0, 5).map(([title]) => title);
  const cases = [['Phân tích & tài liệu', skills[0]?.[1]], ['Technical acceleration', skills[5]?.[1]], ['Workflow optimization', skills[7]?.[1]]];
  return <div className="capability-layout capability-layout--ai"><section className="capability-stack"><p>Applied AI areas</p><Tags items={areas} /></section><section className="capability-flow capability-flow--ai"><p>Controlled workflow</p><ol>{AI_FLOW.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{step}</span></li>)}</ol><small>Grounded · Verified · Human-reviewed</small></section><section className="capability-mini-grid capability-mini-grid--three">{cases.map(([title, text], index) => <MiniCard key={title} title={title} text={text} mark={['A', 'B', 'C'][index]} />)}</section></div>;
}

function ProfessionalDetail({ skills }) {
  const clusters = [
    ['Communication & stakeholder', ['Giao tiếp stakeholder', 'Khả năng làm việc nhóm'], 'C'],
    ['Thinking & problem solving', ['Xác định đúng vấn đề & giải quyết vấn đề', 'Tư duy phản biện', 'Tư duy sản phẩm'], 'T'],
    ['Working style', ['Khả năng thích nghi'], 'W'],
  ];
  const lookup = new Map(skills);
  return <div className="capability-layout capability-layout--professional"><section className="capability-clusters">{clusters.map(([title, names, mark]) => <article key={title}><span>{mark}</span><h4>{title}</h4>{names.map((name) => <div key={name}><strong>{name}</strong><p>{lookup.get(name)}</p></div>)}</article>)}</section></div>;
}

function HumanView({ content }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [title, note, skills] = content.groups[selectedIndex];
  const meta = OVERVIEW_META[selectedIndex];
  const selectedId = `professional-panel-${selectedIndex}`;
  const renderDetail = () => [<SoftwareDetail skills={skills} />, <DeliveryDetail skills={skills} />, <AIDetail skills={skills} />, <ProfessionalDetail skills={skills} />][selectedIndex];
  const onKeyDown = (event) => { if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return; event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 3 : (selectedIndex + (event.key === 'ArrowRight' ? 1 : -1) + 4) % 4; setSelectedIndex(next); document.getElementById(`professional-tab-${next}`)?.focus(); };
  return <div className="professional-showcase"><div className="professional-showcase__overview" role="tablist" aria-label="Nhóm năng lực chuyên môn" onKeyDown={onKeyDown}>{content.groups.map(([groupTitle, groupNote], index) => { const item = OVERVIEW_META[index]; return <button key={groupTitle} id={`professional-tab-${index}`} className={`capability-overview${selectedIndex === index ? ' is-selected' : ''}`} type="button" role="tab" aria-selected={selectedIndex === index} aria-controls={selectedId} tabIndex={selectedIndex === index ? 0 : -1} onClick={() => setSelectedIndex(index)}><span className="capability-overview__top"><i>{item.symbol}</i><em>{item.label}</em><b>{String(index + 1).padStart(2, '0')}</b></span><strong>{groupTitle}</strong><span>{groupNote}</span><Tags items={item.tags} /></button>; })}</div><section id={selectedId} className={`capability-stage capability-stage--${selectedIndex}`} role="tabpanel" aria-labelledby={`professional-tab-${selectedIndex}`} tabIndex="0"><header><span>{meta.label}</span><h3>{title}</h3><p>{note}</p></header><div className="capability-stage__content" key={`${selectedIndex}-${title}`}>{renderDetail()}</div></section></div>;
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

  return <section id="technical" className="tech" aria-labelledby="tech-heading"><div className="container tech__inner"><header className="tech__header"><div className="tech__heading-row"><div><p className="tech__eyebrow">{activeView.eyebrow}</p><h2 id="tech-heading" className="section-title">{activeView.title}</h2></div><div className="tech-view-toggle" role="group" aria-label="Skills view"><button type="button" className={view === 'human' ? 'is-active' : ''} onClick={() => setView('human')} aria-pressed={view === 'human'}>Human View</button><button type="button" className={view === 'ai' ? 'is-active' : ''} onClick={() => setView('ai')} aria-pressed={view === 'ai'}>Knowledge base for AI</button></div></div><p className="section-subtitle">{activeView.subtitle}</p>{view === 'human' && <p className="tech__micro-summary">Software delivery · ERP implementation · Applied AI with responsible human review</p>}</header>{view === 'human' ? <HumanView content={human} /> : <KnowledgeBaseView areas={areas} />}</div></section>;
}
