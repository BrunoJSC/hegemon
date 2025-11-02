import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Separar node_modules em chunks específicos
          if (id.includes("node_modules")) {
            // React core
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            // React Router
            if (id.includes("react-router")) {
              return "router";
            }
            // Motion/Framer Motion
            if (id.includes("motion")) {
              return "motion";
            }
            // i18next
            if (id.includes("i18next")) {
              return "i18n";
            }
            // Lucide icons
            if (id.includes("lucide-react")) {
              return "icons";
            }
            // Outros vendors
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
