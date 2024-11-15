import { ref,onUpdated } from "vue"
import { useRoute } from "vue-router"
import { getCategoryAPI } from "@/apis/category"
import { onBeforeRouteUpdate } from "vue-router"
// 封装分类数据
export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    // console.log(res.data, '111111111111111');
    categoryData.value = res.data.result

  }
  onUpdated(() => getCategory())
  // 分类传参
  onBeforeRouteUpdate((to) => {
    // console.log('路由变化了');
    // console.log(to);\
    getCategory(to.params.id)


  })
  return {
  categoryData
  }
}