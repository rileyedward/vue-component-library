<template>
  <div class="max-w-6xl mx-auto p-6 space-y-8">
    <div class="border-b border-gray-200 pb-6">
      <h1 class="text-3xl font-bold text-gray-900">Card Component</h1>
      <p class="text-gray-600 mt-2">A flexible container for organizing and displaying content.</p>
    </div>

    <div class="space-y-8">
      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Basic Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiCard>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Simple Card</h3>
            <p class="text-gray-600">This is a basic card with default styling.</p>
          </UiCard>

          <UiCard>
            <template #header>
              <h3 class="text-lg font-medium text-gray-900">Card with Header</h3>
            </template>
            <p class="text-gray-600">This card includes a header section.</p>
          </UiCard>

          <UiCard>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Card with Footer</h3>
            <p class="text-gray-600">This card includes a footer section.</p>
            <template #footer>
              <p class="text-sm text-gray-500">Footer content</p>
            </template>
          </UiCard>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Card Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UiCard variant="default">
            <h3 class="text-lg font-medium text-gray-900 mb-2">Default</h3>
            <p class="text-gray-600">Standard card appearance</p>
          </UiCard>

          <UiCard variant="outlined">
            <h3 class="text-lg font-medium text-gray-900 mb-2">Outlined</h3>
            <p class="text-gray-600">Card with emphasized border</p>
          </UiCard>

          <UiCard variant="elevated" shadow="lg">
            <h3 class="text-lg font-medium text-gray-900 mb-2">Elevated</h3>
            <p class="text-gray-600">Card with enhanced shadow</p>
          </UiCard>

          <UiCard variant="filled">
            <h3 class="text-lg font-medium text-gray-900 mb-2">Filled</h3>
            <p class="text-gray-600">Card with background fill</p>
          </UiCard>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Shadow Options</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <UiCard shadow="none">
            <h4 class="font-medium mb-2">No Shadow</h4>
            <p class="text-sm text-gray-600">shadow="none"</p>
          </UiCard>

          <UiCard shadow="sm">
            <h4 class="font-medium mb-2">Small Shadow</h4>
            <p class="text-sm text-gray-600">shadow="sm"</p>
          </UiCard>

          <UiCard shadow="md">
            <h4 class="font-medium mb-2">Medium Shadow</h4>
            <p class="text-sm text-gray-600">shadow="md"</p>
          </UiCard>

          <UiCard shadow="lg">
            <h4 class="font-medium mb-2">Large Shadow</h4>
            <p class="text-sm text-gray-600">shadow="lg"</p>
          </UiCard>

          <UiCard shadow="xl">
            <h4 class="font-medium mb-2">XL Shadow</h4>
            <p class="text-sm text-gray-600">shadow="xl"</p>
          </UiCard>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Padding Options</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UiCard padding="none" class="border-2 border-dashed border-gray-300">
            <div class="p-2 bg-blue-50 text-blue-800 text-sm">No Padding (padding="none")</div>
          </UiCard>

          <UiCard padding="sm">
            <h4 class="font-medium mb-2">Small Padding</h4>
            <p class="text-sm text-gray-600">padding="sm"</p>
          </UiCard>

          <UiCard padding="md">
            <h4 class="font-medium mb-2">Medium Padding</h4>
            <p class="text-sm text-gray-600">padding="md" (default)</p>
          </UiCard>

          <UiCard padding="lg">
            <h4 class="font-medium mb-2">Large Padding</h4>
            <p class="text-sm text-gray-600">padding="lg"</p>
          </UiCard>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Interactive Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiCard hover>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Hover Effect</h3>
            <p class="text-gray-600">This card has hover animations enabled.</p>
          </UiCard>

          <UiCard clickable @click="showClickAlert">
            <h3 class="text-lg font-medium text-gray-900 mb-2">Clickable Card</h3>
            <p class="text-gray-600">Click this card to trigger an action.</p>
          </UiCard>

          <UiCard clickable hover @click="showClickAlert">
            <h3 class="text-lg font-medium text-gray-900 mb-2">Clickable + Hover</h3>
            <p class="text-gray-600">Combines click and hover effects.</p>
          </UiCard>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Card States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiCard>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Normal State</h3>
            <p class="text-gray-600">Regular card appearance.</p>
          </UiCard>

          <UiCard loading>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Loading State</h3>
            <p class="text-gray-600">Card with loading animation.</p>
          </UiCard>

          <UiCard disabled>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Disabled State</h3>
            <p class="text-gray-600">Card that's disabled and not interactive.</p>
          </UiCard>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Cards with Media</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard>
            <template #media>
              <div
                class="aspect-video bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center"
              >
                <span class="text-white font-medium">Image Placeholder</span>
              </div>
            </template>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Card with Media</h3>
            <p class="text-gray-600">This card includes a media section above the content.</p>
          </UiCard>

          <UiCard padding="none">
            <template #media>
              <div
                class="aspect-video bg-gradient-to-r from-blue-400 to-green-500 flex items-center justify-center"
              >
                <span class="text-white font-medium">Full Width Media</span>
              </div>
            </template>
            <div class="p-4">
              <h3 class="text-lg font-medium text-gray-900 mb-2">No Padding Card</h3>
              <p class="text-gray-600">
                Media section extends to card edges, content has manual padding.
              </p>
            </div>
          </UiCard>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Cards with Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UiCard>
            <template #header>
              <h3 class="text-lg font-medium text-gray-900">Product Card</h3>
            </template>
            <p class="text-gray-600 mb-4">
              This is a product description with various details about the item.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-gray-900">$29.99</span>
              <span class="text-sm text-gray-500">In Stock</span>
            </div>
            <template #actions>
              <UiButton variant="outline" size="sm">Add to Wishlist</UiButton>
              <UiButton size="sm">Add to Cart</UiButton>
            </template>
          </UiCard>

          <UiCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-medium text-gray-900">User Profile</h3>
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                >
                  Online
                </span>
              </div>
            </template>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h4 class="font-medium text-gray-900">John Doe</h4>
                <p class="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
            <template #footer>
              <p class="text-sm text-gray-500">Last seen 2 minutes ago</p>
            </template>
            <template #actions>
              <UiButton variant="outline" size="sm">Message</UiButton>
              <UiButton size="sm">View Profile</UiButton>
            </template>
          </UiCard>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Complex Card Examples</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UiCard shadow="lg">
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-medium text-gray-900">Dashboard Stats</h3>
                <select class="text-sm border-gray-300 rounded-md">
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                </select>
              </div>
            </template>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600">1,234</div>
                <div class="text-sm text-gray-500">Total Users</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600">$5,678</div>
                <div class="text-sm text-gray-500">Revenue</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600">89</div>
                <div class="text-sm text-gray-500">Orders</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-red-600">12</div>
                <div class="text-sm text-gray-500">Issues</div>
              </div>
            </div>
            <template #actions>
              <UiButton variant="outline" size="sm">Export</UiButton>
              <UiButton size="sm">View Details</UiButton>
            </template>
          </UiCard>

          <UiCard shadow="lg">
            <template #header>
              <h3 class="text-lg font-medium text-gray-900">Recent Activity</h3>
            </template>
            <div class="space-y-4">
              <div v-for="i in 4" :key="i" class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-xs font-medium text-blue-600">{{ i }}</span>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-900">Activity {{ i }}</p>
                  <p class="text-xs text-gray-500">{{ i * 2 }} minutes ago</p>
                </div>
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <template #actions>
              <UiButton variant="outline" size="sm">View All</UiButton>
            </template>
          </UiCard>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiCard from '../components/layout/card/ui-card.vue';
import UiButton from '../components/forms/button/ui-button.vue';

const showClickAlert = () => {
  console.log('Card clicked!');
};
</script>
