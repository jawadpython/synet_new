# SYNET Visual Design System

> **Document type:** Design reference specification  
> **Version:** 1.0  
> **Last updated:** 2026-06-08  
> **Companion doc:** [SYNET-UX-IA-REPORT.md](./SYNET-UX-IA-REPORT.md)  
> **Status:** Approved for design & implementation  

This document defines the complete visual language for the SYNET official website. It is the single source of truth for color, typography, spacing, components, icons, and layout. All UI decisions must align with this system.

---

## Table of contents

1. [Design philosophy](#1-design-philosophy)
2. [Brand foundation](#2-brand-foundation)
3. [Color palette](#3-color-palette)
4. [Typography system](#4-typography-system)
5. [Spacing system](#5-spacing-system)
6. [Elevation & borders](#6-elevation--borders)
7. [Button styles](#7-button-styles)
8. [Card styles](#8-card-styles)
9. [Form styles](#9-form-styles)
10. [Icon guidelines](#10-icon-guidelines)
11. [Layout rules](#11-layout-rules)
12. [Component patterns](#12-component-patterns)
13. [Imagery & illustration](#13-imagery--illustration)
14. [Motion & interaction](#14-motion--interaction)
15. [RTL & multilingual visual rules](#15-rtl--multilingual-visual-rules)
16. [Accessibility requirements](#16-accessibility-requirements)
17. [Design tokens summary](#17-design-tokens-summary)
18. [Do & don't reference](#18-do--dont-reference)

---

## 1. Design philosophy

### Brand personality

| Attribute | Expression |
|-----------|------------|
| **Corporate** | Structured grids, restrained palette, formal tone |
| **Trustworthy** | Consistent patterns, clear hierarchy, no visual tricks |
| **Professional** | Neutral backgrounds, readable type, minimal decoration |
| **Enterprise-grade** | Dense information handled with clarity; scalable component library |
| **Clean** | Generous whitespace within defined grids; no clutter |
| **Modern but not trendy** | Flat surfaces, subtle depth, timeless sans-serif typography |

### Reference calibration

| Company | What to borrow | What to avoid |
|---------|----------------|---------------|
| **Cisco** | Confident navy/blue identity, service-oriented hierarchy, solid CTAs | Over-branded campaign aesthetics |
| **Fortinet** | Security-sector authority, sharp layout discipline, strong section headers | Aggressive red-heavy security fear tone |
| **Dell Technologies** | Enterprise product clarity, modular content blocks, B2B trust signals | Heavy e-commerce product-grid feel |
| **Microsoft Learn** | Documentation-grade readability, clear learning paths, accessible contrast | Consumer/playful illustration style |

### Explicitly avoided

- Startup aesthetics (playful mascots, bold gradients, oversized rounded UI)
- AI-looking layouts (glowing orbs, purple gradients, chat-bubble hero sections)
- Excessive gradients, glassmorphism, neon accents
- Overly rounded corners (no pill buttons, no 24px+ card radius)
- Floating elements with heavy drop shadows
- Complex or decorative animations

---

## 2. Brand foundation

### Logo colors (immutable)

These three colors are derived from the SYNET logo and anchor the entire system.

| Name | Role | Hex | RGB |
|------|------|-----|-----|
| **Navy Blue** | Primary brand, headers, footer, primary text on light | `#0B1F3A` | 11, 31, 58 |
| **Blue** | Interactive accent, links, focus, secondary brand | `#0066B3` | 0, 102, 179 |
| **White** | Primary backgrounds, text on dark surfaces | `#FFFFFF` | 255, 255, 255 |

### Logo usage rules

- Minimum clear space: height of the "S" mark on all sides
- On dark backgrounds (navy): use white logo or white + blue mark
- On light backgrounds: use navy logo or full-color logo
- Never place the logo on busy photography without a solid overlay
- Never apply gradients, shadows, or glow to the logo
- Never rotate, stretch, or recolor outside the three brand colors

---

## 3. Color palette

### Primary scale

Built from logo Navy and Blue. Used for brand surfaces, navigation, and interactive elements.

| Token | Hex | Usage |
|-------|-----|-------|
| `navy-900` | `#071525` | Deepest backgrounds, footer base |
| `navy-800` | `#0B1F3A` | **Logo navy** — header, hero dark bands, primary headings |
| `navy-700` | `#132D4F` | Hover on dark surfaces, secondary dark panels |
| `navy-600` | `#1A3A5C` | Dark UI accents, table headers |
| `navy-500` | `#2A4F73` | Muted dark borders on navy backgrounds |
| `blue-700` | `#004D85` | Primary button hover, pressed links |
| `blue-600` | `#0066B3` | **Logo blue** — primary buttons, links, focus rings, active nav |
| `blue-500` | `#1A7CC4` | Secondary interactive, icon accents |
| `blue-400` | `#4A9AD4` | Light accent on dark backgrounds only |
| `blue-100` | `#E6F2FA` | Tinted backgrounds, info banners, selected states |
| `blue-50` | `#F2F8FC` | Subtle section tint (use sparingly) |
| `white` | `#FFFFFF` | **Logo white** — page backgrounds, cards, button text on dark |

### Neutral scale

Cool-toned grays aligned with navy undertones. No warm gray.

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-900` | `#1A2332` | Body text (primary) |
| `neutral-700` | `#3D4F65` | Body text (secondary), labels |
| `neutral-500` | `#6B7C93` | Placeholder text, captions, meta |
| `neutral-400` | `#94A3B8` | Disabled text, dividers (light) |
| `neutral-200` | `#D8E0EA` | Borders, input outlines |
| `neutral-100` | `#EEF2F7` | Alternate section backgrounds |
| `neutral-50` | `#F7F9FB` | Page background (default) |

### Semantic colors

Muted, enterprise-appropriate. Never neon or saturated.

| Token | Hex | Usage |
|-------|-----|-------|
| `success-600` | `#1B7A4E` | Success text, icons |
| `success-100` | `#E8F5EE` | Success background |
| `warning-600` | `#B45309` | Warning text, icons |
| `warning-100` | `#FEF3E2` | Warning background |
| `error-600` | `#C53030` | Error text, icons, validation |
| `error-100` | `#FDECEC` | Error background |
| `info-600` | `#0066B3` | Info text (same as brand blue) |
| `info-100` | `#E6F2FA` | Info background |

### Surface & text mapping

| Context | Background | Text primary | Text secondary | Border |
|---------|------------|--------------|----------------|--------|
| **Page default** | `neutral-50` | `neutral-900` | `neutral-700` | `neutral-200` |
| **Card / panel** | `white` | `neutral-900` | `neutral-700` | `neutral-200` |
| **Alternate section** | `neutral-100` | `neutral-900` | `neutral-700` | `neutral-200` |
| **Dark band / header** | `navy-800` | `white` | `neutral-200` at 80% | `navy-600` |
| **Footer** | `navy-900` | `white` | `neutral-400` | `navy-700` |
| **Tinted info section** | `blue-50` | `neutral-900` | `neutral-700` | `blue-100` |

### Color usage rules

1. **60/30/10 rule:** ~60% white/neutral backgrounds, ~30% navy structural elements, ~10% blue accents.
2. **Blue is for action** — links, buttons, focus, active states. Not for large background fills.
3. **Navy is for structure** — header, footer, hero bands, section titles on marketing pages.
4. **No gradients** except optional single-direction navy hero overlay on photography: `rgba(11, 31, 58, 0.85)` over image.
5. **Division parity** — Business Solutions and Training Center share the same palette; differentiate with iconography and photography, not different colors.

### Contrast requirements

| Pair | Minimum ratio | Notes |
|------|---------------|-------|
| `neutral-900` on `white` | 12.5:1 | Body text |
| `neutral-700` on `white` | 7:1 | Secondary text |
| `white` on `navy-800` | 14:1 | Header/footer |
| `white` on `blue-600` | 4.8:1 | Primary buttons (large text OK) |
| `blue-600` on `white` | 4.8:1 | Links — underline required for inline links |

---

## 4. Typography system

### Font families

| Role | Family | Fallback stack | Rationale |
|------|--------|----------------|-----------|
| **Primary (Latin)** | Source Sans 3 | `"Source Sans 3", "Segoe UI", system-ui, sans-serif` | Enterprise standard; used in government and B2B contexts; highly readable |
| **Primary (Arabic)** | Noto Sans Arabic | `"Noto Sans Arabic", "Segoe UI", Tahoma, sans-serif` | Professional Arabic rendering; pairs in weight with Source Sans 3 |
| **Monospace** | IBM Plex Mono | `"IBM Plex Mono", "Consolas", monospace` | Code snippets, CLI examples, technical training content |

**Do not use:** Inter-only as brand face (too startup-default), geometric display fonts (Poppins, Montserrat as primary), serif body text.

### Type scale

Base size: **16px** (1rem). Scale ratio: **1.25 (Major Third)** — restrained, not dramatic.

| Token | Size | Line height | Weight | Letter spacing | Usage |
|-------|------|-------------|--------|----------------|-------|
| `display-lg` | 48px / 3rem | 1.15 | 600 | -0.02em | Hero headlines (max 1 per page) |
| `display-md` | 40px / 2.5rem | 1.2 | 600 | -0.02em | Page titles |
| `heading-xl` | 32px / 2rem | 1.25 | 600 | -0.01em | Major section headings |
| `heading-lg` | 28px / 1.75rem | 1.3 | 600 | -0.01em | Section headings |
| `heading-md` | 24px / 1.5rem | 1.35 | 600 | 0 | Card titles, subsections |
| `heading-sm` | 20px / 1.25rem | 1.4 | 600 | 0 | Widget headings, footer columns |
| `body-lg` | 18px / 1.125rem | 1.6 | 400 | 0 | Lead paragraphs, intro text |
| `body-md` | 16px / 1rem | 1.6 | 400 | 0 | Default body text |
| `body-sm` | 14px / 0.875rem | 1.5 | 400 | 0 | Captions, meta, form hints |
| `label-md` | 14px / 0.875rem | 1.4 | 600 | 0.02em | Form labels, table headers, nav items |
| `label-sm` | 12px / 0.75rem | 1.4 | 600 | 0.04em | Badges, tags, overlines |
| `overline` | 12px / 0.75rem | 1.4 | 600 | 0.08em | Section labels (uppercase) |

### Typography rules

| Rule | Specification |
|------|---------------|
| **Max line length** | 65–75 characters for body text |
| **Paragraph spacing** | 1em below paragraphs |
| **Heading color** | `navy-800` on light backgrounds; `white` on dark backgrounds |
| **Body color** | `neutral-900` primary; `neutral-700` secondary |
| **Link style** | `blue-600`, underline on hover; always underlined in body copy |
| **Bold usage** | Weight 600 only; never 700/800 in marketing copy |
| **Uppercase** | Overlines and labels only — never full headings |
| **Arabic sizing** | Match Latin token sizes; line-height +0.05 for Arabic body for diacritic clearance |

### Heading hierarchy example

```
Display     →  Page hero: "Solutions IT pour entreprises"
Heading XL  →  Section: "Nos services"
Heading MD  →  Card: "Infrastructure réseau"
Body LG     →  Lead: one-sentence section intro
Body MD     →  Standard paragraph text
Label SM    →  Tag: "CYBERSÉCURITÉ"
```

---

## 5. Spacing system

### Base unit

**8px grid** — all spacing, sizing, and component dimensions should be multiples of 8px. Half-steps (4px) allowed for fine adjustments only (icon padding, border-adjacent spacing).

### Spacing scale

| Token | Value | Common usage |
|-------|-------|--------------|
| `space-1` | 4px | Tight icon gaps, inline badge padding |
| `space-2` | 8px | Compact element gaps, input icon inset |
| `space-3` | 12px | Button icon gap, form label-to-input |
| `space-4` | 16px | Card inner padding (compact), list item gaps |
| `space-5` | 20px | — (use sparingly; prefer 16 or 24) |
| `space-6` | 24px | Standard card padding, grid gutters (mobile) |
| `space-8` | 32px | Section sub-blocks, grid gutters (tablet) |
| `space-10` | 40px | Component group separation |
| `space-12` | 48px | Section internal padding |
| `space-16` | 64px | Section vertical padding (mobile) |
| `space-20` | 80px | Section vertical padding (desktop) |
| `space-24` | 96px | Hero padding, major section breaks |
| `space-32` | 128px | Hero vertical padding (large desktop) |

### Component spacing standards

| Component | Padding | Gap |
|-----------|---------|-----|
| Button (md) | 12px 24px | 8px (icon to label) |
| Card (standard) | 24px | — |
| Card (featured) | 32px | — |
| Form input | 12px 16px | — |
| Form field group | — | 24px between fields |
| Nav item | 12px 16px | — |
| Section content | 64–80px vertical | 32–48px between blocks |
| Grid columns | — | 24px gutter (desktop), 16px (mobile) |

---

## 6. Elevation & borders

### Border radius

Restrained. Enterprise-sharp, not consumer-round.

| Token | Value | Usage |
|-------|-------|-------|
| `radius-none` | 0px | Tables, full-bleed images |
| `radius-sm` | 2px | Inputs, checkboxes |
| `radius-md` | 4px | **Default** — buttons, cards, dropdowns |
| `radius-lg` | 6px | Large cards, modals (maximum allowed) |

**Never use:** `radius-full` / pill shapes for buttons. Tags may use `radius-sm` (2px) only.

### Borders

| Token | Value | Usage |
|-------|-------|-------|
| `border-default` | 1px solid `neutral-200` | Cards, inputs, dividers |
| `border-strong` | 1px solid `neutral-400` | Emphasized containers |
| `border-focus` | 2px solid `blue-600` | Focus rings (replaces default border) |
| `border-dark` | 1px solid `navy-600` | Dividers on navy backgrounds |

### Shadows

Subtle only. Prefer borders over shadows.

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-none` | none | Default for cards (border only) |
| `shadow-sm` | `0 1px 2px rgba(11, 31, 58, 0.06)` | Dropdowns, sticky header |
| `shadow-md` | `0 2px 8px rgba(11, 31, 58, 0.08)` | Modals, popovers |
| `shadow-lg` | `0 4px 16px rgba(11, 31, 58, 0.10)` | Maximum — modals only |

**Never use:** colored shadows, multi-layer floating shadows, glow effects.

---

## 7. Button styles

### Principles

- Solid fills or defined borders — no ghost gradients
- 4px border radius
- Minimum height 44px (touch target + enterprise clickability)
- One primary button per visible section
- Labels in sentence case (FR/EN); Arabic action verbs at start of label

### Button variants

#### Primary

Primary conversion action. One per section.

| State | Background | Text | Border |
|-------|------------|------|--------|
| Default | `blue-600` | `white` | none |
| Hover | `blue-700` | `white` | none |
| Active | `#003D6B` | `white` | none |
| Focus | `blue-600` | `white` | 2px `blue-400` outline, 2px offset |
| Disabled | `neutral-200` | `neutral-400` | none |

```
Padding: 12px 24px
Font: label-md (14px, weight 600)
Min height: 44px
Border radius: 4px
```

#### Secondary

Supporting action alongside primary.

| State | Background | Text | Border |
|-------|------------|------|--------|
| Default | `white` | `navy-800` | 1px `navy-800` |
| Hover | `neutral-50` | `navy-800` | 1px `navy-800` |
| Active | `neutral-100` | `navy-800` | 1px `navy-800` |
| Focus | `white` | `navy-800` | 2px `blue-600` outline |
| Disabled | `white` | `neutral-400` | 1px `neutral-200` |

#### Tertiary / Text button

Low-emphasis actions, navigation-style links.

| State | Background | Text | Border |
|-------|------------|------|--------|
| Default | transparent | `blue-600` | none |
| Hover | transparent | `blue-700` | underline |
| Focus | transparent | `blue-600` | 2px `blue-600` outline |

#### Dark surface button (on navy backgrounds)

| State | Background | Text | Border |
|-------|------------|------|--------|
| Default | `white` | `navy-800` | none |
| Hover | `neutral-100` | `navy-800` | none |
| Secondary on dark | transparent | `white` | 1px `white` |
| Secondary hover | `rgba(255,255,255,0.1)` | `white` | 1px `white` |

### Button sizes

| Size | Height | Padding | Font |
|------|--------|---------|------|
| `sm` | 36px | 8px 16px | `body-sm` weight 600 |
| `md` | 44px | 12px 24px | `label-md` |
| `lg` | 48px | 12px 32px | `body-md` weight 600 |

### Button with icon

- Icon size: 20px (sm), 20px (md), 24px (lg)
- Icon position: leading (before text) for actions; trailing for external links
- Gap: `space-2` (8px)
- Icon stroke: 1.5px, currentColor

### CTA mapping (from IA report)

| Context | Button style |
|---------|--------------|
| Header primary | Primary (blue) — "Demander un devis" |
| Header secondary | Tertiary — "S'inscrire à une formation" |
| Hero (dark band) | Primary dark-surface (white fill) + Secondary on dark (outline white) |
| Section end | Primary + Secondary side by side |
| Card action | Tertiary text link with arrow → |

---

## 8. Card styles

### Principles

- White surface, 1px border, no shadow by default
- Content-driven hierarchy: overline → title → body → action
- No floating/tilted cards, no glass backgrounds
- Equal-height cards in grids via flex/grid, not visual tricks

### Card variants

#### Standard card

Used for services, training programs, blog teasers.

```
Background: white
Border: 1px neutral-200
Border radius: 4px
Padding: 24px
Shadow: none
Hover: border-color → blue-600 (transition 150ms)
```

| Element | Style |
|---------|-------|
| Overline | `overline`, `blue-600` |
| Title | `heading-sm`, `navy-800` |
| Body | `body-sm`, `neutral-700`, max 3 lines |
| Link/CTA | Tertiary button with → arrow |
| Icon (optional) | 32px, `blue-600`, top of card |

#### Featured card

Used for highlighted service, flagship training, case study.

```
Background: white
Border top: 3px solid blue-600
Border other sides: 1px neutral-200
Padding: 32px
```

#### Horizontal card (case study, resource)

```
Layout: 40% image | 60% content (stacks on mobile)
Image: object-fit cover, radius-none (flush to card edge)
Content padding: 24px
```

#### Stat / trust card

Used for metrics, certification counts.

```
Background: neutral-100
Border: none
Padding: 24px
Number: display-md, navy-800, weight 600
Label: body-sm, neutral-700
```

#### Dark accent card

Used sparingly inside navy sections (e.g., CTA band).

```
Background: navy-700
Border: 1px navy-600
Text: white / neutral-200
CTA: white-fill button
```

### Card grid rules

| Breakpoint | Columns | Gap |
|------------|---------|-----|
| Mobile (<640px) | 1 | 16px |
| Tablet (640–1024px) | 2 | 24px |
| Desktop (>1024px) | 3 | 24px |
| Wide feature row | 2 columns at 50/50 | 32px |

---

## 9. Form styles

### Principles

- Labels always visible above inputs (no placeholder-only labels)
- Clear error states with text, not color alone
- 44px minimum input height
- Professional, document-like feel — not conversational/chat UI

### Form layout

| Element | Specification |
|---------|---------------|
| Label | `label-md`, `neutral-900`, 4px margin below |
| Required indicator | `*` in `error-600` after label |
| Hint text | `body-sm`, `neutral-500`, 4px below label |
| Input | 44px height, `body-md` |
| Field spacing | 24px between fields; 32px between groups |
| Group legend | `heading-sm`, `navy-800`, 16px margin below |
| Submit area | 32px top margin; primary button + optional cancel tertiary |

### Input fields

```
Background: white
Border: 1px neutral-200
Border radius: 2px
Padding: 12px 16px
Font: body-md
Color: neutral-900
Placeholder: neutral-500
```

| State | Border | Background | Notes |
|-------|--------|------------|-------|
| Default | `neutral-200` | `white` | — |
| Hover | `neutral-400` | `white` | — |
| Focus | 2px `blue-600` | `white` | Outline offset 0 |
| Error | 2px `error-600` | `white` | Error message below |
| Disabled | `neutral-200` | `neutral-50` | `neutral-400` text |

### Select, textarea, checkbox, radio

| Control | Specification |
|---------|---------------|
| **Select** | Same dimensions as input; chevron icon trailing; no custom flashy dropdown |
| **Textarea** | Min height 120px; same border/focus rules; vertical resize only |
| **Checkbox** | 18px square, `radius-sm` (2px), `blue-600` checked fill |
| **Radio** | 18px circle, `blue-600` selected dot |
| **Toggle** | Avoid — use checkbox for enterprise clarity |

### Form-specific patterns

| Form | Distinct fields |
|------|-----------------|
| **Request quote** | Company, sector (select), service interest (multi-checkbox), budget range, timeline, message |
| **Training enrollment** | Program (select/pre-filled), session date, experience level, motivation |
| **Contact** | Intent selector (Business / Training / Both) — radio, prominent at top |

### Error & success messages

```
Error text: body-sm, error-600, 4px above input
Error icon: 16px, leading
Success banner: info-100 background, 1px info-600 left border, 16px padding
```

### Form on dark backgrounds

Use only in CTA bands. Inputs become:

```
Background: white
Border: neutral-200
(all other rules same)
```

---

## 10. Icon guidelines

### Icon library

**Recommended:** Lucide Icons (outline style) or equivalent with consistent 1.5px stroke.

**Do not use:** filled playful icons, 3D icons, gradient icons, per-service random icon styles.

### Icon specifications

| Context | Size | Stroke | Color |
|---------|------|--------|-------|
| Inline with body text | 16px | 1.5px | `currentColor` |
| Button leading | 20px | 1.5px | `currentColor` |
| Card feature icon | 32px | 1.5px | `blue-600` |
| Navigation | 20px | 1.5px | `white` (dark nav) / `navy-800` (light) |
| Section marker | 24px | 1.5px | `blue-600` |
| Form field | 16px | 1.5px | `neutral-500` |
| Social (footer) | 20px | 1.5px | `neutral-400`, hover `white` |

### Icon usage rules

1. **Outline only** — no solid fills except checkmarks in success states
2. **Semantic, not decorative** — every icon must reinforce meaning
3. **Consistent stroke** — 1.5px across all sizes (scale stroke proportionally if library requires)
4. **No icon-only buttons** without `aria-label`
5. **Division icons** — use industry-standard metaphors:
   - Network: nodes/topology
   - Security: shield
   - Cloud: cloud outline
   - VoIP: phone/handset
   - Training: graduation cap or book-open
   - Corporate: building/briefcase
6. **RTL:** Directional icons (arrows, chevrons) flip in Arabic layout; symmetric icons (shield, cloud) do not

### Logo & partner icons

- Partner/certification logos: grayscale default, full color on hover (optional)
- Max height: 40px in logo bars
- Even spacing in horizontal row with `space-8` gap

---

## 11. Layout rules

### Grid system

| Property | Value |
|----------|-------|
| Columns | 12 |
| Max content width | `1200px` |
| Wide content width | `1280px` (hero, full-bleed inner content) |
| Margin (mobile) | 16px |
| Margin (tablet) | 32px |
| Margin (desktop) | auto-centered |
| Gutter | 24px (desktop), 16px (mobile) |

### Breakpoints

| Token | Width | Target |
|-------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small desktops |
| `xl` | 1280px | Standard desktops |
| `2xl` | 1440px | Wide screens (content still capped at 1280px) |

### Page structure

```
┌─────────────────────────────────────────────┐
│  HEADER (fixed or static, navy-800, 72px)   │
├─────────────────────────────────────────────┤
│  BREADCRUMB (optional, neutral-50, 40px)    │
├─────────────────────────────────────────────┤
│  HERO / PAGE TITLE BAND                     │
│  (navy-800 or neutral-50 depending on page) │
├─────────────────────────────────────────────┤
│  CONTENT SECTIONS (alternating bg optional)  │
│  ┌─ max-width 1200px centered ─────────┐   │
│  │  12-column grid                      │   │
│  └──────────────────────────────────────┘   │
├─────────────────────────────────────────────┤
│  CTA BAND (navy-800, pre-footer)            │
├─────────────────────────────────────────────┤
│  FOOTER (navy-900)                          │
└─────────────────────────────────────────────┘
```

### Header

| Property | Value |
|----------|-------|
| Height | 72px |
| Background | `navy-800` |
| Text | `white` |
| Nav items | `label-md`, weight 600, 16px horizontal padding |
| Active item | `blue-400` text or 2px `blue-600` bottom border |
| Language switcher | `label-sm`, `neutral-400` inactive / `white` active, separated by `|` |
| CTA | Primary button (blue) in header |
| Sticky behavior | Add `shadow-sm` on scroll; no height change |
| Mobile | Hamburger → full-width drawer, `navy-900` background |

### Hero patterns

| Page type | Hero style |
|-----------|------------|
| **Home** | Navy background, white text, dual CTA, optional right-side photography with navy overlay |
| **Division hub** | Navy band, 40px heading, breadcrumb, single CTA |
| **Detail page** | Light hero (`neutral-50`), left-aligned title + intro, breadcrumb |
| **Form page** | Minimal — `heading-lg` + one-line intro, no full hero |

**Hero rules:**
- No animated particles, no 3D renders, no chat-style interfaces
- Photography: real offices, data centers, training classrooms, professional people
- Overlay: flat `navy-800` at 85% opacity if text over image

### Section rhythm

| Section type | Background | Padding (desktop) |
|--------------|------------|-------------------|
| Default content | `white` or `neutral-50` | 80px vertical |
| Alternate | `neutral-100` | 80px vertical |
| Dark feature | `navy-800` | 80px vertical |
| Compact (logos, stats) | `white` | 48px vertical |
| CTA band | `navy-800` | 64px vertical |

Alternate `white` / `neutral-50` / `neutral-100` between sections — never more than two identical backgrounds in a row.

### Content width constraints

| Content type | Max width |
|--------------|-----------|
| Body prose | 720px |
| Full grid content | 1200px |
| Sidebar layout | 720px content + 320px sidebar + 32px gap |
| Form (single column) | 560px |
| Form (two column) | 800px |

### Whitespace principles

- **Structured, not sparse** — whitespace defines zones, not decoration
- Section headings: 48px margin below
- Card grids: 24px gap, 48px margin below grid
- Never break grid alignment for "creative" offset layouts

---

## 12. Component patterns

### Navigation mega-menu

```
Background: white
Border: 1px neutral-200
Shadow: shadow-md
Padding: 32px
Column gap: 48px
Column heading: label-sm, navy-800, uppercase
Column links: body-sm, neutral-700, hover blue-600
```

### Breadcrumb

```
Font: body-sm
Color: neutral-500 → neutral-700 (current)
Separator: / or chevron 16px
Background: neutral-50
Padding: 12px 0
```

### Badge / tag

```
Background: blue-100 (category) or neutral-100 (neutral)
Text: label-sm, blue-600 or neutral-700
Padding: 4px 8px
Border radius: 2px
```

### Divider

```
1px neutral-200 (light backgrounds)
1px navy-600 (dark backgrounds)
Margin: 32px vertical (section), 16px vertical (in-card)
```

### Table (pricing, schedules, comparisons)

```
Header: navy-800 background, white text, label-md
Row: white background, border-bottom 1px neutral-200
Row hover: neutral-50
Cell padding: 12px 16px
Font: body-sm
Alternating rows: optional neutral-50 (subtle)
```

### Accordion (FAQ, mobile nav)

```
Header: label-md, navy-800, 16px padding
Border-bottom: 1px neutral-200
Chevron: 20px, rotates 180° on open (150ms)
Content: body-md, neutral-700, 16px padding bottom
No spring/bounce animation
```

### Tabs (training schedules, service details)

```
Tab: label-md, neutral-500
Active tab: blue-600 text, 2px blue-600 bottom border
Inactive hover: neutral-700
Panel: 24px top padding
No pill-style tab containers
```

### Testimonial block

```
Background: neutral-100
Border-left: 3px blue-600
Padding: 24px 32px
Quote: body-lg, neutral-900, italic optional
Attribution: body-sm, neutral-700, weight 600 name
```

### Logo bar (trust)

```
Background: white
Grayscale logos, 40px max height
Even horizontal distribution
Optional caption above: overline, neutral-500
```

---

## 13. Imagery & illustration

### Photography

| Use | Direction |
|-----|-----------|
| **Business Solutions** | Network equipment, server rooms, office deployments, technician at work, security operations |
| **Training Center** | Classroom training, hands-on labs, certification moments, collaborative learning |
| **People** | Professional attire, diverse, focused on work (not stock-photo handshakes) |
| **Treatment** | Natural color, slight desaturation (-10%), no heavy filters |

### Photography don'ts

- No fake AI-generated people or environments
- No lens flare, no bokeh-heavy hero images
- No abstract "digital tunnel" stock photos

### Illustration

**Default: no illustration system.** Prefer photography + icons.

If diagrams are needed (network topology, training pathways):
- Simple line diagrams, 2px stroke, `navy-800` + `blue-600` only
- White or `neutral-50` background
- No isometric 3D, no mascots

---

## 14. Motion & interaction

### Principles

- Functional, not decorative
- Fast — enterprise users expect responsiveness
- Respect `prefers-reduced-motion`

### Allowed transitions

| Interaction | Duration | Easing |
|-------------|----------|--------|
| Button hover | 150ms | ease |
| Link hover underline | 150ms | ease |
| Card border hover | 150ms | ease |
| Accordion open | 200ms | ease-out |
| Mega-menu reveal | 200ms | ease-out |
| Sticky header shadow | 150ms | ease |
| Tab switch | 150ms | ease (content fade, no slide) |

### Prohibited

- Parallax scrolling
- Scroll-triggered fly-in animations
- Bouncing, pulsing, or infinite loop animations
- Page transition animations
- Loading skeleton shimmer gradients
- Number count-up animations

### Hover states summary

| Element | Hover effect |
|---------|--------------|
| Buttons | Background darken (see variants) |
| Cards | Border → `blue-600` |
| Links | Underline appears |
| Nav items | Text → `blue-400` (dark nav) |
| Images | None (no zoom-on-hover) |

---

## 15. RTL & multilingual visual rules

### Arabic (RTL) layout

| Element | LTR | RTL |
|---------|-----|-----|
| Layout direction | `ltr` | `rtl` |
| Text alignment | left | right |
| Header logo | left | right |
| Header CTA cluster | right | left |
| Breadcrumb chevron | → | ← |
| Card arrow CTA | → trailing | ← trailing (flipped) |
| Form labels | above, aligned start | above, aligned start (right) |
| Phone/email in inputs | `dir="ltr"` | `dir="ltr"` |

### Language switcher visual

```
Style: text labels FR | EN | AR (not flag icons alone)
Active: white (on dark header), weight 600
Inactive: neutral-400, hover white
Separator: neutral-500 |
```

### Typography per locale

| Locale | Font | Notes |
|--------|------|-------|
| `fr` | Source Sans 3 | Default |
| `en` | Source Sans 3 | Same as FR |
| `ar` | Noto Sans Arabic | Slightly increased body line-height |

### Content expansion

- UI must tolerate FR text ~30% longer than EN
- Buttons: min-width on primary CTAs to prevent layout shift across locales
- Navigation: mega-menu columns, not single-line nav items

---

## 16. Accessibility requirements

| Requirement | Standard |
|-------------|----------|
| Color contrast | WCAG 2.1 AA minimum (AAA for body text where possible) |
| Focus indicators | Visible 2px `blue-600` ring on all interactive elements |
| Touch targets | Minimum 44×44px |
| Keyboard navigation | Full tab order; mega-menu ESC to close |
| Screen readers | Semantic HTML; `aria-label` on icon buttons |
| Motion | `prefers-reduced-motion: reduce` disables all transitions |
| Forms | Errors linked via `aria-describedby`; `aria-invalid` on error |
| Images | Descriptive `alt` text; decorative `alt=""` |

---

## 17. Design tokens summary

Quick-reference token export for implementation.

### Colors (CSS custom properties naming)

```css
/* Primary */
--color-navy-900: #071525;
--color-navy-800: #0B1F3A;
--color-navy-700: #132D4F;
--color-blue-600: #0066B3;
--color-blue-700: #004D85;
--color-white: #FFFFFF;

/* Neutral */
--color-neutral-900: #1A2332;
--color-neutral-700: #3D4F65;
--color-neutral-500: #6B7C93;
--color-neutral-200: #D8E0EA;
--color-neutral-100: #EEF2F7;
--color-neutral-50: #F7F9FB;

/* Semantic */
--color-success-600: #1B7A4E;
--color-warning-600: #B45309;
--color-error-600: #C53030;
```

### Typography

```css
--font-primary: "Source Sans 3", "Segoe UI", system-ui, sans-serif;
--font-arabic: "Noto Sans Arabic", "Segoe UI", Tahoma, sans-serif;
--font-mono: "IBM Plex Mono", Consolas, monospace;
```

### Spacing

```css
--space-1: 4px;
--space-2: 8px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### Radii & shadows

```css
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--shadow-sm: 0 1px 2px rgba(11, 31, 58, 0.06);
--shadow-md: 0 2px 8px rgba(11, 31, 58, 0.08);
```

---

## 18. Do & don't reference

### Do

- Use navy for structural weight (header, footer, hero bands)
- Use blue sparingly for action and emphasis
- Keep cards flat with borders
- Use real photography of IT/training environments
- Maintain 8px spacing grid
- Use Source Sans 3 + Noto Sans Arabic
- Keep animations under 200ms and functional
- Present both divisions with equal visual treatment

### Don't

- Use purple/teal/cyan accent colors
- Apply gradient buttons or gradient backgrounds
- Use border-radius above 6px
- Add glassmorphism (backdrop-blur cards)
- Use neon or saturated semantic colors
- Add floating cards with heavy shadows
- Use chat/AI-style conversational UI patterns
- Use auto-translated text in design mockups
- Use icon-only navigation without labels
- Add decorative animation on scroll

---

## Document changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-06-08 | Initial visual design system |

---

*End of design system — pair with [SYNET-UX-IA-REPORT.md](./SYNET-UX-IA-REPORT.md) for complete website specification.*
