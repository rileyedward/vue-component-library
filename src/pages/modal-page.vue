<script setup lang="ts">
import { reactive } from 'vue';
import UiButton from '../components/forms/button/ui-button.vue';
import UiInput from '../components/forms/input/ui-input.vue';
import UiSelect from '../components/forms/select/ui-select.vue';
import UiModal from '../components/feedback/modal/ui-modal.vue';

const modals = reactive({
  basic: false,
  small: false,
  medium: false,
  large: false,
  xlarge: false,
  fullscreen: false,
  centered: false,
  scrollable: false,
  persistent: false,
  noClose: false,
  form: false,
  confirmation: false,
  richContent: false,
});

const formData = reactive({
  name: '',
  email: '',
  password: '',
  role: '',
});

const roleOptions = [
  { label: 'Admin', value: 'admin' },
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' },
];

const openModal = (modalName: keyof typeof modals) => {
  modals[modalName] = true;
};

const handleFormSubmit = () => {
  console.log('Form submitted:', formData);
  modals.form = false;
  // Reset form
  Object.assign(formData, {
    name: '',
    email: '',
    password: '',
    role: '',
  });
};

const handleDelete = () => {
  console.log('Account deleted');
  modals.confirmation = false;
};
</script>

<template>
  <div class="max-w-4xl mx-auto p-6 space-y-8">
    <div class="border-b border-gray-200 pb-6">
      <h1 class="text-3xl font-bold text-gray-900">Modal Component</h1>
      <p class="text-gray-600 mt-2">Display content in a modal dialog overlay.</p>
    </div>

    <div class="space-y-8">
      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Basic Modal</h2>
        <div class="flex flex-wrap gap-4">
          <ui-button @click="openModal('basic')"> Open Basic Modal </ui-button>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Modal Sizes</h2>
        <div class="flex flex-wrap gap-4">
          <ui-button size="sm" @click="openModal('small')">Small Modal</ui-button>
          <ui-button size="sm" @click="openModal('medium')">Medium Modal</ui-button>
          <ui-button size="sm" @click="openModal('large')">Large Modal</ui-button>
          <ui-button size="sm" @click="openModal('xlarge')">X-Large Modal</ui-button>
          <ui-button size="sm" variant="outline" @click="openModal('fullscreen')"
            >Fullscreen Modal</ui-button
          >
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Modal Features</h2>
        <div class="flex flex-wrap gap-4">
          <ui-button variant="outline" @click="openModal('centered')">Centered Modal</ui-button>
          <ui-button variant="outline" @click="openModal('scrollable')">Scrollable Modal</ui-button>
          <ui-button variant="outline" @click="openModal('persistent')">Persistent Modal</ui-button>
          <ui-button variant="outline" @click="openModal('noClose')">Non-closeable Modal</ui-button>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Custom Content</h2>
        <div class="flex flex-wrap gap-4">
          <ui-button variant="success" @click="openModal('form')">Form Modal</ui-button>
          <ui-button variant="danger" @click="openModal('confirmation')"
            >Confirmation Modal</ui-button
          >
          <ui-button variant="secondary" @click="openModal('richContent')"
            >Rich Content Modal</ui-button
          >
        </div>
      </section>
    </div>

    <ui-modal
      v-model:show="modals.basic"
      title="Basic Modal"
      description="This is a simple modal with basic content."
    >
      <p class="text-gray-700">
        This is the modal body content. You can put any content here including text, images, forms,
        or other components.
      </p>
      <template #footer>
        <ui-button variant="outline" @click="modals.basic = false">Cancel</ui-button>
        <ui-button @click="modals.basic = false">Save Changes</ui-button>
      </template>
    </ui-modal>

    <ui-modal
      v-model:show="modals.small"
      size="sm"
      title="Small Modal"
      description="This modal has a small size."
    >
      <p class="text-gray-700">
        This is a small modal perfect for simple confirmations or brief messages.
      </p>
      <template #footer>
        <ui-button @click="modals.small = false">OK</ui-button>
      </template>
    </ui-modal>

    <ui-modal v-model:show="modals.medium" size="md" title="Medium Modal">
      <p class="text-gray-700">This is a medium-sized modal, which is the default size.</p>
      <template #footer>
        <ui-button variant="outline" @click="modals.medium = false">Close</ui-button>
      </template>
    </ui-modal>

    <ui-modal v-model:show="modals.large" size="lg" title="Large Modal">
      <p class="text-gray-700">This is a large modal that provides more space for content.</p>
      <div class="mt-4 p-4 bg-gray-50 rounded-lg">
        <h4 class="font-medium text-gray-900">Example Content Area</h4>
        <p class="text-gray-600 mt-2">
          Large modals are great for forms, detailed information, or complex interfaces.
        </p>
      </div>
      <template #footer>
        <ui-button variant="outline" @click="modals.large = false">Close</ui-button>
      </template>
    </ui-modal>

    <ui-modal v-model:show="modals.xlarge" size="xl" title="X-Large Modal">
      <p class="text-gray-700">This is an extra-large modal for when you need maximum space.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="p-4 bg-blue-50 rounded-lg">
          <h4 class="font-medium text-blue-900">Section 1</h4>
          <p class="text-blue-700 mt-2">Content for the first section goes here.</p>
        </div>
        <div class="p-4 bg-green-50 rounded-lg">
          <h4 class="font-medium text-green-900">Section 2</h4>
          <p class="text-green-700 mt-2">Content for the second section goes here.</p>
        </div>
      </div>
      <template #footer>
        <ui-button variant="outline" @click="modals.xlarge = false">Close</ui-button>
      </template>
    </ui-modal>

    <ui-modal v-model:show="modals.fullscreen" size="full" title="Fullscreen Modal">
      <p class="text-gray-700">This modal takes up the entire viewport.</p>
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
        <ui-button variant="outline" @click="modals.fullscreen = false">Close</ui-button>
      </template>
    </ui-modal>

    <ui-modal v-model:show="modals.centered" centered title="Centered Modal">
      <p class="text-gray-700">This modal is centered vertically in the viewport.</p>
      <template #footer>
        <ui-button @click="modals.centered = false">Close</ui-button>
      </template>
    </ui-modal>

    <ui-modal
      v-model:show="modals.scrollable"
      scrollable
      title="Scrollable Modal"
      description="This modal has scrollable content when it exceeds the viewport height."
    >
      <div class="space-y-4">
        <p class="text-gray-700">
          This modal demonstrates scrollable content. The content below will cause the modal body to
          scroll if it exceeds the available height.
        </p>

        <div v-for="i in 20" :key="i" class="p-4 bg-gray-50 rounded-lg">
          <h4 class="font-medium text-gray-900">Content Block {{ i }}</h4>
          <p class="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
        </div>
      </div>
      <template #footer>
        <ui-button variant="outline" @click="modals.scrollable = false">Close</ui-button>
      </template>
    </ui-modal>

    <ui-modal
      v-model:show="modals.persistent"
      persistent
      :close-on-overlay-click="false"
      :close-on-escape="false"
      title="Persistent Modal"
      description="This modal cannot be closed by clicking outside or pressing Escape."
    >
      <p class="text-gray-700">
        This is a persistent modal. You must use the Close button to dismiss it. Clicking outside
        the modal or pressing Escape will not close it.
      </p>
      <template #footer>
        <ui-button @click="modals.persistent = false">Close Modal</ui-button>
      </template>
    </ui-modal>

    <ui-modal
      v-model:show="modals.noClose"
      :closeable="false"
      title="Non-closeable Modal"
      description="This modal has no close button in the header."
    >
      <p class="text-gray-700">
        This modal doesn't have a close button in the header. You must use the button in the footer
        to close it.
      </p>
      <template #footer>
        <ui-button @click="modals.noClose = false">Done</ui-button>
      </template>
    </ui-modal>

    <ui-modal
      v-model:show="modals.form"
      title="User Registration"
      description="Fill out the form below to create a new account."
    >
      <form class="space-y-4" @submit.prevent="handleFormSubmit">
        <ui-input
          v-model="formData.name"
          label="Full Name"
          placeholder="Enter your full name"
          required
        />
        <ui-input
          v-model="formData.email"
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          required
        />
        <ui-input
          v-model="formData.password"
          type="password"
          label="Password"
          placeholder="Enter a secure password"
          required
        />
        <ui-select v-model="formData.role" label="Role" :options="roleOptions" required />
      </form>
      <template #footer>
        <ui-button variant="outline" @click="modals.form = false">Cancel</ui-button>
        <ui-button @click="handleFormSubmit">Create Account</ui-button>
      </template>
    </ui-modal>

    <ui-modal
      v-model:show="modals.confirmation"
      title="Delete Account"
      description="This action cannot be undone."
    >
      <div class="bg-red-50 border border-red-200 rounded-lg p-4">
        <p class="text-red-800">
          <strong>Warning:</strong> Are you sure you want to delete your account? This will
          permanently remove all your data and cannot be reversed.
        </p>
      </div>
      <template #footer>
        <ui-button variant="outline" @click="modals.confirmation = false">Cancel</ui-button>
        <ui-button variant="danger" @click="handleDelete">Delete Account</ui-button>
      </template>
    </ui-modal>

    <ui-modal v-model:show="modals.richContent" size="lg" title="Rich Content Modal">
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-medium text-gray-900 mb-3">Image Gallery</h4>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="i in 4"
              :key="i"
              class="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center"
            >
              <span class="text-white font-medium">Image {{ i }}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-medium text-gray-900 mb-3">Statistics</h4>
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center p-4 bg-blue-50 rounded-lg">
              <div class="text-2xl font-bold text-blue-600">1,234</div>
              <div class="text-sm text-blue-800">Users</div>
            </div>
            <div class="text-center p-4 bg-green-50 rounded-lg">
              <div class="text-2xl font-bold text-green-600">5,678</div>
              <div class="text-sm text-green-800">Orders</div>
            </div>
            <div class="text-center p-4 bg-purple-50 rounded-lg">
              <div class="text-2xl font-bold text-purple-600">$12,345</div>
              <div class="text-sm text-purple-800">Revenue</div>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-medium text-gray-900 mb-3">Recent Activity</h4>
          <div class="space-y-2">
            <div v-for="i in 5" :key="i" class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div>
                <div class="text-sm font-medium text-gray-900">Activity {{ i }}</div>
                <div class="text-xs text-gray-500">2 minutes ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <ui-button variant="outline" @click="modals.richContent = false">Close</ui-button>
        <ui-button>Export Data</ui-button>
      </template>
    </ui-modal>
  </div>
</template>
