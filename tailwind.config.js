/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"M PLUS 2"', 'sans-serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
      boxShadow: {
        'intro-btn-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'intro': 'linear-gradient(to left, #FFFFFF 50%, #E33F43 150%)',
        'mfa': 'linear-gradient(to right, #FFFFFF 00%, #FF8A8A 50%, #E33F43 100%)',
        'target': 'linear-gradient(to left, #FFFFFF 00%, #FF8A8A 50%, #E33F43 100%)',
        'single-so': 'linear-gradient(to bottom, #FFFFFF 0%, #E3343F 150%)',
      },
    },
  },
  plugins: [],
}
