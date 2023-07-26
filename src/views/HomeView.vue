
<script setup>
import { onMounted, ref, reactive } from "vue";
import ListPokemons from "../components/datapoke/ListPokemons.vue"
import { fetchWeather } from "../http/fetch";
import axios from "axios";
import { useCounterStore } from "../stores/counter";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
let pokemons = reactive(ref());
const imgPokemon = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/")
onMounted(() => {

axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`)
 .then(({data}) => { 
  pokemons.value = data.results
  console.log(pokemons)
 })

});
</script>


<template>

  <section class="  ">
    <h1 class ="text-6xl text-white"> Poke API</h1>
    <div class="grid grid-cols-4" >
      <ListPokemons 
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      :Name="pokemon.name"
      :getImage="imgPokemon + pokemon.url.split('/')[6]+'.png'"
      />


    </div>
   
</section>
</template>

