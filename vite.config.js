import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true, // This ensures that warnings are emitted instead of errors
      emitError: false, // Disable emitting errors
    }),
  ],
});
