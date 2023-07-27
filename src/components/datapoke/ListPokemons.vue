<script setup>
import { toRefs, ref } from "vue";
const props = defineProps({
  Name: String,
  getImage: String,
});
const { Name } = toRefs(props);
</script>

<template>
  <div
    class="border-[0.1rem] m-4 p-2 flex justify-center rounded-lg bg-blue-800 bg-opacity-50 hover:bg-opacity-30 cursor-pointer"
  >

    <div>
      <p class="text-center text-gray-200 font-semibold text-2xl ">{{ Name }}</p>
      <img :src="getImage" class="h-52 hover:rotate-12" alt="imgPokemon" />
    </div>
  </div>
</template>
