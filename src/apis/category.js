import request from '@/utils/http'
// 获取二级分类列表
export const getCategoryAPI = (id)=>{
  return request({
    url:'/category',
    params:{
      id
    }
  })
}

// 获取二级路由
export const getCategoryFilterAPI = (id) => {
  return request({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}

export const getSubCategoryAPI = (data) => {
  return request({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}