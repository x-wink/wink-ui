/* eslint-disable no-console */
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import { loadEnv, type ConfigEnv, UserConfig } from 'vite';

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
        },
        plugins: [
            vue({
                script: {
                    defineModel: true,
                },
            }),
            legacy({
                targets: ['defaults', 'not IE 11', 'chrome 52'],
            }),
        ],
    } as UserConfig;
};
