import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Experience />
      <ContactSection />
      <Footer />
    </div>
  )
}
