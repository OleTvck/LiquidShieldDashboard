<template>
  <main>
    <h5 v-for="rt in store.resultTotals" :key="rt">{{ rt }}</h5>
  </main>
</template>

<script>
import { useStore } from '../store/cveStore';

export default {
  data() {
    return {
      store: useStore(),
    };
  },
};
</script>

<style></style>
