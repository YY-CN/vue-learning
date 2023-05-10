import { createStore } from "vuex" ;


// vuex的核心作用帮我们管理我们组件之间的状态
const store = createStore({
    // 所有的数据都放在这里
    state:{
        counter:0,
        name:"YY"
    }
}) 

// 接下来在main.js文件中导入
export default store;