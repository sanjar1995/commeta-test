<template>
  <AppHeader />
  <AppSearch />
  <AppTarriffList />
  <main>
    <Chart />
  </main>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppSearch from "@/components/AppSearch.vue";
import AppTarriffList from "@/components/AppTariffList.vue";
import Chart from "@/components/Charts/Chart.vue";
</script>

<style>
/* apexcharts-tooltip-text-y-value */
</style>
