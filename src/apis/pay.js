import request from '@/utils/http'
export const getPayInfoAPI = (id)=>{
  return request({
    url:`/member/order/${id}`
  })
}