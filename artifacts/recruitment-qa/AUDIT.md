# Recruitment portfolio implementation — 2026-10-23

## Changes
- 12 project identities/assets retained; original copy preserved in `CaseStudies.before.jsx` and original CSS alongside it.
- Cards now prioritize identity and product/business context, followed by explicit personal role/contribution, category/capabilities and a named dialog CTA.
- Case study reader has Overview, My Role, Challenge, Solution & Decisions, Outcomes, Evidence. Software screenshots and implementation client logos are explicitly different evidence types.
- CV-backed statements are attributed, not independently validated. Unverified stacks, performance improvements, invented decisions and project-specific outcomes are no longer presented as facts.
- Portal dialog includes body scroll lock, inert background, focus trap/return, Escape dismissal, visible focus, independent content scrolling and existing lightbox callback.
- Vietnamese/English copy; Japanese/Chinese continue to use English fallback for this section, now explicitly marked with `lang=en`.

## Audit and provenance
Sources reviewed: CV PDFs (`public/LeThienVu_CV.pdf`, Implementation Specialist V2), current CaseStudies source, `src/i18n/vi.js`, ProductImageSection, CONTENT_EXPORT.md. Exported site copy is not independent evidence. CV statements are first-party self-report; no client confirmation or repository ownership evidence was supplied.

| Project | Available evidence | Publication decision / remaining gap |
|---|---|---|
| Paradise HR SPA | Product image; CV Paradise HR configuration/rollout | Attribute implementation only. SPA code authorship, architecture and measurements not established. Aggregate 10+ enterprises/14,000+ users explicitly ecosystem-level, not SPA achievement. |
| GPS attendance | Product image | Interface description only. Role, GPS implementation, offline/anti-fraud behavior and outcomes unverified. |
| Vào Ca app | Image; CV configuration and shift/attendance rules | Attribute configuration participation, not full software ownership. Daily-event volume remains aggregated CV context. |
| Vào Ca landing | Landing screenshot | No verified engineering role, stack or conversion outcome. |
| Leave request | Interface image | No verified workflow ownership, state model or delivery outcome. |
| Recruitment | Interface image | No verified engineering ownership, stack or adoption outcome. |
| Lichien HRM | Existing portfolio claim and logo | Confirm engagement, personal scope and acceptance evidence. |
| Steel Flower HRM | Existing portfolio claim and logo | Confirm engagement, personal scope and acceptance evidence. |
| Tripod | Named in CV, logo | Client association supported; project-specific ownership and outcomes not established. |
| Saigon Wicker ERP | Existing portfolio claim and logo | Confirm consulting scope, deliverables and client acceptance. |
| Việt Úc ERP | Existing portfolio claim and logo | Confirm consulting scope, deliverables and client acceptance. |
| Lotte | Named in CV, logo | Client association supported; Audit-specific responsibility not separately supported. |

The CV's T-SQL optimization contribution is not allocated to a named client/module because that association is absent. Public evidence gaps are intentionally honest but make this an evidence-review draft rather than a fully persuasive publication-ready portfolio.

## Targeted questions for completion
1. For each software item, which modules/files did you personally implement, versus configure, test or coordinate? Supply a shareable commit/demo or redacted code excerpt.
2. Paradise SPA: what routing/rendering decision did you own, which alternatives were considered, and what reproducible before/after measurement exists?
3. GPS / leave / recruitment: provide one difficult edge case, your implementation choice, and its acceptance test. Did you build it or deploy an existing module?
4. Vào Ca landing: which pages/components and technologies did you personally implement? Any measured outcome with baseline/date?
5. For each of the six client engagements: confirm dates, role, modules, direct deliverables, one business exception and acceptance evidence. Distinguish team result from personal contribution.
6. Which client/module used your T-SQL work? Provide redacted query/plan, baseline, data volume and timing methodology if performance is claimed.
7. May client names/logos/screenshots be used publicly? Which source CV is canonical and are the aggregate figures current?

## Verification
- `npm run lint`: pass.
- `npm run build`: pass (Vite 8).
- `git diff --check`: pass.
- Browser target `recruitment-qa`, localhost port 5173; screenshots copied here and visually inspected.
- Desktop measured 1440×900, document scrollWidth 1434: 12 cards, screenshot `desktop-cards.png`; six-section reader `desktop-modal.png`.
- Mobile measured 390×844, document scrollWidth 384 (cards), 390 (modal): `mobile-cards.png`, `mobile-modal.png`. No horizontal overflow observed.
- Tablet measured 768×1024, document scrollWidth 762: `tablet-cards.png`, `tablet-modal.png` (Lotte implementation example).
- Initial dialog focus is close button; background root inert=true; all six sections present.
- Real Shift+Tab wraps from close to last image button, scrolls content to 680.5px at 390×844. Real Escape closes, restores first CTA focus, clears root inert.
- Images/text readable at tested sizes. Mobile first card is tall due to honest scope copy, not a fixed card height.

## Limits / remaining checks
- Not every dialog, dark theme, English fallback, lightbox roundtrip or forward Tab cycle received runtime QA. Reduced-motion rule is implemented but not browser-emulated.
- Existing ProductImageSection is left untouched; its embedded showcase is not mounted inside the new evidence-first reader. Existing global lightbox callback is retained for the project's primary screenshot.
- No new dependencies, global design/token changes, asset modifications, commits or deployment. Unrelated pre-existing worktree changes untouched.
