import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://leo-club-weilamrhein.de/",
  integrations: [sitemap()],
});
