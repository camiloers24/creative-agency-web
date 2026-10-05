# Change checklist and gotchas

Read this before changing the site. Most items come from mistakes or surprises that already happened.

## Before you start

- [ ] Read `DESIGN-SYSTEM.md` ("Decisions made with the client") and `CONTENT.md`.
- [ ] Desktop is approved. If the task is mobile, change only un-prefixed (or `max-md:`) classes. If it is desktop, check mobile did not change.

## Gotchas

1. **Fixed navbar covers content.** Page sections need top padding (`pt-28 md:pt-36` in card shells). Anchored sections use `scroll-mt-32` (128px); the bar's bottom edge is ~105px on desktop. If the navbar gets taller, increase `scroll-mt-*` in `src/app/services/page.tsx`.
2. **`/services#id` links.** The ids in `services/data.ts` are linked from `home/ServicesGrid.tsx`. Keep them in sync.
3. **`<RedGrainFilter />` only once per page.** It defines SVG filters with fixed ids; duplicates break them. `.red-blur-word` needs it on the page.
4. **`Reveal` wraps layout.** If a grid/flex child gets wrapped in `<Reveal>`, move its grid/flex/width classes onto `Reveal`. `Reveal` is a client component; the content inside can stay server components.
5. **Hidden-until-scrolled content.** `Reveal` content starts at `opacity: 0` and appears when scrolled into view. Static screenshots (or headless captures without scrolling) show it missing or half-faded. This is expected: scroll the page before judging it.
6. **Horizontal scroll rows.** If you add `snap-x` rows, add `scroll-pl-*` equal to the left padding, or the first item snaps flush to the screen edge.
7. **`next/image` with `fill`** needs a positioned parent (`relative`) with a size. Remote hosts must be in `next.config.ts`.
8. **Lint rules that bite:** `react/no-unescaped-entities` (write `&apos;` in JSX text, e.g. `Creatives&apos; Lab`) and `react-hooks/set-state-in-effect` (do not call `setState` synchronously inside `useEffect`; derive state instead, like `Navbar.tsx` does).
9. **Dark logo.** `frame-logo.svg` has white letters and disappears on cream cards; use `frame-logo-dark.svg` there.
10. **Accents in Anton titles** (e.g. `GONZÁLEZ`) collide with the line above at `leading-[0.85]`; use a larger leading.
11. **Nested `<main>`** (known issue): the layout and every page render `<main>`. See `ARCHITECTURE.md`.
12. **Line-ending warnings** (`LF will be replaced by CRLF`) when committing on Windows are harmless.
13. **Anything fixed must stay under the overlay's z-index** unless it should cover the menu (see z-index list in `ARCHITECTURE.md`).

## Verification

```bash
npm run lint    # must print no errors
npm run build   # must finish; it type-checks all routes
```

Then check in a browser (`npm run dev`):

- [ ] `/`, `/who-are-we`, `/services`, `/contact` at ~1440px and ~390px: no horizontal scroll, nothing cut off.
- [ ] Scroll each page top to bottom so every `Reveal` block appears.
- [ ] Mobile: open `( MENU )`, navigate, the menu closes by itself.
- [ ] Click each Home service card and each `/services#id`: the section title lands below the navbar.
- [ ] Contact: email and Instagram links work.
- [ ] Browser console has no errors.

Tip: headless Edge cannot go below 500px wide with `--window-size`; use a scripted browser (Playwright with `channel`/`executablePath` for Edge) or the DevTools device toolbar for 390px.

## Git

- `main` is deployed on Vercel. Anything pushed to `main` goes live; test first.
- `v1-dark-design` is the previous design. Do not delete or rebase it.
- `CLAUDE.md` and `.claude/` are git-ignored (local assistant files).
- Commit messages: short, English, conventional prefix (`feat:`, `fix:`, `docs:`, `chore:`).
