import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'


// 导入路由
import router from "./router"



// 官方表示要以.use(router)的形式明确表示使用路由
createApp(App).use(router).mount('#app')
