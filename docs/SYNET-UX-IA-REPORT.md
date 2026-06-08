# SYNET Official Website — UX & Information Architecture Report

> **Document type:** Reference specification  
> **Version:** 1.0  
> **Last updated:** 2026-06-08  
> **Status:** Approved for planning — no implementation code yet  

This document is the canonical reference for SYNET website structure, navigation, user journeys, CTAs, multilingual requirements, and content architecture. Consult it before making UX, content, routing, or CMS decisions.

---

## Table of contents

1. [Company context](#1-company-context)
2. [Strategic principles](#2-strategic-principles)
3. [Complete sitemap](#3-complete-sitemap)
4. [User journeys](#4-user-journeys)
5. [Navigation structure](#5-navigation-structure)
6. [Recommended pages](#6-recommended-pages)
7. [Recommended CTAs](#7-recommended-ctas)
8. [Information architecture](#8-information-architecture)
9. [Multilingual requirements](#9-multilingual-requirements)
10. [Content governance](#10-content-governance)
11. [Success metrics](#11-success-metrics)
12. [Implementation phases](#12-implementation-phases)

---

## 1. Company context

### Divisions (equal strategic weight)

SYNET has two equal divisions:

#### Business Solutions

- Network Infrastructure
- Cybersecurity
- VoIP & IP Telephony
- IT Support & Maintenance
- Cloud Solutions
- CCTV & Access Control
- Website Development

#### Training Center

- Networking Training
- Linux Training
- Cybersecurity Training
- Cloud Computing
- SAP Training
- Microsoft Technologies
- Corporate Training

### Current business reality

Training generates more revenue today, but **both divisions are strategically important** and must receive **equal visual and structural weight** on the website.

### Target audiences

| Division | Audiences |
|----------|-----------|
| **Business Solutions** | SMEs, Schools, Clinics, Factories, Government organizations |
| **Training Center** | Students, Job seekers, IT professionals, Companies seeking staff training |

### Company positioning (site-wide tagline)

> **SYNET helps businesses build secure and reliable IT systems while helping professionals develop practical technology skills.**

Use this statement in hero sections, footer, About page, and meta descriptions where appropriate.

---

## 2. Strategic principles

| Principle | Implication |
|-----------|-------------|
| **Dual division parity** | Business Solutions and Training Center get equal visual weight in nav, homepage, and footer — not "training-first" despite current revenue mix. |
| **Audience clarity** | Each division speaks to distinct personas; pages avoid mixing B2B service pitch with learner enrollment in the same primary narrative. |
| **Trust & expertise** | Case studies, certifications, partnerships, and instructor credentials support both divisions. |
| **Conversion paths** | Every major page has one primary CTA and one secondary CTA aligned to user intent. |
| **Manual multilingual** | Content is authored per locale; structure is mirrored, not machine-translated. |

---

## 3. Complete sitemap

### URL pattern (scalable)

```
/{locale}/...
```

Where `locale` = `fr` (default), `en`, `ar`

Default French may also live at root with redirects or `hreflang` — see [Multilingual requirements](#9-multilingual-requirements).

### Full tree

```
synet.{tld}/
├── /{locale}/                                    [Home]
│
├── /{locale}/solutions-entreprise/               [Business Solutions — hub]
│   ├── infrastructure-reseau/
│   ├── cybersecurite/
│   ├── voip-telephonie-ip/
│   ├── support-maintenance-it/
│   ├── solutions-cloud/
│   ├── videosurveillance-controle-acces/
│   └── developpement-web/
│
├── /{locale}/centre-formation/                   [Training Center — hub]
│   ├── formation-reseaux/
│   ├── formation-linux/
│   ├── formation-cybersecurite/
│   ├── formation-cloud/
│   ├── formation-sap/
│   ├── technologies-microsoft/
│   └── formation-entreprise/
│
├── /{locale}/secteurs/                           [Industries / sectors — optional hub]
│   ├── pme/
│   ├── ecoles/
│   ├── cliniques/
│   ├── usines/
│   └── organisations-gouvernementales/
│
├── /{locale}/realisations/                       [Case studies / portfolio]
│   └── /{slug}/                                  [Individual case study]
│
├── /{locale}/a-propos/                           [About SYNET]
│   ├── notre-equipe/                             [Team — optional]
│   ├── partenaires-certifications/               [Partners & certs]
│   └── carrieres/                                [Careers]
│
├── /{locale}/ressources/                         [Resources hub]
│   ├── blog/
│   │   └── /{slug}/
│   ├── guides/
│   │   └── /{slug}/
│   ├── faq/
│   └── glossaire/                                [Glossary — optional, SEO]
│
├── /{locale}/contact/
├── /{locale}/demande-devis/                      [Quote / project inquiry]
├── /{locale}/inscription-formation/            [Training enrollment / inquiry]
│
├── /{locale}/mentions-legales/
├── /{locale}/politique-confidentialite/
├── /{locale}/conditions-utilisation/
│
└── /{locale}/recherche/                          [Site search results — phase 2]
```

### Localized slug equivalents

| French | English | Arabic |
|--------|---------|--------|
| `solutions-entreprise` | `business-solutions` | `حلول-الأعمال` or `business-solutions` |
| `centre-formation` | `training-center` | `مركز-التدريب` |
| `a-propos` | `about` | `من-نحن` |
| `realisations` | `case-studies` | `دراسات-الحالة` |
| `demande-devis` | `request-quote` | `طلب-عرض-سعر` |
| `inscription-formation` | `training-enrollment` | `التسجيل-في-التدريب` |

**Rule:** Service and training detail pages follow the same localized-slug pattern per language. Do not share English slugs across locales.

### Service detail slugs (French reference)

| Service | French slug |
|---------|-------------|
| Network Infrastructure | `infrastructure-reseau` |
| Cybersecurity | `cybersecurite` |
| VoIP & IP Telephony | `voip-telephonie-ip` |
| IT Support & Maintenance | `support-maintenance-it` |
| Cloud Solutions | `solutions-cloud` |
| CCTV & Access Control | `videosurveillance-controle-acces` |
| Website Development | `developpement-web` |

### Training program slugs (French reference)

| Program | French slug |
|---------|-------------|
| Networking Training | `formation-reseaux` |
| Linux Training | `formation-linux` |
| Cybersecurity Training | `formation-cybersecurite` |
| Cloud Computing | `formation-cloud` |
| SAP Training | `formation-sap` |
| Microsoft Technologies | `technologies-microsoft` |
| Corporate Training | `formation-entreprise` |

### Sector slugs (French reference)

| Sector | French slug |
|--------|-------------|
| SMEs | `pme` |
| Schools | `ecoles` |
| Clinics | `cliniques` |
| Factories | `usines` |
| Government organizations | `organisations-gouvernementales` |

---

## 4. User journeys

### Journey A — SME owner needs IT infrastructure (Business Solutions)

```
Awareness → Consideration → Decision → Action
```

| Stage | Touchpoints | Goal |
|-------|-------------|------|
| **Awareness** | Google (FR/EN), referral, LinkedIn | Land on service page or sector page (PME) |
| **Consideration** | Service detail, case studies, FAQ | Understand scope, pricing model, timeline |
| **Decision** | About, partners, testimonials | Trust SYNET vs. competitors |
| **Action** | Request quote, contact, phone | Submit project brief |

**Typical path:**  
Home → Business Solutions hub → Network Infrastructure → Case study (similar client) → Request quote

**Friction reducers:** Sector-specific proof (school/clinic), clear "what's included," response-time promise on quote form.

---

### Journey B — School administrator (multi-service)

| Stage | Path |
|-------|------|
| Entry | Home hero secondary CTA "Solutions for schools" OR Sectors → Schools |
| Explore | CCTV + Network + Support bundled narrative |
| Trust | Government/education case study |
| Convert | Request quote (pre-filled sector = School) |

---

### Journey C — Student / job seeker (Training Center)

| Stage | Touchpoints |
|-------|-------------|
| **Discovery** | Social, search "formation réseau [city]", training hub |
| **Evaluation** | Curriculum, duration, schedule, price/financing, outcomes |
| **Comparison** | FAQ, instructor bios, certification alignment |
| **Enrollment** | Training enrollment form or "Contact admissions" |

**Typical path:**  
Home → Training Center → Cybersecurity Training → Schedule & syllabus → Enroll

**Key moments:** "Who is this for?" (student vs. career changer), next session dates, employability outcomes.

---

### Journey D — IT professional upskilling

Shorter path: Search → specific course → Download syllabus (PDF) → Enroll or corporate invoice request.

Secondary path: Resources → Blog/guide → Course CTA.

---

### Journey E — HR / L&D manager (corporate training)

| Stage | Path |
|-------|------|
| Entry | Training Center → Corporate Training |
| Needs | Custom program builder narrative, on-site vs. remote |
| Proof | Client logos, corporate case studies |
| Convert | Request corporate proposal (distinct form fields from individual enrollment) |

---

### Journey F — Cross-division visitor ("I need both")

Some factories/SMEs want maintenance **and** staff training.

**Designed path:**  
Home dual pathways → Footer "Combined offers" or Contact with "Both divisions" intent selector → Single contact routed internally.

**Rule:** Avoid forcing a choice too early on Contact; use **intent radio** on forms: Business / Training / Both.

---

### Journey G — Arabic-speaking user (RTL)

| Requirement | UX behavior |
|-------------|-------------|
| Entry | `/ar/...` URLs, `dir="rtl"` layout |
| Navigation | Mirrored header; logo position consistent with brand guidelines |
| Forms | RTL labels; LTR for email/phone fields where appropriate |
| Content | Fully manual Arabic copy — not FR/EN fallback |

---

## 5. Navigation structure

### Primary header (desktop)

```
[Logo]  |  Solutions entreprise ▾  |  Centre de formation ▾  |  Secteurs ▾  |  Réalisations  |  À propos ▾  |  Ressources ▾  |  Contact
                                                                                                    [FR | EN | AR]  [CTA primaire]
```

### Mega-menu — Business Solutions

| Column 1: Services | Column 2: Pour qui | Column 3: Actions |
|--------------------|--------------------|-------------------|
| All 7 services (linked) | PME, Écoles, Cliniques, Usines, Gouvernement | Demande de devis · Voir réalisations |

### Mega-menu — Training Center

| Column 1: Formations | Column 2: Publics | Column 3: Actions |
|----------------------|-------------------|-------------------|
| All 7 programs | Étudiants, Chercheurs d'emploi, Pros IT, Entreprises | S'inscrire · Formation entreprise |

### Mega-menu — À propos

- Notre histoire & mission
- Équipe (si applicable)
- Partenaires & certifications
- Carrières

### Mega-menu — Ressources

- Blog
- Guides & livres blancs
- FAQ
- (Phase 2) Glossaire

### Mobile navigation

- Hamburger → accordion sections matching mega-menus
- Sticky bottom bar (optional): **Devis** | **S'inscrire**
- Language switcher at top of drawer

### Footer (4 columns + legal)

| Solutions | Formation | Entreprise | Légal |
|-----------|-----------|------------|-------|
| 7 service links | 7 training links | À propos, Réalisations, Carrières, Contact | Mentions, Confidentialité, CGU |
| | | Ressources, FAQ | |
| | | **Newsletter** (optional) | |

**Footer tagline:** positioning statement + social links.

---

## 6. Recommended pages

### Tier 1 — Launch (MVP)

| Page | Purpose | Primary audience |
|------|---------|------------------|
| **Home** | Dual-division gateway; trust; clear split CTAs | All |
| **Business Solutions hub** | Overview + service grid + sector teasers | B2B |
| **7 service detail pages** | SEO, scope, process, FAQ snippet | B2B by need |
| **Training Center hub** | Program grid, schedules highlight, outcomes | Learners, HR |
| **7 training program pages** | Curriculum, prerequisites, certification, dates | Learners |
| **Contact** | General inquiries, map, hours | All |
| **Request quote** | Structured B2B lead capture | B2B |
| **Training enrollment** | Structured learner/corporate training lead | Training |
| **About** | Mission, dual division story, values | Trust |
| **Legal (×3)** | Compliance | All |

### Tier 2 — Trust & conversion (post-launch, ~4–8 weeks)

| Page | Purpose |
|------|---------|
| **Case studies hub + 6–12 stories** | Proof for both divisions |
| **Sectors hub + 5 sector pages** | Targeted B2B messaging |
| **Partners & certifications** | Authority |
| **FAQ** | Reduce support load; SEO |
| **Corporate training** (enhanced) | B2B training revenue |

### Tier 3 — Growth & SEO

| Page | Purpose |
|------|---------|
| **Blog + guides** | Organic traffic, thought leadership |
| **Careers** | Recruitment, employer brand |
| **Team** | Humanize brand |
| **Glossary** | Long-tail SEO (tech terms FR/EN/AR) |
| **Site search** | Scale content findability |

### Homepage content blocks (IA order)

1. **Hero** — positioning statement + dual CTAs (Solutions | Formation)
2. **Division split** — two equal cards with icons, 1-line value prop, deep links
3. **Services snapshot** — 7 icons/links
4. **Training snapshot** — featured programs + next intake date
5. **Sectors** — 5 audience tiles
6. **Social proof** — logos, metrics, testimonial carousel
7. **Case study highlight** — one B2B, one training (parity)
8. **Resources teaser** — latest blog/guide
9. **Final CTA band** — split: Devis | Inscription

---

## 7. Recommended CTAs

### Global CTA hierarchy

| Priority | Label (FR) | EN | AR | Placement |
|----------|------------|-----|-----|-----------|
| **Primary (header)** | Demander un devis | Request a quote | اطلب عرض سعر | Header button — default site-wide for B2B-weighted balance; alternates on training-heavy pages |
| **Secondary (header)** | S'inscrire à une formation | Enroll in training | سجّل في دورة | Text link or outline button |
| **Contextual primary** | Varies per page | | | Hero and end-of-page |

### Page-specific CTAs

| Page type | Primary CTA | Secondary CTA |
|-----------|-------------|---------------|
| **Home** | Explorer nos solutions | Découvrir nos formations |
| **Business hub** | Demander un devis | Parler à un expert |
| **Service detail** | Devis pour [service] | Voir une réalisation |
| **Training hub** | Voir le calendrier / S'inscrire | Demander formation entreprise |
| **Program detail** | S'inscrire à cette formation | Télécharger le programme (PDF) |
| **Sector page** | Devis secteur [X] | Nos réalisations [secteur] |
| **Case study** | Projet similaire ? Devis | Formation liée (if applicable) |
| **About** | Nous contacter | Voir nos partenaires |
| **Blog article** | CTA inline (service or course related) | Newsletter |
| **FAQ** | Pas trouvé ? Contactez-nous | Devis / Inscription |

### CTA design rules

1. **One primary action per viewport section** — avoid competing primary buttons.
2. **Forms:** progressive disclosure (short first step → optional detail).
3. **Post-submit:** locale-aware thank-you page with next steps and expected response time.
4. **Phone/WhatsApp** (if used): secondary on mobile for B2B urgent needs.
5. **Arabic:** action verbs at start of button label (RTL reading pattern).

### Form intent selector (Contact & universal forms)

| Option | Routes to |
|--------|-----------|
| Business Solutions | Sales / project team |
| Training Center | Admissions / training team |
| Both | Combined intake with dual notification |

---

## 8. Information architecture

### Content model (CMS-ready)

Each **entity** is a discrete content type with **per-locale fields** (not a single field with auto-translate):

| Entity | Locales | Key fields per locale |
|--------|---------|----------------------|
| **Page** | fr, en, ar | title, slug, meta_title, meta_description, og_image, body blocks, status |
| **Service** | fr, en, ar | name, slug, summary, benefits[], process[], faq[], related_case_studies |
| **Training program** | fr, en, ar | name, slug, audience, outcomes, syllabus, duration, schedule, price_display |
| **Sector** | fr, en, ar | name, pain_points, recommended_services[], testimonials |
| **Case study** | fr, en, ar | client (anonymized option), challenge, solution, results, division tag |
| **Blog post** | fr, en, ar | Independent articles OR linked translations via `translation_group_id` |
| **FAQ item** | fr, en, ar | question, answer, category, division |
| **Team member** | fr, en, ar | name (may differ script), role, bio |
| **Global settings** | fr, en, ar | nav labels, footer text, CTA labels, contact info |

**Translation linking:** Optional `translation_group_id` connects FR/EN/AR versions of the same conceptual page for hreflang and language switcher — each locale still has independent content.

### Taxonomy & tagging

| Dimension | Values |
|-----------|--------|
| **Division** | business, training, both |
| **Audience** | sme, school, clinic, factory, government, student, job_seeker, it_pro, corporate_ld |
| **Topic** | network, security, cloud, voip, cctv, web, linux, sap, microsoft, etc. |
| **Content type** | service, program, case_study, article, guide |

Enables filtered listings: "Case studies for schools," "Security content across blog + services."

### Metadata & SEO (per locale)

- Unique `<title>` and meta description per page per language
- Canonical URL per locale version
- `hreflang` cluster: `fr`, `en`, `ar`, `x-default` (→ `fr`)
- Locale-specific Open Graph and Twitter cards
- Structured data: `Organization`, `LocalBusiness` (if applicable), `Course` for trainings, `Service` for offerings
- XML sitemaps: `/sitemap-fr.xml`, `/sitemap-en.xml`, `/sitemap-ar.xml` + index

### URL & routing rules

```
Default:     https://synet.example/fr/...
English:     https://synet.example/en/...
Arabic:      https://synet.example/ar/...
```

- Language switcher preserves **equivalent page** when `translation_group_id` exists; otherwise switches to locale home.
- No query-string locale (`?lang=en`) for public URLs — hurts SEO and sharing.
- 404 and thank-you pages must be localized.

### RTL (Arabic) IA notes

- Layout mirroring for nav, grids, carousels, breadcrumbs
- Numbers, dates, phone: locale formatting
- Mixed-direction content: technical terms may stay LTR inline
- Icons with direction (arrows, chevrons) flip in RTL
- PDF syllabi: separate AR assets if distributed

### Scalability for future languages

- Locale code in path (`/{locale}/`)
- CMS: add locale column/namespace without schema redesign
- Design tokens for text expansion (FR often ~30% longer than EN UI mockups)
- Translation workflow states: `draft` | `review` | `published` per locale
- Admin: "publish FR only" allowed for phased campaigns

---

## 9. Multilingual requirements

### Supported languages

| Language | Code | Default | Direction |
|----------|------|---------|-----------|
| French | `fr` | Yes | LTR |
| English | `en` | No | LTR |
| Arabic | `ar` | No | RTL |

### Requirements checklist

| Requirement | Implementation approach |
|-------------|-------------------------|
| French default | `/fr/` + `x-default` hreflang; optional redirect from `/` → `/fr/` |
| English | Full mirrored IA, EN slugs |
| Arabic | Full mirrored IA, AR slugs, RTL theme |
| Language switcher in header | Visible on all pages; shows current locale; labels: FR / EN / AR |
| Separate SEO metadata | Per-locale fields in CMS; no fallback in meta tags |
| Separate URLs | Path-prefix routing only |
| RTL for Arabic | `dir="rtl"`, logical CSS, component QA pass |
| Independent content | **No automatic translation**; professional manual translations only |
| Future languages | Add new path prefix + CMS locale (e.g. `de`, `es`) |

### What NOT to do

- Do not use automatic/machine translation for published content
- Do not use `?lang=` query parameters for public URLs
- Do not show FR/EN content as fallback on Arabic pages
- Do not share slugs across locales

### Language switcher behavior

1. User on `/fr/solutions-entreprise/infrastructure-reseau/`
2. Clicks **EN**
3. If English translation exists → `/en/business-solutions/network-infrastructure/`
4. If no translation → `/en/` (locale home) with optional notice in admin only (not user-facing)

---

## 10. Content governance

| Role | Responsibility |
|------|----------------|
| **FR lead** | Source content for services, legal |
| **EN / AR translators** | Professional translation of approved FR or parallel authoring |
| **Division owners** | Approve service vs. training accuracy |
| **SEO** | Meta templates per content type per locale |
| **Legal** | Sign-off on mentions légales per jurisdiction |

### Publishing rule

A page goes live in a locale only when **all required fields** for that locale are complete (no lorem ipsum, no FR paragraph in AR page).

### Translation workflow states

```
draft → review → published
```

Per locale independently. One locale can be `published` while another remains `draft`.

---

## 11. Success metrics

| Division | KPI |
|----------|-----|
| Business | Quote form submissions, quote-to-opportunity rate |
| Training | Enrollment form submissions, syllabus downloads |
| Global | Bounce rate by entry page, locale completion rate, language switcher usage |
| SEO | Indexed pages per locale, organic traffic by `/fr`, `/en`, `/ar` |

---

## 12. Implementation phases

### Phase 1 — MVP (Tier 1 pages)

- [ ] Home (FR, EN, AR)
- [ ] Business Solutions hub + 7 services
- [ ] Training Center hub + 7 programs
- [ ] Contact, Request quote, Training enrollment
- [ ] About
- [ ] Legal pages (×3)
- [ ] Header nav + footer + language switcher
- [ ] RTL layout for Arabic
- [ ] Per-locale SEO metadata
- [ ] hreflang + sitemaps

### Phase 2 — Trust layer (Tier 2)

- [ ] Case studies hub + initial case studies
- [ ] Sectors hub + 5 sector pages
- [ ] Partners & certifications
- [ ] FAQ
- [ ] Enhanced corporate training page

### Phase 3 — Growth (Tier 3)

- [ ] Blog + guides
- [ ] Careers
- [ ] Team
- [ ] Glossary
- [ ] Site search

---

## Quick reference — page count (MVP per locale)

| Category | Count |
|----------|-------|
| Core pages | 6 (home, 2 hubs, about, contact, + 2 forms) |
| Service pages | 7 |
| Training pages | 7 |
| Legal pages | 3 |
| **Total MVP per locale** | **23 pages** |
| **Total MVP all locales** | **69 pages** (unique content each) |

---

## Document changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-06-08 | Initial UX & IA report created from planning session |

---

*End of report — use this file as the single source of truth for SYNET website UX and information architecture decisions.*
