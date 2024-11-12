import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/profile",
  plugins: [react()],
  server:{
    host: true
  }
})
