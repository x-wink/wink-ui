<template>
    <div class="container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, pariatur inventore nesciunt corporis voluptatem
        quam necessitatibus dolorum optio voluptatibus rem deleniti impedit recusandae, eveniet fugit eaque quod illum nisi
        omnis.
        <template v-for="(item, index) in dividerTextPlacements" :key="index">
            <XDivider :placement="item">分割线 {{ item }}</XDivider>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, pariatur inventore nesciunt corporis voluptatem
            quam necessitatibus dolorum optio voluptatibus rem deleniti impedit recusandae, eveniet fugit eaque quod illum nisi
            omnis.
        </template>
    </div>
</template>
<script setup lang="ts">
import { XDivider, dividerTextPlacements } from 'wink-ui';
</script>
<style scoped lang="less"></style>
