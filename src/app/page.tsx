import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import QuoteModal from "@/components/QuoteModal";
import { getArticles } from "@/lib/medium";
import {
  site,
  bio,
  now,
  projects,
  press,
  beginningsQuote,
  artworks,
  musicVideos,
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

      {/* NOW — current focus: health tech */}
      <Section id="now" eyebrow={`Now · ${now.updated}`} bordered>
        <Reveal>
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-light text-ink sm:text-4xl">
            {now.heading}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <Reveal>
              <span className="inline-block rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent-deep">
                {now.focus.tag}
              </span>
              <p className="mt-5 max-w-2xl font-[family-name:var(--font-fraunces)] text-xl leading-relaxed text-ink sm:text-2xl">
                {now.focus.body}
              </p>
            </Reveal>
            <ul className="mt-8 space-y-4 border-t border-line pt-6">
              {now.also.map((item) => (
                <Reveal key={item}>
                  <li className="flex max-w-2xl gap-4 text-base text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={80}>
            <figure>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-paper-2">
                <Image
                  src={now.focus.image}
                  alt="Yerins Abraham at his medical graduation"
                  fill
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-ink-soft/70">
                {now.focus.imageCaption}
              </figcaption>
            </figure>
          </Reveal>
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

      {/* MUSIC — swipeable video row */}
      <section id="music" className="border-t border-line py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-2">Music</p>
                <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-light text-ink sm:text-4xl">
                  Another medium for the same ideas
                </h2>
              </div>
              <div className="flex gap-5 text-sm">
                <a
                  href={site.socials.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-deep underline-offset-4 hover:underline"
                >
                  SoundCloud &rarr;
                </a>
                <a
                  href={site.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-deep underline-offset-4 hover:underline"
                >
                  YouTube &rarr;
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scroll-padding-left:1.5rem]">
            {musicVideos.map((v) => (
              <a
                key={v.href}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-[72vw] shrink-0 snap-start sm:w-[22rem]"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-line bg-paper-2">
                  <Image
                    src={v.thumb}
                    alt={v.title}
                    fill
                    sizes="(max-width: 640px) 72vw, 22rem"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lg transition-transform group-hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1 h-5 w-5"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <p className="mt-3 font-[family-name:var(--font-fraunces)] text-lg italic text-ink">
                  {v.title}
                </p>
              </a>
            ))}
            <div aria-hidden className="w-1 shrink-0" />
          </div>
        </Reveal>
      </section>

      {/* WRITING teaser */}
      <Section id="writing" eyebrow="Words & ideas" bordered>
        <HeadingRow
          title="Books, essays, and ideas"
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

      {/* OTHER WORK — ventures, demoted below the creative range */}
      <Section id="work" eyebrow="Other work" bordered>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-light text-ink sm:text-4xl">
                Software &amp; ventures
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">
                Alongside the health-tech work, I run{" "}
                <RichText text="Creovine" />, a product studio. A few of the
                things built there.
              </p>
            </div>
            <a
              href="/work"
              className="text-sm text-accent-deep underline-offset-4 hover:underline"
            >
              See all work &rarr;
            </a>
          </div>
        </Reveal>
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

      {/* QUOTE */}
      <Section id="quote" eyebrow="In my own words" bordered>
        <Reveal>
          <div className="max-w-3xl font-[family-name:var(--font-fraunces)] text-2xl font-light italic leading-relaxed text-ink sm:text-3xl">
            <QuoteModal quote={beginningsQuote} />
          </div>
        </Reveal>
      </Section>

      {/* PRESS — swipeable "as featured in" row */}
      <section id="press" className="border-t border-line py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="eyebrow mb-2">As featured in</p>
            <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-light text-ink sm:text-4xl">
              Press &amp; recognition
            </h2>
          </Reveal>
        </div>
        <Reveal>
          <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scroll-padding-left:1.5rem]">
            {press.map((p) => (
              <a
                key={p.outlet}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-[78vw] shrink-0 snap-start flex-col justify-between rounded-2xl border border-line bg-paper-2/40 p-7 transition-colors hover:border-accent hover:bg-paper-2 sm:w-[20rem]"
              >
                <div>
                  <p className="font-[family-name:var(--font-fraunces)] text-xl text-ink">
                    {p.outlet}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {p.quote}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-ink-soft/70">{p.year}</span>
                  <span className="text-xs text-accent-deep opacity-0 transition-opacity group-hover:opacity-100">
                    Read &rarr;
                  </span>
                </div>
              </a>
            ))}
            {/* trailing spacer so the last card isn't flush to the edge */}
            <div aria-hidden className="w-1 shrink-0" />
          </div>
        </Reveal>
        <div className="mx-auto mt-4 max-w-5xl px-6">
          <p className="text-xs text-ink-soft/60">Swipe to see more &rarr;</p>
        </div>
      </section>

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
