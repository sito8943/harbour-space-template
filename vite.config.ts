import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      Components: path.resolve(__dirname, "./src/Components"),
      lib: path.resolve(__dirname, "./src/lib"),
    },
  },
  server: {
    port: 3000,
  },
});
