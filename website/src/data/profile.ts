export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  tech: string[];
  description: string;
  highlights: string[];
  href?: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  socials: SocialLink[];
  summary: string;
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  gallery: { src: string; alt: string }[];
}

export const profile: ProfileData = {
  name: "Ryan Tran",
  tagline: "CS @ KSU • SWE + AI",
  location: "Metro-Atlanta, GA",
  email: "concepting@protonmail.com",
  phone: "678-670-9868",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/RyanTren/" },
    { label: "GitHub", href: "https://github.com/RyanTren/" },
    { label: "Instagram", href: "https://instagram.com/uohto/" },
  ],
  summary:
    "Rising senior passionate about building delightful software and practical AI. I enjoy shipping polished web apps, mentoring peers, and exploring creative projects beyond code.",
  experiences: [
    {
      company: "INPO (Institute of Nuclear Power Operations)",
      role: "Software Engineering Co-op",
      location: "Atlanta, GA",
      start: "May 2025",
      end: "Present",
      bullets: [
        "Developed and tested full-stack web applications with C#, .NET, Angular, TypeScript, and SQL Server across 3 projects.",
        "Implemented dependency injection across REST API infrastructure.",
        "Facilitated QA automation, regression, and manual testing using Ranorex, Postman, and Swagger for 3+ external apps in Azure DevOps.",
      ],
    },
    {
      company: "CodePath",
      role: "Software Tech Fellow",
      location: "San Francisco, CA (remote)",
      start: "Jan 2025",
      end: "May 2025",
      bullets: [
        "Mentored 50+ students in HTML/CSS and JavaScript, improving assignment completion by 25%.",
        "Provided hands-on guidance and debugging for 8+ projects.",
        "Boosted student satisfaction to 90%+ with clear explanations and consistent office hours.",
      ],
    },
    {
      company: "Aayats",
      role: "Software Engineering Intern",
      location: "Atlanta, GA",
      start: "Sep 2024",
      end: "Dec 2024",
      bullets: [
        "Built a data AI model to predict musical attributes from MP3 files using Librosa.",
        "Designed a pipeline extracting 15+ audio features (tempo, MFCCs) for ML tasks.",
        "Streamlined model customization with Hugging Face Transformers and Unsloth for faster fine-tuning.",
      ],
    },
    {
      company: "Headstarter AI",
      role: "Software Engineering Fellow",
      location: "Long Island City, NY",
      start: "Jul 2024",
      end: "Sep 2024",
      bullets: [
        "Built and deployed 5 AI web apps using React, Next.js, Firebase, OpenAI API, Clerk, and Vercel.",
        "Led 4 engineers, scaled each app to 200+ users with feedback loops.",
        "Mentored by engineers from Amazon, Bloomberg, and Capital One on Agile, CI/CD, and microservices.",
      ],
    },
    {
      company: "Kennesaw State University",
      role: "Artificial Intelligence Undergraduate Researcher",
      location: "Marietta, GA",
      start: "Jul 2024",
      end: "Dec 2024",
      bullets: [
        "Built an NLP pipeline using 7 techniques (sentiment, NER) to detect emotional patterns in 1,000+ app reviews.",
        "Automated review collection from the iOS App Store with a Python scraper, reducing manual work by 90%.",
      ],
    },
  ],
  projects: [
    {
      name: "AI Mental Health SaaS",
      tech: ["Next.js", "TypeScript", "OpenAI", "Clerk", "Stripe", "Firebase"],
      description:
        "AI-personalized wellness platform with auth, payments, and data storage.",
      highlights: [
        "Onboarded 100+ users with 10+ paid subscribers",
        "Secure Stripe payments and Clerk authentication",
      ],
      href: "",
    },
    {
      name: "Bodybuilding Pose Detection",
      tech: ["Python", "TensorFlow", "Keras"],
      description: "Custom CNN to detect 5 bodybuilding poses.",
      highlights: [
        "Raised accuracy from 30% to 65%+ via architecture and hyperparameter tuning",
      ],
      href: "",
    },
  ],
  skills: {
    languages: [
      "Python",
      "Java",
      "C#",
      "JavaScript",
      "TypeScript",
      "Swift",
      "R",
      "T-SQL/SQL",
      "HTML/CSS",
    ],
    frameworks: [
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      ".NET",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Librosa",
      "RandomForest",
    ],
    tools: [
      "Git",
      "Azure DevOps",
      "Ranorex",
      "Docker",
      "GCP",
      "Supabase",
      "Firebase",
      "VS/VS Code",
      "XCode",
      "IntelliJ",
    ],
  },
  gallery: [
    { src: "/next.svg", alt: "Next.js" },
    { src: "/vercel.svg", alt: "Vercel" },
    { src: "/globe.svg", alt: "Globe" },
    { src: "/window.svg", alt: "Window" },
  ],
};


