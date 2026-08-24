import React from "react";

/* Faint code motif for the cream gutters either side of the hero card.
   Every position is a hand-placed constant — nothing random — so the server
   and the client render identical markup.

   Coordinates are percentages of the gutter column, which is sized to
   calc(50% - 19rem): 19rem is half the hero card's 38rem max width, so each
   column ends exactly where the card begins. */

const ICONS = {
  terminal: "M4 17l6-5-6-5M13 19h7",
  branch: "M6 4v10M6 20a3 3 0 100-6 3 3 0 000 6zM18 8a3 3 0 100-6 3 3 0 000 6zM18 8a9 9 0 01-9 9",
  cube: "M12 2l9 5v10l-9 5-9-5V7zM12 12l9-5M12 12v10M12 12L3 7",
  stack: "M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
};

/* x/y are % of the column, size is rem, rot is degrees, o is opacity */
const LEFT = [
  { t: "</>", x: 34, y: 5, size: 2.1, rot: -8, o: 0.1 },
  { t: "{", x: 6, y: 11, size: 6.5, rot: 0, o: 0.06 },
  { t: "const", x: 44, y: 15, size: 1, rot: 6, o: 0.11 },
  { icon: "terminal", x: 14, y: 22, size: 2.6, rot: -5, o: 0.1 },
  { t: "=>", x: 52, y: 27, size: 1.9, rot: 0, o: 0.09 },
  { t: "0x1f", x: 8, y: 34, size: 1.1, rot: -4, o: 0.1 },
  { t: "[ ]", x: 38, y: 40, size: 2.4, rot: 9, o: 0.08 },
  { icon: "branch", x: 12, y: 47, size: 2.8, rot: 4, o: 0.09 },
  { t: "async", x: 42, y: 54, size: 1, rot: -6, o: 0.1 },
  { t: "&&", x: 10, y: 60, size: 2.2, rot: 0, o: 0.08 },
  { t: "01001", x: 34, y: 67, size: 0.95, rot: 5, o: 0.1 },
  { icon: "cube", x: 8, y: 74, size: 3, rot: -7, o: 0.08 },
  { t: "//", x: 46, y: 80, size: 2.6, rot: 0, o: 0.07 },
  { t: "return", x: 14, y: 87, size: 1, rot: 3, o: 0.1 },
  { t: "}", x: 44, y: 92, size: 5.5, rot: 0, o: 0.06 },
];

const RIGHT = [
  { t: "( )", x: 22, y: 7, size: 2.3, rot: 7, o: 0.09 },
  { t: "await", x: 52, y: 12, size: 1, rot: -5, o: 0.1 },
  { icon: "stack", x: 14, y: 19, size: 2.9, rot: 5, o: 0.09 },
  { t: "::", x: 58, y: 25, size: 2.6, rot: 0, o: 0.08 },
  { t: "type", x: 20, y: 31, size: 1.05, rot: 4, o: 0.1 },
  { t: "<div>", x: 46, y: 37, size: 1.2, rot: -7, o: 0.09 },
  { t: "#", x: 16, y: 44, size: 4.2, rot: 0, o: 0.07 },
  { icon: "terminal", x: 54, y: 50, size: 2.5, rot: 6, o: 0.09 },
  { t: "!==", x: 20, y: 57, size: 2, rot: 0, o: 0.08 },
  { t: "0b1101", x: 46, y: 63, size: 0.95, rot: -4, o: 0.1 },
  { icon: "cube", x: 18, y: 70, size: 2.7, rot: 8, o: 0.08 },
  { t: "$_", x: 52, y: 76, size: 2.2, rot: 0, o: 0.09 },
  { t: "commit", x: 22, y: 83, size: 1, rot: -3, o: 0.1 },
  { t: "~/", x: 50, y: 89, size: 2.4, rot: 5, o: 0.08 },
  { t: "*", x: 24, y: 95, size: 3.2, rot: 0, o: 0.07 },
];

function Mark({ item }) {
  const style = {
    top: `${item.y}%`,
    left: `${item.x}%`,
    fontSize: `${item.size}rem`,
    opacity: item.o,
    transform: `rotate(${item.rot}deg)`,
  };

  if (item.icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute"
        style={{ ...style, width: `${item.size}rem`, height: `${item.size}rem` }}
      >
        <path d={ICONS[item.icon]} />
      </svg>
    );
  }

  return (
    <span className="absolute whitespace-nowrap font-cutive-mono" style={style}>
      {item.t}
    </span>
  );
}

export default function CodeMotif() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden select-none text-dark-brown dark:text-cream lg:block"
    >
      <div className="absolute inset-y-0 left-0 w-[calc(50%-19rem)]">
        {LEFT.map((item, i) => (
          <Mark key={`l${i}`} item={item} />
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 w-[calc(50%-19rem)]">
        {RIGHT.map((item, i) => (
          <Mark key={`r${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}
