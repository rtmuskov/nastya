/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F2E3A0',
          DEFAULT: '#D4AF37',
          dark: '#B8941F',
        },
        custom: {
          black: '#1A1A1A',
          cream: '#F5F5F5',
          gray: '#787878',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};