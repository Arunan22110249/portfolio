import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
  plugins: [react()],
  configureServer(server) {
    server.middlewares.use((request, response, next) => {
      if (request.url?.startsWith('/assets/')) {
        response.statusCode = 404;
        response.end('Asset not found');
        return;
      }
      next();
    });
  },
  server: {
    host: true,
    allowedHosts: true,
    strictPort: false,
  },
});
