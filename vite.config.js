import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import content from '@originjs/vite-plugin-content';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [preact(), content()],
  server: {
    port: 3030,
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('all-idioms')) return 'all-idioms';
          if (id.includes('game-idioms')) return 'game-idioms';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
});