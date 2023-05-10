<template>
    <h3>组件的生命周期</h3>
    <h1>{{ message }}</h1>
    <button v-on:click="message = '数据'">click </button>
</template>

<script>
    export default{
        name:'MyComponent',
        props:{
            message:""
        },
        data(){
            return {
                
            }
        },

        // 自己的函数写在methods里面 
        methods:{

        },


        // 内置函数vue内置
        beforeCreate(){
            console.log("beforeCreate：组件创建之前");
        },
        created(){
            console.log("created:组件创建完成");
        },
        beforeMount(){
            console.log("beforeMount：组件渲染之前");
        },
        mounted(){
            console.log("mounted：组件渲染完成");
            // 可能把网络请求放在这里，即组件已经渲染完成，但是没有请求数据
        },
        beforeUpdate(){
            console.log("before:组件更新之前");
        },
        updated(){
            console.log("updated:组件更新完成");
        },
        beforeUnmount(){
            console.log("beforeUNmount:组件卸载之前");
            // 卸载之前，把消耗性能的处理都去除（清理）
        },
        unmounted(){
            console.log("unmounted:组件卸载完成");
        }




    }

</script>