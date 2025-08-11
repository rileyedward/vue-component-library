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
          <ui-button variant="primary" @click="handleClick">Primary</ui-button>
          <ui-button variant="secondary" @click="handleClick">Secondary</ui-button>
          <ui-button variant="outline" @click="handleClick">Outline</ui-button>
          <ui-button variant="success" @click="handleClick">Success</ui-button>
          <ui-button variant="danger" @click="handleClick">Danger</ui-button>
          <ui-button variant="warning" @click="handleClick">Warning</ui-button>
          <ui-button variant="info" @click="handleClick">Info</ui-button>
        </div>
      </section>

      <!-- Button Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Button Sizes</h2>
        <div class="flex flex-wrap items-center gap-4">
          <ui-button size="sm" @click="handleClick">Small</ui-button>
          <ui-button size="md" @click="handleClick">Medium</ui-button>
          <ui-button size="lg" @click="handleClick">Large</ui-button>
          <ui-button size="xl" @click="handleClick">Extra Large</ui-button>
        </div>
      </section>

      <!-- Button with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Buttons with Icons</h2>
        <div class="flex flex-wrap gap-4">
          <ui-button :prefix-icon="Heart" variant="danger" @click="handleClick"> Like </ui-button>
          <ui-button :suffix-icon="Download" variant="primary" @click="handleClick">
            Download
          </ui-button>
          <ui-button :prefix-icon="Plus" variant="success" @click="handleClick">
            Add Item
          </ui-button>
        </div>
      </section>

      <!-- Button States -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Button States</h2>
        <div class="flex flex-wrap gap-4">
          <ui-button @click="handleClick">Normal</ui-button>
          <ui-button disabled @click="handleClick">Disabled</ui-button>
          <ui-button :loading="loading" @click="handleLoadingClick">
            {{ loading ? 'Loading...' : 'Click to Load' }}
          </ui-button>
        </div>
      </section>

      <!-- Full Width Button -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Full Width Button</h2>
        <ui-button full-width variant="primary" @click="handleClick"> Full Width Button </ui-button>
      </section>

      <!-- Button Types -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Button Types</h2>
        <form class="space-y-4" @submit.prevent="console.log('Form submitted!')">
          <div class="flex gap-4">
            <ui-button type="submit" variant="primary">Submit</ui-button>
            <ui-button type="reset" variant="outline">Reset</ui-button>
            <ui-button type="button" variant="secondary">Button</ui-button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>
