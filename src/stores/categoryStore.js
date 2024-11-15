import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
import { ref } from 'vue';

export const useCategoryStore = defineStore('category', () => {
  // state 导航列表数据
  const categoryList = ref([])
  // action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    console.log(res.data)
    categoryList.value = res.data.result
  }
  return {
    categoryList,
    getCategory
  }
})
