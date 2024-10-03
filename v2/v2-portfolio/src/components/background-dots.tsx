import React from "react";
import '@/styles/globals.css'
 
export function DotBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-transparent bg-transparent  dark:bg-dot-white/[1] bg-dot-black/[1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-transparent bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        hello, i'm <span className="text-gradient">ryan!</span>
      </p>
    </div>
  );
}