<template>
    <div class="container">
        <div ref="refsTarget" class="target" @click="visible = true">点击目标元素显示</div>
        <XPopup v-model="visible" arrow close-on-click-outside :target="refsTarget">点击气泡外面隐藏</XPopup>
    </div>
</template>
<script setup lang="ts">
    import { XPopup } from 'wink-ui';
    import { ref } from 'vue';
    const visible = ref(false);

    const refsTarget = ref<HTMLDivElement>();
</script>
<style scoped lang="less">
    .container {
        .x-flex();
        .row-center();
        margin: 60px 0;
        .target {
            .x-flex();
            .row-center();
            .col-center();
            border-radius: var(--x-border-radius);
            padding: var(--x-gap);
            background: var(--x-white);
            color: var(--x-primary);
        }
    }
</style>
