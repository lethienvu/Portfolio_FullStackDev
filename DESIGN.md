# Design System

## Purpose

This document is the implementation contract for the existing portfolio UI. It standardizes reuse without changing the approved visual hierarchy, content, layout, or interaction behavior.

## Foundation

### Theme

- Theme state is applied through `html[data-theme="light|dark"]`.
- Use semantic tokens from `src/index.css`, never introduce raw color values for shared UI intent.
- Primary neutrals: `#f5f5f7` (light canvas), `#1d1d1f` (dark canvas / primary ink), and `#aaaaaa` (muted text). Blue remains the interaction accent.
- Light palette is neutral-white/black. Dark palette is charcoal with the same neutral hierarchy.

### Color roles

| Role | Primary token | Use |
|---|---|---|
| Canvas | `--color-bg`, `--portfolio-bg-gradient` | Page backgrounds |
| Surface | `--color-bg-alt`, `--color-surface` | Cards and section surfaces |
| Ink | `--color-ink`, `--color-ink-2`, `--color-ink-3` | Primary, secondary, muted text |
| Accent | `--color-accent`, `--color-accent-light`, `--color-accent-dark` | Focus, active state, emphasis |
| Borders | `--color-border`, `--color-border-strong` | Hairlines and component boundaries |
| Glass | `--color-bg-glass`, `--color-white-*`, `--shadow-glass-inset` | Translucent surfaces and highlights |
| Status | `--color-success-*`, `--color-danger-*`, `--color-warning-*` | Semantic feedback |

### Typography

- Body and general display: `--font-body` / `--font-display` (Fira Sans).
- Hero identity only: Madimi One for name; Yellowtail for role kicker.
- Font scale: `--text-2xs` through `--text-6xl`; use fluid title tokens for Hero and section titles.
- Use weight/leading/tracking tokens. Do not add arbitrary type scale values unless a component-specific visual treatment requires it.

### Spacing and layout

- Base spacing scale: `--space-1` to `--space-10` (4–128px).
- Default content container: `--container-max: 1440px`, `--container-px: 24px`.
- Preserve the existing Intro desktop split (4fr/6fr) and responsive one-column collapse.

### Shape and elevation

- Use `--radius-xs/sm/md/lg`, `--radius-control`, `--radius-glass`, or `--radius-pill` based on component intent.
- Use `--shadow-xs/sm/md` for ordinary elevation. Glass highlights use `--shadow-glass-inset`.
- Glass is purposeful: alpha surface + subtle border/highlight + backdrop blur when there is real background detail to refract.

## Component conventions

### Navigation

- Fixed 44px topbar with centered section navigation.
- Logo and utilities are balanced around the centered nav; do not shift the nav centre.
- Nav items remain semantic buttons with `aria-current` for the active section.

### LanguageSelect

- Custom ARIA listbox with portal rendering so the dropdown can blur page content rather than a filtered ancestor.
- Supports hover, touch/click, keyboard navigation, typeahead, Escape, and outside click.
- Flags use 22×22 square-rounded containers; selected state uses a check icon.

### ThemeSkySwitch

- Keeps native switch semantics: `role="switch"`, `aria-checked`, descriptive label.
- Compact visual pill; visual transition must respect `prefers-reduced-motion`.

### Cards and panels

- Preserve BEM component ownership (`hero__*`, `project-card__*`, etc.).
- Extract shared UI only after the same intent occurs at least three times. Do not abstract context-specific visual compositions.

## Interaction and accessibility

- Every interactive element must have default, hover, active/selected, focus-visible, dark-mode, and reduced-motion behavior as applicable.
- Maintain minimum 44px interaction shells for topbar touch targets.
- The global focus ring and text selection derive from semantic tokens; component rules may refine but must not remove focus visibility.
- Decorative UI must be `aria-hidden`; hover behavior must retain keyboard/click alternatives.

## Motion

- Use `--transition` by default; avoid `transition: all`.
- Prefer transform and opacity for interaction motion.
- Use existing authored moments (Intro reveal, listbox pop, theme switch) rather than adding generic entrance animation to every section.

## Responsive policy

- Current CSS uses 420, 480, 520, 640, 680, 700, 768, 900, 1000, 1024, and 1100px.
- For new work, prefer the declared reference scale (480/640/768/900) unless an established component needs its existing threshold.
- Preserve current behavior before consolidating breakpoints; breakpoint consolidation is a separately verified refactor.

## Verification

For any UI change: run `npm run lint`, `npm run build`, and `git diff --check`. Verify keyboard focus, light/dark state, reduced motion, and the relevant mobile breakpoint.
