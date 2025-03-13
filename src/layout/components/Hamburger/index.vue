<template>
  <div class="hamburger-container">
    <svg-icon icon-name="ant-design:bars-outlined" custom-class="hamburger"></svg-icon>
  </div>
</template>

<style lang="scss" scoped>
.hamburger-container {
  @apply leading-[50px] float-left cursor-pointer px-10px hover:(bg-black/5);
}
.hamburger {
  @apply h-30px w-30px;
}
</style>