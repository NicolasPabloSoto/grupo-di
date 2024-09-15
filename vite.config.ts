import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: 'public/admin',
    emptyOutDir: true,
    rollupOptions: {
      input: './src/main.tsx',  // Compilar desde src/main.tsx
    },
  },
  server: {
    port: 5000,
    cors: true,
  },
});