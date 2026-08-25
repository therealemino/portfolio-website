import React from "react";
import Link from "next/link";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/* Prismic hands back a plain YYYY-MM-DD string. Parsing it by hand rather than
   with Date keeps the output identical on the server and in the browser — a
   Date would shift across timezones and mismatch on hydration. */
function formatDate(iso) {
  if (typeof iso !== "string") return "";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d || !MONTHS[m - 1]) return iso;
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export default function Writing({ articles = [] }) {
  // Nothing published, or Prismic was unreachable at build time — skip the section
  if (!articles.length) return null;

  return (
    <section
      id="writing"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28"
    >
      <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-dark-brown dark:text-cream">
        What I&apos;ve Written
      </h2>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300">
          Notes on building products, the engineering underneath them, and what
          the two teach each other.
        </p>

        <Link
          href="/library"
          className="shrink-0 self-start rounded-full border border-dark-brown/30 px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:border-amber-700 hover:text-amber-700 dark:border-cream/30 dark:hover:border-amber-500 dark:hover:text-amber-500 sm:self-auto">
          
            View the library →
          
        </Link>
      </div>

      <ul className="mt-14 grid list-none grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <li key={article.id} className="ml-0">
            <Link
              href={`/blog/${article.uid}`}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-paper-50 ring-1 ring-dark-brown/[0.06] transition duration-300 hover:ring-dark-brown/20 dark:bg-brown-900 dark:ring-cream/[0.06] dark:hover:ring-cream/20">

              <div className="relative h-44 overflow-hidden bg-olive-100 dark:bg-brown-950">
                {article.data.image && article.data.image.url ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={article.data.image.url}
                    alt={article.data.image.alt || article.data.title || ""}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : null}

                {article.data.category ? (
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 font-cutive-mono text-[10px] uppercase tracking-[0.12em] text-brown-700 backdrop-blur dark:bg-brown-950/80 dark:text-brown-200">
                    {article.data.category}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-black leading-snug tracking-tight text-dark-brown transition-colors duration-300 group-hover:text-amber-700 dark:text-cream dark:group-hover:text-amber-500">
                  {article.data.title}
                </h3>

                {article.data.desc ? (
                  <p className="mt-3 text-sm leading-relaxed text-brown-700 dark:text-gray-300">
                    {article.data.desc}
                  </p>
                ) : null}

                <p className="mt-auto pt-6 font-cutive-mono text-[11px] text-brown-500 dark:text-brown-400">
                  {[
                    formatDate(article.data.date),
                    article.data.readTime
                      ? `${article.data.readTime} min read`
                      : null,
                  ]
                    .filter(Boolean)
                    .join("  ·  ")}
                </p>
              </div>

            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
