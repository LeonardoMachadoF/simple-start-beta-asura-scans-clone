/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#121111',
          700: '#262626',
          200: '#9ba7bf'
        },
        hoverText: {
          200: '#867bc3'
        }
      },
      width: {
        layout: '1200px'
      },
      fontFamily: {
        sans: 'arial'
      }
    },
  },
  plugins: [],
}
