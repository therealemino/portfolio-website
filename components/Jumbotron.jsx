import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LinkedInQr from "./LinkedInQr";
import CodeMotif from "./CodeMotif";

/* Industries flank the wordmark on the left, disciplines on the right. The two
   lists are cycled on deliberately mismatched intervals so they drift apart
   instead of flipping in lockstep. */
const INDUSTRIES = ["Fintech", "Blockchain", "Travel", "Fashion", "Culture"];
const DISCIPLINES = [
  "Products",
  "Engineering",
  "Strategy",
  "Process Optimization",
];

/* The wordmark is sized to this fraction of the portrait panel's width. Paired
   with leading-[0.8] and -mb-[0.4em] below, that puts exactly half the name's
   height above the panel's top edge and half over the panel itself. */
const NAME_WIDTH = 0.82;

/* Used until the measuring pass lands — also what the server renders, so the
   first paint is already close and there is no hydration mismatch. */
const NAME_FALLBACK = "clamp(2.5rem, 17vw, 11rem)";

function Rotator({ items, interval, className = "" }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  /* Keying on the index remounts the span, which replays the CSS animation —
     no nested timers to leak on unmount. */
  return (
    <span className={`block overflow-hidden ${className}`}>
      <span key={i} className="block animate-fadeUp whitespace-nowrap">
        {items[i]}
      </span>
    </span>
  );
}

export default function Jumbotron(props) {
  const stageRef = useRef(null);
  const nameRef = useRef(null);
  const [nameSize, setNameSize] = useState(null);

  /* Fit the wordmark to NAME_WIDTH of the panel. Rendered text width scales
     linearly with font-size, so one proportional pass lands on target exactly —
     no iteration, and it re-runs on resize and once the webfont swaps in. */
  useEffect(() => {
    const stage = stageRef.current;
    const name = nameRef.current;
    if (!stage || !name) return;

    const fit = () => {
      const target = stage.clientWidth * NAME_WIDTH;
      const current = parseFloat(window.getComputedStyle(name).fontSize);
      const natural = name.getBoundingClientRect().width;
      if (!target || !current || !natural) return;
      setNameSize(current * (target / natural));
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(stage);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fit).catch(() => {});
    }
    return () => observer.disconnect();
  }, []);

  const nameFont = nameSize ? `${nameSize}px` : NAME_FALLBACK;
  const edgeInset = `${(1 - NAME_WIDTH) * 50}%`; // aligns labels to the name's edges

  return (
    <section
      className="relative overflow-hidden bg-paper dark:bg-brown-950 text-dark-brown dark:text-gray-300"
    >
      <CodeMotif />

      {/* pt clears the sticky 4rem navbar so the labels are never tucked under it */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 md:pt-24 pb-16 md:pb-20 flex min-h-screen flex-col overflow-hidden">
        {/* ── Stage ─────────────────────────────────────────
            The portrait panel sets the width for this whole block; the wordmark
            and its labels are measured against it rather than the viewport, so
            desktop keeps the same proportions mobile already had. */}
        <div
          ref={stageRef}
          className="relative mx-auto w-[88%] max-w-[22rem] sm:max-w-[26rem] md:max-w-[32rem] lg:max-w-[38rem]"
        >
          {/* Rotating labels, flush with the wordmark's left and right edges */}
          <div
            className="relative z-30 mb-2 flex items-end justify-between gap-3 text-[8px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-[0.16em] md:tracking-[0.2em]"
            style={{ paddingLeft: edgeInset, paddingRight: edgeInset }}
          >
            <Rotator
              items={INDUSTRIES}
              interval={2600}
              className="text-left text-amber-700 dark:text-amber-800"
            />
            <Rotator
              items={DISCIPLINES}
              interval={3400}
              className="text-right text-brown-600 dark:text-brown-300"
            />
          </div>

          {/* The name. -mb-[0.4em] against leading-[0.8] drops its lower half
              over the panel; z-20 keeps it painted above. */}
          <h1
            ref={nameRef}
            style={{ fontSize: nameFont }}
            className="relative z-20 block w-max mx-auto -mb-[0.4em] whitespace-nowrap font-display font-black leading-[0.8] tracking-tighter text-dark-brown dark:text-cream select-none"
          >
            Emino
          </h1>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-olive-400 dark:bg-olive-800 pt-[12%] shadow-[0_25px_60px_-25px_rgba(43,40,44,0.55)]">
              <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/emino/image/upload/v1783871264/emino/Eminoooo_1.png"
                alt="Ejei-Okeke Emmanuel — Emino"
                className="relative z-[1] mx-auto w-full object-contain object-bottom"
              />
            </div>

            {/* QR chip — straddles the panel's right edge, sitting just clear
                of the name's underside. Its font-size is the name's, so the
                em-based offset, overhang and size all track the wordmark at
                every breakpoint. The negative right hangs roughly a third of
                the chip out over the cream. */}
            <LinkedInQr
              className="absolute z-40 block rotate-3 rounded-xl bg-paper p-[0.04em] shadow-xl ring-1 ring-black/10 transition-transform duration-300 hover:rotate-0"
              style={{
                fontSize: nameFont,
                top: "0.62em",
                right: "-0.22em",
                width: "max(3.5rem, 0.62em)",
                height: "max(3.5rem, 0.62em)",
              }}
            />
          </div>
        </div>

        {/* ── Tagline + CTAs ─────────────────────────────────
            Carries the page background so the code motif behind it stops at
            the rule rather than running through the copy. */}
        <div className="relative mt-12 md:mt-14 flex flex-col gap-6 border-t border-dark-brown/15 dark:border-cream/15 bg-paper dark:bg-brown-950 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-md font-display text-lg font-medium leading-snug text-dark-brown dark:text-gray-200">
            I build software products and lead the teams behind them.
            <span className="block text-sm font-normal text-brown-600 dark:text-brown-300 mt-1">
              Product &amp; engineering leadership across fintech, blockchain,
              and identity infrastructure.
            </span>
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-dark-brown px-6 py-3 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-amber-700 dark:bg-cream dark:text-dark-brown dark:hover:bg-amber-800 dark:hover:text-cream">
              
                Let&apos;s talk →
              
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-dark-brown/30 dark:border-cream/30 px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:border-amber-700 hover:text-amber-700 dark:hover:border-amber-500 dark:hover:text-amber-500"
            >
              My resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
