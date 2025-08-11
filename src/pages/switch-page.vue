<script setup lang="ts">
import { ref } from 'vue';
import UiSwitch from '@/components/forms/switch/ui-switch.vue';
import { Sun, Moon, Check, X, Bell, BellOff, Wifi, WifiOff } from 'lucide-vue-next';

const basicValue = ref(false);
const withTextValue = ref(true);
const withIconsValue = ref(false);
const sizesValue = {
  sm: ref(false),
  md: ref(true),
  lg: ref(false),
};
const colorsValue = {
  primary: ref(true),
  success: ref(true),
  danger: ref(false),
  warning: ref(true),
  info: ref(false),
};
const disabledValue = ref(true);
const withLabelValue = ref(false);
const withErrorValue = ref(false);
const withHelperTextValue = ref(true);

const handleChange = (value: boolean) => {
  console.log('Switch value changed:', value);
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Switch Component</h1>
      <p class="text-gray-600">
        A customizable switch component for toggling between true/false values, with support for text and icons.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Switch -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Switch</h2>
        <div>
          <UiSwitch v-model="basicValue" @change="handleChange" />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ basicValue ? 'On' : 'Off' }}
          </div>
        </div>
      </section>

      <!-- Switch with Text -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Switch with Text</h2>
        <div>
          <UiSwitch
            v-model="withTextValue"
            leftText="Off"
            rightText="On"
            @change="handleChange"
          />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ withTextValue ? 'On' : 'Off' }}
          </div>
        </div>
      </section>

      <!-- Switch with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Switch with Icons</h2>
        <div>
          <UiSwitch
            v-model="withIconsValue"
            :leftIcon="Moon"
            :rightIcon="Sun"
            @change="handleChange"
          />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ withIconsValue ? 'Light Mode' : 'Dark Mode' }}
          </div>
        </div>
      </section>

      <!-- Switch Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Switch Sizes</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Small</h3>
            <UiSwitch
              v-model="sizesValue.sm"
              size="sm"
              @change="handleChange"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Medium (Default)</h3>
            <UiSwitch
              v-model="sizesValue.md"
              size="md"
              @change="handleChange"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Large</h3>
            <UiSwitch
              v-model="sizesValue.lg"
              size="lg"
              @change="handleChange"
            />
          </div>
        </div>
      </section>

      <!-- Switch Colors -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Switch Colors</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Primary (Default)</h3>
            <UiSwitch
              v-model="colorsValue.primary"
              color="primary"
              @change="handleChange"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Success</h3>
            <UiSwitch
              v-model="colorsValue.success"
              color="success"
              @change="handleChange"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Danger</h3>
            <UiSwitch
              v-model="colorsValue.danger"
              color="danger"
              @change="handleChange"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Warning</h3>
            <UiSwitch
              v-model="colorsValue.warning"
              color="warning"
              @change="handleChange"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Info</h3>
            <UiSwitch
              v-model="colorsValue.info"
              color="info"
              @change="handleChange"
            />
          </div>
        </div>
      </section>

      <!-- Disabled Switch -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Switch</h2>
        <div>
          <UiSwitch
            v-model="disabledValue"
            disabled
          />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ disabledValue ? 'On' : 'Off' }} (Disabled)
          </div>
        </div>
      </section>

      <!-- Switch with Label -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Switch with Label</h2>
        <div>
          <UiSwitch
            v-model="withLabelValue"
            label="Enable notifications"
            :leftIcon="BellOff"
            :rightIcon="Bell"
            @change="handleChange"
          />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ withLabelValue ? 'Enabled' : 'Disabled' }}
          </div>
        </div>
      </section>

      <!-- Switch with Helper Text -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Switch with Helper Text</h2>
        <div>
          <UiSwitch
            v-model="withHelperTextValue"
            label="Enable Wi-Fi"
            :leftIcon="WifiOff"
            :rightIcon="Wifi"
            helperText="Toggle to enable or disable Wi-Fi connection"
            @change="handleChange"
          />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ withHelperTextValue ? 'Enabled' : 'Disabled' }}
          </div>
        </div>
      </section>

      <!-- Switch with Error -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Switch with Error</h2>
        <div>
          <UiSwitch
            v-model="withErrorValue"
            label="Accept terms and conditions"
            :leftIcon="X"
            :rightIcon="Check"
            error="You must accept the terms and conditions to continue"
            @change="handleChange"
          />
          <div class="mt-4 text-sm text-gray-500">
            Current value: {{ withErrorValue ? 'Accepted' : 'Not accepted' }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
