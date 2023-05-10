const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({


  // 跨域配置在前端用proxy进行配置
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{

        // 跨域配置的前面只需要有协议，域名，端口就行，端口默认为80
        target:'http://iwenwiki.com',
        changeOrigin:true
      }
    }
  }



})
