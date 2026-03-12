import { Link } from "react-router";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div>
            <div className="text-base font-semibold text-foreground">
              {portfolio.name}
            </div>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {portfolio.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Navigate
              </span>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link to="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                More
              </span>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/writing" className="text-muted-foreground hover:text-foreground transition-colors">
                Writing
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <a
              href={portfolio.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={portfolio.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${portfolio.email}`}
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            {portfolio.social.telegram && (
              <a
                href={portfolio.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
