import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'



// 这里是每个页面的配置信息，每个组包含至少两个信息
const routes = [

  // HomeView页面的配置信息
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  // AboutView页面的配置信息
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:AboutView
  }
]

const router = createRouter({


  // 有两种使用方式
  // createWebHashHistory
  // home：http://192.168.31.212:8080/#/
  // about:http://192.168.31.212:8080/#/about
  // 此种方式不需要后台做配置
  // 原理：a标签的锚点链接

  // createWebHistory
  // home:http://192.168.31.212:8080/
  // about:http://192.168.31.212:8080/about
  // 此种方式需要后台配合做重定向否则会出现404的错误
  // 原理：H5的pushState（）
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
