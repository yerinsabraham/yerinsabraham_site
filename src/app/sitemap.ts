import type { MetadataRoute } from "next";
import { site } from "@/data/content";
import { writings } from "@/data/writings";
import { engineering } from "@/data/engineering";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/research`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/engineering`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/art`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/writing`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const writingPages: MetadataRoute.Sitemap = writings
    .filter((w) => w.body) // only pages that actually render a reading view
    .map((w) => ({
      url: `${base}/writing/${w.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const engineeringPages: MetadataRoute.Sitemap = engineering.map((p) => ({
    url: `${base}/engineering/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...writingPages, ...engineeringPages];
}
