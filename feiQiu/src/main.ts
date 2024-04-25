
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // element plus 样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //element plus 图标
import App from './App.vue'
import router from './router'

const app = createApp(App)
// element plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(createPinia()) // 挂载全局 pinia
app.use(router)  // 挂载路由
app.use(ElementPlus).mount('#app') // 将Element plus 挂载到app上
