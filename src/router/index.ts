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
import SliderPage from '@/pages/slider-page.vue';
import RangePage from '@/pages/range-page.vue';
import CounterPage from '@/pages/counter-page.vue';
import FileUploadPage from '@/pages/file-upload-page.vue';
import SwitchPage from '@/pages/switch-page.vue';
import AlertPage from '@/pages/alert-page.vue';
import ToastPage from '@/pages/toast-page.vue';
import ModalPage from '@/pages/modal-page.vue';
import CardPage from '@/pages/card-page.vue';
import ContainerPage from '@/pages/container-page.vue';
import BreadcrumbPage from '@/pages/breadcrumb-page.vue';
import DropdownPage from '@/pages/dropdown-page.vue';
import MenuPage from '@/pages/menu-page.vue';
import DrawerPage from '@/pages/drawer-page.vue';

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
      path: '/slider',
      name: 'slider',
      component: SliderPage,
    },
    {
      path: '/range',
      name: 'range',
      component: RangePage,
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterPage,
    },
    {
      path: '/file-upload',
      name: 'file-upload',
      component: FileUploadPage,
    },
    {
      path: '/switch',
      name: 'switch',
      component: SwitchPage,
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
    {
      path: '/card',
      name: 'card',
      component: CardPage,
    },
    {
      path: '/container',
      name: 'container',
      component: ContainerPage,
    },
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: BreadcrumbPage,
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: DropdownPage,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuPage,
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: DrawerPage,
    },
  ],
});

export default router;
