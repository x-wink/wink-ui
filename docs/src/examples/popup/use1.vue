<template>
    <div class="container">
        <XPopup v-model="visible" static>普通弹出层</XPopup>
        <XPopup v-model="visible" arrow static style="margin-left: var(--x-gap)">带有箭头</XPopup>
    </div>
</template>
<script setup lang="ts">
    import { XPopup } from 'wink-ui';
    import { ref } from 'vue';
    const visible = ref(true);
</script>
<style scoped lang="less">
    .container {
        .x-flex();
    }
</style>
