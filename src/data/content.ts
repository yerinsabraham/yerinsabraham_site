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
  location: "Kigali, Rwanda",
  email: "yerinsabram@gmail.com",
  domain: "https://yerinsabraham.com",
  socials: {
    instagram: "https://www.instagram.com/yerinsabraham/",
    linkedin: "https://www.linkedin.com/in/yerinsabraham/",
    medium: "https://medium.com/@yerinsabraham",
    x: "https://x.com/yerinsabraham",
    facebook: "https://www.facebook.com/abrahamyerins",
  },
  mediumHandle: "yerinsabraham",
};

export const bio = {
  // The "make the polymath claim coherent" paragraph — keep it tight.
  lead: "I'm Yerins Abraham — a Ukrainian-trained physician (M.D., cardiology) and self-taught software engineer based in Kigali.",
  body: "I sit at a rare intersection: I understand the clinic and I can build the software. Right now I'm building Creovine, starting with Tablu, on the way to health technology for the places that need it most. Outside the lab and the IDE I paint, write, and make music. The range isn't a distraction from the work — it is the work.",
};

export const now = {
  // Update this monthly. This is the credibility section: proof you ship.
  updated: "June 2026",
  items: [
    "Building Tablu — restaurant ordering & payments, in a live pilot in Kisimenti, Kigali.",
    "Next: a health-tech product for specialist-doctor access and patient follow-up.",
    "Writing my book, Life is Random, and publishing essays on Medium.",
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
    role: "Founder · Creovine",
    blurb:
      "QR ordering, payments and kitchen display for owner-operated restaurants — keep your margin, own your customer. Live pilot in Kigali.",
    status: "Building now",
  },
  {
    title: "Health technology",
    role: "Founder",
    blurb:
      "The real aim: access to specialist doctors and structured follow-up for underserved regions. Where the M.D. and the engineer finally meet.",
    status: "In design",
  },
  {
    title: "Giggle",
    role: "Founder & CEO",
    blurb:
      "A social/dating platform grown to ~10,000 users, now moving to the app stores.",
    status: "Live",
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
};

export const range: RangeItem[] = [
  {
    field: "Visual art",
    title: "Mother",
    note: "A major painting on female existence, pain and sacrifice — made after a four-year creative drought.",
  },
  {
    field: "Writing",
    title: "Life is Random",
    note: "A book in progress on randomness, creativity and multidisciplinary thinking.",
  },
  {
    field: "Music",
    title: "Singles & projects",
    note: "Releases spanning rap and alternative — another medium for the same ideas.",
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
  "Even Einstein is not a genius — it is other individuals that build you up.",
];
