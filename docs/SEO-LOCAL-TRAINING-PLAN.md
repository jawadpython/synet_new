# SYNET — Local SEO plan (training #1 Casablanca)

**Goal:** rank as high as possible for training searches in Casablanca / Morocco, especially French queries, without breaking the live site.

**Reality:** nobody can guarantee Google #1. Rankings come from relevance, reviews, Google Business Profile, links, and unique content. This plan uses every lever we control. Off-site work (GBP, reviews, citations) is as important as the website.

**Primary market:** French. English and Arabic follow the same structure, they are not the first target.

## Status

| Phase | State |
|---|---|
| 0 — NAP, 404s, GSC/GBP | **Website done.** Phone locked. Dead URLs redirect. You still need Search Console + Google Business Profile + reviews. |
| 1 — On-page training | **Website done.** Hub title targets “formation informatique Casablanca”. FAQ + ItemList schema. Unique Casablanca copy on each course. |
| 2 — Schema | **Website done.** EducationalOrganization + Course offers (3 niveaux) + CourseInstance Casablanca. |
| 6 — Technical | **Partly done.** OG images on home/hub/courses. Logo keeps `width: auto`. |
| 3–5 | Blog and Google Business Profile still later / off-site. |

---

## Do not break the website

Every website change in this plan must follow these rules:

- Keep the homepage as **hero + stats + formations**. Do not put extra marketing sections back.
- Do not invent a street address. Use **Casablanca, Maroc** until a real street exists.
- Keep NAP identical everywhere: **SYNET**, **+212 6 18 56 34 45**, **contact@synet.ma**, **Casablanca**.
- Do not change training prices, enrollment, or admin CMS as part of SEO.
- Do not add heavy widgets, chat scripts, or extra analytics that slow pages.
- Reuse existing templates (PageHero, CourseCard, FAQ, JsonLd). No new visual system.
- Ship in small PRs. After each phase, check home, catalog, one course, contact, and enroll.
- If a page is not ready (empty blog, thin content), do not link to it from the nav.

---

## Where we are today

Already in place:

- Canonical host `https://www.synet.ma`, sitemap, robots, hreflang, geo meta.
- LocalBusiness JSON-LD, Course JSON-LD, FAQ JSON-LD on some pages.
- Training hub + 7 course pages + enrollment (noindex).
- GA4 and Search Console verification env var.

Gaps that block training rankings:

| Gap | Why it hurts |
|---|---|
| Footer/CMS phone can differ from NAP (`6 30 09 74 63` vs `6 18 56 34 45`) | Google treats this as two businesses |
| Nav links to `/ressources/blog` but there is no blog page | 404s waste crawl and look unfinished |
| Training hub title does not include “Casablanca” / “formation informatique” | Weak match for the main queries |
| Course pages are short and similar | Google has little unique text to rank |
| Course schema has no Casablanca location, dates, or language | Weaker rich results |
| No category landing pages (CCNA, Linux, cyber…) | Hub tries to rank for too many queries at once |
| Only 2 training FAQs | Missed FAQ rich results |
| Mentions légales still have `[à compléter]` | Trust / E-E-A-T |
| Google Business Profile + reviews are off-site | Local pack is mostly GBP, not the website |
| No real street address | Map pack is harder until you add one |

---

## Queries to win (French first)

Work these in order. Each query should have **one** best page.

### Money queries (local pack + organic)

1. `formation informatique Casablanca`
2. `centre de formation informatique Casablanca`
3. `formation CCNA Casablanca` / `formation réseau Casablanca`
4. `formation Linux Casablanca`
5. `formation cybersécurité Casablanca`
6. `formation cloud Casablanca`
7. `formation Microsoft Casablanca`
8. `formation SAP Casablanca`

### Supporting queries

- `formation professionnelle IT Casablanca`
- `inscription formation informatique Casablanca`
- `prix formation CCNA Casablanca`
- `formation informatique Maroc`

**Best page for each**

| Query cluster | Best page |
|---|---|
| formation informatique / centre de formation Casablanca | `/fr/centre-formation` |
| CCNA / réseaux | `/fr/centre-formation/formation-reseaux` |
| Linux | `/fr/centre-formation/formation-linux` |
| Cybersécurité | `/fr/centre-formation/formation-cybersecurite` |
| Cloud | `/fr/centre-formation/formation-cloud` |
| Microsoft | `/fr/centre-formation/technologies-microsoft` |
| SAP | `/fr/centre-formation/formation-sap` |
| Brand SYNET | Homepage + GBP |

Do not create extra URLs that cannibalize these (no second “CCNA Casablanca” page).

---

## Phase 0 — Fix crawl and NAP (do first)

**Owner + site. Do not skip.**

