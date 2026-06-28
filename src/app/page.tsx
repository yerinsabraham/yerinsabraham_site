import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { getArticles } from "@/lib/medium";
import {
  site,
  bio,
  now,
  projects,
  range,
  press,
  quotes,
} from "@/data/content";

export default async function Home() {
  const articles = await getArticles(4);

  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />

      {/* ABOUT / SYNTHESIS */}
      <Section id="about" eyebrow="The synthesis">
        <Reveal>
          <p className="max-w-3xl font-[family-name:var(--font-fraunces)] text-2xl leading-relaxed text-ink sm:text-3xl">
            {bio.lead}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {bio.body}
          </p>
        </Reveal>
        <Reveal delay={140}>
          <a
            href="/about"
            className="mt-8 inline-block text-sm text-accent-deep underline-offset-4 hover:underline"
          >
            Read the full story →
          </a>
        </Reveal>
      </Section>

      {/* NOW / BUILDING */}
      <Section id="now" eyebrow={`Now · ${now.updated}`} bordered>
        <Reveal>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-light text-ink sm:text-4xl">
            What I&rsquo;m building
          </h2>
        </Reveal>
        <ul className="mt-8 space-y-5">
          {now.items.map((item, idx) => (
            <Reveal key={item} delay={idx * 70}>
              <li className="flex max-w-2xl gap-4 text-lg text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* SELECTED WORK */}
      <Section id="work" eyebrow="Selected work" bordered>
        <Reveal>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-light text-ink sm:text-4xl">
            Things I&rsquo;ve built
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 60}>
              <article className="flex h-full flex-col bg-paper p-7 transition-colors hover:bg-paper-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-[family-name:var(--font-fraunces)] text-2xl text-ink">
                    {p.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-line px-3 py-1 text-xs text-accent-deep">
                    {p.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-soft/80">{p.role}</p>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {p.blurb}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* RANGE */}
      <Section id="range" eyebrow="The range" bordered>
        <Reveal>
          <h2 className="max-w-2xl font-[family-name:var(--font-fraunces)] text-3xl font-light text-ink sm:text-4xl">
            The breadth isn&rsquo;t a distraction. It&rsquo;s the point.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {range.map((r, idx) => (
            <Reveal key={r.title} delay={idx * 60}>
              <div className="border-t border-line pt-5">
                <p className="eyebrow mb-2">{r.field}</p>
                <h3 className="font-[family-name:var(--font-fraunces)] text-xl text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">
                  {r.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WRITING — Medium feed */}
      {articles.length > 0 && (
        <Section id="writing" eyebrow="Writing" bordered>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-light text-ink sm:text-4xl">
                Thinking in public
              </h2>
              <a
                href={site.socials.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent-deep underline-offset-4 hover:underline"
              >
                Read more on Medium →
              </a>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {articles.map((a, idx) => (
              <Reveal key={a.link} delay={idx * 60}>
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
        </Section>
      )}

      {/* PRESS + QUOTE */}
      <Section id="press" eyebrow="Recognition" bordered>
        <Reveal>
          <blockquote className="max-w-3xl font-[family-name:var(--font-fraunces)] text-2xl font-light italic leading-relaxed text-ink sm:text-3xl">
            &ldquo;{quotes[1]}&rdquo;
          </blockquote>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {press.map((p, idx) => (
            <Reveal key={p.outlet} delay={idx * 60}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-t border-line pt-4 transition-colors hover:border-accent"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-medium text-ink">{p.outlet}</span>
                  <span className="text-xs text-ink-soft/70">{p.year}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {p.quote}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-line bg-paper-2/60 px-6 py-28"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="eyebrow mb-6">Contact</p>
            <h2 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl font-light leading-tight text-ink sm:text-5xl">
              Available for collaboration, speaking, and health-tech
              partnerships.
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-10 inline-block font-[family-name:var(--font-fraunces)] text-2xl text-accent-deep underline-offset-8 hover:underline sm:text-3xl"
            >
              {site.email}
            </a>
          </Reveal>
          <footer className="mt-20 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink-soft">© {site.name}</p>
            <ul className="flex flex-wrap gap-6 text-sm text-ink-soft">
              {Object.entries(site.socials).map(([k, v]) => (
                <li key={k}>
                  <a
                    href={v}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="capitalize transition-colors hover:text-accent-deep"
                  >
                    {k}
                  </a>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </section>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  children,
  bordered = false,
}: {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-6 py-24 ${bordered ? "border-t border-line" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-10">{eyebrow}</p>
        {children}
      </div>
    </section>
  );
}
