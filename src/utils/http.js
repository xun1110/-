import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
// axios的基础封装
import axios from "axios"
const httpInstance = axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:10000
})

// 拦截器

// 添加请求拦截器
httpInstance.interceptors.request.use(config =>{
  const useStore = useUserStore()
  // 获取token数据
  const token = useStore.userInfo.token
  // 在请求头拼接token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
} ,e=>Promise.reject(e));

// 添加响应拦截器
httpInstance.interceptors.response.use(res=>res,e=>{
  const useStore = useUserStore()

  // 统一错误提示
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  // 401 token失效问题
  // 1.清楚本地用户
  useStore.clearUserInfo()
  // 2.跳转到登录页
  router.push('/login')
  return Promise.reject(e);
});

export default httpInstance