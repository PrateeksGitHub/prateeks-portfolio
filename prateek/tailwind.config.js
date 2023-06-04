/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#161A2E",
        primary: "#E8E8E8",
        secondary: "#8265F6",
        accent: "#81DEDE",
      },
      fontFamily: {
        sans: ["Nunito Sans", "Arial", "sans-serif"],
        typing: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
