/*
  Research / field-work pieces.
  Rendered on the /research page(s). Data-driven so this stays a living
  document: edit the copy here, no components to touch. Em dashes avoided
  to match the rest of the site. Edit freely.
*/

export type ResearchSection = {
  heading?: string;
  paragraphs: string[];
};

export type ResearchSource = {
  label: string;
  href: string;
};

export type Research = {
  slug: string;
  title: string;
  status: string; // e.g. "Living document · Updated July 2026"
  tag: string; // small eyebrow label, e.g. "Field analysis"
  subtitle: string;
  // Byline + ISO date. Both feed the visible dateline and the Article schema.
  // A dated, attributed document is citable; an undated one is not.
  author: string;
  authorCredential: string;
  datePublished: string; // ISO 8601
  dateModified: string; // ISO 8601
  excerpt: string; // teaser (cards / meta description)
  // Optional lead image. Drop a file in /public/img/ and set the path here,
  // e.g. "/img/research-kigali.jpg". Leave undefined to hide the figure.
  heroImage?: string;
  heroCaption?: string;
  sections: ResearchSection[];
  sources: ResearchSource[];
};

export const research: Research[] = [
  {
    slug: "the-referral-gap",
    title: "The Referral Gap",
    status: "Living document · Updated 11 July 2026",
    tag: "Field research · Rwanda",
    author: "Yerins Abraham",
    authorCredential: "M.D., General Medicine",
    datePublished: "2026-07-11",
    dateModified: "2026-07-11",
    subtitle:
      "A field analysis of specialist referral in Rwanda: why reaching a specialist, and getting the answer back to the district doctor who sent you, is where the system breaks.",
    excerpt:
      "In Rwanda, and across sub-Saharan Africa, the hardest part of specialist care is not the treatment. It is reaching the specialist, and getting the answer back down to the district doctor who made the referral. A field analysis of where the referral funnel leaks patients, drawn from doctors across Rwanda's system and the published literature.",
    heroImage: "/img/research-doctor-library.jpg",
    heroCaption:
      "Where this work begins: a doctor by training, in the medical library, now building technology for care.",
    sections: [
      {
        paragraphs: [
          "This is not a formal academic study. It is what I have learned on the ground, from doctors across Rwanda's system, combined with the published data, as I work toward a solution. I will keep updating it in public as the project develops.",
        ],
      },
      {
        heading: "The problem in one line",
        paragraphs: [
          "In much of sub-Saharan Africa, the hardest part of specialist healthcare is not the treatment. It is reaching the specialist, and getting the answer back down to your local doctor afterward. The system leaks patients at every handoff.",
        ],
      },
      {
        heading: "The funnel",
        paragraphs: [
          "In Rwanda you cannot simply search for an oncologist and book an appointment. Care runs through a strict, pyramid-style referral system tied to community insurance (Mutuelle de Sante). Jump the line straight to a specialist and insurance will not cover it, so you pay 100% out of pocket, which is impossible for most rural citizens. So everyone moves through the funnel.",
          "Step 1, the Health Center. A rural patient first sees an A0 or A1 nurse or a clinical officer, not a doctor. For a complex case they write a paper transfer form: go to the District Hospital.",
          "Step 2, the District Hospital. Here the patient meets a General Practitioner, a frontline doctor, not a specialist. If it is specialized, the GP issues a paper referral letter to a national hospital in Kigali such as CHUK or King Faisal. First major break: the GP cannot book the specialist appointment. The patient becomes the physical carrier of their own medical record, a single sheet of paper.",
          "Step 3, reaching the specialist. Many rural patients have no smartphone or reliable internet to check schedules; a baseline study at CHUK found up to 14% of appointment-booking calls went unanswered. Patients often go home first to save bus fare. And with perhaps only three or four specialists in a given field in the entire country, the wait for a first consultation is commonly three to six months.",
          "Step 4, the specialist visit, and where it collapses. Even with an appointment, median outpatient waits run three and a half to over five hours for a fifteen-minute slot. Then the diagnostic drop-off: the specialist usually cannot treat immediately, they need an MRI, a biopsy, a lab panel. But the MRI is booked out for months, or the reagent is out of stock. The patient is sent home to come back in a month. Exhausted and broke, many never return, and fall out of the system as their condition worsens. Finally, the broken feedback loop: ideally the specialist sends a counter-referral back down to the district GP, but because it is all paper, those notes rarely make it back. If a complication hits at home, the local nurse starts blind.",
        ],
      },
      {
        heading: "Where technology can help, and where it cannot",
        paragraphs: [
          "Honesty matters here. Software cannot create neurosurgeons, unclog an MRI queue, or pay a patient's bus fare. But four of these failures are pure information problems, and those are solvable: carrying the patient's record up to the specialist digitally instead of on paper; closing the counter-referral loop so the specialist's notes flow back down to the district doctor; the booking gap between district doctor and specialist; and tracking patients through the funnel so the ones who drop off can be found and followed up.",
          "What I am working toward is a digital referral and counter-referral layer that carries the record up and the specialist's guidance back down, so patients stop vanishing in the diagnostic drop-off.",
        ],
      },
      {
        heading: "Why Rwanda first, but not Rwanda only",
        paragraphs: [
          "This problem is continental. Doctors I spoke with describe versions of it in Sierra Leone, where there is little referral infrastructure, and Nigeria, where specialist brain drain is the driver. But the solution has to integrate with each country's specific system, and those systems differ profoundly. So the vision is African; the execution starts in Rwanda, which has the region's most organized, digital-forward health system, the best possible place to prove the model before carrying it onward.",
        ],
      },
    ],
    sources: [
      {
        label:
          "Barriers to equitable trauma care in Rwanda (Four Delays framework)",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10546151/",
      },
      {
        label: "Babyl telemedicine implementation lessons, Rwanda (JMIR)",
        href: "https://www.jmir.org/2026/1/e84832",
      },
      {
        label: "State of Cancer Control in Rwanda (JCO Global Oncology)",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7392739/",
      },
      {
        label: "Rwanda Health Labour Market Analysis (WHO / MoH)",
        href: "https://files.aho.afro.who.int/afahobckpcontainer/production/files/Rwanda_HLMA_Report.pdf",
      },
      {
        label: "Physicians per capita, Rwanda (World Bank)",
        href: "https://data.worldbank.org/indicator/SH.MED.PHYS.ZS?locations=RW",
      },
    ],
  },
];

export function getResearch(slug: string) {
  return research.find((r) => r.slug === slug);
}
