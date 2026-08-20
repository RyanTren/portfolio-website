"use client";

import Link from "next/link";
import { Home, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  return (
    <>
      <header className="fixed top-0 z-40 w-full border-b border-none rounded-b-lg border border-(--glass-border) font-semibold shadow-2xl/20 inset-shadow-sm inset-shadow-current/20 backdrop-blur-sm bg-(--glass-bg) inset-shadow-sm text-white w-fit">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 sm:px-8">
          <Link href="#" className="text-sm font-semibold" onClick={() => scrollToTop()}>
            <Home className="font-thin h-3 w-3 hover:text-green-500 transition-all duration-300" />
          </Link>

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

          <button
            className="sm:hidden p-1 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm sm:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mx-4 mt-16 rounded-xl border border-(--glass-border) backdrop-blur-md bg-(--glass-bg) p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                {links.map((pageSelection) => (
                  <button
                    key={pageSelection.href}
                    onClick={() => scrollToSection(pageSelection.href)}
                    className={`${getColor(pageSelection.href)} text-border text-shadow-lg/7 hover:invert transition-all duration-300 text-left text-lg`}
                  >
                    {pageSelection.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}