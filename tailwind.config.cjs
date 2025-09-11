/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gradientOrangeStart: "#FFA500",
        gradientOrangeEnd: "#FF7F50",
      },
    },
  },
  plugins: [],
};
