"use client"

import React from "react";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery";
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  ExternalLink
} from "lucide-react"

export default function Portfolio() {
  const [currentRole, setCurrentRole] = useState(0)

  const roles = [
    "sde intern @ milliman", 
    "prev. swe intern @ inpo & aayats",
    "graduated magna cum laude cs + ai @ ksu"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Nav />
      <Hero />
      <About />

      {/* Fun Stuff Section (experimenting with different ui component libaries) */}

      <Gallery />
      <Projects />
      <Experience />

      {/* Added comprehensive contact section with form and social links */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I&apos;m always excited to discuss new opportunities, collaborate on projects, or just chat about technology
              and AI. Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a
                          href="mailto:concepting@protonmail.com"
                          className="text-muted-foreground hover:text-blue-600 transition-colors"
                        >
                          concepting@protonmail.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  

                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                        <MapPin className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">Metro-Atlanta Area, GA</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:bg-gray-100 dark:hover:bg-gray-800 bg-transparent"
                    onClick={() => window.open("https://github.com/RyanTren", "_blank")}
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-transparent"
                    onClick={() => window.open("https://linkedin.com/in/RyanTren/", "_blank")}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:bg-pink-50 dark:hover:bg-pink-900/20 bg-transparent"
                    onClick={() => window.open("https://instagram.com/uohto/", "_blank")}
                  >
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">3.79</div>
                    <div className="text-sm text-muted-foreground">GPA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">5+</div>
                    <div className="text-sm text-muted-foreground">AI Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-muted-foreground">Students Mentored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">1000+</div>
                    <div className="text-sm text-muted-foreground">App Users</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <CardDescription>
                    Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Added footer with additional links and back to top functionality */}
      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
