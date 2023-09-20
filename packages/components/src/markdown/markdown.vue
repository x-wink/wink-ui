<template>
    <div class="x-markdown">
        <div class="html" v-html="content"></div>
    </div>
</template>

<script setup lang="ts">
    import { marked } from 'marked';
    defineOptions({
        name: 'XMarkdown',
    });
    const modelValue = defineModel<string>({ required: true });
    const content = computed(() =>
        marked(modelValue.value, { mangle: false, headerIds: false }).replace(/<a href="/g, '<a target="_blank" href="')
    );
</script>

<style lang="less">
    .x-markdown {
        overflow: auto;
        .html {
            * {
                user-select: text;
            }
            > * {
                margin: var(--x-gap-large) 0;
                line-height: 2;
            }
            hr {
                border-color: var(--x-primary);
            }
            code {
                display: inline-block;
                font-family: 'Courier New', Courier, monospace;
                line-height: 1.3;
                margin: 0 var(--x-gap-mini);
                padding: 0 var(--x-gap-mini);
                background-color: (--x-fade-black);
                border-radius: var(--x-border-radius);
            }
            a {
                border-bottom: 2px dashed var(--x-primary);
                padding-bottom: 3px;
                text-decoration: none;
                font-size: 0.8em;
                &::before {
                    content: '>';
                }
                &::after {
                    content: '<';
                }
                &::before,
                &::after {
                    display: inline-block;
                    color: var(--x-primary);
                    padding: 0 3px;
                }
                &:hover {
                    border-bottom-style: solid;
                    &::before,
                    &::after {
                        transform: scale(1.5);
                    }
                }
            }
            ul,
            ol {
                li {
                    + li {
                        margin-top: var(--x-gap-super);
                    }
                }
            }
            input[type='checkbox'] {
                vertical-align: middle;
                width: 1.5em;
                height: 1.5em;
                margin-right: var(--x-gap-mini);
                visibility: hidden;
                &::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-color: #0f03;
                    border: 1px solid var(--x-primary);
                    border-radius: var(--x-border-radius);
                    font-size: 1.2em;
                    font-weight: bolder;
                    line-height: 1.2;
                    font-family: '微软雅黑';
                    text-align: center;
                    visibility: visible;
                }
                &:checked {
                    &::after {
                        content: '√';
                        color: var(--x-primary);
                    }
                }
            }
        }
    }
</style>
