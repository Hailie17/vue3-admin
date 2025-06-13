<template>
  <div class="side-logo-container" :class="{ collapse }">
    <router-link to="/">
      <img :src="logo" alt="" />
    </router-link>
  </div>
  <h1 v-if="!collapse">Vue Admin</h1>
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
