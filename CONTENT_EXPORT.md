# Website Content Export

> Exported from the current React source. Default website language: Vietnamese (`vi`). The site also ships English (`en`), Japanese (`ja`), and Simplified Chinese (`zh`) translations.

## Content map

| Order | Page area                             | Source                                                                                                       |
| ----- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 1     | Navigation, footer, language selector | `src/App.jsx`, `src/components/VerticalToggle/VerticalToggle.jsx`                                            |
| 2     | Hero / profile introduction           | `src/i18n/vi.js`, `src/components/HeroSection/HeroSection.jsx`, `src/components/ProfileCard/ProfileCard.jsx` |
| 3     | Career timeline                       | `src/i18n/vi.js`, `src/components/ExperienceSection/ExperienceSection.jsx`                                   |
| 4     | Technical expertise and live demo     | `src/i18n/vi.js`, `src/components/TechDeepDive/TechDeepDive.jsx`                                             |
| 5     | Clients                               | `src/i18n/vi.js`, `src/components/ClientsAndProducts/ClientsAndProducts.jsx`                                 |
| 6     | Products and solutions                | `src/i18n/vi.js`                                                                                             |
| 7     | Product screenshots gallery           | `src/i18n/vi.js`, `src/components/ProductImageSection/ProductImageSection.jsx`                               |
| 8     | Contact / vCard                       | `src/i18n/vi.js`, `src/components/ContactSection/ContactSection.jsx`                                         |
| 9     | SEO metadata                          | `index.html`                                                                                                 |

## 1. Navigation and global content

### Vietnamese labels

- Về tôi
- Kinh nghiệm
- Kỹ thuật
- Sản phẩm
- Liên hệ
- Lưu vCard
- Language selector: Tiếng Việt, English, 日本語, 中文

### Footer

- `© [current year] Lê Thiên Vũ. Xây dựng với React + Vite.`
- `Phát triển bởi Lê Thiên Vũ với sự hỗ trợ của AI (Claude / Gemini).`
- Links: GitHub, LinkedIn, Email

### Fixed UI labels found outside translation files

- `Select Language`
- `Profile and portfolio showcase`
- `Key statistics`
- `Profile card`
- `Send email`
- `Social links`
- `Career timeline`
- `Key metrics`
- `Technologies used`
- `Metrics`
- `Contact channels`
- `Copy`, `Copied!`
- `Gọi ngay`, `Gửi mail`
- `Zalo QR`
- `⚠️ Lưu ý: Các hình ảnh minh họa trong phần này đã được đơn giản hóa để bảo vệ dữ liệu người dùng và tuân thủ quy định về quyền riêng tư.`
- `Xem toàn màn hình`
- `Phone Frame`
- `Show slide 1` through `Show slide 15`

## 2. Hero / profile

- Name: `Lê Thiên Vũ`
- Badge: `#openToWork`
- Role: `Fullstack Software Engineer`
- Role tags: `Implementation & Technical Leader`; `User Interface/User Experience (UI/UX) Design`; `Frontend Developer`; `Backend Developer`; `Business Analyst`; `Enterprise Resource Planning (ERP) Consultant`
- Profile card title: `Fullstack Developer & Tech Lead`
- Hero description:

> Là một **Full-stack Engineer & Technical Implementation Lead** với gần **3 năm** kinh nghiệm, tôi sở hữu sự kết hợp độc đáo giữa năng lực lập trình chuyên sâu và kinh nghiệm triển khai dự án trực tiếp. Tôi đã quản lý và đưa hệ thống nhân sự (HR) vào vận hành thành công cho hơn **10 doanh nghiệp lớn** với quy mô **14.000+ người dùng**. Với tư duy bao quát toàn bộ vòng đời dự án và khả năng tích hợp sâu **Multi-agent AI** vào quy trình làm việc để tối ưu hóa nguồn lực, tôi luôn đảm bảo hiệu suất dự án ở mức tối đa. Tôi tìm kiếm một doanh nghiệp có sự đồng điệu về văn hóa để gắn bó dài hạn (3-5 năm), cùng nhau kiến tạo những giá trị bền vững và các giải pháp phần mềm xuất sắc.

### Hero statistics

- `Kinh nghiệm bao quát toàn bộ quy trình phát triển phần mềm`
- `14.000+ người dùng`
- `Tăng 200% hiệu suất với AI`

### Hero actions

- `Xem dự án`
- `Lưu vCard`

### Skills marquee

ReactJS; NextJS; Java; Spring Boot; JavaScript; TypeScript; HTML5; CSS3; Tailwind CSS; SQL Server; RESTful API; Figma; Git; GitHub; Copilot CLI; API; DevOps & CI/CD.

## 3. Career timeline

