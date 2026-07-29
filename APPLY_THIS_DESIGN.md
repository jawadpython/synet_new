# APPLY THIS DESIGN — Cursor Instruction Prompt

> **How to use:** Copy this entire file into the other website project. Tell Cursor:
> “Follow `APPLY_THIS_DESIGN.md`. Restyle the existing site to match this design system. **Do not change any content, copy, data, routes, or business logic** — only visual design, layout, and UI components.”
>
> Optionally also copy `brief-reference.png` into that project as a visual reference.

---

## 0. Absolute rules (must follow)

1. **Do NOT change content.** Keep all existing texts, names, stats, emails, phone numbers, case studies, team bios, nav labels, form fields, SEO metadata wording, and translations exactly as they are in the target project.
2. **Do NOT invent new marketing copy** to “fit” the design. If a visual slot needs a label the target site already has, reuse that label. If a slot has no equivalent, keep the target site’s existing section structure and only restyle it.
3. **Do NOT remove pages or features.** Preserve routing, i18n, forms, APIs, and CMS/data sources.
4. **Do change:** colors, fonts, spacing, section layout patterns, button styles, cards, header/footer chrome, backgrounds, icons style, motion — to match this design system.
5. Prefer adapting existing components over rewriting the whole app. Match the design visually; keep the codebase architecture of the target site when possible.
6. Make it responsive (desktop / tablet / mobile).
7. After restyling, verify pages still render with the **same content** as before.

---

## 1. Design goal

Premium B2B consulting / corporate look:
- Clean, modern, sober
- Dark navy hero with abstract light-trail graphics
- Alternating white / light-blue-gray sections
- Serif headlines + sans body
- Electric blue accents and CTAs
- Soft cards with light borders (not heavy shadows)
- Thin-line blue icons

Visual reference (if present): `brief-reference.png`

---

## 2. Brand tokens (apply as CSS variables / Tailwind theme)

### Colors

| Token | Hex | Usage |
|-------|-----|--------|
| `navy` | `#071E61` | Headings, dark text accents, footer logo |
| `navy-deep` | `#010A29` | Hero / dark backgrounds |
| `electric` | `#0569FF` | Primary CTAs, eyebrows, accent words, icons, active underlines |
| `violet` | `#5E35F2` | Hero trail / gradient accents only |
| `cyan` | `#16BCEB` | Secondary glow in hero trails |
| `text-gray` | `#334155` | Body text |
| `text-muted` | `#64748B` | Secondary / muted text |
| `bg-subtle` | `#F4F7FB` | Alternate section background |
| `bg-mist` | `#EEF3FA` | Stats band, soft panels |
| `border` | `#E2E8F0` | Dividers, card borders |
| `white` | `#FFFFFF` | Cards, light sections, footer |

**Avoid:** purple-on-white themes, cream/terracotta looks, heavy glow everywhere, dark mode for the whole site, emoji icons.

### Typography

- **Headings (h1–h3):** elegant serif — e.g. **Fraunces** (or Playfair Display / Source Serif 4). Weight medium (500–600). Color `navy` (white on dark hero).
- **UI / body / nav:** clean geometric sans — e.g. **Manrope** (or DM Sans / Plus Jakarta Sans). **Do not use Inter, Roboto, Arial, or system-ui as the primary brand font.**
- Eyebrow labels: sans, ~11px, uppercase, tracking ~0.18em, color `electric`, font-semibold.
- Accent words inside headlines (optional, only if target copy already emphasizes a word): color `electric`.

### Layout

- Max content width ≈ `74rem` (~1184px)
- Horizontal padding: `px-5 sm:px-8 lg:px-10`
- Section vertical padding: `py-16 md:py-24`
- Cards: `rounded-xl`, border `border`, shadow `0 8px 30px rgba(7,30,97,0.06)` (very soft)
- Primary button radius: `rounded-md`

---

## 3. Buttons

Implement these variants (labels stay from the target site):

| Variant | Style |
|---------|--------|
| `primary` | bg `#0569FF`, white text, optional `→` arrow, hover slightly darker blue |
| `outline-light` | transparent, white border/text (for dark hero) |
| `outline-blue` | white bg, electric border + text; hover fills electric |
| `secondary` | transparent, navy/muted border |
| `ghost` | text-only electric link style |

Primary CTA size: `px-5 py-3`, `text-sm`, `font-semibold`.

---

## 4. Header / navigation

- **Fixed** top header.
- On homepage hero (top of page, not scrolled): **transparent** over dark hero; logo white; nav links white; FR|EN white; primary blue CTA on the right.
- After scroll / on light pages: white/blurred background, bottom border, navy logo, muted nav links, electric underline on active link.
- Nav: compact `text-[13px]`, generous gaps.
- Mobile: hamburger; open panel on white with stacked links.

**Keep the target site’s existing menu items and CTA label.** Only restyle.

---

## 5. Homepage section pattern (map target sections onto these layouts)

Map the **target site’s existing sections** to the closest layout below. Do not rename sections or rewrite their copy. If the target has fewer/more sections, keep them — restyle each to the nearest pattern.

### 5.1 Hero (dark)

