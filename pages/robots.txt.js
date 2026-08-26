import { SITE_URL } from "../utils/meta";

/* Served rather than a static file in public/, for one reason: the Sitemap
   line must carry the real origin, and a file on disk cannot read an env var.
   With a custom domain coming, a static robots.txt would keep pointing crawlers
   at the vercel.app sitemap after the move. */

export async function getServerSideProps({ res }) {
  const body = [
    "# Everything here is meant to be indexed.",
    "User-agent: *",
    "Allow: /",
    "",
    "# Preview URLs carry a token and are not linked from anywhere, so they are",
    "# not discoverable and need no rule.",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800"
  );
  res.write(body);
  res.end();

  return { props: {} };
}

export default function Robots() {
  return null;
}
