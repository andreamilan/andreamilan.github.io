# Andrea Milan Website Project Guide

## Project Goal
- Maintain a personal website for Andrea Milan that feels premium, calm, personal, modern, and editorial.
- Position Andrea credibly for future product leadership opportunities.
- Prioritize clarity, hierarchy, motion quality, readability, and professional polish over feature expansion.

## Product Shape
- Single-page website with anchored sections.
- Dark mode is the default visual direction.
- Current page structure:
  - Hero
  - Overview
  - Experience
  - Education
  - Principles
  - Get in touch
  - Footer

## Content Rules
- All visible copy must be in first person.
- Tone should be professional, calm, sharp, and concise.
- Avoid third-person biography tone, resume-dump density, long explanatory blocks, and generic portfolio language.
- Keep the current role as the only featured experience entry.
- Keep previous roles compact, secondary, and action-led.
- Keep Education separate from Experience.
- Keep Principles as a concise positioning section for product leadership.
- Medium must remain a secondary link only.
- LinkedIn must remain the primary CTA.
- Do not publish Andrea's email address or add a contact form.

## Design Rules
- Keep the site editorial and design-led rather than SaaS-like or template-like.
- Preserve the hero portrait on the right.
- Keep one consistent section frame after the hero.
- Use section title, separator, and content as the primary organizing pattern.
- Maintain calm spacing, disciplined alignment, and clear visual hierarchy.
- Avoid component-gallery repetition, app-shell chrome, and unnecessary visual clutter.

## Motion Rules
- Motion quality is a core part of the experience.
- Motion should feel subtle, premium, restrained, and intentional.
- Hover states, reveals, and small transitions matter.
- The multilingual greeting below the portrait should remain understated.
- Always respect `prefers-reduced-motion`.

## Technical Rules
- Stack: Next.js App Router, TypeScript, Tailwind CSS, Framer Motion.
- Static export only.
- Must remain fully compatible with GitHub Pages and GitHub Actions deployment.
- No server runtime, API routes, middleware, backend features, or runtime SSR requirements.
- Preserve the current single active deployment workflow.

## Workflow Rules
- Keep docs aligned with the current live product.
- Prefer refinement over expansion.
- Treat mobile readability, layout consistency, and performance as core requirements.
- Be conservative when removing files: only remove what is clearly obsolete.
- When tradeoffs appear, prioritize elegance, readability, motion quality, performance, maintainability, and GitHub Pages compatibility.
