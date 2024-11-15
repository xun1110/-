import httpInstance from "@/utils/http"

// 首页：获取全部分类
export function getCategoryAPI(){
  return httpInstance({
    url:'/home/category/head'
  })
}