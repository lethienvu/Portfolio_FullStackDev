import bestEmp2024 from '../assets/bestEmployee/bestEmp2024.jpeg';
import bestEmpBanner from '../assets/bestEmployee/bestEmp_Banner.jpeg';

const en = {
  // Navbar
  nav: {
    experience: "Experience",
    technical: "Technical",
    projects: "Products & Solutions",
    contact: "Contact",
    hire: "Hire Me",
  },

  // Footer
  footer: {
    built: "Built with React + Vite.",
    aiNote: "Developed by Lê Thiên Vũ with AI assistance (Claude / Gemini)."
  },

  // Clients & Products
  clientsProducts: {
    clients: 'Featured Clients',
    products: 'Products Developed',
  },

  // Hero
  hero: {
    badge: "#OpenToWork",
    role: "Fullstack Software Engineer",
    roleSubtitle: "Implementation & Technical Leader · User Interface/User Experience (UI/UX) Design · Frontend Developer · Backend Developer · Business Analyst · Enterprise Resource Planning (ERP) Consultant",
    desc: "Software engineer with experience deploying large-scale HR systems for multinational corporations (Lotte, Nidec, Tripod, Haiphong Steel Flower). Specialized in fullstack development, performance optimization, system architecture, and project management.",
    stats: {
      exp: "2.5+ years experience",
      users: "14,000+ users",
      faster: "200% faster with AI",
    },
    cta: {
      projects: "View Projects →",
      contact: "Contact Me",
    },
    card: {
      title: "Fullstack Developer & Tech Lead",
      contactBtn: "Contact Me",
    },
  },

  // Experience
  experience: {
    sectionLabel: "Work History",
    title: "Career Timeline",
    subtitle: "Implemented and led Human Resource Management system deployments for <strong>10+</strong> enterprises, serving <strong>14,000+</strong> end-users across multinational corporations.",
    clientsLabel: "Key Clients",
    jobs: [
      {
        period: "06/2024 – Present",
        role: "Implementation & Technical Leader",
        company: "VIETIN SOFT Co., Ltd",
        companyDesc: "Developer of the Paradise HR Ecosystem serving tens of thousands of employees.",
        current: true,
        highlights: [
          "Orchestrated full-lifecycle implementation of Paradise HR for <strong>10+</strong> major clients: Lotte (<strong>~3,000</strong> employees), Nidec Advanced Motor (<strong>~4,000</strong> employees), Tripod Vietnam (2 factories, <strong>~4,000</strong> employees), Detmold Packaging (<strong>~2,000</strong> employees), Haiphong Steel Flower (<strong>~300</strong> employees). Total: <strong>14,000+</strong> end-users.",
          "Translated <strong>150+</strong> complex Human Resource business rules (Payroll, Core HR, Social Insurance, Timekeeping) into technical specifications, reducing requirement gaps by <strong>20–30%</strong>.",
          "Delivered complex modules in <strong>15–20</strong> days (vs. standard <strong>20–25</strong> days), within <strong>±5%</strong> budget. Achieved <strong>90–95%</strong> system stability during peak payroll. <strong>100%</strong> client retention rate.",
        ],
        kpis: [
          { value: "14,000+", label: "Users Managed" },
          { value: "90%", label: "Success Rate" },
          { value: "100%", label: "Client Retention" },
        ],
        tags: ["Vanilla JavaScript", "SPA Framework", "SQL Server", "Virtual Scrolling", "Java", "PWA", "UI/UX", "Design System", "Business Analysis", "Agile/Scrum"],
      },
      {
        period: "2024",
        role: "Employee of the Year 2024",
        company: "VIETIN SOFT Co., Ltd",
        current: false,
        highlights: ["Honored as the Employee of the Year 2024 for outstanding contributions to the successful implementation of Paradise HR for major enterprise partners and elevating the overall quality of the product ecosystem."],
        kpis: [],
        tags: ["Employee of the Year", "2024", "Award"],
        images: [bestEmp2024, bestEmpBanner],
      },
      {
        period: "12/08/2023 – 06/2024",
        role: "Software Engineer",
        company: "VIETIN SOFT Co., Ltd",
        current: false,
        highlights: [
          "Engineered a proprietary Single Page Application (SPA) Framework in Vanilla JavaScript — zero external dependencies, achieving sub-second initial load times and <strong>40%</strong> reduction in bundle size.",
          "Architected complex User Interface components: virtual scrolling and recursive tree views handling <strong>10,000+</strong> nodes at <strong>60fps</strong> with minimal memory footprint.",
          "Designed SQL Server schemas for millions of audit logs — partition tables, covering indexes, materialized views, and N+1 query elimination.",
        ],
        kpis: [],
        tags: ["Vanilla JavaScript", "SQL Server", "Performance Optimization", "Design System"],
      },
      {
        period: "12/06/2023 – 11/08/2023",
        role: "Software Engineer Intern",
        company: "VIETIN SOFT Co., Ltd",
        current: false,
        highlights: ["Learned enterprise system architecture and software development lifecycle.", "Assisted in developing core features and fixing bugs for the Paradise HR ecosystem."],
        kpis: [],
        tags: ["JavaScript", "Java", "SQL", "HTML/CSS"],
      },
      {
        period: "09/2019 – 05/2024",
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
    subtitle: "Open to discussing Fullstack / Tech Lead opportunities or sharing thoughts on system architecture and HR implementations.",
    formTitle: "Send a message",
    fields: {
      name: "Full Name",
      namePlaceholder: "John Doe",
      email: "Email",
      emailPlaceholder: "email@company.com",
      message: "Message",
      messagePlaceholder: "I'd like to discuss a collaboration opportunity...",
      submit: "Send Message →",
    },
    success: "✅ Thank you! I will get back to you within 24 hours.",
  },
};

export default en;