1. **One phone everywhere.** Force public footer/header/schema to NAP `+212 6 18 56 34 45`. If Firestore contact still has the old number, update it in admin or stop it from overriding NAP.
2. **Search Console.** Property `https://www.synet.ma`, sitemap `https://www.synet.ma/sitemap.xml`. Confirm coverage, not only “submitted”.
3. **Kill 404s.** Remove Blog from the nav until articles exist, or add a real blog index. Same for any “coming soon” URL linked in the header.
4. **Complete mentions légales** with real company name, host, and director (user provides the legal text).
5. **Google Business Profile** (user, not code):
   - Category: *Centre de formation* (primary), *Société de services informatiques* (secondary).
   - Name: SYNET
   - Phone / site / hours identical to the website
   - Description with “formation informatique Casablanca” + the 7 programs
   - Photos of classroom / lab / team
   - Ask every student for a Google review (this is the #1 local-pack lever)

No street address in schema until you have a real one. When you do, add it to NAP, GBP, and the site in the same week.

---

## Phase 1 — On-page training SEO (website, safe)

Copy and metadata only. Same layout.

### Training hub `/fr/centre-formation`

- Title: `Formation informatique Casablanca | Centre SYNET`
- Description: include CCNA, Linux, cybersécurité, cloud, Casablanca, phone.
- H1 can stay close to current, but the **first paragraph** must say: centre de formation IT à Casablanca, présentiel, 3 niveaux, which programs.
- Add a short “Pourquoi SYNET à Casablanca” block (location, lab, levels, phone). Keep it compact; do not clone the homepage.
- Add a training FAQ (6–8 questions) + existing `faqJsonLd`.
- Add `ItemList` JSON-LD of the 7 courses.

### Each course page

Unique 400–700 words in FR (then EN/AR), not the same intro with the name swapped:

- Who it is for in Casablanca / Morocco
- What Niveau 1 / 2 / 3 covers
- Duration, format (présentiel), next sessions
- Price by level (already on the page)
- Outcome / job use
- Local CTA: call / WhatsApp / inscription

Titles like: `Formation CCNA Casablanca | Réseaux Cisco — SYNET`

Keywords in metadata: course name + Casablanca + Maroc + niveau.

Admin already has `metaTitle` / `metaDescription` — fill them there so CMS stays the source of truth.

### Internal links

- Homepage formation cards → course pages (already).
- Each course → hub + 2 related courses (already).
- Hub → contact + inscription.
- Footer training links stay; they are good crawl paths.

---

## Phase 2 — Schema (website, safe)

Upgrade, do not replace, current JSON-LD.

- Provider: `EducationalOrganization` + `LocalBusiness` (same NAP / geo).
- `Course` with `hasCourseInstance`: Casablanca, présentiel, start/end dates, language `fr`.
- Offers: 3 `Offer` objects (Niveau 1 / 2 / 3) instead of only AggregateOffer.
- `areaServed`: Casablanca, Casablanca-Settat, Maroc.
- Training hub: `ItemList` of courses.
- Hub FAQ: `FAQPage`.

Validate with Google Rich Results Test after deploy. If a type fails, keep the old Course schema.

---

## Phase 3 — Stronger training URLs (only if Phase 1 is live)

Optional. Only if hub + 7 courses are unique and indexed.

- Do **not** add city landing spam (`/formation-casablanca-2`).
- Optional category anchors on the hub (`#reseaux`, `#linux`) are enough at first.
- If Google still lumps all courses together, add **one** extra page:  
  `/fr/centre-formation` remains the money page; do not split “formation informatique Casablanca” onto a new URL.

---

## Phase 4 — Content that earns links (blog, later)

Only after Phase 0–1. Empty “coming soon” blog is worse than no blog.

Publish real articles (FR), one URL each, linked from Resources:

1. Combien coûte une formation CCNA à Casablanca ?
2. CCNA vs formation réseau : que choisir à Casablanca ?
3. Formation Linux à Casablanca : programme et débouchés
4. Comment s’inscrire à une formation informatique à Casablanca
5. Cybersécurité : formation courte vs diplôme au Maroc

Each article: 800+ words, Casablanca in title, link to the matching course, no duplicate of the course page.

Use the existing site copy styles. Add `/ressources/blog` only when the first 3 articles exist.

---

## Phase 5 — Off-site local (user must do)

Website work cannot win the map pack alone.

- GBP: posts every week (next session, photos, “inscription ouverte”).
- Reviews: 30+ Google reviews mentioning formation / Casablanca / the course name.
- Citations with **identical NAP**: PagesJaunes Maroc, Telecontact, Facebook, LinkedIn, Instagram.
- Partners / schools: one dofollow link each if possible.
- WhatsApp Business name + address matching the site.

---

## Phase 6 — Technical (do not regress UX)

- Unique `og:image` per course (current course photos are fine).
- Fix logo aspect-ratio warning (width/height).
- Keep enrollment noindex.
- Keep `dynamic = force-dynamic` if CMS must stay live; if a course page is static-friendly later, only cache after CMS publish is proven.
- Images: keep `loading="lazy"` below the fold; do not swap to a new image CDN in this project unless Lighthouse LCP is bad.
- No new third-party scripts.

---

## How we measure (not vanity)

In Google Search Console (3–6 months):

- Impressions for the 8 money queries
- Average position for `formation informatique Casablanca` and each `formation {topic} Casablanca`
- Index coverage of hub + 7 courses = 8 URLs (FR), no soft 404
- Clicks to `/fr/centre-formation` and course pages

In GA4:

- Sessions to training hub / course / inscription
- Calls / WhatsApp clicks if we add event tracking later (optional, not required for ranking)

**#1 is the target, not a week-1 promise.** Local training queries in Casablanca often take months plus reviews.

---

## Implementation order

| Step | What | Who | Break risk |
|---|---|---|---|
| 0a | Unify phone to NAP | Dev + admin CMS | Low |
| 0b | Remove broken Blog nav link | Dev | Low |
| 0c | GSC sitemap + GBP | You | None |
| 1a | Hub title, intro, FAQ, ItemList | Dev | Low |
| 1b | Course titles + unique FR copy via admin | Dev + you | Low |
| 2 | Richer Course / Organization schema | Dev | Low (test rich results) |
| 4 | Blog only after 3 real articles | Dev + you | Medium if empty |
| 5 | Reviews + citations | You | None |

---

## What you need to send before we code Phase 1 copy

- Confirm the public phone is **only** `+212 6 18 56 34 45`
- Legal names for mentions légales
- Street address **only if it is real**
- 2–3 sentences per formation that a trainer would actually say (Niveau 1 vs 2 vs 3)
- Whether Google Business Profile already exists (share the listing URL)

When this file is approved, implement **Phase 0 then Phase 1** only. Do not start the blog or new URL types until those are indexed.
