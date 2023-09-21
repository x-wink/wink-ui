<template>
    <XButton theme="primary" @click="handleClick">打开模态框</XButton>
</template>
<script setup lang="ts">
    import { XButton, showModal } from 'wink-ui';
    const handleClick = () => {
        showModal({
            title: '操作提示',
            content: '这是API动态模态框',
        });
    };
</script>
