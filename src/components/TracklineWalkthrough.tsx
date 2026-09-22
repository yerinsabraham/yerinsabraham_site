"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { session, type Step } from "@/data/trackline-session";

/*
  A replay of a real recorded session.

  Deliberately not a live demo. A browser cannot run a coding agent, so
  anything claiming to be live here would be theatre. This is the exported
  output of a real session, played back — which is also more useful: it works
  every time, costs nothing, and shows the same thing to everyone.

  It plays itself once in view and can be driven by hand. Respecting
  prefers-reduced-motion means showing everything at once rather than refusing
  to show anything.

  Every step is rendered from the start and the animation only reveals them.
  Building them up as the animation runs would mean the page contained none of
  this until something played, so a reader without JavaScript, or one who never
  scrolled this far, would find an empty box — and a search engine would index
  one.
*/

const STEP_MS = 1400;

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(q.matches);
    const on = () => setReduced(q.matches);
    q.addEventListener("change", on);
    return () => q.removeEventListener("change", on);
  }, []);
  return reduced;
}

const marks: Record<Step["outcome"], { glyph: string; label: string; tone: string }> = {
  clean: { glyph: "·", label: "checked, nothing to say", tone: "text-ink/30" },
  unseen: { glyph: "?", label: "nobody could see this", tone: "text-ink/40" },
  finding: { glyph: "▲", label: "something to look at", tone: "text-[var(--accent-deep)]" },
  blocked: { glyph: "■", label: "stopped", tone: "text-[var(--accent-deep)]" },
};

export default function TracklineWalkthrough() {
  const reduced = useReducedMotion();
  const total = session.steps.length;

  // Everything is visible until the component is running in a browser that
  // wants the animation. That way the server-rendered page is complete.
  const [interactive, setInteractive] = useState(false);
  const [shown, setShown] = useState(total);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    setInteractive(true);
    setShown(0);
  }, [reduced]);

  // Start once, when it is actually on screen. Autoplaying something nobody is
  // looking at wastes the one moment it has to explain itself.
  useEffect(() => {
    const el = host.current;
    if (!el || started) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setStarted(true);
        if (reduced) setShown(total);
        else setPlaying(true);
        io.disconnect();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started, reduced, total]);

  useEffect(() => {
    if (!playing) return;
    if (shown >= total) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 500 : STEP_MS);
    return () => clearTimeout(t);
  }, [playing, shown, total]);

  const replay = useCallback(() => {
    setShown(0);
    setPlaying(true);
  }, []);

  const done = !interactive || shown >= total;

  return (
    <div ref={host} className="my-10 rounded-lg border border-line bg-paper/60">
      <div className="border-b border-line px-5 py-4">
        <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          A real session, recorded and replayed
        </p>
        <p className="font-[family-name:var(--font-fraunces)] text-base leading-relaxed text-ink">
          <span className="text-ink-soft">asked for </span>
          {session.task}
        </p>
      </div>

      <div className="px-5 py-4">
        <ol className="space-y-1">
          {session.steps.map((step, i) => (
            <StepRow
              key={step.n}
              step={step}
              hidden={interactive && i >= shown}
              animate={interactive}
            />
          ))}
        </ol>

        {interactive && !done && (
          <p aria-hidden className="mt-2 pl-7 text-sm text-ink/25">
            ▌
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line px-5 py-3 text-sm">
        {done ? (
          <>
            <span className="text-ink-soft">
              {session.summary.actions} actions ·{" "}
              <span className="text-ink">{session.summary.findings} worth a look</span> ·{" "}
              {session.summary.unseen} nobody could see
            </span>
            <button
              onClick={replay}
              className="text-[var(--accent-deep)] underline-offset-4 hover:underline"
            >
              replay
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setPlaying((p) => !p)}
              className="text-[var(--accent-deep)] underline-offset-4 hover:underline"
            >
              {playing ? "pause" : "play"}
            </button>
            <button
              onClick={() => {
                setPlaying(false);
                setShown(total);
              }}
              className="text-ink-soft underline-offset-4 hover:underline"
            >
              show all
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function StepRow({
  step,
  hidden,
  animate,
}: {
  step: Step;
  hidden: boolean;
  animate: boolean;
}) {
  const mark = marks[step.outcome];
  const what = step.paths?.length ? step.paths.join(", ") : step.command || "";

  return (
    <li
      // Kept in the document and hidden, rather than removed, so the content is
      // always present for a reader or a crawler that never runs the animation.
      aria-hidden={hidden}
      className={[
        hidden ? "invisible h-0 overflow-hidden" : "",
        animate && !hidden ? "animate-[fadeUp_320ms_ease-out_both]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-baseline gap-3 font-[family-name:var(--font-geist-mono),ui-monospace,monospace] text-sm">
        <span className={`w-3 shrink-0 ${mark.tone}`} title={mark.label} aria-label={mark.label}>
          {mark.glyph}
        </span>
        <span className="w-16 shrink-0 text-ink-soft">{step.tool}</span>
        <span className="min-w-0 break-all text-ink/70">{what || "—"}</span>
      </div>

      {step.findings?.map((f, i) => (
        <div
          key={i}
          className="my-2 ml-7 border-l-2 border-[var(--accent)] bg-[var(--accent)]/5 px-4 py-3"
        >
          <p className="font-[family-name:var(--font-fraunces)] text-[15px] text-ink">
            {f.summary}
          </p>
          <dl className="mt-2 space-y-1 text-[13px]">
            {f.evidence.map((e, j) => (
              <div key={j} className="flex gap-3">
                <dt className="w-16 shrink-0 text-ink-soft">{e.kind}</dt>
                <dd className="min-w-0 break-all font-[family-name:ui-monospace,monospace] text-ink/75">
                  {e.value}
                </dd>
              </div>
            ))}
          </dl>
          {f.suggestion && (
            <p className="mt-2 text-[13px] text-ink-soft">→ {f.suggestion}</p>
          )}
        </div>
      ))}

      {step.outcome === "unseen" && !step.findings?.length && (
        <p className="ml-7 text-[13px] text-ink/35">
          not seen by {step.unseen?.join(", ")}
        </p>
      )}
    </li>
  );
}
