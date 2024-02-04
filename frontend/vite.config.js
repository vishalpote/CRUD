import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  proxy:{
    'api/v1':'http:localhost:7001'
  },
  plugins: [react()],
})
