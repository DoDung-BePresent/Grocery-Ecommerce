/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8F8FB",
        "secondary-1": "#F6F6F6",
        "secondary-2": "#eeeeee",
        "dark-1": "#171C28",
        "dark-2": "#292E39",
        "dark-3": "#B9BABE",
        "dark-s-1": "#9E9DA8",
        "dark-s-2": "#D2D1D6",
        "dark-l-1": "#EDEDF6",
        "dark-l-2": "#F8F8FB",
      },
    },
  },
  plugins: [],
};
