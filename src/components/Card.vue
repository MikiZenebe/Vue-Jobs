<script setup>
defineProps({
  bg: {
    type: String,
    default: "",
  },
  cardOne: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div :class="`${bg} ${cardOne} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
