import React from "react";
import ArrowOut from "./ArrowOut";
import { Diagram } from "./Schematics";

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
    body: "A selective software development and technology advisory studio (CAC-registered), taking on a limited number of engagements per quarter. Client work spans fashion, hospitality, and consumer platforms.",
    tags: ["Fashion", "Hospitality", "Consumer platforms"],
    diagram: {
      /* A studio ships interfaces, so this one is a shipped screen rather than
         the rails-and-nodes flow the other two use. */
      kind: "studio",
      caption: "The studio",
      domain: "eminotechnologies.com",
      sectors: ["Fashion", "Hospitality", "B2C Solutions"],
      outcome: "Limited engagements per quarter",
    },
  },
];

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
                      <ArrowOut className="mt-1 h-3.5 w-3.5 opacity-50 md:mt-1.5 md:h-4 md:w-4" />
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
                <Diagram diagram={venture.diagram} />
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
