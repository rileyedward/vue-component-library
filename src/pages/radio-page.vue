<script setup lang="ts">
import { ref } from 'vue';
import UiRadio from '@/components/forms/radio/ui-radio.vue';

const selectedOption = ref('option2');
const selectedSize = ref('md');
const selectedVariant = ref('default');
const selectedColor = ref('blue');
const selectedPlan = ref('pro');
const selectedPayment = ref('monthly');
const selectedCategory = ref('');
const disabledSelection = ref('option1');

const formData = ref({
  gender: '',
  experience: '',
  contact: '',
  subscription: 'free',
});

const handleChange = (value: string | number | boolean, event: Event) => {
  console.log('Radio changed:', value, event);
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Radio Component</h1>
      <p class="text-gray-600">
        A customizable radio button component with support for labels, descriptions, and various
        states.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Radio Buttons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Radio Buttons</h2>
        <div class="space-y-4">
          <p class="text-sm text-gray-600 mb-4">Selected: {{ selectedOption }}</p>
          <UiRadio
            v-model="selectedOption"
            value="option1"
            name="basic-radio"
            label="Option 1"
            @change="handleChange"
          />
          <UiRadio
            v-model="selectedOption"
            value="option2"
            name="basic-radio"
            label="Option 2"
            description="This option is pre-selected"
          />
          <UiRadio
            v-model="selectedOption"
            value="option3"
            name="basic-radio"
            label="Option 3"
            description="Another option to choose from"
          />
        </div>
      </section>

      <!-- Radio Variants -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Radio Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Default Variant</h3>
            <p class="text-sm text-gray-600 mb-4">Selected: {{ selectedVariant }}</p>
            <UiRadio
              v-model="selectedVariant"
              value="default"
              name="variant-default"
              variant="default"
              label="Default variant"
              description="Filled background when selected"
            />
            <UiRadio
              v-model="selectedVariant"
              value="default2"
              name="variant-default"
              variant="default"
              label="Another option"
            />
          </div>
          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Outlined Variant</h3>
            <p class="text-sm text-gray-600 mb-4">Selected: {{ selectedVariant }}</p>
            <UiRadio
              v-model="selectedVariant"
              value="outlined"
              name="variant-outlined"
              variant="outlined"
              label="Outlined variant"
              description="Transparent background with colored border"
            />
            <UiRadio
              v-model="selectedVariant"
              value="outlined2"
              name="variant-outlined"
              variant="outlined"
              label="Another outlined option"
            />
          </div>
        </div>
      </section>

      <!-- Radio Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Radio Sizes</h2>
        <div class="space-y-4">
          <p class="text-sm text-gray-600 mb-4">Selected size: {{ selectedSize }}</p>
          <UiRadio
            v-model="selectedSize"
            value="sm"
            name="size-radio"
            size="sm"
            label="Small radio"
            description="Compact size for dense layouts"
          />
          <UiRadio
            v-model="selectedSize"
            value="md"
            name="size-radio"
            size="md"
            label="Medium radio (default)"
            description="Standard size for most use cases"
          />
          <UiRadio
            v-model="selectedSize"
            value="lg"
            name="size-radio"
            size="lg"
            label="Large radio"
            description="Larger size for better accessibility"
          />
        </div>
      </section>

      <!-- Radio States -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Radio States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Normal States</h3>
            <UiRadio
              v-model="selectedCategory"
              value="category1"
              name="normal-radio"
              label="Normal radio"
              description="Can be selected"
            />
            <UiRadio
              v-model="selectedCategory"
              value="category2"
              name="normal-radio"
              label="Required radio"
              description="This field is required"
              required
            />
          </div>
          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Disabled States</h3>
            <UiRadio
              v-model="disabledSelection"
              value="disabled1"
              name="disabled-radio"
              label="Disabled unselected"
              description="Cannot be interacted with"
              disabled
            />
            <UiRadio
              v-model="disabledSelection"
              value="option1"
              name="disabled-radio"
              label="Disabled selected"
              description="Selected but cannot be changed"
              disabled
            />
          </div>
        </div>
      </section>

      <!-- Color Preferences -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Color Preferences</h2>
        <p class="text-sm text-gray-600 mb-4">Favorite color: {{ selectedColor }}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <UiRadio v-model="selectedColor" value="red" name="color-radio" label="Red" />
          <UiRadio v-model="selectedColor" value="blue" name="color-radio" label="Blue" />
          <UiRadio v-model="selectedColor" value="green" name="color-radio" label="Green" />
          <UiRadio v-model="selectedColor" value="yellow" name="color-radio" label="Yellow" />
          <UiRadio v-model="selectedColor" value="purple" name="color-radio" label="Purple" />
          <UiRadio v-model="selectedColor" value="orange" name="color-radio" label="Orange" />
        </div>
      </section>

      <!-- Subscription Plans -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Subscription Plans</h2>
        <p class="text-sm text-gray-600 mb-4">Selected plan: {{ selectedPlan }}</p>
        <div class="space-y-4">
          <UiRadio
            v-model="selectedPlan"
            value="free"
            name="plan-radio"
            label="Free Plan"
            description="Basic features with limited usage"
          />
          <UiRadio
            v-model="selectedPlan"
            value="pro"
            name="plan-radio"
            label="Pro Plan ($19/month)"
            description="Advanced features with unlimited usage"
          />
          <UiRadio
            v-model="selectedPlan"
            value="enterprise"
            name="plan-radio"
            label="Enterprise Plan ($99/month)"
            description="All features plus priority support"
          />
        </div>
      </section>

      <!-- Payment Frequency -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Payment Frequency</h2>
        <p class="text-sm text-gray-600 mb-4">Selected frequency: {{ selectedPayment }}</p>
        <div class="flex flex-wrap gap-6">
          <UiRadio
            v-model="selectedPayment"
            value="monthly"
            name="payment-radio"
            label="Monthly"
            description="Pay every month"
          />
          <UiRadio
            v-model="selectedPayment"
            value="quarterly"
            name="payment-radio"
            label="Quarterly"
            description="Pay every 3 months (5% discount)"
          />
          <UiRadio
            v-model="selectedPayment"
            value="yearly"
            name="payment-radio"
            label="Yearly"
            description="Pay annually (20% discount)"
          />
        </div>
      </section>

      <!-- Form Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Form Example</h2>
        <form class="space-y-8" @submit.prevent="console.log('Form submitted!', formData)">
          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Gender</h3>
            <div class="flex flex-wrap gap-6">
              <UiRadio v-model="formData.gender" value="male" name="gender" label="Male" required />
              <UiRadio
                v-model="formData.gender"
                value="female"
                name="gender"
                label="Female"
                required
              />
              <UiRadio
                v-model="formData.gender"
                value="other"
                name="gender"
                label="Other"
                required
              />
              <UiRadio
                v-model="formData.gender"
                value="prefer-not-to-say"
                name="gender"
                label="Prefer not to say"
                required
              />
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Experience Level</h3>
            <div class="space-y-3">
              <UiRadio
                v-model="formData.experience"
                value="beginner"
                name="experience"
                label="Beginner"
                description="0-1 years of experience"
                required
              />
              <UiRadio
                v-model="formData.experience"
                value="intermediate"
                name="experience"
                label="Intermediate"
                description="2-5 years of experience"
                required
              />
              <UiRadio
                v-model="formData.experience"
                value="advanced"
                name="experience"
                label="Advanced"
                description="5+ years of experience"
                required
              />
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="font-medium text-gray-900">Preferred Contact Method</h3>
            <div class="space-y-3">
              <UiRadio
                v-model="formData.contact"
                value="email"
                name="contact"
                label="Email"
                description="Receive updates via email"
              />
              <UiRadio
                v-model="formData.contact"
                value="sms"
                name="contact"
                label="SMS"
                description="Receive updates via text message"
              />
              <UiRadio
                v-model="formData.contact"
                value="phone"
                name="contact"
                label="Phone Call"
                description="Receive updates via phone call"
              />
              <UiRadio
                v-model="formData.contact"
                value="none"
                name="contact"
                label="No contact"
                description="Don't send me updates"
              />
            </div>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              class="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors disabled:opacity-50"
              :disabled="!formData.gender || !formData.experience"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <!-- Size Comparison -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Size Comparison</h2>
        <div class="flex items-center gap-8">
          <UiRadio
            v-model="selectedSize"
            value="sm-compare"
            name="size-compare"
            size="sm"
            label="Small"
          />
          <UiRadio
            v-model="selectedSize"
            value="md-compare"
            name="size-compare"
            size="md"
            label="Medium"
          />
          <UiRadio
            v-model="selectedSize"
            value="lg-compare"
            name="size-compare"
            size="lg"
            label="Large"
          />
        </div>
      </section>
    </div>
  </div>
</template>
