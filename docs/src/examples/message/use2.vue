<template>
    <XButton :disabled="visible" theme="primary" @click="visible = true">重新显示</XButton>
    <br />
    <br />
    <XMessage v-model="visible" closeable content="这是一个可关闭的消息框" static />
</template>
<script setup lang="ts">
    import { XButton, XMessage } from 'wink-ui';
    import { ref } from 'vue';
    const visible = ref(true);
</script>
<style lang="less"></style>
