/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        white: "#E5E9F0",
        purple: { light: "#4D5BCE", heavy: "#5565E8" },
        gray: { 100: "#607B96", 200: "#1E2D3D" },
        yellow: "#FEA55F",
        dark: { 100: "#1C2B3A", 200: "#011627", 300: "#011221" },
      },
    },
  },
  variants: {},
  plugins: [],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
};
