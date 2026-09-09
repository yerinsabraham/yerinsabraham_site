import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { site } from "@/data/content";
import { engineering } from "@/data/engineering";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Architecture notes by Yerins Abraham on production AI systems: agent tool use, retrieval, evaluation and the security boundaries around them.",
  alternates: { canonical: "/engineering" },
  openGraph: {
    title: "Engineering notes",
    description:
      "Architecture notes on production AI systems: agent tool use, retrieval, evaluation and the security boundaries around them.",
    url: `${site.domain}/engineering`,
    type: "website",
  },
};

export default function EngineeringIndex() {
  return (
    <main className="overflow-x-hidden">
      <Nav />

      <header className="mx-auto max-w-5xl px-6 pt-36 pb-12">
        <p className="eyebrow mb-6">Engineering</p>
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-[clamp(2.4rem,7vw,4.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
          How the systems are built.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Short notes on production AI systems I have shipped: what the problem
          actually was, what the design settled into, and what broke along the
          way. Written for engineers.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10 pb-28">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {engineering.map((p) => (
            <Reveal key={p.slug}>
              <a
                href={`/engineering/${p.slug}`}
                className="group flex h-full flex-col bg-paper p-7 transition-colors hover:bg-paper-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow">{p.tag}</p>
                  <span className="text-xs text-ink-soft/70">{p.status}</span>
                </div>

                <h2 className="mt-4 font-[family-name:var(--font-fraunces)] text-2xl font-light leading-snug text-ink transition-colors group-hover:text-accent-deep">
                  {p.title}
                </h2>

                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                  {p.excerpt}
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
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