- Section label: `Kinh nghiệm làm việc`
- Title: `Dòng thời gian làm việc`
- Intro: `Quản lý Dự án & Trưởng nhóm Triển khai và Phát triển Phần mềm & Kiến trúc Hệ thống tại VIET TIN SOFTWARE, bàn giao hệ thống HR toàn diện cho 10+ doanh nghiệp lớn, phục vụ tổng số hơn 14.000 người dùng cuối.`
- Client label: `Khách hàng tiêu biểu`

### 06/2023 - Hiện tại

- Role: `Quản lý Dự án & Trưởng nhóm Triển khai (Project Management & Implementation Lead)`
- Company: `Công ty TNHH Giải pháp Phần mềm Việt Tín (VIET TIN SOFTWARE SOLUTION COMPANY LIMITED)`
- Company description: `Đơn vị phát triển Hệ sinh thái Paradise HR phục vụ hàng chục ngàn nhân sự.`
- Highlights:
  - Triển khai toàn bộ vòng đời Paradise HR cho 10+ doanh nghiệp lớn, gồm Lotte (~3.000 nhân viên), Nidec (~4.000), Detmold (~3.000), Tripod (~4.000), phục vụ hơn 14.000 người dùng cuối.
  - Phân tích 150+ quy trình HR phức tạp thành đặc tả kỹ thuật, giảm khoảng cách yêu cầu 20-30%.
  - Tối ưu nguồn lực, duy trì tỷ lệ thành công 90%; bàn giao module trong 15-20 ngày, ngân sách trong biên ±5%.
  - Đạt độ ổn định 90-95% trong cao điểm tính lương, giảm 50% thao tác thủ công và đạt giữ chân khách hàng 100%.
- KPIs: `14.000+ Người dùng cuối`; `90%+ Tỷ lệ thành công`; `100% Giữ chân khách hàng`.
- Tags: Vanilla JavaScript; SPA Framework; SQL Server; HTML/CSS; Java; PWA; UI/UX; Design System; Business Analysis; Agile/Scrum.

### 2024

- Role: `Nhân viên xuất sắc của năm 2024`
- Company: `Công ty TNHH Giải pháp Phần mềm Việt Tín (VIET TIN SOFTWARE SOLUTION COMPANY LIMITED)`
- Highlight: `Được vinh danh danh hiệu Nhân viên xuất sắc nhất năm 2024 nhờ những đóng góp quan trọng trong việc triển khai thành công hệ thống Paradise HR cho các đối tác lớn và giải pháp tối ưu quy trình làm việc, tăng hiệu suất, nâng cao chất lượng hệ sinh thái sản phẩm.`
- Tags: Employee of the Year; 2024; Award.
- Images: `bestEmp2024.jpeg`, `bestEmp_Banner.jpeg`.

### 08/2023 - 06/2024

- Role: `Phát triển Phần mềm & Kiến trúc Hệ thống (Software Development & System Architecture)`
- Company: VIET TIN SOFTWARE SOLUTION COMPANY LIMITED.
- Highlights:
  - Tự xây dựng SPA Framework bằng JavaScript thuần, tải dưới một giây và giảm 40% kích thước gói.
  - Thiết kế virtual scrolling và cây đệ quy, render 10.000+ nodes ở 60 FPS.
  - Dẫn đầu phát triển Paradise HR và ứng dụng di động Vào Ca, đảm bảo 100% toàn vẹn dữ liệu.
  - Thiết kế SQL Server cho hàng triệu bản ghi, giảm báo cáo phức tạp từ vài phút xuống vài giây.
- Tags: Vanilla JavaScript; SQL Server; Performance Optimization; Design System; PWA; Java.

### 06/2023 - 08/2023

- Role: `Thực tập sinh Kỹ sư Phần mềm (Intern Software Engineer)`
- Company: VIET TIN SOFTWARE SOLUTION COMPANY LIMITED.
- Highlights: `Tìm hiểu kiến trúc hệ thống và quy trình phát triển phần mềm doanh nghiệp.`; `Tham gia hỗ trợ phát triển các tính năng cơ bản và sửa lỗi cho hệ thống Paradise HR.`
- Tags: JavaScript; Java; SQL; HTML/CSS.

### 06/2019 - 11/2024

- Role: `Sinh viên Kỹ thuật Phần mềm`
- Company: `Đại học Sài Gòn (SGU)`
- Description: `Kỹ sư Phần mềm (Software Engineering)`
- Highlights: `Nắm vững nền tảng khoa học máy tính, cấu trúc dữ liệu và giải thuật.`; `Thực hiện các đồ án chuyên ngành về web, di động và hệ thống phân tán.`
- Tags: Computer Science; Software Engineering; Algorithms.

## 4. Technical deep-dive

- Section label: `Chuyên sâu kỹ thuật`
- Title: `Chuyên môn Kỹ thuật`
- Subtitle: `Các kỹ thuật và kiến trúc chuyên sâu đã áp dụng trong môi trường dự án thực tế.`

