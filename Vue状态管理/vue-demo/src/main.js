import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'


// 在主配置文件中导入并用.use(store)的方式使用
import store from './store' 

createApp(App).use(router).use(store).mount('#app')
