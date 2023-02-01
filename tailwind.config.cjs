/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        // '-2xl': { max: '1439px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
      },
      colors: {
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)',
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-grey': 'hsl(0, 0%, 95%)',
      },
      fontFamily: {
        'big-shoulders': ['Big Shoulders Display', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
