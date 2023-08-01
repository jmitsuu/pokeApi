import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
const dataExp = reactive(ref());
const pokeStats = reactive(ref())
const bagPokeBall = ref([])
export const usePokemon = defineStore('usePokemon', () => {
function incrementPokeboll(item, img){

  const findItem = bagPokeBall.value.findIndex(id => id.name === item.name)
  if(findItem >=0 )return;
  bagPokeBall.value.push(item);
  console.log(bagPokeBall.value, img)
  localStorage.setItem('dataPoke', JSON.stringify(bagPokeBall.value))
}
  async function getStats(info){

  // dataExp.value = info
  // console.log(dataExp.value)

}
 
  
  return { incrementPokeboll, dataExp, getStats  }
})
