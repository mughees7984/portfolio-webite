import { Section } from "@/components/section";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" title="Skills" description="Technologies I work with, grouped by area.">
      <div className="divide-y divide-border rounded-2xl border border-border bg-card">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="grid gap-3 p-6 sm:grid-cols-[180px_1fr] sm:gap-8 sm:p-7">
            <h3 className="font-semibold">{group}</h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((s) => (
                <li
                  key={s}
                  className="rounded-lg bg-chip px-3 py-1.5 text-sm font-medium text-chip-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}