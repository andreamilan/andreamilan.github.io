# Major Decisions

## 2026-03-14 Foundations
- Chose a design-first approach where visual quality and hierarchy come before advanced functionality.
- Chose a static-first architecture built for GitHub Pages rather than runtime hosting features.
- Chose not to publish Andrea's email address or provide an email contact form.
- Chose to omit the downloadable CV in v1 because the provided PDF exposes Andrea's email address.

## 2026-03-14 Product Direction
- Moved from an earlier multi-page direction to a single-page anchored architecture.
- Committed to dark mode as the default visual direction.
- Rejected SaaS-homepage, resume-dump, and component-gallery patterns.
- Kept GitHub Pages as the hosting target.
- Kept deployment handled through GitHub Actions.

## 2026-03-14 Content Direction
- Rewrote visible site copy in first person.
- Removed the standalone Writing section.
- Kept Medium only as a secondary link.
- Kept LinkedIn as the main CTA.
- Separated Education from Experience.
- Chose Get in touch over a heavier contact treatment.
- Chose Principles as the framing instead of the older How I think label.

## 2026-03-14 Hierarchy Direction
- Chose to feature only the current role, Head of Product.
- Reduced previous roles to compact, action-led entries.
- Kept all education entries, but in a lighter secondary treatment.
- Added a portrait to the hero as part of the final direction.
- Kept the hero as the defining visual moment of the page.

## 2026-03-14 Interaction Direction
- Prioritized motion quality over content density.
- Added restrained motion polish through reveals, hover states, soft portrait motion, and subtle navigation behavior.
- Implemented a multilingual greeting in the hero, removed it when it felt too disruptive, and later reintroduced it in a subtler rotating label below the portrait.
- Committed to respecting `prefers-reduced-motion`.

## 2026-03-15 Layout and UI Direction
- Standardized the outer content frame for all main sections after the hero.
- Refined mobile spacing and metadata presentation so date and location scan more cleanly.
- Kept the top bar minimal and avoided reintroducing a standard anchor-link navbar.
- Made Education more visually secondary than Experience.

## 2026-03-15 Technical and Maintenance Direction
- Improved portrait loading performance with a purpose-sized static asset for GitHub Pages.
- Refined typography into a more disciplined page-wide system.
- Removed obsolete route folders, unused content files, duplicate assets, and dead utilities.
- Kept only the active deployment workflow and cleaned up obsolete project structure.
