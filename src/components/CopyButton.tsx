"use client";

import { useState } from "react";

/** Copies the given text to the clipboard and shows a brief confirmation. */
export default function CopyButton({
  text,
  label = "Copy",
}: {
  text: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable; do nothing.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent-deep"
    >
      {copied ? "Copied ✓" : label}
    </button>
  );
}
