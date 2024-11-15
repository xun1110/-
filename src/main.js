
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 引入懒加载插件
import { lazyPlugin } from './directives/index'
// 引入全局组件
import {componentPlugin} from '@/components/index'
// 引入初始化样式文件
import '@/styles/common.scss'
//  引入pinia
import pinia from '@/stores/index'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

