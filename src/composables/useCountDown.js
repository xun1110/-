import { computed, onUnmounted, ref } from "vue"
import dayjs from "dayjs"

// 封装倒计时逻辑函数
export const useCountDown = ()=> {
  let timer = null
  // 1.响应式的数据
  const time = ref(0)
  // 格式化时间 xx分xx秒
  const formatTime = computed(()=> dayjs.unix(time.value).format('mm分ss秒'))
  // 2.开启倒计时函数
  const start = (currentTime)=>{
    // 开启倒计时逻辑
    time.value = currentTime
    setInterval(() => {
      time.value--
    }, 1000);
  }
  // 组件销毁时清楚定时器
  onUnmounted(()=> {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}