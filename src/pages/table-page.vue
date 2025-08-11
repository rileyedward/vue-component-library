<script setup lang="ts">
import { ref, h } from 'vue';
import UiTable from '@/components/layout/table/ui-table.vue';
import UiButton from '@/components/forms/button/ui-button.vue';
import type { TableColumn, TableRow } from '@/components/layout/table/ui-table';
import { Edit, Trash2, Eye, Mail, Phone, Globe, CheckCircle, XCircle } from 'lucide-vue-next';

const basicColumns: TableColumn[] = [
  { key: 'id', label: 'ID', sortable: true, width: '80px' },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
];

const basicData: TableRow[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User' },
  { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Moderator' },
  { id: 5, name: 'David Brown', email: 'david@example.com', role: 'User' },
];

const advancedColumns: TableColumn[] = [
  { key: 'id', label: 'ID', sortable: true, width: '80px', align: 'center' },
  { key: 'avatar', label: 'Avatar', align: 'center', width: '80px' },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'status', label: 'Status', sortable: true, align: 'center' },
  { key: 'actions', label: 'Actions', align: 'center', width: '120px' },
];

const advancedData: TableRow[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@company.com',
    status: 'active',
    avatar: 'AJ',
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob@company.com',
    status: 'inactive',
    avatar: 'BW',
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol@company.com',
    status: 'active',
    avatar: 'CD',
  },
  {
    id: 4,
    name: 'Daniel Martinez',
    email: 'daniel@company.com',
    status: 'pending',
    avatar: 'DM',
  },
  {
    id: 5,
    name: 'Emma Garcia',
    email: 'emma@company.com',
    status: 'active',
    avatar: 'EG',
  },
];

const contactColumns: TableColumn[] = [
  { key: 'name', label: 'Contact', sortable: true },
  { key: 'company', label: 'Company', sortable: true },
  { key: 'phone', label: 'Phone', align: 'center' },
  { key: 'email', label: 'Email' },
  { key: 'website', label: 'Website', align: 'center' },
];

const contactData: TableRow[] = [
  {
    name: 'John Smith',
    company: 'Tech Corp',
    phone: '+1 (555) 123-4567',
    email: 'john@techcorp.com',
    website: 'techcorp.com',
  },
  {
    name: 'Sarah Johnson',
    company: 'Design Studio',
    phone: '+1 (555) 987-6543',
    email: 'sarah@designstudio.com',
    website: 'designstudio.com',
  },
  {
    name: 'Mike Davis',
    company: 'StartupXYZ',
    phone: '+1 (555) 456-7890',
    email: 'mike@startupxyz.com',
    website: 'startupxyz.com',
  },
];

const selectedRows = ref<TableRow[]>([]);
const sortBy = ref('');
const sortOrder = ref<'asc' | 'desc'>('asc');
const loading = ref(false);

const handleRowClick = (row: TableRow, index: number) => {
  console.log('Row clicked:', row, 'at index:', index);
};

const handleRowSelect = (row: TableRow, selected: boolean) => {
  console.log('Row selection changed:', row, 'selected:', selected);
};

const handleSelectAll = (selected: boolean) => {
  console.log('Select all changed:', selected);
};

const handleSort = (column: string, order: 'asc' | 'desc') => {
  console.log('Sort changed:', column, order);
};

const simulateLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const getStatusBadge = (status: string) => {
  const classes = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

  switch (status) {
    case 'active':
      return h('span', { class: `${classes} bg-green-100 text-green-800` }, [
        h(CheckCircle, { class: 'w-3 h-3 mr-1' }),
        'Active',
      ]);
    case 'inactive':
      return h('span', { class: `${classes} bg-red-100 text-red-800` }, [
        h(XCircle, { class: 'w-3 h-3 mr-1' }),
        'Inactive',
      ]);
    case 'pending':
      return h('span', { class: `${classes} bg-yellow-100 text-yellow-800` }, [
        h(XCircle, { class: 'w-3 h-3 mr-1' }),
        'Pending',
      ]);
    default:
      return status;
  }
};

const getAvatar = (initials: string) => {
  return h(
    'div',
    {
      class:
        'w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-medium',
    },
    initials
  );
};

const getActionButtons = (row: TableRow) => {
  return h('div', { class: 'flex items-center justify-center gap-1' }, [
    h(
      'button',
      {
        class: 'p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors',
        title: 'View',
      },
      [h(Eye, { class: 'w-4 h-4' })]
    ),
    h(
      'button',
      {
        class: 'p-1 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded transition-colors',
        title: 'Edit',
      },
      [h(Edit, { class: 'w-4 h-4' })]
    ),
    h(
      'button',
      {
        class: 'p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors',
        title: 'Delete',
      },
      [h(Trash2, { class: 'w-4 h-4' })]
    ),
  ]);
};

