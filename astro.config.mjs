import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://leo-club-weilamrhein.de/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: "hybrid",
  image: {
    domains: ["ik.imagekit.io"],
  },
  adapter: vercel(),
});
