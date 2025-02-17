import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
  //vue3 的 set up 函数
  const count = ref(0) //共享状态
  const increment = () => { //共享方法
    count.value++
  }

  return {count, increment}
})