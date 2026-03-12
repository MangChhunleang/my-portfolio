export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  telegram?: string;
}

export interface Highlight {
  label: string;
  value: string;
}

export interface ProjectLink {
  github: string;
  live: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  image: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  outcomes: string;
  links: ProjectLink;
  screenshots: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
}

export interface WritingPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  social: SocialLinks;
  highlights: Highlight[];
  intro: string;
  approach: string[];
  specialties: string[];
  skills: Record<string, string[]>;
  experience: Experience[];
  certifications: string[];
  projects: Project[];
  writing: WritingPost[];
}
