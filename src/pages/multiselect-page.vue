<script setup lang="ts">
import { ref } from 'vue';
import UiMultiSelect from '@/components/forms/multiselect/ui-multiselect.vue';
import type { MultiSelectOption } from '@/components/forms/multiselect/ui-multiselect';
import { Users, Tags, Star, MapPin } from 'lucide-vue-next';

const basicSelection = ref<(string | number)[]>([]);
const preselectedItems = ref<(string | number)[]>(['option2', 'option4']);
const limitedSelection = ref<(string | number)[]>([]);
const searchableSelection = ref<(string | number)[]>([]);
const categoriesSelection = ref<(string | number)[]>([]);
const skillsSelection = ref<(string | number)[]>([]);
const countriesSelection = ref<(string | number)[]>([]);
const disabledSelection = ref<(string | number)[]>(['item1', 'item2']);
const errorSelection = ref<(string | number)[]>([]);
const formSelection = ref<(string | number)[]>([]);

const basicOptions: MultiSelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

const categoryOptions: MultiSelectOption[] = [
  { value: 'tech', label: 'Technology' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'support', label: 'Support' },
  { value: 'hr', label: 'Human Resources' },
  { value: 'finance', label: 'Finance' },
  { value: 'legal', label: 'Legal' },
];

const skillOptions: MultiSelectOption[] = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'node', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'php', label: 'PHP' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'go', label: 'Go' },
  { value: 'rust', label: 'Rust' },
];

const countryOptions: MultiSelectOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'jp', label: 'Japan' },
  { value: 'au', label: 'Australia' },
  { value: 'br', label: 'Brazil' },
  { value: 'in', label: 'India' },
  { value: 'cn', label: 'China' },
  { value: 'mx', label: 'Mexico' },
  { value: 'es', label: 'Spain' },
  { value: 'it', label: 'Italy' },
  { value: 'nl', label: 'Netherlands' },
  { value: 'se', label: 'Sweden' },
];

const statusOptions: MultiSelectOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
  { value: 'pending', label: 'Pending' },
  { value: 'archived', label: 'Archived' },
  { value: 'draft', label: 'Draft' },
  { value: 'published', label: 'Published' },
  { value: 'suspended', label: 'Suspended', disabled: true },
];

const longOptions: MultiSelectOption[] = Array.from({ length: 50 }, (_, i) => ({
  value: `item${i + 1}`,
  label: `Item ${i + 1} - Very Long Label That Demonstrates How The Component Handles Long Text`,
}));

const handleChange = (values: (string | number)[]) => {
  console.log('MultiSelect changed:', values);
};

const handleSelect = (value: string | number) => {
  console.log('Item selected:', value);
};

