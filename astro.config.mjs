import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jzzh.github.io",
  base: "/martins-reithof",
  build: {
    inlineStylesheets: "auto",
  },
});
