import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 图片懒加载逻辑
    app.directive('img-lazy', {
      // el 指令绑定的元素 img
      // binding binding.value 指令等于号后面绑定的表达式的值
      mounted(el, binding,) {
        // console.log(el, binding.value);
        useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            // console.log(isIntersecting);
            if (isIntersecting) {
              // 图片进入视口区
              el.src = binding.value
            }
          },
        )

      },
    })
  }
}