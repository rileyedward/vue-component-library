<script setup lang="ts">
import { ref } from 'vue';
import UiSidebar from '@/components/navigation/sidebar/ui-sidebar.vue';
import UiNavbar from '@/components/navigation/navbar/ui-navbar.vue';
import defaultConfig from './main-layout.config';
import type { MainLayoutConfig } from './main-layout.config';

interface Props {
  config?: MainLayoutConfig;
}

const props = withDefaults(defineProps<Props>(), {
  config: () => defaultConfig,
});

const activeRoute = ref('');
const isSidebarOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex">
    <UiSidebar
      :items="props.config.sidebarItems"
      v-model:activeRoute="activeRoute"
      :title="props.config.title"
      :default-open="isSidebarOpen"
    />

    <div class="flex flex-col flex-1">
      <UiNavbar :title="props.config.title" @toggle-sidebar="toggleSidebar">
        <template #right>
          <div class="flex items-center space-x-4">
            <button
              v-for="(item, index) in props.config.navbarRightItems"
              :key="index"
              class="p-2 rounded-full text-gray-500 hover:bg-gray-100"
              :aria-label="item.ariaLabel"
              @click="item.onClick && item.onClick()"
            >
              <component :is="item.icon" class="h-5 w-5" />
            </button>
          </div>
        </template>
      </UiNavbar>

      <main class="flex-1 p-4">
        <div class="max-w-7xl mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Mobile layout adjustments */
@media (max-width: 768px) {
  .min-h-screen {
    flex-direction: column;
  }
}
</style>
