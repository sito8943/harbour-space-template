import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      utils: path.resolve(__dirname, "./src/utils"),
      sections: path.resolve(__dirname, "./src/sections"),
      providers: path.resolve(__dirname, "./src/providers"),
      views: path.resolve(__dirname, "./src/views"),
    },
  },
  server: {
    port: 3000,
  },
});
