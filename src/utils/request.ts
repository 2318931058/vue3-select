// 此文件用于axios的二次封装

// 引入工具axios和element-plus
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例，可用于设置基础路径和超时时间等
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 创建请求拦截器：开始进度条、请求头携带公共参数等
request.interceptors.request.use((config) => {
  // config为配置对象，config.header为请求头，多用于给服务器端携带公共参数
  return config
})

// 创建响应拦截器：进度条结束、简化服务器返回的数据、处理http网络错误等
request.interceptors.response.use(
  (response) => {
    // 成功回调：简化数据
    return response.data
  },
  (error) => {
    // 失败回调：处理http网络错误
    let message = ''
    // http状态码
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)

// 导出
export default request
