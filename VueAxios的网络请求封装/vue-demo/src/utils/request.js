import axios from 'axios'
import querystring from 'querystring'


// 请求的各种错误response

const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}

const instance = axios.create({
    // 网络请求的配置写在这里
    timeout: 5000
})


// 拦截器最为常用
// ①发送数据之前的拦截器
instance.interceptors.request.use(
    config => {    //config包含网络的请求信息

        // 将post请求是的数据转换放在这里
        // 即post请求时将参数用querystring进行转换
        if (config.method === "post") {
            config.data = querystring.stringify(config.data)
        }
        return config;
    },
    error => {  //失败的情况返回信息
        return Promise.reject(error)    //将失败的信息返回
    }
)


// ②获取数据之前的拦截器

instance.interceptors.response.use(
    response => {
        // 网络是请求成功
        // 若是状态码200，则返回请成功数据Promise.resolve(response) 否则返回失败数据Promise.reject(response)
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
    },

    // 代表发送过程就出错了,这才是我们应该关注的
    error => {
        const { response } = error;
        errorHandle(response.status,response.info)
    }
)

export default instance;