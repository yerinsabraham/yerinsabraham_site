import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import { site, about, quotes } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The full story of Yerins Abraham, Nigerian polymath: medical doctor, software engineer, artist and entrepreneur, building toward health technology.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Nav />

      <header className="mx-auto max-w-5xl px-6 pt-36 pb-12">
        <p className="eyebrow mb-6">About</p>
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-[clamp(2.4rem,7vw,4.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
          {about.intro}
        </h1>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
          {/* Narrative */}
          <div className="space-y-7">
            {about.paragraphs.map((p, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
                  <RichText text={p} />
                </p>
              </Reveal>
            ))}

            <Reveal>
              <blockquote className="mt-10 border-l-2 border-accent pl-6 font-[family-name:var(--font-fraunces)] text-2xl font-light italic leading-relaxed text-ink">
                &ldquo;{quotes[0]}&rdquo;
              </blockquote>
            </Reveal>
          </div>

          {/* Facts panel */}
          <aside className="lg:pt-2">
            <Reveal>
              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-paper-2">
                <Image
                  src="/img/chess.jpg"
                  alt="Yerins Abraham"
                  fill
                  sizes="(max-width: 1024px) 90vw, 320px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <dl className="divide-y divide-line rounded-2xl border border-line bg-paper-2/40">
                {about.facts.map((f) => (
                  <div key={f.label} className="px-5 py-4">
                    <dt className="eyebrow mb-1">{f.label}</dt>
                    <dd className="text-base text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-col gap-2 text-sm">
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-deep underline-offset-4 hover:underline"
                >
                  Connect on LinkedIn →
                </a>
                <a
                  href={site.youtubeCouple}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-deep underline-offset-4 hover:underline"
                >
                  Abraham &amp; Sarah on YouTube →
                </a>
              </div>
            </Reveal>
          </aside>
        </div>

        <Reveal>
          <div className="mt-24 flex flex-wrap items-center gap-4 border-t border-line pt-10">
            <a
              href="/#work"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-deep"
            >
              See the work
            </a>
            <a
              href="/#contact"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent-deep"
            >
              Get in touch
            </a>
            <a
              href="/"
              className="ml-auto text-sm text-ink-soft underline-offset-4 hover:text-accent-deep hover:underline"
            >
              ← Back home
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
