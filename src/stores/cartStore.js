// 购物车相关数据
import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useUserStore } from "./userStore"
import { insertCartAPI,findNewCartListAPI,delCartAPI } from "@/apis/cart"
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  // 定义 state - cartList
  const cartList = ref([])
  // 获取最新购物列表
  const updateNewList =async()=>{
    const res= await findNewCartListAPI()
    cartList.value = res.data.result
  }
  // 定义 action - addCart
  const addCart = async(goods) => {
    const {skuId,count} = goods
    if (isLogin.value) {
      // 登录后加入购物车的逻辑
      await insertCartAPI({skuId,count})
      updateNewList()
    } else {
      // 已添加 count+1
      // 没添加过push
      // console.log(goods,'0000908887777777777777');
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        // 找到了
        item.count++
      } else {
        // 没找到
        cartList.value.push(goods)
      }
    }

  }
  // 删除购物车
  const delCart =async (skuId) => {
    if(isLogin.value){
      await delCartAPI([skuId])
      updateNewList()
    }else{
    cartList.value = cartList.value.filter((item) => skuId !== item.skuId)

    }
  }
  // 清楚购物车
  const clearCart = ()=>{
    cartList.value = []
  }
  // 单选框
  const singleCheck = (skuId, selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  // 全选功能
  const allCheck = (selected) => {
    cartList.value.forEach((item) => item.selected = selected)
  }
  // 总数量 count
  const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
  // 总价  所有项的count*price之和
  const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
  // 已选择数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
  // 已选择商品的总价
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

  // 是否全选计算属性
  const isAll = computed(() => cartList.value.every((item) => item.selected))
  return {
    cartList,
    addCart,
    delCart,
    allCheck,
    selectedCount,
    selectedPrice,
    allCount,
    allPrice,
    clearCart,
    singleCheck,
    isAll,
    updateNewList

  }
},
  {
    persist: true
  })