<script setup>
import { onMounted, ref, reactive } from "vue";
import ListPokemons from "../components/datapoke/ListPokemons.vue";
import { fetchWeather } from "../http/fetch";
import axios from "axios";
import { useCounterStore } from "../stores/counter";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
let pokemons = reactive(ref());
const inputTextName = ref()
const imgPokemon = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/"
);


onMounted(() => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`)
    .then(({ data }) => {
      pokemons.value = data.results;
      console.log(pokemons.value);
    });


});
function findPoke(){
  pokemons.value = pokemons.value.find((item)=> {

    return     item.name.includes(inputTextName.value)
  })
  console.log(pokemons.value, "jairo")
}

</script>

<template>
  <section class="flex-1 justify-center">
    <h1 class="text-6xl text-center font-bold text-yellow-500 mt-8 relative">
      <span class="shadow px-1 shadow-blue-600 rotate-45 text-blue-600">P</span
      >oke API
    </h1>
    <div class="justify-center flex ">
      <span class="relative">
        <input
          v-model="inputTextName"
          type="text"
          class="m-auto h-8 rounded-md mt-9 p-2 outline-none border-[0.1em] border-red-400 shadow-md shadow-red-950 bg-slate-100"
        />
        <MagnifyingGlassIcon
          class="h-5 absolute right-2 bottom-1 cursor-pointer"
          @click="findPoke"
        />
      </span>
    </div>

    <div class="grid xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 border-l-[0.8px] border-r-[0.8px] border-s-fuchsia-900  mt-8 p-4 w-full">
      <ListPokemons
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :Name="pokemon.name"
        :getImage="imgPokemon + pokemon.url.split('/')[6] + '.png'"
      />
    </div>
  </section>
</template>
