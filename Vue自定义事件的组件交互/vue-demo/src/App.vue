<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
<h1>{{ testmessage }}</h1>
<!-- 利用上个组件的自定义事件来接收数据 -->
<!-- 上个组件定义了自定义事件，在父组件里面触发这个事件@onEvent来获取传递过来的值 -->
  <my-component @onEvent = "getDataHandle" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyComponent
  },
  data(){
    return{
      testmessage:"还未传递过来信息点击传递"
    }
  },
  methods:{
    // 触发事件后调用该方法来获取子组件传递过来的值
    // 传递回来的数据在参数里面data
    getDataHandle(data){
      console.log(data);
      this.testmessage = data;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
