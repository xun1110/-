// 对components里的组件进行全局化注册
// 使用插件形式
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
  install(app){
     // app.component('组件名',组件对象)
     app.component('XtxImageView',ImageView)
     app.component('XtxISku',Sku)
  }
}