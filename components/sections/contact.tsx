import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="hero-glow rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something <span className="text-gradient">together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Have a project or a role in mind? Send me a message and I will get back to you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={profile.emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <Mail size={18} /> {profile.email}
            </a>
            <CopyEmail email={profile.email} />
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 font-semibold transition hover:border-primary"
            >
              <Phone size={18} /> {profile.phone}
            </a>
          </div>
          <div className="mt-6 flex justify-center gap-6 text-sm font-semibold text-primary">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
              LinkedIn <ArrowUpRight size={16} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}