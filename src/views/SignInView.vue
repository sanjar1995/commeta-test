<template>
  <div class="w-full h-screen flex flex-col items-center justify-center">
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="w-[380px] flex items-center justify-center">
        <img class="w-[318px]" src="@/assets/images/logo.svg" />
      </div>
      <div class="w-[380px] bg-white p-[32px] rounded-[12px] mt-[48px]">
        <h2
          class="mb-[44px] text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Kirish
        </h2>
        <form class="space-y-6" @submit.prevent="auth">
          <div>
            <label
              for="text"
              class="block text-[12px] font-medium leading-6 text-gray-900"
              >LOGIN</label
            >
            <div class="mt-2">
              <input
                id="text"
                name="text"
                type="text"
                v-model="username"
                required
                class="outline-none block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >PAROL</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                v-model="password"
                required
                class="outline-none block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full h-[50px] items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-[15px] font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Kirish
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { axiosInstance } from "@/servies/axios.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");

const auth = async () => {
  try {
    const { data } = await axiosInstance.post("auth/login/", {
      username: username.value,
      password: password.value,
    });
    localStorage.accessToken = data.access;
    if (localStorage.accessToken) router.push("/");
  } catch (error: any) {
    console.log(error.detail);
  }
};
</script>

<style scoped></style>
