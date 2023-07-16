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
        'extra-tight': '1.2',
      },
      fontFamily: {
        'inter': ['Inter', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