### Expertise cards

1. **Phát triển Giao diện Người dùng (Front-end Development)**: SPA Framework bằng JavaScript thuần, tải dưới một giây, giảm 40% bundle; virtual scrolling 10.000+ nodes ở 60fps. Skills: JavaScript thuần, React, Kiến trúc SPA, HTML/CSS, State Management. Metrics: 60fps Hiệu suất render; -40% Kích thước gói; 10.000+ Nút xử lý.
2. **Phát triển Hệ thống Phía sau (Back-end Development)**: SQL Server cho hàng triệu bản ghi audit, REST API và nghiệp vụ phức tạp, đảm bảo 100% toàn vẹn dữ liệu. Skills: Java, SQL Server, REST API, Tối ưu cơ sở dữ liệu, High Concurrency. Metrics: 95% Tốc độ truy vấn; 1.000.000+ Bản ghi kiểm toán; 100% Toàn vẹn dữ liệu.
3. **Thiết kế Giao diện & Trải nghiệm Người dùng (UI/UX Design)**: Thiết kế ERP, usability, workflow và PWA mobile. Skills: Figma, User Flow, Responsive Design, Wireframing, PWA. Metrics: 100% Đáp ứng; PWA Chế độ ngoại tuyến; 3+ Hệ thống lớn.
4. **Trưởng nhóm Kỹ thuật & Quản lý Dự án**: Dẫn dắt triển khai Paradise HR cho 10+ doanh nghiệp và hơn 14.000 người dùng, bàn giao vượt tiến độ. Skills: Agile/Scrum, Kiến trúc hệ thống, Phân tích yêu cầu, Lãnh đạo đội ngũ. Metrics: 14.000 Người dùng cuối; +20% Vượt tiến độ; 5+ Tập đoàn đa quốc gia.
5. **Tích hợp AI & Tối ưu hóa Hiệu suất**: Dùng LLM và công cụ AI để tự động hóa quy trình, tăng 200% hiệu suất và giảm sai sót. Skills: AI Integration, Agent Skills, Agent Henes, Prompt Engineering, Workflow Automation, Claude/Gemini API. Metrics: 200% Tăng hiệu suất; -30% Thời gian phát triển; AI-Native Tư duy.

### Live demo

- Title: `Trình diễn Trực tiếp — Danh sách Nhân viên Cuộn ảo`
- Description: `Danh sách 10.000 nhân viên chỉ render ~20 nút DOM tại bất kỳ thời điểm nào. Cuộn để xem hiệu suất thực — số nút DOM không tăng.`
- Badge: `10.000 bản ghi · Trực tiếp`
- Table labels: Mã nhân viên; Họ và tên; Phòng ban; Trạng thái; Ngày vào; Hàng; trên; Nút DOM; Render lại.
- Status labels: `Hoạt động`; `Nghỉ việc`; `Nghỉ phép`.

## 5. Clients and products

- Title: `Khách hàng`
- Subtitle: `Các đối tác đã tin tưởng và hợp tác`
- Client logos: NAVT; Steel Flower; Lotte; Lichien; Detmold; Tripod Vietnam.

### Product cards

1. **Paradise HR** - Nền tảng Quản lý Nguồn nhân lực Doanh nghiệp. HR system for 10+ multinational corporations and 14.000+ users, covering payroll, Core HR, timekeeping, shift scheduling, social insurance and KPI. Highlights: custom Vanilla JS SPA, sub-second load, 40% smaller bundle, 10.000+ nodes at 60fps, SQL Server optimization, 15-20 day/module delivery. Tags: JavaScript thuần; Khung SPA; SQL Server; Java; PWA; UI/UX.
2. **Vào Ca** - Ứng dụng Web Di động. Employee shift check-in, schedules and overtime; PWA, IndexedDB, offline mode, high concurrency and push notifications. Tags: PWA; IndexedDB; Service Worker; Push API.
3. **Phân tích Nguồn nhân lực** - Bảng điều khiển phân tích thời gian thực for turnover, departmental performance, overtime cost and headcount forecast. Includes Canvas rendering, XLS export and 50% less manual processing. Tags: Canvas API; Chart.js; Xuất Excel; REST API.
4. **Hệ thống Nhật ký Kiểm toán** - Full-text search, actor/action/entity filters and timeline for millions of audit records. Includes monthly SQL Server partitioning, sub-200ms queries on 5.000.000+ rows, cursor pagination and PDF export. Tags: SQL Server; Phân vùng; Phân trang con trỏ; Xuất PDF.

## 6. Product screenshot gallery

