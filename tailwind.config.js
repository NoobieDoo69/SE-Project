/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D21E1E",
        secondary: "",
      },
      fontFamily: {
        sans: ['"Roboto Slab"', ...defaultTheme.fontFamily.sans],
        title: ['"Roboto Condensed"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
