<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Vue Component Library</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">
        A collection of reusable, accessible, and customizable Vue 3 components built with
        TypeScript and Tailwind CSS.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Forms Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Forms</h3>
        <p class="text-gray-600 text-sm mb-4">Interactive form inputs and controls</p>
        <div class="space-y-2">
          <router-link
            to="/button"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Button →
          </router-link>
          <router-link
            to="/input"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Input →
          </router-link>
          <router-link
            to="/textarea"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Textarea →
          </router-link>
          <router-link
            to="/select"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Select →
          </router-link>
          <router-link
            to="/checkbox"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Checkbox →
          </router-link>
          <router-link
            to="/radio"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Radio →
          </router-link>
          <router-link
            to="/multiselect"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            MultiSelect →
          </router-link>
          <router-link
            to="/datepicker"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            DatePicker →
          </router-link>
          <router-link
            to="/slider"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Slider →
          </router-link>
          <router-link
            to="/range"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Range →
          </router-link>
          <router-link
            to="/counter"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Counter →
          </router-link>
          <router-link
            to="/file-upload"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            File Upload →
          </router-link>
          <router-link
            to="/switch"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Switch →
          </router-link>
        </div>
      </div>

      <!-- Navigation Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Navigation</h3>
        <p class="text-gray-600 text-sm mb-4">Navigation and menu components</p>
        <div class="space-y-2">
          <router-link
            to="/breadcrumb"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Breadcrumb →
          </router-link>
          <router-link
            to="/dropdown"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Dropdown →
          </router-link>
          <router-link
            to="/dropdown-menu"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Dropdown Menu →
          </router-link>
          <router-link
            to="/menu"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Menu →
          </router-link>
          <router-link
            to="/tab"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Tab →
          </router-link>
        </div>
      </div>

      <!-- Feedback Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Feedback</h3>
        <p class="text-gray-600 text-sm mb-4">User feedback and notifications</p>
        <div class="space-y-2">
          <router-link
            to="/alert"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Alert →
          </router-link>
          <router-link
            to="/toast"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Toast →
          </router-link>
          <router-link
            to="/modal"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Modal →
          </router-link>
        </div>
      </div>

      <!-- Layout Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Layout</h3>
        <p class="text-gray-600 text-sm mb-4">Layout and structural components</p>
        <div class="space-y-2">
          <router-link
            to="/card"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Card →
          </router-link>
          <router-link
            to="/container"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Container →
          </router-link>
          <router-link
            to="/drawer"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Drawer →
          </router-link>
        </div>
      </div>

      <!-- Data Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Data</h3>
        <p class="text-gray-600 text-sm mb-4">Data display and interaction</p>
        <div class="space-y-2">
          <router-link
            to="/accordion"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Accordion →
          </router-link>
          <router-link
            to="/chart"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Chart →
          </router-link>
          <router-link
            to="/table"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Table →
          </router-link>
          <router-link
            to="/tooltip"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Tooltip →
          </router-link>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <div class="bg-gray-50 rounded-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Built With</h2>
        <p class="text-gray-600 mb-6">
          This component library is built with modern web technologies and best practices.
        </p>
        <div class="flex flex-wrap justify-center gap-6 text-sm">
          <div class="flex items-center">
            <div class="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
            <span>Vue 3</span>
          </div>
          <div class="flex items-center">
            <div class="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
            <span>TypeScript</span>
          </div>
          <div class="flex items-center">
            <div class="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
            <span>Tailwind CSS</span>
          </div>
          <div class="flex items-center">
            <div class="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
            <span>Lucide Icons</span>
          </div>
          <div class="flex items-center">
            <div class="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
            <span>Chart.js</span>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Component Statistics</h3>
          <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div>
              <div class="text-2xl font-bold text-purple-600">13</div>
              <div class="text-sm text-gray-600">Form Components</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-purple-600">5</div>
              <div class="text-sm text-gray-600">Navigation</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-purple-600">3</div>
              <div class="text-sm text-gray-600">Feedback</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-purple-600">3</div>
              <div class="text-sm text-gray-600">Layout</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-purple-600">4</div>
              <div class="text-sm text-gray-600">Data Display</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
