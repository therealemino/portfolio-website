import React from "react";

/* Schematic diagrams shared by the homepage Building section and the case
   study detail pages.

   Cardinality contract — these grids are hard-coded, so the data must match:
     Schematic        sources.length   === 3   (grid-cols-3)
                      core.items.length === 2 or 4 (grid-cols-2)
     StudioSchematic  sectors.length   === 3   (grid-cols-3)
   data/case-studies.js asserts this at build time.

   Every root carries aria-hidden: the diagrams restate what the prose already
   says, so they are decorative. Detail pages must still read correctly with
   the diagram removed. */

/* Vertical dashed connector with a node at its head, as in the reference. */
export function Connector() {
  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-olive-500 dark:bg-olive-300" />
      <span className="h-5 w-0 border-l border-dashed border-olive-500/50 dark:border-olive-300/40" />
    </div>
  );
}

/* Muted wireframe bar used inside the studio mock. */
export function Bar({ w, tone = "soft" }) {
  const fill =
    tone === "strong"
      ? "bg-olive-400/70 dark:bg-olive-300/40"
      : "bg-dark-brown/10 dark:bg-cream/10";
  return <span className={`block h-1.5 rounded-full ${fill} ${w}`} />;
}

/* Emino Digital Technologies: a browser window with a wireframed page in it —
   reads as a studio shipping interfaces rather than as payment rails. */
export function StudioSchematic({ caption, domain, sectors, outcome }) {
  return (
    <div className="w-full max-w-[22rem]" aria-hidden="true">
      <p className="text-center font-cutive-mono text-[10px] uppercase tracking-[0.18em] text-brown-500 dark:text-brown-400">
        {caption}
      </p>

      <div className="mt-5 overflow-hidden rounded-xl bg-paper ring-1 ring-dark-brown/10 dark:bg-brown-900 dark:ring-cream/10">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-dark-brown/[0.07] px-3 py-2.5 dark:border-cream/[0.07]">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-dark-brown/15 dark:bg-cream/20" />
            <span className="h-2 w-2 rounded-full bg-dark-brown/15 dark:bg-cream/20" />
            <span className="h-2 w-2 rounded-full bg-olive-400 dark:bg-olive-300/70" />
          </span>
          <span className="ml-1 flex-1 truncate rounded-md bg-olive-100/70 px-2 py-1 font-cutive-mono text-[9px] text-brown-600 dark:bg-brown-950/60 dark:text-brown-300">
            {domain}
          </span>
        </div>

        {/* wireframed page */}
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <Bar w="w-10" tone="strong" />
            <span className="flex gap-1.5">
              <Bar w="w-6" />
              <Bar w="w-6" />
              <Bar w="w-6" />
            </span>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 space-y-2">
              <Bar w="w-full" tone="strong" />
              <Bar w="w-4/5" tone="strong" />
              <Bar w="w-full" />
              <Bar w="w-2/3" />
            </div>
            <div className="h-16 w-20 shrink-0 rounded-md bg-olive-200/70 dark:bg-olive-800/50" />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1">
            {[0, 1, 2].map((n) => (
              <div
                key={n}
                className="space-y-1.5 rounded-md bg-olive-100/60 p-2 dark:bg-brown-950/50"
              >
                <span className="block h-4 w-4 rounded bg-olive-400/60 dark:bg-olive-300/30" />
                <Bar w="w-full" />
                <Bar w="w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* who it ships for */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {sectors.map((sector) => (
          <div
            key={sector}
            className="rounded-lg bg-paper px-2 py-2 text-center text-[10px] font-semibold ring-1 ring-dark-brown/10 dark:bg-brown-900 dark:ring-cream/10"
          >
            {sector}
          </div>
        ))}
      </div>

      {/* No connector here: the sectors are a list of who the work is for, not
          a flow into the outcome, and one centred line would read as if only
          the middle sector fed it. */}
      <div className="mt-4 rounded-full bg-paper px-4 py-2.5 text-center font-cutive-mono text-[11px] text-brown-600 ring-1 ring-dark-brown/10 dark:bg-brown-900 dark:text-brown-300 dark:ring-cream/10">
        {outcome}
      </div>
    </div>
  );
}

export function Schematic({ caption, sources, core, outcome }) {
  return (
    <div className="w-full max-w-[22rem]" aria-hidden="true">
      <p className="text-center font-cutive-mono text-[10px] uppercase tracking-[0.18em] text-brown-500 dark:text-brown-400">
        {caption}
      </p>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {sources.map((source) => (
          <div
            key={source}
            className="rounded-lg bg-paper px-2 py-3 text-center text-[11px] font-semibold ring-1 ring-dark-brown/10 dark:bg-brown-900 dark:ring-cream/10"
          >
            {source}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {sources.map((source) => (
          <Connector key={source} />
        ))}
      </div>

      <div className="rounded-xl bg-paper p-4 ring-1 ring-olive-500/50 dark:bg-brown-900 dark:ring-olive-300/30">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-display text-sm font-black tracking-tight text-dark-brown dark:text-cream">
            {core.title}
          </span>
          <span className="font-cutive-mono text-[10px] text-brown-500 dark:text-brown-400">
            {core.note}
          </span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {core.items.map((item) => (
            <div
              key={item}
              className="rounded-md bg-olive-100/70 px-2 py-2 text-center text-[10px] font-semibold text-olive-800 dark:bg-brown-950/60 dark:text-olive-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Connector />
      </div>

      <div className="rounded-full bg-paper px-4 py-2.5 text-center font-cutive-mono text-[11px] text-brown-600 ring-1 ring-dark-brown/10 dark:bg-brown-900 dark:text-brown-300 dark:ring-cream/10">
        {outcome}
      </div>
    </div>
  );
}

/* Single place where the two diagram kinds are chosen between. */
export function Diagram({ diagram }) {
  if (!diagram) return null;
  return diagram.kind === "studio" ? (
    <StudioSchematic {...diagram} />
  ) : (
    <Schematic {...diagram} />
  );
}
