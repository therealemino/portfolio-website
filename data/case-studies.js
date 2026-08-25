/* ─────────────────────────────────────────────────────────────────────────
   CASE STUDIES — single source of truth for pages/case-studies/*

   NAMING / CONFIDENTIALITY
   Client and employer engagements run under an invented codename and carry
   no outbound link, no job title, and no dates — only a sector. Those three
   fields are what mapped an alias back to a company, because "Where I've
   Worked" and resume.pdf list the same roles against the same dates.

   Real company names are NOT stored in this file, not even in a comment.
   This repository is public; a comment is as readable as rendered copy.

   COPY PROVENANCE
   `copy: "drafted" | "approved"`. While "drafted", both pages show a DRAFT
   COPY chip in development only. Entries written from supplied material are
   marked "approved".

   No Tailwind class strings in this file — styling lives in components.
   A FIELD REFERENCE for the optional fields is at the foot of the file.
   ───────────────────────────────────────────────────────────────────────── */

export const CASE_STUDIES = [
  {
    slug: "meridian",
    name: "Meridian",
    alias: true,
    kind: "employment",
    sector: "Payments infrastructure",
    headline: "Improving transaction success rate",
    summary:
      "Card and virtual account payments were failing often enough to hurt merchants and customers. Processor failover, plus sockets in place of status polling, moved the success rate from roughly 75–85% to around 97–98%.",
    tags: [
      "Payment Routing",
      "Failover",
      "Real-Time Systems",
      "Product Strategy",
    ],

    overview: [
      "Meridian is a licensed payment provider. Card and virtual account payments were failing at a rate that hurt both merchants and customers.",
      "Two separate issues were driving this. There was no failover when a payment processor had an outage or a rejection, so a processor-side failure became a customer-facing failure, full stop. And the way payment status was being checked was slow and expensive to run at scale.",
    ],

    approach: [
      {
        title: "Payment routing failover",
        body: "Card payments defaulted to a single processor, Processor A. When a transaction failed at the processor level there was no retry path. I built automatic failover: on failure, the same transaction re-attempts through a second processor, Processor B, using the same transaction ID, so it reads as one continuous attempt rather than two disconnected ones. The same approach was applied to virtual account payments.",
      },
      {
        title: "Sockets over polling",
        body: "Checkout was validating payment status by polling an endpoint every five to ten seconds — for virtual account transfers, and for card payments going through 3D Secure, a flow where the transaction leaves checkout, goes to the issuing bank for authorization, and comes back. Polling that frequently was expensive in compute and added latency to an already multi-hop flow. I moved status updates to a WebSocket integration, so the server pushes the status the moment it changes instead of the client repeatedly asking.",
      },
      {
        title: "Polling kept as a fallback",
        body: "Reliability should not depend entirely on the socket connection, so polling stayed in place at a much lower frequency — around every thirty seconds instead of every five.",
      },
      {
        title: "More providers, more paths",
        body: "On the product side, in parallel, I integrated additional payment providers and processors. That gave the routing logic more paths to fail over through, and streamlined the overall flow.",
      },
    ],

    highlights: [
      {
        value: "97–98%",
        label: "Transaction success rate, up from roughly 75–85%",
      },
    ],

    outcomes: [
      "Transaction success rate moved from roughly 75–85% to around 97–98%.",
      "That figure is measured more conservatively than some other processors in the market: bank-side failures, like insufficient funds or an incorrect PIN, are still counted against it rather than excluded — so the real-world improvement is arguably better than the raw numbers suggest.",
      "Direct card routing is in progress, expected to further improve success rates specifically on local transactions.",
    ],

    stack: ["Nuxt.js", "TailwindCSS", "WebSockets"],

    copy: "approved",
  },

  {
    slug: "atlas",
    name: "Atlas",
    alias: true,
    kind: "employment",
    sector: "Consumer discovery",
    headline: "Resolving a structural unit economics risk",
    summary:
      "A core feature ran on a pay-per-call third-party API. Modeled forward against projected growth, cost-to-serve would scale with adoption. A first-party data layer became the default experience, and the paid dependency was repositioned as a monetized premium tier.",
    tags: [
      "Unit Economics",
      "Data Strategy",
      "Cost-to-Serve",
      "Product Architecture",
    ],

    overview: [
      "A core feature of the product depended on a third-party geolocation and points-of-interest API, licensed on a pay-per-call, pay-per-asset basis. During early-stage beta testing with a limited user cohort, monthly spend on this dependency was already material relative to the size of the user base.",
      "Modeling that cost curve forward against projected user growth made the trajectory clear: left unaddressed, cost-to-serve on this feature would scale linearly, and eventually faster than linearly, with adoption. At meaningful scale, the unit economics would not hold.",
      "This was not yet a live crisis. It was a structural risk identified early enough to be redesigned around, rather than discovered later as a margin problem.",
    ],

    approach: [
      {
        title: "Own the data rather than rent it",
        body: "I made the decision to reduce structural dependency on the third-party API rather than continue absorbing its cost curve, and led the shift toward a proprietary, first-party data layer built in two parallel tracks. The first was a near-term, operationally-led data acquisition process to populate core markets directly.",
      },
      {
        title: "An ingestion pipeline for the long run",
        body: "The second track, still in active development, is an automated ingestion pipeline designed to source, clean, and structure the same category of data from a broader range of public sources at lower marginal cost.",
      },
      {
        title: "A tiered architecture, not a cutover",
        body: "Eliminating the third-party dependency outright would have meant losing the product capability it uniquely offered, so I designed a tiered product architecture around it instead. The proprietary data layer became the default experience for the majority of the user base, effectively decoupling cost-to-serve from user growth.",
      },
      {
        title: "The expensive dependency pays for itself",
        body: "The third-party integration was preserved and repositioned as a premium capability, monetized directly, so the feature's most expensive dependency now funds itself rather than eroding margin.",
      },
    ],

    outcomes: [
      "The redesign converted an unbounded, usage-linked cost center into a cost structure that scales sustainably with the user base.",
      "The premium capability was preserved and monetized rather than cut, so the most expensive part of the feature now funds itself instead of eroding margin.",
      "It also reflects a broader pattern in how I approach product decisions: catching unit economics risk early, from a small signal, before it becomes a scaling constraint.",
    ],

    copy: "approved",
  },
];

