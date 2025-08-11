<script setup lang="ts">
import { ref } from 'vue';
import { Home, Settings, User, Mail, Bell, Heart, Star, Calendar } from 'lucide-vue-next';
import UiMenu from '@/components/navigation/menu/ui-menu.vue';
import type { MenuItem } from '@/components/navigation/menu/ui-menu';

const activeItem = ref('dashboard');

const handleSelect = (item: MenuItem) => {
  console.log('Selected item:', item);
};

const verticalMenuItems = [
  { label: 'Dashboard', value: 'dashboard', icon: Home },
  { label: 'Profile', value: 'profile', icon: User },
  {
    label: 'Settings',
    value: 'settings',
    icon: Settings,
    children: [
      { label: 'Account', value: 'account' },
      { label: 'Security', value: 'security' },
      { label: 'Notifications', value: 'notifications' },
    ],
  },
  {
    label: 'Messages',
    value: 'messages',
    icon: Mail,
    children: [
      { label: 'Inbox', value: 'inbox' },
      { label: 'Sent', value: 'sent' },
      { label: 'Drafts', value: 'drafts', disabled: true },
    ],
  },
  { label: 'Calendar', value: 'calendar', icon: Calendar },
  { label: 'Disabled Item', value: 'disabled', icon: Bell, disabled: true },
];

const horizontalMenuItems = [
  { label: 'Home', value: 'home', icon: Home },
  {
    label: 'Products',
    value: 'products',
    children: [
      { label: 'Category 1', value: 'category1' },
      { label: 'Category 2', value: 'category2' },
      { label: 'Category 3', value: 'category3' },
    ],
  },
  {
    label: 'Services',
    value: 'services',
    children: [
      { label: 'Consulting', value: 'consulting' },
      { label: 'Development', value: 'development' },
      { label: 'Support', value: 'support' },
    ],
  },
  { label: 'About', value: 'about' },
  { label: 'Contact', value: 'contact' },
];

const collapsibleMenuItems = [
  { label: 'Item 1', value: 'item1', icon: Star },
  { label: 'Item 2', value: 'item2', icon: Heart },
  { label: 'Item 3', value: 'item3', icon: Bell },
];
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Menu Component</h1>
      <p class="text-gray-600">
        A versatile menu component for navigation with support for vertical and horizontal layouts.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Vertical Menu -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Vertical Menu</h2>
        <div class="max-w-xs">
          <UiMenu
            v-model:active-item="activeItem"
            :items="verticalMenuItems"
            @select="handleSelect"
          />
        </div>
        <p v-if="activeItem" class="mt-4 text-sm text-gray-600">Active item: {{ activeItem }}</p>
      </section>

      <!-- Horizontal Menu -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Horizontal Menu</h2>
        <UiMenu :items="horizontalMenuItems" variant="horizontal" @select="handleSelect" />
      </section>

      <!-- Menu with Title -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Menu with Title</h2>
        <div class="max-w-xs">
          <UiMenu :items="verticalMenuItems" title="Navigation" @select="handleSelect" />
        </div>
      </section>

      <!-- Collapsible Menu -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Collapsible Menu</h2>
        <div class="max-w-xs">
          <UiMenu
            :items="collapsibleMenuItems"
            title="Collapsible Menu"
            :collapsible="true"
            @select="handleSelect"
          />
        </div>
      </section>
    </div>
  </div>
</template>
