import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://franciscokataldocl.github.io/github_search/",
  plugins: [react()]
})
