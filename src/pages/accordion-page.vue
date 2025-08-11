<script setup lang="ts">
import { User, Settings, Mail, Bell, Info, AlertTriangle, HelpCircle } from 'lucide-vue-next';
import UiAccordion from '@/components/data/accordion/ui-accordion.vue';
import type { AccordionItem } from '@/components/data/accordion/ui-accordion';

const handleToggle = (item: AccordionItem, isOpen: boolean) => {
  console.log('Accordion toggled:', item.title, isOpen ? 'opened' : 'closed');
};

const basicItems = [
  {
    title: 'What is an accordion component?',
    content: 'An accordion is a vertically stacked set of interactive headings that each reveal a section of content. They help organize complex content in a limited space.',
    defaultOpen: true
  },
  {
    title: 'How do accordions improve user experience?',
    content: 'Accordions allow users to focus on specific content without being overwhelmed by information. They provide a clean interface where users can choose what content to view.'
  },
  {
    title: 'When should I use an accordion?',
    content: 'Use accordions when you have multiple sections of related content that don\'t need to be visible simultaneously. They\'re great for FAQs, product details, and settings panels.'
  }
];

const iconItems = [
  {
    title: 'Important Information',
    content: 'This contains critical information that you should read carefully before proceeding with your application.',
    icon: Info
  },
  {
    title: 'Warning Notice',
    content: 'Please be aware of potential risks associated with this action. Make sure you understand the consequences before continuing.',
    icon: AlertTriangle
  },
  {
    title: 'Help & Support',
    content: 'If you need assistance, please contact our support team at support@example.com or call our helpline at (123) 456-7890.',
    icon: HelpCircle
  }
];

const multipleItems = [
  {
    title: 'Profile Settings',
    content: 'Manage your personal information, privacy settings, and account preferences.',
    icon: User
  },
  {
    title: 'Notification Preferences',
    content: 'Control which notifications you receive and how they are delivered to you.',
    icon: Bell
  },
  {
    title: 'Email Settings',
    content: 'Configure your email preferences, signature, and auto-responses.',
    icon: Mail
  },
  {
    title: 'System Settings',
    content: 'Adjust system-wide settings including language, timezone, and accessibility options.',
    icon: Settings
  }
];

const disabledItems = [
  {
    title: 'Available Section',
    content: 'This section is available for viewing and interaction.'
  },
  {
    title: 'Disabled Section',
    content: 'This section is currently unavailable.',
    disabled: true
  },
  {
    title: 'Another Available Section',
    content: 'This is another section that is available for viewing.'
  }
];
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Accordion Component</h1>
      <p class="text-gray-600">A collapsible content component for organizing and presenting information in a limited space.</p>
    </header>

    <div class="space-y-12">
      <!-- Basic Accordion -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Accordion</h2>
        <UiAccordion
          :items="basicItems"
          @toggle="handleToggle"
        />
      </section>

      <!-- Accordion with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Accordion with Icons</h2>
        <UiAccordion
          :items="iconItems"
          @toggle="handleToggle"
        />
      </section>

      <!-- Multiple Open Accordion -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Multiple Open Accordion</h2>
        <UiAccordion
          :items="multipleItems"
          :multiple="true"
          @toggle="handleToggle"
        />
      </section>

      <!-- Filled Variant -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Filled Variant</h2>
        <UiAccordion
          :items="basicItems"
          variant="filled"
          @toggle="handleToggle"
        />
      </section>

      <!-- Borderless Accordion -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Borderless Accordion</h2>
        <UiAccordion
          :items="iconItems"
          :bordered="false"
          @toggle="handleToggle"
        />
      </section>

      <!-- Disabled Items -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Items</h2>
        <UiAccordion
          :items="disabledItems"
          @toggle="handleToggle"
        />
      </section>

      <!-- Fully Disabled Accordion -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled Accordion</h2>
        <UiAccordion
          :items="basicItems"
          :disabled="true"
          @toggle="handleToggle"
        />
      </section>
    </div>
  </div>
</template>
