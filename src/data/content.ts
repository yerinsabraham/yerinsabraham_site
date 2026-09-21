/*
  Single source of truth for site content.
  Edit copy/links here — components read from this file. No JSX to touch.
*/

export const site = {
  name: "Yerins Abraham",
  fullName: "Yerinmene Abraham Saibakumo",
  identity: "The Polymath",
  throughline:
    "Medical doctor and software engineer. I build AI systems that take real actions in production, including one that carries a patient's case from a village clinic to the specialist who can answer it.",
  /* Cycled in the hero sub-line. Each frame pairs the discipline with the thing
     that earns it, because a list of bare nouns reads as range without depth. */
  disciplines: [
    { label: "Doctor", proof: "M.D., General Medicine" },
    { label: "Engineer", proof: "AI agents running inside a production bank" },
    { label: "Founder", proof: "Creovine, four live products" },
    { label: "Artist", proof: "Index, 106 x 365cm in pen and ink" },
    { label: "Author", proof: "Index, published" },
    { label: "Musician", proof: "Releases across rap and alternative" },
  ],
  voiceLine: "My creative process is gardening, not architecture.",
  /* The address organisational outreach is sent from, so a buyer who searches
     the sender finds the same address here. The personal one stays for
     everything else. */
  email: "yerins@creovine.com",
  personalEmail: "yerinsabram@gmail.com",
  domain: "https://yerinsabraham.com",
  socials: {
    github: "https://github.com/yerinsabraham",
    instagram: "https://www.instagram.com/yerinsabraham/",
    linkedin: "https://www.linkedin.com/in/yerinsabraham/",
    medium: "https://medium.com/@yerinsabraham",
    x: "https://x.com/yerinsabraham",
    facebook: "https://www.facebook.com/abrahamyerins",
    youtube: "https://www.youtube.com/@YerinsAbraham",
    soundcloud: "https://soundcloud.com/yerinsabraham",
  },
  // The couple's joint channel with Sarah (used on the About page).
  youtubeCouple: "https://www.youtube.com/@TheAbrahamAndSarah",
  mediumHandle: "yerinsabraham",
  // Wikidata item, cross-linked in the Person schema for entity verification.
  wikidata: "https://www.wikidata.org/wiki/Q140372807",
  artProfile: "https://diarbid.com/artists/yerins-abraham",
  portfolio: "/Yerins-Abraham-Portfolio.pdf",
};

/* The evidence strip, directly under the hero.
   Every figure here is checkable: the request and error counts come from
   CloudWatch on the banking platform, the service counts from the repository.
   Nothing in here is an adjective. */
export type Evidence = { stat: string; label: string; href?: string };

export const evidence: Evidence[] = [
  {
    /* Names the thing built, not just where it runs. "Live in Rwandan hospitals"
       said neither what was live nor whose work it was, and read as though he
       practises there. */
    stat: "Built a specialist referral platform, live in Rwanda",
    label:
      "Oystar carries a patient's full case from a frontline clinic to the right specialist, and brings the clinical answer back",
    href: "https://oystar.app",
  },
  {
    /* Sits second on purpose: it answers the question the line above raises,
       which is where the medicine actually comes from. */
    stat: "M.D., trained in Ukraine",
    label:
      "Six years of general medicine at Sumy State University, taught entirely in English",
  },
  {
    stat: "2 errors in 65,942 requests",
    label: "Production banking API, 30 days to September 2026, p95 284ms",
  },
  {
    stat: "120+ engineers trained",
    label: "Creovine Academy, teaching AI in real engineering work",
    href: "https://academy.creovine.com",
  },
  {
    stat: "Artwork exhibited across Europe, Africa and the UAE",
    label: "Kyiv, Sumy, Lagos, Abuja and Dubai. Pen and ink, at scale",
    href: "/art",
  },
  {
    stat: "Open source",
    label: "trackline, a regression gate for LLM systems",
    href: "https://github.com/yerinsabraham/trackline",
  },
];