- Section label: `Sản phẩm`
- Title: `Hình ảnh sản phẩm đã phát triển`
- Subtitle: `Một số hình ảnh về các hệ thống và ứng dụng thực tế đã được xây dựng và triển khai. Tất cả hình ảnh bên dưới đều nằm trong các sản phẩm do chính tôi thực hiện từ bước lên ý tưởng, lấy yêu cầu cho đến tay người dùng.`

The gallery auto-advances every 4 seconds and contains 15 web/mobile pairs:

1. `Micro-Frontend Architecture & SSO` - SPA module separation and JWT SSO across Web and Mobile.
2. `Data Visualization & API Optimization` - Real-time charts for millions of records; T-SQL and stored procedure optimization.
3. `High-Performance Virtual DOM Rendering` - Virtual scrolling for 10.000+ nodes at 60 FPS; mobile timesheet grid.
4. `Complex Form State Management` - Nested forms with schema validation from frontend to backend.
5. `Progressive Web App & Geolocation` - Offline-first PWA and GPS attendance via Geolocation API.
6. `Automated Workflow & Approval Engine` - Multi-level recruitment approvals across web and mobile.
7. `Multi-Tenant Enterprise Architecture` - Per-company manufacturing workflows and mobile timesheet calendar.
8. `High-Throughput Big Data Handling` - SQL Server indexing/partitioning for high-volume audit logs.
9. `Security & Native Device Integration` - WebRTC camera access for FaceID and anti-spoofing GPS encryption.
10. `Personalization & Leave Management` - Multilingual settings, dark/light mode, biometrics and mobile leave approval.
11. `JSON Schema Driven UI & QR Sync` - Backend-configured dynamic UI and QR attendance sync.
12. `Cross-Platform API Orchestration` - RESTful orchestrator between core database, SPA and mobile app.
13. `Software Development & Prototyping` - From mobile UI/UX wireframe to scalable web product.
14. `Landing Page & HR Management` - Product landing page and mobile HR management flows.
15. `Database Architecture & Recruitment` - Recruitment database architecture from job posting through interview evaluation.

## 7. Contact

- Section label: `Liên hệ`
- Title: `Liên hệ`
- Subtitle: `Sẵn sàng đồng hành cùng bạn xây dựng giải pháp công nghệ. Hãy kết nối để cùng nhau biến ý tưởng thành hiện thực.`
- Channels:
  - Phone / Zalo: `0945 949 065`
  - Email: `lethienvu.se@gmail.com`
  - LinkedIn: `linkedin.com/in/lê-thiên-vũ`
  - GitHub: `github.com/lethienvu`
- Actions: `Gọi ngay`; `Gửi mail`; `Lưu vCard`.
- QR label: `Zalo QR`.
- Form strings present in translation data: `Gửi tin nhắn`; `Họ và tên`; `Nguyễn Văn A`; `Email`; `email@company.com`; `Nội dung`; `Tôi muốn thảo luận về cơ hội hợp tác...`; `Gửi tin nhắn`; `✅ Cảm ơn bạn! Tôi sẽ phản hồi trong vòng 24 giờ.`

## 8. SEO and document metadata

- Page title: `Lê Thiên Vũ | Fullstack Developer & Technical Leader`
- Meta description: `Lê Thiên Vũ – Fullstack Developer, Implementation, Technical Leader, UI/UX Design`
- Keywords: `Tech Lead, HR System, ReactJS, SPA Framework, Virtual Scrolling, SQL Server, Portfolio, Java, Spring Boot, NextJS, HTML, CSS, JavaScript, TypeScript, RESTful API, UI/UX Design`
- Author: `Lê Thiên Vũ`
- Open Graph title: `Lê Thiên Vũ | Implementation & Technical Leader`
- Open Graph description: `Portfolio of Lê Thiên Vũ – Fullstack Developer, Implementation, Technical Leader, UI/UX Design`
- Document language: `vi`

## 9. Translation sources

The complete localized copy, including every job highlight, technical card, product description, bullet, metric, form label, and success message, is maintained in:

- Vietnamese: [src/i18n/vi.js](src/i18n/vi.js)
- English: [src/i18n/en.js](src/i18n/en.js)
- Japanese: [src/i18n/ja.js](src/i18n/ja.js)
- Simplified Chinese: [src/i18n/zh.js](src/i18n/zh.js)

## Content review notes

- The page defaults to Vietnamese, while many gallery captions and fixed contact/gallery labels remain Vietnamese even after changing language.
- English, Japanese, and Chinese career data currently contain `06/2019 – 11/2028`; the Vietnamese version contains `06/2019 – 11/2024`.
- `Agent Henes` appears as a skill in all four translation files and may need confirmation.
- `src/components/ProjectShowcase/ProjectShowcase.jsx` contains a separate older/fallback project showcase with hardcoded English strings, but it is not mounted by `src/App.jsx` currently.
- Several accessibility labels and action labels are hardcoded in components rather than localized.
