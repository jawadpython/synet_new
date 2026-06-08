# SYNET Website — Pre-Launch UX/UI Audit

> **Document type:** UX/UI audit & remediation plan  
> **Version:** 1.0  
> **Last updated:** 2026-06-08  
> **Auditor role:** Senior UX/UI consultant  
> **Scope:** Full public site (home, solutions, training, forms, layout, i18n)  
> **Companion docs:** [SYNET-DESIGN-SYSTEM.md](./SYNET-DESIGN-SYSTEM.md), [SYNET-SEO-STRATEGY.md](./SYNET-SEO-STRATEGY.md)

---

## Executive summary

### Overall verdict: **Not launch-ready** — strong foundation, critical gaps in trust and completeness

SYNET’s visual direction is **correctly enterprise-oriented**: navy structure, blue actions, 4px radius, border-first cards, restrained motion. The site does **not** read as a typical AI startup (no purple gradients, glassmorphism, or chat-bubble heroes). However, several patterns still signal **“template in progress”** rather than an established IT firm: gradient placeholders instead of photography, a provisional logo, unverifiable statistics, and extensive navigation to pages that **do not exist**.

| Dimension | Score | Status |
|-----------|-------|--------|
| Corporate appearance | 7/10 | On-brand palette; undermined by placeholders |
| Visual consistency | 8/10 | Strong token adherence |
| Trustworthiness | 4/10 | **Critical** — broken links, anonymous proof, placeholder NAP |
| Professionalism | 6/10 | Copy tone good; visuals and data need hardening |
| Conversion optimization | 5/10 | CTAs present; forms don’t convert; weak urgency proof |
| Accessibility | 6/10 | Good basics; keyboard nav and touch targets gaps |
| Mobile experience | 7/10 | Solid layout; minor touch-target issues |

### Launch blockers (P0)

1. **~20 navigation links return 404** (contact, about, sectors, legal, blog, FAQ, case studies)
2. **Forms are mock-only** — no persistence, email, or confirmation workflow
3. **Placeholder brand assets** — “S” logomark, gradient “photos,” placeholder phone
4. **Unsubstantiated metrics** — stats and partner claims without evidence
5. **404 page** — English-only, breaks locale experience

---

## What’s working — keep and protect

These choices align with Cisco/Fortinet-grade corporate UX. **Do not “modernize” them into trendy patterns.**

| Element | Why it works |
|---------|--------------|
| Navy header + white content canvas | Authority, structure |
| `rounded-[4px]` everywhere | Enterprise, not startup-pill UI |
| Border-first cards (`border-neutral-200`) | Clean, scalable, not floating shadows |
| Dual-division homepage parity | Strategic IA goal met |
| Fade-only scroll animation | Subtle; respects `prefers-reduced-motion` |
| Source Sans 3 + Noto Sans Arabic | Professional, readable |
| Skip link + `:focus-visible` outline | Accessibility baseline |
| Form labels, `aria-invalid`, `dir="ltr"` on email/tel | Correct i18n form patterns |
| Logical properties (`ms-`, `start-`, `border-s-`, `ps-`) | RTL-ready in most components |
| Service/course page structure | Benefits → Process → Technologies → CTA — B2B convention |

---

## Reject before launch

| Pattern | Where found | Why reject | Replacement |
|---------|-------------|------------|-------------|
| **Gradient blocks as imagery** | `ServiceVisual`, `CourseThumbnail`, `FeaturedCoursesSection` | Reads AI/template; design system limits gradients | Real photography or neutral bordered panels with subtle texture |
| **Icon-in-box hero visual** | `HeroSection` grid + Building2/GraduationCap | Generic “dual offering” clipart | One professional team/office photo or client environment |
| **Provisional logomark** | Header, footer — blue box “S” | Undermines brand trust | Official SYNET logo (SVG) |
| **Text-only partner row** | `WhyChooseSection` — uppercase Cisco, Microsoft… | Looks unverified, cheap | Partner logo strip (with permission) or remove until confirmed |
| **Anonymous testimonials** | “Directeur IT”, “Stagiaire” | Weak E-E-A-T for B2B | Named roles + organization type + optional photo |
| **Unsourced statistics** | 99.5%, 87%, 200+, 500+ | Legal/trust risk | Verified numbers with footnote or remove |
| **Hover-only mega-menu** | Desktop `Header` dropdowns | Fails keyboard users | Focus + Enter open; Escape close |
| **2px testimonial dots** | `TestimonialsSection` carousel | Below 44px touch target | Larger indicators or remove carousel on mobile |
| **Staggered FadeIn on every card** | Homepage sections | Slight “marketing template” feel | Reduce to section-level only, not per-card |

