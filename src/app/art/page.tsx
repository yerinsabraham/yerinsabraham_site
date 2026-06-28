import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { site, artworks } from "@/data/content";

export const metadata: Metadata = {
  title: "Art",
  description:
    "Pen-and-ink artwork by Yerins Abraham, including Index (2020), Mother (2024) and Life's Veil.",
  alternates: { canonical: "/art" },
};

export default function ArtPage() {
  const featured = artworks.filter((a) => a.feature);
  const details = artworks.filter((a) => !a.feature);

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

      {/* Featured works, each large with its story */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="space-y-24">
          {featured.map((a) => {
            const isPortrait = a.h > a.w;
            return (
            <Reveal key={a.src}>
              <figure>
                <div
                  className={`relative overflow-hidden rounded-2xl border border-line bg-paper-2 ${
                    isPortrait ? "mx-auto max-w-md" : ""
                  }`}
                >
                  <Image
                    src={a.src}
                    alt={a.title}
                    width={a.w}
                    height={a.h}
                    sizes={
                      isPortrait
                        ? "(max-width: 640px) 92vw, 448px"
                        : "(max-width: 1024px) 92vw, 1024px"
                    }
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h2 className="font-[family-name:var(--font-fraunces)] text-2xl italic text-ink sm:text-3xl">
                      {a.title}
                      {a.year && (
                        <span className="not-italic text-ink-soft">
                          {" "}
                          ({a.year})
                        </span>
                      )}
                    </h2>
                    <span className="text-sm text-ink-soft">
                      {[a.dimensions, a.medium].filter(Boolean).join(" · ")}
                    </span>
                  </div>
                  {a.note && (
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
                      {a.note}
                    </p>
                  )}
                </figcaption>
              </figure>
            </Reveal>
            );
          })}
        </div>
      </section>

      {/* Details & process */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="eyebrow mb-10">Details & process</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {details.map((a) => (
            <Reveal key={a.src}>
              <figure>
                <div className="relative overflow-hidden rounded-xl border border-line bg-paper-2">
                  <Image
                    src={a.src}
                    alt={a.title}
                    width={a.w}
                    height={a.h}
                    sizes="(max-width: 640px) 92vw, 30vw"
                    className="h-auto w-full transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-sm text-ink">{a.title}</span>
                  <span className="text-xs text-ink-soft">{a.medium}</span>
                </figcaption>
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
