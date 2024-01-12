<template>
    <div class="posts">
        <h1 class="title posts__title">Blog</h1>
        <div class="posts__actions">
            <u-button-primary
                class="posts__action"
                @:click="fetchPosts"
            >Get posts</u-button-primary>
            <u-select
                class="posts__action"
                #placeholder
                :options="sortOptions"
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
            >Filter by</u-select>
            <u-input
                class="posts__search"
                placeholder="Search..."
                :model-value="searchQuery"
                @update:model-value="setSearchQuery"
            />
        </div>
        <post-list :posts="postsToShow" />
        <div
            class="observer"
            v-if="postsToShow.length"
            v-intersection="loadPosts"
        >
        </div>
    </div>
</template>
  
<script>
import PostList from '../components/PostList.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    components: {
        PostList
    },
    data() {
        return {
            currentPage: 1,
            postsPerPage: 10,
        }
    },
    methods: {
        ...mapMutations({
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
        }),
        ...mapActions({
            fetchPosts: 'post/fetchPosts',
        }),
        async loadPosts() {
            if (this.currentPage < this.totalPages) {
                this.currentPage = ++this.currentPage;
            }
        },
    },
    mounted() {
        document.title = 'Posts';
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            selectedSort: state => state.post.selectedSort,
            sortOptions: state => state.post.sortOptions,
            searchQuery: state => state.post.searchQuery,
        }),
        ...mapGetters({
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
            totalPosts: 'post/totalPosts',
        }),
        postsToShow() {
            return this.sortedAndSearchedPosts.slice(0, this.currentPage * this.postsPerPage);
        },
        totalPages() {
            return Math.ceil(this.totalPosts / this.postsPerPage);
        },
    },
};
</script>
  
<style scoped>
.posts__title {
    margin-bottom: 30px;
    text-align: center;
}

.posts__actions {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
}

.posts__action {
    margin-right: 10px;
}

.posts__search {
    width: 300px;
}
</style>