export const bio = {
  // A synthesis of who he is — a story, not a CV.
  lead: "Yerins Abraham is a polymath in the demanding sense: a medical doctor and a software engineer, each proven by something built.",
  body: "Six years of medicine taught him how the body fails and how clinicians actually work. Six years of engineering gave him the means to do something about it. The two met in Oystar, a referral platform now running in Rwandan hospitals, and they meet again in the AI systems he builds for banks and businesses, where the question is never whether a model can answer but whether it can be trusted to act. The art, the writing and the music run alongside, and they are not a distraction from the work. They are why he can see a problem from an angle nobody else in the room is standing at.",
};

// Long-form biography for the /about page. First person, your real voice
// (adapted from your LinkedIn summary + public record). Edit freely.
export const about = {
  intro:
    "A polymath who thrives at the intersection of creativity, technology, and problem-solving.",
  paragraphs: [
    "A medical doctor trained in General Medicine (six years of it), I've spent the last five-plus years building impactful digital solutions: full-stack and blockchain applications, scalable APIs, and cloud infrastructure for startups and growing tech companies. Studying medicine taught me how the human body and mind work; engineering gave me the tools to build. I bring that same diagnostic curiosity to everything I make.",
    "Beyond tech, I'm an artist and entrepreneur, exploring ways to merge design, storytelling, and technology into experiences that resonate and drive engagement. My versatility lets me adapt quickly, learn new tools, and deliver across wildly different projects, from Web3 development to art exhibitions and fintech.",
    "I'm passionate about products and systems that are both technically robust and creatively inspired, and I enjoy collaborating with teams to turn complex ideas into functional, meaningful outcomes.",
    "My path ran from Nigeria to Sumy State University in Ukraine, where I earned my medical degree, into software engineering, and across art, music and fashion. These days my curiosity keeps pulling me toward health technology, and it led me to build Oystar, a platform that helps patients reach the specialists they need and makes sure the answer gets back to the clinic that sent them, with intelligence built in. I am starting in Rwanda, where I am based, but it is built for a problem that reaches far beyond one country. My product studio, Creovine, is where this and my other software live.",
    "I don't build alone. I build with my partner Sarah Oba, a product manager, full-stack engineer and content creator, and the co-founder behind Creovine with me. We share our life and work openly, including on our YouTube channel, and in 2026 I proposed to her in Rwanda, a story that found its way across the internet. The best things I make, I make with her.",
  ],
  // Third-person bio for press, speaker intros, and syndication. Copy-ready.
  pressBioShort:
    "Yerins Abraham is a polymath: a medical doctor and software engineer whose range spans art, writing and music, increasingly drawn to technology for human health.",
  pressBio:
    "Yerins Abraham is a polymath, a medical doctor trained in General Medicine and a software engineer. His curiosity spans medicine, technology and the arts, and increasingly it points in one direction: health technology, and how to improve access to care. He is the founder of Oystar, a platform that closes the gap between frontline clinics and specialists so patients reach the care they need, starting in Rwanda. He also runs the product studio Creovine, and as a visual artist is known for large pen-and-ink works including Index (2020) and Mother (2024), exhibited internationally; he is the author of the book Index. Known in the media as “The Nigerian Da Vinci,” his wide range serves a single instinct: building things that meet real human needs.",
  // Quick-facts panel. Confirm/adjust any of these.
  facts: [
    { label: "Focus", value: "Technology for human health" },
    { label: "Training", value: "M.D., General Medicine, Sumy State University" },
    { label: "Origin", value: "Delta & Bayelsa State, Nigeria" },
    { label: "Languages", value: "English, Russian, Izon, French (a little)" },
    { label: "Stack", value: ".NET, React, Next.js, Flutter, AWS" },
    { label: "Studio", value: "Creovine (Oystar, Academy, Lira, Brydg, Tablu)" },
    { label: "With", value: "Sarah Oba, partner & co-founder" },
  ],
};

export type Video = { title: string; href: string; thumb: string };

export const musicVideos: Video[] = [
  {
    title: "WINGS",
    href: "https://www.youtube.com/watch?v=BGuGNP3q1sk",
    thumb: "/img/music-wings.jpg",
  },
  {
    title: "Burn",
    href: "https://www.youtube.com/watch?v=xTbKqA92pmY",
    thumb: "/img/music-burn.jpg",
  },
  {
    title: "Black Heritage",
    href: "https://www.youtube.com/watch?v=6URSd-6ZoUY",
    thumb: "/img/music-black-heritage.jpg",
  },
  {
    title: "I'm Fine",
    href: "https://www.youtube.com/watch?v=IZ3jnL_8SnY",
    thumb: "/img/music-im-fine.jpg",
  },
  {
    title: "HOPE",
    href: "https://www.youtube.com/watch?v=u0gAjH2wtWM",
    thumb: "/img/music-hope.jpg",
  },
];

