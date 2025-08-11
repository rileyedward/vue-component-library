<script setup lang="ts">
import './app.css';
import SidebarLayout from '@/layouts/sidebar/sidebar-layout.vue';
</script>

<template>
  <sidebar-layout>
    <router-view />
  </sidebar-layout>
</template>
