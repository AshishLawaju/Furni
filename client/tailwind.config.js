/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B5D50",
        "primary-dark": "#2F2F2F",
        secondary: "#F9BF29",
        back: "#EFF2F1",
      },
    },
  },
  plugins: [],
};
