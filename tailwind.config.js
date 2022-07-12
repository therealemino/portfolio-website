/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
         'mobile-jumbotron': "linear-gradient(to right, #01010190, #01010190), url('~/assets/mobile-jumbotron.jpg')",
         'profile-image': "url('~/assets/profile-pic.jpg')",
         'desktop-jumbotron': "linear-gradient(to right, #010101, #00000010), url('~/assets/desktop-jumbotron.jpg')",
         'footer': "linear-gradient(to right, #010101, #00000010), url('~/assets/footer.jpg')",
         'footer-md': "linear-gradient(to right, #010101, #00000010), url('~/assets/footer-md.jpg')",
         'svg-bg': "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%235c4c4e' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23857667'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E');"
         // 'footer-texture': "url('/img/footer-texture.png')",
        })
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
      'mallana': ['Mallanna', 'sans-serif'],
      'nunito': ['Nunito', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
     }, 
     colors: {
      'dark-brown': '#2b282c',
      'brownish-purple':'#403d41',
      'light-brownish-purple':'#5c4c4e',
      'cream': '#ecd2b7',
      'dark-cream': '#46322b',
      'red':'#c23e3e',
      'dark-red':'#8e1313',
      'whitish-blue':'#eef3ff',
      'sky-blue': '#9aaacb',
      'light-blue':'#6e8ab3',
      'dark-blue':'#0c1b3a',
      'medium-blue':'#3c4e73',
      'whitish-green':'#ccd9cf',
      'light-green':'#767d75',
      'medium-green':'#4c574f',
      'dark-green':'#434d46',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      rose: colors.rose,
      amber: colors.amber
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      dropdown: {
        '0%': { opacity: '0', maxHeight: '0px', padding: '0' },
        '100%': { opacity: '1', maxHeight: 'max-content' },
      },
      moveUp: {
        '0%': {top: '100vh'},
        '100%': {top: '0'},
      }
    },
    animation: {
      dropdown: 'dropdown .4s ease-in-out 1',
      wiggle: 'wiggle 1s ease-in-out infinite',
      moveUp: 'moveUp .5s ease-in-out 1',
    },    
  },
  plugins: [],
}
