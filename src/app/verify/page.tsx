import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { site, verification } from "@/data/content";

export const metadata: Metadata = {
  title: "Verify",
  description:
    "Every claim on Yerins Abraham's CV, with where to confirm it: education, companies, employment, code and products.",
  alternates: { canonical: "/verify" },
};

export default function VerifyPage() {
  return (
    <main className="overflow-x-hidden">
      <Nav />

      <header className="mx-auto max-w-5xl px-6 pt-36 pb-12">
        <p className="eyebrow mb-6">Verify</p>
        <h1 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-[clamp(2.4rem,7vw,4.5rem)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
          Check my record.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Each claim on my CV, and where to confirm it. Anything marked on
          request is private, such as a contract, a diploma or a dashboard, and
          I send it directly: {site.email}.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        {verification.map((group) => (
          <div key={group.heading} className="mb-16">
            <h2 className="eyebrow mb-6">{group.heading}</h2>
            <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
              {group.items.map((item) => (
                <Reveal key={item.claim}>
                  <div className="bg-paper p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="max-w-2xl font-[family-name:var(--font-fraunces)] text-xl text-ink">
                        {item.claim}
                      </h3>
                      <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-accent-deep">
                        {item.access}
                      </span>
                    </div>
                    <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-soft">
                      {item.detail}
                    </p>
                    {item.links.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                        {item.links.map((l) => (
                          <li key={l.href}>
                            <a
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-deep underline-offset-4 hover:underline"
                            >
                              {l.label} &rarr;
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <a
          href="/"
          className="text-sm text-ink-soft underline-offset-4 hover:text-accent-deep hover:underline"
        >
          &larr; Back home
        </a>
      </section>
    </main>
  );
}
