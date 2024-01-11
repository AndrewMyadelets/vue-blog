<template>
    <textarea
        class="textarea"
        :value="modelValue"
        @input="updateTextarea"
    ></textarea>
</template>
<script>
export default {
    name: 'UTextarea',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateTextarea(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>
<style scoped>
.textarea {
    padding: 10px;
    width: 100%;
    height: 150px;
    resize: vertical;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    background-color: #fff;
    outline: none;
    font-family: sans-serif;
    letter-spacing: 1px;
    font-size: 16px;
    transition: 0.3s;
}

.textarea:focus {
    border-color: #1a73a8;
}</style>