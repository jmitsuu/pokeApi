<script setup>
import { toRefs, ref, reactive, onMounted } from "vue";
import axios from "axios"
import { MagnifyingGlassIcon, ArrowUpIcon  } from "@heroicons/vue/24/outline";
const props = defineProps({
  Name: String,
  getImage: String,
  pokeInfo:String,

});

const { pokeInfo, types } = toRefs(props);
let pokeExp = reactive(ref());
let pokeDetails = reactive(ref())
const bgColor = ref()
//mounted
onMounted(()=>{
async function getInfos(){
const {data} = await axios.get(pokeInfo.value);
pokeExp.value = data.base_experience
const typeName =  data.types.map(item =>{
   return  item.type
})
pokeDetails.value = typeName

}getInfos()
})
</script>

<template>
  <div
    class="border-[0.1rem] m-4 py-2  flex justify-center rounded-lg bg-blue-800 bg-opacity-50 hover:bg-opacity-30 cursor-pointer"
  >

    <div class="relative ">
      <p class="text-center text-gray-200 font-semibold text-2xl  ">{{ Name }}</p>
      <div class=" text-gray-100 text-[0.8rem] right-0 top-0 absolute  flex items-center "><ArrowUpIcon class="h-6"/> {{pokeExp}}</div>
      <img :src="getImage" class="h-52 scale-95 hover:scale-100 transition duration-200" alt="imgPokemon" />
      <div class="flex justify-center">
        <div v-for="Skills in pokeDetails" :key="Skills.name"    class="px-4 mt-4 rounded-md mx-4  border-[0.2px] text-white  ">
        
        <div class="text-[0.8rem] p-2 font-bold"  >{{Skills.name}}</div>
    
        </div>
      </div>

    </div>
  </div>
</template>
