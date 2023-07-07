/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "edt-red": "#FF533D",
        "edt-dark-red": "#FF260A",
        "edt-black": "#2E2E2E",
      },
      lineHeight: {
        "extra-tight": "1.2",
      },
      fontFamily: {
        inter: ["Inter", "Arial", "sans-serif"],
      },

      width: {
        352: "352px",
        672: "672px",
        906: "906px",
        363: "363px",
        108: "108px"
      },
      height: {
        2060: "2060px",
        1:"1px",
        105: "105px",
        48:"48px",
      },
      margin: {
        149: "149px",
      },
      lineHeight: {
        100: "100%",
        130: "130%",
        120: "120%"
      },
    },
  },
  plugins: [],
};
