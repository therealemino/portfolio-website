import React from "react";
import Link from "next/link";
import ArrowOut from "./ArrowOut";
import { Diagram } from "./Schematics";
import { CASE_STUDIES } from "../data/case-studies";

/* Each venture gets a split panel: copy on one side, a schematic on the other,
   alternating sides down the page.

   Content lives in data/case-studies.js so the homepage panel and the case
   study page cannot drift apart. File order there is the order here.
   `homeBody` lets the homepage copy diverge from the card summary without
   forking the data back out; nothing sets it today. */
const VENTURES = CASE_STUDIES.filter(
  (study) => study.kind === "venture" && study.featured
).map((study) => ({
  slug: study.slug,
  name: study.name,
  url: study.url,
  role: study.role,
  headline: study.headline,
  body: study.homeBody || study.summary,
  tags: study.tags,
  diagram: study.diagram,
}));

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

                {venture.slug ? (
                  <Link href={`/case-studies/${venture.slug}`}>
                    <a className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 transition-all duration-300 hover:gap-2.5 dark:text-amber-500">
                      Read the case study <span aria-hidden="true">→</span>
                    </a>
                  </Link>
                ) : null}
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
