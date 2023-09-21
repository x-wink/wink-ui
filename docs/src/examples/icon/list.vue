<template>
    <div class="container">
        <ul>
            <li v-for="(item, index) in all.icons" :key="index" @click="handleCopy(item)">
                <XIcon color="var(--x-primary)" size="32px">
                    <component :is="all[item]" />
                </XIcon>
                <label>{{ item }}</label>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { XIcon, copy } from 'wink-ui';
    import * as all from '@wink-ui/icons';
    import type { IconName } from '@wink-ui/icons';

    const handleCopy = (name: IconName) => {
        copy(`<${name} />`);
    };
</script>

<style scoped lang="less">
    .container {
        ul {
            width: 100%;
            padding: 0;
            overflow: hidden auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            grid-auto-rows: auto;
            grid-gap: var(--x-gap-mini);

            li {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                padding: var(--x-gap) 0;
                margin: 0;
                color: var(--x-primary);
                background: var(--x-fade-black);
                border-radius: var(--x-border-radius);
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    background: none;

                    .x-icon {
                        transform: scale(1.5);
                    }
                    label {
                        font-weight: bolder;
                    }
                }

                .x-icon {
                    margin: var(--x-gap) 0;
                }
            }
        }
    }
</style>
