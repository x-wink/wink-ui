<template>
    <div class="container">
        <div ref="refsTarget" class="target" @click="visible = !visible">
            点击目标元素{{ visible ? '隐藏' : '显示' }}
        </div>
        <XPopup
            v-for="(item, index) in popupPlacements"
            :key="index"
            v-model="visible"
            arrow
            :placement="item"
            :target="refsTarget"
        >
            {{ item }}
        </XPopup>
    </div>
</template>
<script setup lang="ts">
    import { XPopup, popupPlacements } from 'wink-ui';
    import { ref } from 'vue';
    const visible = ref(true);

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
            width: var(--x-width-super);
            height: var(--x-width-super);
            text-align: center;
            background: var(--x-white);
            color: var(--x-primary);
        }
    }
</style>
