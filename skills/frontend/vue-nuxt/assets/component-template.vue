<template>
  <div class="p-4 bg-gray-50 rounded-lg shadow-md">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <p>This is a reusable Vue 3 / Nuxt 3 component template.</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<style scoped>
/* Tailwind recommended, fallback CSS here */
</style>
