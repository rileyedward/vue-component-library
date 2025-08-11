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
        <p class="text-gray-600 text-sm mb-4">Form inputs and data collection</p>
        <div class="space-y-2">
          <RouterLink
            to="/button"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Button →
          </RouterLink>
          <RouterLink
            to="/input"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Input →
          </RouterLink>
          <RouterLink
            to="/textarea"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Textarea →
          </RouterLink>
          <RouterLink
            to="/select"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Select →
          </RouterLink>
          <RouterLink
            to="/checkbox"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Checkbox →
          </RouterLink>
          <RouterLink
            to="/radio"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Radio →
          </RouterLink>
          <RouterLink
            to="/multiselect"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            MultiSelect →
          </RouterLink>
          <RouterLink
            to="/datepicker"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            DatePicker →
          </RouterLink>
        </div>
      </div>

      <!-- Navigation Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Navigation</h3>
        <p class="text-gray-600 text-sm mb-4">Navigation and wayfinding</p>
        <div class="space-y-2">
          <RouterLink
            to="/breadcrumb"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Breadcrumb →
          </RouterLink>
          <RouterLink
            to="/dropdown"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Dropdown →
          </RouterLink>
          <RouterLink
            to="/menu"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Menu →
          </RouterLink>
        </div>
      </div>

      <!-- Feedback Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Feedback</h3>
        <p class="text-gray-600 text-sm mb-4">User feedback and notifications</p>
        <div class="space-y-2">
          <RouterLink
            to="/alert"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Alert →
          </RouterLink>
          <RouterLink
            to="/toast"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Toast →
          </RouterLink>
          <RouterLink
            to="/modal"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Modal →
          </RouterLink>
        </div>
      </div>

      <!-- Layout Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Layout</h3>
        <p class="text-gray-600 text-sm mb-4">Layout and structure components</p>
        <div class="space-y-2">
          <RouterLink
            to="/card"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Card →
          </RouterLink>
          <RouterLink
            to="/container"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Container →
          </RouterLink>
          <RouterLink
            to="/drawer"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Drawer →
          </RouterLink>
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
        </div>
      </div>
    </div>
  </div>
</template>
