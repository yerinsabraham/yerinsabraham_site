import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { writings, getWriting } from "@/data/writings";

export function generateStaticParams() {
  return writings.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWriting(slug);
  if (!w) return { title: "Not found" };
  return {
    title: w.title,
    description: w.excerpt,
    alternates: { canonical: `/writing/${w.slug}` },
  };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWriting(slug);
  if (!w) notFound();

  return (
    <main className="overflow-x-hidden">
      <Nav />

      <article className="mx-auto max-w-2xl px-6 pt-36 pb-28">
        <a
          href="/writing"
          className="text-sm text-ink-soft underline-offset-4 hover:text-accent-deep hover:underline"
        >
          ← All writing
        </a>

        <header className="mt-8">
          <p className="eyebrow mb-4">
            {w.kind === "book" ? "Book" : "Essay"} · {w.status}
          </p>
          <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(2.2rem,6vw,3.6rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
            {w.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{w.subtitle}</p>
          {w.note && (
            <p className="mt-2 text-sm italic text-ink-soft/80">{w.note}</p>
          )}

          {w.buyLink && (
            <a
              href={w.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-deep"
            >
              Buy the book →
            </a>
          )}
        </header>

        {w.body && (
          <div className="mt-12 space-y-6">
            {w.body.map((p, idx) => (
              <Reveal key={idx} delay={Math.min(idx * 30, 150)}>
                <p className="font-[family-name:var(--font-fraunces)] text-lg leading-relaxed text-ink/90">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        )}

        {w.chapters && (
          <section className="mt-16 border-t border-line pt-10">
            <p className="eyebrow mb-6">Chapters</p>
            <ol className="space-y-3">
              {w.chapters.map((c, idx) => (
                <li key={c} className="flex gap-4 text-ink-soft">
                  <span className="w-6 shrink-0 text-right text-sm text-accent-deep">
                    {idx + 1}
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        <footer className="mt-20 border-t border-line pt-8">
          <a
            href="/writing"
            className="text-sm text-accent-deep underline-offset-4 hover:underline"
          >
            ← Back to all writing
          </a>
        </footer>
      </article>
    </main>
  );
}