/* Smaller and older shipped work. Listed rather than written up.

   Three entries from the old Portfolio component were dropped because their
   domains no longer resolve: Bookeverything NG, Eki Live, and Yana. A dead
   portfolio link is worse than an omitted one. */
export const ALSO_BUILT = [
  {
    name: "Signature Frames NG",
    href: "https://signatureframes.com.ng",
    desc: "Shop exquisite frames and canvas art prints.",
    stack: ["Nuxt.js", "TailwindCSS", "Node.js"],
  },
  {
    name: "Emino FPL",
    href: "https://emino-football.vercel.app/",
    desc: "Private league site for Fantasy Premier League enthusiasts.",
    stack: ["Nuxt.js", "TailwindCSS"],
  },
  {
    name: "Weather App",
    href: "https://emino-weather-app.surge.sh/",
    desc: "A small weather PWA. Conditions for your location or any city.",
    stack: ["Nuxt.js", "Vuetify", "Chart.js", "OpenWeatherMap"],
  },
];

/* ── Lookups ──────────────────────────────────────────────────────────── */

export function getCaseStudy(slug) {
  return CASE_STUDIES.find((study) => study.slug === slug) || null;
}

/* Explicit relatedSlugs win; otherwise same-kind siblings. Returns [] while
   only one case study exists, and the Related block omits itself. */
export function getRelated(study, limit = 3) {
  const pool = study.relatedSlugs
    ? study.relatedSlugs.map(getCaseStudy).filter(Boolean)
    : CASE_STUDIES.filter(
        (other) => other.kind === study.kind && other.slug !== study.slug
      );
  return pool.slice(0, limit);
}

/* Card-shaped projection. Pages send this to the browser instead of the
   whole module, so the long-form prose never ships to the client.

   No role, no period, no status: the card is the densest place on the site,
   and those three fields are exactly what identified an aliased client. */
export function toCard(study) {
  return {
    slug: study.slug,
    name: study.name,
    kind: study.kind,
    sector: study.sector || null,
    headline: study.headline,
    summary: study.summary,
    tags: study.tags,
    alias: study.alias || false,
    copy: study.copy,
  };
}

