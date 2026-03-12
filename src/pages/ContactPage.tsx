import { useState, type FormEvent } from "react";
import { Mail, Github, Linkedin, Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ced545af-b287-427f-b765-9eb5b6ae739c",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setFormState("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const isDisabled = formState === "submitting";

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="A clean contact experience with direct paths to reach out"
      description="Send me a message below or reach out via direct email or social links."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-lg font-medium text-foreground">
              Direct contact
            </div>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3 transition-colors hover:bg-accent hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> {portfolio.email}
              </a>
              <a
                href={portfolio.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3 transition-colors hover:bg-accent hover:text-foreground"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={portfolio.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3 transition-colors hover:bg-accent hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              {portfolio.social.telegram && (
                <a
                  href={portfolio.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-muted/50 px-4 py-3 transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Send className="h-4 w-4" /> Telegram
                </a>
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-lg font-medium text-foreground">Best fit</div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Open to full-time roles, freelance product work, portfolio builds,
              frontend systems, and AI interface consulting.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="text-lg font-medium text-foreground">
            Send a message
          </div>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <Input
              placeholder="Your name"
              required
              disabled={isDisabled}
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="rounded-xl"
            />
            <Input
              placeholder="Your email"
              type="email"
              required
              disabled={isDisabled}
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="rounded-xl"
            />
            <Input
              placeholder="Company or project"
              disabled={isDisabled}
              value={formData.company}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, company: e.target.value }))
              }
              className="rounded-xl sm:col-span-2"
            />
            <Textarea
              placeholder="Tell me a little about what you're building"
              rows={6}
              required
              disabled={isDisabled}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="rounded-xl sm:col-span-2"
            />
            <div className="flex items-center gap-3 sm:col-span-2">
              <Button
                type="submit"
                disabled={isDisabled}
                className="rounded-full"
              >
                {formState === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit inquiry"
                )}
              </Button>

              {formState === "success" && (
                <span className="inline-flex items-center gap-1.5 text-sm text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                  Message submitted successfully.
                </span>
              )}
              {formState === "error" && (
                <span className="inline-flex items-center gap-1.5 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong. Please try again.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
