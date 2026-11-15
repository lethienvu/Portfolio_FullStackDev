# CSS token audit and first preservation pass

## Implemented
- Global :root definitions extracted from src/index.css to src/styles/tokens.css, imported first.
- Exact property-aware existing-token substitutions across 16 CSS files (see replacements.json).
- Duplicate white surface/font/accent definitions now alias authoritative tokens.
- Capsule dimensions retain independent semantic tokens rather than coupling dimensions/blur to spacing.
- Project maintenance instructions recorded in AGENTS.md.
- Source snapshot: before/src. No public Case Study HTML or JSX content changed in this pass.

## Verification
- Declaration comparison resolving global variables: zero changed values (value-equivalence.json).
- lint, build, diff whitespace checks passed.
- Project filter counts 11/6/5 and modal open/Escape tested at 1440x900, 768x1024, 390x844.
- Six full-page captures in before/ and after/ cover light/dark states. Not a clean pixel-regression pass: asynchronous/deferred content and animation produce differences. Tablet/mobile captures skip some deferred skills content, so they cannot certify the full page.
- Light screenshots inspected; no obvious project grid regression. Full dark visual/interaction and contrast certification not completed.

## Existing defects deliberately not disguised as neutral refactoring
- Missing --color-accent-soft in App.css.
- Missing --color-background, --color-primary, --color-ink-1 in ProjectShowcase.css.
- Missing --shadow-lg in experience styles.
- Global palette has no dark theme override; component dark surfaces still consume light text tokens.
- --color-ink-3 (#aaa) on #f5f5f7: approximately 2.13:1, fails WCAG AA text contrast. --color-ink-2 passes (~7.26:1); accent passes (~4.75:1).
- LanguageSelect and IntroIsometricMark retain appended override chains. Moving mobile rules changes actual cascade: do not consolidate blindly.
- Inventory reports candidate unused tokens, duplicate selectors and literals, not confirmed dead code or violations. Dynamic custom properties and fallback references are not missing-token defects.

## Remaining scope
Full cascade consolidation, remaining hardcoded styles/inline styles, missing-token repair and approved contrast/theme design changes require a subsequent verified pass. Do not claim repository-wide elimination of hardcodes or complete Visual QA.