const getContactIcon = (type: string, value: string) => {
  switch (type) {
    case 'phone':
      return h('div', { class: 'flex items-center justify-center gap-2' }, [
        h(Phone, { class: 'w-4 h-4 text-gray-400' }),
        h('span', {}, value),
      ]);
    case 'website':
      return h(
        'a',
        {
          href: `https://${value}`,
          target: '_blank',
          class:
            'inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors',
        },
        [h(Globe, { class: 'w-4 h-4' }), h('span', {}, value)]
      );
    default:
      return value;
  }
};

// Enhanced columns with custom render functions
advancedColumns.forEach(column => {
  if (column.key === 'avatar') {
    column.render = value => getAvatar(value);
  } else if (column.key === 'status') {
    column.render = value => getStatusBadge(value);
  } else if (column.key === 'actions') {
    column.render = (value, row) => getActionButtons(row);
  }
});

contactColumns.forEach(column => {
  if (column.key === 'phone') {
    column.render = value => getContactIcon('phone', value);
  } else if (column.key === 'website') {
    column.render = value => getContactIcon('website', value);
  } else if (column.key === 'email') {
    column.render = value =>
      h(
        'a',
        {
          href: `mailto:${value}`,
          class: 'text-blue-600 hover:text-blue-800 transition-colors',
        },
        value
      );
  }
});
</script>

<template>
  <div class="max-w-6xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Table Component</h1>
      <p class="text-gray-600">
        A flexible table component with sorting, selection, custom rendering, and various styling
        options.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic Table -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic Table</h2>
        <ui-table
          :columns="basicColumns"
          :data="basicData"
          @row-click="handleRowClick"
          @sort="handleSort"
        />
      </section>

      <!-- Table with Selection -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Table with Row Selection</h2>
        <div class="mb-4">
          <p class="text-sm text-gray-600">
            Selected rows: {{ selectedRows.length }}
            <span v-if="selectedRows.length > 0" class="ml-2">
              ({{ selectedRows.map(r => r.name).join(', ') }})
            </span>
          </p>
        </div>
        <ui-table
          v-model:selected-rows="selectedRows"
          :columns="basicColumns"
          :data="basicData"
          selectable
          @row-select="handleRowSelect"
          @select-all="handleSelectAll"
        />
      </section>

      <!-- Advanced Table with Custom Rendering -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Advanced Table with Custom Cells</h2>
        <ui-table
          :columns="advancedColumns"
          :data="advancedData"
          hoverable
          @row-click="handleRowClick"
        />
      </section>

      <!-- Table Variants -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Table Variants</h2>

        <div class="space-y-8">
          <!-- Striped Table -->
          <div>
            <h3 class="text-md font-medium text-gray-800 mb-4">Striped Table</h3>
            <ui-table
              :columns="basicColumns"
              :data="basicData"
              striped
              @row-click="handleRowClick"
            />
          </div>

          <!-- Compact Table -->
          <div>
            <h3 class="text-md font-medium text-gray-800 mb-4">Compact Table</h3>
            <ui-table
              :columns="basicColumns"
              :data="basicData"
              compact
              @row-click="handleRowClick"
            />
          </div>

          <!-- Borderless Table -->
          <div>
            <h3 class="text-md font-medium text-gray-800 mb-4">Borderless Table</h3>
            <ui-table
              :columns="basicColumns"
              :data="basicData"
              :bordered="false"
              @row-click="handleRowClick"
            />
          </div>
        </div>
      </section>

      <!-- Table States -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Table States</h2>

        <div class="space-y-8">
          <!-- Loading State -->
          <div>
            <h3 class="text-md font-medium text-gray-800 mb-4">Loading State</h3>
            <div class="mb-4">
              <ui-button variant="primary" @click="simulateLoading"> Simulate Loading </ui-button>
            </div>
            <ui-table
              :columns="basicColumns"
              :data="basicData"
              :loading="loading"
              loading-text="Loading data..."
            />
          </div>

          <!-- Empty State -->
          <div>
            <h3 class="text-md font-medium text-gray-800 mb-4">Empty State</h3>
            <ui-table :columns="basicColumns" :data="[]" no-data-text="No users found" />
          </div>
        </div>
      </section>

      <!-- Contact Table Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Contact Directory Example</h2>
        <p class="text-gray-600 mb-4">
          Real-world example with custom cell rendering for different data types.
        </p>
        <ui-table
          :columns="contactColumns"
          :data="contactData"
          hoverable
          @row-click="handleRowClick"
        />
      </section>

      <!-- Sorting Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Sorting Control</h2>
        <div class="mb-4 flex items-center gap-4 text-sm">
          <div>
            <span class="font-medium">Sort by:</span>
            <span class="ml-1 text-purple-600">{{ sortBy || 'None' }}</span>
          </div>
          <div>
            <span class="font-medium">Order:</span>
            <span class="ml-1 text-purple-600 capitalize">{{ sortOrder }}</span>
          </div>
        </div>
        <ui-table
          v-model:sort-by="sortBy"
          v-model:sort-order="sortOrder"
          :columns="basicColumns"
          :data="basicData"
          @sort="handleSort"
        />
      </section>
    </div>
  </div>
</template>
