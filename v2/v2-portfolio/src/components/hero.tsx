// hero.tsx
import React from "react";
import { ShaderGradientComponent } from '@/components/ShaderGradient';
import '@/styles/globals.css';

import astroLogo from '/astro-logo.png?url'; // Importing the image files
import typescriptLogo from '/typescript-logo.png?url';
import tailwindLogo from '/tailwindcss-logo.png?url';

export function HeroComponent() {
  return (
    <div className="relative h-50vh">
      <div className="dark:bg-transparent bg-transparent absolute inset-0 borderradius-24 overflow-hidden blur-1xl -z-10">
        <ShaderGradientComponent />
      </div>
      <div className="-z-999 h-[50rem] w-full dark:bg-transparent bg-transparent dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center flex-col px-4">
        <div className="-z-999 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-transparent bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-7xl font-sans py-1 md:py-3 relative z-20 font-bold tracking-tight">
          hi, i'm <span className="text-gradient">ryan!</span>
        </h1>

        <div className="image-gallery flex items-center justify-center">
          <span className="text-neutral-400">built with</span>
          <img
            src={astroLogo}
            alt="Astro logo"
            className="w-6 h-6 mx-2 filter dark: invert"
          />
          <img
            src={typescriptLogo}
            alt="TypeScript logo"
            className="w-6 h-6 mx-2 filter"
          />
          <img
            src={tailwindLogo}
            alt="Tailwind CSS logo"
            className="w-6 h-6 mx-2 filter"
          />
        </div>
      </div>
    </div>
  );
}