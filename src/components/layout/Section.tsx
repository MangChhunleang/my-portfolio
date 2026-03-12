import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 scroll-mt-24",
        className
      )}
    >
      <div className="mb-10 max-w-2xl">
        {eyebrow && (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            {eyebrow}
          </div>
        )}
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
