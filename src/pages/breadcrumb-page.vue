<script setup lang="ts">
import { Home, FileText, Settings } from 'lucide-vue-next';
import UiBreadcrumb from '@/components/navigation/breadcrumbs/ui-breadcrumb.vue';
import type { BreadcrumbItem } from '@/components/navigation/breadcrumbs/ui-breadcrumb';

const handleNavigate = (item: BreadcrumbItem) => {
  console.log('Navigating to:', item);
};

const basicItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Settings', href: '/settings' },
  { label: 'Profile', href: '/profile' },
];

const itemsWithIcons = [
  { label: 'Dashboard', href: '/dashboard', icon: Home },
  { label: 'Documents', href: '/documents', icon: FileText },
  { label: 'Settings', href: '/settings', icon: Settings },
];
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Breadcrumb Component</h1>
      <p class="text-gray-600">
        A breadcrumb navigation component to help users navigate hierarchical paths.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Breadcrumb -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Breadcrumb</h2>
        <ui-breadcrumb :items="basicItems" @navigate="handleNavigate" />
      </section>

      <!-- Breadcrumb with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Breadcrumb with Icons</h2>
        <ui-breadcrumb :items="itemsWithIcons" @navigate="handleNavigate" />
      </section>

      <!-- Breadcrumb with Custom Separator -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Custom Separator</h2>
        <ui-breadcrumb :items="basicItems" separator=">" @navigate="handleNavigate" />
      </section>

      <!-- Breadcrumb without Home Icon -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Without Home Icon</h2>
        <ui-breadcrumb :items="basicItems" :show-home-icon="false" @navigate="handleNavigate" />
      </section>
    </div>
  </div>
</template>
