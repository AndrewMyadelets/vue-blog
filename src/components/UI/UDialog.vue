<template>
    <div class="dialog" v-if="show" @click="$emit('cancel')">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>
<script>

export default {
    name: 'UDialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
}
</script>
<style scoped>
    .dialog {
        top:0;
        bottom: 0;
        right:0;
        left:0;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }

    .dialog__content {
        margin: auto;
        background-color: #fff;
        border-radius: 10px;
        min-width: 300px;
        min-height: 200px;
    }
</style>