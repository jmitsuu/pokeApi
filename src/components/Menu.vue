<script setup>
import { toRefs } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

const props = defineProps({
  msg: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: false
  }
})
const { text } = toRefs(props)
const routes = [
  {
    route: '/',
    title: 'Home'
  },
  // {
  //   route: '/about',
  //   title: 'About'
  // }
]
</script>
<template>
  <section class="flex-1   ">
    <header class="h-10 p-6 w-full items-center justify-end  flex  bg-black">
      <nav class="  m-2" v-for="item in routes" :key="item.title">
        <RouterLink :to="item.route" class="  text-white hover:border-b-2 p-2">{{ item.title }}</RouterLink>
      </nav>

    </header>
    <RouterView    />

  </section>
</template>

<style scoped>

</style>
