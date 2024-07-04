<script script>
import Navbar from "./components/Navbar.vue";
import HomeView from "./views/HomeView.vue";

export default {
  components: {
    Navbar,
    HomeView,
  },
};
</script>

<template>
  <div class="mx-auto">
    <Navbar />
    <HomeView />
  </div>
</template>
