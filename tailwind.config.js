/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "t02-blue1": "#003258",
        "t02-blue2": "#002743",
        "t02-gray1": "#8091A7",
      },
    },
    fontSize: {
      "t02": "13px",
      "page-title": "22px",
    },
  },
  plugins: [],
};
