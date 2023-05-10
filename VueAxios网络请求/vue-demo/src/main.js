import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

// 全局引用
import axios from 'axios'
import querystring from "querystring"


// 全局挂载axios
// 挂载后再组件中使用就要用this.$axios作为名字
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$querystring = querystring

app.mount('#app')

// createApp(App).mount('#app')

