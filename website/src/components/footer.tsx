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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ryan Tran
                </span>
              </h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Computer Science student passionate about AI and full-stack development. Currently seeking full-time
                opportunities starting May 2026.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                  onClick={() => window.open("https://github.com/RyanTren", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="cursor-pointer"
                  onClick={() => window.open("https://linkedin.com/in/RyanTren/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="cursor-pointer" onClick={() => window.open("mailto:concepting@protonmail.com")}>
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>React & Next.js</li>
                <li>Python & AI/ML</li>
                <li>TypeScript</li>
                <li>C# & .NET</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Ryan Tran. Built with Next.js and deployed on Vercel.
            </p>
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="mt-4 sm:mt-0 cursor-pointer">
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </footer>
  );
}


