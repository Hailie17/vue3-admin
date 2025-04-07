<template>
  <svg-icon
    @click="handleClick"
    custom-class="w-2em h-2em"
    :icon-name="isFullScreen ? 'ant-design:fullscreen-exit-outlined' : 'ant-design:fullscreen-outlined'"
  ></svg-icon>
</template>
<script lang="ts" setup>
const isFullScreen = ref(false)
function handleClick() {
  isFullScreen.value = !isFullScreen.value
}
</script>
