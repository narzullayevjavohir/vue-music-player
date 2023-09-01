<template>
  <div class="w-full h-screen flex justify-between items-center">
    <MusicList :musicData="musicData" />
    <MusicPlayer :musicData="musicData" />
  </div>
  <ModeBtns />
</template>

<script setup>
import MusicList from "./components/MusicList.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import ModeBtns from "./components/ModeBtns.vue";

//data json
import musicData from "./data/music-data.json";
</script>
