import axios from 'axios';

export default {
    namespaced: true,
    state: () => ({
        posts: [],
        selectedPost: {},
        selectedSort: '',
        sortOptions: [
            { value: 'id', name: 'by id' },
            { value: 'title', name: 'by title' },
            { value: 'body', name: 'by text' },
        ],
        searchQuery: '',
    }),
    getters: {
        sortedAndSearchedPosts(state) {
            if (!state.selectedSort && !state.searchQuery) {
                return [...state.posts];
            }

            let searchedPosts = [...state.posts];

            if (state.selectedSort) {
                searchedPosts = searchedPosts.sort((post1, post2) => {
                    if (typeof (post1[state.selectedSort]) === 'number') {
                        return post1[state.selectedSort] - post2[state.selectedSort];
                    } else {
                        return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
                    }
                });
            }

            if (state.searchQuery) {
                searchedPosts = searchedPosts.filter(
                    post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                        post.body.toLowerCase().includes(state.searchQuery.toLowerCase())
                );
            }

            return searchedPosts;
        },
        totalPosts(state, getters) {
            return getters.sortedAndSearchedPosts.length;
        },
        getPostById: (state) => (id) =>  {
            return state.posts.find(post => post.id === id);
        },
    },
    mutations: {
        addPosts(state, posts) {
            state.posts = [...state.posts, ...posts];
        },
        createPost(state, post) {
            state.posts.unshift(post);
        },
        updatePost(state, post) {
            state.posts[post.index] = post.data;
        },
        deletePost(state, index) {
            state.posts.splice(index, 1);
        },
        setSelectedPost(state, selectedPost) {
            state.selectedPost = selectedPost;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
    },
    actions: {
        async fetchPosts({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                commit('addPosts', response.data);
            } catch (e) {
                console.log(e);
            }
        },
    },
}