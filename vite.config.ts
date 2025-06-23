import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@common": path.resolve(__dirname, "./src/components/common"),
      "@layout": path.resolve(__dirname, "./src/components/layout"),
      "@sections": path.resolve(__dirname, "./src/components/sections"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@translations": path.resolve(__dirname, "./src/translations"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "animation-vendor": ["framer-motion", "gsap"],
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
          "ui-vendor": ["react-hot-toast", "react-hook-form"],
        },
      },
    },
  },
});
