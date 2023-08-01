<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import ListPokemons from "../components/datapoke/ListPokemons.vue";
import { fetchWeather } from "../http/fetch";
import axios from "axios";

import { MagnifyingGlassIcon, XCircleIcon  } from "@heroicons/vue/24/outline";
let pokemons = reactive(ref());
const reloadPokemons = reactive(ref());
let infoPokemons = reactive(ref());
const base = ref();
const buttonSearch =ref(false);
let inputTextName = ref();

const imgPokemon = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/"
);
const baseInfoUrl = ref("https://pokeapi.co/api/v2/pokemon/")
onMounted(() => {
async function getPoke(){
  const {data} = await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
      pokemons.value = data.results;
      reloadPokemons.value = data.results;
}getPoke()

});

const pokemonFiltered = computed(()=>{
if(pokemons.value && inputTextName.value){
 pokemons.value = pokemons.value.filter((item)=> {
  return  item.name.toLowerCase().includes(inputTextName.value.toLowerCase())
  })
}else{
  pokemons.value = reloadPokemons.value
}
return pokemons.value
})


</script>

<template>
  <section class="flex-1 justify-center">
    <h1 class="text-6xl text-center font-bold text-yellow-500 mt-8 relative">
      <span class="shadow px-1 shadow-blue-600 rotate-45 text-blue-600">P</span
      >oke API
    </h1>
    <div class="justify-center flex items-center ">
    
    </div>

    <div class="float-right border-[0.8px] border-gray-300 m-1 rounded-md p-4  mt-8 w-2/6  ">
      <span class="relative">
        <label hidden></label>
        <input
          v-model="inputTextName"
          type="text"
          class="m-auto h-10 rounded-md mt-9 w-full p-2 outline-none border-[0.1em] border-blue-400 shadow-lg shadow-yellow-950 bg-slate-100"
          placeholder="Pesquisar..."
        />
        <!-- <MagnifyingGlassIcon
          v-if="!buttonSearch"
          class="h-5 absolute right-2 bottom-1 cursor-pointer"
          @click="findPoke"
        /> 
        <XCircleIcon v-if="buttonSearch" @click="callApi"  class="h-6 absolute right-2 bottom-1 cursor-pointer"/> -->
      </span>
  
      <div class="grid xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-4  w-2/5xl   ">
        
      <ListPokemons
        v-for="pokemon in pokemonFiltered"
        :key="pokemon.name"
        :Name="pokemon.name"
        :getImage="imgPokemon + pokemon.url.split('/')[6] + '.png'"
        :pokeInfo="pokemon.url"
        :items="pokemon"
      />
  
    </div>

    </div>

 
  </section>
</template>
