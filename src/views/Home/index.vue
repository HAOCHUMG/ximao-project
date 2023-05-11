<template>
  <div>
    <Slide></Slide>
    <Adv></Adv>
    <MainFirst></MainFirst>
  </div>
</template>

<script>

import Adv from "@/views/Home/Adv/index.vue";
import MainFirst from "@/views/Home/MainFirst/index.vue";
import Slide from "@/views/Home/Slide/index.vue";

export default {
  name: "Home",
  components: {Adv, MainFirst, Slide},
};
</script>

<style>
</style>