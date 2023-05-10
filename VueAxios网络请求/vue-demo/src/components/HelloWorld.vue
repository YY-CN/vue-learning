<template>
  <div class="hello">
    <p>{{ chengpin.title }}</p>
    <p>{{ chengpin.content }}</p>
  </div>
</template>

<script>
//先用cnpm install --save axios 在控制台安装axios
// 在局部引用则先导入，方式如下
// import axios, { Axios } from "axios";
// 再进行在组件component里面注册
// 全局引用则在main.js里面

// // 用来格式转换
// import querystring from "querystring";

export default {
  name: 'HelloWorld',
  props: {
    
  },
  data(){
    return{
        chengpin:{},
        xinxi:{}
    }
  },
  components:{
    // Axios,
  },
  methods:{

  },
  mounted(){

    // get请求方式
   this.$axios({
      method:"get",  //请求方式
      url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
   }).then(res =>{
    console.log(res.data);
    this.chengpin = res.data.chengpinDetails[0];
   });


  //  post请求方式
  this.$axios({
      method:"post",
      url:"http://iwenwiki.com/api/blueberrypai/login.php",
      data:this.$querystring.stringify({
        user_id:"iwen@qq.com",
        password:"iwen123",
        verification_code:"crfvw"
      })
  }).then(res=>{
    console.log(res.data);
    // this.xinxi = res.data.
  });


  // 快捷方法
  this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php").then(res=>{
    console.log(res.data);
  });

  this.$axios.post("http://iwenwiki.com/api/blueberrypai/login.php",this.$querystring.stringify({
        user_id:"iwen@qq.com",
        password:"iwen123",
        verification_code:"crfvw"
      })).then(res =>{
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
