# Architecture Overview

The site uses a single-page Next.js App Router setup with static export enabled. It is composed as a sequence of editorial sections inside one shared content frame after the hero.

## Structure
- `app/page.tsx` contains the full one-page experience
- `components/layout/` contains the site shell, top bar, and footer
- `components/ui/` contains the portrait and motion helpers
- `content/` contains curated profile content and site metadata
- `public/images/` contains the active portrait assets

## Page Composition
- Hero with portrait, primary CTA, and rotating multilingual greeting
- Overview as a short positioning bridge
- Experience with one featured current role and compact previous roles
- Education as a lighter secondary section
- Principles as a concise authored positioning section
- Get in touch with LinkedIn as the main CTA and Medium as a secondary link

## Layout System
- The hero uses a distinct composition with text left and portrait right
- All main sections after the hero share one consistent outer content frame
- Section titles, rules, and content boundaries align to the same horizontal system
- Mobile layouts preserve the same overall frame while adjusting metadata and spacing for scanability

## Rendering Strategy
- Static generation for the full site
- Server components by default
- Client components only where motion or top-bar behavior improves the experience

## Motion Layer
- Motion is part of the product experience, not decorative garnish
- Use subtle reveals, refined hover states, soft portrait motion, and a restrained greeting rotation
- Respect `prefers-reduced-motion`
- Avoid gimmicks and startup-marketing animation patterns

## Performance and Assets
- The hero portrait uses a purpose-sized optimized asset for static hosting
- Images remain compatible with GitHub Pages through `images.unoptimized`
- Typography, spacing, and interaction layers have been refined for mobile readability and perceived smoothness

## GitHub Pages Constraints
- `output: "export"`
- `trailingSlash: true`
- unoptimized images for static hosting
- no API routes
- no middleware
- no backend features
- no runtime SSR requirements

## Deployment
- Hosted on GitHub Pages
- Deployed via GitHub Actions
- One active deployment workflow builds `out/` and publishes it to Pages
