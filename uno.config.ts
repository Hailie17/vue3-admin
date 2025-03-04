import { defineConfig } from 'unocss'
import  presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'
import presetIcons from '@unocss/preset-icons'
// unocss图标会预设查找依赖的图标库
// ant-design
export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetIcons()],
  transformers: [transformerDirectives()] // apply类似写法
})