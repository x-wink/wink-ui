<template>
    <XModal
        v-model="visible"
        content="有关闭按钮"
        :modal="false"
        show-cancel
        show-close
        show-input
        static
        title="操作提示"
        @close="handleClose"
    />
</template>
<script setup lang="ts">
    import type { ModalCloseReason } from 'wink-ui';
    import { XModal } from 'wink-ui';
    import { ref } from 'vue';
    const visible = ref(true);
    const handleClose = (reason: ModalCloseReason, value?: string | number) => {
        // eslint-disable-next-line no-alert
        alert(`模态框关闭（${reason}）：${value}`);
    };
</script>
