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
      boxShadow: {
        upsert: "0 -10px 15px -3px #e7e5e4",
      },
    },
  },
  plugins: [typography],
};
