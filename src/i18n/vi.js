import bestEmp2024 from '../assets/bestEmployee/bestEmp2024.jpeg';
import bestEmpBanner from '../assets/bestEmployee/bestEmp_Banner.jpeg';

const vi = {
  // Navbar
  nav: {
    home:       'Giới thiệu',
    experience: 'Kinh nghiệm',
    technical:  'Chuyên môn',
    projects:   'Dự án nổi bật',
    contact:    'Liên hệ',
    hire:       'Lưu vCard',
  },

  // Footer
  footer: {
    built: 'Xây dựng với React + Vite.',
    aiNote: 'Thiết kế và phát triển bởi Lê Thiên Vũ.',
  },

  // Clients & Products
  clientsProducts: {
    title: 'Khách hàng',
    subtitle: 'Các đối tác đã tin tưởng và hợp tác',
    clients: 'Khách hàng tiêu biểu',
    products: 'Sản phẩm đã phát triển',
  },

  // Hero
  hero: {
    badge:       '#openToWork',
    role:        'Software Engineer | ERP Implementation Specialist — Kỹ sư Phần mềm | Chuyên viên Triển khai ERP',
    roleSubtitle:'Full-stack Technical Delivery · Triển khai HR/ERP · Thiết kế UI/UX · Frontend Developer · Backend Developer · Business Analysis · Tư vấn ERP',
    desc:        'Với gần 4 năm kinh nghiệm trong lĩnh vực phần mềm, tôi có kinh nghiệm ở cả hai vai trò phát triển và triển khai hệ thống ERP/HRM. Từ thiết kế giao diện, xây dựng logic nghiệp vụ, tối ưu hiệu suất hệ thống đến phân tích yêu cầu, giải quyết bài toán thực tế và đồng hành cùng khách hàng triển khai các giải pháp phù hợp với đặc thù từng doanh nghiệp.\n\nTôi đề cao tinh thần trách nhiệm, tư duy cải tiến và sự chủ động, không ngừng tối ưu quy trình làm việc và ứng dụng AI nhằm nâng cao hiệu suất, chất lượng công việc.\n\nTôi mong muốn tìm kiếm một môi trường có văn hóa làm việc và định hướng phát triển tương đồng, nơi tôi có thể phát huy năng lực, đóng góp giá trị thực tiễn và gắn bó lâu dài.',
    stats: {
      exp:    'năm kinh nghiệm',
      users:  'người dùng',
      faster: 'tăng hiệu suất nhờ AI Agent & Workflow AI',
    },
    cta: {
      cv:       'Tải CV',
      projects: 'Xem case studies',
    },
    card: {
      title:      'Software Engineer | ERP Implementation Specialist — Kỹ sư Phần mềm | Chuyên viên Triển khai ERP',
      contactBtn: 'Lưu vCard',
    },
  },

  // Experience
  experience: {
    sectionLabel: 'Kinh nghiệm làm việc',
    title:        'Dòng thời gian làm việc',
    subtitle:     'Kinh nghiệm triển khai, phân tích nghiệp vụ và phối hợp kỹ thuật cho hệ thống HR/ERP tại <strong>10+</strong> doanh nghiệp, phục vụ hơn <strong>14.000</strong> người dùng cuối.',
    clientsLabel: 'Khách hàng tiêu biểu',
    jobs: [
      {
        period:  '06/2026 – 11/2026',
        role:    'Cố vấn & Điều phối Triển khai Dự án (Advisor & Project Delivery)',
        company: 'Công ty Cổ phần ASOFT',
        companyDesc: 'Tư vấn và triển khai giải pháp ERP cho doanh nghiệp sản xuất.',
        current: false,
        highlights: [
          'Dự án <strong>Saigon Wicker</strong> (sản xuất bàn ghế, xuất khẩu): khảo sát và phân tích nghiệp vụ; tư vấn, thống nhất giải pháp ERP cho CRM, Bán hàng, Kho, Mua hàng, Sản xuất, Kế toán và HRM.',
          'Dự án <strong>Việt Úc</strong> (sản xuất cửa nhôm và giải pháp bảo vệ “may đo”): khảo sát và phân tích nghiệp vụ; tư vấn, thống nhất giải pháp ERP cho CRM, Bán hàng, Kho, Mua hàng, Sản xuất và Kế toán.',
          'Hỗ trợ triển khai, tư vấn và đào tạo onsite cho các dự án <strong>GENEPA, DBW, TRUNG THÀNH SILLWELL</strong> và các khách hàng khác.',
        ],
        kpis: [],
        tags: ['ERP Consulting', 'Project Delivery', 'Business Analysis', 'CRM', 'Sales', 'Inventory', 'Procurement', 'Manufacturing', 'Accounting', 'HRM'],
      },
      {
        period:  '06/2023 – Hiện tại',
        role:    'Quản lý Dự án & Trưởng nhóm Triển khai (Project Management & Implementation Lead)',
        company: 'Công ty TNHH Giải pháp Phần mềm Việt Tín (VIET TIN SOFTWARE SOLUTION COMPANY LIMITED)',
        companyDesc: 'Đơn vị phát triển Hệ sinh thái Paradise HR phục vụ hàng chục ngàn nhân sự.',
        current: true,
        highlights: [
          'Triển khai Toàn diện: Điều phối toàn bộ vòng đời triển khai hệ thống Paradise HR cho <strong>10+ doanh nghiệp lớn</strong> (Lotte ~3.000 nhân viên, Nidec ~4.000, Detmold ~3.000, Tripod ~4.000, v.v.). Quản lý thành công hệ thống phục vụ tổng cộng hơn <strong>14.000+ người dùng cuối</strong>.',
          'Chuyển đổi Nghiệp vụ sang Kỹ thuật: Phân tích <strong>150+ quy trình HR phức tạp</strong> (Hồ sơ nhân sự, Chấm công, Tính lương, Bảo hiểm xã hội, Cổng nhân viên, Đào tạo, KPI, Tuyển dụng, v.v.) thành đặc tả kỹ thuật chi tiết, giảm khoảng cách yêu cầu <strong>20–30%</strong>.',
          'Quản trị & Bàn giao Dự án: Tối ưu phân bổ nguồn lực để duy trì <strong>tỷ lệ thành công 90%</strong>. Liên tục bàn giao module phức tạp trong <strong>15–20 ngày</strong> (vượt tiêu chuẩn 20–25 ngày) trong biên ngân sách <strong>±5%</strong>.',
          'Đảm bảo Chất lượng & Quan hệ Khách hàng: Phối hợp theo dõi và xử lý vấn đề vận hành trong các đợt cao điểm tính lương, góp phần giảm khoảng <strong>50%</strong> thao tác thủ công cho các luồng đã triển khai và duy trì hợp tác với nhóm khách hàng trực tiếp phụ trách.',
        ],
        kpis: [
          { value: '14.000+', label: 'Người dùng cuối' },
          { value: '90%+',   label: 'Tỷ lệ thành công' },
          { value: '10+',   label: 'Doanh nghiệp triển khai' },
        ],
        tags: ['Vanilla JavaScript', 'SPA Framework', 'SQL Server', 'HTML/CSS', 'Java', 'PWA', 'UI/UX', 'Design System', 'Business Analysis', 'Agile/Scrum'],
      },
      {
        period:  '2024',
        role:    'Nhân viên xuất sắc của năm 2024',
        company: 'Công ty TNHH Giải pháp Phần mềm Việt Tín (VIET TIN SOFTWARE SOLUTION COMPANY LIMITED)',
        current: false,
        highlights: [
          'Được vinh danh danh hiệu Nhân viên xuất sắc nhất năm 2024 nhờ những đóng góp quan trọng trong việc triển khai thành công hệ thống Paradise HR cho các đối tác lớn và giải pháp tối ưu quy trình làm việc, tăng hiệu suất, nâng cao chất lượng hệ sinh thái sản phẩm.',
        ],
        kpis: [],
        tags: ['Employee of the Year', '2024', 'Award'],
        images: [
          bestEmp2024,
          bestEmpBanner
        ]
      },
      {
        period:  '08/2023 – 06/2024',
        role:    'Phát triển Phần mềm & Kiến trúc Hệ thống (Software Development & System Architecture)',
        company: 'Công ty TNHH Giải pháp Phần mềm Việt Tín (VIET TIN SOFTWARE SOLUTION COMPANY LIMITED)',
        current: false,
        highlights: [
          'Phát triển SPA Framework tùy chỉnh: Tự xây dựng Khung ứng dụng đơn trang (SPA Framework) bằng JavaScript thuần. Loại bỏ phụ thuộc nặng để đạt thời gian tải dưới một giây và giảm <strong>40% kích thước gói</strong>.',
          'Kỹ thuật UI Hiệu suất Cao: Thiết kế các thành phần phức tạp (cuộn ảo, cây đệ quy) có khả năng render <strong>10.000+ nút mượt mà tại 60 FPS</strong> với dung lượng bộ nhớ tối thiểu.',
          'Sở hữu Hệ sinh thái Toàn diện: Dẫn đầu phát triển hệ sinh thái Paradise HR và ứng dụng di động Vào Ca. Tối ưu logic quản lý ca cho yêu cầu đồng thời cao, bổ sung kiểm tra trạng thái và dữ liệu đầu vào để duy trì tính nhất quán trong các luồng đã triển khai.',
          'Kiến trúc & Tối ưu Cơ sở Dữ liệu: Thiết kế cấu trúc SQL Server để quản lý hàng triệu bản ghi kiểm toán. Tối ưu T-SQL và stored procedures, giảm thời gian tạo báo cáo phức tạp <strong>từ vài phút xuống còn vài giây</strong>.',
        ],
        kpis: [],
        tags: ['Vanilla JavaScript', 'SQL Server', 'Performance Optimization', 'Design System', 'PWA', 'Java'],
      },
      {
        period:  '06/2023 – 08/2023',
        role:    'Thực tập sinh Kỹ sư Phần mềm (Intern Software Engineer)',
        company: 'Công ty TNHH Giải pháp Phần mềm Việt Tín (VIET TIN SOFTWARE SOLUTION COMPANY LIMITED)',
        current: false,
        highlights: [
          'Tìm hiểu kiến trúc hệ thống và quy trình phát triển phần mềm doanh nghiệp.',
          'Tham gia hỗ trợ phát triển các tính năng cơ bản và sửa lỗi cho hệ thống Paradise HR.',
        ],
        kpis: [],
        tags: ['JavaScript', 'Java', 'SQL', 'HTML/CSS'],
      },
      {
        period:  '06/2019 – 11/2024',
        role:    'Sinh viên Kỹ thuật Phần mềm',
        company: 'Đại học Sài Gòn (SGU)',
        companyDesc: 'Kỹ sư Phần mềm (Software Engineering)',
        current: false,
        highlights: [
          'Nắm vững nền tảng khoa học máy tính, cấu trúc dữ liệu và giải thuật.',
          'Thực hiện các đồ án chuyên ngành về web, di động và hệ thống phân tán.',
        ],
        kpis: [],
        tags: ['Computer Science', 'Software Engineering', 'Algorithms'],
      },
    ],
  },

  // Tech Deep-Dive
  tech: {
    sectionLabel: 'Chuyên sâu kỹ thuật',
    title:        'Chuyên môn Kỹ thuật',
    subtitle:     'Các kỹ thuật và kiến trúc chuyên sâu đã áp dụng trong môi trường dự án thực tế.',
    cards: [
      {
        icon:  'frontend',
        title: 'Phát triển Giao diện Người dùng (Front-end Development)',
        desc:  'Phát triển Khung ứng dụng đơn trang (SPA Framework) tự xây dựng bằng JavaScript thuần giúp đạt thời gian tải ban đầu dưới một giây và giảm <strong>40%</strong> kích thước gói. Thiết kế Cuộn ảo (Virtual Scrolling) xử lý <strong>10.000+</strong> nút mượt mà ở <strong>60fps</strong>.',
        skills: ['JavaScript thuần', 'React', 'Kiến trúc SPA', 'HTML/CSS', 'Quản lý trạng thái (State Management)'],
        logos: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
        ],
        metrics: [{ value: '60fps', label: 'Hiệu suất render' }, { value: '-40%', label: 'Kích thước gói' }, { value: '10.000+', label: 'Nút xử lý' }],
      },
      {
        icon:  'backend',
        title: 'Phát triển Hệ thống Phía sau (Back-end Development)',
        desc:  'Tối ưu hóa SQL Server cho bảng nhật ký kiểm toán hàng triệu bản ghi (phân vùng bảng, chỉ mục bao phủ). Thiết kế giao diện lập trình ứng dụng RESTful (REST API) và kiến trúc xử lý nghiệp vụ phức tạp với kiểm tra dữ liệu và kiểm soát giao dịch phù hợp.',
        skills: ['Java', 'SQL Server', 'REST API', 'Tối ưu cơ sở dữ liệu', 'Xử lý đồng thời cao (High Concurrency)'],
        logos: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
        ],
        metrics: [{ value: 'T-SQL', label: 'Tối ưu truy vấn' }, { value: '1.000.000+', label: 'Bản ghi kiểm toán' }, { value: 'ACID', label: 'Kiểm soát dữ liệu' }],
      },
      {
        icon:  'uiux',
        title: 'Thiết kế Giao diện & Trải nghiệm Người dùng (UI/UX Design)',
        desc:  'Thiết kế giao diện hiện đại, tối ưu trải nghiệm người dùng cho hệ thống Hoạch định Nguồn lực Doanh nghiệp (ERP) phức tạp. Tập trung tính khả dụng, luồng thao tác hợp lý, và thiết kế chuẩn Ứng dụng Web tiến bộ (PWA) cho Web Di động.',
        skills: ['Figma', 'Luồng người dùng (User Flow)', 'Thiết kế đáp ứng (Responsive Design)', 'Khung dây (Wireframing)', 'PWA'],
        logos: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
        ],
        metrics: [{ value: 'Responsive', label: 'Thiết kế đáp ứng' }, { value: 'PWA', label: 'Chế độ ngoại tuyến' }, { value: '3+', label: 'Hệ thống lớn' }],
      },
      {
        icon:  'techlead',
        title: 'Trưởng nhóm Kỹ thuật & Quản lý Dự án',
        desc:  'Dẫn dắt đội ngũ triển khai hệ sinh thái Paradise HR cho <strong>10+</strong> doanh nghiệp lớn (<strong>>14.000</strong> người dùng). Quản lý yêu cầu, chuyển đổi nghiệp vụ phức tạp thành đặc tả kỹ thuật, bàn giao vượt tiến độ.',
        skills: ['Agile/Scrum', 'Kiến trúc hệ thống', 'Phân tích yêu cầu', 'Lãnh đạo đội ngũ'],
        logos: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg'
        ],
        metrics: [{ value: '14.000', label: 'Người dùng cuối' }, { value: '+20%', label: 'Vượt tiến độ' }, { value: '5+', label: 'Tập đoàn đa quốc gia' }],
      },
      {
        icon:  'ai',
        title: 'Tích hợp AI & Tối ưu hóa Hiệu suất',
        desc:  'Ứng dụng LLM vào phân tích yêu cầu, tạo bản nháp tài liệu kỹ thuật và chuẩn hóa testcase, với bước rà soát của con người trước khi sử dụng kết quả trong quy trình làm việc.',
        skills: ['AI Integration', 'AI Agent Workflows', 'Prompt Engineering', 'Workflow Automation', 'Claude/Gemini API'],
        logos: [
          'https://cdn.simpleicons.org/googlegemini',
          'https://cdn.simpleicons.org/githubcopilot'
        ],
        metrics: [{ value: 'HITL', label: 'Human review' }, { value: 'LLM', label: 'Hỗ trợ tác vụ' }, { value: 'AI-Native', label: 'Tư duy' }],
      },
    ],
    demo: {
      title: 'Trình diễn Trực tiếp — Danh sách Nhân viên Cuộn ảo',
      desc:  'Danh sách 10.000 nhân viên chỉ render <strong>~20</strong> nút DOM tại bất kỳ thời điểm nào. Cuộn để xem hiệu suất thực — số nút DOM không tăng.',
      badge: '10.000 bản ghi · Trực tiếp',
    },
    table: {
      id:         'Mã nhân viên',
      name:       'Họ và tên',
      department: 'Phòng ban',
      status:     'Trạng thái',
      joined:     'Ngày vào',
      rowsOf:     'Hàng',
      of:         'trên',
      domNodes:   'Nút DOM',
      rerenders:  'Render lại',
      statusLabels: { active: 'Hoạt động', inactive: 'Nghỉ việc', leave: 'Nghỉ phép' },
    },
  },

  // Projects
  projects: {
    sectionLabel: 'Đối tác & Sản phẩm',
    title:        'Khách hàng & Sản phẩm',
    subtitle:     'Danh sách các công ty khách hàng đã triển khai và hệ sinh thái phần mềm đã phát triển.',
    clientTitle:  'Khách hàng đã triển khai',
    productTitle: 'Sản phẩm đã phát triển',
    items: [
      {
        featured: true,
        label:    'Nền tảng Quản lý Nguồn nhân lực Doanh nghiệp',
        title:    'Paradise HR',
        emoji:    '🏢',
        bgColor:  'linear-gradient(135deg, #dbeafe, #ede9fe)',
        desc:     'Hệ thống quản lý nguồn nhân lực toàn diện phục vụ 10+ tập đoàn đa quốc gia với hơn <strong>14.000</strong> người dùng: Lotte, Nidec Advanced Motor, Tripod Vietnam, Detmold Packaging, Haiphong Steel Flower. Bao gồm Tính lương, Quản lý nhân sự cốt lõi, Chấm công, Phân ca, Bảo hiểm xã hội, Đánh giá hiệu suất (KPI).',
        bullets: [
          'Khung ứng dụng đơn trang (SPA Framework) tự xây dựng bằng JavaScript thuần — thời gian tải dưới một giây, giảm <strong>40%</strong> kích thước gói',
          'Cuộn ảo (Virtual Scrolling) <strong>10.000+</strong> nút tại <strong>60fps</strong> với dung lượng bộ nhớ tối thiểu',
          'Tối ưu SQL Server nhật ký kiểm toán: phân vùng bảng, chỉ mục bao phủ — truy vấn dưới một giây',
          'Bàn giao <strong>15–20</strong> ngày/module, vượt tiến độ 15–20%, trong biên ngân sách <strong>±5%</strong>',
        ],
        tags: ['JavaScript thuần', 'Khung SPA', 'SQL Server', 'Java', 'PWA', 'UI/UX'],
      },
      {
        featured: false,
        label:    'Ứng dụng Web Di động',
        title:    'Vào Ca',
        emoji:    '📱',
        bgColor:  'linear-gradient(135deg, #d1fae5, #a7f3d0)',
        desc:     'Ứng dụng Web Di động cho nhân viên điểm danh ca làm việc, xem lịch phân ca và theo dõi làm thêm giờ (OT). Thiết kế cho yêu cầu đồng thời cao với kiểm tra dữ liệu và đồng bộ trạng thái phù hợp.',
        bullets: [
          'Ứng dụng Web tiến bộ (PWA) — cài đặt như ứng dụng gốc, hoạt động ngoại tuyến với IndexedDB',
          'Logic quản lý ca làm việc cho xử lý đồng thời cao, có kiểm tra dữ liệu và trạng thái',
          'Thông báo đẩy (Push Notification) nhắc lịch ca sắp bắt đầu',
        ],
        tags: ['PWA', 'IndexedDB', 'Service Worker', 'Push API'],
      },
      {
        featured: false,
        label:    'Bảng điều khiển Phân tích',
        title:    'Phân tích Nguồn nhân lực',
        emoji:    '📊',
        bgColor:  'linear-gradient(135deg, #fef3c7, #fde68a)',
        desc:     'Bảng điều khiển phân tích nguồn nhân lực thời gian thực: tỷ lệ nghỉ việc, hiệu suất theo phòng ban, chi phí làm thêm giờ, dự báo số lượng nhân sự theo quý. Tự động hóa quy trình thủ công, giảm <strong>50%</strong> thời gian xử lý.',
        bullets: [
          'Render biểu đồ tối ưu — tái sử dụng ngữ cảnh Canvas',
          'Xuất báo cáo Excel với luồng XLS',
          'Tự động hóa quy trình làm việc — giảm <strong>50%</strong> thời gian xử lý thủ công',
        ],
        tags: ['Canvas API', 'Chart.js', 'Xuất Excel', 'REST API'],
      },
      {
        featured: false,
        label:    'Kiểm toán & Tuân thủ',
        title:    'Hệ thống Nhật ký Kiểm toán',
        emoji:    '🔍',
        bgColor:  'linear-gradient(135deg, #fce7f3, #fbcfe8)',
        desc:     'Hệ thống nhật ký kiểm toán quy mô lớn với tìm kiếm toàn văn, lọc theo người thực hiện/hành động/thực thể và xem dòng thời gian. Cấu trúc SQL Server được thiết kế để xử lý hàng triệu bản ghi với hiệu năng cao.',
        bullets: [
          'Phân vùng bảng SQL Server theo tháng — truy vấn dưới <strong>200ms</strong> trên <strong>5.000.000+</strong> hàng',
          'Cuộn vô hạn kết hợp phân trang dựa trên con trỏ',
          'Xuất báo cáo kiểm toán PDF, đảm bảo tuân thủ yêu cầu',
        ],
        tags: ['SQL Server', 'Phân vùng', 'Phân trang con trỏ', 'Xuất PDF'],
      },
    ],
  },

  // Product Images
  productImages: {
    sectionLabel: 'Sản phẩm',
    title: 'Hình ảnh sản phẩm đã phát triển',
    subtitle: 'Một số hình ảnh về các hệ thống và ứng dụng thực tế đã được xây dựng và triển khai. Tất cả hình ảnh bên dưới đều nằm trong các sản phẩm do chính tôi thực hiện từ bước lên ý tưởng, lấy yêu cầu cho đến tay người dùng.',
  },

  // Contact
  contact: {
    sectionLabel: 'Liên hệ',
    title:        'Liên hệ',
    subtitle:     'Sẵn sàng đồng hành cùng bạn xây dựng giải pháp công nghệ. Hãy kết nối để cùng nhau biến ý tưởng thành hiện thực.',
    formTitle:    'Gửi tin nhắn',
    fields: {
      name:               'Họ và tên',
      namePlaceholder:    'Nguyễn Văn A',
      email:              'Email',
      emailPlaceholder:   'email@company.com',
      message:            'Nội dung',
      messagePlaceholder: 'Tôi muốn thảo luận về cơ hội hợp tác...',
      submit:             'Gửi tin nhắn',
    },
    success: '✅ Cảm ơn bạn! Tôi sẽ phản hồi sớm nhất có thể.',
  },
};

export default vi;
