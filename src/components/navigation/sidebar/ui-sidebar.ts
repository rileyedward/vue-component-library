import type { LucideIcon } from 'lucide-vue-next';

export interface SidebarItem {
  label: string;
  route?: string;
  icon?: LucideIcon;
  disabled?: boolean;
  children?: SidebarItem[];
}

export interface UiSidebarProps {
  items: SidebarItem[];
  title?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
  activeRoute?: string;
  width?: string;
}

export interface UiSidebarEmits {
  (event: 'navigate', item: SidebarItem): void;
  (event: 'update:activeRoute', value: string): void;
}
