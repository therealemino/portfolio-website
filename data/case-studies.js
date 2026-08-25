/* ─────────────────────────────────────────────────────────────────────────
   CASE STUDIES — single source of truth for pages/case-studies/*

   NAMING / CONFIDENTIALITY
   Client and employer engagements run under an invented codename and carry
   no outbound link, so the client's name never appears on the same page as
   internal figures. `realName` is kept here for reference only — it is
   stripped in getStaticProps and never reaches the browser.

   The homepage timeline deliberately does NOT link to case studies: naming a
   company on one row and linking it to its alias mapped the two directly.
   The alias is still soft — "Where I've Worked" and resume.pdf name these
   companies with the same roles and dates.

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
    realName: "Echezona Digital Gateway Ltd", // reference only — never rendered
    kind: "employment",
    status: "current",
    role: "Product Lead & Senior Frontend Engineer",
    period: "Jul 2024 — Present",
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
      "Meridian is a CBN-licensed payment provider. Card and virtual account payments were failing at a rate that hurt both merchants and customers.",
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
   whole module, so the long-form prose never ships to the client. */
export function toCard(study) {
  return {
    slug: study.slug,
    name: study.name,
    kind: study.kind,
    role: study.role,
    headline: study.headline,
    summary: study.summary,
    tags: study.tags,
    period: study.period || null,
    status: study.status || null,
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

    ["slug", "name", "kind", "role", "headline", "summary", "copy"].forEach(
      (field) => {
        if (!study[field]) throw new Error(`${at}: missing required "${field}"`);
      }
    );

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

    // An aliased entry must not leak an outbound link to the real client.
    if (study.alias && study.url)
      throw new Error(`${at}: aliased entries must not carry a url`);

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
     slug, name, kind ("venture" | "employment"), role, headline, summary,
     tags[], overview[], copy ("drafted" | "approved")

   Optional — omit entirely when there is no data. Every block renders only
   when its field exists, so an absent field means an absent section rather
   than an empty one.

   alias:      true                     // shows the alias note, forbids url
   realName:   "..."                    // reference only, stripped server-side
   shortName:  "Emino Digital"          // h1 override when the name is long
   org:        "Tytron Group"           // parent org, when it differs
   status:     "current"                // olive dot on the card
   period:     "Jul 2024 — Present"
   stints:     [{ range, role, note }]  // instead of period, for split engagements
   url:        "https://..."            // NOT allowed on aliased entries
   domain:     "useveem.com"            // display form of url
   sector:     "Payments infrastructure"
   stack:      ["Nuxt.js", "WebSockets"]
   links:      [{ label, href }]
   relatedSlugs: ["ledger"]             // else falls back to same-kind siblings
   ogImage:    "https://..."            // absolute; falls back to meta.img

   The narrative blocks:
     highlights: [{ value: "97–98%", label: "Transaction success rate..." }]
     responsibilities: ["Owned the payments roadmap", "Ran design review"]
     approach:   [{ title: "Instrument first", body: "We could not fix..." }]
     outcomes:   ["Cut failed transactions by half"]
     diagram:    see components/Schematics.jsx for the two shapes
   ─────────────────────────────────────────────────────────────────────── */
