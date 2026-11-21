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
  ja: [
    ['ERPドメインナレッジ', 'ERP開発、導入、ソリューションコンサルティングを通じて蓄積した企業業務の知識。CRM、販売・購買、倉庫、製造、資産、財務会計、人事を含みます。', ['CRM', '販売管理', '購買管理', '倉庫管理', '製造管理', '資産管理', '財務会計', '人事']],
    ['ソフトウェアエンジニアリング', 'コンポーネント型フロントエンド、API連携、データ、ソース管理、性能、自動テストに関する知識。', ['JavaScript / React', 'Java / Python', 'REST API', 'SQL Server / NoSQL', 'Git / GitHub', 'Playwright', 'UI/UX / PWA']],
    ['ソリューション導入', '現状調査、要件分析、ソリューション設計、導入計画、Go-live支援を通じて業務課題を運用可能な解決策へ変換します。', ['AS-IS / TO-BE', '要件分析', 'ソリューション設計', '導入計画', 'データ準備', 'Go-live支援']],
    ['AIシステム・ナレッジエンジニアリング', 'ナレッジベース、検索/RAG、出力評価、Loop Engine、Human-in-the-Loopによる根拠あるAIシステムを設計します。', ['ナレッジベース', 'RAG / 検索', '根拠ある回答', 'プロンプトエンジニアリング', '出力検証', 'Loop Engine', 'Human-in-the-Loop']],
    ['AI対応ワークフロー', 'AIエージェントで開発を高速化し、技術調査やメール、議事録、契約、ガイド、レポートの反復作業を自動化します。', ['AIエージェント', '開発高速化', '技術調査', 'メール作成', '議事録', '契約', 'ガイド・レポート', 'ワークフロー自動化']],
  ],
  zh: [
    ['ERP领域知识', '通过ERP开发、实施与解决方案咨询积累的企业流程知识，涵盖CRM、销售、采购、仓库、制造、资产、财务会计及人力资源。', ['CRM', '销售订单', '采购订单', '仓库管理', '生产制造', '资产管理', '财务会计', '人力资源']],
    ['软件工程知识', '涵盖组件化前端、API集成、数据、源码管理、性能和自动化测试的Web与业务系统知识。', ['JavaScript / React', 'Java / Python', 'REST API', 'SQL Server / NoSQL', 'Git / GitHub', 'Playwright', 'UI/UX / PWA']],
    ['解决方案交付知识', '通过现状调研、需求分析、方案设计、实施计划和上线支持，将业务问题转化为可运行的解决方案。', ['AS-IS / TO-BE', '需求分析', '方案设计', '实施计划', '数据准备', '上线支持']],
    ['AI系统与知识工程', '使用知识库、检索/RAG、输出评估、Loop Engine及人工复核点设计有依据的AI系统。', ['知识库', 'RAG / 检索', '有依据的回答', '提示词工程', '输出验证', 'Loop Engine', 'Human-in-the-Loop']],
    ['AI赋能工作流', '使用AI代理加速软件交付、研究技术方案，并自动化邮件、会议纪要、合同、指南和报告等重复工作。', ['AI代理', '开发加速', '技术调研', '邮件草拟', '会议纪要', '合同', '指南与报告', '工作流自动化']],
  ],
};

const AI_KNOWLEDGE_VIEW = {
  vi: {
    title: 'Knowledge Base cho AI',
    subtitle: 'Bản đồ tri thức được tổ chức theo domain, kỹ thuật, delivery và AI workflow để AI Agent có thể truy xuất, đối chiếu và hỗ trợ công việc trên nền tảng có căn cứ.'
  },
  en: {
    title: 'Knowledge Base for AI',
    subtitle: 'A knowledge map organized across domain, engineering, delivery, and AI workflows so AI Agents can retrieve, validate, and support work with grounded context.'
  },
  ja: {
    title: 'AI向けナレッジベース',
    subtitle: 'ドメイン、エンジニアリング、導入、AIワークフローで整理されたナレッジマップ。AIエージェントが根拠ある情報を検索・照合し、業務を支援できます。'
  },
  zh: {
    title: '面向AI的知识库',
    subtitle: '知识按领域、工程、交付和AI工作流组织，便于AI代理检索、验证并基于真实上下文辅助工作。'
  }
};

