import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import QuoteModal from "@/components/QuoteModal";
import CopyButton from "@/components/CopyButton";
import { site, about, gardeningQuote, speaking } from "@/data/content";

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
              <div className="mt-10 border-l-2 border-accent pl-6 font-[family-name:var(--font-fraunces)] text-2xl font-light italic leading-relaxed text-ink">
                <QuoteModal quote={gardeningQuote} />
              </div>
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

        {/* Press bio — third person, copy-ready for journalists & organizers */}
        <Reveal>
          <div className="mt-24 rounded-2xl border border-line bg-paper-2/40 p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="eyebrow">Bio &amp; press</p>
              <CopyButton text={about.pressBio} label="Copy bio" />
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink">
              {about.pressBio}
            </p>
            <div className="mt-6 border-t border-line pt-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-wider text-ink-soft/70">
                  Short version
                </p>
                <CopyButton text={about.pressBioShort} label="Copy short bio" />
              </div>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
                {about.pressBioShort}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Speaking */}
        <Reveal>
          <div className="mt-16">
            <p className="eyebrow mb-6">Speaking</p>
            <a
              href={speaking.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-6 sm:grid-cols-[1.4fr_1fr] sm:items-center"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-paper-2">
                <Image
                  src={speaking.thumbnail}
                  alt={speaking.title}
                  fill
                  sizes="(max-width: 640px) 92vw, 55vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Play button overlay */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lg transition-transform group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1 h-6 w-6"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-ink">
                  {speaking.title}
                </h2>
                <p className="mt-1 text-sm text-ink-soft/80">
                  {speaking.context}
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {speaking.blurb}
                </p>
                <span className="mt-4 inline-block text-sm text-accent-deep underline-offset-4 group-hover:underline">
                  Watch on YouTube &rarr;
                </span>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 flex flex-wrap items-center gap-4 border-t border-line pt-10">
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
