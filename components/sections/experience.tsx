import { Check } from "lucide-react";
import { Section } from "@/components/section";
import { jobs } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" title="Experience" description="Where I have worked and what I did there.">
      <div className="space-y-6">
        {jobs.map((j) => (
          <article
            key={j.company}
            className="grid gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8 md:grid-cols-[220px_1fr] md:gap-10"
          >
            <div className="md:border-r md:border-border md:pr-6">
              <time className="text-sm font-medium text-primary">{j.period}</time>
              <p className="mt-2 text-lg font-semibold">{j.company}</p>
              <p className="text-sm text-muted">{j.role}</p>
              {j.current && (
                <span className="mt-3 inline-block rounded-full bg-chip px-3 py-1 text-xs font-semibold text-chip-foreground">
                  Current role
                </span>
              )}
            </div>

            <div>
              <p className="text-foreground/80">{j.summary}</p>
              <ul className="mt-5 space-y-3">
                {j.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-muted">
                    <Check size={18} className="mt-1 shrink-0 text-primary" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                {j.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-chip px-2.5 py-1 text-xs font-medium text-chip-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}