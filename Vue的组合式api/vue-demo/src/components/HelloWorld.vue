<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <h3>{{ message }}</h3>
  <h3>{{ test }}</h3>
  <ul>
    <li v-for="{item,index} in names.list" :key="index">{{ item }}</li>
  </ul>
  <button @click="clickHandle">点击信息</button>

  <h1>{{ custom }}</h1>
  </div>
</template>

<script>
// 引入ref，reactive来进行组合式api
import {ref,reactive} from "vue"

// 引入生命周期函数和原来的不在setup里面的生命周期函数mounted一样，只是用法不一样，而且可以创建多个
import { onMounted } from "vue"

// 引用子组件接收信息的函数
import { inject } from "vue"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      message:"data里面数据"
    }
  },
  // methods:{
  //   clickHandle(){
  //     console.log("点击信息")
  //   }
  // },
  // 组合式api

  // 里面定义的属性和方法记得return出去
  setup(props,ctx){

    // 和之前的不同，这里可以创建多个生命周期函数做不同的处理
      onMounted(()=>{
        console.log("生命周期函数onMounted1")
      })

      onMounted(()=>{
        console.log("生命周期函数onMounted2")
      })

      const custom = inject("custom")


    // ctx为context的简写即上下文对象this
    console.log(ctx)
// 从这里可以看出props在setup里面变成键值对的形式和直接传递到上面的props不一样，还是需要外面的定义
    console.log(props)

    // ref创建的就是简单类型的数据
    const test = ref("我是ref测试信息")
    // reactive复杂类型使用率高
    const names = reactive({
      list:['YY','HN','LMZ'],
      score:[80,100,90]
    })
    // 将method里面的方法定义在这里面并导出
    function clickHandle(){
      console.log("点击信息")
      // 不需要this,但是要通过.value来修改
      test.value = "我是新的消息"
    }

    const msg = props.msg
    return {
      test,
      names,
      clickHandle,
      msg,
      custom

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
