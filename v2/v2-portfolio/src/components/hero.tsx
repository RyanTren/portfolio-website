import React from "react";
import '@/styles/globals.css'
 
export function HeroComponent() {
  return (
    <div className="z-0 h-[50rem] w-full dark:bg-transparent bg-transparent  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center flex-col px-4">
      {/* Radial gradient for the container to give a faded look */}
      <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-transparent bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        hi, i'm <span className="text-gradient">ryan!</span>
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        built with astro, typescript, and tailwindcss
      </p>
    </div>
  );
}