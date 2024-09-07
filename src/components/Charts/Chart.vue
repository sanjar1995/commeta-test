<template>
  <section class="container ">
   <div class="flex flex-col bg-white mt-7 p-6">
    <h3 class="text-2xl font-bold px-3 py-3">Homiylar va talabalar soni</h3>
    <div id="chart">
      <apexchart
        type="area"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
   </div>
  </section>
</template>

<script setup lang="ts">
const series = [
  {
    name: "Homiylar",
    data: [
      1110, 1200, 1400, 1500, 1000, 5000, 1000, 2500, 5000, 7000, 1000, 4000,
    ],
    color: "#4C6FFF",
  },
  {
    name: "Talabalar",
    data: [
      1310, 1500, 1500, 2000, 1300, 3000, 2000, 3500, 4000, 8000, 5000, 1000,
    ],
    color: "#FF92AE",
  },
];

const chartOptions = {
  fill: {
    opacity: 0,
    type: "solid",
  },
  chart: {
    height: 350,
    type: "area",
    background: "transparrent",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "category",
    categories: [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ],
  },
  tooltip: {
    x: {
      format: "MM",
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
  },
//   title: {
//     text: "Homiylar va talabalar soni", // Текст заголовка
//     align: "left", // Выравнивание заголовка (может быть 'left', 'center', 'right')
//     offsetY: 5, // Смещение по вертикали
//     style: {
//       fontSize: "24px", // Размер шрифта
//       fontWeight: "bold", // Толщина шрифта
//       color: "#2E384D", // Цвет шрифта
//     },
//   },
};
</script>

<style>
.apexcharts-tooltip-marker {
  display: none;
}

.apexcharts-tooltip-text-y-label {
  display: none;
}

.apexcharts-tooltip {
  flex-wrap: wrap;
  flex-direction: row !important;
  border: 1px solid #dfe6fe !important;
  border-radius: 8px;
  background: linear-gradient(
    180deg,
    #f3f4fe 100%,
    rgba(243, 244, 254, 0) 100%
  ) !important;
}

.apexcharts-tooltip-title {
  flex-grow: 1;
  width: 100%;
  text-align: center;
  background: transparent !important;
  border: none !important;
  padding: none !important;
}

.apexcharts-tooltip-series-group {
  flex-grow: 1;
  justify-content: center !important;
  padding: none !important;

  .apexcharts-tooltip-text-y-value {
    margin-left: unset !important;
    font-size: 20px;
    font-weight: 600 !important;
  }
}

.apexcharts-tooltip-series-group:nth-of-type(2):has(
    .apexcharts-tooltip-text-y-value
  ) {
  color: #3366ff !important;
}
.apexcharts-tooltip-series-group:nth-of-type(3):has(
    .apexcharts-tooltip-text-y-value
  ) {
  color: #f591b3 !important;
}
</style>
