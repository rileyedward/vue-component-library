<script setup lang="ts">
import { ref } from 'vue';
import UiSelect from '@/components/forms/select/ui-select.vue';
import type { SelectOption } from '@/components/forms/select/ui-select';
import { User, MapPin, Star } from 'lucide-vue-next';

const basicSelect = ref('');
const countrySelect = ref('');
const prioritySelect = ref('');
const statusSelect = ref('');
const disabledSelect = ref('option2');
const errorSelect = ref('');
const requiredSelect = ref('');

const basicOptions: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

const countryOptions: SelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
];

const priorityOptions: SelectOption[] = [
  { value: 'low', label: 'Low Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'high', label: 'High Priority' },
  { value: 'urgent', label: 'Urgent' },
];

const statusOptions: SelectOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
  { value: 'suspended', label: 'Suspended', disabled: true },
];

const longOptions: SelectOption[] = Array.from({ length: 20 }, (_, i) => ({
  value: `item${i + 1}`,
  label: `Very Long Option Name ${i + 1} - This is a really long label to test wrapping`,
}));

const handleChange = (value: string | number) => {
  console.log('Select changed:', value);
};

const handleOpen = () => {
  console.log('Select opened');
};

const handleClose = () => {
  console.log('Select closed');
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Select Component</h1>
      <p class="text-gray-600">
        A customizable select dropdown component with multiple variants, sizes, and options.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Selects -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Selects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-select
            v-model="basicSelect"
            :options="basicOptions"
            label="Basic Select"
            placeholder="Choose an option..."
            helper-text="This is a basic select dropdown"
            @change="handleChange"
            @open="handleOpen"
            @close="handleClose"
          />
          <ui-select
            v-model="countrySelect"
            :options="countryOptions"
            label="Country Select"
            placeholder="Select a country..."
            helper-text="Choose your country"
          />
        </div>
      </section>

      <!-- Select Variants -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Select Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ui-select
            v-model="basicSelect"
            :options="basicOptions"
            variant="default"
            label="Default"
            placeholder="Default variant..."
          />
          <ui-select
            v-model="basicSelect"
            :options="basicOptions"
            variant="outlined"
            label="Outlined"
            placeholder="Outlined variant..."
          />
          <ui-select
            v-model="basicSelect"
            :options="basicOptions"
            variant="filled"
            label="Filled"
            placeholder="Filled variant..."
          />
        </div>
      </section>

      <!-- Select Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Select Sizes</h2>
        <div class="space-y-4">
          <ui-select
            v-model="basicSelect"
            :options="basicOptions"
            size="sm"
            label="Small"
            placeholder="Small select..."
          />
          <ui-select
            v-model="basicSelect"
            :options="basicOptions"
            size="md"
            label="Medium"
            placeholder="Medium select..."
          />
          <ui-select
            v-model="basicSelect"
            :options="basicOptions"
            size="lg"
            label="Large"
            placeholder="Large select..."
          />
        </div>
      </section>

      <!-- Select with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Selects with Icons</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-select
            v-model="basicSelect"
            :options="basicOptions"
            label="Prefix Icon"
            placeholder="Select with prefix icon..."
            :prefix-icon="User"
          />
          <ui-select
            v-model="countrySelect"
            :options="countryOptions"
            label="Location Select"
            placeholder="Choose location..."
            :prefix-icon="MapPin"
          />
        </div>
      </section>

      <!-- Priority & Status Selects -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Specialized Selects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-select
            v-model="prioritySelect"
            :options="priorityOptions"
            label="Priority Level"
            placeholder="Select priority..."
            :prefix-icon="Star"
            helper-text="Choose the priority level"
          />
          <ui-select
            v-model="statusSelect"
            :options="statusOptions"
            label="Status"
            placeholder="Select status..."
            helper-text="Note: Some options may be disabled"
          />
        </div>
      </section>

      <!-- Select States -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Select States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-select
            v-model="disabledSelect"
            :options="basicOptions"
            label="Disabled"
            disabled
            helper-text="This select is disabled"
          />
          <ui-select
            v-model="errorSelect"
            :options="basicOptions"
            label="Error State"
            placeholder="This has an error..."
            error-text="This field is required"
          />
          <ui-select
            v-model="requiredSelect"
            :options="basicOptions"
            label="Required Field"
            placeholder="This is required..."
            required
            helper-text="This field is required"
          />
          <ui-select
            v-model="basicSelect"
            :options="basicOptions"
            label="Pre-selected"
            :model-value="'option2'"
            helper-text="This has a default value"
          />
        </div>
      </section>

      <!-- Long Options List -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Long Options List</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-select
            v-model="basicSelect"
            :options="longOptions"
            label="Scrollable Options"
            placeholder="Select from many options..."
            helper-text="This dropdown has many options and is scrollable"
          />
          <ui-select
            v-model="basicSelect"
            :options="longOptions.slice(0, 5)"
            label="Long Labels"
            placeholder="Select option with long label..."
            helper-text="Options with long labels"
          />
        </div>
      </section>

      <!-- Full Width Select -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Full Width Select</h2>
        <ui-select
          v-model="countrySelect"
          :options="countryOptions"
          label="Full Width Select"
          placeholder="This select takes the full width..."
          full-width
          helper-text="This select spans the full width of its container"
        />
      </section>

      <!-- Form Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Form Example</h2>
        <form class="space-y-6" @submit.prevent="console.log('Form submitted!')">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ui-select
              v-model="countrySelect"
              :options="countryOptions"
              label="Country"
              placeholder="Select country..."
              :prefix-icon="MapPin"
              required
            />
            <ui-select
              v-model="prioritySelect"
              :options="priorityOptions"
              label="Priority"
              placeholder="Select priority..."
              :prefix-icon="Star"
              required
            />
          </div>
          <ui-select
            v-model="statusSelect"
            :options="statusOptions"
            label="Account Status"
            placeholder="Choose account status..."
            full-width
            helper-text="Select the current status of the account"
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