// A featured talk, proof of the "available for speaking" line.
export const speaking = {
  title: "Speaking at Nigeria Fintech Week",
  context: "Lagos, 2022",
  blurb: "On fintech, blockchain and entrepreneurship.",
  href: "https://www.youtube.com/watch?v=d2d_iQ7dG84",
  thumbnail: "/img/speaking-fintech.jpg",
};

export const now = {
  updated: "September 2026",
  heading: "What I'm working on",
  focus: {
    tag: "Building",
    body: "In much of the world, a patient who needs a specialist has no reliable way to reach one.",
    detail:
      "They are sent off with a slip of paper, travel far, and are often never seen, while the clinic that sent them never learns what happened. I built Oystar to close that gap: a platform, with intelligence built in, that carries a patient's full case from a frontline clinic to the right specialist and brings the clinical answer back, so no one is lost in between. The patient needs no phone and no app.",
    engineering:
      "The medicine tells me what has to be true. The engineering makes it true: FHIR-compatible endpoints, six tracked referral stages so a patient who never arrives is flagged instead of lost, real accounts and real authorisation with nothing mocked on the clinical path, on Next.js and a Fastify API I run on AWS. Starting in Rwanda, where I am based, for a problem that runs across Africa and far beyond it.",
    image: "/img/oystar-brand.jpg",
    imageW: 1200,
    imageH: 1200,
    imageCaption: "Oystar — closing the gap between clinics and specialists. Live at oystar.app.",
    cta: { label: "Visit Oystar", href: "https://oystar.app" },
  },
  also: [
    "Building Creovine Academy, teaching people and teams to use AI in the work they already do. Now training organisations.",
    "Advancing Lira Intelligence, our AI customer-support product, now live.",
    "Writing my book, Life Is Random, and publishing essays on Medium.",
  ],
};

export type Project = {
  title: string;
  role: string;
  blurb: string;
  status: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Oystar",
    role: "Founder",
    blurb:
      "Carries a patient's full case from a frontline clinic to the right specialist and brings the clinical answer back, tracking six referral stages so a patient who never arrives is flagged rather than lost. FHIR-compatible, real authorisation, nothing mocked on the clinical path. Next.js on a Fastify API. Where the M.D. and the engineer finally meet.",
    status: "Early access · Rwanda",
    href: "https://oystar.app",
  },
  {
    title: "Lira Intelligence",
    role: "Creovine",
    blurb:
      "AI support that answers from a company's own knowledge base and then acts: chat, email, voice and WhatsApp. Production RAG on Qdrant with hybrid retrieval, tool-calling agents under a seven-tier risk model with maker-checker approval, an MCP gateway for customer-owned tools, and an eval harness gating every merge.",
    status: "Live",
    href: "https://liraintelligence.com/",
  },
  {
    title: "Brydg",
    role: "Creovine",
    blurb:
      "AI-native hiring. Applications, AI-assisted interview pipelines, scheduling, offers and analytics, running on the shared Creovine API.",
    status: "Live",
    href: "https://brydg.app/",
  },
  {
    title: "Creovine Academy",
    role: "Founder, with Sarah Oba",
    blurb:
      "A school for using AI in real work, taught from six-plus years of shipping production software for banks and growing companies. 120+ people trained. Single courses, a two-semester track with marked projects and a verifiable certificate, and customised programmes for organisations. Web and iOS.",
    status: "Live · Enrolling",
    href: "https://academy.creovine.com",
  },
  {
    title: "Creovine",
    role: "Co-founder & CEO",
    blurb:
      "An AI product studio building the future of work: intelligent automation across hiring, customer support, and more. The studio behind much of this work.",
    status: "Studio",
    href: "https://creovine.com/",
  },
  {
    title: "Tablu",
    role: "Creovine",
    blurb:
      "QR ordering, payments and kitchen display for owner-operated restaurants. Keep your margin, own your customer. Currently in a live pilot.",
    status: "Building now",
    href: "https://www.tabluhq.com/",
  },
  {
    title: "Metart Africa",
    role: "Founder & CEO",
    blurb:
      "A venture at the intersection of art, technology and the African creative economy.",
    status: "Live",
  },
];

