import { useState, useMemo } from "react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

export function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(portfolio.projects.map((p) => p.category))],
    []
  );
  const items =
    filter === "All"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="A structured project library with strong case-study presentation"
      description="Each project card leads to a deeper breakdown of the problem, solution, stack, process, and outcomes."
    >
      {/* Category filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition-colors",
              filter === item
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-accent/50 text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Project grid */}
      {items.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card py-16 text-center">
          <p className="text-lg font-medium text-foreground">
            No projects found
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try selecting a different category.
          </p>
        </div>
      )}
    </Section>
  );
}
