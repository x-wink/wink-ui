/* eslint-disable no-console */
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { name } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@wink-ui/*': 'packages/*',
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name,
            fileName: name,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        vue({
            script: {
                defineModel: true,
            },
        }),
        AutoImport({
            dirs: ['../components/src/**'],
            include: [/\.tsx?$/, /\.vue\??/],
            imports: ['vue'],
            eslintrc: {
                enabled: true,
                filepath: '../components/src/.eslintrc',
                globalsPropValue: true,
            },
            dts: '../components/src/auto-imports.d.ts',
        }),
    ],
});
