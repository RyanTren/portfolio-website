interface SkillsProps {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-foreground/5 px-2 py-1 text-xs text-foreground/80">
      {label}
    </span>
  );
}

export function Skills({ languages, frameworks, tools }: SkillsProps) {
  return (
    <section id="skills" className="w-full py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Languages</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {languages.map((s) => (
                <Pill key={s} label={s} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Frameworks</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {frameworks.map((s) => (
                <Pill key={s} label={s} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Tools</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {tools.map((s) => (
                <Pill key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


