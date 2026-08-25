import React from "react";
import ArrowOut from "./ArrowOut";

/* Order is exactly as supplied — current roles first, then past. Note it is not
   strictly reverse-chronological (Nexbuy ran to Apr 2022 but sits below
   Coriftech, which ended Jan 2021).

   `url`s without a note below were carried over from the old Resume component's
   experienceData; shopelieman.com is the one newly supplied. */
const ROLES = [
  {
    range: "Jul 2024 — Present",
    current: true,
    company: "Echezona Digital Gateway Ltd",
    url: "https://www.echezona.com",
    role: "Product Lead & Senior Frontend Engineer",
    note: "A CBN-licensed Payment Solution Service Provider (PSSP, PTSP), powering card, USSD, virtual accounts and other multiple rails with multi-currency support.",
  },
  {
    range: "Jan 2026 — Present",
    current: true,
    company: "Tytron Group",
    role: "Product Manager – Digital Projects, Kulturee",
    note: "A global travel and cultural experience platform, under Tytron's strategy and management consultancy.",
  },
  {
    range: "Aug 2024 — Present",
    current: true,
    company: "Elieman",
    url: "https://shopelieman.com",
    role: "IT Engineer",
    note: "An art and fashion house building its digital retail and gallery experience.",
  },
  {
    range: "Nov 2022 — Aug 2024",
    company: "Loiz Tours & Travels",
    url: "https://loiztravels.com",
    role: "Frontend Developer, Junior Product Owner",
    note: "An e-commerce travel platform.",
  },
  {
    range: "Oct 2021 — Jun 2024",
    company: "Pennee Technologies / Yana",
    url: "https://yana.finance",
    role: "Frontend Engineer (Product)",
    note: "Corporate credit accounts, asset financing and cash flow management software. A B2B credit lending startup.",
  },
  {
    range: "Jul 2021 — Nov 2021",
    company: "Loiz Tours & Travels",
    url: "https://loiztravels.com",
    role: "Frontend Developer (Volunteer)",
    note: "Preceded the paid part-time engagement above.",
  },
  {
    range: "Oct 2020 — Jan 2021",
    company: "Coriftech Solutions Ltd",
    url: "https://coriftech.com/",
    role: "Web Development Instructor (Volunteer/Intern)",
    note: "A tech education institute in Asaba, training web development, cybersecurity, and design skills across Africa.",
  },
  {
    range: "Jan 2020 — Apr 2022",
    company: "Nexbuy District",
    url: "https://www.nexbuydistrict.com/",
    role: "Frontend Developer / Instructor",
    note: "An e-commerce startup with an in-house tech education arm, Nexlearn.",
  },
  {
    range: "Jul 2019 — Dec 2019",
    company: "West African Oilfield Services",
    role: "Student Intern (Engineering)",
    note: "An oil & gas field services company.",
  },
];

export default function Experience(props) {
  return (
    <section
      id="experience"
      ref={props.refProp}
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28"
    >
      <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-dark-brown dark:text-cream">
        Where I&apos;ve Worked
      </h2>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300">
          Nine roles across payments, credit, travel, fashion and education.
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

      {/* One continuous rail down the section: each row draws its own segment,
          and they meet because the rows stack flush. list-none/ml-0 undo the
          global `ol li` styling in globals.css. */}
      <ol className="mt-14 list-none">
        {ROLES.map((item, i) => {
          const isLast = i === ROLES.length - 1;
          return (
            <li
              key={`${item.company}-${item.range}`}
              className="ml-0 grid grid-cols-[auto_1fr] gap-x-5 md:grid-cols-[9.5rem_auto_1fr] md:gap-x-8"
            >
              <time className="hidden whitespace-nowrap pt-px text-right font-cutive-mono text-[11px] uppercase tracking-wider text-brown-500 dark:text-brown-400 md:block">
                {item.range}
              </time>

              <div className="relative flex justify-center">
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-0 w-px -translate-x-1/2 bg-dark-brown/15 dark:bg-cream/15 ${
                    isLast ? "h-3" : "bottom-0"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`relative mt-1 h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-paper dark:ring-brown-950 ${
                    item.current
                      ? "bg-olive-500 dark:bg-olive-300"
                      : "bg-paper-300 dark:bg-brown-700"
                  }`}
                />
              </div>

              <div className={isLast ? "" : "pb-12"}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden">
                  <time className="font-cutive-mono text-[11px] uppercase tracking-wider text-brown-500 dark:text-brown-400">
                    {item.range}
                  </time>
                </div>

                <h3 className="mt-1 font-display text-lg md:text-xl font-black tracking-tight text-dark-brown dark:text-cream md:mt-0">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-start gap-1 transition-colors duration-300 hover:text-amber-700 dark:hover:text-amber-500"
                    >
                      {item.company}
                      <ArrowOut className="mt-[3px] h-3 w-3 opacity-40" />
                    </a>
                  ) : (
                    item.company
                  )}
                </h3>

                <p className="mt-0.5 text-xs md:text-sm font-semibold text-amber-700 dark:text-amber-500">
                  {item.role}
                </p>

                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-brown-700 dark:text-gray-300">
                  {item.note}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
