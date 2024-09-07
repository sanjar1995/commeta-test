/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        backg: "var(--c-bg)",
        "b-main": "var(--b-main)",
        "t-third": "var(--t-third)",
      },
    },
  },
  plugins: [],
};
