/* ─────────────────────────────────────────────────────────────────────────
   CASE STUDIES — single source of truth
   Consumed by pages/case-studies/*, and by components/Building.jsx for the
   homepage venture panels.

   NAMING / CONFIDENTIALITY
   Ventures are named. Employer and client engagements run under an invented
   codename and carry no outbound link, so the client's name never appears on
   the same page as internal figures. `realName` is kept here for your
   reference only — it is never rendered, and never reaches the browser
   bundle (see the note on getStaticProps in pages/case-studies/[slug].jsx).

   Be aware the alias is soft: "Where I've Worked" on the homepage and
   resume.pdf both name these companies with the same roles and dates, so a
   determined reader can map them. It keeps names out of search results
   beside your numbers; it is not anonymity.

   COPY PROVENANCE
   Every entry carries `copy: "drafted" | "approved"`. While it is "drafted"
   both pages show a DRAFT COPY chip in development only. Read the page, edit
   the prose, then flip the flag. Fields drafted by restating existing site
   copy carry a DRAFTED comment naming their source.

   No Tailwind class strings in this file — styling lives in components.
   A FIELD REFERENCE for the optional fields is at the foot of the file.
   ───────────────────────────────────────────────────────────────────────── */

export const CASE_STUDIES = [
  /* ── Ventures ─────────────────────────────────────────────────────────── */
  {
    slug: "veem",
    name: "Veem",
    kind: "venture",
    featured: true,
    status: "current",
    role: "Co-founder & CEO",
    url: "https://useveem.com",
    domain: "useveem.com",
    sector: "Identity & KYC infrastructure",
    headline: "The trust layer for modern identity",
    summary:
      "A consent-first identity verification and KYC orchestration layer for Nigeria, aggregating BVN, NIN and biometric checks into a single confidence-scored identity signal for merchants.",
    /* Homepage panel keeps its original, longer copy; `summary` is the
       tighter card version. */
    homeBody:
      "A consent-first identity verification and KYC orchestration layer for Nigeria, aggregating BVN, NIN checks and biometric verification into a single confidence-scored identity signal for merchants. I lead strategy and product direction; my two co-founders and I are all engineers by background.",
    tags: ["BVN", "NIN", "Biometrics", "KYC orchestration"],

    overview: [
      /* DRAFTED — restates Building.jsx VENTURES[0].body, first clause */
      "Nigerian merchants that need to know who they are dealing with have to integrate several identity sources separately — BVN, NIN, biometric checks — and then reconcile answers that do not always agree. Each one is a different contract, a different API and a different failure mode.",
      /* DRAFTED — restates Building.jsx VENTURES[0].body, first clause */
      "Veem sits in front of all of them. It aggregates those checks into a single confidence-scored identity signal a merchant can actually act on, and it is consent-first: the person being verified is party to the exchange rather than the subject of it.",
      /* DRAFTED — restates Building.jsx VENTURES[0].body, second clause */
      "I co-founded Veem and lead strategy and product direction. My two co-founders and I are all engineers by background, so the product decisions and the architecture get made in the same room.",
    ],

    /* `highlights`, `approach`, `outcomes`, `stack` deliberately absent —
       no permitted source has venture metrics or delivery detail yet.
       These are the fields worth filling in first. */

    diagram: {
      caption: "Checks aggregated",
      sources: ["BVN", "NIN", "Biometrics"],
      core: {
        title: "One identity signal",
        note: "consent-first",
        items: ["Confidence scored", "Merchant facing"],
      },
      outcome: "Verify → score → onboard",
    },

    copy: "drafted",
  },

  {
    slug: "rimoswap",
    name: "Rimoswap",
    kind: "venture",
    featured: true,
    status: "current",
    role: "Co-founder & CTO",
    url: "https://rimoswap.com/",
    domain: "rimoswap.com",
    sector: "Digital assets & cross-border payments",
    headline: "One platform for crypto-asset management",
    summary:
      "An Africa-first digital-asset platform — trading, wallets, P2P, and stablecoin-based cross-border payments — with live web and Android products.",
    /* Homepage panel keeps its original, longer copy; `summary` is the
       tighter card version. */
    homeBody:
      "An Africa-first digital-asset platform — trading, wallets, P2P, and stablecoin-based cross-border payments, with live web and Android products. I lead engineering and still write and maintain code.",
    tags: ["Trading", "Wallets", "P2P", "Stablecoin payments"],

    overview: [
      /* DRAFTED — restates Building.jsx VENTURES[1].body */
      "Rimoswap is an Africa-first digital-asset platform: trading, wallets, peer-to-peer exchange, and stablecoin-based cross-border payments in one product rather than four disconnected ones.",
      /* DRAFTED — restates Building.jsx VENTURES[1].body, "live web and Android" */
      "The cross-border piece is the point. Stablecoin rails move value between markets without the correspondent-banking delay, and the platform wraps that in something an ordinary user can operate. Web and Android are both live.",
      /* DRAFTED — restates Building.jsx VENTURES[1].body, final sentence */
      "I co-founded Rimoswap and lead engineering. I still write and maintain code on it.",
    ],

    diagram: {
      caption: "One platform",
      sources: ["Trading", "Wallets", "P2P"],
      core: {
        title: "Digital-asset rails",
        note: "web · Android",
        items: ["Stablecoin", "Cross-border"],
      },
      outcome: "Send → settle → payout",
    },

    copy: "drafted",
  },

  {
    slug: "emino-digital-technologies",
    name: "Emino Digital Technologies",
    shortName: "Emino Digital",
    kind: "venture",
    featured: true,
    status: "current",
    role: "Founder",
    url: "https://eminotechnologies.com/",
    domain: "eminotechnologies.com",
    sector: "Software development & technology advisory",
    headline: "Engineering digital systems that endure",
    summary:
      "A selective software development and technology advisory studio, CAC-registered, taking on a limited number of engagements per quarter across fashion, hospitality and consumer platforms.",
    /* Homepage panel keeps its original, longer copy; `summary` is the
       tighter card version. */
    homeBody:
      "A selective software development and technology advisory studio (CAC-registered), taking on a limited number of engagements per quarter. Client work spans fashion, hospitality, and consumer platforms.",
    tags: ["Fashion", "Hospitality", "Consumer platforms"],

    overview: [
      /* DRAFTED — restates Building.jsx VENTURES[2].body */
      "Emino Digital Technologies is the studio I run for client work: software development and technology advisory, CAC-registered, deliberately small.",
      /* DRAFTED — restates "limited number of engagements per quarter" */
      "The constraint is the product. It takes a limited number of engagements per quarter, which is what makes it possible to be in the detail of each one rather than staffing them out and reviewing from a distance.",
      /* DRAFTED — restates the sector list */
      "Client work spans fashion, hospitality and consumer platforms.",
    ],

    diagram: {
      kind: "studio",
      caption: "The studio",
      domain: "eminotechnologies.com",
      sectors: ["Fashion", "Hospitality", "B2C Solutions"],
      outcome: "Limited engagements per quarter",
    },

    copy: "drafted",
  },

  /* ── Client & employer work (aliased) ─────────────────────────────────── */
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
    headline: "Raising the floor on payment success rates",
    summary:
      "A CBN-licensed Payment Solution Service Provider, powering card, USSD, virtual accounts and other rails with multi-currency support.",
    tags: ["Card", "USSD", "Virtual accounts", "Multi-currency"],

    overview: [
      /* DRAFTED — restates Experience.jsx ROLES[0].note */
      "Meridian is a CBN-licensed Payment Solution Service Provider — licensed as both a PSSP and a PTSP — moving money over card, USSD, virtual accounts and several other rails, with multi-currency support on top.",
      /* DRAFTED — frames the About.jsx stat, which you confirmed belongs here */
      "A payment processor is judged on one number above all others: how often a transaction that should succeed actually does. When I joined, that number sat in the high seventies to low eighties. It now runs between 96% and 98%.",
      /* DRAFTED — restates the role title; no further sourced detail exists */
      "I lead product and work as a senior frontend engineer — setting direction for the platform and building on it.",
    ],

    highlights: [
      {
        value: "96–98%",
        label: "Transaction success rate, up from roughly 78–82%",
      },
    ],

    /* stack from the old Portfolio.jsx `tools` field, which was collected
       and never rendered */
    stack: ["Nuxt.js", "TailwindCSS"],

    copy: "drafted",
  },

  {
    slug: "atlas",
    name: "Atlas",
    alias: true,
    realName: "Kulturee, under Tytron Group", // reference only — never rendered
    kind: "employment",
    status: "current",
    role: "Product Manager – Digital Projects",
    period: "Jan 2026 — Present",
    sector: "Travel & cultural experiences",
    headline: "Packaging culture as something you can book",
    summary:
      "A global travel and cultural experience platform, run under a strategy and management consultancy.",
    tags: ["Travel", "Cultural experiences", "Product management"],

    overview: [
      /* DRAFTED — restates Experience.jsx ROLES[1].note */
      "Atlas is a global travel and cultural experience platform, built inside a strategy and management consultancy rather than as a standalone startup — so the product sits alongside the advisory work rather than apart from it.",
      /* DRAFTED — restates the role title; no further sourced detail exists */
      "I manage product for the digital projects side of it.",
    ],

    copy: "drafted",
  },

  {
    slug: "atelier",
    name: "Atelier",
    alias: true,
    realName: "Elieman", // reference only — never rendered
    kind: "employment",
    status: "current",
    role: "IT Engineer",
    period: "Aug 2024 — Present",
    sector: "Art & fashion retail",
    headline: "A gallery that also has to sell",
    summary:
      "An art and fashion house building out its digital retail and gallery experience.",
    tags: ["Digital retail", "Gallery", "E-commerce"],

    overview: [
      /* DRAFTED — restates Experience.jsx ROLES[2].note */
      "Atelier is an art and fashion house. The brief is a digital presence that works as a gallery and as a shop at once — the work has to be presented properly, and it also has to be purchasable.",
      /* DRAFTED — restates the role title; no further sourced detail exists */
      "I work across product and IT engineering on the digital side of the house.",
    ],

    copy: "drafted",
  },

  {
    slug: "compass",
    name: "Compass",
    alias: true,
    realName: "Loiz Tours & Travels", // reference only — never rendered
    kind: "employment",
    role: "Frontend Developer, then Junior Product Owner",
    period: "Jul 2021 — Aug 2024",
    sector: "Travel e-commerce",
    headline: "From building the storefront to owning it",
    summary:
      "An e-commerce travel platform, across two engagements — first as a volunteer frontend developer, later as a paid developer and junior product owner.",
    tags: ["E-commerce", "Travel", "Frontend", "Product ownership"],

    /* Two separate engagements with a gap between them, so `stints` rather
       than a single period — see Experience.jsx, which lists both rows. */
    stints: [
      {
        range: "Nov 2022 — Aug 2024",
        role: "Frontend Developer, Junior Product Owner",
      },
      {
        range: "Jul 2021 — Nov 2021",
        role: "Frontend Developer (Volunteer)",
        note: "Preceded the paid engagement",
      },
    ],

    overview: [
      /* DRAFTED — restates Experience.jsx ROLES[3].note and ROLES[5].note */
      "Compass is an e-commerce travel platform. I worked on it twice: first as a volunteer frontend developer in 2021, then on a paid basis from late 2022.",
      /* DRAFTED — restates the two role titles */
      "The second engagement is the interesting one, because the job changed underneath me. I came back to write frontend code and left as a junior product owner — the same product, seen from the other side of the brief.",
    ],

    stack: ["Nuxt.js", "Vuetify", "Commerce.js"],

    copy: "drafted",
  },

  {
    slug: "ledger",
    name: "Ledger",
    alias: true,
    realName: "Pennee Technologies / Yana", // reference only — never rendered
    kind: "employment",
    role: "Frontend Engineer (Product)",
    period: "Oct 2021 — Jun 2024",
    sector: "B2B credit & lending",
    headline: "Credit infrastructure for businesses that don't look bankable",
    summary:
      "Corporate credit accounts, asset financing and cash flow management software, at a B2B credit lending startup.",
    tags: ["Corporate credit", "Asset financing", "Cash flow", "B2B lending"],

    overview: [
      /* DRAFTED — restates Experience.jsx ROLES[4].note */
      "Ledger was a B2B credit lending startup: corporate credit accounts, asset financing, and cash flow management software for businesses that conventional lenders are slow to underwrite.",
      /* DRAFTED — restates the role title */
      "I was a frontend engineer on the product side for close to three years — the longest single engagement on my timeline.",
    ],

    stack: ["Nuxt.js", "TailwindCSS"],

    copy: "drafted",
  },
];

