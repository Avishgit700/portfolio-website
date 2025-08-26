import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGh = process.env.BUILD_TARGET === 'gh'  // only for GitHub Pages builds

export default defineConfig({
  plugins: [react()],
  base: isGh ? '/portfolio-website/' : '/'     // '/' on Vercel, '/repo/' on GH Pages
})
