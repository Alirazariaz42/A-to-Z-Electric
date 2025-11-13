/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        Nunito: ["Nunito"],
        Roboto: ["Roboto"],
      },
      colors: {
        customGreen: {
          light: "#03BD5C",
          para: "#0EA37F",
        },
      },
     
    },
  },
  plugins: [],
};
