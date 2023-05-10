<template>
  <div class="hello">
   <h3>{{ message.title }}</h3>
   <p>{{ message.content }}</p>
  </div>
</template>

<script>

import api  from "../api";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      message:{}
    }
  },
  mounted(){
    api.getChengpin().then(res =>{
      console.log(res.data);
      this.message = res.data.chengpinDetails[0];
    }),

    api.getChengpin_post().then(res =>{
      console.log(res.data);
      // this.message = res.data.chengpinDetails[0];
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
