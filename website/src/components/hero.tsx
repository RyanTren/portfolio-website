interface HeroProps {
  name: string;
  tagline: string;
  socials: { label: string; href: string }[];
}

export function Hero({ name, tagline, socials }: HeroProps) {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm text-muted-foreground">Hi, I’m</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {name}
        </h1>
        <p className="mt-4 text-base text-foreground/80">{tagline}</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


