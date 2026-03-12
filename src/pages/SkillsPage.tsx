import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/layout/Section";
import { Pill } from "@/components/Pill";

export function SkillsPage() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies organized by category for faster scanning"
      description="This page helps visitors quickly assess technical breadth without digging through long paragraphs."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(portfolio.skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-4 text-lg font-medium text-foreground">
              {category}
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
