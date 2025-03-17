export const useAppStore = defineStore('app', () => {
  // setup
  const state = reactive({
    sidebar: {
      opened: true,
    },
    // theme
  })
  const sidebar = computed(() => state.sidebar)
  const toggleSidebar = () => {
    state.sidebar.opened = !state.sidebar.opened
  }

  return {
    sidebar,
    toggleSidebar,
  }
})
