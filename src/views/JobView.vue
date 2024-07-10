<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import BackButton from "@/components/BackButton.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";

//Get an id from the route
const route = useRoute();

const jobId = route.params.id;

const state = reactive({
  job: {},
  isLoading: true,
});

//onMounted is like useEffect
onMounted(async () => {
  try {
    const res = await axios.get(`/api/jobs/${jobId}`);
    state.job = res.data;

    console.log(state.job);
    //jobs.value = res.data; -- ref
  } catch (error) {
    console.log("Error fetching job", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton />

  <section class="bg-[##2C2C2C]" v-if="!state.isLoading">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="border-green-500 border p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <div class="text-gray-400 mb-4">{{ state.job.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i class="pi pi-map-marker text-xl text-orange-500 mr-2"></i>
              <p class="text-orange-500">{{ state.job.location }}</p>
            </div>
          </div>

          <div class="bg-[#242424] p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-700 text-lg font-bold mb-6">
              Job Description
            </h3>

            <p class="mb-4">
              {{ state.job.description }}
            </p>

            <h3 class="text-green-700 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">{{ state.job.salary }} / Year</p>
          </div>
        </main>

        <!-- Side bar-->
        <aside>
          <div class="bg-[#2e2e2e] p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>
            <h2 class="text-2xl">{{ state.job.company.name }}</h2>

            <p class="my-2">
              {{ state.job.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-300 text-gray-600 p-2 font-bold">
              {{ state.job.company.contactEmail }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-300 text-gray-600 p-2 font-bold">
              {{ state.job.company.contactPhone }}
            </p>
          </div>

          <!--Manage-->
          <div>
            <h3>Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${state.job.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job</RouterLink
            >
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <!-- Show loading spinner while loading is true -->
  <div v-else class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
</template>
