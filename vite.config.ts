import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/site-mpd/', // Necessário para implantar no GitHub Pages (/site-mpd/)
})

