import coreWebVitals from "eslint-config-next/core-web-vitals";

/* Replaces .eslintrc.json, which had been failing to load since it was
   written: it extended "next/babel", a Babel preset rather than an ESLint
   config, so every `next lint` run ended in
   'Failed to load config "next/babel" to extend from' and nothing was
   ever linted. `next lint` itself is gone in Next 16 — `npm run lint`
   now calls eslint directly. */
const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "resume/**",
    ],
  },
  ...coreWebVitals,
];

export default config;
