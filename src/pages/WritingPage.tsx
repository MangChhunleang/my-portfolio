import { Calendar, ArrowRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { motion } from "framer-motion";
import { Link } from "react-router";

export function WritingPage() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Thoughtful articles that reinforce expertise and communication"
      description="A writing section can strengthen credibility by showing how you explain ideas, systems, and tradeoffs."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {portfolio.writing.map((post) => (
          <motion.div
            key={post.title}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="rounded-2xl border border-border bg-card p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" /> {post.date}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              {post.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground flex-1">
              {post.excerpt}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {post.readTime}
              </span>
              <Link 
                to={`/writing/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
