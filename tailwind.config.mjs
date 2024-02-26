import theme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
			fontFamily: {
				sans: ["Open Sans", ...theme.fontFamily.sans],
				serif: ["Lora", ...theme.fontFamily.serif]
			}
		},
  },
  plugins: [typography],
};
