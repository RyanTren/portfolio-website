import React from "react";
import '@/styles/globals.css';
import astroLogo from '/public/astro-logo.png?url'; // Importing the image files
import typescriptLogo from '/public/typescript-logo.png?url';
import tailwindLogo from '/public/tailwindcss-logo.png?url';

export function HeroComponent() {
  return (
    <div className="z-0 h-[50rem] w-full dark:bg-transparent bg-transparent dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center flex-col px-4">
      {/* Radial gradient for the container to give a faded look */}
      <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-transparent bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        hi, i'm <span className="text-gradient">ryan!</span>
      </h1>

      {/* Logo section */}
      <div className="image-gallery flex items-center justify-center gap-1 my-8">
        {/* Text before the icons */}
        <span className="text-neutral-700 dark:text-neutral-400">built with</span>

        {/* Now using imported images with theme-specific color filters */}
        <img
          src={astroLogo}
          alt="Astro logo"
          className="w-6 h-6 mx-2 filter dark:invert"
        />
        <img
          src={typescriptLogo}
          alt="TypeScript"
          className="w-6 h-6 mx-2 filter"
        />
        <img
          src={tailwindLogo}
          alt="TailwindCSS"
          className="w-6 h-6 mx-2 filter"
        />
      </div>
    </div>
  );
}
