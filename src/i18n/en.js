import bestEmp2024 from '../assets/bestEmployee/bestEmp2024.jpeg';
import bestEmpBanner from '../assets/bestEmployee/bestEmp_Banner.jpeg';

const en = {
  // Navbar
  nav: {
    home: "Home",
    experience: "Experience",
    technical: "Technical",
    projects: "Products & Solutions",
    contact: "Contact",
    hire: "Save vCard",
  },

  // Footer
  footer: {
    built: "Built with React + Vite.",
    aiNote: "Developed by Lê Thiên Vũ with AI assistance (Claude / Gemini)."
  },

  // Clients & Products
  clientsProducts: {
    title: 'Clients',
    subtitle: 'Trusted partners we have worked with',
    clients: 'Featured Clients',
    products: 'Products Developed',
  },

  // Hero
  hero: {
    badge: "#OpenToWork",
    role: "Fullstack Software Engineer",
    roleSubtitle: "Implementation & Technical Leader · User Interface/User Experience (UI/UX) Design · Frontend Developer · Backend Developer · Business Analyst · Enterprise Resource Planning (ERP) Consultant",
    desc: "As a <strong>Full-stack Engineer & Technical Implementation Lead</strong> with nearly <strong>3 years</strong> of experience, I possess a unique combination of in-depth programming capabilities and direct project implementation experience. I have managed and successfully deployed Human Resources (HR) systems for over <strong>10 major enterprises</strong> serving <strong>14,000+ users</strong>. With a comprehensive mindset encompassing the entire project lifecycle and the ability to deeply integrate <strong>Multi-agent AI</strong> into workflows to optimize resources, I consistently ensure maximum project efficiency. I am seeking a company with cultural alignment for a long-term commitment (3-5 years) to co-create sustainable values and outstanding software solutions.",
    stats: {
      exp: "3+ years experience",
      users: "14,000+ users",
      faster: "200% faster with AI",
    },
    cta: {
      projects: "View Projects",
      contact: "Save vCard",
    },
    card: {
      title: "Fullstack Developer & Tech Lead",
      contactBtn: "Save vCard",
    },
  },

  // Experience
  experience: {
    sectionLabel: "Work History",
    title: "Career Timeline",
    subtitle: "Project Management & Implementation Lead and Software Development & System Architecture at VIET TIN SOFTWARE, delivering end-to-end HR ecosystems for <strong>10+</strong> major corporate clients serving <strong>14,000+</strong> end-users.",
    clientsLabel: "Key Clients",
    jobs: [
      {
        period: "06/2023 – Present",
        role: "Project Management & Implementation Lead",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        companyDesc: "Developer of the Paradise HR Ecosystem serving tens of thousands of employees.",
        current: true,
        highlights: [
          "End-to-End Implementation: Orchestrated the full-lifecycle implementation of Paradise HR software for <strong>10+ major corporate clients</strong> (including Lotte ~3,000 employees, Nidec ~4,000, Detmold ~3,000, Tripod ~4,000, etc.). Successfully managed systems serving a combined workforce of over <strong>14,000+ end-users</strong>.",
          "Business-to-Technical Translation: Translated <strong>150+ intricate HR business rules</strong> (Core HR, Time & Attendance, Payroll, Social Insurance, Employee Self-Services, Training, KPI Performance, Hiring, etc.) into precise technical specifications, effectively reducing requirement gaps by <strong>20–30%</strong>.",
          "Project Governance & Delivery: Optimized resource allocation to maintain a <strong>90% project success rate</strong>. Consistently delivered complex modules in <strong>15–20 days</strong> (outperforming the 20–25 days standard) while staying strictly within <strong>±5%</strong> of the initial budget.",
          "Quality Assurance & Client Relations: Achieved <strong>90–95%</strong> system stability during peak payroll periods, helping clients reduce administrative manual workflows by up to <strong>50%</strong>. This directly contributed to a <strong>100% client retention rate</strong>.",
        ],
        kpis: [
          { value: "14,000+", label: "End-Users" },
          { value: "90%+", label: "Success Rate" },
          { value: "100%", label: "Client Retention" },
        ],
        tags: ["Vanilla JavaScript", "SPA Framework", "SQL Server", "Virtual Scrolling", "Java", "PWA", "UI/UX", "Design System", "Business Analysis", "Agile/Scrum"],
      },
      {
        period: "2024",
        role: "Employee of the Year 2024",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        current: false,
        highlights: ["Honored as the Employee of the Year 2024 for outstanding contributions to the successful implementation of Paradise HR for major enterprise partners and elevating the overall quality of the product ecosystem."],
        kpis: [],
        tags: ["Employee of the Year", "2024", "Award"],
        images: [bestEmp2024, bestEmpBanner],
      },
      {
        period: "08/2023 – 06/2024",
        role: "Software Development & System Architecture",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        current: false,
        highlights: [
          "Custom SPA Framework Development: Engineered a proprietary Single Page Application (SPA) Framework using Vanilla JavaScript. Eliminated heavy dependencies to achieve sub-second initial load times and a <strong>40% reduction in bundle size</strong>.",
          "High-Performance UI Engineering: Architected complex components (virtual scrolling, recursive tree views) capable of rendering <strong>10,000+ nodes smoothly at 60 FPS</strong> with a minimal memory footprint.",
          "Full-Stack Ecosystem Ownership: Led the development of the Paradise HR ecosystem and the 'Vào Ca' mobile web app. Optimized shift-management logic for high-concurrency requests, ensuring <strong>100% data integrity</strong> for thousands of daily check-ins.",
          "Database Architecture & Optimization: Designed robust SQL Server schemas to manage millions of audit logs and massive HR datasets. Optimized T-SQL queries and stored procedures, dramatically reducing complex report generation time <strong>from minutes to seconds</strong>.",
        ],
        kpis: [],
        tags: ["Vanilla JavaScript", "SQL Server", "Performance Optimization", "Design System", "PWA", "Java"],
      },
      {
        period: "06/2023 – 08/2023",
        role: "Intern Software Engineer",
        company: "VIET TIN SOFTWARE SOLUTION COMPANY LIMITED",
        current: false,
        highlights: ["Learned enterprise system architecture and software development lifecycle.", "Assisted in developing core features and fixing bugs for the Paradise HR ecosystem."],
        kpis: [],
        tags: ["JavaScript", "Java", "SQL", "HTML/CSS"],
      },
      {
        period: "06/2019 – 11/2028",
        role: "Software Engineering Student",
        company: "Saigon University (SGU)",
        companyDesc: "Bachelor of Software Engineering",
        current: false,
        highlights: ["Mastered computer science fundamentals, data structures, and algorithms.", "Completed specialized projects in web, mobile, and distributed systems."],
        kpis: [],
        tags: ["Computer Science", "Software Engineering", "Algorithms"],
      },
    ],
  },

  // Tech Deep-Dive
  tech: {
    sectionLabel: "Engineering Depth",
    title: "Technical Deep-Dive",
    subtitle: "In-depth techniques and architectures applied in real production environments at enterprise scale.",
    cards: [
      {
        icon: "frontend",
        title: "Front-end Development",
        desc: "Developed a proprietary Single Page Application (SPA) Framework using Vanilla JavaScript to achieve sub-second initial load times and a 40% bundle size reduction. Designed Virtual Scrolling to handle <strong>10,000+</strong> nodes smoothly at <strong>60fps</strong>.",
        skills: ["Vanilla JavaScript", "React", "SPA Architecture", "Virtual Scrolling", "State Management"],
        logos: [
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        ],
        metrics: [
          { value: "60fps", label: "Performance" },
          { value: "-40%", label: "Bundle size" },
          { value: "10,000+", label: "DOM Nodes" },
        ],
      },
      {
        icon: "backend",
        title: "Back-end Development",
        desc: "Optimized SQL Server for audit log tables containing millions of records (partition tables, covering indexes). Architected RESTful Application Programming Interfaces (REST APIs) and complex business logic ensuring <strong>100%</strong> data integrity.",
        skills: ["Java", "SQL Server", "REST API", "Database Optimization", "High Concurrency"],
        logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"],
        metrics: [
          { value: "95%", label: "Query Faster" },
          { value: "1,000,000+", label: "Audit Rows" },
          { value: "100%", label: "Data Integrity" },
        ],
      },
      {
        icon: "uiux",
        title: "User Interface/User Experience (UI/UX) Design",
        desc: "Designed modern interfaces optimizing User Experience for complex Enterprise Resource Planning (ERP) systems. Focused on usability, logical workflows, and Progressive Web App (PWA) standards for mobile webs.",
        skills: ["Figma", "User Flow", "Responsive Design", "Wireframing", "PWA"],
        logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"],
        metrics: [
          { value: "100%", label: "Responsive" },
          { value: "PWA", label: "Offline Mode" },
          { value: "3+", label: "Major Systems" },
        ],
      },
      {
        icon: "techlead",
        title: "Technical Leadership & Project Management",
        desc: "Led technical teams to deploy the Paradise HR ecosystem for <strong>10+</strong> major enterprises (<strong>>14,000</strong> users). Translated complex business rules into technical specifications, delivering <strong>15-20%</strong> ahead of schedule.",
        skills: ["Agile/Scrum", "System Architecture", "Requirement Analysis", "Team Leadership"],
        logos: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg"],
        metrics: [
          { value: "14,000+", label: "End Users" },
          { value: "+20%", label: "Faster Delivery" },
          { value: "10+", label: "Multinational Corporations" },
        ],
      },
      {
        icon: "ai",
        title: "AI Integration & Performance Optimization",
        desc: "Leveraging deep AI integration to optimize development workflows. Utilizing LLMs and AI-driven tools to automate development processes, boosting productivity by <strong>200%</strong> and minimizing technical errors.",
        skills: ["AI Integration", "Agent Skills", "Agent Henes", "Prompt Engineering", "Workflow Automation", "Claude/Gemini API"],
        logos: [
          'https://cdn.simpleicons.org/googlegemini',
          'https://cdn.simpleicons.org/githubcopilot'
        ],
        metrics: [
          { value: "200%", label: "Productivity Boost" },
          { value: "-30%", label: "Dev Time" },
          { value: "AI-Native", label: "Mindset" },
        ],
      },
    ],
    demo: {
      title: "Live Demo — Virtual Scroll Employee List",
      desc: "10,000 employees rendered with only <strong>~20</strong> DOM nodes at any moment. Scroll to observe performance — the DOM node count stays constant.",
      badge: "10,000 records · Live",
    },
    table: {
      id: "Employee ID",
      name: "Full Name",
      department: "Department",
      status: "Status",
      joined: "Joined",
      rowsOf: "Rows",
      of: "of",
      domNodes: "DOM nodes",
      rerenders: "Re-renders",
      statusLabels: { active: "Active", inactive: "Inactive", leave: "On Leave" },
    },
  },

  // Projects
  projects: {
    sectionLabel: "Partners & Products",
    title: "Clients & Products",
    subtitle: "List of deployed client companies and developed software ecosystem.",
    clientTitle: "Deployed Clients",
    productTitle: "Developed Products",
    items: [
      {
        featured: true,
        label: "Enterprise Human Resource Management Platform",
        title: "Paradise HR",
        emoji: "🏢",
        bgColor: "linear-gradient(135deg, #dbeafe, #ede9fe)",
        desc: "Comprehensive Human Resource Management system for 10+ multinational corporations serving <strong>14,000+</strong> users: Lotte, Nidec Advanced Motor, Tripod Vietnam, Detmold Packaging, Haiphong Steel Flower. Covers Payroll, Core HR, Timekeeping, Shift Scheduling, Social Insurance, and Key Performance Indicator (KPI) reporting.",
        bullets: [
          "Proprietary Single Page Application (SPA) Framework in Vanilla JavaScript — sub-second load, 40% smaller bundle",
          "Virtual Scrolling for <strong>10,000+</strong> employee nodes at stable <strong>60fps</strong>",
          "SQL Server optimization: partition tables, covering indexes — sub-second queries",
          "Modules delivered in <strong>15–20</strong> days (vs. <strong>20–25</strong> days standard), <strong>100%</strong> client retention",
        ],
        tags: ["Vanilla JavaScript", "SPA Framework", "SQL Server", "Java", "PWA", "UI/UX"],
      },
      {
        featured: false,
        label: "Mobile-Web Application",
        title: "Vào Ca",
        emoji: "📱",
        bgColor: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
        desc: "Mobile-web application for employees to check in for shifts, view schedules, and track overtime. Optimized for high-concurrency requests, ensuring <strong>100%</strong> data integrity when large numbers of employees access simultaneously.",
        bullets: ["Progressive Web App (PWA) — installable like a native app with offline-first IndexedDB sync", "High-concurrency shift logic — <strong>100%</strong> data integrity guaranteed", "Push notifications for upcoming shifts"],
        tags: ["PWA", "IndexedDB", "Service Worker", "Push API"],
      },
      {
        featured: false,
        label: "Analytics Dashboard",
        title: "Human Resource Analytics",
        emoji: "📊",
        bgColor: "linear-gradient(135deg, #fef3c7, #fde68a)",
        desc: "Real-time Human Resource analytics dashboard: turnover rates, departmental performance, overtime costs, and quarterly headcount forecasting. Automated manual workflows, reducing administrative processing time by up to <strong>50%</strong>.",
        bullets: ["Optimized chart rendering — reusing Canvas context for performance", "Excel report export with XLS streaming", "Automated workflows — <strong>50%</strong> reduction in manual processing time"],
        tags: ["Canvas API", "Chart.js", "Excel Export", "REST API"],
      },
      {
        featured: false,
        label: "Audit & Compliance",
        title: "Audit Log System",
        emoji: "🔍",
        bgColor: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
        desc: "Large-scale audit log system with full-text search, actor/action/entity filtering, and timeline view. SQL Server schema designed for millions of records with high-performance querying to meet enterprise compliance requirements.",
        bullets: ["SQL Server monthly partition tables — queries under <strong>200ms</strong> on <strong>5,000,000+</strong> rows", "Infinite scroll with cursor-based pagination", "PDF audit report export for compliance documentation"],
        tags: ["SQL Server", "Partitioning", "Cursor Pagination", "PDF Export"],
      },
    ],
  },

  // Product Images
  productImages: {
    sectionLabel: "Products",
    title: "Developed Product Images",
    subtitle: "A selection of images showcasing the actual systems and applications built and deployed.",
  },

  // Contact
  contact: {
    sectionLabel: "Get In Touch",
    title: "Contact",
    subtitle: "If you are looking for a leader who bridges complex business logic with high-performance technical architecture, let's connect to drive operational excellence together.",
    formTitle: "Send a message",
    fields: {
      name: "Full Name",
      namePlaceholder: "John Doe",
      email: "Email",
      emailPlaceholder: "email@company.com",
      message: "Message",
      messagePlaceholder: "I'd like to discuss a collaboration opportunity...",
      submit: "Send Message",
    },
    success: "✅ Thank you! I will get back to you within 24 hours.",
  },
};

export default en;
