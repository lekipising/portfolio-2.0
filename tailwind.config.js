/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    extend: {
      colors: {
        white: "##E5E9F0",
        purple: { light: "#4D5BCE", heavy: "#5565E8" },
        gray: "#607B96",
        yellow: "#FEA55F",
        dark: "#1C2B3A",
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
