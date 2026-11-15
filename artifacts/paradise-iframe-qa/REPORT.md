# Paradise supplied HTML iframe integration

Scope: host the user-supplied document unchanged in Paradise card (index 0). Other cards retain CaseStudyReader. No standalone content/design/script edits.

Changed: src/components/CaseStudies/CaseStudies.jsx, CaseStudies.css. Public source: public/case-studies/paradisehr.html. URL uses import.meta.env.BASE_URL for /Portfolio_FullStackDev/ deployment.

Original, final source and built dist SHA256: 5dac0b1a1fadd01e870377aa2675ba96f7361ba839d3f15f2aa841049c903a52.

Modal: wide responsive host, independent iframe scrolling/CSS, persistent close, valid dialog label and iframe title. Same-origin document keyboard listener handles Escape and Tab boundary crossing; respects supplied nested image viewer Escape first. Listener cleanup on unmount/index changes. Body scroll/inert/focus lifecycle retained.

Reproducible Chromium QA: node artifacts/paradise-iframe-qa/check.cjs (local CDP 18800 and dev server 5173). results.json verifies measured 1440x900,768x1024,390x844: 15 gallery images decoded at all sizes, no horizontal overflow, forward/reverse focus boundaries, inner Escape retains outer modal, next Escape closes outer, focus/inert/body scrolling restored, close button works. Other card index 3 retains reader and has no iframe. Source/dist hashes equal original.

Pixel-reviewed 1440-top,768-top,390-top,390-bottom: responsive supplied design visible, close remains visible, scrolling reaches footer, no horizontal clipping. Supplied typography/design untouched. Six screenshots saved.

npm run lint, npm run build, git diff --check passed. No commit/deploy. Browser coverage Chromium only; no screen-reader/Safari claim. Scope is integration, not redesign or exhaustive testing of supplied content.
