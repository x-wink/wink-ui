<template>
    <XSelect v-model="value" multipart :options="opts" />
</template>
<script setup lang="ts">
    import { ref } from 'vue';
    import { XSelect } from 'wink-ui';
    const value = ref(['a', 'b', 'c']);
    const opts = [
        {
            label: 'AAAAA',
            value: 'a',
        },
        {
            label: 'BBBBB',
            value: 'b',
        },
        {
            label: 'CCCCC',
            value: 'c',
        },
    ];
</script>
