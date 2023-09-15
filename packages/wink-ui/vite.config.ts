/* eslint-disable no-console */
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { resolve } from 'path';
import type { UserConfig } from 'vite';
import { loadEnv, type ConfigEnv } from 'vite';
import { name } from './package.json';

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv) => {
    const env = loadEnv(configEnv.mode, process.cwd());
    console.info(configEnv);
    console.table(env);
    return {
        resolve: {
            alias: {
                '@wink-ui/*': 'packages/*',
            },
        },
        build: {
            outDir: 'dist',
            emptyOutDir: true,
            lib: {
                entry: resolve(__dirname, 'src/main.ts'),
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
            svgLoader(),
        ],
    } as UserConfig;
};
