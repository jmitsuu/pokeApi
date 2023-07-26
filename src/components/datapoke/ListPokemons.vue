<script setup>
import { toRefs, ref} from "vue"
const props = defineProps({
    Name:String,
    getImage:String,
})

</script>

<template>
  <div class="border-[0.1rem] m-4 p-2 flex justify-center" >
    <div>

        <p class="text-center">{{props.Name}}</p>
    <img :src="getImage" alt="imgPokemon" />

    </div>

  </div>
</template>
