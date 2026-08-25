import React from "react";
import Link from "next/link";
import Seo from "../../components/Seo";
import CaseStudyCard from "../../components/CaseStudyCard";
import ArrowOut from "../../components/ArrowOut";
import { Diagram } from "../../components/Schematics";
import {
  CASE_STUDIES,
  getCaseStudy,
  getRelated,
  toCard,
} from "../../data/case-studies";

export async function getStaticPaths() {
  return {
    paths: CASE_STUDIES.map((study) => ({ params: { slug: study.slug } })),
    // The data is a local module, so a slug that exists at request time but
    // not at build time is not a reachable state. false gives a real 404.
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const study = getCaseStudy(params.slug);
  // Unreachable with fallback:false — kept so a future fallback change, or a
  // typo'd relatedSlugs, 404s cleanly instead of dereferencing undefined.
  if (!study) return { notFound: true };

  // Whatever this returns is serialised into the page and shipped to the
  // browser, so the entry itself must hold nothing private — the validator
  // in data/case-studies.js is what enforces that on aliased entries.
  return {
    props: { study, related: getRelated(study).map(toCard) },
  };
}

const Eyebrow = ({ children }) => (
  <p className="font-cutive-mono text-[11px] uppercase tracking-[0.18em] text-brown-500 dark:text-brown-400">
    {children}
  </p>
);

/* One row of the facts rail. Renders nothing without a value, which is what
   lets the rail carry pages that have no diagram. */
function Fact({ label, children }) {
  if (!children) return null;
  return (
    <div className="border-dark-brown/10 py-3 first:pt-0 last:pb-0 dark:border-cream/10 [&+&]:border-t">
      <dt className="font-cutive-mono text-[10px] uppercase tracking-[0.16em] text-brown-500 dark:text-brown-400">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-relaxed text-dark-brown dark:text-gray-200">
        {children}
      </dd>
    </div>
  );
}

export default function CaseStudyDetail({ study, related }) {
  /* Aliased entries carry no role, org, period or stints — see the validator
     in data/case-studies.js. The rail is read off whatever is left. */
  const facts = [
    study.role,
    study.org,
    study.period,
    study.stints,
    study.sector,
    study.stack,
    study.links,
  ].filter(Boolean).length;

  return (
    <>
      <Seo
        title={`${study.name} — Case Study | Ejei-Okeke Emmanuel`}
        description={study.summary}
        path={`/case-studies/${study.slug}`}
        image={study.ogImage}
        type="article"
      />

      <div className="min-h-screen bg-paper dark:bg-brown-950 text-dark-brown dark:text-gray-300 font-display overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-24 md:pb-32">
          {/* pt clears the sticky 4rem navbar */}
          <nav className="pt-20 md:pt-24 font-cutive-mono text-[11px] uppercase tracking-wider text-brown-500 dark:text-brown-400">
            <Link href="/case-studies">
              <a className="transition-colors duration-300 hover:text-amber-700 dark:hover:text-amber-500">
                Case studies
              </a>
            </Link>
            <span aria-hidden="true" className="px-2">
              /
            </span>
            <span className="text-dark-brown dark:text-gray-300">
              {study.name}
            </span>
          </nav>

          {/* ── Header ───────────────────────────────────────────────── */}
          <header className="pt-8 md:pt-10">
            <Eyebrow>
              {[
                study.kind === "venture" ? "Venture" : "Client work",
                study.sector,
                study.org,
                study.period,
              ]
                .filter(Boolean)
                .join("  ·  ")}
            </Eyebrow>

            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-dark-brown dark:text-cream">
              {study.shortName || study.name}
            </h1>

            <div
              className={`flex flex-wrap items-center gap-3 ${
                study.role || study.alias ? "mt-5" : ""
              }`}
            >
              {/* No job title here. Combined with the dates it used to sit
                  beside, it mapped an alias straight onto a timeline row. */}
              {study.role ? (
                <span className="rounded-full bg-olive-100 px-3 py-1 font-cutive-mono text-[10px] uppercase tracking-[0.12em] text-olive-800 dark:bg-brown-900 dark:text-olive-200">
                  {study.role}
                </span>
              ) : null}

              {study.alias ? (
                <span className="font-cutive-mono text-[10px] uppercase tracking-[0.12em] text-brown-500 dark:text-brown-400">
                  Alias · real name on request
                </span>
              ) : null}

              {process.env.NODE_ENV !== "production" &&
              study.copy === "drafted" ? (
                <span className="rounded-full bg-amber-100 px-3 py-1 font-cutive-mono text-[10px] uppercase tracking-[0.12em] text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                  Draft copy
                </span>
              ) : null}
            </div>

            <p className="mt-7 max-w-2xl font-display text-xl md:text-2xl font-bold leading-snug tracking-tight text-dark-brown dark:text-cream">
              {study.headline}
            </p>

            {/* Aliased entries never carry a url — linking out would identify
                the client in one click. */}
            {study.url ? (
              <a
                href={study.url}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-start gap-1 text-sm font-semibold text-amber-700 transition-colors duration-300 hover:text-amber-800 dark:text-amber-500"
              >
                {study.domain || "Visit site"}
                <ArrowOut className="mt-[3px] h-3 w-3 opacity-40" />
              </a>
            ) : null}
          </header>

          {/* ── Diagram ──────────────────────────────────────────────── */}
          {study.diagram ? (
            <div className="mt-14 flex justify-center rounded-[1.5rem] bg-olive-100/80 p-8 md:p-14 dark:bg-brown-900/60">
              <Diagram diagram={study.diagram} />
            </div>
          ) : null}

          {/* ── Overview + facts rail ────────────────────────────────── */}
          <div className="mt-20 md:mt-24 lg:grid lg:grid-cols-12 lg:gap-10">
            <div
              className={`space-y-5 text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300 ${
                facts >= 2 ? "lg:col-span-7" : "lg:col-span-8"
              }`}
            >
              {study.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            {facts >= 2 ? (
              <dl className="mt-10 rounded-[1.5rem] bg-paper-50 p-6 ring-1 ring-dark-brown/[0.06] dark:bg-brown-900 dark:ring-cream/[0.06] lg:col-span-5 lg:mt-0 lg:self-start">
                <Fact label="Role">{study.role}</Fact>
                <Fact label="Organisation">{study.org}</Fact>
                <Fact label="Sector">{study.sector}</Fact>
                {!study.stints ? (
                  <Fact label="Period">{study.period}</Fact>
                ) : null}
                {study.stints ? (
                  <Fact label="Engagements">
                    <ul className="list-none space-y-2">
                      {study.stints.map((stint) => (
                        <li key={stint.range} className="ml-0">
                          <span className="font-cutive-mono text-[11px] text-brown-500 dark:text-brown-400">
                            {stint.range}
                          </span>
                          <span className="block">{stint.role}</span>
                        </li>
                      ))}
                    </ul>
                  </Fact>
                ) : null}
                <Fact label="Stack">
                  {study.stack ? study.stack.join(" · ") : null}
                </Fact>
                <Fact label="Links">
                  {study.links ? (
                    <ul className="list-none space-y-1">
                      {study.links.map((link) => (
                        <li key={link.href} className="ml-0">
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-amber-700 hover:underline dark:text-amber-500"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Fact>
              </dl>
            ) : null}
          </div>

          {/* ── Highlights ───────────────────────────────────────────── */}
          {study.highlights ? (
            <div className="mt-20 md:mt-24">
              <Eyebrow>Highlights</Eyebrow>
              <dl className="mt-8 flex flex-col gap-8 sm:flex-row sm:gap-0">
                {study.highlights.map((item, i) => (
                  <div
                    key={item.value}
                    className={`border-dark-brown/15 dark:border-cream/15 sm:flex-1 ${
                      i > 0 ? "sm:border-l sm:pl-6 xl:pl-8" : ""
                    } ${i < study.highlights.length - 1 ? "sm:pr-6 xl:pr-8" : ""}`}
                  >
                    <dt className="whitespace-nowrap font-display text-4xl xl:text-5xl font-black tracking-tight text-amber-700 dark:text-cream">
                      {item.value}
                    </dt>
                    <dd className="mt-2 max-w-xs text-xs md:text-sm leading-snug text-brown-600 dark:text-brown-300">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          {/* ── What I did ───────────────────────────────────────────── */}
          {study.responsibilities ? (
            <div className="mt-20 md:mt-24">
              <Eyebrow>What I did</Eyebrow>
              <ul className="mt-8 grid list-none grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                {study.responsibilities.map((item) => (
                  <li key={item} className="ml-0 flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-olive-500 dark:bg-olive-300"
                    />
                    <span className="text-sm leading-relaxed text-brown-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* ── Approach ─────────────────────────────────────────────── */}
          {study.approach ? (
            <div className="mt-20 md:mt-24">
              <Eyebrow>Approach</Eyebrow>
              <ol className="mt-8 grid list-none grid-cols-1 gap-6 md:grid-cols-2">
                {study.approach.map((step, i) => (
                  <li
                    key={step.title}
                    className="ml-0 rounded-[1.5rem] bg-paper-50 p-7 ring-1 ring-dark-brown/[0.06] dark:bg-brown-900 dark:ring-cream/[0.06]"
                  >
                    <span className="font-cutive-mono text-[11px] text-brown-500 dark:text-brown-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-black tracking-tight text-dark-brown dark:text-cream">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brown-700 dark:text-gray-300">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          {/* ── Outcomes ─────────────────────────────────────────────── */}
          {study.outcomes ? (
            <div className="mt-20 md:mt-24">
              <Eyebrow>Outcomes</Eyebrow>
              {/* A single column, not a grid: these run long, and two narrow
                  columns of prose read as a wall rather than as a list. */}
              <ul className="mt-8 max-w-3xl list-none space-y-4">
                {study.outcomes.map((item) => (
                  <li key={item} className="ml-0 flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-700 dark:bg-amber-500"
                    />
                    <span className="text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* ── Related ──────────────────────────────────────────────── */}
          {related.length ? (
            <div className="mt-24 md:mt-32">
              <Eyebrow>More work</Eyebrow>
              <ul className="mt-6 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <CaseStudyCard key={item.slug} study={item} />
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-20">
            <Link href="/case-studies">
              <a className="group inline-flex items-center gap-2 text-sm font-semibold text-amber-700 transition-all duration-300 hover:gap-3 dark:text-amber-500">
                <span aria-hidden="true">←</span> All case studies
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
