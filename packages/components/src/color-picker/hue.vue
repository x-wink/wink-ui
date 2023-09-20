<template>
    <XColorSlider v-model="hue" class="x-color-hue" :render="render" />
</template>

<script setup lang="ts">
    import type { RGB } from '@wink-ui/utils';
    import { color2Hue, hue2Color, rgba2Hex } from '@wink-ui/utils';
    import XColorSlider from './slider.vue';
    defineOptions({
        name: 'XColorPickerHue',
    });
    const color = defineModel<RGB>({ required: true });

    const hue = computed({
        get: () => color2Hue(rgba2Hex(color.value)),
        set: (value) => (color.value = hue2Color(value)),
    });

    const render = (cvs: HTMLCanvasElement) => {
        const ctx = cvs.getContext('2d')!;

        const gradient = ctx.createLinearGradient(0, 0, cvs.width, cvs.height);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(1 / 6, 'yellow');
        gradient.addColorStop(2 / 6, 'lime');
        gradient.addColorStop(3 / 6, 'cyan');
        gradient.addColorStop(4 / 6, 'blue');
        gradient.addColorStop(5 / 6, 'magenta');
        gradient.addColorStop(1, 'red');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, cvs.width, cvs.height);
    };
</script>
