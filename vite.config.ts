import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core e React Router juntos
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Motion/Framer Motion
          motion: ["motion"],
          // i18next
          i18n: [
            "i18next",
            "react-i18next",
            "i18next-browser-languagedetector",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