---

## Detailed audit by dimension

### 1. Trustworthiness

#### Critical issues

| Issue | Evidence | Impact | Fix |
|-------|----------|--------|-----|
| **Broken nav promises** | Nav links to `/contact`, `/a-propos`, `/secteurs/*`, `/realisations`, `/ressources/*`, legal pages — **none implemented** (only 7 routes exist) | User clicks “Contact” → 404; destroys credibility | **Option A:** Build MVP pages. **Option B:** Remove/hide links until live. Never ship broken primary nav. |
| **Placeholder phone** | `+212 5XX XX XX XX` in footer, schema, contact CTA | Signals unfinished product | Real number or remove tel links until confirmed |
| **Vague address** | “Casablanca, Maroc” only | Weak local trust | Full street address for `LocalBusiness` schema |
| **Mock form submission** | 800ms delay → success message, no API | Lead loss; user thinks request sent | Wire Firestore/API + email notification before launch |
| **Anonymous social proof** | Testimonials without company names | B2B buyers discount claims | Add organization, sector, optional logo |
| **Unverified partner claims** | “Partenariats Cisco, Microsoft…” + text logos | Misrepresentation risk if not formal partners | Certifications page with proof, or soften copy |

#### Recommendations

- Add **trust strip** below hero: years in business, certifications count, response-time SLA (only if true).
- Add **case study teaser** (even 1) on homepage before launch — linked from business overview.
- Show **instructor credentials** on course pages (photo, CCIE/CEH badges) — training trust driver.
- Add **privacy consent** on enrollment and quote forms (GDPR / loi 09-08).
- Display **physical presence**: office photo, map embed on contact page.

---

### 2. Professionalism

#### Strengths

- Copy tone is formal, benefit-led, not hype-driven — appropriate for Morocco B2B.
- Service/course detail pages follow enterprise information architecture.
- No emoji, no exclamation-heavy CTAs, no “🚀” startup language.

#### Gaps

| Gap | Detail | Fix |
|-----|--------|-----|
| Visual maturity | Gradient placeholders dominate above-the-fold on service/course pages | Commission or license 7 service + 7 course photos; consistent color grade |
| Logo | Text + initial is interim | Deploy brand SVG; specify min size per design system |
| Legal presence | Footer links to legal pages → 404 | Minimum: mentions légales + privacy before launch (required in FR/MA) |
| About page missing | “En savoir plus sur SYNET” → 404 | Single About page: mission, team summary, certifications |
| Inconsistent service coverage | Homepage `CoreServicesSection` shows **4** services; nav lists **7** | Show all 7 or label section “Services principaux” with link to hub |
| 404 experience | English “Page not found” / hardcoded `/fr` | Localized 404 per locale with nav recovery |

---

### 3. Conversion optimization

#### Current conversion paths

```
Home → Quote CTA (header, multiple sections) → /demande-devis ✓
Home → Enroll CTA → /inscription-formation ✓
Service page → Quote with ?service= ✓
Course page → Enroll with ?course= ✓
Contact → /contact ✗ (404)
```

#### CTA hierarchy analysis

