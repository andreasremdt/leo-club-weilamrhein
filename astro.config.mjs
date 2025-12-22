import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://leo-club-weilamrhein.de/",
  prefetch: {
    prefetchAll: true,
  },
  image: {
    formats: ["webp"],
    quality: 80,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: "static",
  adapter: vercel(),
});
