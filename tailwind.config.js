/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cornflower-blue": {
          50: "#eef4ff",
          100: "#e0eaff",
          200: "#c7d8fe",
          300: "#a6befb",
          400: "#7d96f7",
          500: "#6477f0",
          600: "#4750e4",
          700: "#393ec9",
          800: "#3137a2",
          900: "#2e3481",
          950: "#1b1d4b",
        },
      },
    },
  },
  plugins: [],
};