const handleDeselect = (value: string | number) => {
  console.log('Item deselected:', value);
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">MultiSelect Component</h1>
      <p class="text-gray-600">
        A powerful multi-selection dropdown component with search, tagging, and advanced features.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic MultiSelect -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic MultiSelect</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiMultiSelect
            v-model="basicSelection"
            :options="basicOptions"
            label="Basic MultiSelect"
            placeholder="Select multiple options..."
            helper-text="You can select multiple options"
            @change="handleChange"
            @select="handleSelect"
            @deselect="handleDeselect"
          />
          <UiMultiSelect
            v-model="preselectedItems"
            :options="basicOptions"
            label="Pre-selected Items"
            helper-text="Some options are already selected"
          />
        </div>
      </section>

      <!-- MultiSelect Variants -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">MultiSelect Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UiMultiSelect
            v-model="basicSelection"
            :options="basicOptions"
            variant="default"
            label="Default"
            placeholder="Default variant..."
          />
          <UiMultiSelect
            v-model="basicSelection"
            :options="basicOptions"
            variant="outlined"
            label="Outlined"
            placeholder="Outlined variant..."
          />
          <UiMultiSelect
            v-model="basicSelection"
            :options="basicOptions"
            variant="filled"
            label="Filled"
            placeholder="Filled variant..."
          />
        </div>
      </section>

      <!-- MultiSelect Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">MultiSelect Sizes</h2>
        <div class="space-y-4">
          <UiMultiSelect
            v-model="basicSelection"
            :options="basicOptions"
            size="sm"
            label="Small"
            placeholder="Small multiselect..."
          />
          <UiMultiSelect
            v-model="basicSelection"
            :options="basicOptions"
            size="md"
            label="Medium"
            placeholder="Medium multiselect..."
          />
          <UiMultiSelect
            v-model="basicSelection"
            :options="basicOptions"
            size="lg"
            label="Large"
            placeholder="Large multiselect..."
          />
        </div>
      </section>

      <!-- MultiSelect with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">MultiSelect with Icons</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiMultiSelect
            v-model="categoriesSelection"
            :options="categoryOptions"
            label="Categories"
            placeholder="Select categories..."
            :prefix-icon="Tags"
            helper-text="Choose relevant categories"
          />
          <UiMultiSelect
            v-model="countriesSelection"
            :options="countryOptions"
            label="Countries"
            placeholder="Select countries..."
            :prefix-icon="MapPin"
            helper-text="Choose target countries"
            searchable
          />
        </div>
      </section>

      <!-- Advanced Features -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Advanced Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiMultiSelect
            v-model="searchableSelection"
            :options="skillOptions"
            label="Searchable MultiSelect"
            placeholder="Search and select skills..."
            :prefix-icon="Star"
            searchable
            helper-text="Type to search through options"
          />
          <UiMultiSelect
            v-model="limitedSelection"
            :options="basicOptions"
            label="Limited Selection"
            placeholder="Max 3 selections..."
            :max-selections="3"
            helper-text="You can select up to 3 options"
          />
        </div>
      </section>

      <!-- Select All Feature -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Select All Feature</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiMultiSelect
            v-model="categoriesSelection"
            :options="categoryOptions"
            label="Categories with Select All"
            placeholder="Select categories..."
            show-select-all
            helper-text="Use 'Select All' to choose all options"
          />
          <UiMultiSelect
            v-model="skillsSelection"
            :options="skillOptions"
            label="Searchable with Select All"
            placeholder="Search skills..."
            searchable
            show-select-all
            helper-text="Search and use Select All for filtered results"
          />
        </div>
      </section>

      <!-- MultiSelect States -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">MultiSelect States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiMultiSelect
            v-model="disabledSelection"
            :options="basicOptions"
            label="Disabled"
            disabled
            helper-text="This multiselect is disabled"
          />
          <UiMultiSelect
            v-model="errorSelection"
            :options="basicOptions"
            label="Error State"
            placeholder="This has an error..."
            error-text="Please select at least one option"
            required
          />
        </div>
      </section>

      <!-- Long Options List -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Long Options List</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiMultiSelect
            v-model="basicSelection"
            :options="longOptions"
            label="Many Options"
            placeholder="Select from many options..."
            searchable
            show-select-all
            helper-text="50 options with search and select all"
          />
          <UiMultiSelect
            v-model="basicSelection"
            :options="statusOptions"
            label="With Disabled Options"
            placeholder="Some options are disabled..."
            helper-text="Notice that some options cannot be selected"
          />
        </div>
      </section>

      <!-- Full Width MultiSelect -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Full Width MultiSelect</h2>
        <UiMultiSelect
          v-model="countriesSelection"
          :options="countryOptions"
          label="Full Width MultiSelect"
          placeholder="This multiselect takes the full width..."
          full-width
          searchable
          show-select-all
          :prefix-icon="MapPin"
          helper-text="This multiselect spans the full width of its container"
        />
      </section>

      <!-- Form Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Form Example</h2>
        <form class="space-y-6" @submit.prevent="console.log('Form submitted!', formSelection)">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UiMultiSelect
              v-model="formSelection"
              :options="categoryOptions"
              label="Interests"
              placeholder="Select your interests..."
              :prefix-icon="Tags"
              required
              :error-text="
                formSelection.length === 0 ? 'Please select at least one interest' : undefined
              "
            />
            <UiMultiSelect
              v-model="skillsSelection"
              :options="skillOptions"
              label="Skills"
              placeholder="Select your skills..."
              :prefix-icon="Star"
              searchable
              :max-selections="5"
              helper-text="Choose up to 5 skills"
            />
          </div>
          <UiMultiSelect
            v-model="countriesSelection"
            :options="countryOptions"
            label="Target Markets"
            placeholder="Select target markets..."
            :prefix-icon="MapPin"
            full-width
            searchable
            show-select-all
            helper-text="Choose countries you want to target"
          />
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors disabled:opacity-50"
              :disabled="formSelection.length === 0"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <!-- Performance Test -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Performance Test</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiMultiSelect
            v-model="basicSelection"
            :options="longOptions"
            label="50 Options"
            placeholder="Performance test..."
            searchable
            show-select-all
            :prefix-icon="Users"
            helper-text="Testing with 50 options"
          />
          <UiMultiSelect
            v-model="basicSelection"
            :options="longOptions"
            label="Limited with Search"
            placeholder="Max 10 selections..."
            searchable
            :max-selections="10"
            helper-text="Search through 50 options, select up to 10"
          />
        </div>
      </section>
    </div>
  </div>
</template>
