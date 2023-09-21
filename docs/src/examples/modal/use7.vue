<template>
    <XButton theme="primary" @click="handleShowModal">打开模态框</XButton>
    <XButton theme="primary" @click="handleShowAlert">打开提示框</XButton>
    <XButton theme="primary" @click="handleShowConfirm">打开确认框</XButton>
</template>
<script setup lang="ts">
    import { XButton, modal, message } from 'wink-ui';
    const handleShowModal = () => {
        modal.show({
            title: '操作提示',
            content: '这是API动态模态框',
        });
    };
    const handleShowAlert = () => {
        modal.alert('这是Alert提示框', '操作提示');
    };
    const handleShowConfirm = async () => {
        try {
            await modal.confirm('这是Confirm确认框', '操作提示');
            message.success('点了确认');
        } catch (e) {
            message.success(`没有点确认：${e}`);
        }
    };
</script>
