<template>
  <div class="app-main">
    <router-view v-slot="component">
      <keep-alive>
        <component :is="component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>
<style lang="scss">
.app-main {
  @apply bg-cyan;
  min-height: calc(100vh - var(--tagsview-height) - var(--navbar-height));
}
</style>