/* ── Build-time validation ────────────────────────────────────────────────
   Server-guarded so it runs during `next build` (which sets NODE_ENV to
   production, hence the window check) and never ships to the browser. A data
   typo should fail the build loudly instead of silently dropping a section. */
if (typeof window === "undefined") {
  const seen = new Set();

  CASE_STUDIES.forEach((study, i) => {
    const at = `CASE_STUDIES[${i}] (${study.slug || "no slug"})`;

    ["slug", "name", "kind", "headline", "summary", "copy"].forEach((field) => {
      if (!study[field]) throw new Error(`${at}: missing required "${field}"`);
    });

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(study.slug))
      throw new Error(`${at}: slug must be kebab-case`);
    if (seen.has(study.slug)) throw new Error(`${at}: duplicate slug`);
    seen.add(study.slug);

    if (!["venture", "employment"].includes(study.kind))
      throw new Error(`${at}: kind must be "venture" or "employment"`);
    if (!["drafted", "approved"].includes(study.copy))
      throw new Error(`${at}: copy must be "drafted" or "approved"`);

    if (!Array.isArray(study.tags) || !study.tags.length)
      throw new Error(`${at}: tags must be a non-empty array`);
    if (!Array.isArray(study.overview) || !study.overview.length)
      throw new Error(`${at}: overview must be a non-empty array`);

    /* An aliased entry must carry nothing that maps it back to a company.
       The outbound link is the obvious one; role, dates and the current-role
       dot are the quiet ones, because the homepage timeline and resume.pdf
       publish the same title against the same dates under the real name. */
    ["url", "realName", "org", "role", "period", "stints", "status"].forEach(
      (field) => {
        if (study.alias && study[field])
          throw new Error(`${at}: aliased entries must not carry "${field}"`);
      }
    );

    // Cardinality the schematic grids hard-code — see components/Schematics.jsx
    const d = study.diagram;
    if (d) {
      if (d.kind === "studio") {
        if (d.sectors.length !== 3)
          throw new Error(`${at}: studio diagram needs exactly 3 sectors`);
      } else {
        if (d.sources.length !== 3)
          throw new Error(`${at}: flow diagram needs exactly 3 sources`);
        if (![2, 4].includes(d.core.items.length))
          throw new Error(`${at}: flow diagram core.items must be 2 or 4`);
      }
    }
  });

  CASE_STUDIES.forEach((study) => {
    (study.relatedSlugs || []).forEach((slug) => {
      if (!seen.has(slug))
        throw new Error(`${study.slug}: relatedSlugs "${slug}" does not exist`);
    });
  });
}

/* ── FIELD REFERENCE ──────────────────────────────────────────────────────
   Required on every entry:
     slug, name, kind ("venture" | "employment"), headline, summary,
     tags[], overview[], copy ("drafted" | "approved")

   Optional — omit entirely when there is no data. Every block renders only
   when its field exists, so an absent field means an absent section rather
   than an empty one.

   alias:      true                     // shows the alias note
   sector:     "Payments infrastructure"
   shortName:  "Emino Digital"          // h1 override when the name is long
   stack:      ["Nuxt.js", "WebSockets"]
   links:      [{ label, href }]
   relatedSlugs: ["ledger"]             // else falls back to same-kind siblings
   ogImage:    "https://..."            // absolute; falls back to meta.img

   Named entries — alias not set — may additionally carry:
   org:        "Tytron Group"           // parent org, when it differs
   role:       "Product Lead"
   period:     "Jul 2024 — Present"
   status:     "current"                // olive dot on the card
   stints:     [{ range, role, note }]  // instead of period, split engagements
   url:        "https://..."
   domain:     "useveem.com"            // display form of url

   The validator rejects all seven of those on an aliased entry.

   The narrative blocks:
     highlights: [{ value: "97–98%", label: "Transaction success rate..." }]
     responsibilities: ["Owned the payments roadmap", "Ran design review"]
     approach:   [{ title: "Instrument first", body: "We could not fix..." }]
     outcomes:   ["Cut failed transactions by half"]
     diagram:    see components/Schematics.jsx for the two shapes
   ─────────────────────────────────────────────────────────────────────── */
