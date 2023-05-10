<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// 引用provide来向子组件传递信息，并且只能写在setup中
// 可以向子组件的子组件传递，即后面的组件都可以接收，使用inject就可以接收，但是只能自上向下传递
import { provide } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    // 以键值对的形式来传递。子组件用健名来接收
    provide("custom","我是父组件向子组件传递的信息")
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
