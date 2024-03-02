<template>
    <button class="button-primary">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'UButtonPrimary'
}
</script>
<style scoped>
.button-primary {
    padding: 0 10px;
    height: 35px;
    text-wrap: nowrap;
    border: none;
    border-radius: 5px;
    background-color: #0071f0;
    outline: none;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-size: 16px;
    color: #fff;
    transition: 0.3s;
}

.button-primary:focus,
.button-primary:hover {
    background-color: #007bffd1;
}
</style>