<script setup>
import { toRefs, ref, reactive, onMounted } from "vue";
import axios from "axios"
const pokemon = defineProps({
  name:String,
  xp:Number,
  height:Number,
  img:String
})
const styleVshow = ref('rotate-180 transition-all ')
</script>

<template>


  <div class="m-24 rounded-lg h-80 bg-red-400  backdrop-hue-rotate-180  " >
    <img v-if="!name" src="https://img.icons8.com/?size=512&id=45507&format=png" :class="!name?  styleVshow : styleVshow = 'rotate-180 transition-all'" class="h-44 m-auto" />
    <img v-else :src="img" class="h-44 m-auto   " />
    <h1 class="font-bold text-xl text-center"><span v-if="!name"> ????</span> {{ name }}</h1>
    <hr>

    <div class="grid grid-cols-2" v-if="name">
      <section>
        <h1 >XP: {{ xp }}</h1>
      </section>
      <section>
        <h1>Altura: {{ height }}</h1>
      </section>

    </div>

</div>
 </template>
