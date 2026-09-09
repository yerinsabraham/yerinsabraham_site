import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/data/content";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} · The Polymath`,
    template: `%s · ${site.name}`,
  },
  description:
    "Yerins Abraham, Nigerian polymath. Medical doctor and AI/application engineer who builds production AI systems, including Oystar, a clinical referral platform live in Rwanda. Also artist, writer and musician.",
  keywords: [
    "Yerins Abraham",
    "Nigerian polymath",
    "polymath",
    "The Nigerian Da Vinci",
    "medical doctor software engineer",
    "AI engineer",
    "AI application engineer",
    "RAG",
    "AI agents",
    "Creovine",
    "Oystar",
    "health technology",
  ],
  authors: [{ name: site.name, url: site.domain }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.domain,
    title: `${site.name} · The Polymath`,
    description:
      "Nigerian polymath. Medical doctor and AI engineer. I build production AI systems, and a clinical referral platform live in Rwanda.",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · The Polymath`,
    description:
      "Nigerian polymath. Medical doctor and AI engineer. I build production AI systems, and a clinical referral platform live in Rwanda.",
  },
  robots: { index: true, follow: true },
};

// Person schema → the single most important on-page signal for Google's entity descriptor.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.domain}/#person`,
  name: site.name,
  alternateName: ["The Nigerian Da Vinci", site.fullName],
  description:
    "Nigerian physician and AI/application engineer. Builds production AI systems including agentic customer support and an AI agent running inside a live banking API, and founded Oystar, a clinical referral platform running in Rwandan hospitals. Co-founder of the product studio Creovine. Also a visual artist, author and musician.",
  jobTitle: "AI/Application Engineer and Physician",
  nationality: "Nigerian",
  url: site.domain,
  // Each occupation is one a journalist could verify. "Polymath" stays an
  // alternateName, which is how it is actually used about him in the press,
  // rather than a self-asserted job title.
  hasOccupation: [
    { "@type": "Occupation", name: "Physician" },
    { "@type": "Occupation", name: "Software engineer" },
    { "@type": "Occupation", name: "Entrepreneur" },
    { "@type": "Occupation", name: "Visual artist" },
    { "@type": "Occupation", name: "Author" },
  ],
  homeLocation: {
    "@type": "Place",
    name: "Kigali, Rwanda",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kigali",
      addressCountry: "RW",
    },
  },
  knowsAbout: [
    "Medicine",
    "Health technology",
    "Clinical referral systems",
    "Digital health in Africa",
    "Software engineering",
    "Full-stack development",
    "Visual art",
    "Music",
    "Writing",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sumy State University",
    sameAs: "https://en.wikipedia.org/wiki/Sumy_State_University",
  },
  subjectOf: {
    "@type": "ScholarlyArticle",
    "@id": `${site.domain}/research#article`,
    name: "The Referral Gap",
    url: `${site.domain}/research`,
  },
  worksFor: {
    "@type": "Organization",
    name: "Creovine",
    url: "https://creovine.com/",
  },
  sameAs: [
    site.socials.github,
    site.socials.instagram,
    site.socials.linkedin,
    site.socials.medium,
    site.socials.x,
    site.socials.facebook,
    site.socials.youtube,
    site.socials.soundcloud,
    site.youtubeCouple,
    site.artProfile,
    site.wikidata,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
