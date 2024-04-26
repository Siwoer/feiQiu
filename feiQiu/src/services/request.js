import axios from 'axios'
const baseURL = '/api'
const instance = axios.create({
    baseURL,
    timeout:5000, // 设置请求超时时间
});
// 统一处理请求错误
instance.interceptors.response.use(
    response =>{
        return response.data
    },
    error =>{
        console.error('Request error:',error);
        return Promise.reject(error)
    }
)
export default instance