"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

function ScrollIndicator() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return(
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <Button variant="ghost" size="icon" className="rounded-full cursor-pointer" onClick={() => scrollToSection("about")}>
      <ChevronDown className="h-8 w-8" />
    </Button>
  </div>
  )
}

export { ScrollIndicator }