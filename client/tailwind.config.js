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
        "red": "0px 0px 10px 1px red",
        "gray": "0px 0px 10px 1px gray",
        "fuchsia": "0px 0px 10px 1px fuchsia",
        "cyan": "0px 0px 10px 1px cyan"

      },
    },
  },
  plugins: [],
}
