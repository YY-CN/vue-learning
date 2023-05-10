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
    redirect:"/about/us",  //重定向，即点击进去一开始默认显示us这个页面
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children:[
      {
        // 二级导航的路径不要加斜杠
        path:"us",
        name:"us",
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
        // 若还有三级导航即继续加children
      },
      {
        // 二级导航的路径不要加斜杠
        path:"info",
        name:"info",
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutInfo.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
