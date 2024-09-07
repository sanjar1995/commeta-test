<template>
  <div class="bg-gray-50 py-6">
    <div class="container flex items-center justify-between">
      <div
        class="flex items-center justify-center border-2 border-b-main rounded-lg overflow-hidden"
      >
        <div
          @click="mainStore.setActiveSearchTab('#-dashboard')"
          class="w-[190px] py-[14px] flex items-center justify-center cursor-pointer"
          :class="{
            'bg-primary': mainStore.activeSearchTab == '#-dashboard',
          }"
        >
          <span
            class="text-[14px] font-medium text-t-third"
            :class="{
              'text-white': mainStore.activeSearchTab == '#-dashboard',
            }"
            >Dashboard</span
          >
        </div>
        <div
          @click="mainStore.setActiveSearchTab('#-sponsors')"
          class="w-[190px] py-[14px] flex items-center justify-center cursor-pointer border-x-2 border-b-main"
          :class="{
            'bg-primary': mainStore.activeSearchTab == '#-sponsors',
          }"
        >
          <span
            class="text-[14px] font-medium text-t-third"
            :class="{
              'text-white': mainStore.activeSearchTab == '#-sponsors',
            }"
            >Homiylar</span
          >
        </div>
        <div
          @click="mainStore.setActiveSearchTab('#-students')"
          class="w-[190px] py-[14px] flex items-center justify-center cursor-pointer"
          :class="{
            'bg-primary': mainStore.activeSearchTab == '#-students',
          }"
        >
          <span
            class="text-[14px] font-medium text-t-third"
            :class="{
              'text-white': mainStore.activeSearchTab == '#-students',
            }"
            >Talabalar</span
          >
        </div>
      </div>
      <div class="flex items-center gap-[20px]">
        <div
          class="flex items-center w-[284px] h-[40px] bg-gray-300 rounded-[5px] px-[10px] gap-[8px]"
        >
          <img src="@/assets/images/search.svg" alt="" />
          <input
            type="text"
            class="w-full bg-transparent outline-none"
            placeholder="Izlash"
          />
        </div>
        <button
          class="h-[40px] px-[34px] bg-[#EDF1FD] rounded-[5px] flex items-center gap-[10px]"
        >
          <img src="@/assets/images/filter.svg" alt="" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
</script>

<style scoped></style>
