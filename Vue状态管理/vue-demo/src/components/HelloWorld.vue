<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>counter :{{ $store.state.counter }}</p>
    <p>counter:{{ counter }}</p>
    <p>name:{{ name }}</p>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // vuex的快捷读取数据的方式,在store的index.js里面
  // vuex中的mapState专门用来读取vuex的数据，配置完成后只需要使用名称counter就可以读取，不需要$store.state.counter
  computed:{
    ...mapState(["counter","name"])
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
