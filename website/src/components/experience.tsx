interface ExperienceItemProps {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

interface ExperienceProps {
  items: ExperienceItemProps[];
}

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="w-full py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-8 space-y-8">
          {items.map((item) => (
            <div key={`${item.company}-${item.role}`} className="rounded-lg border p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <p className="font-medium">{item.role}</p>
                  <p className="text-sm text-muted-foreground">{item.company} • {item.location}</p>
                </div>
                <p className="text-sm text-muted-foreground">{item.start} — {item.end}</p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                {item.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


