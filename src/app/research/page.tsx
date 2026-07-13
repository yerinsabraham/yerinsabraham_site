import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import { site } from "@/data/content";
import { research } from "@/data/research";

// For now the /research index shows the single lead piece in full. When a
// second research entry is added, split this into an index + /research/[slug].
const piece = research[0];

export const metadata: Metadata = {
  title: `Field notes: ${piece.title}`,
  description: piece.excerpt,
  alternates: { canonical: "/research" },
  openGraph: {
    title: piece.title,
    description: piece.excerpt,
    url: `${site.domain}/research`,
    type: "article",
  },
};

export default function ResearchPage() {
  const url = `${site.domain}/research`;

  return (
    <main className="overflow-x-hidden">
      <Nav />

      <article className="mx-auto max-w-2xl px-6 pt-36 pb-28">
        <a
          href="/"
          className="text-sm text-ink-soft underline-offset-4 hover:text-accent-deep hover:underline"
        >
          ← Home
        </a>

        <header className="mt-8">
          <p className="eyebrow mb-4">{piece.tag}</p>
          <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(2.2rem,6vw,3.6rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            {piece.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{piece.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="text-sm italic text-ink-soft/80">
              {piece.status}
            </span>
            <ShareButton
              url={url}
              title={piece.title}
              text={`${piece.title} — ${piece.subtitle}`}
            />
          </div>
        </header>

        {piece.heroImage && (
          <Reveal>
            <figure className="mx-auto mt-12 max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-paper-2">
                <Image
                  src={piece.heroImage}
                  alt={piece.heroCaption ?? piece.title}
                  fill
                  sizes="(max-width: 768px) 92vw, 24rem"
                  className="object-cover object-top"
                />
              </div>
              {piece.heroCaption && (
                <figcaption className="mt-3 text-xs leading-relaxed text-ink-soft/70">
                  {piece.heroCaption}
                </figcaption>
              )}
            </figure>
          </Reveal>
        )}

        <div className="mt-12 space-y-12">
          {piece.sections.map((section, sIdx) => (
            <section key={sIdx}>
              {section.heading && (
                <Reveal>
                  <h2 className="mb-5 font-[family-name:var(--font-fraunces)] text-2xl font-light text-ink">
                    {section.heading}
                  </h2>
                </Reveal>
              )}
              <div className="space-y-6">
                {section.paragraphs.map((p, pIdx) => (
                  <Reveal key={pIdx} delay={Math.min(pIdx * 30, 150)}>
                    <p className="font-[family-name:var(--font-fraunces)] text-lg leading-relaxed text-ink/90">
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 border-t border-line pt-10">
          <p className="eyebrow mb-6">Sources</p>
          <ul className="space-y-3">
            {piece.sources.map((s) => (
              <li key={s.href} className="flex gap-3 text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline-offset-4 hover:text-accent-deep hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="text-sm italic text-ink-soft/80">
            Following this work? It updates as I go. — {site.name}
          </p>
          <ShareButton
            url={url}
            title={piece.title}
            text={`${piece.title} — ${piece.subtitle}`}
          />
        </footer>
      </article>
    </main>
  );
}
