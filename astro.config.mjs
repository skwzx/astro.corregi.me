// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Para generar un sitio estático
  output: "static",

  build: {
    assetsPrefix: "/", // Asegura rutas absolutas
  },

  base: "/astro.corregi.me",

  vite: {
    plugins: [tailwindcss()],
  },
});