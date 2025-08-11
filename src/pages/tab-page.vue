<script setup lang="ts">
import { ref } from 'vue';
import { Home, Settings, User, Mail, Bell, Heart, Star } from 'lucide-vue-next';
import UiTab from '@/components/navigation/tab/ui-tab.vue';
import type { TabItem } from '@/components/navigation/tab/ui-tab';

const selectedTab = ref('home');
const selectedPillsTab = ref('profile');
const selectedUnderlineTab = ref('messages');
const selectedIconTab = ref('notifications');
const selectedFullWidthTab = ref('settings');

const handleChange = (item: TabItem) => {
  console.log('Tab changed:', item);
};

const basicTabs = [
  { label: 'Home', value: 'home' },
  { label: 'Profile', value: 'profile' },
  { label: 'Settings', value: 'settings' },
  { label: 'Messages', value: 'messages' },
];

const pillsTabs = [
  { label: 'Profile', value: 'profile' },
  { label: 'Account', value: 'account' },
  { label: 'Security', value: 'security' },
  { label: 'Notifications', value: 'notifications' },
];

const underlineTabs = [
  { label: 'Messages', value: 'messages' },
  { label: 'Archive', value: 'archive' },
  { label: 'Spam', value: 'spam' },
  { label: 'Drafts', value: 'drafts' },
];

const iconTabs = [
  { label: 'Home', value: 'home', icon: Home },
  { label: 'Profile', value: 'profile', icon: User },
  { label: 'Messages', value: 'messages', icon: Mail },
  { label: 'Notifications', value: 'notifications', icon: Bell },
];

const fullWidthTabs = [
  { label: 'Settings', value: 'settings', icon: Settings },
  { label: 'Favorites', value: 'favorites', icon: Heart },
  { label: 'Starred', value: 'starred', icon: Star },
];

const disabledTabs = [
  { label: 'Active Tab', value: 'active' },
  { label: 'Disabled Tab', value: 'disabled', disabled: true },
  { label: 'Another Active', value: 'another' },
  { label: 'Also Disabled', value: 'also-disabled', disabled: true },
];
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Tab Component</h1>
      <p class="text-gray-600">A versatile tab component for switching between different views.</p>
    </header>

    <div class="space-y-12">
      <!-- Basic Tabs -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Tabs</h2>
        <UiTab v-model="selectedTab" :items="basicTabs" @change="handleChange">
          <template #default="{ activeTab }">
            <div class="p-4 bg-gray-50 rounded-md">
              <p>Content for {{ activeTab?.label }} tab</p>
            </div>
          </template>
        </UiTab>
      </section>

      <!-- Pills Tabs -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Pills Tabs</h2>
        <UiTab v-model="selectedPillsTab" :items="pillsTabs" variant="pills" @change="handleChange">
          <template #default="{ activeTab }">
            <div class="p-4 bg-gray-50 rounded-md">
              <p>Content for {{ activeTab?.label }} tab</p>
            </div>
          </template>
        </UiTab>
      </section>

      <!-- Underline Tabs -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Underline Tabs</h2>
        <UiTab
          v-model="selectedUnderlineTab"
          :items="underlineTabs"
          variant="underline"
          @change="handleChange"
        >
          <template #default="{ activeTab }">
            <div class="p-4 bg-gray-50 rounded-md">
              <p>Content for {{ activeTab?.label }} tab</p>
            </div>
          </template>
        </UiTab>
      </section>

      <!-- Tabs with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Tabs with Icons</h2>
        <UiTab v-model="selectedIconTab" :items="iconTabs" @change="handleChange">
          <template #default="{ activeTab }">
            <div class="p-4 bg-gray-50 rounded-md">
              <p>Content for {{ activeTab?.label }} tab</p>
            </div>
          </template>
        </UiTab>
      </section>

      <!-- Full Width Tabs -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Full Width Tabs</h2>
        <UiTab
          v-model="selectedFullWidthTab"
          :items="fullWidthTabs"
          :full-width="true"
          @change="handleChange"
        >
          <template #default="{ activeTab }">
            <div class="p-4 bg-gray-50 rounded-md">
              <p>Content for {{ activeTab?.label }} tab</p>
            </div>
          </template>
        </UiTab>
      </section>

      <!-- Disabled Tabs -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Tabs</h2>
        <UiTab v-model="selectedTab" :items="disabledTabs" @change="handleChange">
          <template #default="{ activeTab }">
            <div class="p-4 bg-gray-50 rounded-md">
              <p>Content for {{ activeTab?.label }} tab</p>
            </div>
          </template>
        </UiTab>
      </section>

      <!-- Disabled Tab Component -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Tab Component</h2>
        <UiTab v-model="selectedTab" :items="basicTabs" :disabled="true" @change="handleChange">
          <template #default="{ activeTab }">
            <div class="p-4 bg-gray-50 rounded-md">
              <p>Content for {{ activeTab?.label }} tab</p>
            </div>
          </template>
        </UiTab>
      </section>
    </div>
  </div>
</template>