/* Smaller and older shipped work. Listed rather than written up — framing
   these as peers of the case studies above would devalue the case studies.

   Three entries from the old Portfolio component were dropped because their
   domains no longer resolve: Bookeverything NG (bookeverything.ng),
   Eki Live (app.ekilive.africa), and Yana (yana.finance). A dead portfolio
   link is worse than an omitted one. */
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

/* Explicit relatedSlugs win; otherwise fall back to same-kind siblings so
   the block always has something to show. */
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
   production, hence the window check rather than an env check) and never
   ships to the browser. A data typo should fail the build loudly instead of
   silently dropping a section. */
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
   Optional fields. Omit them entirely when there is no data — every block
   renders only when its field exists, so an absent field means an absent
   section, not an empty one.

   shortName:  "Emino Digital"          // h1 override when the name is long
   org:        "Tytron Group"           // parent org, when it differs
   status:     "current"                // olive dot on cards and timeline
   period:     "Jul 2024 — Present"
   stints:     [{ range, role, note }]  // use instead of period for split engagements
   url:        "https://…"              // NOT allowed on aliased entries
   domain:     "useveem.com"            // display form of url
   sector:     "Payments infrastructure"
   relatedSlugs: ["veem", "ledger"]     // else falls back to same-kind siblings
   ogImage:    "https://…"              // absolute; falls back to meta.img
   homeBody:   "…"                      // override body on the homepage panel

   The four worth filling in first — none of them exist on any entry today:

   highlights: [{ value: "94%", label: "Checkout completion, up from 71%" }]
   responsibilities: ["Owned the payments roadmap", "Ran weekly design review"]
   approach:   [{ title: "Instrument first", body: "We could not fix what…" }]
   outcomes:   ["Cut failed transactions by half", "Shipped to 12 merchants"]
   ─────────────────────────────────────────────────────────────────────── */
