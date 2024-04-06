export const constantRoute = [
    {
        name: 'login',
        path: '/login',
        component: () => import ('../views/login/index.vue')
    },
    {
        name: 'layout',
        path: '/',
        component: () => import('@/views/home/index.vue')
    },
    {
        name: '404',
        path: '/404',
        component: () => import ('@/views/404/index.vue')
    },
    {
        name: 'Any',
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
]