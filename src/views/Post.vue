<template>
    <div
        class="article"
        v-if="post"
    >
        <h1 class="article__title">{{ post.title }}</h1>
        <div class="artcile__text">{{ post.body }}</div>
    </div>
    <h1
        v-else
        class="title"
    >Post not found</h1>
</template>
<script>
import { useRoute } from 'vue-router';
import { mapGetters } from 'vuex';

export default {
    computed: {
        post() {
            return this.getPostById(+useRoute().params.id);
        },
        ...mapGetters({
            getPostById: 'post/getPostById',
        }),
    }
}
</script>
<style scoped>
.article {
    margin-bottom: 50px;
    padding: 30px 50px 0;
}

.article__title {
    margin-bottom: 25px;
    font-size: 28px;
}

.artcile__text {
    line-height: 23px;
    text-indent: 30px;
}

.artcile__text p {
    margin-bottom: 15px;
}
</style>