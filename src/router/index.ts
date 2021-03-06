import { createRouter, createWebHashHistory } from 'vue-router';
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

//路由守卫
router.beforeEach((to: any, form: any, next: any) => {
    console.log('是否进入了路由首位');
    const isLogin = localStorage.getLogin === 'true' ? true : false;
    if (to.path === '/eatpage') {
        isLogin ? next() : next('/land')
    } else {
        next();
    }
})
export default router;