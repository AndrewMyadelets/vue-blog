<template>
    <u-dialog
        :show="dialogVisible"
        @cancel="cancelPost"
    >
        <post-form
            :selected-post="selectedPost"
            :read-only-post="readOnlyPost"
            @cancel="cancelPost"
            @create="submitPost"
        />
    </u-dialog>
    <div class="post-grid">
        <h1 class="title post-grid__title">Post management</h1>
        <div class="post-grid__actions">
            <u-button-primary
                class="post-grid__action"
                @:click="fetchPosts"
            >Get posts</u-button-primary>
            <u-button-outline
                class="post-grid__action"
                @click="showDialog"
            >Add new</u-button-outline>
            <u-select
                class="post-grid__action"
                #placeholder
                :options="sortOptions"
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
            >Filter</u-select>
            <u-input
                class="post-grid__search"
                placeholder="Search..."
                :model-value="searchQuery"
                @update:model-value="setSearchQuery"
            />
        </div>
        <post-table
            class="post-grid__table"
            :posts="postsToShow"
            @edit="editPost"
            @show="showPost"
            @delete="removePost"
        />
        <u-pagination
            class="pagination"
            :current-page="currentPage"
            :total-items="totalPosts"
            :items-per-page="postsPerPage"
            @change="changePage"
        >
        </u-pagination>
    </div>
</template>
<script>
import PostForm from '../components/PostForm.vue';
import PostTable from '../components/PostTable.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
    components: {
        PostForm, PostTable
    },
    data() {
        return {
            dialogVisible: false,
            readOnlyPost: false,
            currentPage: 1,
            postsPerPage: 10,
        };
    },
    methods: {
        ...mapMutations({
            createPost: 'post/createPost',
            updatePost: 'post/updatePost',
            deletePost: 'post/deletePost',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
            setSelectedPost: 'post/setSelectedPost',
        }),
        ...mapActions({
            fetchPosts: 'post/fetchPosts',

        }),
        showDialog() {
            this.dialogVisible = true;
        },
        getPostIndexById(id) {
            return this.posts.findIndex(item => item.id === id);
        },
        editPost(id) {
            this.setSelectedPost(Object.assign({}, this.posts[this.getPostIndexById(id)]));

            this.showDialog();
        },
        removePost(id) {
            this.deletePost(this.getPostIndexById(id));
        },
        showPost(id) {
            this.setSelectedPost(Object.assign({}, this.posts[this.getPostIndexById(id)]));

            this.readOnlyPost = true;
            this.showDialog();
        },
        cancelPost() {
            this.setSelectedPost({});
            this.readOnlyPost = false;
            this.dialogVisible = false;
        },
        createPostId() {
            if (this.posts.length === 0) return 1;
            let maxIdObj = this.posts.reduce((max, current) => current.id > max.id ? current : max);
            let maxId = maxIdObj.id;
            return maxId + 1;
        },
        submitPost(post) {
            if (post.id) {
                this.updatePost({
                    index: this.getPostIndexById(post.id),
                    data: post
                });

                this.setSelectedPost({});
            } else {
                post.id = this.createPostId();
                this.createPost(post);
            }

            this.dialogVisible = false;
        },
        changePage(page) {
            this.currentPage = page;
        }
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            selectedPost: state => state.post.selectedPost,
            selectedSort: state => state.post.selectedSort,
            sortOptions: state => state.post.sortOptions,
            searchQuery: state => state.post.searchQuery,
        }),
        ...mapGetters({
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
            totalPosts: 'post/totalPosts',
        }),
        postsToShow() {
            return this.sortedAndSearchedPosts.slice(
                (this.currentPage - 1) * this.postsPerPage, this.currentPage * this.postsPerPage
            );
        },
    },
    watch: {
        searchQuery() {
            this.currentPage = 1;
        }
    }
}
</script>
<style scoped>
.post-grid {
    margin-bottom: 50px;
}

.post-grid__actions {
    margin-bottom: 10px;
    display: flex;
}

.post-grid__title {
    margin: 0 15px 30px 0;
}

.post-grid__action {
    margin-right: 10px;
}

.post-grid__search {
    width: 300px;
}

.post-grid__table {
    margin-bottom: 30px;
}

.pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}
</style>