export function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-xl text-muted">{description}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}