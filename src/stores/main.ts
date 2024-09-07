import { defineStore } from "pinia";
import type { IMainStore } from "@/types/mainStore.type";

// Определяем хранилище с использованием интерфейса IMainStore
export const useMainStore = defineStore("main", {
  state: () => ({
    activeSearchTab: "#-dashboard",
    totalPaid: 0,
    totalNeed: 0,
    totalMustPay: 0,
  }),
  actions: {
    setActiveSearchTab(tab: string) {
      this.activeSearchTab = tab;
    },
  },
});
