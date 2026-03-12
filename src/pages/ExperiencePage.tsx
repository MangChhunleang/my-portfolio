import { Download } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Pill } from "@/components/Pill";
import { Button } from "@/components/ui/button";

export function ExperiencePage() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Work history, education, certifications, and resume access"
      description="A clean timeline reinforces credibility and makes it easy to understand progression."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Timeline */}
        <div className="space-y-6">
          {portfolio.experience.map((item) => (
            <div
              key={item.role + item.company}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-xl font-semibold text-foreground">
                    {item.role}
                  </div>
                  <div className="mt-1 text-foreground/80">{item.company}</div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div>{item.period}</div>
                  <div>{item.location}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {item.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="rounded-xl border border-border bg-muted/50 px-4 py-3"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-lg font-medium text-foreground">Resume</div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Provide a PDF resume download plus a concise summary of your
              strengths for fast recruiter review.
            </p>
            <Button className="mt-5 rounded-full">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-lg font-medium text-foreground">
              Education & Certifications
            </div>
            <div className="mt-4 rounded-xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
              Bachelor’s student in Information Technology Engineering
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {portfolio.certifications.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
