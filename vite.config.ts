import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          radix: ['@radix-ui/react-dialog'],
          vendor: ['react', 'react-dom', 'react-hook-form', 'zod'],
          icons: ['react-icons'],
        },
      },
    },
  },
})
