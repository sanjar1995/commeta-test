<template>
  <header class="header bg-white py-3">
    <nav class="container flex items-center justify-between">
      <router-link to="/" class="logo">
        <img src="@/assets/images/logo-header.svg" alt="" />
      </router-link>
      <div class="flex items-center justify-center gap-[40px]">
        <div
          class="flex items-center justify-center gap-6 p-1 bg-gray-200 rounded-md"
        >
          <p class="text-[13px] font-semibold pl-[20px]">Shohrux</p>
          <div
            class="w-8 h-7 rounded-[4px] bg-green-600 flex items-end justify-center"
          >
            <img src="@/assets/images/user.svg" alt="" />
          </div>
        </div>
        <button @click="close">
          <img src="@/assets/images/exit.svg" alt="" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const close = () => {
  localStorage.removeItem("accessToken");
  router.push("/sign-in");
};
</script>

<style scoped></style>
