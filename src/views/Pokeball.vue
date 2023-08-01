<script setup>
import {ref, reactive, onMounted} from "vue";
import {usePokemon} from "../stores/pokeball"
const store = usePokemon();


</script>

<template>
  <section class="flex justify-center items-center">
    <div class="">
    <h1 class="text-6xl text-center font-bold text-red-500 mt-8 relative ">Poke Bola</h1>
    <div class=" flex justify-between mt-36  h-full border-2 border-white text-white">
    <div>
      <h1>Nome</h1>
    </div>
    <div>
      <h1>Habildades</h1>
    </div>

    </div>
  </div>
  </section>
 
</template>

