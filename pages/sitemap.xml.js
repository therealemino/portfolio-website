import { SITE_URL } from "../utils/meta";
import { CASE_STUDIES } from "../data/case-studies";
import { createClient } from "../prismicio";

/* Served, not static: blog posts live in Prismic and are fetched per request,
   so a file in public/ would go stale the moment a post is published.

   Nothing renders — getServerSideProps writes the XML directly to the response
   and returns no props, which is the documented way to serve a non-HTML
   document from the pages router. */

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "yearly" },
  { path: "/case-studies", priority: "0.9", changefreq: "monthly" },
  { path: "/library", priority: "0.8", changefreq: "weekly" },
];

/* & < > " ' are not legal raw in XML text or attributes. Slugs and uids are
   kebab-case today, but escaping is cheap and a single stray ampersand would
   make the whole document unparseable. */
const escape = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

function urlEntry({ path, priority, changefreq, lastmod }) {
  return [
    "  <url>",
    `    <loc>${escape(SITE_URL + path)}</loc>`,
    lastmod ? `    <lastmod>${escape(lastmod)}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority ? `    <priority>${priority}</priority>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

export async function getServerSideProps({ res }) {
  const entries = [...STATIC_ROUTES];

  for (const study of CASE_STUDIES) {
    entries.push({
      path: `/case-studies/${study.slug}`,
      priority: "0.7",
      changefreq: "monthly",
    });
  }

  /* Same try/catch discipline as pages/index.jsx: an unreachable Prismic
     should cost the sitemap its posts, not return a 500 to a crawler that is
     trying to discover the rest of the site. */
  try {
    const client = createClient();
    const posts = await client.getAllByType("post");

    for (const post of posts) {
      entries.push({
        path: `/blog/${post.uid}`,
        priority: "0.6",
        changefreq: "yearly",
        lastmod:
          post.data.date ||
          (post.last_publication_date || "").slice(0, 10) ||
          undefined,
      });
    }
  } catch (error) {
    console.warn(`[sitemap] could not load posts from Prismic: ${error.message}`);
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(urlEntry),
    "</urlset>",
  ].join("\n");

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(xml);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
