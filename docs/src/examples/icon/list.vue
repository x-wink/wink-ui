<template>
    <div class="container">
        <ul>
            <li v-for="(item, index) in icons" :key="index">
                <XIcon :name="item" />
                <label>{{ item }}</label>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { XIcon, icons } from 'wink-ui';
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
            grid-gap: var(--x-space-mini);

            li {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                padding: var(--x-space) 0;
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
                    font-size: 32px;
                    margin: var(--x-space) 0;
                }
            }
        }
    }
</style>
