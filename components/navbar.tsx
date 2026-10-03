import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#" className="flex items-center gap-3 font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary text-sm font-bold text-primary-foreground">
            MM
          </span>
          <span className="hidden sm:inline">Mughees Arif</span>
        </a>
        <nav className="flex items-center gap-1 text-[15px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded-lg px-3 py-2 text-muted transition hover:text-foreground md:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Hire me
          </a>
          <span className="ml-2"><ThemeToggle /></span>
        </nav>
      </div>
    </header>
  );
}