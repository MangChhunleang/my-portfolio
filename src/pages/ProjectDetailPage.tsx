import { useParams, Link } from "react-router";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Pill } from "@/components/Pill";
import { Button } from "@/components/ui/button";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolio.projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-semibold text-foreground">
          Project not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The project you're looking for doesn't exist.
        </p>
        <Button asChild className="mt-6 rounded-full">
          <Link to="/projects">Back to projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Project header */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Button asChild variant="outline" className="mb-6 rounded-full">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="text-sm text-muted-foreground">
              {project.category}
            </div>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl border border-border bg-gradient-to-br from-muted to-background p-2">
            <div className="overflow-hidden rounded-xl border border-border bg-muted/50">
              <img
                src={project.image}
                alt={`Preview of ${project.title}`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case study */}
      <Section
        id="case-study"
        eyebrow="Case Study"
        title="A recruiter-friendly project breakdown"
        description="This structure gives context, technical credibility, and a clear sense of impact."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          {/* Left column — narrative */}
          <div className="space-y-6">
            {(
              [
                ["Overview", project.summary],
                ["Problem", project.problem],
                ["Solution", project.solution],
                ["Challenges", project.challenges],
                ["Outcomes", project.outcomes],
              ] as const
            ).map(([title, body]) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="text-lg font-medium text-foreground">
                  {title}
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Right column — features, screenshots, links */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-lg font-medium text-foreground">
                Key features
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {project.features.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-border bg-muted/50 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-lg font-medium text-foreground">
                Screenshots
              </div>
              <div className="mt-4 space-y-3">
                {project.screenshots.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-gradient-to-br from-muted to-background p-4 text-sm text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-lg font-medium text-foreground">
                External links
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild className="rounded-full">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
