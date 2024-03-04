// 引入全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'

// 将全局组件注册为全局对象
const allGolbalComponent = { SvgIcon }

// 对外暴露插件对象
export default {
  install(app) {
    Object.keys(allGolbalComponent).forEach((key) => {
      app.component(key, allGolbalComponent[key])
    })
  },
}
