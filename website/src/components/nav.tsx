"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { useMemo } from "react";

const links = [
  { href: "about", label: "about" },
  { href: "projects", label: "projects" },
  { href: "experience", label: "experience" },
  { href: "contact", label: "contact" },
];

const colors = [
  "text-red-400",
  "text-green-400",
  "text-blue-400",
  "text-purple-400",
  "text-pink-400",
];

function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function getColor(key: string) {
  return colors[hashString(key) % colors.length];
}

export function Nav() {
  const scrollToSection = (sectionId: string) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 z-40 w-full border-b bg-background/30 backdrop-blur border-none rounded-b-lg shadow-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 sm:px-8">
        <button  onClick={() => scrollToSection('#')}>
          <Link href="#" className="text-sm font-semibold ">
            <Home className="font-thin h-3 w-3 hover:text-green-500 transition-all duration-300" />
          </Link>
        </button>

        <nav className="hidden gap-8 text-sm sm:flex">
          {links.map((pageSelection) => (
            <button
              key={pageSelection.href}
              onClick={() => scrollToSection(pageSelection.href)}
              className={`${getColor(pageSelection.href)} text-border text-shadow-lg/7 hover:invert transition-all duration-300`}
            >
              {pageSelection.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}