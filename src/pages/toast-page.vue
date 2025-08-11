<script setup lang="ts">
import { ref } from 'vue';
import { type LucideIcon, Star as StarIcon } from 'lucide-vue-next';
import UiButton from '../components/forms/button/ui-button.vue';
import UiToast from '../components/feedback/toast/ui-toast.vue';

interface Toast {
  id: number;
  variant: 'info' | 'success' | 'warning' | 'error';
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
  duration?: number;
  title?: string;
  description?: string;
  dismissible?: boolean;
  persistent?: boolean;
  icon?: LucideIcon;
  show: boolean;
  content?: string;
}

const toasts = ref<Toast[]>([]);
let toastId = 0;

const addToast = (toast: Omit<Toast, 'id' | 'show'>) => {
  const newToast: Toast = {
    ...toast,
    id: ++toastId,
    show: true,
  };
  toasts.value.push(newToast);
};

const removeToast = (id: number) => {
  const index = toasts.value.findIndex(toast => toast.id === id);
  if (index > -1) {
    toasts.value.splice(index, 1);
  }
};

const showToast = (variant: Toast['variant'], title: string, description: string) => {
  addToast({
    variant,
    title,
    description,
    position: 'top-right',
    duration: 5000,
    dismissible: true,
    persistent: false,
  });
};

const showPositionToast = (position: Toast['position']) => {
  addToast({
    variant: 'info',
    title: `Toast at ${position}`,
    description: `This toast appears at ${position} position.`,
    position,
    duration: 4000,
    dismissible: true,
    persistent: false,
  });
};

const showDurationToast = (duration: number) => {
  addToast({
    variant: 'info',
    title: `${duration / 1000}s Duration`,
    description: `This toast will auto-close in ${duration / 1000} seconds.`,
    position: 'top-right',
    duration,
    dismissible: true,
    persistent: false,
  });
};

const showPersistentToast = () => {
  addToast({
    variant: 'warning',
    title: 'Persistent Toast',
    description: 'This toast will not auto-close. Click X to dismiss.',
    position: 'top-right',
    duration: 0,
    dismissible: true,
    persistent: true,
  });
};

const showCustomIconToast = () => {
  addToast({
    variant: 'success',
    title: 'Custom Icon',
    description: 'This toast uses a custom star icon.',
    position: 'top-right',
    duration: 5000,
    dismissible: true,
    persistent: false,
    icon: StarIcon,
  });
};

const showSlotContentToast = () => {
  addToast({
    variant: 'info',
    title: 'Rich Content',
    position: 'top-right',
    duration: 7000,
    dismissible: true,
    persistent: false,
    content: `
      <p>This toast contains <strong>rich HTML content</strong>:</p>
      <ul class="list-disc list-inside mt-2 ml-4">
        <li>Custom HTML elements</li>
        <li><a href="#" class="text-blue-600 underline">Links</a> and formatted text</li>
        <li>Multiple paragraphs and lists</li>
      </ul>
    `,
  });
};

const showNonDismissibleToast = () => {
  addToast({
    variant: 'error',
    title: 'Non-dismissible',
    description: 'This toast cannot be manually dismissed and will auto-close.',
    position: 'top-right',
    duration: 6000,
    dismissible: false,
    persistent: false,
  });
};
</script>

<template>
  <div class="max-w-4xl mx-auto p-6 space-y-8">
    <div class="border-b border-gray-200 pb-6">
      <h1 class="text-3xl font-bold text-gray-900">Toast Component</h1>
      <p class="text-gray-600 mt-2">
        Display temporary notifications that appear and disappear automatically.
      </p>
    </div>

    <div class="space-y-8">
      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Variants</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton @click="showToast('info', 'Information', 'This is an informational message.')">
            Show Info Toast
          </UiButton>
          <UiButton
            variant="success"
            @click="showToast('success', 'Success', 'Operation completed successfully!')"
          >
            Show Success Toast
          </UiButton>
          <UiButton
            variant="warning"
            @click="showToast('warning', 'Warning', 'Please review your input.')"
          >
            Show Warning Toast
          </UiButton>
          <UiButton variant="danger" @click="showToast('error', 'Error', 'Something went wrong.')">
            Show Error Toast
          </UiButton>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Positions</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <UiButton size="sm" @click="showPositionToast('top-left')">Top Left</UiButton>
          <UiButton size="sm" @click="showPositionToast('top-center')">Top Center</UiButton>
          <UiButton size="sm" @click="showPositionToast('top-right')">Top Right</UiButton>
          <UiButton size="sm" @click="showPositionToast('bottom-left')">Bottom Left</UiButton>
          <UiButton size="sm" @click="showPositionToast('bottom-center')">Bottom Center</UiButton>
          <UiButton size="sm" @click="showPositionToast('bottom-right')">Bottom Right</UiButton>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Duration & Persistence</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton variant="outline" @click="showDurationToast(2000)"> 2 Second Toast </UiButton>
          <UiButton variant="outline" @click="showDurationToast(10000)"> 10 Second Toast </UiButton>
          <UiButton variant="outline" @click="showPersistentToast()"> Persistent Toast </UiButton>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Custom Content</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton variant="outline" @click="showCustomIconToast()"> Custom Icon Toast </UiButton>
          <UiButton variant="outline" @click="showSlotContentToast()">
            Rich Content Toast
          </UiButton>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Non-dismissible</h2>
        <div class="flex flex-wrap gap-4">
          <UiButton variant="outline" @click="showNonDismissibleToast()">
            Non-dismissible Toast
          </UiButton>
        </div>
      </section>
    </div>

    <UiToast
      v-for="toast in toasts"
      :key="toast.id"
      :variant="toast.variant"
      :position="toast.position"
      :duration="toast.duration"
      :title="toast.title"
      :description="toast.description"
      :dismissible="toast.dismissible"
      :persistent="toast.persistent"
      :icon="toast.icon"
      :show="toast.show"
      @close="removeToast(toast.id)"
    >
      <div v-if="toast.content" v-html="toast.content" />
    </UiToast>
  </div>
</template>
