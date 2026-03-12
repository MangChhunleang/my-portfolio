import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  name: "Chhunleang Mang",
  title: "Full-Stack Software Developer",
  tagline:
    "I design and build performant web products, internal tools, and modern digital experiences that solve real problems.",
  location: "Phnom Penh · Open to remote",
  email: "mcl.mangchhunleang@gmail.com",
  social: {
    github: "https://github.com/MangChhunleang",
    linkedin: "https://www.linkedin.com/in/mang-chhunleang-85826a276/",
    twitter: "",
    telegram: "https://t.me/kevinsiuu",
  },
  highlights: [
    { label: "Years coding", value: "1+" },
    { label: "Projects shipped", value: "2" },
    { label: "Current Focus", value: "IT Eng" },
    { label: "Core focus", value: "SaaS · AI" },
  ],
  intro: `I'm a software developer focused on building clean, scalable digital products. My work sits at the intersection of product thinking, engineering execution, and thoughtful user experience. I enjoy turning ambiguous ideas into fast, maintainable systems that feel polished in the hands of real users.`,
  approach: [
    "Build for clarity first, then scale with confidence.",
    "Design systems and code architecture should support speed, not slow teams down.",
    "Strong developer experience creates better products over time.",
  ],
  specialties: [
    "Frontend Development",
    "Full-Stack Applications",
    "AI Feature Integration",
    "Responsive Design",
    "TypeScript & React",
  ],
  skills: {
    Frontend: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite", "React Router"],
    Backend: ["Node.js", "Express", "Convex", "Supabase", "REST APIs", "serverless functions"],
    Database: ["MySQL", "MongoDB", "Convex Database"],
    Cloud: ["Netlify", "Vercel", "DigitalOcean App Platform"],
    AI: ["OpenAI", "Google Generative AI"],
    Tools: ["Playwright", "Vitest", "Testing Library", "Git", "npm", "TipTap", "Polar.sh"],
  },
  experience: [
    {
      role: "Independent Full-Stack Developer",
      company: "Self-Employed",
      period: "2026 - Present",
      location: "Remote",
      summary:
        "Designed and developed production-quality web applications using modern React, TypeScript, and serverless architectures.",
      bullets: [
        "Architected and built Inknest, an AI-powered writing platform featuring rich-text editing and subscription billing.",
        "Developed StudyFlow AI, a comprehensive SaaS platform leveraging Google Gemini for AI-assisted studying.",
        "Implemented end-to-end features including user authentication, real-time database sync (Convex), and responsive UI components.",
      ],
    },
  ],
  certifications: [
    "Google Prompting Essentials — Google Career Certificates"
  ],
  projects: [
    {
      slug: "inknest",
      title: "Inknest",
      category: "AI-Powered Writing Platform",
      summary: "A full-stack AI-powered writing platform with a real-time serverless backend using Convex.",
      stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Convex", "TipTap", "OpenAI", "Polar.sh", "Playwright"],
      image: "/inknest.png",
      problem: "Writers need a reliable, real-time environment that seamlessly integrates AI assistance and rich-text editing without compromising performance.",
      solution: "Implemented a robust full-stack architecture using Convex for real-time synchronization, TipTap for rich-text editing, and integrated AI capabilities.",
      features: [
        "Rich-text editing with TipTap",
        "AI-powered writing (OpenAI/Google AI)",
        "Subscription billing via Polar.sh",
        "Protected routes & auth",
        "End-to-end testing"
      ],
      challenges: "Ensuring real-time synchronization of rich text while securely managing subscriptions and AI API interactions.",
      outcomes: "Delivered a production-quality, reliable, and maintainable platform with advanced generative capabilities.",
      links: { github: "https://github.com/MangChhunleang/ink-wellV2.git", live: "https://inkwell-app-zibwn.ondigitalocean.app/" },
      screenshots: [
        "Rich-text editor interface",
        "AI generation panel",
        "Subscription management"
      ],
    },
    {
      slug: "studyflow-ai",
      title: "StudyFlow AI",
      category: "Full-Stack SaaS Study Platform",
      summary: "A production-ready AI-powered study platform that generates summaries, flashcards, and quizzes from user notes.",
      stack: ["React 19", "TypeScript", "Convex", "Google Gemini 2.0 Flash", "Polar.sh", "OAuth", "Vitest"],
      image: "/studyflow.png",
      problem: "Students spend too much time manually creating study materials from their notes and documents.",
      solution: "Built an AI pipeline using Google Gemini to automatically process notes, PDFs, and DOCX files into actionable study materials.",
      features: [
        "AI-generated flashcards & quizzes",
        "PDF & DOCX processing",
        "Multi-provider OAuth",
        "SaaS subscription billing via webhooks",
        "Code-splitting & lazy loading"
      ],
      challenges: "Processing complex document formats reliably and managing long-running AI generation tasks while maintaining a snappy UI.",
      outcomes: "Created a fast, robust study tool with comprehensive unit testing and performant architecture.",
      links: { github: "https://github.com/MangChhunleang/ai-study-assistant.git", live: "https://ai-study-nkmv7.ondigitalocean.app" },
      screenshots: [
        "Study dashboard",
        "AI flashcard generator",
        "Document upload view"
      ],
    },
  ],
  writing: [
    {
      slug: "portfolio-case-studies",
      title:
        "Designing Portfolio Case Studies That Recruiters Actually Read",
      excerpt:
        "How to present technical work with clarity, outcomes, and credibility.",
      date: "Feb 2026",
      readTime: "6 min read",
    },
    {
      slug: "ui-patterns-ai",
      title: "Practical UI Patterns for AI Product Interfaces",
      excerpt:
        "Lessons from shipping tools that make AI features feel trustworthy and usable.",
      date: "Jan 2026",
      readTime: "8 min read",
    },
    {
      slug: "faster-frontends",
      title: "Building Faster Frontends Without Over-Engineering",
      excerpt:
        "A pragmatic approach to performance, component reuse, and team velocity.",
      date: "Dec 2025",
      readTime: "5 min read",
    },
  ],
};

export const navItems = [
  { key: "home", label: "Home", path: "/" },
  { key: "about", label: "About", path: "/about" },
  { key: "projects", label: "Projects", path: "/projects" },
  { key: "skills", label: "Skills", path: "/skills" },
  { key: "experience", label: "Experience", path: "/experience" },
  { key: "writing", label: "Writing", path: "/writing" },
  { key: "contact", label: "Contact", path: "/contact" },
] as const;
