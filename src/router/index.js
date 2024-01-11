import { createRouter, createWebHistory } from 'vue-router';
import Admin from '../pages/Admin.vue';
import Posts from '../pages/Posts.vue';

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
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;