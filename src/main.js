import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import 'virtual:svg-icons-register'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus, {
  locale: zhCn,
})
// 引入自定义插件用于注册全局组件
import gloalComponent from '@/components/index.ts'
app.use(gloalComponent)

app.mount('#app')
