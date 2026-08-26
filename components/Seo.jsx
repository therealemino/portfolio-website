import React from "react";
import Head from "next/head";
import { meta, SITE_URL } from "../utils/meta";

/* The single source of page metadata. Every page renders exactly one of these.

   It exists because six pages previously hand-rolled their own <Head> blocks
   and disagreed: two shipped identical titles, four wrote Twitter tags as
   property= instead of name=, one pointed og:image at a relative path that no
   crawler can resolve, and none of them emitted a canonical.

   Open Graph and Twitter images must be absolute URLs — a relative one is
   silently dropped by every scraper — so `image` is resolved against the site
   origin here and callers can pass either form. */

const SITE_NAME = "Ejei-Okeke Emmanuel";

const absolute = (value) => {
  if (!value) return meta.img;
  return /^https?:\/\//.test(value) ? value : SITE_URL + value;
};

export default function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  publishedTime,
  noindex = false,
}) {
  const url = SITE_URL + (path.startsWith("/") ? path : `/${path}`);
  const img = absolute(image);
  const desc = description || meta.desc;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex ? <meta name="robots" content="noindex,follow" /> : null}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      {/* WhatsApp and Facebook pick the large card far more reliably when the
          dimensions are declared, rather than waiting to fetch and measure. */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {type === "article" && publishedTime ? (
        <meta property="article:published_time" content={publishedTime} />
      ) : null}

      {/* name=, not property=. X reads the name form. */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.twitterUsername} />
      <meta name="twitter:creator" content={meta.twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Head>
  );
}
