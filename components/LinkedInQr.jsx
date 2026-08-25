import React from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/ejei-okeke-emmanuel/";

/* Encoded QR for LINKEDIN_URL: version 6 (41x41 modules), error-correction
   level H, which can recover ~30% of the symbol. The centre badge hides a
   10x10 block -- 100 of 1681 modules, ~6% -- and clears the timing patterns
   and the lone alignment pattern at (34,34), so it still scans.

   To re-encode after changing the URL:
     npx qrcode --error-correction-level H --type svg "<url>"
   and paste the second <path>'s d attribute into MODULES. */
const MODULES =
  "M0 0.5h7m3 0h1m1 0h1m1 0h1m1 0h5m1 0h2m1 0h2m3 0h1m1 0h1m1 0h7M0 1.5h1m5 0h1m4 0h4m4 0h1" +
  "m1 0h2m1 0h3m1 0h2m1 0h1m2 0h1m5 0h1M0 2.5h1m1 0h3m1 0h1m1 0h1m3 0h1m1 0h3m1 0h1m1 0h1m1" +
  " 0h2m1 0h8m1 0h1m1 0h3m1 0h1M0 3.5h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h8m1 0h1m1 0h1m1 0h1m1 0" +
  "h1m3 0h1m1 0h1m1 0h3m1 0h1M0 4.5h1m1 0h3m1 0h1m3 0h1m1 0h1m3 0h3m1 0h1m1 0h1m5 0h4m2 0h1" +
  "m1 0h3m1 0h1M0 5.5h1m5 0h1m6 0h3m1 0h2m5 0h2m6 0h1m1 0h1m5 0h1M0 6.5h7m1 0h1m1 0h1m1 0h1" +
  "m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M9 7.5h2m2 0h1m3 0h1m1" +
  " 0h5m3 0h2M3 8.5h2m1 0h2m1 0h8m1 0h1m2 0h1m1 0h2m3 0h2m2 0h1m4 0h2M2 9.5h1m1 0h1m4 0h2m1" +
  " 0h2m3 0h2m6 0h3m1 0h1m1 0h1m3 0h2M0 10.5h1m2 0h2m1 0h1m1 0h1m7 0h2m1 0h1m7 0h1m1 0h1m4 " +
  "0h1m3 0h1M0 11.5h1m1 0h1m1 0h2m2 0h2m1 0h3m2 0h1m2 0h4m1 0h2m3 0h1m1 0h2m4 0h1m1 0h2M2 1" +
  "2.5h2m1 0h2m1 0h1m1 0h1m1 0h2m5 0h2m1 0h1m1 0h2m2 0h1m1 0h1m4 0h1m4 0h1M4 13.5h1m2 0h4m1" +
  " 0h1m5 0h1m1 0h5m1 0h1m1 0h5m2 0h3m2 0h1M0 14.5h3m2 0h3m2 0h1m2 0h1m1 0h3m1 0h2m7 0h1m2 " +
  "0h6m1 0h1m1 0h1M2 15.5h4m2 0h2m2 0h2m4 0h1m1 0h6m1 0h1m4 0h2m3 0h2M0 16.5h2m1 0h1m1 0h3m" +
  "1 0h2m4 0h1m1 0h3m2 0h1m1 0h1m7 0h2m5 0h2M0 17.5h1m1 0h1m4 0h1m2 0h1m3 0h4m1 0h2m6 0h1m1" +
  " 0h5m2 0h2M0 18.5h4m1 0h7m2 0h1m1 0h8m2 0h2m1 0h3m3 0h2m1 0h1m1 0h1M0 19.5h1m1 0h1m4 0h2" +
  "m1 0h1m2 0h5m2 0h1m1 0h4m2 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1M0 20.5h1m1 0h2m2 0h2m1 0h1m" +
  "8 0h1m6 0h1m2 0h1m1 0h1m2 0h2m1 0h3M0 21.5h4m1 0h1m2 0h2m3 0h3m7 0h1m3 0h2m2 0h1m4 0h3M1" +
  " 22.5h6m2 0h3m2 0h1m2 0h9m1 0h1m5 0h2m2 0h2M3 23.5h2m4 0h1m1 0h3m2 0h1m2 0h2m5 0h2m1 0h1" +
  "m1 0h1m1 0h1m3 0h1m2 0h1M0 24.5h3m1 0h1m1 0h2m1 0h1m1 0h1m1 0h2m2 0h1m2 0h2m1 0h2m3 0h1m" +
  "2 0h2m1 0h2m1 0h1m1 0h2M1 25.5h5m5 0h2m2 0h1m1 0h2m1 0h1m1 0h2m2 0h4m2 0h1m1 0h3m1 0h3M1" +
  " 26.5h7m8 0h2m1 0h2m5 0h4m1 0h7m2 0h1M0 27.5h2m6 0h2m2 0h1m5 0h1m1 0h2m4 0h2m3 0h1m1 0h3" +
  "m1 0h2M2 28.5h3m1 0h4m2 0h2m1 0h1m2 0h1m5 0h3m1 0h1m2 0h3m1 0h1m1 0h1m2 0h1M0 29.5h2m1 0" +
  "h2m2 0h1m1 0h1m1 0h1m2 0h4m3 0h1m6 0h3m1 0h3m1 0h2M0 30.5h2m1 0h5m5 0h1m1 0h2m1 0h3m1 0h" +
  "4m1 0h1m1 0h1m2 0h2m1 0h2m1 0h1m1 0h1M0 31.5h3m5 0h1m3 0h3m1 0h1m5 0h1m1 0h1m9 0h3m1 0h2" +
  "M0 32.5h5m1 0h2m1 0h1m3 0h1m1 0h2m1 0h2m1 0h2m3 0h4m2 0h7m1 0h1M8 33.5h1m1 0h4m1 0h2m2 0" +
  "h2m2 0h1m3 0h1m1 0h2m1 0h1m3 0h1M0 34.5h7m1 0h3m3 0h1m2 0h1m5 0h6m2 0h2m1 0h1m1 0h3M0 35" +
  ".5h1m5 0h1m2 0h1m4 0h3m1 0h2m4 0h3m3 0h3m3 0h1m2 0h2M0 36.5h1m1 0h3m1 0h1m1 0h3m1 0h2m2 " +
  "0h2m2 0h1m1 0h2m4 0h2m1 0h7m1 0h1M0 37.5h1m1 0h3m1 0h1m1 0h1m2 0h1m1 0h4m1 0h1m1 0h1m2 0" +
  "h6m1 0h1m1 0h1m2 0h1m3 0h2M0 38.5h1m1 0h3m1 0h1m2 0h1m2 0h1m1 0h1m2 0h1m2 0h1m1 0h1m3 0h" +
  "2m1 0h1m3 0h1m1 0h3m1 0h2M0 39.5h1m5 0h1m3 0h2m1 0h1m1 0h1m1 0h1m2 0h5m3 0h1m4 0h1m2 0h1" +
  "m1 0h1m1 0h1M0 40.5h7m2 0h2m2 0h1m4 0h2m1 0h2m2 0h2m3 0h5m1 0h1";

/* LinkedIn mark (simple-icons). The letterforms are counters in the same
   compound path, so they knock through to whatever sits behind -- hence the
   paper plate drawn underneath. */
const LINKEDIN_MARK =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

/* The chip is a printed object: it keeps its paper ground and dark modules in
   both themes, because a QR needs that contrast to be readable. */
export default function LinkedInQr({ className = "", style }) {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Ejei-Okeke Emmanuel on LinkedIn — scan or click"
      className={className}
      style={style}
    >
      {/* viewBox is inset by 3 modules to give the code its quiet zone */}
      <svg
        viewBox="-3 -3 47 47"
        shapeRendering="crispEdges"
        className="h-full w-full"
        role="img"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="-3" y="-3" width="47" height="47" fill="#EFECE4" />
        <path stroke="#181616" d={MODULES} />
        <rect x="15.5" y="15.5" width="10" height="10" rx="2.2" fill="#EFECE4" />
        <svg x="16.75" y="16.75" width="7.5" height="7.5" viewBox="0 0 24 24">
          <path fill="#0A66C2" d={LINKEDIN_MARK} />
        </svg>
      </svg>
    </a>
  );
}
