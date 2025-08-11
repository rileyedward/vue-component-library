<script setup lang="ts">
import './app.css';
import { ref } from 'vue';
import UiSidebar from '@/components/navigation/sidebar/ui-sidebar.vue';
import { Home, Layout, Circle, Type, CheckSquare, Calendar, Bell, AlertTriangle, MessageSquare, CreditCard } from 'lucide-vue-next';

// Define navigation items with icons for the sidebar
const sidebarItems = [
  { label: 'Home', route: '/', icon: Home },
  {
    label: 'Forms',
    icon: CheckSquare,
    children: [
      { label: 'Button', route: '/button', icon: Circle },
      { label: 'Input', route: '/input', icon: Type },
      { label: 'Textarea', route: '/textarea', icon: Type },
      { label: 'Select', route: '/select', icon: CheckSquare },
      { label: 'Checkbox', route: '/checkbox', icon: CheckSquare },
      { label: 'Radio', route: '/radio', icon: CheckSquare },
      { label: 'MultiSelect', route: '/multiselect', icon: CheckSquare },
      { label: 'DatePicker', route: '/datepicker', icon: Calendar },
    ]
  },
  {
    label: 'Navigation',
    icon: Layout,
    children: [
      { label: 'Breadcrumb', route: '/breadcrumb', icon: Layout },
      { label: 'Dropdown', route: '/dropdown', icon: Layout },
      { label: 'Menu', route: '/menu', icon: Layout },
    ]
  },
  {
    label: 'Feedback',
    icon: Bell,
    children: [
      { label: 'Alert', route: '/alert', icon: AlertTriangle },
      { label: 'Toast', route: '/toast', icon: Bell },
      { label: 'Modal', route: '/modal', icon: MessageSquare },
    ]
  },
  {
    label: 'Layout',
    icon: Layout,
    children: [
      { label: 'Card', route: '/card', icon: CreditCard },
      { label: 'Container', route: '/container', icon: Layout },
    ]
  },
];

const activeRoute = ref('');
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <UiSidebar
      :items="sidebarItems"
      v-model:activeRoute="activeRoute"
      title="Component Library"
    />

    <!-- Main Content -->
    <main class="flex-1 md:ml-[250px] p-4">
      <div class="max-w-7xl mx-auto">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Ensure the sidebar doesn't affect the layout on mobile */
@media (max-width: 768px) {
  main {
    margin-left: 0;
  }
}
</style>
