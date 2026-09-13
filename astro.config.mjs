import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.martins-reithof.ch",
  build: {
    inlineStylesheets: "auto",
  },
});
