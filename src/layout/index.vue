<template>
  <div class="app-wrapper">
    <div class="sidebar-container">侧导航栏</div>
    <div class="main-container">
      <div class="header">导航条1</div>
      <div class="tags-view">导航条2</div>
    </div>
    <div class="app-main">
      <router-view></router-view>
    </div>

  </div>
</template>
<style lang="scss" scoped>
.app-wrapper {
  @apply text-red;
}
</style>