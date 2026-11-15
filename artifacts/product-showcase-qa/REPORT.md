# Product showcase implementation

Replaced reader JSX/CSS, added showcaseImages.js. Existing modal lifecycle/lightbox intact. Public data/raw evidence untouched. User-provided mobile rollout (~2,000 users, multiple clients, positive feedback) appears contributor-attributed in delivery section, separate from website/framework in development.

Explorer: Paradise has four genuine website screenshots, VaoCa landing has two existing images. No VaoCa screenshot is labeled Paradise mobile. Buttons expose aria-pressed, full uncropped images use contain; existing lightbox opens the selected image. Engineering decisions use native details/summary. Sparse ERP cases remain compact with identity and implementation context, no invented specifics.

## Verification
Chromium CDP harness /tmp/product-showcase-qa.cjs. Nine combinations: indices 0,3,6 at measured 1440x900,768x1024,390x844. Hero and bottom screenshots saved, results.json records overflow/image load/close/focus/inert. Explorer switch state tested at all sizes for Paradise. Nested lightbox Escape checked. Screenshot inspection covers desktop Paradise/ERP, tablet landing, mobile Paradise hero and delivery. No horizontal overflow in test results. Lint/build/diff check and Impeccable detector passed.

## Limits / review items
Not a complete acceptance pass: English, dark theme, explicit Tab cycle and reduced-motion runtime not tested. Intermediate scroll regions and all alternate images were not individually screenshot-inspected. Uncropped tall screenshots become narrow on desktop; zoom is available but readability is limited in the fit preview. Engineering copy preserves only existing supported decisions; it does not invent detailed problem/action/benefit stories. ERP data is sparse so viewer is intentionally brief. Parent should review these limitations before presenting as complete.

## Acceptance follow-up
- Removed the max-height constraint from gallery images. Images now use the full readable reader width, preserve their intrinsic ratio, and scroll with the existing bounded modal content. No nested scroll trap or cropping; full-image button remains available.
- Fixed modal focus trap to include native `summary` controls. Previously forward wrapping skipped the engineering disclosures.
- Reproducible `acceptance.cjs`: all 6 alternate gallery images, all expanded disclosures, overlapping 80%-viewport scroll captures, Paradise/landing/ERP at measured 1440×900, 768×1024, 390×844. All nine results: no horizontal overflow; 25 forward and 25 reverse Tab presses stayed in modal. Gallery images decoded before screenshots.
- `dark-en.cjs` repeats coverage with English selected through UI, stored dark theme and reduced-motion emulation. All nine combinations pass same geometry and keyboard checks. IMPORTANT: current global CSS has no dark token override; screenshots remain light despite dark application state. Do not claim visually verified dark styling.
- Pixel inspection: all six gallery images reviewed in representative captures, desktop Paradise full-width images and mobile landing/full delivery, English tablet landing, English desktop Paradise, mobile ERP. Labels match the available website assets. Screenshot collection covers every scroll region, but every individual captured frame has NOT been manually inspected.
- Existing nested lightbox/Escape evidence remains from initial results.json; not rerun in this follow-up. No fabricated engineering story added: existing data only supports brief decisions. Full problem/action/rationale/benefit narrative requires additional contributor details.
- lint/build/diff check passed after follow-up changes.
- Remaining acceptance limitations: lack of dark-theme tokens, full per-frame manual inspection, detailed supported engineering narratives. Do not describe these as a complete acceptance pass.
