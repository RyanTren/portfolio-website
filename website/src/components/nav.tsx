import Link from "next/link";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
        <Link href="#" className="text-sm font-semibold">RT</Link>
        <nav className="hidden gap-5 text-sm sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/80 hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}


