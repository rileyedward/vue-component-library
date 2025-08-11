<script setup lang="ts">
import { ref } from 'vue';
import UiInput from '@/components/forms/input/ui-input.vue';
import { User, Mail, Lock, Search, Phone } from 'lucide-vue-next';

const basicInput = ref('');
const emailInput = ref('');
const passwordInput = ref('');
const numberInput = ref(0);
const searchInput = ref('');
const phoneInput = ref('');
const disabledInput = ref('This is disabled');
const readonlyInput = ref('This is readonly');
const errorInput = ref('');
const requiredInput = ref('');

const handleInput = (value: string | number) => {
  console.log('Input value:', value);
};

const handleEnter = () => {
  console.log('Enter key pressed!');
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Input Component</h1>
      <p class="text-gray-600">
        A versatile input component with multiple variants, sizes, and states.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Inputs -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Inputs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiInput
            v-model="basicInput"
            label="Basic Input"
            placeholder="Enter some text..."
            helper-text="This is a basic input field"
            @input="handleInput"
          />
          <UiInput
            v-model="emailInput"
            type="email"
            label="Email"
            placeholder="Enter your email..."
            :prefix-icon="Mail"
            helper-text="We'll never share your email"
          />
        </div>
      </section>

      <!-- Input Variants -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Input Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UiInput
            v-model="basicInput"
            variant="default"
            label="Default"
            placeholder="Default variant..."
          />
          <UiInput
            v-model="basicInput"
            variant="outlined"
            label="Outlined"
            placeholder="Outlined variant..."
          />
          <UiInput
            v-model="basicInput"
            variant="filled"
            label="Filled"
            placeholder="Filled variant..."
          />
        </div>
      </section>

      <!-- Input Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Input Sizes</h2>
        <div class="space-y-4">
          <UiInput v-model="basicInput" size="sm" label="Small" placeholder="Small input..." />
          <UiInput v-model="basicInput" size="md" label="Medium" placeholder="Medium input..." />
          <UiInput v-model="basicInput" size="lg" label="Large" placeholder="Large input..." />
        </div>
      </section>

      <!-- Input Types -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Input Types</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiInput
            v-model="passwordInput"
            type="password"
            label="Password"
            placeholder="Enter password..."
            :prefix-icon="Lock"
          />
          <UiInput
            v-model="numberInput"
            type="number"
            label="Number"
            placeholder="Enter number..."
            :min="0"
            :max="100"
          />
          <UiInput
            v-model="searchInput"
            type="search"
            label="Search"
            placeholder="Search..."
            :prefix-icon="Search"
            @enter="handleEnter"
          />
          <UiInput
            v-model="phoneInput"
            type="tel"
            label="Phone"
            placeholder="(555) 123-4567"
            :prefix-icon="Phone"
          />
        </div>
      </section>

      <!-- Input with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Inputs with Icons</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiInput
            v-model="basicInput"
            label="Prefix Icon"
            placeholder="Username..."
            :prefix-icon="User"
          />
          <UiInput
            v-model="basicInput"
            label="Suffix Icon"
            placeholder="Search..."
            :suffix-icon="Search"
          />
        </div>
      </section>

      <!-- Input States -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Input States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiInput
            v-model="disabledInput"
            label="Disabled"
            disabled
            helper-text="This input is disabled"
          />
          <UiInput
            v-model="readonlyInput"
            label="Readonly"
            readonly
            helper-text="This input is readonly"
          />
          <UiInput
            v-model="errorInput"
            label="Error State"
            placeholder="This has an error..."
            error-text="This field is required"
          />
          <UiInput
            v-model="requiredInput"
            label="Required Field"
            placeholder="This is required..."
            required
            helper-text="This field is required"
          />
        </div>
      </section>

      <!-- Full Width Input -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Full Width Input</h2>
        <UiInput
          v-model="basicInput"
          label="Full Width Input"
          placeholder="This input takes the full width..."
          full-width
          helper-text="This input spans the full width of its container"
        />
      </section>

      <!-- Form Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Form Example</h2>
        <form @submit.prevent="console.log('Form submitted!')" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiInput v-model="basicInput" label="First Name" placeholder="John" required />
            <UiInput v-model="basicInput" label="Last Name" placeholder="Doe" required />
          </div>
          <UiInput
            v-model="emailInput"
            type="email"
            label="Email Address"
            placeholder="john.doe@example.com"
            :prefix-icon="Mail"
            full-width
            required
          />
          <UiInput
            v-model="passwordInput"
            type="password"
            label="Password"
            placeholder="Enter a secure password"
            :prefix-icon="Lock"
            full-width
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
