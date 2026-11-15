# Editorial card integration
React 19 + Vite, component CSS and html[data-theme]. Target CaseStudies.jsx, lazy rendered by App.jsx. Replaced its 12 list articles with EditorialProjectCard; preserved two group titles and modal code.

Files: CaseStudies.jsx; new EditorialProjectCard.jsx/.css. MIT comment retained. Real screenshots/logos replace illustration sky/sun; original hill paths and 0.6/0.7/0.9s motion curves plus reveal delays retained. Removed fictitious author/bookmark. Category is real, CTA opens existing dialog. Intrinsic expanded height replaces fixed 460px ceiling to avoid clipping real copy; this means expansion reflows the grid, unlike reference fixed canvas. No fake bookmark feature added.

Theme aliases map to incumbent semantic tokens. Inspection found global dark semantic colors absent despite data-theme; scoped dark aliases use existing neutral tokens, without changing page. Hero font remains untouched.

Checks: lint/build/diff pass before final one-line focus-preservation patch. Browser measured 1125x963 desktop and 390x844 mobile; no mobile horizontal overflow. Inspected initial desktop/light and mobile/light plus corrected dark mobile screenshot. Synthetic Enter transferred focus to CTA; CTA opened actual dialog. Found blur during modal could hide opener; patched to keep reveal open when focus goes into dialog. Needs runtime recheck. CSS/JS reduced-motion path present, not emulated. No tablet or exact 1440 viewport verification. Physical touch, full keyboard cycle, all twelve cards and reduced-motion not runtime verified. Full visual acceptance remains open.

Detector emitted only bounce-easing advisory; retained intentionally because exact reference curve requested. No dependencies/commit/deploy.

## Stability follow-up
- Removed collapsing max-height/grid reserve: revealed content occupies intrinsic space in both states. Browser measured first card 472px before/after opening at 1440x900; no page overflow.
- Added post-commit CTA focus via useLayoutEffect for closed-card Enter; removed contradictory CSS overrides; title translates 12px rather than changing layout.
- Browser press Enter focused actual CTA, second Enter opened dialog with close focused; press Escape unmounted dialog and returned focus to CTA with card still open. These were browser key actions, not dispatched DOM events.
- Measured 1440x900 desktop dark and 768x1024 tablet light screenshots inspected and saved as stability-*.png. Tablet and 390x844 mobile reported zero horizontally clipped titles and no horizontal overflow.
- Mobile inspection caught large hidden-copy reserve. Final <=640px/coarse-hover layout shows useful description/CTA permanently. Runtime final mobile confirms opacity 1 and inert false at 390x844.
- lint/build/diff pass after final changes. No exact reference-fidelity claim: real content uses intrinsic height, not fixed reference canvas.
- Remaining limits: final mobile screenshot not captured; full six viewport/theme matrix, physical touch, reduced-motion emulation, and Tab traversal not completed. Existing screenshot set predates this final mobile visibility adjustment. Desktop light/dark global page palette remains outside scope; card aliases scoped.
