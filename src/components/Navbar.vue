<script setup>
import logo from "@/assets/logo.png";
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-gradient-to-r from-green-700 to-green-600 py-5">
    <div class="flex items-center justify-between mx-10 md:mx-20">
      <RouterLink to="/" class="flex items-center gap-3">
        <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
        <span class="hidden md:block text-white text-2xl font-bold ml-2"
          >Vue Jobs</span
        >
      </RouterLink>

      <div class="flex items-center gap-5">
        <RouterLink
          to="/"
          :class="[
            isActiveLink('/')
              ? 'bg-green-900'
              : 'hover:bg-gray-900 hover:text-white',
            'text-white',
            'px-3',
            'py-2',
            'rounded-md',
          ]"
          >Home</RouterLink
        >
        <RouterLink
          to="/jobs"
          :class="[
            isActiveLink('/jobs')
              ? 'bg-green-900'
              : 'hover:bg-gray-900 hover:text-white',
            'text-white',
            'px-3',
            'py-2',
            'rounded-md',
          ]"
          >Jobs</RouterLink
        >
        <RouterLink
          to="/jobs/add"
          :class="[
            isActiveLink('/jobs/add')
              ? 'bg-green-900'
              : 'hover:bg-gray-900 hover:text-white',
            'text-white',
            'px-3',
            'py-2',
            'rounded-md',
          ]"
          >Add Job</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
