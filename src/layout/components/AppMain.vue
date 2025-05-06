<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <keep-alive>
        <component :is="Component" :key="$route.path"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  @apply transition-all duration-500 pos-absolute;
}
.fade-enter-from {
  @apply opacity: 0 translate-x-[50px];
}
.fade-enter-to {
  @apply opacity: 0 translate-x-[-50px];
}
</style>
