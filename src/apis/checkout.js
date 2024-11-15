// 封装订单相关数据
import request from '@/utils/http'
// 获取订单详情
export const getCheckOutInfoAPI = ()=> {
  return request({
    url:'/member/order/pre'
  })
}
// 创建订单
export const createOrderAPI = (data)=> {
  return request({
    url:'/member/order',
    method:'POST',
    data
  })
}