export type RangeItem = {
  field: string;
  title: string;
  note: string;
  href?: string;
  hrefLabel?: string;
};

export const range: RangeItem[] = [
  {
    field: "Visual art",
    title: "Index and Mother",
    note: "Index is 106 x 365cm of pen and ink and took most of 2020, with months spent studying cryptography to hide readable messages inside it. Mother, 106 x 275cm, came after a four-year drought. Exhibited in Kyiv, Sumy, Lagos, Abuja and Dubai.",
    href: "https://diarbid.com/artists/yerins-abraham",
    hrefLabel: "View art profile",
  },
  {
    field: "Writing",
    title: "Index, and Life Is Random",
    note: "Index is published and serves as the catalogue to the artwork of the same name. Life Is Random is in progress, on chance, choice and multidisciplinary thinking. Essays on Medium in between.",
    href: "/writing",
    hrefLabel: "Read more",
  },
  {
    field: "Music",
    title: "Five released singles",
    note: "WINGS, Burn, Black Heritage, I'm Fine and HOPE. Written, recorded and released across rap and alternative. Another medium for the same ideas.",
  },
  {
    field: "Fashion",
    title: "Indigozz",
    note: "Founder. Staged the first African fashion show in Eastern Europe, in Ukraine in 2017.",
  },
];

export type Press = {
  outlet: string;
  quote: string;
  href: string;
  year?: string;
};

export const press: Press[] = [
  {
    outlet: "FAB L'Style",
    quote: "The Nigerian Da Vinci, on his quest for boundless creativity.",
    href: "https://fablstyle.com/yerins-abraham-the-nigerian-da-vinci-on-his-quest-for-boundless-creativity/",
    year: "2024",
  },
  {
    outlet: "The Punch",
    quote: "I've put medicine on hold for fashion and the arts.",
    href: "https://punchng.com/ive-put-medicine-on-hold-for-fashion-arts-yerins/",
    year: "2021",
  },
  {
    outlet: "Channels Television",
    quote: "Ex-BBN housemate Yerins Abraham proposes to his partner in Rwanda.",
    href: "https://www.channelstv.com/2026/04/17/ex-bbn-housemate-yerins-abraham-proposes-to-partner-in-rwanda/",
    year: "2026",
  },
  {
    outlet: "TVC",
    quote: "A television feature on his life across medicine, art and tech.",
    href: "https://www.youtube.com/watch?v=uQ1QowKYC5A",
  },
  {
    outlet: "BellaNaija Weddings",
    quote: "A birthday getaway in Rwanda that led to a sweet “yes.”",
    href: "https://www.bellanaijaweddings.com/sarah-yerins-surprise-proposal/",
    year: "2026",
  },
  {
    outlet: "Leadership",
    quote: "Yerins Abraham announces engagement to Sarah Oba.",
    href: "https://leadership.ng/bbnaijas-yerins-abraham-announces-engagement-to-sarah-oba/",
    year: "2026",
  },
  {
    outlet: "Legit.ng",
    quote: "Medicine to Music: a peek into the versatile life of Yerins.",
    href: "https://www.legit.ng/1426546-medicine-music-a-peek-into-versatile-life-bbnaija-2021-housemate-yerins.html",
    year: "2021",
  },
];

// Pull-quotes in Yerins's own words. Each opens a modal with its source + meaning.
export type Quote = { text: string; source: string; explanation: string };

export const gardeningQuote: Quote = {
  text: "My creative process is gardening, not architecture.",
  source: "Said by Yerins Abraham in his 2024 FAB L'Style interview, “The Nigerian Da Vinci.”",
  explanation:
    "An architect draws a fixed blueprint and builds exactly to it. A gardener plants, tends, and works with whatever grows, including the surprises. Yerins approaches creativity the same way. Rather than forcing a rigid plan onto a piece, he sets things in motion and responds to what emerges, treating mistakes not as failures but as new directions, another way to make something that could never have been planned. It is the same idea that runs through his book Life Is Random: the best things often come from what was never intended.",
};

