<template>
  <div class="max-w-4xl mx-auto p-6 space-y-8">
    <div class="border-b border-gray-200 pb-6">
      <h1 class="text-3xl font-bold text-gray-900">Alert Component</h1>
      <p class="text-gray-600 mt-2">Display important messages and notifications to users.</p>
    </div>

    <div class="space-y-8">
      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Variants</h2>
        <div class="space-y-4">
          <ui-alert
            variant="info"
            title="Information"
            description="This is an informational message."
          />
          <ui-alert
            variant="success"
            title="Success"
            description="Operation completed successfully!"
          />
          <ui-alert
            variant="warning"
            title="Warning"
            description="Please review your input before continuing."
          />
          <ui-alert
            variant="error"
            title="Error"
            description="Something went wrong. Please try again."
          />
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Sizes</h2>
        <div class="space-y-4">
          <ui-alert
            size="sm"
            variant="info"
            title="Small Alert"
            description="This is a small alert message."
          />
          <ui-alert
            size="md"
            variant="info"
            title="Medium Alert"
            description="This is a medium alert message."
          />
          <ui-alert
            size="lg"
            variant="info"
            title="Large Alert"
            description="This is a large alert message."
          />
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Dismissible</h2>
        <div class="space-y-4">
          <ui-alert
            variant="info"
            title="Dismissible Alert"
            description="This alert can be dismissed by clicking the X button."
            dismissible
          />
          <ui-alert
            variant="warning"
            title="Another Dismissible Alert"
            description="Click the X to close this alert."
            dismissible
          />
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Custom Icons</h2>
        <div class="space-y-4">
          <ui-alert
            variant="success"
            title="Custom Icon"
            description="This alert uses a custom icon."
            :icon="StarIcon"
            dismissible
          />
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">With Slot Content</h2>
        <div class="space-y-4">
          <ui-alert variant="info" title="Rich Content" dismissible>
            <p>You can use the default slot to include rich content:</p>
            <ul class="list-disc list-inside mt-2 ml-4">
              <li>Custom HTML elements</li>
              <li>Links and <strong>formatted text</strong></li>
              <li>Multiple paragraphs</li>
            </ul>
          </ui-alert>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">No Title</h2>
        <div class="space-y-4">
          <ui-alert variant="success" description="This alert has no title, just a description." />
          <ui-alert variant="error">
            This alert uses slot content instead of a title or description.
          </ui-alert>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Star as StarIcon } from 'lucide-vue-next';
import UiAlert from '../components/feedback/alert/ui-alert.vue';
</script>
