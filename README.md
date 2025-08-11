# Vue Component Library

A fully thought-out Vue component library.

## Overview

### What is Vue Component Library?

Vue Component Library is a curated set of 28+ Vue 3 components built with TypeScript and Tailwind CSS. It provides everything you need to build beautiful, consistent user interfaces - from basic form inputs and buttons to advanced data tables and interactive charts. Each component follows modern design patterns and includes comprehensive documentation and examples.

### Why Use Vue Component Library?

Building UI components from scratch is time-consuming and often leads to inconsistencies across your application. This library provides battle-tested, accessible components that you can drop into any Vue 3 project. All components are built with TypeScript for excellent developer experience and include proper event handling, customizable styling, and comprehensive prop interfaces.

### Component Categories

- **Forms (13 components)**: Button, Input, Textarea, Select, Checkbox, Radio, MultiSelect, DatePicker, Slider, Range, Counter, File Upload, Switch
- **Navigation (5 components)**: Breadcrumb, Dropdown, Dropdown Menu, Menu, Tab
- **Feedback (3 components)**: Alert, Toast, Modal
- **Layout (3 components)**: Card, Container, Drawer
- **Data Display (4 components)**: Accordion, Chart, Table, Tooltip

## Getting Started

### Prerequisites

Ensure you have the following prerequisites installed on your system. You can verify each installation by running the provided commands in your terminal.

1. **Node.js** and **npm** are required for the application. Check if they're installed by running:

   ```bash
   node --version
   npm --version
   ```

2. **Vue 3** project setup. This library is designed for Vue 3 applications using the Composition API.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd vue-component-library
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:5173` to explore all components and their examples.

### Development Commands

- **Development server**: Start the component showcase
  ```bash
  npm run dev
  ```

- **Build for production**: Create optimized build
  ```bash
  npm run build
  ```

- **Type checking**: Run TypeScript checks
  ```bash
  npm run type-check
  ```

- **Linting**: Check code quality with ESLint
  ```bash
  npm run lint
  ```

- **Formatting**: Format code with Prettier
  ```bash
  npm run format
  ```

## Usage

Each component can be copied directly into your Vue 3 project. Components are organized by category in the `src/components/` directory. Each component includes:

- TypeScript interface definitions (`.ts` file)
- Vue component implementation (`.vue` file)
- Comprehensive showcase page with examples

### Example Usage

```vue
<script setup>
import UiButton from './components/forms/button/ui-button.vue'
import UiTable from './components/layout/table/ui-table.vue'
</script>

<template>
  <ui-button variant="primary" @click="handleClick">
    Click me
  </ui-button>
  
  <ui-table 
    :columns="tableColumns" 
    :data="tableData" 
    selectable 
    @row-click="handleRowClick"
  />
</template>
```

## Built With

- **Vue 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript for better developer experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **Lucide Vue Next** - Beautiful, customizable icons
- **Chart.js** - Powerful charting library for data visualization
- **ESLint & Prettier** - Code quality and formatting tools