<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import type {
  UiAccordionProps as Props,
  UiAccordionEmits as Emits,
  AccordionItem,
} from './ui-accordion';

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
  bordered: true,
  disabled: false,
  variant: 'default',
});

const emit = defineEmits<Emits>();

// Track which items are open
const openItems = ref<Record<number, boolean>>({});

// Initialize default open state
for (let i = 0; i < props.items.length; i++) {
  if (props.items[i].defaultOpen) {
    openItems.value[i] = true;
  }
}

const toggleItem = (index: number, item: AccordionItem): void => {
  if (props.disabled || item.disabled) {
    return;
  }

  const isCurrentlyOpen = !!openItems.value[index];

  if (!props.multiple) {
    // Close all other items if not multiple mode
    openItems.value = {};
  }

  // Toggle the current item
  openItems.value[index] = !isCurrentlyOpen;

  // Emit the toggle event
  emit('toggle', item, !isCurrentlyOpen);
};

const getItemClasses = (index: number, item: AccordionItem) => {
  const isDisabled = props.disabled || item.disabled;

  return {
    'border border-gray-200 rounded-md mb-2': props.bordered,
    'mb-2': !props.bordered,
    'bg-gray-50': props.variant === 'filled',
    'opacity-50 cursor-not-allowed': isDisabled,
  };
};

const getHeaderClasses = (index: number, item: AccordionItem) => {
  const isOpen = !!openItems.value[index];
  const isDisabled = props.disabled || item.disabled;

  return [
    'flex items-center justify-between w-full px-4 py-3 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500',
    isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
    props.bordered ? (isOpen ? 'border-b border-gray-200' : '') : '',
    props.variant === 'default' ? 'bg-white hover:bg-gray-50' : '',
    props.variant === 'filled' ? 'bg-gray-50 hover:bg-gray-100' : '',
  ];
};
</script>

<template>
  <div class="w-full">
    <div v-for="(item, index) in items" :key="index" :class="getItemClasses(index, item)">
      <button
        type="button"
        :class="getHeaderClasses(index, item)"
        @click="toggleItem(index, item)"
        :disabled="disabled || item.disabled"
      >
        <div class="flex items-center">
          <component v-if="item.icon" :is="item.icon" class="w-4 h-4 mr-2" />
          <span>{{ item.title }}</span>
        </div>
        <component :is="openItems[index] ? ChevronUp : ChevronDown" class="w-4 h-4 ml-2" />
      </button>

      <div v-if="openItems[index]" class="px-4 py-3 text-sm text-gray-700">
        <div v-if="typeof item.content === 'string'" v-html="item.content"></div>
        <slot v-else :name="`content-${index}`"></slot>
      </div>
    </div>
  </div>
</template>
