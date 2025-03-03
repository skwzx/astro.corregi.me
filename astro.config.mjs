// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://corregi.me",
  base: "/",
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  integrations: [
    tailwind(),
    compress({
      CSS: true,
      HTML: true,
      JavaScript: true,
      Image: false,
      SVG: true,
    }),
  ],
});
