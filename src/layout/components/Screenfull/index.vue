<template>
  <svg-icon
    @click="handleClick"
    custom-class="w-2em h-2em"
    :icon-name="isFullScreen ? 'ant-design:fullscreen-exit-outlined' : 'ant-design:fullscreen-outlined'"
  ></svg-icon>
</template>
<script lang="ts" setup>
import screenfull from 'screenfull'
const isFullScreen = ref(false)
const { proxy } = getCurrentInstance()!

function handleClick() {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  } else {
    proxy!.$message('浏览器不支持全屏')
  }
}

function updateFullscreenStatus() {
  // 看是否全屏，全屏就切换状态

  isFullScreen.value = screenfull.isFullscreen
}

onMounted(() => {
  if (screenfull.isEnabled) {
    screenfull.on('change', updateFullscreenStatus)
  }
})

// 卸载
onBeforeUnmount(() => {
  if (screenfull.isEnabled) {
    screenfull.off('change', updateFullscreenStatus)
  }
})
</script>
