import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { getArticles } from "@/lib/medium";
import { site } from "@/data/content";
import { books, essays } from "@/data/writings";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Books, essays and ideas by Yerins Abraham, including Index, Life Is Random, and The Yerins Theory of Love.",
  alternates: { canonical: "/writing" },
};

export default async function WritingHub() {
  const articles = await getArticles(6);

  return (
    <main className="overflow-x-hidden">
      <Nav />

      <header className="mx-auto max-w-5xl px-6 pt-36 pb-12">
        <p className="eyebrow mb-6">Writing</p>
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-[clamp(2.4rem,7vw,4.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
          Books, essays, and ideas.
        </h1>
      </header>

      {/* BOOKS */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="eyebrow mb-8">Books</p>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {books.map((b) => (
            <Reveal key={b.slug}>
              <div className="flex h-full flex-col bg-paper p-7">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-ink">
                    {b.title}
                  </h2>
                  <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-accent-deep">
                    {b.status}
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {b.excerpt}
                </p>
                <div className="mt-5 flex gap-4">
                  {b.buyLink && (
                    <a
                      href={b.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent-deep underline-offset-4 hover:underline"
                    >
                      Buy on Selar →
                    </a>
                  )}
                  {b.body && (
                    <a
                      href={`/writing/${b.slug}`}
                      className="text-sm text-ink-soft underline-offset-4 hover:text-accent-deep hover:underline"
                    >
                      Read excerpt →
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ESSAYS */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <p className="eyebrow mb-8">Essays</p>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {essays.map((e) => (
            <Reveal key={e.slug}>
              <a
                href={`/writing/${e.slug}`}
                className="flex h-full flex-col bg-paper p-7 transition-colors hover:bg-paper-2"
              >
                <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-ink">
                  {e.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {e.excerpt}
                </p>
                {e.note && (
                  <p className="mt-3 text-xs italic text-ink-soft/70">
                    {e.note}
                  </p>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MEDIUM */}
      {articles.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <p className="eyebrow">On Medium</p>
            <a
              href={site.socials.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent-deep underline-offset-4 hover:underline"
            >
              Read more on Medium →
            </a>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {articles.map((a) => (
              <Reveal key={a.link}>
                <a
                  href={a.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col bg-paper p-7 transition-colors hover:bg-paper-2"
                >
                  {a.date && (
                    <time className="text-xs text-ink-soft/70">
                      {new Date(a.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  )}
                  <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-xl leading-snug text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {a.excerpt}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto max-w-5xl px-6 py-24">
        <a
          href="/"
          className="text-sm text-ink-soft underline-offset-4 hover:text-accent-deep hover:underline"
        >
          ← Back home
        </a>
      </div>
    </main>
  );
}
