# Architecture Overview

The site uses a single-page Next.js App Router setup with static export enabled. It is organized as anchored editorial sections with a simple, repeatable structure: title, separator, and content block.

## Structure
- `app/page.tsx` contains the full one-page experience
- `components/layout/` contains nav, shell, and footer
- `components/ui/` contains lightweight motion and hero helpers
- `content/` contains curated profile content and navigation data
- `public/` contains static assets including the hero portrait

## Page Composition
- Hero with portrait and primary CTA
- Short intro framing
- Experience section
  - Only `Head of Product` is featured
  - All previous roles use compact consistent rows
- Education section with the same editorial row logic
- `How I think` as a stacked principle list
- Connect section with LinkedIn as the main CTA

## Rendering Strategy
- Static generation for the full site
- Server components by default
- Client components only where motion or anchored nav behavior improves the experience

## Motion Layer
- Motion is a core part of the experience
- Use subtle reveal motion, soft hover polish, and restrained active navigation feedback
- Avoid gimmicks, heavy animation systems, and startup-marketing effects
- Respect `prefers-reduced-motion`

## GitHub Pages Constraints
- `output: "export"`
- `trailingSlash: true`
- unoptimized images for static hosting
- no API routes
- no middleware
- no backend features
- no runtime SSR requirements

## Non-Goals
- Multi-page structure
- Writing archive UI
- Component gallery feel
- Server-backed features
