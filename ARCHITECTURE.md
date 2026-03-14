# Architecture Overview

The site uses a single-page Next.js App Router setup with static export enabled. Content is stored in TypeScript modules and rendered through a small set of reusable sections with a consistent editorial pattern: title, separator, then content.

## Structure
- `app/page.tsx` contains the anchored one-page experience
- `components/layout/` contains the shell, nav, footer, and transitions
- `components/ui/` contains only lightweight shared UI helpers
- `content/` holds curated profile and lightweight writing content

## Rendering Strategy
- Static generation for the full site
- Server components by default
- Client components only where motion or active navigation improves the experience

## Visual System Strategy
- Dark mode by default
- Material Design 3 informs spacing, motion, and surface logic
- Typography and rhythm carry most of the hierarchy
- Use fewer containers with more intentional differences in scale and density
- Optimize for scanability and comfortable text measure on mobile

## Motion Strategy
- Smooth anchored scrolling
- Subtle reveal motion
- Light active nav feedback
- Restrained hover feedback
- Ambient background movement only if it stays extremely soft
- Respect `prefers-reduced-motion`

## GitHub Pages Constraints
- `output: "export"`
- `trailingSlash: true`
- unoptimized images for static compatibility
- no API routes, middleware, or runtime server features

## Non-Goals
- Multi-page IA
- App-like navigation chrome
- Repeated card galleries
- Heavy animation systems
- Server-backed features
