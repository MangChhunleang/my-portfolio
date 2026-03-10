import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight, Download, Moon, Sun, Code2, Briefcase, FileText, User, Layers, Sparkles, SearchX, Calendar, MapPin } from 'lucide-react';

const portfolio = {
  name: 'Alex Mercer',
  title: 'Full-Stack Software Developer',
  tagline: 'I design and build performant web products, internal tools, and AI-powered experiences that help teams move faster.',
  location: 'Remote · Available for select projects',
  email: 'alex@portfolio.dev',
  social: {
    github: '#',
    linkedin: '#',
    twitter: '#',
  },
  highlights: [
    { label: 'Years building products', value: '6+' },
    { label: 'Projects shipped', value: '24' },
    { label: 'Teams supported', value: '12' },
    { label: 'Core focus', value: 'SaaS · AI · DX' },
  ],
  intro: `I’m a software developer focused on building clean, scalable digital products. My work sits at the intersection of product thinking, engineering execution, and thoughtful user experience. I enjoy turning ambiguous ideas into fast, maintainable systems that feel polished in the hands of real users.`,
  approach: [
    'Build for clarity first, then scale with confidence.',
    'Design systems and code architecture should support speed, not slow teams down.',
    'Strong developer experience creates better products over time.',
  ],
  specialties: ['Frontend Architecture', 'Full-Stack Product Development', 'Developer Tooling', 'AI Product Interfaces', 'Performance Optimization'],
  skills: {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    Backend: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL'],
    Database: ['PostgreSQL', 'MongoDB', 'Prisma', 'Redis', 'Supabase'],
    Cloud: ['Vercel', 'AWS', 'Cloudflare', 'Docker', 'CI/CD'],
    AI: ['OpenAI APIs', 'RAG', 'Embeddings', 'Prompt Design', 'Agent UX'],
    Tools: ['GitHub', 'Figma', 'Linear', 'Notion', 'Jest', 'Playwright'],
  },
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Northstar Labs',
      period: '2023 — Present',
      location: 'Remote',
      summary: 'Leading frontend and product engineering across client-facing SaaS tools and internal platforms.',
      bullets: [
        'Shipped a modular dashboard system used across 3 product lines.',
        'Improved performance and reduced frontend bundle overhead across key surfaces.',
        'Collaborated with design and product to launch AI-assisted workflows.'
      ]
    },
    {
      role: 'Full-Stack Developer',
      company: 'StudioFrame',
      period: '2021 — 2023',
      location: 'Hybrid',
      summary: 'Built modern web applications for startups and growing digital products.',
      bullets: [
        'Delivered custom SaaS interfaces with reusable component systems.',
        'Owned API integrations, CMS-driven content, and analytics instrumentation.',
        'Worked closely with founders to scope, ship, and iterate quickly.'
      ]
    },
    {
      role: 'Freelance Developer',
      company: 'Independent',
      period: '2019 — 2021',
      location: 'Remote',
      summary: 'Partnered with founders and agencies on brand sites, product MVPs, and internal tools.',
      bullets: [
        'Built responsive marketing sites and web apps for multiple industries.',
        'Established reusable UI patterns that reduced delivery time on future work.',
        'Supported post-launch optimization and maintenance.'
      ]
    }
  ],
  certifications: ['AWS Cloud Practitioner', 'Meta Front-End Developer Certificate'],
  projects: [
    {
      slug: 'atlas-ops',
      title: 'Atlas Ops Dashboard',
      category: 'SaaS',
      summary: 'A multi-tenant operations dashboard for real-time monitoring, reporting, and team workflows.',
      stack: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
      image: 'Gradient analytics dashboard preview',
      problem: 'Operations teams were relying on fragmented spreadsheets and manual reporting to track performance and incidents.',
      solution: 'Designed and built a unified dashboard with role-aware views, modular widgets, and alert-driven workflows.',
      features: ['Real-time metrics panels', 'Role-based access', 'Saved views', 'Incident tracking', 'Responsive admin UI'],
      challenges: 'Balancing dense operational data with clarity on smaller screens while keeping the system extensible.',
      outcomes: 'Reduced reporting overhead and improved visibility across distributed teams.',
      links: { github: '#', live: '#' },
      screenshots: ['Executive dashboard', 'Incident management view', 'Mobile metrics summary']
    },
    {
      slug: 'promptdesk',
      title: 'PromptDesk',
      category: 'AI Product',
      summary: 'An AI workspace for managing prompt libraries, testing outputs, and documenting experiments.',
      stack: ['Next.js', 'OpenAI API', 'Supabase', 'MDX'],
      image: 'AI workspace interface preview',
      problem: 'Teams experimenting with AI lacked a clear system for organizing prompts and comparing outcomes.',
      solution: 'Created a structured interface for prompt versioning, testing, notes, and knowledge sharing.',
      features: ['Prompt collections', 'Version history', 'Experiment notes', 'Response comparison', 'Team-friendly UI'],
      challenges: 'Making AI interactions understandable and trackable without overwhelming non-technical users.',
      outcomes: 'Helped teams standardize AI experimentation and reduce duplicated effort.',
      links: { github: '#', live: '#' },
      screenshots: ['Prompt library', 'Experiment detail page', 'Usage insights panel']
    },
    {
      slug: 'devflow',
      title: 'DevFlow Docs',
      category: 'Developer Experience',
      summary: 'A documentation platform and design system site built for developer adoption and clarity.',
      stack: ['Next.js', 'TypeScript', 'Contentlayer', 'Vercel'],
      image: 'Documentation site preview',
      problem: 'A growing platform needed better developer onboarding and clearer product documentation.',
      solution: 'Built a docs experience with structured navigation, searchable content, and reusable technical content patterns.',
      features: ['Structured docs navigation', 'Search-ready content', 'MDX authoring', 'Component examples', 'SEO foundations'],
      challenges: 'Maintaining content flexibility while keeping the interface consistent and fast.',
      outcomes: 'Improved developer onboarding and reduced repetitive support questions.',
      links: { github: '#', live: '#' },
      screenshots: ['Docs homepage', 'Article page', 'Component reference']
    }
  ],
  writing: [
    {
      title: 'Designing Portfolio Case Studies That Recruiters Actually Read',
      excerpt: 'How to present technical work with clarity, outcomes, and credibility.',
      date: 'Feb 2026',
      readTime: '6 min read'
    },
    {
      title: 'Practical UI Patterns for AI Product Interfaces',
      excerpt: 'Lessons from shipping tools that make AI features feel trustworthy and usable.',
      date: 'Jan 2026',
      readTime: '8 min read'
    },
    {
      title: 'Building Faster Frontends Without Over-Engineering',
      excerpt: 'A pragmatic approach to performance, component reuse, and team velocity.',
      date: 'Dec 2025',
      readTime: '5 min read'
    }
  ]
};

