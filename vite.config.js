import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.pdf"], // Agregar soporte para PDFs
  build: {
    rollupOptions: {
      input: {
        main: "/index.html",
      },
    },
  },
});
