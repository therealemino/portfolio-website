import React from "react";

const STATS = [
  { value: "7+", label: "Years in software & product" },
  {
    value: "96–98%",
    label: "Transaction success rate achieved, up from ~78–82%",
  },
  {
    value: "3",
    label: "Ventures currently building alongside full-time product work",
  },
];

export default function About(props) {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28"
    >
      <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-dark-brown dark:text-cream">
        About Me
      </h2>

      {/* Copy sits in a narrow left measure; the stats hang off the right and
          bottom-align with it. Vertical hairlines between the stats are the
          section's only rules. */}
      <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-end">
        <div className="space-y-5 text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300 lg:col-span-5">
          <p>
            I&apos;m Ejei-Okeke Emmanuel, but just call me Emino (air-me-know).
            I work at the intersection of product and engineering, with a focus
            on fintech and payments: routing, settlements, credit, identity, and
            the infrastructure decisions that make them reliable at scale.
          </p>
          <p>
            I hold an MBA in Fintech &amp; Blockchain from{" "}
            <a
              href="https://nexford.edu"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-amber-700 underline decoration-amber-700/30 underline-offset-4 transition duration-300 hover:decoration-amber-700 dark:text-cream dark:decoration-cream/30 dark:hover:decoration-cream"
            >
              Nexford University
            </a>{" "}
            (4.00 CGPA), and I still ship code. That combination shapes how I
            work. I can set direction and sit in the codebase that executes it,
            often on the same day.
          </p>
        </div>

        <dl className="mt-12 flex flex-col gap-8 sm:flex-row sm:gap-0 lg:col-span-7 lg:mt-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              className={`border-dark-brown/15 dark:border-cream/15 sm:flex-1 ${
                i > 0 ? "sm:border-l sm:pl-6 xl:pl-8" : ""
              } ${i < STATS.length - 1 ? "sm:pr-6 xl:pr-8" : ""}`}
            >
              {/* nowrap keeps every figure on one line so the labels below them
                  stay on a common baseline */}
              <dt className="whitespace-nowrap font-display text-4xl xl:text-5xl font-black tracking-tight text-amber-700 dark:text-cream">
                {stat.value}
              </dt>
              <dd className="mt-2 text-xs md:text-sm leading-snug text-brown-600 dark:text-brown-300">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
