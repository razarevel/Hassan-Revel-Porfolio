/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Island: "font-island",
        BebasNeue: "font-BebasNeue",
        Light: "Montserrat-Light",
        Regular: "Montserrat-Regular",
        Medium: "Montserrat-Medium",
        SemiBold: "Montserrat-SemiBold",
        Bold: "Montserrat-Bold",
        Black: "Montserrat-Black",
      },
      colors: {
        darkBlue: "#121275",
        heavyBlue: "#111275",
      },
    },
  },
  plugins: [],
};
