"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
  ChevronDown,
  Heart,
  Coffee,
  Gamepad2,
  Music,
  Brain,
  Code2,
  Users,
  Zap,
  Building,
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  ExternalLink,
  Phone,
  Send,
  ArrowUp,
} from "lucide-react"

export default function Portfolio() {
  const [currentRole, setCurrentRole] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const roles = ["Software Engineer", "AI Researcher", "Full-Stack Developer", "Tech Fellow"]

  const galleryImages = [
    { src: "/gallery_images/aayats_3.jpg", alt: "aayats internship" },
    { src: "/gallery_images/hs_swim.png", alt: "prhs swim meet flick" },
    { src: "/gallery_images/aayats_1.jpg", alt: "aayats internship" },
    { src: "/gallery_images/ny_1.jpg", alt: "soho" },
    { src: "/gallery_images/aayats_2.jpg", alt: "aayats internship" },
    { src: "/gallery_images/ny_2.jpg", alt: "soho" },
  ]

  const projects = [
    {
      id: 1,
      title: "AI Mental Health SaaS",
      description:
        "Launched an AI-powered mental health platform with personalized wellness solutions, secure payments, and authentication. Onboarded 100+ users with 10+ paid subscribers.",
      image: "/ai-mental-health-dashboard.png",
      category: "ai",
      technologies: ["Next.js", "JavaScript", "OpenAI", "Clerk", "Stripe", "Firebase"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { users: "100+", revenue: "$1K+", rating: "4.8/5" },
    },
    {
      id: 2,
      title: "Custom CNN Pose Detection",
      description:
        "Built a convolutional neural network to detect 5 specific bodybuilding poses. Fine-tuned hyperparameters and architecture to boost accuracy from 30% to 65%+.",
      image: "/cnn-pose-detection-bodybuilding.png",
      category: "ai",
      technologies: ["Python", "TensorFlow", "Keras", "Matplotlib", "OpenCV"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { accuracy: "65%+", poses: "5", improvement: "35%" },
    },
    {
      id: 3,
      title: "Music AI Prediction Model",
      description:
        "Pioneered a data AI model for predicting musical attributes (genre, mood, instrumentation) from MP3 files using Librosa. Designed pipeline extracting 15+ audio features.",
      image: "/music-ai-waveform.png",
      category: "ai",
      technologies: ["Python", "Librosa", "Hugging Face", "Unsloth", "Machine Learning"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { features: "15+", accuracy: "78%", files: "1000+" },
    },
    {
      id: 4,
      title: "Mental Health NLP Pipeline",
      description:
        "Built an NLP pipeline using 7 techniques including sentiment analysis and NER to detect emotional patterns in 1,000+ mental health app reviews.",
      image: "/nlp-sentiment-dashboard.png",
      category: "research",
      technologies: ["Python", "NLP", "Sentiment Analysis", "Web Scraping", "Data Analysis"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { reviews: "1000+", techniques: "7", accuracy: "85%" },
    },
    {
      id: 5,
      title: "Full-Stack Web Applications",
      description:
        "Developed and tested full-stack applications with C#, .NET, Angular, and TypeScript across 3 projects at INPO. Implemented dependency injection and REST APIs.",
      image: "/enterprise-web-app-dashboard.png",
      category: "fullstack",
      technologies: ["C#", ".NET", "Angular", "TypeScript", "SQL Server", "Azure"],
      github: "#",
      demo: "#",
      featured: false,
      stats: { projects: "3", tests: "100+", uptime: "99.9%" },
    },
    {
      id: 6,
      title: "Headstarter AI Apps",
      description:
        "Built and deployed 5 AI web applications using React, Next.js, Firebase, and OpenAI API. Led 4 engineers and scaled each app to 200+ users with feedback integration.",
      image: "/ai-web-applications.png",
      category: "ai",
      technologies: ["React", "Next.js", "Firebase", "OpenAI API", "Clerk", "Vercel"],
      github: "#",
      demo: "#",
      featured: true,
      stats: { apps: "5", users: "200+", team: "4 engineers" },
    },
  ]

  // Project categories can be reintroduced if/when filtering UI is added

  const experiences = [
    {
      id: 1,
      title: "Software Engineering Co-op",
      company: "INPO (Institute of Nuclear Power Operations)",
      location: "Atlanta, GA",
      period: "May 2025 – Present",
      type: "Full-time",
      description:
        "Developed and tested full-stack web applications with C#, .NET, Angular, TypeScript, & T-SQL/SQL Server across 3 projects.",
      achievements: [
        "Implemented dependency injection into REST API back-end infrastructure",
        "Facilitated QA Automation, Regression Testing, & Manual Testing utilizing Ranorex, Postman, & Swagger",
        "Worked on 3+ external applications in Azure DevOps",
      ],
      technologies: ["C#", ".NET", "Angular", "TypeScript", "SQL Server", "Azure DevOps", "Ranorex"],
      current: true,
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
    period: "Expected Graduation May 2026",
    gpa: "3.79 / 4.0",
    clubs: ["KSU AI Club", "KSU Electric Vehicle Team", "KSU Vietnamese Student Association"],
  }

  // const filteredProjects = selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [roles.length])

  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(galleryInterval)
  }, [galleryImages.length])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 space-y-6">
            <div className="space-y-2">
              <Badge variant="outline" className="text-sm font-medium">
                Available for Full-Time Opportunities
              </Badge>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ryan Tran
                </span>
              </h1>
            </div>

            {/* potential replace this with a ui lib component for a smoother and nicer animation */}
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
                {" "}
                <span className="font-semibold text-foreground transition-all duration-150 ease-in-out">
                  {roles[currentRole]}
                </span>
              </p>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building innovative AI-solutions
              through scalable web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-medium transition-all duration-300 hover:bg-muted bg-transparent"
                onClick={() => window.open("/Ryan_Tran_Resume_Aug2025.pdf", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Updated social links with real URLs and proper functionality */}
            <div className="flex justify-center space-x-6 pt-8">
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://github.com/RyanTren", "_blank")}
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://linkedin.com/in/RyanTren/", "_blank")}
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/20 transition-all duration-300 hover:scale-110"
                onClick={() => window.open("https://instagram.com/uohto/", "_blank")}
              >
                <Instagram className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-green-100 dark:hover:bg-green-900/20 transition-all duration-300 hover:scale-110"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => scrollToSection("about")}>
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Beyond the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Code</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While I love building software and exploring AI, there&apos;s more to my story. Here&apos;s a glimpse into who I am
              outside the world of algorithms and APIs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Gallery */}
            <div className="space-y-6">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                  <img
                    src={galleryImages[selectedImage].src || "/next.svg"}
                    alt={galleryImages[selectedImage].alt}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>

                {/* Gallery Navigation */}
                <div className="flex justify-center mt-4 space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === selectedImage
                          ? "bg-blue-600 scale-125"
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Mini Gallery Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {galleryImages.slice(0, 3).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image.src || "/next.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">My Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Growing up in the Metro-Atlanta area, I discovered my passion for technology through curiosity, unlimited creativity, and 
                  countless hours of tinkering. What started as wondering "how does this work?" evolved into building solutions that impact real people.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Kennesaw State University, I&apos;m not just studying Computer Science. I independently learn about AI
                  (LLMs, RAG, NLP, MV, ML, etc.) and build projects to apply and grow my knowledge in Software Engineering.
                </p>
              </div>

              {/* Interests & Hobbies */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">When I&apos;m Not Coding</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0 flex items-center space-x-3">
                      <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg">
                        <Heart className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">adventure</p>
                        <p className="text-sm text-muted-foreground">travel, eating at new spots, etc.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0 flex items-center space-x-3">
                      <div className="p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg">
                        <Coffee className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium">sports</p>
                        <p className="text-sm text-muted-foreground">almost everything :)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0 flex items-center space-x-3" onClick={() => window.open("https://steamcommunity.com/id/leaked/")} >
                      <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <Gamepad2 className="h-5 w-5 text-green-600"/>
                      </div>
                      <div>
                        <p className="font-medium">gaming</p>
                        <p className="text-sm text-muted-foreground">fps & metaverse platform</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0 flex items-center space-x-3" onClick={() => window.open("https://open.spotify.com/user/1d6z64mw5ura8vmmak3hw7eij?si=8abe79bd4c97408f&nd=1&dlsi=ddde465d2ba64bd0", "_blank")}>
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                        <Music className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium">music</p>
                        <p className="text-sm text-muted-foreground">dream-pop & electroclash</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Fun Facts */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4">Fun Facts</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Swam for over 10 years competitively in Georgia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Built 5 AI apps that scaled to 200+ users each</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Currently maintaining a 3.79 GPA while working full-time</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Love fashion and style, collecting pieces since 6th grade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Stuff Section (experimenting with different ui component libaries) */}
      <section id="custom" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              Cool Little {""}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quirks
              </span>
            </h3>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              just a random collections of images or ui components i found that i wanted to add to this site.
            </p>
          </div>
        </div>

        <div>
          {/* put some ui componenent here */}
        </div>

        <div>
          {/* another ui component here */}
        </div>

        <div>
          {/* finally another ui component here */}
        </div>
      </section>

      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>

        <div>
          {/* put some ui componenent here */}
        </div>

        <div>
          {/* another ui component here */}
        </div>

        <div>
          {/* finally another ui component here */}
        </div>
      </section>

      {/* Added comprehensive experience and education timeline section */}
      <section id="experience" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              From a teen in retail for the summer to corporate software engineer, here&apos;s my journey.
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
                      <p className="text-xs text-green-600">Dean's List Candidate</p>
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
                      <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a
                          href="tel:678-670-9868"
                          className="text-muted-foreground hover:text-green-600 transition-colors"
                        >
                          (678) 670-9868
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
                    <div className="text-2xl font-bold text-red-600">200+</div>
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
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Let&apos;s discuss a project opportunity" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell me about your project or opportunity..." rows={5} />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Added footer with additional links and back to top functionality */}
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
                  onClick={() => window.open("https://github.com/RyanTren", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("https://linkedin.com/in/RyanTren/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => window.open("mailto:concepting@protonmail.com")}>
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
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("experience")}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-muted-foreground hover:text-foreground transition-colors"
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
            <Button variant="ghost" size="sm" onClick={scrollToTop} className="mt-4 sm:mt-0">
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </footer>

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