| Location | Business CTA | Training CTA | Assessment |
|----------|--------------|--------------|------------|
| Header | Primary (blue) | Text link enroll | ✓ Correct — revenue priority configurable |
| Hero | White (primary visual) | Outline-white | ✓ Equal weight |
| Business overview | Secondary button | — | ⚠️ Quote should be primary blue here |
| Contact CTA section | White filled | Outline-white | ✓ Good terminal conversion |
| Service detail hero | Primary | — | ✓ Good |
| Core services footer | Primary quote | — | ✓ Good |

#### Conversion improvements

| Priority | Improvement | Expected impact |
|----------|-------------|---------------|
| P0 | Real form backend + confirmation email | Enables conversion |
| P0 | Fix contact page | Captures “not ready for form” users |
| P1 | Add **response-time promise** near every form: “Réponse sous 24 h ouvrées” | Reduces abandonment anxiety |
| P1 | Quote form: show **what happens next** (3 steps) beside form | B2B expectation setting |
| P1 | Enrollment: show **price/session** summary when course selected | Reduces incomplete submissions |
| P1 | Service pages: add **FAQ** (3–5 questions) above CTA band | SEO + objection handling |
| P2 | Sticky mobile CTA bar on service/course pages | Mobile conversion lift |
| P2 | Add phone click-to-call in header on mobile | High-intent Morocco users |
| P2 | Post-submit: set GA4 `generate_lead` event | Measurement |

#### Friction points

- Language switcher resets to locale home — user loses context mid-funnel.
- No live chat or WhatsApp — consider for Morocco market (optional, not trendy widget — simple WhatsApp icon).
- Training hash links (`#etudiants`, `#professionnels`) — anchors **don’t exist** on training hub page.

---

### 4. Visual consistency

#### Token adherence: **Strong**

| Token | Spec | Implementation |
|-------|------|----------------|
| Navy-800 header | ✓ | Header, hero, CTA bands |
| Blue-600 actions | ✓ | Buttons, links, focus |
| 4px radius cards | ✓ | Consistent |
| Neutral-50 page bg | ✓ | Body |
| Overline pattern | ✓ | Section headers |

#### Inconsistencies to fix

| Item | Issue | Fix |
|------|-------|-----|
| Input radius | `rounded-[2px]` vs card `rounded-[4px]` | Standardize inputs to 4px |
| Gradient usage | Design system: “no gradients” except hero photo overlay | Replace `ServiceVisual` / `CourseThumbnail` gradients |
| Hero visual | Custom grid pattern unique to hero | Align with photography system |
| Testimonial cards | `bg-neutral-100` on `neutral-100` section — low contrast | Use `bg-white` cards |
| Partner row | `uppercase tracking-wide text-neutral-400` | Logo images at consistent height (32px) |
| Button outline on navy | `outline-white` hover `bg-white/10` | ✓ Consistent — keep |

---

### 5. Corporate appearance

#### Passes corporate test

- Could sit alongside Cisco/Fortinet/Dell reference calibration from design system.
- Information density on service pages is appropriate.
- No illustration mascots, no neon, no dark-mode-glow aesthetic.

#### Fails corporate test

| Element | Problem |
|---------|---------|
| Placeholder imagery | Looks like Webflow/AI template awaiting assets |
| “S” logo | SMB interim mark, not enterprise |
| Missing case studies | Enterprise buyers expect proof |
| Carousel testimonial dots | Slightly consumer; acceptable if enlarged |

#### Corporate upgrades (pre-launch minimum)

1. Professional logo + favicon set
2. One hero photograph (team or NOC/classroom)
3. Seven service photographs (can start with 4 P1 SEO services)
4. Remove or replace all gradient-only visuals

---

### 6. Accessibility (WCAG 2.1 AA target)

#### Passing

| Criterion | Status |
|-----------|--------|
| Skip to content | ✓ |
| Focus visible | ✓ `outline-blue-600` |
| Form labels | ✓ |
| Error messages | ✓ `role="alert"` |
| Reduced motion | ✓ CSS + FadeIn fallback |
| Color contrast (text) | ✓ Navy/blue on white generally pass |
| Semantic landmarks | ✓ `header`, `main`, `footer`, `nav` |
| `aria-labelledby` on sections | ✓ |

#### Failing / partial

