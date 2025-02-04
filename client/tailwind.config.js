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
        "poppins": ["poppins", "sans-serif"],
        "times": ['Times New Roman', 'Times', 'serif'],

      },
      screens: {
        "xs": "400px",
      },
      colors: {
        customCyan: {
          light: "#54f9ec",
          default: "#00d4c3",
          dark: "#025a53",
        },
      },
      boxShadow: {
        "red": "0px 0px 10px 1px red",
        "gray": "0px 0px 10px 1px gray",
        "fuchsia": "0px 0px 10px 1px fuchsia",
        "cyan": "0px 0px 10px 1px cyan",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.customBorderNeutral': {
          'border-bottom': '2px solid #1a1a1a',
          'border-left': '2px solid #1a1a1a',
          // 'border-right': '1px solid #401040',
          'border-top': '1px solid #262626',
        },
        // '.customBorderNeutralLight'
      });
    },
  ],
}