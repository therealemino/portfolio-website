/* Site-wide defaults. Per-page title, description and image are passed to
   components/Seo.jsx instead — these are the fallbacks and the shared values.

   The origin is env-driven because a custom domain is coming: canonical URLs,
   the sitemap and every absolute Open Graph URL derive from `url`, so moving
   domains is a Vercel env var rather than an edit across six files. The
   trailing slash is stripped here so nothing downstream has to think about
   whether to add one. */

const FALLBACK_ORIGIN = "https://ejeiokekeemmanuel.vercel.app";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_ORIGIN
).replace(/\/+$/, "");

export const meta = {
  title:
    "Ejei-Okeke Emmanuel — Product & Engineering Lead, Fintech and Payments",
  desc: "Product lead and full-stack engineer building payments, identity and commerce infrastructure. Case studies, writing, and the work behind them.",
  url: SITE_URL,
  /* Generated from og/og.html — see the header comment in that file for the
     regeneration command. Served from this origin rather than Cloudinary so
     the card is versioned with the site that it advertises. */
  img: `${SITE_URL}/og.png`,
  twitterUsername: "@therealemino",
};

/* Profiles, in one place. Used by the Person structured data and available to
   anything else that needs them — components/Footer.jsx keeps its own list
   because it also carries WhatsApp, which is not an identity profile. */
export const PROFILES = [
  "https://www.linkedin.com/in/ejei-okeke-emmanuel/",
  "https://github.com/therealemino",
  "https://twitter.com/therealemino",
  "https://www.instagram.com/therealemino/",
];
