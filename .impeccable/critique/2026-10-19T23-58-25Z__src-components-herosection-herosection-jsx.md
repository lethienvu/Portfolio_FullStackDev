---
target: hero section
total_score: 24
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/lethienvu/Source Code/Portfolio_FullStackDev/Portfolio_FullStackDev/src/components/HeroSection/HeroSection.jsx"
target_fingerprint: "sha256:311ec0e27183666305cd1909e0c7da5250aab127a1dc7d90968975a3adcaef0b"
target_path: /Users/lethienvu/Source Code/Portfolio_FullStackDev/Portfolio_FullStackDev/src/components/HeroSection/HeroSection.jsx
timestamp: 2026-10-19T23-58-25Z
slug: src-components-herosection-herosection-jsx
---
Method: dual-agent (A: hero_design_review · B: hero_detector_review)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 3/4 | Expand/collapse state is clear, but project previews rely on hover-only captions. |
| 2 | Match System / Real World | 4/4 | ERP + engineering positioning uses concrete outcomes and familiar CV/project actions. |
| 3 | User Control and Freedom | 3/4 | CV and case studies are direct; preview modal has an accessible label but its exit behavior was not visualized. |
| 4 | Consistency and Standards | 3/4 | CTA pair and card system are coherent; Vietnamese body content mixes with English labels and preview metadata. |
| 5 | Error Prevention | 3/4 | Semantic buttons and links are used; “View work” discovery is weak on touch, so the action is less predictable. |
| 6 | Recognition Rather Than Recall | 3/4 | Named dual roles and concrete stats help; six expertise items are present in JSX but hidden by CSS. |
| 7 | Flexibility and Efficiency | n/a | Experience/portfolio hero; no expert workflow is required here. |
| 8 | Aesthetic and Minimalist Design | 2/4 | Strong authored character, but name, profile facts, value line, dual-role cards, body copy, CTAs, stats, profile card, and four project frames compete in one viewport. |
| 9 | Error Recovery | n/a | No form or destructive task in this hero. |
| 10 | Help and Documentation | n/a | Experience/portfolio hero; no documentation task in scope. |
| **Total** | | **24/28** | **Good foundation; hierarchy needs consolidation** |

## Design Specificity Verdict

The hero feels authored for this portfolio rather than category-interchangeable: it presents a credible bridge between Fullstack Engineering and ERP implementation through dual role tracks, a real profile card, project artifacts, and outcome proof. The weakness is not genericness; it is an over-dense first impression that makes the visitor decide what to read first.

**Deterministic scan:** `impeccable detect --json src/components/HeroSection/HeroSection.jsx` returned `[]` (0 findings). This is a clean mechanical scan, not a visual quality certificate. Browser visualization was unavailable, so no live overlay or rendered breakpoint inspection was performed.

## Overall Impression

A distinctive, credible professional hero with an unusually strong positioning idea. Its largest opportunity is to give that idea one unmistakable focal point instead of asking the eye to process biography, credentials, two professions, portfolio thumbnails, and metrics at once.

## What’s Working

1. **Specific market position.** The value headline and paired role tracks communicate an engineering-to-ERP implementation niche clearly (`HeroSection.jsx:73–87`).
2. **Evidence, not empty claims.** Career figures include contextual detail and a case-study route for the performance claim (`HeroSection.jsx:55–59`, `111–116`).
3. **Purposeful interactive detail.** Preview frames are semantic buttons, have descriptive accessible labels, support keyboard focus styling, and open a gallery path (`HeroSection.jsx:23–37`; `HeroSection.css:444–447`).

## Priority Issues

1. **[P1] Too many competing focal points in the first viewport**
   - **Why it matters:** The visitor must parse name, personal facts, positioning, two title cards, prose, two CTAs, a profile card, four preview cards, and metrics before knowing the primary message.
   - **Fix:** Establish a three-layer hierarchy: (1) value proposition, (2) primary action, (3) proof. Keep the name and dual-role treatment, but move either stats or project-frame cluster below the fold on desktop; make one CTA visually primary.
   - **Suggested command:** `/impeccable distill`

2. **[P1] Project preview purpose is invisible until hover/focus**
   - **Why it matters:** The captions and “View work” cue start at opacity 0, and the cue is removed on mobile; touch visitors can see tiny screenshots without knowing they open case studies (`HeroSection.css:440–447`, `510–515`).
   - **Fix:** Retain a compact persistent affordance (e.g., visible “4 case studies ↗” near the cluster) or turn the cluster into one labelled “Selected work” link. Preserve individual lightbox buttons as enhancement.
   - **Suggested command:** `/impeccable clarify`

3. **[P2] Content language and audience signal are inconsistent**
   - **Why it matters:** Vietnamese positioning and CTAs coexist with English role labels, specialities, preview copy, and ARIA labels. This can make a local recruiter or enterprise buyer question whether the page is localized intentionally (`HeroSection.jsx:12–17`, `47–54`, `74–87`).
   - **Fix:** Translate all visitor-facing labels and `PROJECT_PREVIEWS` through the existing i18n layer; retain technical terms only where they are deliberate industry language.
   - **Suggested command:** `/impeccable clarify`

4. **[P2] Critical content is hidden while decorative complexity remains**
   - **Why it matters:** All six specialties are rendered but permanently hidden with `display: none`, while four small visual preview cards remain. This spends DOM/cognitive budget without surfacing the professional proof (`HeroSection.jsx:47–54`, `97–99`; `HeroSection.css:309–317`).
   - **Fix:** Either remove the hidden list until it has a defined role, or show 2–3 concise specialty proof points in place of lower-value decorative detail.
   - **Suggested command:** `/impeccable layout`

5. **[P2] Small-text proof is fragile, especially on mobile**
   - **Why it matters:** Stats labels and details reach `.51rem`, preview captions `.43rem`, while cards compress to 103px on mobile (`HeroSection.css:363–366`, `501–514`). This undermines a portfolio whose credibility depends on readable outcomes.
   - **Fix:** Enforce a readable minimum type size for meaningful text; hide the micro-detail at small widths and expose it in the case-study destination, or replace the grid with one concise proof statement.
   - **Suggested command:** `/impeccable adapt`

## Persona Red Flags

**Hiring manager (first-time visitor):** The role pairing is memorable, but the visual cluster competes with the main professional proposition. They may leave without locating the single strongest evidence of ERP implementation impact.

**Enterprise buyer / implementation lead:** “15K+ users” and “50% faster” are useful proof, but the methodology for the 50% claim is tiny and the route to its evidence is visually secondary (`HeroSection.jsx:58`, `115`; `HeroSection.css:364–366`).

**Mobile visitor:** Individual project frames shrink to 103px with captions at `.43rem` and no visible action hint. They can tap them, but do not get a discoverable reason to do so (`HeroSection.css:510–515`).

## Minor Observations

- The intro is intentionally motion-rich but properly implements a reduced-motion override (`HeroSection.css:42–47`, `522–524`).
- `height: 100svh` with `min-height: 720px` is a reasonable desktop visual anchor; rendered testing is still needed on short laptop heights.
- The “Xem thêm” toggle is a good recovery mechanism for long copy; it should only remain if copy actually exceeds two lines in every language.

## Questions to Consider

- Is the hero’s primary job to win a recruiter’s attention, secure ERP implementation consulting work, or showcase engineering depth? The order of proof should follow that choice.
- Would one confident “Selected ERP & product outcomes” proof block outperform the four scattered mini-previews?
- Which language should be the default audience signal: Vietnamese-first with translated terms, or a deliberately bilingual professional presentation?
