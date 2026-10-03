import { ArrowDown, Mail } from "lucide-react";
import { jobs, profile, projects } from "@/data/portfolio";

export function Hero() {
  const stats = [
    { value: "2+", label: "Years of experience" },
    { value: String(jobs.length), label: "Companies" },
    { value: String(projects.length), label: "Featured projects" },
  ];

  return (
    <div className="hero-glow">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_1fr] lg:pt-24">
        <div className="animate-fade-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {profile.name}
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl">
            Full Stack Developer building{" "}
            <span className="text-gradient [box-decoration-break:clone]">
              reliable, user-focused web applications
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            I have 2 years of experience delivering end-to-end features, from responsive
            interfaces and secure authentication to well-documented APIs. I care about clean,
            maintainable code and smooth experiences for the people who use it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              View projects <ArrowDown size={18} />
            </a>
            <a
              href={profile.emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-semibold transition hover:border-primary"
            >
              <Mail size={18} /> Email me
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-5 sm:px-6">
                <p className="text-gradient text-3xl font-extrabold">{s.value}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5 [animation-delay:150ms]">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 text-sm text-muted">developer.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 text-[13px] leading-7 sm:text-sm">
            <code>
              <span className="text-muted">const</span> developer = {"{"}
              {"\n"}  <span className="text-primary">name</span>:{" "}
              <span className="text-secondary">&quot;Muhammad Mughees Arif&quot;</span>,
              {"\n"}  <span className="text-primary">role</span>:{" "}
              <span className="text-secondary">&quot;Full Stack Developer&quot;</span>,
              {"\n"}  <span className="text-primary">stack</span>: [
              <span className="text-secondary">&quot;Next.js&quot;</span>,{" "}
              <span className="text-secondary">&quot;NestJS&quot;</span>,
              {"\n"}    <span className="text-secondary">&quot;PostgreSQL&quot;</span>],
              {"\n"}  <span className="text-primary">focus</span>: [
              <span className="text-secondary">&quot;Full-stack apps&quot;</span>,
              {"\n"}    <span className="text-secondary">&quot;Web3&quot;</span>,{" "}
              <span className="text-secondary">&quot;AI integration&quot;</span>],
              {"\n"}
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}