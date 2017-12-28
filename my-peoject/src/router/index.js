import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

// 默认路由表，不需要权限
const routes = [
    {
        path: '/',
        // 重定向
        redirect: '/home'
    },
    {
        path: '/login',
        component: r => require.ensure([], () => r(require('../page/login/login')), 'login')
    },
    {
        path: '/defaultLayout',
        component: r => require.ensure([], () => r(require('../page/layout/layout')), 'layout'),
        meta:{
            permission:[]
        },
        // 需要进行用户登录验证
        children: [{
            path: '/home',
            component: r => require.ensure([], () => r(require('../page/home/home')), 'home'),
        }]
    },
    {
        path: '/error',
        component: r => require.ensure([], () => r(require('../page/error/error')), 'error'),
        children: [
            {
                path: '/error/401',
                component: r => require.ensure([], () => r(require('../page/error/401')), 'error')
            },
            {
                path: '/error/403',
                component: r => require.ensure([], () => r(require('../page/error/403')), 'error')
            },
            {
                path: '/error/404',
                component: r => require.ensure([], () => r(require('../page/error/404')), 'error')
            },
            {
                path: '/error/500',
                component: r => require.ensure([], () => r(require('../page/error/500')), 'error')
            }
        ]
    }
]


const router = new Router({
    mode: 'history',
    routes: routes
})
