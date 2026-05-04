import bestEmp2024 from '../assets/bestEmployee/bestEmp2024.jpeg';
import bestEmpBanner from '../assets/bestEmployee/bestEmp_Banner.jpeg';

const zh = {
  // Navbar
  nav: {
    home: "首页",
    experience: "经历",
    technical: "技术能力",
    projects: "产品与解决方案",
    contact: "联系",
    hire: "保存 vCard",
  },

  // Footer
  footer: {
    built: "使用 React + Vite 构建。",
    aiNote: "由 Lê Thiên Vũ 在 AI（Claude / Gemini）的协助下开发。"
  },

  // Clients & Products
  clientsProducts: {
    title: '客户',
    subtitle: '值得信赖的合作伙伴',
    clients: '特色客户',
    products: '开发的产品',
  },

  // Hero
  hero: {
    badge: "#OpenToWork",
    role: "Fullstack Software Engineer",
    roleSubtitle: "Implementation & Technical Leader · User Interface/User Experience (UI/UX) Design · Frontend Developer · Backend Developer · Business Analyst · Enterprise Resource Planning (ERP) Consultant",
    desc: "作为一名拥有近<strong>3年</strong>经验的<strong>全栈工程师兼技术实施负责人</strong>，我拥有深入的编程能力和直接的项目实施经验的独特组合。我已经为超过<strong>10家大型企业</strong>（服务超过<strong>14,000名用户</strong>）成功管理并部署了人力资源 (HR) 系统。凭借涵盖整个项目生命周期的全面思维，以及将<strong>多代理AI</strong>深度整合到工作流中以优化资源的能力，我始终确保项目效率的最大化。我正在寻找一家文化契合的公司进行长期承诺（3-5年），共同创造可持续的价值和卓越的软件解决方案。",
    stats: {
      exp: "3年以上经验",
      users: "14,000+ 用户",
      faster: "借助 AI 提升 200% 速度",
    },
    cta: {
      projects: "查看项目",
      contact: "保存 vCard",
    },
    card: {
      title: "全栈开发者 & 技术负责人",
      contactBtn: "保存 vCard",
    },
  },

  // Experience
  experience: {
    sectionLabel: "工作经历",
    title: "职业时间线",
    subtitle: "在 VIET TIN SOFTWARE 担任项目管理及实施负责人以及软件开发与系统架构师，为<strong>10多家</strong>大型企业客户提供端到端的HR生态系统，服务超过<strong>14,000名</strong>最终用户。",
    clientsLabel: "主要客户",
    jobs: [
      {
        period: "06/2023 – 至今",
        role: "项目管理 & 实施负责人",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        companyDesc: "服务于数万名员工的 Paradise HR 生态系统开发商。",
        current: true,
        highlights: [
          "端到端实施：统筹了 Paradise HR 软件在<strong>10多家大型企业客户</strong>（包括 Lotte ~3,000名员工, Nidec ~4,000名, Detmold ~3,000名, Tripod ~4,000名等）的全生命周期实施。成功管理了服务于超过<strong>14,000名最终用户</strong>合并劳动力的系统。",
          "业务到技术的转化：将<strong>150多项复杂的HR业务规则</strong>（核心人力、考勤、薪资、社保、员工自助服务、培训、KPI绩效、招聘等）转化为精确的技术规格，有效减少了<strong>20–30%</strong>的需求偏差。",
          "项目治理与交付：优化资源分配，保持<strong>90%的项目成功率</strong>。始终在<strong>15–20天</strong>内交付复杂的模块（优于标准的 20–25 天），同时严格将预算控制在初始预算的<strong>±5%</strong>以内。",
          "质量保证与客户关系：在薪资高峰期实现<strong>90–95%</strong>的系统稳定性，帮助客户将行政手动工作流程减少高达<strong>50%</strong>。这直接促成了<strong>100%的客户留存率</strong>。",
        ],
        kpis: [
          { value: "14,000+", label: "最终用户" },
          { value: "90%+", label: "成功率" },
          { value: "100%", label: "客户留存率" },
        ],
        tags: ["Vanilla JavaScript", "SPA Framework", "SQL Server", "Virtual Scrolling", "Java", "PWA", "UI/UX", "Design System", "Business Analysis", "Agile/Scrum"],
      },
      {
        period: "2024",
        role: "2024年度最佳员工",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        current: false,
        highlights: ["荣获2024年度最佳员工，以表彰其为大型企业合作伙伴成功实施 Paradise HR 以及提升产品生态系统整体质量所做出的杰出贡献。"],
        kpis: [],
        tags: ["Employee of the Year", "2024", "Award"],
        images: [bestEmp2024, bestEmpBanner],
      },
      {
        period: "08/2023 – 06/2024",
        role: "软件开发 & 系统架构",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        current: false,
        highlights: [
          "自定义 SPA 框架开发：使用 Vanilla JavaScript 设计了一个专有的单页应用程序 (SPA) 框架。消除了繁重的依赖，实现了亚秒级的初始加载时间，并将<strong>捆绑包大小减少了40%</strong>。",
          "高性能 UI 工程：构建了复杂的组件（虚拟滚动、递归树视图），能够以最小的内存占用在 <strong>60 FPS 下流畅渲染 10,000 多个节点</strong>。",
          "全栈生态系统所有权：领导了 Paradise HR 生态系统和 'Vào Ca' 移动 Web 应用程序的开发。针对高并发请求优化了排班逻辑，确保了成千上万次日常签到的 <strong>100% 数据完整性</strong>。",
          "数据库架构与优化：设计了强大的 SQL Server 模式来管理数百万条审计日志和大规模 HR 数据集。优化了 T-SQL 查询和存储过程，将复杂报告的生成时间<strong>从几分钟大幅缩短至几秒钟</strong>。",
        ],
        kpis: [],
        tags: ["Vanilla JavaScript", "SQL Server", "Performance Optimization", "Design System", "PWA", "Java"],
      },
      {
        period: "06/2023 – 08/2023",
        role: "实习软件工程师",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        current: false,
        highlights: ["学习了企业系统架构和软件开发生命周期。", "协助开发 Paradise HR 生态系统的核心功能并修复错误。"],
        kpis: [],
        tags: ["JavaScript", "Java", "SQL", "HTML/CSS"],
      },
      {
        period: "06/2019 – 11/2028",
        role: "软件工程专业学生",
        company: "西贡大学 (SGU)",
        companyDesc: "软件工程学士",
        current: false,
        highlights: ["掌握了计算机科学基础知识、数据结构和算法。", "完成了Web、移动和分布式系统方面的专业项目。"],
        kpis: [],
        tags: ["Computer Science", "Software Engineering", "Algorithms"],
      },
    ],
  },

  // Tech Deep-Dive
  tech: {
    sectionLabel: "工程深度",
    title: "技术深度剖析",
    subtitle: "在企业级实际生产环境中应用的深入技术和架构。",
    cards: [
      {
        icon: "frontend",
        title: "前端开发",
        desc: "使用 Vanilla JavaScript 开发了一个专有的单页应用程序 (SPA) 框架，实现了亚秒级的初始加载时间并将捆绑包大小减少了 40%。设计了虚拟滚动以 <strong>60fps</strong> 的速度流畅处理 <strong>10,000+</strong> 个节点。",
        skills: ["Vanilla JavaScript", "React", "SPA Architecture", "Virtual Scrolling", "State Management"],
        logos: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        ],
        metrics: [
          { value: "60fps", label: "性能" },
          { value: "-40%", label: "捆绑包大小" },
          { value: "10,000+", label: "DOM 节点" },
        ],
      },
      {
        icon: "backend",
        title: "后端开发",
        desc: "为包含数百万条记录的审计日志表优化了 SQL Server（分区表、覆盖索引）。构建了 RESTful 应用程序编程接口 (REST API) 和复杂的业务逻辑，确保了 <strong>100%</strong> 的数据完整性。",
        skills: ["Java", "SQL Server", "REST API", "Database Optimization", "High Concurrency"],
        logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"],
        metrics: [
          { value: "95%", label: "查询更快" },
          { value: "1,000,000+", label: "审计行数" },
          { value: "100%", label: "数据完整性" },
        ],
      },
      {
        icon: "uiux",
        title: "用户界面/用户体验 (UI/UX) 设计",
        desc: "设计了现代化的界面，优化了复杂的企业资源计划 (ERP) 系统的用户体验。专注于可用性、逻辑工作流和用于移动 Web 的渐进式 Web 应用程序 (PWA) 标准。",
        skills: ["Figma", "User Flow", "Responsive Design", "Wireframing", "PWA"],
        logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"],
        metrics: [
          { value: "100%", label: "响应式" },
          { value: "PWA", label: "离线模式" },
          { value: "3+", label: "主要系统" },
        ],
      },
      {
        icon: "techlead",
        title: "技术领导与项目管理",
        desc: "带领技术团队为 <strong>10+</strong> 家大型企业（<strong>>14,000</strong> 名用户）部署了 Paradise HR 生态系统。将复杂的业务规则转化为技术规范，提前 <strong>15-20%</strong> 交付。",
        skills: ["Agile/Scrum", "System Architecture", "Requirement Analysis", "Team Leadership"],
        logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg"],
        metrics: [
          { value: "14,000+", label: "最终用户" },
          { value: "+20%", label: "交付更快" },
          { value: "10+", label: "跨国公司" },
        ],
      },
      {
        icon: "ai",
        title: "AI 集成与性能优化",
        desc: "利用深度的 AI 集成来优化开发工作流程。利用 LLM 和 AI 驱动的工具自动化开发流程，将生产力提高了 <strong>200%</strong> 并最大程度地减少了技术错误。",
        skills: ["AI Integration", "Agent Skills", "Agent Henes", "Prompt Engineering", "Workflow Automation", "Claude/Gemini API"],
        logos: [
          'https://cdn.simpleicons.org/googlegemini',
          'https://cdn.simpleicons.org/githubcopilot'
        ],
        metrics: [
          { value: "200%", label: "生产力提升" },
          { value: "-30%", label: "开发时间" },
          { value: "AI-Native", label: "思维方式" },
        ],
      },
    ],
    demo: {
      title: "现场演示 — 虚拟滚动员工列表",
      desc: "10,000 名员工在任何时候只渲染了 <strong>~20</strong> 个 DOM 节点。滚动观察性能 — DOM 节点数保持不变。",
      badge: "10,000 条记录 · 现场演示",
    },
    table: {
      id: "员工ID",
      name: "姓名",
      department: "部门",
      status: "状态",
      joined: "入职时间",
      rowsOf: "行",
      of: "/",
      domNodes: "DOM 节点",
      rerenders: "重新渲染",
      statusLabels: { active: "在职", inactive: "离职", leave: "休假" },
    },
  },

  // Projects
  projects: {
    sectionLabel: "合作伙伴与产品",
    title: "客户与产品",
    subtitle: "已部署的客户公司和开发的软件生态系统列表。",
    clientTitle: "已部署的客户",
    productTitle: "开发的产品",
    items: [
      {
        featured: true,
        label: "企业人力资源管理平台",
        title: "Paradise HR",
        emoji: "🏢",
        bgColor: "linear-gradient(135deg, #dbeafe, #ede9fe)",
        desc: "为超过 10 家跨国公司（服务超过 <strong>14,000</strong> 名用户）提供全面的人力资源管理系统：乐天 (Lotte)、日本电产先进电机 (Nidec Advanced Motor)、越南健鼎 (Tripod Vietnam)、德墨尔包装 (Detmold Packaging)、海防钢铁花 (Haiphong Steel Flower)。涵盖薪资、核心人力、考勤、排班、社保和关键绩效指标 (KPI) 报告。",
        bullets: [
          "使用 Vanilla JavaScript 的专有单页应用程序 (SPA) 框架 — 亚秒级加载，捆绑包缩小 40%",
          "在稳定的 <strong>60fps</strong> 下实现 <strong>10,000+</strong> 员工节点的虚拟滚动",
          "SQL Server 优化：分区表、覆盖索引 — 亚秒级查询",
          "在 <strong>15–20</strong> 天内交付模块（标准为 <strong>20–25</strong> 天），客户留存率达到 <strong>100%</strong>",
        ],
        tags: ["Vanilla JavaScript", "SPA Framework", "SQL Server", "Java", "PWA", "UI/UX"],
      },
      {
        featured: false,
        label: "移动Web应用程序",
        title: "Vào Ca",
        emoji: "📱",
        bgColor: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
        desc: "供员工进行班次签到、查看日程安排和追踪加班的移动Web应用程序。针对高并发请求进行了优化，确保大量员工同时访问时的 <strong>100%</strong> 数据完整性。",
        bullets: ["渐进式Web应用程序 (PWA) — 可像原生应用一样安装，具有离线优先的 IndexedDB 同步功能", "高并发排班逻辑 — 保证 <strong>100%</strong> 数据完整性", "即将到来的班次的推送通知"],
        tags: ["PWA", "IndexedDB", "Service Worker", "Push API"],
      },
      {
        featured: false,
        label: "分析仪表板",
        title: "人力资源分析",
        emoji: "📊",
        bgColor: "linear-gradient(135deg, #fef3c7, #fde68a)",
        desc: "实时人力资源分析仪表板：离职率、部门绩效、加班成本和季度人员编制预测。自动化手动工作流程，将行政处理时间减少高达 <strong>50%</strong>。",
        bullets: ["优化图表渲染 — 重用 Canvas 上下文以提高性能", "带有 XLS 流的 Excel 报告导出", "自动化工作流程 — 手动处理时间减少 <strong>50%</strong>"],
        tags: ["Canvas API", "Chart.js", "Excel Export", "REST API"],
      },
      {
        featured: false,
        label: "审计与合规",
        title: "审计日志系统",
        emoji: "🔍",
        bgColor: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
        desc: "具有全文搜索、参与者/操作/实体过滤和时间线视图的大规模审计日志系统。为数百万条记录设计的 SQL Server 模式，具有高性能查询，以满足企业的合规要求。",
        bullets: ["SQL Server 每月分区表 — <strong>5,000,000+</strong> 行上的查询低于 <strong>200ms</strong>", "使用基于游标的分页的无限滚动", "导出 PDF 审计报告以用于合规文件"],
        tags: ["SQL Server", "Partitioning", "Cursor Pagination", "PDF Export"],
      },
    ],
  },

  // Product Images
  productImages: {
    sectionLabel: "产品",
    title: "开发的产品图像",
    subtitle: "精选的图像，展示了实际构建和部署的系统和应用程序。",
  },

  // Contact
  contact: {
    sectionLabel: "联系我",
    title: "联系方式",
    subtitle: "如果您正在寻找一位能够将复杂的业务逻辑与高性能技术架构相结合的领导者，让我们建立联系，共同推动卓越运营。",
    formTitle: "发送消息",
    fields: {
      name: "姓名",
      namePlaceholder: "张三",
      email: "电子邮件",
      emailPlaceholder: "email@company.com",
      message: "留言",
      messagePlaceholder: "我想讨论一下合作机会...",
      submit: "发送消息",
    },
    success: "✅ 谢谢！我将在 24 小时内回复您。",
  },
};

export default zh;
