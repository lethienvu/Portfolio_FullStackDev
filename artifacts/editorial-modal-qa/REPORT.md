# Editorial case-study reader

Implemented CaseStudyReader.jsx/.css and publicCaseStudies.js; CaseStudies.jsx retains modal lifecycle, lightbox callback and card rendering. Raw projectEvidence.js unchanged. Curated bilingual entries for Paradise SPA and Vào Ca landing page; sparse entries show overview and image without fabricated roles/achievements or internal placeholders. Contributor claims retained as such; quantitative rollout metrics omitted rather than stripped of qualifiers.

Desktop reader width measured 1060px at 1440×900. Tablet 704px at 768×1024, mobile 366px at 390×844. No internal horizontal overflow in all three. Screenshots inspected: desktop-1440.png, tablet-768.png, mobile-390.png. Fixed stylesheet specificity after first desktop capture; saved screenshots represent corrected implementation. Header remains outside independent scroll region. Mobile text wraps and close control stays visible.

Browser checks: programmatic real React CTA click opens reader; image button opens existing lightbox with reader inert, loaded image naturalWidth 1300. Browser Escape closes lightbox only, reader remains and close receives focus. Second browser Escape closes reader and returns focus to u049-cta; root inert restored false. No synthetic key events.

Lint/build/diff check pass. Impeccable detector [] (no findings). No dependencies, commit or deploy.

Limits: light-theme Paradise screenshots only, not full project/locale/theme matrix. Reduced-motion behavior preserved in source but not emulated; Tab wrap and closing-state animation not separately sampled in this pass. Navigation uses native in-document anchors. Existing global typography and muted text palette inherited, not globally changed.
