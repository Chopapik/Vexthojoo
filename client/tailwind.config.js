/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["roboto", "sans-serif"],
        "poppins": ["poppins", "sans-serif"]
      },
      screens: {
        "xs": "400px",
      },
      boxShadow: {
        "straight": "0px 0px 10px 0.1px"
      },
    },
  },
  plugins: [],
}