const HUMAN_SKILLS = {
  vi: {
    title: 'Năng lực chuyên môn', subtitle: 'Bốn nhóm năng lực cốt lõi giúp nhà tuyển dụng đánh giá nhanh phạm vi chuyên môn và cách tôi tạo giá trị trong dự án.',
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
    title: 'Skills & knowledge', subtitle: 'Four core capability areas with clear application scope and proficiency signals for recruiters.',
    groups: [
      ['Software Development', 'Developing web applications and business systems, from interface design and feature development to data integration and optimization.', [['Java · Python · JavaScript', 'Business logic, data processing, and workflow automation.'], ['HTML · CSS · ReactJS', 'Responsive, component-based interfaces and SPAs.'], ['UI/UX with Figma · Affinity', 'Wireframes, user flows, and design-to-development handoff.'], ['REST APIs & Backend Integration', 'API integration, data flows, and client-side error handling.'], ['SQL Server · NoSQL', 'Operational queries, data optimization, and reporting.'], ['Git · GitHub', 'Source control, branches, and development collaboration.'], ['Playwright & AI-assisted Testing', 'Automation test design, debugging, and AI-assisted verification.']]],
      ['Project Delivery', 'Turning business requirements into deployable and operable solutions.', [['Business Analysis & Requirements', 'Clarifying problems, scope, and solution specifications.'], ['Waterfall · Scrum · Agile', 'Applied pragmatically across delivery and ERP projects.'], ['Implementation Planning', 'Milestones, dependencies, risks, and handover plans.'], ['HR/ERP Rollout & User Training', 'Go-live support, training, and operational issue resolution.']]],
      ['Applied AI & Intelligent Automation', 'Using AI intentionally with evaluation and verification.', [['Prompt Engineering', 'Structured prompts for analysis, documentation, and technical work.'], ['AI Output Evaluation & Verification', 'Source checks, logic review, and human review before use.'], ['Loop Engine & Human-in-the-Loop Design', 'Iterative workflows with checkpoints and clear AI/human accountability.'], ['Knowledge Base & RAG', 'Knowledge organization, retrieval, and grounded AI responses.'], ['AI Agents for Repetitive Work', 'Email, meeting notes, contracts, guides, and report-draft support.'], ['Software Development Acceleration', 'AI support for appropriate development tasks.'], ['Technical Solution Research', 'Faster investigation and comparison of technical options.'], ['Project Workflow Optimization', 'Standardizing and automating repetitive project steps.']]],
      ['Professional Skills', 'Working effectively with teams, customers, and stakeholders.', [['Stakeholder Communication', 'Clear communication of requirements, options, and decisions.'], ['Problem Solving', 'Root-cause analysis, practical options, and outcome follow-up.'], ['Cross-functional Collaboration', 'Connecting business, technical, and user perspectives.'], ['User Training & Support', 'Guidance, feedback handling, and adoption support.']]]
    ]
  },
  ja: {
    title: 'スキルと知識',
    subtitle: '採用担当者が専門性の範囲と実務での評価根拠を確認できる4つの能力領域。',
    groups: [
      ['ソフトウェア開発', '画面設計から機能開発、データ連携、最適化まで、Webアプリケーションと業務システムを開発します。', [['Java · Python · JavaScript', '業務ロジック、データ処理、自動化ワークフロー。'], ['HTML · CSS · ReactJS', 'レスポンシブでコンポーネントベースのSPA。'], ['UI/UX（Figma · Affinity）', 'ワイヤーフレーム、ユーザーフロー、開発への引継ぎ。'], ['REST API・バックエンド連携', 'API連携、データフロー、クライアント側エラー処理。'], ['SQL Server · NoSQL', '運用クエリ、データ最適化、レポート。'], ['Git · GitHub', 'ソース管理、ブランチ、開発協業。'], ['Playwright・AI支援テスト', '自動テスト、デバッグ、AI支援による検証。']]],
      ['プロジェクト導入', '業務要件を運用可能なソリューションへ変換します。', [['要件分析', '課題、範囲、仕様を明確化。'], ['ウォーターフォール・スクラム・アジャイル', '導入とERP案件に合わせて適用。'], ['導入計画', 'マイルストーン、依存関係、リスク、引継ぎ計画。'], ['HR/ERP導入とユーザー研修', 'Go-live支援、研修、運用課題への対応。']]],
      ['応用AIとインテリジェント自動化', '検証と責任あるレビューを伴いAIを活用します。', [['プロンプトエンジニアリング', '分析、文書作成、技術作業向けの構造化プロンプト。'], ['AI出力の評価・検証', '出典確認、論理レビュー、人による最終確認。'], ['Loop Engine・Human-in-the-Loop', 'チェックポイントと責任分担を備えた反復ワークフロー。'], ['Knowledge Base・RAG', 'ナレッジの整理、検索、根拠ある回答。'], ['反復業務向けAIエージェント', 'メール、議事録、契約、ガイド、レポート下書き。'], ['ソフトウェア開発の高速化', '適切な開発タスクをAIで支援。'], ['技術ソリューション調査', '技術選択肢を迅速に調査・比較。'], ['プロジェクトワークフロー最適化', '反復作業を標準化・自動化。']]],
      ['専門的スキル', 'チーム、顧客、ステークホルダーと効果的に協働します。', [['ステークホルダーコミュニケーション', '要件、選択肢、意思決定を明確に伝達。'], ['問題解決', '原因分析、実行可能な解決策、結果のフォロー。'], ['部門横断協働', '業務、技術、ユーザーの視点を接続。'], ['研修とサポート', '利用ガイド、フィードバック対応、導入支援。']]]
    ]
  },
  zh: {
    title: '技能与知识',
    subtitle: '从招聘评估角度呈现四个核心能力领域、应用范围及专业证明。',
    groups: [
      ['软件开发', '负责从界面设计、功能开发到数据集成和优化的Web应用及业务系统开发。', [['Java · Python · JavaScript', '业务逻辑、数据处理与自动化工作流。'], ['HTML · CSS · ReactJS', '响应式、组件化界面与SPA。'], ['UI/UX（Figma · Affinity）', '线框图、用户流程及设计交付开发。'], ['REST API与后端集成', 'API集成、数据流及前端异常处理。'], ['SQL Server · NoSQL', '运营查询、数据优化与报告。'], ['Git · GitHub', '源码管理、分支协作与开发协同。'], ['Playwright与AI辅助测试', '自动化测试、调试及AI辅助验证。']]],
      ['项目交付', '将业务需求转化为可部署、可运营的解决方案。', [['业务分析与需求确认', '明确问题、范围与解决方案规格。'], ['瀑布 · Scrum · Agile', '根据交付和ERP项目实际采用。'], ['实施计划', '里程碑、依赖、风险与交接计划。'], ['HR/ERP上线与用户培训', '上线支持、培训及运营问题处理。']]],
      ['AI应用与智能自动化', '在评估和人工复核下有目的地使用AI。', [['提示词工程', '为分析、文档和技术工作编写结构化提示词。'], ['AI输出评估与验证', '核对来源、检查逻辑并进行人工复核。'], ['Loop Engine与Human-in-the-Loop', '设置检查点及AI/人工责任分工的迭代流程。'], ['知识库与RAG', '知识组织、检索及有依据的AI回答。'], ['重复工作AI代理', '邮件、会议纪要、合同、指南和报告草稿支持。'], ['软件开发加速', '在合适任务中使用AI提高开发效率。'], ['技术方案调研', '快速调研和比较技术方案。'], ['项目流程优化', '标准化并自动化重复项目步骤。']]],
      ['专业能力', '与团队、客户和利益相关方高效协作。', [['利益相关方沟通', '清晰沟通需求、方案与决策。'], ['问题解决', '根因分析、可行方案及结果跟进。'], ['跨职能协作', '连接业务、技术与用户视角。'], ['培训与支持', '使用指导、反馈处理及采用支持。']]]
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
  vi: { experience: 'Kinh nghiệm làm việc', projects: 'Dự án thực tế', company: 'Công ty TNHH Giải pháp Phần mềm Việt Tín', years: 'Hơn 3 năm kinh nghiệm phát triển và triển khai giải pháp phần mềm.', projectItems: [{ name: 'Paradise HR — Single-Page Web Application', subtitle: 'Tái cấu trúc web-app theo kiến trúc SPA.', logo: paradiseProject, target: 'case-study-paradise-hr', projectIndex: 0 }, { name: 'Chấm công GPS', subtitle: 'Chấm công bằng GPS và xác thực khuôn mặt.', logo: vaoCaProject, target: 'case-study-vao-ca', projectIndex: 1 }, { name: 'Vào Ca — Ứng dụng quản lý nhân sự', subtitle: 'Ứng dụng nhân sự trên thiết bị di động.', logo: vaoCaWebProject, target: 'case-study-vao-ca', projectIndex: 2 }, { name: 'Vào Ca — Website landing page', subtitle: 'Website giới thiệu ứng dụng tại vaoca.com.', logo: vaoCaWebProject, target: 'case-study-vao-ca-landing', projectIndex: 3 }, { name: 'Hệ thống đăng ký nghỉ phép đa nền tảng', subtitle: 'Đăng ký và phê duyệt nghỉ phép nội bộ.', logo: leaveRequestProject, target: 'product-showcase', projectIndex: 4 }, { name: 'Paradise Hiring — Phân hệ tuyển dụng', subtitle: 'Quản lý nhu cầu, hồ sơ và quy trình tuyển dụng.', logo: hiringProject, target: 'product-showcase', projectIndex: 5 }] },
  en: { experience: 'Work experience', projects: 'Selected projects', company: 'VIET TIN SOFTWARE SOLUTION COMPANY LIMITED', years: 'Over 3 years of experience developing and implementing software solutions.', projectItems: [{ name: 'Paradise HR — Single-Page Web Application', subtitle: 'Single-page web application restructuring.', logo: paradiseProject, target: 'case-study-paradise-hr', projectIndex: 0 }, { name: 'GPS Timekeeping', subtitle: 'GPS and facial-verification attendance.', logo: vaoCaProject, target: 'case-study-vao-ca', projectIndex: 1 }, { name: 'Vào Ca — Human Resources Management Application', subtitle: 'Mobile human resources application.', logo: vaoCaWebProject, target: 'case-study-vao-ca', projectIndex: 2 }, { name: 'Vào Ca — Landing Page', subtitle: 'Product landing page at vaoca.com.', logo: vaoCaWebProject, target: 'case-study-vao-ca-landing', projectIndex: 3 }, { name: 'Multi-platform Leave Request System', subtitle: 'Internal leave request and approval.', logo: leaveRequestProject, target: 'product-showcase', projectIndex: 4 }, { name: 'Paradise Hiring — Recruitment Module', subtitle: 'Hiring needs, candidate, and workflow management.', logo: hiringProject, target: 'product-showcase', projectIndex: 5 }] },
  ja: { experience: '職務経験', projects: '主なプロジェクト', company: 'VIET TIN SOFTWARE SOLUTION COMPANY LIMITED', years: 'ソフトウェア開発とソリューション導入で3年以上の経験があります。', projectItems: [{ name: 'Paradise HR — シングルページWebアプリケーション', subtitle: 'SPA構成への再設計。', logo: paradiseProject, target: 'case-study-paradise-hr', projectIndex: 0 }, { name: 'GPS勤怠管理', subtitle: 'GPSと顔認証による勤怠打刻。', logo: vaoCaProject, target: 'case-study-vao-ca', projectIndex: 1 }, { name: 'Vào Ca — 人事管理アプリ', subtitle: 'モバイル人事管理アプリ。', logo: vaoCaWebProject, target: 'case-study-vao-ca', projectIndex: 2 }, { name: 'Vào Ca — ランディングページ', subtitle: 'vaoca.comの製品紹介サイト。', logo: vaoCaWebProject, target: 'case-study-vao-ca-landing', projectIndex: 3 }, { name: '休暇申請システム', subtitle: '社内の休暇申請・承認。', logo: leaveRequestProject, target: 'product-showcase', projectIndex: 4 }, { name: 'Paradise Hiring — 採用モジュール', subtitle: '採用ニーズ、候補者、ワークフロー管理。', logo: hiringProject, target: 'product-showcase', projectIndex: 5 }] },
  zh: { experience: '工作经验', projects: '精选项目', company: 'VIET TIN SOFTWARE SOLUTION COMPANY LIMITED', years: '拥有超过3年的软件开发与解决方案实施经验。', projectItems: [{ name: 'Paradise HR — 单页Web应用', subtitle: '将Web应用重构为SPA架构。', logo: paradiseProject, target: 'case-study-paradise-hr', projectIndex: 0 }, { name: 'GPS考勤', subtitle: '基于GPS和人脸验证的考勤。', logo: vaoCaProject, target: 'case-study-vao-ca', projectIndex: 1 }, { name: 'Vào Ca — 人力资源管理应用', subtitle: '移动端人力资源管理应用。', logo: vaoCaWebProject, target: 'case-study-vao-ca', projectIndex: 2 }, { name: 'Vào Ca — 产品落地页', subtitle: 'vaoca.com产品介绍页面。', logo: vaoCaWebProject, target: 'case-study-vao-ca-landing', projectIndex: 3 }, { name: '请假申请系统', subtitle: '内部请假申请与审批。', logo: leaveRequestProject, target: 'product-showcase', projectIndex: 4 }, { name: 'Paradise Hiring — 招聘模块', subtitle: '招聘需求、候选人及流程管理。', logo: hiringProject, target: 'product-showcase', projectIndex: 5 }] },
};
const IMPLEMENTATION_PROJECTS = {
  vi: [
    { name: 'Lichien Vietnam Paper Products', subtitle: 'Triển khai HRM cho nhà máy giấy: chuẩn hóa hồ sơ nhân sự, chấm công, phân ca và dữ liệu vận hành.', logo: lichienLogo, projectIndex: 6 },
    { name: 'Haiphong Steel Flower', subtitle: 'Triển khai HRM cho môi trường sản xuất: khảo sát nghiệp vụ, cấu hình quy trình và hướng dẫn người dùng vận hành.', logo: steelFlowerLogo, projectIndex: 7 },
    { name: 'Tripod Vietnam', subtitle: 'Triển khai HRM đồng bộ cho 2 nhà máy độc lập, bảo đảm cấu hình phù hợp từng đơn vị và nhất quán báo cáo.', logo: tripodLogo, projectIndex: 8 },
    { name: 'Saigon Wicker', subtitle: 'Khảo sát và tư vấn triển khai ERP xuyên suốt CRM, bán hàng, kho, mua hàng, sản xuất, kế toán và HRM.', logo: saigonWickerLogo, projectIndex: 9 },
    { name: 'Việt Úc', subtitle: 'Tư vấn và triển khai ERP cho doanh nghiệp sản xuất, liên kết quy trình CRM, bán hàng, kho, mua hàng, sản xuất và kế toán.', logo: vietUcLogo, projectIndex: 10 },
    { name: 'Lotte Vietnam', subtitle: 'Triển khai module Audit, hỗ trợ thiết lập cơ chế theo dõi và truy vết hoạt động trong hệ thống.', logo: lotteLogo },
  ],
  en: [
    { name: 'Lichien Vietnam Paper Products', subtitle: 'HRM rollout for a paper mill, standardizing employee records, timekeeping, shift planning, and operational data.', logo: lichienLogo, projectIndex: 6 },
    { name: 'Haiphong Steel Flower', subtitle: 'HRM implementation for a production environment: process discovery, workflow configuration, and user enablement.', logo: steelFlowerLogo, projectIndex: 7 },
    { name: 'Tripod Vietnam', subtitle: 'Coordinated HRM rollout across two independent factories, balancing site-specific configuration with consistent reporting.', logo: tripodLogo, projectIndex: 8 },
    { name: 'Saigon Wicker', subtitle: 'ERP discovery and delivery spanning CRM, sales, inventory, procurement, manufacturing, accounting, and HRM.', logo: saigonWickerLogo, projectIndex: 9 },
    { name: 'Viet Uc', subtitle: 'ERP consulting and implementation connecting CRM, sales, inventory, procurement, manufacturing, and accounting workflows.', logo: vietUcLogo, projectIndex: 10 },
    { name: 'Lotte Vietnam', subtitle: 'Implemented the Audit module, supporting activity monitoring and traceability within the system.', logo: lotteLogo },
  ],
  ja: [
    { name: 'Lichien Vietnam Paper Products', subtitle: '従業員情報、勤怠、シフト計画、運用データを標準化する製紙工場向けHRM導入。', logo: lichienLogo, projectIndex: 6 },
    { name: 'Haiphong Steel Flower', subtitle: '製造環境向けHRM導入：業務調査、ワークフロー設定、ユーザー研修。', logo: steelFlowerLogo, projectIndex: 7 },
    { name: 'Tripod Vietnam', subtitle: '2つの独立した工場へ一貫したレポートと現場別設定を備えるHRMを導入。', logo: tripodLogo, projectIndex: 8 },
    { name: 'Saigon Wicker', subtitle: 'CRM、販売、在庫、購買、製造、会計、人事を対象にERP導入を支援。', logo: saigonWickerLogo, projectIndex: 9 },
    { name: 'Viet Uc', subtitle: '製造業向けERPでCRM、販売、在庫、購買、製造、会計を連携。', logo: vietUcLogo, projectIndex: 10 },
    { name: 'Lotte Vietnam', subtitle: 'システム内の活動監視とトレーサビリティを支える監査モジュールを導入。', logo: lotteLogo },
  ],
  zh: [
    { name: 'Lichien Vietnam Paper Products', subtitle: '为造纸厂实施HRM，标准化员工档案、考勤、排班和运营数据。', logo: lichienLogo, projectIndex: 6 },
    { name: 'Haiphong Steel Flower', subtitle: '为生产环境实施HRM：业务调研、流程配置与用户培训。', logo: steelFlowerLogo, projectIndex: 7 },
    { name: 'Tripod Vietnam', subtitle: '在两个独立工厂实施HRM，兼顾工厂差异化配置与一致报告。', logo: tripodLogo, projectIndex: 8 },
    { name: 'Saigon Wicker', subtitle: 'ERP调研与交付覆盖CRM、销售、库存、采购、制造、会计和HRM。', logo: saigonWickerLogo, projectIndex: 9 },
    { name: 'Việt Úc', subtitle: '为制造企业实施ERP，连接CRM、销售、库存、采购、制造和会计流程。', logo: vietUcLogo, projectIndex: 10 },
    { name: 'Lotte Vietnam', subtitle: '实施审计模块，支持系统内活动监控与可追溯性。', logo: lotteLogo },
  ],
};

function Tags({ items, className = '' }) { return <ul className={`capability-tags ${className}`}>{items.map((item) => <li key={item}>{item}</li>)}</ul>; }
function StackIcons({ items }) { return <div className="capability-mini-card__stacks" aria-label={`Technology stack: ${items.join(', ')}`}>{items.map((item) => <span key={item}>{item}</span>)}</div>; }
function MiniCard({ title, text, stacks = [] }) { return <article className="capability-mini-card"><strong>{title}</strong><p>{text}</p>{stacks.length > 0 && <StackIcons items={stacks} />}</article>; }
function openProjectCase(projectIndex, event) {
  if (event) event.preventDefault();
  window.dispatchEvent(new CustomEvent('portfolio:open-project', { detail: { index: projectIndex } }));
  window.history.pushState(null, '', `#case-study-${projectIndex}`);
  window.dispatchEvent(new HashChangeEvent('hashchange'));
}

function ProjectLinks({ lang, label }) {
  const { projects, projectItems } = PROFESSIONAL_CONTEXT[lang] || PROFESSIONAL_CONTEXT.en;
  const heading = label || projects;
  return <section className="capability-context__projects capability-context__projects--showcase" aria-label={heading}><p>{heading}</p><div>{projectItems.map((project) => <a href={`#case-study-${project.projectIndex}`} key={`${project.target}-${project.name}`} onClick={(event) => openProjectCase(project.projectIndex, event)}><img src={project.logo} alt="" /><span><strong>{project.name}</strong><small>{project.subtitle}</small></span></a>)}</div></section>;
}
function ImplementationProjects({ lang }) {
  const projects = IMPLEMENTATION_PROJECTS[lang] || IMPLEMENTATION_PROJECTS.en;
  const heading = lang === 'vi' ? 'Dự án đã triển khai'
    : lang === 'ja' ? '導入実績プロジェクト'
    : lang === 'zh' ? '已交付项目'
    : 'Implemented projects';
  return <section className="capability-context__projects capability-context__projects--showcase" aria-label={heading}><p>{heading}</p><div>{projects.map((project) => project.projectIndex != null
    ? <a href={`#case-study-${project.projectIndex}`} key={project.name} onClick={(event) => openProjectCase(project.projectIndex, event)}><img src={project.logo} alt="" /><span><strong>{project.name}</strong><small>{project.subtitle}</small></span></a>
    : <article key={project.name}><img src={project.logo} alt="" /><span><strong>{project.name}</strong><small>{project.subtitle}</small></span></article>)}</div></section>;
}

function SoftwareDetail({ lang }) {
  const cards = {
    vi: [
      ['Front-end Development & UI Engineering', 'Phát triển giao diện web responsive theo kiến trúc component và SPA, chú trọng trải nghiệm người dùng, khả năng tái sử dụng và hiệu suất hiển thị.', ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'UI/UX Design']],
      ['Back-end Development & System Integration', 'Phát triển logic nghiệp vụ, tích hợp RESTful API và xử lý luồng dữ liệu giữa các thành phần hệ thống.', ['Java', 'Python', 'RESTful API', 'SQL Server']],
      ['Database Management & Query Optimization', 'Thiết kế và tối ưu truy vấn dữ liệu, phục vụ vận hành hệ thống, xử lý nghiệp vụ và xây dựng báo cáo.', ['SQL Server', 'NoSQL', 'Query Optimization']],
      ['Test Automation & AI-Assisted Development', 'Quản lý mã nguồn, phối hợp phát triển và ứng dụng AI trong kiểm thử, gỡ lỗi và tự động hóa quy trình làm việc.', ['Playwright', 'AI-Assisted Testing', 'Workflow Automation']],
    ],
    en: [
      ['Front-end Development & UI Engineering', 'Building responsive, component-based web interfaces and SPAs with emphasis on user experience, reusability, and rendering performance.', ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'UI/UX Design']],
      ['Back-end Development & System Integration', 'Implementing business logic, RESTful API integration, and data flows between system components.', ['Java', 'Python', 'RESTful API', 'SQL Server']],
      ['Database Management & Query Optimization', 'Designing and optimizing queries for operational data, reporting, and large-scale system workloads.', ['SQL Server', 'NoSQL', 'Query Optimization']],
      ['Test Automation & AI-Assisted Development', 'Managing source control and using AI-assisted tools for testing, debugging, and workflow automation.', ['Playwright', 'AI-Assisted Testing', 'Workflow Automation']],
    ],
    ja: [
      ['フロントエンド開発・UIエンジニアリング', 'レスポンシブで再利用可能なコンポーネントとSPAにより、ユーザー体験と表示性能を重視したWeb画面を構築します。', ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'UI/UX Design']],
      ['バックエンド開発・システム連携', '業務ロジック、RESTful API、システム間データフローを実装します。', ['Java', 'Python', 'RESTful API', 'SQL Server']],
      ['データベース管理・クエリ最適化', '運用データ、レポート、大規模処理に対応するクエリ設計と最適化を行います。', ['SQL Server', 'NoSQL', 'Query Optimization']],
      ['テスト自動化・AI支援開発', 'ソース管理とAI支援ツールを活用し、テスト、デバッグ、自動化を実施します。', ['Playwright', 'AI-Assisted Testing', 'Workflow Automation']],
    ],
    zh: [
      ['前端开发与UI工程', '构建响应式、组件化的SPA界面，注重用户体验、复用性与渲染性能。', ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'UI/UX Design']],
      ['后端开发与系统集成', '实现业务逻辑、RESTful API集成及系统组件间的数据流。', ['Java', 'Python', 'RESTful API', 'SQL Server']],
      ['数据库管理与查询优化', '面向运营数据、报告及大规模系统工作负载设计和优化查询。', ['SQL Server', 'NoSQL', 'Query Optimization']],
      ['测试自动化与AI辅助开发', '管理源码并使用AI辅助工具进行测试、调试及工作流自动化。', ['Playwright', 'AI-Assisted Testing', 'Workflow Automation']],
    ],
  }[lang] || [] ;
  return <div className="capability-layout capability-layout--software"><section className="capability-mini-grid">{cards.map(([title, text, stacks]) => <MiniCard key={title} title={title} text={text} stacks={stacks} />)}</section><ProjectLinks lang={lang} /></div>;
}

