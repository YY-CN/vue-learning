<template>
    <h3>
        自定义传递数据
    </h3>
   <button @click="sendClick">点击传递</button>
    
    
    </template>
    
    <script>
        export default{

            // 本组件名称
            name:"MyComponent",

            // 为父组件传递过来的值
            props:{
                
                
            },


            // data中为页面中要使用(显示)的数据
            data(){
                return{
                    message:"我是点击事件的MyComponent传递"
                }
            },

            // 本组件要是用的方法
            methods:{
                sendClick(){
                    // 参数1 “onEvent”：字符串，为传递的数据的自定义事件名（需要具有意义）onEvent是一个事件
                    // 参数2 “传递的数据”   即需要传递过去的数据作为键值
                    this.$emit("onEvent",this.message);
                }
            }
        }
    
    </script>
    <style scoped>
    h3{
        color: aquamarine;
    }
    </style>