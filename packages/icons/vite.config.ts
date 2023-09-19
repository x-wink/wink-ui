import { defineConfig } from 'vite';
import { name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: './src/index.ts',
            name,
            fileName: 'index',
            formats: ['es'],
        },
    },
    plugins: [],
});
