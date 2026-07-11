"use client";

import { useState } from "react";

/**
 * Share control. On devices that support the Web Share API (most phones) it
 * opens the native share sheet. Everywhere else it falls back to a small row
 * of explicit targets (X, LinkedIn, WhatsApp) plus copy-link.
 */
export default function ShareButton({
  url,
  title,
  text,
}: {
  url: string;
  title: string;
  text?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareText = text ?? title;

  async function nativeShare() {
    // navigator.share is only defined in a secure context on supported devices.
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, text: shareText, url });
        return;
      } catch {
        // User cancelled, or share failed. Fall through to the manual menu.
      }
    }
    setOpen((v) => !v);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable; ignore.
    }
  }

  const enc = encodeURIComponent;
  const targets = [
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(shareText)}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${enc(`${shareText} ${url}`)}`,
    },
  ];

  return (
    <div className="relative inline-flex items-center gap-2">
      <button
        type="button"
        onClick={nativeShare}
        className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-1.5 text-xs font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent-deep"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
          aria-hidden
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.6" y1="10.5" x2="15.4" y2="6.5" />
          <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
        </svg>
        Share
      </button>

      {open && (
        <div className="flex items-center gap-2">
          {targets.map((t) => (
            <a
              key={t.label}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft transition-colors hover:border-accent hover:text-accent-deep"
            >
              {t.label}
            </a>
          ))}
          <button
            type="button"
            onClick={copy}
            className="rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft transition-colors hover:border-accent hover:text-accent-deep"
          >
            {copied ? "Copied ✓" : "Copy link"}
          </button>
        </div>
      )}
    </div>
  );
}
