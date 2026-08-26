import React from "react";

/* Structured data. One component so every schema block is escaped the same way
   and none of them can be built ad hoc in a page.

   The JSON is stringified rather than written inline because a raw "<" in any
   field would close the script tag early; escaping it is the standard guard.
   dangerouslySetInnerHTML is the only way to emit a script body in React, and
   is safe here because the input is JSON we construct, never user text. */
export default function JsonLd({ data }) {
  if (!data) return null;

  const json = JSON.stringify(data).replace(/</g, "\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

/* ── Builders ─────────────────────────────────────────────────────────────
   Kept beside the component so the shapes live in one file. Each returns a
   plain object; the page decides which to render. */

export function personSchema({ siteUrl, profiles, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Ejei-Okeke Emmanuel",
    alternateName: "Emino",
    url: siteUrl,
    image,
    jobTitle: "Product Lead & Senior Frontend Engineer",
    description:
      "Product lead and full-stack engineer working across payments, identity and commerce infrastructure.",
    sameAs: profiles,
    knowsAbout: [
      "Product Management",
      "Payments Infrastructure",
      "Identity Verification",
      "Frontend Engineering",
      "Fintech",
      "Blockchain",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  };
}

export function articleSchema({ siteUrl, url, title, description, image, published }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? [image] : undefined,
    datePublished: published || undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": `${siteUrl}/#person` },
    publisher: { "@id": `${siteUrl}/#person` },
  };
}

/* items: [{ name, path }] in order, page last. */
export function breadcrumbSchema({ siteUrl, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
