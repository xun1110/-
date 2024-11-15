import { ref } from "vue";
import { defineStore } from "pinia"
import { LoginAPI } from "@/apis/user"
import { useCartStore } from "./cartStore"
import { mergeCartAPI } from "@/apis/cart"
const option={
  persist: {
    enabled: true, //Store中数据持久化生效
    storage:localStorage
  },
}
export const useUserStore = defineStore("user", () => {
  const cartStore = useCartStore()
  const userInfo = ref({})
  const getUserInfo =async ({ account, password })=>{
    const res = await LoginAPI({ account, password })
    userInfo.value = res.data.result
    // 合并购物车数据
    await mergeCartAPI(cartStore.cartList.map(item=>{
      return {
        skuId:item.skuId,
        selected:item.selected,
        count:item.count
      }
    }))
    cartStore.updateNewList()

  }
  // 用户退出
  const clearUserInfo = ()=>{
    userInfo.value = {}
    // 购物车内容清空
    cartStore.clearCart()
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},option);