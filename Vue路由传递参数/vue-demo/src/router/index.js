import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/news",
    name: "news",

    // 这是异步加载方式，即如果页面没有显示出来，这个代码不会被执行，可以节约内存空间
    component: () => import('../views/NewsView.vue')
  },
  {
     //:name是key即跳转的指定参数key，在跳转过程中携带参数,可以添加多个参数/:name/:key/:xxx  
     // 依旧是用$route.params.key参数名获取
    path: "/newsdetails/:name", 
    name: "newsdetails",
    component: () => import('../views/NewsDetailsView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
