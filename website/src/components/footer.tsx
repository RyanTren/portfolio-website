"use client"

import { Button } from "@/components/ui/button"

import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
} from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent underline">
                  ryan tran
                </span>
              </h3>

              <p className="text-muted-foreground mb-4 max-w-md">
                live to work, not work to live!
              </p>

              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                  onClick={() => window.open("https://github.com/RyanTren", "_blank", "noopener,noreferrer")}
                >
                  <Github className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                  onClick={() => window.open("https://linkedin.com/in/RyanTren/", "_blank", "noopener,noreferrer")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>

                <Button variant="ghost" size="icon" className="cursor-pointer" onClick={() => window.open("mailto:concepting@protonmail.com", "_blank", "noopener,noreferrer")}>
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">tech stack</h4>
              <ul className="space-y-1 text-muted-foreground font-regular">
                <li>react & next.js</li>
                <li>c# & .net</li>
                <li>typescript</li>
                <li>python & ai/ml</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 mt-2 pt-2 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm font-thin">
              © {new Date().getFullYear()} ryan tran. built with next.js and deployed on vercel.
            </p>
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="mt-4 sm:mt-0 cursor-pointer">
              Back to Top
              <ArrowUp className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </footer>
  );
}


