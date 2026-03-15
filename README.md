# Andrea Milan Personal Website

Andrea Milan's website is a live, dark, single-page editorial personal website built for GitHub Pages. It is designed to present Andrea as a product leader through a calm, premium, design-led experience rather than a SaaS portfolio or resume-style site.

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
- Static output is generated in `out/`

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
- Single-page, anchored editorial layout
- Dark mode by default
- Portrait-led hero with a rotating multilingual greeting
- One featured current role and compact previous roles
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
