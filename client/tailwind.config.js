/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["roboto", "sans-serif"]
      },
      screens: {
        "xs": "400px",
      }
    },
  },
  plugins: [],
}
