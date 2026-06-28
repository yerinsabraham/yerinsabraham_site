import Parser from "rss-parser";
import { site } from "@/data/content";

export type Article = {
  title: string;
  link: string;
  date: string; // ISO
  excerpt: string;
};

const FEED_URL = `https://medium.com/feed/@${site.mediumHandle}`;

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Fetch the latest Medium articles via the public RSS feed.
 * Cached with ISR (revalidate hourly). Returns [] on any failure so the
 * section degrades gracefully rather than breaking the page.
 */
export async function getArticles(limit = 4): Promise<Article[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "yerinsabraham.com" },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const parser = new Parser({
      customFields: { item: [["content:encoded", "contentEncoded"]] },
    });
    const feed = await parser.parseString(xml);

    return (feed.items ?? []).slice(0, limit).map((item) => {
      const raw =
        (item as { contentEncoded?: string }).contentEncoded ||
        item.contentSnippet ||
        item.content ||
        "";
      const text = stripHtml(raw);
      return {
        title: item.title?.trim() ?? "Untitled",
        link: (item.link ?? "").split("?")[0],
        date: item.isoDate ?? item.pubDate ?? "",
        excerpt: text.length > 180 ? text.slice(0, 180).trim() + "…" : text,
      };
    });
  } catch {
    return [];
  }
}
