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
const limit = ref(100);
const imgPokemon = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/"
);
async function getPoke() {
  limit.value = limit.value + 100;

  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit.value}&offset=0`
  );
  pokemons.value = data.results;
  reloadPokemons.value = data.results;
}

onMounted(() => {
  getPoke();
});

async function getMorePoke() {
  limit.value = limit.value + 200;
  console.log(limit.value);
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit.value}&offset=0`
  );
  const newItems = data.results;
  reloadPokemons.value = pokemons.value.concat(newItems);
}

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
  scrollToPokemon();
};
function scrollToPokemon() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// window.addEventListener('scroll', logScroll)
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
          class="grid relative xl:grid-cols-4 sm:grid-cols-3 grid-cols-1 overflow-y-scroll h-screen bg-PowderBlue bg-opacity-40 p-2"
        >
          <ListPokemons
            v-for="pokemon in pokemonFiltered"
            :key="pokemon.name"
            :Name="pokemon.name"
            :getImage="imgPokemon + pokemon.url.split('/')[6] + '.png'"
            @click="selectPokemon(pokemon)"
            :Pokemons="pokemon"
          />
          <svg
            v-if="!pokemonFiltered"
            aria-hidden="true"
            class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        <button
          class="px-8 py-3 rounded-md text-2xl uppercase w-full font-semibold text-gray-600 bg-blue-300 hover:bg-blue-500 transition-all p-2 m-2"
          @click="getPoke"
        >
          <span v-if="!reloadPokemons">Carregando..</span> Load
        </button>
      </div>
    </div>
  </section>
</template>
