import httpInstance from "@/utils/http"
// 获取banner图片  distributionSite 默认值为1 是首页  2是分类页
export function getBannerAPI (params={}){
const {distributionSite = '1'} = params
  return httpInstance({
    url:'/home/banner',
    params:{
      distributionSite
    }
  })
}

// 获取新鲜好物
export function getNewAPI(){
  return httpInstance({
    url:'/home/new'
  })
}

// 获取人气推荐
export function getHotAPI(){
  return httpInstance({
    url:'/home/hot'
  })
}

// 获取全部分类
export function getGoodsAPI(){
  return httpInstance({
    url:'/home/category/head'
  })
}