<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
  <main class="absolute w-full">
    <Menu />
    <section
      class="flex bg-gradient-to-r from-LightCyan from-15% to-LightCyan to-90%"
    >
      <RouterView />
    </section>
  </main>
</template>
<style></style>
