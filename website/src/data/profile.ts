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
  technologies: string[];
}

export interface ProjectItem {
  name: string;
  title: string;
  tech: string[];
  description: string;
  highlights: string[];
  href?: string;
  image: string;
  category: string;
  github: string;
  demo: string;
  featured: boolean;
  stats?: Record<string, string>;
}

export interface ProfileData {
  name: string;
  tagline: string;
  location: string;
  email: string;
  socials: SocialLink[];
  summary: string;
  roles: string[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  gallery: { src: string; alt: string }[];
  aboutGallery: { src: string; alt: string }[];
  photodump: { src: string; alt: string }[];
}

export const profile: ProfileData = {
  name: "Ryan Tran",
  tagline: "CS @ KSU • SWE + AI",
  location: "Metro-Atlanta, GA",
  email: "concepting@protonmail.com",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/RyanTren/" },
    { label: "GitHub", href: "https://github.com/RyanTren/" },
    { label: "Instagram", href: "https://instagram.com/uohto/" },
  ],
  summary:
    "Rising senior passionate about building delightful software and practical AI. I enjoy shipping polished web apps, mentoring peers, and exploring creative projects beyond code.",
  roles: [
    "sde intern @ milliman",
    "prev. swe intern @ inpo & aayats",
    "graduated magna cum laude cs + ai @ ksu"
  ],
  experiences: [
    {
      company: "Milliman",
      role: "Software Development Intern",
      location: "Chicago, IL",
      start: "June 2026",
      end: "Aug 2026",
      bullets: [
        "Developed and tested full-stack web application with C#, .NET, React, TypeScript, & SQL Server for Financial Risk Management.",
        "Iterated on dependency injected projects for REST API back-end infrastructure following SOLID/TDD principles.",
        "Followed Agile Scrum SDLC using Git, CI/CD, and Azure DevOps",
      ],
      technologies: ["C#", ".NET", "React", "TypeScript", "SQL Server", "Azure DevOps", "Git"],
    },
    {
      company: "INPO (Institute of Nuclear Power Operations)",
      role: "Software Engineering Co-op",
      location: "Atlanta, GA",
      start: "May 2025",
      end: "May 2026",
      bullets: [
        "Developed and tested full-stack web applications with C#, .NET, Angular, TypeScript, & T-SQL/SQL Server across 3 projects.",
        "Implemented dependency injection into REST API back-end infrastructure",
        "Facilitated QA Automation, Regression Testing, & Manual Testing utilizing Ranorex, Postman, & Swagger",
        "Worked on 3+ external applications in Azure DevOps",
      ],
      technologies: ["C#", ".NET", "Angular", "TypeScript", "SQL Server", "Azure DevOps", "Git", "Ranorex"],
    },
    {
      company: "CodePath",
      role: "Software Tech Fellow",
      location: "San Francisco, CA",
      start: "Jan 2025",
      end: "May 2025",
      bullets: [
        "Mentored 50+ students in HTML/CSS & Javascript, improving assignment completion by 25%.",
        "Provided hands-on guidance and debugging support for 8+ projects",
        "Boosted student satisfaction to 90%+ by clearly explaining concepts",
        "Offered consistent office hours and mentorship",
      ],
      technologies: ["HTML/CSS", "JavaScript", "Teaching", "Mentorship"],
    },
    {
      company: "Aayats",
      role: "Software Engineering Intern",
      location: "Atlanta, GA",
      start: "Sep 2024",
      end: "Dec 2024",
      bullets: [
        "Pioneered a data AI model for predicting musical attributes from MP3 files using open-source library Librosa.",
        "Designed a pipeline extracting 15+ audio features (tempo, MFCCs)",
        "Enabled datasets for Machine Learning tasks",
        "Streamlined model customization with Hugging Face Transformers and Unsloth",
      ],
      technologies: ["Python", "Librosa", "Hugging Face", "Unsloth", "Machine Learning"],
    },
    {
      company: "Headstarter AI",
      role: "Software Engineering Fellow",
      location: "Long Island City, NY",
      start: "Jul 2024",
      end: "Sep 2024",
      bullets: [
        "Built and deployed 5 AI web apps using React, Next.js, Firebase, OpenAI API, Clerk API, and Vercel.",
        "Led 4 software engineers and scaled each app to 200+ users",
        "Incorporated user feedback for continuous improvement",
        "Mentored by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservices",
      ],
      technologies: ["React", "Next.js", "Firebase", "OpenAI API", "Clerk", "Vercel"],
    },
    {
      company: "Kennesaw State University",
      role: "AI Undergraduate Researcher",
      location: "Marietta, GA",
      start: "Jul 2024",
      end: "Dec 2024",
      bullets: [
        "Built an NLP pipeline using 7 techniques to detect emotional patterns in 1,000+ mental health app reviews.",
        "Implemented sentiment analysis, NER, and other NLP techniques",
        "Automated review collection from iOS App Store with Python web scraper",
        "Reduced manual labor by 90% through automation",
      ],
      technologies: ["Python", "NLP", "Sentiment Analysis", "Web Scraping", "Data Analysis"],
    },
  ],
  projects: [
    {
      name: "AI Mental Health SaaS",
      title: "AI Mental Health SaaS",
      tech: ["Next.js", "JavaScript", "OpenAI", "Clerk", "Stripe", "Firebase"],
      description:
        "Launched an AI-powered mental health platform with personalized wellness solutions, secure payments, and authentication. Onboarded 100+ users with 10+ paid subscribers.",
      highlights: [
        "Onboarded 100+ users with 10+ paid subscribers",
        "Secure Stripe payments and Clerk authentication",
      ],
      image: "/project_thumbnails/mindjourney.jpg",
      category: "ai saas",
      github: "https://github.com/RyanTren/mindjourney",
      demo: "https://mindjourney-indol.vercel.app/",
      featured: true,
      stats: { users: "100+", revenue: "$1K+", rating: "4.8/5" },
    },
    {
      name: "Custom CNN Pose Detection",
      title: "Custom CNN Pose Detection",
      tech: ["Python", "TensorFlow", "Keras", "Matplotlib", "OpenCV"],
      description:
        "Built a convolutional neural network to detect 5 specific bodybuilding poses. Fine-tuned hyperparameters and architecture to boost accuracy from 30% to 65%+.",
      highlights: [
        "Raised accuracy from 30% to 65%+ via architecture and hyperparameter tuning",
      ],
      image: "/project_thumbnails/CNN_thumbnail.jpg",
      category: "ai/cv",
      github: "https://github.com/RyanTren/AI-CNN-Bodybuilding-Pose-Classifier",
      demo: "https://github.com/RyanTren/AI-CNN-Bodybuilding-Pose-Classifier",
      featured: true,
      stats: { accuracy: "65%+", poses: "5", improvement: "35%" },
    },
    {
      name: "Headstarter AI Apps",
      title: "Headstarter AI Apps",
      tech: ["React", "Next.js", "Firebase", "OpenAI API", "Clerk", "Vercel"],
      description:
        "Built and deployed 5 AI web applications using React, Next.js, Firebase, and OpenAI API. Led 4 engineers and scaled each app to 200+ users with feedback integration.",
      highlights: [
        "Led 4 software engineers and scaled each app to 200+ users",
        "Incorporated user feedback for continuous improvement",
      ],
      image: "/project_thumbnails/headstarter.jpg",
      category: "fullstack",
      github: "#",
      demo: "#",
      featured: true,
      stats: { apps: "5", users: "200+", team: "4 engineers" },
    },
    {
      name: "KSU AI Club Website",
      title: "KSU AI Club Website",
      tech: ["Next.js", "Typescript", "Tailwindcss", "Vercel"],
      description:
        "Build and Deployed a web-app for my universities AI club to display events, officers, sponsors, and AI blog from Alumni and current Undergraduate and Graduate Students",
      highlights: [],
      image: "/project_thumbnails/ksuaiclub.jpg",
      category: "web dev",
      github: "https://github.com/RyanTren/KSU-AI-Club-Site",
      demo: "https://www.ksuaiclub.com/",
      featured: true,
    },
    {
      name: "Music AI Prediction Model",
      title: "Music AI Prediction Model",
      tech: ["Python", "Librosa", "Hugging Face", "Unsloth", "Machine Learning"],
      description:
        "Pioneered a data AI model for predicting musical attributes (genre, mood, instrumentation) from MP3 files using Librosa. Designed pipeline extracting 15+ audio features.",
      highlights: [
        "Designed a pipeline extracting 15+ audio features (tempo, MFCCs)",
        "Enabled datasets for Machine Learning tasks",
        "Streamlined model customization with Hugging Face Transformers and Unsloth",
      ],
      image: "/project_thumbnails/aayats_old_landing.jpg",
      category: "ai/ml",
      github: "https://github.com/Aayats-StartUp",
      demo: "https://www.aayats.com/",
      featured: false,
      stats: { features: "15+", accuracy: "78%", files: "1000+" },
    },
    {
      name: "Mental Health NLP Pipeline",
      title: "Mental Health NLP Pipeline",
      tech: ["Python", "NLP", "Sentiment Analysis", "Web Scraping", "Data Analysis"],
      description:
        "Built an NLP pipeline using 7 techniques including sentiment analysis and NER to detect emotional patterns in 1,000+ mental health app reviews.",
      highlights: [
        "Implemented sentiment analysis, NER, and other NLP techniques",
        "Automated review collection from iOS App Store with Python web scraper",
        "Reduced manual labor by 90% through automation",
      ],
      image: "/project_thumbnails/research.jpg",
      category: "research",
      github: "#",
      demo: "#",
      featured: false,
      stats: { reviews: "1000+", techniques: "7", accuracy: "85%" },
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
  aboutGallery: [
    { src: "/gallery_images/milliman_1.jpg", alt: "posted up wit the fam!" },
    { src: "/gallery_images/inpo_4.jpg", alt: "ootd @ inpo" },
    { src: "/gallery_images/inpo_1.jpg", alt: "inpo rotation 2 get-together!" },
    { src: "/gallery_images/aayats_1.jpg", alt: "me & lucas grinding! (CTO @ aayats)" },
    { src: "/gallery_images/aayats_2.jpg", alt: "me & lucas grinding! pt.2" },
    { src: "/gallery_images/inpo_2.jpg", alt: "anuj (prev. co-op @ inpo) drawing of our hangout!" },
    { src: "/gallery_images/aayats_3.jpg", alt: "prof. pics at techstars demo day for aayats" },
    { src: "/gallery_images/inpo_3.jpg", alt: "work setup @ inpo" },
  ],
  photodump: [
    { src: "/photodump/atl_1.jpg", alt: "atl nights, bad decisions, elite memories" },
    { src: "/photodump/atl_2.jpg", alt: "intern by day, fit check by lunch break" },
    { src: "/photodump/atl_3.jpg", alt: "corporate bonding but make it wholesome" },
    { src: "/photodump/atl_4.jpg", alt: "startup talk + zero sleep combo" },
    { src: "/photodump/atl_5.jpg", alt: "locked in like finals week never ended" },
    { src: "/photodump/bang_1.jpg", alt: "when the homie turns the hangout into art" },
    { src: "/photodump/beach_1.jpg", alt: "techstars but lowkey felt like celebrities" },
    { src: "/photodump/birthday_1.jpg", alt: "the setup where caffeine becomes code" },
    { src: "/photodump/bolder_1.jpg", alt: "proof we actually touched grass" },
    { src: "/photodump/charleston_1.jpg", alt: "main character energy in charleston" },
    { src: "/photodump/chattanooga_1.jpg", alt: "accidentally romanticizing a random trip" },
    { src: "/photodump/chattanooga_2.jpg", alt: "side quest completed successfully" },
    { src: "/photodump/dealership_1.jpg", alt: "financial decisions were considered" },
    { src: "/photodump/fit_1.jpg", alt: "fit so hard i had to document it" },
    { src: "/photodump/fl_1.jpg", alt: "florida air hit different for no reason" },
    { src: "/photodump/food_1.jpg", alt: "meal disappeared 4 minutes later" },
    { src: "/photodump/food_2.jpg", alt: "the kind of food that fixes your mood" },
    { src: "/photodump/food_3.jpg", alt: "camera eats first unfortunately" },
    { src: "/photodump/friendgrad_1.jpg", alt: "watching the gang level up in real time" },
    { src: "/photodump/friendgrad_2.jpg", alt: "linkedin post incoming fr" },
    { src: "/photodump/friends_1.jpg", alt: "collecting memories like pokemon cards" },
    { src: "/photodump/friends_2.jpg", alt: "everyone here passed the vibe check" },
    { src: "/photodump/friends_3.jpg", alt: "low quality pic high quality friendship" },
    { src: "/photodump/friends_4.jpg", alt: "group lore expanding rapidly" },
    { src: "/photodump/friends_5.png", alt: "this image contains too many inside jokes" },
    { src: "/photodump/friends_6.jpg", alt: "we definitely said 'one more pic'" },
    { src: "/photodump/grad_1.jpg", alt: "the academic comeback was successful" },
    { src: "/photodump/hs_swim.png", alt: "built different since swim season" },
    { src: "/photodump/lift_1.jpg", alt: "gym arc still in progress" },
    { src: "/photodump/mn_1.jpg", alt: "midwest adventures and frozen hands" },
    { src: "/photodump/mn_2.jpg", alt: "cold weather warm memories type beat" },
    { src: "/photodump/ny_1.jpg", alt: "nyc made me walk 40k steps for vibes" },
    { src: "/photodump/ny_2.jpg", alt: "cinematic for absolutely no reason" },
    { src: "/photodump/ny_3.jpg", alt: "main character montage moment" },
    { src: "/photodump/ny_4.jpg", alt: "survived new york with minimal damage" },
    { src: "/photodump/papaya_1.jpg", alt: "papaya king level life experience" },
    { src: "/photodump/rave_1.jpg", alt: "ears ringing but spirit healed" },
    { src: "/photodump/swim_1.png", alt: "chlorine and character development" },
    { src: "/photodump/swim_2.jpg", alt: "peak aquatic athlete propaganda" },
  ],
};
