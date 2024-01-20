/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        gray: {
          1: "#110D17",
          2: "#98949E",
          3: "#D1D0D3",
          4: "#6D6D6D",
        },
        iris: {
          100: "#5D5FEF",
        },
        error: {
          30: "#8F0A13",
          98: "#FEF5F6",
          100: "#F02D3A",
        },
        primary: {
          96: "#EBFFFE",
        },
        neutral: {
          "abu-abu": "#FAFAFA",
        },
        secondary: {
          100: "#F17300",
        },
      },
    },
  },
  plugins: [],
};
