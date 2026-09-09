"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site, gardeningQuote } from "@/data/content";
import QuoteModal from "@/components/QuoteModal";

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setI((n) => (n + 1) % site.disciplines.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <header
      id="top"
      className="relative mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div>
        <p className="eyebrow mb-6">{site.name}</p>

        {/* The wordmark, biggest type on the page */}
        <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(3rem,11vw,7.5rem)] font-light leading-[0.92] tracking-[-0.02em] text-ink">
          The Polymath
        </h1>

        {/* Rotating discipline, each frame paired with the thing that earns it.
            A bare list of nouns reads as range without depth; the proof is what
            turns the same device into a claim that carries its own evidence. */}
        <div className="mt-6 min-h-[3.25rem]" aria-live="polite">
          {site.disciplines.map((d, idx) => (
            <p
              key={d.label}
              className="absolute flex flex-wrap items-baseline gap-x-3 gap-y-1 text-lg text-ink-soft transition-opacity duration-500"
              style={{ opacity: idx === i ? 1 : 0 }}
              aria-hidden={idx !== i}
            >
              <span className="flex items-baseline gap-2">
                <span aria-hidden className="text-accent">
                  /
                </span>
                <span className="font-medium text-ink">{d.label}</span>
              </span>
              <span className="text-base text-ink-soft/80">{d.proof}</span>
            </p>
          ))}
        </div>

        <p className="mt-10 max-w-xl font-[family-name:var(--font-fraunces)] text-xl leading-relaxed text-ink sm:text-2xl">
          {site.throughline}
        </p>

        <p className="mt-4 max-w-lg text-base italic text-ink-soft">
          <QuoteModal quote={gardeningQuote} />
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="/work"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-deep"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent-deep"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Portrait */}
      <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-paper-2">
          <Image
            src="/img/portrait.jpg"
            alt="Yerins Abraham"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-cover grayscale-[15%]"
          />
        </div>
      </div>
    </header>
  );
}
