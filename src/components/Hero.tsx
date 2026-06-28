"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/content";

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
      className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 pt-28 pb-20"
    >
      <p className="eyebrow mb-6">{site.name}</p>

      {/* The wordmark — biggest type on the page */}
      <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(3.2rem,13vw,9rem)] font-light leading-[0.92] tracking-[-0.02em] text-ink">
        The Polymath
      </h1>

      {/* Rotating discipline — the range, without six competing headlines */}
      <p className="mt-6 flex items-baseline gap-2 text-lg text-ink-soft">
        <span aria-hidden className="text-accent">
          /
        </span>
        <span className="relative inline-block min-w-[8ch]" aria-live="polite">
          {site.disciplines.map((d, idx) => (
            <span
              key={d}
              className="absolute left-0 transition-opacity duration-500"
              style={{ opacity: idx === i ? 1 : 0 }}
            >
              {d}
            </span>
          ))}
          {/* reserve width */}
          <span className="invisible">
            {site.disciplines.reduce((a, b) => (a.length > b.length ? a : b))}
          </span>
        </span>
      </p>

      <p className="mt-10 max-w-2xl font-[family-name:var(--font-fraunces)] text-xl leading-relaxed text-ink sm:text-2xl">
        {site.throughline}
      </p>

      <p className="mt-4 max-w-xl text-base italic text-ink-soft">
        “{site.voiceLine}”
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <a
          href="#work"
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

      <p className="mt-16 text-sm text-ink-soft">{site.location}</p>
    </header>
  );
}
