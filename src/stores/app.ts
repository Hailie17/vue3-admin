import type { Size } from '@/plugins/element'

export const useAppStore = defineStore(
  'app',
  () => {
    // setup
    const state = reactive({
      sidebar: {
        opened: true,
      },
      size: 'default' as Size,
      // theme
    })
    // 侧边展开启状态
    const sidebar = computed(() => state.sidebar)
    const toggleSidebar = () => {
      state.sidebar.opened = !state.sidebar.opened
    }
    // 导航栏选项屏幕尺寸
    const size = computed(() => state.size)
    const setSize = (size: Size) => (state.size = size)

    return {
      state,
      sidebar,
      toggleSidebar,
      size,
      setSize,
    }
  },
  {
    persist: {
      storage: window.localStorage,
      pick: ['state.sidebar', 'state.size'],
    },
  }
)
