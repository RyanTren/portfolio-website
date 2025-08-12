# Ryan's Website
- [**V1** | Deployed Thru Github Pages](https://ryantren.github.io/portfolio-website/)
- [**V2** | -WIP- SCRAPPED]
- [**V3** | Next.js, Deployed with Vercel ] 

## What's in V4?
V4 is v0's build for my portfolio website :p

### libraries?
* [shadcn](https://ui.shadcn.com/docs/installation/astro)
* [radix](https://www.radix-ui.com/)
* [aceternity](https://ui.aceternity.com/components)
* [MUI](https://mui.com/material-ui/)
* hyperui
* heroui
* magicui
* floatui
* uiverse
* daisyui

### animations?
* [three.js](https://threejs.org/)
* idk

## architecture

### Plan
- Scaffolded a clean portfolio structure with sections and typed data.
- Kept it SSR-friendly and Tailwind v4-native; no client-side state needed.

### What I built
- **Data**
  - `website/src/data/profile.ts`: Strongly-typed profile, experience, projects, skills, socials, gallery.
- **Components**
  - `website/src/components/nav.tsx`: Sticky header with anchors.
  - `website/src/components/hero.tsx`: Name, tagline, social buttons.
  - `website/src/components/experience.tsx`: Timeline-style entries.
  - `website/src/components/projects.tsx`: Cards with tech pills and highlights.
  - `website/src/components/skills.tsx`: Pill lists for languages/frameworks/tools.
  - `website/src/components/gallery.tsx`: Responsive grid using current public assets.
  - `website/src/components/about.tsx`: Non-technical summary.
  - `website/src/components/footer.tsx`: Minimal site footer.
- **Pages and styles**
  - `website/src/app/page.tsx`: Composes all sections (Hero → Experience → Projects → Skills → Gallery → About → Footer).
  - `website/src/app/layout.tsx`: Updated metadata, added `Nav`.
  - `website/src/app/globals.css`: Tailwind v4 theme vars, improved font stack, utility colors.

### Build
- Compiles successfully with Next.js 15 and Tailwind v4.
- Heads-up: Multiple `package-lock.json` files detected. Remove extras to avoid confusion.

### Next Steps: UI Libraries and Polish
- **Install component libraries**
  - shadcn/ui (base primitives and theming)
  - MagicUI / HyperUI snippets
  - DaisyUI or Aceternity UI components where helpful
- **Add visual flair**
  - Animated gradient/mesh background for the Hero
  - Spotlight hover on project cards; subtle parallax
  - Framer Motion for tasteful entrance transitions
- **Content updates**
  - Replace placeholder gallery images with real photos/moments
  - Add external URLs for projects
  - Add Instagram link/username
- **SEO/social**
  - Open Graph/Twitter meta, `sitemap.xml`, `robots.txt`

### Optional Enhancements
- Integrate shadcn and add a theme switcher.
- Design the hero with a glassmorphism card and animated gradient.
- Convert `Gallery` to a masonry layout with blur-up placeholders.

### Status
- Added modular sections and typed content under `website/src`.
- Wired into `page.tsx`; updated `layout.tsx` and global styles.
- Build is green.

## ai tools to look into for future development
v0, loveable, bolt.new, [builder.io](https://www.builder.io/), [coderabbit](https://www.coderabbit.ai/), [mintlify](https://mintlify.com/), and cursor