function DeliveryDetail({ skills, lang }) {
  const [modules, ...capabilities] = skills;
  return <div className="capability-layout capability-layout--delivery"><section className="capability-domains"><p>{lang === 'vi' ? 'Kinh nghiệm nghiệp vụ ERP / HRM' : 'ERP / HRM domain experience'}</p><div>{modules[2].map(([name, description]) => <article key={name}><strong>{name}</strong><span>{description}</span></article>)}</div></section><section className="capability-feature-grid">{capabilities.map(([title, text]) => <MiniCard key={title} title={title} text={text} />)}</section><ImplementationProjects lang={lang} /></div>;
}

function AIDetail({ skills, lang }) {
  const areas = skills.slice(0, 5).map(([title]) => title);
  const cases = [
    ['Prompt Engineering', skills[0]?.[1]],
    ['Loop Engine & Human-in-the-Loop', skills[2]?.[1]],
    ['Knowledge Base & RAG', skills[3]?.[1]],
    ['AI Agent', skills[4]?.[1]],
  ];
  const heading = lang === 'vi' ? 'Lĩnh vực AI ứng dụng'
    : lang === 'ja' ? '応用AI領域'
    : lang === 'zh' ? 'AI应用领域'
    : 'Applied AI areas';
  return <div className="capability-layout capability-layout--ai"><section className="capability-stack"><p>{heading}</p><Tags items={areas} /></section><section className="capability-mini-grid capability-mini-grid--ai-focus">{cases.map(([title, text]) => <MiniCard key={title} title={title} text={text} />)}</section></div>;
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
  const renderDetail = () => [<SoftwareDetail lang={lang} />, <DeliveryDetail skills={skills} lang={lang} />, <AIDetail skills={skills} lang={lang} />, <ProfessionalDetail skills={skills} />][selectedIndex];
  const selectCapability = (next) => { setSelectedIndex(next); document.getElementById(`professional-tab-${next}`)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest', inline: 'center' }); };
  const onKeyDown = (event) => { if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return; event.preventDefault(); const next = event.key === 'Home' ? 0 : event.key === 'End' ? 3 : (selectedIndex + (event.key === 'ArrowRight' ? 1 : -1) + 4) % 4; selectCapability(next); document.getElementById(`professional-tab-${next}`)?.focus(); };
  const tabLabel = lang === 'vi' ? 'Nhóm năng lực chuyên môn' : lang === 'ja' ? '専門能力グループ' : lang === 'zh' ? '专业能力类别' : 'Professional capability groups';
  return <div className="professional-showcase"><div className="professional-showcase__overview" role="tablist" aria-label={tabLabel} onKeyDown={onKeyDown}>{content.groups.map(([groupTitle], index) => { const item = OVERVIEW_META[index]; const [primary, secondary] = formatGroupTitle(groupTitle); return <button key={groupTitle} id={`professional-tab-${index}`} className={`capability-overview${selectedIndex === index ? ' is-selected' : ''}`} type="button" role="tab" aria-selected={selectedIndex === index} aria-controls={selectedId} tabIndex={selectedIndex === index ? 0 : -1} onClick={() => selectCapability(index)} style={{ '--capability-image': `url(${item.image})`, '--capability-image-position': item.position }}><span><strong>{primary}</strong>{secondary && <small>{secondary}</small>}</span></button>; })}</div><section id={selectedId} className={`capability-stage capability-stage--${selectedIndex}`} role="tabpanel" aria-labelledby={`professional-tab-${selectedIndex}`} tabIndex="0"><header><h3>{primaryTitle}<small>{secondaryTitle}</small></h3><p>{note}</p>{selectedIndex === 0 && <ProfessionalContext lang={lang} />}</header><div className="capability-stage__content" key={`${selectedIndex}-${title}`}>{renderDetail()}</div></section></div>;
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
  const viewLabels = lang === 'vi'
    ? { group: 'Chế độ hiển thị chuyên môn', human: 'Hồ sơ năng lực', ai: 'Cơ sở tri thức cho AI' }
    : lang === 'ja'
    ? { group: 'スキル表示モード', human: '人の視点', ai: 'AIナレッジベース' }
    : lang === 'zh'
    ? { group: '技能显示模式', human: '人员视角', ai: 'AI知识库' }
    : { group: 'Skills view', human: 'Human view', ai: 'Knowledge base for AI' };

  return <section id="technical" className="tech" aria-labelledby="tech-heading"><div className="container tech__inner"><header className="tech__header"><div className="tech__heading-row"><div><h2 id="tech-heading" className="section-title">{activeView.title}</h2></div><div className={`tech-view-toggle${view === 'ai' ? ' is-ai' : ''}`} role="group" aria-label={viewLabels.group}><span className="tech-view-toggle__indicator" aria-hidden="true" /><button type="button" className={view === 'human' ? 'is-active' : ''} onClick={() => setView('human')} aria-pressed={view === 'human'}>{viewLabels.human}</button><button type="button" className={view === 'ai' ? 'is-active' : ''} onClick={() => setView('ai')} aria-pressed={view === 'ai'}>{viewLabels.ai}</button></div></div><p className="section-subtitle">{activeView.subtitle}</p></header><div className="tech__view-content" key={view}>{view === 'human' ? <HumanView content={human} lang={lang} /> : <KnowledgeBaseView areas={areas} />}</div></div></section>;
}
