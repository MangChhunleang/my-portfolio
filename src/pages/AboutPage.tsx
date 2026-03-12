import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Pill } from "@/components/Pill";

export function AboutPage() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A concise story about how I work and what I focus on"
      description="This page helps recruiters, clients, and collaborators quickly understand the person behind the work."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Bio + Approach */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="text-base leading-8 text-foreground/80">
            {portfolio.intro}
          </p>
          <div className="mt-8">
            <div className="text-lg font-medium text-foreground">How I work</div>
            <div className="mt-4 space-y-3">
              {portfolio.approach.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border bg-muted/50 p-4 text-sm leading-7 text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-lg font-medium text-foreground">
              Professional focus
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {portfolio.specialties.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-lg font-medium text-foreground">
              What I enjoy building
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Developer tools, SaaS platforms, AI-enhanced workflows, internal
              systems, and portfolio-quality interfaces that present technical
              work with clarity.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
