import theme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Titillium Web", ...theme.fontFamily.sans],
        serif: ["Lora", ...theme.fontFamily.serif],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, translate: "0 -2rem" },
          "100%": { opacity: 1, translate: "0 0" },
        },
        "fade-out": {
          "0%": { opacity: 1, translate: "0 0" },
          "100%": { opacity: 0, translate: "0 -2rem" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out forwards",
        "fade-out": "fade-out 0.3s ease-out forwards",
      },
      colors: {
        primary: {
          50: "#eef8ff",
          100: "#dcf0ff",
          200: "#b2e3ff",
          300: "#6dcdff",
          400: "#20b3ff",
          500: "#009aff",
          600: "#0079df",
          700: "#0060b4",
          800: "#005295",
          900: "#00437a",
          950: "#00305d",
        },
      },
      boxShadow: {
        upsert: "0 -10px 15px -3px #e7e5e4",
      },
    },
  },
  plugins: [typography],
};
