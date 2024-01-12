import { createRouter, createWebHistory } from 'vue-router';
import Admin from '../views/Admin.vue';
import Posts from '../views/Posts.vue';
import Post from '../views/Post.vue';

const routes = [
    {
        path: '/admin',
        name: 'admin',
        component: Admin
    },
    {
        path: '/',
        name: 'posts',
        component: Posts
    },
    {
        path: '/posts/:id',
        name: 'post',
        component: Post
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;