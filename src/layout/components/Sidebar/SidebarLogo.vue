<template>
  <div class="side-logo-container" :class="{ collapse }">
    <transition name="logo-fade">
      <router-link to="/" :key="collapse ? 'a' : 'b'">
        <img :src="logo" alt="" />
      </router-link>
    </transition>
  </div>
  <h1 class="side-logo-title" v-if="!collapse">Vue Admin</h1>
</template>

<script lang="ts" setup>
import logo from '@/assets/vue.svg'

defineProps({
  collapse: {
    type: Boolean,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.side-logo-container {
  @apply w-full h-60px lead-60px flex items-center justify-center;
}
.side-logo-title {
  @apply inline-block text-20px text-white;
}
.logo-fade-enter-from,
.logo-fade-leave-to {
  @apply opacity: 0;
}
.logo-fade-enter-active {
  @apply transition-opacity duration-150;
}
</style>
