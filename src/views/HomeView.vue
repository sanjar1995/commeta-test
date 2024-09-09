<template>
  <AppHeader />
  <AppSearch />
  <main>
    <Dashboard v-if="mainStore.activeSearchTab == '#-dashboard'" />
    <Table v-if="mainStore.activeSearchTab == '#-sponsors'"/>
  </main>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppSearch from "@/components/AppSearch.vue";
import AppTarriffList from "@/components/AppTariffList.vue";
import Dashboard from "@/components/Dashboard.vue";
import Table from "@/components/Tables/Table.vue";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
</script>

<style>
/* apexcharts-tooltip-text-y-value */
</style>
