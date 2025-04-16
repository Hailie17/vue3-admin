import { useSettingStore } from '@/stores/setting'
import { generateColors } from '@/utils/color'

export const useGenerateTheme = () => {
  // 监控主题变化，更新到store
  // 生成主题更新
  const store = useSettingStore()
  // 当前主题
  const theme = computed(() => store.settings.theme)
  // 原始主题
  const originalTheme = computed(() => store.settings.originalTheme)
  watchEffect(() => {
    if (theme.value !== originalTheme.value) {
      generateColors(theme.value)
    }
  })
}
