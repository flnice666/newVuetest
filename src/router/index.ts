import {createRouter, createWebHashHistory} from 'vue-router';
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('../views/Center/center.vue')
    },
    {
        path: '/land',
        component: () => import('../views/Land/land.vue')
    },
    {
        path: '/eatpage',
        component: () => import('../views/Eat/eat.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(), //替代之前的mode，是必须的
    routes
});
export default router;