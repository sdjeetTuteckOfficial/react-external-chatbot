import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures the build goes to `dist`
    rollupOptions: {
      output: {
        entryFileNames: 'index.js', // Ensures the main JS file is named `index.js`
      },
    },
  },
});
