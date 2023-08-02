import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
const dataExp = reactive(ref());
const pokeStats = reactive(ref())
const bagPokeBall = ref([])
export const usePokemon = defineStore('usePokemon', () => {
function incrementPokeboll(item, img){
}

 
  
  return { incrementPokeboll, }
})
