<script setup>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import JobListing from "@/components/JobListing.vue";
import { reactive, ref, onMounted } from "vue"; //Reactive Similar to usestate
import { RouterLink } from "vue-router";
import axios from "axios";

const state = reactive({
  jobs: [],
  isLoading: true,
});

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: true,
  },
});

//const jobs = ref([])

//onMounted is like useEffect
onMounted(async () => {
  try {
    const res = await axios.get("http://localhost:5000/jobs");
    state.jobs = res.data;

    //jobs.value = res.data; -- ref
  } catch (error) {
    console.log("Error fetching jobs", error);
  } finally {
    state.isLoading = false;
  }
});

//Note
/* ref - has a .value property for reassigning but reactive() doesn't use .values */
</script>

<template>
  <section class="bg-[#2c2c2c] px-10 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>

      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Show job listing when done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
