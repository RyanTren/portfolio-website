
import React from "react";
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import {
  Building,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
} from "lucide-react"

export function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Milliman",
      location: "Chicago, IL",
      period: "June 2026 – Aug 2026",
      type: "Full-time",
      description:
        "Developed and tested full-stack web application with C#, .NET, React, TypeScript, & SQL Server for Financial Risk Management.",
      achievements: [
        "Iterated on dependency injected projects for REST API back-end infrastructure following SOLID/TDD principles.",
        "Followed Agile Scrum SDLC using Git, CI/CD, and Azure DevOps",
      ],
      technologies: ["C#", ".NET", "React", "TypeScript", "SQL Server", "Azure DevOps", "Git"],
      current: true,
    },
    {
      id: 2,
      title: "Software Engineering Co-op",
      company: "INPO (Institute of Nuclear Power Operations)",
      location: "Atlanta, GA",
      period: "May 2025 – May 2026",
      type: "Full-time",
      description:
        "Developed and tested full-stack web applications with C#, .NET, Angular, TypeScript, & T-SQL/SQL Server across 3 projects.",
      achievements: [
        "Implemented dependency injection into REST API back-end infrastructure",
        "Facilitated QA Automation, Regression Testing, & Manual Testing utilizing Ranorex, Postman, & Swagger",
        "Worked on 3+ external applications in Azure DevOps",
      ],
      technologies: ["C#", ".NET", "Angular", "TypeScript", "SQL Server", "Azure DevOps", "Git", "Ranorex"],
      current: false,
    },
    {
      id: 3,
      title: "Software Tech Fellow",
      company: "CodePath",
      location: "San Francisco, CA",
      period: "Jan. 2025 – May 2025",
      type: "Fellowship",
      description: "Mentored 50+ students in HTML/CSS & Javascript, improving assignment completion by 25%.",
      achievements: [
        "Provided hands-on guidance and debugging support for 8+ projects",
        "Boosted student satisfaction to 90%+ by clearly explaining concepts",
        "Offered consistent office hours and mentorship",
      ],
      technologies: ["HTML/CSS", "JavaScript", "Teaching", "Mentorship"],
      current: false,
    },
    {
      id: 4,
      title: "Software Engineering Intern",
      company: "Aayats",
      location: "Atlanta, GA",
      period: "Sep. 2024 – Dec. 2024",
      type: "Internship",
      description:
        "Pioneered a data AI model for predicting musical attributes from MP3 files using open-source library Librosa.",
      achievements: [
        "Designed a pipeline extracting 15+ audio features (tempo, MFCCs)",
        "Enabled datasets for Machine Learning tasks",
        "Streamlined model customization with Hugging Face Transformers and Unsloth",
      ],
      technologies: ["Python", "Librosa", "Hugging Face", "Unsloth", "Machine Learning"],
      current: false,
    },
    {
      id: 5,
      title: "Software Engineering Fellow",
      company: "Headstarter AI",
      location: "Long Island City, NY",
      period: "Jul. 2024 – Sept. 2024",
      type: "Fellowship",
      description:
        "Built and deployed 5 AI web apps using React, Next.js, Firebase, OpenAI API, Clerk API, and Vercel.",
      achievements: [
        "Led 4 software engineers and scaled each app to 200+ users",
        "Incorporated user feedback for continuous improvement",
        "Mentored by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservices",
      ],
      technologies: ["React", "Next.js", "Firebase", "OpenAI API", "Clerk", "Vercel"],
      current: false,
    },
    {
      id: 6,
      title: "AI Undergraduate Researcher",
      company: "Kennesaw State University",
      location: "Marietta, GA",
      period: "Jul. 2024 – Dec. 2024",
      type: "Research",
      description:
        "Built an NLP pipeline using 7 techniques to detect emotional patterns in 1,000+ mental health app reviews.",
      achievements: [
        "Implemented sentiment analysis, NER, and other NLP techniques",
        "Automated review collection from iOS App Store with Python web scraper",
        "Reduced manual labor by 90% through automation",
      ],
      technologies: ["Python", "NLP", "Sentiment Analysis", "Web Scraping", "Data Analysis"],
      current: false,
    },
  ]

  const education = {
    school: "Kennesaw State University",
    location: "Marietta, GA",
    degree: "Bachelor of Science in Computer Science",
    period: "Graduated May 2026",
    gpa: "3.72 / 4.0",
    clubs: ["KSU AI Club", "KSU Vietnamese Student Association"],
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              work{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                experience
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              all the places i&apos;ve worked since starting my cs/swe journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 border-2 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Education</CardTitle>
                      <CardDescription>Academic Foundation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg">{education.school}</h3>
                    <p className="text-muted-foreground flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {education.location}
                    </p>
                  </div>

                  <div>
                    <p className="font-medium">{education.degree}</p>
                    <p className="text-sm text-muted-foreground flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {education.period}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900/20 rounded-lg p-3">
                    <Award className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-green-800 dark:text-green-400">GPA: {education.gpa}</p>
                      <p className="text-xs text-green-600">President & Dean's List Candidate</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Active Involvement</h4>
                    <div className="space-y-2">
                      {education.clubs.map((club, index) => (
                        <Badge key={index} variant="outline" className="mr-2 mb-2">
                          {club}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Experience Timeline */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={exp.id} className="relative flex items-start space-x-6">
                      {/* Timeline Dot */}
                      <div
                        className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
                          exp.current
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 border-white shadow-lg"
                            : "bg-white dark:bg-slate-800 border-gray-300 dark:border-gray-600"
                        }`}
                      >
                        <Building className={`h-6 w-6 ${exp.current ? "text-white" : "text-gray-600"}`} />
                        {exp.current && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                        )}
                      </div>

                      {/* Experience Card */}
                      <Card
                        className={`flex-1 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                          exp.current ? "ring-2 ring-blue-200 dark:ring-blue-800" : ""
                        }`}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl flex items-center space-x-2">
                                <span>{exp.title}</span>
                                {exp.current && (
                                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                    Current
                                  </Badge>
                                )}
                              </CardTitle>
                              <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                                {exp.company}
                              </CardDescription>
                            </div>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.period}
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {exp.location}
                            </span>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                          <div>
                            <h4 className="font-medium mb-2 flex items-center">
                              <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}


