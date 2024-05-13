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
        Dark: "#333333",
      },
      screens: {
        sm: "425px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
