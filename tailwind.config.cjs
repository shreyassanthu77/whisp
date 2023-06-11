/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7856ff",
          dark: "#6c4de6",
          darker: "#4a2d8b",
        },
      },
    },
  },
  plugins: [],
};
