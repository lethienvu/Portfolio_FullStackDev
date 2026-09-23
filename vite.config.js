import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_FullStackDev/',
  // Keep images as independently cacheable assets instead of Base64 in JS chunks.
  assetsInlineLimit: 0,
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
