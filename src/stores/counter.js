import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
const dataLocation = ref() 
export const useCounterStore = defineStore('useCounterStore', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
 async function getWeatherLocation(){

  }
 
  return { count, doubleCount, increment, getWeatherLocation, dataLocation }
})
