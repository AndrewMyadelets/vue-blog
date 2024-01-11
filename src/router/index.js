import { createRouter, createWebHistory } from 'vue-router';
import Admin from '../views/Admin.vue';
import Posts from '../views/Posts.vue';

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