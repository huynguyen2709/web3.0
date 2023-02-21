import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "@components", replacement: "/src/components/index.tsx" },
      { find: "@images", replacement: "/images" },
      { find: "@types", replacement: "/src/types.ts" },
    ],
  },
});