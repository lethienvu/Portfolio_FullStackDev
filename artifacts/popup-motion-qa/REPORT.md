# Popup motion and geometry refinement

Scope: CaseStudies.jsx and CaseStudies.css only; project content, image assets and other components preserved. No dependency, commit or deployment.

## Design contract
Read project DESIGN.md and workspace design-system/DESIGN_SYSTEM.md (the repo has no design-system directory). Read orchestrator, Impeccable animate/craft-floor, React best practices, responsive-browser-evidence and browser automation.

The existing site supplies --ease-apple, spacing, type, semantic colors, radius and shadow. Arrival 320ms, departure 200ms are component decisions, not Apple-prescribed constants. Opacity scrim + bounded 16px/2% panel entrance communicates modal depth; departure is 8px/2%. No width/height animation, bounce or added library. Apple official Motion page https://developer.apple.com/design/human-interface-guidelines/motion was reachable but extraction only returned its title; no claim of full current HIG conformance.

Width follows 72ch + twice inner padding (~707px with current font). Content and header share an edge. Height remains intrinsic, capped at viewport minus safe-area-aware gutters. Desktop/tablet gutter/padding 32px; <=640px gutter 12px and padding 24px. Radius 20px, existing surface/ink/border/shadow and black-50 scrim. Fixed header and flex min-height:0 scrolling body keep close accessible.

Exit is mounted through animationend, with CSS-derived duration + 80ms fallback. Inert background, scroll lock and focus trap last through departure. Repeated close requests are idempotent; pending timeout is cleaned up. Reduced-motion removes spatial movement, uses the existing near-instant global motion rule and immediate close fallback.

## Verified
- npm run lint, npm run build, git diff --check pass after final change.
- Impeccable detector [] before final semantic scrim-token correction.
- Measured 1440x900: panel 706.81x836, 32px vertical gutters, 32px content padding; no horizontal overflow. desktop.png.
- Measured 768x1024: panel 704x960, 32px gutters; no horizontal overflow. tablet.png.
- Measured 390x844: panel 366x820, 12px gutters, 24px content padding; no horizontal overflow. mobile.png.
- All three screenshots visually inspected; readable hierarchy, aligned title/body, no clipped close control. Initial inspection caught an undefined scrim token; corrected to existing black-50 and recaptured.
- Runtime entrance has case-dialog-in + case-panel-in animations.
- Runtime close remains connected in closing state with background inert and case-dialog-out; after completion dialog absent, inert false, focus returned to first CTA.
- Immediate repeated synthetic Escape during entrance closes successfully and restores opener focus.

## Limits
- Keyboard Escape test used dispatched DOM events, not physical tool key input.
- Browser emulate rejected reducedMotion (only device/colorScheme/timezoneId/locale supported); reduced-motion behavior checked in source, not actual media emulation.
- No runtime dark-mode or lightbox roundtrip regression test; existing theme tokens/lightbox logic retained.
- Screenshots prove settled geometry, not subjective frame-by-frame motion smoothness. Runtime animation states were inspected separately.
