<template>
    <button class="button-outline">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'UButtonOutline'
}
</script>
<style scoped>
.button-outline {
    padding: 0 10px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-wrap: nowrap;
    border: 1px solid #0071f0;
    border-radius: 5px;
    background-color: #fff;
    outline: none;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-size: 16px;
    color: #0071f0;
    transition: 0.3s;
}

.button-outline:focus,
.button-outline:hover {
    color: #fff;
    background-color: #007bffd1;
}
</style>