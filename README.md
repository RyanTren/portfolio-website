# Ryan's Website
- [**V1** | Deployed Thru Github Pages](https://ryantren.github.io/portfolio-website/)
- [**V2** | -WIP- SCRAPPED](https://github.com/RyanTren/portfolio-website/tree/v2)
- [**V3** | Improved with V4 ](https://github.com/RyanTren/portfolio-website/tree/v3)
- [**V4** | Next.js, Deployed with Vercel](https://portfolio-site-swart-xi.vercel.app/)

## What's in V4?
V4 is v0's build for my portfolio website :p

### libraries?
* [shadcn](https://ui.shadcn.com/docs/installation/astro)
* [radix](https://www.radix-ui.com/)
* [aceternity](https://ui.aceternity.com/components)
* [MUI](https://mui.com/material-ui/)
* [hyperui](https://www.hyperui.dev/)
* [HeroUI](https://www.heroui.com/)
* [MagicUI](https://magicui.design/)
* [FloatUI](https://floatui.com/)
* uiverse
* [daisyUI](https://daisyui.com/)
* [Eldora UI](https://www.eldoraui.site/docs/components/features)

### animations?
* [three.js](https://threejs.org/)
* idk

## Rendering Architecture

### Route Tree
- `src/app/layout.tsx` (Server Component)
  - Defines `<html>` shell, injects Geist fonts via inline `<style>`, registers `globals.css`, sets `metadata`.
- `src/app/page.tsx` (Client Component)
  - `"use client"` at top; renders the entire homepage as a single interactive page with multiple sections (hero, about, projects, experience, contact, footer).

### SSR/CSR Boundaries
- The layout is server-rendered by default, enabling metadata and global CSS without client overhead.
- The page is fully client-rendered to support:
  - Interval-based role/gallery rotation (`useEffect`)
  - Imperative scroll (`scrollIntoView`, `window.scrollTo`)
  - Window `open` for external links and resume
  - UI state for filters and gallery selection

---

## Data Model

### `src/data/profile.ts`
- Defines typed interfaces for the portfolio domain:
  - `SocialLink`, `ExperienceItem`, `ProjectItem`, `ProfileData`
- Exports a `profile: ProfileData` object with sample content (name, tagline, socials, experiences, projects, skills, gallery).
- Intended usage:
  - Hydrate the page or server components from a single source of truth.
  - Enables future server data fetching or CMS replacement without changing UI contracts.
- Current state:
  - `src/app/page.tsx` uses local arrays for projects/experiences, not the `profile` export.

---

## UI System

### Styling and Theming
- `globals.css`:
  - Tailwind v4 directives and `tw-animate-css`.
  - CSS variables define color system, radii, and chart/sidebar palettes for both light and `.dark` modes.
  - Global base layer applies `bg-background` and `text-foreground`.
- Fonts:
  - Geist Sans/Mono via `next/font` in `layout.tsx`.
  - Variables `--font-geist-sans`, `--font-geist-mono` used by Tailwind tokens.

### shadcn-inspired Primitives
- `components/ui/*` primitives are written as typed functional components:
  - `badge.tsx`, `button.tsx` use `cva` for variants and `@radix-ui/react-slot` for `asChild` composition.
  - `card.tsx` provides a composable primitive set: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `CardAction`.
  - `input.tsx`, `textarea.tsx` provide consistent form styling and focus/invalid rings.
- Utility:
  - `lib/utils.ts` provides `cn(...inputs)` using `clsx` + `tailwind-merge` to dedupe class conflicts.

---

## Component Architecture

### Page Composition (`src/app/page.tsx`)
- Imports UI primitives and `lucide-react` icons.
- Local state:
  - `currentRole` (rotating role display)
  - `selectedImage` (rotating gallery hero image)
  - `selectedCategory` (projects filter — UI placeholder; filtering logic present)
- Effects:
  - Intervals for role rotation (2s) and gallery rotation (4s).
- DOM interactions:
  - `scrollToSection(id)` with smooth scroll
  - `scrollToTop` helper
  - External links via `window.open`
- Sections:
  - Hero: headline, rotating role, CTAs (view work, resume download), social buttons
  - About: image gallery, mini-thumbnails, interests, fun facts
  - Projects: placeholder section with ID for internal navigation
  - Experience: timeline with sticky Education card and achievements/tech badges
  - Contact: info cards, social CTA buttons, contact form (non-functional placeholder)
  - Footer: profile blurb, quick links, tech list, back-to-top button

### Reusable Sections (`src/components`)
- `hero.tsx`: Stateless typed hero with name, tagline, socials.
- `about.tsx`: Stateless typed about section rendering `summary`.
- `experience.tsx`: Typed list rendering of experiences with bullets.
- `projects.tsx`: Typed grid of project cards with tech tags and highlights.
- `skills.tsx`: Typed skills section, reuses a private `Pill` subcomponent.
- `gallery.tsx`: Responsive grid, lazy-loaded native `img` tags.
- `nav.tsx`: Sticky header with anchor links for sections (`#experience`, `#projects`, `#skills`, `#gallery`, `#about`).
- `footer.tsx`: Minimal static footer.

Note: These reusable components are not currently composed in `page.tsx`; the page renders its own bespoke UI. They can be adopted to centralize structure and reduce duplication.

---

## Configuration

- `tsconfig.json`:
  - Next.js TS plugin, `paths` aliasing: `@/*` → `src/*`.
- `components.json` (shadcn):
  - Style preset: `new-york`
  - RSC enabled (`rsc: true`)
  - Aliases: `@/components`, `@/lib`, `@/components/ui`
  - Tailwind CSS path: `src/app/globals.css`
  - Icon library: `lucide`
- `postcss.config.mjs`:
  - Registers Tailwind via `@tailwindcss/postcss`.
- `next.config.ts`:
  - Default export with no special config (placeholder).
- `package.json`:
  - Scripts: `dev`, `build`, `start`, `lint`

---

## Assets and Static Files

- `public/` contains:
  - Icons and SVGs for gallery and theming (`next.svg`, `vercel.svg`, etc.)
  - Resume PDF `Ryan_Tran_Resume_Aug2025.pdf` referenced in CTA button.
- Images in `page.tsx` gallery use static paths (e.g., `/asian-male-computer-science-headshot.png`). Ensure these exist in `public/`; otherwise, fallback to `/placeholder.svg` is used in some places.

---

## Runtime Behavior

- Client-side intervals animate role and gallery changes.
- Buttons navigate via smooth scrolling to anchored sections.
- Social buttons open new tabs or mailto/tel handlers.
- Contact form is UI-only (no submit handler or backend).

---

## Performance and UX Notes

- The entire page is a Client Component. Consider moving static sections to Server Components and passing data as props to reduce JS on the client.
- Replace native `<img>` tags with `next/image` for optimized loading, responsive sizing, and automatic lazy-loading.
- Lazy-load below-the-fold sections or split the page into smaller client islands for improved LCP.
- Convert rotating intervals to CSS animations where feasible to reduce re-renders.
- Consider `prefetch={false}` and measured external link handling for icons/CTAs.

---

## SEO and Metadata

- `layout.tsx` exports `metadata` with title, description, and generator.
- Add Open Graph and Twitter metadata, canonical URL, and structured data for richer previews.

---

## Extensibility

- Centralize data sourcing by replacing local arrays in `page.tsx` with `src/data/profile.ts`.
- Compose the stateless section components (`about.tsx`, `experience.tsx`, `projects.tsx`, `skills.tsx`, `gallery.tsx`, `footer.tsx`) inside `page.tsx` to avoid duplication and ensure typed contracts.
- Introduce a `src/app/(marketing)/` route group if future pages (blog, case studies) are added.
- Add a server action or API route for the contact form; consider email providers (Resend) or form backends.

---

## Known Gaps

- `next.config.ts` has no image domains or custom headers.
- `page.tsx` references images that may not exist in `public/`.
- Contact form has no submission handling.
- Dark mode toggle not implemented despite `.dark` theme support.
- `Nav` component is defined but not used in `page.tsx`.


## ai tools to look into for future development
v0, loveable, bolt.new, [builder.io](https://www.builder.io/), [coderabbit](https://www.coderabbit.ai/), [mintlify](https://mintlify.com/), claude code, and cursor
