# Andrea Milan Website Project Guide

## Project Goal
- Build a single-page personal website for Andrea Milan that feels like an editorial biography rather than a resume or SaaS landing page.
- Prioritize elegance, narrative flow, and strong visual authorship before any advanced functionality.
- Present Andrea as a thoughtful product leader with taste, clarity, and a credible international track record.

## Experience Principles
- Dark mode is the default visual foundation.
- The site should feel personal, atmospheric, and typography-led.
- Use Material Design 3 as a systems guide for spacing, motion, shape, and elevation, but not as a literal visual template.
- Prefer lighter reading effort, selective emphasis, and asymmetry over repeated equal-weight components.

## Content Rules
- Use the provided LinkedIn PDF as the primary source for professional history and education.
- Include all job experiences and all education entries.
- Curate and summarize; never mirror LinkedIn bullet-for-bullet.
- Keep all visible site copy in first person.
- Keep writing coverage to a light Medium mention and link rather than an article archive.
- Do not publish Andrea's email address or add a contact form.
- Only publish a downloadable CV if a sanitized copy exists with no private email address.

## Architecture Rules
- Single-page structure with anchored sections.
- Page structure: Hero, short intro, Experience, Education, How I think, Connect, Footer.
- Static export only, with GitHub Pages compatibility from day one.
- Server components by default; minimal client-side JavaScript.
- Prefer reusable section primitives and content modules over page-specific complexity.
- Remove or avoid routes that reintroduce a multi-page marketing-site feel.
- Prioritize mobile readability and scanability in every iteration.

## Navigation And CTA Rules
- Use a compact anchored navigation: Intro, Experience, Education, How I think, Connect.
- Keep CTA density very low.
- One main LinkedIn CTA near the top.
- Keep Medium only as a subtle secondary link in hero, connect, or footer.
- One calm connection CTA at the bottom.

## Workflow Rules
- Keep docs aligned with the current product direction.
- Choose editorial clarity over feature growth.
- Avoid repeated chips, pills, cards, and boxed modules unless they clearly improve hierarchy.
- Use motion and interaction to add polish, not noise.
- When tradeoffs appear, prioritize elegant motion, brevity, scanability, mobile quality, speed, and GitHub Pages compatibility.
