import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { Pill } from "@/components/Pill";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-black/5 dark:shadow-black/20"
    >
      {/* Image */}
      <div className="h-48 border-b border-border bg-muted/50">
        <img
          src={project.image}
          alt={`Preview of ${project.title}`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-muted-foreground">
              {project.category}
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shrink-0"
            asChild
          >
            <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title} case study`}>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Pill key={item}>{item}</Pill>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
