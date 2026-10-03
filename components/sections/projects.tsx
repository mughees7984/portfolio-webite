import { ArrowUpRight, Code2, LayoutDashboard, Plane, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { Section } from "@/components/section";
import { projects } from "@/data/portfolio";

const icons = {
  plane: Plane,
  sparkles: Sparkles,
  shield: ShieldCheck,
  wallet: Wallet,
  code: Code2,
  layout: LayoutDashboard,
};

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="A selection of work across full-stack, Web3 and AI."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => {
          const Icon = icons[p.icon];
          return (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="h-1 bg-linear-to-r from-primary to-secondary" />
              <div className="flex flex-1 flex-col p-7">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-chip text-chip-foreground">
                  <Icon size={24} />
                </span>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-chip px-2.5 py-1 text-xs font-medium text-chip-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-5 border-t border-border px-7 py-4 text-sm font-semibold">
                {p.live || p.source ? (
                  <>
                    {/* {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                        Live demo <ArrowUpRight size={16} />
                      </a>
                    )} */}
                    {p.source && (
                      <a href={p.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
                        Source <ArrowUpRight size={16} />
                      </a>
                    )}
                  </>
                ) : (
                  <span className="font-medium text-muted">Details available on request</span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}