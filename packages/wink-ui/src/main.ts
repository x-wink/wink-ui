import '@wink-ui/theme';
export * from '@wink-ui/components';
export * from '@wink-ui/icons';
export * from '@wink-ui/utils';

import * as components from '@wink-ui/components';
import { App, DefineComponent, Plugin } from 'vue';
import { SFCWithInstall } from '@wink-ui/utils';
import { version } from '../package.json';
export const WinkUI = {
    version,
    install: (app: App) => {
        Object.values(components).forEach((sfc) => {
            (sfc as SFCWithInstall<DefineComponent>).install?.(app);
        });
    },
} as Plugin;
export default WinkUI;
