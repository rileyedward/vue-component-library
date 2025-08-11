<script setup lang="ts">
import { ref } from 'vue';
import UiFileUpload from '@/components/forms/file-upload/ui-file-upload.vue';

const singleFile = ref<File | null>(null);
const multipleFiles = ref<File[]>([]);
const imageFiles = ref<File[]>([]);
const pdfFiles = ref<File | null>(null);
const errorState = ref<string>('');

const handleFileChange = (files: File | File[]) => {
  console.log('Files changed:', files);
};

const handleFileError = (error: string) => {
  console.error('File error:', error);
  errorState.value = error;
};

const handleFileAdded = (file: File) => {
  console.log('File added:', file.name);
  // Clear any previous error
  errorState.value = '';
};

const handleFileRemoved = (file: File) => {
  console.log('File removed:', file.name);
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">File Upload Component</h1>
      <p class="text-gray-600">
        A versatile file upload component with drag and drop support, file previews, and validation.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic File Upload -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic File Upload</h2>
        <div class="max-w-md">
          <UiFileUpload
            v-model="singleFile"
            label="Upload a file"
            helper-text="Max file size: 5MB"
            @change="handleFileChange"
            @file-added="handleFileAdded"
            @file-removed="handleFileRemoved"
            @error="handleFileError"
          />
        </div>
      </section>

      <!-- Multiple File Upload -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Multiple File Upload</h2>
        <div class="max-w-md">
          <UiFileUpload
            v-model="multipleFiles"
            multiple
            label="Upload multiple files"
            helper-text="Max 5 files, 5MB each"
            :max-files="5"
            @change="handleFileChange"
            @file-added="handleFileAdded"
            @file-removed="handleFileRemoved"
            @error="handleFileError"
          />
        </div>
      </section>

      <!-- Image Upload -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Image Upload</h2>
        <div class="max-w-md">
          <UiFileUpload
            v-model="imageFiles"
            multiple
            accept="image/*"
            label="Upload images"
            helper-text="Accepted formats: JPG, PNG, GIF, etc."
            button-text="Select Images"
            @change="handleFileChange"
            @file-added="handleFileAdded"
            @file-removed="handleFileRemoved"
            @error="handleFileError"
          />
        </div>
      </section>

      <!-- PDF Upload -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">PDF Upload</h2>
        <div class="max-w-md">
          <UiFileUpload
            v-model="pdfFiles"
            accept=".pdf,application/pdf"
            label="Upload PDF"
            helper-text="Only PDF files are accepted"
            button-text="Select PDF"
            @change="handleFileChange"
            @file-added="handleFileAdded"
            @file-removed="handleFileRemoved"
            @error="handleFileError"
          />
        </div>
      </section>

      <!-- With Error State -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">With Error State</h2>
        <div class="max-w-md">
          <UiFileUpload
            v-model="singleFile"
            label="Upload a file"
            :error="errorState"
            :max-size="1024 * 1024"
            helper-text="Max file size: 1MB (1024 * 1024 bytes) - try uploading a larger file to see error"
            @change="handleFileChange"
            @file-added="handleFileAdded"
            @file-removed="handleFileRemoved"
            @error="handleFileError"
          />
        </div>
      </section>

      <!-- Disabled State -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled State</h2>
        <div class="max-w-md">
          <UiFileUpload
            v-model="singleFile"
            disabled
            label="Upload a file (disabled)"
            helper-text="This upload field is disabled"
          />
        </div>
      </section>
    </div>
  </div>
</template>
