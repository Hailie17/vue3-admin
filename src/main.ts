import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'uno.css'
import 'normalize.css/normalize.css'
import '@/style/index.scss'
import element from './plugins/element'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState) // 安装pinia持久化插件

createApp(App).use(router).use(pinia).use(ElementPlus).use(element).mount('#app')
// 0000
