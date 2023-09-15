import type { IconName } from '@wink-ui/icons';

export interface MenuOption {
    name?: string;
    title?: string;
    icon?: IconName;
    route?: string;
    link?: boolean;
}
