// 设置用户主题、颜色、配置
import variables from '@/style/variables.module.scss'
export const useSettingStore = defineStore(
  'setting',
  () => {
    // variables
    // 选择一个颜色 现在正在用的颜色
    const settings = reactive({
      theme: variables.theme,
      originalTheme: '',
      t: true,
      tagsView: false,
    })
    type ISetting = typeof settings
    const changeSetting = <T extends keyof ISetting>({ key, value }: { key: T; value: ISetting[T] }) => {
      settings[key] = value
    }
    return { changeSetting, settings }
  },
  {
    // 持久化保存
    persist: {
      storage: sessionStorage,
      pick: ['settings.theme'],
    },
  }
)
