# Andrea Milan Website Project Guide

## Project Goal
- Build a personal website for Andrea Milan that feels editorial, premium, calm, and modern.
- Avoid SaaS portfolio patterns, product-marketing structure, and resume-dump density.
- Prioritize design quality, motion polish, and readability over content volume.

## Product Shape
- Single-page website with anchored sections.
- Dark mode is the default visual direction.
- Intended page structure:
  - Hero
  - Intro
  - Experience
  - Education
  - How I think
  - Connect
  - Footer

## Content Rules
- All visible copy must be in first person.
- Tone should be personal, sharp, calm, and concise.
- Avoid third-person biography tone, long text blocks, and over-explanation.
- Include all work experiences and all education entries from the source material.
- Feature only the current role with larger scale and richer context.
- Keep all previous roles compact and action-led.
- Medium should appear only as a subtle secondary link, not as its own content section.
- Do not publish Andrea's email address or add a contact form.

## Design Rules
- The hero should be compact, balanced, and visually clean.
- The hero portrait is part of the intended final direction.
- Section hierarchy should rely on simple editorial structure: title, separator, then content.
- Use consistency of layout to create calmness and readability.
- Avoid component-gallery repetition, heavy chrome, and unnecessary visual clutter.

## Motion Rules
- Motion quality is a major priority.
- Interactions should feel elegant, subtle, and premium.
- Avoid gimmicks, startup-marketing animation, or noisy effects.
- Always respect `prefers-reduced-motion`.

## Technical Rules
- Stack: Next.js App Router, TypeScript, Tailwind CSS, Framer Motion.
- Static export only.
- Must remain fully compatible with GitHub Pages.
- No server runtime, API routes, middleware, backend features, or runtime SSR requirements.

## Workflow Rules
- Keep docs aligned with the actual product direction.
- Prefer clarity and finish over adding more sections or content.
- Treat mobile readability as a core requirement, not a later polish step.
- When tradeoffs appear, prioritize elegance, motion quality, readability, performance, and GitHub Pages compatibility.
