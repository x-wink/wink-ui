<template>
    <XButton theme="primary" @click="handleClick">打开弹窗</XButton>
</template>
<script setup lang="ts">
    import { XButton, showModal } from 'wink-ui';
    const handleClick = () => {
        showModal({
            title: '操作提示',
            content: '这是API动态弹窗',
        });
    };
</script>
