<template>
    <div class="posts__info">
        <span v-if="posts.length > 0">Total number of posts: {{ posts.length }}</span>
        <span v-else>No posts</span>
    </div>
    <transition-group name="posts__list" tag="ul" class="posts__list">
        <li class="posts__item post" v-for="post in posts" :key="post.id" @click="$router.push(`/posts/${post.id}`)">
            <post-item :post="post" />
        </li>
    </transition-group>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>
.posts__info {
    margin-bottom: 30px;
    padding: 10px;
    width: 100%;
}

.posts__list {
    margin-bottom: 50px;
}

.posts__item {
    padding: 15px;
    border: 1px solid var(--light-gray);
    border-radius: 3px;
    cursor: pointer;
}

.posts__item:not(:last-child) {
    margin-bottom: 15px;
}

.posts__item:hover {
    box-shadow: 4px 8px 40px rgba(8, 24, 110, 0.2);
}

/* 1. declare transition */
.posts__list-move,
.posts__list-enter-active,
.posts__list-leave-active {
    transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.posts__list-enter-from,
.posts__list-leave-to {
    opacity: 0;
    transform: scaleX(0.01) translate(130px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.posts__list-leave-active {
    position: absolute;
}
</style>