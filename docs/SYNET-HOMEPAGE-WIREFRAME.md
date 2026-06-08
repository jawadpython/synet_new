# SYNET Homepage — UX Wireframe Specification

> **Document type:** Page-level wireframe specification  
> **Version:** 1.0  
> **Last updated:** 2026-06-08  
> **Companion docs:** [SYNET-UX-IA-REPORT.md](./SYNET-UX-IA-REPORT.md) · [SYNET-DESIGN-SYSTEM.md](./SYNET-DESIGN-SYSTEM.md)  
> **Page:** `/{locale}/` (Home)  
> **Status:** Approved for design & content authoring — no implementation code  

---

## Table of contents

1. [Page overview](#1-page-overview)
2. [Global chrome (header)](#2-global-chrome-header)
3. [Section 1 — Hero](#section-1--hero)
4. [Section 2 — Business Solutions Overview](#section-2--business-solutions-overview)
5. [Section 3 — Training Center Overview](#section-3--training-center-overview)
6. [Section 4 — Featured Courses](#section-4--featured-courses)
7. [Section 5 — Core Services](#section-5--core-services)
8. [Section 6 — Why Choose SYNET](#section-6--why-choose-synet)
9. [Section 7 — Testimonials](#section-7--testimonials)
10. [Section 8 — Contact CTA](#section-8--contact-cta)
11. [Section 9 — Footer](#section-9--footer)
12. [Responsive behavior summary](#12-responsive-behavior-summary)
13. [Content checklist per locale](#13-content-checklist-per-locale)
14. [Above-the-fold priority](#14-above-the-fold-priority)

---

## 1. Page overview

### Strategic goal

The homepage must communicate within **5 seconds** that SYNET operates two equal divisions:

1. **Business Solutions** — IT infrastructure and services for organizations  
2. **Training Center** — Professional technology training for individuals and companies  

No visitor should scroll more than one viewport before understanding this dual identity.

### Scroll narrative

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER (global chrome — not numbered)                       │
├──────────────────────────────────────────────────────────────┤
│  ① HERO          → Dual identity + positioning + dual CTAs   │
│  ② BIZ OVERVIEW  → Division 1 depth: who we serve, value     │
│  ③ TRAINING OVR  → Division 2 depth: who we train, value     │
│  ④ FEATURED      → Concrete training offers (revenue driver) │
│  ⑤ CORE SERVICES → Concrete business offers (parity)         │
│  ⑥ WHY SYNET     → Trust, credentials, differentiators       │
│  ⑦ TESTIMONIALS  → Social proof from both divisions          │
│  ⑧ CONTACT CTA   → Conversion band before footer             │
│  ⑨ FOOTER        → Navigation, legal, brand close            │
└──────────────────────────────────────────────────────────────┘
```

### Page-level constraints

| Property | Value |
|----------|-------|
| Max content width | 1200px |
| Default background rhythm | Navy hero → White → Neutral-50 → White → … |
| Primary audience | Mixed: B2B decision-makers + training prospects |
| Locale | Independent content per `fr` / `en` / `ar` |
| RTL | Full mirror for Arabic; wireframes shown LTR |

### Division parity rule

Sections ② and ③ are **equal visual weight** (same layout pattern, same vertical padding, same card proportions). Sections ④ and ⑤ restore parity at the offering level — training featured first (revenue priority) but services section immediately follows with equal grid treatment.

---

## 2. Global chrome (header)

Present on all pages; documented here because it frames the hero.

### Wireframe — Desktop (1280px)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ NAVY-800 background — height 72px — sticky on scroll                       │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  [LOGO]   Solutions ▾   Formation ▾   Secteurs ▾   Réalisations          │
│           À propos ▾   Ressources ▾   Contact          FR|EN|AR  [DEVIS]  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe — Mobile (375px)

```
┌─────────────────────────────┐
│ [LOGO]          FR|EN|AR [≡]│
└─────────────────────────────┘
```

### Purpose

Persistent navigation to both divisions; primary conversion (quote) always visible.

### Content

| Element | Content (FR) |
|---------|--------------|
| Logo | SYNET wordmark |
| Nav items | Per IA report mega-menus |
| Language switcher | `FR \| EN \| AR` — text labels |
| Header CTA | **Demander un devis** (primary blue button) |
| Secondary nav action | S'inscrire — tertiary link adjacent to CTA or inside Formation menu |

### Layout

- Logo left, nav center-left, utilities + CTA right
- Sticky: adds `shadow-sm` after 1px scroll; height stays 72px
- Mobile: hamburger opens full-height drawer; language switcher top of drawer

### CTA

| Button | Target |
|--------|--------|
| Demander un devis | `/{locale}/demande-devis/` |
| S'inscrire (secondary) | `/{locale}/inscription-formation/` |

### Imagery

None in header. Logo only.

---

## Section 1 — Hero

### Wireframe — Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ NAVY-800 background — padding 96px vertical — full viewport width          │
│ ┌────────────────────────────────┬─────────────────────────────────────┐  │
│ │                                │                                     │  │
│ │  OVERLINE (blue-400)           │   ┌─────────────────────────────┐   │  │
│ │  Solutions IT & Formation      │   │                             │   │  │
│ │                                │   │   PHOTOGRAPHY               │   │  │
│ │  DISPLAY HEADLINE (white)      │   │   Professional IT           │   │  │
│ │  Des systèmes IT fiables.      │   │   environment               │   │  │
│ │  Des compétences pratiques.    │   │   navy overlay 85%          │   │  │
│ │                                │   │   optional: split image     │   │  │
│ │  LEAD PARAGRAPH (neutral-200)  │   │   biz left / training right │   │  │
│ │  SYNET accompagne les          │   │                             │   │  │
│ │  entreprises et les            │   └─────────────────────────────┘   │  │
│ │  professionnels.                 │                                     │  │
│ │                                │                                     │  │
│ │  ┌──────────────────┐ ┌──────────────────────┐                     │  │
│ │  │ Explorer nos     │ │ Découvrir nos          │                     │  │
│ │  │ solutions    →   │ │ formations         →   │                     │  │
│ │  │ [WHITE BUTTON]   │ │ [OUTLINE WHITE BTN]    │                     │  │
│ │  └──────────────────┘ └──────────────────────┘                     │  │
│ │                                │                                     │  │
│ │  ┌─────────────┐ ┌─────────────┐                                     │  │
│ │  │ ▣ Solutions │ │ ▣ Formation │  ← dual identity chips             │  │
│ │  │  entreprise │ │             │                                     │  │
│ │  └─────────────┘ └─────────────┘                                     │  │
│ │                                │                                     │  │
│ └────────────────────────────────┴─────────────────────────────────────┘  │
│                        max-width 1200px centered                           │
└────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe — Mobile

```
┌─────────────────────────────┐
│ OVERLINE                    │
│ HEADLINE (32px)             │
│ Lead paragraph              │
│                             │
│ [Explorer nos solutions]    │
│ [Découvrir nos formations]  │
│                             │
│ ┌───────────┐ ┌───────────┐ │
│ │Solutions  │ │ Formation │ │
│ │entreprise │ │           │ │
│ └───────────┘ └───────────┘ │
│                             │
│ ┌─────────────────────────┐ │
│ │     PHOTOGRAPHY         │ │
│ │     (below text)        │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

### Purpose

Instantly establish SYNET's dual identity. Communicate the positioning statement. Offer two clear entry paths — one per division. This is the most important section on the site.

### Content

| Element | FR copy (authoritative) | EN equivalent |
|---------|-------------------------|---------------|
| **Overline** | Solutions IT & Formation professionnelle | IT Solutions & Professional Training |
| **Headline** | Des systèmes IT fiables. Des compétences pratiques. | Reliable IT systems. Practical skills. |
| **Lead** | SYNET accompagne les entreprises dans la conception de systèmes informatiques sécurisés et aide les professionnels à développer des compétences technologiques concrètes. | SYNET helps businesses build secure and reliable IT systems while helping professionals develop practical technology skills. |
| **Chip 1 label** | Solutions entreprise | Business Solutions |
| **Chip 1 sub** | Infrastructure · Sécurité · Cloud | Infrastructure · Security · Cloud |
| **Chip 2 label** | Centre de formation | Training Center |
| **Chip 2 sub** | Réseaux · Linux · Cybersécurité | Networking · Linux · Cybersecurity |

**Chip behavior:** Clicking scrolls to Section ② or Section ③ respectively (anchor links), reinforcing on-page dual structure.

### Layout

| Property | Desktop | Mobile |
|----------|---------|--------|
| Grid | 6/6 column split (50/50) | Single column, text first |
| Text alignment | Left | Left (RTL: right) |
| Headline size | `display-lg` (48px) | `heading-xl` (32px) |
| Vertical padding | 96px | 64px |
| Image | Right column, flush within grid | Below CTAs, 16:9 crop |
| Dual chips | Below CTAs, horizontal row | Side by side, equal width |

### CTA

| Priority | Label (FR) | Style | Target |
|----------|------------|-------|--------|
| **Primary** | Explorer nos solutions | White-fill button (dark surface variant) | `/{locale}/solutions-entreprise/` |
| **Secondary** | Découvrir nos formations | Outline white button | `/{locale}/centre-formation/` |

No third CTA in hero — keep focus on division choice.

### Recommended imagery

| Option | Description | Treatment |
|--------|-------------|-----------|
| **Preferred** | Split composite: left half shows network rack/technician; right half shows training classroom with students at workstations | Single image, 4:3 or 16:10 ratio; subtle vertical divider line at center |
| **Alternative** | Single wide shot of SYNET facility showing both operations area and training room | Navy overlay at 85% on right 40% only (text sits on solid navy left) |
| **Avoid** | Abstract digital art, AI-generated people, glowing server room stock, handshake photos |

**Photography specs:** Natural lighting, slight desaturation (-10%), real environment, diverse professionals, no staged smiles at camera.

---

## Section 2 — Business Solutions Overview

### Wireframe — Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ WHITE background — padding 80px vertical                                   │
│                                                                            │
│  OVERLINE: SOLUTIONS ENTREPRISE                                            │
│  HEADING: Des solutions IT complètes pour votre organisation               │
│  LEAD: De l'infrastructure réseau à la cybersécurité, SYNET conçoit,        │
│        déploie et maintient des systèmes adaptés à votre secteur.           │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  TWO-COLUMN SPLIT                                                    │  │
│  │  ┌────────────────────────────┬──────────────────────────────────┐  │  │
│  │  │  VALUE BULLETS (left)      │  AUDIENCE TILES (right)          │  │  │
│  │  │                            │                                  │  │  │
│  │  │  ✓ Conception sur mesure   │  ┌──────┐ ┌──────┐ ┌──────┐    │  │  │
│  │  │  ✓ Déploiement clé en main │  │ PME  │ │Écoles│ │Clinq.│    │  │  │
│  │  │  ✓ Support réactif         │  └──────┘ └──────┘ └──────┘    │  │  │
│  │  │  ✓ Sécurité intégrée       │  ┌──────┐ ┌──────┐              │  │  │
│  │  │                            │  │Usines│ │Gouv. │              │  │  │
│  │  │  [Voir tous les services]  │  └──────┘ └──────┘              │  │  │
│  │  │                            │                                  │  │  │
│  │  └────────────────────────────┴──────────────────────────────────┘  │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  HORIZONTAL STAT BAR (neutral-100 background)                        │ │
│  │  [15+ ans]    [200+ clients]    [7 services]    [Support 24/7]        │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe — Mobile

```
┌─────────────────────────────┐
│ OVERLINE + HEADING + LEAD   │
│                             │
│ Value bullets (stacked)     │
│ ✓ Conception sur mesure     │
│ ✓ Déploiement clé en main   │
│ ✓ Support réactif           │
│ ✓ Sécurité intégrée         │
│                             │
│ Audience tiles (2×3 grid)   │
│ ┌──────┐ ┌──────┐          │
│ │ PME  │ │Écoles│          │
│ └──────┘ └──────┘          │
│ ...                         │
│                             │
│ Stat bar (2×2 grid)         │
│                             │
│ [Voir tous les services]    │
└─────────────────────────────┘
```

### Purpose

Deepen Division 1 identity after the hero. Answer: *What does SYNET do for businesses? Who do they serve?* Bridge from emotional headline to concrete services (Section ⑤).

### Content

| Element | FR copy |
|---------|---------|
| **Overline** | SOLUTIONS ENTREPRISE |
| **Heading** | Des solutions IT complètes pour votre organisation |
| **Lead** | De l'infrastructure réseau à la cybersécurité, SYNET conçoit, déploie et maintient des systèmes fiables et sécurisés, adaptés aux exigences de votre secteur. |
| **Bullet 1** | Conception et architecture sur mesure |
| **Bullet 2** | Déploiement clé en main et mise en production |
| **Bullet 3** | Support technique réactif et maintenance proactive |
| **Bullet 4** | Sécurité intégrée à chaque étape du projet |
| **Audience tiles** | PME · Écoles · Cliniques · Usines · Organisations gouvernementales |
| **Stat 1** | 15+ ans d'expérience |
| **Stat 2** | 200+ clients accompagnés |
| **Stat 3** | 7 domaines d'expertise |
| **Stat 4** | Support réactif 24/7 |

*Stats are placeholders — replace with verified company data before publish.*

### Layout

| Property | Specification |
|----------|---------------|
| Background | `white` |
| Section padding | 80px vertical (desktop), 64px (mobile) |
| Content grid | 12 columns; heading spans full width |
| Split area | 5/7 columns: bullets left, audience tiles right |
| Audience tiles | 5 tiles in flex-wrap grid; each tile: icon (24px) + label; `neutral-100` bg, 4px radius, 16px padding |
| Tile hover | Border → `blue-600`; links to `/{locale}/secteurs/{slug}/` |
| Stat bar | Full width within container; 4 equal columns; `neutral-100` background; 48px padding |
| Heading margin | 48px below heading group before content |

### CTA

| Priority | Label (FR) | Style | Target |
|----------|------------|-------|--------|
| **Primary** | Voir tous les services | Tertiary text link with → | `/{locale}/solutions-entreprise/` |
| **Secondary** | Demander un devis | Secondary outline button (below stat bar, centered) | `/{locale}/demande-devis/` |

### Recommended imagery

| Element | Imagery |
|---------|---------|
| **Section-level** | No large hero image — content-driven section |
| **Audience tiles** | Small outline icons only (building, graduation cap, medical cross, factory, government pillar) — no tile photography |
| **Optional right column** | If a photo is desired: single rectangular image (16:9) above audience tiles showing technician installing network equipment — bordered, 4px radius, not full-bleed |

---

## Section 3 — Training Center Overview

### Wireframe — Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ NEUTRAL-50 background — padding 80px vertical                              │
│                                                                            │
│  OVERLINE: CENTRE DE FORMATION                                             │
│  HEADING: Développez des compétences technologiques reconnues              │
│  LEAD: Formations pratiques en réseaux, systèmes, cybersécurité et        │
│        cloud — dispensées par des professionnels certifiés.                │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  MIRROR OF SECTION ② — TWO-COLUMN SPLIT                              │  │
│  │  ┌────────────────────────────┬──────────────────────────────────┐  │  │
│  │  │  AUDIENCE TILES (left)     │  VALUE BULLETS (right)           │  │  │
│  │  │                            │                                  │  │  │
│  │  │  ┌──────┐ ┌──────┐        │  ✓ Formations pratiques          │  │  │
│  │  │  │Étud. │ │Cherch.│        │  ✓ Instructeurs certifiés        │  │  │
│  │  │  └──────┘ └──────┘        │  ✓ Certification internationale  │  │  │
│  │  │  ┌──────┐ ┌──────┐        │  ✓ Lab équipé et à jour          │  │  │
│  │  │  │Pros  │ │Entrep│        │                                  │  │  │
│  │  │  │ IT   │ │      │        │  [Voir toutes les formations]    │  │  │
│  │  │  └──────┘ └──────┘        │                                  │  │  │
│  │  └────────────────────────────┴──────────────────────────────────┘  │  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  HORIZONTAL STAT BAR (white background)                              │ │
│  │  [500+ diplômés]  [7 programmes]  [95% satisfaction]  [Lab certifié] │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Purpose

Establish Division 2 with **equal visual weight** to Section ②. Answer: *What training does SYNET offer? Who is it for?* Sets up Featured Courses (Section ④).

**Parity note:** Layout is a **horizontal mirror** of Section ② — audience tiles and bullets swap sides so the page feels balanced, not repetitive.

### Content

| Element | FR copy |
|---------|---------|
| **Overline** | CENTRE DE FORMATION |
| **Heading** | Développez des compétences technologiques reconnues |
| **Lead** | Formations pratiques en réseaux, systèmes, cybersécurité et cloud — conçues pour l'emploi et dispensées par des professionnels certifiés. |
| **Bullet 1** | Approche pratique avec exercices en laboratoire |
| **Bullet 2** | Instructeurs certifiés et actifs sur le terrain |
| **Bullet 3** | Préparation aux certifications internationales |
| **Bullet 4** | Laboratoire équipé avec technologies actuelles |
| **Audience tiles** | Étudiants · Chercheurs d'emploi · Professionnels IT · Entreprises |
| **Stat 1** | 500+ stagiaires formés |
| **Stat 2** | 7 programmes de formation |
| **Stat 3** | 95% de satisfaction |
| **Stat 4** | Laboratoire certifié |

### Layout

| Property | Specification |
|----------|---------------|
| Background | `neutral-50` (alternates from Section ② white) |
| Structure | Identical spacing and grid to Section ② |
| Column mirror | Audience tiles LEFT, bullets RIGHT (opposite of ②) |
| Stat bar | `white` background (alternates from ② `neutral-100`) |
| All other spacing | Match Section ② exactly |

### CTA

| Priority | Label (FR) | Style | Target |
|----------|------------|-------|--------|
| **Primary** | Voir toutes les formations | Tertiary text link with → | `/{locale}/centre-formation/` |
| **Secondary** | S'inscrire à une formation | Primary blue button (below stat bar, centered) | `/{locale}/inscription-formation/` |

### Recommended imagery

| Element | Imagery |
|---------|---------|
| **Section-level** | No large hero image — mirrors Section ② |
| **Audience tiles** | Outline icons: graduation cap, briefcase, monitor, building |
| **Optional left column** | Photo above audience tiles: hands-on training lab with students at workstations — same border treatment as Section ② optional image |

---

## Section 4 — Featured Courses

### Wireframe — Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ WHITE background — padding 80px vertical                                   │
│                                                                            │
│  OVERLINE: FORMATIONS À LA UNE                                             │
│  HEADING: Prochaines sessions de formation                                 │
│  LEAD: Inscrivez-vous aux programmes les plus demandés. Places limitées.   │
│                                                                            │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐          │
│  │ CARD             │ │ CARD             │ │ CARD             │          │
│  │ ┌──────────────┐ │ │ ┌──────────────┐ │ │ ┌──────────────┐ │          │
│  │ │ THUMB 16:9   │ │ │ │ THUMB 16:9   │ │ │ │ THUMB 16:9   │ │          │
│  │ └──────────────┘ │ │ └──────────────┘ │ │ └──────────────┘ │          │
│  │ TAG: Réseaux     │ │ TAG: Cybersécu.  │ │ TAG: Linux       │          │
│  │ TITLE            │ │ TITLE            │ │ TITLE            │          │
│  │ Duration · Level │ │ Duration · Level │ │ Duration · Level │          │
│  │ 📅 Next: 15 Jul  │ │ 📅 Next: 22 Jul  │ │ 📅 Next: 5 Août  │          │
│  │ S'inscrire →     │ │ S'inscrire →     │ │ S'inscrire →     │          │
│  └──────────────────┘ └──────────────────┘ └──────────────────┘          │
│                                                                            │
│              [Voir le calendrier complet →]                                │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe — Mobile

```
┌─────────────────────────────┐
│ OVERLINE + HEADING + LEAD   │
│                             │
│ ┌─────────────────────────┐ │
│ │ CARD (full width)       │ │
│ │ thumb / tag / title     │ │
│ │ date / CTA              │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ CARD 2                  │ │
│ └─────────────────────────┘ │
│ ← horizontal scroll opt. → │
│                             │
│ [Voir le calendrier]        │
└─────────────────────────────┘
```

### Purpose

Showcase concrete, enrollable training programs. This is the primary **revenue-driving** section — transforms Division 2 awareness into actionable enrollment. Dates and scarcity create urgency.

### Content

| Element | FR copy |
|---------|---------|
| **Overline** | FORMATIONS À LA UNE |
| **Heading** | Prochaines sessions de formation |
| **Lead** | Inscrivez-vous aux programmes les plus demandés. Places limitées par session. |

**Card content model (3 featured courses — CMS-driven):**

| Field | Example |
|-------|---------|
| Thumbnail | Course-relevant photo |
| Category tag | RÉSEAUX / CYBERSÉCURITÉ / LINUX |
| Title | Formation CCNA — Réseaux Cisco |
| Meta line | 5 jours · Niveau intermédiaire |
| Next session | Prochaine session : 15 juillet 2026 |
| Spots (optional) | 4 places restantes |
| Link label | S'inscrire → |

**Default 3 featured (if CMS empty):**

1. Formation Réseaux (CCNA)
2. Formation Cybersécurité
3. Formation Linux Administration

### Layout

| Property | Specification |
|----------|---------------|
| Background | `white` |
| Grid | 3 equal columns (desktop); 1 column stacked (mobile) |
| Card type | Standard card with top thumbnail (horizontal card variant) |
| Thumbnail | 16:9 ratio, flush to card top edge, `radius-none` on image |
| Card body padding | 24px |
| Tag | `label-sm`, `blue-100` background, `blue-600` text |
| Date line | `body-sm`, `neutral-700`, calendar icon 16px leading |
| Card hover | Border → `blue-600` |
| Grid gap | 24px |
| Below grid | Centered tertiary link, 32px top margin |

### CTA

| Priority | Label (FR) | Style | Target |
|----------|------------|-------|--------|
| **Per card** | S'inscrire → | Tertiary link at card bottom | `/{locale}/inscription-formation/?program={slug}` |
| **Section** | Voir le calendrier complet → | Tertiary centered link | `/{locale}/centre-formation/#calendrier` |

### Recommended imagery

| Card | Image direction |
|------|-----------------|
| **Réseaux** | Network topology lab, Cisco equipment close-up, cabling work |
| **Cybersécurité** | Security operations screen, firewall config (no cliché hacker hoodies) |
| **Linux** | Terminal on screen in classroom setting, server administration |
| **SAP / Cloud / Microsoft** | Rotate featured courses seasonally; application screenshots in real lab context |

**Image specs:** 16:9 crop, 640×360px minimum, slight desaturation, no text baked into images.

---

## Section 5 — Core Services

### Wireframe — Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ NEUTRAL-50 background — padding 80px vertical                                │
│                                                                            │
│  OVERLINE: NOS SERVICES                                                    │
│  HEADING: Une expertise complète en solutions IT                             │
│  LEAD: De l'audit à la maintenance, SYNET couvre l'ensemble de vos           │
│        besoins technologiques.                                              │
│                                                                            │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                              │
│  │ ICON   │ │ ICON   │ │ ICON   │ │ ICON   │                              │
│  │ Infra  │ │ Cyber  │ │ VoIP   │ │ Support│                              │
│  │ réseau │ │ sécu.  │ │        │ │ & maint│                              │
│  │  →     │ │  →     │ │  →     │ │  →     │                              │
│  └────────┘ └────────┘ └────────┘ └────────┘                              │
│  ┌────────┐ ┌────────┐ ┌────────┐                                          │
│  │ ICON   │ │ ICON   │ │ ICON   │                                          │
│  │ Cloud  │ │ CCTV   │ │ Dév.   │                                          │
│  │        │ │        │ │ web    │                                          │
│  │  →     │ │  →     │ │  →     │                                          │
│  └────────┘ └────────┘ └────────┘                                          │
│                                                                            │
│              [Demander un devis personnalisé]                               │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe — Mobile

```
┌─────────────────────────────┐
│ OVERLINE + HEADING + LEAD   │
│                             │
│ ┌────────┐ ┌────────┐      │
│ │Service │ │Service │      │
│ │  1     │ │  2     │      │
│ └────────┘ └────────┘      │
│ ┌────────┐ ┌────────┐      │
│ │  3     │ │  4     │      │
│ └────────┘ └────────┘      │
│ ... (2-column grid)         │
│                             │
│ [Demander un devis]         │
└─────────────────────────────┘
```

### Purpose

Provide parity for Division 1 at the offering level. After training courses, business services get equal grid prominence. Enables service-specific deep linking and SEO internal linking.

### Content

| Element | FR copy |
|---------|---------|
| **Overline** | NOS SERVICES |
| **Heading** | Une expertise complète en solutions IT |
| **Lead** | De l'audit initial à la maintenance continue, SYNET couvre l'ensemble de vos besoins technologiques avec une seule équipe de confiance. |

**7 service cards:**

| # | Title (FR) | One-liner (FR) | Icon |
|---|------------|----------------|------|
| 1 | Infrastructure réseau | Conception, déploiement et optimisation de réseaux | Network nodes |
| 2 | Cybersécurité | Protection proactive de vos systèmes et données | Shield |
| 3 | VoIP & Téléphonie IP | Solutions de communication unifiée | Phone |
| 4 | Support & Maintenance IT | Assistance technique réactive et préventive | Wrench / headset |
| 5 | Solutions Cloud | Migration, hébergement et gestion cloud | Cloud |
| 6 | Vidéosurveillance & Contrôle d'accès | Sécurité physique intelligente | Camera |
| 7 | Développement Web | Sites et applications professionnels | Code |

Each card links to its service detail page.

### Layout

| Property | Specification |
|----------|---------------|
| Background | `neutral-50` (alternates from Section ④ white) |
| Grid | 4 columns row 1 + 3 columns row 2 (desktop); 2 columns (tablet/mobile) |
| Card type | Standard card — icon top, title, one-liner, arrow link |
| Icon | 32px, `blue-600`, outline style |
| Card padding | 24px |
| Card height | Equal height via grid |
| Title | `heading-sm`, `navy-800` |
| One-liner | `body-sm`, `neutral-700`, max 2 lines |
| Link | Suffix → arrow, tertiary style |
| Section CTA | Centered primary button, 48px below grid |

### CTA

| Priority | Label (FR) | Style | Target |
|----------|------------|-------|--------|
| **Per card** | En savoir plus → | Tertiary link | `/{locale}/solutions-entreprise/{service-slug}/` |
| **Section** | Demander un devis personnalisé | Primary blue button, centered | `/{locale}/demande-devis/` |

### Recommended imagery

No photography in this section — icon-driven grid for scanability. Photography appears on individual service detail pages.

---

## Section 6 — Why Choose SYNET

### Wireframe — Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ WHITE background — padding 80px vertical                                   │
│                                                                            │
│  OVERLINE: POURQUOI SYNET                                                  │
│  HEADING: Un partenaire technologique de confiance                          │
│  LEAD: Deux divisions, une même exigence : l'excellence technique.          │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐  │
│  │  4-COLUMN DIFFERENTIATOR GRID                                        │  │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐│  │
│  │  │ ICON         │ │ ICON         │ │ ICON         │ │ ICON         ││  │
│  │  │ Double       │ │ Expertise    │ │ Certifié     │ │ Accompagn.   ││  │
│  │  │ expertise    │ │ terrain      │ │ & reconnu    │ │ de A à Z     ││  │
│  │  │ Services +   │ │ Équipes      │ │ Partenaires  │ │ De l'audit   ││  │
│  │  │ Formation    │ │ actives sur  │ │ Cisco, MS,   │ │ au suivi     ││  │
│  │  │              │ │ le terrain   │ │ Linux...     │ │ post-projet  ││  │
│  │  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘│  │
│  └─────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────────┐ │
│  │  CERTIFICATION / PARTNER LOGO BAR (grayscale, 40px height)           │ │
│  │  [Cisco] [Microsoft] [Linux] [SAP] [Fortinet] [AWS]                  │ │
│  └──────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
│  ┌────────────────────────────┬─────────────────────────────────────────┐ │
│  │  OPTIONAL: Split highlight │  Photo: team at work or cert ceremony  │ │
│  │  B2B case stat             │  4:3 ratio, bordered                    │ │
│  │  Training stat             │                                         │ │
│  └────────────────────────────┴─────────────────────────────────────────┘ │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Purpose

Build trust and differentiation. Justify why SYNET over competitors. Reinforce the unique **dual-division advantage** — rare in the market. Prime visitor for testimonials (Section ⑦).

### Content

| Element | FR copy |
|---------|---------|
| **Overline** | POURQUOI SYNET |
| **Heading** | Un partenaire technologique de confiance |
| **Lead** | Deux divisions complémentaires, une même exigence : l'excellence technique et des résultats concrets. |

**4 differentiator blocks:**

| # | Title (FR) | Body (FR) |
|---|------------|-----------|
| 1 | Double expertise | Seul acteur à combiner solutions IT et formation professionnelle — pour les entreprises et leurs équipes. |
| 2 | Expertise terrain | Nos formateurs sont nos ingénieurs. Nos ingénieurs forment vos équipes. Pratique, pas théorie. |
| 3 | Certifié & reconnu | Partenariats et certifications des principaux éditeurs technologiques. |
| 4 | Accompagnement complet | De l'audit initial au support continu — un interlocuteur unique pour tous vos besoins IT. |

**Partner logo bar:** Cisco, Microsoft, Linux Foundation, SAP, Fortinet, AWS (or verified actual partners only).

**Optional highlight stats:**

| Stat | Example |
|------|---------|
| B2B | 99,5% de disponibilité réseau pour nos clients |
| Training | 87% de nos stagiaires en poste dans les 6 mois |

### Layout

| Property | Specification |
|----------|---------------|
| Background | `white` |
| Differentiator grid | 4 columns equal (desktop); 2×2 (tablet); 1 column (mobile) |
| Block style | No card border — icon + title + body only; 32px icon, `blue-600` |
| Title | `heading-sm` |
| Body | `body-sm`, `neutral-700` |
| Logo bar | 48px vertical padding; logos grayscale, 40px max height, `space-8` gap |
| Optional bottom split | 6/6 grid: stats left, photo right |
| Spacing below heading | 48px |

### CTA

| Priority | Label (FR) | Style | Target |
|----------|------------|-------|--------|
| **None primary** | — | Trust section — no hard sell | — |
| **Optional inline** | En savoir plus sur SYNET → | Tertiary link below grid | `/{locale}/a-propos/` |

Intentionally light on CTAs — let trust accumulate before testimonials and contact band.

### Recommended imagery

| Element | Direction |
|---------|-----------|
| **Partner logos** | Official partner/certification logos, grayscale per design system |
| **Optional photo** | Team receiving certification, engineers in client meeting, or training graduation — authentic, not stock handshake |
| **No** | Trophy clip art, 5-star graphic overlays, AI-generated team photos |

---

## Section 7 — Testimonials

### Wireframe — Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ NEUTRAL-100 background — padding 80px vertical                               │
│                                                                            │
│  OVERLINE: TÉMOIGNAGES                                                     │
│  HEADING: Ce que nos clients et stagiaires disent de nous                   │
│                                                                            │
│  ┌──────────────────────────────┐ ┌──────────────────────────────┐        │
│  │ TESTIMONIAL CARD (Business)  │ │ TESTIMONIAL CARD (Training)  │        │
│  │                              │ │                              │        │
│  │  " SYNET a modernisé notre   │ │  " La formation Linux m'a    │        │
│  │    infrastructure réseau     │ │    permis de décrocher mon   │        │
│  │    avec un minimum de        │ │    premier poste en admin    │        │
│  │    perturbation. "           │ │    système. "                │        │
│  │                              │ │                              │        │
│  │  — Directeur IT, École XXX   │ │  — Stagiaire, Promotion 2025 │        │
│  │    ★ Solutions entreprise    │ │    ★ Centre de formation   │        │
│  └──────────────────────────────┘ └──────────────────────────────┘        │
│                                                                            │
│  ○ ● ○ ○   (carousel indicators — 4–6 total, pairs of B2B + Training)     │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe — Mobile

```
┌─────────────────────────────┐
│ OVERLINE + HEADING          │
│                             │
│ ┌─────────────────────────┐ │
│ │ TESTIMONIAL CARD        │ │
│ │ quote / attribution     │ │
│ │ division badge          │ │
│ └─────────────────────────┘ │
│        ○ ● ○ ○              │
│   (swipe carousel)          │
└─────────────────────────────┘
```

### Purpose

Social proof from real clients and trainees. **Equal representation** of both divisions in every carousel view. Converts trust built in Section ⑥ into confidence to act in Section ⑧.

### Content

| Element | FR copy |
|---------|---------|
| **Overline** | TÉMOIGNAGES |
| **Heading** | Ce que nos clients et stagiaires disent de nous |

**Testimonial card model:**

| Field | Specification |
|-------|---------------|
| Quote | 2–3 sentences max, real attributed quote |
| Attribution | Name (or role only if confidential), organization type |
| Division badge | `Solutions entreprise` or `Centre de formation` — `label-sm` tag |
| No star ratings | Use division badge instead — more professional than consumer stars |

**Minimum set:** 4 testimonials (2 B2B + 2 Training). Ideal: 6–8 total.

**Example B2B quotes (placeholder):**

1. *« SYNET a modernisé notre infrastructure réseau avec un minimum de perturbation pour nos utilisateurs. »* — Directeur IT, École privée  
2. *« Leur équipe cybersécurité a identifié des vulnérabilités que nous ignorions. Réponse professionnelle et rapide. »* — Responsable SI, PME manufacturière

**Example Training quotes (placeholder):**

1. *« La formation Linux m'a permis de décrocher mon premier poste en administration système. »* — Stagiaire, Promotion 2025  
2. *« Nos équipes ont suivi la formation cybersécurité SYNET. Contenu pratique, directement applicable. »* — DRH, Entreprise locale

### Layout

| Property | Specification |
|----------|---------------|
| Background | `neutral-100` |
| Display | 2 cards side by side (desktop): always 1 B2B + 1 Training |
| Card style | Testimonial block per design system: `neutral-100` bg, 3px `blue-600` left border, 24px padding |
| Quote | `body-lg`, `neutral-900` |
| Attribution | `body-sm`, weight 600 name + `neutral-700` role |
| Badge | Below attribution |
| Carousel | Manual arrows + dot indicators; no auto-play |
| Transition | 200ms fade between pairs |
| Mobile | Single card swipe; alternate B2B/Training on swipe |

### CTA

No CTA in this section — testimonials should feel unbiased. Conversion happens in Section ⑧.

### Recommended imagery

| Option | Direction |
|--------|-----------|
| **Default** | No photos — quote-driven cards are more credible for enterprise |
| **Optional enhancement** | Small circular headshot (48px) next to attribution if client approves |
| **Avoid** | Large stock photos, fake names with AI faces |

---

## Section 8 — Contact CTA

### Wireframe — Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ NAVY-800 background — padding 64px vertical — full width                     │
│                                                                            │
│  HEADING (white): Prêt à démarrer votre projet ou votre formation ?         │
│  LEAD (neutral-200): Notre équipe vous répond sous 24 heures ouvrées.       │
│                                                                            │
│  ┌────────────────────────────┐  ┌────────────────────────────┐           │
│  │  BUSINESS PATH             │  │  TRAINING PATH             │           │
│  │                            │  │                            │           │
│  │  Icon: building            │  │  Icon: graduation cap      │           │
│  │  Solutions entreprise      │  │  Centre de formation       │           │
│  │  Devis gratuit, sans       │  │  Inscription rapide,       │           │
│  │  engagement.               │  │  sessions tout au long     │           │
│  │                            │  │  de l'année.               │           │
│  │  [Demander un devis]       │  │  [S'inscrire]              │           │
│  │  WHITE BUTTON              │  │  OUTLINE WHITE BUTTON      │           │
│  └────────────────────────────┘  └────────────────────────────┘           │
│                                                                            │
│  Or: [Nous contacter →]  ·  ☎ +212 XXX XXX XXX  ·  ✉ contact@synet.ma    │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe — Mobile

```
┌─────────────────────────────┐
│ HEADING + LEAD              │
│                             │
│ ┌─────────────────────────┐ │
│ │ BUSINESS PATH           │ │
│ │ [Demander un devis]     │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ TRAINING PATH           │ │
│ │ [S'inscrire]            │ │
│ └─────────────────────────┘ │
│                             │
│ ☎ phone · ✉ email           │
│ [Nous contacter →]          │
└─────────────────────────────┘
```

### Purpose

Final conversion band. Present two equal, clearly separated paths before the footer. Capture visitors who scrolled the full page without clicking earlier CTAs.

### Content

| Element | FR copy |
|---------|---------|
| **Heading** | Prêt à démarrer votre projet ou votre formation ? |
| **Lead** | Notre équipe vous répond sous 24 heures ouvrées. |
| **Business path title** | Solutions entreprise |
| **Business path body** | Demandez un devis gratuit et sans engagement pour votre projet IT. |
| **Training path title** | Centre de formation |
| **Training path body** | Inscrivez-vous à une session ou renseignez-vous sur nos programmes. |
| **Contact line** | Ou contactez-nous directement |
| **Phone** | +212 XXX XXX XXX (verified number) |
| **Email** | contact@synet.ma (verified) |

### Layout

| Property | Specification |
|----------|---------------|
| Background | `navy-800` |
| Text | White heading, `neutral-200` lead |
| Grid | 2 equal columns (desktop); stacked (mobile) |
| Path cards | `navy-700` background, 1px `navy-600` border, 32px padding, 4px radius |
| Path icon | 32px white outline icon, top of card |
| Path title | `heading-sm`, white |
| Path body | `body-sm`, `neutral-200` |
| Path CTA | Full-width within card |
| Contact line | Centered below cards, `body-sm`, 32px top margin |
| Phone/email | Inline, `neutral-200`; click-to-call on mobile |

### CTA

| Path | Label (FR) | Style | Target |
|------|------------|-------|--------|
| **Business** | Demander un devis | White-fill button | `/{locale}/demande-devis/` |
| **Training** | S'inscrire à une formation | Outline white button | `/{locale}/inscription-formation/` |
| **Tertiary** | Nous contacter → | Tertiary on dark (white text) | `/{locale}/contact/` |

### Recommended imagery

No imagery — dark CTA band is text and action only. Clean, enterprise pattern (Cisco/Dell pre-footer CTA style).

---

## Section 9 — Footer

### Wireframe — Desktop

```
┌────────────────────────────────────────────────────────────────────────────┐
│ NAVY-900 background — padding 64px top, 32px bottom                          │
│                                                                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐                      │
│  │ SOLUTIONS│ │ FORMATION│ │ ENTREPRISE│ │ CONTACT  │                      │
│  │          │ │          │ │          │ │          │                      │
│  │ Infra    │ │ Réseaux  │ │ À propos │ │ Adresse  │                      │
│  │ Cyber    │ │ Linux    │ │ Réalisat.│ │ Téléphone│                      │
│  │ VoIP     │ │ Cyber    │ │ Carrières│ │ Email    │                      │
│  │ Support  │ │ Cloud    │ │ Ressourc.│ │ Horaires │                      │
│  │ Cloud    │ │ SAP      │ │ FAQ      │ │          │                      │
│  │ CCTV     │ │ MS Tech  │ │          │ │ [LinkedIn│                      │
│  │ Dev web  │ │ Corp.    │ │          │ │  icons]  │                      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘                      │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                            │
│  [LOGO]   SYNET helps businesses build secure and reliable IT systems…    │
│                                                                            │
│  © 2026 SYNET · Mentions légales · Confidentialité · CGU     FR | EN | AR  │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe — Mobile

```
┌─────────────────────────────┐
│ [LOGO]                      │
│ Positioning tagline         │
│                             │
│ ▾ Solutions (accordion)     │
│ ▾ Formation (accordion)     │
│ ▾ Entreprise (accordion)    │
│ ▾ Contact (accordion)       │
│                             │
│ Social icons                │
│ ─────────────────────────── │
│ © 2026 SYNET                │
│ Mentions · Privacy · CGU    │
│ FR | EN | AR                │
└─────────────────────────────┘
```

### Purpose

Comprehensive site map for crawlers and users. Reinforce brand positioning. Provide legal compliance and locale switching. Close the page with institutional permanence.

### Content

| Column | Links (FR) |
|--------|------------|
| **Solutions** | 7 service links per IA report |
| **Formation** | 7 training program links |
| **Entreprise** | À propos, Réalisations, Carrières, Ressources, FAQ |
| **Contact** | Address, phone, email, business hours |
| **Tagline** | Full positioning statement |
| **Legal** | © 2026 SYNET · Mentions légales · Politique de confidentialité · Conditions d'utilisation |
| **Language** | FR \| EN \| AR |

### Layout

| Property | Specification |
|----------|---------------|
| Background | `navy-900` |
| Grid | 4 columns equal (desktop); accordion (mobile) |
| Column heading | `label-sm`, white, uppercase, 16px margin below |
| Links | `body-sm`, `neutral-400`, hover → white |
| Divider | 1px `navy-700`, 32px vertical margin |
| Logo row | Logo + tagline left-aligned |
| Bottom bar | Copyright + legal links left; language switcher right |
| Padding | 64px top, 32px bottom |
| Social icons | 20px, `neutral-400`, hover white — LinkedIn primary; others as applicable |

### CTA

Footer is navigational, not conversion-focused. Implicit CTAs are link-based:

| Link | Target |
|------|--------|
| Demande de devis | Not in footer — kept in header and Section ⑧ |
| Contact | `/{locale}/contact/` |
| Service/training links | Respective detail pages |

### Recommended imagery

Logo only (white variant). No photography. Optional: certification badges row above legal bar (grayscale, small).

---

## 12. Responsive behavior summary

| Section | Desktop (>1024) | Tablet (768–1024) | Mobile (<768) |
|---------|-----------------|-------------------|---------------|
| Hero | 50/50 text+image | 50/50 stacked ratio | Text first, image below |
| Biz Overview | 5/7 split | Stacked | Bullets then tiles |
| Training Overview | 5/7 mirror split | Stacked | Tiles then bullets |
| Featured Courses | 3-column grid | 2-column + wrap | 1-column stack or horizontal scroll |
| Core Services | 4+3 grid | 2-column | 2-column |
| Why SYNET | 4-column | 2×2 | 1-column |
| Testimonials | 2 side by side | 1 visible + peek | Swipe carousel |
| Contact CTA | 2 paths side by side | 2 paths stacked | Stacked full-width buttons |
| Footer | 4 columns | 2×2 columns | Accordion |

### Sticky elements (mobile)

| Element | Behavior |
|---------|----------|
| Header | Sticky, 72px → compact optional 64px |
| Optional bottom bar | `[Devis]` `[S'inscrire]` — 56px height, `white` bg, `shadow-sm` |

---

## 13. Content checklist per locale

Each locale requires independently authored content for:

- [ ] Hero headline, lead, chip labels
- [ ] Section ② all copy + stat numbers with locale formatting
- [ ] Section ③ all copy + stat numbers
- [ ] Section ④ three featured courses with localized dates
- [ ] Section ⑤ seven service one-liners
- [ ] Section ⑥ four differentiator bodies + partner names
- [ ] Section ⑦ minimum 4 testimonials (2+2)
- [ ] Section ⑧ path copy + contact details
- [ ] Section ⑨ all nav labels + tagline + legal links
- [ ] All CTAs translated (not auto-translated)
- [ ] SEO: unique `title`, `meta_description`, `og:*` per locale
- [ ] Arabic: RTL layout QA pass on all sections

---

## 14. Above-the-fold priority

What a visitor sees without scrolling (1080p desktop):

```
┌────────────────────────────────────────────┐
│ HEADER: logo, nav hints, FR|EN|AR, [DEVIS] │
├────────────────────────────────────────────┤
│ HERO:                                      │
│   "Des systèmes IT fiables.                │
│    Des compétences pratiques."             │
│                                            │
│   [Explorer nos solutions]                 │
│   [Découvrir nos formations]               │
│                                            │
│   [Solutions entreprise] [Centre formation]  │
│                                            │
│   (image right edge visible)               │
├────────────────────────────────────────────┤
│ SECTION ② begins: "SOLUTIONS ENTREPRISE"   │
│ (heading partially visible — invites scroll)│
└────────────────────────────────────────────┘
```

**5-second test criteria:**

| Question | Answered by |
|----------|-------------|
| What does SYNET do? | Hero headline + lead |
| Do they serve businesses? | Primary CTA + chip 1 |
| Do they offer training? | Secondary CTA + chip 2 |
| Are they legitimate? | Header nav depth + Devis CTA |
| What should I do next? | Two clear hero buttons |

---

## Document changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-06-08 | Initial homepage wireframe specification |

---

*End of wireframe — implement per [SYNET-DESIGN-SYSTEM.md](./SYNET-DESIGN-SYSTEM.md) and content per [SYNET-UX-IA-REPORT.md](./SYNET-UX-IA-REPORT.md).*
