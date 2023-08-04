<script setup>
import { toRefs, ref, reactive, onMounted } from "vue";
import axios from "axios";

const pokemon = defineProps({
  name: String,
  xp: Number,
  height: Number,
  img: String,
  Stats: Array,
});
// const {Stats} = toRefs(pokemon)
const { Stats } = toRefs(pokemon);
</script>

<template>
  <div
    class="md:m-24 rounded-lg p-2 xl:h-96 md:h-2/3 sm:full sm:m-auto bg-PowderBlue xl:w-2/4 justify-center flex-col relative"
  >
    <div v-if="name" class="text-gray-900 font-semibold text-xl">
      <h1 class="absolute left-2 text-slate-600 text-md">XP: {{ xp }}</h1>
      <h1 class="absolute right-2 text-slate-600 text-md">
        Altura: {{ height }}
      </h1>
    </div>
    <div class="relative w-full">
      <img
        v-if="!name"
        src="https://img.icons8.com/?size=512&id=45507&format=png"
        :class="!name ? styleVshow : (styleVshow = 'rotate-180 transition-all')"
        class="h-44 m-auto"
      />
      <img v-else :src="img" class="h-44 m-auto" />
      <h1 class="font-bold text-xl text-center text-gray-700">
        <span v-if="!name"> ????</span> {{ name }}
      </h1>
      <hr />
    </div>

    <div
      class="grid xl:grid-cols-3 md:grid-cols-4 p-2 justify-center bg-green-500 bg-opacity-30 mt-2 rounded-md"
      v-if="name"
    >
      <section class="p-1" v-for="item in Stats" :key="item.base_stat">
        <h5 class="text-slate-950 font-semibold flex items-center">
          <span class="text-slate-600 text-sm font-bold"
            >{{ item.stat.name }}:</span
          >
          {{ item.base_stat }}
        </h5>
      </section>
    </div>
  </div>
</template>
