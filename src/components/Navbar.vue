<script setup>
import logo from "@/assets/logo.png";
</script>

<template>
  <nav class="bg-gradient-to-r from-green-700 to-green-600 py-5">
    <div class="flex items-center justify-between mx-10 md:mx-20">
      <div class="flex items-center gap-3">
        <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
        <p class="text-xl font-bold">Vue Jobs</p>
      </div>

      <div class="flex items-center gap-5">
        <p>Home</p>
        <p>Jobs</p>
        <p>Add Job</p>
      </div>
    </div>
  </nav>
</template>