export const beginningsQuote: Quote = {
  text: "There is an end to every beginning, but no end to beginnings.",
  source: "A line from Yerins Abraham's book, Index.",
  explanation:
    "Everything that starts will also end. A feeling, a season of life, a relationship, a chapter, each beginning carries its own ending. But an ending is never the final word. When one thing closes, another opens. In his writing on love, the rush felt at the start of a relationship eventually fades, yet a new and deeper feeling can begin in its place. The point is not to fear endings, but to recognise that beginnings never run out.",
};

export type Artwork = {
  src: string;
  title: string;
  medium: string;
  dimensions?: string;
  year?: string;
  feature?: boolean; // shown large with full description
  note?: string;
  w: number;
  h: number;
};

export const artworks: Artwork[] = [
  {
    src: "/img/index-full.png",
    title: "Index",
    year: "2020",
    dimensions: "106 × 365 cm",
    medium: "Pen & ink on paper",
    feature: true,
    note: "My most detailed and thought-through work. A vast compilation drawing that tells a single story while asking viewers to find where those stories exist in their own lives. The idea began in 2017, when I penned the concept and started writing the book Index, which explains the piece and serves as its catalogue. I finished it in 2020, spending almost the whole year doing nothing else. Index is divided into three sections, The Intended Beginning, The Unintended Middle and The Projected End. I also spent months studying cryptography to hide codes and messages inside it.",
    w: 1870,
    h: 731,
  },
  {
    src: "/img/mother.jpg",
    title: "Mother",
    year: "2024",
    dimensions: "106 × 275 cm",
    medium: "Pen & ink on paper",
    feature: true,
    note: "A meditation on the mother as the foundational source of existence. At the center, a mother figure in anguish carries the sacrifices of the maternal journey, yet remains resilient. The branches around her represent how a mother's influence extends beyond her family into the wider community and world. A tribute to the universal significance of maternal love and sacrifice.",
    w: 1600,
    h: 1066,
  },
  {
    src: "/img/lifes-veil.jpg",
    title: "Life's Veil",
    dimensions: "106 × 92 cm",
    medium: "Pen & ink on paper",
    feature: true,
    note: "A symbolic work that merges anatomical realism with cultural identity. The central figure wears a traditional African headwrap, a sign of heritage and grace, while parts of the face and chest are rendered as exposed skull, spine and ribcage. Beneath culture, beauty and identity lies the shared fragility of human existence. It asks: what lies beneath the identities we wear?",
    w: 995,
    h: 1500,
  },
  {
    src: "/img/art-1.jpg",
    title: "Index — The Intended Beginning",
    medium: "Section detail",
    w: 1600,
    h: 1066,
  },
  {
    src: "/img/art-2.jpg",
    title: "Index — The Unintended Middle",
    medium: "Section detail",
    w: 1600,
    h: 1163,
  },
  {
    src: "/img/art-3.jpg",
    title: "Index — The Projected End",
    medium: "Section detail",
    w: 1600,
    h: 1143,
  },
  {
    src: "/img/mother-detail.jpg",
    title: "Mother (central panel)",
    medium: "Detail",
    w: 500,
    h: 500,
  },
  {
    src: "/img/index-progress.jpg",
    title: "Index, in the studio",
    medium: "Process",
    w: 887,
    h: 614,
  },
  {
    src: "/img/mother-process.jpg",
    title: "Mother, in progress",
    medium: "Process",
    w: 1406,
    h: 1600,
  },
];

// Terms that should auto-link wherever they appear in body prose.
// Longer terms are matched first; only the first occurrence per block links.
export const inlineLinks: { term: string; href: string }[] = [
  { term: "Life Is Random", href: "/writing/life-is-random" },
  { term: "Oystar", href: "https://oystar.app" },
  { term: "Lira Intelligence", href: "https://liraintelligence.com/" },
  { term: "Sarah Oba", href: site.youtubeCouple },
  { term: "Creovine Academy", href: "https://academy.creovine.com" },
  { term: "Creovine", href: "https://creovine.com/" },
  { term: "Tablu", href: "https://www.tabluhq.com/" },
  { term: "Brydg", href: "https://brydg.app/" },
  { term: "Lira", href: "https://liraintelligence.com/" },
  { term: "Medium", href: site.socials.medium },
];
