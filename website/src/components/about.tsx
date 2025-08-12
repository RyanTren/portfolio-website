interface AboutProps {
  summary: string;
}

export function About({ summary }: AboutProps) {
  return (
    <section id="about" className="w-full py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-4 text-foreground/80 leading-relaxed">
          {summary}
        </p>
      </div>
    </section>
  );
}


