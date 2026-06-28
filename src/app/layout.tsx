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
    default: `${site.name} — The Polymath`,
    template: `%s — ${site.name}`,
  },
  description:
    "Yerins Abraham — Nigerian polymath. Medical doctor and software engineer building technology for human health. Also artist, writer and musician.",
  keywords: [
    "Yerins Abraham",
    "Nigerian polymath",
    "polymath",
    "The Nigerian Da Vinci",
    "medical doctor software engineer",
    "Creovine",
    "health technology",
  ],
  authors: [{ name: site.name, url: site.domain }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: site.domain,
    title: `${site.name} — The Polymath`,
    description:
      "Nigerian polymath. Medical doctor and software engineer building technology for human health.",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — The Polymath`,
    description:
      "Nigerian polymath. Medical doctor and software engineer building technology for human health.",
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
  description: "Nigerian polymath",
  jobTitle: "Polymath",
  nationality: "Nigerian",
  url: site.domain,
  knowsAbout: [
    "Medicine",
    "Cardiology",
    "Software engineering",
    "Visual art",
    "Music",
    "Writing",
    "Health technology",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sumy State University",
  },
  sameAs: [
    site.socials.instagram,
    site.socials.linkedin,
    site.socials.medium,
    site.socials.x,
    site.socials.facebook,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
