/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-red": "#ff2625",
        "gray": "#181616",
        "light-gray": "#2f2d2d",
      }
    },
  },
  plugins: [],
}