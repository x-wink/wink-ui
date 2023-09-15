import svgLoader from 'vite-svg-loader';
import type { UserConfig } from 'vite';
import { name } from './package.json';

// https://vitejs.dev/config/
export default () => {
    return {
        build: {
            outDir: 'dist',
            lib: {
                entry: './src/main.ts',
                name,
                fileName: 'index',
                formats: ['es'],
            },
        },
        plugins: [svgLoader({ defaultImport: 'component' })],
    } as UserConfig;
};
