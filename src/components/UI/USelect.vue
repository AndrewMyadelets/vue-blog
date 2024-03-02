<template>
    <select
        class="select"
        :value="modelValue"
        @change="changeOption"
    >
        <option
            disabled
            value=""
        >
            <slot name="placeholder"></slot>
        </option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >{{ option.name }}</option>
    </select>
</template>
<script>
export default {
    name: 'USelect',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    },
}
</script>
<style scoped>
.select {
    padding: 0 10px;
    height: 35px;
    background-color: #fff;
    border: 1px solid #c1c7ce;
    border-radius: 5px;
    outline: none;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
}

.select:focus,
.select:hover {
    border-color: #0071f0;
}</style>