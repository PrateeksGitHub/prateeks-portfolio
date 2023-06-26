/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
