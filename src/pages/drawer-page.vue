<template>
  <div class="max-w-4xl mx-auto p-6 space-y-8">
    <div class="border-b border-gray-200 pb-6">
      <h1 class="text-3xl font-bold text-gray-900">Drawer Component</h1>
      <p class="text-gray-600 mt-2">
        Display content in a sliding drawer from the right side of the screen.
      </p>
    </div>

    <div class="space-y-8">
      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Basic Drawer</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton @click="openDrawer('basic')">Open Basic Drawer</UiButton>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Drawer Widths</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton size="sm" @click="openDrawer('small')">Small Drawer</UiButton>
          <UiButton size="sm" @click="openDrawer('medium')">Medium Drawer</UiButton>
          <UiButton size="sm" @click="openDrawer('large')">Large Drawer</UiButton>
          <UiButton size="sm" variant="outline" @click="openDrawer('fullWidth')"
            >Full Width Drawer</UiButton
          >
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Drawer Features</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton variant="outline" @click="openDrawer('persistent')">Persistent Drawer</UiButton>
          <UiButton variant="outline" @click="openDrawer('noClose')">Non-closeable Drawer</UiButton>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Custom Content</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton variant="success" @click="openDrawer('form')">Form Drawer</UiButton>
          <UiButton variant="secondary" @click="openDrawer('richContent')"
            >Rich Content Drawer</UiButton
          >
        </div>
      </section>
    </div>

    <!-- Basic Drawer -->
    <UiDrawer
      v-model:show="drawers.basic"
      title="Basic Drawer"
      description="This is a simple drawer with basic content."
    >
      <p class="text-gray-700">
        This is the drawer body content. You can put any content here including text, images, forms,
        or other components.
      </p>
      <template #footer>
        <UiButton variant="outline" @click="drawers.basic = false">Cancel</UiButton>
        <UiButton @click="drawers.basic = false">Save Changes</UiButton>
      </template>
    </UiDrawer>

    <!-- Small Drawer -->
    <UiDrawer
      v-model:show="drawers.small"
      width="300px"
      title="Small Drawer"
      description="This drawer has a small width."
    >
      <p class="text-gray-700">
        This is a small drawer perfect for simple forms or brief messages.
      </p>
      <template #footer>
        <UiButton @click="drawers.small = false">OK</UiButton>
      </template>
    </UiDrawer>

    <!-- Medium Drawer -->
    <UiDrawer v-model:show="drawers.medium" width="400px" title="Medium Drawer">
      <p class="text-gray-700">This is a medium-sized drawer, which is the default size.</p>
      <template #footer>
        <UiButton variant="outline" @click="drawers.medium = false">Close</UiButton>
      </template>
    </UiDrawer>

    <!-- Large Drawer -->
    <UiDrawer v-model:show="drawers.large" width="600px" title="Large Drawer">
      <p class="text-gray-700">This is a large drawer that provides more space for content.</p>
      <div class="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 class="font-medium text-gray-900">Example Content Area</h4>
        <p class="text-gray-600 mt-2">
          Large drawers are great for forms, detailed information, or complex interfaces.
        </p>
      </div>
      <template #footer>
        <UiButton variant="outline" @click="drawers.large = false">Close</UiButton>
      </template>
    </UiDrawer>

    <!-- Full Width Drawer -->
    <UiDrawer v-model:show="drawers.fullWidth" width="100%" title="Full Width Drawer">
      <p class="text-gray-700">This drawer takes up the full width of the screen.</p>
      <div class="mt-6 space-y-4">
        <div
          class="h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center"
        >
          <span class="text-white font-medium">Full width content area</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="i in 6" :key="i" class="p-4 bg-gray-100 rounded-lg">
            <h4 class="font-medium">Card {{ i }}</h4>
            <p class="text-gray-600 text-sm mt-1">Example content for card {{ i }}.</p>
          </div>
        </div>
      </div>
      <template #footer>
        <UiButton variant="outline" @click="drawers.fullWidth = false">Close</UiButton>
      </template>
    </UiDrawer>

    <!-- Persistent Drawer -->
    <UiDrawer
      v-model:show="drawers.persistent"
      persistent
      :close-on-overlay-click="false"
      :close-on-escape="false"
      title="Persistent Drawer"
      description="This drawer cannot be closed by clicking outside or pressing Escape."
    >
      <p class="text-gray-700">
        This is a persistent drawer. You must use the Close button to dismiss it. Clicking outside
        the drawer or pressing Escape will not close it.
      </p>
      <template #footer>
        <UiButton @click="drawers.persistent = false">Close Drawer</UiButton>
      </template>
    </UiDrawer>

    <!-- Non-closeable Drawer -->
    <UiDrawer
      v-model:show="drawers.noClose"
      :closeable="false"
      title="Non-closeable Drawer"
      description="This drawer has no close button in the header."
    >
      <p class="text-gray-700">
        This drawer doesn't have a close button in the header. You must use the button in the footer
        to close it.
      </p>
      <template #footer>
        <UiButton @click="drawers.noClose = false">Done</UiButton>
      </template>
    </UiDrawer>

    <!-- Form Drawer -->
    <UiDrawer
      v-model:show="drawers.form"
      title="User Profile"
      description="Update your profile information."
    >
      <form class="space-y-4" @submit.prevent="handleFormSubmit">
        <UiInput
          v-model="formData.name"
          label="Full Name"
          placeholder="Enter your full name"
          required
        />
        <UiInput
          v-model="formData.email"
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          required
        />
        <UiTextarea
          v-model="formData.bio"
          label="Bio"
          placeholder="Tell us about yourself"
          rows="4"
        />
        <UiSelect v-model="formData.country" label="Country" :options="countryOptions" />
      </form>
      <template #footer>
        <UiButton variant="outline" @click="drawers.form = false">Cancel</UiButton>
        <UiButton @click="handleFormSubmit">Save Profile</UiButton>
      </template>
    </UiDrawer>

    <!-- Rich Content Drawer -->
    <UiDrawer v-model:show="drawers.richContent" width="500px" title="Rich Content Drawer">
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-medium text-gray-900 mb-3">User Activity</h4>
          <div class="space-y-4">
            <div v-for="i in 3" :key="i" class="p-4 bg-gray-50 rounded-lg">
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold"
                >
                  U
                </div>
                <div>
                  <div class="font-medium">User Activity {{ i }}</div>
                  <div class="text-sm text-gray-500">2 hours ago</div>
                </div>
              </div>
              <p class="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-medium text-gray-900 mb-3">Recent Files</h4>
          <div class="space-y-2">
            <div
              v-for="i in 5"
              :key="i"
              class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"
                >
                  <span class="text-xs font-medium">PDF</span>
                </div>
                <div class="text-sm font-medium">Document-{{ i }}.pdf</div>
              </div>
              <div class="text-xs text-gray-500">{{ i }}MB</div>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <UiButton variant="outline" @click="drawers.richContent = false">Close</UiButton>
        <UiButton>View All</UiButton>
      </template>
    </UiDrawer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import UiButton from '../components/forms/button/ui-button.vue';
import UiInput from '../components/forms/input/ui-input.vue';
import UiTextarea from '../components/forms/textarea/ui-textarea.vue';
import UiSelect from '../components/forms/select/ui-select.vue';
import UiDrawer from '../components/layout/drawer/ui-drawer.vue';

const drawers = reactive({
  basic: false,
  small: false,
  medium: false,
  large: false,
  fullWidth: false,
  persistent: false,
  noClose: false,
  form: false,
  richContent: false,
});

const formData = reactive({
  name: '',
  email: '',
  bio: '',
  country: '',
});

const countryOptions = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
];

const openDrawer = (drawerName: keyof typeof drawers) => {
  drawers[drawerName] = true;
};

const handleFormSubmit = () => {
  console.log('Form submitted:', formData);
  drawers.form = false;
  // Reset form
  Object.assign(formData, {
    name: '',
    email: '',
    bio: '',
    country: '',
  });
};
</script>
