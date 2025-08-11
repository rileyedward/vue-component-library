export interface UiDrawerProps {
  show?: boolean;
  width?: string;
  title?: string;
  description?: string;
  closeable?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  persistent?: boolean;
}

export interface UiDrawerEmits {
  close: [];
  open: [];
  'update:show': [show: boolean];
}
