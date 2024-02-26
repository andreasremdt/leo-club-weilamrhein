import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://leo-club-weilamrhein.de/",
  integrations: [sitemap(), tailwind()]
});