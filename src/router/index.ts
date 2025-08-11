import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/home-page.vue';
import ButtonPage from '@/pages/button-page.vue';
import InputPage from '@/pages/input-page.vue';
import TextareaPage from '@/pages/textarea-page.vue';
import SelectPage from '@/pages/select-page.vue';
import CheckboxPage from '@/pages/checkbox-page.vue';
import RadioPage from '@/pages/radio-page.vue';
import MultiSelectPage from '@/pages/multiselect-page.vue';
import DatePickerPage from '@/pages/datepicker-page.vue';
import AlertPage from '@/pages/alert-page.vue';
import ToastPage from '@/pages/toast-page.vue';
import ModalPage from '@/pages/modal-page.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonPage,
    },
    {
      path: '/input',
      name: 'input',
      component: InputPage,
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: TextareaPage,
    },
    {
      path: '/select',
      name: 'select',
      component: SelectPage,
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: CheckboxPage,
    },
    {
      path: '/radio',
      name: 'radio',
      component: RadioPage,
    },
    {
      path: '/multiselect',
      name: 'multiselect',
      component: MultiSelectPage,
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: DatePickerPage,
    },
    {
      path: '/alert',
      name: 'alert',
      component: AlertPage,
    },
    {
      path: '/toast',
      name: 'toast',
      component: ToastPage,
    },
    {
      path: '/modal',
      name: 'modal',
      component: ModalPage,
    },
  ],
});

export default router;
