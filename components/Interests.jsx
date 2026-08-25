import React from "react";
import Link from "next/link";

const ART_IMAGE =
  "https://res.cloudinary.com/emino/image/upload/v1724607548/emino/nike_art.jpg";

/* Module-scope data, matching STATS in About.jsx, VENTURES in Building.jsx and
   ROLES in Experience.jsx. `body` is a node rather than a string so the Music
   entry can carry its inline link to the playlists section below. */
const INTERESTS = [
  {
    label: "Art",
    body: (
      <>
        I have a deep appreciation for art in all its forms. From paintings and
        sculptures to photography and even fashion. Art has the power to evoke
        emotions and enrich our lives.
      </>
    ),
  },
  {
    label: "Music",
    body: (
      <>
        To put it simply, I love music. I live for it. Just like any other art
        form, good music evokes emotions and emotions make the life experience
        more beautiful. Check out some of my favourite curated Spotify{" "}
        <Link
          href="/#playlists"
          className="font-semibold text-amber-700 underline decoration-amber-700/30 underline-offset-4 transition duration-300 hover:decoration-amber-700 dark:text-cream dark:decoration-cream/30 dark:hover:decoration-cream"
        >
          playlists
        </Link>
        .
      </>
    ),
  },
  {
    label: "Sports",
    body: (
      <>
        Football in particular. I was born a Liverpool fan and I intend to die
        that way. I also love tennis, badminton. I wouldn&apos;t say I love
        basketball, I just love watching Steph play.
      </>
    ),
  },
  {
    label: "Anime",
    body: (
      <>
        I&apos;m a fan of the new generation of anime. JJK, AOT, Demon Slayer,
        Vinland Saga, etc. Expect to hear more about anime from me in the near
        future... Hopefully 🙂‍↕️
      </>
    ),
  },
  {
    label: "Gaming",
    body: (
      <>
        Gaming serves as a great way for me to relax and unwind. While I&apos;m
        not a hardcore competitive gamer, I enjoy the immersive experiences it
        offers.
      </>
    ),
  },
  {
    label: "Adventures",
    body: (
      <>
        So typically, I love staying indoors, but nature has a calming effect on
        me. I love hiking, camping, exploring new destinations and taking late
        night walks/drives.
      </>
    ),
  },
];

export default function Interests() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28">
      <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-dark-brown dark:text-cream">
        Passion &amp; Interests
      </h2>

      {/* Copy takes the wider column and the image the narrower one, with a
          fixed aspect ratio. Reversed and unconstrained, the image rendered at
          its natural height — around 800px of painting beside 180px of text,
          with items-center floating the text in the middle of it. */}
      <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
        <div className="space-y-5 text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300 lg:col-span-7">
          <p className="font-display text-xl md:text-2xl font-bold leading-snug tracking-tight text-dark-brown dark:text-cream">
            My world outside of software development.
          </p>
          <p>
            While I&apos;m deeply passionate about crafting innovative software
            solutions, my world extends far beyond the digital realm. Here are a
            few of my interests that fuel my creativity and keep me grounded.
          </p>
        </div>

        <figure className="mt-8 lg:col-span-5 lg:mt-0">
          <div className="aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-olive-100/80 dark:bg-brown-900/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ART_IMAGE}
              alt="A painting hanging in my home"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 font-cutive-mono text-[11px] text-brown-500 dark:text-brown-400">
            On the wall at home
          </figcaption>
        </figure>
      </div>

      {/* Listed rows rather than a card grid: these bodies are prose of very
          uneven length, and in a three-up grid the short ones left ragged gaps
          while the long ones set the row height for everything beside them. */}
      <ul className="mt-12 md:mt-16 list-none space-y-4">
        {INTERESTS.map((interest) => (
          <li key={interest.label} className="ml-0">
            <div className="rounded-[1.5rem] bg-paper-50 p-6 ring-1 ring-dark-brown/[0.06] transition duration-300 hover:ring-dark-brown/20 dark:bg-brown-900 dark:ring-cream/[0.06] dark:hover:ring-cream/20 md:p-7 sm:flex sm:items-baseline sm:gap-8">
              <h3 className="font-display text-lg font-black tracking-tight text-dark-brown dark:text-cream sm:w-40 sm:shrink-0">
                {interest.label}
              </h3>
              <p className="mt-2 text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300 sm:mt-0">
                {interest.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
