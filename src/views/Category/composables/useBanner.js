import { ref,onMounted } from "vue"
import { getBannerAPI } from "@/apis/home"
// 封装轮播图banner数据
export function useBanner() {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: '2'
    })
    // console.log(res);
    bannerList.value = res.data.result
    console.log(bannerList.value);

  }
  onMounted(() => getBanner())
  return {
    bannerList
  }
}
