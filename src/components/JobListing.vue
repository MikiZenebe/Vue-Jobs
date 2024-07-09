<script setup>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  job: Object,
});

const showFullDescription = ref(false);

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

const truncatedDescription = computed(() => {
  let description = props.job.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + "...";
  }
  return description;
});
</script>

<template>
  <div class="border border-green-500 rounded-xl relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-400 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-2">
        <div>{{ truncatedDescription }}</div>
        <button
          @click="toggleFullDescription"
          class="text-green-500 hover:text-green-600 mb-5"
        >
          {{ showFullDescription ? "Less" : "More" }}
        </button>
      </div>
      <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>
      <div class="border border-gray-400 mb-3"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-400 mb-3">
          <i class="pi pi-map-marker text-orange-400"></i>
          {{ job.location }}
        </div>
        <RouterLink
          :to="'/job/' + job.id"
          class="h-[36px] bg-gradient-to-r from-green-700 to-green-600 hover:bg-gradient-to-r hover:from-green-300 hover:to-green-500 transition-all duration-[300ms] ease-out text-white cursor-pointer px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
