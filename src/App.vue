<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { DefaultLayout, UploadLayout } from "./layouts";

const layoutName = computed(() => {
  const route = useRoute();
  switch (route.meta.layout) {
    case "UploadLayout":
      return UploadLayout;
    default:
      return DefaultLayout;
  }
});
</script>

<template>
  <component :is="layoutName">
    <router-view />
  </component>
</template>

<style scoped></style>
