import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    viteSingleFile()
  ],
  build: {
    // Saída servida pelo GitHub Pages (Settings → Pages → branch main, pasta /docs)
    outDir: 'docs',
    emptyOutDir: true,
  },
})
