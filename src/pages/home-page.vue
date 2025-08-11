<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Actions Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Actions</h3>
        <p class="text-gray-600 text-sm mb-4">Interactive components for user actions</p>
        <div class="space-y-2">
          <RouterLink
            to="/components/button"
            class="block text-purple-600 hover:text-purple-800 text-sm font-medium"
          >
            Button →
          </RouterLink>
        </div>
      </div>

      <!-- Data Entry Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Data Entry</h3>
        <p class="text-gray-600 text-sm mb-4">Form inputs and data collection</p>
        <div class="space-y-2">
          <span class="block text-gray-400 text-sm">Input (Coming Soon)</span>
          <span class="block text-gray-400 text-sm">Textarea (Coming Soon)</span>
          <span class="block text-gray-400 text-sm">Select (Coming Soon)</span>
          <span class="block text-gray-400 text-sm">Checkbox (Coming Soon)</span>
        </div>
      </div>

      <!-- Feedback Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Feedback</h3>
        <p class="text-gray-600 text-sm mb-4">User feedback and notifications</p>
        <div class="space-y-2">
          <span class="block text-gray-400 text-sm">Alert (Coming Soon)</span>
          <span class="block text-gray-400 text-sm">Toast (Coming Soon)</span>
          <span class="block text-gray-400 text-sm">Modal (Coming Soon)</span>
        </div>
      </div>

      <!-- Navigation Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Navigation</h3>
        <p class="text-gray-600 text-sm mb-4">Navigation and wayfinding</p>
        <div class="space-y-2">
          <span class="block text-gray-400 text-sm">Navbar (Coming Soon)</span>
          <span class="block text-gray-400 text-sm">Sidebar (Coming Soon)</span>
          <span class="block text-gray-400 text-sm">Breadcrumbs (Coming Soon)</span>
          <span class="block text-gray-400 text-sm">Menu (Coming Soon)</span>
        </div>
      </div>

      <!-- Layout Components -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Layout</h3>
        <p class="text-gray-600 text-sm mb-4">Layout and structure components</p>
        <div class="space-y-2">
          <span class="block text-gray-400 text-sm">Card (Coming Soon)</span>
          <span class="block text-gray-400 text-sm">Container (Coming Soon)</span>
          <span class="block text-gray-400 text-sm">Table (Coming Soon)</span>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <div class="bg-gray-50 rounded-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
        <p class="text-gray-600 mb-6">
          This component library is built with modern web technologies and best practices.
        </p>
        <div class="flex justify-center space-x-6 text-sm">
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
