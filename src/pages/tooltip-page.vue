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
        A simple tooltip component that appears on hover or focus to provide additional context or
        information.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Tooltips -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Tooltips</h2>
        <div class="flex flex-wrap gap-6">
          <ui-tooltip content="This is a basic tooltip" @show="onTooltipShow" @hide="onTooltipHide">
            <ui-button variant="primary">Hover me</ui-button>
          </ui-tooltip>

          <ui-tooltip content="Tooltips work with any content">
            <span
              class="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-md text-gray-700"
            >
              <info class="h-4 w-4" />
              Hover for info
            </span>
          </ui-tooltip>

          <ui-tooltip content="Even plain text works">
            <span class="text-blue-600 underline cursor-help">Underlined text</span>
          </ui-tooltip>
        </div>
      </section>

      <!-- Tooltip Placements -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Tooltip Placements</h2>
        <div class="flex justify-center">
          <div class="grid grid-cols-3 gap-8 items-center">
            <div></div>
            <ui-tooltip content="Tooltip on top" placement="top">
              <ui-button variant="outline">Top</ui-button>
            </ui-tooltip>
            <div></div>

            <ui-tooltip content="Tooltip on left" placement="left">
              <ui-button variant="outline">Left</ui-button>
            </ui-tooltip>
            <div class="text-center text-gray-500 text-sm">Hover buttons</div>
            <ui-tooltip content="Tooltip on right" placement="right">
              <ui-button variant="outline">Right</ui-button>
            </ui-tooltip>

            <div></div>
            <ui-tooltip content="Tooltip on bottom" placement="bottom">
              <ui-button variant="outline">Bottom</ui-button>
            </ui-tooltip>
            <div></div>
          </div>
        </div>
      </section>

      <!-- Tooltip Themes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Tooltip Themes</h2>
        <div class="flex flex-wrap gap-6">
          <ui-tooltip content="Dark theme tooltip (default)" theme="dark">
            <ui-button variant="secondary">Dark Theme</ui-button>
          </ui-tooltip>

          <ui-tooltip content="Light theme tooltip" theme="light">
            <ui-button variant="secondary">Light Theme</ui-button>
          </ui-tooltip>
        </div>
      </section>

      <!-- Tooltip with Delay -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Tooltip with Delay</h2>
        <div class="flex flex-wrap gap-6">
          <ui-tooltip content="Appears immediately" :delay="0">
            <ui-button variant="info">No delay</ui-button>
          </ui-tooltip>

          <ui-tooltip content="Appears after 500ms delay" :delay="500">
            <ui-button variant="info">500ms delay</ui-button>
          </ui-tooltip>

          <ui-tooltip content="Appears after 1 second delay" :delay="1000">
            <ui-button variant="info">1s delay</ui-button>
          </ui-tooltip>
        </div>
      </section>

      <!-- Arrow Options -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Arrow Options</h2>
        <div class="flex flex-wrap gap-6">
          <ui-tooltip content="Tooltip with arrow (default)" :arrow="true">
            <ui-button variant="success">With Arrow</ui-button>
          </ui-tooltip>

          <ui-tooltip content="Tooltip without arrow" :arrow="false">
            <ui-button variant="success">No Arrow</ui-button>
          </ui-tooltip>
        </div>
      </section>

      <!-- Disabled Tooltip -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Tooltip</h2>
        <div class="flex flex-wrap gap-6">
          <ui-tooltip content="This tooltip is enabled" :disabled="false">
            <ui-button variant="warning">Enabled Tooltip</ui-button>
          </ui-tooltip>

          <ui-tooltip content="This tooltip is disabled" :disabled="true">
            <ui-button variant="warning" disabled>Disabled Tooltip</ui-button>
          </ui-tooltip>
        </div>
      </section>

      <!-- Tooltip with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Tooltips with Icons</h2>
        <div class="flex flex-wrap gap-6">
          <ui-tooltip content="Get help with this feature">
            <button
              class="inline-flex items-center gap-2 px-3 py-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <help-circle class="h-5 w-5" />
              Help
            </button>
          </ui-tooltip>

          <ui-tooltip content="Important information about this item">
            <button
              class="inline-flex items-center gap-2 px-3 py-2 text-amber-600 hover:text-amber-800 transition-colors"
            >
              <alert-circle class="h-5 w-5" />
              Warning
            </button>
          </ui-tooltip>

          <ui-tooltip content="This action completed successfully">
            <button
              class="inline-flex items-center gap-2 px-3 py-2 text-green-600 hover:text-green-800 transition-colors"
            >
              <check-circle class="h-5 w-5" />
              Success
            </button>
          </ui-tooltip>
        </div>
      </section>

      <!-- Long Content Tooltip -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Long Content Tooltip</h2>
        <div class="flex flex-wrap gap-6">
          <ui-tooltip
            content="This is a very long tooltip content that will wrap to multiple lines when the text becomes too long to fit in a single line. The tooltip has a maximum width and will break words appropriately."
          >
            <ui-button variant="primary">Long Content</ui-button>
          </ui-tooltip>
        </div>
      </section>

      <!-- Usage Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Real-world Usage</h2>
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <label for="email" class="text-sm font-medium text-gray-700">Email Address</label>
            <ui-tooltip content="We'll never share your email with anyone else">
              <info class="h-4 w-4 text-gray-400 cursor-help" />
            </ui-tooltip>
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
