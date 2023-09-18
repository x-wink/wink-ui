<template>
    <div>
        <template v-for="(item, index) in dividerBorderStyles" :key="index">
            <XDivider
                border-color="var(--x-primary)"
                :border-style="item"
                :border-width="3"
                :text="item"
                theme="second"
            />
        </template>
    </div>
</template>
<script setup lang="ts">
    import { XDivider, dividerBorderStyles } from 'wink-ui';
</script>
<style scoped lang="less">
    .x-divider {
        font-size: 24px;
    }
</style>
