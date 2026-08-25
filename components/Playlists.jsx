import React, { useCallback, useEffect, useRef, useState } from "react";

const PROFILE_URL = "https://open.spotify.com/user/zw88cjekc0mhq36xvt929pr1v";

/* Arrow buttons for the carousel. Hidden below md because touch already
   swipes, and a disabled-looking control the finger never needs is noise. */
function Arrow({ dir, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous playlists" : "Next playlists"}
      className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark-brown/30 text-dark-brown transition-colors duration-300 hover:border-amber-700 hover:text-amber-700 disabled:pointer-events-none disabled:opacity-25 dark:border-cream/30 dark:text-cream dark:hover:border-amber-500 dark:hover:text-amber-500 md:flex"
    >
      <span aria-hidden="true" className="text-lg leading-none">
        {dir === "prev" ? "←" : "→"}
      </span>
    </button>
  );
}

export default function Playlists({ playlists = [] }) {
  const trackRef = useRef(null);
  /* Deterministic on both server and client — the effect below corrects them
     after mount, so the markup React hydrates against always matches. */
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 1);
    // 1px of slack: sub-pixel widths mean scrollLeft rarely lands exactly on max
    setAtEnd(track.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    sync();
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  /* Step by one card rather than a fixed pixel count, so the same handler works
     across the three card widths without hard-coding any of them. */
  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const card = track.firstElementChild;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: (card.offsetWidth + gap) * direction,
      behavior: "smooth",
    });
  };

  // Spotify unreachable and the snapshot somehow empty — omit the section
  if (!playlists.length) return null;

  return (
    <section
      id="playlists"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28"
    >
      <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter text-dark-brown dark:text-cream">
        Tune In
      </h2>

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-sm md:text-base leading-relaxed text-brown-700 dark:text-gray-300">
          The sounds that fuel the work. Curated, played to death, and updated
          more often than the rest of this site.
        </p>

        <div className="flex shrink-0 items-center gap-3">
          <Arrow
            dir="prev"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
          />
          <Arrow dir="next" onClick={() => scrollByCard(1)} disabled={atEnd} />
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-dark-brown/30 px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:border-amber-700 hover:text-amber-700 dark:border-cream/30 dark:hover:border-amber-500 dark:hover:text-amber-500"
          >
            Open Spotify →
          </a>
        </div>
      </div>

      {/* Native scroll-snap: no library, and with JS off it degrades to an
          ordinary horizontal scroller rather than breaking. Card widths leave
          the next one peeking, which is the whole affordance on touch. */}
      <ul
        ref={trackRef}
        className="no-scrollbar mt-14 flex list-none snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {playlists.map((playlist) => (
          <li
            key={playlist.id}
            className="ml-0 w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
          >
            <a
              href={playlist.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-paper-50 ring-1 ring-dark-brown/[0.06] transition duration-300 hover:ring-dark-brown/20 dark:bg-brown-900 dark:ring-cream/[0.06] dark:hover:ring-cream/20"
            >
              <div className="relative aspect-square overflow-hidden bg-olive-100 dark:bg-brown-950">
                {playlist.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={playlist.image}
                    alt={`${playlist.name} playlist cover`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-black leading-snug tracking-tight text-dark-brown transition-colors duration-300 group-hover:text-amber-700 dark:text-cream dark:group-hover:text-amber-500">
                  {playlist.name}
                </h3>

                {/* Populated on only a few playlists, so never assume one */}
                {playlist.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-brown-700 dark:text-gray-300">
                    {playlist.description}
                  </p>
                ) : null}

                <p className="mt-auto pt-6 font-cutive-mono text-[11px] text-brown-500 dark:text-brown-400">
                  {playlist.tracks === null
                    ? "Spotify"
                    : `${playlist.tracks} tracks`}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
