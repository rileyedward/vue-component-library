<script setup lang="ts">
import { ref } from 'vue';
import UiButton from '@/components/forms/button/ui-button.vue';
import { Heart, Download, Plus } from 'lucide-vue-next';

const loading = ref(false);

const handleClick = () => {
  console.log('Button clicked!');
};

const handleLoadingClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Button Component</h1>
      <p class="text-gray-600">
        A versatile button component with multiple variants, sizes, and states.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Button Variants -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Button Variants</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton variant="primary" @click="handleClick">Primary</UiButton>
          <UiButton variant="secondary" @click="handleClick">Secondary</UiButton>
          <UiButton variant="outline" @click="handleClick">Outline</UiButton>
          <UiButton variant="success" @click="handleClick">Success</UiButton>
          <UiButton variant="danger" @click="handleClick">Danger</UiButton>
          <UiButton variant="warning" @click="handleClick">Warning</UiButton>
          <UiButton variant="info" @click="handleClick">Info</UiButton>
        </div>
      </section>

      <!-- Button Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Button Sizes</h2>
        <div class="flex flex-wrap items-center gap-4">
          <UiButton size="sm" @click="handleClick">Small</UiButton>
          <UiButton size="md" @click="handleClick">Medium</UiButton>
          <UiButton size="lg" @click="handleClick">Large</UiButton>
          <UiButton size="xl" @click="handleClick">Extra Large</UiButton>
        </div>
      </section>

      <!-- Button with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Buttons with Icons</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton :prefix-icon="Heart" variant="danger" @click="handleClick"> Like </UiButton>
          <UiButton :suffix-icon="Download" variant="primary" @click="handleClick">
            Download
          </UiButton>
          <UiButton :prefix-icon="Plus" variant="success" @click="handleClick"> Add Item </UiButton>
        </div>
      </section>

      <!-- Button States -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Button States</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton @click="handleClick">Normal</UiButton>
          <UiButton disabled @click="handleClick">Disabled</UiButton>
          <UiButton :loading="loading" @click="handleLoadingClick">
            {{ loading ? 'Loading...' : 'Click to Load' }}
          </UiButton>
        </div>
      </section>

      <!-- Full Width Button -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Full Width Button</h2>
        <UiButton full-width variant="primary" @click="handleClick"> Full Width Button </UiButton>
      </section>

      <!-- Button Types -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Button Types</h2>
        <form class="space-y-4" @submit.prevent="console.log('Form submitted!')">
          <div class="flex gap-4">
            <UiButton type="submit" variant="primary">Submit</UiButton>
            <UiButton type="reset" variant="outline">Reset</UiButton>
            <UiButton type="button" variant="secondary">Button</UiButton>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>
