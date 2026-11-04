import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://huminfo8.github.io",

  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja"
  },

  integrations: [sitemap()]
});