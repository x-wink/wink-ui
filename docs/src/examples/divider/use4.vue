<template>
    <div>
        <template v-for="(item, index) in dividerBorderStyles" :key="index">
            <XDivider :border-style="item" :text="item" :border-width="3" border-color="var(--x-primary)" theme="second" />
        </template>
    </div>
</template>
<script setup lang="ts">
import { XDivider, dividerBorderStyles } from 'wink-ui';
</script>
<style scoped lang="less">
.x-divider{
    font-size: 24px;
}
</style>
