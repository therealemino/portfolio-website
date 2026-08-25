import React from "react";

/* Outbound-link arrow. Nudges on hover via the parent link's `group` class.

   Geometry is a prop rather than fixed because two call sites already ship
   different sizes (Building's venture names are larger than Experience's
   company names). Unifying them here would silently change both sections, so
   BASE holds only the shared behaviour and each caller passes its own
   size/opacity/margin. */
const BASE =
  "shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100";

export default function ArrowOut({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${BASE} ${className}`}
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}