const navItems = [
  ['home', 'Home'],
  ['about', 'About'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['writing', 'Writing'],
  ['contact', 'Contact'],
];

function cls(...items) {
  return items.filter(Boolean).join(' ');
}

function Pill({ children }) {
  return <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{children}</span>;
}

function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 scroll-mt-24">
      <div className="mb-10 max-w-2xl">
        {eyebrow && <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">{eyebrow}</div>}
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/10">
      <div className="h-48 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-6">
        <div className="flex h-full items-end rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-4 text-sm text-zinc-400">
          {project.image}
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-zinc-400">{project.category}</div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          </div>
          <button onClick={() => onOpen(project.slug)} className="rounded-full border border-white/10 p-2 text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm leading-6 text-zinc-400">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => <Pill key={item}>{item}</Pill>)}
        </div>
      </div>
    </motion.div>
  );
}

function Header({ activePage, setActivePage, darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  const go = (page) => {
    setActivePage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => go('home')} className="text-left">
          <div className="text-sm font-medium tracking-wide text-zinc-300">{portfolio.name}</div>
          <div className="text-xs text-zinc-500">{portfolio.title}</div>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map(([key, label]) => (
            <button
              key={key}
              onClick={() => go(key)}
              className={cls(
                'rounded-full px-4 py-2 text-sm transition',
                activePage === key ? 'bg-white text-zinc-950' : 'text-zinc-400 hover:bg-white/5 hover:text-white'
              )}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)} className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white">
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => go('contact')} className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:opacity-90 md:inline-flex">Let’s work together</button>
          <button onClick={() => setOpen(!open)} className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-zinc-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8">
            {navItems.map(([key, label]) => (
              <button key={key} onClick={() => go(key)} className="rounded-2xl px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5 hover:text-white">
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function HomePage({ setActivePage, setSelectedProject }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <Sparkles className="h-4 w-4" /> Available for freelance, product, and collaboration opportunities
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {portfolio.name}
            </h1>
            <p className="mt-4 text-xl text-zinc-300 sm:text-2xl">{portfolio.title}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">{portfolio.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setActivePage('projects')} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90">
                View Projects <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => setActivePage('contact')} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-200 transition hover:bg-white/10">Contact Me</button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {portfolio.location}</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {portfolio.email}</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20">
            <div className="grid grid-cols-2 gap-4">
              {portfolio.highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-2 text-sm text-zinc-400">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-5">
              <div className="text-sm text-zinc-300">Specialized in</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {portfolio.specialties.map((item) => <Pill key={item}>{item}</Pill>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="featured" eyebrow="Selected Work" title="Featured projects built for product, performance, and clarity" description="A portfolio should show more than screenshots. These projects highlight problem solving, technical decisions, and outcomes.">
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={(slug) => { setSelectedProject(slug); setActivePage('project-detail'); }} />
          ))}
        </div>
      </Section>

      <Section id="skills-summary" eyebrow="Core Capabilities" title="Technical strengths across product-facing development" description="I focus on fast, maintainable interfaces backed by practical full-stack execution.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(portfolio.skills).slice(0, 4).map(([category, items]) => (
            <div key={category} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 text-lg font-medium text-white">{category}</div>
              <div className="flex flex-wrap gap-2">
                {items.slice(0, 6).map((item) => <Pill key={item}>{item}</Pill>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="credibility" eyebrow="Why teams hire me" title="Clear communication, strong implementation, and thoughtful product judgment" description="I care about how software works, but also how it is understood, maintained, and improved over time.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ['Product-minded development', 'I translate goals into interfaces and systems that are clear, useful, and realistic to ship.'],
            ['Scalable frontends', 'I build reusable component patterns and page structures that support growth without visual drift.'],
            ['Fast collaboration', 'I work comfortably with founders, designers, and engineers to move from rough idea to production-quality result.']
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-medium text-white">{title}</div>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="home-cta" eyebrow="Start a conversation" title="Need a developer who can turn ideas into polished products?" description="I’m open to product roles, freelance work, consulting, and strong technical collaborations.">
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setActivePage('contact')} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:opacity-90">Get in touch</button>
          <button onClick={() => setActivePage('experience')} className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-200 transition hover:bg-white/10">View experience</button>
        </div>
      </Section>
    </>
  );
}

function AboutPage() {
  return (
    <Section id="about" eyebrow="About" title="A concise story about how I work and what I focus on" description="This page helps recruiters, clients, and collaborators quickly understand the person behind the work.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-base leading-8 text-zinc-300">{portfolio.intro}</p>
          <div className="mt-8">
            <div className="text-lg font-medium text-white">How I work</div>
            <div className="mt-4 space-y-3">
              {portfolio.approach.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-zinc-400">{item}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-lg font-medium text-white">Professional focus</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {portfolio.specialties.map((item) => <Pill key={item}>{item}</Pill>)}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-lg font-medium text-white">What I enjoy building</div>
            <p className="mt-3 text-sm leading-7 text-zinc-400">Developer tools, SaaS platforms, AI-enhanced workflows, internal systems, and portfolio-quality interfaces that present technical work with clarity.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ProjectsPage({ setSelectedProject, setActivePage }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(portfolio.projects.map((p) => p.category))];
  const items = filter === 'All' ? portfolio.projects : portfolio.projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" eyebrow="Projects" title="A structured project library with strong case-study presentation" description="Each project card leads to a deeper breakdown of the problem, solution, stack, process, and outcomes.">
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button key={item} onClick={() => setFilter(item)} className={cls('rounded-full px-4 py-2 text-sm transition', filter === item ? 'bg-white text-zinc-950' : 'border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10')}>
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={(slug) => { setSelectedProject(slug); setActivePage('project-detail'); }} />
        ))}
      </div>
    </Section>
  );
}

function ProjectDetailPage({ slug, setActivePage }) {
  const project = portfolio.projects.find((p) => p.slug === slug) || portfolio.projects[0];
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <button onClick={() => setActivePage('projects')} className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:bg-white/10">← Back to projects</button>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="text-sm text-zinc-400">{project.category}</div>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => <Pill key={item}>{item}</Pill>)}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
            <div className="flex h-72 items-end rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-5 text-zinc-400">
              {project.image}
            </div>
          </div>
        </div>
      </section>

      <Section id="case-study" eyebrow="Case Study" title="A recruiter-friendly project breakdown" description="This structure gives context, technical credibility, and a clear sense of impact.">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="space-y-6">
            {[
              ['Overview', project.summary],
              ['Problem', project.problem],
              ['Solution', project.solution],
              ['Challenges', project.challenges],
              ['Outcomes', project.outcomes],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-lg font-medium text-white">{title}</div>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{body}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-medium text-white">Key features</div>
              <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                {project.features.map((item) => <li key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">{item}</li>)}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-medium text-white">Screenshots</div>
              <div className="mt-4 space-y-3">
                {project.screenshots.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-4 text-sm text-zinc-400">{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-lg font-medium text-white">External links</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={project.links.github} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 hover:bg-white/10"><Github className="h-4 w-4" /> GitHub</a>
                <a href={project.links.live} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:opacity-90"><ExternalLink className="h-4 w-4" /> Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function SkillsPage() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technologies organized by category for faster scanning" description="This page helps visitors quickly assess technical breadth without digging through long paragraphs.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(portfolio.skills).map(([category, items]) => (
          <div key={category} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 text-lg font-medium text-white">{category}</div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => <Pill key={item}>{item}</Pill>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ExperiencePage() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work history, education, certifications, and resume access" description="A clean timeline reinforces credibility and makes it easy to understand progression.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {portfolio.experience.map((item) => (
            <div key={item.role + item.company} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-xl font-semibold text-white">{item.role}</div>
                  <div className="mt-1 text-zinc-300">{item.company}</div>
                </div>
                <div className="text-right text-sm text-zinc-400">
                  <div>{item.period}</div>
                  <div>{item.location}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {item.bullets.map((bullet) => <li key={bullet} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">{bullet}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-medium text-white">Resume</div>
            <p className="mt-3 text-sm leading-7 text-zinc-400">Provide a PDF resume download plus a concise summary of your strengths for fast recruiter review.</p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:opacity-90"><Download className="h-4 w-4" /> Download Resume</button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-medium text-white">Education & Certifications</div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-400">B.S. in Computer Science</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {portfolio.certifications.map((item) => <Pill key={item}>{item}</Pill>)}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WritingPage() {
  return (
    <Section id="writing" eyebrow="Writing" title="Thoughtful articles that reinforce expertise and communication" description="A writing section can strengthen credibility by showing how you explain ideas, systems, and tradeoffs.">
      <div className="grid gap-6 lg:grid-cols-3">
        {portfolio.writing.map((post) => (
          <div key={post.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500"><Calendar className="h-3.5 w-3.5" /> {post.date}</div>
            <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{post.excerpt}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-zinc-500">{post.readTime}</span>
              <button className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white">Read article <ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Section id="contact" eyebrow="Contact" title="A clean contact experience with direct paths to reach out" description="For production, connect this form to a reliable service such as Resend, Formspree, Basin, or a serverless endpoint.">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-medium text-white">Direct contact</div>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <a href={`mailto:${portfolio.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 hover:bg-black/30"><Mail className="h-4 w-4" /> {portfolio.email}</a>
              <a href={portfolio.social.github} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 hover:bg-black/30"><Github className="h-4 w-4" /> GitHub</a>
              <a href={portfolio.social.linkedin} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 hover:bg-black/30"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-medium text-white">Best fit</div>
            <p className="mt-3 text-sm leading-7 text-zinc-400">Open to full-time roles, freelance product work, portfolio builds, frontend systems, and AI interface consulting.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-lg font-medium text-white">Send a message</div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input placeholder="Your name" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-white/20" />
            <input placeholder="Your email" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-white/20" />
            <input placeholder="Company or project" className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-white/20 sm:col-span-2" />
            <textarea placeholder="Tell me a little about what you're building" rows={6} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-white/20 sm:col-span-2" />
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button onClick={() => setSubmitted(true)} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:opacity-90">Submit inquiry</button>
            {submitted && <span className="text-sm text-emerald-400">Message submitted successfully.</span>}
          </div>
        </div>
      </div>
    </Section>
  );
}

function NotFoundPage({ setActivePage }) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
      <div className="rounded-full border border-white/10 bg-white/5 p-4 text-zinc-300"><SearchX className="h-8 w-8" /></div>
      <div className="mt-6 text-sm uppercase tracking-[0.24em] text-zinc-500">404</div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">This page seems to have shipped to the wrong route.</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">The content you’re looking for isn’t here, but the rest of the portfolio is still worth exploring.</p>
      <button onClick={() => setActivePage('home')} className="mt-8 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 hover:opacity-90">Back to homepage</button>
    </div>
  );
}

function Footer({ setActivePage }) {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-zinc-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="font-medium text-zinc-300">{portfolio.name}</div>
          <div>Modern developer portfolio with case studies, writing, and credibility-focused structure.</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setActivePage('home')} className="rounded-full px-3 py-2 hover:bg-white/5 hover:text-zinc-300">Home</button>
          <button onClick={() => setActivePage('projects')} className="rounded-full px-3 py-2 hover:bg-white/5 hover:text-zinc-300">Projects</button>
          <button onClick={() => setActivePage('contact')} className="rounded-full px-3 py-2 hover:bg-white/5 hover:text-zinc-300">Contact</button>
          <button onClick={() => setActivePage('404')} className="rounded-full px-3 py-2 hover:bg-white/5 hover:text-zinc-300">404</button>
        </div>
      </div>
    </footer>
  );
}

export default function DeveloperPortfolioPrototype() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(portfolio.projects[0].slug);
  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(() => darkMode
    ? 'min-h-screen bg-zinc-950 text-zinc-100'
    : 'min-h-screen bg-zinc-100 text-zinc-950', [darkMode]);

  const lightOverrides = !darkMode ? 'bg-zinc-100 [&_*]:!border-black/10 [&_.text-white]:!text-zinc-950 [&_.text-zinc-400]:!text-zinc-600 [&_.text-zinc-300]:!text-zinc-700 [&_.text-zinc-500]:!text-zinc-500 [&_.bg-white\/5]:!bg-white [&_.bg-black\/20]:!bg-zinc-50 [&_.bg-zinc-950\/80]:!bg-white/80 [&_.bg-zinc-950]:!bg-zinc-100 [&_.from-zinc-900]:!from-zinc-100 [&_.to-black]:!to-zinc-200' : '';

  return (
    <div className={cls(theme, lightOverrides)}>
      <div className="min-h-screen">
        <Header activePage={activePage} setActivePage={setActivePage} darkMode={darkMode} setDarkMode={setDarkMode} />

        {activePage === 'home' && <HomePage setActivePage={setActivePage} setSelectedProject={setSelectedProject} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'projects' && <ProjectsPage setSelectedProject={setSelectedProject} setActivePage={setActivePage} />}
        {activePage === 'project-detail' && <ProjectDetailPage slug={selectedProject} setActivePage={setActivePage} />}
        {activePage === 'skills' && <SkillsPage />}
        {activePage === 'experience' && <ExperiencePage />}
        {activePage === 'writing' && <WritingPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === '404' && <NotFoundPage setActivePage={setActivePage} />}

        <Footer setActivePage={setActivePage} />
      </div>
    </div>
  );
}
