<script setup lang="ts">
import { ref } from 'vue';
import UiRange from '@/components/forms/range/ui-range.vue';

const basicValue = ref<[number, number]>([20, 80]);
const minMaxValue = ref<[number, number]>([15, 35]);
const stepValue = ref<[number, number]>([10, 30]);
const disabledValue = ref<[number, number]>([25, 75]);
const labeledValue = ref<[number, number]>([30, 70]);
const tooltipValue = ref<[number, number]>([40, 60]);
const showValuesValue = ref<[number, number]>([45, 85]);

const handleChange = (value: [number, number]) => {
  console.log('Range value changed:', value);
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Range Component</h1>
      <p class="text-gray-600">
        A customizable range component for selecting a range of numeric values.
      </p>
    </header>

    <div class="space-y-12">
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Range</h2>
        <div class="max-w-md">
          <UiRange v-model="basicValue" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current range: {{ basicValue[0] }} - {{ basicValue[1] }}
          </div>
        </div>
      </section>

      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Custom Range Limits</h2>
        <div class="max-w-md">
          <UiRange v-model="minMaxValue" :min="10" :max="50" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current range: {{ minMaxValue[0] }} - {{ minMaxValue[1] }} (Limits: 10-50)
          </div>
        </div>
      </section>

      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Custom Step Size</h2>
        <div class="max-w-md">
          <UiRange v-model="stepValue" :step="5" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current range: {{ stepValue[0] }} - {{ stepValue[1] }} (Step: 5)
          </div>
        </div>
      </section>

      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Range</h2>
        <div class="max-w-md">
          <UiRange v-model="disabledValue" disabled />
          <div class="mt-4 text-sm text-gray-500">
            Current range: {{ disabledValue[0] }} - {{ disabledValue[1] }} (Disabled)
          </div>
        </div>
      </section>

      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Range with Label</h2>
        <div class="max-w-md">
          <UiRange v-model="labeledValue" label="Price Range" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current range: {{ labeledValue[0] }} - {{ labeledValue[1] }}
          </div>
        </div>
      </section>

      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Range with Tooltip</h2>
        <div class="max-w-md">
          <UiRange v-model="tooltipValue" :tooltip="true" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current range: {{ tooltipValue[0] }} - {{ tooltipValue[1] }} (Drag to see tooltip)
          </div>
        </div>
      </section>

      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Range with Value Display</h2>
        <div class="max-w-md">
          <UiRange v-model="showValuesValue" :show-values="true" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current range: {{ showValuesValue[0] }} - {{ showValuesValue[1] }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
