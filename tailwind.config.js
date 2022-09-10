/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  // mode: "jit",
  content: ["./src/**/*.tsx"],
  // purge: [], // use this during development state
  // purge: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx}",
  // ], // use this during production state
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      ...colors
    },
    container: {
    },
  },
  plugins: [],
};
