<template>
    <h3 class="post__title">{{ post.title }}</h3>
    <p class="post__descr">{{ getTextPreview(post.body) }}</p>
    <div class="post__continue" @click="$router.push(`/posts/${post.id}`)">
        <span>Continue reading</span>
        <img src="../assets/images/continue.png" alt="">
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    methods: {
        getTextPreview(text) {
            return (text.length > 300) ? text.substring(0, 300) + '...' : text;
        }
    },
}
</script>
<style scoped>
.post__title {
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 28px;
}

.post__title:hover {
    color: #353f52;
}

.post__descr {
    margin-bottom: 30px;
    line-height: 23px;
}

.post__continue {
    display: flex;
    align-items: center;
    cursor: pointer;
    width: max-content;
}

.post__continue span {
    margin-right: 5px;
    font-size: 16px;
    text-transform: uppercase;
}

.post__continue span:hover {
    color: #353f52;
}

.post__continue img {
    height: 22px;
}
</style>