<template>
    <form class="form" @submit.prevent="submitPost">
        <h2 class="form__title">{{ formTitle }}</h2>
        <div class="form__group">
            <label class="form__label">Title</label>
            <u-input
                :disabled="readOnlyPost"
                v-model="post.title"
            />
        </div>
        <div class="form__group">
            <label class="form__label">Text</label>
            <u-textarea
                :disabled="readOnlyPost"
                v-model="post.body"
            ></u-textarea>
        </div>
        <div class="form__buttons">
            <u-button-outline
                class="form__button"
                @click.prevent="$emit('cancel')"
            >Cancel</u-button-outline>
            <u-button-primary
                type="submit"
                class="form__button"
                v-if="!readOnlyPost"
            >Submit</u-button-primary>
        </div>
    </form>
</template>

<script>
export default {
    props: {
        selectedPost: Object,
        readOnlyPost: Boolean,
    },
    data() {
        return {
            post: {}
        }
    },
    computed: {
        formTitle() {
            if (Object.values(this.selectedPost).length > 0) {
                if (this.readOnlyPost) {
                    return 'Post ' + this.selectedPost.id
                } else {
                    return 'Edit post ' + this.selectedPost.id;
                }
            } else {
                return 'Create post';
            }
        }
    },
    mounted() {
        if (Object.values(this.selectedPost).length > 0) {
            this.post = this.selectedPost;

        }
    },
    methods: {
        submitPost() {
            if (!this.post.title || !this.post.body) return;

            this.$emit('create', this.post);
        },
    },
}
</script>

<style scoped>
.form {
    width: 800px;
    padding: 30px;
    border-radius: 15px;
    background: #fff;
    font-family: sans-serif;
}

.form__title {
    margin: 10px 0 30px;
    text-align: center;
    font-size: 25px;
    letter-spacing: 1px;
}

.form__group {
    margin-bottom: 25px;
}

.form__label {
    display: block;
    margin-bottom: 5px;
    color: #7c7c7c;
    letter-spacing: 1px;
}

.form__buttons {
    display: flex;
}

.form__button:not(:last-of-type) {
    margin-right: 10px;
}
</style>