# Andrea Milan Personal Website

A dark, single-page editorial personal website for Andrea Milan, built as a static Next.js site for GitHub Pages. The site is designed to feel personal, premium, calm, and modern, with concise content, a featured current role, and restrained motion polish.

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

## Deployment Target
- Production URL: `https://andreamilan.github.io/`
- Hosting: GitHub Pages
- Rendering model: fully static export

## Current Structure
- `app/` single-page route, layout, and global styles
- `components/` layout and lightweight UI primitives
- `content/` curated profile content and lightweight secondary-link data
- `public/` static assets including the hero portrait
- `.github/workflows/` deployment automation

## Current Product Shape
- Single-page anchored navigation
- Hero, Intro, Experience, Education, How I think, Connect, Footer
- Dark-mode default visual system
- Current role featured as the main career entry
- Medium kept as a subtle secondary link only
- No standalone Writing, About, or Contact pages
- First-person copy throughout
- Premium but restrained motion and interaction design

## Non-Goals
- Multi-page portfolio structure
- SaaS-style landing page patterns
- Article cards or writing archive UI
- Contact forms
- Backend features
- Server-dependent rendering
