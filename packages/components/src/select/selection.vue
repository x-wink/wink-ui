<template>
    <div class="x-select__selection">
        <template v-if="props.tags">
            <XSelectTag v-for="(item, index) in limitTags" :key="index" removeable @remove="handleRemove(index)">
                {{ item }}
            </XSelectTag>
            <XPopover v-if="tagOverflow > 0">
                <template #trigger>
                    <XSelectTag v-for="(item, index) in limitTags" :key="index" class="x-select__tag --overflow">
                        +{{ tagOverflow }}
                    </XSelectTag>
                </template>
                <XSelectTag
                    v-for="(item, index) in restTags"
                    :key="index"
                    removeable
                    @remove="handleRemove(limitTags.length + index)"
                >
                    {{ item }}
                </XSelectTag>
            </XPopover>
        </template>
        <XText v-else ellipsis>
            {{ selection.join(',') }}
        </XText>
    </div>
</template>

<script setup lang="ts">
    import { XPopover, XText } from '../';
    import XSelectTag from './tag.vue';
    const props = defineProps<{
        selection: string[];
        tags?: boolean;
        maxTagCount?: number;
    }>();
    const tagOverflow = computed(() =>
        props.maxTagCount && props.selection.length > props.maxTagCount ? props.selection.length - props.maxTagCount : 0
    );

    const limitTags = computed(() => {
        return props.selection.slice(0, props.maxTagCount || props.selection.length);
    });
    const restTags = computed(() => {
        return props.selection.slice(props.maxTagCount || props.selection.length);
    });
    const emits = defineEmits<{
        remove: [index: number];
    }>();
    const handleRemove = (index: number) => {
        emits('remove', index);
    };
</script>

<style scoped lang="less">
    .x-select {
        &__selection {
            .x-flex.fill();
            .x-flex();
            .wrap();
            overflow: hidden;
        }
    }
</style>
