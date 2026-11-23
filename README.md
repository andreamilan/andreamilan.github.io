# Andrea Milan Personal Website

Andrea Milan's website is a single-page editorial personal website built for GitHub Pages. It is designed to present Andrea as a product leader through a calm, premium, design-led experience rather than a SaaS portfolio or resume-style site.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion

## Local Setup
1. Run `npm install`
2. Run `npm run dev`
3. Open `http://localhost:3000`

## Build
- `npm run build`
- `npm run typecheck` checks TypeScript without building the site.
- Static output is generated in `out/`
- A monogram favicon and portrait-based social previews are included in the static export.

## Deployment
- Production URL: `https://andreamilan.github.io/`
- Hosting: GitHub Pages
- Deployment method: GitHub Actions
- Rendering model: fully static export

## Current Site Structure
1. Hero
2. Overview
3. Experience
4. Education
5. Principles
6. Get in touch
7. Footer

## Current Product Shape
- Warm cream styling with slowly shifting sage, peach, and lavender washes, forest-green accents, and rounded display typography
- Arched portrait on desktop and a stacked layout with an expandable navigation menu on mobile
- Single-page, anchored editorial layout
- Light palette with forest-green text and accents
- Portrait-led hero with a rotating multilingual greeting
- A staggered career timeline with the current role open and previous roles expandable
- Education separated from Experience
- LinkedIn as the primary CTA
- Medium as a secondary link only
- No standalone About, Writing, or Contact pages
- No email and no contact form

## Current Code Structure
- `app/` single-page route, layout, and global styles
- `components/layout/` shell, header, and footer
- `components/ui/` motion and hero helpers
- `content/` curated profile content and site metadata
- `public/images/` active portrait assets
- `.github/workflows/` GitHub Pages deployment automation

## Non-Goals
- Multi-page portfolio structure
- SaaS-style landing page patterns
- Article-card writing archive UI
- Backend features
- Server-dependent rendering
