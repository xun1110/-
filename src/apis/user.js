// 封装所有与用户有关的接口
import request from '@/utils/http'
export const LoginAPI = ({account,password}) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  }
)}
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}