- Full-viewport-ish height (`min-h ~88–92vh`)
- Background: `navy-deep` + abstract **light trails** on the right (SVG strokes + soft radial blues/violet/cyan). Subtle motion OK; respect `prefers-reduced-motion`.
- Left: large serif headline (white), supporting paragraph (white/80%), 1–2 CTAs (primary + outline-light)
- Header overlays hero (transparent)

### 5.2 Value / “Why us” pillars

- White background
- Layout: left column = eyebrow + serif title + short intro; right = 2×2 or 4-column icon features
- Icons: thin stroke, electric blue, monochrome line art
- Feature title: sans bold navy; description: muted small text

### 5.3 Case studies / references cards

- Light gray / `bg-subtle` section
- Header row: eyebrow + serif title left; outline-blue “view all” button right (if that link already exists)
- Grid of cards (often 3–4 on home):
  - Top image (rounded with card), category tag overlay (electric bg, white uppercase small text)
  - Serif card title
  - Optional labeled blocks (e.g. Challenge / Value) with electric uppercase micro-labels — **only if the target content already has those fields**
  - Optional KPI footer with 2 metrics (electric large numbers) — **only if metrics already exist**
- Soft border + light shadow

### 5.4 Stats strip

- Soft mist background band
- 4 columns (or as many stats as the target has), large electric serif numbers, muted labels
- Vertical hairline dividers between columns on desktop

### 5.5 Expertise / services teaser

- White section
- Eyebrow + serif title + outline-blue link
- 3–4 columns separated by vertical borders on desktop
- Line icon + bold title + short description

### 5.6 Process / approach steps

- Light background
- Eyebrow centered with horizontal rules, or left title + button
- Horizontal steps: numbered circle (electric border + number) + title + short text
- Small chevron between steps on desktop

### 5.7 Team / founders

- White section
- Eyebrow + serif title
- Cards in a row:
  - **Photo flush left** (full card height, no padding around image, `object-cover`)
  - **Text on the right** (name bold, role muted, short bio)
  - Optional third “network / team” card with icon left + text right
- Card: white, rounded-xl, light border, soft shadow, `overflow-hidden`, horizontal flex

### 5.8 Pre-footer CTA band

- `bg-mist` with subtle light-trail decoration top-right
- Grid: serif headline | short paragraph | primary button (+ small helper note if it already exists)
- Do not invent new CTA copy

### 5.9 Footer

- White background, top border (not a dark navy footer)
- Columns: logo + tagline | contact | quick links | social
- Bottom row: copyright left; legal links right separated by `|`
- Keep existing contact details and links exactly

---

## 6. Inner pages

- Add top padding under fixed header (`pt-28` / `pt-36`)
- Page hero: light/subtle background, electric eyebrow, large serif title, muted subtitle
- Reuse the same card / grid / step components as homepage teasers
- Keep forms functionally identical; restyle inputs to match borders, focus ring electric, primary submit button

---

## 7. Icons & imagery

- Prefer **thin outline SVG icons** (stroke ~1.5), colored `electric`
- No emoji, no heavy filled icon packs as the default look
- Case/hero images: real photography or existing assets from the target site; do not replace content images unless broken
- Team photos: keep existing photos; layout must be **image left / text right**, photo edge-to-edge on the left of the card

---

## 8. Motion

Light, intentional only:
- Hero light-trail slow drift
- Optional scroll fade-ins for sections
- Button hover color transitions (~150–200ms)
- No flashy parallax or excessive animations

---

## 9. Implementation checklist for Cursor

Work in this order:

1. Read the target project structure (framework, styling system, where pages/components live).
2. Add design tokens (CSS variables or Tailwind theme) from section 2.
3. Set fonts (serif + sans) in the root layout.
4. Restyle global base styles (body, headings, container, eyebrow utility).
5. Restyle Button + Header + Footer first.
6. Restyle homepage sections one by one, mapping to patterns in section 5 **without editing copy**.
7. Restyle inner pages with the same system.
8. Check mobile layouts (stack grids, keep hero readable, team cards still image-left when space allows).
9. Smoke-test: compare key strings before/after — content must be unchanged.
10. Do not add new dependencies unless required for fonts/icons already used by the stack.

---

## 10. What “success” looks like

- Someone familiar with the reference design recognizes the same visual language (colors, hero, cards, typography, spacing).
- A content editor notices **no copy changes**.
- The site still works: navigation, language switch (if any), forms, links.

---

## 11. Starter message to paste in Cursor chat

```text
Follow APPLY_THIS_DESIGN.md strictly.

Task: Restyle this existing website to match that design system (premium navy / electric blue corporate look with dark hero, serif headings, light section rhythm, soft cards).

CRITICAL:
- Do NOT change any content, copy, data, translations, routes, or business logic.
- Only change visual design, layout structure, and UI styling.
- Map existing sections to the closest layout patterns in the file.
- Keep all existing text exactly as-is.
- Make it responsive.
- When done, summarize what you restyled and confirm content was not modified.
```

---

## 12. Optional: if the other site is not React/Next

Translate the same tokens and patterns into that stack (e.g. Vue, WordPress, plain HTML/CSS). The visual rules in sections 2–8 remain the source of truth; component file names in this SY'ONE project are examples only, not requirements.
