import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import { getArticles } from "@/lib/medium";
import {
  site,
  bio,
  now,
  projects,
  press,
  quotes,
  artworks,
} from "@/data/content";
import { books, essays } from "@/data/writings";

export default async function Home() {
  const articles = await getArticles(1);
  const featuredProjects = projects.slice(0, 3);
  const featuredArt = artworks.slice(0, 2);
  const featuredBook = books[0];
  const featuredEssay = essays[0];

  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />

      {/* ABOUT teaser */}
      <Section id="about" eyebrow="The synthesis" bordered>
        <Reveal>
          <p className="max-w-3xl font-[family-name:var(--font-fraunces)] text-2xl leading-relaxed text-ink sm:text-3xl">
            {bio.lead}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            <RichText text={bio.body} />
          </p>
        </Reveal>
        <Reveal delay={140}>
          <a
            href="/about"
            className="mt-8 inline-block text-sm text-accent-deep underline-offset-4 hover:underline"
          >
            Read the full story &rarr;
          </a>
        </Reveal>
      </Section>

      {/* NOW */}
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
                <span>
                  <RichText text={item} />
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* WORK teaser */}
      <Section id="work" eyebrow="Selected work" bordered>
        <HeadingRow title="Building with Creovine" href="/work" label="See all work" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {featuredProjects.map((p, idx) => {
            const Wrapper = p.href ? "a" : "div";
            return (
              <Reveal key={p.title} delay={idx * 60}>
                <Wrapper
                  {...(p.href
                    ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col bg-paper p-7 transition-colors hover:bg-paper-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-[family-name:var(--font-fraunces)] text-xl text-ink">
                      {p.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 text-[0.65rem] text-accent-deep">
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {p.blurb}
                  </p>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ART teaser */}
      <Section id="art" eyebrow="Art" bordered>
        <HeadingRow
          title="Pen, ink, and patience"
          href="/art"
          label="View gallery"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featuredArt.map((a) => (
            <Reveal key={a.src}>
              <a href="/art" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-line bg-paper-2">
                  <Image
                    src={a.src}
                    alt={a.title}
                    width={a.w}
                    height={a.h}
                    sizes="(max-width: 640px) 92vw, 46vw"
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-3 font-[family-name:var(--font-fraunces)] text-lg italic text-ink">
                  {a.title}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WRITING teaser */}
      <Section id="writing" eyebrow="Words & ideas" bordered>
        <HeadingRow
          title="Books, essays, a podcast"
          href="/writing"
          label="All writing"
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {/* Featured book */}
          <Reveal>
            <div className="flex h-full flex-col bg-paper p-7">
              <span className="text-xs uppercase tracking-wider text-accent-deep">
                Book · {featuredBook.status}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-xl text-ink">
                {featuredBook.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {featuredBook.excerpt}
              </p>
              {featuredBook.buyLink && (
                <a
                  href={featuredBook.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-medium text-accent-deep underline-offset-4 hover:underline"
                >
                  Buy on Selar &rarr;
                </a>
              )}
            </div>
          </Reveal>
          {/* Featured essay */}
          <Reveal delay={60}>
            <a
              href={`/writing/${featuredEssay.slug}`}
              className="flex h-full flex-col bg-paper p-7 transition-colors hover:bg-paper-2"
            >
              <span className="text-xs uppercase tracking-wider text-accent-deep">
                {featuredEssay.note ?? "Essay"}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-xl text-ink">
                {featuredEssay.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {featuredEssay.excerpt}
              </p>
            </a>
          </Reveal>
          {/* Latest Medium */}
          {articles[0] && (
            <Reveal delay={120}>
              <a
                href={articles[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col bg-paper p-7 transition-colors hover:bg-paper-2"
              >
                <span className="text-xs uppercase tracking-wider text-accent-deep">
                  Latest on Medium
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-fraunces)] text-xl leading-snug text-ink">
                  {articles[0].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {articles[0].excerpt}
                </p>
              </a>
            </Reveal>
          )}
        </div>
      </Section>

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

function HeadingRow({
  title,
  href,
  label,
}: {
  title: string;
  href: string;
  label: string;
}) {
  return (
    <Reveal>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-light text-ink sm:text-4xl">
          {title}
        </h2>
        <a
          href={href}
          className="text-sm text-accent-deep underline-offset-4 hover:underline"
        >
          {label} &rarr;
        </a>
      </div>
    </Reveal>
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
      className={`px-6 py-20 ${bordered ? "border-t border-line" : ""}`}
    >
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-8">{eyebrow}</p>
        {children}
      </div>
    </section>
  );
}
