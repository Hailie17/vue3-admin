<template>
  <div class="app-wrapper">
    <div class="sidebar-container">侧导航栏</div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">导航条1</div>
        <div class="tags-view">导航条2</div>
      </div>
      <div class="app-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-wrapper {
  @apply flex w-full h-full;
  .sidebar-container {
    @apply bg-red w-210px;
  }
  .main-container {
    @apply flex flex-col flex-1;
    .header {
      @apply h-84px;
      .navbar {
        @apply h-50px bg-yellow;
      }
      .tags-view {
        @apply h-34px bg-blue;
      }
    }
  }
  .app-main {
    @apply bg-cyan;
    min-height: calc(100vh - 84px);
  }
}
</style>