<template>
    <div class="container">
        <XPopover trigger="hover">
            <template #trigger>
                <XButton theme="primary">鼠标移入</XButton>
            </template>
            这里是弹窗内容
        </XPopover>
        <XPopover trigger="click">
            <template #trigger>
                <XButton theme="primary">鼠标单击</XButton>
            </template>
            这里是弹窗内容
        </XPopover>
        <XPopover v-model="visible" trigger="manual" @click-outside="handleClose">
            <template #trigger>
                <XButton theme="primary" @click="handleOpen">手动控制</XButton>
            </template>
            将在3秒后自动关闭，点击外面立即关闭
        </XPopover>
    </div>
</template>
<script setup lang="ts">
    import { XButton, XPopover } from 'wink-ui';
    import { ref } from 'vue';
    const visible = ref(false);
    const handleOpen = () => {
        visible.value = true;
        setTimeout(handleClose, 3000);
    };
    const handleClose = () => {
        visible.value = false;
    };
</script>
<style scoped lang="less">
    .container {
        .x-flex();
        :deep(.x-popover-target) {
            + .x-popover-target {
                margin-left: var(--x-gap);
            }
        }
    }
</style>
