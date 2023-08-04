<script setup>
import { onMounted, ref, reactive, computed } from "vue";
import ListPokemons from "../components/datapoke/ListPokemons.vue";
import ListPokeCard from "../components/datapoke/ListPokeCard.vue";

import axios from "axios";
const pokemons = reactive(ref());
const reloadPokemons = reactive(ref());
const inputTextName = ref();
const pokemonSelected = ref();
const pokeImgSelected = ref();
const imgPokemon = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/"
);
onMounted(() => {
  async function getPoke() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`
    );
    pokemons.value = data.results;
    reloadPokemons.value = data.results;
  }
  getPoke();
});

const pokemonFiltered = computed(() => {
  if (pokemons.value && inputTextName.value) {
    pokemons.value = pokemons.value.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(inputTextName.value.toLowerCase());
    });
  } else {
    pokemons.value = reloadPokemons.value;
  }
  return pokemons.value;
});
const selectPokemon = async (poke) => {
  const { data } = await axios.get(poke.url);
  pokemonSelected.value = data;
  pokeImgSelected.value = poke.url; 
};
</script>

<template>
  <section class="flex-1 justify-center">
    <h1 class="text-6xl text-center font-bold text-yellow-500 mt-8 relative">
      <span class="shadow px-1 shadow-blue-600 rotate-45 text-blue-600">P</span
      >oke API
    </h1>
    <div class="justify-center flex items-center"></div>

    <div class="grid xl:grid-cols-2 md:grid-cols-1 m-1 rounded-md mt-8">
      <ListPokeCard
        :name="pokemonSelected?.name"
        :xp="pokemonSelected?.base_experience"
        :height="pokemonSelected?.height"
        :img="
          pokeImgSelected
            ? imgPokemon + pokeImgSelected.split('/')[6] + '.png'
            : ''
        "
        :Stats="pokemonSelected?.stats"
      />
      <div class="border-[0.8px] border-gray-300 m-1 rounded-md p-4 mt-8">
        <span class="relative">
          <label hidden></label>
          <input
            v-model="inputTextName"
            type="text"
            class="m-auto mb-6 border-0 h-10 rounded-md mt-9 p-2 outline-none text-xl bg-slate-100"
            placeholder="Pesquisar..."
          />
        </span>

        <div
          class="flex flex-wrap items-center justify-center overflow-y-scroll h-screen bg-PowderBlue bg-opacity-40 p-2"
        >
          <ListPokemons
            v-for="pokemon in pokemonFiltered"
            :key="pokemon.name"
            :Name="pokemon.name"
            :getImage="imgPokemon + pokemon.url.split('/')[6] + '.png'"
            @click="selectPokemon(pokemon)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
