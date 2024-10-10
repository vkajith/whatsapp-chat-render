// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    https: {
      key: './path/to/key.pem',
      cert: './path/to/cert.pem'
    },
    port: 3000,
    open: true // This will automatically open the browser
  },
});
