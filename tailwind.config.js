/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#4A060D',
        secondary: '#c86358',
        'secondary-light': '#f5eae6',
        'text-main': '#8d6267'
      },
      fontSize: {
        hero: '5.267em',
      },
      spacing: {
        '190px': '190px',
        '100px': '100px'
      }
    },
  },
  plugins: [],
};