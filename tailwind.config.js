/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
    // data/ holds no class strings today; globbed so a stray one is never purged
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "profile-image": "url('~/assets/profile-pic.jpg')",
        footer:
          "linear-gradient(to right, #010101, #00000080), url('~/assets/footer.jpg')",
        "footer-md":
          "linear-gradient(to right, #010101, #00000080), url('~/assets/footer-md.jpg')",
        "link-dark":
          "linear-gradient(90deg, #B88827 0%, #B3976E 65%, #B88827 100%)",
      },

      colors: {
        /* ── Page surface ─────────────────────────────────────────
           Light mode sits on paper (cream); dark mode on brown-950.
           `paper` is the light-mode counterpart of the `brown` scale. */
        paper: {
          DEFAULT: "#efece4",
          50: "#f7f5f0", // raised card / input sitting on the page
          100: "#efece4", // the page itself
          200: "#e6e2d7", // subtle fill, hover state
          300: "#d8d3c5", // hairline / border
        },

        /* ── Ink & dark surfaces ─────────────────────────────── */
        brown: {
          50: "#f8f7f7",
          100: "#f0eeee",
          200: "#dddada",
          300: "#c0b9ba",
          400: "#9d9394",
          500: "#817677",
          600: "#6a5f5f",
          700: "#564e4e",
          800: "#494343",
          900: "#403a3a",
          950: "#181616", // dark-mode page
        },
        "dark-brown": "#2b282c",
        "brownish-purple": "#403d41",

        /* ── Olive: the accent panel from the concept ────────── */
        olive: {
          100: "#dfe4da",
          200: "#c4ccbd",
          300: "#a9b3a1",
          400: "#8e9a84", // hero portrait panel
          500: "#767d75",
          600: "#5e675d",
          700: "#4c574f",
          800: "#434d46",
          900: "#333b36",
        },

        cream: "#ecd2b7", // warm highlight, mostly dark-mode text
      },

      fontFamily: {
        display: ["Saira", "sans-serif"],
        header: ["Titillium Web", "sans-serif"],
        "cutive-mono": ["Cutive Mono", "monospace"],
      },

      keyframes: {
        // used by the hero's rotating industry/discipline labels
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(0.5em)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        dropdown: {
          "0%": { opacity: "0", maxHeight: "0px", padding: "0" },
          "100%": { opacity: "1", maxHeight: "max-content" },
        },
        moveUp: {
          "0%": { top: "100vh" },
          "100%": { top: "0" },
        },
        loadingLine: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        fadeUp: "fadeUp .45s ease-out both",
        dropdown: "dropdown .4s ease-in-out 1",
        wiggle: "wiggle 1s ease-in-out infinite",
        moveUp: "moveUp .5s ease-in-out 1",
        loadingLine: "loadingLine .5s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
