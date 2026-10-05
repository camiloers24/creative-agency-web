# Frame Creatives Lab — Agency Website

Website for **FRAME Creatives Lab**, a 360° creative agency based in Miami and Mexico City.
Pages: Home, Who Are We, Services and Contact.

## Tech stack

| Area | Tool |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| UI | React 19, TypeScript |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) (theme tokens in `src/app/globals.css`) |
| Animation | [Framer Motion](https://www.framer.com/motion/) (scroll reveal only) |
| Fonts | `next/font/google`: Anton (display), JetBrains Mono (labels), Reenie Beanie (handwritten accents), Geist |
| Deployment | [Vercel](https://vercel.com/) (from `main`) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # ESLint
npm run build    # production build (also type-checks)
npm run start    # serve the production build
```

## Design

The design follows three client references, using the FRAME brand:

- **Juanma JMSE** — light rounded card floating over a full-bleed photo, spaced top nav, captioned photo rows, giant wordmark at the bottom.
- **Gills** — huge blurred red wordmark with grain, heavy condensed type, hand-drawn red marks (circle, X, heart, scribble).
- **Mzia** — dark charcoal sections, cream cards, polaroids with paperclips, photo strips, monospace captions, stacked cards on mobile.

Brand tokens (`src/app/globals.css`): red `#D80E0E` (`frame-red`), `ink`, `charcoal`, `paper`, `cream`.
Utility classes: `.paper-card` (cream textured card), `.polaroid`, `.red-blur-word` (blurred red wordmark; softer blur on mobile), `.no-scrollbar`.

> The previous dark version of the site is kept on the `v1-dark-design` branch.

## Project structure

```
src/
  app/
    layout.tsx            # fonts, Navbar, Footer
    page.tsx              # Home
    who-are-we/page.tsx
    services/page.tsx     # renders ServicesHero + one ServiceSection per service
    contact/page.tsx
    globals.css           # Tailwind import, theme tokens, utilities
  components/
    Navbar.tsx            # floating cream bar; "( MENU )" overlay on mobile
    Footer.tsx
    WhoAreWe.tsx, HQ.tsx  # Who Are We page sections
    Reveal.tsx            # fade + rise on scroll (skipped for prefers-reduced-motion)
    RedGrainFilter.tsx    # SVG blur + grain filters used by the red wordmark
    marks.tsx             # hand-drawn SVG marks (circle, scribble, X, heart, paperclip)
    home/                 # HeroCard, ServicesGrid, CtaSection
    services/
      data.ts             # content of every service (title, list, images, tone)
      ServiceSection.tsx  # shared layout for all services (+ film-strip variant)
      ServicesHero.tsx
public/
  frame-logo.svg          # wordmark, white letters
  frame-logo-dark.svg     # wordmark, dark letters (used on light cards)
  frame-icon.svg          # red F icon
```

## Editing content

- **Services:** edit `src/components/services/data.ts`. Each entry has `id`, `title` (lines), `items`, `images`, `tone` (`paper` or `charcoal`) and an optional `variant: 'film'`.
  The `id` is the anchor used by links such as `/services#art-direction`; the Home services row (`src/components/home/ServicesGrid.tsx`) links to these ids, so keep both in sync.
- **Images:** all photos are currently Unsplash placeholders. Remote images are allowed only from `images.unsplash.com` (`next.config.ts`); add the new host there if you use another one, or put files in `public/`.
- **Footer social links:** only Instagram is listed. Add Behance / LinkedIn in `src/components/Footer.tsx` when the URLs are available.

## Documentation

Read these before making changes:

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — routes, components, z-index, known issues
- [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) — tokens, patterns and decisions agreed with the client
- [`docs/CONTENT.md`](docs/CONTENT.md) — the source of truth for all copy, services and contact data
- [`docs/CHANGE-CHECKLIST.md`](docs/CHANGE-CHECKLIST.md) — gotchas and how to verify a change

## Branches

- `main` — current design (deployed on Vercel).
- `v1-dark-design` — previous dark design, kept as a backup.
