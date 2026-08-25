import React from "react";
import Link from "next/link";

const EMAIL = "ejeiokekeemmanuel@gmail.com";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ejei-okeke-emmanuel/" },
  { label: "GitHub", href: "https://github.com/therealemino" },
  { label: "Twitter", href: "https://twitter.com/therealemino" },
  { label: "Instagram", href: "https://www.instagram.com/therealemino/" },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=2349032234467" },
];

export default function Footer(props) {
  return (
    <footer
      ref={props.contactRefProp}
      id="contact"
      className="relative bg-paper dark:bg-brown-950 text-dark-brown dark:text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 md:pt-28 pb-10">
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-dark-brown dark:text-cream">
          Let&apos;s talk
        </h2>

        <p className="mt-8 max-w-md text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300">
          Building something in payments, identity or commerce — or want a
          second pair of eyes on it? I read everything that lands.
        </p>

        {/* The email is the whole call to action; no form to fill in first. */}
        <a
          href={`mailto:${EMAIL}`}
          className="group mt-10 inline-flex flex-wrap items-baseline gap-x-3 break-all font-display text-xl sm:text-3xl md:text-4xl font-black tracking-tight text-dark-brown transition-colors duration-300 hover:text-amber-700 dark:text-cream dark:hover:text-amber-500"
        >
          {EMAIL}
          <span
            aria-hidden="true"
            className="text-lg transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

        <p className="mt-4 font-cutive-mono text-[11px] tracking-wider text-brown-500 dark:text-brown-400">
          or +234 903 223 4467
        </p>

        <ul className="mt-12 flex list-none flex-wrap gap-x-6 gap-y-2">
          {SOCIALS.map((social) => (
            <li key={social.label} className="ml-0">
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-brown-600 transition-colors duration-300 hover:text-amber-700 dark:text-brown-300 dark:hover:text-amber-500"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Oversized wordmark closing the page, echoing the hero */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-4 border-t border-dark-brown/15 dark:border-cream/15 pt-6 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-cutive-mono text-[11px] tracking-widest text-brown-500 dark:text-brown-400">
            © 2026 Ejei-Okeke Emmanuel
          </p>
          <div className="flex items-center gap-5 font-cutive-mono text-[11px] tracking-widest text-brown-500 dark:text-brown-400">
            <Link href="/library">
              <a className="transition-colors duration-300 hover:text-amber-700 dark:hover:text-amber-500">
                Library
              </a>
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-amber-700 dark:hover:text-amber-500"
            >
              Resume
            </a>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="select-none pb-6 text-center font-display font-black leading-[0.8] tracking-tighter text-dark-brown/10 dark:text-cream/10"
          style={{ fontSize: "clamp(4rem, 22vw, 16rem)" }}
        >
          Emino
        </p>
      </div>
    </footer>
  );
}
