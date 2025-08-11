<script setup lang="ts">
import UiTooltip from '@/components/data/tooltip/ui-tooltip.vue';
import UiButton from '@/components/forms/button/ui-button.vue';
import { Info, HelpCircle, AlertCircle, CheckCircle } from 'lucide-vue-next';

const onTooltipShow = () => {
  console.log('Tooltip shown');
};

const onTooltipHide = () => {
  console.log('Tooltip hidden');
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Tooltip Component</h1>
      <p class="text-gray-600">
        A simple tooltip component that appears on hover or focus to provide additional context or information.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Tooltips -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Tooltips</h2>
        <div class="flex flex-wrap gap-6">
          <UiTooltip content="This is a basic tooltip" @show="onTooltipShow" @hide="onTooltipHide">
            <UiButton variant="primary">Hover me</UiButton>
          </UiTooltip>

          <UiTooltip content="Tooltips work with any content">
            <span class="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-md text-gray-700">
              <Info class="h-4 w-4" />
              Hover for info
            </span>
          </UiTooltip>

          <UiTooltip content="Even plain text works">
            <span class="text-blue-600 underline cursor-help">Underlined text</span>
          </UiTooltip>
        </div>
      </section>

      <!-- Tooltip Placements -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Tooltip Placements</h2>
        <div class="flex justify-center">
          <div class="grid grid-cols-3 gap-8 items-center">
            <div></div>
            <UiTooltip content="Tooltip on top" placement="top">
              <UiButton variant="outline">Top</UiButton>
            </UiTooltip>
            <div></div>

            <UiTooltip content="Tooltip on left" placement="left">
              <UiButton variant="outline">Left</UiButton>
            </UiTooltip>
            <div class="text-center text-gray-500 text-sm">Hover buttons</div>
            <UiTooltip content="Tooltip on right" placement="right">
              <UiButton variant="outline">Right</UiButton>
            </UiTooltip>

            <div></div>
            <UiTooltip content="Tooltip on bottom" placement="bottom">
              <UiButton variant="outline">Bottom</UiButton>
            </UiTooltip>
            <div></div>
          </div>
        </div>
      </section>

      <!-- Tooltip Themes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Tooltip Themes</h2>
        <div class="flex flex-wrap gap-6">
          <UiTooltip content="Dark theme tooltip (default)" theme="dark">
            <UiButton variant="secondary">Dark Theme</UiButton>
          </UiTooltip>

          <UiTooltip content="Light theme tooltip" theme="light">
            <UiButton variant="secondary">Light Theme</UiButton>
          </UiTooltip>
        </div>
      </section>

      <!-- Tooltip with Delay -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Tooltip with Delay</h2>
        <div class="flex flex-wrap gap-6">
          <UiTooltip content="Appears immediately" :delay="0">
            <UiButton variant="info">No delay</UiButton>
          </UiTooltip>

          <UiTooltip content="Appears after 500ms delay" :delay="500">
            <UiButton variant="info">500ms delay</UiButton>
          </UiTooltip>

          <UiTooltip content="Appears after 1 second delay" :delay="1000">
            <UiButton variant="info">1s delay</UiButton>
          </UiTooltip>
        </div>
      </section>

      <!-- Arrow Options -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Arrow Options</h2>
        <div class="flex flex-wrap gap-6">
          <UiTooltip content="Tooltip with arrow (default)" :arrow="true">
            <UiButton variant="success">With Arrow</UiButton>
          </UiTooltip>

          <UiTooltip content="Tooltip without arrow" :arrow="false">
            <UiButton variant="success">No Arrow</UiButton>
          </UiTooltip>
        </div>
      </section>

      <!-- Disabled Tooltip -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Tooltip</h2>
        <div class="flex flex-wrap gap-6">
          <UiTooltip content="This tooltip is enabled" :disabled="false">
            <UiButton variant="warning">Enabled Tooltip</UiButton>
          </UiTooltip>

          <UiTooltip content="This tooltip is disabled" :disabled="true">
            <UiButton variant="warning" disabled>Disabled Tooltip</UiButton>
          </UiTooltip>
        </div>
      </section>

      <!-- Tooltip with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Tooltips with Icons</h2>
        <div class="flex flex-wrap gap-6">
          <UiTooltip content="Get help with this feature">
            <button class="inline-flex items-center gap-2 px-3 py-2 text-blue-600 hover:text-blue-800 transition-colors">
              <HelpCircle class="h-5 w-5" />
              Help
            </button>
          </UiTooltip>

          <UiTooltip content="Important information about this item">
            <button class="inline-flex items-center gap-2 px-3 py-2 text-amber-600 hover:text-amber-800 transition-colors">
              <AlertCircle class="h-5 w-5" />
              Warning
            </button>
          </UiTooltip>

          <UiTooltip content="This action completed successfully">
            <button class="inline-flex items-center gap-2 px-3 py-2 text-green-600 hover:text-green-800 transition-colors">
              <CheckCircle class="h-5 w-5" />
              Success
            </button>
          </UiTooltip>
        </div>
      </section>

      <!-- Long Content Tooltip -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Long Content Tooltip</h2>
        <div class="flex flex-wrap gap-6">
          <UiTooltip content="This is a very long tooltip content that will wrap to multiple lines when the text becomes too long to fit in a single line. The tooltip has a maximum width and will break words appropriately.">
            <UiButton variant="primary">Long Content</UiButton>
          </UiTooltip>
        </div>
      </section>

      <!-- Usage Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Real-world Usage</h2>
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <label for="email" class="text-sm font-medium text-gray-700">Email Address</label>
            <UiTooltip content="We'll never share your email with anyone else">
              <Info class="h-4 w-4 text-gray-400 cursor-help" />
            </UiTooltip>
          </div>
          <input
            id="email"
            type="email"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
      </section>
    </div>
  </div>
</template>