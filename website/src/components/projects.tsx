interface ProjectItemProps {
  name: string;
  tech: string[];
  description: string;
  highlights: string[];
  href?: string;
}

interface ProjectsProps {
  items: ProjectItemProps[];
}

export function Projects({ items }: ProjectsProps) {
  return (
    <section id="projects" className="w-full py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((p) => (
            <article key={p.name} className="rounded-xl border p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
                {p.href ? (
                  <a className="text-sm underline" href={p.href} target="_blank" rel="noreferrer">View</a>
                ) : null}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-foreground/5 px-2 py-1 text-xs text-foreground/80">{t}</span>
                ))}
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                {p.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


