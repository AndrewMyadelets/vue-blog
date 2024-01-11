<template>
    <button class="button-action">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'UButtonAction'
}
</script>
<style scoped>
.button-action {
    padding: 5px 10px;
    text-wrap: nowrap;
    border: none;
    border-radius: 5px;
    outline: none;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-size: 14px;
}

.button-edit {
    background-color: #fabd07;
}

.button-edit:hover {
    background-color: #f8c52a;
    background-color: #e7b520;
}

.button-info {
    background-color: #0ac2e7;
}

.button-info:hover {
    background-color: #31ceee;
}

.button-delete {
    color: #fff;
    background-color: #da3747;
}

.button-delete:hover {
    color: #fff;
    background-color: #be2e3c;
}
</style>