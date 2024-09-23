import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-website/",
  plugins: [
    react(),
    // svgr({
    //   include: "**/*.svg?react",
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: `[name].[hash].js`,
      },
    },
  },
});
