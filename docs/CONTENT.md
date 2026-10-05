# Content (source of truth)

Everything shown on the site must come from this list or from FRAME itself. Do not invent copy, services, names or numbers. If something is missing, leave a clearly marked placeholder and ask the client.

## Brand

- Name: **FRAME** — "Frame Creatives Lab" / "Creatives' Lab".
- Description: 360° creative agency based in **Miami and Mexico City**.
- Assets: `public/frame-logo.svg` (red F + white RAME), `public/frame-logo-dark.svg` (red F + dark RAME, for light cards), `public/frame-icon.svg` (red F icon), favicon `src/app/icon.svg`.
- Metadata (`layout.tsx`): title `FRAME | Creatives' Lab`, description `Creative Agency based in Miami and Mexico City`.
- Footer legal line: `© 2026 FRAME CREATIVES LAB — ALL RIGHTS RESERVED`.

## Contact

- Email: `HELLO@FRAMECREATIVESLAB.COM`
- Phones: `+1 (305) 744-6470`, `+52 (55) 7553-7416`
- Instagram: `@framecreativeslab` — https://instagram.com/framecreativeslab
- Behance / LinkedIn: no URLs yet (not shown anywhere).

## Home copy (Spanish line is intentional)

- "THE FRAME" / "No somos una agencia. Somos el lente que enfoca la cultura, la moda y el sonido en una sola visión técnica." / "Know the lab →"
- "Core Services" / "START THE REVOLUTION" / "Work with us"
- Labels: "Creatives' Lab", "Miami / Mexico City", "Expertise".

## Who Are We

- Title: "WHO ARE WE?"; line: "FRAME IS A 360° CREATIVE AGENCY BASED IN MIAMI AND MEXICO CITY."
- Paragraphs (Spanish): "Fusionamos moda, música, arte y estrategia para crear conceptos visuales con alma que posicionan a artistas y marcas en el centro de la cultura." and "Desde el styling hasta el evento. Desde la campaña hasta el contenido. Cada proyecto es una experiencia dirigida con visión artística y una red de talentos lista para hacerlo realidad."
- Team:
  - **Daniela Cerquera** — `@danicer21` — Creative & Event Producer | Branding Experiences & Art Direction
  - **Daniela González** — `@nielazalab` — Creative Director & Fashion Stylist | PR & Brand Collaborations | Event Curator
- "Location: Miami and Mexico City." / "HQ"

## Contact page

"READY TO WORK WITH US?" / "Email us" / "Call us" / "Follow us".

## Services (`src/components/services/data.ts`)

| id (anchor) | Title | List |
| --- | --- | --- |
| `release-parties` | Release Parties | Creative Direction, Art Direction, Production, Design, Venue |
| `events` | Events | Production, Art Design, Logistics, Bookings |
| `branding` | Branding | Visual Concept, Brand Book, For Artist, Identity |
| `art-direction` | Art Direction | Art Direction, Art Assisting, Decoration, Renders |
| `fashion-styling` | Fashion Styling | Celebrity Styling, Fashion Editorial, Fashion Consulting |
| `styling-videoclips` | Styling Videoclips | Fashion Concept, Fashion Design, Brand Hunting |
| `pr-fashion` | PR Fashion Brands | Brand Collabs, Event & Brand PR, Styling for Events |
| `social-media` | Social Media | Web Design, Video Edition, Social Media Strategy |
| `artist-experiences` | Artist Experiences | Marketing Campaigns, Experience Activations, Brand/Music Experiences |
| `gifting-pr-kits` | Gifting PR Kits | Merch, PR Kits, Personalized Gifts |

Order on `/services` is the order of this table (it is the original order of the site).

The Home "Core Services" row shows 5 of them, in this order and numbered `(001)`–`(005)`: Styling Videoclips, Gifting & PR Kits, Art Direction, Release Parties, Artist Experiences (same order as the original home page). Each links to `/services#<id>`.

## Adding / renaming a service

1. Edit `services/data.ts` (new object, or change `title` / `items`).
2. If it appears on Home, update the list in `home/ServicesGrid.tsx`.
3. Never change an `id` without updating every link to `/services#<id>`.
4. Update this file.
