# Andrea Milan Personal Website

A dark, single-page editorial website for Andrea Milan, built as a fast static Next.js site for GitHub Pages. The project is designed to feel like a modern personal signature page: concise, mobile-friendly, and polished through restrained motion.

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

## Structure
- `app/` single-page route, layout, and global styles
- `components/` layout and lightweight UI primitives
- `content/` curated profile and writing content
- `public/` static Pages-compatible assets
- `.github/workflows/` deployment automation

## Current Product Shape
- One-page anchored navigation
- Hero, Intro, Experience, Education, How I think, and Connect sections
- Dark-mode default visual system
- Editorial timeline for the full career path
- Medium kept as a subtle secondary link rather than a standalone section
- First-person voice throughout
- Motion-led polish with restrained interactions

## Non-Goals
- Multi-page personal site architecture
- CMS integration
- Contact forms
- Backend features
- Dynamic blog engine
- Over-designed component galleries
