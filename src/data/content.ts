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
    spotify: "https://open.spotify.com/show/0C58SpnW0QoKStlsTXG0ht",
  },
  mediumHandle: "yerinsabraham",
  // Wikidata item, cross-linked in the Person schema for entity verification.
  wikidata: "https://www.wikidata.org/wiki/Q140372807",
  artProfile: "https://diarbid.com/artists/yerins-abraham",
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
  ],
  // Quick-facts panel. Confirm/adjust any of these.
  facts: [
    { label: "Origin", value: "Delta & Bayelsa State, Nigeria" },
    { label: "Education", value: "M.D., General Medicine, Sumy State University" },
    { label: "Languages", value: "English, Russian, Izon, French (a little)" },
    { label: "Stack", value: ".NET, React, Next.js, Flutter, AWS" },
    { label: "Building", value: "Creovine · Tablu" },
    { label: "Also known as", value: "The Nigerian Da Vinci" },
  ],
};

export const now = {
  // Update this monthly. This is the credibility section: proof you ship.
  updated: "June 2026",
  items: [
    "Building Tablu, restaurant ordering and payments, in a live pilot in Kisimenti.",
    "Next, a health-tech product for specialist-doctor access and patient follow-up.",
    "Writing my book, Life Is Random, and publishing essays and podcast episodes.",
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
    title: "Tablu",
    role: "Founder, Creovine",
    blurb:
      "QR ordering, payments and kitchen display for owner-operated restaurants. Keep your margin, own your customer. Currently in a live pilot.",
    status: "Building now",
  },
  {
    title: "Health technology",
    role: "Founder",
    blurb:
      "The real aim. Access to specialist doctors and structured follow-up for underserved regions, where the M.D. and the engineer finally meet.",
    status: "In design",
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
    outlet: "Channels Television",
    quote: "Ex-BBN housemate Yerins Abraham proposes to partner in Rwanda.",
    href: "https://www.channelstv.com/2026/04/17/ex-bbn-housemate-yerins-abraham-proposes-to-partner-in-rwanda/amp/",
    year: "2026",
  },
  {
    outlet: "Legit.ng",
    quote: "Medicine to Music: a peek into the versatile life of Yerins.",
    href: "https://www.legit.ng/1426546-medicine-music-a-peek-into-versatile-life-bbnaija-2021-housemate-yerins.html",
    year: "2021",
  },
];

// Philosophy pull-quotes from the FAB L'Style interview.
export const quotes = [
  "My creative process is gardening, not architecture. I anticipate mistakes, and when those mistakes happen, I see it as another way to create something new.",
  "Even Einstein is not a genius. It is other individuals that build you up.",
];

export const podcast = {
  title: "The Polymath Podcast",
  blurb:
    "A thought-provoking show on perception, belief, science, art and ideas, hosted by Yerins Abraham.",
  spotifyShow: "https://open.spotify.com/show/0C58SpnW0QoKStlsTXG0ht",
  // Spotify embed URL (used in an iframe).
  spotifyEmbed:
    "https://open.spotify.com/embed/show/0C58SpnW0QoKStlsTXG0ht?utm_source=generator&theme=0",
};
