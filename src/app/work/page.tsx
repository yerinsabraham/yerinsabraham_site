import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Software and ventures by Yerins Abraham, including Creovine and its products Tablu, Lira Intelligence and Brydg, plus health technology.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="overflow-x-hidden">
      <Nav />

      <header className="mx-auto max-w-5xl px-6 pt-36 pb-12">
        <p className="eyebrow mb-6">Work</p>
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-[clamp(2.4rem,7vw,4.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
          Software, shipped.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          I co-found and lead Creovine, an AI product studio. These are the
          products we build, and where I am headed next.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10 pb-28">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {projects.map((p) => {
            const Wrapper = p.href ? "a" : "div";
            return (
              <Reveal key={p.title}>
                <Wrapper
                  {...(p.href
                    ? {
                        href: p.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                  className="group flex h-full flex-col bg-paper p-7 transition-colors hover:bg-paper-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-ink">
                      {p.title}
                    </h2>
                    <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-accent-deep">
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-soft/80">{p.role}</p>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
                    {p.blurb}
                  </p>
                  {p.href && (
                    <span className="mt-4 text-sm text-accent-deep underline-offset-4 group-hover:underline">
                      Visit site &rarr;
                    </span>
                  )}
                </Wrapper>
              </Reveal>
            );
          })}
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
