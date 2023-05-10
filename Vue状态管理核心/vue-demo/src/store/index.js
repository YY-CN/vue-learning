import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 10
  },
  // getters:用于数据过滤
  getters: {
    getCounter(state) {
      return state.counter > 0 ? state.counter : "counter数据异常"
    }
  },
  // mutations被调用则调用里面的方法，实现在外面更改数据
  mutations:{
    addCounter(state,num){

      // 调用这个方法后，所有的counter被使用的组件的counter值会同步变化
      state.counter+=num
    }
  },

  // 有异步操作的时候使用
  actions:{
    // 需要修改的数据可能是来源于网络请求来的
    asyncAddCounter({ commit }){
      axios.get("http://iwenwiki.com/api/generator/list.php").then(res =>{
        // 将res.data[0]请求来的参数传递给mutation
        commit("addCounter",res.data[0])
      })
    }
  }
})
