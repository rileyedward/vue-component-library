<script setup lang="ts">
import { ref } from 'vue';
import UiDropdownMenu from '@/components/data/dropdown-menu/ui-dropdown-menu.vue';
import UiButton from '@/components/forms/button/ui-button.vue';
import type { DropdownMenuItem } from '@/components/data/dropdown-menu/ui-dropdown-menu';
import {
  User,
  Settings,
  LogOut,
  Edit,
  Trash2,
  Share,
  Download,
  Copy,
  Archive,
  ChevronDown,
  MoreHorizontal,
  Plus,
} from 'lucide-vue-next';

const userMenuItems = ref<DropdownMenuItem[]>([
  { id: 'profile', label: 'View Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'separator1', label: '', separator: true },
  { id: 'logout', label: 'Sign Out', icon: LogOut, variant: 'danger' },
]);

const actionMenuItems = ref<DropdownMenuItem[]>([
  { id: 'edit', label: 'Edit', icon: Edit },
  { id: 'duplicate', label: 'Duplicate', icon: Copy },
  { id: 'share', label: 'Share', icon: Share },
  { id: 'download', label: 'Download', icon: Download },
  { id: 'separator1', label: '', separator: true },
  { id: 'archive', label: 'Archive', icon: Archive },
  { id: 'delete', label: 'Delete', icon: Trash2, variant: 'danger' },
]);

const simpleMenuItems = ref<DropdownMenuItem[]>([
  { id: 'option1', label: 'Option 1' },
  { id: 'option2', label: 'Option 2' },
  { id: 'option3', label: 'Option 3' },
  { id: 'disabled', label: 'Disabled Option', disabled: true },
]);

const longMenuItems = ref<DropdownMenuItem[]>([
  { id: 'item1', label: 'Menu Item 1', icon: Plus },
  { id: 'item2', label: 'Menu Item 2', icon: Edit },
  { id: 'item3', label: 'Menu Item 3', icon: Copy },
  { id: 'item4', label: 'Menu Item 4', icon: Share },
  { id: 'item5', label: 'Menu Item 5', icon: Download },
  { id: 'item6', label: 'Menu Item 6', icon: Archive },
  { id: 'item7', label: 'Menu Item 7', icon: Settings },
  { id: 'item8', label: 'Menu Item 8', icon: User },
  { id: 'item9', label: 'Menu Item 9', icon: Trash2 },
  { id: 'item10', label: 'Menu Item 10', icon: LogOut },
]);

const onMenuSelect = (item: DropdownMenuItem) => {
  console.log('Selected menu item:', item);
};

const onMenuOpen = () => {
  console.log('Menu opened');
};

const onMenuClose = () => {
  console.log('Menu closed');
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Dropdown Menu Component</h1>
      <p class="text-gray-600">
        A flexible dropdown menu component perfect for user menus, action lists, and contextual
        options. Ideal for sidebar user information sections and general dropdown functionality.
      </p>
    </header>

    <div class="space-y-12">
      <!-- User Menu Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">User Menu Example</h2>
        <p class="text-gray-600 mb-4">
          Perfect for sidebar user information with profile and settings options.
        </p>
        <div class="flex flex-wrap gap-6">
          <ui-dropdown-menu
            :items="userMenuItems"
            @select="onMenuSelect"
            @open="onMenuOpen"
            @close="onMenuClose"
          >
            <div
              class="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div
                class="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium"
              >
                JD
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">John Doe</p>
                <p class="text-sm text-gray-500 truncate">john@example.com</p>
              </div>
              <chevron-down class="h-4 w-4 text-gray-400" />
            </div>
          </ui-dropdown-menu>
        </div>
      </section>

      <!-- Action Menu -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Action Menu</h2>
        <p class="text-gray-600 mb-4">Common action menus with icons and separators.</p>
        <div class="flex flex-wrap gap-6">
          <ui-dropdown-menu :items="actionMenuItems" @select="onMenuSelect">
            <ui-button variant="outline" :suffix-icon="MoreHorizontal"> Actions </ui-button>
          </ui-dropdown-menu>

          <ui-dropdown-menu :items="actionMenuItems" @select="onMenuSelect">
            <button
              class="inline-flex items-center justify-center h-8 w-8 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              <more-horizontal class="h-4 w-4 text-gray-600" />
            </button>
          </ui-dropdown-menu>
        </div>
      </section>

      <!-- Menu Placements -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Menu Placements</h2>
        <div class="flex justify-center">
          <div class="grid grid-cols-3 gap-8 items-center">
            <div></div>
            <ui-dropdown-menu :items="simpleMenuItems" placement="top" @select="onMenuSelect">
              <ui-button variant="outline">Top</ui-button>
            </ui-dropdown-menu>
            <div></div>

            <ui-dropdown-menu :items="simpleMenuItems" placement="left" @select="onMenuSelect">
              <ui-button variant="outline">Left</ui-button>
            </ui-dropdown-menu>
            <div class="text-center text-gray-500 text-sm">Click to open</div>
            <ui-dropdown-menu :items="simpleMenuItems" placement="right" @select="onMenuSelect">
              <ui-button variant="outline">Right</ui-button>
            </ui-dropdown-menu>

            <div></div>
            <ui-dropdown-menu :items="simpleMenuItems" placement="bottom" @select="onMenuSelect">
              <ui-button variant="outline">Bottom</ui-button>
            </ui-dropdown-menu>
            <div></div>
          </div>
        </div>
      </section>

      <!-- Simple Menu -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Simple Menu</h2>
        <p class="text-gray-600 mb-4">Basic menu without icons, including disabled state.</p>
        <div class="flex flex-wrap gap-6">
          <ui-dropdown-menu :items="simpleMenuItems" @select="onMenuSelect">
            <ui-button variant="secondary">Simple Menu</ui-button>
          </ui-dropdown-menu>
        </div>
      </section>

      <!-- Long Menu with Scroll -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Scrollable Menu</h2>
        <p class="text-gray-600 mb-4">
          Menu with many items that scrolls when it exceeds max height.
        </p>
        <div class="flex flex-wrap gap-6">
          <ui-dropdown-menu :items="longMenuItems" max-height="150px" @select="onMenuSelect">
            <ui-button variant="info">Scrollable Menu</ui-button>
          </ui-dropdown-menu>
        </div>
      </section>

      <!-- Disabled Menu -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Menu</h2>
        <div class="flex flex-wrap gap-6">
          <ui-dropdown-menu :items="simpleMenuItems" :disabled="true" @select="onMenuSelect">
            <ui-button variant="secondary" disabled>Disabled Menu</ui-button>
          </ui-dropdown-menu>
        </div>
      </section>

      <!-- Close on Select -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Close Behavior</h2>
        <div class="flex flex-wrap gap-6">
          <ui-dropdown-menu :items="simpleMenuItems" :close-on-select="true" @select="onMenuSelect">
            <ui-button variant="success">Closes on Select</ui-button>
          </ui-dropdown-menu>

          <ui-dropdown-menu
            :items="simpleMenuItems"
            :close-on-select="false"
            @select="onMenuSelect"
          >
            <ui-button variant="warning">Stays Open</ui-button>
          </ui-dropdown-menu>
        </div>
      </section>

      <!-- Custom Trigger Content -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Custom Trigger Content</h2>
        <p class="text-gray-600 mb-4">Dropdown menu can be triggered by any content.</p>
        <div class="flex flex-wrap gap-6 items-center">
          <ui-dropdown-menu :items="userMenuItems" @select="onMenuSelect">
            <div
              class="flex items-center gap-2 px-3 py-2 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              <user class="h-5 w-5" />
              <span>User Menu</span>
            </div>
          </ui-dropdown-menu>

          <ui-dropdown-menu :items="actionMenuItems" @select="onMenuSelect">
            <div
              class="h-12 w-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:shadow-lg transition-shadow"
            >
              <more-horizontal class="h-5 w-5" />
            </div>
          </ui-dropdown-menu>

          <ui-dropdown-menu :items="simpleMenuItems" @select="onMenuSelect">
            <span class="text-gray-600 underline cursor-pointer hover:text-gray-800">
              Click me for options
            </span>
          </ui-dropdown-menu>
        </div>
      </section>

      <!-- Real-world Sidebar Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Sidebar Bottom User Menu</h2>
        <p class="text-gray-600 mb-4">Example of how this would look in a sidebar.</p>
        <div class="max-w-xs mx-auto bg-gray-900 text-white p-4 rounded-lg">
          <div class="space-y-4 mb-6">
            <div class="text-sm text-gray-300">Navigation items would be here...</div>
            <div class="border-t border-gray-700 pt-4"></div>
          </div>

          <ui-dropdown-menu :items="userMenuItems" placement="top" @select="onMenuSelect">
            <div
              class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <div
                class="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm"
              >
                AB
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-white truncate">Alex Brown</p>
                <p class="text-xs text-gray-400 truncate">alex@company.com</p>
              </div>
              <more-horizontal class="h-4 w-4 text-gray-400" />
            </div>
          </ui-dropdown-menu>
        </div>
      </section>
    </div>
  </div>
</template>
