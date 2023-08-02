<script setup>
import { toRefs, ref, reactive, onMounted } from "vue";
import axios from "axios"
import {usePokemon} from "../../stores/pokeball"
import { MagnifyingGlassIcon, ArrowUpIcon  } from "@heroicons/vue/24/outline";
const props = defineProps({
  Name: String,
  getImage: String,
  pokeInfo:String,
  items:Array,

});
const { pokeInfo, types } = toRefs(props);
const store = usePokemon()
let pokeExp = reactive(ref());
let pokeDetails = reactive(ref())
const dataPokeBall = ref([])
const bgColor = ref();
const pokeStats = reactive(ref())
//mounted
// onMounted(()=>{

// async function getInfos(){
// const {data} = await axios.get(pokeInfo.value);
// await store.getStats(data)
// pokeExp.value = data.base_experience
// const typeName =  data.types.map(item =>{
//    return  item.type
// })
// pokeDetails.value = typeName
// }getInfos()

// })



</script>

<template>
  <div
    class="border-[0.1rem] m-4 py-2 h-40  flex justify-center rounded-lg shadow-lg shadow-white bg-gradient-to-bl from-indigo-500 via-black to-yellow-500  cursor-pointer"
  >

    <div class="relative w-full  ">
      <p class="text-center text-gray-200 font-semibold text-xl  ">{{ Name }}</p>
      <img :src="getImage" class="h-28 w-28 scale-95  m-auto hover:scale-100 transition duration-200" alt="imgPokemon" />
      <div class="flex justify-center" @click="getDetails">
        <!-- <div v-for="Skills in pokeDetails" :key="Skills.name"    class="px-4 mt-4 rounded-md mx-4  border-[0.2px] text-white  ">
        
        <div class="text-[0.8rem] p-2 font-bold"  >{{Skills.name}}</div>
    
        </div> -->
      </div>
<!-- 
      <img src="https://img.icons8.com/?size=512&id=45674&format=png" @click="store.incrementPokeboll(items, getImage)" class="h-10 mt-4 m-auto  hover:animate-spin transition-all"/> -->
    </div>
  </div>
</template>
