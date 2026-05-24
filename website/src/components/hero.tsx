
import { motion } from "framer-motion"
import React from "react";
import { Button } from "@/components/ui/button"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import MorphingText from "@/components/eldoraui/morphingtext"
import { AuroraBackground } from "@/components/ui/aurora-background";

import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
  Code2,
} from "lucide-react"

  const roles = [
      "sde intern @ milliman", 
      "prev. swe intern @ inpo & aayats",
      "graduated magna cum laude cs + ai @ ksu"
    ]

  const scrollToSection = (sectionId: string) => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

export function Hero({ name, tagline, socials }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center ">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
            </motion.div>
          </AuroraBackground>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 space-y-6">
            <div className="space-y-2">
              {/* <Badge variant="outline" className="text-sm font-medium">
                Available for Full-Time Opportunities
              </Badge> */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight px-4">
                hi, i&apos;m{" "}
                <span className="bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                  ryan tran
                </span>
              </h1>
            </div>

            {/* used eldoraui component for this animation :) */}
            <div className="h-10 w-full flex items-center justify-center px-4">
              <MorphingText
                  texts={roles}
                  className="!block !mx-auto !w-full !max-w-3xl !text-center !whitespace-nowrap !text-lg sm:!text-xl lg:!text-2xl xl:!text-3xl !font-normal !text-foreground !h-6 sm:!h-8 lg:!h-10 xl:!h-12"
                />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-2 px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => scrollToSection("projects")}
              >
                <Code2 className="h-5 w-5"/>
                my work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-medium transition-all duration-300 hover:bg-muted bg-transparent shadow-md hover:shadow-lg cursor-pointer"
                onClick={() => window.open("/Tran_Resume_Mar2026.pdf", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                my resume
              </Button>
            </div>

            {/* Updated social links with real URLs and proper functionality */}
            <div className="flex justify-center space-x-6 pt-8 px-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                onClick={() => window.open("https://github.com/RyanTren", "_blank")}
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                onClick={() => window.open("https://linkedin.com/in/RyanTren/", "_blank")}
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                onClick={() => window.open("https://instagram.com/uohto/", "_blank")}
              >
                <Instagram className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-green-100 dark:hover:bg-green-900/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <ScrollIndicator />
        </div>
      </section>
  );
}


