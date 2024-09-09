<template>
  <section class="container">
    <div class="relative overflow-x-auto">
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-with-spacing"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">#</th>
            <th scope="col" class="px-6 py-3">f.i.sh.</th>
            <th scope="col" class="px-6 py-3">Tel.Raqami</th>
            <th scope="col" class="px-6 py-3">Homiylik summasi</th>
            <th scope="col" class="px-6 py-3">Sarflangan summa</th>
            <th scope="col" class="p-4">Sana</th>
            <th scope="col" class="p-4">Holati</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b rounded-lg dark:border-gray-700"
            v-for="item in sponsors"
            :key="item.id"
          >
            <td class="w-4 p-4 text-black rounded-l-lg">
              <span>{{ item.id }}</span>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900">
              <p
                class="whitespace-nowrap text-ellipsis overflow-hidden w-[300px]"
              >
                {{ item.full_name }}
              </p>
            </th>
            <td class="px-6 py-4 text-black">{{ item.phone }}</td>
            <td class="px-6 py-4 text-black">{{ item.sum }} UZS</td>
            <td class="px-6 py-4 text-black">{{ item.spent }} UZS</td>
            <td class="px-6 py-4 text-black">
              {{ new Date(item.created_at).toLocaleDateString() }}
            </td>
            <td class="px-6 py-4 rounded-r-lg">
              {{ item.get_status_display }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
    >
      <!-- Мобильная версия пагинации -->
      <div class="flex flex-1 justify-between sm:hidden">
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>

      <!-- Десктопная версия пагинации -->
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ startItem }}</span>
            to
            <span class="font-medium">{{ endItem }}</span>
            of
            <span class="font-medium">{{ totalItems }}</span>
            results
          </p>
        </div>
        <div>
          <nav
            class="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <!-- Кнопка "Previous" -->
            <button
              @click="previousPage"
              :disabled="currentPage === 1"
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Previous</span>
              <!-- Иконка стрелки влево -->
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            <!-- Номера страниц с логикой троеточий -->
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="goToPage(page)"
              :class="[
                'relative inline-flex items-center px-4 py-2 text-sm font-semibold',
                page === currentPage
                  ? 'z-10 bg-indigo-600 text-white'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
                page === '...' ? 'pointer-events-none' : '',
              ]"
              :disabled="page === '...'"
            >
              {{ page }}
            </button>

            <!-- Кнопка "Next" -->
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Next</span>
              <!-- Иконка стрелки вправо -->
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { axiosInstance } from "@/servies/axios.js";
import { ref, onMounted, computed, watch } from "vue";
import type { ISponsor } from "@/types/sponsors.type";
// import { useMainStore } from "@/stores/main";

// const mainStore = useMainStore();

const sponsors = ref<ISponsor[]>([]);

const itemsPerPage = 10; // Количество элементов на странице
const totalItems = ref(0);
// const totalItems = 200; // Общее количество элементов
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));

const startItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
const endItem = computed(() =>
  Math.min(currentPage.value * itemsPerPage, totalItems.value)
);

// Определение видимых страниц и логики для троеточий
const visiblePages = computed(() => {
  const pages = [];
  const maxVisiblePages = 5; // Максимальное количество видимых страниц (без учета троеточий)

  if (totalPages.value <= maxVisiblePages) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage.value <= 3) {
      pages.push(1, 2, 3, "...", totalPages.value);
    } else if (currentPage.value > totalPages.value - 3) {
      pages.push(
        1,
        "...",
        totalPages.value - 2,
        totalPages.value - 1,
        totalPages.value
      );
    } else {
      pages.push(1, "...", currentPage.value, "...", totalPages.value);
    }
  }

  return pages;
});

const goToPage = (page: number | string) => {
  if (typeof page === "number" && page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    console.log(page);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const getTableData = async (page: number = 1) => {
  try {
    const { data } = await axiosInstance.get("sponsor-list/?page=" + page);
    sponsors.value = data.results;
    totalItems.value = data.count;
  } catch (error: any) {
    console.log(error.detail);
  }
};

onMounted(() => {
  getTableData();

  watch(currentPage, (newData) => {
    getTableData(newData);
  });
});
</script>

<style scoped></style>
