/// <reference types="vitest" />
import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from 'vite-tsconfig-paths'
import eslintPlugin from "vite-plugin-eslint";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    includeSource: ["src/__tests__/*.{js,tsx,ts}"],
    setupFiles: 'src/__tests__/setup.ts',
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080
  },
})
