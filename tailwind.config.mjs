/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "4rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "8rem",
      },
      screens: {
        DEFAULT: "640px",
        sm: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        "raleway-italic": ["Raleway-Italic", "sans-serif"],
        "open-sans": ["OpenSans", "sans-serif"],
        "open-sans-italic": ["OpenSans-Italic", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        accent: "#2CA02C",
        gray: "#13151a",
        elevated: "#fbf7f5",
        negative: "#E62323",
        positive: "#00D2BE",
        primary: "#DC3E40",
        secondary: "#EE46E0",
      },
    },
  },
  plugins: [],
};
