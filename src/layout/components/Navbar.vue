<template>
  <div class="navbar">
    <hamburger @toggleCollapse="handleCollapse" :collapse="collapse"></hamburger>
    <div></div>
  </div>
</template>

<script setup>
const collapse = ref(false)
const handleCollapse = () => {
  collapse.value = !collapse.value
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply h-[var(--navbar-height)];
}
</style>
