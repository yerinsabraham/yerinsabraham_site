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
  title: `${piece.title}: specialist referral in Rwanda`,
  description: piece.excerpt,
  keywords: [
    "referral gap",
    "counter-referral",
    "specialist referral Rwanda",
    "health system Rwanda",
    "digital health Africa",
    "health technology Rwanda",
    "Yerins Abraham",
  ],
  authors: [{ name: piece.author, url: site.domain }],
  alternates: { canonical: "/research" },
  openGraph: {
    title: `${piece.title}: specialist referral in Rwanda`,
    description: piece.excerpt,
    url: `${site.domain}/research`,
    type: "article",
    publishedTime: piece.datePublished,
    modifiedTime: piece.dateModified,
    authors: [site.domain],
  },
};

// Article schema, with the author bound by @id to the Person in the root
// layout. That binding is the point: it tells a search engine the doctor and
// the author of this analysis are one entity, and cites the literature it
// rests on. Sanitised per the Next.js JSON-LD guide.
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id": `${site.domain}/research#article`,
  headline: `${piece.title}: specialist referral in Rwanda`,
  name: piece.title,
  abstract: piece.excerpt,
  description: piece.subtitle,
  inLanguage: "en",
  datePublished: piece.datePublished,
  dateModified: piece.dateModified,
  url: `${site.domain}/research`,
  mainEntityOfPage: `${site.domain}/research`,
  author: {
    "@type": "Person",
    "@id": `${site.domain}/#person`,
    name: piece.author,
    honorificSuffix: "M.D.",
    url: site.domain,
  },
  publisher: {
    "@type": "Person",
    "@id": `${site.domain}/#person`,
    name: site.name,
  },
  about: [
    { "@type": "Thing", name: "Health care referral systems" },
    { "@type": "Thing", name: "Specialist access" },
    { "@type": "Place", name: "Rwanda" },
    { "@type": "Thing", name: "Digital health" },
  ],
  spatialCoverage: { "@type": "Country", name: "Rwanda" },
  citation: piece.sources.map((s) => ({
    "@type": "CreativeWork",
    name: s.label,
    url: s.href,
  })),
};

export default function ResearchPage() {
  const url = `${site.domain}/research`;

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
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
          <p className="mt-6 text-sm text-ink-soft">
            By{" "}
            <span className="font-medium text-ink">{piece.author}</span>,{" "}
            {piece.authorCredential}
            <span className="mx-2 text-ink-soft/40">·</span>
            <time dateTime={piece.datePublished}>11 July 2026</time>
            <span className="mx-2 text-ink-soft/40">·</span>
            Kigali, Rwanda
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
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
