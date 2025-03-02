// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://corregi.me",
  base: "/",
  build: {
    assets: "assets",
  },
  integrations: [tailwind()],
});
