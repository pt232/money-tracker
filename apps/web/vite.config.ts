/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";
import stringHash from "string-hash";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName(name, filename, css) {
        if (name === "dark") return "dark";

        const i = css.indexOf(`.${name}`);
        const lineNumber = css.substring(0, i + 1).split(/[\r\n]/).length;
        const hash = stringHash(css).toString(36).substring(0, 6);

        return `_${name}_${hash}_${lineNumber}`;
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
  },
});
