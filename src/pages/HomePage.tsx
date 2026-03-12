import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail, Sparkles } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Pill } from "@/components/Pill";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_25%)] dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_25%)]" />
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28"
        >
          <div>
            <motion.div variants={fadeInUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-accent/50 px-4 py-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              Available for freelance, product, and collaboration opportunities
            </motion.div>
            <motion.h1 variants={fadeInUp} className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {portfolio.name}
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-4 text-xl text-foreground/80 sm:text-2xl">
              {portfolio.title}
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {portfolio.tagline}
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {portfolio.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> {portfolio.email}
              </span>
            </motion.div>
          </div>

          {/* Stats card */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-black/5 dark:shadow-black/20"
          >
            <div className="grid grid-cols-2 gap-4">
              {portfolio.highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-muted/50 p-5"
                >
                  <div className="text-2xl font-semibold text-foreground">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-border bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-5">
              <div className="text-sm text-muted-foreground">Specialized in</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {portfolio.specialties.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured projects */}
      <Section
        id="featured"
        eyebrow="Selected Work"
        title="Featured projects built for product, performance, and clarity"
        description="A portfolio should show more than screenshots. These projects highlight problem solving, technical decisions, and outcomes."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolio.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* Skills summary */}
      <Section
        id="skills-summary"
        eyebrow="Core Capabilities"
        title="Technical strengths across product-facing development"
        description="I focus on fast, maintainable interfaces backed by practical full-stack execution."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(portfolio.skills)
            .slice(0, 4)
            .map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 text-lg font-medium text-foreground">
                  {category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.slice(0, 6).map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </Section>

      {/* Credibility */}
      <Section
        id="credibility"
        eyebrow="Why teams hire me"
        title="Clear communication, strong implementation, and thoughtful product judgment"
        description="I care about how software works, but also how it is understood, maintained, and improved over time."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            [
              "Product-minded development",
              "I translate goals into interfaces and systems that are clear, useful, and realistic to ship.",
            ],
            [
              "Scalable frontends",
              "I build reusable component patterns and page structures that support growth without visual drift.",
            ],
            [
              "Fast collaboration",
              "I work comfortably with founders, designers, and engineers to move from rough idea to production-quality result.",
            ],
          ].map(([title, body]) => (
            <motion.div
              key={title}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-lg font-medium text-foreground">{title}</div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Home CTA */}
      <Section
        id="home-cta"
        eyebrow="Start a conversation"
        title="Need a developer who can turn ideas into polished products?"
        description="I'm open to product roles, freelance work, consulting, and strong technical collaborations."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">Get in touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/experience">View experience</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
