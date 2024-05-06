/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Island: "font-island",
        Light: "Montserrat-Light",
        Regular: "Montserrat-Regular",
        Medium: "Montserrat-Medium",
        Semibold: "Montserrat-SemiBold",
        Bold: "Montserrat-Bold",
        Black: "Montserrat-Black",
      },
    },
  },
  plugins: [],
};
