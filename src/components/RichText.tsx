import { inlineLinks } from "@/data/content";

// Build one regex from all link terms, longest first so multi-word terms win.
const sorted = [...inlineLinks].sort((a, b) => b.term.length - a.term.length);
const escaped = sorted.map((l) =>
  l.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
);
const TERM_RE = new RegExp(`\\b(${escaped.join("|")})\\b`, "g");

function hrefFor(term: string) {
  return inlineLinks.find((l) => l.term === term)?.href;
}

/**
 * Renders a string, turning known terms (Tablu, Creovine, Life Is Random, ...)
 * into links. Only the first occurrence of each term per block is linked, to
 * avoid over-linking.
 */
export default function RichText({ text }: { text: string }) {
  const used = new Set<string>();
  const parts = text.split(TERM_RE);

  return (
    <>
      {parts.map((part, i) => {
        const href = hrefFor(part);
        if (href && !used.has(part)) {
          used.add(part);
          const external = href.startsWith("http");
          return (
            <a
              key={i}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-accent-deep underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
            >
              {part}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
