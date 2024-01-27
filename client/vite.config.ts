import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Turniri/",
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
});
