import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://huminfo8.github.io",

  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja"
  }
});