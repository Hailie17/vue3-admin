<script setup lang="ts">
import { useCounterStore } from "../src/stores/counter";
const store = useCounterStore()
</script>

<template>
  <RouterLink to="/home">home</RouterLink>
  <router-link to="/about">about</router-link>
  {{ store.count }}
  <button @click="store.increment">+</button>
  <router-view></router-view>
</template>

<style scoped>

</style>
