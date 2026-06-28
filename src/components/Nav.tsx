const links = [
  { href: "/about", label: "About" },
  { href: "/#now", label: "Now" },
  { href: "/#work", label: "Work" },
  { href: "/#writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="font-[family-name:var(--font-fraunces)] text-lg tracking-tight text-ink"
        >
          Yerins Abraham
        </a>
        <ul className="hidden gap-7 text-sm text-ink-soft sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-accent-deep"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
