/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          xl: "1440px",
        },
        margin: "0 auto",
      },
    },
  },
  plugins: [],
};
