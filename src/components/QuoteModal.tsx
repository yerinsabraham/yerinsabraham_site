"use client";

import { useEffect, useState } from "react";
import type { Quote } from "@/data/content";

/**
 * Renders a quote as a clickable trigger. Clicking opens a modal showing the
 * quote's source and what it means.
 */
export default function QuoteModal({
  quote,
  className = "",
}: {
  quote: Quote;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={`group inline cursor-pointer text-left underline decoration-dotted decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent ${className}`}
      >
        &ldquo;{quote.text}&rdquo;
        <span
          aria-hidden
          className="ml-1 align-super text-[0.6em] text-accent-deep opacity-70 group-hover:opacity-100"
        >
          ⓘ
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="About this quote"
          className="fixed inset-0 z-[100] flex items-center justify-center p-5"
        >
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-ink/40 backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-lg rounded-2xl border border-line bg-paper p-7 shadow-2xl sm:p-9">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
            >
              ✕
            </button>

            <blockquote className="max-w-md font-[family-name:var(--font-fraunces)] text-2xl font-light italic leading-snug text-ink">
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <p className="eyebrow mt-5">{quote.source}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {quote.explanation}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
