import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { site, artworks } from "@/data/content";

export const metadata: Metadata = {
  title: "Art",
  description:
    "Pen-and-ink artwork by Yerins Abraham, including Mother and works from the Index period.",
  alternates: { canonical: "/art" },
};

export default function ArtPage() {
  const [flagship, ...rest] = artworks;

  return (
    <main className="overflow-x-hidden">
      <Nav />

      <header className="mx-auto max-w-5xl px-6 pt-36 pb-12">
        <p className="eyebrow mb-6">Art</p>
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-[clamp(2.4rem,7vw,4.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
          Pen, ink, and a great deal of patience.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Dense, surreal linework drawn entirely by hand. A second language for
          the same ideas I chase in medicine and code.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={site.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-deep"
          >
            View / download portfolio (PDF)
          </a>
          <a
            href={site.artProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent-deep underline-offset-4 hover:underline"
          >
            Art profile on Diarbid &rarr;
          </a>
        </div>
      </header>

      {/* Flagship: Mother */}
      <section className="mx-auto max-w-5xl px-6 py-10">
        <Reveal>
          <figure>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-paper-2">
              <Image
                src={flagship.src}
                alt={flagship.title}
                width={flagship.w}
                height={flagship.h}
                sizes="(max-width: 1024px) 92vw, 1024px"
                className="h-auto w-full"
                priority
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-[family-name:var(--font-fraunces)] text-2xl italic text-ink">
                {flagship.title}
              </span>
              <span className="text-sm text-ink-soft">{flagship.medium}</span>
            </figcaption>
            {flagship.note && (
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-soft">
                {flagship.note}
              </p>
            )}
          </figure>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-5xl px-6 py-10 pb-28">
        <div className="grid gap-8 sm:grid-cols-2">
          {rest.map((a) => (
            <Reveal key={a.src}>
              <figure>
                <div className="relative overflow-hidden rounded-2xl border border-line bg-paper-2">
                  <Image
                    src={a.src}
                    alt={a.title}
                    width={a.w}
                    height={a.h}
                    sizes="(max-width: 640px) 92vw, 46vw"
                    className="h-auto w-full transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-[family-name:var(--font-fraunces)] text-lg italic text-ink">
                    {a.title}
                  </span>
                  <span className="text-xs text-ink-soft">{a.medium}</span>
                </figcaption>
                {a.note && (
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {a.note}
                  </p>
                )}
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <a
            href="/"
            className="text-sm text-ink-soft underline-offset-4 hover:text-accent-deep hover:underline"
          >
            &larr; Back home
          </a>
        </div>
      </section>
    </main>
  );
}
