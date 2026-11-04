import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://daisu-genome.github.io",

  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja"
  },

  integrations: [sitemap()]
});