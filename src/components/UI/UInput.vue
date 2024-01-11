<template>
    <input
        class="input"
        type="text"
        :value="modelValue"
        @input="updateInput"
    >
</template>
<script>
export default {
    name: 'UInput',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
}
</script>
<style scoped>
.input {
    padding: 0 10px;
    width: 100%;
    height: 35px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    background-color: #fff;
    outline: none;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-size: 16px;
    transition: 0.3s;
}

.input:focus {
    border-color: #1a73a8;
}</style>