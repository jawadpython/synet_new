# SYNET Training Center — Implementation Reference

> **Version:** 1.0  
> **Last updated:** 2026-06-08  

---

## Page structure

| Page | Public URL (FR) | Public URL (EN/AR) | Internal route |
|------|-----------------|--------------------|----------------|
| **Catalog hub** | `/fr/centre-formation` | `/en/training-center` | `/[locale]/training` |
| **Course detail** | `/fr/centre-formation/{slug}` | `/en/training-center/{slug}` | `/[locale]/training/[slug]` |
| **Enrollment** | `/fr/inscription-formation` | `/en/training-enrollment` | `/[locale]/training/enroll` |

Middleware rewrites public localized URLs to internal `/training` routes.

---

## File map

### Data layer
- `src/lib/training/types.ts` — Course, Category, Level types
- `src/lib/training/courses/{fr,en,ar}.ts` — Full course catalog per locale
- `src/lib/training/get-courses.ts` — Getters, search, filter
- `src/lib/training/paths.ts` — Localized URLs + middleware rewrite
- `src/lib/training/format.ts` — Date formatting

### Pages
- `src/app/[locale]/training/page.tsx` — Catalog hub
- `src/app/[locale]/training/[slug]/page.tsx` — Course detail
- `src/app/[locale]/training/enroll/page.tsx` — Registration form

### Components
- `CourseCatalog` — Search + category/level filters + results grid
- `CourseCard` — Catalog card with Apply CTA
- `CourseSidebar` — Sticky detail sidebar (price, schedule, Apply)
- `CourseThumbnail` — Category visual
- `EnrollmentForm` — Full registration form
- `TrainingBreadcrumb` — Hub → course navigation
- `CategoryNav` — Optional category chip nav (standalone)

### Form UI
- `Input`, `Select`, `Textarea`, `FormField`

---

## Course data model

Each course includes: `name`, `description`, `duration`, `level`, `schedule`, `instructor`, `price`, sessions, outcomes, prerequisites, plus `slug` and `category` for routing/filtering.

---

## Conversion UX

1. **Catalog** — Search, filters, results count, Apply on every card
2. **Detail** — Sticky sidebar with price + sessions + primary Apply CTA
3. **Enrollment** — Pre-filled course via `?course={slug}`, session selector, success state

---

## i18n

All UI strings in `dictionary.trainingPages` (fr/en/ar). Course content authored per locale in `courses/{locale}.ts`.
