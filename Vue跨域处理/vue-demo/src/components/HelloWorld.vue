<template>
  <div class="hello">
    
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  component:{
    axios
  },


  // 跨域处理在vue.config.js里面进行处理
  mounted(){
    axios.get("/api/FingerUnion/list.php").then(res =>{
      console.log(res.data);
    })
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
