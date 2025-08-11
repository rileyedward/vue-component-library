import {
  Home,
  Layout,
  Circle,
  Type,
  CheckSquare,
  Calendar,
  Bell,
  AlertTriangle,
  MessageSquare,
  CreditCard,
  Search,
  User,
} from 'lucide-vue-next';
import type { SidebarItem } from '@/components/navigation/sidebar/ui-sidebar';
import type { LucideIcon } from 'lucide-vue-next';

export interface MainLayoutConfig {
  title: string;
  sidebarItems: SidebarItem[];
  navbarRightItems: NavbarRightItem[];
}

export interface NavbarRightItem {
  icon: LucideIcon;
  ariaLabel: string;
  onClick?: () => void;
}

const config: MainLayoutConfig = {
  title: 'Component Library',
  sidebarItems: [
    { label: 'Home', route: '/', icon: Home },
    {
      label: 'Forms',
      icon: CheckSquare,
      children: [
        { label: 'Button', route: '/button', icon: Circle },
        { label: 'Input', route: '/input', icon: Type },
        { label: 'Textarea', route: '/textarea', icon: Type },
        { label: 'Select', route: '/select', icon: CheckSquare },
        { label: 'Checkbox', route: '/checkbox', icon: CheckSquare },
        { label: 'Radio', route: '/radio', icon: CheckSquare },
        { label: 'MultiSelect', route: '/multiselect', icon: CheckSquare },
        { label: 'DatePicker', route: '/datepicker', icon: Calendar },
      ],
    },
    {
      label: 'Navigation',
      icon: Layout,
      children: [
        { label: 'Breadcrumb', route: '/breadcrumb', icon: Layout },
        { label: 'Dropdown', route: '/dropdown', icon: Layout },
        { label: 'Menu', route: '/menu', icon: Layout },
      ],
    },
    {
      label: 'Feedback',
      icon: Bell,
      children: [
        { label: 'Alert', route: '/alert', icon: AlertTriangle },
        { label: 'Toast', route: '/toast', icon: Bell },
        { label: 'Modal', route: '/modal', icon: MessageSquare },
      ],
    },
    {
      label: 'Layout',
      icon: Layout,
      children: [
        { label: 'Card', route: '/card', icon: CreditCard },
        { label: 'Container', route: '/container', icon: Layout },
        { label: 'Drawer', route: '/drawer', icon: Layout },
      ],
    },
  ],
  navbarRightItems: [
    {
      icon: Search,
      ariaLabel: 'Search',
    },
    {
      icon: User,
      ariaLabel: 'User profile',
    },
  ],
};

export default config;
