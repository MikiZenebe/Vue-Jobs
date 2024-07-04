<script setup>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import JobListing from "@/components/JobListing.vue";
import jobsData from "@/jobs.json";
import { reactive, ref } from "vue"; //Reactive Similar to usestate

const state = reactive({
  jobs: [],
  isLoading: false,
});

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: true,
  },
});

const jobs = ref(jobsData);
</script>

<template>
  <section class="bg-[#2c2c2c] px-10 py-10">
    <div>
      <h2>Browse Jobs</h2>

      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Show job listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <span
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</span
    >
  </section>
</template>
