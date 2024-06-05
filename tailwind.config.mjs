/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3066BE",
        primaryAlt: "#B4C5E4",
        white: "#FBFFF1",
        accent: "#FC440F",
        gray: "#13151a",
      },
    },
  },
  plugins: [],
};
