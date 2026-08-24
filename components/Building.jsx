import React from "react";

/* Each venture gets a split panel: copy on one side, a schematic on the other,
   alternating sides down the page.

   `headline` and everything under `diagram` are derived from the body copy —
   no facts beyond what the body already states. Deliberately no stat callouts
   like the reference has: there are no venture metrics to put there yet. */
const VENTURES = [
  {
    name: "Veem",
    url: "https://useveem.com",
    role: "Co-founder & CEO",
    headline: "The trust layer for modern identity",
    body: "A consent-first identity verification and KYC orchestration layer for Nigeria, aggregating BVN, NIN checks and biometric verification into a single confidence-scored identity signal for merchants. I lead strategy and product direction; my two co-founders and I are all engineers by background.",
    tags: ["BVN", "NIN", "Biometrics", "KYC orchestration"],
    diagram: {
      caption: "Checks aggregated",
      sources: ["BVN", "NIN", "Biometrics"],
      core: {
        title: "One identity signal",
        note: "consent-first",
        items: ["Confidence scored", "Merchant facing"],
      },
      outcome: "Verify → score → onboard",
    },
  },
  {
    name: "Rimoswap",
    url: "https://rimoswap.com/",
    role: "Co-founder & CTO",
    headline: "One platform for crypto-asset management",
    body: "An Africa-first digital-asset platform — trading, wallets, P2P, and stablecoin-based cross-border payments, with live web and Android products. I lead engineering and still write and maintain code.",
    tags: ["Trading", "Wallets", "P2P", "Stablecoin payments"],
    diagram: {
      caption: "One platform",
      sources: ["Trading", "Wallets", "P2P"],
      core: {
        title: "Digital-asset rails",
        note: "web · Android",
        items: ["Stablecoin", "Cross-border"],
      },
      outcome: "Send → settle → payout",
    },
  },
  {
    name: "Emino Digital Technologies",
    url: "https://eminotechnologies.com/",
    role: "Founder",
    headline: "Engineering digital systems that endure",
    body: "A selective software development and technology advisory studio (CAC-registered), taking on a limited number of engagements per quarter. Client work spans fintech, hospitality, and consumer platforms.",
    tags: ["Fintech", "Hospitality", "Consumer platforms"],
    diagram: {
      /* A studio ships interfaces, so this one is a shipped screen rather than
         the rails-and-nodes flow the other two use. */
      kind: "studio",
      caption: "The studio",
      domain: "eminotechnologies.com",
      sectors: ["Fintech", "Hospitality", "Fashion"],
      outcome: "Limited engagements per quarter",
    },
  },
];

/* Outbound arrow on a venture name; nudges on hover via the link's `group`. */
function ArrowOut() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-1 h-3.5 w-3.5 shrink-0 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 md:mt-1.5 md:h-4 md:w-4"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

/* Vertical dashed connector with a node at its head, as in the reference. */
function Connector() {
  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-olive-500 dark:bg-olive-300" />
      <span className="h-5 w-0 border-l border-dashed border-olive-500/50 dark:border-olive-300/40" />
    </div>
  );
}

/* Muted wireframe bar used inside the studio mock. */
function Bar({ w, tone = "soft" }) {
  const fill =
    tone === "strong"
      ? "bg-olive-400/70 dark:bg-olive-300/40"
      : "bg-dark-brown/10 dark:bg-cream/10";
  return <span className={`block h-1.5 rounded-full ${fill} ${w}`} />;
}

/* Emino Digital Technologies: a browser window with a wireframed page in it —
   reads as a studio shipping interfaces rather than as payment rails. */
function StudioSchematic({ caption, domain, sectors, outcome }) {
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

function Schematic({ caption, sources, core, outcome }) {
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

export default function Building(props) {
  return (
    <section
      id="building"
      ref={props.refProp}
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28"
    >
      <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-dark-brown dark:text-cream">
        What I&apos;m Building
      </h2>

      <p className="mt-8 max-w-md text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300">
        Alongside my product and engineering roles, I co-found and lead
        technical teams. Three active ventures:
      </p>

      {/* list-none/ml-0 undo the global `ol li` styling in globals.css */}
      <ol className="mt-14 list-none space-y-6 md:space-y-8">
        {VENTURES.map((venture, i) => {
          const flipped = i % 2 === 1;
          return (
            <li
              key={venture.name}
              className="ml-0 overflow-hidden rounded-[1.5rem] bg-paper-50 ring-1 ring-dark-brown/[0.06] dark:bg-brown-900 dark:ring-cream/[0.06] lg:grid lg:grid-cols-2"
            >
              <div
                className={`p-7 md:p-10 lg:flex lg:flex-col lg:justify-center ${
                  flipped ? "lg:order-2" : ""
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight text-dark-brown dark:text-cream">
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-start gap-1 transition-colors duration-300 hover:text-amber-700 dark:hover:text-amber-500"
                    >
                      {venture.name}
                      <ArrowOut />
                    </a>
                  </h3>
                  <span className="rounded-full bg-olive-100 px-3 py-1 font-cutive-mono text-[10px] uppercase tracking-[0.12em] text-olive-800 dark:bg-brown-950 dark:text-olive-200">
                    {venture.role}
                  </span>
                </div>

                <p className="mt-5 font-display text-xl md:text-2xl font-bold leading-snug tracking-tight text-dark-brown dark:text-cream">
                  {venture.headline}
                </p>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300">
                  {venture.body}
                </p>

                <p className="mt-6 font-cutive-mono text-[11px] leading-relaxed text-brown-500 dark:text-brown-400">
                  {venture.tags.join(" · ")}
                </p>
              </div>

              {/* Tinted half rather than a divider rule — same separation, one
                  less line on a page that already had too many. */}
              <div
                className={`flex items-center justify-center bg-olive-100/80 p-7 md:p-10 dark:bg-brown-950/50 ${
                  flipped ? "lg:order-1" : ""
                }`}
              >
                {venture.diagram.kind === "studio" ? (
                  <StudioSchematic {...venture.diagram} />
                ) : (
                  <Schematic {...venture.diagram} />
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
