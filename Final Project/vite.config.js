
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: ".",

  build: {
    outDir: "dist",

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        wings: resolve(__dirname, "wings/index.html"),
        equipment: resolve(__dirname, "equipment/index.html"),
        locations: resolve(__dirname, "locations/index.html"),
        favorites: resolve(__dirname, "favorites/index.html"),
      },
    },
  },
});
