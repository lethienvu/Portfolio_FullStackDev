# Editorial modal v2 QA

## Why the previous reader failed
The previous reader led with document navigation and repeated overview copy instead of showing the product. Sections had similar visual weight, hiding personal contributions. A generic image-contain rule also won the cascade and reduced the tall Vào Ca screenshot to a narrow strip with excessive whitespace.

## Changes
- Removed anchor navigation and redundant overview; title and short value statement lead directly into real imagery and role/scope/technology facts.
- Prominent contribution list, distinct project challenges, supporting technical decisions and concise outcomes.
- Wide 16:9 top crop makes the existing product screenshots readable early; full original remains available in the lightbox.
- Removed public source-review/placeholder prose. Vào Ca outcome describes the frontend deliverable, not production release. Paradise rollout remains explicitly contributor-reported. No metrics added. Raw evidence remains separate.
- Responsive two-column desktop story and single-column tablet/mobile; localized VI/EN labels.

## Verification
Automated Chromium/CDP harness: `/tmp/modal-v2-qa.cjs` (results captured in results.json).
- Paradise (index 0) and Vào Ca (index 3), each at measured 1440×900, 768×1024 and 390×844.
- Hero, contribution/story and outcome screenshots: 18 PNG files.
- All six runs: no reader horizontal overflow, loaded image naturalWidth 1300.
- All six runs: Escape removes dialog after exit animation, restores focus to originating CTA and clears root inert.
- Lightbox opens above reader (two dialogs); first Escape removes lightbox and preserves reader; second closes reader.
- Actual screenshots inspected at all three sizes across both projects; fixed image cascade conflict and recaptured.
- `npm run lint`, `npm run build`, `git diff --check`: passed after final edits.

## Limits
Screenshots and runtime interactions cover Vietnamese, Chromium and the two featured projects. English strings are present but were not separately screenshot-tested. No screen-reader, Safari or production-deployment verification was performed. Lifecycle/focus-trap implementation is retained; explicit Tab-cycle regression was not added in this run. Existing unrelated card content and working-tree edits are outside this viewer scope. No commit or deployment.
