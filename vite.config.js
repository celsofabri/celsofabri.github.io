import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Repositório é uma "user page" (celsofabri.github.io), publicada na raiz
  // do domínio — sem subpasta, diferente de um repositório de projeto comum.
  base: '/',
  plugins: [react()],
})
