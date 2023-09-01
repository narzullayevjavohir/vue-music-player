<script setup>
import { defineProps } from "vue";
const { musicData } = defineProps(["musicData"]);
</script>
<template>
  <ul class="w-80 h-screen shadow-xl border">
    <li
      v-for="music in musicData"
      :key="music.title"
      class="w-full flex flex-row items-center gap-3 pl-1 py-3 border-b cursor-pointer hover:scale-105 transition-transform"
    >
      <img :src="music.imgUrl" alt="music-img" class="w-12 h-12 rounded-sm" />
      <div>
        <h3>{{ music.title }}</h3>
        <p>{{ music.artist }}</p>
      </div>
    </li>
  </ul>
</template>
