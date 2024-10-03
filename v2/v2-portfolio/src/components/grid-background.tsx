import React from "react";
import '@/styles/globals.css'
 
export function GridBackgroundDemo() {
  return (
    <div className="z-0 h-[50rem] w-full dark:bg-transparent bg-transparent  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-transparent bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="z-0 text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        hi, i'm <span className="text-gradient">ryan!</span>
      </p>
    </div>
  );
}