| Issue | WCAG | Fix |
|-------|------|-----|
| Desktop mega-menu keyboard | 2.1.1 Keyboard | Add `onFocus`, `onKeyDown` (Escape), `aria-controls` |
| Testimonial dot indicators | 2.5.5 Target Size | Min 44×44px touch area |
| Carousel `role="tablist"` on dots | 4.1.2 Name, Role | Tabs need proper tabpanel association or use simpler pagination |
| `lang`/`dir` via client `useEffect` | 3.1.1 Language | Set server-side in layout (flash for screen readers) |
| 404 not localized | 3.1.1 | Per-locale strings |
| Some `aria-describedby` mismatches | 1.3.1 | Enrollment form: email error id not always wired |
| Missing `aria-live` on form success | 4.1.3 | Add `aria-live="polite"` on success state |
| Service visual `aria-hidden` on decorative | ✓ | Keep |
| No visible focus on language switcher separators | Minor | Ensure focus ring on links |

#### Recommended audit pass

Run Lighthouse accessibility + manual keyboard-only traversal of: header menus, training catalog filters, enrollment form, testimonial carousel.

---

### 7. Mobile experience

#### Strengths

| Pattern | Assessment |
|---------|------------|
| Sticky header 72px | ✓ Standard |
| Mobile drawer nav | ✓ `details/summary` accordion |
| Full-width mobile CTAs in drawer | ✓ Quote + enroll |
| Grid collapse 4→2→1 | ✓ |
| Touch targets on menu button | ✓ `h-11 w-11` |
| Body scroll lock when menu open | ✓ |

#### Issues

| Issue | Fix |
|-------|-----|
| Testimonial dots too small | Increase hit area |
| No click-to-call in mobile header | Add `tel:` icon button |
| Mega-menu content only in mobile drawer — long scroll | Acceptable; consider priority links at top |
| Service hero CTA below fold on small screens | Move primary quote button above visual on mobile |
| Horizontal overflow risk on long AR strings | Test all nav labels in Arabic |
| Fixed mobile CTA missing on money pages | Add bottom bar: “Devis gratuit” / “S’inscrire” |

#### Breakpoint note

Primary nav hidden below `xl` (1280px). Tablet landscape (1024px) uses mobile menu — acceptable but verify iPad Pro users aren’t underserved.

---

## Page-by-page notes

### Homepage

| Section | Verdict | Action |
|---------|---------|--------|
| Hero | Good copy; weak visual | Replace placeholder with photo |
| Business overview | Good | Fix audience tile 404s or hide |
| Training overview | Good | Fix hash link targets |
| Featured courses | Good structure | Replace gradient thumbnails |
| Core services (4 only) | Incomplete | Add 3 more or clarify “featured” |
| Why choose | Good copy | Replace partner text with logos or remove |
| Testimonials | Adequate | Strengthen attribution |
| Contact CTA | Strong | Keep |

### Solutions hub + detail

| Item | Verdict | Action |
|------|---------|--------|
| Catalog/search | N/A on hub — list only | Add search on hub (parity with training) |
| Service detail IA | Excellent | Add FAQ, related services |
| Metadata | Partial | Full SEO titles + hreflang per SEO doc |
| CTA band | Strong | Keep response-time line |

### Training hub + detail

| Item | Verdict | Action |
|------|---------|--------|
| Catalog filters | Strong | ✓ |
| Course detail | Good | Add instructor photo, certification badges |
| Enrollment form | Good UX | Backend + privacy checkbox |
| Price display | Present | Clarify VAT / currency (MAD) |

### Forms (quote + enrollment)

| Item | Verdict | Action |
|------|---------|--------|
| Layout | Clean 2-column | ✓ |
| Validation | Client-side | Add server validation |
| Success state | Minimal | Add reference number + “what’s next” |
| Trust | Missing | Privacy policy link + consent |

### Global chrome

| Item | Verdict | Action |
|------|---------|--------|
| Header | Professional | Logo, keyboard nav |
| Footer | Good structure | Fix broken links |
| Language switcher | Broken UX | Equivalent page switching |
| 404 | Unacceptable | Localize |

