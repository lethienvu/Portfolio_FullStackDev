import bestEmp2024 from '../assets/bestEmployee/bestEmp2024.jpeg';
import bestEmpBanner from '../assets/bestEmployee/bestEmp_Banner.jpeg';

const vi = {
  // Navbar
  nav: {
    experience: 'Kinh nghiệm',
    technical:  'Kỹ thuật',
    projects:   'Sản phẩm và giải pháp',
    contact:    'Liên hệ',
    hire:       'Liên hệ tôi',
  },

  // Footer
  footer: {
    built: 'Xây dựng với React + Vite.',
    aiNote: 'Phát triển bởi Lê Thiên Vũ với sự hỗ trợ của AI (Claude / Gemini).',
  },

  // Clients & Products
  clientsProducts: {
    clients: 'Khách hàng tiêu biểu',
    products: 'Sản phẩm đã phát triển',
  },

  // Hero
  hero: {
    badge:       '#openToWork',
    role:        'Kỹ sư Phần mềm Toàn diện (Fullstack Software Engineer)',
    roleSubtitle:'Trưởng nhóm Triển khai & Kỹ thuật · Thiết kế Trải nghiệm Người dùng (UI/UX) · Frontend Developer · Backend Developer · Business Analyst · Tư vấn Hệ thống Hoạch định Nguồn lực Doanh nghiệp (ERP)',
    desc:        'Kỹ sư phần mềm với kinh nghiệm triển khai hệ thống quản lý nguồn nhân lực quy mô lớn cho các tập đoàn đa quốc gia (Lotte, Nidec, Tripod, Haiphong Steel Flower). Chuyên về lập trình toàn diện, tối ưu hiệu suất, thiết kế kiến trúc và quản lý dự án.',
    stats: {
      exp:    '2.5+ năm kinh nghiệm',
      users:  '14.000+ người dùng',
      faster: 'Tăng 200% hiệu suất với AI',
    },
    cta: {
      projects: 'Xem dự án →',
      contact:  'Liên hệ tôi',
    },
    card: {
      title:      'Fullstack Developer & Tech Lead',
      contactBtn: 'Liên hệ tôi',
    },
  },

  // Experience
  experience: {
    sectionLabel: 'Kinh nghiệm làm việc',
    title:        'Lộ trình Nghề nghiệp',
    subtitle:     'Triển khai và phát triển hệ thống phần mềm quản lý nguồn nhân lực Paradise HR (trên cả 3 nền tảng: Ứng dụng Desktop, Ứng dụng Web đơn trang (SPA) và Ứng dụng Di động) cho <strong>5+</strong> tập đoàn lớn, phục vụ tổng số hơn <strong>14.000</strong> người dùng cuối. Đồng thời, thực hiện xây dựng quy trình nghiệp vụ, phát triển các tính năng mới, tối ưu hiệu suất, và đảm bảo chất lượng sản phẩm.',
    clientsLabel: 'Khách hàng tiêu biểu',
    jobs: [
      {
        period:  '06/2024 – Hiện tại',
        role:    'Trưởng nhóm Triển khai & Kỹ thuật (Implementation & Technical Leader)',
        company: 'Công ty TNHH Phần mềm Việt Tín (VIETIN SOFT Co., Ltd)',
        companyDesc: 'Đơn vị phát triển Hệ sinh thái Paradise HR phục vụ hàng chục ngàn nhân sự.',
        current: true,
        highlights: [
          'Điều phối toàn bộ vòng đời triển khai hệ thống Paradise HR cho <strong>10+</strong> doanh nghiệp lớn: Lotte (<strong>~3.000</strong> nhân viên), Nidec Advanced Motor (<strong>~4.000</strong> nhân viên), Tripod Vietnam (2 nhà máy, <strong>~4.000</strong> nhân viên), Detmold Packaging (<strong>~2.000</strong> nhân viên), Haiphong Steel Flower (<strong>~300</strong> nhân viên). Tổng cộng <strong>14.000+</strong> người dùng.',
          'Chuyển đổi <strong>150+</strong> quy trình nghiệp vụ quản lý nguồn nhân lực phức tạp (Hồ sơ nhân sự, Chấm công, Tính lương, Bảo hiểm xã hội, Tiền lương, Cổng thông tin nhân sự, Tuyển dụng, Đánh giá KPIs, Đào tạo, ...) thành đặc tả kỹ thuật chi tiết, giảm khoảng cách yêu cầu <strong>20–30%</strong>.',
          'Bàn giao các module phức tạp trong <strong>15–20</strong> ngày (nhanh hơn tiêu chuẩn <strong>20–25</strong> ngày), trong biên ngân sách <strong>±5%</strong>. Tỷ lệ giữ chân khách hàng đạt 100%.',
        ],
        kpis: [
          { value: '14.000', label: 'Người dùng' },
          { value: '90%',  label: 'Tỷ lệ thành công' },
          { value: '100%', label: 'Giữ chân khách hàng' },
        ],
        tags: ['Vanilla JavaScript', 'SPA Framework', 'SQL Server', 'HTML/CSS', 'Java', 'PWA', 'UI/UX', 'Design System', 'Business Analysis', 'Agile/Scrum'],
      },
      {
        period:  '2024',
        role:    'Nhân viên xuất sắc của năm 2024',
        company: 'Công ty TNHH Phần mềm Việt Tín (VIETIN SOFT Co., Ltd)',
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
        period:  '12/08/2023 – 06/2024',
        role:    'Kỹ sư Phần mềm (Software Engineer)',
        company: 'Công ty TNHH Phần mềm Việt Tín (VIETIN SOFT Co., Ltd)',
        current: false,
        highlights: [
          'Tự xây dựng Khung ứng dụng đơn trang (SPA Framework) bằng JavaScript thuần — không phụ thuộc thư viện ngoài, đạt thời gian tải dưới một giây và giảm <strong>40%</strong> kích thước gói.',
          'Thiết kế thành phần giao diện người dùng phức tạp: cuộn ảo (virtual scrolling) và cây đệ quy (recursive tree view) xử lý <strong>10.000+</strong> nút ổn định tại <strong>60fps</strong>.',
          'Tối ưu cấu trúc cơ sở dữ liệu SQL Server cho hàng triệu bản ghi nhật ký kiểm toán: phân vùng bảng (partition tables), chỉ mục bao phủ (covering indexes), khung nhìn vật chất hóa (materialized views), loại bỏ truy vấn N+1.',
        ],
        kpis: [],
        tags: ['Vanilla JavaScript', 'SQL Server', 'Performance Optimization', 'Design System'],
      },
      {
        period:  '12/06/2023 – 11/08/2023',
        role:    'Thực tập sinh Kỹ sư Phần mềm',
        company: 'Công ty TNHH Phần mềm Việt Tín (VIETIN SOFT Co., Ltd)',
        current: false,
        highlights: [
          'Tìm hiểu kiến trúc hệ thống và quy trình phát triển phần mềm doanh nghiệp.',
          'Tham gia hỗ trợ phát triển các tính năng cơ bản và sửa lỗi cho hệ thống Paradise HR.',
        ],
        kpis: [],
        tags: ['JavaScript', 'Java', 'SQL', 'HTML/CSS'],
      },
      {
        period:  '09/2019 – 05/2024',
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
        desc:  'Tối ưu hóa SQL Server cho bảng nhật ký kiểm toán hàng triệu bản ghi (phân vùng bảng, chỉ mục bao phủ). Thiết kế giao diện lập trình ứng dụng RESTful (REST API) và kiến trúc xử lý nghiệp vụ phức tạp, đảm bảo <strong>100%</strong> toàn vẹn dữ liệu.',
        skills: ['Java', 'SQL Server', 'REST API', 'Tối ưu cơ sở dữ liệu', 'Xử lý đồng thời cao (High Concurrency)'],
        logos: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
        ],
        metrics: [{ value: '95%', label: 'Tốc độ truy vấn' }, { value: '1.000.000+', label: 'Bản ghi kiểm toán' }, { value: '100%', label: 'Toàn vẹn dữ liệu' }],
      },
      {
        icon:  'uiux',
        title: 'Thiết kế Giao diện & Trải nghiệm Người dùng (UI/UX Design)',
        desc:  'Thiết kế giao diện hiện đại, tối ưu trải nghiệm người dùng cho hệ thống Hoạch định Nguồn lực Doanh nghiệp (ERP) phức tạp. Tập trung tính khả dụng, luồng thao tác hợp lý, và thiết kế chuẩn Ứng dụng Web tiến bộ (PWA) cho Web Di động.',
        skills: ['Figma', 'Luồng người dùng (User Flow)', 'Thiết kế đáp ứng (Responsive Design)', 'Khung dây (Wireframing)', 'PWA'],
        logos: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
        ],
        metrics: [{ value: '100%', label: 'Đáp ứng' }, { value: 'PWA', label: 'Chế độ ngoại tuyến' }, { value: '3+', label: 'Hệ thống lớn' }],
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
        desc:     'Ứng dụng Web Di động cho nhân viên điểm danh ca làm việc, xem lịch phân ca và theo dõi làm thêm giờ (OT). Tối ưu cho yêu cầu đồng thời cao, đảm bảo <strong>100%</strong> toàn vẹn dữ liệu khi nhiều nhân viên thao tác đồng thời.',
        bullets: [
          'Ứng dụng Web tiến bộ (PWA) — cài đặt như ứng dụng gốc, hoạt động ngoại tuyến với IndexedDB',
          'Logic quản lý ca làm việc tối ưu cho xử lý đồng thời cao, <strong>100%</strong> toàn vẹn dữ liệu',
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
    subtitle:     'Nếu bạn đang tìm kiếm một người dẫn dắt có khả năng chuyển hóa các bài toán nghiệp vụ nhân sự phức tạp thành giải pháp kỹ thuật hiệu suất cao, hãy kết nối ngay để cùng tạo nên sự khác biệt.',
    formTitle:    'Gửi tin nhắn',
    fields: {
      name:               'Họ và tên',
      namePlaceholder:    'Nguyễn Văn A',
      email:              'Email',
      emailPlaceholder:   'email@company.com',
      message:            'Nội dung',
      messagePlaceholder: 'Tôi muốn thảo luận về cơ hội hợp tác...',
      submit:             'Gửi tin nhắn →',
    },
    success: '✅ Cảm ơn bạn! Tôi sẽ phản hồi trong vòng 24 giờ.',
  },
};

export default vi;
