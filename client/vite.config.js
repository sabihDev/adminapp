import { defineConfig } from 'vite'
import { config as dotenvConfig } from 'dotenv'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dotenvConfig({
    path: './.env'
  })],
  define: {
    'process.env': process.env
  }
})
