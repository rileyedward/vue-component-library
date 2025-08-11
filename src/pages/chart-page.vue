<script setup lang="ts">
import { ref } from 'vue';
import UiChart from '@/components/data/chart/ui-chart.vue';
import type { ChartData } from 'chart.js';

const barChartData = ref<ChartData>({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

const lineChartData = ref<ChartData>({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Revenue',
      data: [30, 45, 35, 50, 40, 60],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.1,
    },
    {
      label: 'Profit',
      data: [20, 25, 30, 35, 25, 40],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.1,
    },
  ],
});

const pieChartData = ref<ChartData>({
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [
    {
      data: [300, 150, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 205, 86, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 205, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

const doughnutChartData = ref<ChartData>({
  labels: ['Chrome', 'Firefox', 'Safari', 'Edge'],
  datasets: [
    {
      data: [45, 25, 20, 10],
      backgroundColor: [
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 159, 64, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 205, 86, 0.8)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 205, 86, 1)',
      ],
      borderWidth: 2,
    },
  ],
});

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly Sales Data',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Revenue vs Profit Trend',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Device Usage Distribution',
    },
  },
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Browser Market Share',
    },
  },
};

const onChartCreated = (chart: any) => {
  console.log('Chart created:', chart);
};

const onChartUpdated = (chart: any) => {
  console.log('Chart updated:', chart);
};

const onChartDestroyed = () => {
  console.log('Chart destroyed');
};
</script>

<template>
  <div class="max-w-6xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Chart Component</h1>
      <p class="text-gray-600">
        A flexible chart component built with Chart.js supporting various chart types including bar, line, pie, and doughnut charts.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Bar Chart -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Bar Chart</h2>
        <div class="h-96">
          <UiChart
            type="bar"
            :data="barChartData"
            :options="barChartOptions"
            @chart-created="onChartCreated"
            @chart-updated="onChartUpdated"
            @chart-destroyed="onChartDestroyed"
          />
        </div>
      </section>

      <!-- Line Chart -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Line Chart</h2>
        <div class="h-96">
          <UiChart
            type="line"
            :data="lineChartData"
            :options="lineChartOptions"
            @chart-created="onChartCreated"
            @chart-updated="onChartUpdated"
            @chart-destroyed="onChartDestroyed"
          />
        </div>
      </section>

      <!-- Charts Grid -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Pie & Doughnut Charts</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Pie Chart -->
          <div class="h-96">
            <h3 class="text-md font-medium text-gray-800 mb-4">Pie Chart</h3>
            <UiChart
              type="pie"
              :data="pieChartData"
              :options="pieChartOptions"
              @chart-created="onChartCreated"
              @chart-updated="onChartUpdated"
              @chart-destroyed="onChartDestroyed"
            />
          </div>

          <!-- Doughnut Chart -->
          <div class="h-96">
            <h3 class="text-md font-medium text-gray-800 mb-4">Doughnut Chart</h3>
            <UiChart
              type="doughnut"
              :data="doughnutChartData"
              :options="doughnutChartOptions"
              @chart-created="onChartCreated"
              @chart-updated="onChartUpdated"
              @chart-destroyed="onChartDestroyed"
            />
          </div>
        </div>
      </section>

      <!-- Small Charts -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Small Charts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div class="h-64">
            <h3 class="text-sm font-medium text-gray-800 mb-2">Mini Bar Chart</h3>
            <UiChart
              type="bar"
              :data="{
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                  label: 'Quarterly Sales',
                  data: [120, 150, 180, 200],
                  backgroundColor: 'rgba(59, 130, 246, 0.5)',
                  borderColor: 'rgba(59, 130, 246, 1)',
                  borderWidth: 1
                }]
              }"
              :options="{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
              }"
            />
          </div>

          <div class="h-64">
            <h3 class="text-sm font-medium text-gray-800 mb-2">Mini Line Chart</h3>
            <UiChart
              type="line"
              :data="{
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                  label: 'Weekly Growth',
                  data: [10, 25, 35, 50],
                  borderColor: 'rgba(16, 185, 129, 1)',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  tension: 0.4
                }]
              }"
              :options="{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
              }"
            />
          </div>

          <div class="h-64">
            <h3 class="text-sm font-medium text-gray-800 mb-2">Mini Pie Chart</h3>
            <UiChart
              type="pie"
              :data="{
                labels: ['A', 'B', 'C'],
                datasets: [{
                  data: [30, 50, 20],
                  backgroundColor: [
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(34, 197, 94, 0.8)',
                    'rgba(59, 130, 246, 0.8)'
                  ]
                }]
              }"
              :options="{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } }
              }"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
