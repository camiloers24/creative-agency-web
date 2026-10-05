# Design system

The design follows three client references while using the FRAME brand. Desktop was reviewed and approved by the client's contact ("pristine"); mobile was reworked against the references afterwards.

## References

- **Juanma JMSE:** light rounded card floating over a full-bleed photo; spaced thin nav; staggered captioned photo rows; giant wordmark at the bottom.
- **Gills:** huge blurred red wordmark with grain behind small crisp text; heavy condensed black type; hand-drawn red circle / X / heart / scribble; rounded card over a black-and-white face photo.
- **Mzia:** charcoal background, cream cards, red blocks, polaroids with paperclips, photo strips, monospace captions; on mobile, large stacked cards with a caption row.

## Tokens (`src/app/globals.css`, `@theme inline`)

| Token | Value | Use |
| --- | --- | --- |
| `frame-red` | `#D80E0E` | Brand red. Never use another red. |
| `ink` | `#0d0d0d` | Text and dark fills on light cards. |
| `charcoal` | `#1b1c1b` | Dark sections (Mzia). |
| `paper` | `#f6f4ef` | Cards (`.paper-card`). |
| `cream` | `#efebe2` | Spare neutral. |
| `font-display` | Anton | Titles. Always uppercase, `leading-[0.85]` (names with accents need more, e.g. `leading-[1.08]`). |
| `font-mono` | JetBrains Mono | Labels, captions, lists, nav. |
| `font-script` | Reenie Beanie | Handwritten captions on polaroids only. |

Tailwind utility names follow the tokens: `bg-frame-red`, `text-ink`, `bg-charcoal`, `font-display`, etc.

## Reusable classes

- `.paper-card`: cream textured card background.
- `.polaroid`: white frame + shadow (add rotation and a paperclip yourself).
- `.red-blur-word`: blurred, grainy red text (requires `<RedGrainFilter />` on the page).
- `.no-scrollbar`: hides scrollbars.

## Page shell patterns

- **Card over photo** (home hero, contact, who-are-we, services hero): `section` with `p-3 md:p-6`, a `fill` photo (`grayscale opacity-80`), then a `paper-card ... rounded-3xl max-w-[1400px]` with `pt-28 md:pt-36` so content clears the fixed nav.
- **Dark section:** `bg-charcoal text-white`, polaroids, mono captions.
- **Photo rows:** `grayscale` that turns to color on hover; captions in `font-mono`.

## Decisions made with the client (do not undo without asking)

1. **No glow / halo behind titles.** An earlier version put a blurred red copy behind every title; the client rejected it as "not in the references". Titles are crisp ink (light sections) or white (dark sections). The only blurred red element is the big `FRAME` wordmark in the home hero, which comes from the Gills reference. Do not add glow, `drop-shadow` or blurred duplicates to other titles.
2. **No invented copy.** Use only text, services and contact data FRAME already had (see `CONTENT.md`). Example of a past mistake: a made-up `.CLAB` footer wordmark, replaced with `CREATIVES' LAB`.
3. **Grayscale photos** by default so the red and black stay the focus.
4. **Mobile and desktop are separate designs.** Mobile classes are the un-prefixed ones; desktop starts at `md:` (768px). When changing mobile, only touch un-prefixed classes (or `max-md:`) so desktop stays identical.

## Mobile specifics

- Hero red wordmark: `text-[33vw]`, stretched with `max-md:scale-y-[1.5]`, softer filter (`#redGrainSm`). At `md:` it uses the strong blur.
- Home services: stacked white cards (no horizontal carousel).
- Service sections: 2-column photo grid; an odd last photo spans both columns.
- Navigation: `( MENU )` button and a full-screen overlay.
