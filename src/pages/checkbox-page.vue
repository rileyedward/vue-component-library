<script setup lang="ts">
import { ref } from 'vue';
import UiCheckbox from '@/components/forms/checkbox/ui-checkbox.vue';

const basicCheckbox = ref(false);
const checkedCheckbox = ref(true);
const indeterminateCheckbox = ref(false);
const disabledCheckbox = ref(false);
const disabledCheckedCheckbox = ref(true);
const errorCheckbox = ref(false);
const requiredCheckbox = ref(false);

const multipleCheckboxes = ref({
  option1: true,
  option2: false,
  option3: true,
  option4: false,
});

const formCheckboxes = ref({
  newsletter: false,
  terms: false,
  privacy: false,
  marketing: false,
});

const handleChange = (value: boolean, event: Event) => {
  console.log('Checkbox changed:', value, event);
};

const selectAll = () => {
  Object.keys(multipleCheckboxes.value).forEach(key => {
    multipleCheckboxes.value[key as keyof typeof multipleCheckboxes.value] = true;
  });
};

const selectNone = () => {
  Object.keys(multipleCheckboxes.value).forEach(key => {
    multipleCheckboxes.value[key as keyof typeof multipleCheckboxes.value] = false;
  });
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Checkbox Component</h1>
      <p class="text-gray-600">
        A customizable checkbox component with support for labels, descriptions, and various states.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Checkboxes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Checkboxes</h2>
        <div class="space-y-4">
          <ui-checkbox v-model="basicCheckbox" label="Basic checkbox" @change="handleChange" />
          <ui-checkbox
            v-model="checkedCheckbox"
            label="Pre-checked checkbox"
            description="This checkbox starts in a checked state"
          />
          <ui-checkbox
            v-model="indeterminateCheckbox"
            :indeterminate="true"
            label="Indeterminate checkbox"
            description="This checkbox is in an indeterminate state"
          />
        </div>
      </section>

      <!-- Checkbox Variants -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Checkbox Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Default Variant</h3>
            <ui-checkbox
              v-model="basicCheckbox"
              variant="default"
              label="Default variant"
              description="Filled background when checked"
            />
            <ui-checkbox v-model="checkedCheckbox" variant="default" label="Checked default" />
          </div>
          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Outlined Variant</h3>
            <ui-checkbox
              v-model="basicCheckbox"
              variant="outlined"
              label="Outlined variant"
              description="Transparent background with colored border"
            />
            <ui-checkbox v-model="checkedCheckbox" variant="outlined" label="Checked outlined" />
          </div>
        </div>
      </section>

      <!-- Checkbox Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Checkbox Sizes</h2>
        <div class="space-y-4">
          <ui-checkbox
            v-model="basicCheckbox"
            size="sm"
            label="Small checkbox"
            description="Compact size for dense layouts"
          />
          <ui-checkbox
            v-model="checkedCheckbox"
            size="md"
            label="Medium checkbox (default)"
            description="Standard size for most use cases"
          />
          <ui-checkbox
            v-model="basicCheckbox"
            size="lg"
            label="Large checkbox"
            description="Larger size for better accessibility"
          />
        </div>
      </section>

      <!-- Checkbox States -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Checkbox States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Normal States</h3>
            <ui-checkbox
              v-model="basicCheckbox"
              label="Normal checkbox"
              description="Can be checked and unchecked"
            />
            <ui-checkbox
              v-model="requiredCheckbox"
              label="Required checkbox"
              description="This field is required"
              required
            />
          </div>
          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Disabled States</h3>
            <ui-checkbox
              v-model="disabledCheckbox"
              label="Disabled unchecked"
              description="Cannot be interacted with"
              disabled
            />
            <ui-checkbox
              v-model="disabledCheckedCheckbox"
              label="Disabled checked"
              description="Checked but cannot be changed"
              disabled
            />
          </div>
        </div>
      </section>

      <!-- Error State -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Error State</h2>
        <ui-checkbox
          v-model="errorCheckbox"
          label="Terms and Conditions"
          description="You must accept the terms to continue"
          error-text="Please accept the terms and conditions"
          required
        />
      </section>

      <!-- Multiple Checkboxes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Multiple Checkboxes</h2>
        <div class="space-y-4">
          <div class="flex gap-4 mb-4">
            <button
              type="button"
              class="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200"
              @click="selectAll"
            >
              Select All
            </button>
            <button
              type="button"
              class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
              @click="selectNone"
            >
              Select None
            </button>
          </div>
          <ui-checkbox
            v-model="multipleCheckboxes.option1"
            label="Option 1"
            description="First option in the group"
            value="option1"
          />
          <ui-checkbox
            v-model="multipleCheckboxes.option2"
            label="Option 2"
            description="Second option in the group"
            value="option2"
          />
          <ui-checkbox
            v-model="multipleCheckboxes.option3"
            label="Option 3"
            description="Third option in the group"
            value="option3"
          />
          <ui-checkbox
            v-model="multipleCheckboxes.option4"
            label="Option 4"
            description="Fourth option in the group"
            value="option4"
          />
        </div>
      </section>

      <!-- Form Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Form Example</h2>
        <form class="space-y-6" @submit.prevent="console.log('Form submitted!', formCheckboxes)">
          <div class="space-y-4">
            <ui-checkbox
              v-model="formCheckboxes.newsletter"
              label="Subscribe to newsletter"
              description="Receive updates about new features and promotions"
            />
            <ui-checkbox
              v-model="formCheckboxes.terms"
              label="I agree to the Terms of Service"
              description="Please read and accept our terms of service"
              required
              :error-text="
                !formCheckboxes.terms ? 'You must accept the terms to continue' : undefined
              "
            />
            <ui-checkbox
              v-model="formCheckboxes.privacy"
              label="I agree to the Privacy Policy"
              description="Please read and accept our privacy policy"
              required
              :error-text="
                !formCheckboxes.privacy
                  ? 'You must accept the privacy policy to continue'
                  : undefined
              "
            />
            <ui-checkbox
              v-model="formCheckboxes.marketing"
              label="Allow marketing communications"
              description="We may send you promotional emails (you can unsubscribe anytime)"
            />
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors disabled:opacity-50"
              :disabled="!formCheckboxes.terms || !formCheckboxes.privacy"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <!-- Checkbox with Custom Styling -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Different Sizes Comparison</h2>
        <div class="flex items-center gap-8">
          <ui-checkbox v-model="checkedCheckbox" size="sm" label="Small" />
          <ui-checkbox v-model="checkedCheckbox" size="md" label="Medium" />
          <ui-checkbox v-model="checkedCheckbox" size="lg" label="Large" />
        </div>
      </section>
    </div>
  </div>
</template>
