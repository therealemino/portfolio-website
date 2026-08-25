import React from "react";
import Head from "next/head";
import { meta } from "../utils/meta";

/* Shared page metadata. Composes with the <Head> blocks in _app.jsx and
   layouts/default.jsx exactly as the hand-rolled ones do.

   Two things it fixes centrally, which the existing hand-rolled blocks get
   wrong in different ways:
     - meta.url ends in "/", so naive concatenation yields a double slash.
     - Twitter tags need name=, not property=. og: tags need property=.
   OG images must be absolute, so a relative `image` is resolved against the
   site origin. */

const SITE = meta.url.replace(/\/+$/, "");

const absolute = (value) =>
  !value ? meta.img : /^https?:\/\//.test(value) ? value : SITE + value;

export default function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
}) {
  const url = SITE + (path.startsWith("/") ? path : `/${path}`);
  const img = absolute(image);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.twitterUsername} />
      <meta name="twitter:creator" content={meta.twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Head>
  );
}
