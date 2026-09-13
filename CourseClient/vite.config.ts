import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        basicSsl(),
        tailwindcss()
    ],
    server: {
        port: 5173,
        proxy: {
            '/api': {
                target: 'https://localhost:7012',
                secure: false,
                changeOrigin: true
            }
        }
    }
});
