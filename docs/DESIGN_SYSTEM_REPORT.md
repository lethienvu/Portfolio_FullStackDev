# Báo cáo Design System — Portfolio Fullstack Developer

> **Phạm vi:** Báo cáo được trích xuất từ source hiện tại; không phải đặc tả suy đoán.  
> **Ngày tạo:** 14/10/2026  
> **Nguồn chính:** `src/index.css`, `src/App.css`, và các module trong `src/components/`.

## 1. Tóm tắt hệ thống

Portfolio dùng hệ thống token CSS toàn cục theo hướng **editorial portfolio + liquid glass tối giản**.

- Foundation nằm trong `:root` của `src/index.css` và được mô tả là “Single source of truth”.
- Theme chuyển bằng `html[data-theme="light|dark"]`.
- Component dùng BEM (`hero__…`, `project-card__…`) cùng một số primitive có prefix `u021-` và `u031-`.
- Sections dưới fold được lazy-load và kích hoạt qua `IntersectionObserver` trong `src/App.jsx`.

## 2. Foundations

### 2.1 Màu và vai trò semantic

| Vai trò | Token / giá trị light | Ghi chú |
|---|---|---|
| Canvas | `--portfolio-bg-gradient`; `--color-bg: #faf8f5` | Nền warm-neutral. |
| Surface | `--color-bg-alt: #fff`; `--color-surface: #fffdf9` | Section/card surface. |
| Glass | `--color-bg-glass: rgba(255,255,255,.5)` | Surface alpha dùng với blur. |
| Ink | `--color-ink: #2f2e2a` | Text chính. |
| Muted ink | `--color-ink-2: #4f4d48`; `--color-ink-3: #7b7972` | Text phụ/metadata. |
| Border | `--color-border: rgba(210,195,175,.55)` | Viền warm-neutral. |
| Accent | `--color-accent: #2563eb` | Active, CTA, focus. |
| Accent variants | `--color-accent-light: #dbeafe`; `--color-accent-dark: #1d4ed8` | Hover/emphasis. |
| Status | success, danger, warning | Có token background + text. |

Dark mode ghi đè palette global thành nền xanh tối và accent `#34d399` trong `src/App.css`. Intro có token cục bộ `--intro-bg`, `--intro-ink`, `--intro-accent`, `--intro-divider`.

### 2.2 Typography

| Nhóm | Quy ước hiện tại |
|---|---|
| Display & body | Fira Sans, system-ui fallback qua `--font-display` và `--font-body` |
| Mono | Courier New (`--font-mono`) |
| Scale | `--text-2xs` 10px đến `--text-6xl` 32px |
| Fluid headings | Hero name `clamp(56px,7vw,72px)`; role `clamp(36px,4vw,48px)`; section title `clamp(28px,4vw,42px)` |
| Weight | 300, 400, 500, 600, 700 |
| Leading | 1.02–1.70 |
| Tracking | -0.03em đến .12em |

Font tải từ `index.html`: **Fira Sans**, **Madimi One**, **Yellowtail**. Ngoại lệ có chủ đích: Hero name dùng Madimi One; role kicker dùng Yellowtail (`HeroSection.css`).

### 2.3 Spacing, sizing, radius, elevation

| Nhóm | Hệ giá trị |
|---|---|
| Spacing | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px (`--space-1…10`) |
| Container | max `1440px`, gutter `24px` |
| Radius | 2, 3, 6, 12, 20px; pill 999px; full 50% |
| Shadow | xs/sm/md: 0–4px offset, alpha .06–.10 |
| Layering | navbar 100; mobile 99 |
| Control touch target | topbar interactive controls hiện dùng 44px shell; theme switch visual 38×22px |

### 2.4 Motion

- Base: `--transition: .2s ease`.
- Scroll reveal: `fadeInUp` (.8s) và `fadeIn` (.6s), với utility delay .1–.5s.
- Intro editorial reveal: 620ms, `cubic-bezier(.22,1,.36,1)`.
- Các motion có trong source: skeleton shimmer, marquee, hero presence, lightbox fade/image, language pop, contact blobs và theme switch.
- `prefers-reduced-motion` được xử lý ở foundation, Intro, Hero, LanguageSelect và ThemeSkySwitch.

## 3. Layout và responsive

### 3.1 Cấu trúc trang

1. Fixed top menubar.
2. Intro full viewport.
3. Hero.
4. Skills/knowledge, experience, projects và footer.

Intro desktop dùng split 40/60 (`4fr / 6fr`). Mobile chuyển về một cột, divider chuyển ngang.

### 3.2 Navigation

Topbar dùng grid ba cột `1fr auto 1fr` để menu giữ tâm viewport. Logo và cụm theme/language nằm hai bên menu; desktop dùng khoảng cách responsive riêng, mobile giữ logo + menu và ẩn utilities.

