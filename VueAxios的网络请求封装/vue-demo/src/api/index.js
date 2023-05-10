import axios from "../utils/request";
import path from "./path";

// 请求封装
const api = {
    //网络请求方案
    // 这里仅仅是get方法的请求
    getChengpin(){
        return axios.get(path.baseUrl + path.chengpin)
    },

    getChengpin_post(){
        return axios.post(path.baseUrl + path.chengpin_post,{
            user_id:"iwen@qq.com",
            password:"iwen123",
            verification_code:"crfvw"
          })
    }
}
export default api;