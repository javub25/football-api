/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '610px'},
      'tablets': {'min': '610px', 'max': '1000px'},
    },
  },
  plugins: [],
}

