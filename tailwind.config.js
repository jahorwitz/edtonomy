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
        120: "120%",
      },
      fontFamily: {
        inter: ["Inter", "Arial", "sans-serif"],
      },
      height: {
        882: "882px",
        24: "24px",
        54: "54px",
        105: "105px",
        70: "70px",

      },
      width: {
        420: "420px",
        372: "372px",
        24: "24px",
        70: "70px",
      },
      borderRadius: {
        12: "12px",
      },
      zIndex: {
        1: "1",
      },
      inset: {
        243: "243px",
        510: "510px",
        440: "440px",
      },
      backgroundImage: {
        exitbutton: "url('src/image/Exit-button.svg')",
      },
      gap: {
        8: "8px",
      },
      padding: {
        '8px': '8px',
        '17px':'17px',
        '18px':'18px'
      }
    },
  },
  plugins: [],
};
