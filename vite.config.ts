import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, 'src')
    }]
  },
  plugins: [vue(), Unocss(), 
    AutoImport({ // 自动解析api
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
      eslintrc: {enabled: false}, // 给eslint生成的配置，只需要一次
    }),
    Components({ // 自动解析组件
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components', 'src/layout/components'] // 组件自动加载导入
    }),],
})
