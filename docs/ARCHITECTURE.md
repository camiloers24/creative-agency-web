# Architecture

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4. All pages are statically prerendered (`next build` lists every route as `○ Static`). There is no backend, database or environment variables.

## Routes

| Route | File | Composed of |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | `HeroCard`, `ServicesGrid`, `CtaSection` (`src/components/home/`) |
| `/who-are-we` | `src/app/who-are-we/page.tsx` | `WhoAreWe`, `HQ` |
| `/services` | `src/app/services/page.tsx` | `ServicesHero` + one `ServiceSection` per entry in `services/data.ts` |
| `/contact` | `src/app/contact/page.tsx` | inline (single file) |

`src/app/layout.tsx` wraps every page with `Navbar` and `Footer`, loads the fonts and sets the metadata (`FRAME | Creatives' Lab`).

## Components

| File | Type | Notes |
| --- | --- | --- |
| `Navbar.tsx` | client | Fixed floating bar. On `/` it is transparent over the hero card until the page is scrolled 50px (or the menu is open); on other pages it is always a solid cream bar. Mobile: `( MENU )` button + full-screen charcoal overlay. The menu closes on navigation because the open state stores the pathname it was opened on (`openedAt === pathname`) instead of calling `setState` inside an effect. |
| `Footer.tsx` | server | Cream card, links, giant `FRAME` + `CREATIVES' LAB` wordmark. |
| `Reveal.tsx` | client | `framer-motion` fade + rise when the block enters the viewport (once). Renders a plain `div` when the user prefers reduced motion. Put layout classes (grid placement, widths, offsets) on `Reveal` itself, not on its child. |
| `RedGrainFilter.tsx` | server | Hidden SVG with two filters: `#redGrain` (desktop) and `#redGrainSm` (mobile, softer). Used by the `.red-blur-word` class. Mount it **once per page** (ids must be unique). Currently only `HeroCard` mounts it. |
| `marks.tsx` | server | Hand-drawn SVG marks: `CircleHighlight`, `Scribble`, `XMark`, `Heart`, `Paperclip`. |
| `services/data.ts` | data | Content of the 10 services (see `CONTENT.md`). |
| `services/ServiceSection.tsx` | server | One layout for all services. `tone: 'paper' | 'charcoal'` picks cream or dark. `variant: 'film'` renders the two Kodak film strips (Art Direction only). Images: 1 image = wide photo; 2+ = grid (2 columns on mobile, one column per image on desktop with staggered offsets). |

## Layering (z-index)

`Navbar` bar `z-[70]`, mobile menu button `z-[80]`, mobile overlay `z-[60]`, page content `z-10`. If you add something fixed, keep it below 60 unless it must cover the nav.

## Images

All photos are Unsplash placeholders loaded through `next/image`. Remote hosts must be listed in `next.config.ts` (`images.unsplash.com` only). Local files go in `public/`.
The same Unsplash photo is reused in several files by its URL (for example `photo-1516035069371-29a1b244cc32` appears in `HeroCard.tsx`, `CtaSection.tsx`, `ServicesGrid.tsx` and `services/data.ts`), and the Home service cards do not use the same photos as the matching sections in `services/data.ts`. When replacing a photo, `grep -rn "photo-<id>" src` first and update every place that uses it.

## Known issues

- **Nested `<main>`:** `layout.tsx` wraps `children` in `<main>` and every page renders its own `<main>`. Invalid HTML; fix by changing the page-level `<main>` elements to `<div>` (or removing the one in the layout).
- **Placeholder photos:** the hero background (`photo-1543857778-c4a1a3e0b2eb`) was never checked for suitability as a black-and-white portrait.
- **Footer:** only Instagram is listed; Behance and LinkedIn were removed because there are no URLs yet.
- **No tests:** the project has no automated tests. Verification is `npm run lint`, `npm run build` and manual / browser checks (see `CHANGE-CHECKLIST.md`).
