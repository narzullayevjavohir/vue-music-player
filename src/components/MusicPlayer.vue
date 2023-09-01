<script setup>
// import { defineProps } from "vue";
// const { musicData } = defineProps(["musicData"]);
</script>

<template>
  <div
    class="w-96 h-[500px] rounded-xl shadow-xl border flex justify-center items-center flex-col gap-y-5 mr-32"
  >
    <h1 class="text-2xl mb-3 tracking-wide uppercase font-semibold">
      Music Player
    </h1>
    <img
      src="https://chillhop.com/wp-content/uploads/2023/01/dddab0f5dcf8d0cc3e6276b6d8bff791795a2499-1024x1024.jpg"
      alt="music-photo"
      class="w-48 h-48 rounded-full"
    />
    <div class="flex flex-col gap-y-2">
      <h2 class="text-xl font-bold">Passing Storm</h2>
      <p class="text-sm">Thomas Prime, Moderator</p>
    </div>
    <div class="flex flex-row items-center gap-x-2">
      <span>00:00</span>
      <input type="range" />
      <audio src="hello" class="opacity-0 absolute"></audio>
      <span>2:18</span>
    </div>
    <div class="flex justify-around items-center w-full mt-3">
      <span class="cursor-pointer"><font-awesome-icon icon="retweet" /></span>
      <div class="flex flex-row items-center gap-12">
        <span class="cursor-pointer"
          ><font-awesome-icon icon="angle-left" size="xl"
        /></span>
        <button><font-awesome-icon icon="play" size="2xl" /></button>
        <span class="cursor-pointer"
          ><font-awesome-icon icon="angle-right" size="xl"
        /></span>
      </div>
      <span class="cursor-pointer">
        <font-awesome-icon icon="list" />
      </span>
    </div>
  </div>
</template>
