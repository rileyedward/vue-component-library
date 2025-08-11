<script setup lang="ts">
import { ref } from 'vue';
import UiSlider from '@/components/forms/slider/ui-slider.vue';

const basicValue = ref(50);
const minMaxValue = ref(25);
const stepValue = ref(5);
const disabledValue = ref(30);
const labeledValue = ref(40);
const tooltipValue = ref(60);
const showValueValue = ref(75);

const handleChange = (value: number) => {
  console.log('Slider value changed:', value);
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Slider Component</h1>
      <p class="text-gray-600">
        A customizable slider component for selecting numeric values within a range.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Slider -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Slider</h2>
        <div class="max-w-md">
          <UiSlider v-model="basicValue" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ basicValue }}
          </div>
        </div>
      </section>

      <!-- Min/Max Values -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Custom Range</h2>
        <div class="max-w-md">
          <UiSlider v-model="minMaxValue" :min="10" :max="50" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ minMaxValue }} (Range: 10-50)
          </div>
        </div>
      </section>

      <!-- Step Size -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Custom Step Size</h2>
        <div class="max-w-md">
          <UiSlider v-model="stepValue" :step="5" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ stepValue }} (Step: 5)
          </div>
        </div>
      </section>

      <!-- Disabled Slider -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Slider</h2>
        <div class="max-w-md">
          <UiSlider v-model="disabledValue" disabled />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ disabledValue }} (Disabled)
          </div>
        </div>
      </section>

      <!-- Labeled Slider -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Slider with Label</h2>
        <div class="max-w-md">
          <UiSlider v-model="labeledValue" label="Volume" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ labeledValue }}
          </div>
        </div>
      </section>

      <!-- Tooltip Slider -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Slider with Tooltip</h2>
        <div class="max-w-md">
          <UiSlider v-model="tooltipValue" :tooltip="true" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ tooltipValue }} (Drag to see tooltip)
          </div>
        </div>
      </section>

      <!-- Show Value Slider -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Slider with Value Display</h2>
        <div class="max-w-md">
          <UiSlider v-model="showValueValue" :show-value="true" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ showValueValue }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
