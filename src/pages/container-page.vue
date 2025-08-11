<template>
  <div class="min-h-screen bg-gray-50">
    <div class="bg-white border-b border-gray-200">
      <ui-container size="xl" padding="lg" centered>
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-900">Container Component</h1>
          <p class="text-gray-600 mt-2">
            A flexible layout component for controlling content width and spacing.
          </p>
        </div>
      </ui-container>
    </div>

    <ui-container size="xl" padding="lg" centered class="space-y-12">
      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Container Sizes</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Small Container (max-w-sm)</h3>
            <ui-container
              size="sm"
              padding="md"
              centered
              class="bg-blue-50 border border-blue-200 rounded-lg"
            >
              <p class="text-sm text-blue-800">This is a small container with centered content.</p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Medium Container (max-w-md)</h3>
            <ui-container
              size="md"
              padding="md"
              centered
              class="bg-green-50 border border-green-200 rounded-lg"
            >
              <p class="text-sm text-green-800">
                This is a medium container with centered content.
              </p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Large Container (max-w-4xl)</h3>
            <ui-container
              size="lg"
              padding="md"
              centered
              class="bg-purple-50 border border-purple-200 rounded-lg"
            >
              <p class="text-sm text-purple-800">
                This is a large container with centered content. This is the default size.
              </p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">XL Container (max-w-6xl)</h3>
            <ui-container
              size="xl"
              padding="md"
              centered
              class="bg-orange-50 border border-orange-200 rounded-lg"
            >
              <p class="text-sm text-orange-800">
                This is an extra-large container with centered content.
              </p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">2XL Container (max-w-7xl)</h3>
            <ui-container
              size="2xl"
              padding="md"
              centered
              class="bg-pink-50 border border-pink-200 rounded-lg"
            >
              <p class="text-sm text-pink-800">This is a 2XL container with centered content.</p>
            </ui-container>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Fluid vs Fixed Width</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Fixed Width Container</h3>
            <ui-container
              size="lg"
              padding="md"
              centered
              class="bg-blue-50 border border-blue-200 rounded-lg"
            >
              <p class="text-sm text-blue-800">
                This container has a fixed maximum width and is centered.
              </p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Fluid Container</h3>
            <ui-container fluid padding="md" class="bg-green-50 border border-green-200 rounded-lg">
              <p class="text-sm text-green-800">
                This fluid container takes up the full width of its parent.
              </p>
            </ui-container>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Padding Options</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">No Padding</h3>
            <ui-container
              size="md"
              padding="none"
              centered
              class="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg"
            >
              <div class="bg-red-100 border border-red-300 text-red-800 text-sm p-2 rounded">
                Content touches the container edges (padding="none")
              </div>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Small Padding</h3>
            <ui-container
              size="md"
              padding="sm"
              centered
              class="bg-blue-50 border border-blue-200 rounded-lg"
            >
              <p class="text-sm text-blue-800">Small padding around content (padding="sm")</p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Medium Padding (Default)</h3>
            <ui-container
              size="md"
              padding="md"
              centered
              class="bg-green-50 border border-green-200 rounded-lg"
            >
              <p class="text-sm text-green-800">Medium padding around content (padding="md")</p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Large Padding</h3>
            <ui-container
              size="md"
              padding="lg"
              centered
              class="bg-purple-50 border border-purple-200 rounded-lg"
            >
              <p class="text-sm text-purple-800">Large padding around content (padding="lg")</p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">XL Padding</h3>
            <ui-container
              size="md"
              padding="xl"
              centered
              class="bg-orange-50 border border-orange-200 rounded-lg"
            >
              <p class="text-sm text-orange-800">
                Extra-large padding around content (padding="xl")
              </p>
            </ui-container>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Semantic HTML Elements</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Section Container</h3>
            <ui-container
              as="section"
              size="lg"
              padding="md"
              centered
              class="bg-blue-50 border border-blue-200 rounded-lg"
            >
              <p class="text-sm text-blue-800">
                This container renders as a &lt;section&gt; element.
              </p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Article Container</h3>
            <ui-container
              as="article"
              size="lg"
              padding="md"
              centered
              class="bg-green-50 border border-green-200 rounded-lg"
            >
              <p class="text-sm text-green-800">
                This container renders as an &lt;article&gt; element.
              </p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Header Container</h3>
            <ui-container
              as="header"
              size="lg"
              padding="md"
              centered
              class="bg-purple-50 border border-purple-200 rounded-lg"
            >
              <p class="text-sm text-purple-800">
                This container renders as a &lt;header&gt; element.
              </p>
            </ui-container>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Main Container</h3>
            <ui-container
              as="main"
              size="lg"
              padding="md"
              centered
              class="bg-orange-50 border border-orange-200 rounded-lg"
            >
              <p class="text-sm text-orange-800">
                This container renders as a &lt;main&gt; element.
              </p>
            </ui-container>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Practical Examples</h2>

        <div class="space-y-8">
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Blog Post Layout</h3>
            <ui-container
              as="article"
              size="md"
              padding="lg"
              centered
              class="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <header class="mb-6">
                <h1 class="text-2xl font-bold text-gray-900 mb-2">
                  Understanding Container Components
                </h1>
                <p class="text-gray-600">Published on March 15, 2024 by John Doe</p>
              </header>

              <div class="prose text-gray-700 space-y-4">
                <p>
                  Container components are essential for creating consistent layouts in web
                  applications. They provide controlled spacing and maximum widths to ensure optimal
                  readability across different screen sizes.
                </p>
                <p>
                  This article container uses size="md" to create a comfortable reading width that
                  doesn't become too wide on larger screens.
                </p>
              </div>

              <footer class="mt-8 pt-6 border-t border-gray-200">
                <div class="flex gap-3">
                  <ui-button size="sm" variant="outline">Share</ui-button>
                  <ui-button size="sm" variant="outline">Bookmark</ui-button>
                </div>
              </footer>
            </ui-container>
          </div>

          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Dashboard Layout</h3>
            <ui-container size="2xl" padding="lg" centered>
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <ui-card>
                  <h4 class="font-medium text-gray-900 mb-2">Total Users</h4>
                  <p class="text-3xl font-bold text-blue-600">12,345</p>
                  <p class="text-sm text-gray-500 mt-1">+12% from last month</p>
                </ui-card>

                <ui-card>
                  <h4 class="font-medium text-gray-900 mb-2">Revenue</h4>
                  <p class="text-3xl font-bold text-green-600">$54,321</p>
                  <p class="text-sm text-gray-500 mt-1">+8% from last month</p>
                </ui-card>

                <ui-card>
                  <h4 class="font-medium text-gray-900 mb-2">Orders</h4>
                  <p class="text-3xl font-bold text-purple-600">8,765</p>
                  <p class="text-sm text-gray-500 mt-1">+15% from last month</p>
                </ui-card>
              </div>
            </ui-container>
          </div>

          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Form Layout</h3>
            <ui-container
              size="sm"
              padding="lg"
              centered
              class="bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <form class="space-y-4">
                <div>
                  <h2 class="text-xl font-semibold text-gray-900 mb-4">Contact Form</h2>
                </div>

                <ui-input label="Full Name" placeholder="Enter your full name" required />

                <ui-input type="email" label="Email" placeholder="Enter your email" required />

                <ui-textarea label="Message" placeholder="Enter your message" rows="4" required />

                <div class="flex gap-3 pt-4">
                  <ui-button variant="outline" class="flex-1">Cancel</ui-button>
                  <ui-button class="flex-1">Send Message</ui-button>
                </div>
              </form>
            </ui-container>
          </div>

          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-4">Full-Width Hero Section</h3>
            <ui-container fluid padding="none" class="bg-gradient-to-r from-purple-600 to-blue-600">
              <ui-container size="lg" padding="xl" centered class="text-center text-white">
                <h2 class="text-4xl font-bold mb-4">Welcome to Our Platform</h2>
                <p class="text-xl mb-8 opacity-90">
                  Build amazing applications with our component library
                </p>
                <div class="flex justify-center gap-4">
                  <ui-button size="lg" variant="secondary">Get Started</ui-button>
                  <ui-button size="lg" variant="outline">Learn More</ui-button>
                </div>
              </ui-container>
            </ui-container>
          </div>
        </div>
      </section>
    </ui-container>
  </div>
</template>

<script setup lang="ts">
import UiContainer from '../components/layout/container/ui-container.vue';
import UiCard from '../components/layout/card/ui-card.vue';
import UiButton from '../components/forms/button/ui-button.vue';
import UiInput from '../components/forms/input/ui-input.vue';
import UiTextarea from '../components/forms/textarea/ui-textarea.vue';
</script>
