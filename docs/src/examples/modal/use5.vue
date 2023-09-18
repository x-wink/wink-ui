<template>
    <XModal
        v-model="visible"
        content="输入付款金额"
        :default-value="123456"
        :input-attrs="{ showControls: true }"
        input-type="number"
        :modal="false"
        show-cancel
        show-input
        static
        title="要求输入"
    />
</template>
<script setup lang="ts">
    import { XModal } from 'wink-ui';
    import { ref } from 'vue';
    const visible = ref(true);
</script>
