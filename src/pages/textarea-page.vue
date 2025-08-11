<script setup lang="ts">
import { ref } from 'vue';
import UiTextarea from '@/components/forms/textarea/ui-textarea.vue';

const basicTextarea = ref('');
const longTextarea = ref('This is a longer textarea with some initial content. You can edit this text and see how the component behaves with different amounts of content.');
const disabledTextarea = ref('This textarea is disabled and cannot be edited.');
const readonlyTextarea = ref('This textarea is readonly and cannot be modified.');
const errorTextarea = ref('');
const requiredTextarea = ref('');

const handleInput = (value: string) => {
  console.log('Textarea value:', value);
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Textarea Component</h1>
      <p class="text-gray-600">
        A versatile textarea component with multiple variants, sizes, and customizable rows/columns.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Textareas -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Textareas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiTextarea
            v-model="basicTextarea"
            label="Basic Textarea"
            placeholder="Enter your message..."
            helper-text="This is a basic textarea field"
            @input="handleInput"
          />
          <UiTextarea
            v-model="longTextarea"
            label="Pre-filled Textarea"
            helper-text="This textarea has initial content"
            :rows="6"
          />
        </div>
      </section>

      <!-- Textarea Variants -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Textarea Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UiTextarea
            v-model="basicTextarea"
            variant="default"
            label="Default"
            placeholder="Default variant..."
          />
          <UiTextarea
            v-model="basicTextarea"
            variant="outlined"
            label="Outlined"
            placeholder="Outlined variant..."
          />
          <UiTextarea
            v-model="basicTextarea"
            variant="filled"
            label="Filled"
            placeholder="Filled variant..."
          />
        </div>
      </section>

      <!-- Textarea Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Textarea Sizes</h2>
        <div class="space-y-4">
          <UiTextarea
            v-model="basicTextarea"
            size="sm"
            label="Small"
            placeholder="Small textarea..."
            :rows="3"
          />
          <UiTextarea
            v-model="basicTextarea"
            size="md"
            label="Medium"
            placeholder="Medium textarea..."
            :rows="4"
          />
          <UiTextarea
            v-model="basicTextarea"
            size="lg"
            label="Large"
            placeholder="Large textarea..."
            :rows="5"
          />
        </div>
      </section>

      <!-- Rows and Columns -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Custom Rows & Columns</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiTextarea
            v-model="basicTextarea"
            label="Small (2 rows)"
            placeholder="Small textarea with 2 rows..."
            :rows="2"
            helper-text="This textarea has 2 rows"
          />
          <UiTextarea
            v-model="basicTextarea"
            label="Large (8 rows)"
            placeholder="Large textarea with 8 rows..."
            :rows="8"
            helper-text="This textarea has 8 rows"
          />
          <UiTextarea
            v-model="basicTextarea"
            label="Custom Columns"
            placeholder="Textarea with specific columns..."
            :rows="4"
            :cols="30"
            helper-text="This textarea has custom column width"
          />
          <UiTextarea
            v-model="basicTextarea"
            label="Wide Textarea"
            placeholder="Wide textarea..."
            :rows="4"
            :cols="60"
            helper-text="This textarea is wider"
          />
        </div>
      </section>

      <!-- Resize Options -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Resize Options</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiTextarea
            v-model="basicTextarea"
            label="No Resize"
            placeholder="This textarea cannot be resized..."
            resize="none"
            helper-text="Resize is disabled"
          />
          <UiTextarea
            v-model="basicTextarea"
            label="Vertical Resize"
            placeholder="This textarea can be resized vertically..."
            resize="vertical"
            helper-text="Can resize vertically only"
          />
          <UiTextarea
            v-model="basicTextarea"
            label="Horizontal Resize"
            placeholder="This textarea can be resized horizontally..."
            resize="horizontal"
            helper-text="Can resize horizontally only"
          />
          <UiTextarea
            v-model="basicTextarea"
            label="Both Resize"
            placeholder="This textarea can be resized in both directions..."
            resize="both"
            helper-text="Can resize in both directions"
          />
        </div>
      </section>

      <!-- Textarea States -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Textarea States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiTextarea
            v-model="disabledTextarea"
            label="Disabled"
            disabled
            helper-text="This textarea is disabled"
          />
          <UiTextarea
            v-model="readonlyTextarea"
            label="Readonly"
            readonly
            helper-text="This textarea is readonly"
          />
          <UiTextarea
            v-model="errorTextarea"
            label="Error State"
            placeholder="This has an error..."
            error-text="This field is required"
          />
          <UiTextarea
            v-model="requiredTextarea"
            label="Required Field"
            placeholder="This is required..."
            required
            helper-text="This field is required"
          />
        </div>
      </section>

      <!-- Full Width Textarea -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Full Width Textarea</h2>
        <UiTextarea
          v-model="basicTextarea"
          label="Full Width Textarea"
          placeholder="This textarea takes the full width..."
          full-width
          :rows="6"
          helper-text="This textarea spans the full width of its container"
        />
      </section>

      <!-- Form Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Form Example</h2>
        <form @submit.prevent="console.log('Form submitted!')" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiTextarea
              v-model="basicTextarea"
              label="Short Description"
              placeholder="Brief description..."
              :rows="3"
              required
            />
            <UiTextarea
              v-model="basicTextarea"
              label="Additional Notes"
              placeholder="Any additional information..."
              :rows="3"
            />
          </div>
          <UiTextarea
            v-model="longTextarea"
            label="Detailed Description"
            placeholder="Provide a detailed description..."
            full-width
            :rows="8"
            :max-length="500"
            helper-text="Maximum 500 characters"
            required
          />
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>