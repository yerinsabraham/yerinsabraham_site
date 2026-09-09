import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ShareButton from "@/components/ShareButton";
import { site } from "@/data/content";
import { engineering, getEngineering } from "@/data/engineering";

export function generateStaticParams() {
  return engineering.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getEngineering(slug);
  if (!p) return { title: "Not found" };

  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/engineering/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.excerpt,
      url: `${site.domain}/engineering/${p.slug}`,
      type: "article",
      publishedTime: p.datePublished,
      modifiedTime: p.dateModified,
      authors: [site.domain],
    },
  };
}

// Long-form date, written out so the dateline reads as prose rather than an
// ISO string. The machine-readable value stays in the `dateTime` attribute.
function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function EngineeringPiecePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getEngineering(slug);
  if (!p) notFound();

  const url = `${site.domain}/engineering/${p.slug}`;

  // TechArticle rather than the site's ScholarlyArticle: this is engineering
  // documentation, and the author is bound by @id to the Person in the root
  // layout so the engineer and the doctor read as one entity.
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: p.title,
    name: p.title,
    abstract: p.excerpt,
    description: p.subtitle,
    inLanguage: "en",
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    author: { "@id": `${site.domain}/#person` },
    url,
    mainEntityOfPage: url,
    keywords: p.stack.join(", "),
  };

  return (
    <main className="overflow-x-hidden">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="mx-auto max-w-2xl px-6 pt-36 pb-28">
        <a
          href="/engineering"
          className="text-sm text-ink-soft underline-offset-4 hover:text-accent-deep hover:underline"
        >
          ← All engineering notes
        </a>

        <header className="mt-8">
          <p className="eyebrow mb-4">{p.tag}</p>
          <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(2.2rem,6vw,3.6rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            {p.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{p.subtitle}</p>

          <p className="mt-6 text-sm text-ink-soft">
            By <span className="font-medium text-ink">{p.author}</span>
            <span className="mx-2 text-ink-soft/40">·</span>
            <time dateTime={p.datePublished}>{formatDate(p.datePublished)}</time>
            <span className="mx-2 text-ink-soft/40">·</span>
            {p.status}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <ShareButton
              url={url}
              title={p.title}
              text={`${p.title} — ${p.subtitle}`}
            />
          </div>
        </header>

        <div className="mt-12 space-y-12">
          {p.sections.map((section, sIdx) => (
            <section key={sIdx}>
              {section.heading && (
                <Reveal>
                  <h2 className="mb-5 font-[family-name:var(--font-fraunces)] text-2xl font-light text-ink">
                    {section.heading}
                  </h2>
                </Reveal>
              )}
              <div className="space-y-6">
                {section.paragraphs.map((para, pIdx) => (
                  <Reveal key={pIdx} delay={Math.min(pIdx * 30, 150)}>
                    <p className="font-[family-name:var(--font-fraunces)] text-lg leading-relaxed text-ink/90">
                      {para}
                    </p>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>

        {p.links && p.links.length > 0 && (
          <section className="mt-16 border-t border-line pt-10">
            <p className="eyebrow mb-6">References</p>
            <ul className="space-y-3">
              {p.links.map((l) => (
                <li key={l.href} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline-offset-4 hover:text-accent-deep hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  );
}
