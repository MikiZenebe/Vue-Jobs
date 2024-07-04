<script setup>
import Card from "../components/Card.vue";
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card
          cardOne="border border-green-500  transition-all duration-[300ms] ease-out"
        >
          <h2 class="text-2xl font-bold">For Developers</h2>
          <p class="mt-2 mb-4">
            Browse our Vue jobs and start your career today
          </p>

          <span
            class="inline-block bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg px-4 py-2 hover:bg-gray-700 cursor-pointer transition-all duration-[300ms] ease-out"
          >
            Browse Jobs
          </span>
        </Card>

        <Card
          bg="bg-gradient-to-r from-green-700 to-green-600 hover:bg-[#2c2c2c] transition-all duration-[300ms] ease-out"
        >
          <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>

          <span
            class="inline-block bg-[#2c2c2c] text-white rounded-lg px-4 py-2 hover:bg-green-600 cursor-pointer transition-all duration-[300ms] ease-out"
            >Add Job</span
          >
        </Card>
      </div>
    </div>
  </section>
</template>
