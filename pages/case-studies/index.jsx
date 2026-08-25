import React from "react";
import Seo from "../../components/Seo";
import CaseStudyCard from "../../components/CaseStudyCard";
import { CASE_STUDIES, ALSO_BUILT, toCard } from "../../data/case-studies";

/* Nothing in the component body may reference CASE_STUDIES. Next only strips
   the data module from the client bundle if it is used exclusively inside
   getStaticProps — otherwise every visitor downloads all eight case studies'
   prose. Hence the projection below. */
export async function getStaticProps() {
  return {
    props: {
      ventures: CASE_STUDIES.filter((s) => s.kind === "venture").map(toCard),
      employment: CASE_STUDIES.filter((s) => s.kind === "employment").map(
        toCard
      ),
      alsoBuilt: ALSO_BUILT,
    },
  };
}

const Eyebrow = ({ children }) => (
  <p className="font-cutive-mono text-[11px] uppercase tracking-[0.18em] text-brown-500 dark:text-brown-400">
    {children}
  </p>
);

export default function CaseStudiesIndex({ ventures, employment, alsoBuilt }) {
  const anyDrafted = [...ventures, ...employment].some(
    (s) => s.copy === "drafted"
  );

  return (
    <>
      <Seo
        title="Case Studies — Ejei-Okeke Emmanuel"
        description="Product and engineering case studies across payments, identity, digital assets, travel and retail."
        path="/case-studies"
      />

      {/* layouts/default.jsx supplies no page background, so each page brings
          its own — see pages/about.jsx, which forgets to and renders on white */}
      <div className="min-h-screen bg-paper dark:bg-brown-950 text-dark-brown dark:text-gray-300 font-display overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 md:pt-28 pb-24 md:pb-32">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-dark-brown dark:text-cream">
            Case Studies
          </h1>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300">
              Ventures I co-founded and lead, and the client and employer work
              behind them — payments, identity, digital assets, travel and
              retail.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 self-start rounded-full bg-dark-brown px-6 py-3 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-amber-700 dark:bg-cream dark:text-dark-brown dark:hover:bg-amber-800 dark:hover:text-cream sm:self-auto"
            >
              View resume →
            </a>
          </div>

          {process.env.NODE_ENV !== "production" && anyDrafted ? (
            <p className="mt-8 inline-block rounded-full bg-amber-100 px-4 py-2 font-cutive-mono text-[11px] uppercase tracking-[0.12em] text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
              Draft copy — needs review
            </p>
          ) : null}

          {/* ── Ventures ─────────────────────────────────────────────── */}
          <div className="mt-20 md:mt-24">
            <Eyebrow>Ventures</Eyebrow>
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ventures.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </ul>
          </div>

          {/* ── Client & employer work ───────────────────────────────── */}
          <div className="mt-20 md:mt-24">
            <Eyebrow>Client &amp; employer work</Eyebrow>
            <p className="mt-3 max-w-xl text-xs md:text-sm leading-relaxed text-brown-600 dark:text-brown-300">
              These engagements appear under project aliases. Real names
              available on request.
            </p>
            <ul className="mt-6 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {employment.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </ul>
          </div>

          {/* ── Also built ───────────────────────────────────────────── */}
          {alsoBuilt.length ? (
            <div className="mt-20 md:mt-24">
              <Eyebrow>Also built</Eyebrow>
              <p className="mt-3 max-w-xl text-xs md:text-sm leading-relaxed text-brown-600 dark:text-brown-300">
                Smaller and older work, still standing.
              </p>
              <ul className="mt-8 grid list-none grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
                {alsoBuilt.map((item) => (
                  <li key={item.name} className="ml-0">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-baseline gap-1.5 font-display text-base font-black tracking-tight text-dark-brown transition-colors duration-300 hover:text-amber-700 dark:text-cream dark:hover:text-amber-500"
                    >
                      {item.name}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </a>
                    <p className="mt-1 text-sm leading-relaxed text-brown-700 dark:text-gray-300">
                      {item.desc}
                    </p>
                    <p className="mt-1.5 font-cutive-mono text-[11px] text-brown-500 dark:text-brown-400">
                      {item.stack.join(" · ")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
