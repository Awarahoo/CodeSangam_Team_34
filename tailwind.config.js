/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        forestgreen: "#65af4b",
        mediumorchid: "#cb6be6",
        black: "#000",
        lightgreen: "#9ee68c",
        gainsboro: "rgba(217, 217, 217, 0)",
        dimgray: "#504f4f",
        whitesmoke: "#f2f2f2",
        gray: "rgba(5, 5, 5, 0.48)",
      },
      spacing: {},
      fontFamily: {
        rubik: "Rubik",
        roboto: "Roboto",
        inter: "Inter",
        "ruslan-display": "'Ruslan Display'",
        sarpanch: "Sarpanch",
      },
      borderRadius: {
        "24xl-5": "43.5px",
        "32xl": "51px",
        "21xl-5": "40.5px",
      },
    },
    fontSize: {
      "16xl": "35px",
      "31xl": "50px",
      xl: "20px",
      "6xl": "25px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
