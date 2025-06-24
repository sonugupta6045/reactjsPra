import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api':'http://localhost:3000'
    },
  },
  plugins: [react()],
})


// proxy are used to avoid the cors issue. it's assuming that the backend is running on port 3000 and the frontend on port 5173 (default for Vite). The proxy will forward requests from the frontend to the backend, allowing you to access the API without CORS issues.