/*
  Single source of truth for site content.
  Edit copy/links here — components read from this file. No JSX to touch.
*/

export const site = {
  name: "Yerins Abraham",
  fullName: "Yerinmene Abraham Saibakumo",
  identity: "The Polymath",
  throughline:
    "Medical doctor and software engineer, building technology for human health.",
  // Cycled in the hero sub-line — the range, without six competing headlines.
  disciplines: [
    "Physician",
    "Engineer",
    "Artist",
    "Writer",
    "Musician",
    "Founder",
  ],
  voiceLine: "My creative process is gardening, not architecture.",
  email: "yerinsabram@gmail.com",
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

export const bio = {
  // The "make the polymath claim coherent" paragraph — keep it tight.
  lead: "I'm Yerins Abraham, a Ukrainian-trained physician (M.D., General Medicine) and self-taught full-stack engineer.",
  body: "I sit at a rare intersection: I understand the clinic and I can build the software. Right now I'm building Creovine, starting with Tablu, on the way to health technology for the places that need it most. Outside the lab and the IDE I paint, write, and make music. The range isn't a distraction from the work. It is the work.",
};

// Long-form biography for the /about page. First person, your real voice
// (adapted from your LinkedIn summary + public record). Edit freely.
export const about = {
  intro:
    "A polymath who thrives at the intersection of creativity, technology, and problem-solving.",
  paragraphs: [
    "Trained as a medical doctor, six years of General Medicine, I've spent the last five-plus years building impactful digital solutions: full-stack and blockchain applications, scalable APIs, and cloud infrastructure for startups and growing tech companies. The clinic taught me how the human body fails and recovers; engineering gave me the tools to design systems that don't. I bring that same diagnostic precision to debugging and architecture.",
    "Beyond tech, I'm an artist and entrepreneur, exploring ways to merge design, storytelling, and technology into experiences that resonate and drive engagement. My versatility lets me adapt quickly, learn new tools, and deliver across wildly different projects, from Web3 development to art exhibitions and fintech.",
    "I'm passionate about products and systems that are both technically robust and creatively inspired, and I enjoy collaborating with teams to turn complex ideas into functional, meaningful outcomes.",
    "My path ran from Nigeria to Sumy State University in Ukraine, where I earned my M.D., into software I taught myself, and across art, music and fashion. I staged the first African fashion show in Eastern Europe in 2017 and founded Metart Africa. I move often and build wherever I land; right now that means Creovine, with my real long-term aim being health technology for the regions that need it most.",
    "I don't build alone. I build with my partner Sarah Oba, a product manager, full-stack engineer and content creator, and the co-founder behind Creovine with me. We share our life and work openly, including on our YouTube channel, and in 2026 I proposed to her in Rwanda, a story that found its way across the internet. The best things I make, I make with her.",
  ],
  // Third-person bio for press, speaker intros, and syndication. Copy-ready.
  pressBioShort:
    "Yerins Abraham is a Nigerian polymath: a medical doctor and software engineer, artist, author and entrepreneur, and the co-founder and CEO of the AI product studio Creovine.",
  pressBio:
    "Yerins Abraham, known as “The Nigerian Da Vinci,” is a polymath working at the intersection of medicine, technology and art. A Ukrainian-trained medical doctor (M.D., General Medicine, Sumy State University) and self-taught full-stack engineer, he is the co-founder and CEO of Creovine, an AI product studio behind Tablu, Lira Intelligence and Brydg. As a visual artist he is known for large pen-and-ink works including Index (2020) and Mother (2024), exhibited internationally, and he is the author of the book Index, with a second book, Life Is Random, in progress. A former Big Brother Naija housemate and recording artist, his long-term focus is building health technology for underserved regions.",
  // Quick-facts panel. Confirm/adjust any of these.
  facts: [
    { label: "Origin", value: "Delta & Bayelsa State, Nigeria" },
    { label: "Education", value: "M.D., General Medicine, Sumy State University" },
    { label: "Languages", value: "English, Russian, Izon, French (a little)" },
    { label: "Stack", value: ".NET, React, Next.js, Flutter, AWS" },
    { label: "Building", value: "Creovine (Tablu, Lira, Brydg)" },
    { label: "With", value: "Sarah Oba, partner & co-founder" },
  ],
};

export const now = {
  // Update this monthly. This is the credibility section: proof you ship.
  updated: "June 2026",
  items: [
    "Building Tablu, restaurant ordering and payments, in a live pilot in Kisimenti.",
    "Next, a health-tech product for specialist-doctor access and patient follow-up.",
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
    title: "Creovine",
    role: "Co-founder & CEO",
    blurb:
      "An AI product studio building the future of work, intelligent automation across hiring, customer support, and more. The home for everything below.",
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
    title: "Lira Intelligence",
    role: "Creovine",
    blurb:
      "AI guest and customer support that resolves requests instantly, built for hospitality and service businesses.",
    status: "Live",
    href: "https://liraintelligence.com/",
  },
  {
    title: "Brydg",
    role: "Creovine",
    blurb:
      "An AI-native hiring platform. Applicant tracking and recruiting automation that modernizes how teams hire.",
    status: "Live",
    href: "https://brydg.app/",
  },
  {
    title: "Health technology",
    role: "Founder",
    blurb:
      "The real aim. Access to specialist doctors and structured follow-up for underserved regions, where the M.D. and the engineer finally meet.",
    status: "Research phase",
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
    title: "Mother",
    note: "A major painting on female existence, pain and sacrifice, made after a four-year creative drought.",
    href: "https://diarbid.com/artists/yerins-abraham",
    hrefLabel: "View art profile",
  },
  {
    field: "Writing",
    title: "Index, and Life Is Random",
    note: "A published book, Index, and a new one in progress on randomness, creativity and multidisciplinary thinking.",
    href: "/writing",
    hrefLabel: "Read more",
  },
  {
    field: "Music",
    title: "Singles and projects",
    note: "Releases spanning rap and alternative, another medium for the same ideas.",
  },
  {
    field: "Fashion",
    title: "Indigozz",
    note: "Founder. Staged the first African fashion show in Eastern Europe (2017).",
  },
];

export type Press = {
  outlet: string;
  quote: string;
  href: string;
  year: string;
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
  source: "From my 2024 interview with FAB L'Style, “The Nigerian Da Vinci.”",
  explanation:
    "An architect draws a fixed blueprint and builds exactly to it. A gardener plants, tends, and works with whatever grows, including the surprises. I create the same way. Rather than forcing a rigid plan onto a piece, I set things in motion and respond to what emerges. I anticipate mistakes, and when they happen I treat them not as failures but as new directions, another way to make something I could never have planned. It is the same belief that runs through my book Life Is Random: the best things often come from what you did not intend.",
};

export const beginningsQuote: Quote = {
  text: "There is an end to every beginning, but no end to beginnings.",
  source: "A line I wrote in my book, Index.",
  explanation:
    "Everything that starts will also end. A feeling, a season of life, a relationship, a chapter, each beginning carries its own ending. But an ending is never the final word. When one thing closes, another opens. In my writing on love, the rush you feel at the start of a relationship eventually fades, yet a new and deeper feeling can begin in its place. The point is not to fear endings, but to see that beginnings never run out.",
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
  { term: "Lira Intelligence", href: "https://liraintelligence.com/" },
  { term: "Sarah Oba", href: site.youtubeCouple },
  { term: "Creovine", href: "https://creovine.com/" },
  { term: "Tablu", href: "https://www.tabluhq.com/" },
  { term: "Brydg", href: "https://brydg.app/" },
  { term: "Lira", href: "https://liraintelligence.com/" },
  { term: "Medium", href: site.socials.medium },
];
