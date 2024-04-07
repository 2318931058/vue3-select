export const constantRoute = [
    {
        name: 'login',
        path: '/login',
        component: () => import ('../views/login/index.vue')
    },
    {
        name: 'home',
        path: '/',
        redirect: '/layout',
        children: [
            {
                name: 'layout',
                path: '/layout',
                // component: () => 
            }
        ]
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