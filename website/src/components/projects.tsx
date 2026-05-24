
import { motion } from "framer-motion"
import React from "react";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import {
  Github,
  ExternalLink,
} from "lucide-react"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI Mental Health SaaS",
      description:
        "Launched an AI-powered mental health platform with personalized wellness solutions, secure payments, and authentication. Onboarded 100+ users with 10+ paid subscribers.",
      image: "/project_thumbnails/mindjourney.jpg",
      category: "ai saas",
      technologies: ["Next.js", "JavaScript", "OpenAI", "Clerk", "Stripe", "Firebase"],
      github: "https://github.com/RyanTren/mindjourney",
      demo: "https://mindjourney-indol.vercel.app/",
      featured: true,
      stats: { users: "100+", revenue: "$1K+", rating: "4.8/5" },
    },
    {
      id: 2,
      title: "Custom CNN Pose Detection",
      description:
        "Built a convolutional neural network to detect 5 specific bodybuilding poses. Fine-tuned hyperparameters and architecture to boost accuracy from 30% to 65%+.",
      image: "/project_thumbnails/CNN_thumbnail.jpg",
      category: "ai/cv",
      technologies: ["Python", "TensorFlow", "Keras", "Matplotlib", "OpenCV"],
      github: "https://github.com/RyanTren/AI-CNN-Bodybuilding-Pose-Classifier",
      demo: "https://github.com/RyanTren/AI-CNN-Bodybuilding-Pose-Classifier",
      featured: true,
      stats: { accuracy: "65%+", poses: "5", improvement: "35%" },
    },
    {
      id: 3,
      title: "Headstarter AI Apps",
      description:
        "Built and deployed 5 AI web applications using React, Next.js, Firebase, and OpenAI API. Led 4 engineers and scaled each app to 200+ users with feedback integration.",
      image: "/project_thumbnails/headstarter.jpg",
      category: "fullstack",
      technologies: ["React", "Next.js", "Firebase", "OpenAI API", "Clerk", "Vercel"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { apps: "5", users: "200+", team: "4 engineers" },
    },
    {
      id: 4,
      title: "KSU AI Club Website",
      description:
        "Build and Deployed a web-app for my universities AI club to display events, officers, sponsors, and AI blog from Alumni and current Undergraduate and Graduate Students",
      image: "/project_thumbnails/ksuaiclub.jpg",
      category: "web dev",
      technologies: ["Next.js", "Typescript", "Tailwindcss", "Vercel"],
      github: "https://github.com/RyanTren/KSU-AI-Club-Site",
      demo: "https://www.ksuaiclub.com/",
      featured: true,
    },
    {
      id: 5,
      title: "Music AI Prediction Model",
      description:
        "Pioneered a data AI model for predicting musical attributes (genre, mood, instrumentation) from MP3 files using Librosa. Designed pipeline extracting 15+ audio features.",
      image: "/project_thumbnails/aayats_old_landing.jpg",
      category: "ai/ml",
      technologies: ["Python", "Librosa", "Hugging Face", "Unsloth", "Machine Learning"],
      github: "https://github.com/Aayats-StartUp",
      demo: "https://www.aayats.com/",
      featured: false,
      stats: { features: "15+", accuracy: "78%", files: "1000+" },
    },
    {
      id: 6,
      title: "Mental Health NLP Pipeline",
      description:
        "Built an NLP pipeline using 7 techniques including sentiment analysis and NER to detect emotional patterns in 1,000+ mental health app reviews.",
      image: "/project_thumbnails/research.jpg",
      category: "research",
      technologies: ["Python", "NLP", "Sentiment Analysis", "Web Scraping", "Data Analysis"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { reviews: "1000+", techniques: "7", accuracy: "85%" },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              My {""}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h3>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              collections of projects i've created during my journey from student to developer.
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  project.featured ? "ring-2 ring-blue-200 dark:ring-blue-800" : ""
                }`}
              >
                <div className="p-3">
                  <div className="w-full overflow-hidden h-40 sm:h-44 lg:h-48 rounded-xl bg-muted">
                    <img
                      src={project.image || "/next.svg"}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2 mb-2">
                        {project.title}
                        {project.featured ? (
                          <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400">Featured</Badge>
                        ) : null}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="uppercase flex-shrink-0">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={`${project.id}-${tech}`} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.stats ? (
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <Badge key={`${project.id}-${key}`} variant="outline" className="text-xs">
                          {key}: {value as string}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                  {(project.github && project.github !== "#") || (project.demo && project.demo !== "#") ? (
                    <div className="flex gap-3 pt-2">
                      {project.github && project.github !== "#" && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 cursor-pointer"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white cursor-pointer"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
}


