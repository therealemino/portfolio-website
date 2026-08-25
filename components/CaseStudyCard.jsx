import React from "react";
import Link from "next/link";

/* One card implementation, used by the case-studies index and by the
   "Related" block on detail pages. Shell matches Writing.jsx so article
   cards and case-study cards read as the same family.

   Takes the projection from data/case-studies.js `toCard()`, not a full
   case study — the long-form prose must not reach the browser. */
export default function CaseStudyCard({ study }) {
  return (
    <li className="ml-0">
      <Link
        href={`/case-studies/${study.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-paper-50 p-7 ring-1 ring-dark-brown/[0.06] transition duration-300 hover:ring-dark-brown/20 dark:bg-brown-900 dark:ring-cream/[0.06] dark:hover:ring-cream/20 md:p-8">

        {/* Sector, not role and dates. A job title against a date range is
            what let a codenamed card be matched to a timeline row. */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-cutive-mono text-[11px] uppercase tracking-wider text-brown-500 dark:text-brown-400">
          <span>
            {study.sector ||
              (study.kind === "venture" ? "Venture" : "Client work")}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-black tracking-tight text-dark-brown transition-colors duration-300 group-hover:text-amber-700 dark:text-cream dark:group-hover:text-amber-500">
          {study.name}
        </h3>

        <p className="mt-2 font-display text-base font-bold leading-snug tracking-tight text-dark-brown dark:text-cream">
          {study.headline}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-brown-700 dark:text-gray-300">
          {study.summary}
        </p>

        <p className="mt-auto pt-6 font-cutive-mono text-[11px] leading-relaxed text-brown-500 dark:text-brown-400">
          {study.tags.join(" · ")}
        </p>

      </Link>
    </li>
  );
}
