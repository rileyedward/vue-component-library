<script setup lang="ts">
import { ref } from 'vue';
import { User, Settings, Mail, Bell, Heart, Star, Home } from 'lucide-vue-next';
import UiDropdown from '@/components/navigation/dropdown/ui-dropdown.vue';
import type { DropdownItem } from '@/components/navigation/dropdown/ui-dropdown';

const selectedValue = ref('');
const selectedIconValue = ref('');
const selectedDisabledValue = ref('');

const handleSelect = (item: DropdownItem) => {
  console.log('Selected item:', item);
};

const basicItems = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
  { label: 'Option 5', value: 'option5' },
];

const itemsWithIcons = [
  { label: 'Profile', value: 'profile', icon: User },
  { label: 'Settings', value: 'settings', icon: Settings },
  { label: 'Messages', value: 'messages', icon: Mail },
  { label: 'Notifications', value: 'notifications', icon: Bell },
  { label: 'Favorites', value: 'favorites', icon: Heart },
];

const itemsWithDisabled = [
  { label: 'Available Option', value: 'available' },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
  { label: 'Another Available', value: 'another' },
  { label: 'Also Disabled', value: 'also-disabled', disabled: true },
];
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Dropdown Component</h1>
      <p class="text-gray-600">A versatile dropdown component for selecting options from a list.</p>
    </header>

    <div class="space-y-12">
      <!-- Basic Dropdown -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Dropdown</h2>
        <div class="max-w-xs">
          <ui-dropdown
            v-model="selectedValue"
            :items="basicItems"
            placeholder="Select an option"
            @select="handleSelect"
          />
          <p v-if="selectedValue" class="mt-4 text-sm text-gray-600">
            Selected value: {{ selectedValue }}
          </p>
        </div>
      </section>

      <!-- Dropdown with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Dropdown with Icons</h2>
        <div class="max-w-xs">
          <ui-dropdown
            v-model="selectedIconValue"
            :items="itemsWithIcons"
            :icon="Star"
            placeholder="Select with icon"
            @select="handleSelect"
          />
          <p v-if="selectedIconValue" class="mt-4 text-sm text-gray-600">
            Selected value: {{ selectedIconValue }}
          </p>
        </div>
      </section>

      <!-- Dropdown with Disabled Options -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Dropdown with Disabled Options</h2>
        <div class="max-w-xs">
          <ui-dropdown
            v-model="selectedDisabledValue"
            :items="itemsWithDisabled"
            placeholder="Some options disabled"
            @select="handleSelect"
          />
          <p v-if="selectedDisabledValue" class="mt-4 text-sm text-gray-600">
            Selected value: {{ selectedDisabledValue }}
          </p>
        </div>
      </section>

      <!-- Disabled Dropdown -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Dropdown</h2>
        <div class="max-w-xs">
          <ui-dropdown
            :items="basicItems"
            placeholder="Dropdown is disabled"
            :disabled="true"
            @select="handleSelect"
          />
        </div>
      </section>

      <!-- Dropdown with Custom Label -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Dropdown with Home Icon</h2>
        <div class="max-w-xs">
          <ui-dropdown
            :items="basicItems"
            placeholder="With home icon"
            :icon="Home"
            @select="handleSelect"
          />
        </div>
      </section>
    </div>
  </div>
</template>
