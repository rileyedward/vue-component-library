<script setup lang="ts">
import { ref } from 'vue';
import UiCounter from '@/components/forms/counter/ui-counter.vue';

const basicValue = ref(5);
const minMaxValue = ref(25);
const stepValue = ref(10);
const disabledValue = ref(30);
const labeledValue = ref(40);
const sizesValues = {
  sm: ref(2),
  md: ref(4),
  lg: ref(6),
  xl: ref(8),
};

const handleChange = (value: number) => {
  console.log('Counter value changed:', value);
};

const handleIncrement = () => {
  console.log('Counter incremented');
};

const handleDecrement = () => {
  console.log('Counter decremented');
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Counter Component</h1>
      <p class="text-gray-600">
        A simple counter component for incrementing and decrementing numeric values.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Counter -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Counter</h2>
        <div>
          <UiCounter
            v-model="basicValue"
            @change="handleChange"
            @increment="handleIncrement"
            @decrement="handleDecrement"
          />
          <div class="mt-4 text-sm text-gray-500">Current value: {{ basicValue }}</div>
        </div>
      </section>

      <!-- Min/Max Values -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Custom Range</h2>
        <div>
          <UiCounter v-model="minMaxValue" :min="10" :max="50" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ minMaxValue }} (Range: 10-50)
          </div>
        </div>
      </section>

      <!-- Step Size -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Custom Step Size</h2>
        <div>
          <UiCounter v-model="stepValue" :step="5" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">Current value: {{ stepValue }} (Step: 5)</div>
        </div>
      </section>

      <!-- Disabled Counter -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Counter</h2>
        <div>
          <UiCounter v-model="disabledValue" disabled />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ disabledValue }} (Disabled)
          </div>
        </div>
      </section>

      <!-- Labeled Counter -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Counter with Label</h2>
        <div>
          <UiCounter v-model="labeledValue" label="Quantity" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">Current value: {{ labeledValue }}</div>
        </div>
      </section>

      <!-- Counter Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Counter Sizes</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Small</h3>
            <UiCounter v-model="sizesValues.sm" size="sm" @change="handleChange" />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Medium (Default)</h3>
            <UiCounter v-model="sizesValues.md" size="md" @change="handleChange" />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Large</h3>
            <UiCounter v-model="sizesValues.lg" size="lg" @change="handleChange" />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Extra Large</h3>
            <UiCounter v-model="sizesValues.xl" size="xl" @change="handleChange" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
