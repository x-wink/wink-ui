<template>
    <XInput v-model="value" />
</template>
<script setup lang="ts">
    import { XInput } from 'wink-ui';
    import { ref } from 'vue';
    const value = ref('');
</script>
