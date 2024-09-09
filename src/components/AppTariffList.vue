<template>
  <div class="container">
    <div class="flex items-center justify-between mt-[48px]">
      <div
        class="w-[380px] flex items-center justify-start gap-[16px] bg-white p-6 rounded-[8px]"
      >
        <div
          class="w-[48px] h-[48px] rounded-[12px] bg-[#4C6FFF1A] flex items-center justify-center"
        >
          <img src="@/assets/images/cash-paid.svg" alt="" />
        </div>
        <div class="flex flex-col">
          <span class="text-[12px] font-normal text-[#7A7A9D]">
            Jami to‘langan summa
          </span>
          <p class="text-[20px] font-bold text-[#2E384D]">
            {{ mainStore.totalPaid.toLocaleString() }}
            <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </div>
      </div>
      <div
        class="w-[380px] flex items-center justify-start gap-[16px] bg-white p-6 rounded-[8px]"
      >
        <div
          class="w-[48px] h-[48px] rounded-[12px] bg-[#EDC7001A ] flex items-center justify-center"
        >
          <img src="@/assets/images/cash-need.svg" alt="" />
        </div>
        <div class="flex flex-col">
          <span class="text-[12px] font-normal text-[#7A7A9D]">
            Jami so‘ralgan summa
          </span>
          <p class="text-[20px] font-bold text-[#2E384D]">
            {{ mainStore.totalNeed.toLocaleString() }}
            <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </div>
      </div>
      <div
        class="w-[380px] flex items-center justify-start gap-[16px] bg-white p-6 rounded-[8px]"
      >
        <div
          class="w-[48px] h-[48px] rounded-[12px] bg-[#ED72001A] flex items-center justify-center"
        >
          <img src="@/assets/images/cash-must-pay.svg" alt="" />
        </div>
        <div class="flex flex-col">
          <span class="text-[12px] font-normal text-[#7A7A9D]">
            To‘lanishi kerak summa
          </span>
          <p class="text-[20px] font-bold text-[#2E384D]">
            {{ mainStore.totalMustPay.toLocaleString() }}
            <span class="text-[#B2B7C1]">UZS</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { axiosInstance } from "@/servies/axios.js";
import { ref, onMounted } from "vue";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
const getDashboardData = async () => {
  try {
    const { data } = await axiosInstance.get("dashboard");
    mainStore.totalPaid = data.total_paid;
    mainStore.totalNeed = data.total_need;
    mainStore.totalMustPay = data.total_must_pay;
  } catch (error: any) {
    console.log(error.detail);
  }
};

onMounted(() => {
  getDashboardData();
});
</script>

<style scoped></style>