---

## Prioritized remediation plan

### P0 — Launch blockers (Week 1)

| # | Task | Owner |
|---|------|-------|
| 1 | Remove or build all nav/footer targets — **no 404 in primary nav** | Dev + Content |
| 2 | Implement contact page (form or NAP + map) | Dev |
| 3 | Legal pages: mentions légales + politique confidentialité | Legal + Dev |
| 4 | Wire quote + enrollment forms to backend | Dev |
| 5 | Replace placeholder phone/address with real data | Client |
| 6 | Deploy real SYNET logo + favicon | Design |
| 7 | Localized 404 page | Dev |
| 8 | Remove or qualify unverified stats/partners | Content + Legal |

### P1 — Trust & conversion (Week 2)

| # | Task |
|---|------|
| 9 | Hero + service P1 photography (4 business, 4 training minimum) |
| 10 | Replace gradient `ServiceVisual` / `CourseThumbnail` |
| 11 | About page (mission, team, certifications) |
| 12 | FAQ sections on P1 money pages |
| 13 | Form privacy consent + post-submit reference number |
| 14 | Fix language switcher equivalent URLs |
| 15 | SEO metadata + hreflang on all money pages |
| 16 | Testimonial attribution upgrade |
| 17 | Business overview: primary CTA for quote |

### P2 — Polish (Week 3)

| # | Task |
|---|------|
| 18 | Case studies hub (minimum 2) |
| 19 | Sector pages (minimum PME + écoles) or remove nav |
| 20 | Partner logo strip with permissions |
| 21 | Header keyboard accessibility |
| 22 | Mobile sticky CTA on money pages |
| 23 | Mobile click-to-call |
| 24 | Server-side `lang`/`dir` |
| 25 | GA4 conversion events |

### P3 — Post-launch

| # | Task |
|---|------|
| 26 | Blog + FAQ hub |
| 27 | WhatsApp business link (if used) |
| 28 | Live chat evaluation |
| 29 | A/B test CTA copy |

---

## Visual reference — what to aim for

```
┌─────────────────────────────────────────────────────────┐
│ [LOGO]  Solutions ▾  Formation ▾  …     FR|EN|AR  [Devis]│  ← Navy, real logo
├─────────────────────────────────────────────────────────┤
│  HERO: Professional photo (team/classroom/NOC)          │
│  Headline + 2 CTAs (equal division weight)              │
├─────────────────────────────────────────────────────────┤
│  White sections · bordered cards · no gradient fills    │
│  Real client logos (grayscale) · sourced statistics      │
├─────────────────────────────────────────────────────────┤
│  Terminal CTA: dual cards + phone + email               │
├─────────────────────────────────────────────────────────┤
│  Footer: working links only · full NAP · legal          │
└─────────────────────────────────────────────────────────┘
```

**Avoid:**

```
┌──────────────────────────────────────────┐
│ [S] SYNET                                │
│  🎨 Gradient boxes where photos go       │
│  ✨ Staggered fade on every element      │
│  📊 "99.5%" with no source               │
│  🔗 Contact → 404                        │
└──────────────────────────────────────────┘
```

---

## Sign-off checklist

Before public launch, confirm:

- [ ] Zero 404s from header, footer, or homepage CTAs
- [ ] Forms persist leads and send confirmation
- [ ] Real logo, phone, address on every page + schema
- [ ] Legal pages live
- [ ] No gradient-only hero/service/course visuals
- [ ] Statistics and partner claims verified or removed
- [ ] Language switcher preserves page context
- [ ] 404 localized (fr, en, ar)
- [ ] Lighthouse: Accessibility ≥ 90 on home + 1 service + 1 course
- [ ] Manual RTL pass on Arabic locale
- [ ] Privacy consent on all lead forms

---

## Document changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-06-08 | Initial pre-launch UX/UI audit |

---

*End of audit — remediate P0 items before any public launch or ad spend.*