- Surface translucent + `backdrop-filter: saturate(180%) blur(20px)`.
- Navigation section là button semantic, active state qua `aria-current="page"`.
- Section detection dùng `IntersectionObserver`; navigation dùng smooth scroll.

### 3.3 Breakpoint inventory

| Nhóm | Media query thực tế |
|---|---|
| Declared reference tokens | 480, 640, 768, 900px |
| Thực tế trong source | 420, 480, 520, 640, 680, 700, 768, 900, 1000, 1024, 1100px; có range 769–1100px |

**Nhận định:** breakpoint token scale và các mốc CSS thực tế chưa đồng nhất. CSS không thể dùng `var()` trong media condition; cần quyết định một scale chuẩn nếu tiếp tục mở rộng.

## 4. Component inventory và visual patterns

| Thành phần | Pattern / trách nhiệm |
|---|---|
| `VerticalToggle` | Center navigation, active section observer, keyboard/click. |
| `LanguageSelect` | Custom ARIA listbox, portal ra `document.body`, hover open, click outside, typeahead, flag square 22×22. |
| `ThemeSkySwitch` | ARIA switch day/night, glass pill compact, reduced-motion safe. |
| `HeroSection` | Identity, dual role glass cards, stats, specialties, client logos. |
| `TechDeepDive` | Knowledge, human skills, ERP module cards. |
| `ExperienceSection` | Tree/timeline, dialog detail, KPI/tag. |
| `CaseStudies` | Case-study responsive grid. |
| `ProjectShowcase` | Project cards có visual/content/metadata layers. |
| `ClientsAndProducts` | Logo clients/marquee. |
| `ProductImageSection` | Device composite, media/slider overlay. |
| `ContactSection` | Liquid blob background và vCard. |
| `ProfileCard` | Animated profile card. |
| `Lightbox` | Global media overlay với controls. |

### Visual vocabulary

- **Glass:** alpha surface + viền trắng/low contrast + `backdrop-filter`, áp dụng ở topbar, language dropdown, theme switch, Hero và các bề mặt chọn lọc.
- **Editorial hierarchy:** headline lớn tracking chặt; labels nhỏ tracked; divider 1px.
- **Cards:** radius md/lg, surface nền, low-contrast border, shadow tiết chế.
- **Metadata/tags:** type nhỏ, muted ink, compact surface/pill.
- **Images:** global `img { max-width:100%; display:block; }`.

## 5. Accessibility và interaction

### Bằng chứng hiện có

- Reset global cho button, image, lists.
- `:focus-visible` có ở nav, theme switch, language listbox, Hero và một số component interactive.
- Nav dùng `<nav>` và button; footer dùng `role="contentinfo"`.
- Language listbox dùng `role=listbox/option`, ARIA selected/active descendant, keyboard navigation và typeahead.
- Theme control dùng `role=switch`, `aria-checked`, nhãn đổi theo state.
- Intro typewriter dừng update JS khi reduced motion được bật.
- Layer trang trí được đánh dấu `aria-hidden`; hover không phải cách tương tác duy nhất.

### Quy ước duy trì

1. Dùng token semantic trước raw value.
2. Với control mới: default, hover, active/selected, focus-visible, dark theme, reduced-motion.
3. Giữ target 44px cho thao tác touch/keyboard.
4. Không dùng `transition: all`; ưu tiên opacity/transform.
5. Dropdown/modal cần blur thật qua ancestor có filter/transform: dùng portal khi phù hợp.

## 6. Governance / backlog chuẩn hóa

> Đây là khuyến nghị, **chưa được tự áp dụng**.

1. Hợp nhất CSS legacy của navbar/Intro còn ở phần đầu `App.css` với rules đang hiệu lực ở phần sau.
2. Chọn một responsive scale chuẩn để thay dần mốc 420/520/680/700/1000/1024/1100px.
3. Tách glass/card/section-heading thành visual primitives nếu hệ thống tiếp tục mở rộng.
4. Rà soát hard-coded shadow/màu tại component CSS, map về token semantic khi không phải hiệu ứng minh hoạ đặc thù.

## 7. Traceability

| Chủ đề | Nguồn |
|---|---|
| Core tokens, reset, animation | `src/index.css` |
| App shell, Intro, nav, footer, theme | `src/App.css` |
| Composition, lazy-load, i18n/theme orchestration | `src/App.jsx` |
| Navigation interactions | `src/components/VerticalToggle/` |
| Custom language listbox | `src/components/LanguageSelect/` |
| Day/night switch | `src/components/ThemeSkySwitch/` |
| Hero design vocabulary | `src/components/HeroSection/` |
| Section-specific patterns | `src/components/*/` |
